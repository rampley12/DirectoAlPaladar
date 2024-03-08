import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProducto, leerProducto } from "../../../helpers/queries";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";


const ItemProducto = ({producto, setProducto}) => {
  const eliminarproducto =()=>{
    Swal.fire({
      title: "Estas seguro de eliminar el producto",
      text: "No se puede revertir esta operacion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
       const repuesta= await borrarProducto(producto.id);
       if (repuesta.status === 200) {
         Swal.fire({
          title: "Producto eliminado",
          text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,
          icon: "success"
        });
        const repuestaconnuevosproductos = await leerProducto();
        console.log(repuestaconnuevosproductos)
        if(repuestaconnuevosproductos.status === 200){
          const nuevoProducto  = await repuestaconnuevosproductos.json()
          setProducto(nuevoProducto);
        }
       }else
       Swal.fire({
        title: "Producto eliminado",
        text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,
        icon: "success"
      });
      }
    });
  }
  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt="capuchino"
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={`/administrador/editar/`+ producto.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarproducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    
  );
};

export default ItemProducto;
