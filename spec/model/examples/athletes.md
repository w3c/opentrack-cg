# Example of description of Athletes


Example of [athlete](http://www.thepowerof10.info/athletes/profile.aspx?athleteid=482) described by this model using pseudocode (it is not real JSON schema):
```javascript

// Instance of 'Athlete'
{
    identifier : <Mo_Farah>,
    name : 'Mohamed Muktar Jama Farah',
    family name : 'Farah',
    given name : 'Mohamed Muktar Jama',
    alternate name : 'Mo Farah',            // Alias
    url : 'http://www.mofarah.com',
    gender : 'Male' ,
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/MoPodiumRio2016.png/260px-MoPodiumRio2016.png',
    nationality : <UK>,                     // Instance of 'Country'
    email : 'fakeemail@example.org',
    height : { value: 175, units: 'CMT' },  // Quantitative Value
    weight : { value: 65, units: 'KGS' },   // Quantitative Value
    birth place : 'Mogadishu, Somalia' ,
    date of birth : '1983-04-23',           // ISO 8601 format
    address :                               // Instance of 'Postal Address'
        { 
            locality : 'Portland' ,         // We can use any of the Postal Address properties
            country : 'USA'
        },
    coach : [ { name : 'Alberto Salazar' }] // Instance of 'Person'
    sponsor : <Nike>,                       // Instance of 'Person' or 'Organization'
    club : 
        [ 
            <Newham_&_Essex_Beagles> ,      // Instances of 'Organization'
            <Nike Oregon Project>
        ],
    federation : 
        [ 
            <England Athletics> ,           // Instances of 'Federation'
            <USATF> 
        ],
    bests : <MoFarah Bests>                 // Instances of 'Best'
}
``` 