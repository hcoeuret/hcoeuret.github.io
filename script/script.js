'use strict';

emailjs.init("cP-UDsnzM9HV8m4yc"); // Replace with your EmailJS user ID

function sendEmail(pizzaName) {
  alert("You just sent a pizza order, if you change your mind please order again, the last pizza you order will be the one baked");
  emailjs.send("service_omce3oc", "template_darhwzk", {
    message: `${pizzaName}`
  })
  .then(function(response) {
    alert("Email sent successfully!");
  }, function(error) {
    alert("Failed to send email. " + error);
  });
}