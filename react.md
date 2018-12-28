## 一、h5+
h5+  HTML5中国产业联盟
hbuilder 源代码被提交到云端，代码泄露   使用 gyz418@126.com 老密码注册账号获得 appId

h5+ 跟 ionic 都是用工具打包 html+css+js
rn 跟 weex(vue) 打包编译成原生android、ios代码，组件比h5 和 ionic少


cmd/git i5ting_doc -f xx.md  md文件转换为 html
## 二、rn 
### 2.1安装jdk8  安装目录：d:soft 配置系统变量
  > JAVA_HOME:  D:\soft\jdk1.8.0_121
  
  > 新增 path  %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
  
  > CLASSPATH .;JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
  
### 2.2.python rn用到  add python.exe to Path  
  > cmd： python 安装成功
  
### 2.3 安装android sdk manager 可如下配置安卓环境 
  1. 安装`installer_r24.3.4-windows.exe`，假设安装到C盘下的android目录
  3. 解压`platform-tools`，放到`platform-tools`文件夹下
  4. `android sdk manager` 安装 `Android SDK Build-tools 27.0.3`、`SDK Platform 27`
  5. 在安装目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras -> android`文件夹下
  6. 配置安装环境变量：在系统环境变量中新建`ANDROID_HOME`，值为android SDK Manager的安装路径`D:soft\android-sdk`，紧接着，在Path中新增`;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`

### 2.4 npm i -g react-native-cli  rn推荐用yarn安装，比npm快

### 2.5 react-native init rn1224   react-native run-android
  > 打包好的文件，放到了`android\app\build\outputs\apk`目录下
  
### 2.6 打开total control 连接手机

## 三、 weex 阿里  vue
### 3.1 npm i -g weex-toolkit
1. 运行`weex create project-name`初始化Weex项目 
2. `weex platform add android`安装android模板 
3.运行`weex run android`，打包部署weex项目
4. 需要安装  `Android SDK Platform 26,Android SDK Build-Tools 26`

## 四、react

### 4.1虚拟DOM
```
前端实现表格排序（一般后端提供接口），直接对所有数据排序再渲染DOM，浪费性能，引入虚拟DOM，按需只修改渲染变动的数据
手动模拟DOM树如下，用JS创建对象，模拟每个DOM节点，DOM节点互相嵌套，形成DOM树
var p ={
  tagName:'p',
  attrs:{
    id:''
  },
  children:[
    'haha',
    {
      tagName:'span',
      children:[
        'this is span'
      ]
    }
  ]
}
对比两个虚拟DOM不同之处，进行修改，实现DOM节点的高效更新
```
### 4.2Diff算法
 - tree diff:新旧DOM树，逐层对比的方式，就叫做 tree diff,每当我们从前到后，把所有层的节点对比完后，必然能够找到那些 需要被更新的元素；
 - component diff：每一层组件对比,如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置；
 - element diff:在组件中的元素对比
 - key：key这个属性，可以把 页面上的 DOM节点 和 虚拟DOM中的对象，做一层关联关系；

![图片](./React中组件的生命周期%20-%20详解.png) 

### 4.3生命周期
1 `static defaultProps={}` 初始化props属性默认值
2 创建阶段
  - 2.1 `this.state={}` 初始化组件私有数据，类似vue的 data(){state:xx}
  - 2.2 `componentWillMount` 虚拟DOM还没创建 
  - 2.3 `render` 创建虚拟DOM
  - 2.4 `componentDidMount` 页面渲染完成
  
3 运行阶段
  + 3.1 状态(state)改变时，`shouldComponentUpdate`(组件是否更新), 返回true 时，`componentWillUpdate`->`render`重新渲染虚拟DOM->`componentDidUpdate更新页面完成`
  + 3.2 父组件传递的属性props 改变时，`componentWillReceiveProps`(组件接收新props) -> `shouldComponentUpdate`

4 卸载
  + unmount-> `componentWillUnmount`还没开始卸载

组件生命周期的执行顺序：
+ Mounting：
  - constructor()
  - componentWillMount()
  - render()
  - componentDidMount()
+ Updating：
  - componentWillReceiveProps(nextProps)
  - shouldComponentUpdate(nextProps, nextState)
  - componentWillUpdate(nextProps, nextState)
  - render()
  - componentDidUpdate(prevProps, prevState)
+ Unmounting：
  - componentWillUnmount()  