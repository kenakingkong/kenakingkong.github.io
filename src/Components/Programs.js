import React, { Component } from 'react';
import PageHeader from "./PageHeader";

class Programs extends Component {
    render(){
        const pageTitle = "My Programs";
        return (
            <div id="programs">
                <PageHeader pageTitle={pageTitle} />
                <p>The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        )
    }
}

export default Programs;