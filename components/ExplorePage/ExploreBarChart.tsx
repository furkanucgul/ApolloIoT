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
    },
};

export function ExploreBarChart({ values }: any) {

    const labels = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"];

    const data = {
        labels,
        datasets: [
            {
                label: 'Enerji Tüketimi',
                data: values,
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
