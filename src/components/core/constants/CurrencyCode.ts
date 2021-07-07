import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.SESAME]: IS_MAINNET ? 'XSM' : 'TXSM',
};
