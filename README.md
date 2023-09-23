Exercise 2.11:  The Phonebook Step6

Since I continue my application with Vite, the user interface side works on port 5173. In this case, port 3001 is available. Still the server did not work. This is due to a problem arising from PowerShell's security policy. We overcome this obstacle with the command `(Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass)` in PowerShell. However, we will use this command again when we restart the json-server another time.

We start json-server with the following commands. Provided that json-server and axios are installed:

1. `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` (temporarily removes the block imposed by PowerShell's security policy)
2. `json-server --watch db.json --port 3001` (starts json-server)
3. `start http://localhost:3001/persons` (opens the URL http://localhost:3001/persons)