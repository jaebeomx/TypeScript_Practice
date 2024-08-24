/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const container = css`
  background-color: #ff0000;
  width: 10rem;
  height: 10rem;
`;

export default function Emotion() {
  return <div css={container}></div>;
}
