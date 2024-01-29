'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress } from '@mui/material';

interface Column {
    id: 'date' | 'consump';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'date', label: 'Tarih', minWidth: 170 },
    { id: 'consump', label: 'Tüketim', minWidth: 100 },
];

export default function ProfileTable({ consumptionData, setConsumptionData }: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [loading, setLoading] = React.useState(false)
    const [reversedConsumption, setReversedConsumption] = React.useState([])

    React.useEffect(() => {
        const reversed: any = [...consumptionData].reverse()
        setReversedConsumption(reversed)
    }, [consumptionData])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleDelete = async () => {
        setLoading(true)
        try {
            await fetch(`/api/consumption/${consumptionData[consumptionData.length - 1]._id}`, {
                method: "DELETE"
            })

            setReversedConsumption(
                reversedConsumption.filter((c) => c._id != consumptionData[consumptionData.length - 1]._id)
            )

            setConsumptionData(
                consumptionData.filter((c: any) => c._id != consumptionData[consumptionData.length - 1]._id)
            )

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440, position: 'relative' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {reversedConsumption
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={reversedConsumption.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <button
                disabled={loading}
                onClick={handleDelete}
                className='absolute right-5 py-3'
            >
                {loading ? (
                    <CircularProgress size={25} />
                ) : (
                    <DeleteIcon color='error' />
                )}
            </button>
        </Paper>
    );
}