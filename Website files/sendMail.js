// Include the Email.js library
include("/email.mini.js")
{/* <script src="https://cdn.emailjs.com/dist/email.min.js"></script> */}

// Initialize Email.js with your user ID
emailjs.init("user_your_emailjs_user_id"); // Replace with your EmailJS user ID

// Function to send an email
function sendEmail(sender, receiver, subject, body, attachments) {
  // Create a JavaScript object with the email data
  const emailData = {
    from_name: sender,
    to_email: receiver,
    subject: subject,
    email_body: body,
  };

  // Attach any files
  if (attachments) {
    emailData.files = attachments;
  }

  // Use your EmailJS service and template IDs here
  emailjs.send("your_service_id", "your_template_id", emailData)
    .then(function (response) {
      console.log("Email sent:", response);
    })
    .catch(function (error) {
      console.error("Error occurred:", error);
    });
}

// Example usage:
const sender = "your-email@gmail.com";
const receiver = "recipient@example.com";
const subject = "Hello";
const body = "This is the body of the email.";
const attachments = [
  {
    name: "attachment.txt",
    path: "https://example.com/attachment.txt",
  },
];

sendEmail(sender, receiver, subject, body, attachments);
