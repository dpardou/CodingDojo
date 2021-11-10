const express = require("express");
const app = express();
const faker = require('faker')
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User {
    constructor(){
        this.run = faker.datatype.number({min:48000000, max:80000000});
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.rut = faker.datatype.number({min:48000000, max:80000000});
        this.nameCompany = faker.company.companyName();
        this.Address = faker.address.streetName() + " - " + faker.address.city() + " - " + faker.address.state() + " - " + faker.address.zipCodeByState() + " - " + faker.address.country(); 
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {user:  new User(), company: new Company()} )
});