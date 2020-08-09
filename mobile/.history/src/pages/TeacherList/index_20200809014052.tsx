import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
function TeacherList(){
    return( <View style={styles.container}>
     <PageHeader title='Proffys disponiveis'>
        <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
            style={styles.input}
            placeholder ="Qual a materia ?"
            />
            
            <View style = {styles.inputGroup}>
                <View style = {styles.inputBlock}>
                    <Text style={styles.label}> Dia da semana</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    />
                </View>
            </View>
        </View>
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