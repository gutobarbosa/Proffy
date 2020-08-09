import React, { useState } from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';


function TeacherList(){

    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime] = useState('');


    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setIsFilterVisible(!isFiltersVisible);
    }


    return( <View style={styles.container}>
     <PageHeader 
     title='Proffys disponiveis'
     headerRight ={(
       <BorderlessButton onPress={handleToggleFiltersVisible}>
           <Feather name="filter" size={20} color="#FFF" />
       </BorderlessButton>
        
        
        )}
     
     >
        {isFiltersVisible && (<View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                style={styles.input}
                value={subject}
                onChangeText ={text => setSubject(text)}
                placeholder ="Qual a materia ?"
                placeholderTextColor="#c1bccc"
                />
                
                <View style = {styles.inputGroup}>
                    <View style = {styles.inputBlock}>
                        <Text style={styles.label}> Dia da semana</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"
                        />
                    </View>

                    <View style = {styles.inputBlock}>
                        <Text style={styles.label}> Horário</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Qual o horario?"
                        placeholderTextColor="#c1bccc"
                        />
                </View>
            </View>
            <RectButton style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
        </View>
        )}
     </PageHeader>
     <ScrollView
     style={styles.teacherList}
     contentContainerStyle={{
         paddingHorizontal:16,
         paddingBottom: 16,
     }}
     >
       
         <TeacherItem/>
         <TeacherItem/>
         <TeacherItem/>
         <TeacherItem/>
         <TeacherItem/>
     </ScrollView>
    </View>
    )
}

export default TeacherList;