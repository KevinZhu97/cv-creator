import React from 'react';
import GeneralInfo from './Component/GeneralInfo'
import EduExp from './Component/EduExp'
import PraExp from './Component/PraExp'




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      EduExp: {
        school: "",
        from: 0,
        to: 0,
        Qualification: "",
        edit: 0,
        data: []
      },
      PraExp: {
        company: "",
        title: "",
        tasks: "",
        exp: "",
        edit: 0,
        data: []
      },
      buttons: "1",
      btnVal: "Preview"

    }

    this.getEdu = this.getEdu.bind(this);
    this.getPra = this.getPra.bind(this);
  }

  getEdu = (e) => {
    this.setState({ EduExp: e });
  }

  getPra = (e) => {
    this.setState({ PraExp: e });
    console.log("practicle Exp changed")
  }

  viewBut = () => {
    if (this.state.buttons === "0") {
      this.setState({
        buttons: "1",
        btnVal: "Preview"
      });
    }
    else {
      this.setState({
        buttons: "0",
        btnVal: "Update CV"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo/>
        <EduExp/>
        <PraExp button={this.state.buttons} PraExp={this.state.PraExp}/>
      </div>
    );
  }
}


export default App;
