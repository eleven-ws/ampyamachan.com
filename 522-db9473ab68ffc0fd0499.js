"use strict";(self.webpackChunkampyamachan_com=self.webpackChunkampyamachan_com||[]).push([[522],{522:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ye}});var a=o(4041),n=o(4357),r=o(2515),l=o(5554),i=o(9556),s=o(8395),d=o(6530),c=o(7974),p=o(5912),u=o(4469),v=o(4417);function m(e){return(0,v.Ay)("MuiPaper",e)}(0,u.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=o(1085);const y=(0,l.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})((0,c.A)((({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))));var g=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiPaper"}),a=(0,d.A)(),{className:l,component:c="div",elevation:u=1,square:v=!1,variant:g="elevation",...f}=o,b={...o,component:c,elevation:u,square:v,variant:g},A=(e=>{const{square:t,elevation:o,variant:a,classes:n}=e,l={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${o}`]};return(0,r.A)(l,m,n)})(b);return(0,h.jsx)(y,{as:c,ownerState:b,className:(0,n.A)(A.root,l),ref:t,...f,style:{..."elevation"===g&&{"--Paper-shadow":(a.vars||a).shadows[u],...a.vars&&{"--Paper-overlay":a.vars.overlays?.[u]},...!a.vars&&"dark"===a.palette.mode&&{"--Paper-overlay":`linear-gradient(${(0,s.X4)("#fff",(0,p.A)(u))}, ${(0,s.X4)("#fff",(0,p.A)(u))})`}},...f.style}})}));function f(e){return(0,v.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);const b=(0,l.Ay)(g,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"});var A=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCard"}),{className:a,raised:l=!1,...s}=o,d={...o,raised:l},c=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},f,t)})(d);return(0,h.jsx)(b,{className:(0,n.A)(c.root,a),elevation:l?8:void 0,ref:t,ownerState:d,...s})}));function Y(e){return(0,v.Ay)("MuiCardContent",e)}(0,u.A)("MuiCardContent",["root"]);const x=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}});var C=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCardContent"}),{className:a,component:l="div",...s}=o,d={...o,component:l},c=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},Y,t)})(d);return(0,h.jsx)(x,{as:l,className:(0,n.A)(c.root,a),ownerState:d,ref:t,...s})})),k=o(4620),w=o(6133);function M(e){return(0,v.Ay)("MuiCardHeader",e)}var S=(0,u.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);const R=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>({[`& .${S.title}`]:t.title,[`& .${S.subheader}`]:t.subheader,...t.root})})({display:"flex",alignItems:"center",padding:16}),T=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),N=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),$=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto",[`.${k.A.root}:where(& .${S.title})`]:{display:"block"},[`.${k.A.root}:where(& .${S.subheader})`]:{display:"block"}});var H=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCardHeader"}),{action:a,avatar:l,className:s,component:d="div",disableTypography:c=!1,subheader:p,subheaderTypographyProps:u,title:v,titleTypographyProps:m,...y}=o,g={...o,component:d,disableTypography:c},f=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},M,t)})(g);let b=v;null==b||b.type===w.A||c||(b=(0,h.jsx)(w.A,{variant:l?"body2":"h5",className:f.title,component:"span",...m,children:b}));let A=p;return null==A||A.type===w.A||c||(A=(0,h.jsx)(w.A,{variant:l?"body2":"body1",className:f.subheader,color:"textSecondary",component:"span",...u,children:A})),(0,h.jsxs)(R,{className:(0,n.A)(f.root,s),as:d,ref:t,ownerState:g,...y,children:[l&&(0,h.jsx)(T,{className:f.avatar,ownerState:g,children:l}),(0,h.jsxs)($,{className:f.content,ownerState:g,children:[b,A]}),a&&(0,h.jsx)(N,{className:f.action,ownerState:g,children:a})]})}));function j(e){return(0,v.Ay)("MuiCardMedia",e)}(0,u.A)("MuiCardMedia",["root","media","img"]);const z=(0,l.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:n}=o;return[t.root,a&&t.media,n&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),P=["video","audio","picture","iframe","img"],O=["picture","img"];var I=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiCardMedia"}),{children:a,className:l,component:s="div",image:d,src:c,style:p,...u}=o,v=P.includes(s),m=!v&&d?{backgroundImage:`url("${d}")`,...p}:p,y={...o,component:s,isMediaComponent:v,isImageComponent:O.includes(s)},g=(e=>{const{classes:t,isMediaComponent:o,isImageComponent:a}=e,n={root:["root",o&&"media",a&&"img"]};return(0,r.A)(n,j,t)})(y);return(0,h.jsx)(z,{className:(0,n.A)(g.root,l),as:s,role:!v&&d?"img":void 0,ref:t,style:m,ownerState:y,src:v?d||c:void 0,...u,children:a})})),D=o(9996);var L=a.createContext();function B(e){return(0,v.Ay)("MuiTable",e)}(0,u.A)("MuiTable",["root","stickyHeader"]);const E=(0,l.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((0,c.A)((({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]})))),W="table";var X=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTable"}),{className:l,component:s=W,padding:d="normal",size:c="medium",stickyHeader:p=!1,...u}=o,v={...o,component:s,padding:d,size:c,stickyHeader:p},m=(e=>{const{classes:t,stickyHeader:o}=e,a={root:["root",o&&"stickyHeader"]};return(0,r.A)(a,B,t)})(v),y=a.useMemo((()=>({padding:d,size:c,stickyHeader:p})),[d,c,p]);return(0,h.jsx)(L.Provider,{value:y,children:(0,h.jsx)(E,{as:s,role:s===W?null:"table",ref:t,className:(0,n.A)(m.root,l),ownerState:v,...u})})}));var q=a.createContext();function V(e){return(0,v.Ay)("MuiTableBody",e)}(0,u.A)("MuiTableBody",["root"]);const _=(0,l.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),F={variant:"body"},G="tbody";var J=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableBody"}),{className:a,component:l=G,...s}=o,d={...o,component:l},c=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},V,t)})(d);return(0,h.jsx)(q.Provider,{value:F,children:(0,h.jsx)(_,{className:(0,n.A)(c.root,a),as:l,ref:t,role:l===G?null:"rowgroup",ownerState:d,...s})})})),K=o(3345);function Q(e){return(0,v.Ay)("MuiTableCell",e)}var U=(0,u.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const Z=(0,l.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${(0,K.A)(o.size)}`],"normal"!==o.padding&&t[`padding${(0,K.A)(o.padding)}`],"inherit"!==o.align&&t[`align${(0,K.A)(o.align)}`],o.stickyHeader&&t.stickyHeader]}})((0,c.A)((({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,s.a)((0,s.X4)(e.palette.divider,1),.88):(0,s.e$)((0,s.X4)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${U.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:e})=>e.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]})))),ee=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:s,component:d,padding:c,scope:p,size:u,sortDirection:v,variant:m,...y}=o,g=a.useContext(L),f=a.useContext(q),b=f&&"head"===f.variant;let A;A=d||(b?"th":"td");let Y=p;"td"===A?Y=void 0:!Y&&b&&(Y="col");const x=m||f&&f.variant,C={...o,align:l,component:A,padding:c||(g&&g.padding?g.padding:"normal"),size:u||(g&&g.size?g.size:"medium"),sortDirection:v,stickyHeader:"head"===x&&g&&g.stickyHeader,variant:x},k=(e=>{const{classes:t,variant:o,align:a,padding:n,size:l,stickyHeader:i}=e,s={root:["root",o,i&&"stickyHeader","inherit"!==a&&`align${(0,K.A)(a)}`,"normal"!==n&&`padding${(0,K.A)(n)}`,`size${(0,K.A)(l)}`]};return(0,r.A)(s,Q,t)})(C);let w=null;return v&&(w="asc"===v?"ascending":"descending"),(0,h.jsx)(Z,{as:A,ref:t,className:(0,n.A)(k.root,s),"aria-sort":w,scope:Y,ownerState:C,...y})}));var te=ee;function oe(e){return(0,v.Ay)("MuiTableContainer",e)}(0,u.A)("MuiTableContainer",["root"]);const ae=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var ne=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableContainer"}),{className:a,component:l="div",...s}=o,d={...o,component:l},c=(e=>{const{classes:t}=e;return(0,r.A)({root:["root"]},oe,t)})(d);return(0,h.jsx)(ae,{ref:t,as:l,className:(0,n.A)(c.root,a),ownerState:d,...s})}));function re(e){return(0,v.Ay)("MuiTableRow",e)}var le=(0,u.A)("MuiTableRow",["root","selected","hover","head","footer"]);const ie=(0,l.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((0,c.A)((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${le.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${le.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})))),se="tr",de=a.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableRow"}),{className:l,component:s=se,hover:d=!1,selected:c=!1,...p}=o,u=a.useContext(q),v={...o,component:s,hover:d,selected:c,head:u&&"head"===u.variant,footer:u&&"footer"===u.variant},m=(e=>{const{classes:t,selected:o,hover:a,head:n,footer:l}=e,i={root:["root",o&&"selected",a&&"hover",n&&"head",l&&"footer"]};return(0,r.A)(i,re,t)})(v);return(0,h.jsx)(ie,{as:s,ref:t,className:(0,n.A)(m.root,l),role:s===se?null:"row",ownerState:v,...p})}));var ce=de,pe=o.p+"static/pricing-athlete-790eda99a87f5057e2f4fefb5edbafbb.jpg",ue=o.p+"static/pricing-better-86dd6bde3f73d2e39dbca40f1a2d659d.jpg",ve=o.p+"static/pricing-civic-1405235de97e93d51e8271b6df4e2bf4.jpg",me=o.p+"static/pricing-develop-3776d478eb661606ecc28cac9a59eed5.jpg",he=o.p+"static/pricing-especially-2461a94ed10f6a22dd0731bb7afa1b26.jpg",ye=o(5031);const ge=e=>{let{th:t,td:o}=e;return(0,ye.Y)(ce,null,(0,ye.Y)(te,{component:"th"},(0,ye.Y)(w.A,{sx:{fontWeight:"bold"}},t)),(0,ye.Y)(te,null,(0,ye.Y)(w.A,null,o)))},fe=e=>{let{children:t}=e;return(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2,sx:{backgroundColor:"#000",color:"#fff",textAlign:"center",fontWeight:"bold"}},(0,ye.Y)(w.A,{variant:"caption"},t)))};var be=[{title:"Athlete Line",image:pe,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"ご愛車の臨場感あふれる走行写真をお届けいたします。"),(0,ye.Y)(w.A,{variant:"body2"},"※エアサスペンション装着車両などは Athlete Line Extension をご覧ください。"))),[{th:"料金",td:"25,000円"},{th:"撮影時間",td:"2時間"},{th:"撮影時間帯",td:"早朝"},{th:"納品枚数",td:"3枚前後"},{th:"納期",td:"撮影から約3週間"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"OPTION"),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"DVDメディア納品"))))))},{title:"Athlete Line Extension",image:pe,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"エアサスペンション装着車両及び、ショーカー（登録無可）向け走行写真プランです。メールにて事前確認後に撮影の可否をご連絡させていただきます。"))),[{th:"料金",td:"30,000円"},{th:"撮影時間",td:"2時間"},{th:"撮影時間帯",td:"-"},{th:"納品枚数",td:"2枚"},{th:"納期",td:"撮影から約3週間"},{th:"撮影場所",td:"当方指定の場所"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"OPTION"),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"DVDメディア納品"))))))},{title:"Better Line",image:ue,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"愛車を撮影して欲しいけど、よくわからない！そんなあなたにぴったりな撮影プランです。厳選したロケーションにて撮影をさせていただくカメラマンお任せプランをご提供いたします。"))),[{th:"料金",td:"15,000円"},{th:"撮影時間",td:"2時間"},{th:"撮影時間帯",td:"日中"},{th:"納品枚数",td:"4枚前後"},{th:"納期",td:"撮影から約4週間"},{th:"撮影場所",td:"当方指定の場所"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"OPTION"),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"撮影場所の追加"),(0,ye.Y)(w.A,{variant:"body2"},"（1箇所につき1時間～2時間の追加で+8,000円）"))))))},{title:"Civic Line",image:ve,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"いろんなところでいろんな写真が撮りたい。都会の街並みの中でいろんな場所に移動して撮影をさせていただくことに重点を置いたプランです。ドライブをしながら愛車の撮影をさせていただきます。"))),[{th:"料金",td:"20,000円"},{th:"撮影時間",td:"2時間"},{th:"撮影時間帯",td:"早朝、深夜"},{th:"納品枚数",td:"7枚程度"},{th:"納期",td:"撮影から約4週間"},{th:"撮影箇所",td:"3〜4箇所程度"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"OPTION"),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"DVDメディア納品"))))))},{title:"Develop Line",image:me,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"ミーティングの様子を撮影してほしい、モデルと愛車を撮影したい、自身と愛車を撮影したい、など様々なご要望にお答えいたします。詳しいご要望についてはまずメールからお問い合わせをお願いいたします。"))),(0,ye.Y)(fe,null,"DEVELOP"),[{th:"ご要望",td:"ご期待に沿います"},{th:"料金",td:"要相談"},{th:"撮影時間",td:"要相談"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"(CASE1)"),[{th:"ご要望",td:"ミーティング撮影"},{th:"料金",td:"50,000円"},{th:"撮影時間",td:"5時間"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"(CASE2)"),[{th:"ご要望",td:"モデル撮影"},{th:"料金",td:"25,000円"},{th:"撮影時間",td:"2時間"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})))))},{title:"Especially Line",image:he,description:(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"こんな場所で愛車写真を残したい、そんなご要望をヒアリングさせて頂き、ご希望に沿った場所にて愛車撮影のご提供をさせていただきます。思い出の場所、街並み、工場夜景など様々なロケーションからの撮影をご提案させていただきます。"))),[{th:"料金",td:"20,000円"},{th:"撮影時間",td:"2時間"},{th:"撮影時間帯",td:"早朝、深夜"},{th:"納品枚数",td:"4枚前後"},{th:"納期",td:"撮影から約4週間"}].map(((e,t)=>{let{th:o,td:a}=e;return(0,ye.Y)(ge,{key:t,th:o,td:a})})),(0,ye.Y)(fe,null,"OPTION"),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"DVDメディア納品"))),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:2},(0,ye.Y)(w.A,null,"撮影場所の追加"),(0,ye.Y)(w.A,{variant:"body2"},"（1箇所につき1時間～2時間追加で+10,000円）"))))))}],Ae=o(8756);function Ye(){return(0,ye.Y)(Ae.w,{title:"PRICING",subtitle:"Choose your plan",theme:"dark"},(0,ye.Y)(D.Ay,{container:!0,spacing:4},be.map(((e,t)=>{let{title:o,image:a,description:n}=e;return(0,ye.Y)(D.Ay,{item:!0,key:t,md:6,lg:4,sx:{display:"flex",alignItems:"stretch"}},(0,ye.Y)(A,null,(0,ye.Y)(H,{title:(0,ye.Y)(w.A,{variant:"h4"},(0,ye.Y)(w.A,{component:"span",color:"primary",fontSize:"1.25em"},o.slice(0,1)),o.slice(1)),sx:{backgroundColor:"#000",color:"#fff"}}),(0,ye.Y)(I,{component:"img",image:a,sx:{pointerEvents:"none"}}),(0,ye.Y)(C,null,n)))}))),(0,ye.Y)(A,{sx:{backgroundColor:"rgba(255, 255, 255, 0.75)",marginTop:"50px"}},(0,ye.Y)(C,null,(0,ye.Y)(ne,null,(0,ye.Y)(X,null,(0,ye.Y)(J,null,(0,ye.Y)(ce,{sx:{backgroundColor:"#000"}},(0,ye.Y)(te,{colSpan:3},(0,ye.Y)(w.A,{color:"#fff",sx:{fontWeight:"bold"}},"注意事項"))),(0,ye.Y)(ce,null,(0,ye.Y)(te,{colSpan:3},(0,ye.Y)(w.A,null,"すべてのプランにおいて別途撮影場所までの交通費が発生いたします。"))),(0,ye.Y)(ce,{sx:{backgroundColor:"#000"}},(0,ye.Y)(te,{colSpan:3},(0,ye.Y)(w.A,{color:"#fff",sx:{fontWeight:"bold"}},"高品質パネル"))),(0,ye.Y)(ce,null,["用紙サイズ","アルミフレームなし","アルミフレームあり"].map(((e,t)=>(0,ye.Y)(te,{key:t,component:"th"},(0,ye.Y)(w.A,{align:"center",sx:{fontWeight:"bold"}},e))))),[{type:"B3",size:"364x512",n:4200,y:5800},{type:"A2",size:"420x594",n:5e3,y:7e3},{type:"B2",size:"515x728",n:7e3,y:9e3},{type:"A1",size:"594x841",n:8e3,y:11e3}].map(((e,t)=>{let{type:o,size:a,n:n,y:r}=e;return(0,ye.Y)(ce,{key:t},(0,ye.Y)(te,null,(0,ye.Y)(w.A,{align:"center",sx:{fontWeight:"bold"}},o," ",(0,ye.Y)("small",null,"(",a,")"))),(0,ye.Y)(te,null,(0,ye.Y)(w.A,{align:"center"},n.toLocaleString(),"円／枚")),(0,ye.Y)(te,null,(0,ye.Y)(w.A,{align:"center"},r.toLocaleString(),"円／枚")))}))))))))}}}]);
//# sourceMappingURL=522-db9473ab68ffc0fd0499.js.map