# OpenTrack Abstract Model 

## Introduction

This section describes the conceptual model for OpenTrack. As described in [the charter](https://w3c.github.io/opentrack-cg/charter.html),  this model describes data related to Athletics competitions including: Track and Field; Road Running; Race Walking; Cross-Country Running; Mountain Running; and trail Running disciplines.

This model will be focus on Athletics competitions, having into account: events; athletes and teams; results; performances; management of start lists; results; and facilities. 

This document specifies <mark>the model in an abstract way, not the implementation of the final vocabulary</mark> with classes, properties and codes.  

## References

OpenTrack descriptions need homogeneous classes, properties and data types to specify values of properties. This work is based [on existing requirements](http://opentrack.run/standards/), and rules set up by [IAAF](http://iaaf.org).

Some of the entities referred in this document, are named using abbreviations. These are the main organizations involved in the management and definition of Athletics rules:

* AIMS - [Association of International Marathons and Distance Races](http://www.aimsworldrunning.org)
* IAAF - [International Association of Athletics Federations](http://iaaf.org)
* IAU - [International Association of Ultrarunners](http://www.iau-ultramarathon.org)
* IOC - [International Olympic Committee](https://www.olympic.org/the-ioc)
* IPC - [International Paralympic Committee](http://www.paralympic.org/athletics)
* ITRA - [International Trail Running Association](http://www.i-tra.org/)
* WMA - [World Masters Athletics](http://www.world-masters-athletics.org)
* WMRA - [World Mountain Running Association](http://www.wmra.info)
* NACAC – [North American, Central American and Caribbean Athletic Association](http://www.athleticsnacac.org/)
* CONSUDALE - [Confederación Sudamericana de Atletismo](http://consudatle.org/)

[Infobox template](https://en.wikipedia.org/wiki/Template:Infobox_sports_competition_event) for Wikipedia articles about Athletics results.


## Overview of the model

The model is related to the competition management in Athletics. By using this model systems will be able to describe, collect, process, store and publish information related to the following entities. 

* **[Competitors](#Competitors)**. **[Athletes](#Athletes)** or **[Teams](#Teams)** that takes part in Athletics competitions. Athletes are defined by gender, age, nationality, affiliation to club and/or federation, and other personal information.       

* **[Athletics Events](#Athletics Events)**. Sports organized occasion where Athletics competitions are planed and take place at a specific location during a period of time. These events may have of different nature, depending on the disciplines, schedule, competitors, and scope (e.g., championships tournaments, leagues, etc.). Athletics events may include one or several [Athletics competitions] (e.g., [Summer Olympic Games](https://en.wikipedia.org/wiki/Athletics_at_the_Summer_Olympics) include 24 independent competition disciplines for men and 23 for women).

* **[Athletics Competitions](#Athletics Competitions)**. Competition events corresponding to specific disciplines where competitors take part (e.g., 100m Men). Competitions are composed of one or more rounds. 

* **[Competition Rounds](#Competition Rounds)**. Stages of Athletics competitions (e.g., Heats, Finals, etc.) where competitors are distributed in groups. Rounds depend on the competition rules for each discipline (i.e, horizontal and vertical jumps have different rules regarding rounds). 

* **[Start List](#Start List)**. Ordered set of competitors (athletes or teams) qualified to compete in a specific competition round. Start list contains information about competitors, their marks and other competition information provided by judges.

* **[Results](#Results)**. Ordered list of competitors with their **performances** after a concrete round. It serves as ranking for each stage of the competition. Result list items will include information about the impact of the performance in the competition (i.e., records, disqualifications, competition 'under protest', etc.).

* **[Performances](#Performances)**. Resulting competitor's accomplishment recognized by judges after a competition round. Measurements depend on the type of discipline (i.e., running performances are measured as time, jumps and throws are measured in centimetres). It may include information about the conditions in which competitor got the performance (e.g., wind speed).

* **[Venues](#Venues)**. Location where events and competitions are held.

## Competitors

Competitor is an agent that takes part in Athletics competitions. Depending on the type of competition, either for individuals or for teams, agent is either an **[Athlete](#Athletes)** or a **[Team](#Teams)**, respectively. 

### Athletes

Athletes are persons who participate in Athletics competitions. Athletes may be described using the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the person as athlete. | Text |
| name | Athlete's full name. | Text |
| family name | Athlete's family name; surname. | Text |
| given name | Athlete's given name; first name. | Text |
| alternate name | An alias to name the athlete. | Text |
| family name | Athlete's family name. | Text |
| address | Main residence address of the athlete. | [Location](#Locations) or Text |
| image | Picture of the athlete. | URL |
| email | Email address. | Text |
| url | Webpage URL about the athlete. | URL |
| gender | Athlete's gender. | [Gender](#Gender) |
| height | Athlete's height. | [Quantitive Value](#Quantitive Values) |
| weight | Athlete's weight. | [Quantitive Value](#Quantitive Values) |
| nationality | Athlete's nationality. | [Country](#Countries) |
| federation | Federation which the athlete is attached to. | [Federation](#Federations) |
| coach | Athlete's main coach. | [Person](#Persons) |
| sponsor | Athlete's sponsor. | [Person](#Persons) or [Organization](#Organizations) |
| team | Team which the athlete is affiliated to. | **[Team](#Teams)** |


### Teams

In certain competitions, such as relay races, competitors are groups of athletes or teams. These teams could be clubs, national teams, or just a joint of several athletes. 

Teams may be described using the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the team. | Text |
| name | Descriptive name of the team. | Text |
| alternate name | An alias to name the team. | Text |
| address | Main postal address where the team is registered or located. | [Location](#Locations) or Text |
| image | Picture of the team. | URL |
| logo | Logo or flag of the team. | URL |
| email | Main email address of the team. | Text |
| url | Webpage URL about the team. | URL |
| federation | Federation which the team is attached to. | [Federation](#Federations) |
| sponsor | Sponsor of the team. | [Person](#Persons) or [Organization](#Organizations) |
| coach | Main coach of the team. | [Person](#Persons) |
| captain(s) | Athlete(s) who represents the team. | **[Athlete](#Athletes)** |
| athlete(s) | Athlete(s) affiliated to the team. | **[Athlete](#Athletes)** |


### Athletics Events

Events where Athletics competitions are planed and held. These competitions take place at a specific location during a concrete period of time. Athletics events may include one or several [Athletics competitions] of different nature, depending on disciplines (e.g., 100m, marathon, pole vault, etc.), schedule (e.g. one-day meetings, World championships, etc.), competitors (e.g., U23, Masters, etc.), and scope (e.g., regional, national, supranational championships, leagues, etc.). 

Examples of Athletics events are: [IAAF World Championships London 2017](http://www.iaafworldchampionships.com), [European Throwing Cup, 2017](http://www.european-athletics.org/competitions/european-throwing-cup/), [European Combined Events Team Championships Super League, Tallin 2017](http://www.european-athletics.org/competitions/european-combined-events-team-championships-super-league/), [USATF Cross Country Championships](http://www.usatf.org/Events---Calendar/2017/USATF-Cross-Country-Championships.aspx), and [Summer Olympic Games Rio 2016](https://www.olympic.org/rio-2016/athletics). 

These events may be described by the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the event. | Text |
| name | Descriptive name of the event. | Text |
| alternate name | An alias to name the event. | Text |
| location | Location where the event is held. | [Location](#Locations) or Text |
| url | Webpage URL about the event. | URL |
| image | Picture about the event. | URL |
| start date | Date and time when the event starts. | [Date and Time](#Date, Time and Periods) |
| end date | Date and time when the event ends. | [Date and Time](#Date, Time and Periods) |
| status | Status of the event (planned, cancelled, etc.) | [Event Status](#Event Status) |
| organizer | Person or organization that organizes the event. | [Person](#Persons) or [Organization](#Organizations) |
| contributor | Person or organization that collaborates in the organization of the event. | [Person](#Persons) or [Organization](#Organizations) |
| sponsor | Person or organization that sponsors the event. | [Person](#Persons) or [Organization](#Organizations) |
| attendee(s) | Person(s) who attends the event. | [Person](#Persons) |
| competition(s) | Competition events that are part of the main event. | **[Athletics Competition](#Athletics Competitions)** |


### Athletics Competitions

Competitions are those events that correspond to specific disciplines where competitors take part (e.g., 100m Men). These competitions may be part or broader Athletics events (e.g., 110m Hurdles at Summer Olympic Games). Athletics competitions are composed of one or more rounds, at least the final. 

Competitions may be described by the following attributes:


| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the competition. | Text |
| name | Descriptive name of the competition. | Text |
| gender | Gender of athletes involved in the competition. In case of mixed competitions, more than a gender may be indicated. | [Gender](#Gender) |
| date | Date and time where the competition is held. | [Date and Time](#Date, Time and Periods) |
| age range | Description of the athletes' range of age to be eligible for the competition.  | Text |
| round(s) | Round(s) performed as part of the competition (trials, heats, final, etc.).  | **[Competition Round](#Competition Rounds)** |
| combined event(s) | Sub-events included as part of the main competition. For instance, in case of Combined Events such as Pentathlon, Heptathlon and Decathlon that are composed of several independent events. | **[Competition Round](#Athletics Competitions)** |


### Competition Rounds

Rounds are stages in Athletics competitions (e.g., heats, finals, throwing trials) where competitors are distributed. Number and type of rounds depend on the competition rules for each discipline. For instance, track sprint competitions with many participants may have various heats at preliminary round, several heats at first round, two semifinals, and a final.

Competition rounds aims at qualifying athletes to next round until the final. There are competitions that only have one final round such as Marathon or Cross Country races.

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the round and/or heat. | Text |
| name | Descriptive name of the round and/or heat. | Text |
| description | Longer descriptive text of the round and/or heat. | Text |
| date | Date and time where the round and/or heat is held. | [Date and Time](#Date, Time and Periods) |
| age range | Description of the athletes' range of age to be eligible for the competition.  | Text |
| time-keeping | Type of time keeping used to control athletes' performances (manual, automatic, etc.).  | [Timekeeping](#Timekeeping) |
| start list | List of competitors qualified to take part in the round and/or heat. | **[Start List](#Start List)** |
| results | List with the results after the celebration of the competition.  | **[Results](#Results)** |

### Start Lists

Rounds of competitions have **start lists**. These lists are provided by officials and include an ordered set of competitors (athletes or teams) qualified to compete in the related heat or round. 

Each entry of the start list may include the following properties:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the entry in the list. | Text |
| rank | Position of the competitor in the rank of the round and/or heat. | Number |
| feature(s) | Set of features and notes included by officials in the starting list (e.g., 'Qualified without standard in field events', 'Advanced to next round by Referee') | **[Start Lists and Results](#Start Lists and Results)** |
| under protest | Flag indicating the competitor will take part in the round and/or heat competing 'under protest'. | Boolean |
| bib identifier | Text or number identifying the competitor, printed on the bib. | Text |
| order | Competitor's order in the start list. | Number |
| lane | Track lane number assigned to the competitor in case of certain track disciplines. | Number |
| score points | Score points accumulated by the competitor at the start of the round and/or heat, in case of Combined Events such as Decathlon and Heptathlon. | Number |
| personal best | Competitor's best performance in the same discipline at the start of the round and/or heat.  | **[Performance](#Performances)** |

### Results

Results are an ordered list collecting the performances achieved by competitors after a concrete round. It serves as ranking for each stage of the competition. Result list items will include information about the impact of the performance in the competition (i.e., records, disqualifications, competition 'under protest', etc.).

Each entry of the results may include the following properties:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the entry in the list. | Text |
| rank | Position of the competitor in the rank after the round and/or heat. | Number |
| feature(s) | Set of features and notes included by officials after the round and/or heat (e.g., Red Card in Race Walking).  | **[Start Lists and Results](#Start Lists and Results)** |
| under protest | Flag indicating the competitor took part in the round and/or heat competing 'under protest'. | Boolean |
| bib identifier | Text or number identifying the competitor, printed on the bib. | Text |
| score points | Score points earned by the competitor in a specific round and/or heat in case of Combined Events such as Decathlon and Heptathlon. | Number |
| record(s) | Flags indicating records achieved after the competition round (e.g., World Record, Personal Best, etc.). | Number |
| performance | Measure to quantify the performance of the competitor after the round and/or heat.  | **[Performance](#Performances)** |

### Performances

Performance represent the resulting competitor's accomplishment measured and recognized by officials after a competition round/heat. Measurements depend on the type of discipline (i.e., running performances are measured as time, jumps and throws are measured in centimetres). It may include information about the conditions in which competitor got the performance (e.g., wind speed).

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify univocally the performance. | Text |
| value | Official measure of the performance (i.e., distance, time) | [Quantitive Value](#Quantitive Values) |
| reaction time | Reaction time of the athlete during a sprint event. | [Quantitive Value](#Quantitive Values) |
| wind | Wind speed at the moment of registering the performance. | [Quantitive Value](#Quantitive Values) |



### Venues

Location where events and competitions are held. Competitions may take part either in stadia (i.e., track and field events) or outside stadia (e.g., cross-country, mountain races, road races, etc.).

Venues can be described by the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the venue. | Text |
| name | Descriptive name of the venue. | Text |
| description | Descriptive text about the place. | Text |
| address | Postal address related to the venue. | [Location](#Locations) or Text |
| url | Webpage URL about the venue. | URL |
| image | Picture about the venue. | URL |
| geo | Coordinates of the venue. | URL |
| map | URL to a map pointing to the venue. | URL |
| telephone | Telephone number of the venue. | URL |
| fax number | Fax number of the venue. | URL |
| type | Type of the venue. | **[Venue Type](#Venue Type)** |


### Locations

<mark>TODO</mark>

### Persons

<mark>TODO</mark>

### Organizations

<mark>TODO</mark>

### Federations

<mark>TODO</mark>


## Classification schemas and data types 

Definitions and values for this set of entities and value schemes are mainly extracted from the official Technical Competition Rules published by IAAF.

### Gender

Enumeration of genders with two values: 

* Male
* Female

NOTE: Competition is divided into men’s and women’s classifications, but there are mixed competitions. Although mixed competitions are not frequent, **mixed stadium competition*** in field events and in races of 5000m or longer are permitted.


### Start Lists and Results

(RULE 132.4)

Standard abbreviations and symbols used in the preparation of start lists and results where applicable:

| Issue/feature | Code |
| ------------- | ---- |
| Did not start | DNS |
| Did not finish | DNF |
| No valid trial recorded | NM |
| Disqualified | DQ |
| valid trial in High Jump and Pole vault | “O” |
| Failed trial in Field events | “X” |
| Passed trial in Field events | “–” |
| Retired from competition | r |
| Qualified by place in track events | Q |
| Qualified by time in track events | q |
| Qualified by standard in field events– Q |
| Qualified without standard in field events | q |
| Advanced to next round by Referee | qR |
| Advanced to next round by Jury of Appeal | qJ |
| Bent knee (Race walking) | “>” |
| loss of contact (Race walking) | “~” |
| yellow Card | yC |
| Second yellow Card | yRC |
| Red Card | RC |


### Competing "Under protest"

In either a track or field  event, if an athlete makes an immediate oral protest against having been charged with a false start or a failure trial, the athlete may continue competing “under protest”.


### Timekeeping

There are three alternative methods of timekeeping, recognised as official by IAAF:
- (HT) Hand timing;
- (FAT) Fully Automatic timing obtained from a Photo Finish System;
- timing provided by a transponder system.

### Quantitive Values

Measures for distance, height, weight, speed (of wind)…

<mark>TODO</mark>

### Age and Sex Categories

According to IAFF RULE 141 (Age and Sex Categories), competition may be divided into age group classifications as follows:

#### Junior

Junior (U20) is a category under the age of 20. Participators in the competitions in this class may be athletes who have not completed their twentieth birthday on the 31st December of the year the competition occurs.

* Under-18 (U18) Boys and Girls (16 or 17 years)
* Under-20 (U20) Men and women (19 or 19 years)

#### U23

EA, NACAC and CONSUDALE recognises the U23 age category for those athletes aged between 20-22. Athletes under this age range may take part in the competitions. Historically, NACAC had a U25 category for those athletes under 25.

#### Senior

Athletes aged 20-34 belongs to Senior age group.

#### Master

Master Men and women: Any athlete who has reached his/her 35th birthday Masters go in 5 year bands (global standard set by WMA): V35, V40, V45 etc. It is commonly conflated with gender e.g. M45, W50.

| Age | Male age‐group ID | Female age‐group ID |
| --- | ----------------- | ------------------- |
| 35 ‐ 39 | M35 | W35 |
| 40 ‐ 44 | M40 | W40 |
| 45 ‐ 49 | M45 | W45 |
| 50 ‐ 54 | M50 | W50 |
| 55 ‐ 59 | M55 | W55 |
| 60 ‐ 64 | M60 | W60 |
| 65 ‐ 69 | M65 | W65 |
| 70 ‐ 74 | M70 | W70 |
| 75 ‐ 79 | M75 | W75 |
| 80 ‐ 84 | M80 | W80 |
| 85 ‐ 89 | M85 | W85 |
| 90 ‐ 94 | M90 | W90 |
| 95 ‐ 99 | M95 | W95 |
| 100+ | M100 | W100 |

#### Youth

Youth sports includes school sport at primary and secondary school level. Below 18, most of sports and territories considers age categories in ranges of 2 years, represented as: U4, U6, U8, U10, U12, U14, U16, U18. Age classification assignments and competition rules (disciplines) depend on each sport/federation/territory, so there are no homogeneous criteria to classify boys and girls into these categories.

IAAF recognises the U18 category, including Boys and Girls aged 16 or 17, so this is the only category to be recognised officially into this vocabulary. 

#### Summary

So, in summary:

| Age | Male age‐group ID | Female age‐group ID |
| --- | ----------------- | ------------------- |
| 16 - 17 | U18 (Male) | U18 (Female) |
| 18 - 19 | U20 (Male) | U20 (Female) |
| 20 - 22 | U23 (Male) | U23 (Female) |
| 23 - 34 | Senior (Male) | Senior (Female) |
| 35 ‐ 39 | M35 | W35 |
| 40 ‐ 44 | M40 | W40 |
| 45 ‐ 49 | M45 | W45 |
| 50 ‐ 54 | M50 | W50 |
| 55 ‐ 59 | M55 | W55 |
| 60 ‐ 64 | M60 | W60 |
| 65 ‐ 69 | M65 | W65 |
| 70 ‐ 74 | M70 | W70 |
| 75 ‐ 79 | M75 | W75 |
| 80 ‐ 84 | M80 | W80 |
| 85 ‐ 89 | M85 | W85 |
| 90 ‐ 94 | M90 | W90 |
| 95 ‐ 99 | M95 | W95 |
| 100+ | M100 | W100 |


### Territories and countries

Athletics federations are autonomous bodies in control of Athletics at different levels, depending on the territory they cover. By its geographical area covered,  federations can be local (e.g., [19 Athletics federations for each region in Spain](http://www.rfea.es/web/federacion/mapaespana.asp)), national (e.g., [British Athletics](http://www.britishathletics.org.uk/governance/about-uka/)) and supranational (e.g. [Oceania Athletics](https://athletics-oceania.com)). Federations are usually attached to other federations hierarchically. 

#### Country

Countries may be represented by their [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) code (e.g., `ZW` for Zimbabwe, `ZA`for South Africa, `TG` for Togo).

#### Other territories

See list of [territorial federations] recognized by IAAF.

### Date, Time and Periods

Dates and time will be represented using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. 

Examples:
* Time (`[hh][mm][ss]` or `[hh]:[mm]:[ss]`): `04:45:38` (it can include the timezone `<time>±[hh]:[mm]`)
* Date (`[YYYY][MM][DD]` or `[YYYY]-[MM]-[DD]`): 2017-04-07
* Date and Time (`<date>T<time>`): `2017-04-07T04:45:38+00:00` 

### Distances

Some Athletics disciplines (i.e., throwing events and jumps) measure performances as distances. IAAF specifies measures in whole centimetres. 

Also, distances are needed to describe the event in the case of races (e.g., 200m, 3000m steeplechase, length of cross-country course, etc.). In this case, distances are usually measured in metres or miles. Distances may be described as `<value>+<unit>`.

### Venue Type

Competition could be held either within stadia (track and field events) or outside (cross country, mountain races, road races, and others).

Types of venues that can be considered:

- Stadium (or arena)
- Outdoor Course:
 - Road course: course on road suitable for running and race-walking competitions.
  - Circular Road Course: Start and finish line at the same point 
  - Linear Road Course: Start and finish line at different places.
 - Off-road course: off-road course on an open area.  
  - Cross Country Course: course on an open, woodland area, covered as far as possible by grass, with natural obstacles 
  - Mountain Course: open country course that is mainly off-road and can have significant elevation gain on the route, within a natural environment such as mountains, desert, forests or plains). Macadamised or concrete surface is acceptable but minimum.
   - Uphill Course: the profile of the course involves considerable amounts of ascent, and is mainly uphill.
   - Ascent/descent course: the profile of the course involves considerable amounts of ascent and descent, with start and finish at the same elevation level approximately.

These venues may be described in detail. Some proposed metadata related to the type of venue (extending the basic [description of Venue](#Venues)): 

Stadium: Outdoor|Indoor
 - track
  - type {Straight|Oval}
  - lanes (integer)
  - length (metres)

 - Payment Accepted (cash, credit card, etc.)
 - Currencies Accepted (cash, credit card, etc.)
 
Outdoor course:
 - Start point (geo)
 - Finish point (geo)
 - aid station(s): stations for providing athletes any kind of aid such us clothing, communications, sponges, food or drinks.
 - elevation gain (metres)
 - elevation loss (metres)
 - course geometry (polygon, polyline)

### Disciplines

We can identify several categories for Athletics events, depending on gender, age, type of venue, distance and type of event (e.g., 100m Hurdles Women and 110m Hurdles Men). Although events rules may vary for the same type of discipline (i.e., differences of shot weight depending on gender and/or age).

A potential hierarchical abstract classification for disciplines could be. 

Athletics Competitions:

- **Stadia Competitions**: Track and Field events within stadium

 - **Outdoor Track and Field**: events held within outdoor stadia
  - **Outdoor Track**:
   - **Sprints**: distance below 400m.
   - **Hurdles**: distance below 400m with hurdles.
   - **Relays**: relay events in distance below 400m.
   - **Middle distance**: distances over 400m up to 2000m.
   - **Long distance**: higher distances races.
   - **Steeplechase**: races with steeplechase obstacles.
   - **Track Race Walking**: race walking races with standard distances up to 5000m.
  - **Outdoor Field**: 
   - **Throws**: throwing events
   - **Jumps**: vertical and horizontal jumps.
    - **Vertical jumps**.
    - **Horizontal jumps**.
  - **Outdoor Combined**: combination of disciplines such as decathlon and heptathlon.
   - **Decathlon**
   - **Heptathlon**
   
 - **Indoor Track and Field**: events held within indoor stadia
  - **Indoor Track**:
   - **Indoor Sprints**: distance below 400m.
   - **Indoor Hurdles**: distance below 400m with hurdles.
   - **Indoor Relays**: relay events in distance below 400m.
   - **Indoor Middle distance**: distances over 400m up to 2000m.
   - **Indoor Long distance**: higher distances races.
   - **Indoor Track Race Walking**: race walking races indoor.   
  - **Indoor Field**: 
   - **Indoor Throws**: throwing events
   - **Indoor Jumps**: vertical and horizontal jumps.
    - **Vertical jumps**.
    - **Horizontal jumps**.   
  - **Indoor Combined**: combination of disciplines such as heptathlon or pentathlon.
   - **Indoor Pentathlon**
   - **Indoor Heptathlon**
  
- **Off-Stadia Competitions**:
 - **Road Competitions**: races outside stadia, on road.
  - **Road Running**: running events on road
  - **Road Race-Walking**: race walking outside stadium (standard distances from 5000m to 50Km).
 - **Off-road**: non-standard distances, surfaces and altitude, offroad.
  - **Cross Country**: races on a loop course placed on open or woodland area. 
  - **Mountain Races**: races on off-road terrain with significant elevation gain on the route.
   - **Classic Mountain Races**: races either mainly uphill or with positive/negative altitude balanced.
   - **Long Distance Mountain Races**: off-road races that include distances of approximately 20km to 42.195km, with significant elevation gain.
   - **Relay Mountain Races**: relay mountain race competitions.
   - **Time trial Mountain Races**: mountain races with individual start times at various intervals. The results are ordered by the individual finish times.
  - **Trail Races**: trail races on a variety of terrain (including dirt roads, forest paths and single track footpaths) within a natural environment in open country (such as mountains, desert, forests or plains) that is mainly off-road. Organisers may impose or recommend obligatory security equipment applicable.


<mark>Should we implement a classification of all disciplines?</mark> 

#### Outdoor Competitions

Hurdle Races
The standard distances:
Men, U20 Men and U18 Boys: 110m, 400m
Women, U20 women and U18 Girls: 100m, 400m
Steeplechase Races: The standard distances are: 2000m and 3000m.
Relay Races: The standard distances are: 4 × 100m, 4 × 200m, 100m-200m-300m-400m Medley Relay (Medley Relay), 4 × 400m, 4 × 800m, 1200m-400m-800m-1600m Distance Medley Relay (Distance Medley Relay), 4 × 1500m.

Horizontal jump: long jump, triple jump
Vertical jumps: pole vault, High Jump
Throwing events: Shot Put, Discus Throw, Hammer Throw, Javelin Throw

Race Walking: 5000m, 10km, 10,000m, 20km, 20,000m, 50km, 50,000m.

#### Indoor Competitions

60m, 60m H, 50m H
200m, 400m, 800m, 4 × 200m, 4 × 400m
1500m, 3000m

Pole Vault, High Jump, Shot Put, Horizontal Jumps

Race Walking: 3000m, 5000m;

Combined events competitions (indoor)
U18 Boys, U20 and Senior Men (Pentathlon)
Pentathlon consists of five events held on one day in the following order:
60m Hurdles; long Jump; Shot Put; High Jump; 1000m.
U18 Boys, U20 and Senior Men (Heptathlon):
Seven events which may be held over two consecutive days in the following order:
- First day: 60m; long Jump; Shot Put; High Jump.
- Second day: 60m Hurdles; Pole vault; 1000m.
U18 Girls, U20 and Senior Women (Pentathlon)
Five events held on one day in the following order:
60m Hurdles; High Jump; Shot Put; long Jump; 800m.


#### Road Races

Standard distances: 10km, 15km, 20km, Half-Marathon, 25km, 30km, Marathon (42.195km), 100km and Road Relay.
(There may be drinking/sponging and refreshment stations).


### Field Competitions

### Trials

in all Field events, except for the High Jump and Pole vault, where there are more than eight athletes, each athlete shall be allowed three trials and the eight athletes with the best valid performances shall be allowed three additional trials.

Where there are eight athletes or fewer, each athlete shall be allowed six trials. if more than one fail to achieve a valid trial during the first three rounds of trials, such athletes shall compete in subsequent rounds of trials before those with valid trials, in the same relative order according to the original draw.

Except in High Jump and Pole vault, a valid trial shall be indicated by the measurement taken. For the standard abbreviations and symbols to be used in all other
cases see [Start lists and results](#Start lists and results).

* Values: `valid|failure`
* Trial: `passed|eliminated`

A ´substitute´ trial is given in case an athlete is hampered in a trial or it cannot be correctly recorded.

Result of trials each athlete will be credited with the best of all his trials.


### Vertical jumps

Including: High Jump, and Pole Vault.

Measurements (height) are recorded in whole centimetres.

Results of trials:
- O = Cleared
- X = Failed
- – = Did not jump

### Horizontal jumps

Including: Long Jump, and Triple Jump.


### Throwing events

Including: Shot Put, Discus Throw, Hammer Throw, Javelin Throw, [Weight Throw](https://en.wikipedia.org/wiki/Weight_throw)

Measurements (distance) are recorded in whole centimetres.

Trials: `failure|valid`


### Combined events competitions

Scores are calculated according to the current iAAF Combined events Scoring tables.

#### U18 Boys, U20 and Senior Men: Pentathlon and Decathlon

Pentathlon consists of five events held on one day in the following order: 
`long Jump; Javelin throw; 200m; Discus throw; 1500m`

Decathlon consists of ten events which may be held on two consecutive days in the following order:
- First day: `100m; long Jump; Shot Put; High Jump; 400m.` 
- Second day: `110m Hurdles; Discus throw; Pole vault; Javelin throw; 1500m.`

#### U20 and Senior Women (Heptathlon and Decathlon)

Heptathlon consists of seven events, which may be held on two consecutive days in the following order: 
- First day: `100m Hurdles; High Jump; Shot Put; 200m.` 
- Second day: `long Jump; Javelin throw; 800m.`

Women’s Decathlon consists of ten events which may be held on two consecutive days in the following order:
- First day: `100m; Discus throw; Pole vault; Javelin throw; 400m.`
- Second day: `100m Hurdles; long Jump; Shot Put; High Jump; 1500m.`

#### U18 Girls (Heptathlon only)
U18 Girls’ Heptathlon consists of seven events, which may be held on two consecutive days in the following order:
- First day: 100m Hurdles; High Jump; Shot Put; 200m.
- Second day: long Jump; Javelin throw; 800m.

### Race Walking

Race walking is a progression of steps so taken that the walker makes contact with the ground, so that no visible (to the human eye) loss of contact occurs. the advancing leg must be straightened (i.e. not bent at the knee) from the moment of first contact with the ground until the vertical upright position.

The standard distances shall be: 
- indoor: 3000m, 5000m; 
- outdoor: 5000m, 10km, 10,000m, 20km, 20,000m, 50km, 50,000m.

There are some features specific for this competition, such as 'Yellow paddle' or 'Red Cards' shown during a competition: {0-3} per athlete -> Disqualification.

### Road Races

Standard distances: 
10km, 15km, 20km, Half-Marathon, 25km, 30km, Marathon (42.195km), 100km and Road Relay.

### Cross-Country
Variable distance.

### Mountain Races 
Variable Distance.
Average incline: {5-20}%
Ascent: in metres
Descent: in metres
Highest point: <=3000m 

Types (3 types):
- Classic Mountain Races (two subtypes)
  - Mainly uphill
  - Up and down races
- Long Distance Mountain Races: Distances of approximately 20km to 42.195km, with a maximum elevation of 4000m. 
- Relay Mountain Races
- Time Trial Mountain Races: individual start times at various intervals.

There may be Drinking / Sponging and Refreshment Stations at suitable places along the course.

### Trail Races
Variable distance.

Trail Running does not specify the use of a particular technique or specific equipment in its progression, but the organiser may, however, impose or recommend obligatory security equipment applicable (A survival blanket, whistle, supply of water and a food reserve
are the minimum elements which each athlete should possess).

- Recommended security equipment `text`
- Required secururity equipment `text`

If specifically permitted by the Organisers, athletes may use poles such as hiking poles.

- Poles Allowed? `yes|no`

Aid Stations may be located along the course.

There may be Drinking / Sponging and Refreshment Stations at suitable places along the course.

### Ranks

Consecutive order of athletes or teams (including repetition of ranks) 1,2,3,4,5,…
  
  
### Records 
- Title of record
- Event
- Type {World record | Olympic record | National record | Competition record | others}


### Scoring tables

IAAF Scoring Tables for Outdoor Events -> performance points 

### Event Status

planned, cancelled, etc.

<mark>TODO</mark>