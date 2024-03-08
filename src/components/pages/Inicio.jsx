import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProducto } from "../../helpers/queries";
import { Link, } from "react-router-dom";
const Inicio = () => {
  const [productos, setProducto] = useState([])
  useEffect (()=>{
obtenerrepuesta();
  }, [])

const obtenerrepuesta = async()=>{
  const repuesta = await leerProducto();
  if(repuesta.status=== 200){
    const datos = await repuesta.json()
    setProducto(datos);
  }else{

  }
}
  return (
    <section className="mainSection">
      <h1 className="display-4 text-center">Directo al Paladar</h1>
      <img
        className="banner"
        src="https://www.delas.pt/files/2023/08/pexels-fauxels-3184183.jpg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h2 className="display-6">Nuestras Recetas</h2>
        <hr />
    
          <Row>
            {
            productos.map((producto)=> <CardProducto key={producto.id} producto={producto}></CardProducto>, )
            
          }
          </Row>
       
      </Container>
    </section>
  );
};

export default Inicio;
