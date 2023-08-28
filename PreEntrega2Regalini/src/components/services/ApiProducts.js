const products = [
    {
      id:"1",
      name: "¡GRACIAS...TOTALES!",
      img:'../img/exterior.jpg',
      description: "Box con variedad de productos BIEN ARGENTINOS, de esos que son únicos, como el rock argentino.Pensados para los que estan lejos: Dulce de leche, alfajores, yerba mate, golosinas, conservas, vino. ",
      precio:7500,
      stock:5,
      category: "exterior"
    },
    {
      id:"2",
      name: "DALE CAMPEÓN",
      img:'../img/daleCampeon.webp',
      description: "Box con variedad de productos BIEN ARGENTINOS, de esos que extrañas, como dar la vuelta al obelisco cuando Argentina sale campeón. Pensados para los que estan lejos: Dulce de leche, alfajores, yerba mate, golosinas, conservas, vino.",
      precio:3500,
      stock:10,
      category: "exterior"
    },
    {
      id:"3",
      name: "DEL TIEMPO DEL ÑAUPA",
      img:'../img/empresarial.jpg',
      description: "Exquisitos vinos de los mejores viñedos Mendocinos y Salteños, con una excelente presentación",
      precio:9000,
      stock:10,
      category: "corporativo"
    },
    {
      id:"4",
      name: "MATE, LUEGO EXISTO",
      img:'../img/mate.webp',
      description: "Nadie puede negar que el mate es argentino. Mate y bombilla artesanales en una presentación impecable",
      precio:5000,
      stock:5,
      category: "corporativo"
    },
    {
      id:"5",
      name: "ME PINTA",
      img:'../img/cervezas.jpg',
      description: "Box con cervezas artesanales, con un gran diseño y un sabor espectacular.",
      precio:6000,
      stock:0,
      category: "corporativo"
    },
    {
      id:"6",
      name: "SALE ALFAJOR",
      img:'../img/alfajores.jpg',
      description: "Box de 12 alfajores Milagros del Cielo, ganador del premio mundial del alfajor en 2022.",
      precio:5500,
      stock:15,
      category: "corporativo"
    },

  ];

    // Llamada a detalle por id

  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((element) => element.id === id);
       
        if (product) {
          resolve({
            product:product,
          });
      
        } else {
          reject({ mensaje: "No existe este producto" });
        }
      }, 500); // 1/2 segundos

      
    });
   
  };
  
  // Llamada por categorys
  
  export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
      const operacionExitosa = true;
      
      setTimeout(() => {
const filterProducts= category ? products.filter((product)=>product.category === category) : products;

        if (operacionExitosa) {
          resolve({
            products: filterProducts ,
          });
        } else {
          reject({ mensaje: "Resultado fallido" });
        }
      }, 1000); // 1 segundos
    });
  };
