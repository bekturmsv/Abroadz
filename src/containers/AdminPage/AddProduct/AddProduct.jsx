import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import { productContext } from '../../../contexts/ProductsContext';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '17%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddProduct = () => {

    const classes = useStyles();
    const [description, setDescription] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };
   
    const handleChange2 = (event) => {
        setCountry(event.target.value);
    };
   
    const handleChange4 = (event) => {
        setType(event.target.value);
    };

    let { addTask } = useContext(productContext)
    let [title, setTitle] = useState('')

    // let [brand, setCountry] = useState('')
    // let [gender, setDescription] = useState('')
    // let [size, setSize] = useState('')
    // let [color, setColor] = useState('')
    // let [type, setType] = useState('')
    let [img, setImg] = useState('')
    let [price, setPrice] = useState('')
    let [isError, setError] = useState(false)


    function handleClick() {
        if (!title || !country || !description || !type || !img || !price) {
            setError(true)
            return
        } else {
            setError(false)
        }

        let newObj = {
            img: img,
            title: title,
            country: country,
            description: description,
            type: type,
            price: price,
            id: Date.now(), 
            comments: []
        }
        console.log(newObj)
        addTask(newObj)
        setImg('')
        setTitle('')
        setCountry('')
        setDescription('')
        setType('')
        setPrice('')
    }

    return (


        <div className="add-product" style={{marginTop:'100px'}}>
            <h1 >Add product</h1>
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="Img"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={title} onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
            />
            <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={country}
                    onChange={handleChange2}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={country}>
                        <em>Country</em>
                    </MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                    <MenuItem value="England">England</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                </Select>
            </FormControl><br />
            
                <br />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={description} onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
            />
            <br />
            <FormControl className={classes.formControl} >
                <InputLabel style={{ color: "black" }} htmlFor="grouped-select"><em>Type</em></InputLabel>
                <Select
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    style={{ textAlign: 'left' }}
                    value={type}
                    onChange={handleChange4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value={type}>
                        <em>Type</em>
                    </MenuItem>
                    
                    <MenuItem value='Job'>Job</MenuItem >
                    <MenuItem value='Study'>Study</MenuItem >

                </Select>
            </FormControl>
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={price} onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Price"
            />
            
            <button variant="contained" onClick={handleClick} className="btn-add">Add Product</button>
        </div>

    );
};

export default AddProduct;

