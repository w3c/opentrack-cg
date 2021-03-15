# Athletics Disciplines

List of codes (identifiers) for athletics events. These will be described using the [Sports Discipline vocabulary](../competition/#sports-discipline).

- [Athletics Disciplines](#athletics-disciplines)
  * [Races](#races)
    + [Sprints](#sprints)
    + [Hurdles](#hurdles)
    + [Steeplechase](#steeplechase)
    + [Middle Distance & Long Distance Races](#middle-distance---long-distance-races)
    + [Race Walking](#race-walking)
    + [Track Relays](#track-relays)
    + [Road Running](#road-running)
    + [Cross Country](#cross-country)
    + [Mountain Running](#mountain-running)
    + [Ultrarunning](#ultrarunning)
  * [Throws](#throws)
  * [Horizontal Jumps](#horizontal-jumps)
  * [Vertical Jumps](#vertical-jumps)
  * [Combined Disciplines](#combined-disciplines)

## Races

### Sprints

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- |
| 60m | 60m Indoor | Indoor | 60 | Individual | MTR | 60 |
| 100m | 100m Outdoor | Outdoor | 100 | Individual | MTR | 100 |
| i400m | 400m Indoor | Indoor | 400 | Individual | MTR | 400 |
| 200m | 200m Outdoor | Outdoor | 200 | Individual | MTR | 200 |
| 400m | 400m Outdoor | Outdoor | 400 | Individual | MTR | 400 |

### Hurdles

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value | height>value | height>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- | ------------ | ------------ |
| 60mH | 60m Hurdles (0.60) Indoor | Indoor | 60H | Individual | MTR | 60 | MTR | 1.067 |
| 100mH | H100m Hurdles (0.84) Women Outdoor | Outdoor | 100H | Individual | MTR | 100 | MTR | 0.84 |
| 110mH | 110m Hurdles (1.067) Men Outdoor | Outdoor | 110H | Individual | MTR | 110 | MTR | 1.067 |
| 400mH | 400m Hurdles (0.91) Men Outdoor | Outdoor | 400H | Individual | MTR | 400 | MTR | 0.914 |
| 400mHW | 400m Hurdles (0.76) Women Outdoor | Outdoor | 400H | Individual | MTR | 400 | MTR | 0.762 |

Note: Spacing is complex: distance to first hurdle, spacing between intermediate hurdles, distance last hurdle to the end.


### Steeplechase

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value | height>value | height>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- | ------------ | ------------ |
| 2000mSC | 2000m Steeplechase | Outdoor | 2000SC | Individual | MTR | 2000 | MTR | 0.838 |
| 3000mSC | 3000m Steeplechase (36") | Outdoor | 3000SC | Individual | MTR | 3000 | MTR | 0.914 |


### Middle Distance & Long Distance Races

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value | maxDuration |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- | ----------- |
| 800m | 800m Outdoor | Outdoor | 800 | Individual | MTR | 800 |
| i800m | 800m Indoor | Indoor | 800 | Individual | MTR | 800 |
| i1500m | 1500m Indoor | Indoor | 1500 | Individual | MTR | 1500 |
| 1500m | 1500m Outdoor | Outdoor | 1500 | Individual | MTR | 1500 |
| i3000m | 3000m Indoor | Indoor | 3000 | Individual | MTR | 3000 |
| 3000m | 3000m Outdoor | Outdoor | 3000 | Individual | MTR | 3000 |
| 5000m | 5000m Outdoor | Outdoor | 5000 | Individual | MTR | 5000 |
| 10000m | 10000m | Outdoor | 10000 | Individual | MTR | 10000 |
| 24h | 24 Hours | Outdoor | 24H | Individual | | | 23:59:59.999


### Race Walking

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- |
| 10000mRW | 10000m Race Walking on track | Road | 10KW | Individual | MTR | 10000 |
| 10kmRW | 10km Race Walking on Road | Road | 10KW | Individual | MTR | 10000 |
| 20kmRW | 20km Race Walking on Road | Road | 20KW | Individual | MTR | 20000 |
| 5000mRW | 5000m Race Walking on track | Outdoor | 5KW | Individual | MTR | 5000 |
| 50kmRW | 50km Race Walking on Road | Road | 50KW | Individual | MTR | 5000 |


### Track Relays

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- |
| 4x100mR | 4x100m Outdoor | Outdoor | 4X100 | Relays | MTR | 400 |
| 4x200mR | 4x200m Outdoor | Outdoor | 4X200 | Relays | MTR | 800 |
| i4x400mR | 4x400m Indoor | Indoor | 4X400 | Relays | MTR | 1600 |
| 4x400mR | 4x400m Outdoor | Outdoor | 4X400 | Relays | MTR | 1600 |
| 4x800mR | 4x800m Outdoor | Outdoor | 4X800 | Relays | MTR | 3200 |
| 4x1500mR | 4x1500m Outdoor | Outdoor | 4X1500 | Relays | MTR | 6000 |
| MedleyR | Medley Relay Outdoor | Outdoor | MedleyR | Relays |  |  |


### Road Running

| identifier | name | venueType | alternateName | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | --------------- | ------------- | -------------- |
| HMar | Half Marathon | Road | HM | Individual | MTR | 21097 |
| Mar | Marathon | Road | MAR | Individual | MTR | 42195 |


### Cross Country



### Mountain Running



### Ultrarunning



## Throws

| Sub-type | identifier | name | venueType | alternateName | competitionType | weight>unit | weight>value |
| -------- | ---------- | ---- | --------- | ------------- | --------------- | ----------- | ------------ |
| Discus Throw | DT | Discus Throw (1 kg) Outdoor | Outdoor | DT | Individual | KGM | 1 |
| Hammer Throw | HT | Hammer Throw (7.260kg)  | Outdoor | HT | Individual | KGM | 7.26 |
| Javelin Throw | JT | Javelin Throw (800g) | Outdoor | JT | Individual | KGM | 0.8 |
| Shot Put | iSP | Shot Put (4 kg) Indoor | Indoor | SP | Individual | KGM | 4 |
| Shot Put | SP | Shot Put (4 kg) Outdoor | Outdoor | SP | Individual | KGM | 4 |


## Horizontal Jumps 

| Sub-type | identifier | name | venueType | alternateName | competitionType |
| -------- | ---------- | ---- | --------- | ------------- | --------------- |
| Long Jump | iLJ | Long Jump Indoor | Indoor | LJ | Individual |
| Long Jump | LJ | Long Jump Outdoor | Outdoor | LJ | Individual |
| Triple Jump | iTJ | Triple Jump Indoor | Indoor | TJ | Individual |
| Triple Jump | TJ | Triple Jump Outdoor | Outdoor | TJ | Individual |

## Vertical Jumps 

| Sub-type | identifier | name | venueType | alternateName | competitionType |
| -------- | ---------- | ---- | --------- | ------------- | --------------- |
| High Jump | iHJ | High Jump Indoor | Indoor | HJ | Individual |
| High Jump | HJ | High Jump Outdoor | Outdoor | HJ | Individual |
| Pole Vault | iPV | Pole Vault Indoor | Indoor | PV | Individual |
| Pole Vault | PV | Pole Vault Outdoor | Outdoor | PV | Individual |

## Combined Disciplines

| identifier | name | venueType | alternateName | competitionType |
| ---------- | ---- | --------- | ------------- | --------------- |
| Pentathlon | Pen | Pentathlon Women Indoor | Indoor | PEN | Individual |
| Heptathlon | HepW | Heptathlon Women |  | HEP | Individual |
| Heptathlon | iHep | Heptathlon Men Indoor | Indoor | HEP | Individual |
| Heptathlon | HepM | Heptathlon Men |  | HEP | Individual |
| Decathlon | Dec | Decathlon Men |  | DEC | Individual |




