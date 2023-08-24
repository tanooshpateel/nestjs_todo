import { pool } from '../../db';

export default async (req, res) => {
    try {
        const { id, completed } = req.body;
        const query = 'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *';
        const values = [completed, id];
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};
