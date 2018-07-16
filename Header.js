// Import a library to help create component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return ( 
    <View style={viewStyle}>    
     <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#3B82A8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 0.1,
//Shadow properties
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 30
    }

};

// Render it to the device
export default Header;
