import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Courses extends Component {
    constructor(props){
        super(props);
        this.state = {courses: [
            {courseId:1,courseName:"Matematik",courseCredit:4},
            {courseId:2,courseName:"Fizik",courseCredit:4},
        
        ]}
    }
    render() {
        return (
            <div>
                <h3>Dönem 1</h3>
                <ListGroup>
                    {
                        this.state.courses.map(course=>(
                            <ListGroupItem key={course.courseId}>{course.courseName}    kredi: {course.courseCredit}</ListGroupItem>
                        ))
                    }
                    
                </ListGroup>
            </div>
        );
    }
}

export default Courses;