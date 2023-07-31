import { styled } from "styled-components";

export const ImgOne = styled.div`
  background-image: url("https://cdn.discordapp.com/attachments/369610381024559132/1134648792193433650/Layer_2.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
`;

export const ImgTwo = styled(ImgOne)`
   background-position: top;
  background-image: url("https://cdn.discordapp.com/attachments/369610381024559132/1134648792528990348/Layer_3.png");
`;

export const ImgTree = styled(ImgOne)`
   background-position: top;
  background-image: url("https://cdn.discordapp.com/attachments/566850308702208001/1134643178310467694/jogajuntoimgsld.png");
`;
