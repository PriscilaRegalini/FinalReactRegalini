import { Routes, Route, Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

//Componente NavBar con sus rutas

const NavBar=(count)=> {
  
    return (
      <>  
      <nav className="navbar navbar-expand-lg">     
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item groso"><Link className="navbar-brand link" to="/">< h1 className="title"> GROSO </h1></Link></li>
            <li className="nav-item  mt-3"><NavLink className="navbar-brand link" to="/">REGALOS</NavLink></li>
            <li className="nav-item  mt-3"><NavLink className="navbar-brand link"  to="/category/corporativo">REGALOS CORPORATIVOS</NavLink></li>
            <li className="nav-item  mt-3"><NavLink className="navbar-brand link"  to="/category/exterior">REGALOS EXTERIOR</NavLink></li>
            <li className="nav-item mt-2 CartWidget"><NavLink className="navbar-brand link"  to="/"><CartWidget count={count}/></NavLink></li>  
            <li className="nav-item  mt-3 slogan"> [ Regalos Grosos para gente Grosa ]</li>     
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </>
    )
  }
  
  export default NavBar