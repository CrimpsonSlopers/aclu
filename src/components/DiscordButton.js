import React from "react";

import Button from "@mui/material/Button";

import DiscordDark from "../assets/discord_dark.png";
import DiscordLight from "../assets/discord_light.png";

export const DiscordButton = ({ dark, toggle }) => {
    return (
        <Button
            style={{
                backgroundColor: dark ? "#2B2B2B" : '#FFFFFF',
                display: "flex",
                borderRadius: '3px',
                padding: '10px 30px',
                boxShadow: 'none',
                fontWeight: 900,
                fontSize: '18px',
                color: dark ? "#FFFFFF" : '#2B2B2B',
            }}
            variant="contained"
            onClick={toggle}
        >
            <img src={dark ? DiscordLight : DiscordDark} alt="discord" width="34" height="25" style={{ marginRight: 12 }} />
            join now
        </Button>
    )
}