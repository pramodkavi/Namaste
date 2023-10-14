import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StartScreen } from "../screens/StartScreen";
import { BabyScreen } from "../screens/BabyScreen";
import { Reminders } from '../screens/Reminders';
import { ReminderDetails } from '../screens/ReminderDetails';
import { RemindersList } from '../screens/RemindersList';
import React from 'react';
import { GrowthDetailsScreen } from "../screens/GrowthDetailsScreen";
import GrowhtManageScreen from "../screens/GrowthDetailsScreens/GrowhtManageScreen";
import GrowthChartScreen from "../screens/GrowthDetailsScreens/GrowthChartScreen";
import {CommunityScreen} from "../screens/CommunityScreen";
import {themeColors} from "../theme";
import {CalendarDaysIcon, HomeIcon} from "react-native-heroicons/outline";
import {StyleSheet, View} from "react-native";
import MilestonesScreen from "../screens/MilestonesScreen";
import MilestonesListScreen from "../screens/MilestonesScreens/MilestonesListScreen";
import MilestoneManageScreen from "../screens/MilestonesScreens/MilestoneManageScreen";
import {DigitalWellbeingScreen} from "../screens/DigitalWellbeingScreen";
import {ParentAppStatusScreen} from "../screens/ParentAppStatusScreen";
import {RelaxingScreen} from "../screens/RelaxingScreen";
import {DoneActivityScreen} from "../screens/DoneActivityScreen";
import {RecommendActivityScreen} from "../screens/RecommendActivityScreen";
import {HealthScreen} from "../screens/HealthScreen";


const BottomTabs = createBottomTabNavigator();

function AppOverview() {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{height:50,position:"absolute",bottom:-2,borderTopRightRadius:20,borderTopLeftRadius:20}}} >

            <Stack.Screen name="Baby" component={BabyScreen}
                          options={{
                              tabBarLabel: 'Home',
                              tabBarIcon: ({focused}) => (
                                  <View className={"rounded-full p-2"} style={{backgroundColor:focused? themeColors.colorDark:"white"}}>
                                      {focused? <HomeIcon size="22" color="white" />: <HomeIcon size="22" color="gray" />}
                                  </View>
                              ),
                          }} />

            <Stack.Screen name="Community" component={CommunityScreen} options={{
                tabBarLabel: 'Community',
                tabBarIcon: ({focused}) => (
                    <View className={"rounded-full p-2"} style={{backgroundColor:focused? themeColors.colorDark:"white"}}>
                        {focused? <CalendarDaysIcon size="27" color="white" />: <CalendarDaysIcon size="27" color="gray" />}
                    </View>
                ),}}/>
        </BottomTabs.Navigator>
    );
}

const Stack = createNativeStackNavigator();
export function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Start" component={StartScreen} />
                {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
                <Stack.Screen name="AppOverview" component={AppOverview} />
                <Stack.Screen name="DigitalWellbeing" component={DigitalWellbeingScreen} />
                <Stack.Screen name="ParentAppStatus" component={ParentAppStatusScreen} />
                <Stack.Screen name="Relaxing" component={RelaxingScreen} />
                <Stack.Screen name="DoneActivity" component={DoneActivityScreen} />
                <Stack.Screen name="RecommendActivity" component={RecommendActivityScreen} />
                <Stack.Screen name="Health" component={HealthScreen} />


                <Stack.Screen name="RemindersList" component={RemindersList}/>
                <Stack.Screen name="Reminders" component={Reminders}/>
                <Stack.Screen name="ReminderDetails" component={ReminderDetails}/>
                {/* Growth feature screens */}
                <Stack.Screen name="GrowthDetails" component={GrowthDetailsScreen} />
                <Stack.Screen name="GrowhtManage" component={GrowhtManageScreen} />
                <Stack.Screen name="GrowthChart" component={GrowthChartScreen} />
                {/* Growth feature screens */}
                <Stack.Screen name="Milestones" component={MilestonesScreen} />
                <Stack.Screen name="MilestonesList" component={MilestonesListScreen} />
                <Stack.Screen name="MilestoneManage" component={MilestoneManageScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}
