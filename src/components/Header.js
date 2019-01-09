import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoImg from './../assets/images/logo.png';
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            artNum:''
        }

    }
    componentWillMount(){
       
        
    }
   render(){
       const { issues } = this.props;
       return(
        <header>
        <div className="logo"><img src={LogoImg} alt=""/></div>
        <nav id="nav">
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/archive">归档-{issues.length}</Link></li>
                <li><Link to="/essays">随笔</Link></li>
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