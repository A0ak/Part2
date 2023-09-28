# 2.19: Data for countries step2

Added handleShowClick function in addition to country data step1.

## App.jsx


- `handleShowClick` : The handleShowClick function is triggered when a user clicks on a country name. This function has two main tasks:

1. setSelectedCountry(country): This sets the clicked country's information to the selectedCountry state variable. This allows the details of the selected country to be displayed later.

2. detailsRef.current.scrollIntoView({ behavior: 'smooth' }): This statement scrolls to a specific location on the page (where the details are displayed) when a country is selected. This allows the page to automatically scroll so the user can see the details of the country they selected.