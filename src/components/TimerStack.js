import * as React from 'react';
import Stack from '@mui/material/Stack';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Button from '@mui/material/Button';

const buttonStyle = {color: '#c4d4f5'}
const TimerStack = () => {
    return (
        <Stack direction="column" alignItems="center" spacing={1}>
            <Button sx={buttonStyle} variant="outlined" startIcon={<HourglassBottomIcon />}>
               60 Minutes
            </Button>
            <Button sx={buttonStyle} variant="outlined" startIcon={<HourglassBottomIcon />}>
                30 Minutes
            </Button>
            <Button sx={buttonStyle} variant="outlined" startIcon={<HourglassBottomIcon />}>
                10 Minutes
            </Button>
        </Stack>
    );
}

export default TimerStack;