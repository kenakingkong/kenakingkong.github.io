import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Art from "./Art";
import Programs from "./Programs";

const { Content, Footer } = Layout;

class Main extends Component {

    state = {
        current: 'home',
      }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render(){
        return (  
            <div className="main">
                <Router>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{backgroundColor:'#f8f4f9'}}
                >
                    <Menu.Item key="home" as={Link} to='/home'>
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="programs">
                       <Link to="/programs"> <Icon type="smile" />Programs</Link>
                    </Menu.Item>
                        <Menu.Item key="art" as={Link} to='/art'>
                        <Link to="/art"><Icon type="smile" />Art </Link>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <Icon type="user" /> Resume
                    </Menu.Item>
                </Menu>
                <div className="container">
                    <Layout className="layout">
                        <Content style={{ padding: '0 50px', backgroundColor:'white'}}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                <Route path="/" exact component={Home} />
                                <Route path="/art" component={Art} />
                                <Route path="/programs" component={Programs} />
                            </div>     
                        </Content>
                        <Footer style={{ position:"fixed", bottom:"0", textAlign:'center',width:'100%', backgroundColor:'#f8f4f9'}}>
                            <p>by Makena Kong</p>
                        </Footer>
                    </Layout>
                </div>
                </Router>
            </div>
        );
    }
}

export default Main;