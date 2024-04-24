import React, { useRef } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Noodel from '../component/Noodel';
import Food from '../component/Food';
import Near from '../component/Near';
import Footer from '../component/Footer';
import banner from '../assest/dweb_header.avif';

export default function Home() {
    const boxRef = useRef();

    
    const scrollLeft = () => {
        if (boxRef.current) {
            boxRef.current.scrollLeft -= 200;
        }
    };

    
    const scrollRight = () => {
        if (boxRef.current) {
            boxRef.current.scrollLeft += 200;
        }
    };

    return (
        <>
        <section className='bann_con'>

        <div className='container mt-5 ps-5'>
            <div className='row ps-5'>
                <div className='col-lg-6 ps-5 pt-4 ban-txt'>
                <h2 className='fw-bolder fs-1'>Order Food
                <br/>Online in
                <br/>Mumbai</h2>
                </div>
                
                <div className='col-lg-6'>

            <img src={banner} className='w-75' alt='banner'/>
                </div>
            </div>
        </div>
        </section>



            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingRight: '190px', marginTop: '15px' }} className='caro-but'>
                <h3 style={{ margin: 0, paddingLeft: '100px' }} className='carou-hed fw-bold'>What's on your mind?</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="outlined" onClick={scrollLeft} style={{ border: 'none', borderRadius: '50%', backgroundColor: 'grey', height: '20px', width: '20px', marginRight: '10px' }}>
                        <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: 'black' }} />
                    </Button>
                    <Button variant="outlined" onClick={scrollRight} style={{ border: 'none', borderRadius: '50%', backgroundColor: 'grey', height: '20px', width: '20px' }}>
                        <FontAwesomeIcon icon={faArrowRightLong} style={{ color: 'black' }} />
                    </Button>
                </div>
            </div>

            <Box
                ref={boxRef}
                className='carou-wid'
                sx={{
                    display: 'flex',
                    gap: 1,
                    py: 6,
                    mx: 12,
                    overflow: 'auto',
                    width: 1320,
                    scrollSnapType: 'x mandatory',
                    '& > *': {
                        scrollSnapAlign: 'center',
                    },
                    '::-webkit-scrollbar': { display: 'none' },
                }}
            >
                
                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                    <Link to="/burger">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
                            alt="Burger"
                        />
                        </Link>
                    </AspectRatio>
                </Card>

                
                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                    <Link to="/chinese">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
                            alt="Chinese"
                        />
                        </Link>
                    </AspectRatio>
                </Card>

                
                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                    <Link to="/pizza">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                            alt="Pizza"
                        />
                        </Link>
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                    <Link to="/north">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
                            alt="North Indian"
                        />
                        </Link>
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                    <Link to="/biryani">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
                            alt="Biryani"
                        />
                        </Link>
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png"
                            alt="Sandwich"
                        />
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"
                            alt="South Indian"
                        />
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                            alt="Pizza"
                        />
                    </AspectRatio>
                </Card>

                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                            alt="Pizza"
                        />
                    </AspectRatio>
                </Card>


                <Card orientation="horizontal" size="sm" variant="outlined" sx={{ border: 'none', backgroundColor: 'white' }}>
                    <AspectRatio ratio="1" sx={{ minWidth: 160 }}>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                            alt="Pizza"
                        />
                    </AspectRatio>
                </Card>

            </Box>

            <Food/>

            {/* <Noodel/> */}

            <Near/>
            <Footer/>
            
        </>
    );
}
