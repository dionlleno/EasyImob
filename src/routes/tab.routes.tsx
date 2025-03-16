import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import ScreenAnotacao from "../screens/anotacao";
import ScreenCliente from "../screens/cliente";
import ScreenImovel from "../screens/imovel";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FAFAFA',
            tabBarActiveBackgroundColor: "#00A7F8",
            tabBarInactiveTintColor: '#00A7F8',
            tabBarInactiveBackgroundColor: "##DFEDF1",
            tabBarStyle: {
                borderTopColor: 'transparent',
                borderTopWidth: 0,

            },                                         
        }}>
            <Tab.Screen 
                name="Anotação"
                component={ScreenAnotacao}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="book" size={size} color={color} />
                    ),
                    tabBarLabel: 'Anotações',
                }}  />
            <Tab.Screen 
                name="Clientes" 
                component={ScreenCliente} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    tabBarLabel: 'Clientes',
                }} />
            <Tab.Screen 
                name="Imoveis"  
                component={ScreenImovel} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Imóveis',
                }} />
        </Tab.Navigator>
    );
};
