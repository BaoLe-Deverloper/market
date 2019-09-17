import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';
import './style.css';

class login extends Component {
    constructor(props){
        super(props)
    }
    responseFacebook = (response) => {
        console.log(response);
    };

    responseGoogle = (response) => {
        console.log(response);
    };

   
    render() {
        const googleClientId = '43252523523523';
        const facebookAppId = '238116953761924';
        return (
            <div id="Modallogin" className="modal fade" role="dialog" tabIndex={-1} aria-hidden="true">  
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h2 className="text-center"> Đăng nhập Market</h2>

                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6 form_login" >
                                    <form className="form-group">
                                        <div className="form-group">
                                            <label>Tài khoản Gmail :</label>
                                            <input type="email"
                                                className="form-control" className="" id="email" aria-describedby="helpId" placeholder="example@gmail.com" />

                                        </div>
                                        <div className="form-group">
                                            <label >Mật khẩu : </label>
                                            <input type="password"
                                                className="form-control" className="" id="password" placeholder="*********" />

                                        </div>
                                        <a id="loginSubmit" className="btn btn-primary" href="#" role="button">Đăng Nhập</a>
                                    </form>
                                </div>
                                <div className="col-sm-6">
                                    <div >
                                        <FacebookLogin
                                            appId={facebookAppId}
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={this.props.SocialSignUp}
                                            cssClass="btnFacebook"
                                            icon="fa-facebook"
                                            textButton="&nbsp;&nbsp;Sign In with Facebook"
                                        />
                                        <GoogleLogin
                                            clientId={googleClientId}
                                            onSuccess={this.props.SocialSignUp}
                                            onFailure={this.props.SocialSignUp}
                                            className="btnGoogle"
                                            icon="fa-facebook"
                                            textButton="&nbsp;&nbsp;Sign In with Google"

                                        />
                                        
                                        <div className="footer-social-icons" style={{marginTop:'20px'}}>
                                            <h4 className="_14">Follow us on</h4>
                                            <ul className="social-icons">
                                                <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                                                <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                                                <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
                                                <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                                                <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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

export default login;