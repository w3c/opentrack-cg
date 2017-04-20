# Example of description of Event Rounds

## Cross Country League

Example of round (only the final race) [during a Cross Country League](http://surreyleague.org) described by this model using pseudocode (it is not real JSON schema):
```javascript
{
    identifier : <Surrey_League_201617_Div1_Men_Match1_Young_Final>,
    name : 'Division 1 Junior - Match 1',
    description : 'Match 1 of the First Division Junior',
    url : 'http://surreyleague.org/slm/match/60/',
    date : '2016-10-15T10:30:00+01:00',
    // qualification criteria N/A
    timekeeping : 
        {
            identifier: <Reportlab_SW>,
            type : <HT>,
            name : 'Reportlab Timing App',
            description: 'App on a tablet with Reportlab Software',
            device: 'iPad 2 on 4G'
        },
    start list :
        [
            // List of athletes (defined in other document but could be nested here) 
            <Start_List_Item_1>,
            <Start_List_Item_2>,
            <Start_List_Item_3>
            // and so on…
        ],
    results : 
        [
            // List of results (defined in other document but could be nested here) 
            <Results_Item_1>,
            <Results_Item_2>,
            <Results_Item_3>
            // and so on…
        ]
}
```


## Heptathlon at European Championships

Example of rounds of Heptathlon Events [at the 2016 European Champioships](https://en.wikipedia.org/wiki/2016_European_Athletics_Championships_%E2%80%93_Women%27s_heptathlon) described by this model using pseudocode (it is not real JSON schema):

```javascript
// Heat rounds defined in the 100m Hurdles (3 heats defined similarly)
{
    identifier : <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1>,
    name : 'Heptathlon 100m Hurdles - Heat 1',
    description : 'Heat 1 of 3 within Heptathlon 100m Hurdles',
    date : '2016-07-08T10:30:00+01:00',
    qualification_criteria: "3 heats without qualification. Assignation  of score points according to performance.",
    timekeeping : <FAT>,               // More information about timekeeping could be specified
    start list :
        [
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Start_List_Item_1>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Start_List_Item_2>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Start_List_Item_3>
            // and so on…
        ],
    results : 
        [
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Results_Item_1>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Results_Item_2>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1_Results_Item_3>,
            // and so on…
        ]
}

// Two groups (A,B) in High Jump 
// Instance of 'Vertical Jumps Round'
{
    identifier : <2016_EA_Championships_Heptathlon_HJ_Group_A>,
    name : 'Heptathlon High Jump - Group A',
    description : 'Group A in High Jump at Heptathlon',
    date : '2016-07-08T12:30:00+01:00',
    qualification_criteria: "Two groups without qualification. Assignation  of score points according to performance.",
    start list :
        [
            <2016_EA_Championships_Heptathlon_HJ_Group_A_StartList_Item_1>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_StartList_Item_2>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_StartList_Item_3>
            // and so on…
        ],
    starting_height: "150cm" ,   // Defined as Quantitative Value
    increasing_height: "+3cm after each round" ,   // Defined as Quantitative Value
    results : 
        [
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Results_Item_1>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Results_Item_2>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Results_Item_3>,
            // and so on…
        ],
    // Rounds of trials for each athlete in vertical jumps are described as instances of 'Trials Round'
    vertical_jump_trials_round : 
        [
            // 4 rounds of trials for 3 athletes:
            // Trials Round 1 with 3 athletes
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_1_Athlete1>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_1_Athlete2>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_1_Athlete3>,
            // Trials Round 2 with 3 athletes
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_2_Athlete1>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_2_Athlete2>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_2_Athlete3>,
            // Trials Round 3 with 2 athletes
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_3_Athlete1>,
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_3_Athlete3>,
            // Trials Round 4 with 1 athlete
            <2016_EA_Championships_Heptathlon_HJ_Group_A_Trials_Round_4_Athlete3>
        ]
}

// Two groups (A,B) in Javelin Throw, Shot Put and Long Jump (all with the same structure)
// Instance of 'Field Rounds'
{
    identifier : <2016_EA_Championships_Heptathlon_JT_Group_B>,
    name : 'Heptathlon Javelin Throw - Group B',
    description : 'Group B in Javelin Throw at Heptathlon',
    date : '2016-07-09T16:30:00+01:00',
    start list :
        [
            <2016_EA_Championships_Heptathlon_JT_Group_B_StartList_Item_1>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_StartList_Item_2>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_StartList_Item_3>
            // and so on…
        ],
    results : 
        [
            <2016_EA_Championships_Heptathlon_JT_Group_B_Results_Item_1>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_Results_Item_2>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_Results_Item_3>,
            // and so on…
        ],
    trials_round : 
        [
            // Just one round of trials per athlete
            <2016_EA_Championships_Heptathlon_JT_Group_B_TrialsRound_Athlete1>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_TrialsRound_Athlete2>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_TrialsRound_Athlete3>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_TrialsRound_Athlete4>,
            <2016_EA_Championships_Heptathlon_JT_Group_B_TrialsRound_Athlete5>
        ]
}

```