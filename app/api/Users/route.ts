import dbConnect from '../../lib/mongoose';
import Application from '../../models/Application';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    await dbConnect();
    const { name, email, phone, message } = req.body;
    if (!name || !email) return res.status(422).json({ error: 'Name and email required' });
    const doc = await Application.create({ name, email, phone, message });
    return res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}