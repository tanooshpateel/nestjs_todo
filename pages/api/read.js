import { pool } from '../../db';

export default async (req, res) => {
    try {
        const query = 'SELECT * FROM todos';
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};
