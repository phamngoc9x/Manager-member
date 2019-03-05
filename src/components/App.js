import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from '../Data.json';
import EditUser from './EditUser';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      status:  true,
      data: dataUser,
      showEdit : false,
      dataEdit: {},
      sText:''
    }
  }
  
  componentWillMount() {
    //console.log(this.state.data);
    
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
  receiveData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
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
    console.log(data.permission);
    data.permission= parseInt(data.permission);
    console.log(data.permission);
    var array = this.state.data;
    var index = array.findIndex(({id}) => id === data.id);
    console.log(array[index]);
    array[index] = data;
    localStorage.setItem('myData', JSON.stringify(array));
  }
  // Delete User
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
  searchText = (dl) => {
    this.setState({
      sText: dl
    })
    //console.log(dl)
  }
  render() {
    var result = [];
    //console.log(this.state.sText);
    this.state.data.forEach(item => {
      //console.log(item.name)
      if (item.name.toLowerCase().indexOf(this.state.sText) !== -1) {
        result.push(item);
      }
    });
    //console.error(this.state.data)
    return (
      <div className="App">
        <Header/>
        {this.state.showEdit? <EditUser showEdit={this.state.showEdit} data = {this.state.dataEdit} saveChange ={(data)=>this.saveChange(data)} status={this.state.status}/> : ''}
        <Search status= {this.state.status} change={this.changeStatus} search ={(text)=>this.searchText(text)}/>
        <div className="container">
            <div className="row">
                <TableData dataUser= {result} status={this.state.status} getID={this.deleteUser} formChange={(data)=>this.formChangeEdit(data)}/>
                <AddUser status={this.state.status} sendData={this.receiveData}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
