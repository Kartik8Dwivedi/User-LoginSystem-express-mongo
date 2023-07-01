This project contains a user registration and login system, which uses express framework for creating routes and server easily. The different types of packages which are required for this project include:
1) `express`
2) `mongoose`
3) `dotenv`

`dotenv` is used to wrap up the sensitive details regarding the mongodb uri, port, password and other details.
`mongoose` is used to establish the connection between mongoDB and our server easily.

The endpoints on which this project works on are as follows:
`http://localhost:(PORT)/` -> this is the homepage for the server/project, which displays a basic greeting message
`http://localhost:(PORT)/register` -> on this endpoint we can register account on the database server. The syntax of the json request will be of following type:
{
    username : "user_name",
    email : "someone@example.com",
    password : "myPassword"
}

`http://localhost:(PORT)/login` -> this endpoint will help us in logging in, by searching the data in the database about username and password. The json request for this will be as follows:
{
    username : "user_name",
    email : "someone@example.com",
}
