import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentCard from "./StudentCard";
import { Container, Row, Col } from "reactstrap";
import Students from "./Students";
import { Component } from 'react'

export default class App extends Component {

    state={currentStudent: "",currentGrade: "",currentDepartment: ""}
    changeStudentName = student => {
         this.setState({ currentStudent: student.name, currentGrade: student.grade,currentDepartment: student.department}) 
        }
    render() {
        return (
            <div>

        <Header></Header>
        
            
           <Container>
            <Row>
                <Col xs="3">
                <Students currentStudent={this.state.currentStudent} currentGrade={this.state.currentGrade}  changeStudentName={this.changeStudentName}></Students>
                </Col><Col xs="9">
                <StudentCard currentStudent={this.state.currentStudent} currentGrade={this.state.currentGrade} currentDepartment={this.state.currentDepartment}></StudentCard>
                </Col>
                
            </Row>

        </Container>
 
           




        
        <Footer></Footer>

    </div>
        )
    }
}

