import { useState } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabBar({genres}){
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return(
        <Box sx={{marginTop:'31px', marginLeft: '32px'}}>
        <Tabs 
          value={selectedTab} 
          onChange={handleChange} 
          aria-label="music genre tabs"
          TabIndicatorProps={{ style: { backgroundColor: '#34C94B' } }}
          textColor="inherit"
          sx={{ color: '#fff',  }}
        >
            <Tab label="All"/>
          {genres.map((genre, index) => (
            <Tab label={genre.label} key={genre.key} />
          ))}
        </Tabs>
      </Box>   
    )
}