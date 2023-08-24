import { pool } from '../../db';

export default async (req, res) => {
    try {
        const { id } = req.body;
        const query = 'DELETE FROM todos WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};
