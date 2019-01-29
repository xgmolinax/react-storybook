import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    require('./welcome');
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);
