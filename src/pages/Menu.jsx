import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { MenuList } from '../data/data'

const Menu = () => {
    return (
        <Box sx={{ width: '90%', margin: 'auto', display: "flex", justifyContent: 'center', alignItems: "center", flexWrap: "Wrap", gap: 2, my: 2 }}>
            {MenuList.map((menu, idx) => {
                return <Card sx={{
                    maxWidth: "390px",
                    minHeight: '500px',
                    display: 'flex',
                    '& button img': {
                        width: "500px",
                        objectFit: "cover"
                    },
                }} key={idx}>
                    <CardActionArea>
                        <CardMedia title={menu.name} image={menu.image} component={"img"} sx={{ height: '400px', minWidth: '250px', maxWidth: "500px" }} />
                        <CardContent sx={{ padding: 3 }}>
                            <Typography variant="h5" color="initial" gutterBottom>{menu.name}</Typography>
                            <Typography variant="body2" color="initial">{menu.description}</Typography>
                            <Typography variant="button" gutterBottom sx={{ display: 'block' }} color="initial">{menu.price}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })}
        </Box>
    )
}

export default Menu