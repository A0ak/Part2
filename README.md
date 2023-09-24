Exercise 2.12 : Phonebook Step 6

In order for the phonebook to save the numbers to a backend server, I did a POST in the addName function. This request is sent to the server for the new person and the server adds this person to the database. However, for this code to work, I created a POST method on your server so that the server can process a POST request and add a new contact to the database. This method takes the incoming request, adds a new contact to the database, and returns the newly added contact as a response.

Commands to start json-server:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass(Temporarily removes the block imposed by PowerShell's security policy)
json-server --watch db.json --port 3001(starts json-server)
start http://localhost:3001/persons(opens the URL http://localhost:3001/persons)

Let's execute these commands in PowerShell.

