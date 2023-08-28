import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/ApiProducts"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

//Componente que contiene la lógica del listado de productos

const ItemListContainer=()=> {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params=useParams();

  useEffect(() => {

    getProducts(params.id)
      .then((result) => {
        setProducts(result.products);
      
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.id]);



  return <ItemList products={products} isLoading={isLoading} />;

  }
  
  export default ItemListContainer