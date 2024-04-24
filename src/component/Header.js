import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NearMeIcon from '@mui/icons-material/NearMe';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '80%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {

  

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='head-tit'>
        <Toolbar>
         

            <div style={{marginLeft: '90px', marginRight: '10px'}} className='logo'><svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4960_156852)"><path d="M14.2904 39.3417C14.2653 39.3243 14.2377 39.3004 14.2086 39.2753C13.7385 38.6978 10.8319 35.087 7.87018 30.4558C6.98184 28.9801 6.40499 27.8292 6.51576 27.5316C6.80551 26.7578 11.9688 26.3342 13.5589 27.0357C14.0424 27.2487 14.0302 27.5306 14.0302 27.6948C14.0302 28.4032 13.9949 30.3041 13.9949 30.3041C13.9952 30.6969 14.3172 31.0154 14.7138 31.0148C15.111 31.0148 15.4317 30.6949 15.4304 30.3012L15.4228 25.5646C15.4228 25.1535 14.9689 25.0509 14.8839 25.0348C14.0539 25.0299 12.3686 25.0248 10.5589 25.0248C6.56579 25.0248 5.67348 25.1874 4.99511 24.7475C3.5253 23.7945 1.12203 17.371 1.06598 13.757C0.986202 8.65847 4.03262 4.24445 8.32237 2.05741C10.1145 1.16257 12.1388 0.658203 14.2767 0.658203C21.0664 0.658203 26.6579 5.74011 27.4018 12.2784C27.4025 12.2834 27.4025 12.2908 27.4038 12.2958C27.5403 13.8764 18.7551 14.2123 17.0173 13.7524C16.7509 13.6818 16.6827 13.4114 16.6827 13.2949C16.6807 12.093 16.6727 8.71048 16.6727 8.71048C16.6713 8.31737 16.3493 7.99854 15.9528 7.99953C15.5569 8.00018 15.2348 8.31966 15.2348 8.71344L15.2499 14.9443C15.2624 15.3368 15.5944 15.4427 15.6853 15.4604C16.6736 15.4607 18.9846 15.4584 21.137 15.4584C24.0463 15.4584 25.2682 15.7927 26.0814 16.4066C26.622 16.8154 26.8313 17.5981 26.6484 18.6152C25.0171 27.6637 14.6787 38.8744 14.2904 39.3417ZM42.3247 18.2235C44.9327 19.332 46.5485 20.5617 46.5485 23.261C46.5485 26.0184 44.4422 27.7995 41.1832 27.7995C38.5422 27.7995 36.4224 26.6133 35.3666 24.5443L35.1958 24.2107L38.3008 22.4266L38.5043 22.7563C39.2034 23.8895 39.985 24.3726 41.1189 24.3726C42.0963 24.3726 42.7529 23.9432 42.7529 23.3035C42.7529 22.5947 42.2775 22.3291 40.8084 21.6914L40.0618 21.3738C38.0692 20.5316 36.2233 19.3614 36.2233 16.5271C36.2233 13.98 38.1921 12.2011 41.0114 12.2011C43.1474 12.2011 44.6113 13.021 45.619 14.7806L45.8059 15.1073L42.7974 17.0245L42.5902 16.6566C42.0872 15.7644 41.6135 15.5855 41.0116 15.5855C40.3823 15.5855 39.9769 15.9295 39.9769 16.4633C39.9769 17.0766 40.2755 17.3457 41.5772 17.905L42.3247 18.2235ZM64.3035 18.7454L66.4955 12.6843H70.2578L64.6819 28.0496H63.8463L60.464 20.8537C60.3067 20.524 60.1446 20.1145 60.0048 19.7394C59.8618 20.1152 59.6956 20.5256 59.5381 20.8553L56.0236 28.0496H55.1936L49.5283 12.6843H53.5474L55.7635 18.7454C55.905 19.132 56.05 19.6033 56.1768 20.0406C56.3274 19.5892 56.5085 19.102 56.6977 18.7092L59.6083 12.5578H60.4135L63.3693 18.7098C63.5577 19.1022 63.7395 19.5899 63.8895 20.0412C64.0169 19.6033 64.163 19.132 64.3035 18.7454ZM74.6454 27.6084V12.3704H78.4427V27.6084H74.6454ZM90.8932 22.4887V19.0834H97.9442V25.9128L97.7984 26.0319C96.9918 26.6886 94.8532 27.7997 91.9561 27.7997C87.0687 27.7997 83.6568 24.5883 83.6568 19.9901C83.6568 15.4771 86.9491 12.2012 91.4854 12.2012C93.98 12.2012 95.8085 12.8985 97.0742 14.3333L97.3214 14.6136L94.7331 17.1545L94.4519 16.8673C93.7291 16.1282 92.9802 15.6703 91.4853 15.6703C89.1617 15.6703 87.5387 17.4466 87.5387 19.9901C87.5387 22.6396 89.2718 24.3521 91.956 24.3521C92.8463 24.3521 93.7732 24.2001 94.4041 23.957V22.4889L90.8932 22.4887ZM110.136 22.4887V19.0834H117.187V25.9128L117.042 26.0319C116.234 26.6886 114.096 27.7997 111.2 27.7997C106.313 27.7997 102.9 24.5883 102.9 19.9901C102.9 15.4771 106.193 12.2012 110.728 12.2012C113.224 12.2012 115.052 12.8985 116.317 14.3333L116.565 14.6136L113.978 17.1545L113.696 16.8673C112.973 16.1282 112.223 15.6703 110.728 15.6703C108.405 15.6703 106.782 17.4466 106.782 19.9901C106.782 22.6396 108.516 24.3521 111.2 24.3521C112.09 24.3521 113.017 24.2001 113.647 23.957V22.4889L110.136 22.4887ZM131.101 12.3705H135.07L129.622 22.5104V27.6085H125.805V22.7268L120.001 12.3705H124.236L126.919 17.2289C127.207 17.7575 127.508 18.4561 127.736 19.0233C127.954 18.4607 128.241 17.7683 128.528 17.2336L131.101 12.3705Z" fill="#F15700"></path></g><defs><clipPath id="clip0_4960_156852"><rect width="135.333" height="40" fill="white" transform="translate(0.400391)"></rect></clipPath></defs></svg></div>
              <NearMeIcon className='location-logo'/>
            <FormControl >
      <NativeSelect
        defaultValue={10}
        className='fw-bold '
       
        >
                <option value={10} className='fw-bold'>Setup Your precise location </option>
                <option value={20} className='fw-bold'>Locate me using</option>
                
      </NativeSelect>      
    </FormControl>
          <Search className='search_inp'>
            <SearchIconWrapper>
              <SearchIcon style={{color: 'grey'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className='pt-1'
            />
          </Search>
          <PersonIcon className='per-ic'/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}