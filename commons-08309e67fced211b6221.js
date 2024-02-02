"use strict";(self.webpackChunkampyamachan_com=self.webpackChunkampyamachan_com||[]).push([[351],{4938:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4245)},6089:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(1461),o=n(7896),i=n(2784),a=n(489),s=n(4142),u=n(4867),c=n(4780),l=n(9206);var p=(0,n(2807).ZP)(),d=n(260),f=n(2322);const m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,d.Z)(),v=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),g=t=>(0,l.Z)({props:t,name:"MuiContainer",defaultTheme:h});var Z=n(8216),b=n(948),x=n(1657);const y=function(t={}){const{createStyledComponent:e=v,useThemeProps:n=g,componentName:l="MuiContainer"}=t,p=e((({theme:t,ownerState:e})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:`${o}${t.breakpoints.unit}`}),e}),{})),(({theme:t,ownerState:e})=>(0,o.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}))),d=i.forwardRef((function(t,e){const i=n(t),{className:d,component:h="div",disableGutters:v=!1,fixed:g=!1,maxWidth:Z="lg"}=i,b=(0,r.Z)(i,m),x=(0,o.Z)({},i,{component:h,disableGutters:v,fixed:g,maxWidth:Z}),y=((t,e)=>{const{classes:n,fixed:r,disableGutters:o,maxWidth:i}=t,a={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,r&&"fixed",o&&"disableGutters"]};return(0,c.Z)(a,(t=>(0,u.ZP)(e,t)),n)})(x,l);return(0,f.jsx)(p,(0,o.Z)({as:h,ownerState:x,className:(0,a.Z)(y.root,d),ref:e},b))}));return d}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,Z.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,x.Z)({props:t,name:"MuiContainer"})});var w=y},7182:function(t,e,n){n.d(e,{ZP:function(){return E}});var r=n(1461),o=n(7896),i=n(2784),a=n(489),s=n(5408),u=n(9707),c=n(4780),l=n(948),p=n(1657),d=n(6682),f=n(247),m=n(606);var h=i.createContext(),v=n(1588),g=n(4867);function Z(t){return(0,g.ZP)("MuiGrid",t)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>`spacing-xs-${t}`)),...["column-reverse","column","row-reverse","row"].map((t=>`direction-xs-${t}`)),...["nowrap","wrap-reverse","wrap"].map((t=>`wrap-xs-${t}`)),...b.map((t=>`grid-xs-${t}`)),...b.map((t=>`grid-sm-${t}`)),...b.map((t=>`grid-md-${t}`)),...b.map((t=>`grid-lg-${t}`)),...b.map((t=>`grid-xl-${t}`))]),y=n(2322);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function k({breakpoints:t,values:e}){let n="";Object.keys(e).forEach((t=>{""===n&&0!==e[t]&&(n=t)}));const r=Object.keys(t).sort(((e,n)=>t[e]-t[n]));return r.slice(0,r.indexOf(n))}const $=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:r,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:u,breakpoints:c}=n;let l=[];r&&(l=function(t,e,n={}){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n[`spacing-xs-${String(t)}`]];const r=[];return e.forEach((e=>{const o=t[e];Number(o)>0&&r.push(n[`spacing-${e}-${String(o)}`])})),r}(a,c,e));const p=[];return c.forEach((t=>{const r=n[t];r&&p.push(e[`grid-${t}-${String(r)}`])})),[e.root,r&&e.container,i&&e.item,u&&e.zeroMinWidth,...l,"row"!==o&&e[`direction-xs-${String(o)}`],"wrap"!==s&&e[`wrap-xs-${String(s)}`],...p]}})((({ownerState:t})=>(0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})),(function({theme:t,ownerState:e}){const n=(0,s.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},n,(t=>{const e={flexDirection:t};return 0===t.indexOf("column")&&(e[`& > .${x.item}`]={maxWidth:"none"}),e}))}),(function({theme:t,ownerState:e}){const{container:n,rowSpacing:r}=e;let o={};if(n&&0!==r){const e=(0,s.P$)({values:r,breakpoints:t.breakpoints.values});let n;"object"==typeof e&&(n=k({breakpoints:t.breakpoints.values,values:e})),o=(0,s.k9)({theme:t},e,((e,r)=>{var o;const i=t.spacing(e);return"0px"!==i?{marginTop:`-${S(i)}`,[`& > .${x.item}`]:{paddingTop:S(i)}}:null!=(o=n)&&o.includes(r)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}}))}return o}),(function({theme:t,ownerState:e}){const{container:n,columnSpacing:r}=e;let o={};if(n&&0!==r){const e=(0,s.P$)({values:r,breakpoints:t.breakpoints.values});let n;"object"==typeof e&&(n=k({breakpoints:t.breakpoints.values,values:e})),o=(0,s.k9)({theme:t},e,((e,r)=>{var o;const i=t.spacing(e);return"0px"!==i?{width:`calc(100% + ${S(i)})`,marginLeft:`-${S(i)}`,[`& > .${x.item}`]:{paddingLeft:S(i)}}:null!=(o=n)&&o.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce(((r,i)=>{let a={};if(e[i]&&(n=e[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=(0,s.P$)({values:e.columns,breakpoints:t.breakpoints.values}),c="object"==typeof u?u[i]:u;if(null==c)return r;const l=Math.round(n/c*1e8)/1e6+"%";let p={};if(e.container&&e.item&&0!==e.columnSpacing){const n=t.spacing(e.columnSpacing);if("0px"!==n){const t=`calc(${l} + ${S(n)})`;p={flexBasis:t,maxWidth:t}}}a=(0,o.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===t.breakpoints.values[i]?Object.assign(r,a):r[t.breakpoints.up(i)]=a,r}),{})}));const W=t=>{const{classes:e,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:u}=t;let l=[];n&&(l=function(t,e){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[`spacing-xs-${String(t)}`];const n=[];return e.forEach((e=>{const r=t[e];if(Number(r)>0){const t=`spacing-${e}-${String(r)}`;n.push(t)}})),n}(i,u));const p=[];u.forEach((e=>{const n=t[e];n&&p.push(`grid-${e}-${String(n)}`)}));const d={root:["root",n&&"container",o&&"item",s&&"zeroMinWidth",...l,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]};return(0,c.Z)(d,Z,e)},P=i.forwardRef((function(t,e){const n=(0,p.Z)({props:t,name:"MuiGrid"}),{breakpoints:s}=function(){const t=(0,d.Z)(f.Z);return t[m.Z]||t}(),c=(0,u.Z)(n),{className:l,columns:v,columnSpacing:g,component:Z="div",container:b=!1,direction:x="row",item:S=!1,rowSpacing:k,spacing:P=0,wrap:E="wrap",zeroMinWidth:R=!1}=c,M=(0,r.Z)(c,w),N=k||P,T=g||P,C=i.useContext(h),I=b?v||12:C,z={},j=(0,o.Z)({},M);s.keys.forEach((t=>{null!=M[t]&&(z[t]=M[t],delete j[t])}));const B=(0,o.Z)({},c,{columns:I,container:b,direction:x,item:S,rowSpacing:N,columnSpacing:T,wrap:E,zeroMinWidth:R,spacing:P},z,{breakpoints:s.keys}),O=W(B);return(0,y.jsx)(h.Provider,{value:I,children:(0,y.jsx)($,(0,o.Z)({ownerState:B,className:(0,a.Z)(O.root,l),as:Z,ref:e},j))})}));var E=P},2658:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(1461),o=n(7896),i=n(2784),a=n(489),s=n(9707),u=n(4780),c=n(948),l=n(1657),p=n(8216),d=n(1588),f=n(4867);function m(t){return(0,f.ZP)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(2322);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,p.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=i.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiTypography"}),i=(t=>b[t]||t)(n.color),c=(0,s.Z)((0,o.Z)({},n,{color:i})),{align:d="inherit",className:f,component:x,gutterBottom:y=!1,noWrap:w=!1,paragraph:S=!1,variant:k="body1",variantMapping:$=Z}=c,W=(0,r.Z)(c,v),P=(0,o.Z)({},c,{align:d,color:i,className:f,component:x,gutterBottom:y,noWrap:w,paragraph:S,variant:k,variantMapping:$}),E=x||(S?"p":$[k]||Z[k])||"span",R=(t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,u.Z)(s,m,a)})(P);return(0,h.jsx)(g,(0,o.Z)({as:E,ref:e,ownerState:P,className:(0,a.Z)(R.root,f)},W))}))},247:function(t,e,n){const r=(0,n(9617).Z)();e.Z=r},948:function(t,e,n){var r=n(2807),o=n(247),i=n(606);const a=(0,r.ZP)({themeId:i.Z,defaultTheme:o.Z,rootShouldForwardProp:t=>(0,r.x9)(t)&&"classes"!==t});e.ZP=a},1657:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(9206),o=n(247),i=n(606);function a({props:t,name:e}){return(0,r.Z)({props:t,name:e,defaultTheme:o.Z,themeId:i.Z})}},8216:function(t,e,n){var r=n(4142);e.Z=r.Z},4245:function(t,e,n){n.r(e),n.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return w},debounce:function(){return S},deprecatedPropType:function(){return k},isMuiElement:function(){return $},ownerDocument:function(){return P},ownerWindow:function(){return E},requirePropFactory:function(){return R},setRef:function(){return M},unstable_ClassNameGenerator:function(){return L},unstable_useEnhancedEffect:function(){return T},unstable_useId:function(){return z},unsupportedProp:function(){return j},useControlled:function(){return B},useEventCallback:function(){return O},useForkRef:function(){return _.Z},useIsFocusVisible:function(){return G.Z}});var r=n(7078),o=n(8216);var i=function(...t){return t.reduce(((t,e)=>null==e?t:function(...n){t.apply(this,n),e.apply(this,n)}),(()=>{}))},a=n(7896),s=n(2784),u=n.t(s,2),c=n(1461),l=n(489),p=n(4780),d=n(1657),f=n(948),m=n(1588),h=n(4867);function v(t){return(0,h.ZP)("MuiSvgIcon",t)}(0,m.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=n(2322);const Z=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],b=(0,f.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,"inherit"!==n.color&&e[`color${(0,o.Z)(n.color)}`],e[`fontSize${(0,o.Z)(n.fontSize)}`]]}})((({theme:t,ownerState:e})=>{var n,r,o,i,a,s,u,c,l,p,d,f,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=t.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(o=t.transitions)||null==(o=o.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=t.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(s=t.typography)||null==(u=s.pxToRem)?void 0:u.call(s,24))||"1.5rem",large:(null==(c=t.typography)||null==(l=c.pxToRem)?void 0:l.call(c,35))||"2.1875rem"}[e.fontSize],color:null!=(p=null==(d=(t.vars||t).palette)||null==(d=d[e.color])?void 0:d.main)?p:{action:null==(f=(t.vars||t).palette)||null==(f=f.action)?void 0:f.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[e.color]}})),x=s.forwardRef((function(t,e){const n=(0,d.Z)({props:t,name:"MuiSvgIcon"}),{children:r,className:i,color:u="inherit",component:f="svg",fontSize:m="medium",htmlColor:h,inheritViewBox:x=!1,titleAccess:y,viewBox:w="0 0 24 24"}=n,S=(0,c.Z)(n,Z),k=s.isValidElement(r)&&"svg"===r.type,$=(0,a.Z)({},n,{color:u,component:f,fontSize:m,instanceFontSize:t.fontSize,inheritViewBox:x,viewBox:w,hasSvgAsChild:k}),W={};x||(W.viewBox=w);const P=(t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root","inherit"!==e&&`color${(0,o.Z)(e)}`,`fontSize${(0,o.Z)(n)}`]};return(0,p.Z)(i,v,r)})($);return(0,g.jsxs)(b,(0,a.Z)({as:f,className:(0,l.Z)(P.root,i),focusable:"false",color:h,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:e},W,S,k&&r.props,{ownerState:$,children:[k?r.props.children:r,y?(0,g.jsx)("title",{children:y}):null]}))}));x.muiName="SvgIcon";var y=x;function w(t,e){function n(n,r){return(0,g.jsx)(y,(0,a.Z)({"data-testid":`${e}Icon`,ref:r},n,{children:t}))}return n.muiName=y.muiName,s.memo(s.forwardRef(n))}var S=function(t,e=166){let n;function r(...r){clearTimeout(n),n=setTimeout((()=>{t.apply(this,r)}),e)}return r.clear=()=>{clearTimeout(n)},r};var k=function(t,e){return()=>null};var $=function(t,e){var n,r;return s.isValidElement(t)&&-1!==e.indexOf(null!=(n=t.type.muiName)?n:null==(r=t.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function W(t){return t&&t.ownerDocument||document}var P=W;var E=function(t){return W(t).defaultView||window};var R=function(t,e){return()=>null},M=n(7364).Z;var N="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,T=N;let C=0;const I=u["useId".toString()];var z=function(t){if(void 0!==I){const e=I();return null!=t?t:e}return function(t){const[e,n]=s.useState(t),r=t||e;return s.useEffect((()=>{null==e&&(C+=1,n(`mui-${C}`))}),[e]),r}(t)};var j=function(t,e,n,r,o){return null};var B=function({controlled:t,default:e,name:n,state:r="value"}){const{current:o}=s.useRef(void 0!==t),[i,a]=s.useState(e);return[o?t:i,s.useCallback((t=>{o||a(t)}),[])]};var O=function(t){const e=s.useRef(t);return N((()=>{e.current=t})),s.useRef(((...t)=>(0,e.current)(...t))).current},_=n(3731),G=n(3078);const L={configure:t=>{r.Z.configure(t)}}},3731:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(2784),o=n(7364);var i=function(...t){return r.useMemo((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{(0,o.Z)(t,e)}))}),t)}},3078:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(2784);class o{constructor(){this.currentId=0,this.clear=()=>{0!==this.currentId&&(clearTimeout(this.currentId),this.currentId=0)},this.disposeEffect=()=>this.clear}static create(){return new o}start(t,e){this.clear(),this.currentId=setTimeout((()=>{this.currentId=0,e()}),t)}}let i=!0,a=!1;const s=new o,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function l(){i=!1}function p(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch(n){}return i||function(t){const{type:e,tagName:n}=t;return!("INPUT"!==n||!u[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}var f=function(){const t=r.useCallback((t=>{var e;null!=t&&((e=t.ownerDocument).addEventListener("keydown",c,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",p,!0))}),[]),e=r.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!d(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(a=!0,s.start(100,(()=>{a=!1})),e.current=!1,!0)},ref:t}}},2807:function(t,e,n){n.d(e,{ZP:function(){return $},x9:function(){return b}});var r=n(1461),o=n(7896),i=n(1603),a=n(4953),s=n(260),u=n(4142);const c=["variant"];function l(t){return 0===t.length}function p(t){const{variant:e}=t,n=(0,r.Z)(t,c);let o=e||"";return Object.keys(n).sort().forEach((e=>{o+="color"===e?l(o)?t[e]:(0,u.Z)(t[e]):`${l(o)?e:(0,u.Z)(e)}${(0,u.Z)(t[e].toString())}`})),o}var d=n(6523);const f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];const m=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,h=t=>{let e=0;const n={};return t&&t.forEach((t=>{let r="";"function"==typeof t.props?(r=`callback${e}`,e+=1):r=p(t.props),n[r]=t.style})),n},v=(t,e)=>{let n=[];return e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants),h(n)},g=(t,e,n)=>{const{ownerState:r={}}=t,i=[];let a=0;return n&&n.forEach((n=>{let s=!0;if("function"==typeof n.props){const e=(0,o.Z)({},t,r);s=n.props(e)}else Object.keys(n.props).forEach((e=>{r[e]!==n.props[e]&&t[e]!==n.props[e]&&(s=!1)}));s&&("function"==typeof n.props?i.push(e[`callback${a}`]):i.push(e[p(n.props)])),"function"==typeof n.props&&(a+=1)})),i},Z=(t,e,n,r)=>{var o;const i=null==n||null==(o=n.components)||null==(o=o[r])?void 0:o.variants;return g(t,e,i)};function b(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t}const x=(0,s.Z)(),y=t=>t?t.charAt(0).toLowerCase()+t.slice(1):t;function w({defaultTheme:t,theme:e,themeId:n}){return r=e,0===Object.keys(r).length?t:e[n]||e;var r}function S(t){return t?(e,n)=>n[t]:null}const k=({styledArg:t,props:e,defaultTheme:n,themeId:r})=>{const i=t((0,o.Z)({},e,{theme:w((0,o.Z)({},e,{defaultTheme:n,themeId:r}))}));let a;if(i&&i.variants&&(a=i.variants,delete i.variants),a){return[i,...g(e,h(a),a)]}return i};function $(t={}){const{themeId:e,defaultTheme:n=x,rootShouldForwardProp:s=b,slotShouldForwardProp:u=b}=t,c=t=>(0,d.Z)((0,o.Z)({},t,{theme:w((0,o.Z)({},t,{defaultTheme:n,themeId:e}))}));return c.__mui_systemSx=!0,(t,l={})=>{(0,i.Co)(t,(t=>t.filter((t=>!(null!=t&&t.__mui_systemSx)))));const{name:p,slot:d,skipVariantsResolver:x,skipSx:$,overridesResolver:W=S(y(d))}=l,P=(0,r.Z)(l,f),E=void 0!==x?x:d&&"Root"!==d&&"root"!==d||!1,R=$||!1;let M=b;"Root"===d||"root"===d?M=s:d?M=u:function(t){return"string"==typeof t&&t.charCodeAt(0)>96}(t)&&(M=void 0);const N=(0,i.ZP)(t,(0,o.Z)({shouldForwardProp:M,label:undefined},P)),T=(r,...i)=>{const s=i?i.map((t=>{if("function"==typeof t&&t.__emotion_real!==t)return r=>k({styledArg:t,props:r,defaultTheme:n,themeId:e});if((0,a.P)(t)){let e,n=t;return t&&t.variants&&(e=t.variants,delete n.variants,n=n=>{let r=t;return g(n,h(e),e).forEach((t=>{r=(0,a.Z)(r,t)})),r}),n}return t})):[];let u=r;if((0,a.P)(r)){let t;r&&r.variants&&(t=r.variants,delete u.variants,u=e=>{let n=r;return g(e,h(t),t).forEach((t=>{n=(0,a.Z)(n,t)})),n})}else"function"==typeof r&&r.__emotion_real!==r&&(u=t=>k({styledArg:r,props:t,defaultTheme:n,themeId:e}));p&&W&&s.push((t=>{const r=w((0,o.Z)({},t,{defaultTheme:n,themeId:e})),i=m(p,r);if(i){const e={};return Object.entries(i).forEach((([n,i])=>{e[n]="function"==typeof i?i((0,o.Z)({},t,{theme:r})):i})),W(t,e)}return null})),p&&!E&&s.push((t=>{const r=w((0,o.Z)({},t,{defaultTheme:n,themeId:e}));return Z(t,v(p,r),r,p)})),R||s.push(c);const l=s.length-i.length;if(Array.isArray(r)&&l>0){const t=new Array(l).fill("");u=[...r,...t],u.raw=[...r.raw,...t]}const d=N(u,...s);return t.muiName&&(d.muiName=t.muiName),d};return N.withConfig&&(T.withConfig=N.withConfig),T}}},9206:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(7896);function o(t,e){const n=(0,r.Z)({},e);return Object.keys(t).forEach((i=>{if(i.toString().match(/^(components|slots)$/))n[i]=(0,r.Z)({},t[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const a=t[i]||{},s=e[i];n[i]={},s&&Object.keys(s)?a&&Object.keys(a)?(n[i]=(0,r.Z)({},s),Object.keys(a).forEach((t=>{n[i][t]=o(a[t],s[t])}))):n[i]=s:n[i]=a}else void 0===n[i]&&(n[i]=t[i])})),n}function i(t){const{theme:e,name:n,props:r}=t;return e&&e.components&&e.components[n]&&e.components[n].defaultProps?o(e.components[n].defaultProps,r):r}var a=n(6682);function s({props:t,name:e,defaultTheme:n,themeId:r}){let o=(0,a.Z)(n);r&&(o=o[r]||o);return i({theme:o,name:e,props:t})}},4780:function(t,e,n){function r(t,e,n=void 0){const r={};return Object.keys(t).forEach((o=>{r[o]=t[o].reduce(((t,r)=>{if(r){const o=e(r);""!==o&&t.push(o),n&&n[r]&&t.push(n[r])}return t}),[]).join(" ")})),r}n.d(e,{Z:function(){return r}})},7364:function(t,e,n){function r(t,e){"function"==typeof t?t(e):t&&(t.current=e)}n.d(e,{Z:function(){return r}})},2612:function(t,e,n){n.d(e,{$:function(){return p}});var r=n(3906),o=n(6089),i=n(2658),a=n(8165);const s="rgba(255, 255, 255, 0.9)",u="#333",c="rgba(0, 0, 0, 0.8)",l="#fff",p=t=>{let{children:e,title:n,subtitle:p,theme:d="light",sx:f}=t;return(0,a.tZ)(r.Z,{id:n&&n.toLowerCase(),component:"section",py:16,sx:{backgroundColor:"light"===d?s:c,color:"light"===d?u:l,...f}},(0,a.tZ)(o.Z,null,n&&(0,a.tZ)(i.Z,{variant:"h2",color:"primary"},n),p&&(0,a.tZ)(i.Z,{variant:"h3"},p),e))}}}]);
//# sourceMappingURL=commons-08309e67fced211b6221.js.map