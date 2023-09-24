# Exercises 2.13 : The Phonebook step 8

I wrote the necessary code and functions to make HTTP requests and perform backend communication in the `api.js` file under the `src` folder.

Commands to start json-server:

1. Temporarily removes the block imposed by PowerShell's security policy:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

2. Starts json-server:
json-server --watch db.json --port 3001

3. Opens the URL http://localhost:3001/persons:

Start http://localhost:3001/persons

