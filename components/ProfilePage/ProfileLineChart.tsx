'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Kabul Edenler',
        },
    },
};

export function ProfileLineChart({ calculatedConsumption }: any) {

    const extractDates = (data: any) => {
        const dates = data.map((item: any) => item.date);
        return dates;
    };

    const extractConsumptions = (data: any) => {
        const consumption = data.map((item: any) => item.consump);
        return consumption;
    };

    const labels = extractDates(calculatedConsumption);

    const consumptionNumbers = extractConsumptions(calculatedConsumption);

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
            < Line options={options} data={data} height={300} />
        </div>
    );
}
