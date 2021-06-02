(this.webpackJsonpfordat=this.webpackJsonpfordat||[]).push([[0],{100:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(86),o=a.n(r),s=(a(98),a(99),a(100),a(93)),i=a(9),l=a(10),d=a(12),j=a(11),u=a(22),b=a(5),h=a(3),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"nav-wrapper",children:Object(h.jsxs)("nav",{className:"main-nav",children:[Object(h.jsx)(u.b,{to:"/colors",className:"nav-link",children:"Colors"}),Object(h.jsx)(u.b,{to:"/sketchbook",className:"nav-link",children:"Sketchbook"}),Object(h.jsx)(u.b,{to:"/",className:"nav-link",children:"About"})]})})}}]),a}(c.a.Component),p=a(34),f=a(92),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).colorRef=c.a.createRef(),n.handleChange=function(e,t){n.setState({background:e.hex});var a=n.colorRef.current.props.color;console.log(a),n.props.changeBackground(a)},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.state={background:"#A3A3DE"},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"slider-div",children:[Object(h.jsx)("p",{children:"Help me finish up my site:"}),Object(h.jsx)(f.a,{className:"slider",ref:this.colorRef,color:this.state.background,onChange:this.handleChange,onChangeComplete:this.handleChange})]})}}]),a}(c.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"info-wrapper",children:[Object(h.jsx)("h3",{className:"info",children:"About Me"}),Object(h.jsx)("p",{className:"info",children:"I'm a researcher and developer working out of Vancouver, BC."}),Object(h.jsxs)("p",{className:"info",children:["Currently, I'm a laboratory manager at the ",Object(h.jsx)("a",{className:"wlink",href:"https://viscoglab.psych.ubc.ca/",children:"UBC Visual Cognition Lab"}),", where I study information visualization and contribute to our codebase.  Previously, I worked as a software developer for the Department of Psychology's ",Object(h.jsx)("a",{className:"wlink",href:"https://demo.tapestry-tool.com/tapestry/walkthrough/#/nodes/4827",children:"Tapestry Tool"}),".  I received my B.Sc. in Cognitive Systems with a focus in Computer Science from UBC in 2020."]}),Object(h.jsx)("p",{className:"info",children:"In my free time, I like to cook, paint, play the piano, go on walks, and work on my bicycle."})]})}}]),a}(c.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Work component!"})})}}]),a}(c.a.Component),k=a.p+"static/media/birds2.a0d9c3e6.jpeg",x=a.p+"static/media/mediterranean.51a4fd14.jpeg",y=a.p+"static/media/hand.451066ee.jpeg",C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).activateModal=function(e){var t=n.modalRef,a=e,c=n.modalImgRef;t.current.style.display="block",c.current.src=a},n.deactivateModal=function(e){(e.target.classList.contains("modal")||e.target.classList.contains("close"))&&(n.modalRef.current.style.display="none")},n.modalRef=c.a.createRef(),n.modalImgRef=c.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"painting-wrapper",children:[Object(h.jsx)("img",{className:"painting",src:x,alt:"the sea",onClick:function(){return e.activateModal(x)}}),Object(h.jsx)("img",{className:"painting",src:k,alt:"birds",onClick:function(){return e.activateModal(k)}}),Object(h.jsx)("img",{className:"painting",src:y,alt:"hand",onClick:function(){return e.activateModal(y)}}),Object(h.jsxs)("div",{id:"myModal",ref:this.modalRef,className:"modal",onClick:function(t){return e.deactivateModal(t)},children:[Object(h.jsx)("span",{className:"close",onClick:function(t){return e.deactivateModal(t)},children:"\xd7"}),Object(h.jsx)("img",{className:"modal-content",id:"img01",ref:this.modalImgRef}),Object(h.jsx)("div",{id:"caption"})]})]})}}]),a}(c.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={background:""},e.changeBackground=function(t){var a=t;console.log("changed the background to "+a);Object(s.a)({},e.state.background);e.setState({background:a}),document.body.style="background: ".concat(a,";")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"App-box",children:[Object(h.jsx)("h1",{className:"content",children:"Ford Atwater"}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)("br",{}),Object(h.jsx)(b.a,{path:"/colors",exact:!0,render:function(){return Object(h.jsx)(O,{changeBackground:e.changeBackground})}}),Object(h.jsx)(b.a,{path:"/work",component:v}),Object(h.jsx)(b.a,{path:"/sketchbook",component:C}),Object(h.jsx)(b.a,{path:"/",exact:!0,component:g})]})]})})}}]),a}(c.a.Component);var w=function(){return Object(h.jsx)(N,{})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,214)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),R()},98:function(e,t,a){},99:function(e,t,a){}},[[212,1,2]]]);
//# sourceMappingURL=main.fb8a659a.chunk.js.map