import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import useForm from '../hooks/useForm';

export default function Users({ route }) {
  const { name, lastName } = route.params;

  const { userState, handleChange } = useForm(name, lastName);

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
});
