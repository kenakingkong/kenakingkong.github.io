import React, { Component } from 'react';
import PageHeader from "./PageHeader";

class Art extends Component {
    render(){
        const pageTitle = "My Art Portfolio";

        return (
            <div id="art">
                <PageHeader pageTitle={pageTitle} />
                <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        )
    }
}

export default Art;