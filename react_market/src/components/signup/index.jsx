
import React, { Component } from 'react';
import './style.css';
class signup extends Component {


    render() {

        return (
            <div id="Modalsignup" className="modal fade" role="dialog" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                              <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                            <h2 className="text-center"> Đăng kí tài khoản Market</h2>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                     
                                    <form className="signup">
                                    <div className="form-group">
                                            <label >Têntài khoản:</label>
                                            <input type="text"
                                                className="form-control" className="" id="name" aria-describedby="helpId" placeholder="example@gmail.com" />

                                        </div>
                                        
                                        <div className="form-group">
                                            <label >Tài khoản Gmail :</label>
                                            <input type="email"
                                                className="form-control" className="" id="email" aria-describedby="helpId" placeholder="example@gmail.com" />

                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu : </label>
                                            <input type="password"
                                                className="form-control"  id="password" placeholder="*********" />

                                        </div>
                                        <div className="form-group">
                                            <label >Xác Nhận Mật khẩu : </label>
                                            <input type="password"
                                                className="form-control" id="comfirmpassword" placeholder="*********" />

                                        </div>
                                        <button id="signupSubmit" className="btn btn-primary" href="#" role="button">Đăng Kí</button>
                                       
                                    </form>
                                    
                                </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default signup;