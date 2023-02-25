import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'red' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '100px', width: '60vw', marginLeft: '200px' }}>
            <Grid container spacing={5}>
                <Grid item xs={6} md={8}>
                    <Item>sai</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>sid</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>Rohit</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>Akash</Item>
                </Grid>
            </Grid>
        </Box>
    );
}