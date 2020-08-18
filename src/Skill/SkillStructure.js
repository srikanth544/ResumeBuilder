import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class SkillStructure extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            skill : ""
        }
    }

    componentDidMount(){
        let {id,skillName} = this.props.data;
       // alert(JSON.stringify(this.props.data))
        this.setState({skill:skillName})
    }

    render() {
        return (
            <Form>
                 <Form.Row className="removeMargin">
                        <Col className="colMargin">
                            <Form.Control placeholder="Skill name" 
                            value={this.state.skill}
                          //  value={this.props.data.skillName} 
                            onChange={(e)=>{
                                 this.setState({skill:e.target.value});
                            }} onBlur={(e)=>{
                               // alert(e.target.value)
                                this.props.setSkill(this.props.data.id,e.target.value);  
                            }}/>
                        </Col>
                    </Form.Row>
            <Button style={ButtonStyle} variant="danger" onClick={()=>{
                this.props.deleteSkill(this.props.data.id)}
                } >Delete Skill</Button>
            </Form>
        )
    }

}

export default SkillStructure;