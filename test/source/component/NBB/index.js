import { Text, View, Image, Pressable } from 'react-native';
import Starbar from '../Starbar';
import style from './style';


import newest_1 from "../../img/newest_1.png"
import newest_2 from "../../img/newest_2.png"
import newest_3 from "../../img/newest_3.png"

new_picArr = [newest_1, newest_2, newest_3]

const Book_block_new = (porps) => {
    let book = porps.book;
    let navigation = porps.navigation;
    return (
        <Pressable onPress={() => navigation.navigate('book', {
            id: book.bookid
        })}>
            <View style={style.box}>
                <Image style={style.pic} source={new_picArr[book.bookid]} />
                <Starbar rank={book.rank} />
                <Text style={style.heading2}>{book.bookName}</Text>
                <Text style={style.body2}>{book.bookAuthor}</Text>
            </View>
        </Pressable>
    );
}

export default Book_block_new;