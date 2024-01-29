// create react hook

import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {IAuthContext} from "../../context/AuthContext/types.ts";


const AuthHook = ():IAuthContext=>{
	return useContext(AuthContext)
}

export default AuthHook;
