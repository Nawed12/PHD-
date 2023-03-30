import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'


// import { studentUpdate, studentLogout,newerChats, previousChats } from '../redux/action/studentAction'
import HomeHelper from '../Component/HomeHelper'

import { useHistory, withRouter } from 'react-router-dom'

const StudentUpdateProfile = () => {
    // const store = useSelector((store) => store)
    // const dispatch = useDispatch()
    // const history = useHistory()
    // const [gender, setGender] = useState('')
    // const [studentMobileNumber, setContactNumber] = useState('')
    // const [fatherName, setFatherName] = useState('')
    // const [fatherMobileNumber, setFatherContactNumber] = useState('')
    // const [aadharCard, setAadharCard] = useState('')
    // const [error, setError] = useState({})
    // const [avatar, setAvatar] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    // const [modal, setModal] = useState(false)
    // const imagehandler = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         let img = e.target.files[0]
    //         setAvatar(img)
    //     }
    // }

    // useEffect(() => {
    //     if (store.error) {
    //         setError(store.error)
    //     }
    // }, [store.error])

    // const formHandler = async(e) => {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     formData.append("gender", gender)
    //     formData.append("studentMobileNumber", studentMobileNumber)
    //     formData.append("fatherName", fatherName)
    //     formData.append("fatherMobileNumber", fatherMobileNumber)
    //     formData.append("aadharCard", aadharCard)
    //     formData.append("avatar", avatar)
    //     formData.append("email", store.student.student.student.email)
    //     dispatch(studentUpdate(formData, history))
    //     setModal(true)
    //     alert("Kindly login again to see updates")
    //     dispatch(studentLogout())
    //     history.push('/')
    // }
        return (
            <div>
                 <>
                    <HomeHelper />
                    <div className="container mt-5">
                        <div className="row ">
                            <div className="col-md-5 w-100 m-auto">
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="inputId">Profile Picture</label>
                                        <input required className="form-control" type="file" accept=".jpg,.png,.jpeg" id="inputId" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="genderId">Gender</label>
                                        <select className="form-control" id="genderId">
                                            <option>Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="numberId">Contact Number</label>
                                        <input required type="number" className="form-control" id="numberId" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fatherId">Father Name</label>
                                        <input type="text" className="form-control" id="fatherId" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fathercnId">Father Contact Number</label>
                                        <input type="number" className="form-control" id="fathercnId" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="aadharId">Aadhar Card Number</label>
                                        <input type="number" className="form-control" id="aadharId" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </> 
                
            </div>
        )
    }

export default withRouter(StudentUpdateProfile)
