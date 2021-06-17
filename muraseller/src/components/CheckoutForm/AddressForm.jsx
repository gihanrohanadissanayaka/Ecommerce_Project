import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
//import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';

const AddressForm = ( { checkoutToken, next } ) => {

    const [ shippingCountries, setShippingCountries ] = useState([]);
    const [ shippingCountry, setShippingCountry ] = useState('');
    const [ shippingSubdivisions, setShippingSubdivisions ] = useState([]);
    const [ shippingSubdivision, setShippingSubdivision ] = useState('');
    const [ shippingOptions, setShippigOptions ] = useState([]);
    const [ shippingOption, setShippigOption ] = useState('');
    const [ firstName, setFirstname ] = useState('');
    const [ lastName, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ mobile, setMobile ] = useState('');
    const [ zipCode, setZipCode ] = useState('');
    
    
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
    //console.log(countries)
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))

    const fetchShippingCountries = async ( checkoutTokenId ) => {
        const {countries} = await commerce.services.localeListShippingCountries( checkoutTokenId );
        setShippingCountries ( countries );
        setShippingCountry(Object.keys(countries)[0]);
    };

    const fetchSubdivisions = async ( countryCode ) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions( countryCode );
        setShippingSubdivisions ( subdivisions );
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
        setShippigOptions( options );
        setShippigOption(options[0].id);
      };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    },[]);

    useEffect(() => {
       if(shippingCountry) fetchSubdivisions(shippingCountry)
    },[shippingCountry]);

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);

    },[shippingSubdivision])

    return (
        <>
            <Typography variant='h6' gutterBottom >Shipping Address</Typography>
           <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next( {firstName, lastName, email, address, mobile, zipCode, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={2}> 
                    <Grid item xs={12}  >
                        <TextField label="First Name" value={firstName} fullWidth required onChange={(e) => setFirstname(e.target.value)}/>
                        <TextField label="Last Name" value={lastName} fullWidth required onChange={(e) => setLastname(e.target.value)}/>
                        <TextField label="Email" value={email} fullWidth required onChange={(e) => setEmail(e.target.value)}/>
                        <TextField label="Address" value={address} fullWidth required onChange={(e) => setAddress(e.target.value)}/>
                        <TextField label="Mobile Number" value={mobile} fullWidth required onChange={(e) => setMobile(e.target.value)}/>
                        <TextField label="Postal Code" value={zipCode} fullWidth required onChange={(e) => setZipCode(e.target.value)}/>
                    </Grid>
                    <br/><br/>

                        {/* select options */}

                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}   
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Subdivisions</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}   
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippigOption(e.target.value)}>
                                    {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                    ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={ Link } to='/cart' variant='outlined'>Cart</Button>
                        <Button type="submit" variant='contained' color='primary'>Next</Button>
                    </div>
                </form>
    </FormProvider>
        </>
    )
} 

export default AddressForm; 