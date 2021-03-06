/**
 * Field Component Demo for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let GroupList = require('tingle-group-list');
let classnames = require('classnames');

let Field = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (<div>
            <GroupList className="tBCf" title="左右结构">
                <Field label="测试文字">
                    <div className="tBC9 tFCf">自定义输入元素的区域</div>
                </Field>
            </GroupList>
            <GroupList className="tBCf" title="上下结构">
                <Field>
                    <div className="tBC9 tFCf">自定义输入元素的区域</div>
                </Field>
            </GroupList>
        </div>);
    }
};

module.exports = Demo;