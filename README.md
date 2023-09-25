# 2.16: The Phonebook step 11

At this stage, I briefly explained the file structure of the application and the functions and methods used in the application.

## File Structure

- `App.jsx`: It is the main component of the application. Maintains list of contacts and manages user interactions.
- `api.js`: Manages backend services. It performs HTTP requests using the Axios library.
- `index.css`: Contains the general styles of the application.
- `db.json`: It is a JSON database containing a list of contacts.

## Functions and Methods

- `useState`: useState, the React Hook, manages the state of the application.
- `useEffect`: useEffect, the React Hook, handles side effects. In this application, it is used to get the list of people during the initial rendering.
- `handleNameChange` and `handleNumberChange`: These functions manage the values that the user enters into form fields.
- `handleSearchChange`: This function manages the value that the user enters into the search field.
- `addName`: This function adds a new contact or updates the number of an existing contact.
- `deleteName`: This function deletes a specific contact.

## API Methods

- `getAll`: Gets the list of all contacts.
- `create`: Adds a new contact.
- `deletePerson`: Deletes a specific contact.
- `update`: Updates information for a specific contact.

## Styles

- `.notification`: It is used to show notifications. It has a green background color and a white text color.

## Operating

Commands to run the project:

1. `npm run dev`: This command starts the user side of your application.

2. `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`: This command temporarily changes PowerShell's security policy. This is necessary for json-server to work properly.

3. `json-server --watch db.json --port 3001`: This command restarts json-server. This provides backend services for your application.

4. `start http://localhost:3001/persons`: This command opens the URL http://localhost:3001/persons in your browser. This allows you to view your app's contacts list.

