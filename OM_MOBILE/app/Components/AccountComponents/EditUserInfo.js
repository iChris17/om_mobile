import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {Component} from 'react';
import {Avatar, Input, Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import axios from 'axios';
import {StackActions, NavigationActions} from 'react-navigation';
export default class EditUserInfo extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  changeUserImage = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permiso',
          message: 'One Medical necesita acceder a tus fotos',
          buttonNeutral: 'Preguntar Mas Tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      ).then(result => {
        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          this.showPhotoPicker();
        }
      });
    } else {
      request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
        // …
        console.log(result);
        if (result === 'granted') {
          this.showPhotoPicker();
        }
      });
    }
  };

  showPhotoPicker() {
    let options = {
      title: 'Seleccionar Foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      takePhotoButtonTitle: 'Tomar Foto',
      chooseFromLibraryButtonTitle: 'Escoger de la librería',
      cancelButtonTitle: 'Cancelar',
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.navigation.getParam('params').vlImage = response.data;
        this.setState(state => ({
          user: {
            ...state.user,
            vlImage: response.data,
          },
        }));
      }
    });
  }

  onPressConfirmEdit = async () => {
    const {user} = this.state;
    axios
      .put('http://192.168.1.21:57033/api/pacients/' + user.email + '', user)
      .then(e => {
        /* this.props.navigation.state.params.onSelect(true);
      this.props.navigation.goBack();*/
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Home'})],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    const user = this.props.navigation.getParam('params');
    this.setState({user});
    // const onselect = this.props.navigation.state.params
    //console.log(onselect)
  }

  handleOnChange = (e, name) => {
    let value = e.nativeEvent.text;
    const names = name;
    if (name === 'age' || name === 'vlWeight' || name == 'vlHeight') {
      if (value === '' || value === null) {
        value = "";
        
      } else {
        value = Number(value);
      }
    }
    this.setState({
      user: {
        ...this.state.user,
        [names]: value,
      },
    });
  };

  render() {
    const {user} = this.state;
    return (
      <ScrollView contentContainerStyle={styles.viewBody}>
        <View style={styles.avatarStyle}>
          <Avatar
            size="large"
            rounded
            source={{uri: `data:image/png;base64,${user.vlImage}`}}
            showEditButton
            imageProps={{resizeMode: 'cover'}}
            onEditPress={() => {
              this.changeUserImage();
            }}
          />
        </View>
        <View>
          <Text style={styles.labelStyles}>Nombres</Text>
          <Input
            value={user.firstname}
            onChange={(e, name = 'firstname') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Apellidos</Text>
          <Input
            value={user.lastname}
            onChange={(e, name = 'lastname') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Email</Text>
          <Input
            placeholder="Digíta tu email"
            value={user.email}
            onChange={(e, name = 'email') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Contraseña</Text>
          <Input
            placeholder="Digita tu contraseña"
            value={user.vlPassword}
            onChange={(e, name = 'vlPassword') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Fecha de Nacimiento</Text>
          <Input
            placeholder="Fecha de Nacimiento"
            value={user.vlBirthdate}
            onChange={(e, name = 'vlBirthdate') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Edad</Text>
          <Input
            placeholder="Edad"
            value={String(user.age)}
            onChange={(e, name = 'age') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Sexo</Text>
          <Input
            placeholder="Sexo"
            value={user.gender}
            onChange={(e, name = 'gender') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Peso</Text>
          <Input
            placeholder="Peso"
            value={String(user.vlWeight)}
            onChange={(e, name = 'vlWeight') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Grupo Sanguíneo</Text>
          <Input
            placeholder="Grupo Sanguíneo"
            value={user.tpBlood}
            onChange={(e, name = 'tpBlood') => {
              this.handleOnChange(e, name);
            }}
          />
          <Text style={styles.labelStyles}>Silla de ruedas</Text>
          <Input
            placeholder="Silla de ruedas"
            value={user.inDiscapacity}
            onChange={(e, name = 'inDiscapacity') => {
              this.handleOnChange(e, name);
            }}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Actualizar Información"
              buttonStyle={styles.ConfirmButton}
              onPress={() => {
                this.onPressConfirmEdit();
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  avatarStyle: {
    marginBottom: 20,
    alignItems: 'center',
  },
  labelStyles: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 0,
  },
  ConfirmButton: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#e58586',
    borderRadius: 10,
    height: 50,
    width: 250,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
