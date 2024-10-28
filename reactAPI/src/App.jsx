import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
  const [products, error, loading] = fetchData("api/getProduct");

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>something went wrong</h1>;
  }
  return (
    <>
      <h1>React API</h1>
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

function fetchData(urlPath) {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response, "<<<response");
        setLoading(false);
        setproducts(response.data.products);
      } catch (error) {
        setError(true);
      }
    })();
  }, [urlPath]);

  return [products, error, loading];
}
