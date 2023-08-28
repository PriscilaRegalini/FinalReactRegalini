
import CardDetail from "../Card/CardDetail"

//Componente que muestra el detalle de un producto

const ItemDetail=({product, isLoading})=> {

if (!product) {

    return <h3 className="m-4">Producto no encontrado</h3>  
}

return (
    <> 
 <div className="loading">
   
        {isLoading && <p>Cargando...</p>}
  
        {!isLoading && product.length === 0 && <p>No hay productos</p>}
</div>


    <li key={product.id}>
        <CardDetail 
            title={product.name}
            img={product.img}
            description={product.description}  
            precio={product.precio}
            stock={product.stock}
        />
        
    </li>
    </>
  )
};

  export default ItemDetail