import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './../Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      status:  true,
      data: dataUser
    }
  }
  changeStatus =() => {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Search status={this.state.status} change={this.changeStatus}/>
        <div className="container">
            <div className="row">
                <TableData dataUser= {this.state.data} status={this.state.status}/>
                <AddUser status={this.state.status}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
