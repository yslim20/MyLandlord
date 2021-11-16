import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const FormCont = styled.div`
  height: ${props => props.fheight}px;   
  width: ${props => props.fwidth};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 3px #5333ED;
  border-radius: 16px;
  padding: 16px 20px;
  box-sizing: border-box;
  margin-bottom: ${props => props.fmarginB}px; 
  margin-left: ${props => props.marginL}%; 
`
const Form = styled.form`
  width: 100%;
  hight: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const InputBox = styled.input`
  width:${props => props.iwidth};
  height: ${props => props.iheight}; 
  font-family: 'Heebo', sans-serif;      
  font-size: 18px;
  border:none;
  outline: none;
`

const Button = styled.button`  
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    background: #EAEAEA;
    transition-duration: 0.5s;    
  }
  :active {
    background: #EAEAEA;
  }
`

const Icon = styled.img`
  display: block;
  width: 100%;
  height: 100%;    
`
// ============ Function ============== //
const SearchBar = ({

// ============ Props
    fwidth = "80%",
    fheight = 60,
    fmarginB = 40,
    iwidth = "90%",
    src='./icons/icon_search.svg',
    placeholder = "Please type the area..",
    marginL = "0",

// ============ Action after pressing button    
    action="",
}) => {  

// ============ Layout
  return (
    <FormCont
      fwidth={fwidth}
      fheight={fheight}
      fmarginB={fmarginB}
      marginL={marginL}
    >
      <Form action={action}>
        <InputBox 
          type="text" 
          placeholder={placeholder} 
          name="search" 
          iwidth={iwidth}
          iheight={iwidth}
        />

        <Button type="submit">
          <Icon 
            src={src}
          />
        </Button>
      </Form>
    </FormCont>    
  );
}

export default SearchBar;