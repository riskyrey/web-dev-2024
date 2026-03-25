import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

/**
 The line app.use(express.static("public")) in an Express.js application means:

🟢 Serve static files from the public directory.

📦 What are static files?
Static files are files that don't change dynamically — for example:

HTML files

CSS stylesheets

JavaScript scripts (client-side)

Images (JPG, PNG, SVG, etc.)

Fonts

🔍 How it works:
This middleware tells Express:

"Look inside the public folder, and if a file matching the request is found there, serve it directly."

So, if your public folder contains this file:

swift
Salin
Edit
public/images/logo.png
And someone goes to:

arduino
Salin
Edit
http://yourdomain.com/images/logo.png
Express will respond with that file automatically, without needing a specific route defined.
 */

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.get("/", (req, res) => res.render("index.ejs"))
app.get("/about", (req, res) => res.render("about.ejs"))
app.get("/contact", (req, res) => res.render("contact.ejs"))
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
