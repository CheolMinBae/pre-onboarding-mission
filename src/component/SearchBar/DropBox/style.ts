import styled from "styled-components";

interface ContainerProps {
  isShow: boolean;
}

export const Container = styled.div<ContainerProps>(({ isShow }) => ({
  position: "absolute",
  top: "100%",
  width: "100%",
  height: "130px",
  overflow: "auto",
  zIndex: 1,
  display: isShow ? "flex" : "none",
  flexDirection: "column",
  border: "2px solid #3645ab",
  scrollSnapType: "y mandatory",

  "&::-webkit-scrollbar": {
    width: "14px",
    height: "0px",
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: "15px",
    backgroundColor: "transparent",
    boxShadow: "inset 100px 0px 0 #ddd",
    border: "3px solid rgba(0,0,0,0)",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    boxShadow: "inset 100px 0px 0 #bbb",
  },

  "&::-webkit-scrollbar-track": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}));
