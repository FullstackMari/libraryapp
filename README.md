This application is comprised of 3 pages

The home page (App.js) uses the useState hook to update information/input from the user and API (data) and useEffect fetches data from the API (Open Library) - it has methods to collect information from the API (JSON) and error handling in case the data is not able to be reached.

The home page fetches all books written by an author and these these values are displayed as list items inside of an ul positioned in CSS.

The routing will be improved - nothing displays on localport:3000 but there are 3 pages which do: home, about, and contact which I eventually renamed to HOME, ONLINE RESOURCES, AND HELP because the context for the site changed midway. I later included relevant links rather than empty pages as I initially intended to for demonstration purposes.

The search component is exported to the main page but I have not yet been able to make it function as intended. Data has been fetched from Open Library but I could not figure out the error in my initial conditional state which used the ternary operator ? :
=> from this point this was to function by displaying either an array of books or search results.

Next update: fontawesome icons, Bootstrap
