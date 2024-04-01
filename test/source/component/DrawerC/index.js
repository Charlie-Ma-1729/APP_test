import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
//普通宣告
import { TouchableOpacity, Text, View, Image } from "react-native";
//react-native-paper提供的物件
import { IconButton } from "react-native-paper";
import style from "./style";
import Avatar from "../../../assets/img/avatar.jpg";
//引入自己的物件
import DrawerItem from "../DrawerItem";

const DrawerC = ({ navigation, state, descriptors }) => {
  return (
    <DrawerContentScrollView
      navigation={navigation}
      state={state}
      descriptors={descriptors}
    >
      <View style={style.costomer_box}>
        <Image style={style.Image} source = {Avatar} />  
        <Text style={style.Heading1}>May</Text>
      </View>
      <DrawerItem
        navigation={navigation}
        state={state}
        descriptors={descriptors}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerC;
