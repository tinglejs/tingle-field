/**
 * Field Component for tingle
 * @auther gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');

class Field extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var t = this;

        return (
            <div className={classnames('tField tFBH tFBAC', {
                [t.props.className]: !!t.props.className
            })}>
                {t.props.label && <div className="tFieldLabel tLH1_3">{t.props.label}</div>}
                <div className="tFB1 tPR">
                    {t.props.children}
                </div>
            </div>
        );
    }
}

Field.defaultProps = {
    label: '',
}

// http://facebook.github.io/react/docs/reusable-components.html
Field.propTypes = {
    label: React.PropTypes.string,
}

module.exports = Field;