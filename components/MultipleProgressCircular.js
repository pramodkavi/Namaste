import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
export default function MultipleProgressCircular (){
    const [value, setValue] = useState(0);
    const props = {
        activeStrokeWidth: 15,
        inActiveStrokeWidth: 15,
        inActiveStrokeOpacity: 0.2

    };
    return(
        <CircularProgressBase
            {...props}
            value={80}
            duration={2000}
            radius={50}
            activeStrokeColor={'#FF6031'}
            inActiveStrokeColor={'#FF6031'}
        >
            <CircularProgressBase
                {...props}
                value={87}
                duration={2000}
                radius={35}
                activeStrokeColor={'#69D3FF'}
                inActiveStrokeColor={'#69D3FF'}
            >
                <CircularProgressBase
                    {...props}
                    duration={2000}
                    value={62}
                    radius={20}
                    activeStrokeColor={'#6DAC69'}
                    inActiveStrokeColor={'#6DAC69'}
                />
            </CircularProgressBase>
        </CircularProgressBase>
    )
}