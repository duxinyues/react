import React from "react";
import { useParams } from "react-router-dom";
function Invoice() {
  const params = useParams();
  console.log("参数", params);
  return <div>参数：{params.invoiceId}</div>
}

export default Invoice