import styled from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import themes from '../../../../global/themes'
export const Container = styled.View`
flex-direction:row;
`

export const Category = styled.View`
justify-content: center;
align-items: center;
width: ${RFValue(70)}px;
height: ${RFValue(70)}px;
border-radius: 15px;
margin: 10px;
overflow: hidden;
background-color: ${themes.colors.secondaryFade};
`