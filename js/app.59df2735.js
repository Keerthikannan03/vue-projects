(function(){"use strict";var e={4604:function(e,t,a){var l=a(5130),s=a(6768);function o(e,t,a,l,o,r){const n=(0,s.g2)("HomepageCom");return(0,s.uX)(),(0,s.Wv)(n)}var r=a(4232);const n={class:"p-3"},i={class:"row justify-center"},c={class:"col-md-12"},u={class:"row"},d={class:"col-md-12"},m={key:0,class:"my-2",style:{border:"5px solid skyblue",padding:"12px"}},h={key:1,class:"text-danger",type:"error"},f={class:"m-4"},p={key:0},v=["innerHTML"],g={class:"d-flex justify-center align-center h-100"};function b(e,t,a,o,b,k){const y=(0,s.g2)("v-icon"),L=(0,s.g2)("v-text-field"),w=(0,s.g2)("v-select"),S=(0,s.g2)("v-btn"),_=(0,s.g2)("v-list-item"),F=(0,s.g2)("v-progress-circular"),C=(0,s.g2)("v-form"),V=(0,s.g2)("v-card-text"),x=(0,s.g2)("v-card"),E=(0,s.g2)("v-dialog"),O=(0,s.g2)("v-navigation-drawer"),N=(0,s.g2)("v-main"),j=(0,s.g2)("v-layout");return(0,s.uX)(),(0,s.Wv)(j,null,{default:(0,s.k6)((()=>[(0,s.bF)(O,{modelValue:b.drawer,"onUpdate:modelValue":t[9]||(t[9]=e=>b.drawer=e),location:"right",temporary:"",width:500,persistent:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",null,[(0,s.bF)(C,{modelValue:b.validForm,"onUpdate:modelValue":t[4]||(t[4]=e=>b.validForm=e),ref:"formref",onSubmit:(0,l.D$)(k.submitForm,["prevent"])},{default:(0,s.k6)((()=>[(0,s.Lk)("div",{class:"py-3 d-flex align-center",onClick:t[0]||(t[0]=e=>b.drawer=!1),style:{position:"sticky",top:"0",background:"cadetblue",color:"white","z-index":"999",cursor:"pointer"}},[(0,s.Lk)("span",null,[(0,s.bF)(y,{size:"24"},{default:(0,s.k6)((()=>t[11]||(t[11]=[(0,s.eW)("mdi-menu-left")]))),_:1})]),t[12]||(t[12]=(0,s.Lk)("span",{class:"ms-2"},"Saving Segment",-1))]),(0,s.Lk)("div",n,[(0,s.Lk)("div",i,[(0,s.Lk)("div",c,[t[13]||(t[13]=(0,s.Lk)("p",null,"Enter the Name of the segment",-1)),(0,s.bF)(L,{modelValue:b.segmentName,"onUpdate:modelValue":t[1]||(t[1]=e=>b.segmentName=e),label:"Name of the Segment",required:"",variant:"outlined"},null,8,["modelValue"])])]),t[15]||(t[15]=(0,s.Lk)("div",null,[(0,s.Lk)("p",null,"To Save your segment, you need to add the schemas to build the query")],-1)),(0,s.Lk)("div",u,[(0,s.Lk)("div",d,[k.filteredSelectedSchemas.length>0?((0,s.uX)(),(0,s.CE)("div",m,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(k.filteredSelectedSchemas,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"d-flex",key:a},[(0,s.bF)(w,{modelValue:e.label,"onUpdate:modelValue":t=>e.label=t,items:[],label:e.label,"item-value":"value","item-title":"label",required:"",variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","label"]),(0,s.bF)(S,{class:"ms-4",onClick:t=>k.unselectBtn(e,a),color:"danger"},{default:(0,s.k6)((()=>t[14]||(t[14]=[(0,s.Lk)("span",{class:"text-light"},"Unselect",-1)]))),_:2},1032,["onClick"])])))),128))])):(0,s.Q3)("",!0),(0,s.bF)(w,{modelValue:b.schema,"onUpdate:modelValue":t[2]||(t[2]=e=>b.schema=e),items:b.schemaList,label:"Add Schema to segment",required:"",variant:"outlined","item-value":"value","item-title":"label"},{item:(0,s.k6)((({props:e,item:t})=>[(0,s.bF)(_,(0,s.v6)({class:"f-size-14 fw-500"},e,{subtitle:t.label}),null,16,["subtitle"])])),_:1},8,["modelValue","items"]),b.schemaError?((0,s.uX)(),(0,s.CE)("p",h,"Please select a schema and add schema")):(0,s.Q3)("",!0),(0,s.Lk)("a",{href:"#",onClick:t[3]||(t[3]=(0,l.D$)((e=>k.addnewSchema()),["prevent"]))},"+ Add New Schema")])])]),(0,s.Lk)("div",f,[(0,s.bF)(S,{class:"mr-4",type:"submit",color:"success",width:"200px"},{default:(0,s.k6)((()=>[b.proLoader?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",p,"Save Segment")),b.proLoader?((0,s.uX)(),(0,s.Wv)(F,{key:1,indeterminate:""})):(0,s.Q3)("",!0)])),_:1})])])),_:1},8,["modelValue","onSubmit"])]),(0,s.bF)(E,{modelValue:b.showmsg,"onUpdate:modelValue":t[6]||(t[6]=e=>b.showmsg=e),"max-width":"600",persistent:""},{default:(0,s.k6)((()=>[(0,s.bF)(x,null,{default:(0,s.k6)((()=>[(0,s.bF)(V,{class:"text-center"},{default:(0,s.k6)((()=>[t[16]||(t[16]=(0,s.Lk)("p",null,"Schema Details Sended Successfully!!!",-1)),(0,s.Lk)("p",{innerHTML:b.getdataschema},null,8,v)])),_:1}),(0,s.bF)(S,{onClick:t[5]||(t[5]=e=>k.doneMsg())},{default:(0,s.k6)((()=>t[17]||(t[17]=[(0,s.eW)("Done")]))),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.bF)(E,{modelValue:b.showError,"onUpdate:modelValue":t[8]||(t[8]=e=>b.showError=e),"max-width":"600",persistent:""},{default:(0,s.k6)((()=>[(0,s.bF)(x,null,{default:(0,s.k6)((()=>[(0,s.bF)(V,{class:"text-center"},{default:(0,s.k6)((()=>[t[18]||(t[18]=(0,s.Lk)("h4",null,"Oops! 404 Not Found!",-1)),(0,s.Lk)("p",null,(0,r.v_)(b.geterrormsg),1)])),_:1}),(0,s.bF)(S,{onClick:t[7]||(t[7]=e=>k.doneMsg())},{default:(0,s.k6)((()=>t[19]||(t[19]=[(0,s.eW)("Done")]))),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,s.bF)(N,{style:{height:"250px"}},{default:(0,s.k6)((()=>[(0,s.Lk)("div",g,[(0,s.bF)(S,{color:"primary",onClick:t[10]||(t[10]=(0,l.D$)((e=>b.drawer=!b.drawer),["stop"]))},{default:(0,s.k6)((()=>t[20]||(t[20]=[(0,s.eW)(" Save Segment ")]))),_:1})])])),_:1})])),_:1})}a(4114);var k=a(4373),y={name:"HomepageCom",data(){return{drawer:null,proLoader:!1,showmsg:!1,showError:!1,validForm:!1,segmentName:"",addschemas:null,schema:null,nameRules:[e=>!!e||"Segment name is required",e=>e&&e.length<=10||"Name must be 10 characters or less"],schemaRules:[e=>!!e||"Please select a schema"],schemaList:[{label:"First Name",value:"first_name"},{label:"Last Name",value:"last_name"},{label:"Gender",value:"gender"},{label:"Age",value:"age"},{label:"Account Name",value:"account_name"},{label:"City",value:"city"},{label:"State",value:"state"}],selectedSchema:[],schemaError:!1,getdataschema:"",geterrormsg:""}},methods:{addnewSchema(){if(this.schemaError=!1,!this.schema)return this.schemaError=!0,void(this.proLoader=!1);const e=this.schemaList.find((e=>e.value===this.schema));e&&(console.log(e,"schemaschema",this.schema),this.selectedSchema.push({value:e.value,label:e.label}),this.schemaList=this.schemaList.filter((t=>t.value!==e.value)),this.schema=null)},unselectBtn(e,t){const[a]=this.selectedSchema.splice(t,1);console.log(a,"dasdasdasdas"),this.schemaList.push({value:a.value,label:a.label})},async submitForm(){if(this.schemaError=!1,this.proLoader=!0,!this.selectedSchema.length>0)return this.schemaError=!0,void(this.proLoader=!1);let e={segment_name:"last_10_days_blog_visits",schema:[]};console.log(this.schemaList,"schemaListschemaListschemaList...0"),this.selectedSchema.forEach((t=>{console.log(t.value,"asdasdasdasd");let a={};a[t.value]=t.label,e.schema.push(a)})),console.log(e,"getObjDatagetObjData...1");try{const t="https://webhook.site/17263b62-c7da-4e48-9b72-9d7a0ca23098",a=await k.A.post(t,e,{headers:{"Content-Type":"application/json"}});console.log(a,"responseresponse..."),this.getdataschema=a.data,setTimeout((()=>{this.proLoader=!1,this.showmsg=!0}),3e3)}catch(t){console.log(t,"errorerror"),this.geterrormsg=t.response.data.error.message?t.response.data.error.message:t.message,setTimeout((()=>{this.proLoader=!1,this.showError=!0}),3e3)}},doneMsg(){this.showmsg=!1,this.showError=!1,setTimeout((()=>{location.reload()}),500)}},computed:{filteredSchemaList(){return this.schemaList.filter((e=>!this.selectedSchema.some((t=>t.value===e.value))))},filteredSelectedSchemas(){if(!this.segmentName)return this.selectedSchema;const e=this.segmentName.toLowerCase();return this.selectedSchema.filter((t=>t.label.toLowerCase().includes(e)))}}},L=a(1241);const w=(0,L.A)(y,[["render",b]]);var S=w,_={name:"App",components:{HomepageCom:S}};const F=(0,L.A)(_,[["render",o]]);var C=F,V=(a(5524),a(7768)),x=a(8221),E=a(1920),O=a(5741),N=(0,V.$N)({icons:{defaultSet:"mdi",aliases:x.z,sets:{mdi:x.r}},theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}},components:E,directives:O});a(5707);(0,l.Ef)(C).use(N).mount("#app")}},t={};function a(l){var s=t[l];if(void 0!==s)return s.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,s,o){if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],s=e[u][1],o=e[u][2];for(var n=!0,i=0;i<l.length;i++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[i])}))?l.splice(i--,1):(n=!1,o<r&&(r=o));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var s,o,r=l[0],n=l[1],i=l[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(i)var u=i(a)}for(t&&t(l);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},l=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(4604)}));l=a.O(l)})();
//# sourceMappingURL=app.59df2735.js.map