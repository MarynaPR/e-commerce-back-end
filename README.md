## ECOMMERCE

## Images :camera_flash:

The following image shows the web application's appearance and functionality: 

![Screenshot](Assets/Screenshot.png)

## Description :page_with_curl:

```
This code features a back end for an e-commerce site.
With working Express.js API it configures the use of Sequelize to interact with a MySQL database.
It shows the configuration to connect a database using Sequelize.
```

## Technology Used :label: 

* Node.js
* Inquirer
* MySQL
* Sequilize

## Resources Used :wrench: 

* [Inquirer package](https://www.npmjs.com/package/inquirer)
* [emoji-cheat-sheet:for readme](https://github.com/ikatyang/emoji-cheat-sheet)
* [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect Express.js API to a MySQL database 
* [Dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like MySQL username, password, and database name.

## Installation :electric_plug:

* npm init -y
* npm install --save sequelize
* npm install --save mysql2 
* npm i jest
* npm install express sequelize mysql2
* npm install dotenv

* after creating the models and routes, run `npm run seed` to seed data to your database to test the routes

* `npm start or node server` - run  at the root of your directory to connect to the server


## Testing :repeat_one:

Because this application is not deployed, the following links show examples of the application's API routes being tested on Insomnia. 

[link](https://drive.google.com) 

The first video shows GET routes to return all categories, all products, and all tags being tested in
![Insomnia](./Assets/13-orm-homework-demo-01.gif)
The second animation shows GET routes to return a single category, a single product, and a single tag being tested in:
![Insomnia](./Assets/13-orm-homework-demo-02.gif)
The final animation shows the POST, PUT, and DELETE routes for categories being tested in 
![Insomnia](./Assets/13-orm-homework-demo-03.gif)


Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Contribution :heavy_plus_sign: 

Contributions, issues and feature requests are welcome. 
Check out [issues page](https://github.com/MarynaPR/e-commerce-back-end/issues). 
Give :star: if you found this project useful. 

### Questions :question: 
Feel free to contact me with any questions via email :e-mail: pryadkamaryna@gmail.com. 
  
If you'd like to see my other projects, please visit my :octocat: 
[GitHub](https://github.com/MarynaPR?tab=repositories)

*******************************************
## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I open API GET routes in Insomnia for a single category, product, or tag
THEN the data for that category, product, or tag is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

Create the configuration to connect a database using Sequelize. Use environment variables to store sensitive data, like your MySQL username and password.


## Getting Started
You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [Dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like your MySQL username, password, and database name.
Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.



### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync our Sequelize models to our MySQL database on server start.
## Review
----Because this application is not deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria below being met. You’ll need to submit a link to the video and add it to the README of your project.-----
You are required to submit BOTH of the following for review:
* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
