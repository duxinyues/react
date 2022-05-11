import { Result, Button } from 'antd';
import { Link } from "react-router-dom"
function NoMatch() {
  return (
    <Result
    status="warning"
    title="Nothing to see here!"
    extra={
      <Button type="primary" key="console">
        <Link to="/">Go to the home page</Link>
      </Button>
    }
  />);
}

export default NoMatch