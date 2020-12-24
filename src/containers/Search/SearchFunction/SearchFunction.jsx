import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchProductList from '../SearchProductList/SearchProductList';
import axios from 'axios';
import './SearchFunction.css';
const SearchFunction = (props) => {
  const [input, setInput] = useState('');
  const [countryList, setCountryList] = useState([]);


  const updateInput = async (input) => {
    if (!input) {
      setCountryList([])
      return setInput([])

    } else {
      let { data } = await axios(`http://localhost:8000/products?title_like=${input}`)
      setCountryList(data)
      setInput(input);
    }
  }


  return (
    <div className="search-func">
      <div className="search-div">
        <SearchBar
          input={input}
          updateInput={updateInput}
        />
      </div>
      <div className="search-result">
        <SearchProductList countryList={countryList} />
      </div>
    </div>
  );
}

export default SearchFunction