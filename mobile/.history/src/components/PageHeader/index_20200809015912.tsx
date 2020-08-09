import React, { ReactNode } from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title,headerRight,children}) => {

const navigation = useNavigation();
//function PageHeader(){ quando utilizamos props na pagina ela deixa de virar uma funcao e vira uma arrow function

    function handleGoBack(){
        navigation.navigate('Landing');
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
        {headerRight}
        {children}
    </View>
    )
}

export default PageHeader;