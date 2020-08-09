import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';


function PageHeader(){

    function handleGoBack(){

    }
    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBack}>
                <Image source={}></Image>
            </BorderlessButton>
        </View>
    </View>
    )
}

export default PageHeader;