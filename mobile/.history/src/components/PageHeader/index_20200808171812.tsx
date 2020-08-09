import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {


//function PageHeader(){ quando utilizamos props na pagina ela deixa de virar uma funcao e vira uma arrow function

    function handleGoBack(){

    }
    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBack}>
                <Image source={backIcon} resizeMode="contain"></Image>
            </BorderlessButton>
            <Image source={logoImg} resizeMode='contain' />
        </View>

        <Text style={styles.title}>
            {title}
        </Text>
    </View>
    )
}

export default PageHeader;