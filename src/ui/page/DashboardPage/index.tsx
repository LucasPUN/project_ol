import React from 'react';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Bar,
} from 'recharts';

interface IDashboardView {
    dashboard: any; // Adjust the type accordingly
    onDashboardItemClick: () => void; // Adjust the type accordingly
}

const DashboardView: React.FC<IDashboardView> = ({dashboard, onDashboardItemClick}) => {
    const data = [
        {name: 'NE Send', completed: 230, failed: 335, inprogress: 453},
        {name: 'NE Resend', completed: 335, failed: 330, inprogress: 345},
        {name: 'Miles Orchestrator', completed: 537, failed: 243, inprogress: 2110},
        {name: 'Commissions Payment Orch', completed: 132, failed: 328, inprogress: 540},
        {name: 'Business Integrators', completed: 530, failed: 145, inprogress: 335},
        {name: 'SmartTrack', completed: 538, failed: 312, inprogress: 110},
    ];

    const CustomizedLabel: React.FC<{ x: number, y: number, value: number, dataKey: string }> = ({
                                                                                                     x,
                                                                                                     y,
                                                                                                     value,
                                                                                                     dataKey
                                                                                                 }) => {
        const fullValue = value; //(value[1] - value[0]);
        return <text x={x - 20} y={y + 5} dy={0} fontSize='12' fill="#FFFFFF" fontWeight="Bold"
                     textAnchor="start">{fullValue}</text>;
    };

    return (
        <div className="content c-white">
            <h1>Dashboard</h1>
            <ResponsiveContainer height={250} width={'100%'}>
                <BarChart layout="vertical" data={data} margin={{left: 50, right: 50}} stackOffset="expand">
                    <XAxis hide type="number"/>
                    <YAxis type="category" dataKey="name" stroke="#dd7876" fontSize="12"/>
                    <Tooltip/>
                    <Bar dataKey="failed" fill="#dd7876" stackId="a" label={<CustomizedLabel/>}/>
                    <Bar dataKey="completed" fill="#82ba7f" stackId="a" label={<CustomizedLabel/>}/>
                    <Bar dataKey="inprogress" fill="#76a8dd" stackId="a" label={<CustomizedLabel/>}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardView;