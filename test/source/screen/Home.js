import { PaperProvider } from 'react-native-paper';
import { IconButton, Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import NBL from '../component/NBL';
import PBL from '../component/PBL'
import BottomTab from '../component/BottomTab';

const Home = ({ navigation }) => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar />
                <Appbar style={styles.fix} mode="center-aligned">
                    <IconButton icon="menu" size={40} onPress={navigation.openDrawer} />
                    <IconButton icon="magnify" size={40} />
                </Appbar>
                <ScrollView contentContainerStyle={styles.content}>
                    <PBL />
                    <NBL navigation={navigation} />
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
    content: {
        top: 56,
        paddingBottom: 150
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

export default Home;