import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './../Data.json';
import EditUser from './EditUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      status:  true,
      data: dataUser,
      showEdit : false,
      dataEdit: {}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('myData') === null){
      localStorage.setItem('myData', JSON.stringify(dataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('myData'));
      this.setState({
        data: temp,
      })
    }
  }

  // Edit User
  formChangeEdit = (data) => {
    this.showEdit();
    this.setState({
      dataEdit: data
    })
  }

  //Show/hide Edit Form
  showEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  // Show/hide Form Add Member
  changeStatus = () => {
    this.setState({
      status: !this.state.status
    })
  }

  // Add Member 
  receiveData = (name,tel,permisson) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permisson = permisson;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    })
    localStorage.setItem('myData', JSON.stringify(this.state.data));
  }
  // Save Change
  saveChange =(data) => {
    this.showEdit();
    console.log(data.id)
  }
  // Dtempete User
  deleteUser = (id) => {
    var temp = this.state.data;
    temp.forEach((value, key) => {
      temp = temp.filter(el => el.id !== id);
      this.setState({
        data: temp
      })
    });
    localStorage.setItem('myData', JSON.stringify(temp));
  }

  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.showEdit? <EditUser showEdit={this.state.showEdit} data = {this.state.dataEdit} saveChange ={(data)=>this.saveChange(data)} status={this.state.status}/> : ''}
        <Search status={this.state.status} change={this.changeStatus}/>
        <div className="container">
            <div className="row">
                <TableData dataUser= {this.state.data} status={this.state.status} getID={this.deleteUser} formChange={(data)=>this.formChangeEdit(data)}/>
                <AddUser status={this.state.status} sendData={this.receiveData}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
