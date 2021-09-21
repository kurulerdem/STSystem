import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";

class Students extends Component {
   state = {
       students:[]
   };
    componentDidMount() {
        this.getStudents();
    }

    getStudents = () => {
        fetch("/student/getstudents")
        .then(response => response.json())
        .then(data => this.setState({students:data}));;
    }

    

    render() { 
        return (
            <div class="board">
                <h3>Menu</h3>
                <ListGroup>
                    {
                        this.state.students.map(student => (
                            <ListGroupItem onClick={() => this.props.changeStudentName(student)} key={student.id}>{student.name}    {student.surname} </ListGroupItem>
                        ))
                    }


                </ListGroup>
            </div>
        );
    }
}

export default Students;