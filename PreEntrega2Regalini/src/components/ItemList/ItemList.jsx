import { Link } from "react-router-dom";
import Card from "../Card/CardList"
import propTypes from "prop-types";
import ItemPresentation from "../ItemPresentation/ItemPresentation";

// Listado de productos y la presentación del sitio

const ItemList=({products, isLoading})=> {

return (
    <>          
      <div className="loading"> 
          {isLoading && <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div></>}
          {!isLoading && products.length === 0 && <p>No hay productos</p>}
      </div>

      <div className="container listContainer">
        <div className='row '> 
          {products.map((products) => (
            <div className='col-4  movile' key={products.id}>
            <Link className="navbar-brand  " to={`/product/${products.id}`}> 
                <Card 
                    title={products.title}
                    img={`${products.imageId}`}
                    description={products.description}  
                    price={products.price}
                    stock={products.stock}
                />
            </Link>
            </div>
          ))}
          <ItemPresentation greeting="Regalos Grosos para gente Grosa"/>
        </div>
      </div>
    </>
  )
};

ItemList.propTypes={
    products:propTypes.array.isRequired,
};

  export default ItemList