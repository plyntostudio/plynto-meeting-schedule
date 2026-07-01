# Plynto Studio — Meeting Booking Page

A single-page meeting booking site built with React, Vite, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Before you deploy

Open `src/components/BookingForm.jsx` and replace the placeholder Formspree
endpoint near the top of the file:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT'
```

Swap `YOUR_FORMSPREE_ENDPOINT` for your real Formspree form ID (from your
Formspree dashboard). Submissions will then be emailed to the address
connected to that form.

## Structure

```
src/
  components/
    Navbar.jsx            sticky nav with logo + jump link
    Hero.jsx               hero heading + animated brand mark
    AvailabilityNotice.jsx meeting hours + unavailability warning
    BookingForm.jsx        validated booking form, submits via Formspree
    FAQ.jsx                accordion FAQ
    Footer.jsx              footer
    Toast.jsx               success/error toast
    Reveal.jsx              shared scroll fade-in wrapper
    Logo.jsx                brand mark SVG
  App.jsx
  main.jsx
  index.css
```

## Notes

- The date field blocks past dates (`min` is set to today).
- The time field is restricted to 9:00 AM–7:00 PM, with matching validation
  on submit.
- Email and phone are validated with regex before submission.
- Reduced-motion preference is respected globally.
