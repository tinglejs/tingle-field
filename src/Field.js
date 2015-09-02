/**
 * Field Component for tingle
 * @auther gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let classnames = require('classnames');

class Field extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let t = this;

        return (
            <div className={classnames('tField tFBH', {
                [t.props.className]: !!t.props.className,
                'tFBAC': !t.props.multiLine
            })}>
                {t.props.label && <div className="tFieldLabel">{t.props.label}</div>}
                <div className="tFB1 tPR tFieldBox">
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

Field.displayName = 'Field';

module.exports = Field;