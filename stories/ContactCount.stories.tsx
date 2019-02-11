import { storiesOf } from '@storybook/react';
import React from 'react';

import ContactCount from '../src/contactCount';

const stories = storiesOf('ContactCount', module);

stories.add('ContactCount', () => <ContactCount />);

stories.add('ContactCount (with count)', () => <ContactCount count="5432"/>);
