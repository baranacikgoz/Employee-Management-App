(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{34:function(e,a,t){},59:function(e,a,t){e.exports=t(90)},64:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(34),t(5)),s=t(6),m=t(7),i=t(8),u=(t(64),t(92)),p=t(98),d=t(99),E=t(20),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{className:"container-fluid",style:{marginBottom:"55px"}},r.a.createElement(p.a,{className:"fixed-top navbar-expand-lg",bg:"primary",variant:"dark"},r.a.createElement(p.a.Brand,{href:"https://baranacikgoz.github.io/Employee-Management-App/"},"Employee Management App"),r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(E.b,{className:"nav nav-link active",to:"Employee-Management-App/"},"Home"),r.a.createElement(E.b,{className:"nav nav-link active",to:"Employee-Management-App/adduser"},"Add User"),r.a.createElement(E.b,{className:"nav nav-link active",to:"Employee-Management-App/users"},"Employee Database"))))}}]),t}(n.Component),h=t(21),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"masthead bgimage"},r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},r.a.createElement("div",{className:"col-lg-10 align-self-end"},r.a.createElement("h1",{className:"text-uppercase text-black font-weight-bold"},"Welcome to Employee Management App.")),r.a.createElement("div",{className:"col-lg-8 align-self-baseline"},r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"I've built this app with React.js, Context-Api, React-Router, Bootstrap etc."),r.a.createElement("hr",{className:"divider my-4"}),r.a.createElement("p",{className:"text-white-75 font-weight-light mb-5"},"If you want to try app, once click ",r.a.createElement("a",{href:"https://infinite-escarpment-57092.herokuapp.com/"},"here "),"to wake up the database. Now you are free to add, delete or edit employees."),r.a.createElement("a",{className:"btn btn-primary btn-xl mr-2",href:"https://github.com/baranacikgoz"},r.a.createElement("i",{className:"fab fa-github fa-2x"})),r.a.createElement("a",{className:"btn btn-primary btn-xl ml-2",href:"www.linkedin.com/in/baran-acikgoz"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))))))}}]),t}(n.Component),v=t(9),y=t.n(v),j=t(15),g=t(100),N=t(93),x=t(94),O=t(97),k=t(57),w=t(95),T=t(58),S=t(32),C=t(16),U=t.n(C),A=r.a.createContext(),D=function(e,a){switch(a.type){case"DELETE_USER":return Object(S.a)({},e,{users:e.users.filter((function(e){return a.payload!==e.id}))});case"ADD_USER":return Object(S.a)({},e,{users:[].concat(Object(T.a)(e.users),[a.payload])});case"UPDATE_USER":return Object(S.a)({},e,{users:e.users.map((function(e){return e.id===a.payload?a.payload:e}))});default:return e}},G=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[],dispatch:function(a){e.setState((function(e){return D(e,a)}))}},e.componentDidMount=Object(j.a)(y.a.mark((function a(){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.get("https://infinite-escarpment-57092.herokuapp.com/users");case 2:t=a.sent,e.setState({users:t.data});case 4:case"end":return a.stop()}}),a)}))),e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),M=A.Consumer,J=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={visible:!0,name:"",jobTitle:"",salary:""},e.changeVisibility=function(){e.setState({visible:!e.state.visible})},e.addUser=function(){var a=Object(j.a)(y.a.mark((function a(t,n){var r,l,c,o,s,m;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},a.next=5,U.a.post("http://localhost:3004/users",s);case 5:m=a.sent,t({type:"ADD_USER",payload:m.data});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M,null,(function(a){return r.a.createElement(u.a,{className:"col-md-4 mt-auto"},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"col-md-9 text-center"},r.a.createElement(g.a.Text,{as:"h4"},"User add form")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement(x.a,{onClick:e.changeVisibility,variant:"outline-primary",size:"sm"},e.state.visible?"Hide":"Show"))))),e.state.visible?r.a.createElement(g.a.Body,null,r.a.createElement(O.a,{onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(O.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(O.a.Label,null,"Name : "),r.a.createElement(O.a.Control,{type:"name",placeholder:"Gandalf Grihamut"}),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the name please.")),r.a.createElement(O.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(O.a.Label,null,"Job : "),r.a.createElement(O.a.Control,{type:"name",placeholder:"White Wizard"}),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the job please.")),r.a.createElement(O.a.Group,{value:e.state.salary,onChange:e.addSalary,as:k.a,md:"8",controlId:"salary"},r.a.createElement(O.a.Label,null,"Salary : "),r.a.createElement(w.a,null,r.a.createElement(O.a.Control,{type:"number",placeholder:"7000","aria-describedby":"inputGroupPrepend",required:!0}),r.a.createElement(w.a.Prepend,null,r.a.createElement(w.a.Text,{id:"inputGroupPrepend"},"USD"))),r.a.createElement(O.a.Text,{className:"text-muted"},"Enter a valid number please.")),r.a.createElement(x.a,{className:"btn btn-block",variant:"primary",type:"submit"},"Save"))):null))}))}}]),t}(n.Component),I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bgimage"},r.a.createElement(J,null))}}]),t}(n.Component),R=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).deleteUser=function(){var a=Object(j.a)(y.a.mark((function a(t,n){var r;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.props.id,console.log(r),a.next=4,U.a.delete("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r));case 4:t({type:"DELETE_USER",payload:r});case 5:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M,null,(function(a){return r.a.createElement("tr",null,r.a.createElement("td",null,e.props.id),r.a.createElement("td",null,e.props.name),r.a.createElement("td",null,e.props.jobTitle),r.a.createElement("td",null,e.props.salary),r.a.createElement("td",null,r.a.createElement(E.b,{className:"btn btn-warning",to:"edituser/".concat(e.props.id)},r.a.createElement("i",{className:"fas fa-user-edit"}))),r.a.createElement("td",null,r.a.createElement(x.a,{onClick:e.deleteUser.bind(e,a.dispatch),variant:"danger"},r.a.createElement("i",{className:"far fa-trash-alt"}))))}))}}]),t}(n.Component),_=t(96),z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,(function(e){return r.a.createElement("div",null,r.a.createElement(_.a,{responsive:!0,bordered:!0,hover:!0,className:"text-center",size:"md"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Salary"),r.a.createElement("th",null,"Edit User"),r.a.createElement("th",null,"Delete User"))),r.a.createElement("tbody",null,e.users.map((function(e){return r.a.createElement(R,{key:e.id,id:e.id,name:e.name,jobTitle:e.jobTitle,salary:e.salary})})))))}))}}]),t}(n.Component),B=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.addUser=function(){var a=Object(j.a)(y.a.mark((function a(t,n){var r,l,c,o,s,m;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.state,l=r.name,c=r.jobTitle,o=r.salary,s={name:l,jobTitle:c,salary:o},a.next=5,U.a.post("https://infinite-escarpment-57092.herokuapp.com/users",s);case 5:m=a.sent,t({type:"ADD_USER",payload:m.data});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M,null,(function(a){return r.a.createElement(p.a,{className:"fixed-bottom text-center",style:{backgroundColor:"#d6dbdf"}},r.a.createElement("div",{className:"text-center col-md-12"},r.a.createElement(O.a,{onSubmit:e.addUser.bind(e,a.dispatch)},r.a.createElement(N.a,null,r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.name,onChange:e.addName,controlId:"name"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the name please."),r.a.createElement(O.a.Control,{type:"name",placeholder:"Gandalf the Grey"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.jobTitle,onChange:e.addJob,controlId:"jobTitle"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the job please."),r.a.createElement(O.a.Control,{type:"name",placeholder:"White Wizard"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Group,{value:e.state.salary,onChange:e.addSalary,controlId:"name"},r.a.createElement(O.a.Text,{className:"text-muted"},"Enter the salary please."),r.a.createElement(O.a.Control,{type:"number",placeholder:"7000"}))),r.a.createElement(k.a,null,r.a.createElement(O.a.Text,{className:"text-muted"},"Clik to add user."),r.a.createElement(x.a,{className:"btn",variant:"primary",type:"submit"},r.a.createElement("i",{className:"fas fa-user-plus"})))))))}))}}]),t}(n.Component),W=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(B,null))}}]),t}(n.Component),P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",jobTitle:"",salary:""},e.componentDidMount=Object(j.a)(y.a.mark((function a(){var t,n,r,l,c,o;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,console.log(t),a.next=4,U.a.get("https://infinite-escarpment-57092.herokuapp.com/users/".concat(t));case 4:n=a.sent,r=n.data,l=r.name,c=r.jobTitle,o=r.salary,e.setState({name:l,jobTitle:c,salary:o});case 7:case"end":return a.stop()}}),a)}))),e.updateUser=function(){var a=Object(j.a)(y.a.mark((function a(t,n){var r,l,c,o,s,m,i;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=e.props.match.params.id,l=e.state,c=l.name,o=l.jobTitle,s=l.salary,m={name:c,salary:s,jobTitle:o},console.log(m),a.next=7,U.a.put("https://infinite-escarpment-57092.herokuapp.com/users/".concat(r),m);case 7:i=a.sent,t({type:"UPDATE_USER",payload:i.data});case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.addName=function(a){e.setState({name:a.target.value})},e.addJob=function(a){e.setState({jobTitle:a.target.value})},e.addSalary=function(a){e.setState({salary:a.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M,null,(function(a){return r.a.createElement(u.a,{className:"col-md-4"},r.a.createElement(g.a,{className:"text-center"},r.a.createElement(g.a.Header,{id:"header"},r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"col-md-9 text-center"},r.a.createElement(g.a.Text,{as:"h4"},"Update User form")),r.a.createElement("div",{className:"col-md-2"})))),r.a.createElement(g.a.Body,null,r.a.createElement("form",{onSubmit:e.updateUser.bind(e,a.dispatch)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{value:e.state.name,onChange:e.addName,type:"text",className:"form-control",id:"name","aria-describedby":"emailHelp"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"jobTitle"},"Job:"),r.a.createElement("input",{value:e.state.jobTitle,onChange:e.addJob,type:"text",className:"form-control",id:"jobTitle"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"salary"},"Salary:"),r.a.createElement("input",{value:e.state.salary,onChange:e.addSalary,type:"number",className:"form-control",id:"salary"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Save"),r.a.createElement("a",{className:"btn btn-success ml-2",href:"/users"},"Go back"))))))}))}}]),t}(n.Component),H=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"Employee-Management-App/",component:f}),r.a.createElement(h.a,{exact:!0,path:"Employee-Management-App/adduser",component:I}),r.a.createElement(h.a,{exact:!0,path:"Employee-Management-App/users",component:W}),r.a.createElement(h.a,{exact:!0,path:"Employee-Management-App/edituser/:id",component:P}),r.a.createElement(h.a,{component:f})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(89);c.a.render(r.a.createElement(G,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.ad1334f9.chunk.js.map