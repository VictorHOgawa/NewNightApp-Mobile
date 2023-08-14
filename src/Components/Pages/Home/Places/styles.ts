import { styled } from "styled-components/native";
import Theme from "../../../../styles/themes";

interface CurrentProps {
  current: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  width: 90%;
  text-align: center;

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 85%;
  }
`;

export const SliderImg = styled.Image`
  width: 100%;
  height: auto;
`;

export const PlaceCurrent = styled.Text<CurrentProps>`
  color: ${(current) =>
    current ? Theme.color.confirmation : Theme.color.red_70};
`;

export const PlaceTitle = styled.Text`
  color: ${Theme.color.primary_80};
`;

export const PlacePlace = styled.Text`
  color: ${Theme.color.gray_10};
`;
