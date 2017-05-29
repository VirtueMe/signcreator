import generator from './generator';
import scaleFactor from './scalefactor';

const dimensions = {
  width: 130,
  height: 100,
  padding: 10
};

const smallGenerator = generator(dimensions);

export { smallGenerator }

export default generator(Object.assign({}, dimensions, scaleFactor));
