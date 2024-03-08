import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png'
import { Link, } from "react-router-dom";
const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src="https://img.freepik.com/vector-premium/error-404-linda-mascota-plato_152558-85766.jpg" alt="error 404" />
        <div>
        <Button className="btn btn-warning"as={Link} to="/">Volver al inicio</Button>

        </div>
    </section>
    );
};

export default Error404;