// import React,{Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'
// import {Login,Signup} from '../screens'
// import { AsyncStorage } from 'react-native';
// import {AuthContext} from '../screens/contexts/AuthContext';
// import CustomDrawer from './CustomDrawer'
// import Liberarylogin from '../src/screens/Auth/Liberarylogin';
// import Liberarylogorsing from '../src/screens/Auth/Liberarylogorsing';
// import Liberarysignup from '../src/screens/Auth/Liberarysignup';

// const Stack=createStackNavigator()




// const Navigation =()=> {


//     const [state, dispatch] = React.useReducer(
//         (prevState, action) => {
//           switch (action.type) {
//             case 'RESTORE_TOKEN':
//               return {
//                 ...prevState,
//                 isSignout:action.token
               
//               };
//             case 'SIGN_IN':
//               return {
//                 ...prevState,
//                 isSignout: false,
                
//               };
//             case 'SIGN_OUT':
//               return {
//                 ...prevState,
//                 isSignout: true,
                
//               };
//           }
//         },
//         {
          
//           isSignout: false,
//         }
//       );


//       React.useEffect(() => {
//         // Fetch the token from storage then navigate to our appropriate place
//         const bootstrapAsync = async () => {
//           let userToken;
    
//           try {
//             userToken = await AsyncStorage.getItem('userToken');
//           } catch (e) {
//             // Restoring token failed
//           }
    
//           // After restoring token, we may need to validate it in production apps
    
//           // This will switch to the App screen or Auth screen and this loading
//           // screen will be unmounted and thrown away.
//           dispatch({ type: 'RESTORE_TOKEN', token: true });
//         };
    
//         bootstrapAsync();
//       }, []);



//       const authContext = React.useMemo(
//         () => ({
//           signIn: async (data) => {

//             dispatch({ type: 'SIGN_IN'});
//           },
//           signOut: () => dispatch({ type: 'SIGN_OUT' }),
     
//         }),
//         []
//       );
    
    
//         return ( 
//             <>
      
//       <NavigationContainer>
//       <AuthContext.Provider value={authContext}>

//             <Stack.Navigator
//             screenOptions={{
//                 headerShown:false,
//                 cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
//                 animationEnabled:true
                
//             }}
//             >
//                 {
//                     state.isSignout?(
//                         <>
//                         <Stack.Screen name='Login' component={Login} />


//                         <Stack.Screen name='Signup' component={Signup} />
//                         </>
//                     ):(
//                     <>
//                         <Stack.Screen name='MainApp' component={CustomDrawer} />

//                 </>

//                 )
//                 }


            

//             </Stack.Navigator>
//     </AuthContext.Provider>


//            </NavigationContainer>
    
            
            
//             </>




//         //     <Authcontext.Provider value={authContext}>
               

//         //  </AuthContext.Provider>         

//         )



          
    
// }
 
// export default Navigation;
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import {
  LiberaryBuy,
  LiberaryBuySure,
  LiberaryDetails,
  LiberaryDetails2,
  LiberaryMain,
  LiberarySplash,
  Liberaryabout,
  Liberarylogin,
  Liberarylogorsing,
  Liberarysignup,
  SettingsScreen,
  EditProfileScreen,
  ChangePassword,
  MapPage,
  LiberaryBooks,
  PDFExample
} from '../src/screens/index'
import { Login } from '../screens';
import { AsyncStorage } from 'react-native';
import { AuthContext } from '../screens/contexts/AuthContext';
import CustomDrawer from './CustomDrawer'

const Stack = createStackNavigator()




const Navigation = () => {


  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isSignout: action.token

          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,

          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,

          };
      }
    },
    {

      isSignout: false,
    }
  );


  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: true });
    };

    bootstrapAsync();
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {

        dispatch({ type: 'SIGN_IN' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),

    }),
    []
  );


  return (
    <>

      <NavigationContainer>
        <AuthContext.Provider value={authContext}>

          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              animationEnabled: true

            }}
          >
           
                  <Stack.Screen name='LiberarySplash' component={LiberarySplash} />

                  <Stack.Screen name='Liberarylogorsing' component={Liberarylogorsing} />
                 
                  <Stack.Screen name='Liberarylogin' component={Liberarylogin} />
               
                  <Stack.Screen name='Liberarysignup' component={Liberarysignup} />

                  <Stack.Screen name='LiberaryBuySure' component={LiberaryBuySure} />
                
                  <Stack.Screen name='LiberaryBuy' component={LiberaryBuy} />

                  <Stack.Screen name='LiberaryDetails' component={LiberaryDetails} />

                  <Stack.Screen name='LiberaryBooks' component={LiberaryBooks} />

                  <Stack.Screen name='LiberaryDetails2' component={LiberaryDetails2} />

                  <Stack.Screen name='SettingsScreen' component={SettingsScreen} />

                  <Stack.Screen name='PDFExample' component={PDFExample} />

                  <Stack.Screen name='LiberaryMain' component={LiberaryMain} />

                  <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />

                  <Stack.Screen name='ChangePassword' component={ChangePassword} />
                  <Stack.Screen name='MapPage' component={MapPage} />

                  <Stack.Screen name='MainApp' component={CustomDrawer} />

                  




          </Stack.Navigator>
        </AuthContext.Provider>


      </NavigationContainer>



    </>




    //     <Authcontext.Provider value={authContext}>


    //  </AuthContext.Provider>         

  )





}

export default Navigation;