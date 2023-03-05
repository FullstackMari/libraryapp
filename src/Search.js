import React, { useState, useEffect } from "react";

//handlechange stores value - function controls deployment

//handlesearch, include keyword

//function Search(props.term)
//props.searchKeyword

//value={props.term}

//console log search results

//input className or class ???

function Search({ term, searchKeyword }) {

    function handleChange(e){
        searchKeyword(e.target.value);

    }

    return (
        <>
            <input className="input" type="text" placeholder="BROWSE TITLES" onChange={handleChange} value={term}>
            </input>
        
        </>
    )
}

export default Search;