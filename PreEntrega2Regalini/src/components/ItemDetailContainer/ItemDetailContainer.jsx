import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/ApiProducts"
import ItemDetail from "../ItemDetail/ItemDetail";

//DETALLE DE PRODUCTO

const ItemDetailContainer=()=> {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params=useParams().id;

  useEffect(() => {
    getProduct(params)
      .then((result) => {
        setProduct(result); 
      })
      .catch(() => {
        setProduct(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params]);

  return <ItemDetail product={product} isLoading={isLoading} />;

  }
  
  export default ItemDetailContainer