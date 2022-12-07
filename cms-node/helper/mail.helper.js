const client = require('@sendgrid/mail');
const api_key = "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";
const fromEMail = "govind@mangoitsolutions.com"
client.setApiKey(process.env.SENDGRID_API_KEY || api_key);


exports.sendMail = async email =>{
    const message = {
        to: email,
        from:process.env.FROM_EMAIL || fromEMail, // Use the email address or domain you verified above
        subject: 'Reset password Link',
        text: 'reset password ',
        html: '<div><h2>Hi ,</h2><p>There was a request to change your password!</p><p>If you did not make this request then please ignore this email.</p><p><h3>Your reset password link will expire in 24 hours</h3></p><p>Otherwise, please click this link to change your password: <a href="http://localhost:3000/Components/ResetPass" style="background:#000000;text-decoration:none !important; font-weight:500; color:#fff;text-transform:uppercase; font-size:10px;padding:10px 4px;display:inline-block;">ResetPassword</a></p></div>'
      }
      
     const mailsend = await client.send(message);
     return mailsend
        
}

