import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const CreditsPage = () =>{

    return (
        <Grid container direction="column">
            <Grid m={2}>
                    <Typography variant="h5">
                        Purpose
                    </Typography>
                    <Typography variant="body1" mt={1}>
                        The purpose for this project was to add to my portfolio
                        and have something to showcase. That being said, there are
                        a few fundamental tools leveraged to accomplish this. The
                        corresponding parties have been listed below for recognition.
                    </Typography>
            </Grid>
            <Grid m={2}>
                <Typography variant="h5">
                    Contents
                </Typography>
                <Typography variant="body1" component="div">
                    When working on this project there were a few things I wanted
                    to be able to highlight:
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="SEO"
                                secondary="This site is server-side rendered"
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemText
                                primary="3rd Party API"
                                secondary="This site leverages a 3rd party API."
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemText
                                primary="Responsive Design"
                                secondary="Check the site out on mobile if you haven&apos;t already"
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemText
                                primary="E2E & Unit Testing"
                                secondary={(<span>Tests written in Cypress can be found in the <a href="" target="_blank">source code</a>.</span>)}
                            />
                        </ListItem>

                    </List>
                </Typography>
            </Grid>
            <Grid m={2}>
                <Typography variant="h5">
                    Third Party Recognitions
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="PokéAPI"
                            secondary={(<span>This is an essential service used for the application.
                                If you&apos;re interested in what the API has to offer, <a href="https://pokeapi.co/" target="pokeapi">check them out!</a></span>)}
                        />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
};

CreditsPage.displayName = 'CreditsPage';

export default CreditsPage;