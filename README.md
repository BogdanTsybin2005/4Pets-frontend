# 🐾 4PETS — Pet Interaction Platform

This project is a full-featured client-side web application for 4PETS — a platform that helps users interact with pet-related content, including profile setup, chatbot communication, blog stories, registration forms, and an interactive map.

The application demonstrates practical frontend development skills using modern tools, scalable architecture, adaptive layout, and multilingual support.

---

## 🚀 Technologies Used

- **React + JSX** – component-based architecture
- **SCSS** – modular styling with nesting
- **Context API** – language switching and global context management
- **Custom Hooks** – encapsulated logic with `useLocalStorage`, `useScrollY`, `useWindowWidth`
- **Responsive Design** – supports all screen sizes
- **Multilingual Interface** – English, Russian and Kyrgyz support
- **SVG Icons** – animated and interactive icons
- **Vite** – ultra-fast development and build tool

---

## 🎯 Project Features

- Multi-step registration with avatar upload
- User profile page with editable data
- Chatbot interface with typing animation
- Blog with user stories and testimonials
- Interactive map with markers
- Language switcher (RU / EN / KG)
- Clean, maintainable architecture

---

## 📁 Project Structure

```bash
📁 4PETS
├── public/
├── src/
│   ├── assets/static/
│   ├── authComponents/
│   │   ├── button/
│   │   ├── header/
│   │   ├── subscription/
│   │   └── subscriptionCard/
│   ├── authPages/
│   │   ├── blog/
│   │   ├── chatbot/
│   │   ├── info/
│   │   ├── main/
│   │   └── map/
│   ├── components/
│   │   ├── 4petsTeamSlider/
│   │   ├── burgerMenu/
│   │   ├── button/
│   │   ├── customSelect/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── input/
│   │   ├── main/
│   │   ├── mainPageTitle/
│   │   ├── section/
│   │   ├── userLogo/
│   │   └── intorPartOfProfilePage/
│   ├── context/
│   │   ├── AuthorizationContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── RegistrationContext.jsx
│   ├── data/
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useScrollY.js
│   │   └── useWindowWidth.js
│   ├── pages/
│   │   ├── auth-form/
│   │   ├── login/
│   │   ├── main-page/
│   │   ├── profile-registration-page/
│   │   ├── signup/
│   │   ├── successful-registration-page/
│   │   └── user-profile/
│   ├── svg_pictures/
│   │   ├── icons/
│   │   ├── pictures/
│   │   └── possibilities/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
```

---

## 🔧 Environment configuration

Set these variables in a `.env` file (or in your hosting provider) to point the frontend to the correct backend:

- `VITE_BACKEND_URL` — base backend host (for example `https://4-pets-backend.vercel.app`).
- `VITE_BACKEND_PREFIX` — optional path prefix. Leave empty (`""`) if the host already includes the API path, or set to `/api/v1` (default) when the backend exposes versioned routes.

---

## 📫 Contact

If you have any questions or want to collaborate, feel free to reach out:

- **Telegram**: [@bogdan_sest_1025](https://t.me/bogdan_sest_1025)
- **Email**: [tsybinb@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=tsybinb@gmail.com)
