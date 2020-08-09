import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps{
    teacher: Teacher;
    favorited: boolean;
}



const TeacherItem: React.FC <TeacherItemProps> = ({teacher}) =>{
    function handleLinkToWhatsapp(){

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }
    
    
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image 
            style={styles.avatar}
            source={{uri: teacher.avatar}}
            />
        <View style={styles.profileInfo}>
            <Text style={styles.name}>{teacher.name}</Text>
            <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
        </View>

        <Text style={styles.bio}>
          {teacher.bio}
        </Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>{teacher.cost}</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton,styles.favorited]}>
                    {/*<Image source ={heartOutLineIcon}></Image>*/}
                    <Image source ={unfavoriteIcon}></Image>
                </RectButton>
                <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    <Image source ={whatsappIcon}></Image>
                    <Text style={styles.contactButtonText}>
                        Entrar em contato
                    </Text>
                </RectButton>
            </View>
        </View>
        </View>
    )
}

export default TeacherItem;