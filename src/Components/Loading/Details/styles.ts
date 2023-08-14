import styled from 'styled-components/native'
import {RFPercentage} from 'react-native-responsive-fontsize'
import themes from '../../../global/themes'
export const Container = styled.View`
flex: 1;
`

export const Image = styled.View`
width: 100%;
overflow: hidden;
height: ${RFPercentage(35)}px;
border-bottom-left-radius: 50px;
background-color: ${themes.colors.background};
`

export const Title = styled.View`
margin-top: 5px;
width: 40%;
height:50px;
border-radius: 20px;
`

export const Header = styled.View`
padding: 0px 10px;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const Information = styled.View`
margin-top: 5px;

width: 40%;
height:70px;
`

export const InfoContainer = styled.View`
background-color: ${themes.colors.secondaryFade};
margin-left: 10px;
margin-right: 10px;
border-width: 1px;
border-color: ${themes.colors.primary};
border-radius: 10px;
height: ${RFPercentage(40)}px;
`
