import React from 'react';
import '../App.css'

class Students extends React.PureComponent {
    render() {
        return (
            this.props.info.map( student =>
                <div
                    className="row col-12 student"
                    key={student.key}
                >
                    <div className={`col-1 ${student.sex === 'F' ? "girl" : "boy"}`}/>
                    <div className="col-3">{student.lastName}</div>
                    <div className="col-2">{student.name}</div>
                    <div className="col-5">{student.mail}</div>
                </div>
            )
        )
    }
}

export default Students