import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 85, physics: 72, chemistry: 90 },
        { id: 2, name: "Bob", math: 73, physics: 68, chemistry: 78 },
        { id: 3, name: "Charlie", math: 92, physics: 81, chemistry: 85 },
        { id: 4, name: "David", math: 65, physics: 77, chemistry: 72 },
        { id: 5, name: "Emily", math: 88, physics: 83, chemistry: 91 },
        { id: 6, name: "Frank", math: 70, physics: 75, chemistry: 68 },
        { id: 7, name: "Grace", math: 79, physics: 90, chemistry: 83 },
        { id: 8, name: "Hannah", math: 81, physics: 84, chemistry: 77 },
        { id: 9, name: "Isaac", math: 94, physics: 92, chemistry: 89 },
        { id: 10, name: "Jane", math: 87, physics: 79, chemistry: 85 }
      ];
      
    return (
        <div>
            <LineChart width={1000}
            height={300}
            data={studentMarks}
            >
                <Line dataKey='physics'></Line>
                <Line stroke='#8884d8' dataKey='math'></Line>
             <XAxis dataKey='name'/>
             <YAxis></YAxis>
             <Tooltip/>
            </LineChart>
        </div>
    );
};

export default DashBoard;