import axios from 'axios';

export async function sendEmail(to: string, subject: string, htmlContent: string, senderEmail: string) {
  const apiKey = process.env.BREVO_API_KEY;
  const sender = { email: senderEmail };

  const data = {
    sender,
    to: [{ email: to }],
    subject,
    htmlContent,
  };

  await axios.post('https://api.brevo.com/v3/smtp/email', data, {
    headers: { 'api-key': apiKey || '', 'Content-Type': 'application/json' },
  });
}
