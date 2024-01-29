
import config from "../../config";
import {POST} from "../../utils";


interface Props {
	data: string,
}

const index = async ({data}: Props) => {
	return POST({url:`${config.minmathiUri}/utils/crypto/decrypt`, data:{
		data: decodeURIComponent(data)
	}, authenticate: false
}).then(([,res]) => {return res})
}

export default index

