import React, { Component } from 'react';
import {Container, Grid} from "@material-ui/core";
import Landing from "./Landing";

class Home extends Component {

    render(){
        return (
            <div id="home">
            <Container maxWidth={'xl'} style={{marginTop: '1%'}}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Landing/>
                    </Grid>

                    {/**Feed my pets! */}
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className="glitch-embed-wrap" style={{height:'525px'}}>
                            <iframe
                                src="https://glitch.com/embed/#!/embed/makenas-virtual-pet?path=server.js&previewSize=100"
                                title="makenas-virtual-pet on Glitch"
                                allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                                style={{height: '100%', width: '100%', border: '0'}}>
                            </iframe>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="glitch-embed-wrap" style={{height:'600px'}}>
                            <iframe
                                src="https://glitch.com/embed/#!/embed/weather-boi?path=public/service-worker.js&previewSize=100"
                                title="weather-boi on Glitch"
                                allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                                style={{height: '100%', width: '100%', border: '0'}}>
                            </iframe>
                        </div>
                    </Grid>
                        
                </Grid>  
                </Container> 
                
            </div>
        );
    }
}

export default Home;