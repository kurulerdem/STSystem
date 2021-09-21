import React, {Component} from 'react';
import {ListGroupItem} from "reactstrap";

class Course extends Component {
    render() {
        return (
                    <ListGroupItem>{this.props.title}</ListGroupItem>
        );
    }
}

export default Course;