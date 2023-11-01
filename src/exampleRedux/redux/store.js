import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducier } from './reducers';
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducier, enhancer);
