webpackJsonp([1],{114:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(37),r=n(118),s=n(123),c=n(127),o=n(184),i=n(293),u=(n.n(i),n(294));n.n(u);a.a.use(o.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:r.a,router:c.a,template:"<App/>",components:{App:s.a}})},118:function(t,e,n){"use strict";var a=n(37),r=n(28),s=n(119),c=n(121);a.a.use(r.a),e.a=new r.a.Store({modules:{user:s.a,snapshot:c.a}})},119:function(t,e,n){"use strict";var a={name:null,fee_percent:null,minimum_contribution:null,tezos_rpc_address:null,baker_tz_address:null},r={loadFromConfigFile:function(t){(0,t.commit)("setUserConfig",n(120))}},s={setUserConfig:function(t,e){var n=e.name,a=e.feePercent,r=e.minimumContribution,s=e.tezosRpcAddress,c=e.bakerTzAddress;t.name=n,t.fee_percent=a,t.minimum_contribution=r,t.tezos_rpc_address=s,t.baker_tz_address=c}};e.a={namespaced:!0,state:a,actions:r,mutations:s}},120:function(t,e){t.exports={name:"Zednode",feePercent:"10",minimumContribution:0,tezosRpcAddress:"https://rpc.tezrpc.me",bakerTzAddress:"tz1L3vFD8mFzBaS8yLHFsd7qDJY1t276Dh8i"}},121:function(t,e,n){"use strict";var a={data:null},r={loadFromConfigFile:function(t){(0,t.commit)("setSnapshotData",n(122))}},s={setSnapshotData:function(t,e){t.data=e}};e.a={namespaced:!0,state:a,actions:r,mutations:s}},122:function(t,e){t.exports={60:7,61:7,62:12,63:7,64:10,65:6,66:7,67:11,68:11,69:13,70:7,71:1,72:12}},123:function(t,e,n){"use strict";function a(t){n(124)}var r=n(60),s=n(126),c=n(21),o=a,i=c(r.a,s.a,!1,o,null,null);e.a=i.exports},124:function(t,e){},126:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Gingerbread")]),t._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/config"}},[t._v("Config")]),t._v(" "),n("b-nav-item",{attrs:{to:"/cycles"}},[t._v("All Cycles")]),t._v(" "),n("b-nav-item",{attrs:{to:"/cycle_info/head"}},[t._v("Cycle Info")])],1)],1)],1),t._v(" "),n("main",{staticClass:"container",attrs:{role:"main"}},[n("router-view")],1)],1)},r=[],s={render:a,staticRenderFns:r};e.a=s},127:function(t,e,n){"use strict";var a=n(37),r=n(128),s=n(129),c=n(132),o=n(147),i=n(182);a.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"Hello",component:s.a},{path:"/config",name:"Config",component:c.a},{path:"/cycles",name:"Cycles",component:o.a},{path:"/cycle_info/:cycle",name:"CycleInfo",component:i.a}]})},129:function(t,e,n){"use strict";function a(t){n(130)}var r=n(61),s=n(131),c=n(21),o=a,i=c(r.a,s.a,!1,o,null,null);e.a=i.exports},130:function(t,e){},131:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],s={render:a,staticRenderFns:r};e.a=s},132:function(t,e,n){"use strict";function a(t){n(133)}var r=n(62),s=n(146),c=n(21),o=a,i=c(r.a,s.a,!1,o,null,null);e.a=i.exports},133:function(t,e){},146:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pt-3"},[n("div",{staticClass:"config row"},[n("div",{staticClass:"col-6 offset-3"},[n("h3",{staticClass:"text-center"},[t._v("Config")]),t._v(" "),n("b-form",[n("b-form-group",{attrs:{label:"Name","label-for":"config-name"}},[n("b-form-input",{attrs:{id:"config-name",type:"text",disabled:!0},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Fee %","label-for":"config-fee-percent"}},[n("b-form-input",{attrs:{id:"config-fee-percent",type:"number",disabled:!0},model:{value:t.user.fee_percent,callback:function(e){t.$set(t.user,"fee_percent",e)},expression:"user.fee_percent"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Minimum contribution","label-for":"config-minimum-contribution"}},[n("b-form-input",{attrs:{id:"config-minimum-contribution",type:"number",disabled:!0},model:{value:t.user.minimum_contribution,callback:function(e){t.$set(t.user,"minimum_contribution",e)},expression:"user.minimum_contribution"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Tezos RPC address","label-for":"config-tezos-rpc-address"}},[n("b-form-input",{attrs:{id:"config-tezos-rpc-address",type:"text",disabled:!0},model:{value:t.user.tezos_rpc_address,callback:function(e){t.$set(t.user,"tezos_rpc_address",e)},expression:"user.tezos_rpc_address"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Baker Tz address","label-for":"config-baker-tz-address"}},[n("b-form-input",{attrs:{id:"config-baker-tz-address",type:"text",disabled:!0},model:{value:t.user.baker_tz_address,callback:function(e){t.$set(t.user,"baker_tz_address",e)},expression:"user.baker_tz_address"}})],1),t._v(" "),n("b-form-group",{staticClass:"text-center"},[n("b-button",{attrs:{variant:"primary col-3"}},[t._v("\n            Save\n          ")])],1)],1)],1)])])},r=[],s={render:a,staticRenderFns:r};e.a=s},147:function(t,e,n){"use strict";var a=n(71),r=n(181),s=n(21),c=s(a.a,r.a,!1,null,null,null);e.a=c.exports},181:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pt-3"},[n("div",{staticClass:"row"},[t._v("\n    "+t._s(t.loadingText)+"\n    "),n("b-pagination",{attrs:{size:"md","total-rows":t.cyclesData.length,"per-page":10},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:t.cyclesData,"per-page":10,"current-page":t.currentPage},scopedSlots:t._u([{key:"cycle",fn:function(e){return[n("b-link",{attrs:{to:{name:"CycleInfo",params:{cycle:e.value}}}},[t._v(t._s(e.value))])]}},{key:"stakingBalance",fn:function(e){return[t._v("\n        "+t._s(t.tezosHelper.formatTezosNumericalData(e.value))+"\n      ")]}}])})],1)])},r=[],s={render:a,staticRenderFns:r};e.a=s},182:function(t,e,n){"use strict";var a=n(83),r=n(183),s=n(21),c=s(a.a,r.a,!1,null,null,null);e.a=c.exports},183:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pt-3"},[n("div",{staticClass:"row"},[n("h1",[t._v("Cycle "+t._s(t.currentCycle))])]),t._v(" "),n("div",{staticClass:"row"},[t._v("\n    "+t._s(t.loadingText)+"\n    "),""===t.loadingText?n("b-table",{attrs:{striped:"",hover:"",fields:t.contractsDataFields,items:t.contractsData},scopedSlots:t._u([{key:"contractData",fn:function(e){return[t._v("\n        "+t._s(t.tezosHelper.formatTezosNumericalData(e.item.contractData.balance))+"\n      ")]}}])}):t._e()],1)])},r=[],s={render:a,staticRenderFns:r};e.a=s},188:function(t,e){},217:function(t,e){},234:function(t,e){},279:function(t,e){},293:function(t,e){},294:function(t,e){},60:function(t,e,n){"use strict";e.a={name:"app",created:function(){this.$store.dispatch("user/loadFromConfigFile"),this.$store.dispatch("snapshot/loadFromConfigFile")}}},61:function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},62:function(t,e,n){"use strict";var a=n(134),r=n.n(a),s=n(28);e.a={computed:r()({},Object(s.b)({user:function(t){return t.user}}))}},71:function(t,e,n){"use strict";var a=n(45),r=n.n(a),s=n(46),c=n.n(s),o=n(28),i=n(79),u=n(82);e.a={data:function(){return{cyclesData:[],currentPage:1,mostRecentCompletedCycle:0,mostRecentSnapshottedCycle:0,loadingText:"Loading...",tezosRpc:null,tezosHelper:new u.a}},computed:Object(o.b)(["user","snapshot"]),methods:{getAllCyclesData:function(){var t=this;return c()(r.a.mark(function e(){var n,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.mostRecentCompletedCycle+6;case 1:if(!(n>0)){e.next=14;break}return a="",a=n>t.mostRecentCompletedCycle?"Pending":n===t.mostRecentCompletedCycle?"Currently In Progress":n<t.mostRecentCompletedCycle&&n>t.mostRecentCompletedCycle-5?"Pending Rewards":"Delivered Rewards",e.next=6,t.tezosRpc.setCycle(n);case 6:return t.tezosRpc.setSnapshotNumber(t.snapshot.data[t.tezosRpc.cycle]),e.next=9,t.tezosRpc.getCycleData();case 9:s=e.sent,t.cyclesData.push({cycle:n,status:a,stakingBalance:s.staking_balance});case 11:n--,e.next=1;break;case 14:case"end":return e.stop()}},e,t)}))()}},created:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.tezosRpc=new i.a(this.user.tezos_rpc_address,this.user.baker_tz_address),t.next=3,this.tezosRpc.getHeadCycle();case 3:return this.mostRecentCompletedCycle=t.sent,this.mostRecentSnapshottedCycle=this.mostRecentCompletedCycle+6,t.next=7,this.getAllCyclesData();case 7:this.loadingText="";case 8:case"end":return t.stop()}},t,this)}));return t}()}},79:function(t,e,n){"use strict";var a=n(45),r=n.n(a),s=n(46),c=n.n(s),o=n(80),i=n.n(o),u=n(81),l=n.n(u),p=function(){function t(e,n){i()(this,t),this.url=e,this.delegateHash=n}return l()(t,[{key:"setSnapshotNumber",value:function(t){this.snapshotNumber=t}},{key:"setCycle",value:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("head"!==e){t.next=5;break}return t.next=3,this.setCycleToHead();case 3:t.next=6;break;case 5:this.cycle=e;case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"getHeadCycle",value:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.getFirstBlockOfCycle("head");case 3:return t.t1=t.sent,t.abrupt("return",t.t0.getCycleFromFirstBlock.call(t.t0,t.t1));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"setCycleToHead",value:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getHeadCycle();case 2:this.cycle=t.sent;case 3:case"end":return t.stop()}},t,this)}));return t}()},{key:"sendRequest",value:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url+e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"getFirstBlockOfCycle",value:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.sendRequest("/chains/main/blocks/"+e+"/helpers/levels_in_current_cycle");case 2:return n=t.sent,t.abrupt("return",n.first);case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCycleData",value:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.snapshotBlockNumber();case 3:return t.t1=t.sent,t.t2="/chains/main/blocks/"+t.t1,t.t3=t.t2+"/context/delegates/",t.t4=this.delegateHash,t.t5=t.t3+t.t4,t.t6=t.t5+"/",t.abrupt("return",t.t0.sendRequest.call(t.t0,t.t6));case 10:case"end":return t.stop()}},t,this)}));return t}()},{key:"getSnapshotDelegateContractIds",value:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getCycleData();case 2:return e=t.sent,t.abrupt("return",e.delegated_contracts);case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"getContractsData",value:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){var n,a,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],a=0;case 2:if(!(a<e.length)){t.next=14;break}return s=e[a],t.t0=n,t.t1=s,t.next=8,this.getContractData(s);case 8:t.t2=t.sent,t.t3={contractId:t.t1,contractData:t.t2},t.t0.push.call(t.t0,t.t3);case 11:a++,t.next=2;break;case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}},t,this)}));return t}()},{key:"getContractData",value:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.snapshotBlockNumber();case 3:return t.t1=t.sent,t.t2="/chains/main/blocks/"+t.t1,t.t3=t.t2+"/context/contracts/",t.t4=e,t.t5=t.t3+t.t4,t.abrupt("return",t.t0.sendRequest.call(t.t0,t.t5));case 9:case"end":return t.stop()}},t,this)}));return t}()},{key:"getDelegationCycle",value:function(){return parseFloat(this.cycle-7)}},{key:"snapshotBlockNumber",value:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){var e,n,a,s,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=parseFloat(this.snapshotNumber),n=4096*parseFloat(this.getDelegationCycle()),a=n/256,s=a+e+1,c=256*parseFloat(s),t.abrupt("return",c);case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCycleFromFirstBlock",value:function(t){return parseFloat(Math.floor(t/4096)-1)}}]),t}();e.a=p},82:function(t,e,n){"use strict";var a=n(80),r=n.n(a),s=n(81),c=n.n(s),o=function(){function t(){r()(this,t)}return c()(t,[{key:"formatTezosNumericalData",value:function(t){var e=parseFloat(parseFloat(t)/1e6);return e>1e6?e/1e6+"Mꜩ":e>1e3?(e/1e3).toFixed(2)+" Kꜩ":e+" ꜩ"}}]),t}();e.a=o},83:function(t,e,n){"use strict";var a=n(45),r=n.n(a),s=n(46),c=n.n(s),o=n(28),i=n(79),u=n(82);e.a={data:function(){return{currentCycle:this.$route.params.cycle,contractsDataFields:[{key:"contractId",label:"Delegator"},{key:"contractData",label:"Delegator Balance"}],contractsData:[],tezosHelper:new u.a,loadingText:"Loading..."}},computed:Object(o.b)(["user","snapshot"]),methods:{compareBalance:function(t,e){var n=parseFloat(t.contractData.balance),a=parseFloat(e.contractData.balance),r=0;return n<a?r=1:n>a&&(r=-1),r}},created:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new i.a(this.user.tezos_rpc_address,this.user.baker_tz_address,this.$route.params.cycle),t.next=3,e.setCycle(this.$route.params.cycle);case 3:return e.setSnapshotNumber(this.snapshot.data[e.cycle]),this.currentCycle=e.cycle,t.next=7,e.getSnapshotDelegateContractIds();case 7:return n=t.sent,t.next=10,e.getContractsData(n);case 10:this.contractsData=t.sent,this.contractsData.sort(this.compareBalance),this.loadingText="";case 13:case"end":return t.stop()}},t,this)}));return t}()}}},[114]);
//# sourceMappingURL=app.0c435af5b367ce297a06.js.map