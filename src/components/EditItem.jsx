import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const options = [
    "about",
    "symptoms",
    "causes",
    "treating",
    "preventing",
    "diagnosing",
    "complications",
    "testing",
    "livingWith",
    "characteristics",
    "facts",
    "help"
];

export function EditItem({index, fieldTitlesValue, handleTitleChange, fieldBodyValue, handleBodyChanges, selectedOptions, handleOptionsChanges}) {
    return (
        <Box
            display="flex"
            padding="10px 0"
            flexDirection="column"
            gap="10px"
        >
            <TextField
                select
                label="Select"
                value={selectedOptions[index]}
                onChange={(e) => handleOptionsChanges(index, e.target.value)}
            >
                {
                    options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Title"
                multiline
                value={fieldTitlesValue[index]}
                onChange={(e) => handleTitleChange(index, e.target.value)}
            />
            <TextField
                label="Body"
                multiline
                value={fieldBodyValue[index]}
                onChange={(e) => handleBodyChanges(index, e.target.value)}
            />
        </Box>
      );
}
