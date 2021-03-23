# Athletics Disciplines

Simplification of identifiers for athletics events, describing the existing [OpenTrack codes](https://docs.opentrack.run/cms/events/). These will be properly described using the [Sports Discipline vocabulary](../competition/#sports-discipline).

*This is a working document*.

## Summary of the taxonomy

- [Athletics Disciplines](#athletics-disciplines)
  * [`RACE`](#races)
    + [`SPRINTS`](#sprints)
      + `60`
      + `100`
      + `200`
      + `400`
    + [`HURDLES`](#hurdles)
      + `60H`
      + `100H`
      + `110H`
      + `400H`    
    + [`SC` (Steeplechase)](#steeplechase)
      + `2000SC`
      + `3000SC`
    + [`MDLD` (Middle Distance & Long Distance Races)](#middle-distance---long-distance-races)
      + `800`
      + `1500`
      + `3000`
      + `5000`
      + `10000`
    + [`RW` (Race Walking)](#race-walking)
      + `3000W`
      + `5000W`
      + `20KW`
      + `50KW`      
    + [`RELAYS` (Track Relays)](#track-relays)
      + `4X100`
      + `4X400`
    + [`ROAD` (Road Running)](#road-running)
      + `10K`
      + `HM`
      + `MAR`
    + [`XC` (Cross Country)](#cross-country)
    + [`MR` (Mountain Running)](#mountain-running)
    + [`ULTRA` (Ultrarunning)](#ultrarunning)
  * [`THROWS`](#throws)
    + `DT` (Discus Throw)
    + `HT` (Hammer Throw)
    + `JT` (Javelin Throw)
    + `SP` (Shot Put)
  * [`HORIZONTALJUMPS`](#horizontal-jumps)
    + `LJ` (Long Jump)
    + `TJ` (Triple Vault)
  * [`VERTICALJUMPS`](#vertical-jumps)
    + `HJ` (High Jump)
    + `PV` (Pole Vault)
  * [`COMBINED`](#combined-disciplines)
    + `PEN` (Pentathlon)
    + `HEP` (Heptathlon)
    + `DEC` (Decathlon)


## Generic Disciplines

| identifier | name | Description |
| ---------- | ---- | ----------- |
| `RACE` | (Generic) Race | Race is a type of competition to see who is the fastest, including running or race-waking. |
| `SPRINTS` | Sprints | Sprints are running events over a short distance (less than 800m). |
| `HURDLES` | Hurdles | Hurdles is a running event where athletes jump over hurdles at speed. |
| `SC` | Steeplechase | Steeplechase is a long distance running event where runners must clear obstacles and water jumps. |
| `MDLD` | Middle and Long distance races | A Middle-distance or Long-distance running event, over a distance longer than sprints. Range of distances includes 800 m, up to Marathon 42.195 Km. |
| `RW` | Race Walking | Race walking, is a long-distance discipline where one foot must appear to be in contact with the ground at all times. |
| `RELAYS` | Track Relays | Relays, relays race or relay race, is a track race between two or more teams where each member of the team runs one leg of the race. |
| `ROAD` | Road Running | Road Running is an Athletics discipline on a measured course over an established road. |
| `XC` | Cross Country | Cross Country is a running discipline in which teams and individuals run a race on open-air courses over natural terrain such as dirt or grass. |
| `MR` | Mountain Running | Mountain Running is a discipline that takes place on terrain that is mainly off-road and which course may gain elevation. |
| `ULTRA` | Ultra Running | Ultra running, ultra distance or ultramarathon, is a road race longer than the traditional marathon length (42.195 Km). |
| `THROWS` | (Generic) Throws | Throws are types of field events in which athletes throws heavy objects in an attempt to mark a farther distance than their competitors. |
| `DT` | Discus Throw | Discus Throw is a track and field event in which an athlete throws a heavy disc (the discus) in an attempt to mark a farther distance than their competitors. The diameter and weight of the discus varies depending on the competition rules. |
| `HT` | Hammer Throw | Hammer Throw is a track and field event in which an athlete throws a metal ball attached by a steel wire to a grip (the hammer). The size of the ball, and the length of the wire varies depending on the competition rules. |
| `JT` | Javelin Throw | Javelin Throw is a track and field event where the javelin, a spear about 2.5 m (8 ft 2 in) in length, is thrown. Length and weight of javelin may vary depending on the rules of the competition. |
| `SP` | Shot Put | Shot Put is a track and field event involving throwing/putting (throwing in a pushing motion) a heavy spherical object (the shot) as far as possible. The size of the ball, and the length of the wire varies depending on the competition rules. |
| `HORIZONTALJUMPS` | Horizontal Jumps | Horizontal Jumps are track and field events in which athletes combine speed, strength and agility in an attempt to leap as far as possible from a take off point. Horizontal jumps include: long jump and triple jump. |
| `HJ` | High Jump | High Jump is a track and field event in which competitors must jump unaided over a horizontal bar placed at measured heights without dislodging it. |
| `PV` | Pole Vault | Pole Vault is a track and field event in which a person uses a long, flexible pole as an aid to jump over a bar. |
| `VERTICALJUMPS` | Vertical Jumps | Vertical Jumps are track and field events in which competitors must jump or vault over a horizontal bar placed at measured heights without dislodging it. |
| `LJ` | Long Jump | Long Jump (or broad jump) is a track and field event in which athletes combine speed, strength and agility in an attempt to leap as far as possible from a take off point.  |
| `TJ` | Triple Jump | Triple Jump (sometimes referred to as the hop, step and jump or the hop, skip and jump), is a track and field event, where competitors run down the track and perform a hop, a bound and then a jump into the sand pit. |
| `COMBINED` | Combined Discipline | Combined Discipline is a competition where athletes participate in a number of track and field events, earning points for their performance in each event, which adds to a total points score. |


## Races

### Sprints

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `60` | 60m | MTR | 60 |
| `100` | 100m | MTR | 100 |
| `200` | 200m | MTR | 200 |
| `400` | 400m | MTR | 400 |

### Hurdles

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `60H` | 60m Hurdles (0.60) | MTR | 60 | 
| `100H` | 100m Hurdles (0.84) | MTR | 100 |
| `110H` | 110m Hurdles (1.067) | MTR | 110 |
| `400H` | 400m Hurdles (0.91)  | MTR | 400 |

### Steeplechase

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `2000SC` | 2000m Steeplechase | MTR | 2000 |
| `3000SC` | 3000m Steeplechase (36") | MTR | 3000 |


### Middle Distance & Long Distance Races

| identifier | name | distance>unit | distance>value | maxDuration |
| ---------- | ---- | ------------- | -------------- | ----------- |
| `800` | 800m | MTR | 800 | |
| `1500` | 1500m | MTR | 1500 | |
| `3000` | 3000m | MTR | 3000 | |
| `5000` | 5000m | MTR | 5000 | |
| `10000` | 10000m | MTR | 10000 | |
| `24H` | 24 Hours |  |  | 23:59:59.999 |


### Race Walking

| identifier | name | venueType | distance>unit | distance>value |
| ---------- | ---- | --------- | ------------- | -------------- |
| `3000W` | 3000m Race Walking on track |  | MTR | 3000 |
| `5000W` | 5000m Race Walking on track | Outdoor | MTR | 5000 |
| `10000W` | 10000m Race Walking on track | Outdoor | MTR | 10000 |
| `10KW` | 10km Race Walking on Road | Road | MTR | 10000 |
| `20KW` | 20km Race Walking on Road | Road | MTR | 20000 |
| `50KW` | 50km Race Walking on Road | Road | MTR | 5000 |


### Track Relays

| identifier | name | competitionType | distance>unit | distance>value |
| ---------- | ---- | --------------- | ------------- | -------------- |
| `4X100` | 4x100m | Relays | MTR | 400 |
| `4X200` | 4x200m | Relays | MTR | 800 |
| `4X400` | 4x400m | Relays | MTR | 1600 |
| `4X800` | 4x800m | Relays | MTR | 3200 |
| `4X1500` | 4x1500m | Relays | MTR | 6000 |
| `MEDLEY` | Medley Relay | Relays |  |  |


### Road Running

| identifier | name | distance>unit | distance>value |
| ---------- | ---- | ------------- | -------------- |
| `1M` | 1 Mile | SMI | 1 |
| `2M` | 2 Miles | SMI | 2 |
| `5M` | 5 Miles | SMI | 5 |
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




