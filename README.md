Exercise 2.12: Phonebook Step 6

I did a POST in the addName function for the phonebook to save the numbers to a backend server. This request for the new person is sent to the server and the server adds this person to the database. For this code to work, I created a POST method on the server so that the server can process a POST request and add a new contact to the database. This method takes the incoming request, adds a new contact to the database, and returns the newly added contact as a response.

Commands to start json-server:

1.)Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass(Temporarily removes the block imposed by PowerShell's security policy)
2.)json-server --watch db.json --port 3001(starts json-server)
3.)Start http://localhost:3001/persons (opens the URL http://localhost:3001/persons)

Let's run these commands in PowerShell.

