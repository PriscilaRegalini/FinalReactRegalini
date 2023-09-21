import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/ApiProducts"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

  const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
      setIsLoading(true);
      getProducts(categoryId).then((response) => {
        setProducts(response);
        setIsLoading(false);
      });
    }, [categoryId]);
    
    return <ItemList products={products} isLoading={isLoading} />;
  };
  
  export default ItemListContainer