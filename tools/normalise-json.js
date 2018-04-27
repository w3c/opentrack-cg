#!/usr/bin/env node

const FS = require('fs'),
  PATH = require('path');

const BLACKLIST = /^\.(git|\.)?$/i,
  WHITELIST = /[^\.]+\.json(ld)?$/i;

const fail = (message) => {
  console.error(message);
  process.exitCode = 1;
};

const processSubDir = (path) => {
  FS.readdir(path, (err, files) => {
    if (err)
      fail(`Something went wrong listing directory "${path}": ${err}`);
    else {
      const cwd = path + PATH.sep;
      for (let f of files)
        if (!BLACKLIST.test(f)) {
          FS.lstat(cwd + f, (err, stats) => {
            if (err)
              fail(`Something went wrong examining file "${cwd + f}": ${err}`);
            else if (stats.isDirectory())
              processSubDir(cwd + f);
            else if (WHITELIST.test(f))
              FS.readFile(cwd + f, {encoding: 'utf-8'}, (err, data) => {
                if (err)
                  fail(`Something went wrong reading JSON file "${cwd + f}": ${err}`);
                else {
                  const reformatted = JSON.stringify(JSON.parse(data), null, 4) + '\n';
                  FS.writeFile(cwd + f, reformatted, (err) => {
                    if (err)
                      fail(`Something went wrong writing JSON file "${cwd + f}": ${err}`);
                    else if (reformatted !== data)
                      fail(`JSON file "${cwd + f}" had incorrect formatting; it was reformatted`);
                    else
                      console.log(cwd + f + ' ✓');
                  });
                }
              });
          });
        }
    }
  });
};

console.log('Processing current directory…	');
processSubDir('.');
