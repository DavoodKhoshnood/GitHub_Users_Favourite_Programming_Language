import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Box } from '@mui/material';

const Chart = ( { data, userName } ) => {
    const option = {
        autoSize: false,
        heigth: 500,
        text: `${userName}`,
        title: {
          left: "center",
          top: "center",
        },
        series: [
            {
                type: "sunburst",
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
        <>
        <Box sx={{ width: "100%" }}>
          <ReactEcharts sx={{ width: "100%" }} option={option} />
        </Box>
        </>
     );
}
 
export default Chart;