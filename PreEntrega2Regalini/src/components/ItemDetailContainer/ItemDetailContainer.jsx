import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/ApiProducts"
import ItemDetail from "../ItemDetail/ItemDetail";

//Componente que contiene la lógica del detalle de un producto

const ItemDetailContainer=()=> {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params=useParams().id;

  useEffect(() => {
    getProduct(params)
      .then((result) => {
        setProduct(result.product);  
      })
      .catch(() => {
        setProduct(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params]);

  return <ItemDetail product={product} isLoading={isLoading}/>;

  }
  
  export default ItemDetailContainer