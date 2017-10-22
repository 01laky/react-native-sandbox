import { bindActionCreators } from 'redux';

const changeModule = () => ({ type: CHANGE_MODULE });

export default (dispatch) => ({
    changeModule: bindActionCreators(changeModule, dispatch),
})
