# 2.17: The Phonebook step 12

In addition to the functions and methods used in the previous stage, the following new functions and methods were used:

## App.jsx

- `setNotification`: This function manages the notification status of the application. Notifications provide feedback to the user as a result of certain actions (for example, a contact has been added, updated, or deleted).
- `setTimeout`:This JavaScript function is used to perform an action after a certain period of time. In this application, it is used to automatically remove notifications after a certain period of time.
- `filteredPersons`:  This variable filters people based on the text the user enters in the search field. This allows the user to search the contact list.


## api.js

 No new functions or methods have been added in this file. However, the `update` and `deletePerson` functions are extended with catch blocks to handle error conditions.

## Styles

- `.notification.success` and `.notification.error`:  These CSS classes determine the background colors of success and error notifications.

## Operating

Commands to run the project:

1. `npm run dev`: This command starts the user side of your application.

2. `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`: This command temporarily changes PowerShell's security policy. This is necessary for json-server to work properly.

3. `json-server --watch db.json --port 3001`: This command restarts json-server. This provides backend services for your application.

4. `start http://localhost:3001/persons`: This command opens the URL http://localhost:3001/persons in your browser. This allows you to view your app's contacts list.

5. `npm run start-both`: The command to use to launch the app in Chrome and Edge simultaneously. For this command to work, you need to add the concurrently package to the project  `npm install concurrently --save-dev`. I added the relevant script ("start-both": "concurrently \"npm run start-chrome\" \"npm run start-edge\"") to the package.json file.

