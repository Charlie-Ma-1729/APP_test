import { Text, View, Image } from 'react-native';
import style from './style';


import popular_1 from "../../img/popular_1.png"
import popular_2 from "../../img/popular_2.png"
import popular_3 from "../../img/popular_3.png"

popular_picArr = [popular_1, popular_2, popular_3]

const Book_block_popular = (props) => {
    let book = props.book
    return (
        <View style={style.box}>
            <Image style={style.picture}
                source={popular_picArr[book.bookid]} />
            <Text style={style.heading2}>{book.bookName}</Text>
            <Text style={style.body2}>{book.bookAuthor}</Text>
        </View>
    );
};

export default Book_block_popular;