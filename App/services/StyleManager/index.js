import React, { Component } from 'react';
import RNC from 'react-native-css';

export default (styleSheet) => (StyledComponent) => {
    class StyleManager extends Component {
        render() {
            const { props } = this;

            const nextProps = {
              ...props,
              styles: RNC(styleSheet),
            };

            return (
                <StyledComponent
                    {...nextProps}
                />
            );
        }

    }

    return StyleManager;
};
