    const mariadb = require("mariadb");

    const pool = mariadb.createPool({
        host: "localhost",
        user: "root",
        password: "YOUR PASSWORD",
        database: "farmerdb",
        connectionLimit: 5
    });

    async function connectDB() {
        let conn;
        try {
            conn = await pool.getConnection();
            console.log("✅ Connected to MariaDB Successfully");
        } catch (err) {
            console.log("❌ Database Connection Failed");
            console.log(err);
        } finally {
            if (conn) conn.release();
        }
    }

    module.exports = pool;
    connectDB();