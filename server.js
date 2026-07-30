// const express = require("express");
// const cors = require("cors");
// const db = require("./db");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve HTML, CSS, JS files
// app.use(express.static(__dirname));

// // Test Route
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.listen(3000, () => {
//     console.log("🚀 Server running at http://localhost:3000");
// });

const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Farmer Registration API
app.post("/register-farmer", async (req, res) => {

    const {
        name,
        mobile,
        email,
        aadhaar,
        farmname,
        village,
        district,
        state,
        upi,
        password
    } = req.body;

    let conn;

    try {

        conn = await db.getConnection();

        await conn.query(
            `INSERT INTO farmers
            (full_name, mobile, email, aadhaar, farm_name, village, district, state, upi_id, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                name,
                mobile,
                email,
                aadhaar,
                farmname,
                village,
                district,
                state,
                upi,
                password
            ]
        );

        res.send("✅ Farmer Registered Successfully");

    } catch (err) {

        console.log(err);
        res.status(500).send("Registration Failed");

    } finally {

        if (conn) conn.release();

    }

});

app.listen(3000, "0.0.0.0", () => {
    console.log("🚀 Server running on http://0.0.0.0:3000");
});