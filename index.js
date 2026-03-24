const express = require('express');
const QRCode = require('qrcode');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/generate', async (req, res) => {
  const { text } = req.body;
  try {
    const qr = await QRCode.toDataURL(text);
    res.json({ qr });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});