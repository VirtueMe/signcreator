import bladbord from '../images/dekor/bladbord.png';
import blomst from '../images/dekor/blomst.png';
import bord from '../images/dekor/bord.png';
import bord2 from '../images/dekor/bord2.png';
import hjerte from '../images/dekor/hjertebord.png';
import hjerte2 from '../images/dekor/hjertebord2.png';


const images = { bladbord, blomst, bord, bord2, hjerte, hjerte2 };

const xs = Object.keys(images).map((name) => ({ image: images[name], name: name + '_xs' }));

export default xs;
