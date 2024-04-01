import { PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { IconButton, Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import Content from '../component/Content';
import BottomTab from '../component/BottomTab';

import Book_new_data from "../json/book_new.json";




const Book = ({ navigation, route }) => {
    const [iconpic, setIconpic] = useState('bookmark-outline');
    const [iconColor, setIconColor] = useState('black');
    const handlePress = () => {
        if (iconpic == 'bookmark-outline') {
            setIconpic('bookmark');
            setIconColor('purple');
        }
        else {
            setIconpic('bookmark-outline');
            setIconColor('black');
        }
    };
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar />
                <Appbar style={styles.fix} mode="center-aligned">
                    <IconButton icon="less-than" size={40} onPress={() => navigation.navigate('home')} />
                    <IconButton icon={iconpic} iconColor={iconColor} size={40} onPress={handlePress} />
                </Appbar>
                <ScrollView>
                    <Content good={Book_new_data[route.params.id]} />
                </ScrollView>
                <BottomTab />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fix: {
        justifyContent: "space-between",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 999,
    },
});

export default Book;