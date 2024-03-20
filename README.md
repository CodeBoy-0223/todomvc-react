
# TodoMVC - React

# 背景

基于当前掌握到的 React 知识进行编码练习，起到一个实践+思考的作用，有利于快速掌握 React 的基础知识。

# 目标

> TodoMVC 参考示例链接：https://todomvc.com/examples/react/dist/

## TodoMVC - v1

1. 尝试拆分组件，明晰 HTML -> JSX 的过程中有哪些需要注意的点。
   | HTML  | JSX                                                          |
   | ----- | ------------------------------------------------------------ |
   | class | className                                                    |
   | style | 接收对象类型值，且形如 font-size 的属性可以写成 fontSize ... |
   | for   | htmlFor                                                      |

2. 思考状态的书写位置

   - 某个组件使用的状态，放在其自身的 state 中。
   - 多个组件使用的状态，可以考虑借用「状态提升机制」，放在他们共同父组件的 state 中。

3. 思考组件间的通信方式（目前只接触到 props）

   - 父组件给子组件传递数据，使用 props 直接传递。
   - 子组件给父组件传递数据，则需要父组件传递 props，且 props 是一个函数，其参数可以作为子组件传递数据给父组件的“门户”。

4. 理清 `defaultChecked & checked` 和 `defaultValue & value` 之间的关系

