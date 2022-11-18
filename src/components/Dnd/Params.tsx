import { useEffect } from "react";
import { useLocation,useMatch } from "react-router";

function Params() {
  const params = useLocation();
  const match = useMatch("/params/:id")
  useEffect(() => {
    console.log("参数", params,match);
  }, []);
  return <div>参数测试</div>;
}

export default Params;
