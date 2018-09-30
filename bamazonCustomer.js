var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayStock();
});


// function to ask customer what they would like to do
function askCustomer() {
    inquirer
        .prompt([
            {
                name: "productId",
                type: "input",
                message: "Which product would you like to buy?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?"
                // validate here?
            }
        ])
        .then (function(answer) {
            connection.query("SELECT * FROM products", function(err, results){
                if (err) throw err;
                // declare stockQuantity variable
                // declare price variable
                if (answer.productId > stockQuantity) {
                    console.log("I'm sorry, there is an insufficient quantity and we cannot complete your order. \n");
                } else {
                    updateProducts();
                    console.log("Thank you for your business. The cost today is " + price + ".");
                }

            })

        })
}

// function to display data
function displayStock() {
    console.log("Welcome to Bamazon! Below is Bamazon's Current Stock: \n");
    connection.query("SELECT * From products", function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res)); // can we make the response prettier ??
        askCustomer();
    });
}


   //does the store have enough of the product to meet customer's order?
    // if no -- tell client "insufficient quantity" and do not complete order

    // if yes -- fulfill order
        // update the SQL database to reflect the remaining quantity
        // once the update goes through, show the customer the total cost of their purchase

// display data again


