import config from "../../config";
import {POST} from "../../utils";


interface Props {
	data: string,
}

const index = async ({data}: Props) => {
	return await POST({
		url: `${config.minmathiUri}/utils/crypto/encrypt`, data: {
			data
		}, authenticate: false
	}).then(([, res]) => {
		return res
	})
}

export default index

