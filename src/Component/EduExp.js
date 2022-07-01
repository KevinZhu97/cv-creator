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

        this.setEdit = this.setEdit.bind(this)
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
        console.log(this.state.edit)
        this.setState({
            edit: 1,
        })        
    }

    showEdu = () => {
        let subButton = <VisButton value="Add" onClick={this.setEdit} className="button"/>
        if (this.state.data.length === 0) {
            console.log('this')
            return subButton
        } else {
            console.log('fuck')
            console.log(this.data)
            let data = [];
            for (let i = 0; i < this.state.data.length; i++) {
                data.push(<ShowData key={i} index={i} button={this.props.button} school={this.state.data[i].company} from={this.state.data[i].title} to={this.state.data[i].tasks} qual={this.state.data[i].exp} />)
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

        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.push(data);
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