const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

exports.handler = async function (event) {
  try {
    if (event.httpMethod === "POST") {
      const { email } = JSON.parse(event.body);

      const result = await pool.query(
        "INSERT INTO contact_form (email) VALUES ($1) RETURNING *",
        [email]
      );

      return {
        statusCode: 200,
        body: JSON.stringify(result.rows[0]),
      };
    }

    if (event.httpMethod === "GET") {
      const result = await pool.query("SELECT * FROM contact_form");

      return {
        statusCode: 200,
        body: JSON.stringify(result.rows),
      };
    }

    return { statusCode: 405 };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
