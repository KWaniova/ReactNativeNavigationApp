import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../../styles/styles';

 
const Screen3: React.SFC = () => {
    return ( 
        <View style={styles.center}>
            <Text style={styles.title}>
                Settings
            </Text>
        </View>
     );
}
 
export default Screen3;