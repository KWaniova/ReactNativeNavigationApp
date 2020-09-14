import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../../styles/styles';

export interface Tab1Props {
    
}
 
const Tab1: React.SFC<Tab1Props> = () => {
    return ( 
        <View style={styles.center}>
            <Text style={styles.title}>
                Tab 1
            </Text>
        </View>
     );
}
 
export default Tab1;