// Vercel Serverless Function for Portfolio Contact Form
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const data = req.body || {};
    console.log('New Contact Message for Sushant Thakur Portfolio:', data);

    const targetEmail = process.env.CONTACT_EMAIL || 'sushantthakur3211@gmail.com';

    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Developer Portfolio Inquiry: ${data.subject || 'Website Message'} from ${data.name || 'Visitor'}`,
          _template: 'table',
          _captcha: 'false',
          'Name': data.name,
          'Email': data.email,
          'Subject': data.subject,
          'Message': data.message
        })
      });
      return res.status(200).send('OK');
    } catch (err) {
      console.error('Contact email forwarding error:', err);
      return res.status(500).json({ error: 'Failed to forward email' });
    }
  }

  return res.status(200).json({ status: 'Portfolio Contact API active' });
};
