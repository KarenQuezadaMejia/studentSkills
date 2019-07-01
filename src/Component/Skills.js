import React, { Component } from 'react';
import { Card, Button,Badge } from 'react-bootstrap';
import '../css/Container.css';
import students from "../data/students.json";
import AddSkills from './AddSkills'


class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {
        students
      }
    }
    render() {
      const student = this.state.students.map((student)=>{
      return (
            <Card.Body>
            <h5>Skills</h5>
             <Button className="skills"  variant="outline-dark">React<Badge variant="dark" onClick={this.props.clickeo}>x</Badge></Button>
             <Button className="skills"  variant="outline-dark">Node <Badge variant="dark">x</Badge></Button>
             <Button className="skills"  variant="outline-dark">Angular <Badge variant="dark">x</Badge></Button>
             <Button className="skills"  variant="outline-dark">Vue <Badge variant="dark">x</Badge></Button>
             <AddSkills/>
            </Card.Body>
          )
      })
      return (
              <div className="Container">
            {student}
          </div>
          );
        }
        }
  
  export default Container;