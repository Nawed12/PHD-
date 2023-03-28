// import React, { Component } from 'react';
// class Student extends Component{
//         render(){
//          return <h1>Student</h1>
//         }
//         }

// export default Student;

import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
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


 const  StudentLogin=()=>{
    return (
        <div><Header/>
        <div className="container">
            
             <div className="row m-5">
                        <div className="col-md-8 m-auto border" style={{ backgroundColor: "white", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                            <div>
                                <h3 className="text-center ">STUDENT</h3>
                                <form noValidate>
                                    <div className="form-group">
                                        <label htmlFor="facRegId">Registration Number</label>
                                        {/* <input onChange={(e) => setFacultyRegNum(e.target.value)} type="text" value={facultyRegNum} className={classnames('form-control', {
                                            'is-invalid': errors.registrationNumber
                                        })}
                                            id="facRegId" />
                                        {errors.registrationNumber && (
                                            <div className="invalid-feedback">{errors.registrationNumber}</div>
                                        )} */}
                                        <input type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordFacId">Password</label>
                                        {/* <input onChange={(e) => setFacultyPassword(e.target.value)} value={facultyPassword} className={classnames("form-control", {
                                            'is-invalid': errors.password
                                        })}
                                            type="password" id="passwordFacId" />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )} */}
                                        <input type="text" />
                                    </div>
                                    {/* <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isFacultyLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div> */}

                                <button type="submit" className="btn btn-info btn-block">Login</button>
                                </form>
                                <p className="text-center mt-2 ">Forgot Password</p>
                            </div>
                        </div>
                    </div>
                    
        </div>
        <div>
        <Footer/>
        </div>
        </div>
    )
   }
                                
                    

export default StudentLogin;
