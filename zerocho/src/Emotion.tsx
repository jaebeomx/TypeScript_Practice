/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: black;
  color: turquoise;
`;

export default function Emotion() {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "green",
        },
      }}
    >
      hi
      <Button>good</Button>
    </div>
  );
}
