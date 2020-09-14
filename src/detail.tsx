import * as React from 'react';
import { styles } from './styles/styles';
import { View, Text, Button } from 'react-native';
export interface DetailProps {
    
}
 
const Detail: React.SFC<DetailProps> = () => {
    return (  
        <View style={styles.center}>
            <Text style={styles.title}>
                Detail Screen
            </Text>
            <Button title='View Botttom Tabs' onPress={() => {}}/>
            <Button title='View Top Tabs'
            onPress={() => {}}/>

        </View>
    );
}
 
export default Detail;