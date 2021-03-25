(this.webpackJsonptsks=this.webpackJsonptsks||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(15),i=a.n(c),l=a(37),r=a(33),o=a(10),d=a(54),m=a(49),j=a(56),u=a(1),b=function(e){var t=e.handleShow;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)(d.a,{fixed:"top",variant:"light",bg:"white",children:Object(u.jsxs)(m.a,{fluid:"xl",className:"px-lg-2 px-xl-0",children:[Object(u.jsxs)(d.a.Brand,{href:"#home",className:"font-weight-bold",children:["Tsks",Object(u.jsx)("span",{children:"."})]}),Object(u.jsx)(j.a,{variant:"primary",className:"py-2 px-4",onClick:t,children:"Add task"})]})})})},h=a(55),x=a(50),O=a(34),p=function(e){var t=e.task,a=e.handleClick;return Object(u.jsx)(h.a,{className:"task-item p-2 mb-4 ".concat(t.reminder&&"reminder"),onClick:function(){return a(t)},children:Object(u.jsxs)(h.a.Body,{children:[Object(u.jsx)(h.a.Title,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("h4",{className:"font-weight-bold",children:t.title})}),Object(u.jsx)(O.a,{className:"col-auto ml-auto",children:Object(u.jsx)("div",{className:"btn-squares",children:Object(u.jsx)("span",{className:"square"})})})]})}),Object(u.jsx)(h.a.Text,{children:Object(u.jsx)("span",{style:{whiteSpace:"pre-line"},children:t.note})})]})})},f=a(35),g=a.n(f),k=function(e){var t=e.tasks,a=e.handleClick;return Object(u.jsx)("section",{className:"tasks bg-light",children:Object(u.jsx)(m.a,{fluid:"xl",className:"task-list py-4 py-sm-5 px-lg-4 px-xl-0",children:Object(u.jsx)(g.a,{breakpointCols:{default:3,900:2,600:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t.map((function(e){return Object(u.jsx)(p,{task:e,handleClick:a},e.id)}))})})})},N=a(53),y=a(27),S=function(e){var t=e.name,a=e.handleClose;return Object(u.jsxs)(x.a,{className:"mb-4",children:[Object(u.jsx)(O.a,{children:Object(u.jsx)("h3",{className:"font-weight-bold my-0 pt-1",children:t})}),Object(u.jsx)(O.a,{className:"col-auto ml-auto",children:Object(u.jsx)("button",{className:"btn-square",type:"button",onClick:a,children:Object(u.jsx)(y.a,{className:"fa"})})})]})},v=function(e){var t=e.label,a=e.state,s=e.setState;return Object(u.jsxs)(N.a.Group,{controlId:"formBasicText",children:[Object(u.jsx)(N.a.Label,{children:t}),Object(u.jsx)(N.a.Control,{style:{minHeight:"42px"},type:"text",placeholder:"Add title",value:a,onChange:function(e){return s(e.target.value)}})]})},C=function(e){var t=e.label,a=e.state,n=e.setState,c=e.defaultHeight,i=Object(s.useRef)();return Object(s.useEffect)((function(){i.current.style.height="".concat(c,"px"),i.current.style.height="".concat(i.current.scrollHeight+4,"px")})),Object(u.jsxs)(N.a.Group,{controlId:"formBasicTextarea",children:[Object(u.jsx)(N.a.Label,{children:t}),Object(u.jsx)(N.a.Control,{ref:i,as:"textarea",placeholder:"Take a note...",value:a,onChange:function(e){return n(e.target.value)},style:{resize:"none"}})]})};C.defaultProps={defaultHeight:100};var T=C,D=function(e){var t=e.label,a=e.state,s=e.setState;return Object(u.jsx)(N.a.Group,{controlId:"formBasicCheckbox",children:Object(u.jsx)(N.a.Check,{custom:!0,type:"checkbox",label:t,defaultChecked:a,onClick:function(e){s((function(e){return!e}))}})})},w=function(e){var t=e.addTask,a=e.handleClose,n=Object(s.useState)(""),c=Object(o.a)(n,2),i=c[0],l=c[1],r=Object(s.useState)(""),d=Object(o.a)(r,2),b=d[0],h=d[1],x=Object(s.useState)(!1),O=Object(o.a)(x,2),p=O[0],f=O[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a,{className:"add-task py-3",children:[Object(u.jsx)(S,{name:"Add task",handleClose:a}),Object(u.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),i||b?(t({title:i,note:b,reminder:p}),l(""),h(""),f(!1),a()):alert("Please add a task.")},children:[Object(u.jsx)(v,{label:"Title",state:i,setState:l}),Object(u.jsx)(T,{label:"Note",state:b,setState:h,defaultHeight:100}),Object(u.jsx)(D,{label:"Set Reminder",state:p,setState:f}),Object(u.jsx)(j.a,{variant:"primary",type:"submit",className:"py-2 px-4 mt-4",children:"Done"})]})]})})},L=function(e){var t=e.handleClose,a=e.editTask,n=e.task,c=e.deleteTask,i=n.id,l=Object(s.useState)(n.title),r=Object(o.a)(l,2),d=r[0],b=r[1],h=Object(s.useState)(n.note),p=Object(o.a)(h,2),f=p[0],g=p[1],k=Object(s.useState)(n.reminder),C=Object(o.a)(k,2),w=C[0],L=C[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a,{className:"add-task py-3",children:[Object(u.jsx)(S,{name:"Edit task",handleClose:t}),Object(u.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),d||f?(a({id:i,title:d,note:f,reminder:w}),b(""),g(""),L(!1),t()):alert("Please add a task.")},children:[Object(u.jsx)(v,{label:"Title",state:d,setState:b}),Object(u.jsx)(T,{label:"Note",state:f,setState:g,defaultHeight:100}),Object(u.jsx)(D,{label:"Set Reminder",state:w,setState:L}),Object(u.jsxs)(x.a,{className:"mt-5 ",children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(j.a,{variant:"primary",type:"submit",className:"py-2 px-4",children:"Done"})}),Object(u.jsx)(O.a,{className:"col-auto ml-auto",children:Object(u.jsx)("button",{className:"btn-square",type:"button",onClick:function(){c(n.id),t()},children:Object(u.jsx)(y.b,{className:"fa"})})})]})]})]})})},F=a(51),B=a.p+"static/media/tasks.765305de.png",I=function(e){var t=e.handleShow;return Object(u.jsx)("section",{className:"empty-state  d-flex",children:Object(u.jsx)(m.a,{fluid:"xl",className:"d-flex flex-column justify-content-center align-items-center py-4",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{sm:"12",className:"pb-4",children:Object(u.jsx)(F.a,{src:B})}),Object(u.jsxs)(O.a,{sm:"12",className:"text-center pt-3 pt-sm-4",children:[Object(u.jsx)("h1",{className:"font-weight-bold",children:"No tasks to do"}),Object(u.jsx)("p",{className:"lead pb-4",children:"Seems like it's all done for today. Good Job!"}),Object(u.jsx)(j.a,{variant:"primary",className:"py-2 px-4 btn-lg ",onClick:t,children:"Add a task"})]})]})})})},H=a(52),M=[{id:1,title:"Doctors Appointment",note:"Friday 4:00pm",reminder:!0},{id:2,title:"Meeting at school",note:"Monday 10:00am",reminder:!1},{id:3,title:"Food Shopping",note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec euismod nulla. Donec at odio et sem maximus pretium.",reminder:!1},{id:4,title:"Maximus pretium",note:"Nullam nec euismod nulla. Donec at odio et sem maximus pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec euismod nulla. Donec at odio et sem maximus pretium.",reminder:!1},{id:5,title:"",note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",reminder:!1},{id:6,title:"Donec at odio",note:"Today",reminder:!0},{id:7,title:"Nullam nec euismod nulla",note:"Monday 10:00am",reminder:!1},{id:8,title:"Adipiscing elit",note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec euismod nulla. Donec at odio et sem maximus pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec euismod nulla. Donec at odio et sem maximus pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec euismod nulla. Donec at odio et sem maximus pretium.",reminder:!1},{id:9,title:"",note:"Nullam nec euismod nulla. Donec at odio et sem maximus pretium.",reminder:!1},{id:10,title:"Nec euismod nulla",note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",reminder:!0},{id:11,title:"Food Shopping",note:"Today",reminder:!1}];a(46);var A=function(){var e=Object(s.useState)((function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]})),t=Object(o.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]),Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(M))}),[]);var c=Object(s.useState)(!1),i=Object(o.a)(c,2),d=i[0],m=i[1],j=Object(s.useState)(!1),h=Object(o.a)(j,2),x=h[0],O=h[1],p=function(){return O(!0)},f=function(){O(!1),m(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{handleShow:p}),0===a.length?Object(u.jsx)(I,{handleShow:p}):Object(u.jsx)(k,{tasks:a,handleClick:function(e){m(e),p()}}),Object(u.jsx)(H.a,{show:x,onHide:f,className:"p-1 p-sm-4",children:Object(u.jsx)(H.a.Body,{className:"p-2 p-sm-3",children:d?Object(u.jsx)(L,{handleClose:f,editTask:function(e){n(a.map((function(t){return t.id===e.id?Object(r.a)({},e):t})))},deleteTask:function(e){n(a.filter((function(t){return t.id!==e})))},task:d}):Object(u.jsx)(w,{handleClose:f,addTask:function(e){var t=Math.floor(1e4*Math.random())+1,s=Object(r.a)({id:t},e);n([s].concat(Object(l.a)(a)))}})})})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),J()}},[[47,1,2]]]);
//# sourceMappingURL=main.9b67ebf5.chunk.js.map