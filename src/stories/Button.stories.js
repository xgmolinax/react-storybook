import React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../utils/styles';
import { Button } from '../components';
import { text, color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
    .addWithJSX(
        'with text',
        wInfo('This is an example of a Button')(() => (
            <Button p={4} color={color('Color', 'green')}>
                {text('Label', 'Hello Button')}
            </Button>
        )),
        { skip: 1 }
    )

    .addWithJSX('with some emoji', () => (
        <Button>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));
