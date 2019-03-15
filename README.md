# gazetteer
A node.js application to generate star systems for Battetech. Uses the rules on pp. 99ff of Battletech: Campaign Operations

# Usage
`node gazeteer.js --systems <number of systems>`

# Output
This outputs a CSV file with the following columns (in order):

1. Orbital body name
1. Orbital number
1. Orbital body type
1. Distance from parent star
1. Atmospheric pressure
1. Atmospheric composition 
1. Habitable? 
1. Diameter
1. Density (g/m^3)
1. Day length
1. Gravity (G)
1. Year length
1. Rings?
1. Large moons
1. Medium moons
1. Small moons
