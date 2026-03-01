import ProductCard from "./components/ProductCard";


const App = () => {
  const handleAddToCart = (productName) => {
    alert(`${productName} added successfully!`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProductCard
        productName="iPhone 15"
        price={79999}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productName="Samsung Galaxy S24"
        price={74999}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productName="OnePlus 12"
        price={59999}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;