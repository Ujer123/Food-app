import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, CardContent, CardMedia, Typography, Grid,
    Button, Menu, MenuItem, FormControlLabel, Radio, RadioGroup, Stack
  } from '@mui/material';
import {faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Food() {
  
  const [burgers, setBurgers] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [bbqs, setBBQs] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);

  
  const fetchData = async () => {
    const urls = {
      burgers: 'https://adorable-bat-fatigues.cyclic.app/burgers',
      pizzas: 'https://adorable-bat-fatigues.cyclic.app/pizzas',
      bbqs: 'https://adorable-bat-fatigues.cyclic.app/bbqs',
      desserts: 'https://adorable-bat-fatigues.cyclic.app/desserts',
      drinks: 'https://adorable-bat-fatigues.cyclic.app/drinks',
      sandwiches: 'https://adorable-bat-fatigues.cyclic.app/sandwiches',
    };

    try {
      
      const [burgersResponse, pizzasResponse, bbqsResponse, dessertsResponse, drinksResponse, sandwichesResponse] = await Promise.all([
        axios.get(urls.burgers),
        axios.get(urls.pizzas),
        axios.get(urls.bbqs),
        axios.get(urls.desserts),
        axios.get(urls.drinks),
        axios.get(urls.sandwiches),
      ]);

      // Update state variables with the fetched data
      setBurgers(burgersResponse.data);
      setPizzas(pizzasResponse.data);
      setBBQs(bbqsResponse.data);
      setDesserts(dessertsResponse.data);
      setDrinks(drinksResponse.data);
      setSandwiches(sandwichesResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);


  const [selectedOption, setSelectedOption] = useState('Sort By');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    handleClose();
  };



const renderFoodCards = (items) => (
    <div className='row'>
        
        
        
      {items.map((item, index) => (
          <div className='col-lg-3' key={index}>
          <Card sx={{ maxWidth: 345, backgroundColor: 'white', color: 'black', boxShadow: 'none' }} key={index} className='crd-fod'>
            <CardMedia
              component="img"
              sx={{ height: 140, borderRadius: '10px' }}
              image={item.img || 'https://via.placeholder.com/150'}
              alt={item.name}
              />
            <CardContent className='crd-cont'>
              <Typography gutterBottom variant="h6">
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
  );
  
  return (
      <div className='container'>
        
            
        <h4 className='fw-bold mb-3 pt-4'>Restaurants to explore</h4>
        <Stack direction="row" spacing={2} className="mb-3">
        <Button
          variant="outlined"
          className="rounded-pill text-black border-0 shadow text-capitalize"
          onClick={handleClick}
        >
          {selectedOption}
          <FontAwesomeIcon icon={faChevronDown} className="ps-1" />
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
        <Button variant="outlined" className="rounded-pill text-black border-0 shadow text-capitalize">
          Pure Veg
        </Button>
        <Button variant="outlined" className="rounded-pill text-black border-0 shadow text-capitalize">
          Less than 30 mins
        </Button>
      </Stack>
    {renderFoodCards(burgers)}
    {renderFoodCards(pizzas)}
    {renderFoodCards(bbqs)}
    {renderFoodCards(desserts)}
    {renderFoodCards(drinks)}
    {renderFoodCards(sandwiches)}
  </div>
  
  
  
  );
}
