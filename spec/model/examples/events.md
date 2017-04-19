# Example of description of Events

Example of match [at a Cross Country League](http://surreyleague.org) described by this model using pseudocode (it is not real JSON schema):
````
{
    identifier : <Surrey_League_201617_Div1_Men_Match1>,
    name : 'Division 1 Men - Match 1',
    description : 'Match 1 of the First Division Men within the Surrey Cross Country League 2016/17',
    url : 'http://surreyleague.org/slm/match/60/',
    date : '2016-10-15',
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
                street address : 'Sidmouth Wood',
                postal code : 'TW10 5HX'
            },
            type : <Cross_Country_Course>            
        },
    discipline : <Cross_Country>,
    category : 
        {
            name : 'Division 1 Men',
            description : 'Senior and Junior of Division 1 (Men)',
            gender : <Male>,
            age range : [ <U18>, <SEN> ]
        },
    sub event : 
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
    date : '2016-10-15',
    location : <Richmond Park>,     // The same location as the parent event but could be different
    discipline : <Cross_Country>,
    category : 
        {
            name : 'Division 1 Junior Men',
            description : 'Junior of Division 1 (Men)',
            gender : <Male>,
            age range : <U18>
        },
    round : <Surrey_League_201617_Div1_Men_Match1_Young_Final>      // Only one round, the final [example of rounds](./rounds)
}
````



