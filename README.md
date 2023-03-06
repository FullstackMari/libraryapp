This application is comprised of 3 pages

The home page (App.js) uses the hooks useState to update information/input from the user and API (data) and useEffect is crucial to fetching data from the API (Open Library) - it has methods to collect information from the API (JSON) and error handling in case the data is not able to be reached.

The home page fetches all books written by Isaac Asimov and these these values are displayed as list items inside of an ul positioned in CSS.

The routing is slightly faulty - nothing displays on localport:3000 but there are 3 pages which do: home, about, and contact which I eventually renamed to HOME, ONLINE RESOURCES, AND HELP because the context for the site changed midway. I later included relevant links rather than empty pages as I initially intended to for demonstration purposes.

The search component is exported to the main page but I have not yet been able to make it function as intended. Data has been fetched from Open Library but I could not figure out the error in my initial conditional state which used the ternary operator ? :
=> from this point this was to function by displaying either an array of books or search results.

EXTRA CODE:
I didn't have time to add icons with fontawesome and there may be remnants in my code I'll eventually use to polish the site up. I initially wanted to make use of Bootstrap to work with components more quickly but I ran into problems and decided to leave it out for now. I thought it would save time to make use of it but I learned (I should have known) it's best to save new implementations during less time sensitive work.