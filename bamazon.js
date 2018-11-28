require('dotenv').config();
var mysql = require("mysql");
var inquirer = require('inquirer');
var passwordOne = process.env.password;


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: passwordOne,
  database: "bamazon_db"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(error, request) {
    if (error) throw error;
    console.log(request);
    connection.end();
  });
}

var products = [
	{
		id: 1,
		name: 'Iphone 6',
        price: 300.00,
        stock_quantity: 500, 
    
	},

	{
		id: 2,
		name: 'Iphone 6Plus',
        price: 350.00,
        stock_quantity: 500,
	},

	{
		id: 3,
		name: 'Iphone 7',
        price: 400.00,
        stock_quantity: 500,
	},
	{
		id: 4,
		name: 'Iphone 7Plus',
        price: 450.00,
        stock_quantity: 500,
	}
];
var start = () => {
	// running this application will first display all the items available for sale. Include the ids, names, and prices of products for sale
	displayProducts();
	// app promt user
	getUserAction();
};

var getUserAction = () => {
	// the app should then promt users with two messages.
	// the first should ask them the ID of the products they would like to buy
	// The second message should ask how many units of the products they would like to buy.
	inquirer
		.prompt([
			{
				name: 'choice',
				type: 'input',
				message: 'please enter the ID of the product you wish to purchase: '
			},
			{
				name: 'quantity',
				type: 'input',
				message: 'How many: '
			}
		]).then(answers => {
			// safe guard that they enter an existing ID
			// for loop, do a filter
            // IF it's a correct answer promt them for quantity
            
            // 
			
		});
}
var displayProducts = () => {
    // connect to the database
    // select * from products
	products.forEach((product) => console.log(product));
};

start();
