const ItemPresentation=({greeting})=> {
    
//slogan y presentación del sitio

    return (
        <>     
          <div className="presentation">
            <h2 className="h2Groso">{greeting}</h2>  
              <div className="box">
                <h3 className="h3Groso">Groso</h3>
                <p className="pDescription"><strong>[ Lunfardo, Argentino ]</strong>Adjetivo. Se refiere a algo o alguien excepcional, admirable, impresionante o sorprendente. También se puede utilizar para destacar las habilidades, logros o conocimientos sobresalientes de alguien. Aplicable a casi cualquier ámbito.
                </p>
                <p className="pDescription">
                Generalmente esta palabra se la usa acompañada por el prefijo "re".<strong>"Es re groso" </strong></p> 
              </div>
          </div>
        </>
      )
    };
    
      export default ItemPresentation