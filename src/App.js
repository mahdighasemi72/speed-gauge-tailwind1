import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import GaugeChart from 'react-gauge-chart';

const App = () => {
    const [speed, setSpeed] = useState(0);

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setSpeed(value);
    };

    const gaugeStyle = {
        position: 'relative',
        width: '200px',
        height: '100px',
    };

    const gaugeBackgroundGradient = 'linear - gradient(180deg, rgba(203, 213, 224, 1) 0 %, rgba(160, 174, 192, 1) ${(speed / 220) * 100}%, transparent ${ Math.round((speed / 220) * 100) }%, transparent 100 %)';
return (
    <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Battery Gauge</h1>
        <div className="flex justify-center items-center">
            <div style={gaugeStyle}>
                <GaugeChart
                    id="speed-gauge"
                    nrOfLevels={220}
                    arcWidth={0.3}
                    percent={speed / 220}
                    textColor="#fff"
                    needleColor="rgba(240, 128, 128, 1)"
                    needleBaseColor="#8c8c8c"
                    colors={['rgba(0, 255, 0, .15)', 'rgba(255, 255, 0, .15)', 'rgba(255, 0, 0, .25)']}
                    hideText={true}
                    arcPadding={0}
                    style={{ background: gaugeBackgroundGradient }}
                />
            </div>
        </div>
        <input
            type="range"
            min="0"
            max="220"
            value={speed}
            onChange={handleChange}
            className="mt-4"
        />
        <p className="mt-2 text-center">Current Voltage: {speed} v</p>
    </div>
);
};

export default App;
