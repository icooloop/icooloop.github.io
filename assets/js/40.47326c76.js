(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{447:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境搭建"}},[s._v("#")]),s._v(" 1.环境搭建")]),s._v(" "),a("h4",{attrs:{id:"_1-1-获取vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取vue"}},[s._v("#")]),s._v(" 1.1 获取vue")]),s._v(" "),a("ul",[a("li",[s._v("项目地址：https://github.com/vuejs/vue")]),s._v(" "),a("li",[s._v("迁出项目： git clone https://github.com/vuejs/vue.git")]),s._v(" "),a("li",[s._v("当前版本号：2.6.11")])]),s._v(" "),a("h4",{attrs:{id:"_1-2-调试环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-调试环境搭建"}},[s._v("#")]),s._v(" 1.2 调试环境搭建")]),s._v(" "),a("ul",[a("li",[s._v("安装依赖： npm i ;  安装phantom.js时即可终止")]),s._v(" "),a("li",[s._v("安装rollup： npm i -g rollup")]),s._v(" "),a("li",[s._v("修改dev脚本，添加sourcemap，package.json")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup -w -c scripts/config.js --sourcemap --environment TARGET:web- full-dev"')]),s._v(",\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("运行开发命令： npm run dev")]),s._v(" "),a("li",[s._v("引入前面创建的vue.js，samples/commits/index.html")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../dist/vue.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_1-3-文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-文件结构"}},[s._v("#")]),s._v(" 1.3 文件结构")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- dist                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发布目录                  ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- examples            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#范例                     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- flow                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#针对flow的类型声明                        ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- packages            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#核心代码之外的独立库                     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- scripts             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#构建脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- src                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#源码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- compiler        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编译器相关")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- core            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#核心代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- components  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通用组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- global-api  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局api")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- instance    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#构造函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- observe     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#响应式相关")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- util        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#工具类")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- vdom        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#虚拟dom")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--- config.js  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--- index.js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- platforms       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#平台")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- web \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- weex        \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- server\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- sfc\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- shared\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("                             \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-- types               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ts类型声明                             ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h4",{attrs:{id:"_1-4-术语解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-术语解释"}},[s._v("#")]),s._v(" 1.4 术语解释")]),s._v(" "),a("ul",[a("li",[s._v("runtime：仅包含运行时，不包含编译器")]),s._v(" "),a("li",[s._v("common：cjs规范，用于webpack1")]),s._v(" "),a("li",[s._v("esm：ES模块，用于webpack2+")]),s._v(" "),a("li",[s._v("umd: universal module definition，兼容cjs和amd，用于浏览器")])]),s._v(" "),a("h4",{attrs:{id:"_1-5-入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-入口"}},[s._v("#")]),s._v(" 1.5 入口")]),s._v(" "),a("p",[s._v("dev脚本中 -c scripts/config.js 指明配置文件所在"),a("br"),s._v("\n参数 TARGET:web-full-dev 指明输出文件配置项，line:123")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Runtime+compiler development build (Browser)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web-full-dev'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web/entry-runtime-with-compiler.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口 ")]),s._v("\n        dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist/vue.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标文件 ")]),s._v("\n        format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出规范 ")]),s._v("\n        env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n        alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" he"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./entity-decoder'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n        banner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_2-初始化流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化流程"}},[s._v("#")]),s._v(" 2.初始化流程")]),s._v(" "),a("h4",{attrs:{id:"_2-1-整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-整体流程"}},[s._v("#")]),s._v(" 2.1 整体流程")]),s._v(" "),a("p",[s._v("new Vue() => _init() => $mount() => mountComponent() =>"),a("br"),s._v("\nnew Watcher() => updateComponent() => render() => _update()"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"platforms-web-entry-runtime-with-compiler-js-入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platforms-web-entry-runtime-with-compiler-js-入口"}},[s._v("#")]),s._v(" "),a("code",[s._v("platforms/web/entry-runtime-with-compiler.js")]),s._v(" 入口")]),s._v(" "),a("ul",[a("li",[s._v("扩展默认$mount方法：处理template或el选项"),a("br"),s._v(" "),a("br")])]),s._v(" "),a("h4",{attrs:{id:"platforms-web-runtime-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platforms-web-runtime-index-js"}},[s._v("#")]),s._v(" "),a("code",[s._v("platforms/web/runtime/index.js")])]),s._v(" "),a("ul",[a("li",[s._v("安装web平台特有指令和组件")]),s._v(" "),a("li",[s._v("定义__patch__：补丁函数，执行patching算法进行更新")]),s._v(" "),a("li",[s._v("定义$mount：挂载vue实例到指定宿主元素（获得dom并替换宿主元素）"),a("br"),s._v(" "),a("br")])]),s._v(" "),a("h4",{attrs:{id:"core-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-index-js"}},[s._v("#")]),s._v(" "),a("code",[s._v("core/index.js")])]),s._v(" "),a("ul",[a("li",[s._v("初始化全局api\n具体如下：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" \nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" del \nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextTick "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nextTick \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initUse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现Vue.use函数 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现Vue.mixin函数 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initExtend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现Vue.extend函数 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initAssetRegisters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册实现Vue.component/directive/filter")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("br"),s._v(" "),a("h4",{attrs:{id:"core-instance-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-instance-index-js"}},[s._v("#")]),s._v(" "),a("code",[s._v("core/instance/index.js")])]),s._v(" "),a("ul",[a("li",[s._v("Vue构造函数定义")]),s._v(" "),a("li",[s._v("定义Vue实例API")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Vue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构造函数仅执行了_init t")]),s._v("\n    his"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实现init函数 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stateMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 状态相关api $data,$props,$set,$delete,$watch ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eventsMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件相关api $on,$once,$off,$emit ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lifecycleMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生命周期api _update,$forceUpdate,$destroy ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderMixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 渲染api _render,$nextTick")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("br"),s._v(" "),a("h4",{attrs:{id:"core-instance-init-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-instance-init-js"}},[s._v("#")]),s._v(" "),a("code",[s._v("core/instance/init.js")])]),s._v(" "),a("ul",[a("li",[s._v("创建组件实例，初始化其数据、属性、事件等")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initLifecycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $parent,$root,$children,$refs ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理父组件传递的事件和回调 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initRender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $slots,$scopedSlots,_c,$createElement ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'beforeCreate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initInjections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取注入数据 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化props，methods，data，computed，watch ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initProvide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 提供数据注入 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'created'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("br"),s._v(" "),a("h4",{attrs:{id:"mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount"}},[s._v("#")]),s._v(" $mount")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mountComponent          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行挂载，获取vdom并转换为dom")]),s._v("\nnew Watcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建组件渲染watcher")]),s._v("\n- updateComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行初始化或更新")]),s._v("\n- update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化或更新，将传入vdom转换为dom，初始化时执行的是dom创建操作")]),s._v("\n- render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# src\\core\\instance\\render.js # 渲染组件，获取vdom")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_3-数据响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据响应式"}},[s._v("#")]),s._v(" 3.数据响应式")]),s._v(" "),a("p",[s._v("数据响应式是MVVM框架的一大特点，通过某种策略可以感知数据的变化。Vue中利用了JS语言特性\nObject.defineProperty()，通过定义对象属性getter/setter拦截对属性的访问。\n具体实现是在Vue初始化时，会调用initState，它会初始化data，props等，这里着重关注data初始\n化，")]),s._v(" "),a("h4",{attrs:{id:"_3-1-整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-整体流程"}},[s._v("#")]),s._v(" 3.1 整体流程")]),s._v(" "),a("h4",{attrs:{id:"initstate-vm-component-src-core-instance-state-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initstate-vm-component-src-core-instance-state-js"}},[s._v("#")]),s._v(" initState (vm: Component) src\\core\\instance\\state.js")]),s._v(" "),a("p",[s._v("初始化数据，包括props、methods、data、computed和watch"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"initdata核心代码是将data数据响应化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initdata核心代码是将data数据响应化"}},[s._v("#")]),s._v(" initData核心代码是将data数据响应化")]),s._v(" "),a("p",[s._v("function initData (vm: Component) { // 执行数据响应化 observe(data, true /* asRootData */) }"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"core-observer-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-observer-index-js"}},[s._v("#")]),s._v(" core/observer/index.js")]),s._v(" "),a("p",[s._v("observe方法返回一个Observer实例"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"core-observer-index-js-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-observer-index-js-2"}},[s._v("#")]),s._v(" core/observer/index.js")]),s._v(" "),a("p",[s._v("Observer对象根据数据类型执行对应的响应化操作\ndefineReactive定义对象属性的getter/setter，getter负责添加依赖，setter负责通知更新"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"core-observer-dep-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-observer-dep-js"}},[s._v("#")]),s._v(" core/observer/dep.js")]),s._v(" "),a("p",[s._v("Dep负责管理一组Watcher，包括watcher实例的增删及通知更新"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[s._v("#")]),s._v(" Watcher")]),s._v(" "),a("p",[s._v("Watcher解析一个表达式并收集依赖，当数值变化时触发回调函数，常用于$watch API和指令中。\n每个组件也会有对应的Watcher，数值变化会触发其update函数导致重新渲染")]),s._v(" "),a("h4",{attrs:{id:"_3-2-数组响应化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数组响应化"}},[s._v("#")]),s._v(" 3.2 数组响应化")]),s._v(" "),a("p",[s._v("数组数据变化的侦测跟对象不同，我们操作数组通常使用push、pop、splice等方法，此时没有办法得\n知数据变化。所以vue中采取的策略是拦截这些方法并通知dep。"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"src-core-observer-array-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-core-observer-array-js"}},[s._v("#")]),s._v(" src\\core\\observer\\array.js")]),s._v(" "),a("p",[s._v("为数组原型中的7个可以改变内容的方法定义拦截器"),a("br"),s._v(" "),a("br")]),s._v(" "),a("h4",{attrs:{id:"observer中覆盖数组原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer中覆盖数组原型"}},[s._v("#")]),s._v(" Observer中覆盖数组原型")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换数组原型 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("protoAugment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayMethods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value.__proto__ = arrayMethods ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("observeArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);