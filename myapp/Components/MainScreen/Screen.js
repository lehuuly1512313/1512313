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
import ListAuthors from '../../Components/Authors/ListAuthors'
import Listvideochannel from '../../Components/Videos/Listvideochannel'
import Listauthorschannel from '../../Components/Authors/Listauthorschannel'
import Listcourseschannel from '../../Components/Courses/Listcourseschannel'
import Listcoursesfavorite from '../../Components/Courses/Listcoursesfavorite'
import Subscription from '../../Components/Others/Subscription'
import Contact from '../../Components/Others/Contact'
import ChangePassword from '../../Components/Authentication/ChangePassword'
import ChangeInfo from '../../Components/Account Management/ChangeInfo'
import ChangeUserEmail from '../../Components/Account Management/ChangeUserEmail'
import ListCoursesNews from '../../Components/Courses/ListCoursesNews'
import ListCoursesRates from '../../Components/Courses/ListCoursesRates'
import Downloadfile from '../../Components//Others/Downloadfile'
import PlayVideoDownload from '../../Components/Others/PlayVideoDownload'
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
          <Stack.Screen name="ListCoursesNews" component={ListCoursesNews} />
          <Stack.Screen name="ListCoursesRates" component={ListCoursesRates} />
          <Stack.Screen name="Listcoursesfavorite" component={Listcoursesfavorite} />
          <Stack.Screen name="CoureseDetail" component={CoureseDetail} />
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Videoplayer" component={Videoplayer}/>
          <Stack.Screen name="TeachProfile" component={TeachProfile}/>
          <Stack.Screen name="VerifyPassword" component={VerifyPassword}/>
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="ListAuthors" component={ListAuthors}/>
          <Stack.Screen name="Listvideochannel" component={Listvideochannel}/>
          <Stack.Screen name="Listauthorschannel" component={Listauthorschannel}/>
          <Stack.Screen name="Listcourseschannel" component={Listcourseschannel}/>
          <Stack.Screen name="Subscription" component={Subscription}/>
          <Stack.Screen name="Contact" component={Contact}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword}/>
          <Stack.Screen name="ChangeInfo" component={ChangeInfo}/>
          <Stack.Screen name="ChangeUserEmail" component={ChangeUserEmail}/>
          <Stack.Screen name="Downloadfile" component={Downloadfile}/>
          <Stack.Screen name="PlayVideoDownload" component={PlayVideoDownload}/>
          <Stack.Screen name="Sum" component={Sum} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Screen;