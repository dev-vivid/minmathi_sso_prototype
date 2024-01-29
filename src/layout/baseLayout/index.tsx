import {Outlet} from "react-router-dom";
import {NavBar} from "../../components";
import './index.scss'


const Index = () => {

  return <>
    <NavBar/>
    <div className={'p-2'}>
      <Outlet/>
    </div>
  </>
}

export default Index
