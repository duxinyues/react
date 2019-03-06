import React,{Component} from "react"
import "antd/dist/antd.css";
import { Carousel } from "antd";
import img1 from '../assets/images/one.jpeg'
import img2 from '../assets/images/two.jpeg'
import img3 from '../assets/images/three.jpeg'
import img4 from '../assets/images/four.jpeg'
import img5 from '../assets/images/five.jpeg'
export default class Banner extends Component {
    render() {
        return (
            <Carousel effect="fade" autoplay className="banner">
                <div className="bannerList">
                    <img src={img1} alt=""/>
                    <div className="dec-show">
                        <div>书籍备而不读如废纸。</div>
                    </div>
                </div>
                <div className="bannerList">
                    <img src={img2} alt=""/>
                    <div className="dec-show">
                        <div>我这个人走得很慢，但是我从不后退。</div>
                    </div>
                </div>
                <div className="bannerList">
                    <img src={img3} alt=""/>
                    <div className="dec-show">
                        <div>书中横卧着整个过去的灵魂。</div>
                    </div>
                </div>
                <div className="bannerList">
                    <img src={img4} alt=""/>
                    <div className="dec-show">
                        <div>索取，只有在一个场合才能越多越好，那就是读书。</div>
                    </div>
                </div>
                <div className="bannerList">
                    <img src={img5} alt=""/>
                    <div className="dec-show">
                        <div>先相信自己，然后别人才会相信你。</div>
                    </div>
                </div>
            </Carousel>
        )
    }
}
