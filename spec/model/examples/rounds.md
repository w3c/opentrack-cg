# Example of description of Event Rounds

Example of round (only the final race) [during a Cross Country League](http://surreyleague.org) described by this model using pseudocode (it is not real JSON schema):
````
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
````
