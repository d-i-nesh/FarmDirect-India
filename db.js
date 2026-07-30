    // const mariadb = require("mariadb");

    // const pool = mariadb.createPool({
    //     host: "localhost",
    //     user: "root",
    //     password: "YOUR PASSWORD"
    //     database: "farmerdb",
    //     connectionLimit: 5
    // });

    // async function connectDB() {
    //     let conn;
    //     try {
    //         conn = await pool.getConnection();
    //         console.log("✅ Connected to MariaDB Successfully");
    //     } catch (err) {
    //         console.log("❌ Database Connection Failed");
    //         console.log(err);
    //     } finally {
    //         if (conn) conn.release();
    //     }
    // }

    // module.exports = pool;
    // connectDB();

const mariadb = require("mariadb");

// Create MariaDB Connection Pool
const pool = mariadb.createPool({
    host: "localhost",
    port: 3306,
    user: "farmuser",
    password: "Farm@123",
    database: "farmerdb",
    connectionLimit: 5
});

// Test Database Connection
async function connectDB() {
    let conn;

    try {
        conn = await pool.getConnection();
        console.log("✅ Connected to MariaDB Successfully");
    } catch (err) {
        console.error("❌ Database Connection Failed");
        console.error(err);
    } finally {
        if (conn) {
            conn.release();
        }
    }
}

// Run the connection test
connectDB();

// Export the pool
module.exports = pool;








