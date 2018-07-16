// Import a library to help create component
import React from 'react';
import { View } from 'react-native';


// Create a component
const CardSection = (props) => {
    return (
     <View style={styles.containerStyle}>
        {props.children}
     </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#8CCDF0',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

//Render it to the device
export default CardSection;
