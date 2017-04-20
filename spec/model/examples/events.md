# Example of description of Events

## Cross Country League

Example of match [at a Cross Country League](http://surreyleague.org) described by this model using pseudocode (it is not real JSON schema):
```javascript
// Instance of Event (is part of a bigger competition)
{
    identifier : <Surrey_League_201617_Div1_Men_Match1>,
    name : 'Division 1 Men - Match 1',
    description : 'Match 1 of the First Division Men within the Surrey Cross Country League 2016/17',
    url : 'http://surreyleague.org/slm/match/60/',
    start_date : '2016-10-15',
    location : 
        {
            // Description of the Venue
            identifier : <Richmond Park>,
            name : 'Richmond Park',
            description : 'Race HQ and the start/finish is inside Richmond Park on the edge of Sidmouth Wood, 5min walk from Pembroke Lodge (TW10 5HX) and Richmond Gate. The same location as recent years' Ranelagh men's Surrey League races.'
            geo : '51.4472241,-0.29',
            map : 'http://example.org/map',
            address : {
                name : 'Richmond Park',
                street_address : 'Sidmouth Wood',
                postal_code : 'TW10 5HX'
            },
            type : <Cross_Country_Course>            
        },
    discipline : <Cross_Country>,
    category : 
        {
            name : 'Division 1 Men',
            description : 'Senior and Junior of Division 1 (Men)',
            gender : <Male>,
            age_range : [ <U18>, <SEN> ]
        },
    sub_event : 
        [
            // Sub-events the event has described below
            <Surrey_League_201617_Div1_Men_Match1_Young>,
            <Surrey_League_201617_Div1_Men_Match1_Senior>
        ]
}

// each one of these sub-events like in the parent event
{
    identifier : <Surrey_League_201617_Div1_Men_Match1_Young>,
    name : 'Division 1 Young Men - Match 1',
    description : 'Match 1 of the First Division Junior Men within the Surrey Cross Country League 2016/17',
    url : 'http://surreyleague.org/slm/match/60/',
    start_date : '2016-10-15',
    location : <Richmond Park>,     // The same location as the parent event but could be different
    discipline : <Cross_Country>,
    category : 
        {
            name : 'Division 1 Junior Men',
            description : 'Junior of Division 1 (Men)',
            gender : <Male>,
            age_range : <U18>
        },
    round : <Surrey_League_201617_Div1_Men_Match1_Young_Final>      // Only one round, the final [example of rounds](./rounds)
}
```


## Heptathlon at European Championships

Example of Heptathlon [at the 2016 European Champioships](https://en.wikipedia.org/wiki/2016_European_Athletics_Championships_%E2%80%93_Women%27s_heptathlon) described by this model using pseudocode (it is not real JSON schema):


```javascript
// Instance of Event (is part of a bigger competition)
{
    identifier : <2016_European_Athletics_Championships_Heptathlon>,
    name : 'Heptathlon',
    description : 'The women's heptathlon at the 2016 European Athletics Championships',
    url : 'http://www.european-athletics.org/link_to_heptathlon_2016',
    start_date : '2016-07-08',
    end_date : '2016-07-09',
    location : <Amsterdam_Olympic_Stadium>,     // The same location as the parent event
    discipline : <Combined_Heptathlon>,
    category : 
        {
            name : 'Senior Women',
            gender : <Women>                    // No need to specify age-range
        },        
    sub_event : 
        [
            // Sub-events the event has described below
            <2016_European_Athletics_Championships_Heptathlon_100m_hurdles>,
            <2016_European_Athletics_Championships_Heptathlon_HJ>,
            <2016_European_Athletics_Championships_Heptathlon_SP>,
            <2016_European_Athletics_Championships_Heptathlon_200m>,
            <2016_European_Athletics_Championships_Heptathlon_LJ>,
            <2016_European_Athletics_Championships_Heptathlon_JT>,
            <2016_European_Athletics_Championships_Heptathlon_800m>
        ],
    result :
        [
            <2016_EA_Championships_Heptathlon_Final_1st>,
            <2016_EA_Championships_Heptathlon_Final_2nd>,
            <2016_EA_Championships_Heptathlon_Final_3rd>
            // and so on until complete list …            
        ]        
}
// 7 Combined events part of heptathlon:

// 100 Hurdles in Heptathlon (200m, 800m, will have a similar description)
{
    identifier : <2016_European_Athletics_Championships_Heptathlon_100m_hurdles>,
    name : 'Heptathlon - 100 Hurdles',
    description : '100 Hurdles at heptathlon as part of the 2016 European Athletics Championships',
    url : 'http://www.european-athletics.org/link_to_heptathlon_2016_100',
    start_date : '2016-07-08',
    location : <Amsterdam_Olympic_Stadium>,     // The same location as the parent event
    discipline : <100_Hurdles>,
    category : 
        {
            name : 'Senior Women',
            gender : <Women>                    // No need to specify age-range
        },
    rounds : // Three heats organized
        [
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat1>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat2>,            
            <2016_EA_Championships_Heptathlon_100m_hurdles_Heat3> 
        ],
    result :
        [
            <2016_EA_Championships_Heptathlon_100m_hurdles_1st>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_2nd>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_3rd>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_4th>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_5th>,
            <2016_EA_Championships_Heptathlon_100m_hurdles_6th>
            // and so on …            
        ]
}

// High Jump in Heptathlon
{
    identifier : <2016_European_Athletics_Championships_Heptathlon_HJ>,
    name : 'Heptathlon - High Jump',
    discipline : <High_Jump>,                   // From a taxonomy
    rounds :                                    // Grouped in: Group A and Group B
        [
            <2016_EA_Championships_Heptathlon_HJ_Group_A>,
            <2016_EA_Championships_Heptathlon_HJ_Group_B>
        ],
    result :
        [
            <2016_EA_Championships_Heptathlon_HJ_1st>,
            <2016_EA_Championships_Heptathlon_HJ_2nd>,
            <2016_EA_Championships_Heptathlon_HJ_3rd>
            // and so on …            
        ]
}

// Shot Put in Heptathlon (Javeling Throw and Long Jump have similar descriptions)
{
    identifier : <2016_European_Athletics_Championships_Heptathlon_SP>,
    name : 'Heptathlon - Shot Put',
    discipline : <Shot_Put>,                   // From a taxonomy
    rounds :                                    // Grouped in: Group A and Group B
        [
            <2016_EA_Championships_Heptathlon_SP_Group_A>,
            <2016_EA_Championships_Heptathlon_SP_Group_B>
        ],
    result :
        [
            <2016_EA_Championships_Heptathlon_SP_1st>,
            <2016_EA_Championships_Heptathlon_SP_2nd>,
            <2016_EA_Championships_Heptathlon_SP_3rd>
            // and so on …            
        ]
}

```
