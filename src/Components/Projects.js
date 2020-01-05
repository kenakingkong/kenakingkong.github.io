import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../Firebase.js';
import {withStyles, Typography, IconButton} from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const defaultDescription = "THIS PROJECT HAS NO DESCRIPTION YET."
const defaultImage = "code.png"

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
        flexWrap: "wrap"
    },
    projectItems : {
        width: "50%",
    },
    projectDetails: {
        display: 'flex',
        alignItems: "top",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        maxWidth: '40%',
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
        '&:hover':{
            fontWeight: 'bold'
        }
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        float: 'left',
        marginTop: 6,
        marginRight: theme.spacing(1),
        //backgroundColor: "#CDBF43",
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
        '&:hover': {
            fontWeight: 'bold'
        }
    },
    projectImage: {
        height: '300px',
        width: '400px',
        overflow: 'hidden',
        //marginRight: theme.spacing(2)
    },
    projectDescription: {
        maxWidth: '400px',
        //paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        textAlign: "left"
    },
    projectLink: {
        paddingRight: theme.spacing(2),
        textDecoration: 'none',
        color: '#000',
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
            selectedProject : "none",
            filters: [],
            projects: []
        };
        this.selectFilter = this.selectFilter.bind(this);
        this.selectProject = this.selectProject.bind(this);
        this.add = this.add.bind(this);
    }

    // populate page with data from database 
    componentDidMount() {
        const filtersRef = firebase.database().ref('projectFilters');
        filtersRef.on('value', (snapshot) => { 
            let items = snapshot.val();
            let newState = [];
            for (let item in items){
                newState.push({
                    id: item,
                    name: items[item].name,
                    value: items[item].value,
                    color: items[item].color
                });
            }
            this.setState(state => ({filters : newState}));
        })

        const projectsRef = firebase.database().ref('projects');
        projectsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items){
                newState.push({
                    id: item,
                    name: items[item].name,
                    description: items[item].description,
                    category: items[item].category,
                    link: items[item].link,
                    code: items[item].code,
                    image: items[item].image,
                    date: items[item].date
                })
            }
            this.setState(state => ({projects: newState}))
            //this.add(5, "Predict which dogs are most likely to be adopted. We built this program with python, Jupyter notebooks and sci-kit learn.");

        })


    }

    //handle filter select
    selectFilter(val){
        if (val === this.state.selectedFilter){
            this.setState(state => ({selectedFilter: "all"}))
        } else {
            this.setState(state => ({selectedFilter: val}))
        }
    }

    //handle project select
    selectProject(name){
        if (name === this.state.selectedProject){
            this.setState(state => ({selectedProject: "none"}))
        } else {
            this.setState(state => ({selectedProject: name}))
        }
    }

    // sample add to database
    add(id, content){
        const item = this.state.projects[id];
        console.log(this.state.projects)
        console.log(item)
        const itemsRef = firebase.database().ref("projects/" + id.toString() ).set({
            name: item.name, 
            description: content,
            category: item.category, 
            link: item.link, 
            code: item.code, 
            image: item.image,
            date: item.date
        })
    };

    render(){
        const {classes} = this.props;
        const filters = this.state.filters;
        const projects = this.state.projects;
        const selectedFilter = this.state.selectedFilter;
        const selectedProject = this.state.selectedProject;
        const newPage = "_blank";

        // easy access to images
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
                                    <Typography variant="h4" className={classes.optionName}>
                                        {(selectedProject === p.name) ? <strong>{p.name}</strong> : p.name}
                                    </Typography> 
                                </div>)

        // rnder selected projects details
        function renderProject(){
            if (selectedProject === "none") {return null}
            const p = projects.find( function(item) { return item.name === selectedProject} );
            const image = (p.image === "") ? (defaultImage) : p.image;
            const description = (p.description === "") ? (defaultDescription) : p.description;
            return <div className={classes.projectDetails}>
                        <img className={classes.projectImage} 
                            src={images[image]} alt="?" />
                        <div className={classes.projectDescription}>
                            
                            {(p.link === "") ? null : 
                                <a href={p.link} target={newPage}  className={classes.projectLink}>
                                    <IconButton disableFocusRipple={true} disableRipple={true}
                                         style={{padding: '0', backgroundColor: 'transparent'}}>
                                        <OpenInNewIcon className={classes.projectIcon}/>
                                        <Typography variant="subtitle1">PROJECT</Typography>
                                    </IconButton>
                                </a>}
                            {(p.code === "") ? null : 
                            <a href={p.code} target={newPage} className={classes.projectLink}>
                                <IconButton disableFocusRipple={true} disableRipple={true}
                                         style={{backgroundColor: 'transparent', padding: '0'}}>
                                    <CodeIcon className={classes.projectIcon}/>
                                    <Typography variant="subtitle1">CODE</Typography>
                                </IconButton>
                            </a>}
                            <Typography variant="body1" className={classes.projectDescription}>
                                {description}
                            </Typography>
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
                        <div className={classes.projectItems}>
                            {projectItems}
                        </div>

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