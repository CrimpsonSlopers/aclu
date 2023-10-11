import React from "react"

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';


export const Demands = ({ demandsAnchor }) => {
    return (
        <Box padding="96px" width="60%" marginBottom="96px" ref={demandsAnchor}>
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
                    marginBottom: "48px"
                }}
            >
                We will be attempting to open negotiations for a bargaining agreement with Atrioc but if he refuses to comply we are prepared to strike.  By joining this discord you are committing to do all that you can to aid the collective in achieving our goals.
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 900,
                    fontSize: "24px",
                    lineHeight: 1.75,
                }}
            >
                Our demands of Mr. Streamer (aka Atrioc)
            </Typography>
            <List
                sx={{
                    listStyleType: 'disc',
                    pl: 2,
                    fontSize: '18px',
                    fontWeight: 900,
                }}>
                <ListItem
                    sx={{
                        display: 'list-item',
                    }}>
                    ACLU gets to name 1 VIP per month (Potential VIPs must be ratified with a 2/3 majority)
                </ListItem>
                <ListItem
                    sx={{
                        display: 'list-item',
                    }}>
                    Guarantee to watch Season 5 of House
                </ListItem>
                <ListItem
                    sx={{
                        display: 'list-item',
                    }}>
                    ACLU is allowed 1 “Unban Forum” per fiscal quarter to free our wrongfully convicted comrades
                </ListItem>
                <ListItem
                    sx={{
                        display: 'list-item',
                    }}>
                    Popathon 2
                </ListItem>
                <ListItem
                    sx={{
                        display: 'list-item',
                    }}>
                    At least 2 EST friendly (and EU neutral) streams per month
                </ListItem>
            </List>
        </Box >

    )
}