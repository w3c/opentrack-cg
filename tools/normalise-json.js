#!/usr/bin/env node

const FS = require('fs'),
  PATH = require('path');

const BLACKLIST = /^\.(git|\.)?$/i,
  WHITELIST = /[^\.]+\.json(ld)?$/i;

const processSubDir = (path) => {
  FS.readdir(path, (err, files) => {
    if (err)
      console.error(`Something went wrong listing directory "${path}": ${err}`);
    else {
      const cwd = path + PATH.sep;
      for (let f of files)
        if (!BLACKLIST.test(f)) {
          FS.lstat(cwd + f, (err, stats) => {
            if (err)
              console.error(`Something went wrong examining file "${cwd + f}": ${err}`);
            else if (stats.isDirectory())
              processSubDir(cwd + f);
            else if (WHITELIST.test(f))
              FS.readFile(cwd + f, (err, data) => {
                if (err)
                  console.error(`Something went wrong reading JSON file "${cwd + f}": ${err}`);
                else
                  FS.writeFile(cwd + f, JSON.stringify(JSON.parse(data), null, 4) + '\n', (err) => {
                    if (err)
                      console.error(`Something went wrong writing JSON file "${cwd + f}": ${err}`);
                    else
                      console.log(cwd + f + ' ✓');
                  });
              });
          });
        }
    }
  });
};

console.log('Processing current directory…	');
processSubDir('.');
