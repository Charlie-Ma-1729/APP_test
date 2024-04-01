import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import style from './style';



const BottomNavigationBar = () => {
    //bottom navigation bar的元素宣告
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home' },
        { key: 'wishlist', title: 'Wishlist', focusedIcon: 'bookmark' },
        { key: 'my books', title: 'My books', focusedIcon: 'book-open' },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: () => <Text>hme</Text>,
        wishlist: () => <Text>wishlist</Text>,
        "my books": () => <Text>my book</Text>,
    });
    return (
        < BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            style={style.box} />

    );
}

export default BottomNavigationBar;