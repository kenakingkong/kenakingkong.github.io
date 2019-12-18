import React, {Component} from 'react';
import myFace from "../assets/images/makena_flowers.jpg";
import {Container, Grid, Avatar, Button, IconButton, ButtonGroup} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


class Profile extends Component {
    render(){
        const newPage = "_blank";
        
        /*const styles = {
            profilePicture : {
                borderRadius:'50%', 
                overflow:'hidden',
                height: '200px',
                width: '200px'
            }
        };*/

        return(
            <div id="profile">
                

                <Container maxWidth={'xl'} style={{marginTop: '1%'}}>

                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <IconButton color="primary" aria-label="github" href="https://kenakingkong.github.io">
                            <Avatar alt="Makena Kong" src={myFace} />
                        </IconButton>
                        <IconButton color="primary" aria-label="linkedin" href="https://linkedin.com/in/makenakong" target={{newPage}}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="github" href="https://github.com/kenakingkong" target={{newPage}}>
                            <GitHubIcon />
                        </IconButton>
                    </ButtonGroup>

                {/*<Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                >

                    <Grid item xs={12}>
                        <img src={myFace} style={styles.profilePicture} alt="Makena's face"/>
                    </Grid>*/}

                    {/*<Grid item xs={12}>
                    <Avatar alt="Makena Kong" src={myFace} />

                        <p>
                            <br></br>
                            Cal Poly SLO June 2020
                            <br></br>
                            B.S. Computer Science
                            <br></br>
                            Minor in Studio Art 
                        </p>
                    </Grid>

                    <Grid item xs={12}>
                    <a href="https://linkedin.com/in/makenakong" target={{newPage}}><LinkedInIcon /></a>
                    <a href="https://github.com/kenakingkong" target={{newPage}}><GitHubIcon /></a>
                </Grid>
                </Grid>*/}
                
                
                </Container>
            </div>
        );
    }
}

export default Profile;