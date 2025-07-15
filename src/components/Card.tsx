
function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1738499105721-fb2f8038ec8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWclMjBwbGFjZWhvbGRlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Product image"
        />
      </div>
          <div className="card-detail">
              <h3>Product name </h3>
              <h5>Price: $200</h5>
          </div>
          <button className="btn">Add to Cart</button>
    </div>
  );
}

export default Card