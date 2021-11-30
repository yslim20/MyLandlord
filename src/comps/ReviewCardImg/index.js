import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import RatingStar from '../RatingStar';
import SmileRating from '../SmileRating';

// ============ CSS ============== //
const BoxCont = styled.div`
	display:flex;
	justify-content:ceter;
	align-items:center;	
`;

const RevBox = styled.div`
	width: ${props => props.bWidth};
	height: ${props => props.bHeight};
	border: 3px solid #5333ED;
	background: none;
	border-radius: 16px;
	padding: 2% 4%;
	box-sizing: border-box;
	position: relative;  
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

// TextAvatar
const TextAvatarCont = styled.div`
	display: flex;
	justify-content:ceter;
	align-items:center;	
`;

const Circle = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	border-radius: 50%;  
	display: relative;
	background-image: ${props => props.bgImage};  
	background-repeat: no-repeat;  
	background-position: center;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-right: 40px;
`;

const RatingCont = styled.div`
	display: flex;
	flex-direction: column;
`;

const FirstRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	align-items:center;
	margin-bottom: 10px;
`

const RegText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
    margin-bottom: 0;
    font-family: Heebo;
`;

const DateText = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    font-family: Heebo;
		margin: 0;
`;

const BoldText = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
		margin: 0;
		line-height: 2em;
`;

// ============ Function ============== //
const ReviewCardImg = ({

// ============ Props		
	bWidth = "1100px",
	bHeight = "245px",
    name="",
    // select="Selected: 5435 Kincaid St",
    review="",
    boldDate="19 Jan 2017 19:01",
    width="140px",
    height="140px",
    bgImage="",
	is_recommended=0,
	overall,

// ============ Router		

}) => {
    
// ============ Layout	
	return(
		<BoxCont>
			<RevBox 
				bWidth={bWidth} bHeight={bHeight}
			>
{/* // ============ Avatar */}
				<TextAvatarCont>
					<Circle 
						width={width} 
						height={height} 
						bgImage={bgImage} 
					/>
				</TextAvatarCont>

{/* // ============ Reviews */}
				<RatingCont>
					<FirstRow> 
						{/* <RatingStar val={overall}/> */}
						<DateText >{boldDate}</DateText>
					</FirstRow>
					
					<BoldText>{name}</BoldText>
					{/* <RegText>{select}</RegText> */}
					<RegText>{review}</RegText>

					<SmileRating is_recommended={is_recommended}/>
				</RatingCont>

			</RevBox>
		</BoxCont>
	);
}

export default ReviewCardImg;