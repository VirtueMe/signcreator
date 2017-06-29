import bladbord from '../images/dekor/8/bladbord.png';
import blomst from '../images/dekor/8/blomst.png';
import bord from '../images/dekor/8/bord.png';
import bord2 from '../images/dekor/8/bord2.png';
import hjerte from '../images/dekor/8/hjertebord.png';
import hjerte2 from '../images/dekor/8/hjertebord2.png';


const images = { bladbord, blomst, bord, bord2, hjerte, hjerte2 };

const small = Object.keys(images).map((name) => ({ image: images[name], name: name + '_8_s' }));

export default small;
