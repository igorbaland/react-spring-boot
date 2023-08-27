import React, { Component } from 'react';
import withRouter from '../withRouter';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            firstName: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName};
        console.log('employee => ' + JSON.stringify(employee));
        this.props.navigate('/employees');
    }


    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    cancel(){
        this.props.navigate('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className='text-center'>Add employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default withRouter(CreateEmployeeComponent);