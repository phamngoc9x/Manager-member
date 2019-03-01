import React, { Component } from 'react';

class AddUser extends Component {
  showAdd =() => {
    return (
        <div className="card mb-3 mt-2">
          <div className="card-header">Thêm mới user vào hệ thống</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input id="fName" className="form-control" name="name" type="text" placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input id="fPhone" className="form-control" name="tel" type="text" placeholder="Điện thoại" />
              </div>
              <div className="form-group">
                <select id="sJob" className="form-control" name="permission" required>
                  <option value="true">Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-ground">
                <input type="reset" className="btn btn-block btn-primary" defaultValue="Thêm mới" />
              </div>
            </form>
          </div>
        </div>
      
    )
  }
  render() {
    return (
      <div className="col-3" >
        {this.props.status ? this.showAdd():''}
      </div>
    )
  }
}

export default AddUser;