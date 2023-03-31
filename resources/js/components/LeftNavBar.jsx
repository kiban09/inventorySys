import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Styles from "../../css/Components.module.css";
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import AddBoxIcon from '@mui/icons-material/AddBox';



export default function () {
    return (
        <Box className = {Styles.Box}>
            <Stack spacing={1} marginTop = "80px">
                <Button className = {Styles.Btn} sx = {{color :"white"}} startIcon={<InventoryIcon />}>Inventory</Button>
                <Button className = {Styles.Btn} sx = {{color :"white"}} startIcon={<PersonIcon />}>View Users</Button>
                <Button className = {Styles.Btn} sx = {{color :"white"}} startIcon={<AddBoxIcon />}>Add Item</Button>
            </Stack> 
        </Box>   
    );
}