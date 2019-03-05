import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      name:this.props.data.name,
      tel:this.props.data.tel,
      permission:this.props.data.permission
    }
  }
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }

  btnSave =() => {
    var item ={}
    item.id = this.state.id; 
    item.name = this.state.name; 
    item.tel = this.state.tel; 
    item.permission = this.state.permission; 
    this.props.saveChange(item);
  }
  render() {
    return (
      <div className="container">
         <div className="row">
          <div className="col-12">
            <div className="card mb-3 mt-2">
              <div className="card-header">Thay đổi thông tin User</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input id="fName" className="form-control" name="name" type="text" placeholder="Tên user" onChange= {this.isChange} defaultValue={this.state.name}/>
                  </div>
                  <div className="form-group">
                    <input id="fPhone" className="form-control" name="tel" type="text" placeholder="Điện thoại" onChange= {this.isChange} defaultValue={this.state.tel}/>
                  </div>
                  <div className="form-group">
                    <select id="sJob" className="form-control" name="permission" defaultValue={this.state.permission} onChange= {this.isChange}>
                      <option>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-ground">
                    <input type="button" className="btn btn-block btn-primary" defaultValue="Lưu" onClick ={this.btnSave}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;