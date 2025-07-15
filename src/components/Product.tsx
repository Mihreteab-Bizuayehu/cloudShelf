import Card from "./Card";

function Product() {
  return (
    <div className="product-container">
      <h1>Featured Products:</h1>
      <div className="product-list">
        <Card/>
      </div>
    </div>
  );
}

export default Product;