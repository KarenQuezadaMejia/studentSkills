import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import '../css/Container.css';
import students from "../data/students.json";
import Skills from './Skills'

class Container extends Component {
  constructor() {
    super();
    this.state = {
      students
    }
  }
  render() {
    const student = this.state.students.map((student)=>{
    return (
      <Card className="Cards">
      <Row>
          <Col xs={6} md={6} className="profile">
          <h4>{student.name}</h4>
          <Image src={student.img} thumbnail/>
          </Col>
          <Skills/>
      </Row>
  </Card>
        )
    })
    return (
            <div className="Container">
          <h2>Students Data</h2>
          {student}
        </div>
        );
      }
      }

export default Container;