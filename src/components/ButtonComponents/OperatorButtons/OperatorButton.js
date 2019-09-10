import React from "react";
//import { specials } from '../../../data'
export const OperatorButton = (props) => {
  //const [specialState, setSpecialState] = useState(specials)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className=''>{props.operator.value}</button>
    </>
  );
};
