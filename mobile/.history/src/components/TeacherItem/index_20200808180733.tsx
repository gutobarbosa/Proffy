import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './index';

function TeacherItem(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image 
            style={styles.avatar}
            source={{uri: 'https://avatars2.githubusercontent.com/u/46411054?s=460&u=c3f92c619bac6c318c07610c662d7fa846ea36bc&v=4'}}
            />
        <View style={styles.profileindo}>
            <Text style={styles.name}>Augusto Barbosa</Text>
        </View>
        </View>
        </View>
    )
}

export default TeacherItem;