import bladbord from '../images/dekor/18/bladbord.png';
import blomst from '../images/dekor/18/blomst.png';
import bord from '../images/dekor/18/bord.png';
import bord2 from '../images/dekor/18/bord2.png';
import hjerte from '../images/dekor/18/hjertebord.png';
import hjerte2 from '../images/dekor/18/hjertebord2.png';

const images = { bladbord, blomst, bord, bord2, hjerte, hjerte2 };

const large = Object.keys(images).map((name) => ({ image: images[name], name: name + '_18_l' }));

export default large;
