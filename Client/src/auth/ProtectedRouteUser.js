//PROTETTORE DELLE ROTTE o GUARD

import React, {useContext} from "react";
import { Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from "./AuthContext";




export const ProtectedRoutesUser = ({children}) => {

    //variabili
    //qui si idice accedi al contenuto di AuthContext e usalo all'interno di questo componente
    const { isAuth, userRole } = useContext(AuthContext)
    const location = useLocation();

    if (!isAuth || (userRole !== 'user' && userRole !== 'admin')) {
        //lo use location utilizzato fa si che si può ritornare alla pagina di partenza automaticamente una volta soddisfatti i parametri
        return <Navigate to='/login' state={{from: location}} replace />
    }

    return children;

}


















/*


*/