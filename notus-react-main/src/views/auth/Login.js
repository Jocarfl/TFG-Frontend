import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "services/auth.service";

const required = value => {
  if (!value) {
    return (
      <p class="text-red-500 text-xs italic" role="alert">
        *Este campo es obligatorio
      </p>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          const user = AuthService.getCurrentUser();
          if(user.roles.includes("ROLE_USER")){
            this.props.history.push("/admin");
            window.location.reload();
          }
          if(user.roles.includes("ROLE_MODERATOR")){
            this.props.history.push("/mod");
            window.location.reload();
          }
          
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (

      <div class ="container mx-auto px-9 h-full ">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div class ="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div class ="flex-auto px-4 lg:px-10 py-10 pt-0">
          <Form        
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div class="mb-4 pt-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Usuario</label>
              <Input
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 textblueGray-900 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                placeholder="Usuario"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div class="mb-6 ">
              <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
              <Input
                type="password"
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div class="flex items-center justify-between">
              <button
                class="bg-lightBlue-600 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className=""></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div >
                <div class="text-red-500 text-xs italic" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
