import { Company } from './company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');

customMap.addUserMarker(new User());
