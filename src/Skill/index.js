import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import SkillStructure from './SkillStructure';
import './Skill.css';
import uuid from 'react-uuid';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skills:[]
        }
    }
    componentDidMount(){
        this.setState({skills:[...this.props.data]})
    }
    addNewSkill = ()=>{
        let skills = [...this.state.skills];
        skills.push({id:uuid()});
        this.setState({skills:[...skills]},()=>{
            this.props.setSkills(this.state.skills);
        });
    }
    
    getskills = ()=>{
        let {skills} = this.state;
      let allskills =  skills.map((skill)=>{
          return <SkillStructure key={skill.id} data={skill} 
          setSkill = {this.setSkill}
          deleteSkill={this.deleteSkill}>

          </SkillStructure>
        })

        return allskills;
    }
    setSkill = (id,skillName)=>{
        let {skills} = this.state;
        let allskills =  skills.filter((skill)=>{
              if(skill.id === id){
                  skill.skillName = skillName;
                  return skill
              }
              else{
                  return skill
              }
          })
          this.setState({skills:[...allskills]},()=>{
              this.props.setSkills(this.state.skills);
          });
    }

    deleteSkill = (id)=>{
        let {skills} = this.state;
        let allskills =  skills.filter((skill)=>{
            return skill.id != id;
          })
          this.setState({skills:[...allskills]},()=>{
            this.props.setSkills(this.state.skills);
          });
    }

    render() {
        let {skills} = this.state;
       // alert(JSON.stringify(skills))
        return (
            <div>
            <div className="headerSection">
                <h4>Skills</h4>
            </div>
            <div style={{textAlign:'right'}}>
            <Button style={ButtonStyle} variant="danger" onClick={this.addNewSkill} >Add Skill</Button>
            </div>
            <div id="skillsSpace" >
                 {(skills.length > 0)?this.getskills():""}
            </div>
            </div>
        )
    }
}

export default Skills