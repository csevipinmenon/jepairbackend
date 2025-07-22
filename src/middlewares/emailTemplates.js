export const Verification_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #4CAF50;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              color: #333;
              line-height: 1.8;
          }
          .verification-code {
              display: block;
              margin: 20px 0;
              font-size: 22px;
              color: #4CAF50;
              background: #e8f5e9;
              border: 1px dashed #4CAF50;
              padding: 10px;
              text-align: center;
              border-radius: 5px;
              font-weight: bold;
              letter-spacing: 2px;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Verify Your Email</div>
          <div class="content">
              <p>Hello <span> {name} </span>,</p>
              <p>Thank you for choosing Jepair Bazaar!</p>
              <p>To verify your email address, please use the following verification code:</p>
              <span class="verification-code">{verificationCode}</span>
              <p>Enter this code in the app or website to complete your registration.</p>
              <p>If you didn’t request this, please ignore this message.</p>
              <p>Thanks,</p>
              <p><strong>Team Jepair Bazaar</strong></p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jepair Bazaar. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

export const Welcome_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #007BFF;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
          }
          .welcome-message {
              font-size: 18px;
              margin: 20px 0;
          }
          .button {
              display: inline-block;
              padding: 12px 25px;
              margin: 20px 0;
              background-color: #007BFF;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              transition: background-color 0.3s;
          }
          .button:hover {
              background-color: #0056b3;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Welcome to Our Jepair Bazaar!</div>
          <div class="content">
              <p class="welcome-message">Hello {name},</p>
              <p>We're glad to see you again! You’ve successfully registration in to Jepair Bazaar — India’s most trusted home service platform.</p>
              <p>Explore services Like :</p>
              <ul>
                  <li>Plumbing.</li>
                  <li>Electrician Work</li>
                  <li>Appliance repair</li>
                  <li>and more — all at your fingertips.</li>
              </ul>
              <a href="#" class="button">Get Started</a>
              <p>Need help? We’re always here for you every step of the way</p>
              <p>Thanks for trusting us!<br><strong>Team Jepair Bazaar</strong></p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jepair Bazaar. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

//feedback ke liye
export const feedback_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #007BFF;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
          }
          .welcome-message {
              font-size: 18px;
              margin: 20px 0;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Thank You for Your Feedback!</div>
          <div class="content">
              <p class="welcome-message">Hello {name},</p>
              <p>Thank you for taking the time to share your feedback with us about Jepair Bazaar. We truly appreciate your input—it helps us improve our service and provide a better experience for all our users.</p>
              <p>Your comments have been noted, and we will review them carefully. If there's anything else you'd like to suggest or if you have any concerns, feel free to reply to this email. We're always here to help!</p>
              
              <p>Thanks again for helping us grow and improve.</p>
              <p>Best regards,</p>
             <p><strong>Team Jepair Bazaar</strong></p>
              <p>www.jepairbazaar.com</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jepair Bazaar. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

//enquiry templates

export const Enquiry_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #007BFF;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
          }
          .welcome-message {
              font-size: 18px;
              margin: 20px 0;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">We Received Your Enquiry!</div>
          <div class="content">
              <p class="welcome-message">Hi {name},</p>
              <p>Thank you for reaching out to Jepair Bazaar. We've received your enquiry and our team will  get back to you as soon as we can!.</p>
              <p>If you need urgent help, feel free to contact us at jepairbazaar@gmail.com</p>
              
              <p>Best regards,</p>
              <p><strong>Team Jepair Bazaar</strong></p>
              <p>www.jepairbazaar.com</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jepair Bazaar. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

//after book

export const book_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #007BFF;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
          }
          .welcome-message {
              font-size: 18px;
              margin: 20px 0;
          }
          .button {
              display: inline-block;
              padding: 12px 25px;
              margin: 20px 0;
              background-color: #007BFF;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              transition: background-color 0.3s;
          }
          .button:hover {
              background-color: #0056b3;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Booking Confirmed!</div>
          <div class="content">
              <p class="welcome-message">Hello {name},</p>
              <p>Thank you for booking a service with Jepair Bazaar!</p>
              <p><h3>Service:</h3> {servicename}</p>
              <p><h3>Date:</h3> {date}</p>
              <p><h3>Address:</h3> {address}</p>
              <p>Our technician will contact you shortly before arrival. If you need to reschedule or cancel, please reply to this email or chat us at www.jepairbazaar.com chat section</p>
              <p>We look forward to serving you!</p>
              <p>Best regards,</p>
              <p><strong>Team Jepair Bazaar</strong></p>
              <p>www.jepairbazaar.com</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Jepair Bazaar. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>`;
