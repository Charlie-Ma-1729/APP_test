import { Text, View } from 'react-native';
import style from './style';

const Ratebar = (prop) => {
    var rank = prop.rank;
    var bar = ` ${rank}.0`
    return (
        <View style={style.bar_view}>
            <Text style={style.body1}>
                {bar}
                <Text style={style.body1_grey}>/5.0</Text>
            </Text>
        </View>
    );
};

export default Ratebar;