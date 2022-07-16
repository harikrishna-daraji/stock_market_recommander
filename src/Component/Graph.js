import React from "react";
import Plot from 'react-plotly.js';


function Graph({ data }) {
    return <Plot data={ data } layout={{width: 720, height: 440}} />
}

export default Graph;