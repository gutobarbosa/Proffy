import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';

function PageHeader(){

    function handleGoBack(){

    }
    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBack}>
                <Image
            </BorderlessButton>
        </View>
    </View>
    )
}

export default PageHeader;