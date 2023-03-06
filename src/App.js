import React, { useState, useEffect } from "react";
import './index.css';
import Search from "./Search";
import Newsletter from "./Newsletter";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

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

  //map over each title name
  //include key
  //i used for icons
  //import search and fontawesome for icons - NOT WORKING
  
  const searchHandler = (search) => {
    setSearch(search);
    if (search !== "") {
      //if search is not empty, filter array
        const newBookList = array.filter((book) => {
          return Object.values(book)
          //return results as string
          .joint(" ")
          .toLowerCase()
          .includes(search.toLowerCase())

        });
        setResults(newBookList);
    } else {
      setResults(array);
      //array = data.docs
    }
  };

  // console.log(results);
  //search value={props.term}



  //ADD SEARCH PARAMETERS

  //? : search < 1 displays ul 1, search > 1 displays ul
  return (
    <div className="container">
      <Navbar />
      
      <Search term={search} searchKeyword={searchHandler}/>
      
      
      <ul className="list">
        {array.map((item, i) => {
          return (
            <li key={i} className="list-item">
            <i class="fa-solid fa-feather"></i>
            &nbsp; 
            {item.title}
          </li>
          );
        })}
      </ul>
      <Newsletter className="newsletter"/>
    </div>
  )
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