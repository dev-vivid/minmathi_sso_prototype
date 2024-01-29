
import {Route, Routes} from "react-router-dom";
import ProtectedAuth from "./protectedAuth.tsx";
import {Home, Login, Settings} from "../pages";
import {BaseLayout} from "../layout";


const Router = () => {
  return (<Routes>
        <Route path={'/login'} element={<Login/>}/>
      <Route element={<BaseLayout/>} path={'/'} >
        <Route path={'/settings'} element={<Settings/>}/>
        {/*<Route index element={<Home/>}/>*/}
        {/*<Route path={'/profile'} element={<Profile/>}/>*/}

        <Route index element={<ProtectedAuth element={Home}/>}/>
        {/*<Route path="profile" element={<ProtectedAuth element={Profile}/>}/>*/}
      </Route>
    </Routes>)
}

export default Router

