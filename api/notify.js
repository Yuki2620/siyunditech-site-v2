import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, company, email, brand, part, qty, message } = req.body;

  // 配置发送邮箱
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: '"Siyundi CRM Engine" <siyundi.tech@gmail.com>',
    to: 'gzserendipity@aliyun.com',
    subject: `🔥 NEW HOT LEAD: ${brand} Part from ${name}`,
    html: `
      <h2>New Lead Captured via SiyundiTech.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Contact (Email/WA):</strong> ${email}</p>
      <p><strong>Brand:</strong> ${brand}</p>
      <p><strong>Part:</strong> ${part}</p>
      <p><strong>Quantity:</strong> ${qty}</p>
      <p><strong>Requirements:</strong> ${message}</p>
      <br>
      <p><i>Reply to this email or click the contact info to follow up.</i></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send notification' });
  }
}

