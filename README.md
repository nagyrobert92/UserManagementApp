# [Kisso Industries](https://www.kissohq.com) - Full Stack technical test

This test is a part of our hiring process at Kisso for Full Stack Engineers.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter at squad@kissohq.com**

# 📋 Instructions

**DaUsa** is a user repository management web app.

Both **Frontend** and **Backend** tests should be done.

## 📨 Submission

Choose between one of these two solutions for the submission.

### Fork & Pull Request

1. Fork the repository at [https://github.com/KissoHQ/challenge-users](https://github.com/KissoHQ/challenge-users)
1. Work on your proposed solution in your fork, following the provided skeleton setup
1. Once your code is read, submit your solution as a pull request

### Clone & Submit the repo link

1. Clone the repository at [https://github.com/KissoHQ/challenge-users](https://github.com/KissoHQ/challenge-users)
1. Create your own repository from it
1. Work on your proposed solution in your repository, following the provided skeleton setup
1. Once your code is ready, send us the link to your repository

## ⏳ Time allotted for completion

There aren’t any formal requirements for how long this challenge should take you, complete it in ten minutes or ten hours, it’s up to you.

---

# 👁 Frontend

## Summary

The goal of this test is to make your code a small ReactJS app. We have prepared a [create-react-app](https://create-react-app.dev/) app for you, but please change whatever you want (CSS files, HTML structure, JS structure...).

---

DaUsa is a user repository management web app.

The app allows to create an account, log into an existing account and manage existing accounts.

**User Object field:**

- First Name \*
- Last Name
- Job
- Email \*
- Password \*

**Public pages:**

- Register
  - Create a user account (\*mandatory fields)
  - Receive a confirmation email after registering
- Login
  - Connect to an existing user account

**Private pages (require an authenticated user):**

- Home page
  - List all existing users
  - Delete a user
  - Add a user
- Connected user's account page
  - User details
  - Change password

You can use this screen 👇 as an inspiration, we are not expecting an exact copy though.

![users.png](/doc/users.jpg)

## 🛠 Install

We're using [yarn](https://yarnpkg.com/) here:

```
yarn install
yarn start

```

## 📦 Stack

- [create-react-app](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📜 Requirements

- Responsive UI
- Unit tests

## 🎉 Bonus

- Integration/E2E tests
- Nice UI/UX
- Impress us!

---

# 🗃 Backend

## Summary

The goal of this test is to make your code a small Express.js app. We have prepared a minimal express app for you, you'll find it at the root of the repository `/server/`, but please change whatever you want. You can switch to NestJS as well.

---

The backend should serve DaUsa's API.

## 📦 Stack

- [Express.js](https://expressjs.com/)
- [TypeORM](https://typeorm.io/) + PostgreSQL `or` [mongoose](https://mongoosejs.com/) + MongoDB `or` Strapi.

## 🎉 Bonus

- Impress us!
