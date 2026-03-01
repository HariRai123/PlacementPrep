
const ProductCard = ({ productName, price, onAddToCart }) => {
  const handleClick = () => {
    console.log(`Added ${productName} to cart`);
    onAddToCart(productName);
  };

  return (
    <div className="product-card">
      <h2>{productName}</h2>
      <p>Price: ₹{price}</p>
      <button onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};


export default ProductCard;