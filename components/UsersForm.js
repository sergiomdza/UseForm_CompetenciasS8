import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import { Icon, Button } from '@rneui/themed';
import useForm from '../hooks/useForm';
import postUsuario from '../backend/postUsuario';
import deleteUsuario from '../backend/deleteUsuario';

export default function Users({ route, navigation }) {
  const { name, lastName, id, postForm } = route.params;

  const { userState, handleChange } = useForm(name, lastName, id);

  const mandarUsuario = () => {
    const { name, lastName, id } = userState;
    postUsuario({ name, lastName, id })
    navigation.goBack()
  };

  const borrarUsuario = () => {
    const { id } = userState;
    deleteUsuario({ id })
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TextInput
        key={'name'}
        style={styles.input}
        onChangeText={(value) => handleChange("name", value)}
        value={userState.name}
      />
      <TextInput
        key={'lastname'}
        style={styles.input}
        onChangeText={(value) => handleChange("lastName", value)}
        value={userState.lastName}
      />

      {
        postForm == true ? (
          <View style={styles.buttonGroup}>
            <Button onPress={mandarUsuario} style={styles.button} radius={'sm'} type="solid">
              Save
              <Icon name="save" color="white" />
            </Button>
          </View>
        ) : (
          <View style={styles.buttonGroup}>
            <Button onPress={mandarUsuario} style={styles.button} radius={'sm'} type="solid">
              Save
              <Icon name="save" color="white" />
            </Button>

            <Button onPress={borrarUsuario} style={styles.button} radius={'sm'} type="solid">
              Delete
              <Icon name="delete" color="white" />
            </Button>
          </View>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  buttonGroup: {
    marginTop: 75
  },
  button: {
    margin: 10
  }
});
