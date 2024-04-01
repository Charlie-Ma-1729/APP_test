import { Text, View, Image } from 'react-native';
import style from './style';

const Starbar = (prop) => {
    var rank = prop.rank;
    var i = 0;
    var bar = [];
    for (i; i < 5; i++) {
        if (i < rank) {
            bar.push(<Image source={require("../../img/icon_star_filled.png")} />)
        } else {
            bar.push(<Image source={require("../../img/icon_star_empty.png")} />)
        }
    }
    return (
        <View style={style.bar_view}>
            {bar}
        </View>
    );
};

export default Starbar;