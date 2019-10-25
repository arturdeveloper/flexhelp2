
## Steps to reproduce locally
Need to add Bootstrap to index.html

## Database
Uses H2 Database.
Need to add file in resources with database name and connection
/src/main/resources/application.properties

// example for database
spring.datasource.url=jdbc:mysql://localhost:3306/testdb
spring.datasource.username=login
spring.datasource.password=secret

Uses MySql, make sure you have database named "springdb"

