## RectMenu 宽度适配组件

主要用于适配 `<1200px` 、`1200px ~ 1400px`、`>1400px`

### 设计思路

一般使用此组件，都是 左侧菜单栏 + 右侧内容区，为了避免耦合，该组件只做宽度适配工作。默认给定各尺寸的宽度，可通过外部自定义，提高灵活性。

父组件获取左侧子组件的真实宽度（目的为了正确处理右侧内容区的间距），之后处理自身宽度，再让右侧组件居中显示即可

### 使用

```jsx
import RectMenu from '@teacher/components/RectMenu';

const getRectSize = size => {
  console.log('当前尺寸: ', size);
};

return (
  <div styleName="wrapper">
    <RectMenu onSizeChange={getRectSize} waitTime={100}>
      <RectMenu.Left>...</RectMenu.Left>
      <RectMenu.Right>...</RectMenu.Right>
    </RectMenu>
  </div>
);
```

### ParentComponent API

因为适配小屏会修改左侧组件的背景色，该适配组件只进行尺寸适配，对传入组件的样式不进行处理，故而抛出当前尺寸值，由具体组件进行处理样式

通过监听 `resize` 事件，获取实时宽度，再经过防抖处理，默认 waitTime = 500（单位 ms），如果你觉得太快，可修改

默认情况下的 `leftComponent` 与 `rightComponent` 是紧挨一起，如果你不想传递 style，但是又想存在间距，那么你可以设置 `hasMargin = true` （默认间距 56px）

| 参数         | 说明                                               | 类型                 | 默认值 |
| ------------ | -------------------------------------------------- | -------------------- | ------ |
| onSizeChange | 方法返回当前尺寸适配， small \| middle \| large \| | (size: string) => {} | -      |
| waitTime     | 防抖时间，默认 500ms                               | number               | 300    |
| style        | 支持自定义样式                                     | Object               | {}     |
| arrowZIndex  | 设置小屏的箭头 z-index                             | number               | 3      |

### RectMenu.Left API

| 参数  | 说明           | 类型   | 默认值 |
| ----- | -------------- | ------ | ------ |
| style | 支持自定义样式 | Object | {}     |

### RectMenu.Right API

| 参数  | 说明           | 类型   | 默认值 |
| ----- | -------------- | ------ | ------ |
| style | 支持自定义样式 | Object | {}     |
