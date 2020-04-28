(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(26),t(5)),s=t(6),m=t(7),i=t(8),u=(t(76),t(116)),d=t(117),p=t(14),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(u.a.Brand,{href:"https://baranacikgoz.github.io/Employee-Management-App/"},"Employee Managent App"),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"https://github.com/baranacikgoz"},r.a.createElement("i",{className:"fab fa-github fa-2x"})),r.a.createElement(d.a.Link,{href:"https://www.linkedin.com/in/baran-acikgoz"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))),r.a.createElement(d.a,null,r.a.createElement(p.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(p.b,{className:"nav-link",to:"/users"},"Database & Operations"),r.a.createElement(p.b,{className:"nav-link",to:"/adduser"},"Employee Add"))))}}]),t}(n.Component),b=t(21),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"masthead "},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},r.a.createElement("div",{className:"col-lg-10 align-self-end"},r.a.createElement("h1",{className:"text-uppercase text-black font-weight-bold"},"Employee Management App")),r.a.createElement("div",{className:"col-lg-8 align-self-baseline"},r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"I've built this app with React.js, Context-Api, React-Router, Bootstrap etc."),r.a.createElement("hr",{className:"divider my-4"}),r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"If you want to try app, once click"," ",r.a.createElement("a",{href:"https://infinite-escarpment-57092.herokuapp.com/"},"here"," "),"to wake up the database. Now you are free to add, delete or edit employees."),r.a.createElement(p.b,{className:"btn btn-dark btn-xl mr-2",to:"/users"},"Database & Operations"),r.a.createElement(p.b,{className:"btn btn-dark btn-xl ml-2",to:"/adduser"},"Employee Add")))))}}]),t}(n.Component),f=t(9),v=t.n(f),y=t(17),j=t(110),g=t(118),N=t(115),x=t(68),O=t(111),k=t(112),T=t(70),C=t(36),S=t(18),w=t.n(S),U=r.a.createContext(),D=function(e,a){switch(a.type){case"DELETE_USER":return Object(C.a)({},e,{users:e.users.filter((function(e){return a.payload!==e.id}))});case"ADD_USER":return Object(C.a)({},e,{users:[].concat(Object(T.a)(e.users),[a.payload])});case"UPDATE_USER":return Object(C.a)({},e,{users:e.users.map((function(e){return e.id===a.payload?a.payload:e}))});default:return e}},G=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[],dispatch:function(a){e.setState((function(e){return D(e,a)}))}},e.componentDidMount=Object(y.a)(v.a.mark((function a(){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.get("https://infinite-escarpment-57092.herokuapp.com/users");case 2:t=a.sent,e.setState({users:t.data});case 4:case"end":return a.stop()}}),a)}))),e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(U.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),A=U.Consumer,I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.changeVisibility=function(){e.setState({visible:!e.state.visible})},e.addUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r,l,c,o,s,m;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},a.next=5,w.a.post("http://localhost:3004/users",s);case 5:m=a.sent,t({type:"ADD_USER",payload:m.data});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A,null,(function(a){return r.a.createElement(j.a,{style:{paddingTop:"50px"},className:"col-md-4"},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",{className:"text-center"},r.a.createElement(g.a.Text,{as:"h4"},"Add form"))),r.a.createElement(g.a.Body,null,r.a.createElement(N.a,{onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(N.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(N.a.Label,null,"Name : "),r.a.createElement(N.a.Control,{type:"name",placeholder:"Gandalf Grihamut"}),r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the name please.")),r.a.createElement(N.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(N.a.Label,null,"Job : "),r.a.createElement(N.a.Control,{type:"name",placeholder:"White Wizard"}),r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the job please.")),r.a.createElement(N.a.Group,{value:e.state.salary,onChange:e.addSalary,as:x.a,md:"8",className:"mr-auto ml-auto",controlId:"salary"},r.a.createElement(N.a.Label,null,"Salary : "),r.a.createElement(O.a,null,r.a.createElement(N.a.Control,{type:"number",placeholder:"7000","aria-describedby":"inputGroupPrepend",required:!0}),r.a.createElement(O.a.Prepend,null,r.a.createElement(O.a.Text,{id:"inputGroupPrepend"},"USD"))),r.a.createElement(N.a.Text,{className:"text-muted"},"Enter a valid number please.")),r.a.createElement(k.a,{className:"btn btn-block",variant:"dark",type:"submit"},"Save")))))}))}}]),t}(n.Component),J=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bgimage",style:{paddingTop:"70px"}},r.a.createElement(I,null))}}]),t}(n.Component),B=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).deleteUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.props.id,console.log(r),a.next=4,w.a.delete("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r));case 4:t({type:"DELETE_USER",payload:r});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A,null,(function(a){return r.a.createElement("tr",null,r.a.createElement("td",{className:"col-md-1"},e.props.id),r.a.createElement("td",null,e.props.name),r.a.createElement("td",null,e.props.jobTitle),r.a.createElement("td",null,e.props.salary),r.a.createElement("td",null,r.a.createElement(p.b,{className:"btn btn-warning",to:"edituser/".concat(e.props.id)},r.a.createElement("i",{className:"fas fa-user-edit"}))),r.a.createElement("td",null,r.a.createElement(k.a,{onClick:e.deleteUser.bind(e,a.dispatch),variant:"danger"},r.a.createElement("i",{className:"far fa-trash-alt"}))))}))}}]),t}(n.Component),R=t(113),_=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,(function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(R.a,{responsive:"sm",bordered:!0,hover:!0,className:"text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,e.users.map((function(e){return r.a.createElement(B,{key:e.id,id:e.id,name:e.name,jobTitle:e.jobTitle,salary:e.salary})})))))}))}}]),t}(n.Component),W=t(30),L=t(114),z=t(69),P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).addUser=function(){var e=Object(y.a)(v.a.mark((function e(a,t){var r,l,c,o,s,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=n.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},e.next=5,w.a.post("https://infinite-escarpment-57092.herokuapp.com/users",s);case 5:m=e.sent,a({type:"ADD_USER",payload:m.data});case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),n.addName=function(e){n.setState({name:e.target.value})},n.addJob=function(e){n.setState({jobTitle:e.target.value})},n.addSalary=function(e){n.setState({salary:e.target.value})},n.toggleNavbar=n.toggleNavbar.bind(Object(W.a)(n)),n.state={collapsed:!1,name:"",jobTitle:"",salary:""},n}return Object(s.a)(t,[{key:"scrollToBottom",value:function(){z.animateScroll.scrollToBottom()}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this;return r.a.createElement(A,null,(function(a){var t=e.state.collapsed;return r.a.createElement("footer",{style:e.state.collapsed?{paddingTop:"340px"}:{paddingTop:"90px"}},r.a.createElement(u.a,{className:"text-center fixed-bottom",collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,null,"Add Employee Easily"),r.a.createElement(u.a.Toggle,{onClick:function(){e.toggleNavbar(),e.scrollToBottom()},"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},t?r.a.createElement(d.a,null,r.a.createElement(N.a,{className:"text-center",onSubmit:e.addUser.bind(e,a.dispatch)}," ",r.a.createElement(N.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the name please."),r.a.createElement(N.a.Control,{type:"name",placeholder:"Gandalf the Grey"})),r.a.createElement(N.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the job please."),r.a.createElement(N.a.Control,{type:"name",placeholder:"White Wizard"})),r.a.createElement(N.a.Group,{value:e.state.salary,onChange:e.addSalary,controlId:"name"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the salary please."),r.a.createElement(N.a.Control,{type:"number",placeholder:"7000"}))," ",r.a.createElement(N.a.Text,{className:"text-muted"},"Clik to add user."),r.a.createElement(k.a,{className:"btn col-md-3 ml-auto mr-auto",variant:"primary",type:"submit"},r.a.createElement("i",{className:"fas fa-user-plus"})))):r.a.createElement(d.a,{className:"ml-auto mr-auto"},r.a.createElement(N.a,{id:"id",className:"text-center col-md-auto",onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(L.a,null," ",r.a.createElement(x.a,null,r.a.createElement(N.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the name please."),r.a.createElement(N.a.Control,{type:"name",placeholder:"Gandalf the Grey"}))),r.a.createElement(x.a,null,r.a.createElement(N.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the job please."),r.a.createElement(N.a.Control,{type:"name",placeholder:"White Wizard"}))),r.a.createElement(x.a,null,r.a.createElement(N.a.Group,{value:e.state.salary,onChange:e.addSalary,controlId:"name"},r.a.createElement(N.a.Text,{className:"text-muted"},"Enter the salary please."),r.a.createElement(N.a.Control,{type:"number",placeholder:"7000"}))),r.a.createElement(x.a,null," ",r.a.createElement(N.a.Text,{className:"text-muted"},"Clik to add user."),r.a.createElement(k.a,{className:"btn col-md-3 ml-auto mr-auto",variant:"primary",type:"submit"},r.a.createElement("i",{className:"fas fa-user-plus"})))))))))}))}}]),t}(n.Component),M=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingTop:"70px"}},r.a.createElement(_,null),r.a.createElement(P,null))}}]),t}(n.Component),H=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.componentDidMount=Object(y.a)(v.a.mark((function a(){var t,n,r,l,c,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,console.log(t),a.next=4,w.a.get("https://infinite-escarpment-57092.herokuapp.com/users/".concat(t));case 4:n=a.sent,r=n.data,l=r.name,c=r.jobTitle,o=r.salary,e.setState({name:l,jobTitle:c,salary:o});case 7:case"end":return a.stop()}}),a)}))),e.updateUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r,l,c,o,s,m,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.props.match.params.id,l=e.state,c=l.name,o=l.jobTitle,s=l.salary,m={name:c,salary:s,jobTitle:o},console.log(m),a.next=7,w.a.put("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r),m);case 7:i=a.sent,t({type:"UPDATE_USER",payload:i.data});case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A,null,(function(a){return r.a.createElement(j.a,{className:"col-md-4",style:{paddingTop:"70px"}},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement("div",{className:"col-md-9 text-center"},r.a.createElement(g.a.Text,{as:"h4"},"Update User form")),r.a.createElement("div",{className:"col-md-2"})))),r.a.createElement(g.a.Body,null,r.a.createElement("form",{onSubmit:e.updateUser.bind(e,a.dispatch)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{value:e.state.name,onChange:e.addName,type:"text",className:"form-control",id:"name","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"jobTitle"},"Job:"),r.a.createElement("input",{value:e.state.jobTitle,onChange:e.addJob,type:"text",className:"form-control",id:"jobTitle"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"salary"},"Salary:"),r.a.createElement("input",{value:e.state.salary,onChange:e.addSalary,type:"number",className:"form-control",id:"salary"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Save"),r.a.createElement(p.b,{className:"btn btn-success ml-2",to:"/users"},"Go back"))))))}))}}]),t}(n.Component),F=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:h}),r.a.createElement(b.a,{exact:!0,path:"/adduser",component:J}),r.a.createElement(b.a,{exact:!0,path:"/users",component:M}),r.a.createElement(b.a,{exact:!0,path:"/edituser/:id",component:H}),r.a.createElement(b.a,{component:h})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(107);c.a.render(r.a.createElement(G,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,a,t){},71:function(e,a,t){e.exports=t(108)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.d3e2ba88.chunk.js.map