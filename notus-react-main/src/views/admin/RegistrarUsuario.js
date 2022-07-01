import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import Select from 'react-select';

import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";

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

const techCompanies = [
  { label: "Paciente", value: "user" },
  { label: "Médico", value: "mod" },
  { label: "Admin", value: "admin" }
];

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      startDate : new Date(),
      username: "",
      password: "",
      email:"",
      first_name:"",
      second_name:"",
      dni:"",
      rol:"",
      date:"",
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeSecondName(e) {
    this.setState({
      second_name: e.target.value
    });
  }

  onChangeDNI(e) {
    this.setState({
      dni: e.target.value
    });
  }

  onChangeRol(e) {
    this.setState({
      rol: e.target.value
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
            this.props.history.push("/user");
            window.location.reload();
          }
          if(user.roles.includes("ROLE_MODERATOR")){
            this.props.history.push("/moderator");
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

      <div class ="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-lightBlue-600 mb-0 px-6 py-6">
        <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-100 text-xl font-bold">Registrar Usuario</h6>
            <button
              className="bg-red-500 text-white active:bg-red-100 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Borrar
            </button>
          </div>
          </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          
          <Form        
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              
              </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="username">Usuario</label>
              <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="username"
                placeholder="Usuario"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
            </div>

            <div class="w-full lg:w-6/12 px-4">
              <div class ="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password">Email</label>
              <Input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Contraseña"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nombre
                  </label>
                  <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="Nombre"
                placeholder="Nombre"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                validations={[required]}
              />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Second Name
                  </label>
                  <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Contraseña"
                value={this.state.second_name}
                onChange={this.onChangeSecondName}
                validations={[required]}
              />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    DNI
                  </label>
                  <Input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Contraseña"
                value={this.state.dni}
                onChange={this.onChangeDNI}
                validations={[required]}
              />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    FECHA NACIMIENTO
                  </label>
                  <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
      }) => (
        <div 
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>


        </div>
      )}
      selected={this.state.startDate}
      onChange={(date) => this.setState({ startDate: date})}
    />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ROL
                  </label>
                  <Select options={ techCompanies } value={this.state.rol} />
                </div>
              </div>

              

            <div class="flex justify-center mt-4 pl-4">
              <button
                class="bg-emerald-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className=""></span>
                )}
                <span>Registrar</span>
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
            </div>
          </Form>
        </div>
      </div>
      
      
    );
  }
}
