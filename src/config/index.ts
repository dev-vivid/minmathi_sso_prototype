import {EnvironmentType, IAppConfig} from "./types.ts";


export const ENV: EnvironmentType = 'development'

const configList: IAppConfig[] = [{
	env: "development",
	// minmathiUri: 'https://dev.vividtranstech.com/minmathi/api/v1',
	minmathiUri: 'http://13.127.136.47/minmathi/api/v1',
	// minmathiUri: 'http://localhost:8080/minmathi/api/v1',

}]

const config: IAppConfig = configList.find(e => e.env === ENV) as IAppConfig

export default config
