# Example of description of Athletes


Example of [athlete](http://www.thepowerof10.info/athletes/profile.aspx?athleteid=482) described by this model using pseudocode (it is not real JSON schema):
````
{
    identifier : <Mo_Farah>,
    name : 'Mohamed Muktar Jama Farah',
    family name : 'Farah',
    given name : 'Mohamed Muktar Jama',
    alternate name : 'Mo Farah',
    url : 'http://www.mofarah.com',
    gender : 'Male' ,
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/MoPodiumRio2016.png/260px-MoPodiumRio2016.png',
    nationality : <UK>,
    email : 'fakeemail@example.org',
    height : { value: 175, units: 'CMT' },
    weight : { value: 65, units: 'KGS' },
    birth place : 'Mogadishu, Somalia' ,
    date of birth : '1983-04-23',
    address : 
        { 
            locality : 'Portland' ,
            country : 'USA'
        },
    coach : [ { name : 'Alberto Salazar' }]
    sponsor : <Nike>,
    club : 
        [ 
            <Newham_&_Essex_Beagles> ,
            <Nike Oregon Project>
        ],
    federation : 
        [ 
            <England Athletics> , 
            <USATF> 
        ],
    bests : <MoFarah Bests>
}
````