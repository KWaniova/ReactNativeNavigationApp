import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../../styles/styles';

 
const Screen1: React.SFC = () => {
    return ( 
        <View style={styles.center}>
            <Text style={styles.title}>
                Contacts
            </Text>
        </View>
     );
}
 
export default Screen1;