import React, { Component } from 'react';
import { Carousel, Icon } from "antd";
import "antd/dist/antd.css";



class ProgramBox extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
      }
      next() {
        this.carousel.next();
      }
      previous() {
        this.carousel.prev();
      }

    render(){

        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
            <div id="programBox">
                <Icon type="left-circle" onClick={this.previous} />
                <Carousel ref={node => (this.carousel = node)} {...props}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
                <Icon type="right-circle" onClick={this.next} />
            </div>
        );
    }
}

export default ProgramBox;