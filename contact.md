---
layout: page
title: Contact Us
permalink: /contact/
---


<div id="submit-message">
  <p class="success-text">Thank you for contacting us!  We will respond shortly.</p>
  <p class="error-text">Sorry, but it looks like there was an error.  Please contacts us directly at some-email@something.com.</p>
</div>

<form id="contact-form" action="https://formspree.io/jdauriemma+junk@gmail.com" method="post">
  <p>We’d love to hear from you.  Please fill out the form below and we will respond as soon as we can.</p>

  <label for="first-name">First Name:</label>
  <input type="text" id="first-name" name="first-name">

  <label for="last-name">Last Name:</label>
  <input type="text" id="last-name" name="last-name">

  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email">

  <label for="phone">Your Phone Number (optional):</label>
  <input type="tel" id="phone" name="phone">

  <label for="body">Your Message:</label>
  <textarea id="body" name="body"></textarea>

  <input type="submit" value="Send Message">
</form>
