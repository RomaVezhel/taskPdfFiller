import data from './data/lines';
import LinesBuilder from './LinesBuilder'

const root = document.getElementById('lines');
const builder = new LinesBuilder(data, root);

builder.init();
