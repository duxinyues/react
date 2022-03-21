import React, { useLayoutEffect, useEffect, useState } from "react";
function About() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const divDom = document.getElementById("useLayout");
    console.log("color effect red", divDom);
  })

  useLayoutEffect(() => {
    const divDom = document.getElementById("useLayout");
    console.log("color layout effect red", divDom);
  })
  window.requestAnimationFrame(() => {
    console.log("requestAnimationFrame")
  })
  console.log("render")
  return (
    <div>
      <h2 onClick={() => setValue((c) => c + 1)}>useLayoutEffect的使用</h2>

      <div
        id="useLayout"
        style={{ color: value === 1 ? 'red' : '#999' }}
      >
        value：{value}
      </div>
    </div>
  );
}

export default About