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

export default function Food() {
  const [food, setFood] = useState([]);

  const fallbackImage = 'https://www.google.com/imgres?q=no%20img&imgurl=https%3A%2F%2Fst3.depositphotos.com%2F23594922%2F31822%2Fv%2F450%2Fdepositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fno-image-available.html&docid=CPLUlL4hIDNDdM&tbnid=v3iZKbCfoqg1ZM&vet=12ahUKEwj409rTgdaFAxXPslYBHUdVBPIQM3oECBgQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwj409rTgdaFAxXPslYBHUdVBPIQM3oECBgQAA';

  useEffect(() => {
    axios.get('FoodData.json')
          .then(response => {
              setFood(response.data);
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
          sortFoodsHighToLow();
      }else if (option === "Cost: Low to High") {
          sortFoodsLowToHigh();
      }else if (option === "Ascending") {
          sortFoodsByNameAZ();
      }else if (option === "Descending") {
          sortFoodsByNameZA();
      }


      handleClose();
  };

  
  const sortFoodsHighToLow = () => {
      const sortedFoods = [...food].sort((a, b) => b.price - a.price);
      setFood(sortedFoods);
  };

  const sortFoodsLowToHigh = () => {
      const sortedFoods = [...food].sort((a, b) => a.price - b.price);
      setFood(sortedFoods);
  };

  const sortFoodsByNameAZ = () => {
      const sortedFoods = [...food].sort((a, b) => a.name.localeCompare(b.name));
      setFood(sortedFoods);
  };
  
  const sortFoodsByNameZA = () => {
      const sortedFoods = [...food].sort((a, b) => b.name.localeCompare(a.name));
      setFood(sortedFoods);
  };
  return (
    <div className='container pt-5'>
    <div className='row'>
        <h4 className='fw-bold'>Restaurants with online food delivery in Mumbai</h4>
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

        {food.map((item, index) => (
            <div className='col-lg-3 col-6'>

            <Card sx={{ maxWidth: 280, backgroundColor: 'white', color: 'black', boxShadow: 'none' }} key={index} className='crd-fod pt-3'>
                <CardMedia
                    sx={{ height: 140, borderRadius: '10px' }}
                    image={item.img ? item.img : fallbackImage} 
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
