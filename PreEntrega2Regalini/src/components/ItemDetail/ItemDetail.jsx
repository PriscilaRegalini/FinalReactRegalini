
import CardDetail from "../Card/CardDetail"
import PropTypes from "prop-types";

//Detalle de producto

const ItemDetail=({product, isLoading, addItem, removeItem})=> {

if (!product) {

    return <h3 className="m-4">Producto no encontrado</h3>  
}

return (
    <> 
        <div className="loading">
        
                {isLoading && <>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </>}
        
                {!isLoading && product.length === 0 && <p>No hay productos</p>}
        </div>

        <li  className="detailProduct" key={product.id}>
            <CardDetail product={product}
                title={product.title}
                img={`../src/assets/${product.imageId}`}
                description={product.description}  
                price={product.price}
                stock={product.stock}
                add={() => addItem(product, 1)}
                remove={() => removeItem(product.id)}
            />     
        </li>
    </>
  )
};
    ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,

  };

  export default ItemDetail

  