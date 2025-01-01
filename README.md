# Portfolio Website

This is my personal portfolio website built with Next.js. It showcases my projects, skills, and experience. The website features a clean, modern design and utilizes serverless functions for handling forms and emails. It also supports dynamic content, including project details, tech stacks, and more.

## Prerequisites

Before you begin, ensure you have the following environment variables set in a `.env` file in your project directory:

- `SMTP_HOST`: The SMTP host that sends the messages (e.g., smtp.gmail.com for Gmail).
- `SMTP_PORT`: The SMTP port for your email service (e.g., 587 for Gmail).
- `SMTP_SECURE`: Set this to false for port 587 (STARTTLS), or true for port 465 (SSL).
- `SMTP_USER`: Your email account used for sending emails.
- `SMTP_PASS`: The password or app-specific password for your email account.

### Setup Instructions

**Create a `.env` file** in your project root directory and add the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email_account_here
SMTP_PASS=your_email_password_here
```

### Install Dependencies
Make sure to run the following command to install all necessary dependencies:

```bash
npm install
```

After setting up the .env file and installing dependencies, you can start the application with:

```bash
npm run dev
```
This will start the development server. Navigate to http://localhost:3000 to view your portfolio.

### Usage
After you run the application, navigate to http://localhost:3000 in your web browser to see the portfolio website in action. The website includes sections for showcasing projects, skills, and a contact form that uses email functionality.


### License
This project is licensed under the MIT License.

Feel free to modify any parts of this README to better fit your project's needs!





