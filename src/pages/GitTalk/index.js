import React, { Component } from 'react'
import {Card} from 'antd';
import Gittalk from 'gitalk';
import 'gitalk/dist/gitalk.css';


export default class GitTalks extends Component {
    componentDidMount() {
        const gitalk = new Gittalk({
            enable: true,
            clientID: '53b1502bf95091987671',
            clientSecret: '47f3f2006d5c743b97543a3bc8170507392b3b4b',
            repo: 'talk',
            owner: 'weiyongyuan94',
            admin: 'weiyongyuan94',
            id: this.props.path,
            distractionFreeMode: false
        })
        gitalk.render('gitalk-container')
    }
    render() {
        return (
            <Card
                style={{ width: '100%', marginTop: 20 }}
            >
                <div id='gitalk-container'></div>
            </Card>
        )
    }
}


