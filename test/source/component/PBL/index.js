import { Text, View, Image, FlatList } from 'react-native';
import style from './style';


import Book_block_popular from '../PBB';
import Book_popular_data from "../../json/book_popular.json"

const PBL = () => {
    return (
        <View style={style.box}>
            <Text style={style.Heading1}>Popular Books</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Book_popular_data}
                renderItem={({ item }) => <Book_block_popular book={item} />}
                keyExtractor={item => item.bookpic}
            />
        </View>
    );
};

export default PBL;