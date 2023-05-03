// import React from 'react';
// import Plot from 'react-plotly.js';

// const RadarGraph = ({ title = 'Radar Graph' }) => {
//     const data = [20, 30, 40, 50, 60, 70];
//     const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

//     const plotData = [
//         {
//             type: 'scatterpolar',
//             r: data,
//             theta: labels,
//             fill: 'toself',
//             name: title,
//         },
//     ];

//     const layout = {
//         title,
//         polar: {
//             radialaxis: {
//                 visible: true,
//                 range: [0, Math.max(...data)],
//             },
//         },
//         showlegend: false,
//     };

//     return (
//         <Plot
//             data={plotData}
//             layout={layout}
//             style={{ width: '100%', height: '100%' }}
//         />
//     );
// };

// export default RadarGraph;
