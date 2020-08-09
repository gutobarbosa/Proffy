import React from 'react';
import { View,Image } from 'react-native';
import styles from './index';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}/>
            <Image />

        </View>
    )
}

export default TeacherItem;