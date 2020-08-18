import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './Summary.css';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class Summary extends React.Component {
    constructor(props){
           super(props);
           this.state = {
               summary:""
           }
    }
    componentDidMount(){
        let summary = this.props.data;
        this.setState({summary:summary});
    }
    render() {
        return (
            <div className="headerSection">
                <h4>Summary</h4>
                <Form>
                    <Form.Row className="removeMargin">
                        <Col className="colMargin">
                        <Form.Control as="textarea" rows="8" placeholder="Summary"
                        value={this.state.summary} onChange= {(e)=>{
                             this.setState({summary: e.target.value})
                        }}
                        />
                        </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin" style={{textAlign:"center"}}>
                        <Col className="colMargin">
                        <Button style={ButtonStyle} variant="outline-danger" onClick={()=>{
                            this.setState({summary:""},()=>{
                                this.props.setSummary("");
                            });
                           
                        }} >Reset</Button>
                        <Button style={ButtonStyle} variant="outline-success" onClick={()=>{
                            this.props.setSummary(this.state.summary);
                        }}>Save</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default Summary