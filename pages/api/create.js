import { pool } from '../../db';

export default async (req, res) => {
    try {
        const { text } = req.body;
        const query = 'INSERT INTO todos (text, completed) VALUES ($1, false) RETURNING *';
        const values = [text];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};
