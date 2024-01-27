'use client'
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import dayjs, { Dayjs } from 'dayjs';

interface AddEnergyProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AddEnergy = ({ open, setOpen }: AddEnergyProps) => {
    const [date, setDate] = useState<string | null>(dates[0])
    const [consumption, setConsumption] = useState(100)
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)

        try {
            const res = await fetch('/api/consumption', {
                method: 'POST',
                body: JSON.stringify({
                    date,
                    consump: consumption
                })
            })
            handleClose();
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>
                <div className='flex justify-between'>
                    <h2>
                        Yeni Enerji Gir
                    </h2>
                    <button
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </button>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className='text-center'>
                    Lütfen sayaçtaki son veriyi, tarihiyle birlikte giriniz.
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row gap-5 py-24  justify-center'>
                        <TextField
                            id="outlined-number"
                            label="Tüketim"
                            type="number"
                            fullWidth
                            required
                            value={consumption}
                            onChange={(e) => setConsumption(parseInt(e.target.value))}
                            InputProps={{
                                inputProps: { min: 200 }
                            }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={dates}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Tarih" required />}
                            value={date}
                            onChange={(event: any, newValue: string | null) => {
                                setDate(newValue);
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center gap-y-4 relative z-[1]">
                        <button
                            type='submit'
                            className='bg-gradient-to-r from-blue-800 to-blue-500 px-7 py-4 rounded-md text-white font-semibold'
                        >
                            Kaydet
                        </button>
                    </div>
                </form>

            </DialogContent>
        </Dialog>
    )
}

const dates = [
    "01.04.2023",
    "02.04.2023",
    "03.04.2023",
    "04.04.2023",
    "05.04.2023",
    "06.04.2023",
    "07.04.2023",
    "08.04.2023",
    "09.04.2023",
    "10.04.2023",
    "11.04.2023",
    "12.04.2023",
    "13.04.2023",
    "14.04.2023",
    "15.04.2023",
    "16.04.2023",
    "17.04.2023",
    "18.04.2023",
    "19.04.2023",
    "20.04.2023",
    "21.04.2023",
    "22.04.2023",
    "23.04.2023",
    "24.04.2023",
    "25.04.2023",
    "26.04.2023",
    "27.04.2023",
    "28.04.2023",
    "29.04.2023",
    "30.04.2023",
    "31.04.2023",
];

export default AddEnergy