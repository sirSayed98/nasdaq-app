// mui-libs
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// logic-libs
import debounce from "lodash.debounce";

// react-libs
import React, { useCallback } from "react";

// interfaces
interface SearchProps {
  search: (query: string) => void;
  isDisabled: boolean
}

const Search: React.FC<SearchProps> = ({ search, isDisabled }) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      search(event.target.value);
    }, 500),
    []
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 2,
          px: 2,
          py: 0.5,
        }}
      >
        <SearchIcon color="action" />
        <TextField
          variant="standard"
          placeholder="Search..."
          sx={{ ml: 1, flex: 1 }}
          onChange={handleInputChange}
          disabled={isDisabled}
        />
      </Box>
    </>
  );
};

export default Search;
