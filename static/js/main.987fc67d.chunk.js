(this.webpackJsonpcodezila=this.webpackJsonpcodezila||[]).push([[0],{102:function(e,t,a){e.exports=a(352)},107:function(e,t,a){},139:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),c=a.n(r),o=(a(107),a(8)),i=a(7),s=a(11),m=a(9),u=a(10),h=(a(56),a(88)),p=a.n(h),d=a(25),E=a(100),b=(a(108),a(109),a(110),a(111),a(354)),g=a(361),f=a(355),v=a(92),y=a(43),O=a(89),j=a(22),x=a(90),k=a.n(x),w=(a(119),a(120),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={value:"",placeholder:"Placeholder Text",theme:"monokai",mode:"javascript",enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,fontSize:14,showGutter:!0,showPrintMargin:!0,highlightActiveLine:!0,enableSnippets:!1,showLineNumbers:!0},a.setPlaceholder=a.setPlaceholder.bind(Object(j.a)(a)),a.setTheme=a.setTheme.bind(Object(j.a)(a)),a.setMode=a.setMode.bind(Object(j.a)(a)),a.onChange=a.onChange.bind(Object(j.a)(a)),a.setFontSize=a.setFontSize.bind(Object(j.a)(a)),a.setBoolean=a.setBoolean.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onLoad",value:function(){console.log("i've loaded")}},{key:"onChange",value:function(e){console.log("change",e),this.setState({value:e})}},{key:"onSelectionChange",value:function(e,t){console.log("select-change",e),console.log("select-change-event",t)}},{key:"onCursorChange",value:function(e,t){console.log("cursor-change",e),console.log("cursor-change-event",t)}},{key:"onValidate",value:function(e){console.log("onValidate",e)}},{key:"setPlaceholder",value:function(e){this.setState({placeholder:e.target.value})}},{key:"setTheme",value:function(e){this.setState({theme:e.target.value})}},{key:"setMode",value:function(e){this.setState({mode:e.target.value})}},{key:"setBoolean",value:function(e,t){this.setState(Object(O.a)({},e,t))}},{key:"setFontSize",value:function(e){this.setState({fontSize:parseInt(e.target.value,10)})}}]),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(k.a,{placeholder:"Write Your Question Here....",mode:"java",theme:"kuroir",name:"question",onLoad:this.onLoad,onChange:this.onChange,onSelectionChange:this.onSelectionChange,onCursorChange:this.onCursorChange,onValidate:this.onValidate,value:this.state.value,fontSize:"14",showPrintMargin:this.state.showPrintMargin,showGutter:this.state.showGutter,highlightActiveLine:this.state.highlightActiveLine,setOptions:{useWorker:!1,enableBasicAutocompletion:this.state.enableBasicAutocompletion,enableLiveAutocompletion:this.state.enableLiveAutocompletion,enableSnippets:this.state.enableSnippets,showLineNumbers:this.state.showLineNumbers,tabSize:1},className:"questionInput"})}}]),t}(n.Component)),C="null",N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={code:C},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(g.a,{noValidate:!0},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(w,{className:"questionInput"})),l.a.createElement(f.a,{className:"justify-content-lg-center text-center"},l.a.createElement(v.a,{xs:12,sm:12,lg:6,xl:6},l.a.createElement("input",{type:"text",className:"answerInput ",placeholder:"Right Option"})),l.a.createElement(v.a,{xs:12,sm:12,lg:6,xl:6},l.a.createElement("input",{type:"text",className:"optionInput",placeholder:"Option 1"})),l.a.createElement(v.a,{xs:12,sm:12,lg:6,xl:6},l.a.createElement("input",{type:"text",className:"optionInput",placeholder:"Option 2"})),l.a.createElement(v.a,{s:12,sm:12,lg:6,xl:6},l.a.createElement("input",{type:"text",className:"optionInput",placeholder:"Option 3"}))),l.a.createElement(f.a,{className:"justify-content-center  text-center"},l.a.createElement(y.a,{as:"input",type:"submit",value:"Submit"}))))}}]),t}(n.Component),S=a(356),z=a(93),L=a.n(z),A=a(32),I=function(){return l.a.createElement(A.Parallax,{className:"custom-class",x:[40,-60],y:[10,-10],tagOuter:"figure"},l.a.createElement("img",{width:"60%",src:L.a,alt:" "}))},P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(v.a,{sm:12,md:8,lg:4,xl:4},l.a.createElement(I,null)),l.a.createElement(v.a,{sm:12,md:12,lg:8,xl:8},l.a.createElement(b.a,{className:"card"},l.a.createElement(A.Parallax,{className:"custom-class",y:[50,-50]},l.a.createElement("h2",null,"About Us"),l.a.createElement("hr",{style:{width:"50%"}})),l.a.createElement(A.Parallax,{className:"custom-class",y:[10,-10]},l.a.createElement("p",{style:{color:"#000000"}},"CODEZILA is an Open Source community which is currently working on three programming languages C, Java and Python. We tell difference between them using some quiz so student can write a C program into Java and Python and vice versa.")),l.a.createElement("p",null))))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("Container-Fluid",null,l.a.createElement("div",{id:"home"}),l.a.createElement("div",{id:"dq",class:"App"},l.a.createElement(S.a,null,l.a.createElement(f.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{xl:6,lg:6},l.a.createElement(N,null))),l.a.createElement("div",{class:"About",id:"about"},l.a.createElement(P,null)))))}}]),t}(n.Component),T=a(357),q=a(358);n.Component;var V=function(){return l.a.createElement("Container-Fluid",{class:"home"},l.a.createElement(S.a,null,l.a.createElement(f.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{sm:12,md:12,xl:6,lg:6})),l.a.createElement("div",{class:"About",id:"about"},l.a.createElement(P,null))))},D=(a(79),a(362)),W=a(363),F=a(360),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,{activeKey:this.props.location.pathname,className:"mr-auto navbar-custom"},l.a.createElement(W.a.Link,{exact:!0,href:"/"},"Home"),l.a.createElement(W.a.Link,{href:"/learn"},"learning"),l.a.createElement(F.a,{disabled:!0,title:"Quiz",id:"collasible-nav-dropdown",class:"ddown-custom"},l.a.createElement(F.a.Item,{href:"#dq"},"Daily Quiz"),l.a.createElement(F.a.Item,{href:"#action/3.2"},"Saturday Task"),l.a.createElement(F.a.Divider,null),l.a.createElement(F.a.Item,{href:"#action/3.3"},"Sunday Contest")),l.a.createElement(W.a.Link,{href:"/#about"},"About Us"),l.a.createElement(W.a.Link,{href:"#contact"},"Contact Us"))}}]),t}(n.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(D.a,{collapseOnSelect:!0,expand:"lg",bg:"#fff",variant:"light"},l.a.createElement(D.a.Brand,{href:"/"},l.a.createElement("img",{width:this.props.width,height:this.props.height,src:this.props.logo,alt:"CODEZILA"})),l.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(M,{location:this.props.loc}),l.a.createElement(W.a,{class:"navbar-custom"},l.a.createElement(W.a.Link,{disabled:!0,eventKey:2,href:"#"},"Login"))))}}]),t}(n.Component),H=(a(81),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(v.a,{sm:4,md:4,lg:4,xl:4},l.a.createElement(W.a,{className:"navbar-custom flex-column"},l.a.createElement(W.a.Link,{href:"#about"},"About Us"),l.a.createElement(W.a.Link,{href:"#contact"},"Contact Us"))),l.a.createElement(v.a,{sm:4,md:4,lg:4,xl:4},l.a.createElement(W.a,{className:"navbar-custom flex-column"},l.a.createElement(W.a.Link,{href:"#dq"},"Daily Quiz"),l.a.createElement(W.a.Link,{href:"#action/3.2"},"Saturday Task"),l.a.createElement(W.a.Link,{href:"#action/3.3"},"Sunday Contest"))))}}]),t}(n.Component)),J=a(94),R=a(95),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,{className:"navbar-custom social "},l.a.createElement(W.a.Link,{href:"https://www.instagram.com/codezila",target:"_blank"},l.a.createElement(J.a,{size:this.props.s})),l.a.createElement(W.a.Link,{href:"https://github.com/codezila-org",target:"_blank"},l.a.createElement(R.a,{size:this.props.s})))}}]),t}(n.Component),Q=a(96),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{paddingTop:"2rem"}},l.a.createElement(f.a,null,l.a.createElement(v.a,{xm:6,sm:6,md:8,lg:8,xl:8},l.a.createElement(H,null))),l.a.createElement(f.a,{style:{padding:"2rem 3rem",verticalAlign:"middle"}},l.a.createElement(v.a,{xm:12,sm:12,md:6,lg:8,xl:8},l.a.createElement(W.a,{id:"contact",className:"navbar-custom"},l.a.createElement(W.a.Link,{href:"mailto://contact@codezila.org",target:"_blank"},l.a.createElement(f.a,null,l.a.createElement(v.a,{xm:12,sm:12,md:2,lg:2,xl:2},l.a.createElement(Q.a,{size:"2em"})),l.a.createElement(v.a,{xm:12,sm:12,md:6,lg:6,xl:6},"contact@codezila.org"))))),l.a.createElement(v.a,{style:{marginLeft:"5rem"}},l.a.createElement(G,{s:"2em"}))),l.a.createElement(f.a,{style:{marginTop:"0rem"},className:"justify-content-center text-center"},l.a.createElement("p",{style:{color:"#5F9862",fontSize:"0.8rem"}},"\xa9"," ",l.a.createElement("a",{style:{color:"#5F9862"},href:"https://codezila.org"},"codezila.org")," 2019 All Rights Reserved.")))}}]),t}(n.Component),Y=(a(139),a(365)),Z=a(364),K=a(359),$=a(39),X=a(97),ee=function(e){return l.a.createElement(X.Github,{type:"widget",fab:!1,fabCorner:"",iconColor:"",iconWidth:"",iconHeight:"",linkText:"",tooltipOnHover:!0,repo:"react",user:e.user})},te=l.a.createElement(Y.a,{id:"popover-basic"},l.a.createElement(Y.a.Title,{as:"h3"},"Popover right"),l.a.createElement(Y.a.Content,null,l.a.createElement(ee,{user:"brajpalsingh"}))),ae=function(e){return l.a.createElement(Z.a,{trigger:"hover",placement:"right",overlay:te},l.a.createElement(K.a,{variant:"light",className:"text-muted blockquote-footer"},"By ",l.a.createElement("cite",{title:""},l.a.createElement("a",{className:"text-muted",href:"https://github.com/brajpalsingh"},e.name))))},ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).contextRef=Object(n.createRef)(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){$.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),$.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"componentWillUnmount",value:function(){$.Events.scrollEvent.remove("begin"),$.Events.scrollEvent.remove("end")}},{key:"render",value:function(){return l.a.createElement(S.a,{className:"card"},l.a.createElement(b.a,{class:"card"},l.a.createElement("text",null,l.a.createElement("h1",{className:"fnt",id:"tp-name"},l.a.createElement("a",{href:"/learn",style:{color:"#393939"}},"Variable")),l.a.createElement(ae,{name:"Brajpal Singh"}),l.a.createElement("hr",null),l.a.createElement("p",{className:"fnt"},"A variable is nothing but a name given to a storage area that our programs can manipulate. Each variable has a specific type, which determines the size and layout of the variable's memory."),l.a.createElement("h2",{className:"fnt",id:"tp-name"},"Aspects"),l.a.createElement("hr",null),l.a.createElement("h4",{className:"fnt"},"Variable Declaration"),l.a.createElement("p",{className:"fnt"},"A variable declaration provides assurance to the compiler that there exists a variable with the given type and name so that the compiler can proceed for further compilation without requiring the complete detail about the variable. A variable definition has its meaning at the time of compilation only, the compiler needs actual variable definition at the time of linking the program. We don't need to declare Variable in python."),l.a.createElement("h4",{className:"fnt"},"Variable  Initialization"),l.a.createElement("p",{className:"fnt"},"In c programming language, variables can be initialized in the declaration statement of any block (either it may main\u2019s block or any other function\u2019s block). While declaring a variable you can provide a value to the variable with the assignment operator."),l.a.createElement("h2",{className:"fnt",id:"tp-name"},"Syntax"),l.a.createElement("hr",null))),l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement("h5",null,l.a.createElement(K.a,null,"C")),l.a.createElement("pre",{class:"prettyprint"},"\n  #include<stdio.h>\n  void main() {\n    //variable Declaration\n    int x;\n    //variable initialization\n    x = 10;\n    printf(\u201c%d\u201d,x);\n  }\n        \n")),l.a.createElement(v.a,null,l.a.createElement("h5",null,l.a.createElement(K.a,null,"Java")),l.a.createElement("pre",{class:"prettyprint"},"\n  class Codezila {\n      public static void main(String args[]) {\n        //variable Declaration\n        int x;\n        //variable initialization\n        x=10;\n        System.out.println(x)\n      }\n  }\n\n\n")),l.a.createElement(v.a,null,l.a.createElement("h5",null,l.a.createElement(K.a,null,"Python")),l.a.createElement("pre",{class:"prettyprint"},"\n //No need to declare any Variable here\n        \n        \n //variable initialization\n        \n  x = 10\n        \n  print(x) \n         \n"))))}}]),t}(n.Component),le=Object(d.f)((function(e){var t=e.location;return l.a.createElement("div",{class:"Header",id:"header",sticky:"top"},l.a.createElement(U,{loc:t,class:"ontop",logo:p.a,width:"50%"}))}));function re(){return l.a.createElement("Container-Fluid",null,l.a.createElement(E.a,{basename:"/CZ3/"},l.a.createElement("div",{id:"App"},l.a.createElement(le,null)),l.a.createElement("div",{id:"dq",class:"App"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:V}),l.a.createElement(d.a,{exact:!0,path:"/admin",component:B}),l.a.createElement(d.a,{exact:!0,path:"/learn",component:ne}),l.a.createElement(d.a,{exact:!0,path:"/ed",component:w}),l.a.createElement(d.a,{component:Error}))),l.a.createElement("div",{class:"footer"},l.a.createElement(_,null))))}var ce=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("header").style.boxShadow=ce===e?"none":"0px 2px 4px rgba(0, 0, 0, 0.1)"};var oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(A.ParallaxProvider,null,l.a.createElement(re,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(351);c.a.render(l.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/logo_tagline.e4a42839.svg"},93:function(e,t,a){e.exports=a.p+"static/media/instructor.5ff74da4.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.987fc67d.chunk.js.map