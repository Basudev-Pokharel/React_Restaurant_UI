import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import AddCallIcon from '@mui/icons-material/AddCall';

const Contact = () => {
    return (
        <Box sx={{ width: "90%", mx: "auto", my: 2 }}>
            <Typography variant="h4" color="initial" textAlign={"left"} fontWeight={"bold"}>Contact Us, For Good food</Typography>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quis labore, praesentium accusantium voluptas quibusdam blanditiis perspiciatis, repudiandae error explicabo atque rerum, quidem minima. Neque quisquam aut obcaecati vitae animi tempora rem et cumque quidem ex vel nobis ullam aliquam veniam numquam sint quaerat, placeat libero alias quibusdam nihil minus fuga. Eos maiores vitae beatae quidem officiis maxime porro, est nisi ab consequatur corrupti nihil dolorum voluptas fugit. Dolore consequuntur voluptatum molestiae ea quas.</p>
            <Box >
                <TableContainer sx={{ mt: 2, maxWidth: "600px" }}>
                    <Table sx={{
                        '& tbody tr td': {
                            display: "flex",
                            justifyContent: "left",
                            alignItems: 'center',
                            gap: '10px',
                        },
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: "white" }}>
                                    Contact us
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "goldenrod" }} /> 0418937249 - Customer Service
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MarkunreadIcon sx={{ color: "aqua" }} /> someone@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <AddCallIcon sx={{ color: "green" }} /> 4875689473
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Contact