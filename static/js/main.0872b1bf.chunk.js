(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(4),o=n.n(i),m=(n(15),n(16),n.p+"static/media/Trollface.c371feba.png");var r=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:m,alt:"Problem?"}),Object(a.jsx)("p",{children:"Meme Generator"})]})},h=n(5),l=n(6),j=n(7),u=n(2),b=n(9),d=n(8),g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),n=this.state.allMemeImgs[t].url;this.setState({randomImage:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:"meme-form",children:[Object(a.jsx)("input",{type:"text",value:this.state.topText,placeholder:"Top Text",name:"topText",onChange:this.handleChange}),Object(a.jsx)("input",{type:"text",value:this.state.bottomText,placeholder:"Bottom Text",name:"bottomText",onChange:this.handleChange}),Object(a.jsx)("button",{children:"Gen"})]}),Object(a.jsxs)("div",{className:"meme",children:[Object(a.jsx)("img",{src:this.state.randomImage,alt:"meme img"}),Object(a.jsx)("h2",{className:"top",children:this.state.topText}),Object(a.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(s.Component);var p=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(r,{}),Object(a.jsx)(g,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.0872b1bf.chunk.js.map