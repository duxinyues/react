import React from "react";
interface PropsType {
  name: string;
}
class App extends React.Component<any, PropsType> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Duxinyues",
    };
  }
  static getDerivedStateFromProps(props: any) {
    console.log("getDerivedStateFromProps", props);
    return props;
  }
  handle = (param: any) => {
    console.log(param);
    this.setState({ name: "908" });
  };
  shouldComponentUpdate(){
    return true
  }
  componentWillUnmount(): void {
    
  }
  render(): React.ReactNode {
    console.log("this.state", this.state);
    const { name } = this.state;
    return (
      <div>
        {name}
        <button onClick={this.handle.bind(this, 423)}>点击</button>
        <Child />
      </div>
    );
  }
}

class Child extends React.Component {
  render(): React.ReactNode {
    console.log("组件");
    return [
      <div>SVGFEDropShadowElement</div>,
      <p>798546</p>
    ]
  }
}
export default App;
