import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    errorMsg: PropTypes.array,
    className: PropTypes.string
};

const defaultProps = {
    errorMsg: [],
    className: ''
};


class FormError extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderError = () => {
        let classes = 'error';
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }
        const {errorMsg} = this.props;
        return errorMsg.length > 0 ? (
            <span className={classes} style={this.props.style}>
                <i className='uf uf-exc-t-o'/>
                {errorMsg[0]}
            </span>
        ) : ''
    }

    render() {
        return this.renderError()
    }
}

FormError.propTypes = propTypes;
FormError.defaultProps = defaultProps;
export default FormError;
