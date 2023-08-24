import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres', // Change to your PostgreSQL database user
    host: 'localhost', // Change to your PostgreSQL database host
    database: 'next_todo_khan', // Change to your PostgreSQL database name
    password: 'root', // Change to your PostgreSQL database password
    port: 5432, // Change if your PostgreSQL database port is different
});

