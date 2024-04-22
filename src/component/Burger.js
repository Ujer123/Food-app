import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Burger() {
    const [burger, setBurger] = useState([]);


    useEffect(() => {
        axios.get(`https://adorable-bat-fatigues.cyclic.app/burgers`)
            .then(response => {
                setBurger(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log('Error fetching pizza data:', error);
            });
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Sort By');

    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    const handleOptionChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        
        if (option === "Cost: High to Low") {
          sortedBurgersHighToLow();
        }else if (option === "Cost: Low to High") {
          sortBurgersLowToHigh();
        }else if (option === "Ascending") {
          sortBurgersByNameAZ();
        }else if (option === "Descending") {
          sortBurgersByNameZA();
        }


        handleClose();
    };

    
    const sortedBurgersHighToLow = () => {
        const sortedBurgers = [...burger].sort((a, b) => b.price - a.price);
        setBurger(sortedBurgers);
    };

    const sortBurgersLowToHigh = () => {
        const sortedBurgers = [...burger].sort((a, b) => a.price - b.price);
        setBurger(sortedBurgers);
    };

    const sortBurgersByNameAZ = () => {
        const sortedBurgers = [...burger].sort((a, b) => a.name.localeCompare(b.name));
        setBurger(sortedBurgers);
    };
    
    const sortBurgersByNameZA = () => {
        const sortedBurgers = [...burger].sort((a, b) => b.name.localeCompare(a.name));
        setBurger(sortedBurgers);
    };
    

    return (
        <div className='container pt-5'>
        <div className='row'>
            <h2 className='fw-bold'>Burger</h2>
            <p>Satisfy your cravings with these fresh and flavoursome burgers.</p>
            <Stack direction="row" spacing={2}>
            <Button
                variant="outlined"
                className="rounded-pill text-black border-0 shadow text-capitalize"
                onClick={handleClick}
            >
                
                {selectedOption}
                <FontAwesomeIcon icon={faChevronDown} className='ps-1'/>
            </Button>

            
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* Radio options within the menu */}
                <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                    <MenuItem>
                        <FormControlLabel
                            value="Ascending"
                            control={<Radio />}
                            label="Ascending"
                        />
                    </MenuItem>
                    <MenuItem>
                        <FormControlLabel
                            value="Descending"
                            control={<Radio />}
                            label="Descending"
                        />
                    </MenuItem>
                    <MenuItem>
                        <FormControlLabel
                            value="Cost: Low to High"
                            control={<Radio />}
                            label="Cost: Low to High"
                        />
                    </MenuItem>
                    <MenuItem>
                        <FormControlLabel
                            value="Cost: High to Low"
                            control={<Radio />}
                            label="Cost: High to Low"
                        />
                    </MenuItem>
                </RadioGroup>
            </Menu>
      
      <Button variant="outlined" className='rounded-pill text-black border-0 shadow text-capitalize'>Pure Veg</Button>
      <Button variant="outlined" className='rounded-pill text-black border-0 shadow text-capitalize'>Less than 30 mins</Button>
      
      
    </Stack>
    <h4 className='fw-bold mb-3 pt-4'>Restaurants to explore</h4>

            {burger.map((item, index) => (
                <div className='col-lg-3'>

                <Card sx={{ maxWidth: 345, backgroundColor: 'white', color: 'black', boxShadow: 'none' }} key={index} className='crd-fod'>
                    <CardMedia
                        sx={{ height: 140, borderRadius: '10px' }}
                        image={item.img}
                        title={item.name} 
                    />
                    <CardContent className='crd-cont'>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" className='crd-prc d-flex '>
                            <div className='star-icn me-1'>

                        <FontAwesomeIcon icon={faStar} className='p-1'/>
                            </div>
                        {item.rate + ' - ' + item.price + ' Rupees'} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.dsc.slice(0,37) + '...'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.country}
                        </Typography>
                    </CardContent>
                </Card>
                </div>
            ))}
                    </div>
        </div>
    );
}
