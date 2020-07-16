import React from "react"
import "./index.css";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
const { Element } = BannerAnim;
const BgElement = Element.BgElement;
function Banner() {
    return <div className="container">
        <BannerAnim
            ease="easeInCubic"
            duration="1000"
            autoPlay="true"
        >
            <Element key="aaa"
                prefixCls="banner-user-elem"
            >
                <BgElement key="bg" className="bg">
                    <video loop autoPlay>
                        <source src="https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4" type="video/mp4" />
                    </video>
                </BgElement>
                <QueueAnim name="QueueAnim">
                    <h1 key="h1">Ant Motion Demo</h1>
                    <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from' }} name="TweenOne">
                    Ant Motion Demo.Ant MotionDemo
        </TweenOne>
            </Element>
            <Element key="bbb"
                prefixCls="banner-user-elem"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <QueueAnim name="QueueAnim" type="bottom">
                    <h1 key="h1">Ant Motion Demo</h1>
                    <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                    Ant Motion Demo.Ant MotionDemo
        </TweenOne>
            </Element>
            <Element key="ccc"
                prefixCls="banner-user-elem"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <QueueAnim name="QueueAnim">
                    <h1 key="h1">Ant Motion Demo</h1>
                    <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                    Ant Motion Demo.Ant Motion Demo
        </TweenOne>
            </Element>
        </BannerAnim>
    </div>
}

export default Banner