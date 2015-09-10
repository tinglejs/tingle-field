# Field [![npm version](https://badge.fury.io/js/tingle-field.svg)](http://badge.fury.io/js/tingle-field)

基础表单域

<img src="https://img.alicdn.com/tps/TB1ZMPVJpXXXXXaXFXXXXXXXXXX-750-1254.png" width="375"/>

## Simple Usage

```javascript
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (<div>
                <Field label="测试文字">
                    <div className="tBC9 tFCf">自定义输入元素的区域</div>
                </Field>
        </div>);
    }
};

```

## 可用配置


| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义的扩展样式名称|
|label|optional|-|表单域label文字标签|
|tappable|optional|false|是否有 tap 效果|
|multiLine|optional|false|是否多行显示模式|

> 所有props都是可选的。

> 通常会配合GroupList一起使用。

## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-field/issues)