import React from "react";
import {ILoginApiProps} from "../../api/auth/login.ts";


export interface IAuthContext {
	isAuthenticated: boolean;
	login: TLoginFunction;
	logout:  TLogoutFunction;
	register: TRegisterFunction;
	userData: IUser |null
	session: ISession | null
	verifySSO: TVerifySSOFunction
	redirectIfAuthenticated: TRedirectIfAuthenticatedFunction
}

export type IAuthProviderProps = {
	children: React.ReactNode;
}
//
// export interface ILoginProps{
// 	username:string,
// 	password:string,
// }

export type TLoginFunction=(props:ILoginApiProps)=>Promise<void>
export type TLogoutFunction=()=>Promise<void>
export type TRegisterFunction=()=>void
export type TVerifySSOFunction=()=>Promise<void>
export type TRedirectIfAuthenticatedFunction=()=>void


export interface ISession {
	accessToken: string
	id: string
	idToken: string
	refreshToken: string
}

export interface IUser {
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
}
