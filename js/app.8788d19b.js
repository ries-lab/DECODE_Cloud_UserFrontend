(function(){var e={4672:function(e,t,a){"use strict";a(560);var n=a(9242),o=a(1076),l=a(3396);const i={id:"app"},s={class:"main container"};function r(e,t,a,n,o,r){const u=(0,l.up)("NavBar"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(u),(0,l._)("div",s,[(0,l.Wm)(c)])])}const u=e=>((0,l.dD)("data-v-b2c6df24"),e=e(),(0,l.Cn)(),e),c={class:"navbar navbar-expand-md navbar-dark bg-dark"},d={class:"container"},p=u((()=>(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1))),b={class:"collapse navbar-collapse",id:"navbarCollapse"},m={key:0,class:"navbar-nav me-auto mb-2 mb-md-0"},h={class:"nav-item"},g={class:"nav-item"},f={class:"nav-item"},_={class:"nav-item"},w={class:"nav-item"},v={key:1,class:"navbar-nav me-auto mb-2 mb-md-0"},y={class:"nav-item"},k={class:"nav-item"},j={class:"nav-item"};function D(e,t,a,n,o,i){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("nav",c,[(0,l._)("div",d,[(0,l.Wm)(s,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("DECODE OpenCloud")])),_:1}),p,(0,l._)("div",b,[e.isLoggedIn?((0,l.wg)(),(0,l.iD)("ul",m,[(0,l._)("li",h,[(0,l.Wm)(s,{class:"nav-link",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("li",g,[(0,l.Wm)(s,{class:"nav-link",to:"/files"},{default:(0,l.w5)((()=>[(0,l.Uk)("Files")])),_:1})]),(0,l._)("li",f,[(0,l.Wm)(s,{class:"nav-link",to:"/jobs"},{default:(0,l.w5)((()=>[(0,l.Uk)("Jobs")])),_:1})]),(0,l._)("li",_,[(0,l.Wm)(s,{class:"nav-link",to:"/profile"},{default:(0,l.w5)((()=>[(0,l.Uk)("Profile")])),_:1})]),(0,l._)("li",w,[(0,l._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(...t)=>e.logout&&e.logout(...t))},"Log Out")])])):((0,l.wg)(),(0,l.iD)("ul",v,[(0,l._)("li",y,[(0,l.Wm)(s,{class:"nav-link",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("li",k,[(0,l.Wm)(s,{class:"nav-link",to:"/register"},{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),(0,l._)("li",j,[(0,l.Wm)(s,{class:"nav-link",to:"/login"},{default:(0,l.w5)((()=>[(0,l.Uk)("Log In")])),_:1})])]))])])])])}var U=(0,l.aZ)({name:"NavBar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{async logout(){await this.$store.dispatch("logOut"),this.$router.push("/login")}}}),F=a(89);const C=(0,F.Z)(U,[["render",D],["__scopeId","data-v-b2c6df24"]]);var E=C,J=a(65),I={setup(){const e=(0,J.oR)();(0,l.bv)((()=>{e.dispatch("viewMe")}))},components:{NavBar:E}};const O=(0,F.Z)(I,[["render",r]]);var P=O,Z=a(7429),V=a(4517),x=a(2483);const A={key:0,id:"logout"},z={id:"logout"},S={id:"logout"},M={key:1},N=(0,l._)("span",null," or ",-1);function T(e,t,a,n,o,i){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",null,[e.isLoggedIn?((0,l.wg)(),(0,l.iD)("div",A,[(0,l._)("p",z,[(0,l.Uk)("Click "),(0,l.Wm)(s,{to:"/files"},{default:(0,l.w5)((()=>[(0,l.Uk)("here")])),_:1}),(0,l.Uk)(" to view your files.")]),(0,l._)("p",S,[(0,l.Uk)("Click "),(0,l.Wm)(s,{to:"/jobs"},{default:(0,l.w5)((()=>[(0,l.Uk)("here")])),_:1}),(0,l.Uk)(" to view your jobs.")])])):((0,l.wg)(),(0,l.iD)("p",M,[(0,l._)("span",null,[(0,l.Wm)(s,{to:"/register"},{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),N,(0,l._)("span",null,[(0,l.Wm)(s,{to:"/login"},{default:(0,l.w5)((()=>[(0,l.Uk)("Log In")])),_:1})])]))])}var $=(0,l.aZ)({name:"HomeView",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}});const W=(0,F.Z)($,[["render",T]]);var L=W;const R=(0,l._)("p",null,"Please contact the developers if you would like to use DECODE OpenCloud",-1),H=[R];function B(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("div",null,H)}var q=(0,l.aZ)({name:"Register"});const Y=(0,F.Z)(q,[["render",B]]);var K=Y;const G={class:"mb-3"},Q=(0,l._)("label",{for:"username",class:"form-label"},"Email address:",-1),X={class:"mb-3"},ee=(0,l._)("label",{for:"password",class:"form-label"},"Password:",-1),te=(0,l._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function ae(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)("section",null,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,l._)("div",G,[Q,(0,l.wy)((0,l._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t),class:"form-control"},null,512),[[n.nr,e.form.username]])]),(0,l._)("div",X,[ee,(0,l.wy)((0,l._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),class:"form-control"},null,512),[[n.nr,e.form.password]])]),te],32)])}var ne=(0,l.aZ)({name:"Login",data(){return{form:{username:"",password:""}}},methods:{...(0,J.nv)(["logIn"]),async submit(){await this.logIn({username:this.form.username,password:this.form.password}),this.$router.push("/home")}}});const oe=(0,F.Z)(ne,[["render",ae]]);var le=oe,ie=a(7139);const se=(0,l._)("h1",null,"Files",-1),re=["disabled"],ue={key:0},ce=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Type"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Size")])],-1),de=["onDblclick"],pe=["value","onChange"],be=["onClick"],me=["onClick"];function he(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[se,(0,l._)("div",null,[(0,l._)("header",null,[(0,l._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goUp&&e.goUp(...t)),disabled:""===e.path},"Back",8,re),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.path=t),placeholder:"Path"},null,512),[[n.nr,e.path]]),(0,l._)("button",{class:"btn-flat",onClick:t[2]||(t[2]=(...t)=>e.createFolder&&e.createFolder(...t))},"Create Folder"),(0,l._)("button",{onClick:t[3]||(t[3]=(...t)=>e.uploadSingleFile&&e.uploadSingleFile(...t))},"Upload File"),(0,l._)("button",{onClick:t[4]||(t[4]=(...t)=>e.uploadDirectory&&e.uploadDirectory(...t))},"Upload Directory"),e.uploadingFile?((0,l.wg)(),(0,l.iD)("p",ue,"Uploading: "+(0,ie.zw)(e.uploadingFile),1)):(0,l.kq)("",!0),(0,l._)("input",{type:"file",id:"fileInput",onChange:t[5]||(t[5]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32),(0,l._)("input",{type:"file",id:"directoryInput",webkitdirectory:"",multiple:"",onChange:t[6]||(t[6]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32)]),(0,l._)("main",null,[(0,l._)("table",null,[ce,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.files,((t,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:a,onDblclick:n=>e.openAction(a,t)},[(0,l._)("td",null,(0,ie.zw)(t.type),1),(0,l._)("td",null,[(0,l._)("input",{type:"text",value:t.path.replace(this.path,""),onChange:a=>e.renameItem(t.path,a.target.value)},null,40,pe)]),(0,l._)("td",null,(0,ie.zw)("directory"===t.type?"-":t.size),1),(0,l._)("td",null,[(0,l._)("button",{onClick:a=>e.deleteItem(t.path)},"Delete",8,be)]),(0,l._)("td",null,[(0,l._)("button",{onClick:a=>e.downloadItem(t)},"Download",8,me)])],40,de)))),128))])])])])],64)}a(8858),a(1318),a(3228);var ge=a(4730),fe=a.n(ge),_e={async getFiles(e){return e=e||"/",await o.Z.get(`/files/${e}?show_dirs=True&recursive=False`)},async createFolder(e){return await o.Z.post(`/files/${e}/`)},async uploadFile(e,t){let a=await o.Z.post(`/files/${e}url`),n=new FormData;"key"in a.data["data"]&&n.append("key",a.data["data"]["key"]);for(let o in a.data["data"])"key"!==o&&n.append(o,a.data["data"][o]);for(let o of t.entries())n.append(o[0],o[1]);return await o.Z.post(a.data.url,n,{headers:a.data.headers||{}})},async deleteItem(e){return await o.Z.delete(`/files/${e}`)},async renameItem(e,t){return await o.Z.put(`/files/${e}`,{path:t})},async downloadFile(e){let t=await o.Z.get(`/files/${e}/url`);return await o.Z.get(t.data.url,{headers:t.data.headers||{}})},async downloadItem(e){const t=e.path;if("directory"===e.type){let a=new(fe()),n=await o.Z.get(`/files/${t}`,{params:{show_dirs:!1,recursive:!0}});for(let t of n.data){let n=await this.downloadFile(t.path);a.file(t.path.replace(e.path,""),n.data)}let l=await a.generateAsync({type:"blob"});const i=window.URL.createObjectURL(l),s=document.createElement("a");s.href=i;let r=t.split("/");s.setAttribute("download",r[r.length-2]+".zip"),document.body.appendChild(s),s.click()}else{let e=await this.downloadFile(t);const a=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",t.split("/").pop()),document.body.appendChild(n),n.click()}}},we=(0,l.aZ)({name:"FilesView",data(){return{path:"",files:[],uploadingFile:null}},methods:{openAction:function(e,t){"directory"===t.type&&(this.path=t.path,this.fetchFiles())},fetchFiles(){_e.getFiles(this.path).then((e=>{this.files=e.data})).catch((e=>{console.error("Error fetching files:",e)}))},goUp(){let e=this.path.trimEnd("/").split("/").filter(Boolean);e.pop(),this.path=e.join("/"),""!=this.path&&(this.path=this.path+"/"),this.fetchFiles()},createFolder(){_e.createFolder(this.path+"new").then((()=>{this.fetchFiles()}))},uploadSingleFile(){document.getElementById("fileInput").click()},uploadDirectory(){document.getElementById("directoryInput").click()},handleUpload(e){const t=e.target.files;for(let a=0;a<t.length;a++){let e=t[a],n=e.webkitRelativePath||e.name,o=n.split("/");o.pop();let l=o.join("/")+"/";this.uploadFile(e,this.path+l)}},uploadFile(e,t){this.uploadingFile=e.name;let a=new FormData;return a.append("file",e),_e.uploadFile(t,a).then((()=>{this.fetchFiles(),this.uploadingFile=null})).catch((e=>{console.error("Error uploading file:",e),this.uploadingFile=null}))},downloadItem(e){_e.downloadItem(e)},deleteItem(e){_e.deleteItem(e).then((()=>{this.fetchFiles()}))},renameItem(e,t){let a=this.path.trimEnd("/")+"/"+t;_e.renameItem(e,a).then((()=>{this.fetchFiles()}))}},mounted(){this.fetchFiles()}});const ve=(0,F.Z)(we,[["render",he]]);var ye=ve;const ke=(0,l._)("h1",null,"Your Profile",-1),je=(0,l._)("hr",null,null,-1),De=(0,l._)("br",null,null,-1),Ue=(0,l._)("strong",null,"Email address:",-1),Fe=(0,l._)("strong",null,"Groups:",-1);function Ce(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)("section",null,[ke,je,De,(0,l._)("div",null,[(0,l._)("p",null,[Ue,(0,l.Uk)(),(0,l._)("span",null,(0,ie.zw)(e.user.email),1)]),(0,l._)("p",null,[Fe,(0,l.Uk)(),(0,l._)("span",null,(0,ie.zw)(e.user.groups),1)])])])}var Ee=(0,l.aZ)({name:"Profile",created:function(){return this.$store.dispatch("viewMe")},computed:{...(0,J.Se)({user:"stateUser"})},methods:{}});const Je=(0,F.Z)(Ee,[["render",Ce]]);var Ie=Je;const Oe={class:"job-list-section"},Pe=(0,l._)("h1",null,"Jobs",-1),Ze=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Job Name"),(0,l._)("th",null,"Status"),(0,l._)("th",null,"Creation Time"),(0,l._)("th",null,"Application"),(0,l._)("th",null,"Actions")])],-1),Ve=["onClick"],xe=["onClick"],Ae=["disabled"],ze=["disabled"],Se={key:0,class:"job-details-section"},Me=(0,l._)("h2",null,"Job Details",-1);function Ne(e,t,a,n,o,i){const s=(0,l.up)("job-details-tree");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Oe,[Pe,(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>i.goToJobCreationForm&&i.goToJobCreationForm(...e)),style:{"margin-bottom":"10px"}},"+New Job"),(0,l._)("table",null,[Ze,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.jobs,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,ie.zw)(e.job_name),1),(0,l._)("td",null,(0,ie.zw)(e.status),1),(0,l._)("td",null,(0,ie.zw)(e.date_created),1),(0,l._)("td",null,(0,ie.zw)(e.application.application)+" > "+(0,ie.zw)(e.application.version)+" > "+(0,ie.zw)(e.application.entrypoint),1),(0,l._)("td",null,[(0,l._)("button",{onClick:t=>i.getJobDetails(e.id)},"Details",8,Ve),(0,l._)("button",{onClick:t=>i.deleteJob(e.id)},"Delete",8,xe)])])))),128))])]),(0,l._)("button",{onClick:t[1]||(t[1]=e=>i.changePage(o.currentPage-1)),disabled:o.currentPage<=1},"Previous",8,Ae),(0,l._)("button",{onClick:t[2]||(t[2]=e=>i.changePage(o.currentPage+1)),disabled:!o.canGoToNextPage},"Next",8,ze)]),o.selectedJob?((0,l.wg)(),(0,l.iD)("div",Se,[Me,(0,l.Wm)(s,{data:o.selectedJob},null,8,["data"])])):(0,l.kq)("",!0)])}var Te={async createJob(e){return await o.Z.post("/jobs",e)},async getJobs(e,t){return await o.Z.get(`/jobs?offset=${e}&limit=${t}`)},async getJobDetails(e){return await o.Z.get(`/jobs/${e}`)},async deleteJob(e){return await o.Z.delete(`/jobs/${e}`)},async getApplications(){return await o.Z.get("/jobs/applications")}};const $e={key:0,class:"tree-node"},We=["onClick"],Le={class:"toggle-icon"},Re={key:1,class:"tree-item-row"},He={class:"tree-item-value"},Be={key:2,class:"tree-item-content"};function qe(e,t,a,n,o,i){const s=(0,l.up)("job-details-tree",!0);return i.isObject(a.data)?((0,l.wg)(),(0,l.iD)("div",$e,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"tree-item"},[i.isObject(e)?((0,l.wg)(),(0,l.iD)("div",{key:0,onClick:e=>i.toggle(t),class:"tree-item-label"},[(0,l._)("span",Le,(0,ie.zw)(i.isExpanded(t)?"-":"+"),1),(0,l._)("strong",null,(0,ie.zw)(t)+":",1)],8,We)):((0,l.wg)(),(0,l.iD)("div",Re,[(0,l._)("strong",null,(0,ie.zw)(t)+":",1),(0,l._)("div",He,(0,ie.zw)(e),1)])),i.isObject(e)&&i.isExpanded(t)?((0,l.wg)(),(0,l.iD)("div",Be,[(0,l.Wm)(s,{data:e},null,8,["data"])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0)}var Ye={name:"JobDetailsTree",props:{data:[Object,Array,String,Number,Boolean]},data(){return{expandedNodes:{}}},methods:{isObject(e){return e&&"object"===typeof e},toggle(e){this.expandedNodes[e]=!this.expandedNodes[e]},isExpanded(e){return!!this.expandedNodes[e]}}};const Ke=(0,F.Z)(Ye,[["render",qe]]);var Ge=Ke,Qe={data(){return{jobs:[],selectedJob:null,currentPage:1,limit:20,canGoToNextPage:!0}},methods:{goToJobCreationForm(){this.$router.push("/jobs/new")},async fetchJobs(){try{const e=(this.currentPage-1)*this.limit,t=await Te.getJobs(e,this.limit);this.jobs=t.data,this.canGoToNextPage=this.jobs.length===this.limit}catch(e){console.error(e)}},async getJobDetails(e){try{const t=await Te.getJobDetails(e);this.selectedJob=t.data}catch(t){console.error(t)}},async deleteJob(e){try{await Te.deleteJob(e),this.fetchJobs()}catch(t){console.error(t)}},changePage(e){e<1||(this.currentPage=e,this.fetchJobs())}},components:{JobDetailsTree:Ge},mounted(){this.fetchJobs()}};const Xe=(0,F.Z)(Qe,[["render",Ne]]);var et=Xe;const tt=e=>((0,l.dD)("data-v-0a362ade"),e=e(),(0,l.Cn)(),e),at={class:"form-group"},nt=tt((()=>(0,l._)("h2",null,"Submit New Job",-1))),ot={key:0,class:"error-message"},lt=tt((()=>(0,l._)("label",{class:"form-label",for:"jobName"},"Job Name",-1))),it=tt((()=>(0,l._)("label",{class:"form-label"},"Application",-1))),st={class:"sub-group"},rt=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Application",-1))),ut=["value"],ct=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Version",-1))),dt=["value"],pt=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Entrypoint",-1))),bt=["value"],mt={class:"form-group"},ht=tt((()=>(0,l._)("label",{class:"form-label"},"Input",-1))),gt={class:"sub-group"},ft=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Configuration",-1))),_t=["value"],wt={class:"sub-group",style:{display:"flex","align-items":"center"}},vt=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Data",-1))),yt={class:"sub-group",style:{display:"flex","align-items":"center"}},kt=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Artifacts",-1))),jt={class:"sub-group",style:{display:"flex","align-items":"center"}},Dt=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Environment Variables",-1))),Ut={class:"form-subsublabel"},Ft=["placeholder","onUpdate:modelValue"],Ct={class:"form-group"},Et=tt((()=>(0,l._)("label",{class:"form-label"},"Runtime",-1))),Jt={class:"sub-group"},It=tt((()=>(0,l._)("label",{class:"form-sublabel"},"Hardware Specs",-1))),Ot={class:"sub-group"},Pt=tt((()=>(0,l._)("label",{class:"form-sublabel",for:"environment"},"Environment",-1))),Zt=tt((()=>(0,l._)("option",{disabled:"",value:""},"Select environment",-1))),Vt=tt((()=>(0,l._)("option",{value:"cloud"},"cloud",-1))),xt=tt((()=>(0,l._)("option",{value:"local"},"local",-1))),At=tt((()=>(0,l._)("option",{value:"null"},"any",-1))),zt=[Zt,Vt,xt,At],St={class:"sub-group"},Mt=tt((()=>(0,l._)("label",{class:"form-sublabel",for:"priority"},"Priority",-1))),Nt=tt((()=>(0,l._)("button",{type:"submit"},"Submit Job",-1)));function Tt(e,t,a,o,i,s){const r=(0,l.up)("b-form-select");return(0,l.wg)(),(0,l.iD)("form",{onSubmit:t[16]||(t[16]=(0,n.iM)(((...e)=>s.submitJob&&s.submitJob(...e)),["prevent"]))},[(0,l._)("div",at,[nt,i.errorMessage?((0,l.wg)(),(0,l.iD)("div",ot,(0,ie.zw)(i.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",null,[lt,(0,l.wy)((0,l._)("input",{type:"text",id:"jobName","onUpdate:modelValue":t[0]||(t[0]=e=>i.job.job_name=e)},null,512),[[n.nr,i.job.job_name]])]),(0,l._)("div",null,[it,(0,l._)("div",st,[rt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.job.application.application=e),onChange:t[2]||(t[2]=(...e)=>s.fetchVersions&&s.fetchVersions(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.applications,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,ie.zw)(t),9,ut)))),128))],544),[[n.bM,i.job.application.application]]),ct,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.job.application.version=e),onChange:t[4]||(t[4]=(...e)=>s.fetchEntrypoints&&s.fetchEntrypoints(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.versions,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,ie.zw)(t),9,dt)))),128))],544),[[n.bM,i.job.application.version]]),pt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.job.application.entrypoint=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.entrypoints,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,ie.zw)(t),9,bt)))),128))],512),[[n.bM,i.job.application.entrypoint]])])])]),(0,l._)("div",mt,[ht,(0,l._)("div",gt,[ft,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.job.attributes.files_down.config_id=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.configFiles,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:e},(0,ie.zw)(e),9,_t)))),128))],512),[[n.bM,i.job.attributes.files_down.config_id]])]),(0,l._)("div",wt,[vt,(0,l.Wm)(r,{modelValue:i.job.attributes.files_down.data_ids,"onUpdate:modelValue":t[7]||(t[7]=e=>i.job.attributes.files_down.data_ids=e),options:i.dataFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,l._)("div",yt,[kt,(0,l.Wm)(r,{modelValue:i.job.attributes.files_down.artifact_ids,"onUpdate:modelValue":t[8]||(t[8]=e=>i.job.attributes.files_down.artifact_ids=e),options:i.artifactFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,l._)("div",jt,[Dt,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.environs,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[(0,l._)("label",Ut,(0,ie.zw)(e),1),(0,l.wy)((0,l._)("input",{type:"text",placeholder:e,"onUpdate:modelValue":t=>i.job.attributes.env_vars[e]=t},null,8,Ft),[[n.nr,i.job.attributes.env_vars[e]]])])))),128))])]),(0,l._)("div",Ct,[Et,(0,l._)("div",Jt,[It,(0,l.wy)((0,l._)("input",{type:"number",placeholder:"CPU Cores","onUpdate:modelValue":t[9]||(t[9]=e=>i.job.hardware.cpu_cores=e)},null,512),[[n.nr,i.job.hardware.cpu_cores,void 0,{number:!0}]]),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"Memory","onUpdate:modelValue":t[10]||(t[10]=e=>i.job.hardware.memory=e)},null,512),[[n.nr,i.job.hardware.memory,void 0,{number:!0}]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"GPU Model","onUpdate:modelValue":t[11]||(t[11]=e=>i.job.hardware.gpu_model=e)},null,512),[[n.nr,i.job.hardware.gpu_model]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"GPU Architecture","onUpdate:modelValue":t[12]||(t[12]=e=>i.job.hardware.gpu_archi=e)},null,512),[[n.nr,i.job.hardware.gpu_archi]]),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"GPU Memory","onUpdate:modelValue":t[13]||(t[13]=e=>i.job.hardware.gpu_mem=e)},null,512),[[n.nr,i.job.hardware.gpu_mem,void 0,{number:!0}]])]),(0,l._)("div",Ot,[Pt,(0,l.wy)((0,l._)("select",{id:"environment","onUpdate:modelValue":t[14]||(t[14]=e=>i.job.environment=e)},zt,512),[[n.bM,i.job.environment]])]),(0,l._)("div",St,[Mt,(0,l.wy)((0,l._)("input",{type:"number",id:"priority","onUpdate:modelValue":t[15]||(t[15]=e=>i.job.priority=e)},null,512),[[n.nr,i.job.priority,void 0,{number:!0}]])])]),Nt],32)}var $t=a(2026),Wt={data(){return{job:{job_name:null,environment:null,priority:null,application:{application:null,version:null,entrypoint:null},attributes:{files_down:{config_id:null,data_ids:[],artifact_ids:[]},env_vars:{}},hardware:{cpu_cores:null,memory:null,gpu_model:null,gpu_archi:null,gpu_mem:null}},applications:{},versions:{},entrypoints:{},environs:{},configFiles:[],dataFiles:[],artifactFiles:[],errorMessage:null}},components:{BFormSelect:$t.KB},methods:{async fetchApplications(){const e=await Te.getApplications();this.applications=e.data},fetchVersions(){""!=this.job.application.application&&(this.versions=this.applications[this.job.application.application])},fetchEntrypoints(){""!=this.job.application.version&&(this.entrypoints=this.versions[this.job.application.version])},fetchEnvirons(){""!=this.job.application.entrypoint&&(this.environs=this.entrypoints[this.job.application.entrypoint]["app"]["env"])},async fetchInputFiles(){const e=await _e.getFiles("config/");this.configFiles=e.data.map((e=>e.path.replace("config/","")));const t=await _e.getFiles("data/");this.dataFiles=t.data.map((e=>e.path.replace("data/","")));const a=await _e.getFiles("artifact/");this.artifactFiles=a.data.map((e=>e.path.replace("artifact/","")))},submitJob(){Te.createJob(this.job).then((()=>{this.$router.push("/jobs")})).catch((e=>{this.errorMessage=e.response.data.detail}))}},watch:{"job.application.application":function(e,t){e!==t&&this.fetchVersions()},"job.application.version":function(e,t){e!==t&&this.fetchEntrypoints()},"job.application.entrypoint":function(e,t){e!==t&&this.fetchEnvirons()}},created(){this.fetchApplications(),this.fetchInputFiles()}};const Lt=(0,F.Z)(Wt,[["render",Tt],["__scopeId","data-v-0a362ade"]]);var Rt=Lt;const Ht={user:null},Bt={isAuthenticated:e=>!!e.user,stateUser:e=>e.user},qt={async logIn({dispatch:e},t){V.g.signIn({username:t.username,password:t.password}).then((()=>{e("viewMe")}))},async viewMe({commit:e}){let{data:t}=await o.Z.get("user");await e("setUser",t),this.$router.push("/profile")},async logOut({commit:e}){await V.g.signOut(),await e("logout",null)}},Yt={setUser(e,t){e.user=t},logout(e,t){e.user=t}};var Kt={state:Ht,getters:Bt,actions:qt,mutations:Yt},Gt=(0,J.MT)({modules:{users:Kt}});const Qt=[{path:"/",name:"Home",component:L},{path:"/register",name:"Register",component:K},{path:"/login",name:"Login",component:le},{path:"/files",name:"Files",component:ye,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:Ie,meta:{requiresAuth:!0}},{path:"/jobs",name:"Jobs",component:et,meta:{requiresAuth:!0}},{path:"/jobs/new",name:"JobCreation",component:Rt,meta:{requiresAuth:!0}}],Xt=(0,x.p7)({history:(0,x.PO)("/DECODE_Cloud_UserFrontend/"),routes:Qt});Xt.beforeEach(((e,t,a)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(Gt.getters.isAuthenticated)return void a();a("/login")}else a()}));var ea=Xt;const ta={NODE_ENV:"production",BASE_URL:"/DECODE_Cloud_UserFrontend/"}.API_URL||"https://dev.decodeapi.arthur-jaques.de";async function aa(){try{let e=await o.Z.get("/access_info"),t=e.data.cognito;Z.d.configure({Auth:{userPoolId:t.user_pool_id,userPoolWebClientId:t.client_id,region:t.region,authenticationFlowType:"USER_PASSWORD_AUTH"}}),o.Z.interceptors.request.use((async e=>{try{const t=await V.g.currentSession(),a=t.getIdToken().getJwtToken();e.headers.Authorization=`Bearer ${a}`}catch(t){Gt.dispatch("logOut").then((()=>{ea.push("/login")}))}return e}),(e=>{if(401!==e.response.status)return Promise.reject(e);Gt.dispatch("logOut").then((()=>{ea.push("/login")}))}));const a=(0,n.ri)(P);a.use(ea),a.use(Gt),a.mount("#app")}catch(e){console.error("Error during app initialization:",e)}}o.Z.defaults.baseURL=ta,aa()},6249:function(){}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||i>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,i=n[0],s=n[1],r=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(r)var c=r(a)}for(t&&t(n);u<i.length;u++)l=i[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkDECODE_Cloud_UserFrontend"]=self["webpackChunkDECODE_Cloud_UserFrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4672)}));n=a.O(n)})();
//# sourceMappingURL=app.8788d19b.js.map