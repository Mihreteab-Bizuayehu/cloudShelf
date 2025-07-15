import { memo } from "react";

function Card({ image, title, price }: { image:string; title:string; price:number }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={`${title} Image`} />
      </div>
      <div className="card-detail">
        <h3>{title} </h3>
        <h5>Price: ${price}</h5>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default memo(Card);