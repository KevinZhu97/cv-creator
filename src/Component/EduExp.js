import react from 'react';
import VisButton from './VisButton'
import ShowData from './ShowDataSchool'

class EduExp extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            school: '',
            from: '',
            to: '',
            qualification: '',
            edit: 0,
            data: [],
        }

        // this.state = this.state.getEdu

        this.delEdu = this.delEdu.bind(this);
        this.setEdit = this.setEdit.bind(this)
    }

    delEdu = (index) => {
        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.splice(index, 1);
            return {
                data: prevData
            }
        })
    }

    updateSchool = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ school: e.target.value });
    }
    updateFrom = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ from: e.target.value });
    }
    updateTo = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ to: e.target.value });
    }
    updateQualification = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ qualification: e.target.value });
    }

    setEdit = () => {
        this.setState({
            edit: 1,
        })        
    }

    showEdu = () => {
        let subButton = <VisButton value="Add" onClick={this.setEdit} className="button" render={this.props.button}/>
        if (this.state.data.length === 0) {
            return subButton
        } else {
            let data = [];
            console.log(this.state.data)
            for (let i = 0; i < this.state.data.length; i++) {
                console.log(this.state.data[0].school) //does console school
                data.push(<ShowData key={i} index={i} button={this.props.button} school={this.state.data[i].school} from={this.state.data[i].from} to={this.state.data[i].to} qualification={this.state.data[i].qualification} delData={this.delEdu} />)
            }
            return(
                <div className="ShowEdu">
                    {data}
                    {subButton}
                </div>
            )
        }
    }

    addEdu = () => {
        return(
            <div className="EduExp">
                <div>
                    <label>School: </label> <input type='text' onChange={this.updateSchool}/> 
                </div>
                <div>
                    <label>From: </label> <input type="date" onChange={this.updateFrom}/>
                </div>
                <div>
                    <label>To: </label> <input type="date" onChange={this.updateTo}/>
                </div>
                <div>
                    <label>Qualification: </label> <input type="text" onChange={this.updateQualification}/>
                </div>
                <input className="button" type="button" value="submit" onClick={this.submitEdu}></input>
            </div>    
        )
    }

    submitEdu = () => {
        let data = {
            school: this.state.school,
            from: this.state.from,
            to: this.state.to,
            qualification: this.state.qualification,
        };
        


        // this.setState({
        //     data: this.state.data.push(data)
        // })

        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.push(data);
            console.log(prevData)
            return {
                data: prevData,
                edit: 0
            }
        })
    }

    handleRender = () => {
        if (this.state.edit === 0) {
            return this.showEdu();
        }
        if (this.state.edit === 1) {
            return this.addEdu();
        }
    }

    render() {
        return(
            <div className="EduExp">
                <h3>Educational Experience</h3>
                {this.handleRender()}
            </div>
        )
    }
    

}

export default EduExp;