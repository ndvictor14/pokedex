import React, { useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

type SearchFieldProps = {
    onSearch: ({ query }: { query: string }) => void;
    value?: string;
};
export const SearchField = ({ onSearch, value }: SearchFieldProps) => {
    const [query, setQuery] = useState(value || '');

    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch({ query });
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                onChange={updateQuery}
                value={query}
                inputProps={{ 'aria-label': 'search', 'data-cy': "search-input" }}
            />
            <IconButton data-cy="search-button" type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                <Search />
            </IconButton>
        </Paper>
    )
};

SearchField.displayName = 'SearchField';