(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{1002:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(27),i=a.n(o),l=(a(516),a(114)),c=a(115),s=a(167),h=a(166),u=a(495),d=a(1012),g=a(1010),m=a(499),f=a(171),p=a(99),w=a(1009),b=a(1011),v=a(1008),y=a(1013),E=a(497),k=(a(845),a(846),a(117)),D=a.n(k),F=a(304),C=a.n(F),S=d.a.Header,W=d.a.Footer,j=d.a.Content,x=g.a.Title,A="http://"+window.location.host.split(":")[0]+":"+window.location.port,L=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={graphData:[]},e.getDataFromXLSX=function(){C.a.get(A+"/get-worksheet").then((function(t){e.setState({graphData:t.data.data.map((function(e){return e.weight=parseFloat(e.weight),e}))}),console.log(e.state.graphData)})).catch((function(e){return m.b.error(e.message)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getDataFromXLSX()}},{key:"render",value:function(){var e=this,t={wrapperCol:{offset:10,span:14}},a={data:this.state.graphData,xField:"date",yField:"weight",smooth:!0,point:{},label:{style:{fill:"#aaa"}},legend:{position:"top"},autoFit:!0};return r.a.createElement(d.a,null,r.a.createElement(S,null,r.a.createElement(x,{style:{textAlign:"center",color:"#FFF"}},r.a.createElement("i",null,"Weight Calculator"))),r.a.createElement(j,{style:{background:"#fff",height:"85vh",marginLeft:20,marginRight:20}},r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{xs:18,sm:18,md:18,lg:18,xl:18},r.a.createElement(w.a,{title:"Enter Details",style:{marginTop:50}},r.a.createElement(b.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",initialValues:{remember:!0},onFinish:function(t){var a={sno:e.state.graphData.length+1,date:D()(t.date).format("YYYY-MM-DD"),weight:t.weight};C.a.post(A+"/add-weight",a).then((function(t){m.b.success("Data added successfully"),e.getDataFromXLSX()})).catch((function(e){return m.b.error(e.message)}))},onFinishFailed:function(e){console.log("Failed:",e)},style:{padding:20}}),r.a.createElement(b.a.Item,{label:"Date",name:"date",rules:[{required:!0,message:"Please input the date!"}]},r.a.createElement(v.a,{placeholder:"Enter Date",style:{width:"100%"}})),r.a.createElement(b.a.Item,{label:"Weight",name:"weight",rules:[{required:!0,message:"Please input your weight!"}]},r.a.createElement(y.a,{style:{width:"100%"},placeholder:"Enter Weight"})),r.a.createElement(b.a.Item,t,r.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit")))))),r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{xs:18,sm:18,md:18,lg:18,xl:18},r.a.createElement(w.a,{title:"Date vs Weight Graph",style:{marginTop:20}},r.a.createElement(u.a,Object.assign({},a,{style:{height:"30vh"}})))))),r.a.createElement(W,{style:{textAlign:"center",backgroundColor:"#cfd9e3"}},"Site Design  ",r.a.createElement("b",null,"\xa92020")," Created by ",r.a.createElement("b",null,r.a.createElement("i",null,"Aakash Chandhoke, Member (Research Staff), Central Research Laboratory, Bharat Electronics Limited, Ghaziabad"))))}}]),a}(r.a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},511:function(e,t,a){e.exports=a(1002)},516:function(e,t,a){},845:function(e,t,a){}},[[511,1,2]]]);
//# sourceMappingURL=main.0f648595.chunk.js.map