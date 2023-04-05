import React from 'react';
import { Input } from '@mui/material';
import { SearchField } from '@/components/search-field/search-field';

type PokedexFiltersProps = {
    onSearch: ({ query }: { query: string }) => void;
    onSort: () => void;
    searchQuery?: string;
}
export const PokedexFilters = ({ onSearch, onSort, searchQuery }: PokedexFiltersProps) => {

    return (
        <>
            <SearchField onSearch={() => {}} />
        </>
    );
};

PokedexFilters.displayName = 'PokedexFilters';