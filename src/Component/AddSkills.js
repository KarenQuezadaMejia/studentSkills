import React, { Component } from 'react';
import { Button,Badge } from 'react-bootstrap';
import '../css/Container.css'
import students from "../data/students.json"

class AddSkills extends Component {
    constructor(props) {
      super(props);
      this.state = {
        students
      }
    }
    render() {
      const student = this.state.students.map((student)=>{
      return (
            
             <footer>
             <Button className="add" variant="outline-dark"><Badge>+</Badge>añadir</Button>
             </footer>
          )
      })
      return (
              <div className="Container">
            {student}
          </div>
          );
        }
        }
  
  export default AddSkills;