import config from "../../config";
import {POST} from "../../utils";


export interface ILoginApiProps {
	username: string
	password: string
}

export interface ILoginResponseProps {
	id: string
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	districtId: string
	designationId: string
	isVerified: boolean
	defaultVerificationType: string
	progfilePicPath: string
	userGroup: string
	userType: string
	username: string
	passwordHash: string
	mpin: string
	createdAt: string
	updatedAt: string
	isActive: boolean
	imsData: ImsData
	session: Session
}

export interface ImsData {
	isUserExist: boolean
	status: string
	userdata: Userdata
	designation: string
	token: string
	block_name: string
	dist_name: string
}

export interface Userdata {
	email: string
}

export interface Session {
	accessToken: string
	id: string
	idToken: string
	refreshToken: string
}


const index = async ({username, password}: ILoginApiProps) => {
	return await POST({
		url: `${config.minmathiUri}/auth/login`, data: {username, password},
		authenticate: false
	}).then((e) => {
		return e;
	})
}

export default index
