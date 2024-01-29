'use client'
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
import { CircularProgress } from '@mui/material';

interface AddEnergyProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    isSubmitted: boolean;
    setIsSubmitted: (isSubmitted: boolean) => void;
}

const AddEnergy = ({ open, setOpen, isSubmitted, setIsSubmitted }: AddEnergyProps) => {
    const [consumptionInfos, setConsumptionInfos] = useState<any>([])
    const [consumption, setConsumption] = useState(100)
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession();

    const lastConsumption = consumptionInfos[consumptionInfos.length - 1];

    const minConsumption = consumptionInfos.length > 0 ? lastConsumption.consump : 100

    const findIndexAndMap = (target: any) => {
        const index = dates.indexOf(target);

        if (index !== -1) {

            // Hedefin bulunduğu indeksten sonraki öğeleri map et
            const afterTarget = dates.slice(index + 1);

            const mappedResult = afterTarget.map(item => {
                // Burada özel işlemleri gerçekleştirebilirsiniz
                return item.toUpperCase(); // Örneğin: Öğeleri büyük harfe çevir
            });

            return mappedResult;
        } else {
            // Hedef değeri bulunamadı
            console.log(`"${target}" bulunamadı.`);
            return [];
        }
    };

    const minDate = consumptionInfos.length > 0 ? findIndexAndMap(lastConsumption.date) : dates

    const [date, setDate] = useState<string | null>("")

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)

        try {
            const res = await fetch('/api/consumption/new', {
                method: 'POST',
                body: JSON.stringify({
                    date,
                    consump: consumption,
                    difference: consumption - consumptionInfos[consumptionInfos.length - 1].consump,
                    userID: session?.user?.id
                })
            })
            handleClose();
            setIsSubmitted(!isSubmitted)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            ConsumptionInfo()
        }
    }

    const calculateTotalConsumption = () => {
        return consumptionInfos.reduce((total, currentItem, index) => {
            // İlk eleman olduğunda direk değeri kullan
            if (index === 0) {
                return total + currentItem.consump;
            } else {
                // Diğer elemanlarda bir önceki elemandan çıkar
                const previousConsump = consumptionInfos[index - 1].consump;
                return total + (currentItem.consump - previousConsump);
            }
        }, 0);
    };

    const ConsumptionInfo = async () => {
        const res = await fetch(`/api/consumption/${session?.user?.id}`)
        const data = await res.json();

        setConsumptionInfos(data)
    }

    useEffect(() => {
        ConsumptionInfo()
    }, [session])

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
                                inputProps: { min: minConsumption + 1 }
                            }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={minDate}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Tarih" required />}
                            onChange={(event: any, newValue: string | null) => {
                                setDate(newValue);
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center gap-y-4 relative z-[1]">
                        <button
                            disabled={loading}
                            type='submit'
                            className='bg-gradient-to-r from-blue-800 to-blue-500 px-7 py-4 rounded-md text-white font-semibold flex items-center gap-2'
                        >
                            {loading && (
                                <CircularProgress color='warning' size={30} />
                            )}
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