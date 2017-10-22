/********************************************
*           MODULE MANAGER HOC              *
********************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IPropTypes from 'react-immutable-proptypes';

import LoginContainer from '../../modules/Login';
import TodoContainer from '../../modules/TodoList';

import { requireAppContainer } from '../../helpers';

import actions from './actions';

const mapStateToProps = (state) =>
    ({ modules: state.get('modules') });

export default (ContainerComponent) => {
    @connect(mapStateToProps, actions)
    class ModuleManager extends Component {

        static propTypes = {
            changeModule: PropTypes.func.isRequired,
            modules: IPropTypes.record.isRequired,
        }

        render() {
            console.log('render')
            const activeModuleContainer = modules.find((module) => module.get('activated')).container;
            console.log('CONTAINER => ', activeModuleContainer);
            let moduleContainer = (activeModuleContainer === 'login') ?
                <LoginContainer /> : <TodoList />;

            return (
                <ContainerComponent
                    {...{...this.props, moduleContainer }}
                />
            );
        }
    }

}
