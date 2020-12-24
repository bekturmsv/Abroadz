import React,{useState, useEffect} from 'react';
import './SearchBar.css'
const SearchBar = ({input,updateInput}) => {
  
    
  
  return (
      <div >
    <input 
    className="search-input"
     key="random1"
     value={input}
     placeholder={"search product"}
     onChange={(e) => updateInput(e.target.value)}
    />
    </div>
  );
}

export default SearchBar