import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoImg from './../assets/images/logo.png';
class Header extends Component{
   render(){
       return(
        <header>
        <div className="logo"><img src={LogoImg} alt="读心" width="200px"/></div>
        <nav id="nav">
            <ul>
                <li><Link to="/" id="selected">首页</Link></li>
                <li><Link to="/archive">归档</Link></li>
            </ul>
        </nav>
    </header>
        )
   }
}
const mapStateToProps = state =>{
    return {
        issues: state.issues
    }
}
export default withRouter(connect(mapStateToProps)(Header))