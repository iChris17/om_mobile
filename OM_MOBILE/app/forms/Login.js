import React from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/validations';
import _ from 'lodash';

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.backgroundColor = 'rgba(255, 255, 255, 0.8)';
stylesheet.textbox.normal.borderRadius = 60;
stylesheet.textbox.normal.height = 50;
stylesheet.textbox.normal.width = 300;
stylesheet.textbox.normal.paddingLeft = 20;
stylesheet.textbox.normal.margin = 10;
stylesheet.textbox.normal.borderWidth = 3;

stylesheet.textbox.error.backgroundColor = 'rgba(255, 255, 255, 0.8)';
stylesheet.textbox.error.borderColor = '#e80000';
stylesheet.textbox.error.borderRadius = 60;
stylesheet.textbox.error.height = 50;
stylesheet.textbox.error.width = 300;
stylesheet.textbox.error.paddingLeft = 20;
stylesheet.textbox.error.margin = 10;
stylesheet.textbox.normal.borderWidth = 3;

export const LoginStruct = t.struct({
    email: formValidation.email,
    password: formValidation.password
});

export const LoginOptions = {
    auto: 'none',
    fields: {
        email:{
            placeholder: 'Escribe tu Usuario',
            stylesheet: stylesheet
        },
        password: {
            placeholder: 'Escribe tu contraseña',
            password: true,
            secureTextEntry: true,
            stylesheet: stylesheet
        }
    }
}