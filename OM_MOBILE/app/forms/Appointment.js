import React from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/validations';
import _ from 'lodash';

export const CitaStruct = t.struct({
    date: t.Date
});


export const CitaOptions = {
    auto: 'none',
    fields: {
        date:{
            mode: 'datetime'
        }
    }
}
