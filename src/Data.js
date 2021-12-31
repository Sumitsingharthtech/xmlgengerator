import React from "react";

const Data = () => {
  let xmlData = localStorage.getItem("item");

  return (
    <div style={{width: "50%", margin: "0 auto",display:"flex", flexDirection:"column"}}>

      <div>  <p>{xmlData}</p> </div>
    </div>
  );
};

export default Data;
