const blessed = require('blessed');
const screen = blessed.screen();
const list = blessed.list({ parent: screen, items: ['get pods', 'describe service', 'logs -f'] });
screen.render();