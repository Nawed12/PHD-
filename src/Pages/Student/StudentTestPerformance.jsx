import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getMarks } from '../../redux/action/studentAction'
import HomeHelper from '../../Component/HomeHelper'
// import { useHistory } from 'react-router-dom'

const StudentTestPerformance = () => {
    // const store = useSelector(store => store)
    // const history = useHistory()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getMarks())
    // }, [])



    return (

        <>
         <>
                <HomeHelper />

                <div className="container">

                    
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                   <>
                                    <h4>Cycle Test 1</h4>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {
                                                store.student.allMarks.CycleTest1.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{(res.marks / res.totalMarks) * 100}%</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody> */}
                                    </table></>
                            </div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                <>
                                    <h4>Cycle Test 2</h4>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {
                                                store.student.allMarks.CycleTest2.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{(res.marks / res.totalMarks) * 100}%</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody> */}
                                    </table></> 
                            </div>
                        </div>
        

                   
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                 <>
                                    <h4>Semester</h4>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {
                                                store.student.allMarks.Semester.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody> */}
                                    </table></> 
                            </div>
                        </div>

                    
                </div></> 

        </>

    )
}

export default StudentTestPerformance
