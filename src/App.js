import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Company from './Company';
import Skill from './Skill';
import { Download, ShieldFillExclamation } from 'react-bootstrap-icons';
import jsPDF from 'jspdf';
//import ResumeLogo from '../public/Resume.png';

const ButtonStyle = {
  "width": "20%",
  "fontSize":"1em"
}

class App extends React.Component {
  timeInterval = null;
  constructor(props){
    super(props);
    this.state = {
      section : "header",
      header : {
        name: "",
        email:"",
        phoneNumber:""
      },
      summary:"",
      skills:[],
      companies:[],
      showTitle:true
    }
  }
  componentDidMount(){
   // this.title();
  }
  setHeader = (data)=>{
    this.setState({
      header : {...data}
    })
  }

  setSummary = (data)=>{
        this.setState({summary:data})
  }
   setSkills = (data)=>{
    // alert(JSON.stringify(data))
     this.setState({skills:[...data]});
   }
   setCompaniesList = (data)=>{
    // alert(JSON.stringify(data))
     this.setState({companies:[...data]});
   }
   title = ()=>{
    if(this.timeInterval){
      clearInterval(this.timeInterval);
    } 
   this.timeInterval = setInterval(()=>{
      let showTitle = this.state.showTitle
     this.setState({showTitle: !showTitle})
    },500)
   }

   download = ()=>{
     //alert(JSON.stringify(this.state))
     let {header,summary,skills,companies} = this.state;
     let headerTemplate = `<div style="display:flex;flex-direction:column">
       <h4 style="margin:10px 10px 0px;font-size:xx-large;color:steelblue">${header.name}</h4>
       <h5 style="margin:5px 10px 0px;font-size:medium;color:gray">${header.email}</h5>
       <h5 style="margin:5px 10px 0px;font-size:medium;color:gray">${header.phoneNumber}</h5>
     </div>`;
     let summaryTemplate = `
     <div style="display:flex;flex-direction:column">
     <h4 style="margin:20px 10px 0px;color:tomato;">Career Objective :</h4>
     <p style="margin:5px 10px 0px;color:gray;font-size:medium">${this.state.summary}</p>
     </div>
     `;
    
    let skillsList = skills.map((skill)=>{
           return skill.skillName;
     })
     let skillTemplate = `
     <div style="display:flex;flex-direction:column">
     <h4 style="margin:20px 10px 0px;color:tomato;">Skills :</h4>
     <p style="margin:5px 10px 0px;color:gray;font-size:medium">${skillsList.join()}</p>
     </div>
     `;
     let html = headerTemplate+summaryTemplate+skillTemplate;
     var doc = new jsPDF();
     doc.fromHTML(html);
     doc.save("myDocument.pdf");
     alert(headerTemplate);
     console.log(headerTemplate+summaryTemplate+skillTemplate)
   }
  render() {
    return (
      <div className="App">
        <div id="header">
          <h3 style={{display:(this.state.showTitle)?'block':'none',
        color:'white',
        backgroundColor:"rgb(86, 101, 115)",
        marginLeft:'10px',
        fontWeight:"bolder",
       // fontFamily:"fantasy"
        }}>Dream Resume</h3>
        <Download style={{cursor:"pointer"}} onClick={this.download} color="white" size={36}/>
        </div>
        <div id="content">
          <div id="banner">
          <img src={process.env.PUBLIC_URL + '/Resume.png'} alt="Logo" />
          </div>
          <div id="workSpace">
            <div id="options">
              <Button style={ButtonStyle} variant="outline-info" onClick={()=>{
                this.setState({section:"header"})
              }}>Header</Button>
              <Button style={ButtonStyle} variant="outline-info" onClick={()=>{
                this.setState({section:"summary"})
              }}>Summary</Button>
              <Button style={ButtonStyle} variant="outline-info" onClick={()=>{
                this.setState({section:"companies"})
              }}>Companies</Button>
              <Button style={ButtonStyle} variant="outline-info" onClick={()=>{
                this.setState({section:"skills"})
              }}>Skills</Button>
            </div>
            <div id="contentSpace">

              {
                this.section()
              }

            </div>
          </div>
        </div>
      </div>
    );
  }

  section = ()=>{
    let section = this.state.section;
    switch(section){
      case 'header' : return <Header data={this.state.header} setHeader={this.setHeader}></Header>
      case 'summary' : return <Summary data={this.state.summary} setSummary={this.setSummary} ></Summary>
      case 'companies' : return <Company data={this.state.companies} setCompaniesList={this.setCompaniesList}></Company>
      case 'skills' : return <Skill data={this.state.skills} setSkills={this.setSkills}></Skill>
    }
  }
}

export default App;
