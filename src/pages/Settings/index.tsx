import { useState} from "react";
import api from "../../api";
import {useNavigate} from "react-router-dom";

import {ILoginApiProps} from "../../api/auth/login.ts";


interface IFormStateProps {
  data: string
}

const Index = () => {
  const [formState, setFormState] = useState<IFormStateProps>({} as IFormStateProps)
  // const [formData, setFormData] = useState<unknown>()

  const [loginPayload, setLoginPayload] = useState<ILoginApiProps>({} as ILoginApiProps)
  // const [loginResponse, setLoginResponse] = useState<ILoginResponseProps|null>(null)

  const handleFormState = <T extends keyof IFormStateProps>(key: T, value: IFormStateProps[T]) => setFormState(prevState => ({
    ...prevState, [key]: value
  }))

  const handleLoginPayload = <T extends keyof ILoginApiProps>(key: T, value: ILoginApiProps[T]) => setLoginPayload(prevState => ({
    ...prevState, [key]: value
  }))

  const login = async () => {
    await api.auth.login(loginPayload).then(([status, res]) => {
      if (status === 200) {
        handleFormState('data',res?.data?.session?.accessToken);
      } else {
        handleFormState('data', JSON.stringify(res, null, 2));

      }

    })
  }

  const navigate = useNavigate()
  // const [encryptedData, setEncryptedData] = useState<string | null>(null)
  //
  // const encryptData = async () => {
  //   await api.crypto.encrypt({data: formState.data}).then(e => {
  //     setEncryptedData(e.data.encryptedData)
  //   })
  // }

  return <div className={'container'}>
    <div className={'d-flex justify-content-center flex-column' +
      ' align-items-center'}>

    <div className="form-group col-6 my-2">
      <label htmlFor="username">Username</label>
      <input type="text" id={'username'} className={'form-control '} onChange={e => {
        handleLoginPayload('username', e.target.value)
      }}/>
      <small id="usernameHelp" className="form-text text-muted">ex: 9876543210</small>
    </div>
    <div className="form-group col-6 my-2">
      <label htmlFor="password">Password</label>
      <input type="password" id={'password'} className={'form-control '} onChange={e => {
        handleLoginPayload('password', e.target.value)
      }}/>
      <small id="passwordHelp" className="form-text text-muted">ex: 1234</small>
    </div>
    <button className={'btn btn-primary my-2 col-6'} onClick={login}>Login</button>
    </div>
    {/*{loginResponse?*/}
    {/*<div className={'container overflow-auto d-flex flex-wrap'}>*/}
    {/*  {JSON.stringify(loginResponse, null,2)}*/}
    {/*</div>*/}
    {/*  :null}*/}

    <div className={'container p-2'}>
      <h3>Data to encrypt</h3>
      <div className="mb-3">
        {/*<label htmlFor="jsonInput" className="form-label">Enter in JSON*/}
        {/*  format:</label>*/}
        <textarea
          className="form-control"
          id="jsonInput"
          rows={8}
          value={formState.data}
          onChange={(e) => handleFormState('data', e.target.value)}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={()=>{navigate(encodeURI(`/login?authKey=${encodeURIComponent(formState.data)}`))}}>
        Login
      </button>
    </div>


  </div>
}

export default Index
