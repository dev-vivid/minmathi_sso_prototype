import './App.css'
// import {RouterProvider} from "react-router-dom";
// import routes from "./routes";
import {AuthProvider} from "./context/AuthContext";
import Router from "./routes";
// import keycloak from "./config/keycloak.ts";
// import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter} from "react-router-dom";


function App() {

    // console.debug = ()=>{}
    return (<>
        <BrowserRouter>

            {/*<ReactKeycloakProvider authClient={keycloak}>*/}
            <AuthProvider>
                <Router/>
            </AuthProvider>
            {/*</ReactKeycloakProvider>*/}
        </BrowserRouter>
    </>)
}

export default App
