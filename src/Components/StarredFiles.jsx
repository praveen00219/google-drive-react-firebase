import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "../Slices/photodisplay/photoSlice";

function StarredFiles() {
  const starredItems = useSelector(selectFavoriteItems);

  // console.log("starredItems :", starredItems);
  console.log("starredItems :", JSON.parse(JSON.stringify(starredItems)));

  return (
    <>
      {/* {starredItems ? (
        <div>
          {starredItems.map((item) => (
            <FileList key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      ) : (
        ""
      )} */}
      <div className="flex-1">
        <div className="text-center w-[75vw] h-[75vh] flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm font-semibold">
              No items starred !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarredFiles;
