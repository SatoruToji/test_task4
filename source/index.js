import { handleMobileBtn } from './JavaScript/burger-menu';

import './styles/normalize.scss';
import './styles/style.scss';
import './styles/actions.scss';

import './styles/block/head.scss';
import './styles/block/nav.scss';

const mobileBtn = window.matchMedia('(max-width: 500px)');

if (mobileBtn.matches) {
  handleMobileBtn(mobileBtn);
}
