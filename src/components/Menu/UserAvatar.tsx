import { Avatar, chakra } from '@chakra-ui/react';

export const UserAvatar = chakra(Avatar, {
  baseStyle: {
    backgroundColor: 'primary.main',
    borderRadius: 'md',
    /**
     * to properly merge the avatar's border w/ container's border:
     *  - Avatar's height is the container's height + 2*(border-width)
     *  - With the changes above, the avatar has to be repositioned x:y => -0.5px:-0.5px
     */
    height: 'calc(100% + 1px)',
    width: 'auto',
    border: '0.5px solid white',
    marginLeft: '-0.5px',
  },
});
