import styled from "styled-components";

export const Front = styled.div`
  width: 220px;
  height: 470px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: black;
  box-shadow: 0 0 3px 3px #7b7fda;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Back = styled.div`
  width: 220px;
  height: 470px;
  border-radius: 20px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: black;
  transform: rotateY(180deg);
  box-shadow: 0 0 3px 3px #7b7fda;
`;

export const Card = styled.div`
  width: 220px;
  height: 470px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  perspective: 500px;
  border-radius: 8px;

  &:hover ${Front} {
    transform: rotateY(180deg);
  }

  &:hover ${Back} {
    transform: rotateY(360deg);
  }
`;

export const Image = styled.img.attrs((props) => props)`
  min-width: 100%;
  max-height: 65%;
  border-radius: 20px 20px 0 0;
  cursor: pointer;
`;

export const ImageTick = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Body = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: white;
`;

export const CardText = styled.p`
  color: white;
`;

export const Span = styled.span`
  color: white;
`;

export const ButtonBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
