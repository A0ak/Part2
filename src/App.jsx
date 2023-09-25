import { useState, useEffect } from 'react'
import personService from './api'
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null);
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(existingPerson.id, nameObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
            setNewName('')
            setNewNumber('')
            setNotification(`Updated ${newName}`);
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
      }
    } else {
      personService.create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${newName}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
    }
  }

  const deleteName = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    if (window.confirm("Do you really want to delete this person?")) {
      personService.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNotification(`Deleted ${personToDelete.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
    }
  };

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <div className="notification">{notification}</div>}
      <div>
        Search: <input value={search} onChange={handleSearchChange} /> {/* arama alanını ekle */}
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) =>
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deleteName(person.id)}>delete</button>
          </p>
        )}
      </div>
    </div>
  )
}

export default App