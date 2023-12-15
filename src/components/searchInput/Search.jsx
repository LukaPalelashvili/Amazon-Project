import { useState, useEffect } from "react";
import ItemsList from "./itemList";
import Input from "./Input";
import useGetUsers from "../hooks/useGetUsers";

const Search = () => {
  const { products, loading, error } = useGetUsers();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // check if the users are not empty, if so then the
    // API call was successful and we can update our
    // filteredUsers state
    if (Object.keys(products).length > 0) {
      setFilteredProducts(products);
    }
  }, [products]); // this effect should run when the users state gets updated

  const filterItems = (searchTerm) => {
    // we now use 'users' instead of 'apiUsers' to do the filtering
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  };

  return (
    <>
      {/* Use the new Input component instead of the input tag */}
      <Input onChangeCallback={filterItems} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the users</p>}
      {!loading && !error && <ItemsList items={filteredProducts} />}
    </>
  );
};

export default Search;
