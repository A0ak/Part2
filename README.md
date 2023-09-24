## 2.15: The Phonebook step 10

- I added the update function to the `api.js` file

Changes made to the `App.jsx` file:

1. **addName function**: This function is called when the user tries to add a person. With the new code, this function now first checks whether the person being tried to add is already present in the phonebook. This check is done using the find method in the persons array.

2. If the person being tried to add is already in the phonebook, confirmation is requested from the user. This confirmation is obtained using the `window.confirm` function.

3. If the user confirms, the `personService.update` function is called and the person's phone number is updated. This operation is performed in the backend by sending an HTTP PUT request.

4. If the person is not already in the phonebook, the `personService.create` function is called and a new person is added. This operation is performed by sending an HTTP POST request to the backend.