import React, { useRef } from "react";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";


import { useAudio } from "./hooks/useAudio";

import { DiscordButton } from "./components/DiscordButton";
import { Footer } from "./components/Footer";
import { Demands } from "./components/Demands";
import { NavBar } from "./components/NavBar";

import Logo from ".//assets/logo.png";
import MoooAudio from "./assets/mooo_audio.wav";

function App() {
    const demandsAnchor = useRef(null);
    const [playing, toggle] = useAudio(MoooAudio);

    const handleNavClick = () => {
        demandsAnchor.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Box
            width="100%"
            sx={{
                backgroundImage: Logo,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% 0%",
            }}
        >
            <CssBaseline />
            <NavBar handleNavClick={handleNavClick} toggle={toggle} />
            <Box padding="96px" width="60%">
                <Stack direction="column" spacing={4}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            fontWeight: 900,
                            fontSize: "64px",
                            lineHeight: 1.25,
                            marginBottom: "32px"
                        }}
                    >
                        Defend the rights of all chatters globally
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            fontSize: "18px",
                            lineHeight: 1.75,
                        }}
                    >
                        Atrioc Chat Labor Union's goal is simple. Criminal justice, chatter's right to message freely, chatter's right to vote - these are crucial issues, and we're standing up for our freedoms against a corrupt streamer. Join today and fuel our fight back in Twitch chat, Discord channels, and YouTube comment sections.
                    </Typography>
                    <Box>
                        <DiscordButton dark={false} toggle={toggle} />
                    </Box>
                </Stack>
            </Box>
            <Demands demandsAnchor={demandsAnchor} />
            <Footer />
        </Box>
    );
}

export default App;