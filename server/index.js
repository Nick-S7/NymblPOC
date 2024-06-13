const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//Middleware//
app.use(cors());
app.use(express.json());

//Routes//

//create an order
app.post("/orders", async(req, res) => {
    try {
        //console.log(req.body);
        const { description } = req.body;
        const newOrder = await pool.query(
            "INSERT INTO Orders (description) VALUES ($1) RETURNING *",
            [description] 
        );

        res.json(newOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all orders
app.get("/orders", async(req, res) =>{
    try {
        const allOrders = await pool.query("SELECT * FROM Orders;");
        res.json(allOrders.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get single order
app.get("/orders/:id", async(req, res) =>{
    try {
        //console.log(req.params)
        const { id } = req.params;
        const order = await pool.query(
            "SELECT * FROM Orders WHERE order_id = $1;",
            [id]
        );
        res.json(order.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
//update an order
app.put("/orders/:id", async(req, res) =>{
    try {
        //console.log(req.params)
        const { id } = req.params;
        const { description } = req.body;
        const updateOrder = await pool.query(
            "UPDATE Orders SET description = $1 WHERE order_id = $2;",
            [description, id]
        );
        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message);
    }
})
//delete an order
app.delete("/orders/:id", async(req, res) =>{
    try {
        //console.log(req.params)
        const { id } = req.params;
        const deleteOrder = await pool.query(
            "DELETE FROM Orders WHERE order_id = $1;",
            [id]
        );
        res.json("Todo was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () =>{
    console.log("listening on port 5000")
});