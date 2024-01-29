import config from "../../config";
import {POST} from "../../utils";


const index = async ({accessToken}: { accessToken: string }) => {
	// console.log(`${config?.minmathiUri}/auth/verifySession`)
	return POST({
		url: `${config.minmathiUri}/auth/verifySession`, data: {
			accessToken: accessToken
		}, authenticate: false
	}).then(([status, res]) => [status, res])
}

export default index
