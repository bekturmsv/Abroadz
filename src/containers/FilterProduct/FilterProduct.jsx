import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { history } from '../../helpers/history'
import { productContext } from '../../contexts/ProductsContext';
import './FilterProduct.css'
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const FilterProduct = (props) => {
  const { getproductsData } = useContext(productContext)
  const [expanded, setExpanded] = React.useState(false);
  const [gender, setGender] = useState('');
  const [page, setPage] = useState(1)
  const history = useHistory();
  const search = new URLSearchParams(history.location.search)

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setGender(panel)
    setExpanded(isExpanded ? panel : false);
  };

  function fetchParams(country ) {
    const query = new URLSearchParams(history.location.search);
    query.set("_page", page);
    if(!country){
      query.delete("country")
    }else{
       query.set("country", country);
    }
    
      history.push("/list" + "?" + query)
    getproductsData()
  }
  return (
    <div className="filter-list">
      
        <ul className="menu__box">
          
          <li> <AccordionDetails onClick={(e) => fetchParams("")}><Typography>All</Typography></AccordionDetails></li> 
          <li> <AccordionDetails onClick={(e) => fetchParams("Germany")} ><Typography>Germany</Typography></AccordionDetails></li> 
          <li> <AccordionDetails onClick={(e) => fetchParams("USA")} ><Typography>USA</Typography></AccordionDetails></li> 
          <li> <AccordionDetails onClick={(e) => fetchParams("Japan")} ><Typography>Japan</Typography></AccordionDetails></li> 
          <li><AccordionDetails onClick={(e) => fetchParams("England")} ><Typography> England</Typography></AccordionDetails></li> 
          <li> <AccordionDetails onClick={(e) => fetchParams("China")} ><Typography>China</Typography></AccordionDetails></li> 
          <li> <AccordionDetails onClick={(e) => fetchParams("Canada")} ><Typography>Canada</Typography></AccordionDetails></li> 
        </ul>
     
    </div>
  );
};

export default FilterProduct;