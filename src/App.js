import React, { useState, useEffect } from "react";
import './index.css';
import Search from "./Search";
import Newsletter from "./Newsletter";
// import Navbar from "./Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //create state for search and search results

  const [search, setSearch] = useState("");
  // const [results, setResults] = useState[];
  const [results, setResults] = useState([]);

  
  useEffect(() => {
      setLoading(true);
      fetch("https://openlibrary.org/search.json?author=asimov")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading())
      .catch(setError);

  }, []);

  //catch((e) => { console.log(e) setLoading()});

  if (loading) {
    return <h1 className="center">LOADING...</h1>;
  }

  if(error){
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (!data) {
    return null;
  }

  let array = data.docs;
  //all API data stored in docs array
  //map over each title name
  //include key
  
  const searchHandler = (event) => {
    console.log(event)
    setSearch(event);
    if (event !== "") {
      //if search is not empty, filter array
        const newBookList = array.filter((book) => {
          return Object.values(book)
          //return results as string
          .join(" ")
          .toLowerCase()
          .includes(event.toLowerCase())

        });
        setResults(newBookList);
        console.log(newBookList)
    } else {
      setResults(array);
      //array = data.docs
    }
  };

  // console.log(results);
  //search value={props.term}



  //ADD SEARCH PARAMETERS

  //? : search < 1 displays ul 1, search > 1 displays ul
  //thing div houses links above, navbar is wonky but there to stand in place of App.js to display the pages as a drop down menu - sort of
  return (
    <div className="container">
      <div class="thing">
         {/* <Navbar /> */}

        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
        <Route path="contact" element={ <Contact/> } />
        </Routes>


          <Link to="home">HOME</Link>
          {' '}
          <Link to="about">ONLINE RESOURCES</Link>
          {' '}
          <Link to="contact">HELP</Link>
          <br />
          {/* <h1 className="h1">OPEN LIBRARY SEARCH APP</h1> */}
          <img className="imglogo" src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg" height="120" width="220" alt="openlibrary.org logo"></img>


      </div>
     
      
      <Search term={search} searchKeyword={searchHandler}/>
      
      {search.length < 1 ? (<div><ul className="list">
        {results.map((item, i) => {
          return (
            <li key={i} className="list-item">
            {/* <i class="fa-solid fa-feather"></i>
            &nbsp;  */}
            {item.title}
          </li>
          );
        })}
      </ul> </div>) : (<ul className="list">
        {results.map((item, i) => {
          return (
            <li key={i} className="list-item">
            {/* <i class="fa-solid fa-feather"></i>
            &nbsp;  */}
            {item.title}
          </li>
          );
        })}
      </ul>) }
      
      <Newsletter className="newsletter"/>
    </div>
  )
  
  //fa-solid fa-feather fontawesome icon - add later
  
  // return(
  //   <h1>LIBRARY APP</h1>
  // )
  // return (
  //   <div className="App">
  //   test
  //   </div>
  // );
  // console.log(data.docs[0].title);
  // return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;