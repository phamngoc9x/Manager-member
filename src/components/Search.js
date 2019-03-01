import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="container">
          <div className="row mt-5">
            <div className="input-group mb-2 col-6">
                <input type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                <div className="input-group-append">
                    <button className="input-group-text btn btn-success">Tìm</button>
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