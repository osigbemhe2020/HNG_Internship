# HNG_Internship

# Stage 1 Frontend Task - Contact us and About me
## Overview 
This project is part of the **HNG Stage 0 Frontend Task**.
it involves creating two new pages — a Contact Us page with form validation, and an About Me page where you share your reflections using **semantic HTML, CSS, and vanilla JavaScript** — without any frontend framework.

### contact us page
* Form Validation with real-time feedback
* Required Fields: Name, Email, Subject, Message
* Validation Rules:
1. All fields required

2. Valid email format (name@example.com)

3. Message minimum 10 characters

* Accessibility Features:

1. Proper <label> associations with for attributes

2. aria-describedby for error messages

3. Keyboard navigable

* Success Message upon valid submission

### About Me Page (about-me.html)
Semantic Structure using <main>, <section>, and proper headings

Required Sections:

* Bio (test-about-bio)
* Goals in this program (test-about-goals)

* Areas of low confidence (test-about-confidence)

* Note to future self (test-about-future-note)

* Extra thoughts (test-about-extra)
### General Requirements
✅Semantic HTML throughout

✅Fully Responsive design (mobile, tablet, desktop)

✅Accessible with proper ARIA attributes

✅Modular and Readable code structure

## Technologies Used
* HTML5 - Semantic markup
* CSS3 - Responsive design with media queries
* JavaScript - Form validation and interactivity
* GitHub Pages - Deployment platform

## Live Demo
* https://osigbemhe2020.github.io/HNG_Internship/about-me.html (about-me page)
* https://osigbemhe2020.github.io/HNG_Internship/contact-us.html (contact-us page)
 
## Project Structure
``` structure
HNG_Internship/
│
├── index.html              # Home page (from Stage 0)
├── about-me.html           # About Me page
├── contact-us.html         # Contact Us page with form
├── styles.css              # Main stylesheet
├── script.js               # Main script
├── mypic.jpg                 # Image
│  
└── README.md               # This file
```
# Stage 0 Frontend Task – Profile Card

##  Overview
This project is part of the **HNG Stage 0 Frontend Task**.  
It involves building an **accessible, responsive Profile Card** using **semantic HTML, CSS, and vanilla JavaScript** — without any frontend framework.

The profile card displays:
- My name and short bio
- A real-time timestamp in milliseconds
- My avatar photo
- Social media links
- Lists of hobbies and dislikes

All elements include **data-testid** attributes to support automated testing.

---

## 🧠 Features
✅ Semantic and accessible HTML structure  
✅ Responsive design (works on mobile, tablet, and desktop)  
✅ Current time dynamically displayed in milliseconds  
✅ Social links open in a new tab (`target="_blank"`) with `rel="noopener noreferrer"`  
✅ Keyboard focus styles for accessibility  
✅ Clean and modern card design  

---

## 🧩 Tech Stack
- **HTML5** (Semantic structure)
- **CSS3** (Flexbox, media queries)
- **Vanilla JavaScript** (For time display)

---

## 🧱 Folder Structure
