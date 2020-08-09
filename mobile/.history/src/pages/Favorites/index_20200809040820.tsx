import React, { useState } from 'react';
import {View,Text,ScrollView} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem,{Teacher} from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites(){
    const [favorites,setFavorites] = useState([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) =>{
                    return  teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }
    return( <View style={styles.container}>
        <PageHeader title='Meus Proffys favoritos'/>

        <ScrollView
     style={styles.teacherList}
     contentContainerStyle={{
         paddingHorizontal:16,
         paddingBottom: 16,
     }}
     >
       
  
     </ScrollView>
       </View>
       )
}

export default Favorites;