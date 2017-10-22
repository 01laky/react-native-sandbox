import { Record, Map } from 'immutable';

import config from '../../config';

import { SETUP_MODULE_STATE } from './constants';

// Make initial module reducer from config file
const InitialModuleState = Record(Object.keys(config.modules).reduce((nextContainer, index) => {
    const { render, requireAuth, defaultActivated, container } = config.modules[index];
    nextContainer[index] = (render) ?
        Map({
            render,
            requireAuth,
            initializing: false,
            initialized: false,
            activated: defaultActivated,
            container,
        }) :
        Map({ render, requireAuth });

    return nextContainer;
}, {}));

// Rewrite data inside config cache
export default (moduleState = new InitialModuleState(), _action = {}) => {
    const { type } = _action;

    if (type === SETUP_MODULE_STATE) {
        return moduleState;
    }

    return moduleState;

}
