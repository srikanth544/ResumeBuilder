import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class CompanyStructure extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             companyName:"",
             compDesc:"",
             startDate:"",
             endDate:""
         }
     }
     componentDidMount(){
        let {companyName,compDesc,startDate,endDate} = this.props.data;
       // alert(JSON.stringify(this.props.data))
        this.setState({companyName,compDesc,startDate,endDate})
    }
     setData = ()=>{
        // alert(JSON.stringify(this.state))
        this.props.setCompanies(this.props.id,this.state)
     }
    render() {
        return (
            <Form>
                <Form.Row className="removeMargin">
                    <Col className="colMargin">
                        <Form.Control placeholder="Company name" 
                        value={this.state.companyName}
                        onChange={(e)=>{this.setState({companyName:e.target.value})}}
                        onBlur={()=>this.setData()}
                        />
                    </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin">
                    <Col className="colMargin">
                        <Form.Control placeholder="Start date" 
                        value={this.state.startDate}
                        onChange={(e)=>{this.setState({startDate:e.target.value})}}
                        onBlur={()=>this.setData()}
                        />
                        </Col>
                        <Col className="colMargin">
                        <Form.Control placeholder="End date" 
                        value={this.state.endDate}
                        onChange={(e)=>{this.setState({endDate:e.target.value})}}
                        onBlur={()=>this.setData()}
                        />
                    </Col>
                    </Form.Row>
                    <Form.Row className="removeMargin">
                    <Col className="colMargin">

                        <Form.Control as="textarea" rows="8" placeholder="Description" 
                        value={this.state.compDesc}
                        onChange={(e)=>{this.setState({compDesc:e.target.value})}}
                        onBlur={()=>this.setData()}
                        />


                    </Col>
                </Form.Row>
                <Form.Row className="removeMargin">
            <Button style={ButtonStyle} variant="danger" onClick={()=>{
                this.props.deleteCompany(this.props.id)}
                } >Delete Company</Button>
            </Form.Row>
            </Form>
        )
    }

}

export default CompanyStructure