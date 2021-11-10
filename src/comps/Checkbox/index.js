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
const Checkbox = ({
	// ============ Props
  value = "Recieve news letter and update",

}) => {  
  // ============ Handler ============== //
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  // ============ css ============== //
  const LabelText = styled.div`
    font-size: 24px
  `;
  const RadioCont = styled.div`
    margin-right:50px;
  `;

  return (
    <div>
      <RadioGroup row aria-label="login" name="row-radio-buttons-group">
        <RadioCont>
            <FormControlLabel value="Tenant" control={<Radio
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
          />} label={<Typography fontWeight="500" fontSize="24px" >{value}</Typography>}>
          </FormControlLabel>
        </RadioCont>
      
      </RadioGroup>
    </div>
  );
}

export default Checkbox;