'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Fullscreen } from '@mui/icons-material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,

    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Enerji Tüketimi',
        },
    },
};

export function ProfileBarChart({ consumptionData }: any) {

    const extractDates = (data: any) => {
        const dates = data.map((item: any) => item.date);
        return dates;
    };

    const extractConsumptions = (data: any) => {
        const consumption = data.map((item: any) => item.consump);
        return consumption;
    };

    const labels = extractDates(consumptionData);

    const consumptionNumbers = extractConsumptions(consumptionData);

    const data = {
        labels,
        datasets: [
            {
                label: 'Enerji Tüketimi',
                data: consumptionNumbers,
                backgroundColor: '#5e86cc',
            }
        ],
    };

    return (
        <div className='flex w-full justify-center max-h-[300px] lg:max-h-[500px]'>
            <Bar options={options} data={data} height={300} />
        </div>
    );
}
