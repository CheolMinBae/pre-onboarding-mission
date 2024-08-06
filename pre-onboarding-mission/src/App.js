import React, { useState } from 'react';
import { TextField, Container, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { dummy } from './data';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? <b key={index}>{part}</b> : part
        )}
      </>
    );
  };

  const handleSearch = () => {
    console.log('button click!');
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <Button onClick={handleSearch} sx={{ marginLeft: '8px' }}>
          <SearchIcon />
        </Button>
      </Box>
      {searchQuery && (
        <Box sx={{ width: 'calc(100% - 72px)' }}>
          <List sx={{ border: '1px solid #ccc', borderRadius: '4px'}}>
            {dummy.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={highlightText(item.description, searchQuery)} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
}

export default App;
