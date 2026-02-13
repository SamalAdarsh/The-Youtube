import React from "react";
import Button from "./Button";

const ButtonList = () => {

  const list = ["All", "Music", "Gaming", "Cricket", "Football", "Motivation", "Grooming", "DSA", "React", "System Design", "Dating" , "Interviews", "World Cup"]
  return (
    <div className="flex ">
      {list.map((topics)=>  <Button key={topics} name={topics} />)}
     
      
    </div>
  );
};

export default ButtonList;
