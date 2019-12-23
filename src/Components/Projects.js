import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles, Typography, IconButton} from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const filters = [
    { name: "WEBSITES" , value: "website", color: "#4a2d46"},
    { name: "PWAS" , value: "pwa", color: "#6B4164"},
    { name: "SCHOOL PROJECTS", value: "school", color: "#886783"},
]

const defaultDescription = "THIS PROJECT HAS NO DESCRIPTION YET."
const defaultImage = "code.png"

const projects = [
    { name: "FEED MY PETS" , description: "blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", 
        category: "pwa", link: "https://makenas-virtual-pet.glitch.me", code: "https://glitch.com/~makenas-virtual-pet", image: "feedmypets.png", date: ""},
    { name: "WEATHER BOI" , description: "blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", 
        category: "pwa", link: "https://weather-boi.glitch.me", code: "https://glitch.com/~weather-boi", image: "weatherboi.png", date: ""},
    { name: "THIS WEBSITE" , description: "blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah", 
        category: "website", link: "https://kenakingkong.github.io", code: "https://github.com/kenakingkong/kenakingkong.github.io", image: "", date: ""},
    { name: "POPSHOP WEBSITE" , description: "blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah bla", 
        category: "website", link: "https://thisispopshop.com", code: "https://github.com/kenakingkong/thisispopshop", image: "popshopwebsite.png", date: ""},
    { name: "CLOROX TAC WEBSITE" , description: "", category: "website", link: "", code: "", image: "", date: ""},
    { name: "DOG ADOPTION PREDICTOR" , description: "", category: "school", link: "", code: "https://github.com/rohanvembar/dog-rescue-analysis", image: "", date: ""},
]

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container : {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    projectContainer:{
        display: "flex",
        justifyContent: "space-between",
    },
    projectItems : {
    },
    projectDetails: {
        display: 'flex',
        alignItems: "top",
        justifyContent: "center",
        //border: "1px solid black"
    },
    title: {
        fontWeight: 'bold'
    },
    filters: {
        display: 'inline-block'
    },
    filterItem: {
        display: 'inline-block',
        marginRight: theme.spacing(4),
        cursor: "pointer",
    },
    filterName: {
        float: 'left',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        float: 'left',
        marginTop: 6,
        marginRight: theme.spacing(1),
        //backgroundColor: "#CDBF43"
    },
    circleSelected: {
        width: 10,
        height: 10,
        borderRadius: 10,
        float: 'left',
        marginTop: 6,
        marginRight: theme.spacing(1),
        backgroundColor: "#fefefe",
        border: '5px solid'
    },
    option: {
        marginBottom: theme.spacing(4),
        cursor: "pointer",
    },
    optionName : {
        //fontWeight: 'bold'
    },
    projectImage: {
        height: '300px',
        width: '400px',
        overflow: 'hidden'
    },
    projectDescription: {
        maxWidth: theme.spacing(40),
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    projectLink: {
        //marginBottom : theme.spacing(1),
        //display: 'inline-block'
        marginRight: theme.spacing(2)
    },
    projectIcon :{
        marginRight: theme.spacing(1)
    }
});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedFilter: "all",
            selectedProject : "none" 
        };
        this.selectFilter = this.selectFilter.bind(this);
        this.selectProject = this.selectProject.bind(this);
    }

    selectFilter(val){
        if (val === this.state.selectedFilter){
            this.setState(state => ({selectedFilter: "all"}))
        } else {
            this.setState(state => ({selectedFilter: val}))
        }
    }

    selectProject(name){
        if (name === this.state.selectedProject){
            this.setState(state => ({selectedProject: "none"}))
        } else {
            this.setState(state => ({selectedProject: name}))
        }
    }

    render(){
        const {classes} = this.props;
        const selectedFilter = this.state.selectedFilter;
        const selectedProject = this.state.selectedProject;

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
          }
        const images = importAll(require.context('../assets/projects', false, /\.(png|jpe?g|svg)$/));

        // render filters
        const filterItems = filters
                            .map((f, ind) => 
                                <div className={classes.filterItem} key={ind} value={f.value}
                                    onClick={() => this.selectFilter(f.value)}>
                                    {(selectedFilter === f.value) 
                                        ? <div className={classes.circleSelected} 
                                                style={{borderColor: f.color}}></div>
                                        : <div className={classes.circle} style={{backgroundColor: f.color}}></div>}
                                    <Typography variant="h6" className={classes.filterName}>{f.name}</Typography>
                                </div>)

        // render projects
        const projectItems = projects
                            .filter(function(p){
                                if (selectedFilter === "all") {return true}
                                else {return selectedFilter === p.category}
                            })
                            .map((p,ind) =>
                                <div className={classes.option} key={ind} value={p.value}
                                     onClick={() => this.selectProject(p.name)}>
                                    <Typography variant="h4" className={classes.optionName}>{p.name}</Typography> 
                                </div>)

        // get project detail
        function renderProject(){
            if (selectedProject === "none") {return null}
            const p = projects.find( function(item) { return item.name == selectedProject} );
            const image = (p.image === "") ? (defaultImage) : p.image;
            const description = (p.description === "") ? (defaultDescription) : p.description;
            return <div className={classes.projectDetails}>
                        <img className={classes.projectImage} 
                            src={images[image]} alt="?" />
                        <div className={classes.projectDescription}>
                            <Typography variant="body1" className={classes.projectDescription}>
                                {description}
                            </Typography>
                            {(p.link === "") ? null : 
                                <IconButton className={classes.projectLink}>
                                    <OpenInNewIcon className={classes.projectIcon}/>
                                    <Typography variant="subtitle1">PROJECT</Typography>
                                </IconButton>}
                            {(p.code === "") ? null : 
                            <IconButton className={classes.projectLink}>
                                <CodeIcon className={classes.projectIcon}/>
                                <Typography variant="subtitle1">CODE</Typography>
                            </IconButton>}
                        </div>
                    </div>
        }

        return (
            <div id="project">

                {/**page title */}
                <div className={classes.container}> 
                    <Typography variant="h3" className={classes.title}>
                        PROJECTS
                    </Typography>
                </div>
               
                {/**filters */}
                <div className={classes.container}>
                    <div className={classes.filters}>
                        {filterItems}
                    </div>   
                </div>

                {/**content */}
                <div className={classes.container}>
                    <div className={classes.projectContainer}>
                        {/**list of projects */}   
                        <div>{projectItems}</div>

                        {/**project view */}
                        {renderProject()}
                    </div>
                </div>

               

            </div>
        );
    }
}

Projects.propType = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects);