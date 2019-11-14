import React from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/validations';

export const LoginStruct = t.struct({
    email: formValidation.email,
    password: formValidation.password
});

export const LoginOptions = {
    auto: 'none',
    fields: {
        email:{
            placeholder: 'Escribe tu correo',
            error: 'Correo invalido'
        },
        password: {
            placeholder: 'Escribe tu contraseña',
            error: 'Contraseña invalida',
            password: true,
            secureTextEntry: true
        }
    }
}