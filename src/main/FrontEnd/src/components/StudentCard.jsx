import React, { Component } from 'react'



export default class StudentCard extends Component {
    render() {
        return (
            <div className="studentcard">
            <h1>Name: {this.props.currentStudent}</h1>
            <p>Grade: {this.props.currentGrade} </p>
            <p>Department: {this.props.currentDepartment}</p>
        </div>
        )
    }
}



