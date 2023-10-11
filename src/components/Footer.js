import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

import MoooEmote from "../assets/mooo_emote.png"
import BrandPlusCopyright from "../assets/brand_plus_copyright.png"

export const Footer = () => {
    return (
        <Box
            paddingx={3}
            paddingY={8}
            sx={{
                backgroundColor: "#FFFFFF"
            }}>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <img src={MoooEmote} alt="Mooo" height="112" width="112" />
                <Typography
                    sx={{
                        fontSize: "64px",
                        fontWeight: 900
                    }}
                >
                    “KEEP ON MOOING”
                </Typography>
                <img src={BrandPlusCopyright} alt="Brand" height="111" width="171" />
            </Stack>
        </Box>
    )
}