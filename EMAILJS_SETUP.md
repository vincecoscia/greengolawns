# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions directly to your email: `green.go.lawnsllc@gmail.com`

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 2. Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account (`green.go.lawnsllc@gmail.com`)
5. Copy the **Service ID** (you'll need this later) service_3wdg70l

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Submission - {{company_name}}
```

**Content:**
```html
<h2>New Contact Form Submission</h2>

<p><strong>Date:</strong> {{submission_date}}</p>

<h3>Customer Information:</h3>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Phone:</strong> {{phone}}</li>
  <li><strong>Service Requested:</strong> {{service}}</li>
</ul>

<h3>Message:</h3>
<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #22c55e; margin: 10px 0;">
{{message}}
</div>

<hr>
<p><em>This email was sent from the {{company_name}} website contact form.</em></p>
```

4. Set "To Email" to: `{{to_email}}`
5. Save the template and copy the **Template ID** template_weuqtlb

## 4. Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** 3iyBMdJBJCdoNlbvs

## 5. Configure Environment Variables

1. Create a file called `.env.local` in your project root
2. Add these variables with your actual values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Setup

1. Restart your development server: `npm run dev`
2. Go to the contact page on your website
3. Fill out and submit the form
4. Check your email for the submission

## Notes

- EmailJS free plan allows 200 emails per month
- Emails may take 1-2 minutes to arrive
- Check your spam folder if you don't see the email
- The form will show a success message when sent successfully

## Troubleshooting

If you encounter issues:
1. Double-check all environment variables are correct
2. Ensure your Gmail account is properly connected in EmailJS
3. Check the browser console for error messages
4. Verify the template variables match the ones in the contact form code