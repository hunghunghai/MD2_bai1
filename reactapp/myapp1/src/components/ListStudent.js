import React from 'react'
import Student from './Student'

function ListStudent(props) {
    return (
        <div className="table-responsive pt-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>{props.tiltle}</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent