import React from "react";

function Newsletter() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Thank you");
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" onClick={() => console.log("Clicked")}>
                Subscribe to our newsletter
            </button>
        </form>
    );
}

export default Newsletter;


