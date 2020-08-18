import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import CompanyStructure from './CompanyStructure';
import './Company.css';
import uuid from 'react-uuid';
const ButtonStyle = {
    "width": "20%",
    "fontSize":"1em",
    "margin":"10px"
  }
class Company extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companies:[]
        }
    }
    componentDidMount(){
        let companies = this.props.data;
        this.setState({companies:[...companies]});
    }
    addNewCompany = ()=>{
        let companies = [...this.state.companies];
        companies.push({id:uuid()});
        this.setState({companies:[...companies]},()=>{
            this.props.setCompaniesList(this.state.companies);
        });
    }
    
    getCompanies = ()=>{
        let {companies} = this.state;
      let allCompanies =  companies.map((company)=>{
          return <CompanyStructure  key={company.id} id={company.id} 
              data = {company}
              deleteCompany={this.deleteCompany}
               setCompanies={this.setCompanies}>
          </CompanyStructure>
        })

        return allCompanies;
    }

    deleteCompany = (id)=>{
        let {companies} = this.state;
        let allCompanies =  companies.filter((company)=>{
            return company.id != id;
          })
          this.setState({companies:[...allCompanies]},()=>{
            this.props.setCompaniesList(this.state.companies);
        });
    }

    setCompanies = (id,details)=>{
        let {companies} = this.state;
        let {companyName,compDesc,startDate,endDate} = details;
        let allCompanies =  companies.filter((company)=>{
              if(company.id === id){
                  company.companyName = companyName;
                  company.compDesc = compDesc;
                  company.startDate = startDate;
                  company.endDate = endDate;
                  return company
              }
              else{
                  return company
              }
          })
          this.setState({companies:[...allCompanies]},()=>{
              this.props.setCompaniesList(this.state.companies);
          });
    }

    render() {
        let {companies} = this.state;
        return (
            <div>
            <div className="headerSection">
                <h4>Company</h4>
            </div>
            <div style={{textAlign:'right'}}>
            <Button style={ButtonStyle} variant="danger" onClick={this.addNewCompany} >Add Company</Button>
            </div>
            <div id="companiesSpace" >
                 {(companies.length > 0)?this.getCompanies():""}
            </div>
            </div>
        )
    }
}

export default Company