import { Text, View, Image, FlatList } from 'react-native';
import style from './style';


import NBB from '../NBB';
import Book_new_data from "../../json/book_new.json";


const NBL = (props) => {
    return (
        <View style={style.box}>
            <Text style={style.Heading1}>Newest</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Book_new_data}
                renderItem={({ item }) => <NBB book={item} navigation={props.navigation} />}
                keyExtractor={item => item.bookName}
            />
        </View>
    );
};

export default NBL;