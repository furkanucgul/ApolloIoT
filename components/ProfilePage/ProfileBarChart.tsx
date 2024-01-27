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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Enerji Tüketimi',
            data: [250, 300, 350, 250, 399, 259],
            backgroundColor: '#5e86cc',
        }
    ],
};

export function ProfileBarChart() {
    return (
        <div className='flex w-full justify-center max-h-[300px] lg:max-h-[500px]'>
            <Bar options={options} data={data} height={300} />
        </div>
    );
}
