import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Room1 from "../SidePages/Room1";


const Stack = createNativeStackNavigator();
const Stacks = () => {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name = "Room1"
                    component={Room1} 
                />
            </Stack.Navigator>
    )
}

export default  Stacks 
