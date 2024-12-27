import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../home/HomeScreen';
import { ProfileScreen } from '../profile/ProfileScreen';
import { SettingsScreen } from '../settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  

return (
<Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
);
};