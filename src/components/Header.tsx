import React, {FC} from "react";
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';


interface Header {
    title: String;
}

const HeaderClass: FC<Header> = props => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"white"}/>
            <Text style={styles.textStyle}>
                {props.title}
            </Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 18
    }
});

export default HeaderClass;