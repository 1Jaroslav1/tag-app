import React from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

export function ItemList({list, selectedIndex, handleListItemClick}) {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <FixedSizeList
                height={1000}
                width={360}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
            >
                {
                    ({index, style}) => (
                        <ListItem style={style} key={index} component="div" disablePadding>
                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(event, index)}
                            >
                                <ListItemText primary={list[index]} />
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </FixedSizeList>
        </Box>
      );
}
