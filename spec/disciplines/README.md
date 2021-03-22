# Athletics Disciplines

Simplification of identifiers for athletics events, describing the existing [OpenTrack codes](https://docs.opentrack.run/cms/events/). These will be properly described using the [Sports Discipline vocabulary](../competition/#sports-discipline).

*This is a working document*.

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

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `SPRINTS` | (Generic) SPRINTS | | |
| `60` | 60m | MTR | 60 |
| `100` | 100m | MTR | 100 |
| `200` | 200m | MTR | 200 |
| `400` | 400m | MTR | 400 |

### Hurdles

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `HURDLES` | (Generic) HURDLES | | |
| `60H` | 60m Hurdles (0.60) | MTR | 60 | 
| `100H` | 100m Hurdles (0.84) | MTR | 100 |
| `110H` | 110m Hurdles (1.067) | MTR | 110 |
| `400H` | 400m Hurdles (0.91)  | MTR | 400 |

### Steeplechase

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `SC` | (Generic) STEEPLECHASE | | |
| `2000SC` | 2000m Steeplechase | MTR | 2000 |
| `3000SC` | 3000m Steeplechase (36") | MTR | 3000 |


### Middle Distance & Long Distance Races

| identifier | name | distance>unit | distance>value | maxDuration |
| ---------- | ---- | ------------- | -------------- | ----------- |
| `MDLD` | (Generic) MIDDLE DISTANCE & LONG DISTANCE | | | |
| `800` | 800m | MTR | 800 | |
| `1500` | 1500m | MTR | 1500 | |
| `3000` | 3000m | MTR | 3000 | |
| `5000` | 5000m | MTR | 5000 | |
| `10000` | 10000m | MTR | 10000 | |
| `24h` | 24 Hours |  |  | 23:59:59.999 |


### Race Walking

| identifier | name | venueType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | -------------- |
| `W` | (Generic) RACE WALKING | | | |
| `3000W` | 3000m Race Walking on track |  | MTR | 3000 |
| `5000W` | 5000m Race Walking on track | Outdoor | MTR | 5000 |
| `10000W` | 10000m Race Walking on track | Outdoor | MTR | 10000 |
| `10KW` | 10km Race Walking on Road | Road | MTR | 10000 |
| `20KW` | 20km Race Walking on Road | Road | MTR | 20000 |
| `50kmRW` | 50km Race Walking on Road | Road | MTR | 5000 |


### Track Relays

| identifier | name | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------------- | ------------- | -------------- |
| `RELAYS` | (Generic) Track Relays | Relays | | |
| `4X100` | 4x100m | Relays | MTR | 400 |
| `4X200` | 4x200m | Relays | MTR | 800 |
| `4X400` | 4x400m | Relays | MTR | 1600 |
| `4X800` | 4x800m | Relays | MTR | 3200 |
| `4X1500` | 4x1500m | Relays | MTR | 6000 |
| `MEDLEY` | Medley Relay | Relays |  |  |


### Road Running

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `ROAD` | (Generic) ROAD RUNNING | | |
| `10K` | 10K | MTR | 10000 |
| `HM` | Half Marathon | MTR | 21097 |
| `MAR` | Marathon | MTR | 42195 |


### Cross Country

| identifier | name  | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `XC` | (Generic) CROSS COUNTRY | | |


### Mountain Running

| identifier | name  | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `MR` | (Generic) MOUNTAIN RUNNING | | |


### Ultrarunning

| identifier | name  | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `ULTRA` | (Generic) ULTRARUNNING | | |


## Throws

| identifier | name | weight>unit | weight>value |
| ---------- | ---- | ----------- | ------------ |
| `DT` | (Generic) Discus Throw | | |
| `HT` | (Generic) Hammer Throw | | |
| `JT` | (Generic) Javelin Throw | | |
| `SP` | (Generic) Shot Put |  |  |

## Horizontal Jumps 

| identifier | name | 
| ---------- | ---- | 
| `LJ` | (Generic) Long Jump | 
| `TJ` | (Generic) Triple Jump | 

## Vertical Jumps 

| identifier | name | 
| ---------- | ---- | 
| `HJ` | (Generic) High Jump |
| `PV` | (Generic) Pole Vault |

## Combined Disciplines

| identifier | name | 
| ---------- | ---- | 
| `PEN` | (Generic) Pentathlon | 
| `HEP` | (Generic) Heptathlon | 
| `DEC` | (Generic) Decathlon | 




