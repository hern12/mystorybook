import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    name: 'Kim',
    theme: themes.dark,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
