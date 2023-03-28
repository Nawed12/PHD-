import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
// import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { adminLogin } from '../redux/action/adminAction'
// import classnames from 'classnames'
// import { render } from '@testing-library/react';



// const LoginPage = () => {
//     const store = useSelector((store) => store)
//     const dispatch = useDispatch( )
//     const [registrationNumber, setRegistrationNumber] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState({})
//     const [isLoading, setIsLoading] = useState(false)
//     const history = useHistory()
//     useEffect(() => {
//         if (store.admin.isAuthenticated) {
//             history.push('/admin')
//         }
//     }, [store.admin.isAuthenticated])
//     useEffect(() => {
//         if (store.error) {
//             setError(store.error)
//         }
//     }, [store.error])

//     const fromHandler = (e) => {
//         e.preventDefault()
//         setIsLoading(true)
//         dispatch(adminLogin({registrationNumber, password}))
       
//     }

//     useEffect(() => {
//         if (store.error ||
//             store.admin.isAuthenticated) {
//             setIsLoading(false)
//         }
        
//         else {
//             setIsLoading(true)
//         }
//     }, [store.error, store.admin.isAuthenticated])


 const  AdminLogin=()=>{
    return (
        <div><Header/>
        
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex justify-content-md-center align-items-center vh-100">
                        <div>
                            <h1 className="display-4 text-center">ADMIN</h1>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="emailId">Registration Number</label>
                                    {/* <input onChange={(e) => setRegistrationNumber(e.target.value)} type="text" value={registrationNumber} className={classnames("form-control form-control-lg",
                                        {'is-invalid' : error.registrationNumber
                                        
                                        })} id="emailId" />
                                    {error.registrationNumber && (<div className="invalid-feedback">{error.registrationNumber}</div>)} */}
                                    <input type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">Password</label>
                                    <input type="text" />
                                    {/* <input onChange={(e) => setPassword(e.target.value)} value={password} className={classnames("form-control form-control-lg", {
                                        "is-invalid": error.password
                                    })} value={password} type="password" id="passwordId" />
                                    {error.password && (<div className="invalid-feedback">{error.password}</div>)} */}
                                </div>
                                {/* <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div> */}
                                {/* {!isLoading && <button type="submit" className="btn btn-info btn-block">Login</button>}
                                 */}
                                 <button type='submit' className='btn btn-info btn-block'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div><Footer/></div>
        </div>
    )
   }
                                
                    

export default AdminLogin;
