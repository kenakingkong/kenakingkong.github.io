import React, { Component } from 'react';
import {Container, Grid, Paper, Tabs, Tab} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Landing from "./Landing";
import Profile from "./Profile";

class CoolHome extends Component {

    render(){

        return (
            <div id="home">
                <Container maxWidth={'xl'} style={{marginTop: '5%'}}>
                    <Grid container spacing={3}>

                        {/**Nav Bar*/}
                        <Grid item xs={12} >
                            <Paper square >
                                <Tabs
                                    variant="fullWidth"
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                    aria-label="icon label tabs example"
                                >
                                    <Tab icon={<HomeIcon />} label="HOME" />
                                    <Tab icon={<CodeIcon />} label="PROJECTS" />
                                    <Tab icon={<BrushIcon />} label="ARTWORK" />
                                    <Tab icon={<EmojiPeopleIcon />} label="ABOUT" />
                                </Tabs>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Landing/>
                        </Grid>

                        {/**Feed my pets! */}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div class="glitch-embed-wrap" style={{height:'525px'}}>
                                <iframe
                                    src="https://glitch.com/embed/#!/embed/makenas-virtual-pet?path=server.js&previewSize=100"
                                    title="makenas-virtual-pet on Glitch"
                                    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                                    style={{height: '100%', width: '100%', border: '0'}}>
                                </iframe>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Profile />
                        </Grid>
                            
                    </Grid>      
                </Container>  
            </div>
        );
    }
}

    export default CoolHome;