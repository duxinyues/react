import WaterMark from 'watermark-component-for-react';

function WaterMarkLayout(props) {
    return <WaterMark
        style={{ height: "100vh" }}
        content={"读心悦"}
        width="260px"
        height="100px"
        font="20px Microsoft Yahei"
    >
        {props.children}
    </WaterMark>
}

export default WaterMarkLayout