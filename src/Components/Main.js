import React, { useState } from "react";
import "./Main.css";
import ImagesD from "./ImagesD";

const Main = () => {
  const [curr, uDate] = useState("");
  const eventI = (event) => {
    const data = event.target.value;
    uDate(data);
  };

  return (
    <>
      <div className="main">
        <div className="contain">
          <input
            type="text"
            placeholder="  Search Any Image"
            value={curr}
            onChange={eventI}
          />
        </div>
        {curr == "" ? null : <ImagesD name={curr} />}
      </div>
    </>
  );
};

export default Main;
