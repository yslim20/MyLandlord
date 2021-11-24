import * as React from 'react';
import { styled } from '@mui/system';
import {useRouter} from 'next/router';

// ============ Imported comps ============== //
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Avatar from '@mui/material/Avatar';

// ============ Button Titles
const options = ['Log In', 'Sign Up'];

const LoginDrop=({  

})=>{

// ============ UseState
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }; 

// ============ Router to pages
  const buttonClick = (event, index) => {
    event.preventDefault()

    if (index === 2){
      router.push("/MyPage")
    } else if (index === 1) {
      router.push("/SignUp")
    } else if (index === 0) {
      router.push("/LogIn")      
    }
  }
  
// ============ Router    
  const router = useRouter();

  return (

// ============ Layout
    <React.Fragment>

{/*  ============ Top Button part */}
      <ButtonGroup 
        variant="contained" 
        ref={anchorRef} 
        aria-label="split button"
        style ={{
          height: 66,
          width: 112,
          borderRadius: 66,
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
          position: 'relative',
          overflow: 'hidden',
        }}
      >

{/*  ============ Avatar Bttn */}
        <Button 
          onClick={handleClick}
          className="bttntext"
          style={{
            width: 112,
            height: 66,
            backgroundColor: "transparent",
            border: 'none',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="./icons/icon_user.png"
            sx={{ width: 42, height: 42 }}
          />
        </Button>

{/*  ============ Arrow Bttn */}
        <Button
          size="medium"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          className="bttntext"
          onClick={handleToggle}
          style={{
            backgroundColor: "transparent",
            color: "#5333ED",
            border: 'none',
            boxShadow: 'none',             
          }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup> {/* Top Button ends */}
      
{/*  ============ Bottom Button part - popup */}      
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              style = {{
                borderRadius: 20,                
                overflow: 'hidden',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}

                      onClick={(event) => buttonClick(event, index)}
                    >
                      {option}
                    </MenuItem>                    
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>    

  );
}

export default LoginDrop;
