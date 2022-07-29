import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isValid } from "better-dni";

import Select from 'react-select';

import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import AuthService from "services/auth.service";
import {isEmail} from "validator"

const required = value => {
  if (!value) {
    return (
      <p class="text-red-500 text-xs italic" role="alert">
        *Este campo es obligatorio
      </p>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div class="text-red-500 text-xs italic" role="alert">
        *Email invalido.
      </div>
    );
  }
};

const dni = value => {
  if (!isValid(value)) {
    return (
      <div class="text-red-500 text-xs italic" role="alert">
        *DNI invalido.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div class="text-red-500 text-xs italic" role="alert">
        * El usuario debe contener entre 3 y 20 caracteres.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div class="text-red-500 text-xs italic" role="alert">
        * The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const options = [
  { label: "Paciente", value: "user" },
  { label: "Médico", value: "moderator" },
  { label: "Admin", value: "admin" }
];

const optionsGenero = [
  { label: "Masculino", value: "masculino" },
  { label: "Femenino", value: "femenino" },
  { label: "Otro", value: "otro" }
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
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeSecondName = this.onChangeSecondName.bind(this);
    this.onChangeDNI = this.onChangeDNI.bind(this);
    this.onChangeAltura = this.onChangeAltura.bind(this);
    this.onChangeGenero = this.onChangeGenero.bind(this);
    
    this.state = {
      startDate : new Date(),
      username: "",
      password: "",
      email:"",
      first_name:"",
      second_name:"",
      dni:"",
      height: 0,
      rol:"",
      gender: "",
      born_date: new Date(),
      successful: false,
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
  
 

  onChangeAltura(e) {
    this.setState({
      height: e.target.value
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

  onChangeGenero(e) {
    this.setState(this.state.gender = e);
  }

  onChangeRol = (e) => {
    this.setState(this.state.rol = e);
  };

  onChangeDate = (e) => {
    this.setState(this.state.born_date = e);
  };

  borrarForm(){
    window.location.reload();
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      const roles = [this.state.rol.value] ;
      const gender = this.state.gender.value;
      const born_date = this.state.born_date.toLocaleDateString(); 
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.first_name,
        this.state.second_name,
        this.state.dni,
        born_date,
        roles,
        gender,
        this.state.height,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    
    return (
      <div class ="relative flex flex-col min-w-0 break-words w-full mb-4 mt-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-lightBlue-600 mb-0 px-6 py-6">
        <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-100 text-xl font-bold">Registrar Usuario</h6>
            <button
              className="bg-red-500 text-white active:bg-red-100 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => this.borrarForm()}
            >
              Borrar
            </button>
          </div>
          </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          
          <Form        
            onSubmit={this.handleRegister}
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
                validations={[required,vusername]}
              />
            </div>
            </div>

            <div class="w-full lg:w-6/12 px-4">
              <div class ="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password">Contraseña</label>
              <Input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required,vpassword]}
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

            <div class="w-full lg:w-6/12 px-4">
              <div class ="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password">Email</label>
              <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required,email]}
              />
            </div>
            </div>

           

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Apellidos
                  </label>
                  <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="password"
                placeholder="Apellido"
                value={this.state.second_name}
                onChange={this.onChangeSecondName}
              />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    DNI/NIF
                  </label>
                  <Input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="dni"
                placeholder="DNI"
                value={this.state.dni}
                onChange={this.onChangeDNI}
                validations={[required,dni]}
              />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    GÉNERO
                  </label>
                  <Select options={ optionsGenero } defaultValue={{label: "Femenino", value: "femenino"}} value={this.state.gender} onChange={value =>this.onChangeGenero(value)}  /> 
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Altura
                  </label>
                  <Input
                type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="altura"
                min="0"
                step="0.01"
                placeholder="cm"
                value={this.state.height}
                onChange={this.onChangeAltura}
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
                    ROL
                  </label>
                  <Select options={ options } value={this.state.rol} onChange={this.onChangeRol} />
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
        dateFormat="yyyy-MM-dd"
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
      selected={this.state.born_date}
      onChange={this.onChangeDate}
    />
                </div>
              </div>

            <div class="flex justify-center mt-4 pl-4">
              <button
                class="bg-emerald-500 text-white active:bg--lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                <span>Registrar</span>
              </button>
            </div>

            {this.state.message && (
              <div >
                <div
                  className={
                    this.state.successful
                      ? "text-emerald-500 text-xs italic"
                      : "text-red-500 text-xs italic"
                  }
                  role="alert"
                >
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
