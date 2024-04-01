import { Text, View, Image, Button, ScrollView } from 'react-native';
import style from './style';


import Starbar from '../Starbar';
import Ratebar from '../Ratebar';


import newest_1 from "../../img/newest_1.png"
import newest_2 from "../../img/newest_2.png"
import newest_3 from "../../img/newest_3.png"

new_picArr = [newest_1, newest_2, newest_3]

const Content = (porps) => {
    let good = porps.good;
    return (
        <View style={style.page}>
            <Image source={new_picArr[good.bookid]} style={style.picture} />
            <View style={style.mainbox}>
                <Text style={style.heading1}>{good.bookName}</Text>
                <Text style={style.body1}>{good.bookAuthor} </Text>
                <View style={style.rating}>
                    <Starbar rank={good.rank} />
                    <Ratebar rank={good.rank} />
                </View>
                <Text style={style.body1}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
            </View>
            <Button title="Buy Now for $46.99" />
        </View>
    );
}

export default Content;