import React, { Component } from 'react';
import { StyleSheet, 
        View, 
        AsyncStorage, 
        Dimensions, 
        Text, 
        ActivityIndicator, 
        StatusBar } from 'react-native';
import { Button, Image, Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import t from 'tcomb-form-native';
import { LoginStruct, LoginOptions } from '../forms/Login';

const Form = t.form.Form;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions,
            invalid: false,
            logOut:false
        }
    }

    _signInAsync = async () => {

        const validate = this.refs.loginForm.getValue();
        if(validate) {
            this.setState({invalid: false});
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } else {
            this.setState({invalid: true});
        }
    };

    logout(){
        this.setState({logOut:true})
    }

    componentWillMount(){
        console.log('LOGIN')
    }

    render() {
        const { loginStruct, loginOptions, invalid } = this.state;

        return (
            // <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null} enabled>
                <View style={styles.container}>
                    <StatusBar translucent={true} backgroundColor={'transparent'} />
                    <View style={styles.loginBg}>
                        <SvgXml style={styles.svgShadow} width="100%" height="100%" xml={markerRendering} preserveAspectRatio="none"/>
                    </View>
                    <View style={styles.loginHeader}>
                        <Image resizeMode={'stretch'} style={styles.loginImg} source={require('../../assets/logo.png')} PlaceholderContent={<ActivityIndicator/>}/>
                        <Text style={styles.loginText}>INICIO DE SESIÓN</Text>
                    </View>
                    <View style={styles.loginForm}>
                        { invalid ? (
                            <Text style={styles.textForm}>USUARIO O CONTRASEÑA INVALIDOS</Text>
                        ) : (
                            null
                        )}
                        <Form 
                            ref="loginForm"
                            type= {loginStruct}
                            options={loginOptions}
                        />
                        <Button buttonStyle={styles.button} title="INICIAR DE SESIÓN" onPress={this._signInAsync} />
                    </View>
                    <View style={styles.loginFooter}>
                        <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
                            {(Platform.OS === "ios") ? (
                                <Button
                                    icon={
                                        <Icon
                                            name='apple'
                                            type='font-awesome'
                                            size={60}
                                            color='#1B4079'
                                        />
                                    }
                                    buttonStyle={styles.buttonFooter}
                                />
                            ) : (
                                <Button
                                    icon={
                                        <Icon
                                            name='google'
                                            type='font-awesome'
                                            size={60}
                                            color='#1B4079'
                                        />
                                    }
                                    buttonStyle={styles.buttonFooter}
                                />
                            )}
                        </View>
                        <Button
                            title="¿Olvidó su contraseña?"
                            type="clear"
                            style={{position: 'absolute', marginTop: 0}}
                        />
                    </View>
                </View>
            // </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height
    },
    loginBg: {
        position: 'absolute',
        top: -10,
        flex: 1,
        alignItems: 'center',
        width: width + 100,
        height: height * 0.67
    },
    loginHeader: {
        alignItems: 'center',
        paddingTop: 40,
        width: width,
        height: height * 0.4,
    },
    loginText:{
        marginTop: 40,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 3,
    },
    loginImg: {
        width: (width * 0.4),
        height: (height * 0.2)
    },
    loginForm: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height * 0.4,
        paddingTop: 20
    },
    textForm: {
        top: 10,
        color: '#e80000',
        fontSize: 12,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 3
    },
    button: {
        backgroundColor: '#86BBD8',
        height: 50,
        width: (width * 0.5),
        borderRadius: 60,
        margin: 10
    },
    loginFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height * 0.2,
        paddingTop: 10,
    },
    buttonFooter: {
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10
    },
    buttonFooterIcon: {
        width: 70,
        height: 70
    }
});

const markerRendering = 
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1580" height="1965" viewBox="0 0 1580 1965">
    <defs>
        <linearGradient id="linear-gradient" x1="0.888" y1="0.078" x2="0.12" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#1b4079"/>
            <stop offset="1" stop-color="#86bbd8"/>
        </linearGradient>
        <filter id="Trazado_1" x="0" y="0" width="1580" height="1965" filterUnits="userSpaceOnUse">
            <feOffset dy="5" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="7.5" result="blur"/>
            <feFlood/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Trazado_1)">
        <path id="Trazado_1-2" data-name="Trazado 1" d="M-158.428,1832.939s1301.68,36.107,1535-680.018V-86.758h-1535Z" transform="translate(180.93 104.26)" fill="url(#linear-gradient)"/>
    </g>
</svg>`;