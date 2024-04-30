import React from "react";
import { useState, useEffect, useMemo } from "react";

import Cards from "./card";
import './showCard.css';
import Grid from "@mui/material/Grid";
import Carousel from "./crouselcard";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function RenderCards({text, type}){
    const [cardData, setCardData] = useState([]);
    const [collapse, setCollapse] = useState(true);
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);


    // console.log(type)

    let url;

    if(text === "Top Albums"){
        url = "https://qtify-backend-labs.crio.do/albums/top";
    }else if(text === "New Albums"){
        url = "https://qtify-backend-labs.crio.do/albums/new";
    }else if(text === "Songs"){
        url = "https://qtify-backend-labs.crio.do/songs";
    }

    const fetchTabs = async() => {
        try {
            const response = await fetch('https://qtify-backend-labs.crio.do/genres');
            const finalData = await response.json();
            
            console.log(finalData.data)
            setTabs(finalData.data);
        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const finalData = await response.json();
                setCardData(finalData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        fetchTabs();

    }, [url])

    const filteredCardData = useMemo(() => {
        if (type === "Songs") {
            if (selectedTab === 0) {
                return cardData; // Return all data if "All" tab is selected
            } else {
                const selectedGenre = tabs[selectedTab - 1].label;
                console.log(selectedGenre);
                return cardData.filter(card => card.genre.label === selectedGenre);
            }
        } else {
            return cardData;
        }
    }, [cardData, selectedTab]);
    
    return(
    <>
        <div className="card-container">
            <div className="accordian"> 
                {text} 

                {text !== "Songs" && ( // Check if text === "show"
                    collapse ? (
                        <span 
                            className="show-all-button"
                            onClick={() => setCollapse(!collapse)}
                        > 
                            Show all 
                        </span>
                    ) : (
                        <span 
                            className="show-all-button"
                            onClick={() => setCollapse(!collapse)}
                        > 
                            Collapse 
                        </span>
                    )
                )}
            </div>
            <div>
                {/* { type === "Songs" && <TabBar genres={tabs}/> }
                 */}
                { type === "Songs" && (
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
                        {tabs.map((genre) => (
                        <Tab label={genre.label} key={genre.key} />
                        ))}
                    </Tabs>
                    </Box> 
                )}
                
            </div>
            <div className="show-cards">
                {collapse?(
                     <Carousel cardData={filteredCardData} type={type} />
                ):(
                    <Grid container spacing={3}>
                        {filteredCardData.length !==0 && filteredCardData.map((card) => (
                            <Grid item key={card.id} xs={6} md={2}  >
                            <Cards card={card}/>
                            </Grid>
                        ))}
                    </Grid>
                )}
                
            </div>
        </div>    
    </>
    )
}