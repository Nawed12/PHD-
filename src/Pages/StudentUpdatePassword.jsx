import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'
// import classnames from 'classnames'
import HomeHelper from '../Component/HomeHelper'
// import { studentUpdatePassword } from '../redux/action/studentAction'




const StudentUpdatePassword = () => {
    // const store = useSelector((store) => store)
    // const history = useHistory()
    // const dispatch = useDispatch()
    // const [oldPassword, setOldPassword] = useState('')
    // const [newPassword, setNewPassword] = useState('')
    // const [confirmNewPassword, setConfirmNewPassword] = useState('')
    // const [error, setError] = useState({})

    // useEffect(() => {
    //     if (store.errorHelper) {
    //         setError(store.errorHelper)
    //         console.log(store.errorHelper)
    //     }
    // }, [store.errorHelper])
    // const formHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(studentUpdatePassword({ registrationNumber: store.student.student.student.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
    
    return (
        <div>
             <>
                <HomeHelper />
                <div className="container m-5">
                    <div className="row m-5">
                        <div className="col-md-5 m-auto">
                            <form noValidate >
                                <div className="form-group">
                                    <label htmlFor="emailId">Old Password</label>
                                    <input type="password"  />
                                    {/* {error.oldPassword && (<div className="invalid-feedback">{error.oldPassword}</div>)} */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">New Password</label>
                                    <input type="password" id="passwordId" />
                                    {/* {error.newPassword && (<div className="invalid-feedback">{error.newPassword}</div>)} */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordCId">Confirm New Password</label>
                                    <input  type="password" id="passwordCId" />
                                    {/* {error.confirmNewPassword && (<div className="invalid-feedback">{error.confirmNewPassword}</div>)} */}
                                </div>
                                <button type="submit" class="btn btn-info btn-block ">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div></> 

           

        </div>
    )
    }

export default StudentUpdatePassword
