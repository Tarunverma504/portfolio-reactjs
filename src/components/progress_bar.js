import React,{useEffect} from "react";
import ProgressBar from 'react-animated-progress-bar';

function Progress_bar(props){
    return(
        <>
        <ProgressBar width="300" trackWidth="13" percentage={props.percentage}
        defColor={{
            fair: '#0bceaf',
            good: '#0bceaf',
            excellent: '#0bceaf',
            poor: 'red',
          }} />
           {/* <ProgressBar style={{backgroundColor:"transparent"}}
        max-width="400px"
        min-width="30px"
        height="12px"
        rect
        fontColor="gray"
        percentage={props.percentage}
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="red"
        trackBorderColor="grey"
        defColor={{
            fair: '#0bceaf',
            good: '#0bceaf',
            excellent: '#0bceaf',
            poor: 'red',
          }}
      /> */}
        </>
    )
}

export default Progress_bar;