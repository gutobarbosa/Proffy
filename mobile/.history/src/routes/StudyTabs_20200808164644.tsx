import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs(){
    return(
      <Navigator
        tabBarOptions={{
          style:{
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },

        }}
      >
          <Screen name="TeacherList" component={TeacherList} />
          <Screen name="Favorites" component={Favorites} />
      </Navigator>  
    )
}

export default StudyTabs;