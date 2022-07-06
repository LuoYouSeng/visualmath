import Menu from "./Menu";

const menuItems = [
    {text: '集合', link: './set'},
    {text: '函数', link: './function'}
]

export default function({current}){
    return <Menu items={menuItems} current={current} />
}