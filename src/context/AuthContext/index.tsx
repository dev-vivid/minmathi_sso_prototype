import {createContext, useEffect} from "react";
import {
  IAuthContext,
  IAuthProviderProps,
  ISession,
  IUser,
  TLoginFunction,
  TLogoutFunction,
  TRegisterFunction
} from "./types.ts";
import {Location, useLocation, useNavigate,} from "react-router-dom";
import {useLocalStorage} from "usehooks-ts";
import api from "../../api";


// create AuthContext and AuthProvider with interfaces
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({children}: IAuthProviderProps) => {

  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('isAuthenticated', false);
  const [userData, setUserData] = useLocalStorage<IUser | null>('userData', null)
  const [session, setSession] = useLocalStorage<ISession | null>('session', null)


  const navigate = useNavigate()
  const location = useLocation();


  // const removeQueryParamFromURL = (key: string) => {
  //   // Extract current search params
  //   const searchParams = new URLSearchParams(location.search);
  //
  //   // Remove the specific query parameter (e.g., 'yourQueryParam')
  //   searchParams.delete(key);
  //
  //   // Build the new URL without the query parameter
  //   const newUrl: string = `${location.pathname}?${searchParams.toString()}`;
  //
  //   // Replace the current URL with the new URL
  //   return newUrl;
  // };

  function getURLParams(location: Location, param: string) {
    const params = new URLSearchParams(location.search);
    return params.get(param)
  }

  function redirectIfAuthenticated() {
    if (isAuthenticated) {
      const navigateTo = getURLParams(location, 'redirectTo') || '/'
      navigate(encodeURI(navigateTo))
    }
  }

  useEffect(() => {

    redirectIfAuthenticated()
  }, [isAuthenticated,])

  //? check for the auth key
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     const authKey = getURLParams(location, 'authKey')
  //     if (authKey) {
  //       // setIsAuthenticated(true)
  //       // api.crypto.decrypt({data:authKey}).then(async({data})=>{
  //       //   await api.auth.verifySession({sessionId: data?.decryptedData}).then(e=>{
  //       //     console.log('>>> verify session', e)
  //       //   })
  //       // })
  //     }
  //   }
  // }, []);


  const verifySSO = async () => {
    if (!isAuthenticated) {
      const authKey = getURLParams(location, 'authKey')
      if (authKey) {
        const verify = async () => {
          await api.auth.verifySession({accessToken: authKey}).then(([status, res]) => {
            if (status === 200) {
              setIsAuthenticated(true);
              setUserData(res.data);
              setSession(res.data.session)
            } else {
              alert(JSON.stringify(res))
            }
          })
          // await api.crypto.decrypt({data: authKey}).then(async ({data}) => {
          //   try {
          //
          //     await api.auth.verifySession({sessionId: JSON.parse(data?.decryptedData)?.sessionId}).then(([status, res]) => {
          //       if (status === 200) {
          //         setIsAuthenticated(true);
          //         setUserData(res.data);
          //         setSession(res.data.session)
          //       } else {
          //         alert(JSON.stringify(res))
          //
          //       }
          //     })
          //   } catch (e: unknown) {
          //     if (e?.toString()?.includes('SyntaxError: JSON.parse:')) {
          //       alert('Invalid Data')
          //       navigate(removeQueryParamFromURL('authKey'), {replace: true});
          //     }
          //   }
          // })
        }
        verify()
      }
    } else {
      redirectIfAuthenticated()
    }
  }

  const login: TLoginFunction = async ({username, password}) => {
    await api.auth.login({username, password}).then(([status, res]) => {
      if (status === 200) {
        setUserData(res.data as IUser)
        setSession(res.session)
        setIsAuthenticated(true);
      } else {
        alert('JSON.stringify(res)')
      }
    })
  };

  const logout: TLogoutFunction = async () => {
    await api.auth.logout().then(([status, res]) => {
      if (status === 200) {
        setUserData(null)
        setSession(null)
        setIsAuthenticated(false);

      } else {
        alert(JSON.stringify(res))
      }
    })
  };

  const register: TRegisterFunction = () => {
    // setIsAuthenticated(true);
  };

  return (<AuthContext.Provider value={{
    isAuthenticated,
    login,
    logout,
    register,
    userData,
    session,
    verifySSO,
    redirectIfAuthenticated
  }}>
    {children}
  </AuthContext.Provider>);
}
