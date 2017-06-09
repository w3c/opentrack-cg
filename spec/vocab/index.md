# OpenTrack Vocabulary [Working Draft]

**Latest published draft:**
  * [https://w3c.github.io/opentrack-cg/spec/vocab](https://w3c.github.io/opentrack-cg/spec/vocab)

**Latest editor's draft:**
  * [https://github.com/w3c/opentrack-cg/blob/master/spec/vocab/index.md](https://github.com/w3c/opentrack-cg/blob/master/spec/vocab/index.md)

**Participate:**
  * [https://www.w3.org/community/opentrack/](https://www.w3.org/community/opentrack/)


## Content
* [Introduction](#introduction)
* [Classes and Properties](#classes-and-properties)
* [Schemas and DataTypes](#schemas-and-dataTypes)

## Introduction

Opentrack model contributes to the Semantic Web, identifying, defining and exposing data on the Web. Opentrack vocabulary defines the main concepts and relations about Athletics competitions and competitors, enabling a common representation of information in this realm. Data should be available in a standard format, reachable and manageable by Semantic Web tools. 

* Prefix: `ath`
* Namespace: `http://purl.org/athletics/`

* Concept of Athletics: [http://dbpedia.org/resource/Sport_of_athletics](http://dbpedia.org/resource/Sport_of_athletics)

### Representation in JSON-LD

The Opentrack model is expressed under the [RDF](https://www.w3.org/RDF/) paradigm (a graph-oriented representation), so there is more than one format to represent (serialize) the graph of information: RDF/XML, turtle, RDFa, etc. Examples will be represented in [JSON-LD](https://www.w3.org/TR/json-ld/), a JSON-based syntax easy to adopt.

In order to ease the adoption of this set of technologies, this document includes several recipes to help developers publish and reuse Athletics information through these mechanisms. 

#### Terminology

* **JSON-LD**. JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale. JSON-LD is an ideal data format for programming environments, REST Web services, and unstructured databases such as CouchDB and MongoDB.
* **JSON-LD Context**. In JSON-LD, a context is used to map terms, i.e., properties with associated values in an JSON document, to URLs. A term is a short word that expands to a URL. Terms may be defined as any valid JSON string other than a JSON-LD keyword.
* **Linked Data**. Linked Data is a way to create a network of standards-based machine interpretable data across different documents and Web sites. It allows an application to start at one piece of Linked Data, and follow embedded links to other pieces of Linked Data that are hosted on different sites across the Web.
* **IRI (Internationalized Resource Identifier)**. An IRI is something like a unique web address (http://example.org/resource001) that serves for identifying resources.

See [JSON-LD Best Practices](https://json-ld.org/spec/latest/json-ld-api-best-practices/#terminology) for more information.

#### Filename extension, MIME type and encoding

* Recommended document extension: `.jsonld`
* MIME Type: `application/ld+json`
* Encoding: `UTF-8`


#### Basic Concepts

To illustrate the basic concepts of this Opentrack JSON-LD representation we will use a simple example with the description of an athlete:


```
{
    "@context" : "http://w3c.github.io/opentrack-cg/contexts/opentrack.jsonld",
    "@id" : "http://w3c.github.io/opentrack-cg/examples/athlete/001Farah.jsonld",
    "@type" : "Athlete",
    "name" : "Mohamed Muktar Jama Farah",
    "familyName" : "Farah",
    "givenName" : "Mohamed Muktar Jama",
    "alternateName" : "Mo Farah",               
    "url" : "http://www.mofarah.com",
    "gender" : "Male" ,
    "birthDate" : "1983-04-23",
    "image" : "https://example.com/260px-MoPodiumRio2016.png",
    "club" : "http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld"
} 
```

There are there keywords that should be always included in our documents: ```@context```, ```@type``` and ```@id```. The rest of the **properties are optional**. 

In case a property value is unknown, the pair key:value will be omitted. 

##### @context

RDF resources (concepts, classes, properties, etc.) are identified by IRIs. For instance, the property `name` used in the example above is identified by `http://schema.org/name`. JSON-LD contexts define keys used within the document can have unambigious meaning, as they bind to the IRIs which describe their meaning.

By specifying 
```
    "@context" : "http://w3c.github.io/opentrack-cg/contexts/opentrack.jsonld"
```
we indicate the context of the document, that is defined in [the linked document](http://w3c.github.io/opentrack-cg/contexts/opentrack.jsonld). So we can use the keys of the context as a simplification for the representation. 

##### @type

```@type``` indicates the class of the resource being described. In this example, the resource is an `Athlete` (the context maps `Athlete` to the IRI `http://purl.org/athletics#Athlete`, but we don't care about this now).

* We should include always the type to the object we are describing. 
* In case the resource would have more than a type, several types may be specified within an array:

```
    "@type" : [ "Athlete", "Coach" ]
```

##### @id

```@id``` is used to uniquely identify entities or resources through IRIs. 

When dereferencing an entity related via a URL, the location should provide a representation of that entity. 

```
    "@id" : "http://w3c.github.io/opentrack-cg/examples/athlete/001Farah.jsonld"
} 
```

This example describes an `Athlete` that is identified as [http://w3c.github.io/opentrack-cg/examples/athlete/001Farah.jsonld](http://w3c.github.io/opentrack-cg/examples/athlete/001Farah.jsonld"). The web address will provide information about the entity (the same that is being described in the example). Having these identifiers we will be able to refer this entity from other entity descriptions or documents.

Using this mechanism, we can enrich descriptions just linking our descriptions with other IRIs that already identify resources. For instance, the athlete is affiliated to a club:

```
    "club" : "http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld"
```

That club (identified by [http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld](http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld)) is described in the same way.

There may be exceptions of JSON-LD objects that **do not** have `@id`s associated. We should avoid this case unless we are sure the object defined is useful only in the context of the current description (i.e., no reusable in future descriptions). 


##### Property values

Properties that describe resources may have values of different nature:

###### Literals

Some properties only may have **Literals** as value:   

Texts:
```
    "alternateName" : "Mo Farah"
```

Dates:
```
    "birthDate" : "1983-04-23",
```

Integers:
```
    "age" : 25
```

###### Predefined Values (enumerations)

Some properties may have **Enumerations** as value:   

For instance, `gender` should only take one possible value (either `Male` or `Female`).
```
    "gender" : "Male"
```

In this case, the potential values are expressed in the context as aliases, so we can use `Male` instead of `http://schema.org/Male`.


###### Objects

As shown above, a resource identified by an IRI may be used as value of a property. 

In case [the resource](http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld) is already identified (and described) we can link it directly:
```
    "club" : "http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld"
```

Otherwise we can describe that resource nested in the main object:
```
    "club" : {
        "@type": "Club",
        "name": "Newham & Essex Beagles",
        "alternateName": "BeaglesAC",
        "url": "http://www.newhamandessexbeagles.co.uk/",
        "logo": "http://example.org/logo.png",
        "telephone": "(+44) 020 7511 6463",
        "faxNumber": "(+44) 020 7511 4477",
        "address": {
            "name": "Terence McMillan Stadium - Newham Leisure Centre",
            "streetAddress": "281 Prince Regent Lane",
            "addressLocality": "London",
            "postalCode": "E13 8SD",
            "addressCountry": "country:GBR"
        }
    }
```

See in the previous example that we can include descriptions of other entities nested (i.e., postal address).

###### Arrays

Most of the properties may be repeated to describe the same resource. For instance, the athlete may be affiliated to two clubs:

```
    "club" : "http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld",
    "club" : "http://w3c.github.io/opentrack-cg/examples/club/NOP.jsonld"
```
Or: 
```
    "club" : [ 
        "http://w3c.github.io/opentrack-cg/examples/club/NEB.jsonld",
        "http://w3c.github.io/opentrack-cg/examples/club/NOP.jsonld"
    ]
```

#### Multilingual Descriptions


String properties may include information about its language, so we can include several representations of the same information in different languages. 

The property will include information about the textual information using a complex object with two keys: `@value` and `@language`. `@value` contains the string, and `@language` the tag identifying the language (using [Lenguage Tags](https://tools.ietf.org/html/bcp47)).


```
{
    "@type" : "Place",
    "name" : {
        "@value": "Berlin Olympic Stadium",
        "@language": "en"
    },
    "name": {
        "@value": "Olympiastadion Berlin",
        "@language": "de"
    }
}
```

#### Typed Objects

All JSON-LD objects should have a `@type` explicitly indicating the class of the resource. The Opentrack vocabulary includes several classes that can be used, but also other external vocabularies may be used. 

Classes may be described hierarchically to express differences in the model. For instance, Opentrack defines different types of competitions, with [Competition](#competition) as the core entity that defines a generic competitive sports event. [Competition](#competition) has several subclasses: [MultiStageCompetition](#multistagecompetition), [DivisionalCompetition](#divisionalcompetition), [MultiRoundCompetition](#multiroundcompetition), [MultidisciplineCompetition](#multidisciplinecompetition) and [UnitCompetition](#unitcompetition). This means that instances of these subclasses will be also considered a [Competition](#competition).

* In case the author does not know the nature of the competition, by default they should use the most generic class (i.e., [Competition](#competition)).
* A competition may categorized with more than a type. For instance 2016 Olympic Games is a [MultidisciplineCompetition](#multidisciplinecompetition) (100m, 200m, Throws, basketball, tennis, etc.) and a [DivisionalCompetition](#divisionalcompetition) (divisions are disciplines and categories).


---------------

## Classes and Properties

### Athlete

* class: `ath:Athlete`
* subClassOf: `schema:Person`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a person as an athlete. | Text |
| `name` | `schema:name` | Athlete's full name. | Text |
| `familyName` | `schema:familyName` | Athlete's family name; surname. | Text |
| `givenName` | `schema:givenName` |Athlete's given name; first name. | Text |
| `prevFamilyName` | `ath:prevFamilyName` | Athlete's former family name; surname. | Text |
| `prevGivenName` | `ath:prevGivenName` | Athlete's former given name; first name. | Text |
| `alternateName` | `schema:alternateName` | An alias to name an athlete. | Text |
| `address` | `schema:address` | Main residence address of an athlete. | [PostalAddress](#postaladdress) or Text |
| `image` | `schema:image` | Picture of an athlete. | URL |
| `email` | `schema:email` | Email address. | Text |
| `url` | `schema:url` | Webpage URL about an athlete. | URL |
| `award` | `schema:award` |  Award or prize given to an athlete. | Text |
| `gender` | `schema:gender` | Athlete's gender. | [GenderType](#gendertype) |
| `height` | `schema:height` | Athlete's height. | [Distance](#distance) |
| `weight` | `schema:weight` | Athlete's weight. | [Mass](#mass) |
| `nationality` | `schema:nationality` | Athlete's nationality. | [Country](#country) |
| `birthDate` | `schema:birthDate` | Date of birth. | [Date](#date) |
| `deathDate` | `schema:deathDate` | Date of death. | [Date](#date) |
| `birthPlace` | `schema:birthPlace` | Locality and country of birth (e.g. "Tallinn, Estonia") | [Place] |
| `memberOf` | `schema:memberOf` |  Organization which an athlete is attached to. | [Organization](#organization) |
| `coach` | `schema:coach` | Athlete's main coach. | [Person](#person) |
| `sponsor` | `schema:sponsor` | Athlete's sponsor. | [Person](#person) or [Organization](#organizations) |
| `club` | `schema:affiliation` | Club which an athlete is affiliated to. | [SportsClub](#sportsclub) |
| `team` | `schema:memberOf` | Team which an athlete is part of (for instance, a National Team). | [Team](#team) |
| `bestPerformance` | `ath:bestPerformance` | Athlete's records and best performances. | [Performance](#performance) |  
| `captainOf` | `ath:captainOf` | Team which an athlete is captain of. | [Team](#team) |  


### SportsClub

* class: `schema:SportsClub`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a club. | Text |
| `name` | `schema:name` | Descriptive name of a club. | Text |
| `alternateName` | `schema:alternateName` | An alias to name a club. | Text |
| `address` | `schema:address` | Main postal address where a club is registered or located. | [PostalAddress](#postaladdress) or Text |
| `image` | `schema:image` | Picture of a club. | URL |
| `logo` | `schema:logo` | Logo or flag of the club. | URL |
| `email` | `schema:email` | Main email address of the club. | Text |
| `telephone` | `schema:telephone` | Telephone number of a club | Text |
| `faxNumber` | `schema:faxNumber` | Fax number of a club | Text |
| `url` | `schema:url` | Club's homepage. | URL |
| `dissolutionDate` | `schema:dissolutionDate` | Date when a team was dissolved. | [Date](#date) |
| `foundingDate` | `schema:foundingDate` | Date when a team was established. | [Date](#date) |
| `organization` | `schema:memberOf` | Organization which a club is attached to. | [Organization](#organization) |
| `sponsor` | `schema:sponsor` | Sponsor of a club. | [Person](#persons) or [Organization](#organization) |
| `athlete` | `schema:athlete` | Athlete who is affiliated to a club. | [Athlete](#athlete) |
| `team` | `ath:team` | Teams(s) attached to a club. | [Team](#team) |


### Team

* class: `schema:SportsTeam`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a team. | Text |
| `name` | `schema:name` | Descriptive name of a team. | Text |
| `alternateName` | `schema:alternateName` | An alias to name a team. | Text |
| `image` | `schema:image` | Picture of a team. | URL |
| `logo` | `schema:logo` | Logo or flag of a team. | URL |
| `url` | `schema:url` | Webpage URL about a team. | URL |
| `memberOf` | `schema:memberOf` | Organization which a team is attached to. | [Organization](#organization) |
| `location` | `schema:location` | Teams's nationality. | [Country](#country) |
| `sponsor` | `schema:sponsor` | Sponsor of a team. | [Person](#persons) or [Organization](#organization) |
| `coach` | `schema:coach` | Person who acts as coach for a team. | [Person](#person) |
| `bestPerformance` | `ath:bestPerformance` | Records and best performances of a team (e.g., relay competitions). | [Performance](#performance) |  
| `captain` | `ath:captain` | Athlete in charge of a team. | [Athlete](#athlete) |
| `athlete` | `schema:athlete` | Athlete affiliated to a team. | [Athlete](#athlete) |


### Person

* class: `schema:Person`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a person. | Text |
| `name` | `schema:name` | Person's full name. | Text |
| `familyName` | `schema:familyName` | Person's family name; surname. | Text |
| `givenName` | `schema:givenName` | Person's given name; first name. | Text |
| `alternateName` | `schema:identifier` | An alias to name a person. | Text |
| `address` | `schema:address` | Main residence address of a person. | [Postal Address](#postal-address) or Text |
| `image` | `schema:image` | Picture of a person. | URL |
| `email` | `schema:email` | Email address of a person. | Text |
| `url` | `schema:url` |Webpage URL about a person. | URL |


### Organizations

* class: `schema:Organization`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify an organization. | Text |
| `name` | `schema:name` | Name of an organization. | Text |
| `alternateName`  | `schema:altenateName` | An alias to name an organization. | Text |
| `address` | `schema:address` | Postal address where an organization is located. | [Postal Address](#postal-address) or Text |
| `email` | `schema:email` | Main email address of an organization. | Text |
| `url` | `schema:url` | Webpage URL about an organization. | URL |
| `telephone` | `schema:telephone` |Main telephone number(s) of an organization. | Text |
| `areaServed` | `schema:areaServed` | Spatial coverage of an organization, usually administrative areas (city, region, country, etc.) | [Place](#place) or [Administrative Area] | 
| `memberOf` | `schema:memberOf` | Organization, such as higher-level federation(s), to which an organization is attached to. | [Organization](#organization) | 
| `member` | `schema:member` | Person or organization attached to an organization. | [Person](#person) or [Organization](#organization) | 

### Federation

* class: `ath:SportsGoverningBody`
* subClassOf: `schema:SportsOrganization`


### Category


* class: `ath:CompetitiveAudience`
* subClassOf: `schema:PeopleAudience`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a category. | Text |
| `name` | `schema:name` | Name of a category (i.e., `Under 23 Men`, `Teachers`) | Text |
| `alternateName` | `schema:alternateName` | Code used to identify a category (i.e., `M35`, `W35`) | Text |
| `description` | `schema:description` | Description and notes about a category. | Text |
| `requiredGender` | `schema:requiredGender` | Gender of athletes involved in a category.  | [GenderType](#gendertype) |
| `requiredMinAge` | `schema:requiredMinAge` | Athletes' minumum age to be eligible for a category.  | Integer |
| `requiredMaxAge` | `schema:requiredMaxAge` | Athletes' maximum age to be eligible for a category.  | Integer |
| `recognizingAuthority` | `ath:recognizingAuthority` | Governing body that recognizes and rule a specific category.  | [Organization](#organization) |


### CompetitionSeries

* class: `schema:CompetitionSeries`
* subClassOf: `schema:EventSeries`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a recurring competition. | Text |
| `name` | `schema:name` | Descriptive name of a recurring competition. | Text |
| `alternateName` | `schema:alternateName` | An alias to name a recurring competition. | Text |
| `description` | `schema:description` | About a recurring competition. | Text |
| `recurringCompetition` | `ath:recurringCompetition` | A competition that happens as a recurring event within a series of competitions (e.g., *London 2012*  *Olympic Games*) | [Competition](#competitions) |


### Competition

* class: `ath:Competition`
* subClassOf: `schema:SportsEvent`
* superClasses: 
  * `ath:MultiStageCompetition`
  * `ath:DivisionalCompetition`
  * `ath:MultiRoundCompetition`
  * `ath:MultidisciplineCompetition`
  * `ath:UnitCompetition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a competition. | Text |
| `name` | `schema:name` | Descriptive name of a competition. | Text |
| `alternateName` | `schema:alternateName` | An alias to name the competition. | Text |
| `description` | `schema:description`  | Descriptive text about a competition. | Text |
| `location` | `schema:location` | Venue where a competition is held (for instance, Berlin Olympic Stadium). | [Place](#place) or Text |
| `url` | `schema:url` | Webpage URL about a competition. | URL |
| `image` | `schema:image` | Picture about a competition. | URL |
| `startDate` | `schema:startDate` | Date and time when a competition starts. | [Date](#date) or [DateTime](#datetime) |
| `endDate` | `schema:endDate` | Date and time when a competition ends. | [Date](#date) or [DateTime](#datetime) |
| `eventStatus` | `schema:eventStatus` | Status of a competition according to a enumeration of potential values (i.e., scheduled, completed, etc.) | [EventStatusType](#eventstatustype) |
| `organizer` | `schema:organizer` | Person(s) or organization(s) that organizes a competition. | [Person](#persons) or [Organization](#organizations) |
| `contributor` | `schema:contributor` | Person(s) or organization(s) that collaborates in the organization of a competition. | [Person](#person) or [Organization](#organization) |
| `starter` | `ath:starter` | Athletes(s) or teams(s) registered for the competition at the begining of the event. | [Ahtlete](#athlete) or [Team](#team) |
| `sponsor` | `schema:sponsor` | Person(s) or organization(s) that sponsors a competition. | [Person](#person) or [Organization](#organization) |
| `attendee` | `schema:attendee` | Person(s) who attends a competition. | [Person](#person) |
| `discipline` | `ath:sportsDiscipline` | Type of an Athletics competition according to specific rules set by governing bodies (e.g., `Outdoor Sprint Relays`). | [Discipline](#discipline) |
| `category` | `ath:category` | The specific category for a competition (e.g., *M35*, *U18 Male*, *local competitors*, etc). | [Category](#category) |
| `entryRequirements` | `ath:entryRequirements` | Requirements to take part in a competition.  | Text |
| `results` | `ath:results` | List with the results of the participation in a competition. There may be different results during the competition (start list, intermediate results, partial results, final results, etc.) .  | [Results Sequence](#results-sequence) |
| `unitCompetition` | `ath:unitCompetition` | Unit competition that is part of a parent competition (e.g. every heat of a semifinal round in a 200m event).  | [UnitCompetition](#unitcompetition) |
| `previousStage` | `ath:prevStage` | Competition that is the previous stage of this event, within a [Multi Stage Competition](#multi-stage-competitions) (e.g. previous match in a league).  | [Competition](#competition) |
| `nextStage` | `ath:nextStage` | Competition that is the next stage of this event, within a [Multi Stage Competition](#multi-stage-competitions) (e.g. next match in a league).  | [Competition](#competition) |

### MultiStageCompetition

* class: `ath:MultiStageCompetition`
* subClassOf: `ath:Competition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `firstStage` | `ath:firstStage` | First stage of a multi stage competition. | [Competition](#competition) |
| `lastStage` | `ath:lastStage` | Last stage of a multi stage competition. | [Competition](#competition) |
| `stage` | `ath:stage` | A stage within a multi stage competition. | [Competition](#competition) |


### DivisionalCompetition

* class: `ath:DivisionalCompetition`
* subClassOf: `ath:Competition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `division` | `ath:division` | Division of a competition. | [Competition](#competitions) |


### MultidisciplineCompetition

* class: `ath:MultidisciplineCompetition`
* subClassOf: `ath:Competition`


### MultiRoundCompetition

* class: `ath:MultiRoundCompetition`
* subClassOf: `ath:Competition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `firstRound` | `ath:firstRound` | First round in a multi round competition. | [CompetitionRound](#competitionround) |
| `lastRound` | `ath:lastRound` | Last round in a multi round competition. | [CompetitionRound](#competitionround) |
| `round` | `ath:round` | Round in a multi round competition. | [CompetitionRound](#competitionround) |


### CompetitionRound

* class: `ath:CompetitionRound`
* subClassOf: `ath:Competition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `qualificationCriteria` | `ath:qualificationCriteria` | Requirements for a competitor to get to the next round in a [MultiRoundCompetition](#multiroundcompetition) (e.g., a preliminary round of qualification in track events may select a number of athletes by their performance and others by heat ranking). | [QualificationCriteria](#qualificationcriteria) |


### UnitCompetition

* class: `ath:UnitCompetition`
* subClassOf: `ath:Competition`


### UnitRace

* class: `ath:UnitRace`
* subClassOf: `ath:UnitCompetition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `startLocation` | `ath:startLocation` | Place where a competition starts.  | [Place](#place) |
| `endLocation` | `ath:endLocation` | Place where a competition finishes.  | [Place](#place) |
| `raceCourse` | `ath:raceCourse` | Track with the course of a competition.  | `schema:GeoShape` |
| `timekeeping` | `ath:timekeeping` | Type of timekeeping used to control a competition.  | [Timekeeping](#timekeeping) |


### UnitFieldCompetition

* class: `ath:UnitFieldCompetition`
* subClassOf: `ath:UnitCompetition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `trialsRound` | `ath:trialsRound` | A round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |
| `firstTrialsRound` | `ath:firstTrialsRound` | The first round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |
| `lastTrialsRound` | `ath:lastTrialsRound` | The last round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |

### UnitHeightCompetition

* class: `ath:UnitFieldCompetition`
* subClassOf: `ath:UnitFieldCompetition`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `startingHeight` | `ath:startingHeight` | The starting height the bar is raised at the start of a vertical jumps unit competition. | [Distance](#distance) |
| `increasingHeight` | `ath:increasingingHeight` | The subsequent heights to which the bar will be raised at the end of each round of trials within a vertical jumps unit competition. | Text |

### UnitDistanceCompetition

* class: `ath:UnitDistanceCompetition`
* subClassOf: `ath:UnitFieldCompetition`


### CompetitionEntry

* class: `ath:CompetitionEntry`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify an entry in the competition. | Text |
| `competitor` | `ath:competitor` | Athlete or team competing in an event. | [Athlete](#athletes) or [Team](#teams) |
| `protestStatus` | `ath:protestStatus` | Status of the protest action of the competitor during a competition. | [Protest Status](#protest-status) |
| `bibIdentifier` | `ath:bibIdentifier` | Text or number printed on the bib, identifying a competitor during the competition. | Text |
| `transponderIdentifier` | `ath:transponderIdentifier` | Text or code identifying a competitor by a transponder. | Text |
| `category` | `ath:category` | The specific category where a this entry is included in the competition (e.g., *M35*, *U18 Male*, *local competitors*, etc). | [Category](#category) |
| `inCompetition` | `ath:inCompetition` | Competition in which a competitor takes part. | [Competition](#competitions) |
| `bestPerformance | `ath:bestPerformance` | Best performance for the discipline related to the competition. | [Performance](#performances) |


### Results Sequence

* class: `rdf:Seq`

The list of results is expressed through a sequence (`rdf:Seq`) —an ordered list— of [Result](#result) objects.


### Result

* class: `ath:Result`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify an entry in the list of results. | Text |
| `competitionEntry` | `ath:competitionEntry` | Athlete or team participating in the event. | [CompetitionEntry](#competitionentry) |
| `competitionFeature` | `ath:competitionFeature` |Set of features and notes included by officials in a starting list or results (e.g., 'Qualified without standard in field events', 'Advanced to next round by Referee') | [CompetitionFeatureType](#competitionfeaturetype) |
| `protestStatus` | `ath:protestStatus` | Status of the protest action of the competitor at a stage of the competition. | [ProtestStatusType](#proteststatustype) |
| `inCompetition` | `ath:inCompetition` |Competition in which a competitor takes part. | [Competition](#competitions) |
| `startingOrder` | `ath:startingOrder` | Competitor's order in the start list of a competition stage. | Integer |
| `trackLane` | `ath:trackLane` | Track lane number assigned to a competitor in case of certain track disciplines. | Integer |
| `rank` | `ath:rank` | Position in the ranking of results. | Integer |
| `record` | `ath:record` | Flags indicating records or best performances achieved after the competition competition (e.g., World Record, National Record, etc.). | [Record](#record) |
| `created` | `dc:created` | Exact date and time when the results were produced. | [DateTime](#datetime) |
| `modified` | `dc:modified` | Exact date and time when the results were updated. | [DateTime](#datetime) |
| `performance` | `ath:performance` | Measure to quantify the performance of the competitor after a competition stage.  | [Performance](#performance) |
| `award` | `ath:award` | Award related to the result achieved by the athlete. | Text |


### Performance

* class: `ath:Performance`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a performance. | Text |
| `windAssistance` | `ath:windAssistance` | Wind speed at the moment of registering the performance (it could be either positive or negative). | Text |
| `record` | `ath:record` | Flags indicating records and bests achieved after the competition round (e.g., World Record, National Record, Personal Best, Season Leader, etc.). | [Record](#record) |
| `discipline` | `ath:sportsDiscipline` | Type of an Athletics competition according to specific rules set by governing bodies (e.g., `Outdoor Sprint Relays`). | [Discipline](#discipline) |
| `date` | `dc:date` | Date when the athlete achieved a performance. | [Date](#date) |
| `competitor` | `ath:competitor` | Athlete or team that achieved the performance. | [Athlete](#athlete) or [Team](#team) |

### TimePerformance

* class: `ath:TimePerformance`
* subClassOf: `ath:Performance`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `time` | `ath:time` | Official measure of a performance expressed as time. | [Time](#time) |
| `reactionTime` | `ath:reactionTime` | Reaction time of an athlete during a sprint event. | [Time](#time) |

### PointsPerformance

* class: `ath:PointsPerformance`
* subClassOf: `ath:Performance`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `points` | `ath:points` | Official measure of a performance expressed as score points. | Number |

### DistancePerformance

* class: `ath:DistancePerformance`
* subClassOf: `ath:Performance`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `distance` | `schema:distance` | Official measure of a performance expressed as distance. | [Distance](#distance) |


### QualificationCriteria

* class: `ath:QualificationCriteria`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `description` | `schema:description` | Descriptive text of the qualification criteria. | Text |
| `byPlaceOrStandard` | `ath:byPlaceOrStandard` | Number of competitors that are qualified in a round by rank (track events) or standard (field events). | Integer |
| `byPerformance` | `ath:byPerformance` | Number of competitors that are qualified in a round by best performance. | Integer |


### Timekeeping

* class: `ath:Timekeeping`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a timekeeping method. | Text |
| `timekeepingType` | `dc:type` | Type of the system used. | [TimekeepingType](#timekeepingtype) |
| `name` | `schema:name` | Name of a method used for timekeeping (i.e., `Hand Timing`, `Fully Automatic` or `Transponder System Timing`) | Text |
| `description` | `schema:description` | Description and notes about the method used for timekeeping. | Text |
| `timingDevice` | `ath:timingDevice` | Brand, model and features of the device/system used for timekeeping. | Text |


### Place

* class: `schema:Place`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a venue. | Text |
| `name` | `schema:name` | Descriptive name of a venue. | Text |
| `description` | `schema:description` | Descriptive text about a place. | Text |
| `address` | `schema:address` | Postal address related to a venue. | [PostalAddress](#postaladdress) or Text |
| `url` | `schema:url` | Webpage URL about a venue. | URL |
| `image` | `schema:image` | Picture about a venue. | URL |
| `geo` | `schema:geo` | Coordinates of a venue. | [GeoCoordinates]  or [GeoShape]  |
| `map` | `schema:hasMap` | URL to a map pointing to a venue. | URL |
| `telephone` | `schema:telephone` | Telephone number of a venue. | Text |
| `fax` | `schema:faxNumber` | Fax number of a venue. | Text |


### PostalAddress

* class: `schema:PostalAddress`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `identifier` | `schema:identifier` | Unique character string to identify a postal address. | Text |
| `name` | `schema:name` | Descriptive name of the place (e.g., Helsinki Olympic Stadium). | Text |
| `streetAddress` | `schema:streetAddress` | The street address (e.g., Paavo Nurmen tie 1).  | Text |
| `locality` | `schema:addressLocality` | The locality (e.g., Helsinki). | Text |
| `postOficeBoxNumber` | `schema:postOficeBoxNumber` | The post office box number for PO box addresses. | Text |
| `postalCode` | `schema:postalCode` | The postal code (e.g., 00250)| Text |
| `country` | `schema:addressCountry` | The country (e.g., Finland). | [Country](#country) |


### AthleticsDiscipline

* class: `ath:AthleticsDiscipline`
* superClasses: 
    * `ath:Race`
    * `ath:Throws`
    * `ath:HorizontalJumps`
    * `ath:VerticalJumps`
    * `ath:CombinedEvent`  

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `venueType` | `ath:venueType` | Type of the stadium (indoor/outdoor). | [VenueType](#venuetype) |
| `name` | `schema:name` | Descriptive name of the discipline. | Text |

### Race

* class: `ath:Race`
* subClassOf: `ath:AthleticsDiscipline`
* superClasses: 
    * `ath:MiddleOrLongDistanceRace`
    * `ath:Hurdles`
    * `ath:Sprint`
    * `ath:RaceWalking`
    * `ath:CrossCountry`
    * `ath:RoadRunning`
    * `ath:MountainRunning`
    * `ath:TrackRelays`
    * `ath:UltraRunning`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `distance` | `schema:distance` | Distance of the race. | [Distance](#distance) |
| `raceCompetitionType` | `ath:raceCompetitionType` | Type of competition (time trial, relays, etc.). | [RaceCompetitionType](#racecompetitiontype) |

### MiddleOrLongDistanceRace

* class: `ath:MiddleOrLongDistanceRace`
* subClassOf: `ath:Race`
* superClass: `ath:Steeplechase`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `duration` | `schema:duration` | Time in case of being a time-fixed competition (i.e., one hour, one day, etc.). | [Time](#time) |

### Steeplechase

* class: `ath:Steeplechase`
* subClassOf: `ath:MiddleOrLongDistanceRace`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `height` | `schema:height` | Obstacle height. | [Distance](#distance) |

### Hurdles

* class: `ath:Hurdles`
* subClassOf: `ath:Race`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `height` | `schema:height` | Hurdles height. | [Distance](#distance) |
| `spacing` | `schema:spacing` | Horizontal distance between hurdles. | [Distance](#distance) |

### Sprint

* class: `ath:Sprint`
* subClassOf: `ath:Race`

### RaceWalking

* class: `ath:RaceWalking`
* subClassOf: `ath:Race`


### CrossCountry

* class: `ath:CrossCountry`
* subClassOf: `ath:Race`

### RoadRunning

* class: `ath:RoadRunning`
* subClassOf: `ath:Race`

### MountainRunning

* class: `ath:MountainRunning`
* subClassOf: `ath:Race`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `ascent` | `ath:ascent` | Total vertical ascent of the race course. | [Distance](#distance) |
| `descent` | `ath:descent` | Total vertical descent of the race course. | [Distance](#distance) |

### TrackRelays

* class: `ath:TrackRelays`
* subClassOf: `ath:Race`


### UltraRunning

* class: `ath:UltraRunning`
* subClassOf: `ath:Race`


### Throws

* class: `ath:Throws`
* subClassOf: `ath:AthleticsDiscipline`
* superClasses:
    * `ath:ShotPut`
    * `ath:DiscusThrow` 
    * `ath:HammerThrow`
    * `ath:JavelinThrow`
    * `ath:WeightThrow` 

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `weight` | `schema:weight` | Weight of the throwing object. | Weight |

### ShotPut

* class: `ath:ShotPut`
* subClassOf: `ath:Throws`

### DiscusThrow

* class: `ath:DiscusThrow`
* subClassOf: `ath:Throws`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `discusDiameter` | `ath:discusDiameter` | Discus diameter. | [Distance](#distance) |

### HammerThrow

* class: `ath:HammerThrow`
* subClassOf: `ath:Throws`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `hammerLength` | `ath:hammerLength` | Hammer wire length. | [Distance](#distance) |

### JavelinThrow

* class: `ath:JavelinThrow`
* subClassOf: `ath:Throws`


| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `javelinLength` | `ath:javelinLength` | Javelin length. | [Distance](#distance) |

### WeightThrow

* class: `ath:WeightThrow`
* subClassOf: `ath:Throws`


### HorizontalJumps

* class: `ath:HorizontalJumps`
* subClassOf: `ath:AthleticsDiscipline`
* superClasses:
    * `ath:LongJump`
    * `ath:TripleJump` 

### VerticalJumps

* class: `ath:VerticalJumps`
* subClassOf: `ath:AthleticsDiscipline`
* superClasses:
    * `ath:HighJump`
    * `ath:PoleVault`

### HighJump

* class: `ath:HighJump`
* subClassOf: `ath:VerticalJumps`

### PoleVault

* class: `ath:PoleVault`
* subClassOf: `ath:VerticalJumps`

### CombinedEvent

* class: `ath:CombinedEvent`
* subClassOf: `ath:AthleticsDiscipline`
* superClasses:
    * `ath:Pentathlon`
    * `ath:Heptathlon`
    * `ath:Decathlon`
    * `ath:ThrowsPentathlon`

| Key | Property | Description | Value Type |
|:--- |:-------- |:----------- |:---------- |
| `discipline` | `ath:discipline` | Combined sub-disciplines for this event. | [Discipline](#discipline) |

### Pentathlon

* class: `ath:Pentathlon`
* subClassOf: `ath:CombinedEvent`

### Heptathlon

* class: `ath:Heptathlon`
* subClassOf: `ath:CombinedEvent`

### Decathlon

* class: `ath:Decathlon`
* subClassOf: `ath:CombinedEvent`

### ThrowsPentathlon

* class: `ath:ThrowsPentathlon`
* subClassOf: `ath:CombinedEvent`


--------------------

## Schemas and DataTypes


### Date

Date is represented using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard: `[YYYY][MM][DD]` or `[YYYY]-[MM]-[DD]`

For instance, 7th April 2017: 
```
2017-04-07
``` 

### Time

Time is represented using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard: `[hh][mm][ss].sss` or `[hh]:[mm]:[ss].sss`

For instance 2 hours 5 minutes 34 seconds: 
```
02:05:34.000
``` 

Example, 10 seconds, 345 milliseconds: 
```
00:00:10.345
``` 

### DateTime

DateTime is represented using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard: `<date>T<time>`

Time can include the timezone `<time>±[hh]:[mm]`.

For instance, 7th April 2017 at 4:45 am (UTC+1): 
```
`2017-04-07T04:45:00.000+01:00`
``` 

### GenderType

| `Code` | Gender Type |
| ---- | ----------- |
| `Male` | Men and/or boys. |
| `Female` | Women and/or girls. |


### CompetitionFeatureType

| `Code` | Issue/feature |
| ------------- | ---- |
| `feature:DNS` | Did Not Start |
| `feature:DNF` | Did Not Finish |
| `feature:DQ` | Disqualified |
| `feature:R` | Retired from competition |
| `feature:Q` | Qualified by place (track) or standard (field) |
| `feature:q` | Qualified by performance (time in timed events and rank in field events) |
| `feature:qR` | Advanced to next round by Referee |
| `feature:qJ` | Advanced to next round by Jury of Appeal |
| `feature:>` | Bent knee (Race walking) |
| `feature:%3E` | Loss of contact (Race walking) |
| `feature:yC` | yellow Card |
| `feature:yRC` | Second yellow Card |
| `feature:RC` | Red Card |
| `feature:Fn` | False Start |
| `feature:o` | Clearance (valid trial in Height Events) |
| `feature:-` | Pass (passed trial in field events) |
| `feature:x` | Failure (failed trial in field events) |
| `feature:NM` | No Mark |
| `feature:NH` | No Height |
| `feature:h` | Hand-timing |
| `feature:a` | Automatic timing with no hundredths of a second measured |
| `feature:A` | Performance achieved at altitude |
| `feature:OT` | Oversized Track |


### CategoryType

Standard categories are combinations of gender and age-range. The following categories are recognized by IAAF, European Athletics and/or WMA: 

| Age Range | Mixed | Male | Female |
| --------- | ----- | ---- | ------ |
| 16—17 | `category:U18` | `category:U18M` | `category:U18F` |
| 18—19 | `category:U20` | `category:U20M` | `category:U20F` |
| 20—22 | `category:U23` | `category:U23M` | `category:U23F` |
| 23—34 | `category:SEN` | `category:SENM` | `category:SENF` |
| 35—39 | `category:V35` | `category:M35` | `category:W35` |
| 40—44 | `category:V40` | `category:M40` | `category:W40` |
| 45—49 | `category:V45` | `category:M45` | `category:W45` |
| 50—54 | `category:V50` | `category:M50` | `category:W50` |
| 55—59 | `category:V55` | `category:M55` | `category:W55` |
| 60—64 | `category:V60` | `category:M60` | `category:W60` |
| 65—69 | `category:V65` | `category:M65` | `category:W65` |
| 70—74 | `category:V70` | `category:M70` | `category:W70` |
| 75—79 | `category:V75` | `category:M75` | `category:W75` |
| 80—84 | `category:V80` | `category:M80` | `category:W80` |
| 85—89 | `category:V85` | `category:M85` | `category:W85` |
| 90—94 | `category:V90` | `category:M90` | `category:W90` |
| 95—99 | `category:V95` | `category:M95` | `category:W95` |
| 100+ | `category:V100` | `category:M100` | `category:W100` |


### Country

Each country should be represented by an IRI that includes a unique three-character *Authority code*. It is recommended using the EU [Named Authority List (NAL) of Countries](http://publications.europa.eu/mdr/authority/country/index.html), that relays on the [ISO 3166-1/alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1) positions in case the country is present in the ISO standard. A traceability of this codes creation is ensured and historical relationships are also offered.

The IRI of countries will be `http://publications.europa.eu/resource/authority/country/{countrycode}`. The JSON-LD context will enable a `country` prefix to simplify usage, allowing the use of the following form:

```
    country:{countrycode}
```

For instance: `country:ZWE` for *Zimbabwe*, `country:ZAF`for *South Africa* and `country:TGO` for *Togo*.

Check the full list of authority country codes at [http://publications.europa.eu/mdr/resource/authority/country/html/countries-eng.html](http://publications.europa.eu/mdr/resource/authority/country/html/countries-eng.html).

### Event Status

| `Code` | Status |
| ---- | ------ |
| `event:Unscheduled` | Competition is not confirmed. |
| `event:Scheduled` | Competition is scheduled. |
| `event:Postponed` | Competition will be postponed without being rescheduled yet. |
| `event:Rescheduled` | Competition is rescheduled. |
| `event:Delayed` | An event is held up, for example by inclement weather. Can happen before or during an event.
| `event:ScheduledBreak` | Competition has a scheduled break (`intermission` in SportsML). |
| `event:Running` | Competition in progress (`mid-event` in SportsML). | 
| `event:Interrupted` | Competition interrupted once in progress (`halted` in SportsML). | 
| `event:GettingReady` | The start of the competition is imminent |
| `event:Finished` | Competition is over and no more action will happen on the field of play (last competitor finished). (`post-event` in SportsML) |
| `event:Cancelled` | Competition will not take place (`suspended`, `cancelled`, `discarded` in SportsML) |

### RecordOrBestType 

| `Code` | Record Type |
| ---- | ----------- |
| `best:WR` | World Record |
| `best:=WR` | Equal World Record |
| `best:PR` | Paralympic Record |
| `best:AF` | African Record |
| `best:=AF` | Equal African Record |
| `best:AS` | Asian Record |
| `best:=AS` | Equal Asian Record |
| `best:ER` | European Record |
| `best:=ER` | Equal European Record |
| `best:AM` | American Record |
| `best:=AM` | Equal American Record |
| `best:OC` | Oceania Record |
| `best:=OC` | Equal Oceania Record |
| `best:AR` | Area (or continental) Record |
| `best:=AR` | Equal Area (or continental) Record |
| `best:NR` | National Record (for a specific country) |
| `best:=NR` | Equal National Record |
| `best:RR` | Regional Record |
| `best:=RR` | Equal Regional Record |
| `best:OR` | Olympic Record |
| `best:=OR` | Equal Olympic Record |
| `best:CR` | Championship Record |
| `best:=CR` | Equal Championship Record |
| `best:GR` | Games Record |
| `best:=GR` | Equal Games Record |
| `best:MR` | Meet Record |
| `best:=MR` | Equal Meet Record |
| `best:DLR` | Diamond League Record |
| `best:=DLR` | Equal Diamond League Record |
| `best:#` | indicates a record has not been accepted. The same mark is also used to indicate some sort of irregularity with a result. |
| `best:X` | indicates the athlete has been disqualified after the performance |
| `best:ClubR` | Club Record |

Records can be described by the type of record and the age-range category.

| `Code` | Record Type |
| ---- | ----------- |
| `best:AJR` | Area (or continental) Junior Record |
| `best:=AJR` | Equal Area (or continental) Junior Record |
| `best:EUR` | European U23 Record |
| `best:=EUR` | Equal European U23 Record |
| `best:WJR` | World Junior Record |
| `best:=WJR` | Equal World Junior Record |
| `best:EJR` | European Junior Record |
| `best:=EJR` | Equal European Junior Record |
| `best:NUR` | National U23 Record |
| `best:=NUR` | Equal National U23 Record |
| `best:NJR` | National Junior Record |
| `best:=NJR` | Equal National Junior Record |

The concept of 'best' refers to athlete's personal achievements, without setting official records.

| `Code` | Best Type |
| ---- | ----------- |
| `best:WYB` | World Youth Best (the best mark achieved by an athlete in the youth age category) |
| `best:=WYB` | Equal World Youth Best |
| `best:WB` | World Best (the best mark recorded for a non-IAAF world record event) |
| `best:=WB` | Equal World Best |
| `best:PB` | Personal Best (the best mark achieved by an athlete on a personal level) |
| `best:=PB` | Equal Personal Best |
| `best:SB` | Seasonal Best (the best mark achieved by an athlete on a personal level within a given season) |
| `best:=SB` | Equal Seasonal Best |
| `best:WL` | World Leader (the best mark achieved worldwide within a given season) |
| `best:=WL` | Equal World Lead |
| `best:EL` | European Lead |
| `best:=EL` | Equal European Lead |
| `best:EB` | European Best |
| `best:=EB` | Equal European Best |
| `best:CB` | Championship Best Performance |
| `best:=CB` | Equal Championship Best Performance |


## RoleType

Roles specified by IOC [ODF](http://odf.olympictech.org/2016-Rio/codes/HTML/common_codes/common_codes.htm). 

| `Code` | Role |
| ---- | ---- |
| `role:A` | Athlete |
| `role:C` | Coach |
| `role:G` | Guide (Paralympics only) |
| `role:J` | Judge |
| `role:S` | Technical Official (not Judge) |
| `role:T` | Team Official (not Coach) |


### ResultsStatusType

| `Code` | Status |
| ---- | ------ |
| `results:startList` | Before competition, Start List    |
| `results:live` | For live updates during competition |
| `results:intermediate` | When competition is stopped, used at pre-defined points |
| `results:unconfirmed` | When the unit is over but not yet unofficial or official.    Only used if other statuses do not come quickly.  |
| `results:unofficial` | Results of the competition released as soon as the event is over, not waiting any official decision of the International Federation. The correctness of data must be assured.  |
| `results:official` | Results of the competition released as soon as the event is officially confirmed taking into account the resolution of the protests, etc.  |
| `results:partial` | Incomplete list, Final Ranking. |
| `results:protested` | After the competition is no longer LIVE and a protest has been lodged    After all decisions on the protest are made the ResultStatus will change to UNOFFICIAL or OFFICIAL as appropriate.  |


### ProtestStatusType

| `Code` | Status |
| ---- | ---- |
| `protest:CLS` | Closed | 
| `protest:OPN`    | Open | 
| `protest:PND` | Pending |  
| `protest:ROPN` | Re Open | 

### RaceCompetitionType

| `Code` | Type |
| ---- | ---- |
| `race:RaceIndividual` | Individual Race | 
| `race:RaceRelays`    | Relay Race | 
| `race:RaceTimeTrial`    | Time Trial | 

### VenueType

| `Code` | Type |
| ---- | ---- |
| `venue:VenueIndoor` | Indoor venue | 
| `venue:VenueOutdoor`    | Outdoor venue | 


### TimekeepingType

| `Code` | Type |
| ---- | ---- |
| `timekeeping:HT` | Hand Timing | 
| `timekeeping:FAT`    | Fully Automatic | 
| `timekeeping:TST` | Transponder System Timing | 


--------------------




