import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemProducto from "./components/pages/producto/ItemProducto";
function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route
          path="/detalleProducto"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
         exact path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
         exact path="/administrador/crear"
          element={<FormularioProducto editando={false} titulo="Nuevo Producto"></FormularioProducto>}
        ></Route>
        <Route
         exact path="/administrador/editar/:id"
          element={<FormularioProducto editando={true} titulo="Editar Producto"></FormularioProducto>}
        ></Route>
         <Route
          path="*"
          element={<Error404></Error404>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
