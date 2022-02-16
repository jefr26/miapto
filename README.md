# MiApto

MiApto is a simple application to track the expenses on the buy of new apartment using react and firebase.

Created with create react app, react bootstrap, react router.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Create firebase project

Create a new project in firebase console and add a new web app to get the firebase credentials.

[https://cloud.google.com/firestore/docs/client/get-firebase](https://cloud.google.com/firestore/docs/client/get-firebase)
[https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)

### Set firebase rules

As this is a personal project I don't want to other users to register in firebase I set this rule to only allow my user to read and write.

```yml
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == 'user_uid';
    }
  }
}
```

I set email/password as authentication provider.

## Set enviroment variables

Copy `.env.example` to `.env.local` and set the data from firebase.

```env
REACT_APP_API_KEY="",
REACT_APP_AUTH_DOMAIN="",
REACT_APP_PROJECT_ID="",
REACT_APP_STORAGE_BUCKET="",
REACT_APP_MESSAGING_SENDER_ID="",
REACT_APP_APP_ID=""
```

## Other links
App icon [Iconfinder](https://www.iconfinder.com/iconsets/yellow-tools)

React bootstrap [https://react-bootstrap.github.io/getting-started/introduction/](https://react-bootstrap.github.io/getting-started/introduction/)

React router [https://reactrouter.com/docs/en/v6](https://reactrouter.com/docs/en/v6)

Some style ideas from [https://demos.creative-tim.com/paper-dashboard-react](https://demos.creative-tim.com/paper-dashboard-react)
