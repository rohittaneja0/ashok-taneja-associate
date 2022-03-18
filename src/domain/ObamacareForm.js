import React from "react";
import { Grid, FormControl, Typography, TextField, Box } from "@mui/material";

const ObamacareForm = () => {

    return (
        <Box sx={{ m: 3 }}>
            <Typography align="center" fontWeight={"bold"} sx={{ m: 3 }}> Obamacare Form</Typography>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                spacing={2}
            >
                <FormControl>
                    <Box sx={{ m: 5 }}>
                        <Grid
                            container
                            spacing={3}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-first-name"
                                    label="First Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    id="primary-middle-name"
                                    label="Middle Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-last-name"
                                    label="Last Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-ssn"
                                    label="SSN"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="address"
                                    label="Address"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="city"
                                    label="City"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="zip-code"
                                    label="Zip"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="state"
                                    label="State"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid><Grid item md={6} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="county"
                                    label="County"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </FormControl>
            </Grid>
        </Box>
    );
};

export default ObamacareForm;