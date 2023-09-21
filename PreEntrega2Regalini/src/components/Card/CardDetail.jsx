import Counter from "../Counter/Counter"

const Card=({product, title, img, description, price, stock, add, remove})=> {

    return (
      <>
            <div className='col-2 m-3  cardDetail'>    
                <h2 className="h2Detail">{title}</h2>
              <div className="row boxDetail">
                <img className=" col-4 border rounded imgDetail" src={img}/>
                <div className="col-4">
                <p className="descriptionProduct p-3">{description}</p> 
                <p className="priceProductDetail">$ {price}</p>  
                <p className="disponiblesProduct">Stock: {stock}</p>
               <Counter stock={stock} initial={0} product={product}/>
                </div>
              </div>        
            </div>        
      </>
    )
  }
  
  export default Card