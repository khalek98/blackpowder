import React from 'react';

import { InfoInterface } from './info.types';

export const info: InfoInterface = {
  name: 'Black Powder',
  fullname: 'Black Powder Ltd',
  address: 'Str. Kavaja, Delijorgj, Tirana, Albania',
  url: 'blackpowderglobal.com',
  email: 'info@blackpowderglobal.com',
  descr:
    'Global technology solutions built for national security, critical infrastructure, and demanding environments.',
  menuList: [
    {
      menuName: 'About us',
      anchor: 'about',
    },
    {
      menuName: 'Services',
      anchor: 'services',
    },
    {
      menuName: 'Our partners',
      anchor: 'partners',
    },
  ],
};
