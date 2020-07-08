import React,{Component} from 'react';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import './banner.css';
import img1 from '../assets/images/2019-01.jpg';
import img2 from '../assets/images/2019-02.jpg';
import img3 from '../assets/images/2019-03.jpg';
import img4 from '../assets/images/2019-04.jpg';

class Banner1 extends Component{
    render(){
        return(
            <Carousel autoplay  effect="fade">
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        )
    }
}

export  default Banner1