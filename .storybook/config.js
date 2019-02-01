import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { main, dark } from '../src/themes';

const themes = [main, dark];
addDecorator(withThemesProvider(themes));

addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    require('./welcome');
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);
