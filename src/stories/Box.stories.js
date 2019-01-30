import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../components';

storiesOf('Box', module).addWithJSX('Base', () => (
    <Box p={4} bg="washed-red">
        REBASS BOX
    </Box>
));
