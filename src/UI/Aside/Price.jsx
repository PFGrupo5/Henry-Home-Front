import React from "react";
import "antd/dist/antd.css";
import {InputNumber} from "antd";
import "../../assets/css/Aside/Components/Aside-components.scss";

export default function Minprice({setInfo, Info}) {
  

  
  
  const maxChange = (e) => {
    setInfo({ ...Info, maxPrice: e });
    console.log(Info)
  }
  const minChange = (e) => {
      setInfo({ ...Info, minPrice: e });
    console.log(Info)
      
    
    
  }

  return (
    <div >
     <InputNumber style={{marginRight:"3px"}} size="small" placeholder= "Min $..." onChange={minChange} ></InputNumber>
     <InputNumber size="small" placeholder= "Max $..." onChange={maxChange} controls="false" ></InputNumber>
    </div>
  );
}
