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
    console.log('New Contact Message for Janta Diagnostic:', data);

    try {
      await fetch('https://formsubmit.co/ajax/jantadiagnosticscentre@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://janta-diagnostic.vercel.app',
          'Origin': 'https://janta-diagnostic.vercel.app'
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry: ${data.subject || 'Website Message'} from ${data.name || 'Visitor'}`,
          _template: 'table',
          _captcha: 'false',
          'Name': data.name,
          'Email': data.email,
          'Subject': data.subject,
          'Message': data.message
        })
      });
    } catch (err) {
      console.error('Contact email forwarding error:', err);
    }

    return res.status(200).send('OK');
  }

  return res.status(200).json({ status: 'Contact API active' });
};
