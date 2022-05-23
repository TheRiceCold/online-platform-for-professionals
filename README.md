<!-- Project Logo -->
<div align="center">
  <a href="https://github.com/dwghdev/slack-clone-react">
    <img src="public/workflow_logo_white.svg" height="80">
  </a>

  <h3 align="center">Online Platform for Professionals</h3>
  <p align="center">
    <a href="https://www.avionschool.com/">Avion School</a>
    <span>Final web application group project. Check out </span>
    <a href="">here</a>
    <br/>
    ·
    <a href="https://github.com/dwghdev/online-platform-for-professionals-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/dwghdev/online-platform-for-professionals-frontend/issues">Request Feature</a>
    ·
    <a href="https://github.com/gdperalta/online-platform-for-professionals-api">Backend Repo</a>

  ![NextJs Badge] ![React Badge] ![Yarn Badge] ![NPM Badge]
  </p>
</div>
<br/>

<details>
  <summary>Contents</summary>
    <ul>
      <li>
        <a href="#getting-started">Getting Started</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#project-structure">Project Structure</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#acknowledgements">Acknowledgements</a>
      </li>
    </ul>
</details>

## Getting Started
- clone the project and then start the project

```
  git clone https://github.com/dwghdev/online-platform-for-professionals-frontend
  cd online-platform-for-professionals-frontend

  # install dependencies
  yarn install

  # run server
  yarn dev
```

## Features

**Professional**
- [ ] professionals can add their projects/work experience
- [ ] professionals can add services and its price range
- [ ] professionals have a page that shows his/her details, credentials, projects/work experience and reviews
- [ ] professionals can integrate to calendly account with their account
- [ ] professionals can add a customer to my list of clients

**Customer/Client:**
- [ ] clients can create an account so to search and book a meeting with a professional
- [ ] clients have a page that shows all his/her bookings
- [ ] clients can to follow a professional
- [ ] clients can add/edit/delete a review/recommendation after a confirmed meeting with a professional
- [ ] clients can search for a professional based on their name, location, or fields

**Admin**
- [ ] admins can approve a user after reviewing their application

## Project Structure
```
public (assets/images)
├── icon.ico
├── logo.svg
├── logo_white.svg
src
├── components
│   ├── feedback
│   ├── forms
│   ├── navigation
│   ├── overlay
│   ├── table
│   └── RouteGuard.jsx
├── contexts
│   ├── auth
│   ├── bookings
│   ├── connections
│   ├── helpers
│   └── users
├── layouts
│   ├── admin
│   ├── auth
│   ├── bookings
│   ├── clients
│   ├── navbar
│   └── professional
├── lib
│   ├── hooks
│   │   ├── useClickOutside.js
│   │   ├── useDebounce.js
│   │   ├── useMount.js
│   │   └── useStorage.js
│   └── utils
│       ├── axios.js
│       ├── jsonHelpers
│       └── stringHelpers
├── pages
styles
├── global.sass
├── Auth.module.sass
├── Bookings.module.sass
├── Clients.module.sass
├── Components.module.sass
└── Professionals.module.sass
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Dale Walter - []

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgements

* [Zod]: TypeScript-first schema validation with static type inference (Works with JavaScript too!)
* [Axios]: Promise based HTTP client for the browser and node.js
* [Chakra UI]: Simple, Modular & Accessible UI Components for your React Applications
* [React Query]: Hooks for fetching, caching and updating asynchronous data in React
* [React Spinners]: A collection of loading spinner components for react
* [React Calendly]: Calendly integration for React apps
* [React Hook Form]: React Hooks for form state management and validation (Web + React Native)

<!-- links & images -->
[React Badge]: https://img.shields.io/badge/React-v17.0.2-%2361DAFB?style=flat-square&logo=React
[NextJs Badge]: https://img.shields.io/badge/NextJs-v12.1.0-000000?style=flat-square&logo=Next.js
[Yarn Badge]: https://img.shields.io/badge/Yarn-v1.22.17-2c8ebb?style=flat-square&logo=Yarn
[NPM Badge]: https://img.shields.io/badge/NPM-v8.3.1-cb3837?style=flat-square&logo=npm

<!-- Acknowledgements -->
[Zod]: https://github.com/colinhacks/zod
[Axios]: https://github.com/axios/axios
[Chakra UI]: https://github.com/chakra-ui/chakra-ui
[React Query]: https://github.com/tannerlinsley/react-query 
[React Spinners]: https://github.com/davidhu2000/react-spinners
[React Hook Form]: https://github.com/react-hook-form/react-hook-form
[React Calendly]: https://github.com/tcampb/react-calendly
