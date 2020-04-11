(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{25:function(e,a,t){},59:function(e,a,t){e.exports=t(90)},64:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(25),t(5)),s=t(6),m=t(7),i=t(8),u=(t(64),t(98)),p=t(99),d=t(13),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/home"},"Employee Managent App"),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"https://github.com/baranacikgoz"},r.a.createElement("i",{className:"fab fa-github fa-2x"})),r.a.createElement(p.a.Link,{href:"https://www.linkedin.com/in/baran-acikgoz"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))),r.a.createElement(p.a,null,r.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(d.b,{className:"nav-link",to:"/users"},"Database & Operations"),r.a.createElement(d.b,{className:"nav-link",to:"/adduser"},"Employee Add"))))}}]),t}(n.Component),E=t(21),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"masthead bgimage"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},r.a.createElement("div",{className:"col-lg-10 align-self-end"},r.a.createElement("h1",{className:"text-uppercase text-black font-weight-bold"},"Employee Management App")),r.a.createElement("div",{className:"col-lg-8 align-self-baseline"},r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"I've built this app with React.js, Context-Api, React-Router, Bootstrap etc."),r.a.createElement("hr",{className:"divider my-4"}),r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"If you want to try app, once click"," ",r.a.createElement("a",{href:"https://infinite-escarpment-57092.herokuapp.com/"},"here"," "),"to wake up the database. Now you are free to add, delete or edit employees."),r.a.createElement(d.b,{className:"btn btn-primary btn-xl mr-2",to:"/users"},"Database & Operations"),r.a.createElement(d.b,{className:"btn btn-primary btn-xl ml-2 mt-2",to:"/adduser"},"Employee Add")))))}}]),t}(n.Component),f=t(9),v=t.n(f),y=t(16),j=t(92),g=t(100),x=t(93),N=t(94),O=t(97),k=t(57),T=t(95),w=t(58),S=t(33),C=t(17),D=t.n(C),U=r.a.createContext(),A=function(e,a){switch(a.type){case"DELETE_USER":return Object(S.a)({},e,{users:e.users.filter((function(e){return a.payload!==e.id}))});case"ADD_USER":return Object(S.a)({},e,{users:[].concat(Object(w.a)(e.users),[a.payload])});case"UPDATE_USER":return Object(S.a)({},e,{users:e.users.map((function(e){return e.id===a.payload?a.payload:e}))});default:return e}},G=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[],dispatch:function(a){e.setState((function(e){return A(e,a)}))}},e.componentDidMount=Object(y.a)(v.a.mark((function a(){var t;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.a.get("https://infinite-escarpment-57092.herokuapp.com/users");case 2:t=a.sent,e.setState({users:t.data});case 4:case"end":return a.stop()}}),a)}))),e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(U.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),J=U.Consumer,I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={visible:!0,name:"",jobTitle:"",salary:""},e.changeVisibility=function(){e.setState({visible:!e.state.visible})},e.addUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r,l,c,o,s,m;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},a.next=5,D.a.post("http://localhost:3004/users",s);case 5:m=a.sent,t({type:"ADD_USER",payload:m.data});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J,null,(function(a){return r.a.createElement(j.a,{className:"col-md-4 mt-auto"},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("div",{className:"col-md-9 text-center"},r.a.createElement(g.a.Text,{as:"h4"},"Employee add form")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement(N.a,{onClick:e.changeVisibility,variant:"outline-primary",size:"sm"},e.state.visible?"Hide":"Show"))))),e.state.visible?r.a.createElement(g.a.Body,null,r.a.createElement(O.a,{onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(O.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(O.a.Label,null,"Name : "),r.a.createElement(O.a.Control,{type:"name",placeholder:"Gandalf Grihamut"}),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the name please.")),r.a.createElement(O.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(O.a.Label,null,"Job : "),r.a.createElement(O.a.Control,{type:"name",placeholder:"White Wizard"}),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the job please.")),r.a.createElement(O.a.Group,{value:e.state.salary,onChange:e.addSalary,as:k.a,md:"8",controlId:"salary"},r.a.createElement(O.a.Label,null,"Salary : "),r.a.createElement(T.a,null,r.a.createElement(O.a.Control,{type:"number",placeholder:"7000","aria-describedby":"inputGroupPrepend",required:!0}),r.a.createElement(T.a.Prepend,null,r.a.createElement(T.a.Text,{id:"inputGroupPrepend"},"USD"))),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter a valid number please.")),r.a.createElement(N.a,{className:"btn btn-block",variant:"primary",type:"submit"},"Save"))):null))}))}}]),t}(n.Component),R=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bgimage",style:{paddingTop:"70px"}},r.a.createElement(I,null))}}]),t}(n.Component),_=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).deleteUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.props.id,console.log(r),a.next=4,D.a.delete("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r));case 4:t({type:"DELETE_USER",payload:r});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J,null,(function(a){return r.a.createElement("tr",null,r.a.createElement("td",null,e.props.id),r.a.createElement("td",null,e.props.name),r.a.createElement("td",null,e.props.jobTitle),r.a.createElement("td",null,e.props.salary),r.a.createElement("td",null,r.a.createElement(d.b,{className:"btn btn-warning",to:"edituser/".concat(e.props.id)},r.a.createElement("i",{className:"fas fa-user-edit"}))),r.a.createElement("td",null,r.a.createElement(N.a,{onClick:e.deleteUser.bind(e,a.dispatch),variant:"danger"},r.a.createElement("i",{className:"far fa-trash-alt"}))))}))}}]),t}(n.Component),B=t(96),L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(J,null,(function(e){return r.a.createElement("div",null,r.a.createElement(B.a,{responsive:!0,bordered:!0,hover:!0,className:"text-center",size:"md"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,e.users.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,name:e.name,jobTitle:e.jobTitle,salary:e.salary})})))))}))}}]),t}(n.Component),z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.addUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r,l,c,o,s,m;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},a.next=5,D.a.post("https://infinite-escarpment-57092.herokuapp.com/users",s);case 5:m=a.sent,t({type:"ADD_USER",payload:m.data});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J,null,(function(a){return r.a.createElement(u.a,{className:"fixed-bottom text-center",style:{backgroundColor:"#d6dbdf"}},r.a.createElement("div",{className:"text-center col-md-12"},r.a.createElement(O.a,{onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(x.a,null,r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the name please."),r.a.createElement(O.a.Control,{type:"name",placeholder:"Gandalf the Grey"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the job please."),r.a.createElement(O.a.Control,{type:"name",placeholder:"White Wizard"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.salary,onChange:e.addSalary,controlId:"name"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the salary please."),r.a.createElement(O.a.Control,{type:"number",placeholder:"7000"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Text,{className:"text-muted"},"Clik to add user."),r.a.createElement(N.a,{className:"btn",variant:"primary",type:"submit"},r.a.createElement("i",{className:"fas fa-user-plus"})))))))}))}}]),t}(n.Component),P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingTop:"70px",paddingBottom:"70px"}},r.a.createElement(L,null),r.a.createElement(z,null))}}]),t}(n.Component),W=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.componentDidMount=Object(y.a)(v.a.mark((function a(){var t,n,r,l,c,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,console.log(t),a.next=4,D.a.get("https://infinite-escarpment-57092.herokuapp.com/users/".concat(t));case 4:n=a.sent,r=n.data,l=r.name,c=r.jobTitle,o=r.salary,e.setState({name:l,jobTitle:c,salary:o});case 7:case"end":return a.stop()}}),a)}))),e.updateUser=function(){var a=Object(y.a)(v.a.mark((function a(t,n){var r,l,c,o,s,m,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.props.match.params.id,l=e.state,c=l.name,o=l.jobTitle,s=l.salary,m={name:c,salary:s,jobTitle:o},console.log(m),a.next=7,D.a.put("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r),m);case 7:i=a.sent,t({type:"UPDATE_USER",payload:i.data});case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J,null,(function(a){return r.a.createElement(j.a,{className:"col-md-4",style:{paddingTop:"70px"}},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("div",{className:"col-md-9 text-center"},r.a.createElement(g.a.Text,{as:"h4"},"Update User form")),r.a.createElement("div",{className:"col-md-2"})))),r.a.createElement(g.a.Body,null,r.a.createElement("form",{onSubmit:e.updateUser.bind(e,a.dispatch)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{value:e.state.name,onChange:e.addName,type:"text",className:"form-control",id:"name","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"jobTitle"},"Job:"),r.a.createElement("input",{value:e.state.jobTitle,onChange:e.addJob,type:"text",className:"form-control",id:"jobTitle"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"salary"},"Salary:"),r.a.createElement("input",{value:e.state.salary,onChange:e.addSalary,type:"number",className:"form-control",id:"salary"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Save"),r.a.createElement(d.b,{className:"btn btn-success ml-2",href:"/users"},"Go back"))))))}))}}]),t}(n.Component),H=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:h}),r.a.createElement(E.a,{exact:!0,path:"/adduser",component:R}),r.a.createElement(E.a,{exact:!0,path:"/users",component:P}),r.a.createElement(E.a,{exact:!0,path:"/edituser/:id",component:W}),r.a.createElement(E.a,{component:h})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(89);c.a.render(r.a.createElement(G,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.76326cb5.chunk.js.map