import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './Header.css';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            phoneNumber:""
        }
    }
    componentDidMount(){
        let {name,email,phoneNumber} = this.props.data;
        this.setState({
          name,
          email,
          phoneNumber
        });
    }
    render() {
        let {name,email,phoneNumber} = this.state;
        return (
            <React.Fragment>
            <div className="headerSection">
                <h4>Header</h4>
             </div>   
                <Form>
                    <Form.Row className="removeMargin">
                        <Col className="colMargin">
                            <Form.Control placeholder="Full name" value={name} onChange={
                                (e)=>{
                                    this.setState({name:e.target.value})
                                }
                            }/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin">
                        <Col className="colMargin">
                            <Form.Control placeholder="Email" value={email} onChange={
                                (e)=>{
                                    this.setState({email:e.target.value})
                                }
                            }/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin">
                        <Col className="colMargin">
                            <Form.Control placeholder="Phone Number" value={phoneNumber} onChange={
                                (e)=>{
                                    this.setState({phoneNumber:e.target.value})
                                }
                            }/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin" style={{textAlign:"center"}}>
                        <Col className="colMargin">
                        <Button style={ButtonStyle} variant="outline-danger" onClick={()=>{
                            this.setState({name:"",email:"",phoneNumber:""},()=>{
                                this.props.setHeader(this.state);
                            });
                           
                        }} >Reset</Button>
                        <Button style={ButtonStyle} variant="outline-success" onClick={()=>{
                            this.props.setHeader(this.state);
                        }}>Save</Button>
                        </Col>
                    </Form.Row>
                    
                </Form>
            </React.Fragment>
        )
    }
}

export default Header