import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      phone: '',
      address:''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })  
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address
    };
    axios.post('http://localhost:4000/person/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      name: '',
      phone: '',
      address: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Person</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Enter Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label> Enter Contact Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChangePhone}
                      />
                </div>
                <div className="form-group">
                    <label> Enter Address: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}