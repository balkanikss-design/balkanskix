import mysql from 'mysql2/promise';

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'mysql.hostinger.com',
      user: process.env.DB_USER || 'u327759188_srbijaikosovo',
      password: process.env.DB_PASSWORD || 'Lepamojaglava12!',
      database: process.env.DB_NAME || 'u327759188_srbijaikosovo',
    });

    const [rows] = await connection.query('SELECT NOW() AS now');
    console.log('Connected to MySQL, current time:', rows[0].now);
    await connection.end();
  } catch (err) {
    console.error('Failed to connect to MySQL:', err.message);
  }
}

main();
