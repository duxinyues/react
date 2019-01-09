import 'babel-polyfill';
import React ,{Component} from 'react';
import{HashRouter,Route,Switch} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(()=>import("./pages/Home"));
const Blog = asyncComponent(()=>import("./pages/Blog"));
const Archive = asyncComponent(()=>import("./pages/Archive"));
const BlogCloud = asyncComponent(()=>import('./pages/Cloud'));
const App = asyncComponent(()=>import("./App"));
const Essays = asyncComponent(()=>import('./pages/Essays'));
const EssayCon = asyncComponent(()=>import('./pages/Essays/content'));
const ECloud = asyncComponent(()=>import('./pages/Cloud/ECloud'));
export default class Routers extends Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/blog/:number' component={Blog}/>
                        <Route exact path='/archive' component={Archive}/>
                        <Route exact path='/cloud/:name' component={BlogCloud}/>
                        <Route exact path='/essays' component={Essays} />
                        <Route exact path='/essayCon/:number' component={EssayCon} />
                        <Route exact path='/ecloud/:name' component={ECloud} />
                    </Switch>
                </App>
            </HashRouter>
            )
    }
}