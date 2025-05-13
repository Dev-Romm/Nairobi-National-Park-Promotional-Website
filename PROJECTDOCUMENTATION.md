# Nairobi National Park Promotional Website Documentation

## Overview

This repository contains a simple, responsive promotional website for Nairobi National Park. The site is built using HTML, CSS, and JavaScript, and consists of four main pages:

- **Dashboard/Main Page (nnp_main.html)**
- **Home Page (nnp_home.html)**
- **About Page (nnp_about.html)**
- **Contacts Page (nnp_contacts.html)**

All pages share a consistent design and navigation, and are styled via a central styles.css file. Interactive image animations are handled by script.js.

---
## Live Website URL


## File Structure

```
/NNP project
│
├── nnp_main.html
├── nnp_home.html
├── nnp_about.html
├── nnp_contacts.html
├── styles.css
├── script.js
├── big51.jpeg, big52.jpeg, ... (image assets)
```

---

## Page Descriptions

### 1. nnp_main.html (Dashboard)
- Displays a header and a row of animal images.
- Provides navigation buttons to Home, About, and Contacts pages.
- Uses flexbox for button and image layout.
- Images animate (shrink and rotate) on mouse hover.

### 2. nnp_home.html (Home)
- Welcomes users and introduces Nairobi National Park.
- Shows two featured images.
- Includes a button to return to the Dashboard.

### 3. nnp_about.html (About)
- Details the park’s location, accessibility, overview, and wildlife.
- Uses a background image for visual appeal.
- Structured with semantic HTML and styled containers.

### 4. nnp_contacts.html (Contacts)
- Lists contact information: email, phone, website, and postal address.
- Includes a button to return to the Dashboard.

---

## Styling (styles.css)

- **Typography:** Uses 'Segoe UI', Arial, sans-serif for a clean look.
- **Layout:** Responsive containers with max-width and padding.
- **Buttons:** Styled with rounded corners, color transitions, and hover effects.
- **Images:** Displayed in a flex row, with box-shadow and border-radius.
- **Animation:**  
  - `.animate` class triggers a keyframes animation that shrinks and rotates images.
  - Animation is infinite if applied directly, or toggled on hover via JavaScript.
- **Responsive Design:** Media queries adjust layout and font sizes for smaller screens.

---

## Interactivity (script.js)

- Adds event listeners to all images:
  - On mouseover, the `.animate` class is added, starting the animation.
  - On mouseout, the class is removed, stopping the animation.
- This provides a dynamic, engaging user experience.

---

## Navigation

- Navigation is handled via `<button>` elements with `onclick` attributes that change `window.location.href` to the target page.
- Each page provides a way to return to the Dashboard/Main page.

---

## How to Use

1. **Open nnp_main.html** in your browser to start.
2. **Navigate** using the provided buttons.
3. **Hover over images** to see the animation effect.
4. **Modify content** by editing the respective HTML files.
5. **Update styles** in styles.css as needed.
6. **Add or change images** by updating the image files and their references in the HTML.

---

## Customization

- **Images:** Replace or add new images in the project folder and update the HTML accordingly.
- **Contact Info:** Edit nnp_contacts.html to update contact details.
- **Content:** Change text in any HTML file to suit your needs.
- **Animation:** Adjust the `.animate` keyframes in styles.css for different effects.

---

## Credits

- All content and images are for demonstration purposes.
- Inspired by Nairobi National Park and its conservation efforts.

---

**End of Documentation**