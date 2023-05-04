import { StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import { ListItem, Icon, Button } from '@rneui/themed';
import data from '../data.json';

export default function Users({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    data.map(({ name, lastName }, ix) => (
                        <ListItem
                            key={ix}
                            Component={TouchableHighlight}
                            onPress={() => navigation.navigate('Users', { name, lastName })}
                            leftWidth={80}
                            rightWidth={90}
                            minSlideWidth={40}
                            rightContent={(action) => (
                                <Button
                                    containerStyle={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        backgroundColor: '#f4f4f4',
                                    }}
                                    type="clear"
                                    icon={{ name: 'edit' }}

                                />
                            )}
                        >
                            <Icon name="person" type="material" />
                            <ListItem.Content>
                                <ListItem.Title>{name}</ListItem.Title>
                                <ListItem.Subtitle>{lastName}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }
            </ScrollView>
            <Button
                title="Go to Jane's profile"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7%',
        marginBottom: '10%'
    },
    scrollView: {
        width: '100%'
    }
});
