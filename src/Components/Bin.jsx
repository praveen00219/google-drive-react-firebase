import React from "react";
import { useSelector } from "react-redux";
import { selectBinItems } from "../Slices/photodisplay/photoSlice";

function Bin() {
  const binItems = useSelector(selectBinItems);

  console.log("Bin Comp: ", binItems);

  return (
    <div>
      <h2>Bin</h2>
      {binItems.length > 0 ? (
        binItems.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <p>No items in the Bin</p>
      )}
    </div>
  );
}

export default Bin;
