import Menu from "./Menu";

const menuItems = [
    {text: '集合', link: './set'},
    {text: '函数', link: './function'},
    {text: '指数', link: './exponentiation'},
    {text: '对数', link: './logarithm'},
    {text: '直线方程', link: './line'},
    {text: '圆方程', link: './circle'},
    {text: '三角函数', link: './trigonometric_function'},
    {text: '向量', link: './vector'},
    {text: '数列', link: './number_sequence'},
    {text: '圆锥曲线', link: './conic_section'},
    {text: '概率', link: './probability'},
    {text: '虚数', link: './nombre_imaginaire'},
    {text: '参数方程', link: './parametric_equation'},
    {text: '极坐标', link: './polar_coordinate_system'},
]

export default function({current}){
    return <Menu items={menuItems} current={current} />
}