import React, { Component } from 'react';

class TableData extends Component {
  render() {
    return (
      <div className={this.props.status ? 'content col-9' :'content col-12'}>
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <td>STT</td>
              <td>Tên</td>
              <td>Điện thoại</td>
              <td>Quyền</td>
              <td>Thao tác</td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataUser.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.tel}</td>
                  <td>{data.permission===1 ? 'Admin' :data.permission===2 ? 'Modrator' : 'Normal'}</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn-warning btn"><i className="fa fa-edit" /> Sửa</div>
                      <div className="btn-danger btn"><i className="fa fa-close" /> Xóa</div>
                    </div>
                  </td>
                </tr>
              )}
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;