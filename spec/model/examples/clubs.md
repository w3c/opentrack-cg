# Example of description of Clubs


Example of [club](http://www.newhamandessexbeagles.co.uk) described by this model using pseudocode (it is not real JSON schema):
```javascript

// Instance of 'Athletics Club'
{
    identifier : <Newham_&_Essex_Beagles>,
    name : 'Newham & Essex Beagles',
    alternate name : 'BeaglesAC',                       // Alias, acronym, etc.
    url : 'http://www.newhamandessexbeagles.co.uk/',
    image : 'http://example.org/image.png',
    logo : 'http://example.org/logo.png',               // Logo, flag, etc.
    telephone : '(+44) 020 7511 6463',                  // It could have one or more phone numbers
    fax : '(+44) 020 7511 4477',                        // … also faxes
    email : 'fakeemail@example.org',
    address :                                           // Instance of 'Postal Address' 
        {    
            name: 'Terence McMillan Stadium - Newham Leisure Centre',
            street address: '281 Prince Regent Lane',
            locality: London,
            postal code: 'E13 8SD',
            country <UK>                                // Instance of 'Country'
        },
    sponsor : <Asics> ,                                 // Instance of 'Organization' or 'Person'
    federation : <England Athletics>                    // Instance of 'Federation'
}
```
