import React ,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import Start from '../../Components/Authentication/Start'
import Login from '../../Components/Authentication/Login'
import Register from '../../Components/Authentication/Register'
import ForgetPass from '../../Components/Authentication/ForgetPass'
import ListCourses from '../../Components/Courses/ListCourses'
import CoureseDetail from '../../Components/CoursesDetail/CoureseDetail'
import Profile from '../../Components/Account Management/Profile'
import Sum from '../../Components/Main/Sum'
import Videoplayer from '../../Components/Others/Videoplayer'
import TeachProfile from '../../Components/Account Management/TeachProfile'
import Splashscreen from '../../Components/Others/Splashscreen'
import VerifyPassword from '../../Components/Authentication/VerifyPassword'
import Setting from '../../Components/Account Management/Setting'
import ListAuthors from '../../Components/ListAuthors/ListAuthors' 

const Stack = createStackNavigator();

class Screen extends Component {
  
  render()
  {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={
          {
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            ...TransitionSpecs.TransitionIOSSpec
          }
        }
        headerMode='screen'
        >
          <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}}/>
          <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgetPass" component={ForgetPass} />
          <Stack.Screen name="ListCourses" component={ListCourses} />
          <Stack.Screen name="CoureseDetail" component={CoureseDetail} />
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Videoplayer" component={Videoplayer}/>
          <Stack.Screen name="TeachProfile" component={TeachProfile}/>
          <Stack.Screen name="VerifyPassword" component={VerifyPassword}/>
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="ListAuthors" component={ListAuthors}/>
          <Stack.Screen name="Sum" component={Sum} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Screen;