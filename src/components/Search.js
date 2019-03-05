import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sText : ''
    }
  }
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
    this.searchText(value);
    console.log(this.state.sText)
  }
  searchText =(text) => {
    this.props.search(text);
  }
  render() {
    return (
      <div className="container">
          <div className="row mt-5">
            <div className="input-group mb-2 col-6">
                <input type="text" className="form-control" name="sText" placeholder="Nhập từ khóa ..." onChange= {this.isChange}/>
                <div className="input-group-append">
                    <button className="input-group-text btn btn-success" onClick={()=>this.searchText(this.state.sText)}>Tìm</button>
                </div>
            </div>
            <div className="col-6 text-right">
              <button onClick={()=> this.props.change()} className={this.props.status ? 'btn btn-outline-secondary':'btn btn-outline-primary'}>{this.props.status ? 'Đóng lại' : 'Thêm mới'}</button>
            </div>
          </div>
          <hr />
      </div>
    );
  }
}

export default Search;