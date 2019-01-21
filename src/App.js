import React, {Component} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {HashRouter as Router} from 'react-router-dom';
import {Row} from 'antd';
import {CONFIG} from './config';
import axios from 'axios';
import {connect} from 'react-redux';
import {issuesList} from './redux/actions/';
import TimeUpdate from './utils';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            issues:[]
           
        };
     
    }
    componentDidMount(){
        this.getBlogData();
       
    }
    getBlogData(){
        axios.get(`https://api.github.com/repos/${CONFIG['owner']}/blogtext/issues`,{
            params:{
                creator: 'weiyongyuan94',
                client_id: 'a5636a8f618a5ce0c877',
                client_secret: '054b02cccd28b32a030b4ac7778384fc3fe7e812',
            },
        }).then((response)=>{
            if (response.status === 200){
              const data = response.data;
              const list = this.formatTime(data);
              const {dispatch} = this.props;
              dispatch(issuesList(list));
              this.setState({
                  artNum:data.length
              })
            }
        })
    }
    formatTime(data){
        if (data.length === 0){
            return
        }
        data.map((item)=>{
            item.created_at = TimeUpdate(item.created_at);
            return ''
        })
        return data;
    }
    render() {
        return (
            <Router>
                <div className="bg">
                    <Header />
                    <article>
                        {/* <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={16}> */}
                            <Row>
                                {/* <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}> */}
                                    {this.props.children}
                                {/* </Col> */}
                            </Row>
                        {/* </Col> */}
                    </article>
                    <Footer />
                </div>
            </Router>
        )
    }
}
export default connect(state=> state)(App);
