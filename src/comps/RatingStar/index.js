import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// ============ Function ============== //
// ============ From React Library mui ============== //
export default function RatingStar({name}) {
  const [value, setValue] = React.useState(0);

// ============ Layout
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
	 	//  id={id}
        // name="simple-controlled"
		name={name}
        value={value}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        defaultValue={5} 
        max={5}
      />
    </Box>
  );
}