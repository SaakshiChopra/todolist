(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{117:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(35),s=n.n(c),r=(n(109),n(76)),d=n(89),l=n(90),o=n(96),h=n(94),j=n(132),b=n(130),u=n(131),x=n(51),O=n(4),f=function(t){var e=t.data,n=t.handleDelete,a=t.handleModal;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{padding:"30px"},children:Object(O.jsx)(u.a,{raised:!0,fluid:!0,centered:"true",children:Object(O.jsx)("div",{style:{padding:"30px"},children:Object(O.jsxs)(u.a.Content,{children:[Object(O.jsxs)(u.a.Description,{children:[e,Object(O.jsx)(j.a,{basic:!0,color:"red",content:"DELETE",onClick:function(){return n(e)},icon:!0,floated:"right",children:Object(O.jsx)(x.a,{name:"trash alternate"})}),Object(O.jsx)(j.a,{basic:!0,color:"blue",content:"EDIT",onClick:function(){return a(e)},icon:!0,floated:"right",children:Object(O.jsx)(x.a,{name:"edit"})})]}),Object(O.jsx)("br",{})]})})})})})},p=function(t){var e=t.dataList,n=t.handleDelete,a=t.handleModal;return Object(O.jsx)(O.Fragment,{children:e.map((function(t){return Object(O.jsx)(f,{data:t,handleDelete:n,handleModal:a})}))})},g=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(t){var a;Object(d.a)(this,n),(a=e.call(this,t)).fun=function(){a.setState({open:!a.state.open})},a.handleData=function(t){a.setState({data:t.target.value})},a.handleAdd=function(){""==a.state.data?a.setState({error1:"enter title."}):(a.setState({dataList:[a.state.data].concat(Object(r.a)(a.state.dataList))}),a.setState({data:" "}))},a.handleDelete=function(t){a.setState({dataList:a.state.dataList.filter((function(e){return e!=t}))})},a.handleEdit=function(){var t=a.str,e=a.state.text1;a.setState({dataList:a.state.dataList.map((function(n){return t==n?Object(r.a)(e):Object(r.a)(n)}))}),a.fun()},a.handleModal=function(t){a.str=t,a.fun()},a.handleText1=function(t){a.setState({text1:t.target.value})},a.state={data:"",dataList:[],error1:"",open:!1,text1:""};return a}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{backgroundImage:"url(./images/b2.jpg)",backgroundSize:"cover",height:"1500px",width:"100%"},children:Object(O.jsxs)("div",{style:{backgroundColor:"white",marginLeft:"350px",marginRight:"400px",border:"4px solid rgba(247, 141, 167, 0.73)",borderRadius:"10px"},children:[Object(O.jsx)("h1",{style:{color:"#0E6EB8",textAlign:"center"},children:"TO DO LIST"}),Object(O.jsx)("input",{placeholder:"Enter here",value:this.state.data,onChange:this.handleData,style:{marginLeft:"162px"}}),Object(O.jsx)("p",{children:this.state.error1}),Object(O.jsx)(j.a,{basic:!0,color:"teal",onClick:this.handleAdd,style:{marginLeft:"220px"},children:"Add"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(p,{dataList:this.state.dataList,handleDelete:this.handleDelete,handleModal:this.handleModal}),Object(O.jsxs)(b.a,{onClose:this.fun,onOpen:this.fun,open:this.state.open,children:[Object(O.jsx)(b.a.Header,{children:"UPDATE INFORMATION"}),Object(O.jsx)(b.a.Content,{children:Object(O.jsx)(b.a.Description,{children:Object(O.jsx)("input",{onChange:this.handleText1,value:this.state.text1})})}),Object(O.jsxs)(b.a.Actions,{children:[Object(O.jsx)(j.a,{color:"black",onClick:this.fun,children:"CANCEL"}),Object(O.jsx)(j.a,{content:"SAVE",labelPosition:"right",icon:"checkmark",onClick:this.handleEdit,positive:!0})]})]})]})})})}}]),n}(i.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),v()}},[[117,1,2]]]);
//# sourceMappingURL=main.46a23da2.chunk.js.map