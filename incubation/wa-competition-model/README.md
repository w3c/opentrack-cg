# World Athletics Competition Model Proposal

World Athletics sent a proposal of API to share competition results. The method to send competition results through `POST /send-results` with a JSON object in the body and using the following the following model. 

The structure of the message starts with a high level event (let's name it [Competition](#competition))

![High level data model](./images/wa-proposal.svg "Simplified UML with the main entities and their properties")

## Summary of entities

- [Competition](#competition): Global competition.
- [Athlete](#athlete)s: Athletes, part of the competition.
- [RelayTeam](#relayteam)s: Teams, part of the competition.
- [Venue](#venue)s: Venues where the competition was held. 
- [CompetitionUnit](#competitionunit)s: Events of the main competition
  - [Round](#round)s: Rounds and stages of the unitary competitions
    - [Race](#race)s: Unitary races and field events part of a round.
      - [IndividualResult](#individualresult)s: Results of a individual competition.
      - [RelayResult](#relayresult): Results of a relay competition.
        - Detailed Results
          - [DetailOutdoorHorizontalJump](#detailoutdoorhorizontaljump): Outdoor HJ detailed result.
          - [DetailIndoorHorizontalJump](#detailindoorhorizontaljump): Indoor HJ detailed result.
          - [DetailVerticalJump](#detailverticaljump): VJ detailed result.
          - [DetailThrow](#detailthrow): Detailed result in a throws unitary competition.
          - [DetailSplitTimes](#detailsplittimes): Detailed split times.

## Summary of Controlled Vocabularies

- [Date](#date)
- [Time](#time)
- [Gender](#gender)
- [Country](#country)
- [Round Type](#roundtype)
- [WindAssistance](#windassistance)
- [QualificationType](#qualificationtype)
- Types of Results
  - [Fault](#fault)
  - [TimeResultFormat](#timeresultformat)
  - [MetresResultFormat](#metresresultformat) 
  - [PointsResultFormat](#pointsresultformat) 
  - [MetresTrackResultFormat](#metrestrackresultformat)
- [HorizontalJumpFeatures](#horizontaljumpfeatures)
- [VerticalJumpFeatures](#verticaljumpfeatures)
- [ThrowsFeatures](#throwsfeatures)

## Competition

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `waId` | `integer` |  WA identifier of the competition|  |
| `athletes` | `array` <[Athlete](#athlete)> | Athletes in the competition | yes | 
| `relayTeams`  |  `array` <[RelayTeam](#relayteam)> | Relay teams in the competition | yes | 
| `venues`  |  `array` <[Venue](#venue)> | Venues in the competition | yes | 
| `units`  |  `array` <[CompetitionUnit](#competitionunit)> | Structure of the competition in units | yes | 

## Athlete

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `id` | `integer`  | Local identifier | yes |
| `waId` | `integer` |  WA identifier |  |
| `firstName` | `string` | First name | yes | 
| `lastName` | `string` | Last name | yes |
| `birthdate` | `string` <[Date](#date)> | Date of birth | yes |
| `country` | enum: <[Country](#country)> | Country code | yes |
| `sex` | enum: <[Gender](#gender)> |  |  |

Covered by the current model (entity [Athlete](https://w3c.github.io/opentrack-cg/spec/competition/#athlete)).

## RelayTeam

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `id` | `integer`  | Local identifier | yes |
| `waId` | `integer` |  WA identifier | |
| `name` | `string` | Name of the team | yes | 
| `country` | enum: <[Country](#country)> or `INT` | Country code in IOC format or "INT" | yes |

It is not fully covered by the current model (entity [SportsTeam](https://w3c.github.io/opentrack-cg/spec/competition/#sports-team)): we would need to allow the `INT` nationality.

## Venue

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `id` | `integer`  | Local identifier | yes |
| `waId` | `integer` |  WA identifier | |
| `name` | `string` | Name of the venue | yes | 
| `country` | enum: <[Country](#country)> | Country code in IOC format | yes |

Covered by the current model (entity [Place](https://w3c.github.io/opentrack-cg/spec/competition/#place)).

## CompetitionUnit

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `waEventId` | `integer` | WA event identifier | yes |
| `title` | `string` |  Additional information about this competition unit to distinguish from other competition units of the same WA event |  |
| `minAge` | `integer` | Minimum age of the athletes competing in this unit [0..130]. |  | 
| `maxAge` | `integer` | Maximum age of the athletes competing in this unit [0..130]. |  |
| `rounds` | `array` <[Round](#round)> | List of rounds for the competition unit. | yes |

## Round

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `type` | enum: <[RoundType](#roundtype)> | Stage of the competition |   |
| `races` | `array` <[Race](#race)> | In-competition information of each round.  |  |

## Race

| property | type | description | Required  | 
| -------- | ----------- | ----- | ------------- |
| `number` | `integer` | Number of races in this round |  yes |
| `wind` | `string` <[WindAssistance](#windassistance)> |  Wind assistance |  |
| `oversizedTrack` | `boolean` |  Flag to indicate if the track is oversized |  |
| `date` | `string` <[Date](#date)> |  Date when the race was held |  yes | 
| `startTime` | `string` <[Time](#time)> |  Start time of the race  |   | 
| `endTime` | `string` <[Time](#time)> |  End time of the race |  | 
| `results` | `array` <[IndividualResult](#individualresult)> or <[RelayResult](#relayresult)> | Results of this race. | yes |

## IndividualResult

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `athleteId` | `integer` | Local identifier. |  yes |
| `wind` | `string` <[WindAssistance](#windassistance)> |  Wind assistance |  |
| `result` | `string` <[Fault](#fault)> or <[TimeResultFormat](#timeresultformat)> or <[MetresResultFormat](#metresresultformat)> or <[PointsResultFormat](#pointsresultformat)> or <[MetresTrackResultFormat](#metrestrackresultformat)> | Individual result details |  |
| `outOfCompetition` | `boolean` |  Flag to indicate out of competition |  | 
| `placeInRace` | `integer` |  Place in the race |   | 
| `placeInRound` | `integer` |  Place in the round |  | 
| `qualified` | enum: <[QualificationType](#qualificationtype)> | Type of qualification  | |
| `detail` | `array` <[DetailOutdoorHorizontalJump](#detailoutdoorhorizontaljump)> or <[DetailIndoorHorizontalJump](#detailindoorhorizontaljump)> or <[DetailVerticalJump](#detailverticaljump)> or <[DetailThrow](#detailthrow)> or <[DetailSplitTimes](#detailsplittimes)> | Details of the results.  |  |

## RelayResult

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `relayTeamId` | `integer` | Local identifier. |  yes |
| `legs` | `array` <`integer`>|  Local athlete's identifiers |  |
| `result` | `string` <[Fault](#fault)> or <[TimeResultFormat](#timeresultformat)> or <[MetresResultFormat](#metresresultformat)> or <[PointsResultFormat](#pointsresultformat)> or <[MetresTrackResultFormat](#metrestrackresultformat)> | Team result details |  |
| `outOfCompetition` | `boolean` |  Flag to indicate out of competition |  | 
| `placeInRace` | `integer` |  Place in the race |   | 
| `placeInRound` | `integer` |  Place in the round |  | 
| `qualified` | enum: <[QualificationType](#qualificationtype)> | Type of qualification  | |

## Detailed Results

[IndividualResult](#individualresult) may include details of each athlete's result using the `detail` property. The structure of this property varies, depending on the type of event. 

The types of result details are:

- [DetailOutdoorHorizontalJump](#detailoutdoorhorizontaljump)
- [DetailIndoorHorizontalJump](#detailindoorhorizontaljump)
- [DetailVerticalJump](#detailverticaljump)
- [DetailThrow](#detailthrow)
- [DetailSplitTimes](#detailsplittimes) 

### DetailOutdoorHorizontalJump

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `result` | `string` <[HorizontalJumpFeatures](#horizontaljumpfeatures)> or <[MetresResultFormat](#metresresultformat)> | Measurement |  yes |
| `wind` | `string` <[WindAssistance](#windassistance)> |  Wind assistance | yes |

### DetailIndoorHorizontalJump

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `result` | <[HorizontalJumpFeatures](#horizontaljumpfeatures)> or <[MetresResultFormat](#metresresultformat)> | Measurement |  yes |

### DetailVerticalJump

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `height` | `string` <[MetresResultFormat](#metresresultformat)> | Measurement |  yes |
| `attempts` | `string` <[VerticalJumpFeatures](#verticaljumpfeatures)> | Attempts history | yes |

### DetailThrow

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `result` | `string` <[ThrowsFeatures](#throwsfeatures)> or <[MetresResultFormat](#metresresultformat)> | Measurement |  yes |

### DetailSplitTimes

| property | type | description | Required  | 
| --------- | ----------- | ----- | ------------- |
| `distance` | `string` <[MetresResultFormat](#metresresultformat)> | Measurement |  yes |
| `result` | `string`  |  <[TimeResultFormat](#timeresultformat)> | yes |


## Enumerations and Codes

### Date

Dates are represented using the ISO 8601 standard: `[YYYY][MM][DD]` or `[YYYY]-[MM]-[DD]`.

### Time

Time is represented using the ISO 8601 standard: `[hh][mm][ss].sss` or `[hh]:[mm]:[ss].sss`.

### Gender 
- `female` 
- `male` 

### Country 

IOC values:

`AFG`,  `AIA`,  `ALB`,  `ALG`,  `ANA`,  `AND`,  `ANG`,  `ANT`,  `ARG`,  `ARM`,  `ART`,  `ARU`,  `ASA`,  `AUS`,  `AUT`,  `AZE`,  `BAH`,  `BAN`,  `BAR`,  `BDI`,  `BEL`,  `BEN`,  `BER`,  `BHU`,  `BIH`,  `BIZ`,  `BLR`,  `BOL`,  `BOT`,  `BRA`,  `BRN`,  `BRU`,  `BUL`,  `BUR`,  `CAF`,  `CAM`,  `CAN`,  `CAY`,  `CGO`,  `CHA`,  `CHI`,  `CHN`,  `CIV`,  `CMR`,  `COD`,  `COK`,  `COL`,  `COM`,  `CPV`,  `CRC`,  `CRO`,  `CUB`,  `CYP`,  `CZE`,  `DEN`,  `DJI`,  `DMA`,  `DOM`,  `ECU`,  `EGY`,  `ERI`,  `ESA`,  `ESP`,  `EST`,  `ETH`,  `FIJ`,  `FIN`,  `FRA`,  `FSM`,  `GAB`,  `GAM`,  `GBR`,  `GBS`,  `GEO`,  `GEQ`,  `GER`,  `GHA`,  `GIB`,  `GRE`,  `GRN`,  `GUA`,  `GUI`,  `GUM`,  `GUY`,  `HAI`,  `HKG`,  `HON`,  `HUN`,  `INA`,  `IND`,  `IRI`,  `IRL`,  `IRQ`,  `ISL`,  `ISR`,  `ISV`,  `ITA`,  `IVB`,  `JAM`,  `JOR`,  `JPN`,  `KAZ`,  `KEN`,  `KGZ`,  `KIR`,  `KOR`,  `KOS`,  `KSA`,  `KUW`,  `LAO`,  `LAT`,  `LBA`,  `LBN`,  `LBR`,  `LCA`,  `LES`,  `LIE`,  `LTU`,  `LUX`,  `MAC`,  `MAD`,  `MAR`,  `MAS`,  `MAW`,  `MDA`,  `MDV`,  `MEX`,  `MGL`,  `MHL`,  `MKD`,  `MLI`,  `MLT`,  `MNE`,  `MNT`,  `MON`,  `MOZ`,  `MRI`,  `MTN`,  `MYA`,  `NAM`,  `NCA`,  `NED`,  `NEP`,  `NFI`,  `NGR`,  `NIG`,  `NMI`,  `NOR`,  `NRU`,  `NZL`,  `OMA`,  `PAK`,  `PAN`,  `PAR`,  `PER`,  `PHI`,  `PLE`,  `PLW`,  `PNG`,  `POL`,  `POR`,  `PRK`,  `PUR`,  `PYF`,  `QAT`,  `ROU`,  `RSA`,  `RUS`,  `RWA`,  `SAM`,  `SEN`,  `SEY`,  `SGP`,  `SKN`,  `SLE`,  `SLO`,  `SMR`,  `SOL`,  `SOM`,  `SRB`,  `SRI`,  `SSD`,  `STP`,  `SUD`,  `SUI`,  `SUR`,  `SVK`,  `SWE`,  `SWZ`,  `SYR`,  `TAN`,  `TGA`,  `THA`,  `TJK`,  `TKM`,  `TKS`,  `TLS`,  `TOG`,  `TPE`,  `TTO`,  `TUN`,  `TUR`,  `TUV`,  `UAE`,  `UGA`,  `UKR`,  `URU`,  `USA`,  `UZB`,  `VAN`,  `VEN`,  `VIE`,  `VIN`,  `YEM`,  `ZAM`,  `ZIM`

### RoundType

Values: 
- `Final`
- `Final A-B` 
- `Semifinal` 
- `Quarterfinal` 
- `Round 1` 
- `Qualification` 
- `Group` 
- `Preliminary Round` 
- `Extra Race`

### WindAssistance

Measure of wind:
- `^[+-]?[1-9]?[0-9]\.[0-9]$` (expressed in m/s)
- `NWI`, `NW`, `W`

### QualificationType

- `q`
- `Q`

### Types of Results

A [Race](#race) always produces an array of either [IndividualResult](#individualresult)s or [RelayResult](#relayresult)s. Each entity -[IndividualResult](#individualresult) and [RelayResult](#relayresult)- contains a property `result` whose value pattern (a `string`) varies depending on the type of event. The patterns for these events are as follows:

#### Fault

Fault values: 

- `DNF`
- `DNS`
- `DQ`
- `NM`

#### TimeResultFormat

Regular expression: `^(((0|[1-9][0-9]{0,2})\.[0-9][0-9h])|((0|[1-9][0-9]{0,2}):[0-5][0-9](\.[0-9][0-9h])?)|((0|[1-9][0-9]{0,2})(:[0-5][0-9]){2}(\.[0-9][0-9h])?))$`

Note: Measured time is represented following these patterns: 
- `ss.uu`, 
- `mm:ss.uu`, 
- `hh:mm:ss.uu`, 
- `mm:ss`,
- `hh:mm:ss`.

Where `hh` (hours), `mm` (minutes), `ss` (seconds), `uu` (milliseconds)

In case of hand timing, the `h` character must be used in place of the millisecond digit (i.e., `ss.uh`, `mm:ss.uh`, and `hh:mm:ss.uh`)

#### MetresResultFormat

Regular expression: `^(0|[1-9][0-9]{0,2})\.[0-9]{2}$` (result in metres with centimetre precision)

#### PointsResultFormat

Regular expression: `^(0|[1-9][0-9]{0,2})\.[0-9]{2}$` (combined event points)

#### MetresTrackResultFormat

Regular expression: `^0|([1-9][0-9]{0,5})$` (result in metres)

#### HorizontalJumpFeatures

- `o`: clearance (valid trial)
- `-`: pass
- `x`: failure

#### VerticalJumpFeatures

Values: 
- `o` 
- `x` 
- `r` 
- `-` 
- `xo` 
- `xx`
- `xr`
- `x-`
- `or`
- `xxo`
- `xxx`
- `xxr`
- `xx-`
- `xor`

#### ThrowsFeatures

Values: 
- `x` 
- `-`
- `r`
