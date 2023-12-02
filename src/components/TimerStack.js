import * as React from 'react';
import Stack from '@mui/material/Stack';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Button from '@mui/material/Button';

const buttonStyle = { color: '#c4d4f5' };

const handleButtonClick = async (periodInMinutes) => {
    await chrome.runtime.sendMessage({ periodInMinutes });
    window.close();
};

const TimerStack = () => (
    <Stack direction="column" alignItems="center" spacing={1}>
        <Button
            onClick={() => {
                handleButtonClick(60);
            }}
            sx={buttonStyle}
            variant="outlined"
            startIcon={<HourglassBottomIcon />}
        >
            60 Minutes
        </Button>
        <Button
            onClick={() => {
                handleButtonClick(30);
            }}
            sx={buttonStyle}
            variant="outlined"
            startIcon={<HourglassBottomIcon />}
        >
            30 Minutes
        </Button>
        <Button
            onClick={() => {
                handleButtonClick(10);
            }}
            sx={buttonStyle}
            variant="outlined"
            startIcon={<HourglassBottomIcon />}
        >
            10 Minutes
        </Button>
    </Stack>
);

export default TimerStack;
