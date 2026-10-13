// Vercel Serverless Function for Appointment Booking
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const data = req.body || {};
    console.log('New Appointment Request for Janta Diagnostic:', data);

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
          _subject: `New Appointment Request: ${data.name || 'Patient'} (${data.service || 'Diagnostic'})`,
          _template: 'table',
          _captcha: 'false',
          'Patient Name': data.name,
          'Phone': data.phone,
          'Email': data.email,
          'Preferred Date': data.date,
          'Service Required': data.service,
          'Message / Instructions': data.message
        })
      });
    } catch (err) {
      console.error('Email forwarding error:', err);
    }

    return res.status(200).send('OK');
  }

  return res.status(200).json({ status: 'Appointment API active' });
};
