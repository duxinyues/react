import "./flex.scss"
export default function Flex() {

  return <div >
    <h2>Flex弹性布局</h2>
    <div className="flex-container1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    <h2>弹性子元素的大小</h2>
    <div className="flexbox-flex">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <h2>弹性方向</h2>
    <div className="flexbox-direction">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>

    <h1>对齐间距</h1>
    <div className="flexbox-canter">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
}