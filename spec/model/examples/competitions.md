# Example of description of Competitions

## Cross Country League

Example of a [competition](http://surreyleague.org) described by this model using pseudocode (it is not real JSON schema):
```javascript

// Instance of 'Competition'
{
    identifier : <Surrey_League_2016-2017>,         
    name : 'Surrey Cross Country League 2016/17',
    alternate_name : 'XC Surrey League 2016/17',        // Acronym, abbreviation, etc.
    url : 'http://surreyleague.org',
    image : 'http://example.org/image.png',
    start_date : '2016-10-15',                          // ISO 8601
    end_date : '2017-02-11',                            // ISO 8601
    status : <Completed>,                               // Value from a taxonomy of statuses 
    organizer : "Surrey League Organization",           // Instance of 'Organization' or 'Person'
    contributor : "Reportlab",                          // Instance of 'Organization' or 'Person'
    sponsor : "Start Fitness",                          // Instance of 'Organization' or 'Person'
    event : 
        [
            <Surrey_League_201617_Div1_Men_Match1>,     // Instances of 'Events'
            <Surrey_League_201617_Div1_Men_Match2>,
            <Surrey_League_201617_Div1_Men_Match3>,
            <Surrey_League_201617_Div1_Men_Match4>,
            <Surrey_League_201617_Div2_Men_Match1>,
            <Surrey_League_201617_Div2_Men_Match2>,
            <Surrey_League_201617_Div2_Men_Match3>,
            <Surrey_League_201617_Div2_Men_Match4>,
            <Surrey_League_201617_Div1_Ladies_Match1>,
            <Surrey_League_201617_Div1_Ladies_Match2>,
            <Surrey_League_201617_Div1_Ladies_Match3>,
            <Surrey_League_201617_Div1_Ladies_Match4>,
            <Surrey_League_201617_Div2_Ladies_Match1>,
            <Surrey_League_201617_Div2_Ladies_Match2>,
            <Surrey_League_201617_Div2_Ladies_Match3>,
            <Surrey_League_201617_Div2_Ladies_Match4>,
            
        ]
}
```

## European Championships

Example of a [competition](http://www.european-athletics.org/competitions/european-athletics-championships/) described by this model using pseudocode (it is not real JSON schema):
```javascript

// Instance of 'Competition'
{
    identifier : <2016_European_Athletics_Championships>,         
    name : '2016 European Athletics Championships',
    alternate_name : 'Amsterdam Euro 2016',        // Acronym, abbreviation, etc.
    url : 'http://www.european-athletics.org/competitions/european-athletics-championships/2016/events/',
    image : 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Amsterdam2016logo.png',
    location : <Olympic_Stadium_Amsterdam> ,            // Instance of 'Venue'
    start_date : '2016-06-06',                          // ISO 8601
    end_date : '2016-06-10',                            // ISO 8601
    status : <Completed>,                               // Value from a taxonomy of statuses 
    organizer :                                         // Instance of Organization
        {
            name: 'European Athletics',
            url: 'http://www.european-athletics.org'    
        },
    event : 
        [
            <2016_European_Athletics_Championships_100_metres_Men>,     // Instances of 'Events'
            <2016_European_Athletics_Championships_100_metres_Women>,
            <2016_European_Athletics_Championships_200_metres_Men>,            
            <2016_European_Athletics_Championships_200_metres_Women>,
            <2016_European_Athletics_Championships_400_metres_Men>,
            <2016_European_Athletics_Championships_400_metres_Women>,
            …
            <2016_European_Athletics_Championships_4x100_Men>,
            <2016_European_Athletics_Championships_4x100_Women>,
            <2016_European_Athletics_Championships_Long_Jump_Men>,
            <2016_European_Athletics_Championships_Long_Jump_Women>,
            <2016_European_Athletics_Championships_Decathlon>,
            <2016_European_Athletics_Championships_Heptathlon>
        ]
}
```

## The Boston Marathon

Example of a [competition](http://www.baa.org/races/boston-marathon.aspx) described by this model using pseudocode (it is not real JSON schema):
```javascript

// Instance of 'Competition'
{
    identifier : <Boston_Marathon_2017>,         
    name : 'B.A.A. 2017 Boston Marathon',
    alternate_name : '2017 Boston Marathon',            // Acronym, abbreviation, etc.
    description : 'The legendary Boston Marathon course follows a point-to-point route from Hopkinton to Boston, and is certified per the guidelines set forth by the IAAF and USA Track and Field.',
    url : 'http://www.baa.org/races/boston-marathon.aspx',
    location : <Venue_Boston_Marathon>,                 // Instance of Venue
    image : 'http://example.org/image',
    logo : 'http://example.org/logo',
    start_date : '2017-04-17',                          // ISO 8601 - Only one day (no end date)
    status : <Scheduled>,                               // Value from a taxonomy of statuses 
    organizer :                                         // Instance of 'Organization'
        {
            name: 'Boston Athletic Association',
            alternate_name: 'B.A.A.',
            postal_address: 
                {
                    street_address: '185 Dartmouth Street, 6th Floor',
                    locality: 'Boston, MA',
                    country: <US>,                      // Instance of 'Country'
                    postal_code: '02116'
                },
            telephone: '+1 617-236-1652',
            url: 'http://www.baa.org'    
        },
    sponsor: 'John Hancock',
    contributor: 
        [
            'Abbott', 'Airgas', 'AMR'                   // Instances of 'Organization'
        ],
    event : <2017_Boston_Marathon>                      // Just one race
}
```

