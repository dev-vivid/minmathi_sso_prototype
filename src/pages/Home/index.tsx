import {useAuth} from "../../hooks";
import {Button} from "react-bootstrap";


const Index =()=>{
	const auth = useAuth()
	return <div className={'container'}>
      <div className={'vh-100 d-flex flex-column justify-content-center' +
        ' align-items-center'}>

        <div>

		Welcome {auth.userData?.firstName ||auth.userData?.email}
        </div>
      <Button className={'btn btn-danger my-2'} onClick={auth.logout}>Logout</Button>
      </div>

	</div>
}

export default Index
