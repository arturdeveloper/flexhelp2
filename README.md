
## Description of the issue
Clicking on top left "FLEXHELP" takes to Route http://localhost:3000/offers and the entire page visibly blanks out for a moment before displaying data. Actual intention is to have the Offers display in its main area without that flicker. Data fetching happens in component Home.js.

## Running locally
Prerequisites: Node, Maven.

### Commands
After cloning the project run these commands.
Start the server by running this in the root directory with pom.xml
```
mvn spring-boot:run
```
This should get necessary dependencies and start the embedded server and DB.

Start React part with these
```
cd client
npm install
npm run start
```
