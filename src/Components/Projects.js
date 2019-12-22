import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles, Typography} from "@material-ui/core";

const filters = [
    { name: "WEBSITES" , value: "website", color: "#4a2d46"},
    { name: "PWAS" , value: "pwa", color: "#6B4164"},
    { name: "SCHOOL PROJECTS", value: "school", color: "#886783"},
]

const projects = [
    { name: "FEED MY PETS" , description: ".....", category: "pwa", link: "https://makenas-virtual-pet.glitch.me", code: "", image: "", date: ""},
    { name: "WEATHER BOI" , description: "......", category: "pwa", link: "https://weather-boi.glitch.me", code: "", image: "", date: ""},
    { name: "THIS WEBSITE" , description: "...", category: "website", link: "https://kenakingkong.github.io", code: "", image: "", date: ""},
    { name: "POPSHOP WEBSITE" , description: "...", category: "website", link: "https://thisispopshop.com", code: "", image: "", date: ""},
    { name: "CLOROX TAC WEBSITE" , description: "...", category: "website", link: "", code: "", image: "", date: ""},
    { name: "DOG ADOPTION PREDICTOR" , description: "...", category: "school", link: "", code: "", image: "", date: ""},
]

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container : {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    title: {
        fontWeight: 'bold'
    },
    filters: {
        display: 'inline-block'
    },
    filterItem: {
        display: 'inline-block',
        marginRight: theme.spacing(4)
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
    },
    optionName : {
        //fontWeight: 'bold'
    }
});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedFilter: "all" };
        this.selectFilter = this.selectFilter.bind(this);
    }

    selectFilter(val){
        if (val === this.state.selectedFilter){
            this.setState(state => ({selectedFilter: "all"}))
        } else {
            this.setState(state => ({selectedFilter: val}))
        }
    }

    render(){
        const {classes} = this.props;
        const selectedFilter = this.state.selectedFilter;

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
                                <div className={classes.option} key={ind} value={p.value}>
                                    <Typography variant="h4" className={classes.optionName}>{p.name}</Typography> 
                                </div>)

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

                    {/**list of projects */}   
                    {projectItems}

                    {/**project view */}
                </div>

               

            </div>
        );
    }
}

Projects.propType = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects);