import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProducto } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
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
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary" to="/Administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>URL de Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} setProducto={setProducto}></ItemProducto>)
            
          }
          
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
