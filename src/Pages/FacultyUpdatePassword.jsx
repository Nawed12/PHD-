import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import FacultyHomeHelper from '../Component/FacultyHomeHelper'
// import { facultyUpdatePassword } from '../redux/action/facultyAction'




const FacultyUpdatePassword = () => {
    // const store = useSelector((store) => store)
    // const history = useHistory()
    // const dispatch = useDispatch()
    // const [oldPassword, setOldPassword] = useState('')
    // const [newPassword, setNewPassword] = useState('')
    // const [confirmNewPassword, setConfirmNewPassword] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState({})

    // useEffect(() => {
    //     if (store.error) {
    //         setError(store.error)
    //     }
    // }, [store.error])
    // const formHandler = (e) => {
    //     e.preventDefault()
    //     setIsLoading(true)
    //     dispatch(facultyUpdatePassword({ registrationNumber: store.faculty.faculty.faculty.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
    // }
    // useEffect(() => {
        
    // }, [store.faculty])
    return (
        <div>
            <>
                <FacultyHomeHelper />
                <div className="container m-5">
                    <div className="row m-5">
                        <div className="col-md-6 m-auto">
                            <form noValidate>
                                <div className="form-group">
                                    <label htmlFor="emailId">Old Password</label>
                                    <input  type="password" id="emailId" />
                                    {/* {error.oldPassword && (<div classNameName="invalid-feedback">{error.oldPassword}</div>)} */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">New Password</label>
                                    <input  type="password" id="passwordId" />
                                    {/* {error.newPassword && (<div classNameName="invalid-feedback">{error.newPassword}</div>)} */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordCId">Confirm New Password</label>
                                    {/* <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                        "is-invalid": error.confirmNewPassword
                                    })} value={confirmNewPassword} type="password" id="passwordCId" /> */}
                                    {/* {error.confirmNewPassword && (<div classNameName="invalid-feedback">{error.confirmNewPassword}</div>)} */}
                                </div>
                                <button type="submit" className="btn btn-info btn-block ">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div>
</> 
            
        </div>
    )
}

export default FacultyUpdatePassword
