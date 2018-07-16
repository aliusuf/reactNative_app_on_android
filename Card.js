//import a library to help create component
import React from 'react';
import { View } from 'react-native';

// Create a component
const Card = (props) => {
    return (
        <View style={styles.containerStyle}> 
            {props.children}
        </View>
    );
};
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

// Render it to the device
export default Card;
