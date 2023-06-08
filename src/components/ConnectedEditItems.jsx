import React, { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {EditItem} from "./EditItem";
// import {writeJsonFile} from 'write-json-file';

export function ConnectedEditItems({title, data}) {
    const [fieldTitlesValue, setFieldTitlesValue] = useState(Object.keys(data));
    const [fieldBodyValue, setFieldBodyValue] = useState(Object.values(data));
    const [selectedOptions, setSelectedOptions] = useState([...Array(Object.keys(data).length)].map(() => ""));

    useEffect(() => {
        setFieldTitlesValue(Object.keys(data));
        setFieldBodyValue(Object.values(data));
        setSelectedOptions([...Array(Object.keys(data).length)].map(() => ""));
    }, [data])

    const handleTitleChange = useCallback((index, value) => {
        const updatedValues = [...fieldTitlesValue];
        updatedValues[index] = value;
        setFieldTitlesValue(updatedValues);
    }, [fieldTitlesValue])

    const handleBodyChange = useCallback((index, value) => {
        const updatedValues = [...fieldBodyValue];
        updatedValues[index] = value;
        setFieldBodyValue(updatedValues);
    }, [fieldBodyValue])

    const handleOptionsChanges = useCallback((index, value) => {
        const updatedValues = [...selectedOptions];
        updatedValues[index] = value;
        setSelectedOptions(updatedValues);
    }, [selectedOptions])

    const onSubmit = useCallback(async () => {
        console.log(fieldTitlesValue, fieldBodyValue, selectedOptions)

        let subObject = {};

        selectedOptions.forEach((item, i) => {
            subObject[item] = {
                title: fieldTitlesValue[i],
                text: fieldBodyValue[i]
            };
        });

        const data = {
            [title]: subObject
        };
        let saved = {};

        if(localStorage.getItem("data")) {
            saved = JSON.parse(localStorage.getItem("data"));
        }
    
        saved[title] = data[title]

        localStorage.setItem('data', JSON.stringify(saved));

    }, [fieldTitlesValue, fieldBodyValue, selectedOptions]);

    return (
        <>
            <Box
                display="flex"
                padding="30px"
                flexDirection="column"
                width="600px"
                overflow="scroll"
                maxHeight="1000px"
            >
                {
                    Object.keys(data).map((title, index) => {
                        return (
                            <EditItem 
                                key={index}
                                index={index}
                                fieldTitlesValue={fieldTitlesValue}
                                handleTitleChange={handleTitleChange}
                                fieldBodyValue={fieldBodyValue}
                                handleBodyChanges={handleBodyChange}
                                selectedOptions={selectedOptions}
                                handleOptionsChanges={handleOptionsChanges}
                            />
                        )
                    })
                }
            </Box>
            <Box padding="30px"><Button variant="contained" onClick={onSubmit}>Save</Button></Box>
        </>
      );
}
