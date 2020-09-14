import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../../styles/styles';

 
const Screen2: React.SFC = () => {
    return ( 
        <View style={styles.center}>
            <Text style={styles.title}>
                Favorites
            </Text>
        </View>
     );
}
 
export default Screen2;