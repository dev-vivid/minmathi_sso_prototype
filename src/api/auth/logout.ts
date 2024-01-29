
import config from "../../config";
import {POST} from "../../utils";


const index = async () => {
	return POST({url: `${config.minmathiUri}/auth/logout`}).then((e)=>{
            return e;
	})
}

export default index
