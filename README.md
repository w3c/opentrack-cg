[![Build Status](https://travis-ci.org/w3c/opentrack-cg.svg?branch=master)](https://travis-ci.org/w3c/opentrack-cg)

# OpenTrack – Open Tools for Athletics

Quick links:
* [Athletics Conceptual Model](https://w3c.github.io/opentrack-cg/spec/model/)
* [Competition Vocabulary based on Schema.org](https://w3c.github.io/opentrack-cg/spec/model/)
* Tools: [Taxonomies and real implementation examples](http://purl.org/codes)
* [Community Group](https://www.w3.org/community/opentrack/)
* [This repository](https://github.com/w3c/opentrack-cg)
* [Open Issues](https://github.com/w3c/opentrack-cg/issues)

## About OpenTrack

This is the repository for the [W3C OpenTrack Community Group](https://www.w3.org/community/opentrack/) to develop and document specifications and code related to what we call **Open Athletics** —formerly *OpenTrack*, but changed to make the scope broader—, a set of tools to increase interoperability among systems managing information on athletics and sports in general. Open Athletics includes schemes and vocabularies to describe sports, as well as open source software that helps managing that kind of information.

Through OpenTrack and Open Athletics, entities around the world (sport clubs, federations, private event organizers, etc.) will be able to open the data contributing towards open data in sports. This will bring new business opportunities to third parties (developers, public bodies, private companies, citizens, academia).

In order to maximize the impact and adoption of the final proposal, this initiative is supported by [European Athletics](http://www.european-athletics.org) and other [relevant institutions](https://www.w3.org/community/opentrack/participants) of the world of *Data Management* and *Athletics*.

Read the [Charter](https://w3c.github.io/opentrack-cg/charter.html) for more information about this group.

## What tools?

The main component of OpenTrack is a set of vocabularies and taxonomies that will help publishers to model and expose information regarding athletics (events, athletes, facilities, results, rankings, and others).

Participants in this group will contribute with code recipes, libraries, and examples about the use of athletics information.

Currently, we are working on what we call it, **Open Athletics** models, vocabularies, and tools: 

* A **[Conceptual Data Model for Athletics](https://w3c.github.io/opentrack-cg/spec/model/)** to define Athletics competitions, events, management and participation in an abstract way; and
* a **[Sports Competition Data Model and Vocabulary](https://w3c.github.io/opentrack-cg/spec/competition/)** based on Schema.org. It contains examples of implementation for competitions, participation, athletes, organizations, etc.
* some **[code examples](http://purl.org/athletics/codes)** to illustrate how to use the former vocabulary to describe entities (i.e., athletes, clubs, and federations), and competitions (i.e., disciplines, categories, events) and some useful codes and taxonomies for countries, in-competition features, etc.

## Formats and standards

All documents will be written in English and encoded in UTF-8.

Schemas and vocabularies will be aligned with the existing W3C standards, in concrete with the Data on the Web specifications. Although they will be described as abstract vocabularies, they will be also modeled in RDF.


## Can I use it?

Of course you can! Unless the piece of software or document listed in this repository has specified an explicit license, everything is under the [W3C Software and Document License](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document). This means that, by default, you have permission to copy, modify, and distribute OpenTrack works, with or without modification, for any purpose and without fee or royalty.

## How can I participate?

Everyone —either W3C Member or not— is invited to [join the W3C OpenTrack CG](https://www.w3.org/community/opentrack/). Just click on the 'join' button, and register with your W3C account (in case you don't have, please [request one](https://www.w3.org/accounts/request). Once you are a group member, you will be subscribed to the [main mailing list](https://lists.w3.org/Archives/Public/public-opentrack/).

If you have never used Github, please have a look at [this guide on how to use Github at W3C](https://www.w3.org/2006/tools/wiki/Github).

## References

This work is based on previous works on sports data modeling, such as:

* IOC [ODF](http://odf.olympictech.org/2016-Rio/rio_2016_OG.htm)
* IPTC [SportsML](https://iptc.org/standards/sportsml-g2/). Vocabularies for sharing content (e.g., news) about sports in general. There are some specific vocabularies for concrete sports. Athletics is missing.
* BBC [Sport Ontology](http://www.bbc.co.uk/ontologies/sport#). Lightweight ontology for publishing data about competitive sports events.
