import React from 'react';
import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';

type TypeBadgeProps = {
    height?: number,
    types: string[],
    width?: number
};

export const TypeBadge = ({ height = 15, types, width = 15 }: TypeBadgeProps) => {
    return (
        <Box>
            {types.map(type => (
                <Tooltip title={type} key={type}>
                    <Image src={`/sprites/types/${type}.png`} alt={type} height={height} width={width} />
                </Tooltip>
            ))}
        </Box>
    );
};

TypeBadge.displayName = 'TypeBadge';