import React, { Component } from 'react'
import logo from './logo.svg';
import FormInput from './FormInput'
import './Form.css'
import {  Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
class Form extends Component {
    constructor() {
        super();
        this.state = {
         
            isCorrect: false,
            url:""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        
        let usuario = this.refs.usuario.getValue();
        let email = this.refs.email.getValue();
        let comentario = this.refs.comentario.getValue();
        let telefono = this.refs.telefono.getValue();
        
        if (usuario !== "" && email !== "" && comentario !== "" && telefono !== "" ) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Datos Registrados Correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            this.setState({ isCorrect: true,url:"/formresult/" + usuario +"/" + email +"/" +comentario +"/" + telefono});
           
        }else {
            this.setState({ isCorrect: false});
          }
    }
    render() {
        return (
            <div className="Form">
                 {this.state.isCorrect ?
          <Redirect to={this.state.url}/>
          :
                <div className="Form-form">
                    
                    <div className="caja"  >
                <form onSubmit={ this.onSubmit } >
                    <h3 className="Form-title">Ingrese sus datos para el registro</h3>
                   
                    <FormInput
                        inputType="text"
                        ref="email"                      
                        isRequired={true}
                        inputClass="fa fa-envelope fa-lg fa-fw"  />
                    <br></br>
                    <FormInput
                        inputType="text"
                        ref="telefono"
                       
                        isRequired={true}
                        inputClass="fa fa-phone fa-lg fa-fw" />
                    <br></br>
                    <FormInput
                        inputType="text"
                        ref="usuario"
                        inputClass="fa fa-user fa-lg fa-fw"
                        isRequired={true} />
                    <br></br>
                   
                    <FormInput
                        inputType="text"
                        ref="comentario"
                        inputClass="fa fa-comments fa-lg fa-fw"
                        isRequired={true} />
                    <br></br>
                   
                    
                    <button   color="primary" className="button"   type="onSubmit">
                        Enviar
</button >


                    <label className="Form-labelLegend">{this.state.labelLegend}</label>

                </form>
                </div>
                <div className="caja">
<img src={logo} className="App-logo" alt="logo" />
</div>
                </div>
 }
            </div>

        );
    }
}

export default Form;
