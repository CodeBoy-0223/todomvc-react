
# TodoMVC - React

# 背景

基于当前掌握到的 React 知识进行编码练习，起到一个实践+思考的作用，有利于快速掌握 React 的基础知识。

# 目标

> TodoMVC 参考示例链接：https://todomvc.com/examples/react/dist/

## TodoMVC - v2

与 v1 版本相比，不同点在于：

1. `todoList` 状态定义在 `TodoList` 组件中
2. 使用 `pub-sub` 的方式进行兄弟组件之间的通信（替换了 `状态提升` 的方案）
3. `TodoFooter` 组件可以控制如何展示 `todoList` 中的内容（类似于 `Vue` 计算属性的思想）

> v3 版本将要进行的事项：
>
> - 引入集中式状态管理工具 —— `redux`
> - 引入路由 —— `react-router-dom@5`