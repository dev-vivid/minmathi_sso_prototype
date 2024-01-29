import {default as login} from './login.ts'
import {default as verifySession} from './verifySession.ts'
import {default as logout} from './logout.ts'


const auth = {
	login, verifySession, logout
}

export default auth

