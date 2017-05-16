# Athletics Disciplines

Athletics events may be defined depending on the main target of the discipline, and main rules of the competition: *timed events* for events involving timekeeping and the performance is measured as time; *field events* for jumps and throws; and *combined events* that are a combination of *timed* and *field* events.

[According to IAAF](https://www.iaaf.org/disciplines), Athletics events may be classified into these following disciplines:

* Sprints
* Middle/long distance
* Hurdles
* Road Running
* Jumps
* Throws
* Combined Events
* Race Walks
* Relays
* Cross Country
* Mountain Running
* Ultra Running

Disciplines are described by specific features (i.e., throws disciplines, such as shot put, are defined by *weight*). So, having into account the features related to the competition, disciplines are modeled in this taxonomy of concepts:

![Taxonomy for Athletics Disciplines](images/disciplines.png)


_Example of an instance of Master Female indoor Pentathlon using the current model:_

![Example of model of indoor pentathlon](images/instances_disciplines_pentathlon.png)

In brackets, the code [used by Athlib](http://opentrack.run/athlib/build/html/eventcodes.html).

* Timed Disciplines
  * Sprints (`<DISTANCE>`)
  * Middle/Long Distance (`<DISTANCE>`)
    * Steeplechase (`<DISTANCE>SC`)
  * Hurdles (`<DISTANCE>H<HEIGHT>`)
  * Road Running (`<DISTANCE>`, `HM`, `MAR`)
  * Race Walks (`<DISTANCE>W`)
  * Track Relays (`<LEGS>x<DISTANCE>`)
  * Cross Country (`<DISTANCE>XC`)
  * Mountain Running
  * Ultra Running
* Combined Events
  * Pentathlon (`PEN`)
  * Heptathlon (`HEP`)
  * Decathlon (`DEC`)
  * Throws Pentathlon (`PENWT`)
* Jumps
  * High Jump (`HJ`)
  * Long Jump (`LJ`)
  * Triple Jump (`TJ`)
  * Pole Vault (`PV`)
* Throws
  * Shot Put (`SP<WEIGHT>`)
  * Discus Throw (`DT<WEIGHT>`)
  * Hammer Throw (`HT<WEIGHT>`)
  * Javelin Throw (`JT<WEIGHT>`)
  * Weight Throw (`WT<WEIGHT>`)

This taxonomy includes `Steeplechase` as a narrower concept of `Middle/Long Distance` because of the different nature of this kind of events.