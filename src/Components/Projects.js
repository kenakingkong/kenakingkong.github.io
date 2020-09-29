import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js';
import {Typography} from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {sharedStyles, slideMenuStyle, circleStyle} from "../Styles";
import Slide from './Slide';


const background = {backgroundColor: "#FBF6F6"}

const responsive = {
    xl: {
        // the naming can be any, depends on you.
        breakpoint: { max: 5000, min: 1920 },
        items: 4
      },
    lg: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1920, min: 1280 },
      items: 2
    },
    md: {
      breakpoint: { max: 1280, min: 960 },
      items: 2
    },
    sm: {
      breakpoint: { max: 960, min: 600 },
      items: 2
    },
    xs: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

//get filter info from firebase
//returns a promise
const getFilters = () => {
    let newFilters = [];
    const filtersRef = firebase.database().ref('projectFilters');
    return filtersRef.once('value').then((snapshot) => { 
        let items = snapshot.val();
        for (let item in items){
            newFilters.push({
                id: item,
                name: items[item].name,
                value: items[item].value,
                color: items[item].color
            });
        }
        return newFilters;
    })
}

//get project info from firebase
//returns a promise
const getProjects = () => {
    let newProjects = [];
    const projectsRef = firebase.database().ref('projects');
    return projectsRef.once('value').then((snapshot) => {
        let items = snapshot.val();
        for (let item in items){
            newProjects.push({
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
        return newProjects;
    })
}
    
const Projects = () => {

    const classes = sharedStyles();
    const shapes = circleStyle();
    const menu = slideMenuStyle();

    const [filter, setFilter] = useState("all");
    const [filters, setFilters] = useState([]);
    const [projects, setProjects] = useState([]);

    const defaultColor = "#fffeee";

    // get filters & project data only once
    useEffect(()=>{
        getFilters()
            .then((res) => setFilters(res))
            .catch((err) => console.log(err))

        getProjects()
            .then((res) => setProjects(res))
            .catch((err) => console.log(err))
    }, []);

    //handle filter select
    const selectFilter = (val) => {
        setFilter((val===filter) ? "all" : val)
    }

    // create filter elements
    const createFilters = () => {
        return filters.map((f, ind) => 
        <div className={classes.itemLink} 
            key={ind} value={f.value}
            tabindex={0}
            onClick={() => selectFilter(f.value)}
            onKeyPress={({key}) => {if (key === 'Enter') selectFilter(f.value)}}
            >
            {(filter === f.value) 
                ? <span className={shapes.circleSelected} 
                    style={{border: `3px solid ${f.color}`}}/>
                : 
                <span className={shapes.circle} 
                style={{background: f.color}} />}
            <Typography 
                variant="caption" 
                className={classes.itemLink}
                gutterBottom>
                {f.name}
            </Typography>
        </div>)
    }

    //create project elements
    const createProjects = () => {
        return projects.filter(function(p){
            if (filter === "all") {return true}
                return filter === p.category
            })
            .map((info, index) =>  {
                let cat = filters.find((f) => f.value === info.category)
                return (
                    <Slide 
                        key={`slide-${index}`}
                        info={info} 
                        color={ cat ? cat.color : defaultColor} 
                        tabindex={0} />)
        })
    }

    return (
         <div id="projects" style={background}
            className={`${classes.root} ${classes.fullHeight}`}>
                
            <div className={classes.content}>
                
                {/* page title */}
                <Typography variant="h2" gutterBottom>
                    Projects
                </Typography>

                {/* Profiles */}
                <div className={classes.itemRow}>

                    <Typography 
                        variant="caption" 
                        className={classes.itemRowTitle}
                        gutterBottom>
                        FILTER BY
                    </Typography>

                    {createFilters()}

                </div>
            </div>

            {/* Content */} 
            <Carousel
                swipeable
                centerMode
                keyBoardControl
                transitionDuration={500}
                responsive={responsive}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["xs", "sm"]}
                itemClass={menu.itemClass}
                >
                {createProjects()}
            </Carousel>

        </div>
    )
}

export default Projects;
