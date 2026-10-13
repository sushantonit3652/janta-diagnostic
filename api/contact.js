// Vercel Serverless Function for Contact Us Form
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const data = req.body || {};
    console.log('New Contact Message received for Janta Diagnostic:', data);
    return res.status(200).send('OK');
  }

  return res.status(200).json({ status: 'Contact API is active' });
};
