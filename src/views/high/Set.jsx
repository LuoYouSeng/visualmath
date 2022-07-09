import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HighMenu from '../../components/HighMenu'
import { useEffect } from 'react'
import KatexBlock from '../../components/KatexBlock'
import set_1 from '@/assets/image/set_1.svg'
import set_2 from '@/assets/image/set_2.svg'
import Sketch from "react-p5"
import Exercise from '@/components/Exercise'
import '@/assets/css/LearnPage.css'

export default function(){
    
    const exercises = {
        questions: [
            {
                title: String.raw`A=\{\{\}, \{1,2,3, \{\}\}\}, card(A)=`,
                choices: [
                    {text: `1`, answer: false},
                    {text: `2`, answer: true},
                    {text: `4`, answer: false},
                    {text: `5`, answer: false},
                ]
            },
            {
                title: String.raw`A=[-5,5], \complement_{\mathbb{R}}A=`,
                choices: [
                    {text: String.raw`[-\infin, -5]\cup [5, \infin]`, answer: false},
                    {text: String.raw`[-\infin, -5)\cup (5, \infin]`, answer: false},
                    {text: String.raw`(-\infin, -5]\cup [5, \infin)`, answer: false},
                    {text: String.raw`(-\infin, -5)\cup (5, \infin)`, answer: true},
                ]
            },
            {
                title: String.raw`A=(-8,-5], B=(-6, 4), C=[4, 8], D=(-4, 10), (A\cup B\cup C)\cap D`,
                choices: [
                    {text: String.raw`(-4, 8]`, answer: true},
                    {text: String.raw`[-4, 8)`, answer: false},
                    {text: String.raw`(-8, 10]`, answer: false},
                    {text: String.raw`[-8, 10)`, answer: false},
                ]
            },
            {
                title: String.raw`A \subset U, A \cup \complement_UA =`,
                choices: [
                    {text: String.raw`A`, answer: false},
                    {text: String.raw`A\cap U`, answer: false},
                    {text: String.raw`A \cup U`, answer: false},
                    {text: String.raw`U`, answer: true},
                ]
            },
            {
                title: String.raw`以下哪个是正确的`,
                choices: [
                    {text: String.raw`\mathbb{R} \subset \mathbb{Q}`, answer: false},
                    {text: String.raw`\varnothing 是所有集合的子集`, answer: true},
                    {text: String.raw`\{1,2,3\}的子集个数是7个`, answer: false},
                    {text: String.raw`(A \cap B) \cup B = A`, answer: false},
                ]
            }
        ]
    }

    let _1_x1 = 140
    let _1_y1 = 200

    let _1_x2 = 440
    let _1_y2 = 200

    let _2_x1 = 150
    let _2_y1 = 150

    let _2_image

    let _1_handle

    useEffect(()=>{
        document.querySelector('title').innerText += '|集合'
    }, [])

    const setup2 = (p5, canvasParentRef) => {
        p5.createCanvas(600, 400).parent(canvasParentRef)
        _2_image = p5.loadImage(set_2)
    }

    const draw2 = (p5) => {
        p5.background(200)
        
        p5.textSize(20)
        p5.text('U', 10, 30)

        p5.ellipse(_2_x1, _2_y1, 200)
        p5.text('A', _2_x1, _2_y1)

        if(_2_x1 > 300){
            p5.image(_2_image, 100, 200)
        }else{
            p5.image(_2_image, 500, 200)
        }
    }

    const mouseDragged2 = (p5) => {
        _2_x1 = p5.mouseX
        _2_y1 = p5.mouseY
    }

    const setup1 = (p5, canvasParentRef) => {
        p5.createCanvas(600, 400).parent(canvasParentRef)
    }

    const draw1 = (p5) => {
        
        p5.background(200)
        
        p5.fill(0,0,255,50)
        p5.textSize(20)

        p5.ellipse(_1_x1, _1_y1, 200, 200)
        p5.text('A', _1_x1 - 100, _1_y1 - 100)

        p5.fill(255,0,0,50)
        p5.ellipse(_1_x2, _1_y2, 200, 200)
        p5.text('B',_1_x2 - 100, _1_y2 - 100)

        p5.stroke(0)

        let two_cirle = Math.pow(Math.pow(_1_x2-_1_x1, 2) + Math.pow(_1_y2-_1_y1, 2), 0.5)
        if(two_cirle < 200){
            let size = 2000/two_cirle
            size = size > 50 ? 50 : size

            p5.textSize(size)
            p5.fill(255,0,255,50)
            
            let cx = (_1_x1 + _1_x2) / 2
            let cy = (_1_y1 + _1_y2) / 2
            
            p5.text('A∩B', cx - size / 2, cy + size / 2)
        }
    }

    const dragged1 = (p5) => {
        let x = p5.mouseX
        let y = p5.mouseY
        let d1 = Math.pow(Math.pow(x-_1_x1, 2) + Math.pow(y-_1_y1, 2), 0.5)
        let d2 = Math.pow(Math.pow(x-_1_x2, 2) + Math.pow(y-_1_y2, 2), 0.5)
        if(d1 < 100 && _1_handle != '2'){
            _1_x1 = x
            _1_y1 = y
            _1_handle = '1'
        }else if(d2 < 100 && _1_handle != '1'){
            _1_x2 = x
            _1_y2 = y
            _1_handle = '2'
        }
    }

    const release1 = () => {
        _1_handle = null
    }

    return (
        <>
            <Navbar />
            <div className='w-full px-4 md:px-20'>
                <HighMenu current={0} />
                <div className='title'>
                    集合
                </div>
                <div className='paragraph'>
                    集合是一种数学模型，集合中的事物称作<span className='strong'>元素</span>
                </div>
                <div className='paragraph'>
                    元素可以是<span className='strong'>任何确定的事物</span>
                </div>
                <div className='paragraph'>
                    假设有一个盒子如下
                </div>
                <div className='image'>
                    <img className='w-1/3' src={set_1} alt="set_1.svg" />
                </div>
                <div className='paragraph'>
                    用数学的符号表达，就是
                </div>
                <KatexBlock tex={String.raw`盒子=\{手机, 钥匙, 相机, 计算器\}`} />
                <div className='paragraph'>
                    一般情况，我们会用英文或希腊字母来给集合命名
                </div>
                <div className='title'>
                    集合与元素的关系
                </div>
                <div className='paragraph'>
                    当我们说一个元素在一个集合中时，称这个元素<span className='strong'>属于</span>这个集合，用符号
                </div>
                <KatexBlock tex="\in"/>
                <div className='paragraph'>
                    来表示，继上面的盒子例子，我们可以说
                </div>
                <KatexBlock tex={String.raw`手机\in盒子`} />
                <div className='paragraph'>
                    当一个事物不在集合中时，称这个元素<span className='strong'>不属于</span>这个集合，用符号
                </div>
                <KatexBlock tex="\notin"/>
                <div className='paragraph'>
                    来表示，比如
                </div>
                <KatexBlock tex={String.raw`钱包\notin盒子`} />
                <div className='title'>
                    集合元素的个数表示
                </div>
                <div className='paragraph'>
                    我们会用card(集合)来表示一个集合中元素的个数，比如
                </div>
                <KatexBlock tex={String.raw`card(盒子)=4`} />
                <div className='title'>
                    空集
                </div>
                <div className='paragraph'>
                    当一个集合中<span>没有元素</span>时，称这个集合为<span>空集</span>，数学符号为
                </div>
                <KatexBlock tex={String.raw`\varnothing`} />
                <div className='title'>
                    常见的集合
                </div>
                <div className='paragraph'>
                    数学上定义了一些常用的集合
                </div>
                <KatexBlock tex={String.raw`\mathbb{R}-全部实数\\\mathbb{Q}-全部有理数\\\mathbb{Z}-全部整数\\\mathbb{N}-自然数集合\\\mathbb{N}^*或\mathbb{N}_+-全部正整数`} />
                <div className='title'>
                    集合的性质
                </div>
                <div className='paragraph'>
                    集合有三个性质，分别是<span className='strong'>确定性</span>、<span className='strong'>无序性</span>、<span className='strong'>互异性</span>
                </div>
                <div className='subtitle'>
                    确定性
                </div>
                <div className='paragraph'>
                    我们要求集合中的元素是明确无歧义的
                </div>
                <div className='paragraph'>
                    例如全世界所有高的人的这个集合是<span className='strong'>不明确</span>的，因为我们没有说明多高才算高
                </div>
                <div className='subtitle'>
                    无序性
                </div>
                <div className='paragraph'>
                    集合中的元素是<span className='strong'>没有顺序</span>的，例如{"{1,2}"}和{"{2,1}"}是同一集合
                </div>
                <div className='subtitle'>
                    互异性
                </div>
                <div className='paragraph'>
                    我们要求集合中的元素是<span className='strong'>不能重复</span>的
                </div>
                <div className='paragraph'>
                    因此，像{"{1,1}"}是不正确的，因为重复出现了1这个元素
                </div>
                <div className='title'>
                    集合与集合的关系
                </div>
                <div className='subtitle'>
                    相等
                </div>
                <div className='paragraph'>
                    当两个集合中的<span className='strong'>所有元素相同</span>时，我们说两个集合相等，例如
                </div>
                <KatexBlock tex={String.raw`\{1,2,3\}=\{3,2,1\}`}/>
                <div className='subtitle'>
                    包含
                </div>
                <div className='paragraph'>
                    如果一个集合的任意元素都属于另一个集合，我们就说这个集合<span className='strong'>包含于</span>另一个集合
                </div>
                <div className='paragraph'>
                    我们用符号
                </div>
                <KatexBlock tex={String.raw`\subseteq`} />
                <div className='paragraph'>
                    例如{"A={1,2,3,4}"}，{"B={2,3}"}，B中的元素A也有，我们就可以写成
                </div>
                <KatexBlock tex={String.raw`B\subseteq A`} />
                <div className='paragraph'>
                    上述例子中B并不等于A，也就是说A中存在B没有的元素，我们就称B是A的真子集，记作
                </div>
                <KatexBlock tex={String.raw`B\subset A`} />
                <div className='paragraph'>
                    子集与真子集的区别是，子集有可能是相等的，但真子集一定不相等
                </div>
                <div className='paragraph'>
                    当两个集合互为子集时，两个集合互相有对面集合中的元素，这两个集合相等
                </div>
                <KatexBlock tex={String.raw`A\subset B , B\subset A \iff A=B`} />
                <div className='title'>
                    集合的运算
                </div>
                <div className='subtitle'>
                    交
                </div>
                <div className='paragraph'>
                    当我们想表示两个或多个集合的<span className='strong'>公共部分</span>时，就会用交符号<KatexBlock displayMode={false} tex={String.raw`\cap`} />，或者写成相乘的形式
                </div>
                <KatexBlock tex={String.raw`A=\{1,2,3,4\} \ \ B=\{3,4,5,6\}\\ AB = A\cap B=\{3,4\}`} />
                <KatexBlock tex={String.raw`A=\{1,2,3\} \ \ B=\{2,3,4\} \ \ C=\{3,4,5\} \\ ABC = A\cap B\cap C=\{3\}`} />
                <Sketch setup={setup1} draw={draw1} mouseDragged={dragged1} mouseReleased={release1}></Sketch>
                <div className='subtitle'>
                    并
                </div>
                <div className='paragraph'>
                    当我们想将两个集合中的元素<span className='strong'>合并</span>时，就会用交符号<KatexBlock displayMode={false} tex={String.raw`\cup`} />或者<KatexBlock displayMode={false} tex={String.raw`+`} />
                </div>
                <KatexBlock tex={String.raw`A=\{1,2,3,4\} \ \ B=\{3,4,5,6\}\\ A + B = A\cup B=\{1,2,3,4,5,6\}`} />
                <div className='subtitle'>
                    补
                </div>
                <div className='paragraph'>
                    补集的前提是要有一个<span className='strong'>全集</span>，全集可以是任何集合
                </div>
                <div className='paragraph'>
                    我们想要在全集这个范围类，且不是某个集合中的元素，就会用补集符号<KatexBlock tex={String.raw`\complement`} displayMode={false}/>
                </div>
                <div className='paragraph'>
                    假设全集是U，有A集合，那么A的补集就说<KatexBlock tex={String.raw`\complement_UA`} displayMode={false}/>
                </div>
                <Sketch setup={setup2} draw={draw2} mouseDragged={mouseDragged2}></Sketch>
                <div className='title'>
                    区间
                </div>
                <div className='paragraph'>
                    区间是指数轴上的一段区域的集合，比如
                </div>
                <KatexBlock tex={String.raw`1\lt x \le 9`} />
                <div className='paragraph'>
                    我们就可以写成
                </div>
                <KatexBlock tex={String.raw`x \in (1,9]`} />
                <div className='paragraph'>
                    把小于变为小括号，把小于等于变为中括号
                </div>
                <div className='paragraph'>
                    如果两边都是小括号，被称作<span className='strong'>开区间</span>，如果两边都是中括号，被称作<span className='strong'>闭区间</span>
                </div>
                <div className='paragraph'>
                    如果一边小括号一边中括号，被称为<span className='strong'>半开半闭区间</span>
                </div>
                <div className='paragraph'>
                    如果有正无穷<KatexBlock displayMode={false} tex={String.raw`\infin`}/>或负无穷<KatexBlock displayMode={false} tex={String.raw`-\infin`}/>，那一边一定是小括号，因为无穷没有尽头，例如<KatexBlock displayMode={false} tex={String.raw`(-\infin, 0]`}/>
                </div>
                <div className='title'>
                    集合的描述方式
                </div>
                <div className='subtitle'>
                    列举法
                </div>
                <div className='paragraph'>
                    将集合中全部的元素写出来，称之为列举法，例如一个包含1-5整数的集合
                </div>
                <KatexBlock tex={String.raw`\{1,2,3,4,5\}`}/>
                <div className='subtitle'>
                    描述法
                </div>
                <div className='paragraph'>
                    将集合中的元素用数学式子表示，称为描述法，继上面的例子，也可以写成
                </div>
                <KatexBlock tex={String.raw`\{x|1\le x \le 5, x \in \mathbb{Z} \}`}/>
                <div className='paragraph'>
                    或
                </div>
                <KatexBlock tex={String.raw`[1,5]\cap \mathbb{Z}`}/>
                <div className='paragraph'>
                    等方法
                </div>
                <Exercise exercises={exercises} />
            </div>
            <Footer />
        </>
    )
}