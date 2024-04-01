//普通宣告
import { Pressable, Text, View, Image } from 'react-native';
//react-native-paper提供的物件
import { IconButton } from 'react-native-paper';
import style from './style';

const DrawerItem = ({ navigation }) => {
    return (
        <View style={style.box}>
            <Pressable style={style.box_buttom} onPress={() => navigation.navigate("Home")}>
                <IconButton icon={"home"} size={24} />
                <Text style={style.Body1}>Home</Text>
            </Pressable>
            <Pressable style={style.box_buttom}>
                <IconButton icon={"account-circle"} size={24} />
                <Text style={style.Body1}>Account</Text>
            </Pressable>
            <Pressable style={style.box_buttom}>
                <IconButton icon={"cog"} size={24} />
                <Text style={style.Body1}>Setting</Text>
            </Pressable>
        </View>
    );
}

export default DrawerItem;