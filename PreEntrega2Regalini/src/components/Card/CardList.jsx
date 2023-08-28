

const CardList=({title, img, precio, stock})=> {
  
    return (
      <>
            <div className='col m-3 card cardList'>  
                <h2 className="h2List">{title}</h2>   
                <img className="border rounded img" src={img}/>
                <p className="priceProduct">$ {precio}</p>  
                <p className="stockProduct">Stock: {stock} </p> 
            
            </div>  
      </>
    )
  }
  
  export default CardList