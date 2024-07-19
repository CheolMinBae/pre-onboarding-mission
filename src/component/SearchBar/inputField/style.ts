import styled from "styled-components";

export const InputStyle = styled.input({
  width: "300px",
  height: "30px",
  padding: "5px",
  border: "1px solid #49506c",
  borderRadius: "5px",

  "&:focus": {
    border: "2px solid #244e89",
  },
});
