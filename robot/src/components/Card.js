import React from "react";

const Card = (props) => {
  return (
    <div className="bg-light-green br3 dib pa3 ma2 grow shadow-5 bw2">
      <img src={`https://robohash.org/${props.id}`} alt="" />
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;