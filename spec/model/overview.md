# OpenTrack Abstract Model 

## Introduction

This section describes the conceptual model for OpenTrack. As described in [the charter](https://w3c.github.io/opentrack-cg/charter.html),  this model describes data related to Athletics competitions including: Track and Field; Road Running; Race Walking; Cross-Country Running; Mountain Running; and trail Running disciplines.

This model will be focus on Athletics competitions, having into account: events; athletes and teams; results; performances; management of start lists; results; and facilities. 

## References

OpenTrack descriptions need homogeneous classes, properties and datatypes to specify values of properties. This work is based [on existing requirements](http://opentrack.run/standards/), and rules set up by [IAAF](http://iaaf.org).

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


## Overview

The model is related to the competition management in Athletics. By using this model systems will be able to describe, collect, process, store and publish information related to:

* **[Competitors]**. **Athletes** or **Teams** that takes part in Athletics competitions. Athletes are defined by gender, age, nationality, affiliation to club and/or federation, and other personal information.       

* **[Athletics events]**. Sports organized occasion where Athletics competitions are planed and take place at a specific location during a period of time. These events may have of different nature, depending on the disciplines, schedule, competitors, and scope (e.g., champioships, tournaments, leagues, etc.). Athletics events may include one or several [Athletics competitions] (e.g., [Summer Olympic Games](https://en.wikipedia.org/wiki/Athletics_at_the_Summer_Olympics) include 24 independent competition disciplines for men and 23 for women).

* **[Athletics competitions]**. Competition events corresponding to specific disciplines where competitors take part (e.g., 100m Men). Competitions are composed of one or more rounds. 

* **[Competition rounds]**. Stages of Athletics competitions (e.g., Heats, Finals, etc.) where competitors are distributed in groups. Rounds depend on the competition rules for each discipline (i.e, horizontal and vertical jumps have different rules regarding rounds). 

* **[Start list]**. Ordered set of competitors (athletes or teams) qualified to compete in a specific competition round. Start list contains information about competitors, their marks and other competition information provided by judges.

* **[Results]**. Ordered list of competitors with their **performances** after a concrete round. It serves as ranking for each stage of the competition. Result list items will include information about the impact of the performance in the competition (i.e., records, disqualifications, competition 'under protest', etc.).

* **[Performances]**. Resulting competitor's accomplishment recognized by judges after a competition round. Measurements depend on the type of discipline (i.e., running performances are measured as time, jumps and throws are measured in centimetres). It may include information about the conditions in which competitor got the performance (e.g., wind speed).

* **[Venues]**. Location where events and competitions are held.

## Competitors

Competitor is an agent that takes part in Athletics competitions. Depending on the type of competition, either for individuals or for teams, agent is either an **Athlete** or a **Team**, respectively. 

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
| address | Main residence address of the athlete. | [Location] or [Text] |
| image | Picture of the athlete. | URL |
| email | Email address. | Text |
| url | Webpage URL about the athlete. | URL |
| gender | Athlete's gender. | [Gender Types] |
| height | Athlete's height. | Distance |
| weight | Athlete's weight. | QuantitiveValue |
| nationality | Athlete's nationality. | [Country] |
| federation | Federation which the athlete is attached to. | [Federation] |
| coach | Athlete's main coach. | [Person] |
| sponsor | Athlete's sponsor. | [Person] or [Organization] |
| team | Team which the athlete is affiliated to. | **Team** |


### Teams

In certain competitions, such as relay races, competitors are groups of athletes or teams. These teams could be clubs, national teams, or just a joint of several athletes. 

Teams may be described using the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the team. | Text |
| name | Descriptive name of the team. | Text |
| alternate name | An alias to name the team. | Text |
| address | Main postal address where the team is registered or located. | [Location] or [Text] |
| image | Picture of the team. | URL |
| logo | Logo or flag of the team. | URL |
| email | Main email address of the team. | Text |
| url | Webpage URL about the team. | URL |
| federation | Federation which the team is attached to. | [Federation] |
| sponsor | Sponsor of the team. | [Person] or [Organization] |
| coach | Main coach of the team. | [Person] |
| captain(s) | Athlete(s) who represents the team. | **Athlete** |
| athlete(s) | Athlete(s) affiliated to the team. | **Athlete** |


### Athletics Events

Events where Athletics competitions are planed and held. These competions take place at a specific location during a concrete period of time. Athletics events may include one or several [Athletics competitions] of different nature, depending on disciplines (e.g., 100m, marathon, pole vault, etc.), schedule (e.g. one-day meetings, World championships, etc.), competitors (e.g., U23, Masters, etc.), and scope (e.g., regional, national, supranational champioships, leagues, etc.). 

Examples of Athletics events are: [IAAF World Championships London 2017](http://www.iaafworldchampionships.com), [European Throwing Cup, 2017](http://www.european-athletics.org/competitions/european-throwing-cup/), [European Combined Events Team Championships Super League, Tallin 2017](http://www.european-athletics.org/competitions/european-combined-events-team-championships-super-league/), [USATF Cross Country Championships](http://www.usatf.org/Events---Calendar/2017/USATF-Cross-Country-Championships.aspx), and [Summer Olympic Games Rio 2016](https://www.olympic.org/rio-2016/athletics). 

These events may be described by the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the event. | Text |
| name | Descriptive name of the event. | Text |
| alternate name | An alias to name the event. | Text |
| location | Location where the event is held. | [Location] or [Text] |
| url | Webpage URL about the event. | URL |
| image | Picture about the event. | URL |
| start date | Date and time when the event starts. | DateTime |
| end date | Date and time when the event ends. | DateTime |
| status | Status of the event (planned, cancelled, etc.) | [EventStatus] |
| organizer | Person or organization that organizes the event. | [Person] or [Organization] |
| contributor | Person or organization that collaborates in the organization of the event. | [Person] or [Organization] |
| sponsor | Person or organization that sponsors the event. | [Person] or [Organization] |
| attendee(s) | Person(s) who attends the event. | [Person] |
| competition(s) | Competition events that are part of the main event. | **[Athletics Competition]** |


### Athletics Competitions

Competitions are those events that correspond to specific disciplines where competitors take part (e.g., 100m Men). These competitions may be part or broader Athletics events (e.g., 110m Hurtles at Summer Olympic Games). Athletics competitions are composed of one or more rounds, at least the final. 

Competitions may be described by the following attributes:


| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the competition. | Text |
| name | Descriptive name of the competition. | Text |
| gender | Gender of athletes involved in the competition. In case of mixed competitions, more than a gender may be indicated. | [Gender Types] |
| date | Date and time where the competition is held. | DateTime |
| ageRange | Description of the athletes' range of age to be eligible for the competition.  | Text |
| round(s) | Round(s) performed as part of the competition (trials, heats, final, etc.).  | **[Competition Round]** |
| combined event(s) | Sub-events included as part of the main competition. For instance, in case of Combined Events such as Pentathlon, Heptathlon and Decathlon that are composed of several independent events. | **[Competition Round]** |


### Competition Rounds

Rounds are stages in Athletics competitions (e.g., heats, finals, throwing trials) where competitors are distributed. Number and type of rounds depend on the competition rules for each discipline. For instance, track sprint competitions with many participants may have various heats at preliminary round, several heats at first round, two semifinals, and a final.

Competition rounds aims at qualifying athletes to next round until the final. There are competitions that only have one final round such as Marathon or Cross Country races.

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the round and/or heat. | Text |
| name | Descriptive name of the round and/or heat. | Text |
| description | Longer descriptive text of the round and/or heat. | Text |
| date | Date and time where the round and/or heat is held. | DateTime |
| ageRange | Description of the athletes' range of age to be eligible for the competition.  | Text |
| time-keeping | Type of time keeping used to control athletes' performances (manual, automatic, etc.).  | [TimeKeepingType] |
| start list | List of competitors qualified to take part in the round and/or heat. | [Start List] |
| results | List with the results after the celebration of the competition.  | [Results] |

### Start Lists

Rounds of competitions have **start lists**. These lists are provided by officials and include an ordered set of competitors (athletes or teams) qualified to compete in the related heat or round. 

Each entry of the start list may include the following properties:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the entry in the list. | Text |
| rank | Position of the competitor in the rank of the round and/or heat. | Number |
| feature(s) | Set of features and notes included by officials in the starting list (e.g., 'Qualified without standard in field events', 'Advanced to next round by Referee') | [Start Lists and Results Features] |
| under protest | Flag indicating the competitor will take part in the round and/or heat competing 'under protest'. | Boolean |
| bib indentifier | Text or number identifying the competitor, printed on the bib. | Text |
| order | Competitor's order in the start list. | Number |
| lane | Track lane number assigned to the competitor in case of certain track disciplines. | Number |
| score points | Score points accumulated by the competitor at the start of the round and/or heat, in case of Combined Events such as Decathlon and Heptathlon. | Number |
| personalBest | Competitor's best performance in the same discipline at the start of the round and/or heat.  | **[Performance]** |

### Results

Results are an ordered list collecting the performances achieved by competitors after a concrete round. It serves as ranking for each stage of the competition. Result list items will include information about the impact of the performance in the competition (i.e., records, disqualifications, competition 'under protest', etc.).

Each entry of the results may include the following properties:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the entry in the list. | Text |
| rank | Position of the competitor in the rank after the round and/or heat. | Number |
| feature(s) | Set of features and notes included by officials after the round and/or heat (e.g., Red Card in Race Walking).  |
| under protest | Flag indicating the competitor took part in the round and/or heat competing 'under protest'. | Boolean |
| bib indentifier | Text or number identifying the competitor, printed on the bib. | Text |
| score points | Score points earned by the competitor in a specific round and/or heat in case of Combined Events such as Decathlon and Heptathlon. | Number |
| record(s) | Flags indicating records achieved after the competition round (e.g., World Record, Personal Best, etc.). | Number |
| performance | Measure to quantify the performance of the competitor after the round and/or heat.  | **[Performance]** |

### Performances

Performance reprensent the resulting competitor's accomplishment measured and recognized by officials after a competition round/heat. Measurements depend on the type of discipline (i.e., running performances are measured as time, jumps and throws are measured in centimetres). It may include information about the conditions in which competitor got the performance (e.g., wind speed).

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify univocally the performance. | Text |
| value | Official measure of the performance (i.e., distance, time) | [Quantitative Value] |
| reaction time | Reaction time of the athlete during a sprint event. | [Quantitative Value] |
| wind | Wind speed at the momment of registering the performance. | [Quantitative Value] |



### Venues

Location where events and competitions are held. Competitions may take part either in stadia (i.e., track and field events) or outside stadia (e.g., cross country, mountain races, road races, etc.).

Venues can be described by the following attributes:

| Property | Description | Value Type |
|:-------- |:----------- |:---------- |
| identifier | Unique character string to identify the venue. | Text |
| name | Descriptive name of the venue. | Text |
| description | Descriptive text about the place. | Text |
| address | Postal address related to the venue. | [Location] or [Text] |
| url | Webpage URL about the venue. | URL |
| image | Picture about the venue. | URL |
| geo | Coordinates of the venue. | URL |
| map | URL to a map pointing to the venue. | URL |
| telephone | Telephone number of the venue. | URL |
| fax number | Fax number of the venue. | URL |
| type | Type of the venue. | **[Venue Type]** |



## Classification Schemas and Datatypes 

Definitions and values for this set of entities and value schemes are mainly extracted from the official Technical Competition Rules published by IAAF.

### Gender

Enumeration of genders with two values: 

* Male
* Female

NOTE: Competition is divided into men’s and women’s classifications, but there are mixed competitions. Although mixed competitions are not frequent, **mixed stadium competition*** in field events and in races of 5000m or longer are permitted.


### Start lists and results

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


### Age and Sex Categories

IAFF RULE 141 (Age and Sex Categories)
Competition under these Rules may be divided into age group classifications as follows:

#### Junior and Senior

* Under-18 (U18) Boys and Girls (16 or 17 years)
* Under-20 (U20) Men and women (19 or 19 years)

EA, NACAC and CONSUDALE recognises the U23 age category for those athletes aged between 20-22. Athletes under this age range may take part in the competitions. Historically, NACAC had a U25 category for those athletes under 25.

Athletes aged 20-34 belongs to Senior age group.

So, in summary:

| Age | Code |
| --- | ---- |
| 16 - 17 | U18 (Male|Female) |
| 18 - 19 | U20 (Male|Female) |
| 20 - 22 | U23 (Male|Female) |
| 23 - 34 | Senior (Male|Female) |


#### Master

Master Men and women: Any athlete who has reached his/her 35th birthday Masters go in 5 year bands (global standard set by WMA): V35, V40, V45 etc. It is commonly conflated with gender e.g. M45, W50.

| Age | Male age‐group | Female age‐group |
| --- | -------------- | ---------------- |
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

Junior (U20) is a category under the age of 20. Participators in the competitions in this class may be athletes who have not completed their twentieth birthday on the 31st December of the year the competition occurs.


#### Youth

Youth sports includes school sport at primary and secondary school level. Below 18, most of sports and territories considers age categories in ranges of 2 years, represented as: U4, U6, U8, U10, U12, U14, U16, U18. Age classification assigments and competition rules (disciplines) depend on each sport/federation/territory, so there are no homogeneous criteria to classify boys and girls into these categories.

IAAF recognises the U18 category, including Boys and Girls aged 16 or 17, so this is the only category to be recognised officially into this vocabulary. 

### Territories and countries

A geographical territory or region that can be either a country or not, but which has certain aspects of self-government, at least to the extent of being autonomous in the control of its sport and which is thus recognised as such by the iAAF.

#### Country

Countries will be represented by their [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) code (e.g., `ZW` for Zimbabwe, `ZA`for South Africa, `TG` for Togo).

#### Other territories

See taxonomy of territorial federations.

### Date, Time and Periods

Dates and time will be represented using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. 

### Distance

Distances will be described as `<Number> <unit>` (e.g., `200 m`).

Existing vocabularies:
- https://schema.org/Distance


### Venue Type

Competition could be held either within stadia (track and field events) or outside (cross country, mountain races, marathons, etc.).

Types:

- Stadium (or arena)
- Outdoor Course:
 - Road course: course on road suitable for running and race-walking competitions.
  - Circular Road Course: Start and finish line at the same point 
  - Linear Road Course: Start and finish line at different places.
 - Off-road course: off-road course on a open area.  
  - Cross Country Course: course on an open, woodland area, covered as far as possible by grass, with natural obstacles 
  - Mountain Course: open country course that is mainly off-road and can have significant elevation gain on the route, within a natural environment such as mountains, desert, forests or plains). Macadamised or concrete surface is acceptable but minimum.
   - Uphill Course: the profile of the course involves considerable amounts of ascent, and is mainly uphill.
   - Ascent/descent course: the profile of the course involves considerable amounts of ascent and descent, with start and finish at the same elevation level approximately.


Desciption of these venues

Stadium:
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

We can identify several categories for disciplines, depending on where are held, distance and type of event.

Athletics Event:
- Stadia Events: Track and Field events within stadium
 - Outdoor Track and Field Events: events held within outdoor stadia
  - Outdoor Track Events:
   - Sprints, Hurdles and Relays: distance below 400m
   - Middle distance events: distances over 400m up to 2000m.
   - Long distance and Steeplechase: distances over 3000 and all steeplechase events.
   - Track Race Walking (standard distances up to 5000m)   
  - Outdoor Field Events: 
   - Throws: throwing events
   - Jumps: vertical and horizontal jumps.
  - Outdoor Combined events: combination of disciplines such as decathlon and heptathlon.
 - Indoor Track and Field Events: events held within indoor stadia
  - Indoor Track Events:
   - Indoor Sprints, Hurdles and Relays: distance below 400m
   - Indoor Middle distance events: distances over 400m up to 2000m.
   - (Long distance and Steeplechase: distances over 3000 and all steeplechase events.)NO
   - Indoor Track Race Walking.   
  - Indoor Field Events: 
   - Indoor Throws: throwing events
   - Indoor Jumps: vertical and horizontal jumps.
  - Indoor Combined events: combination of disciplines such as heptathlon or pentathlon.
- Non-Stadia Events:
 - Road events (outside estadium): 
  - Road Running Events: running events on road
  - Road Race-Walking Events: race walking outside stadium (standard distances from 5000m to 50Km).
 - Cross Country, Mountain and Trail Races: non-standard distances, surfaces and altitude.
  - Cross Country Events:
  - Mountain Race Events:
  - Trail Race Events:


Although distances could be the same, male and female events will be considered different due to the differences in rules (e.g. steeplechases with different height for male and female categories, and shot put with different weight). 


### Sprints, Hurdles and Relays 

Event | Male | Female 
----- | ---- | ------  
100m | X | X       
100mH |   | X
110mH | X | 
200m | X | X
300m | X | X
400m | X | X
400mH | X | X
4x100m | X | X
4x200m | X | X
4x400 | X | X

### Middle Distances

Event | Male | Female 
----- | ---- | ------ 
600m | X | X
800m | X | X
1000m | X | X
1500m | X | X
Mile | X | X
2000m | X | X

### Long Distance and Steeplechase

Event | Male | Female 
----- | ---- | ------ 
2000m SC | X | X
3000m | X | X
3000m SC | X | X 
2 Miles | X | X
5000m | X | X
10000m | X | X

### Road Running

Event | Male | Female 
----- | ---- | ------ 
10 km | X | X
15 km | X | X
10 Miles | X | X
20 km | X | X
HM | X | X
25 km | X | X
30 km | X | X
Marathon | X | X
100 km | X | X
1 Mile | (non IAAF) | (non IAAF) 
non-standard distances |  | 

### Race Walking

Event | Male | Female 
----- | ---- | ------ 
3km W | X | X
5km W | X | X
10km W | X | X
20km W | X | X
30km W | X | X
35km W | X | X
50km W | X | X

### Jumps

Event | Male | Female 
----- | ---- | ------ 
HJ | X | X
PV | X | X
LJ | X | X
TJ | X | X

### Throws

Event | Male | Female 
----- | ---- | ------ 
SP | X | X
DT | X | X
HT | X | X
JT | X | X


### Combined

Event | Male | Female 
----- | ---- | ------ 
Decathlon | X |
Heptathlon | X |


WMA World Outdoor Championships
Stadia:
100m
200m       
400m       
800m       
1500m       
5000m       
10000m       
110/100/80m Short Hurdles    
400/300/200m Long Hurdles    
4x100m Relay     
4x400m Relay     
3000/2000m Steeplechase    
5000m Track Race Walk
Decathlon (Male)
Heptathlon (Female)
Weight Pentathlon
Pole Vault, High Jump, Long Jump, Triple Jump, Hammer Throw, Shot Put, Discus Throw, Javelin Throw, Weight Throw 

Non‐Stadia:
8km Cross-Country
Marathon
Half Marathon
10km Road Race
10km Road Race-Walk
20km Road Race-Walk

Stadia :
60m     
200m    
400m     
800m    
1500m     
3000m     
60m Short Hurdles    
3000m Track Race-Walk
4x200m Relay
Pole Vault, High Jump, Long Jump, Triple Jump, Shot Put, Weight Throw
Indoor Pentathlon 
(Male: 60m Hurdles, Long Jump, Shot Put, High Jump, 1000m)
(Female: 60m Hurdles, High Jump, Shot Put, Long Jump, 800m)

Non-Stadia:
8km Cross Country
10km Road Race Walk
Half Marathon
10km Road Race




## Disciplines

### Outdoor Competitions

Hurdle Races
The standard distances:
Men, U20 Men and U18 Boys: 110m, 400m
Women, U20 women and U18 Girls: 100m, 400m

Steeplechase Races: The standard distances are: 2000m and 3000m.

Relay Races
The standard distances are: 4 × 100m, 4 × 200m, 100m-200m-300m-400m Medley Relay (Medley Relay), 4 × 400m, 4 × 800m, 1200m-400m-800m-1600m Distance Medley Relay (Distance Medley Relay), 4 × 1500m.

Horizontal jump: long jump, triple jump
Vertical jumps: pole vault, High Jump
Throwing events: Shot Put, Discus Throw, Hammer Throw, Javelin Throw

Race Walking: 5000m, 10km, 10,000m, 20km, 20,000m, 50km, 50,000m.

### Indoor Competitions

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

### Road Races

10km, 15km, 20km, Half-Marathon, 25km, 30km, Marathon (42.195km), 100km and Road Relay.

There may be drinking/sponging and refreshment stations 

## Field Competitions

### Trials

in all Field events, except for the High Jump and Pole vault, where there are more than eight athletes, each athlete shall be allowed three trials and the eight athletes with the best valid performances shall be allowed three additional trials.

Where there are eight athletes or fewer, each athlete shall be allowed six trials. if more than one fail to achieve a valid trial during the first three rounds of trials, such athletes shall compete in subsequent rounds of trials before those with valid trials, in the same relative order according to the original draw.

Except in High Jump and Pole vault, a valid trial shall be indicated by the measurement taken. For the standard abbreviations and symbols to be used in all other
cases see (Start lists and results).

Values:
`valid|failure`
trial: `passed|eliminated`

´substitute´ trial is given in case an athlete is hampered in a trial or it cannot be correctly recorded.

Result of trials each athlete will be credited with the best of all his trials.


### Vertical jumps

Measurements (height) are recorded in whole centimetres.

Jumps:
- O = Cleared
- X = Failed
- – = Did not jump


### Horizontal jumps

(long jump, triple jump)


## Throwing events

(Shot, discus, hammer, javelin)

Trials: `failure|valid`
Measurements are recorded in whole centimetres.


## Combined events competitions

Scores are calculated according to the current iAAF Combined events Scoring tables.

Points (integer????)

### U18 Boys, U20 and Senior Men: Pentathlon and Decathlon

Pentathlon consists of five events held on one day in the following order: 
`long Jump; Javelin throw; 200m; Discus throw; 1500m`

Decathlon consists of ten events which may be held on two consecutive days in the following order:
- First day: `100m; long Jump; Shot Put; High Jump; 400m.` 
- Second day: `110m Hurdles; Discus throw; Pole vault; Javelin throw; 1500m.`


### U20 and Senior Women (Heptathlon and Decathlon)

Heptathlon consists of seven events, which may be held on two consecutive days in the following order: 
- First day: `100m Hurdles; High Jump; Shot Put; 200m.` 
- Second day: `long Jump; Javelin throw; 800m.`

Women’s Decathlon consists of ten events which may be held on two consecutive days in the following order:
- First day: `100m; Discus throw; Pole vault; Javelin throw; 400m.`
- Second day: `100m Hurdles; long Jump; Shot Put; High Jump; 1500m.`

### U18 Girls (Heptathlon only)
U18 Girls’ Heptathlon consists of seven events, which may be held on two consecutive days in the following order:
- First day: 100m Hurdles; High Jump; Shot Put; 200m.
- Second day: long Jump; Javelin throw; 800m.



## Race Walking

Definition of Race Walking
Race walking is a progression of steps so taken that the walker makes contact with the ground, so that no visible (to the human eye) loss of contact occurs. the advancing leg must be straightened (i.e. not bent at the knee) from the moment of first contact with the
ground until the vertical upright position.

Distances
The standard distances shall be: 
- indoor: 3000m, 5000m; 
- outdoor: 5000m, 10km, 10,000m, 20km, 20,000m, 50km, 50,000m.

Yellow paddle
Red Cards shown during a competition: {0-3} per athlete -> Disqualification

## Road Races

Distances: 
10km, 15km, 20km, Half-Marathon, 25km, 30km, Marathon (42.195km), 100km and Road Relay.

## Cross-Country
Variable distance.

## Mountain Races 
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

## Trail Races
Variable distance.

Trail Running does not specify the use of a particular technique or specific equipment in its progression, but the organiser may, however, impose or recommend obligatory security equipment applicable (A survival blanket, whistle, supply of water and a food reserve
are the minimum elements which each athlete should possess).

- Recommended security equipment `text`
- Required secururity equipment `text`

If specifically permitted by the Organisers, athletes may use poles such as hiking poles.

- Poles Allowed? `yes|no`

Aid Stations may be located along the course.

There may be Drinking / Sponging and Refreshment Stations at suitable places along the course.

## Placing

1,2,3,4,5,


## Facilities

Stadium: Outdoor|Indoor

Indoor stadium:
- Straight track:
  - {6-8} lanes
  - lenght (metres)
  
- Oval track:
  - {4-6} lanes
  - lenght (metres)
  
  
## Records 
- Title of record
- Event
- Type {World record | Olympic record | National record}


## Scoring tables

IAAF Scoring Tables for Outdoor Events -> perfomance points 
