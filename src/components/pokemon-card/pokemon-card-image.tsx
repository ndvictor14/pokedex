import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import QuestionMark from '@mui/icons-material/QuestionMark';

const IMAGE_BASE_PATH = '/media';
export const PokemonCardImage = ({ sprites, priority = false }: { sprites: any, priority?: boolean }) => {
  const { front_default: defaultFront } = sprites;

  if (!defaultFront) {
      return (
          <Box sx={{ height: '100px', width: '100px', backgroundColor: "#c3c3c3", alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <QuestionMark />
          </Box>
      )
  }

  return (
      <Box>
        <Image unoptimized src={defaultFront.replace(IMAGE_BASE_PATH, '')} alt="Pokemon Image" width={100} height={100} priority={priority} />
      </Box>
  );
};

PokemonCardImage.displayName = 'PokemonCardImage';
