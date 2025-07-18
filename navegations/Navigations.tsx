import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import GeneraScreen from '../screens/GeneraScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegistrScreens from '../screens/RegistrScreens';
import HistorialPedidoscreens from '../screens/HistorialPedidoscreens';
import MensajesScreen from '../screens/MensajesScreen';
import DetallesAppScreens from '../screens/DetallesAppScreens';
import PerfilScreens from '../screens/PerfilScreens';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registrarse" component={RegistrScreens}/>
        {/* Drawer a la siguiente navegación */}
      <Stack.Screen name="Empezar" component={MyDrawer} />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Generar' component={GeneraScreen}/>
      <Drawer.Screen name='Perfil' component={PerfilScreens}/>
      <Drawer.Screen name='Mensajes' component={MensajesScreen}/>
      <Drawer.Screen name='Historial de pedidos' component={HistorialPedidoscreens}/>
      <Drawer.Screen name='A cerca de' component={DetallesAppScreens}/>
    </Drawer.Navigator>
  );
}

export default function Navigations() {
    return(
        <NavigationContainer>
            <MyStack/> 
        </NavigationContainer>
    )
}