import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import ScreenNotes from "../screens/notes";
import ScreenCustomer from "../screens/customer";
import ScreenProperty from "../screens/property";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#FAFAFA',
                width: '100%',
                height: 60,
                borderBottomWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
            },
            headerTitleStyle: {
                color: '#00A7F8',
                fontSize: 18,
                fontWeight: 'bold',
            },
            headerTintColor: '#00A7F8',
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
                component={ScreenNotes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="book" size={size} color={color} />
                    ),
                    tabBarLabel: 'Anotações',
                }}  />
            <Tab.Screen 
                name="Clientes" 
                component={ScreenCustomer} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    tabBarLabel: 'Clientes',
                }} />
            <Tab.Screen 
                name="Imoveis"  
                component={ScreenProperty} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Imóveis',
                }} />
        </Tab.Navigator>
    );
};
