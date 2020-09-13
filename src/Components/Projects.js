import React, {useState} from 'react';
import firebase from '../Firebase.js';
import {Typography} from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {sharedStyles,circleStyle} from "../Styles";
import Slide from './Slide';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const getFilters = () => {
    let newFilters = [];
    const filtersRef = firebase.database().ref('projectFilters');
    filtersRef.on('value', (snapshot) => { 
        let items = snapshot.val();
        for (let item in items){
            newFilters.push({
                id: item,
                name: items[item].name,
                value: items[item].value,
                color: items[item].color
            });
        }
    })
    return newFilters;
}

const getProjects = () => {
    let newProjects = [];

    const projectsRef = firebase.database().ref('projects');
    projectsRef.on('value', (snapshot) => {
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
    })
    return newProjects;
}

const Projects = () => {

    const classes = sharedStyles();
    const shapes = circleStyle();

    const [filter, setFilter] = useState("all");

    //handle filter select
    const selectFilter = (val) => {
        if (val === filter){
            setFilter("all")
        } else {
            setFilter(val)
        }
    }

    const filterItems = getFilters();
    const filters = filterItems.map((f, ind) => 
        <div className={classes.itemLink} key={ind} value={f.value}
            ariaPressed={false}
            onClick={() => selectFilter(f.value)}>
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
        
    const projects = getProjects()
        .filter(function(p){
            if (filter === "all") {return true}
            return filter === p.category
        })
        .map((info, index) =>  {
            let cat = filterItems.find((f) => f.value === info.category);
            return (<Slide info={info} color={cat.color} />)
    });


    return (
         <div id="projects" className={classes.root}>
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

                    {filters}

                </div>
            </div>

            {/* Content */}  
            <Carousel
                responsive={responsive}
                infinite
                swipeable
                centerMode
                keyBoardControl
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                >
                {projects}
            </Carousel>

        </div>
    )
}

export default Projects;
