import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { margin } from '@mui/system';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

// ============ Function ============== //
// ============ From React Library mui ============== //
const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    3: {

    },
    4: {

    },
    5: {

    },
  };
  
  // ============ Handler ============== //
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  
  export default function SmileRating() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          mr: -1,
        }}
        >
        <Rating
          name="highlight-selected-only"
          size="large"
          defaultValue={2}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
          position= 'absolute'
          label={<Typography fontWeight="500" fontSize="24px" >102</Typography>}
        />
      </Box>
      
    );
  }