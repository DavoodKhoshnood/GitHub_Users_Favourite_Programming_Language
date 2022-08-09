import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Box } from '@mui/material';

const Chart = ( { data, userName } ) => {
    const option = {
        heigth: 1800,
        text: `${userName}`,
        title: {
          left: "center",
          top: "center",
        },
        series: [
            {
                type: "sunburst",
                startAngle: 180,
                data: data.map((fav) => {
                  return {
                    value: fav.percent,
                    name: `${fav.language} ${fav.percent}%`,
                  };
                }),
                radius: ["20%", "100%"],
                label: {
                    position: 'inside',
                    silent: false,
                    fontWeight: '800',
                  },          },
            ],
      };
    return ( 
      <Box sx={{ minWidth: 1000 }}>
        <ReactEcharts sx={{ width: "80%" , p:6}} option={option} />
      </Box>
     );
}
 
export default Chart;