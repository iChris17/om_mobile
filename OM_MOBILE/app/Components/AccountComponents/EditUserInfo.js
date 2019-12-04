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
import AsyncStorage from '@react-native-community/async-storage';
export default class EditUserInfo extends Component {
  constructor() {
    super();
    this.state = {
      vlImage: '',
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
          this.showPhotoPicker()
        }
      });
    } else {
      request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
        // …
        console.log(result);
        if (result === 'granted') {
          this.showPhotoPicker()
        }
      });
    }
  };

  showPhotoPicker(){
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
        this.props.navigation.getParam('params').vlImage=response.data 
       this.setState({vlImage:response.data})
      }
    });
  }

  onPressConfirmEdit = async () => {
    //await AsyncStorage.removeItem('ReloadUser').catch(err=>{})
    this.props.navigation.navigate('Home');
  };

componentDidMount(){
  const user =  this.props.navigation.getParam('params')
    const vlImage=user.vlImage
    this.setState({vlImage})
}

  render() {
    const user =  this.props.navigation.getParam('params')
    const {vlImage} = this.state
    return (
      <ScrollView contentContainerStyle={styles.viewBody}>
        <View style={styles.avatarStyle}>
          <Avatar
            size="large"
            rounded
            source={{uri:`data:image/png;base64,${vlImage}`}}
            showEditButton
            imageProps={{resizeMode:"cover"}}
            onEditPress={() => {
              this.changeUserImage();
            }}
          />
        </View>
        <View>
          <Text style={styles.labelStyles}>Nombres</Text>
          <Input placeholder={user.firstname} />
          <Text style={styles.labelStyles}>Apellidos</Text>
          <Input placeholder={user.lastname}/>
          <Text style={styles.labelStyles}>Email</Text>
          <Input placeholder={user.email} />
          <Text style={styles.labelStyles}>Contraseña</Text>
          <Input placeholder="DIgita tu contraseña" />
          <Text style={styles.labelStyles}>Fecha de Nacimiento</Text>
          <Input placeholder="Fecha de Nacimiento" />
          <Text style={styles.labelStyles}>Sexo</Text>
          <Input placeholder="Sexo" />
          <Text style={styles.labelStyles}>Peso</Text>
          <Input placeholder="Peso" />
          <Text style={styles.labelStyles}>Grupo Sanguíneo</Text>
          <Input placeholder="Grupo Sanguíneo" />
          <Text style={styles.labelStyles}>Silla de ruedas</Text>
          <Input placeholder="Silla de ruedas" />
          <Text style={styles.labelStyles}>Enfermades Crónicas</Text>
          <Input placeholder="Enfermedades Crónicas" />
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
