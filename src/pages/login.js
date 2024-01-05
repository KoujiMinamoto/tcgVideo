import React, { PureComponent } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
// import {withRouter} from 'react-router-dom'

class Login extends PureComponent {
 

  render() {
    return (
      <div className="login">
        <h2>欢迎来到PTCG线上对战</h2>
        <form className="form">
          <div className="formItem">
            <label htmlFor="username">用户名：</label>
            <input
              type="text"
              id="username"
            //   value={this.state.username}
            //   onChange={(e) => {
            //     this.setState({ username: e.target.value });
            //   }}
            />
          </div>
          <div className="formItem">
            <label htmlFor="password">密码：</label>
            <input
              type="password"
              id="password"
            //   value={this.state.password}
            //   onChange={(e) => {
            //     this.setState({ password: e.target.value });
            //   }}
            />
          </div>
          <div
            className="loginBtn"
            
            // onClick={() => {
            //   this.handleLogin();
            // }}
          >
            <a
                href="video"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Login{' '}
                </h2>

            </a>
          </div>
        </form>
      </div>
    );
  }

//   handleLogin() {
//     if (this.state.username && this.state.password) {
//       this.props.history.replace("/home");
//       window.localStorage.islogin = "1";
//       alert("欢迎！");
//     } else {
//       alert("请输入用户名和密码！");
//     }
//   }
  handleLogin(){
    debugger
    this.props.history.replace("/home");
  }
}

export default withRouter(Login)
