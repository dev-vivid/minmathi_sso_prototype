import {useEffect, useState} from "react";
import {useAuth} from "../../hooks";
import {Link, } from "react-router-dom";



function App() {
  const auth = useAuth()
  // const navigate = useNavigate()
  // const location = useLocation()

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [passwordError, setpasswordError] = useState("");
  // const [emailError, setemailError] = useState("");

  // const handleValidation = () => {
  // 	let formIsValid = true;
  //
  // 	if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
  // 		formIsValid = false;
  // 		setemailError("Email Not Valid");
  // 		return false;
  // 	} else {
  // 		setemailError("");
  // 		formIsValid = true;
  // 	}
  //
  // 	if (!password.match(/^[a-zA-Z]{8,22}$/)) {
  // 		formIsValid = false;
  // 		setpasswordError(
  // 			"Only Letters and length must best min 8 Chracters and Max 22 Chracters"
  // 		);
  // 		return false;
  // 	} else {
  // 		setpasswordError("");
  // 		formIsValid = true;
  // 	}
  //
  // 	return formIsValid;
  // };

  const loginSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    await auth.login({username: email, password})
  };


  useEffect(() => {
    auth.verifySSO().then()
  }, []);


  return (<div
    className="  vh-100 d-flex flex-column justify-content-center align-items-center">
    <div className={'container my-2'}>
      <div className={'d-flex justify-content-center'}>
        <h3>Minmathi SSO Prototype</h3>
      </div>
    </div>
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group my-2">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                placeholder="username"
                onChange={(event) => setEmail(event.target.value)}
              />

            </div>
            <div className="form-group my-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />

            </div>

          </form>
          <div
            className={'d-flex justify-content-center' + ' align-items-center flex-column'}>
            <button type="submit" className="btn btn-primary d-flex my-2">
              Login
            </button>
            <Link to={'/settings'}>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default App;
// {"sessionId":"834dcff1-ecdf-46b0-9241-db2fb0fe3d21"}
