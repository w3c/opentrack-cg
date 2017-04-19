# Example of description of Teams

Example of a [relays team](https://www.race-results.co.uk/results/2012/nat612.htm) described by this model using pseudocode (it is not real JSON schema):
````
{
    identifier : <Newham_&_Essex_Beagles_ERRA_Relay_Team_2012>,
    name : 'Newham & Essex Beagles Ac - ERRA Relay Team 2012',
    alternate name : 'BeaglesAC',
    url : 'http://www.newhamandessexbeagles.co.uk/',
    image : 'http://example.org/image.png',
    logo : 'http://example.org/flag.png',    
    coach : 'Coach Name',
    athlete : 
        [ 
            <Dave Mitchinson>, 
            <Frank Baddick>, 
            <Christopher MacK>,
            <Kairn Stone>,
            <John Beattie>,
            <Rory Chesser>
        ],
    sponsor : "Asics" ,
    federation : <England Athletics>,
}
````
