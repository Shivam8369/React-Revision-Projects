import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const styles = {
    loadMoreContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    productContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
    },
    product: {
      padding: '20px',
      border: '1px solid',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    productImage: {
      width: '200px',
      height: '200px',
      cursor: 'pointer'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonDisabled: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'not-allowed',
      backgroundColor: '#ccc',
    },
  };

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const data = await response.json();

      if (data?.products?.length > 0) {
        setProduct((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
      } else {
        setDisabled(true);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log("error occurred in API", e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (product.length === 100) {
      setDisabled(true);
    }
  }, [product]);

  return (
    <div>
      {loading && <h3>Loading the Data please wait</h3>}
      <div style={styles.loadMoreContainer}>
        <div style={styles.productContainer}>
          {product.map((item, index) => (
            <div key={index} style={styles.product}>
              <img src={item.thumbnail} alt={item.title} style={styles.productImage} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div style={styles.buttonContainer}>
          <button
            style={disabled ? styles.buttonDisabled : styles.button}
            disabled={disabled}
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Load More Data
          </button>
          {disabled ? <p>You have reached the maximum Product</p> : null}
        </div>
      </div>
    </div>
  );
};

export default LoadMoreData;
