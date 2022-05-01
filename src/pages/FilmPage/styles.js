import styled from "styled-components";

export const MoviePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const MovieCard = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 1060px) {
    flex-direction: column;
  }
`;

export const MovieRecommendationsContainer = styled.div`
  max-width: 1200px;
  min-height: 470px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const MovieListContainer = styled.div`
  max-width: 1200px;
  margin-top: 50px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3``;

export const CardText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 68%;
  border-radius: 20px;
  cursor: pointer;
`;

export const LeftContainer = styled.div`
  text-align: center;
`;

export const RightContainer = styled.div.attrs(({ img }) => img)`
  max-width: 600px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1060px) {
    margin-top: 20px;
  }
`;

export const InfoBox = styled.div`
  position: relative;
  z-index: 1;
`;

export const Header = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const ImageTick = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
`;
