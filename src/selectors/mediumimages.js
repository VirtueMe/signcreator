import bladbord from '../images/dekor/13/bladbord.png';
import blomst from '../images/dekor/13/blomst.png';
import bord from '../images/dekor/13/bord.png';
import bord2 from '../images/dekor/13/bord2.png';
import hjerte from '../images/dekor/13/hjertebord.png';
import hjerte2 from '../images/dekor/13/hjertebord2.png';

const images = { bladbord, blomst, bord, bord2, hjerte, hjerte2 };

const medium = Object.keys(images).map((name) => ({ image: images[name], name: name + '_13_m' }));

export default medium;
