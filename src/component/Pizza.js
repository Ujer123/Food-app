import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';

export default function Pizza() {
    const [pizza, setPizza] = useState([]);

    const fallbackImage = 'https://www.google.com/imgres?q=no%20img&imgurl=https%3A%2F%2Fst3.depositphotos.com%2F23594922%2F31822%2Fv%2F450%2Fdepositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fno-image-available.html&docid=CPLUlL4hIDNDdM&tbnid=v3iZKbCfoqg1ZM&vet=12ahUKEwj409rTgdaFAxXPslYBHUdVBPIQM3oECBgQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwj409rTgdaFAxXPslYBHUdVBPIQM3oECBgQAA';

    useEffect(() => {
        axios.get(`https://adorable-bat-fatigues.cyclic.app/pizzas`)
            .then(response => {
                setPizza(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log('Error fetching pizza data:', error);
            });
    }, []);

    return (
        <div className='container pt-5'>
        <div className='row'>
            <h2>Pizza</h2>
            <p>Cheesilicious pizzas to make every day extraordinary.</p>

            {pizza.map((item, index) => (
                <div className='col-lg-3'>

                <Card sx={{ maxWidth: 345, backgroundColor: 'white', color: 'black', boxShadow: 'none' }} key={index}>
                    <CardMedia
                        sx={{ height: 140, borderRadius: '10px' }}
                        image={item.img ? item.img : fallbackImage} // Use item.image for the pizza image
                        title={item.name} // Use the pizza name as the title
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
