import { useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableHighlight } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { ListItem, Icon, Button } from '@rneui/themed';
import data from '../data.json';

import useGetData from '../backend/getUsuarios2';

export default function Users({ navigation }) {
    const isFocused = useIsFocused();
    const { users, getData } = useGetData()

    useEffect(() => {
        if (isFocused) {
            getData()
        }
    }, [isFocused])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    (users || data).map(({ name, lastName, id }, ix) => (
                        <ListItem
                            key={ix}
                            Component={TouchableHighlight}
                            onPress={() => navigation.navigate('Users', { name, lastName,id })}
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
                title="Agregar Usuario"
                onPress={() => navigation.navigate('Users', { postForm: true })}
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
