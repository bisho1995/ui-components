import { configure } from '@storybook/react';
if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')();
}
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('..', true, /\.stories\.tsx?$/));
}

configure(loadStories, module);
