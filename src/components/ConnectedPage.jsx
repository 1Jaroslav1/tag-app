import React, { useState } from 'react'
import data from "../data/data.json"
import {ItemList} from "./ItemList"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {ConnectedEditItems} from "./ConnectedEditItems";

const titles = Object.keys(data);

export function ConnectedPage() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedData, setSelectedData] = useState(data[titles[0]]);

    const handleListItemClick = (
        event,
        index,
    ) => {
        setSelectedIndex(index);
        setSelectedData(data[titles[index]]);
    };

    console.log(titles);
    return (
        <Box display="flex" flexDirection="row">
            <ItemList list={titles} selectedIndex={selectedIndex} handleListItemClick={handleListItemClick}/>
            <ConnectedEditItems title={titles[selectedIndex]} data={selectedData} />
        </Box>
    )
}
