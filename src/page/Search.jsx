import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { dummy } from "./data";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleInput = (e, newInput) => {
    setInputValue(newInput);
  };

  const handleClick = () => {
    if (inputValue) {
      console.log(`${inputValue.description}을 검색하였습니다.`);
    } else {
      console.log("검색하지 않았습니다.");
    }
  };
  return (
    <Box sx={{ margin: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Autocomplete
          sx={{ minWidth: 300 }}
          id="free-solo-demo"
          freeSolo
          disableClearable
          options={dummy}
          groupBy={(option) => option.type}
          onChange={handleInput}
          getOptionLabel={(option) => option.description || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label="검색어"
              placeholder="검색어를 입력하세요."
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <IconButton onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SearchBox;
