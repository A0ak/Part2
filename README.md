# Exercise 2.12: Phonebook Step 7

I did a POST to the `addName` function of the phone book to save the numbers to a backend server. This request for the new person is sent to the server and the server adds this person to the database. For this code to work, the server must be able to process a POST request and add a new contact to the database. For this, I created a POST method on the server. This method takes the incoming request, adds a new contact to the database, and returns the newly added contact as a response.

## Commands to start json-server:

1. `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` - Temporarily removes the block imposed by PowerShell's security policy
2. `json-server --watch db.json --port 3001` - Starts json-server
3. `Start http://localhost:3001/persons` - Opens the URL http://localhost:3001/persons

Let's run these commands in PowerShell.
