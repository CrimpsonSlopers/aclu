import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DiscordButton } from "./DiscordButton";

import Brand from "../assets/brand.png"

export const NavBar = ({ handleNavClick, toggle }) => {
    return (
        <Box padding="48px 96px">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <img src={Brand} alt="Brand" height="46" width="130" />
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={8}
                >
                    <Box onClick={handleNavClick} sx={{
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: '18px',
                                color: '#FFF',
                                textTransform: "uppercase"
                            }}
                        >
                            Demands
                        </Typography>
                    </Box>
                    <DiscordButton dark={true} toggle={toggle} />
                </Stack>
            </Stack>
        </Box >
    )
}