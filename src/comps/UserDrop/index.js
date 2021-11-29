import * as React from 'react';
import { styled } from '@mui/system';
import router, {useRouter} from 'next/router';

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
const options = ['My Page', 'Log Out'];

const UserDrop=({  

// ============ User avatar image 
  src="./images/img_user_tenant.png",

// ============ User Router 
  routeTo="/TenantProfile"
})=>{

// ============ UseState ============== //
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

// ============ Router to homepage
    if (index === 1) {
    //   router.push("/")
		logout();
		router.push("/")
    } else if (index === 0) {
      router.push(routeTo)

// // ============ Router to landlord profile
//       if(userName == "Landlord"){
//         router.push("/LandlordProfile") 
//       }

// // ============ Router to user profile
//       else if(userName == "Tenant"){
//         router.push("/UserProfile") 
//       }   
    }
  }
  
// ============ Router  
  const router = useRouter();

  const logout = async () => {
	  await fetch("https://idsp-mylandlord.herokuapp.com/auth/logout", {
	//   await fetch("http://localhost:3080/auth/logout", {
		  credentials:'include'
	  })
	  .then(() => router.push("/"))
	  .catch(() => console.log("something's wrong"))
  }

  let [userType, setUserType] = React.useState(null);

	React.useEffect(() => {

		fetch('https://idsp-mylandlord.herokuapp.com/hey', {
		// fetch('http://localhost:3080/hey', {
			credentials: "include",
		})
		.then(response => response.json())
		.then(uType => setUserType(uType));
	})

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
            src= {src}
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
                  {/* {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}

                      onClick={(event) => buttonClick(event, index)}
                      routeTo={routeTo}
                    >
                      {option}
                    </MenuItem>                    
                  ))} */}
					<MenuItem onClick={() => {
						userType 
						? router.push("/LandlordMypage")
						: router.push("/TenantEdit")
					}}>
				  		My Page
					</MenuItem>
					<MenuItem onClick={() => logout()}>
				  		Logout
					</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>    

  );
}

export default UserDrop;
