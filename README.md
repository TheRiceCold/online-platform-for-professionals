<!-- Project Logo -->
<div align="center">
  <a href="https://github.com/dwghdev/slack-clone-react">
    <img src="public/workflow_logo_white.svg" height="80">
  </a>

  <h3 align="center">Online Platform for Professionals</h3>
  <p align="center">
    <a href="https://www.avionschool.com/">Avion School</a>
    <span>Final web application group project.</span>
    <a href="https://www.github.com/gdperalta/online-platform-for-professionals-api">Backend Repo</a>
    <br/>
    <a href="https://github.com/dwghdev/slack-clone-react">View Website</a>
    ·
    <a href="https://github.com/dwghdev/slack-clone-react">Report Bug</a>
    ·
    <a href="https://github.com/dwghdev/slack-clone-react">Request Feature</a>

  ![React Badge] ![NextJs Badge] ![Yarn Badge] ![NPM Badge]
  </p>
</div>
<br/>


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
public
├── icon.ico
├── logo.svg
├── log_white.svg
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

* [Zod]
* [Axios]
* [Chakra UI]
* [React Query]
* [React Spinners]
* [React Hook Form]

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
