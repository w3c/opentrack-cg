# OpenTrack Vocabulary

**Latest published version:**
  * [https://w3c.github.io/opentrack-cg/spec/model/overview](https://w3c.github.io/opentrack-cg/spec/vocab)

**Latest editor's draft:**
  * [https://github.com/w3c/opentrack-cg/blob/master/spec/model/overview.md](https://github.com/w3c/opentrack-cg/blob/master/spec/vocab.md)

**Participate:**
  * [https://www.w3.org/community/opentrack/](https://www.w3.org/community/opentrack/)
    

Athletics: `http://dbpedia.org/resource/Sport_of_athletics`

## Classes and Properties

### Athlete

* class: `ath:Athlete`
* subClassOf: `schema:Person`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a person as an athlete. | Text |
| name | `schema:name` | Athlete's full name. | Text |
| familyName | `schema:familyName` | Athlete's family name; surname. | Text |
| givenName | `schema:givenName` |Athlete's given name; first name. | Text |
| prevFamilyName | `ath:prevFamilyName` | Athlete's former family name; surname. | Text |
| prevGivenName | `ath:prevGivenName` | Athlete's former given name; first name. | Text |
| alternateName | `schema:alternateName` | An alias to name an athlete. | Text |
| address | `schema:address` | Main residence address of an athlete. | [PostalAddress](#postaladdress) or Text |
| image | `schema:image` | Picture of an athlete. | URL |
| email | `schema:email` | Email address. | Text |
| url | `schema:url` | Webpage URL about an athlete. | URL |
| award | `schema:award` |  Award or prize given to an athlete. | Text |
| gender | `schema:gender` | Athlete's gender. | [GenderType](#gendertype) |
| height | `schema:height` | Athlete's height. | [Distance](#distance) |
| weight | `schema:weight` | Athlete's weight. | [Mass](#mass) |
| nationality | `schema:nationality` | Athlete's nationality. | [Country](#country) |
| birthDate | `schema:birthDate` | Date of birth. | [Date](#date) |
| deathDate | `schema:deathDate` | Date of death. | [Date](#date) |
| birthPlace | `schema:birthPlace` | Locality and country of birth (e.g. "Tallinn, Estonia") | [Place] |
| federation | `schema:memberOf` |  Federation which an athlete is attached to. | [Federation](#federation) |
| coach | `schema:coach` | Athlete's main coach. | [Person](#person) |
| sponsor | `schema:sponsor` | Athlete's sponsor. | [Person](#person) or [Organization](#organizations) |
| club | `schema:affiliation` | Club which an athlete is affiliated to. | [SportsClub](#sportsclub) |
| team | `schema:memberOf` | Team which an athlete is part of (for instance, a National Team). | [Team](#team) |
| bestPerformance | `ath:bestPerformance` | Athlete's records and best performances. | [Performance](#performance) |  
| captainOf | `ath:captainOf` | Team which an athlete is captain of. | [Team](#team) |  


### SportsClub

* class: `schema:SportsClub`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a club. | Text |
| name | `schema:name` | Descriptive name of a club. | Text |
| alternateName | `schema:alternateName` | An alias to name a club. | Text |
| address | `schema:address` | Main postal address where a club is registered or located. | [PostalAddress](#postaladdress) or Text |
| image | `schema:image` | Picture of a club. | URL |
| logo | `schema:logo` | Logo or flag of the club. | URL |
| email | `schema:email` | Main email address of the club. | Text |
| telephone | `schema:telephone` | Telephone number of a club | Text |
| faxNumber | `schema:faxNumber` | Fax number of a club | Text |
| url | `schema:url` | Club's homepage. | URL |
| dissolutionDate | `schema:dissolutionDate` | Date when a team was dissolved. | [Date](#date) |
| foundingDate | `schema:foundingDate` | Date when a team was established. | [Date](#date) |
| federation | `schema:memberOf` | Federation(s) which a club is attached to. | [Federation](#federation) |
| sponsor | `schema:sponsor` | Sponsor of a club. | [Person](#persons) or [Organization](#organization) |
| athlete | `schema:athlete` | Athlete who is affiliated to a club. | [Athlete](#athlete) |
| team | `ath:team` | Teams(s) attached to a club. | [Team](#team) |


### Team

* class: `schema:SportsTeam`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a team. | Text |
| name | `schema:name` | Descriptive name of a team. | Text |
| alternateName | `schema:alternateName` | An alias to name a team. | Text |
| image | `schema:image` | Picture of a team. | URL |
| logo | `schema:logo` | Logo or flag of a team. | URL |
| url | `schema:url` | Webpage URL about a team. | URL |
| federation | `schema:memberOf` | Federation which a team is attached to. | [Federation](#federation) |
| location | `schema:location` | Teams's nationality. | [Country](#country) |
| sponsor | `schema:sponsor` | Sponsor of a team. | [Person](#persons) or [Organization](#organization) |
| coach | `schema:coach` | Person who acts as coach for a team. | [Person](#person) |
| bestPerformance | `ath:bestPerformance` | Records and best performances of a team (e.g., relay competitions). | [Performance](#performance) |  
| captain | `ath:captain` | Athlete in charge of a team. | [Athlete](#athlete) |
| athlete | `schema:athlete` | Athlete affiliated to a team. | [Athlete](#athlete) |


### Federation

* class: `ath:SportsGoverningBody`
* subClassOf: `schema:SportsOrganization`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a federation. | Text |
| name | `schema:name` | Name of a federation. | Text |
| alternateName  | `schema:altenateName` | An alias to name a federation. | Text |
| address | `schema:address` | Postal address where a federation is located. | [Postal Address](#postal-address) or Text |
| email | `schema:email` | Main email address of a federation. | Text |
| url | `schema:url` | Webpage URL about a federation. | URL |
| telephone | `schema:telephone` |Main telephone number(s) of a federation. | Text |
| areaServed | `schema:areaServed` | Spatial coverage of a federation, usually administrative areas (city, region, country, etc.) | [Place](#place) or [Administrative Area] | 
| memberOf | `schema:memberOf` | Organization, such as higher-level federation(s), to which a federation is attached to. | [Organization](#organization) | 
| member | `schema:member` | Person or organization attached to a federation. | [Person](#person) or [Organization](#organization) | 


### Person

* class: `schema:Person`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a person. | Text |
| name | `schema:name` | Person's full name. | Text |
| familyName | `schema:familyName` | Person's family name; surname. | Text |
| givenName | `schema:givenName` | Person's given name; first name. | Text |
| alternateName | `schema:identifier` | An alias to name a person. | Text |
| address | `schema:address` | Main residence address of a person. | [Postal Address](#postal-address) or Text |
| image | `schema:image` | Picture of a person. | URL |
| email | `schema:email` | Email address of a person. | Text |
| url | `schema:url` |Webpage URL about a person. | URL |


### Organizations

* class: `schema:Organization`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify an organization. | Text |
| name | `schema:name` | Organization name. | Text |
| alternateName | `schema:alternateName` | An alias to name an organization. | Text |
| address | `schema:address` | Postal address where an organization is located. | [Postal Address](#postal-address) or Text |
| logo | `schema:logo` | Logo of an organization. | URL |
| email | `schema:email` | Main email address of an organization. | Text |
| url | `schema:url` | Webpage URL about an organization. | URL |
| telephone | `schema:telephone` | Main telephone number of an organization. | Text |


### Category


* class: `ath:CompetitiveAudience`
* subClassOf: `schema:PeopleAudience`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a category. | Text |
| name | `schema:name` | Name of a category (i.e., `Under 23 Men`, `Teachers`) | Text |
| alternateName | `schema:alternateName` | Code used to identify a category (i.e., `M35`, `W35`) | Text |
| description | `schema:description` | Description and notes about a category. | Text |
| requiredGender | `schema:requiredGender` | Gender of athletes involved in a category.  | [GenderType](#gendertype) |
| requiredMinAge | `schema:requiredMinAge` | Athletes' minumum age to be eligible for a category.  | Integer |
| requiredMaxAge | `schema:requiredMaxAge` | Athletes' maximum age to be eligible for a category.  | Integer |
| recognizingAuthority | `ath:recognizingAuthority` | Governing body that recognizes and rule a specific category.  | [Federation](#federations) |


### CompetitionSeries

* class: `schema:CompetitionSeries`
* subClassOf: `schema:EventSeries`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a recurring competition. | Text |
| name | `schema:name` | Descriptive name of a recurring competition. | Text |
| alternateName | `schema:alternateName` | An alias to name a recurring competition. | Text |
| description | `schema:description` | About a recurring competition. | Text |
| recurring competition | `schema:subEvent` | A competition that happens as a recurring event within a series of competitions (e.g., *London 2012*  *Olympic Games*) | [Competition](#competitions) |


### Competition

* class: `ath:Competition`
* subClassOf: `schema:SportsEvent`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a competition. | Text |
| name | `schema:name` | Descriptive name of a competition. | Text |
| alternateName | `schema:alternateName` | An alias to name the competition. | Text |
| description | `schema:description`  | Descriptive text about a competition. | Text |
| location | `schema:location` | Venue where a competition is held (for instance, Berlin Olympic Stadium). | [Place](#place) or Text |
| url | `schema:url` | Webpage URL about a competition. | URL |
| image | `schema:image` | Picture about a competition. | URL |
| startDate | `schema:startDate` | Date and time when a competition starts. | [Date](#date) or [DateTime](#datetime) |
| endDate | `schema:endDate` | Date and time when a competition ends. | [Date](#date) or [DateTime](#datetime) |
| eventStatus | `schema:eventStatus` | Status of a competition according to a enumeration of potential values (i.e., scheduled, completed, etc.) | [EventStatusType](#eventstatustype) |
| organizer | `schema:organizer` | Person(s) or organization(s) that organizes a competition. | [Person](#persons) or [Organization](#organizations) |
| contributor | `schema:contributor` | Person(s) or organization(s) that collaborates in the organization of a competition. | [Person](#person) or [Organization](#organization) |
| starter | `ath:starter` | Athletes(s) or teams(s) registered for the competition at the begining of the event. | [Ahtlete](#athlete) or [Team](#team) |
| sponsor | `schema:sponsor` | Person(s) or organization(s) that sponsors a competition. | [Person](#person) or [Organization](#organization) |
| attendee | `schema:attendee` | Person(s) who attends a competition. | [Person](#person) |
| discipline | `ath:sportsDiscipline` | Type of an Athletics competition according to specific rules set by governing bodies (e.g., `Outdoor Sprint Relays`). | [Discipline](#discipline) |
| category | `ath:category` | The specific category for a competition (e.g., *M35*, *U18 Male*, *local competitors*, etc). | [Category](#category) |
| entryRequirements | `ath:entryRequirements` | Requirements to take part in a competition.  | Text |
| results | `ath:results` | List with the results of the participation in a competition. There may be different results during the competition (start list, intermediate results, partial results, final results, etc.) .  | [ResultsList](#resultslist) |
| unitCompetition | `ath:unitCompetition` | Unit competition that is part of a parent competition (e.g. every heat of a semifinal round in a 200m event).  | [UnitCompetition](#unitcompetition) |
| previousStage | `ath:prevStage` | Competition that is the previous stage of this event, within a [Multi Stage Competition](#multi-stage-competitions) (e.g. previous match in a league).  | [Competition](#competition) |
| nextStage | `ath:nextStage` | Competition that is the next stage of this event, within a [Multi Stage Competition](#multi-stage-competitions) (e.g. next match in a league).  | [Competition](#competition) |

### MultiStageCompetition

* class: `ath:MultiStageCompetition`
* subClassOf: `[ath:Competition](#competition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| firstStage | `ath:firstStage` | First stage of a multi stage competition. | [Competition](#competition) |
| lastStage | `ath:lastStage` | Last stage of a multi stage competition. | [Competition](#competition) |
| stage | `ath:stage` | A stage within a multi stage competition. | [Competition](#competition) |


### DivisionalCompetition

* class: `ath:DivisionalCompetition`
* subClassOf: `[ath:Competition](#competition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| division | `ath:division` | Division of a competition. | [Competition](#competitions) |


### MultidisciplineCompetition

* class: `ath:MultidisciplineCompetition`
* subClassOf: `[ath:Competition](#competition)`


### MultiRoundCompetition

* class: `[ath:MultiRoundCompetition](#multiroundcompetition)`
* subClassOf: `[ath:Competition](#competition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| firstRound | `ath:firstRound` | First round in a multi round competition. | [CompetitionRound](#competitionround) |
| lastRound | `ath:lastRound` | Last round in a multi round competition. | [CompetitionRound](#competitionround) |
| round | `ath:round` | Round in a multi round competition. | [CompetitionRound](#competitionround) |


### CompetitionRound

* class: `ath:CompetitionRound`
* subClassOf: `[ath:Competition](#competition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| qualificationCriteria | `ath:qualificationCriteria` | Requirements for a competitor to get to the next round in a [MultiRoundCompetition](#multiroundcompetition) (e.g., a preliminary round of qualification in track events may select a number of athletes by their performance and others by heat ranking). | [QualificationCriteria](#qualificationcriteria) |


### UnitCompetition

* class: `ath:UnitCompetition`
* subClassOf: `[ath:Competition](#competition)`


### UnitRace

* class: `ath:UnitRace`
* subClassOf: `[ath:UnitCompetition](#unitcompetition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| startLocation | `ath:startLocation` | Place where a competition starts.  | [Place](#place) |
| endLocation | `ath:endLocation` | Place where a competition finishes.  | [Place](#place) |
| raceCourse | `ath:raceCourse` | Track with the course of a competition.  | `schema:GeoShape` |
| timekeeping | `ath:timekeeping` | Type of timekeeping used to control a competition.  | [Timekeeping](#timekeeping) |


### UnitFieldCompetition

* class: `ath:UnitFieldCompetition`
* subClassOf: `[ath:UnitCompetition](#unitcompetition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| trial round | `ath:trialsRound` | A round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |
| first trials round | `ath:firstTrialsRound` | The first round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |
| last trials round | `ath:lastTrialsRound` | The last round of field trials within a unit competition in a field event. | [FieldTrialsRound](#fieldtrialsround) |

### UnitHeightCompetition

* class: `ath:UnitFieldCompetition`
* subClassOf: `[ath:UnitFieldCompetition](#unitfieldcompetition)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| starting height | `ath:startingHeight` | The starting height the bar is raised at the start of a vertical jumps unit competition. | [Distance](#distance) |
| increasing height | `ath:increasingingHeight` | The subsequent heights to which the bar will be raised at the end of each round of trials within a vertical jumps unit competition. | Text |

### UnitDistanceCompetition

* class: `[ath:UnitDistanceCompetition](#unitdistancecompetition)`
* subClassOf: `[ath:UnitFieldCompetition](#unitfieldcompetition)`


### Result

* class: `ath:Result`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify an entry in the list of results. | Text |
| competitor | `ath:competitor` | Athlete or team competing in an event. | [Athlete](#athlete) or [Team](#team) |
| competitionFeature | `ath:competitionFeature` |Set of features and notes included by officials in a starting list or results (e.g., 'Qualified without standard in field events', 'Advanced to next round by Referee') | [CompetitionFeatureType](#competitionfeaturetype) |
| protestStatus | `ath:protestStatus` | Status of the protest action of the competitor at a stage of the competition. | [ProtestStatusType](#proteststatustype) |
| bibIdentifier | `ath:bibIdentifier` | Text or number printed on the bib, identifying a competitor during the competition. | Text |
| transponderIdentifier | `ath:transponderIdentifier` | Text or code identifying a competitor by a transponder. | Text |
| inCompetition | `ath:inCompetition` |Competition in which a competitor takes part. | [Competition](#competitions) |
| startingOrder | `ath:startingOrder` | Competitor's order in the start list of a competition stage. | Integer |
| trackLane | `ath:trackLane` | Track lane number assigned to a competitor in case of certain track disciplines. | Integer |
| rank | `ath:rank` | Position in the ranking of results. | Integer |
| record | `ath:record` | Flags indicating records or best performances achieved after the competition competition (e.g., World Record, National Record, etc.). | [Record](#record) |
| created | `dc:created` | Exact date and time when the results were produced. | [DateTime](#datetime) |
| performance | `ath:performance` | Measure to quantify the performance of the competitor after a competition stage.  | [Performance](#performance) |
| award | `ath:award` | Award related to the result achieved by the athlete. | Text |


### Performance

* class: `ath:Performance`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a performance. | Text |
| windAssistance | `ath:windAssistance` | Wind speed at the moment of registering the performance (it could be either positive or negative). | Text |
| record | `ath:record` | Flags indicating records and bests achieved after the competition round (e.g., World Record, National Record, Personal Best, Season Leader, etc.). | [Record](#record) |
| discipline | `ath:sportsDiscipline` | Type of an Athletics competition according to specific rules set by governing bodies (e.g., `Outdoor Sprint Relays`). | [Discipline](#discipline) |
| date | `dc:date` | Date when the athlete achieved a performance. | [Date](#date) |
| competitor | `ath:competitor` | Athlete or team that achieved the performance. | [Athlete](#athlete) or [Team](#team) |

### TimePerformance

* class: `ath:TimePerformance`
* subClassOf: `[ath:Performance](#performance)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| time | `ath:time` | Official measure of a performance expressed as time. | [Time](#time) |
| reactionTime | `ath:reactionTime` | Reaction time of an athlete during a sprint event. | [Time](#time) |

### PointsPerformance

* class: `ath:PointsPerformance`
* subClassOf: `[ath:Performance](#performance)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| points | `ath:points` | Official measure of a performance expressed as score points. | Number |

### DistancePerformance

* class: `ath:DistancePerformance`
* subClassOf: `[ath:Performance](#performance)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| distance | `schema:distance` | Official measure of a performance expressed as distance. | [Distance](#distance) |


### QualificationCriteria

* class: `ath:QualificationCriteria`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| description | `schema:description` | Descriptive text of the qualification criteria. | Text |
| byPlaceOrStandard | `ath:byPlaceOrStandard` | Number of competitors that are qualified in a round by rank (track events) or standard (field events). | Integer |
| byPerformance | `ath:byPerformance` | Number of competitors that are qualified in a round by best performance. | Integer |


### Timekeeping

* class: `ath:Timekeeping`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a timekeeping method. | Text |
| timekeepingType | `dc:type` | Type of the system used. | [TimekeepingType](#timekeepingtype) |
| name | `schema:name` | Name of a method used for timekeeping (i.e., `Hand Timing`, `Fully Automatic` or `Transponder System Timing`) | Text |
| description | `schema:description` | Description and notes about the method used for timekeeping. | Text |
| timingDevice | `ath:timingDevice` | Brand, model and features of the device/system used for timekeeping. | Text |


### Place

* class: `schema:Place`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a venue. | Text |
| name | `schema:name` | Descriptive name of a venue. | Text |
| description | `schema:description` | Descriptive text about a place. | Text |
| address | `schema:address` | Postal address related to a venue. | [PostalAddress](#postaladdress) or Text |
| url | `schema:url` | Webpage URL about a venue. | URL |
| image | `schema:image` | Picture about a venue. | URL |
| geo | `schema:geo` | Coordinates of a venue. | [GeoCoordinates]  or [GeoShape]  |
| map | `schema:hasMap` | URL to a map pointing to a venue. | URL |
| telephone | `schema:telephone` | Telephone number of a venue. | Text |
| fax | `schema:faxNumber` | Fax number of a venue. | Text |


### PostalAddress

* class: `schema:PostalAddress`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| identifier | `schema:identifier` | Unique character string to identify a postal address. | Text |
| name | `schema:name` | Descriptive name of the place (e.g., Helsinki Olympic Stadium). | Text |
| streetAddress | `schema:streetAddress` | The street address (e.g., Paavo Nurmen tie 1).  | Text |
| locality | `schema:addressLocality` | The locality (e.g., Helsinki). | Text |
| postOficeBoxNumber | `schema:postOficeBoxNumber` | The post office box number for PO box addresses. | Text |
| postalCode | `schema:postalCode` | The postal code (e.g., 00250)| Text |
| country | `schema:addressCountry` | The country (e.g., Finland). | [Country](#country) |


### AthleticsDiscipline

* class: `ath:AthleticsDiscipline`
* superClasses: 
    * `[Race](#race)`
    * `[Throws](#throws)`
    * `[HorizontalJumps](#horizontaljumps)`
    * `[VerticalJumps](#verticaljumps)`
    * `[CombinedEvent](#combinedevent)`  

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| venueType | `ath:venueType` | Type of the stadium (indoor/outdoor). | [VenueType](#venuetype) |
| name | `schema:name` | Descriptive name of the discipline. | Text |

### Race

* class: `ath:Race`
* subClassOf: `[Discipline](#discipline)`
* superClasses: 
    * `[MiddleOrLongDistanceRace](#middleorlongdistancerace)`
    * `[Hurdles](#hurdles)`
    * `[Sprint](#sprint)`
    * `[RaceWalking](#racewalking)`
    * `[CrossCountry](#crosscountry)`
    * `[RoadRunning](#roadrunning)`
    * `[MountainRunning](#mountainrunning)`
    * `[TrackRelays](#trackrelays)` 
    * `[UltraRunning](#ultrarunning)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| distance | `schema:distance` | Distance of the race. | [Distance](#distance) |
| raceCompetitionType | `ath:raceCompetitionType` | Type of competition (time trial, relays, etc.). | [RaceCompetitionType](#racecompetitiontype) |

### MiddleOrLongDistanceRace

* class: `ath:MiddleOrLongDistanceRace`
* subClassOf: `[Race](#race)`
* superClass: `[Steeplechase](#steeplechase)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| duration | `schema:duration` | Time in case of being a time-fixed competition (i.e., one hour, one day, etc.). | [Time](#time) |

### Steeplechase

* class: `ath:Steeplechase`
* subClassOf: `[MiddleOrLongDistance](middleorlongdistance)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| height | `schema:height` | Obstacle height. | [Distance](#distance) |

### Hurdles

* class: `ath:Hurdles`
* subClassOf: `[Race](#race)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| height | `schema:height` | Hurdles height. | [Distance](#distance) |
| spacing | `schema:spacing` | Horizontal distance between hurdles. | [Distance](#distance) |

### Sprint

* class: `ath:Sprint`
* subClassOf: `[Race](#race)`

### RaceWalking

* class: `ath:RaceWalking`
* subClassOf: `[Race](#race)`


### CrossCountry

* class: `ath:CrossCountry`
* subClassOf: `[Race](#race)`

### RoadRunning

* class: `ath:RoadRunning`
* subClassOf: `[Race](#race)`

### MountainRunning

* class: `ath:MountainRunning`
* subClassOf: `[Race](#race)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| ascent | `ath:ascent` | Total vertical ascent of the race course. | [Distance](#distance) |
| descent | `ath:descent` | Total vertical descent of the race course. | [Distance](#distance) |

### TrackRelays

* class: `ath:TrackRelays`
* subClassOf: `[Race](#race)`


### UltraRunning

* class: `ath:UltraRunning`
* subClassOf: `[Race](#race)`


### Throws

* class: `ath:Throws`
* subClassOf: `[Discipline](#discipline)`
* superClasses:
    * `[ShotPut](#shotput)`
    * `[DiscusThrow](#discusthrow)` 
    * `[HammerThrow](#hammerthrow)`
    * `[JavelinThrow](#javelinthrow)`
    * `[WeightThrow](#weightthrow)` 

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| weight | `schema:weight` | Weight of the throwing object. | Weight |

### ShotPut

* class: `ath:ShotPut`
* subClassOf: `[Throws](#throws)`

### DiscusThrow

* class: `ath:DiscusThrow`
* subClassOf: `[Throws](#throws)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| discus diameter | `schema:discusDiameter` | Discus diameter. | [Distance](#distance) |

### HammerThrow

* class: `ath:HammerThrow`
* subClassOf: `[Throws](#throws)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| hammer wire length | `schema:hammerLength` | Hammer length. | [Distance](#distance) |

### JavelinThrow

* class: `ath:JavelinThrow`
* subClassOf: `[Throws](#throws)`


| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| javelin length | `schema:javelinLength` | Javelin length. | [Distance](#distance) |

### WeightThrow

* class: `ath:WeightThrow`
* subClassOf: `[Throws](#throws)`


### HorizontalJumps

* class: `ath:HorizontalJumps`
* subClassOf: `[Discipline](#discipline)`
* superClasses:
    * `[LongJump](#longjump)`
    * `[TripleJump](#triplejump)` 

### VerticalJumps

* class: `ath:VerticalJumps`
* subClassOf: `[Discipline](#discipline)`
* superClasses:
    * `[HighJump](#highjump)`
    * `[PoleVault](#polevault)` 

### HighJump

* class: `ath:HighJump`
* subClassOf: `[VerticalJumps](#verticaljumps)`

### PoleVault

* class: `ath:PoleVault`
* subClassOf: `[VerticalJumps](#verticaljumps)`

### CombinedEvent

* class: `ath:CombinedEvent`
* subClassOf: `[Discipline](#discipline)`
* superClasses:
    * `[Pentathlon](#pentathlon)`
    * `[Heptathlon](Heptathlon)`
    * `[Decathlon](#decathlon)`
    * `[ThrowsPentathlon](#throwspentathlon)`

| Metadata | Property | Description | Value Type |
|:-------- |:-------- |:----------- |:---------- |
| discipline | `ath:discipline` | Combined sub-disciplines for this event. | [Discipline](#discipline) |

### Pentathlon

* class: `ath:Pentathlon`
* subClassOf: `[CombinedEvent](#combinedevent)`

### Heptathlon

* class: `ath:Heptathlon`
* subClassOf: `[CombinedEvent](#combinedevent)`

### Decathlon

* class: `ath:Decathlon`
* subClassOf: `[CombinedEvent](#combinedevent)`

### ThrowsPentathlon

* class: `ath:ThrowsPentathlon`
* subClassOf: `[CombinedEvent](#combinedevent)`


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

| Code | Gender Type |
| ---- | ----------- |
| `schema:Male` | Men and/or boys. |
| `schema:Female` | Women and/or girls. |


### CompetitionFeatureType

| Code | Issue/feature |
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
| `feature:~` | loss of contact (Race walking) |
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
| `feature:a` | automatic timing with no hundredths of a second measured |
| `feature:A` | performance achieved at altitude |
| `feature:OT` | Oversized Track |


### CategoryType

Standard categories are combinations of gender and age-range: 

| Code | Age‐group | Gender |
| ---- | --------- | ------ |
| `category:U18` | 16 - 17 | Mixed |
| `category:U18M` | 16 - 17 | Male |
| `category:U18F` | 16 - 17 | Female |
| `category:U20` | 18 - 19 | Mixed |
| `category:U20M` | 18 - 19 | Male |
| `category:U20F` | 18 - 19 | Female |
| `category:U23` | 20 - 22 | Mixed |
| `category:U23M` | 20 - 22 | Male |
| `category:U23F` | 20 - 22 | Female |
| `category:SEN` | 23 - 34 | Mixed |
| `category:SENM` | 23 - 34 | Male |
| `category:SENF` | 23 - 34 | Female |
| `category:V35` | 35 ‐ 39 | Mixed |
| `category:M35` | 35 ‐ 39 | Male |
| `category:W35` | 35 ‐ 39 | Female |
| `category:V40` | 40 ‐ 44 | Mixed |
| `category:M40` | 40 ‐ 44 | Male |
| `category:W40` | 40 ‐ 44 | Female |
| `category:V45` | 45 ‐ 49 | Mixed |
| `category:M45` | 45 ‐ 49 | Male |
| `category:W45` | 45 ‐ 49 | Female |
| `category:V50` | 50 ‐ 54 | Mixed |
| `category:M50` | 50 ‐ 54 | Male |
| `category:W50` | 50 ‐ 54 | Female |
| `category:V55` | 55 ‐ 59 | Mixed |
| `category:M55` | 55 ‐ 59 | Male |
| `category:W55` | 55 ‐ 59 | Female |
| `category:V60` | 60 ‐ 64 | Mixed |
| `category:M60` | 60 ‐ 64 | Male |
| `category:W60` | 60 ‐ 64 | Female |
| `category:V65` | 65 ‐ 69 | Mixed |
| `category:M65` | 65 ‐ 69 | Male |
| `category:W65` | 65 ‐ 69 | Female |
| `category:V70` | 70 ‐ 74 | Mixed |
| `category:M70` | 70 ‐ 74 | Male |
| `category:W70` | 70 ‐ 74 | Female |
| `category:V75` | 75 ‐ 79 | Mixed |
| `category:M75` | 75 ‐ 79 | Male |
| `category:W75` | 75 ‐ 79 | Female |
| `category:V80` | 80 ‐ 84 | Mixed |
| `category:M80` | 80 ‐ 84 | Male |
| `category:W80` | 80 ‐ 84 | Female |
| `category:V85` | 85 ‐ 89 | Mixed |
| `category:M85` | 85 ‐ 89 | Male |
| `category:W85` | 85 ‐ 89 | Female |
| `category:V90` | 90 ‐ 94 | Mixed |
| `category:M90` | 90 ‐ 94 | Male |
| `category:W90` | 90 ‐ 94 | Female |
| `category:V95` | 95 ‐ 99 | Mixed |
| `category:M95` | 95 ‐ 99 | Male |
| `category:W95` | 95 ‐ 99 | Female |
| `category:V100` | 100+ | Mixed |
| `category:M100` | 100+ | Male |
| `category:W100` | 100+ | Female |


### Country

Countries may be represented by their [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) code 

For instance: `ZW` for Zimbabwe, `ZA`for South Africa, `TG` for Togo.

### Event Status

| Code | Status |
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

| Code | Record Type |
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

| Code | Record Type |
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

| Code | Best Type |
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

| Code | Role |
| ---- | ---- |
| `role:A` | Athlete |
| `role:C` | Coach |
| `role:G` | Guide (Paralympics only) |
| `role:J` | Judge |
| `role:S` | Technical Official (not Judge) |
| `role:T` | Team Official (not Coach) |


### ResultsStatusType

| Code | Status |
| ---- | ------ |
| `results:startList` | Before competition, Start List	|
| `results:live` | For live updates during competition |
| `results:intermediate` | When competition is stopped, used at pre-defined points |
| `results:unconfirmed` | When the unit is over but not yet unofficial or official.	Only used if other statuses do not come quickly.  |
| `results:unofficial` | Results of the competition released as soon as the event is over, not waiting any official decision of the International Federation. The correctness of data must be assured.  |
| `results:official` | Results of the competition released as soon as the event is officially confirmed taking into account the resolution of the protests, etc.  |
| `results:partial` | Incomplete list, Final Ranking. |
| `results:protested` | After the competition is no longer LIVE and a protest has been lodged	After all decisions on the protest are made the ResultStatus will change to UNOFFICIAL or OFFICIAL as appropriate.  |


### ProtestStatusType

| Code | Status |
| ---- | ---- |
| `protest:CLS` | Closed | 
| `protest:OPN`	| Open | 
| `protest:PND` | Pending |  
| `protest:ROPN` | Re Open | 

### RaceCompetitionType

| Code | Type |
| ---- | ---- |
| `race:RaceIndividual` | Individual Race | 
| `race:RaceRelays`	| Relay Race | 
| `race:RaceTimeTrial`	| Time Trial | 

### VenueType

| Code | Type |
| ---- | ---- |
| `venue:VenueIndoor` | Indoor venue | 
| `venue:VenueOutdoor`	| Outdoor venue | 


### TimekeepingType

| Code | Type |
| ---- | ---- |
| `timekeeping:HT` | Hand Timing | 
| `timekeeping:FAT`	| Fully Automatic | 
| `timekeeping:TST` | Transponder System Timing | 
