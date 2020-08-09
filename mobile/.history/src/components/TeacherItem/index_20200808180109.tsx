import React from 'react';
import { View, Image } from 'react-native';
import styles from './index';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}/>
            <Image 
            style={styles.avatar},
            source={{uri}}
            />

        </View>
    )
}

export default TeacherItem;