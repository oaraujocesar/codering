import React from 'react';
import withGlobalStyles from './withGlobalStyles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [withGlobalStyles];
