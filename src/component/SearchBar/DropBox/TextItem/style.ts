import styled from "styled-components";

export const TextField = styled.div({
  scrollSnapAlign: "start", // 스냅 정렬 방식
  padding: "5px",
  "& b": {
    fontWeight: 700,
  },
  cursor: "pointer",
});
