(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(8),a=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))},i=n(2),h=n(3),l=n(5),b=n(4),j=(n(7),n(0)),d=function(e){var t=e.name,n=e.id,r=e.email;return 8===n?Object(j.jsxs)("div",{className:"bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"robot"}),Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsxs)("h4",{children:[" ",t," "]}),Object(j.jsxs)("p",{children:[" ",r," "]})]})]}):Object(j.jsxs)("div",{className:"bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(n,"?size=200x200"),alt:"robot"}),Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsxs)("h3",{children:[" ",t," "]}),Object(j.jsxs)("p",{children:[" ",r," "]})]})]})},u=function(e){for(var t=e.robots,n=[],r=0;r<t.length;r++)n.push(Object(j.jsx)(d,{name:t[r].name,id:t[r].id,email:t[r].email},t[r].id));return Object(j.jsx)("div",{children:n})},O=function(e){var t=e.searchChange;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"pa2 ma2 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t})})},g=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"360px"},children:e.children})},f=(n(14),n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?Object(j.jsx)("h1",{children:" Oh no, Something went wrong "}):this.props.children}}]),n}(r.Component)),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){for(var n=e.state.total,r=t.target.value,s=[],c=0;c<n.length;c++)n[c].name.toLowerCase().includes(r.toLowerCase())&&s.push(n[c]);e.setState({searchfield:r,robots:s})},e.state={total:[],robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t,total:t})}))}},{key:"render",value:function(){return 0===this.state.total.length?Object(j.jsx)("h2",{children:" Loading.... "}):Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:" ROBOFRIENDS "}),Object(j.jsx)(O,{searchChange:this.onSearchChange}),Object(j.jsx)(g,{children:Object(j.jsx)(f,{children:Object(j.jsx)(u,{robots:this.state.robots})})})]})}}]),n}(s.a.Component);n(16);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),o()},7:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.83b09275.chunk.js.map