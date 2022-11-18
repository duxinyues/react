/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-11-06 22:09:19
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-08 23:17:06
 * @FilePath: \react\src\components\Dnd\index.tsx
 * @Description: DnD
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import { Button } from "antd";
import { Children } from "react";
import { useNavigate } from "react-router-dom";
function Content({ children }: any) {
  const navigate = useNavigate();
  return (
    <div>
      {Children.map(children, (child) => {
        return <div className="Row">{child}</div>;
      })}
      <Button onClick={() => navigate("/params/"+9999)}>
        跳转参数
      </Button>
    </div>
  );
}

function Dnd() {
  return <Content></Content>;
}
export default Dnd;
