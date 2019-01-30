import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import { theme } from '../src/theme';

addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    require('./welcome');
    req.keys().forEach(file => req(file));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
