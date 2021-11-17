import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { deepPurple } from '@mui/material/colors';
import { Typography } from '@mui/material';

// ============ Function ============== //
// ============ From React Library mui ============== //
export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'is_landlord',
    inputProps: { 'aria-label': item },
  });

// ============ Layout
  return (
    <div>
      <RadioGroup row aria-label="login" name="is_landlord">
        <FormControlLabel 
          value={0} 
          control={
          <Radio
            {...controlProps('e')}
            sx={{
              color: deepPurple["A400"],
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
              '&.Mui-checked': {
                color: deepPurple["A400"],
              },
            }}
          />} 
          label={<Typography fontWeight="500" fontSize="24px" marginRight ="50px">Tenant</Typography>}>
        </FormControlLabel>

        <FormControlLabel 
          value={1} 
          control={
          <Radio
            {...controlProps('d')}
            sx={{
              color: deepPurple["A400"],
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
              '&.Mui-checked': {
                color: deepPurple["A400"],
              },
            }}
        />} 
        label={<Typography fontWeight="500" fontSize="24px" >Landlord</Typography>}
      />
      </RadioGroup>
    </div>
  );
}
