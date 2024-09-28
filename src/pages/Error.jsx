import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error-container">
            <h1 className="text-color">404</h1>
            <p className="text-color">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil.</Link>
        </div>
    )
}

export default Error;