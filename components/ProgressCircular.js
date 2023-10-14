import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
export default function ProgressCircular (){
    const [value, setValue] = useState(0);
    return(
        // <CircularProgress
        //     radius={100}
        //     value={value}
        //     textColor='#222'
        //     fontSize={16}
        //     valueSuffix={'%'}
        //     activeStrokeColor={'#8C7FE5'}
        //     inActiveStrokeOpacity={0.2}
        //     duration={4000}
        // />
    <CircularProgress
        value={2.5}
        radius={90}
        duration={2000}
        progressValueColor={'#8C7FE5'}
        maxValue={5}
        textColor='#222'
        activeStrokeColor={'#8C7FE5'}
        title={'hours'}
        titleColor={'#8C7FE5'}
        titleStyle={{fontWeight: 'bold'}}
        inActiveStrokeOpacity={0.2}
    />
    )
}