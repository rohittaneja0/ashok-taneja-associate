import React from "react";
import {
    Grid,
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
import emailjs from '@emailjs/browser';

const ObamacareForm = () => {
    const [dependents, setDependents] = React.useState(0);
    const [maritalStatus, setMaritalStatus] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [middleName, setMiddleName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [ssn, setSSN] = React.useState('');
    const [dob, setDOB] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [zip, setZip] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [county, setCounty] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [employerName, setEmployerName] = React.useState('');
    const [employerPhone, setEmployerPhone] = React.useState('');
    const [primaryImmigrationStatus, setPrimaryImmigrationStatus] = React.useState('');
    const [primaryImmigrationNumber, setPrimaryImmigrationNumber] = React.useState('');
    const [primaryIncome, setPrimaryIncome] = React.useState('');
    const [spouseName, setSpouseName] = React.useState('');
    const [spouseSSN, setSpouseSSN] = React.useState('');
    const [spouseDOB, setSpouseDOB] = React.useState('');
    const [spouseEmployerName, setSpouseEmployerName] = React.useState('');
    const [spouseEmployerPhone, setSpouseEmployerPhone] = React.useState('');
    const [spouseImmigrationStatus, setSpouseImmigrationStatus] = React.useState('');
    const [spouseImmigrationNumber, setSpouseImmigrationNumber] = React.useState('');
    const [spouseIncome, setSpouseIncome] = React.useState('');
    const [dependentName, setDependentName] = React.useState([]);
    const [dependentSSN, setDependentSSN] = React.useState([]);
    const [dependentDOB, setDependentDOB] = React.useState([]);
    const [dependentImmigrationStatus, setDependentImmigrationStatus] = React.useState([]);
    const [dependentImmigrationNumber, setDependentImmigrationNumber] = React.useState([]);
    const [dependentIncome, setDependentIncome] = React.useState([]);

    let formData = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        ssn: ssn,
        dob: dob,
        address: address,
        zip: zip,
        city: city,
        state: state,
        county: county,
        phoneNumber: phoneNumber,
        email: email,
        employerName: employerName,
        employerPhone: employerPhone,
        primaryImmigrationStatus: primaryImmigrationStatus,
        primaryImmigrationNumber: primaryImmigrationNumber,
        primaryIncome: primaryIncome,
        spouseName: spouseName,
        spouseSSN: spouseSSN,
        spouseDOB: spouseDOB,
        spouseEmployerName: spouseEmployerName,
        spouseEmployerPhone: spouseEmployerPhone,
        spouseImmigrationStatus: spouseImmigrationStatus,
        spouseImmigrationNumber: spouseImmigrationNumber,
        spouseIncome: spouseIncome,
        dependentName1: dependentName[0],
        dependentName2: dependentName[1],
        dependentName3: dependentName[2],
        dependentName4: dependentName[3],
        dependentName5: dependentName[4],
        dependentName6: dependentName[5],
        dependentName7: dependentName[6],
        dependentName8: dependentName[7],
        dependentName9: dependentName[8],
        dependentName10: dependentName[9],
        dependentSSN1: dependentSSN[0],
        dependentSSN2: dependentSSN[1],
        dependentSSN3: dependentSSN[2],
        dependentSSN4: dependentSSN[3],
        dependentSSN5: dependentSSN[4],
        dependentSSN6: dependentSSN[5],
        dependentSSN7: dependentSSN[6],
        dependentSSN8: dependentSSN[7],
        dependentSSN9: dependentSSN[8],
        dependentSSN10: dependentSSN[9],
        dependentDOB1: dependentDOB[0],
        dependentDOB2: dependentDOB[1],
        dependentDOB3: dependentDOB[2],
        dependentDOB4: dependentDOB[3],
        dependentDOB5: dependentDOB[4],
        dependentDOB6: dependentDOB[5],
        dependentDOB7: dependentDOB[6],
        dependentDOB8: dependentDOB[7],
        dependentDOB9: dependentDOB[8],
        dependentDOB10: dependentDOB[9],
        dependentImmigrationStatus1: dependentImmigrationStatus[0],
        dependentImmigrationStatus2: dependentImmigrationStatus[1],
        dependentImmigrationStatus3: dependentImmigrationStatus[2],
        dependentImmigrationStatus4: dependentImmigrationStatus[3],
        dependentImmigrationStatus5: dependentImmigrationStatus[4],
        dependentImmigrationStatus6: dependentImmigrationStatus[5],
        dependentImmigrationStatus7: dependentImmigrationStatus[6],
        dependentImmigrationStatus8: dependentImmigrationStatus[7],
        dependentImmigrationStatus9: dependentImmigrationStatus[8],
        dependentImmigrationStatus10: dependentImmigrationStatus[9],
        dependentImmigrationNumber1: dependentImmigrationNumber[0],
        dependentImmigrationNumber2: dependentImmigrationNumber[1],
        dependentImmigrationNumber3: dependentImmigrationNumber[2],
        dependentImmigrationNumber4: dependentImmigrationNumber[3],
        dependentImmigrationNumber5: dependentImmigrationNumber[4],
        dependentImmigrationNumber6: dependentImmigrationNumber[5],
        dependentImmigrationNumber7: dependentImmigrationNumber[6],
        dependentImmigrationNumber8: dependentImmigrationNumber[7],
        dependentImmigrationNumber9: dependentImmigrationNumber[8],
        dependentImmigrationNumber10: dependentImmigrationNumber[9],
        dependentIncome1: dependentIncome[0],
        dependentIncome2: dependentIncome[1],
        dependentIncome3: dependentIncome[2],
        dependentIncome4: dependentIncome[3],
        dependentIncome5: dependentIncome[4],
        dependentIncome6: dependentIncome[5],
        dependentIncome7: dependentIncome[6],
        dependentIncome8: dependentIncome[7],
        dependentIncome9: dependentIncome[8],
        dependentIncome10: dependentIncome[9],
        maritalStatus: maritalStatus ? 'Married' : 'Single',
        dependents: dependents
    };

    const handleDependentsChange = (event) => {
        const numberOfDependents = Number(event.target.value);
        setDependents(numberOfDependents);
    };

    const handleDependentInformationChange = (event, index, dependentField) => {
        const value = event.target.value;
        if (dependentField === 'dependent-name') {
            dependentName[index] = value;
            setDependentName(dependentName);
            const keyName = `dependentName${index + 1}`;
            formData = { ...formData, [keyName]: value };
        } else if (dependentField === 'dependent-dob') {
            dependentDOB[index] = value;
            setDependentDOB(dependentDOB);
            const keyName = `dependentDOB${index + 1}`;
            formData = { ...formData, [keyName]: value };
        } else if (dependentField === 'dependent-ssn') {
            dependentSSN[index] = value;
            setDependentSSN(dependentSSN);
            const keyName = `dependentSSN${index + 1}`;
            formData = { ...formData, [keyName]: value };
        } else if (dependentField === 'dependent-income') {
            dependentIncome[index] = value;
            setDependentIncome(dependentIncome);
            const keyName = `dependentIncome${index + 1}`;
            formData = { ...formData, [keyName]: value };
        } else if (dependentField === 'dependent-immigration-status') {
            dependentImmigrationStatus[index] = value;
            setDependentImmigrationStatus(dependentImmigrationStatus);
            const keyName = `dependentImmigrationSatus${index + 1}`;
            formData = { ...formData, [keyName]: value };
        } else if (dependentField === 'dependent-immigration-number') {
            dependentImmigrationNumber[index] = value;
            setDependentImmigrationNumber(dependentImmigrationNumber);
            const keyName = `dependentImmigrationNumber${index + 1}`;
            formData = { ...formData, [keyName]: value };
        }
    };

    const handleMaritalStatus = (event) => {
        const isMarried = event.target.value === 'true'
        setMaritalStatus(isMarried);
    };

    const handleSubmit = event => {
        console.log(formData);
        emailjs.send('service_pjhgyg7', 'template_npigukc', formData, 'TUTV1u28o-7zuOl3e')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                event.preventDefault();
                console.log('FAILED...', error);
            });
    }

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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 5 }}>
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
                                value={firstName}
                                onChange={(event) => { setFirstName(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                id="primary-middle-name"
                                label="Middle Name"
                                color="secondary"
                                fullWidth
                                value={middleName}
                                onChange={(event) => { setMiddleName(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="primary-last-name"
                                label="Last Name"
                                color="secondary"
                                fullWidth
                                value={lastName}
                                onChange={(event) => { setLastName(event.target.value) }}
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
                                value={ssn}
                                onChange={(event) => { setSSN(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="address"
                                label="Address"
                                color="secondary"
                                fullWidth
                                value={address}
                                onChange={(event) => { setAddress(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="city"
                                label="City"
                                color="secondary"
                                fullWidth
                                value={city}
                                onChange={(event) => { setCity(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="zip-code"
                                label="Zip"
                                color="secondary"
                                fullWidth
                                value={zip}
                                onChange={(event) => { setZip(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="state"
                                label="State"
                                color="secondary"
                                fullWidth
                                value={state}
                                onChange={(event) => { setState(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="county"
                                label="County"
                                color="secondary"
                                fullWidth
                                value={county}
                                onChange={(event) => { setCounty(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="dob"
                                label="Date of Birth"
                                color="secondary"
                                fullWidth
                                value={dob}
                                onChange={(event) => { setDOB(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="phoneNumber"
                                label="Phone Number"
                                color="secondary"
                                fullWidth
                                value={phoneNumber}
                                onChange={(event) => { setPhoneNumber(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                color="secondary"
                                fullWidth
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="employerName"
                                label="Employer Name"
                                color="secondary"
                                fullWidth
                                value={employerName}
                                onChange={(event) => { setEmployerName(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="employerPhone"
                                label="Employer Phone"
                                color="secondary"
                                fullWidth
                                value={employerPhone}
                                onChange={(event) => { setEmployerPhone(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="immigrationStatus"
                                label="Immigration Status"
                                color="secondary"
                                fullWidth
                                value={primaryImmigrationStatus}
                                onChange={(event) => { setPrimaryImmigrationStatus(event.target.value) }}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} align={"center"}>
                            <TextField
                                required
                                id="immigrationNumber"
                                label="Immigration Number"
                                color="secondary"
                                fullWidth
                                value={primaryImmigrationNumber}
                                onChange={(event) => { setPrimaryImmigrationNumber(event.target.value) }}
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
                                value={primaryIncome}
                                onChange={(event) => { setPrimaryIncome(event.target.value) }}
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
                                //sx={{ marginTop: 2 }}
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
                                        value={spouseName}
                                        onChange={(event) => { setSpouseName(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouse-ssn"
                                        label="Spouse SSN"
                                        color="secondary"
                                        fullWidth
                                        type="number"
                                        value={spouseSSN}
                                        onChange={(event) => { setSpouseSSN(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouse-dob"
                                        label="Spouse Date of Birth"
                                        color="secondary"
                                        fullWidth
                                        value={spouseDOB}
                                        onChange={(event) => { setSpouseDOB(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouse-employerName"
                                        label="Spouse Employer Name"
                                        color="secondary"
                                        fullWidth
                                        value={spouseEmployerName}
                                        onChange={(event) => { setSpouseEmployerName(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouse-employerPhone"
                                        label="Spouse Employer Phone"
                                        color="secondary"
                                        fullWidth
                                        helperText=" "
                                        value={spouseEmployerPhone}
                                        onChange={(event) => { setSpouseEmployerPhone(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouseImmigrationStatus"
                                        label="Spouse Immigration Status"
                                        color="secondary"
                                        fullWidth
                                        helperText=" "
                                        value={spouseImmigrationStatus}
                                        onChange={(event) => { setSpouseImmigrationStatus(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="spouseImmigrationNumber"
                                        label="Spouse Immigration Number"
                                        color="secondary"
                                        fullWidth
                                        helperText=" "
                                        value={spouseImmigrationNumber}
                                        onChange={(event) => { setSpouseImmigrationNumber(event.target.value) }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="income"
                                        label="Income"
                                        color="secondary"
                                        fullWidth
                                        helperText="Estimated income per month"
                                        value={spouseIncome}
                                        onChange={(event) => { setSpouseIncome(event.target.value) }}
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
                                        value={dependentName[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-name') }}
                                    //helperText=" "
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="dependent-ssn"
                                        label="Dependent SSN"
                                        color="secondary"
                                        fullWidth
                                        value={dependentSSN[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-ssn') }}
                                    //helperText=" "
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="dependent-dob"
                                        label="Dependent DOB"
                                        color="secondary"
                                        fullWidth
                                        value={dependentDOB[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-dob') }}
                                    //helperText=" "
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="dependent-income"
                                        label="Dependent Income"
                                        color="secondary"
                                        fullWidth
                                        value={dependentIncome[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-income') }}
                                    //helperText="Income per month, If any"
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="dependent-immigration-status"
                                        label="Dependent Immigration Status"
                                        color="secondary"
                                        fullWidth
                                        value={dependentImmigrationStatus[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-immigration-status') }}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12} align={"center"}>
                                    <TextField
                                        id="dependent-immigration-number"
                                        label="Dependent Immigration Number"
                                        color="secondary"
                                        fullWidth
                                        value={dependentImmigrationNumber[dependent]}
                                        onChange={(event) => { handleDependentInformationChange(event, dependent, 'dependent-immigration-number') }}
                                    />
                                </Grid>
                            </Grid>
                        </span>
                    ))}
                    <Box textAlign='center'>
                        <Button type="submit" variant="contained" sx={{ align: "center" }}>Submit</Button>
                    </Box>
                </Box>
            </Grid>
        </Box >
    );
};

export default ObamacareForm;