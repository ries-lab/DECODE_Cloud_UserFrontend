(function(){var e={6503:function(e,t,a){"use strict";a(560);var o=a(9242),n=a(1076),l=a(3396);const i={id:"app"},s={class:"main container"};function r(e,t,a,o,n,r){const u=(0,l.up)("NavBar"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(u),(0,l._)("div",s,[(0,l.Wm)(c)])])}var u=a(65),c=a(2483);const d=e=>((0,l.dD)("data-v-b2c6df24"),e=e(),(0,l.Cn)(),e),p={class:"navbar navbar-expand-md navbar-dark bg-dark"},m={class:"container"},b=d((()=>(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1))),h={class:"collapse navbar-collapse",id:"navbarCollapse"},g={key:0,class:"navbar-nav me-auto mb-2 mb-md-0"},f={class:"nav-item"},_={class:"nav-item"},w={class:"nav-item"},v={class:"nav-item"},y={class:"nav-item"},k={key:1,class:"navbar-nav me-auto mb-2 mb-md-0"},j={class:"nav-item"},D={class:"nav-item"},U={class:"nav-item"};function F(e,t,a,o,n,i){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("nav",p,[(0,l._)("div",m,[(0,l.Wm)(s,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("DECODE OpenCloud")])),_:1}),b,(0,l._)("div",h,[e.isLoggedIn?((0,l.wg)(),(0,l.iD)("ul",g,[(0,l._)("li",f,[(0,l.Wm)(s,{class:"nav-link",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("li",_,[(0,l.Wm)(s,{class:"nav-link",to:"/files"},{default:(0,l.w5)((()=>[(0,l.Uk)("Files")])),_:1})]),(0,l._)("li",w,[(0,l.Wm)(s,{class:"nav-link",to:"/jobs"},{default:(0,l.w5)((()=>[(0,l.Uk)("Jobs")])),_:1})]),(0,l._)("li",v,[(0,l.Wm)(s,{class:"nav-link",to:"/profile"},{default:(0,l.w5)((()=>[(0,l.Uk)("Profile")])),_:1})]),(0,l._)("li",y,[(0,l._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(...t)=>e.logout&&e.logout(...t))},"Log Out")])])):((0,l.wg)(),(0,l.iD)("ul",k,[(0,l._)("li",j,[(0,l.Wm)(s,{class:"nav-link",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})]),(0,l._)("li",D,[(0,l.Wm)(s,{class:"nav-link",to:"/register"},{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),(0,l._)("li",U,[(0,l.Wm)(s,{class:"nav-link",to:"/login"},{default:(0,l.w5)((()=>[(0,l.Uk)("Log In")])),_:1})])]))])])])])}var C=(0,l.aZ)({name:"NavBar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{async logout(){await this.$store.dispatch("logOut"),this.$router.push("/login")}}}),E=a(89);const J=(0,E.Z)(C,[["render",F],["__scopeId","data-v-b2c6df24"]]);var P=J,I={setup(){const e=(0,u.oR)(),t=(0,c.tv)();(0,l.bv)((()=>{e.dispatch("viewMe"),t.push("/profile")}))},components:{NavBar:P}};const O=(0,E.Z)(I,[["render",r]]);var M=O,Z=a(7429),V=a(4517);const x={key:0,id:"logout"},A={id:"logout"},z={id:"logout"},S={key:1},$=(0,l._)("span",null," or ",-1);function N(e,t,a,o,n,i){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("section",null,[e.isLoggedIn?((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("p",A,[(0,l.Uk)("Click "),(0,l.Wm)(s,{to:"/files"},{default:(0,l.w5)((()=>[(0,l.Uk)("here")])),_:1}),(0,l.Uk)(" to view your files.")]),(0,l._)("p",z,[(0,l.Uk)("Click "),(0,l.Wm)(s,{to:"/jobs"},{default:(0,l.w5)((()=>[(0,l.Uk)("here")])),_:1}),(0,l.Uk)(" to view your jobs.")])])):((0,l.wg)(),(0,l.iD)("p",S,[(0,l._)("span",null,[(0,l.Wm)(s,{to:"/register"},{default:(0,l.w5)((()=>[(0,l.Uk)("Register")])),_:1})]),$,(0,l._)("span",null,[(0,l.Wm)(s,{to:"/login"},{default:(0,l.w5)((()=>[(0,l.Uk)("Log In")])),_:1})])]))])}var T=(0,l.aZ)({name:"HomeView",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}});const W=(0,E.Z)(T,[["render",N]]);var H=W;const L=(0,l._)("p",null,"Please contact the developers if you would like to use DECODE OpenCloud",-1),R=[L];function q(e,t,a,o,n,i){return(0,l.wg)(),(0,l.iD)("div",null,R)}var B=(0,l.aZ)({name:"Register"});const Y=(0,E.Z)(B,[["render",q]]);var K=Y,G=a(7139);const Q={class:"mb-3"},X=(0,l._)("label",{for:"username",class:"form-label"},"Email address:",-1),ee={class:"mb-3"},te=(0,l._)("label",{for:"password",class:"form-label"},"Password:",-1),ae=(0,l._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),oe={key:0,class:"error"};function ne(e,t,a,n,i,s){return(0,l.wg)(),(0,l.iD)("section",null,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,l._)("div",Q,[X,(0,l.wy)((0,l._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t),class:"form-control"},null,512),[[o.nr,e.form.username]])]),(0,l._)("div",ee,[te,(0,l.wy)((0,l._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),class:"form-control"},null,512),[[o.nr,e.form.password]])]),ae,e.errorMessage?((0,l.wg)(),(0,l.iD)("div",oe,(0,G.zw)(e.errorMessage),1)):(0,l.kq)("",!0)],32)])}var le=(0,l.aZ)({name:"Login",data(){return{form:{username:"",password:""},errorMessage:""}},methods:{...(0,u.nv)(["logIn"]),async submit(){try{await this.logIn({username:this.form.username,password:this.form.password}),this.$router.push("/")}catch(e){console.log(e),this.errorMessage=e}}}});const ie=(0,E.Z)(le,[["render",ne]]);var se=ie;const re=(0,l._)("h1",null,"Files",-1),ue=["disabled"],ce={key:0},de=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Type"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Size")])],-1),pe=["onDblclick"],me=["value","onChange"],be=["onClick"],he=["onClick"],ge={key:0,class:"error-message"};function fe(e,t,a,n,i,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[re,(0,l._)("div",null,[(0,l._)("header",null,[(0,l._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goUp&&e.goUp(...t)),disabled:""===e.path},"Back",8,ue),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.path=t),placeholder:"Path"},null,512),[[o.nr,e.path]]),(0,l._)("button",{class:"btn-flat",onClick:t[2]||(t[2]=(...t)=>e.createFolder&&e.createFolder(...t))},"Create Folder"),(0,l._)("button",{onClick:t[3]||(t[3]=(...t)=>e.uploadSingleFile&&e.uploadSingleFile(...t))},"Upload File"),(0,l._)("button",{onClick:t[4]||(t[4]=(...t)=>e.uploadDirectory&&e.uploadDirectory(...t))},"Upload Directory"),e.uploadingFile?((0,l.wg)(),(0,l.iD)("p",ce,"Uploading: "+(0,G.zw)(e.uploadingFile),1)):(0,l.kq)("",!0),(0,l._)("input",{type:"file",id:"fileInput",onChange:t[5]||(t[5]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32),(0,l._)("input",{type:"file",id:"directoryInput",webkitdirectory:"",multiple:"",onChange:t[6]||(t[6]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32)]),(0,l._)("main",null,[(0,l._)("table",null,[de,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.files,((t,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:a,onDblclick:o=>e.openAction(a,t)},[(0,l._)("td",null,(0,G.zw)(t.type),1),(0,l._)("td",null,[(0,l._)("input",{type:"text",value:t.path.replace(this.path,""),onChange:a=>e.renameItem(t.path,a.target.value)},null,40,me)]),(0,l._)("td",null,(0,G.zw)("directory"===t.type?"-":t.size),1),(0,l._)("td",null,[(0,l._)("button",{onClick:a=>e.deleteItem(t.path)},"Delete",8,be)]),(0,l._)("td",null,[(0,l._)("button",{onClick:a=>e.downloadItem(t)},"Download",8,he)])],40,pe)))),128))])])])]),e.errorMessage?((0,l.wg)(),(0,l.iD)("p",ge,(0,G.zw)(e.errorMessage),1)):(0,l.kq)("",!0)],64)}a(8858),a(1318),a(3228);var _e=a(4730),we=a.n(_e),ve={async getFiles(e){return e=e||"/",await n.Z.get(`/files/${e}?show_dirs=True&recursive=False`)},async createFolder(e){return await n.Z.post(`/files/${e}/`)},async uploadFile(e,t){let a=await n.Z.post(`/files/${e}url`),o=new FormData;"key"in a.data["data"]&&o.append("key",a.data["data"]["key"]);for(let n in a.data["data"])"key"!==n&&o.append(n,a.data["data"][n]);for(let n of t.entries())o.append(n[0],n[1]);return await n.Z.post(a.data.url,o,{headers:a.data.headers||{}})},async deleteItem(e){return await n.Z.delete(`/files/${e}`)},async renameItem(e,t){return await n.Z.put(`/files/${e}`,{path:t})},async downloadFile(e){let t=await n.Z.get(`/files/${e}/url`);return await n.Z.get(t.data.url,{headers:t.data.headers||{}})},async downloadItem(e){const t=e.path;if("directory"===e.type){let a=new(we()),o=await n.Z.get(`/files/${t}`,{params:{show_dirs:!1,recursive:!0}});for(let t of o.data){let o=await this.downloadFile(t.path);a.file(t.path.replace(e.path,""),o.data)}let l=await a.generateAsync({type:"blob"});const i=window.URL.createObjectURL(l),s=document.createElement("a");s.href=i;let r=t.split("/");s.setAttribute("download",r[r.length-2]+".zip"),document.body.appendChild(s),s.click()}else{let e=await this.downloadFile(t);const a=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",t.split("/").pop()),document.body.appendChild(o),o.click()}}},ye=(0,l.aZ)({name:"FilesView",data(){return{path:"",files:[],uploadingFile:null,errorMessage:""}},methods:{openAction:function(e,t){"directory"===t.type&&(this.path=t.path,this.fetchFiles())},fetchFiles(){ve.getFiles(this.path).then((e=>{this.files=e.data})).catch((e=>{this.errorMessage="Error fetching files: "+e.message}))},goUp(){let e=this.path.trimEnd("/").split("/").filter(Boolean);e.pop(),this.path=e.join("/"),""!=this.path&&(this.path=this.path+"/"),this.fetchFiles()},createFolder(){ve.createFolder(this.path+"new").then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error creating folder: "+e.message}))},uploadSingleFile(){document.getElementById("fileInput").click()},uploadDirectory(){document.getElementById("directoryInput").click()},handleUpload(e){const t=e.target.files;for(let a=0;a<t.length;a++){let e=t[a],o=e.webkitRelativePath||e.name,n=o.split("/");n.pop();let l=n.join("/")+"/";this.uploadFile(e,this.path+l)}},uploadFile(e,t){this.uploadingFile=e.name;let a=new FormData;a.append("file",e),ve.uploadFile(t,a).then((()=>{this.fetchFiles(),this.uploadingFile=null})).catch((e=>{this.uploadingFile=null,this.errorMessage="Error uploading: "+e.message}))},downloadItem(e){ve.downloadItem(e).catch((e=>{this.errorMessage="Error downloading: "+e.message}))},deleteItem(e){ve.deleteItem(e).then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error deleting: "+e.message}))},renameItem(e,t){let a=this.path.trimEnd("/")+"/"+t;ve.renameItem(e,a).then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error renaming: "+e.message}))}},mounted(){this.fetchFiles()}});const ke=(0,E.Z)(ye,[["render",fe]]);var je=ke;const De=(0,l._)("h1",null,"Your Profile",-1),Ue=(0,l._)("hr",null,null,-1),Fe=(0,l._)("br",null,null,-1),Ce=(0,l._)("strong",null,"Email address:",-1),Ee=(0,l._)("strong",null,"Groups:",-1);function Je(e,t,a,o,n,i){return(0,l.wg)(),(0,l.iD)("section",null,[De,Ue,Fe,(0,l._)("div",null,[(0,l._)("p",null,[Ce,(0,l.Uk)(),(0,l._)("span",null,(0,G.zw)(e.user.email),1)]),(0,l._)("p",null,[Ee,(0,l.Uk)(),(0,l._)("span",null,(0,G.zw)(e.user.groups),1)])])])}var Pe=(0,l.aZ)({name:"Profile",created:function(){return this.$store.dispatch("viewMe")},computed:{...(0,u.Se)({user:"stateUser"})},methods:{}});const Ie=(0,E.Z)(Pe,[["render",Je]]);var Oe=Ie;const Me={class:"job-list-section"},Ze=(0,l._)("h1",null,"Jobs",-1),Ve=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Job Name"),(0,l._)("th",null,"Status"),(0,l._)("th",null,"Creation Time"),(0,l._)("th",null,"Application"),(0,l._)("th",null,"Actions")])],-1),xe=["onClick"],Ae=["onClick"],ze=["disabled"],Se=["disabled"],$e={key:0,class:"job-details-section"},Ne=(0,l._)("h2",null,"Job Details",-1);function Te(e,t,a,o,n,i){const s=(0,l.up)("job-details-tree");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Me,[Ze,(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>i.goToJobCreationForm&&i.goToJobCreationForm(...e)),style:{"margin-bottom":"10px"}},"+New Job"),(0,l._)("table",null,[Ve,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.jobs,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,G.zw)(e.job_name),1),(0,l._)("td",null,(0,G.zw)(e.status),1),(0,l._)("td",null,(0,G.zw)(e.date_created),1),(0,l._)("td",null,(0,G.zw)(e.application.application)+" > "+(0,G.zw)(e.application.version)+" > "+(0,G.zw)(e.application.entrypoint),1),(0,l._)("td",null,[(0,l._)("button",{onClick:t=>i.getJobDetails(e.id)},"Details",8,xe),(0,l._)("button",{onClick:t=>i.deleteJob(e.id)},"Delete",8,Ae)])])))),128))])]),(0,l._)("button",{onClick:t[1]||(t[1]=e=>i.changePage(n.currentPage-1)),disabled:n.currentPage<=1},"Previous",8,ze),(0,l._)("button",{onClick:t[2]||(t[2]=e=>i.changePage(n.currentPage+1)),disabled:!n.canGoToNextPage},"Next",8,Se)]),n.selectedJob?((0,l.wg)(),(0,l.iD)("div",$e,[Ne,(0,l.Wm)(s,{data:n.selectedJob},null,8,["data"])])):(0,l.kq)("",!0)])}var We={async createJob(e){return await n.Z.post("/jobs",e)},async getJobs(e,t){return await n.Z.get(`/jobs?offset=${e}&limit=${t}`)},async getJobDetails(e){return await n.Z.get(`/jobs/${e}`)},async deleteJob(e){return await n.Z.delete(`/jobs/${e}`)},async getApplications(){return await n.Z.get("/jobs/applications")}};const He={key:0,class:"tree-node"},Le=["onClick"],Re={class:"toggle-icon"},qe={key:1,class:"tree-item-row"},Be={class:"tree-item-value"},Ye={key:2,class:"tree-item-content"};function Ke(e,t,a,o,n,i){const s=(0,l.up)("job-details-tree",!0);return i.isObject(a.data)?((0,l.wg)(),(0,l.iD)("div",He,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"tree-item"},[i.isObject(e)?((0,l.wg)(),(0,l.iD)("div",{key:0,onClick:e=>i.toggle(t),class:"tree-item-label"},[(0,l._)("span",Re,(0,G.zw)(i.isExpanded(t)?"-":"+"),1),(0,l._)("strong",null,(0,G.zw)(t)+":",1)],8,Le)):((0,l.wg)(),(0,l.iD)("div",qe,[(0,l._)("strong",null,(0,G.zw)(t)+":",1),(0,l._)("div",Be,(0,G.zw)(e),1)])),i.isObject(e)&&i.isExpanded(t)?((0,l.wg)(),(0,l.iD)("div",Ye,[(0,l.Wm)(s,{data:e},null,8,["data"])])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0)}var Ge={name:"JobDetailsTree",props:{data:[Object,Array,String,Number,Boolean]},data(){return{expandedNodes:{}}},methods:{isObject(e){return e&&"object"===typeof e},toggle(e){this.expandedNodes[e]=!this.expandedNodes[e]},isExpanded(e){return!!this.expandedNodes[e]}}};const Qe=(0,E.Z)(Ge,[["render",Ke]]);var Xe=Qe,et={data(){return{jobs:[],selectedJob:null,currentPage:1,limit:20,canGoToNextPage:!0}},methods:{goToJobCreationForm(){this.$router.push("/jobs/new")},async fetchJobs(){try{const e=(this.currentPage-1)*this.limit,t=await We.getJobs(e,this.limit);this.jobs=t.data,this.canGoToNextPage=this.jobs.length===this.limit}catch(e){console.error(e)}},async getJobDetails(e){try{const t=await We.getJobDetails(e);this.selectedJob=t.data}catch(t){console.error(t)}},async deleteJob(e){try{await We.deleteJob(e),this.fetchJobs()}catch(t){console.error(t)}},changePage(e){e<1||(this.currentPage=e,this.fetchJobs())}},components:{JobDetailsTree:Xe},mounted(){this.fetchJobs()}};const tt=(0,E.Z)(et,[["render",Te]]);var at=tt;const ot=e=>((0,l.dD)("data-v-60c755b6"),e=e(),(0,l.Cn)(),e),nt={class:"form-group"},lt=ot((()=>(0,l._)("h2",null,"Submit New Job",-1))),it=ot((()=>(0,l._)("label",{class:"form-label",for:"jobName"},"Job Name",-1))),st=ot((()=>(0,l._)("label",{class:"form-label"},"Application",-1))),rt={class:"sub-group"},ut=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Application",-1))),ct=["value"],dt=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Version",-1))),pt=["value"],mt=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Entrypoint",-1))),bt=["value"],ht={class:"form-group"},gt=ot((()=>(0,l._)("label",{class:"form-label"},"Input",-1))),ft={class:"sub-group"},_t=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Configuration",-1))),wt=["value"],vt={class:"sub-group",style:{display:"flex","align-items":"center"}},yt=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Data",-1))),kt={class:"sub-group",style:{display:"flex","align-items":"center"}},jt=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Artifacts",-1))),Dt={class:"sub-group",style:{display:"flex","align-items":"center"}},Ut=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Environment Variables",-1))),Ft={class:"form-subsublabel"},Ct=["placeholder","onUpdate:modelValue"],Et={class:"form-group"},Jt=ot((()=>(0,l._)("label",{class:"form-label"},"Runtime",-1))),Pt={class:"sub-group"},It=ot((()=>(0,l._)("label",{class:"form-sublabel"},"Hardware Specs",-1))),Ot={class:"sub-group"},Mt=ot((()=>(0,l._)("label",{class:"form-sublabel",for:"environment"},"Environment",-1))),Zt=ot((()=>(0,l._)("option",{disabled:"",value:""},"Select environment",-1))),Vt=ot((()=>(0,l._)("option",{value:"cloud"},"cloud",-1))),xt=ot((()=>(0,l._)("option",{value:"local"},"local",-1))),At=ot((()=>(0,l._)("option",{value:"null"},"any",-1))),zt=[Zt,Vt,xt,At],St={class:"sub-group"},$t=ot((()=>(0,l._)("label",{class:"form-sublabel",for:"priority"},"Priority",-1))),Nt=ot((()=>(0,l._)("button",{type:"submit"},"Submit Job",-1))),Tt={key:0,class:"error-message"};function Wt(e,t,a,n,i,s){const r=(0,l.up)("b-form-select");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("form",{onSubmit:t[16]||(t[16]=(0,o.iM)(((...e)=>s.submitJob&&s.submitJob(...e)),["prevent"]))},[(0,l._)("div",nt,[lt,(0,l._)("div",null,[it,(0,l.wy)((0,l._)("input",{type:"text",id:"jobName","onUpdate:modelValue":t[0]||(t[0]=e=>i.job.job_name=e)},null,512),[[o.nr,i.job.job_name]])]),(0,l._)("div",null,[st,(0,l._)("div",rt,[ut,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.job.application.application=e),onChange:t[2]||(t[2]=(...e)=>s.fetchVersions&&s.fetchVersions(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.applications,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,G.zw)(t),9,ct)))),128))],544),[[o.bM,i.job.application.application]]),dt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.job.application.version=e),onChange:t[4]||(t[4]=(...e)=>s.fetchEntrypoints&&s.fetchEntrypoints(...e))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.versions,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,G.zw)(t),9,pt)))),128))],544),[[o.bM,i.job.application.version]]),mt,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.job.application.entrypoint=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.entrypoints,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,G.zw)(t),9,bt)))),128))],512),[[o.bM,i.job.application.entrypoint]])])])]),(0,l._)("div",ht,[gt,(0,l._)("div",ft,[_t,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.job.attributes.files_down.config_id=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.configFiles,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:e},(0,G.zw)(e),9,wt)))),128))],512),[[o.bM,i.job.attributes.files_down.config_id]])]),(0,l._)("div",vt,[yt,(0,l.Wm)(r,{modelValue:i.job.attributes.files_down.data_ids,"onUpdate:modelValue":t[7]||(t[7]=e=>i.job.attributes.files_down.data_ids=e),options:i.dataFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,l._)("div",kt,[jt,(0,l.Wm)(r,{modelValue:i.job.attributes.files_down.artifact_ids,"onUpdate:modelValue":t[8]||(t[8]=e=>i.job.attributes.files_down.artifact_ids=e),options:i.artifactFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,l._)("div",Dt,[Ut,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.environs,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[(0,l._)("label",Ft,(0,G.zw)(e),1),(0,l.wy)((0,l._)("input",{type:"text",placeholder:e,"onUpdate:modelValue":t=>i.job.attributes.env_vars[e]=t},null,8,Ct),[[o.nr,i.job.attributes.env_vars[e]]])])))),128))])]),(0,l._)("div",Et,[Jt,(0,l._)("div",Pt,[It,(0,l.wy)((0,l._)("input",{type:"number",placeholder:"CPU Cores","onUpdate:modelValue":t[9]||(t[9]=e=>i.job.hardware.cpu_cores=e)},null,512),[[o.nr,i.job.hardware.cpu_cores,void 0,{number:!0}]]),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"Memory","onUpdate:modelValue":t[10]||(t[10]=e=>i.job.hardware.memory=e)},null,512),[[o.nr,i.job.hardware.memory,void 0,{number:!0}]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"GPU Model","onUpdate:modelValue":t[11]||(t[11]=e=>i.job.hardware.gpu_model=e)},null,512),[[o.nr,i.job.hardware.gpu_model]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"GPU Architecture","onUpdate:modelValue":t[12]||(t[12]=e=>i.job.hardware.gpu_archi=e)},null,512),[[o.nr,i.job.hardware.gpu_archi]]),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"GPU Memory","onUpdate:modelValue":t[13]||(t[13]=e=>i.job.hardware.gpu_mem=e)},null,512),[[o.nr,i.job.hardware.gpu_mem,void 0,{number:!0}]])]),(0,l._)("div",Ot,[Mt,(0,l.wy)((0,l._)("select",{id:"environment","onUpdate:modelValue":t[14]||(t[14]=e=>i.job.environment=e)},zt,512),[[o.bM,i.job.environment]])]),(0,l._)("div",St,[$t,(0,l.wy)((0,l._)("input",{type:"number",id:"priority","onUpdate:modelValue":t[15]||(t[15]=e=>i.job.priority=e)},null,512),[[o.nr,i.job.priority,void 0,{number:!0}]])])]),Nt],32),i.errorMessage?((0,l.wg)(),(0,l.iD)("div",Tt,(0,G.zw)(i.errorMessage),1)):(0,l.kq)("",!0)],64)}var Ht=a(2026),Lt={data(){return{job:{job_name:null,environment:null,priority:null,application:{application:null,version:null,entrypoint:null},attributes:{files_down:{config_id:null,data_ids:[],artifact_ids:[]},env_vars:{}},hardware:{cpu_cores:null,memory:null,gpu_model:null,gpu_archi:null,gpu_mem:null}},applications:{},versions:{},entrypoints:{},environs:{},configFiles:[],dataFiles:[],artifactFiles:[],errorMessage:null}},components:{BFormSelect:Ht.KB},methods:{async fetchApplications(){const e=await We.getApplications();this.applications=e.data},fetchVersions(){""!=this.job.application.application&&(this.versions=this.applications[this.job.application.application])},fetchEntrypoints(){""!=this.job.application.version&&(this.entrypoints=this.versions[this.job.application.version])},fetchEnvirons(){""!=this.job.application.entrypoint&&(this.environs=this.entrypoints[this.job.application.entrypoint]["app"]["env"])},async fetchInputFiles(){const e=await ve.getFiles("config/");this.configFiles=e.data.map((e=>e.path.replace("config/","")));const t=await ve.getFiles("data/");this.dataFiles=t.data.map((e=>e.path.replace("data/","")));const a=await ve.getFiles("artifact/");this.artifactFiles=a.data.map((e=>e.path.replace("artifact/","")))},submitJob(){We.createJob(this.job).then((()=>{this.$router.push("/jobs")})).catch((e=>{422===e.response.status?this.errorMessage=e.response.data.map((e=>{const t=e.loc.filter((e=>"body"!==e)).join(".");return`${t}: ${e.msg}`})).join("\n"):this.errorMessage=e.response.data.detail}))}},watch:{"job.application.application":function(e,t){e!==t&&this.fetchVersions()},"job.application.version":function(e,t){e!==t&&this.fetchEntrypoints()},"job.application.entrypoint":function(e,t){e!==t&&this.fetchEnvirons()}},created(){this.fetchApplications(),this.fetchInputFiles()}};const Rt=(0,E.Z)(Lt,[["render",Wt],["__scopeId","data-v-60c755b6"]]);var qt=Rt;const Bt={user:null},Yt={isAuthenticated:e=>!!e.user,stateUser:e=>e.user},Kt={async logIn({dispatch:e},t){await V.g.signIn({username:t.username,password:t.password}),e("viewMe")},async viewMe({commit:e}){let{data:t}=await n.Z.get("user");await e("setUser",t)},async logOut({commit:e}){await V.g.signOut(),await e("logout",null)}},Gt={setUser(e,t){e.user=t},logout(e,t){e.user=t}};var Qt={state:Bt,getters:Yt,actions:Kt,mutations:Gt},Xt=(0,u.MT)({modules:{users:Qt}});const ea=[{path:"/",name:"Home",component:H},{path:"/register",name:"Register",component:K},{path:"/login",name:"Login",component:se},{path:"/files",name:"Files",component:je,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:Oe,meta:{requiresAuth:!0}},{path:"/jobs",name:"Jobs",component:at,meta:{requiresAuth:!0}},{path:"/jobs/new",name:"JobCreation",component:qt,meta:{requiresAuth:!0}}],ta=(0,c.p7)({history:(0,c.PO)("/DECODE_Cloud_UserFrontend/"),routes:ea});ta.beforeEach(((e,t,a)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(Xt.getters.isAuthenticated)return void a();a("/login")}else a()}));var aa=ta;const oa={NODE_ENV:"production",BASE_URL:"/DECODE_Cloud_UserFrontend/"}.API_URL||"https://dev.decodeapi.arthur-jaques.de";async function na(){try{let e=await n.Z.get("/access_info"),t=e.data.cognito;Z.d.configure({Auth:{userPoolId:t.user_pool_id,userPoolWebClientId:t.client_id,region:t.region,authenticationFlowType:"USER_PASSWORD_AUTH"}}),n.Z.interceptors.request.use((async e=>{try{const t=await V.g.currentSession(),a=t.getIdToken().getJwtToken();e.headers.Authorization=`Bearer ${a}`}catch(t){return await Xt.dispatch("logOut"),aa.push("/login"),Promise.reject(t)}return e}),(async e=>e.response&&401===e.response.status?(await Xt.dispatch("logOut"),aa.push("/login"),Promise.reject(e)):Promise.reject(e)));const a=(0,o.ri)(M);a.use(aa),a.use(Xt),a.mount("#app")}catch(e){console.error("Error during app initialization:",e)}}n.Z.defaults.baseURL=oa,na()},6249:function(){}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],l=e[c][2];for(var s=!0,r=0;r<o.length;r++)(!1&l||i>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[r])}))?o.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,l,i=o[0],s=o[1],r=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(r)var c=r(a)}for(t&&t(o);u<i.length;u++)l=i[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkDECODE_Cloud_UserFrontend"]=self["webpackChunkDECODE_Cloud_UserFrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(6503)}));o=a.O(o)})();
//# sourceMappingURL=app.5a737080.js.map