import React from "react";
import {
    Grid,
    FormControl,
    Typography,
    TextField,
    Box,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Button
} from "@mui/material";

const ObamacareForm = () => {
    const [dependents, setDependents] = React.useState(0);
    const [maritalStatus, setMaritalStatus] = React.useState(false);

    const handleDependentsChange = (event) => {
        setDependents(event.target.value);
    };

    const handleMaritalStatus = event => {
        setMaritalStatus(event.target.value);
    };

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
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-first-name"
                                    label="First Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    id="primary-middle-name"
                                    label="Middle Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-last-name"
                                    label="Last Name"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="primary-ssn"
                                    label="SSN"
                                    color="secondary"
                                    fullWidth
                                    type="number"
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="address"
                                    label="Address"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="city"
                                    label="City"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="zip-code"
                                    label="Zip"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="state"
                                    label="State"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="county"
                                    label="County"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="dob"
                                    label="Date of Birth"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="phoneNumber"
                                    label="Phone Number"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="email"
                                    label="Email"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="employerName"
                                    label="Employer Name"
                                    color="secondary"
                                    fullWidth
                                    helperText=" "
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="employerPhone"
                                    label="Employer Phone"
                                    color="secondary"
                                    fullWidth
                                    helperText=" "
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="residentStatus"
                                    label="Resident Status"
                                    color="secondary"
                                    fullWidth
                                    helperText=" "
                                />
                            </Grid>
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    required
                                    id="income"
                                    label="Income"
                                    color="secondary"
                                    fullWidth
                                    helperText="Estimated income per month"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item md={3} xs={12}>
                                <span>
                                    <FormLabel
                                        id="demo-radio-buttons-group-label"
                                    >
                                        Marital Status
                                    </FormLabel>
                                    <RadioGroup
                                        name="marital-status"
                                        value={maritalStatus}
                                        onChange={handleMaritalStatus}
                                        sx={{ marginBottom: 3 }}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="Married" />
                                        <FormControlLabel value={false} control={<Radio />} label="Single" />
                                    </RadioGroup>
                                </span>
                            </Grid>
                        </Grid>
                        {
                            maritalStatus ?
                                <Grid
                                    container
                                    spacing={3}
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item md={3} xs={12}>
                                        <TextField
                                            id="spouse-name"
                                            label="Spouse Name"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="spouse-ssn"
                                            label="Spouse SSN"
                                            color="secondary"
                                            fullWidth
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="spouse-dob"
                                            label="Spouse Date of Birth"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="spouse-employerName"
                                            label="Spouse Employer Name"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="spouse-employerPhone"
                                            label="Spouse Employer Phone"
                                            color="secondary"
                                            fullWidth
                                            helperText=" "
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="residentStatus"
                                            label="Resident Status"
                                            color="secondary"
                                            fullWidth
                                            helperText=" "
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="income"
                                            label="Income"
                                            color="secondary"
                                            fullWidth
                                            helperText="Estimated income per month"
                                        />
                                    </Grid>
                                </Grid>
                                : ""
                        }

                        <Grid
                            container
                            spacing={3}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item md={3} xs={12} align={"center"}>
                                <TextField
                                    id="number-of-dependents"
                                    select
                                    label="Number of Dependents"
                                    color="secondary"
                                    fullWidth
                                    value={dependents}
                                    onChange={handleDependentsChange}
                                    sx={{ marginTop: 3, marginBottom: 3 }}
                                >
                                    {[...Array(10).keys()].map((numberOfDependent) => (
                                        <MenuItem key={numberOfDependent} value={numberOfDependent}>
                                            {numberOfDependent}
                                        </MenuItem>))}
                                </TextField>
                            </Grid>
                        </Grid>
                        {[...Array(dependents).keys()].map((dependent) => (
                            < span key={dependent} >
                                <Typography fontWeight={"bold"} sx={{ m: 3, marginLeft: 0 }}>{`Dependent #${dependent + 1}`}</Typography>
                                <Grid
                                    container
                                    spacing={3}
                                    justify="center"
                                    alignItems="center"
                                    sx={{ marginBottom: 3 }}
                                >
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-name"
                                            label="Dependent Name"
                                            color="secondary"
                                            fullWidth
                                        //helperText=" "
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-ssn"
                                            label="Dependent SSN"
                                            color="secondary"
                                            fullWidth
                                        //helperText=" "
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-dob"
                                            label="Dependent DOB"
                                            color="secondary"
                                            fullWidth
                                        //helperText=" "
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-income"
                                            label="Dependent Income"
                                            color="secondary"
                                            fullWidth
                                        //helperText="Income per month, If any"
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-resident-status"
                                            label="Dependent Resident Status"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={3} xs={12} align={"center"}>
                                        <TextField
                                            id="dependent-resident-number"
                                            label="Dependent Resident Number"
                                            color="secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </span>
                        ))}
                    </Box>
                    <Box textAlign='center'>
                        <Button variant="contained" sx={{ align: "center" }}>Submit</Button>
                    </Box>
                </FormControl>
            </Grid>
        </Box >
    );
};

export default ObamacareForm;