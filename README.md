基础表单域

## Simple Usage

```
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

```

## 可用配置


| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义的扩展样式名称|
|label|optional|-|表单域label文字标签|

> 所有props都是可选的。

> 通常会配合GroupList一起使用。

## Links 相关链接 

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-field/issues)