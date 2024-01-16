(function(){var e={6302:function(e,t,a){"use strict";a(560);var o=a(9242),n=a(1076),s=a(3396);const r={id:"app"},i={class:"main container"};function l(e,t,a,o,n,l){const c=(0,s.up)("NavBar"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(c),(0,s._)("div",i,[(0,s.Wm)(u)])])}var c=a(65),u=a(2483);const d=e=>((0,s.dD)("data-v-b2c6df24"),e=e(),(0,s.Cn)(),e),p={class:"navbar navbar-expand-md navbar-dark bg-dark"},m={class:"container"},b=d((()=>(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1))),h={class:"collapse navbar-collapse",id:"navbarCollapse"},f={key:0,class:"navbar-nav me-auto mb-2 mb-md-0"},g={class:"nav-item"},w={class:"nav-item"},_={class:"nav-item"},y={class:"nav-item"},v={class:"nav-item"},k={key:1,class:"navbar-nav me-auto mb-2 mb-md-0"},j={class:"nav-item"},C={class:"nav-item"},D={class:"nav-item"};function U(e,t,a,o,n,r){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",p,[(0,s._)("div",m,[(0,s.Wm)(i,{class:"navbar-brand",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("DECODE OpenCloud")])),_:1}),b,(0,s._)("div",h,[e.isLoggedIn?((0,s.wg)(),(0,s.iD)("ul",f,[(0,s._)("li",g,[(0,s.Wm)(i,{class:"nav-link",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",w,[(0,s.Wm)(i,{class:"nav-link",to:"/files"},{default:(0,s.w5)((()=>[(0,s.Uk)("Files")])),_:1})]),(0,s._)("li",_,[(0,s.Wm)(i,{class:"nav-link",to:"/jobs"},{default:(0,s.w5)((()=>[(0,s.Uk)("Jobs")])),_:1})]),(0,s._)("li",y,[(0,s.Wm)(i,{class:"nav-link",to:"/profile"},{default:(0,s.w5)((()=>[(0,s.Uk)("Profile")])),_:1})]),(0,s._)("li",v,[(0,s._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(...t)=>e.logout&&e.logout(...t))},"Log Out")])])):((0,s.wg)(),(0,s.iD)("ul",k,[(0,s._)("li",j,[(0,s.Wm)(i,{class:"nav-link",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",C,[(0,s.Wm)(i,{class:"nav-link",to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})]),(0,s._)("li",D,[(0,s.Wm)(i,{class:"nav-link",to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Log In")])),_:1})])]))])])])])}var F=(0,s.aZ)({name:"NavBar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{async logout(){await this.$store.dispatch("logOut"),this.$router.push("/login")}}}),M=a(89);const V=(0,M.Z)(F,[["render",U],["__scopeId","data-v-b2c6df24"]]);var E=V,P={setup(){const e=(0,c.oR)(),t=(0,u.tv)();(0,s.bv)((()=>{e.dispatch("viewMe").then((()=>{e.state.user&&t.push("/home")}))}))},components:{NavBar:E}};const S=(0,M.Z)(P,[["render",l]]);var I=S,J=a(7429),Z=a(4517);const x={key:0,id:"logout"},O={id:"logout"},A={id:"logout"},z={key:1},$=(0,s._)("span",null," or ",-1);function N(e,t,a,o,n,r){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",null,[e.isLoggedIn?((0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("p",O,[(0,s.Uk)("Click "),(0,s.Wm)(i,{to:"/files"},{default:(0,s.w5)((()=>[(0,s.Uk)("here")])),_:1}),(0,s.Uk)(" to view your files.")]),(0,s._)("p",A,[(0,s.Uk)("Click "),(0,s.Wm)(i,{to:"/jobs"},{default:(0,s.w5)((()=>[(0,s.Uk)("here")])),_:1}),(0,s.Uk)(" to view your jobs.")])])):((0,s.wg)(),(0,s.iD)("p",z,[(0,s._)("span",null,[(0,s.Wm)(i,{to:"/register"},{default:(0,s.w5)((()=>[(0,s.Uk)("Register")])),_:1})]),$,(0,s._)("span",null,[(0,s.Wm)(i,{to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("Log In")])),_:1})])]))])}var T=(0,s.aZ)({name:"HomeView",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}});const q=(0,M.Z)(T,[["render",N]]);var W=q,H=a(7139);const L={class:"mb-3"},R=(0,s._)("label",{for:"username",class:"form-label"},"Email address:",-1),B={class:"mb-3"},Y=(0,s._)("label",{for:"password",class:"form-label"},"Password:",-1),K={class:"mb-3"},G=(0,s._)("label",{for:"repeat_password",class:"form-label"},"Repeat password:",-1),Q=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Send verification code",-1),X={key:0,class:"error"};function ee(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,s._)("div",L,[R,(0,s.wy)((0,s._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t),class:"form-control"},null,512),[[o.nr,e.form.username]])]),(0,s._)("div",B,[Y,(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),class:"form-control"},null,512),[[o.nr,e.form.password]])]),(0,s._)("div",K,[G,(0,s.wy)((0,s._)("input",{type:"password",name:"repeat_password","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.repeat_password=t),class:"form-control"},null,512),[[o.nr,e.form.repeat_password]])]),Q,e.errorMessage?((0,s.wg)(),(0,s.iD)("div",X,(0,H.zw)(e.errorMessage),1)):(0,s.kq)("",!0)],32)])}var te=(0,s.aZ)({name:"Register",data(){return{form:{username:"",password:"",repeat_password:""},errorMessage:""}},methods:{...(0,c.nv)(["register"]),async submit(){if(this.form.password===this.form.repeat_password)try{await this.register({username:this.form.username,password:this.form.password}),this.$router.push("/confirm-email/"+this.form.username)}catch(e){console.log(e),this.errorMessage=e}else this.errorMessage="Passwords do not match"}}});const ae=(0,M.Z)(te,[["render",ee]]);var oe=ae;const ne={class:"mb-3"},se=(0,s._)("label",{for:"verificationCode",class:"form-label"},"Verification code:",-1),re=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Verify email",-1),ie={key:0,class:"error"};function le(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,s._)("div",ne,[se,(0,s.wy)((0,s._)("input",{type:"text",name:"verificationCode","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.verificationCode=t),class:"form-control"},null,512),[[o.nr,e.form.verificationCode]]),(0,s._)("a",{href:"#",onClick:t[1]||(t[1]=(0,o.iM)(((...t)=>e.sendVerificationCode&&e.sendVerificationCode(...t)),["prevent"])),class:"btn btn-link"},"Re-send verification code")]),re,e.errorMessage?((0,s.wg)(),(0,s.iD)("div",ie,(0,H.zw)(e.errorMessage),1)):(0,s.kq)("",!0)],32)])}var ce=(0,s.aZ)({name:"ConfirmEmail",data(){return{form:{verificationCode:""},username:"",errorMessage:""}},created(){this.username=this.$route.params.username},methods:{...(0,c.nv)(["verify","sendVerificationCode"]),async submit(){try{await this.verify({username:this.username,code:this.form.verificationCode}),this.$router.push("/")}catch(e){console.log(e),this.errorMessage=e}},async sendVerificationCode(){try{await this.sendVerificationCode({username:this.username})}catch(e){console.log(e),this.errorMessage=e}}}});const ue=(0,M.Z)(ce,[["render",le]]);var de=ue;const pe={class:"mb-3"},me=(0,s._)("label",{for:"username",class:"form-label"},"Email address:",-1),be={class:"mb-3"},he=(0,s._)("label",{for:"password",class:"form-label"},"Password:",-1),fe=(0,s._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),ge={key:0,class:"error"};function we(e,t,a,n,r,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,s._)("div",pe,[me,(0,s.wy)((0,s._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t),class:"form-control"},null,512),[[o.nr,e.form.username]])]),(0,s._)("div",be,[he,(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),class:"form-control"},null,512),[[o.nr,e.form.password]])]),(0,s._)("div",null,[(0,s.Wm)(l,{to:"/forgot-password",class:"btn btn-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("Forgot password?")])),_:1})]),fe,e.errorMessage?((0,s.wg)(),(0,s.iD)("div",ge,(0,H.zw)(e.errorMessage),1)):(0,s.kq)("",!0)],32)])}var _e=(0,s.aZ)({name:"Login",data(){return{form:{username:"",password:""},errorMessage:""}},methods:{...(0,c.nv)(["logIn"]),async submit(){try{await this.logIn({username:this.form.username,password:this.form.password}),this.$router.push("/")}catch(e){"UserNotConfirmedException"===e.code?this.$router.push("/confirm-email/"+this.form.username):(console.log(e),this.errorMessage=e)}}}});const ye=(0,M.Z)(_e,[["render",we]]);var ve=ye;const ke={key:0,class:"mb-3"},je=(0,s._)("label",{for:"username",class:"form-label"},"Email address:",-1),Ce=["disabled"],De={key:1,class:"mb-3"},Ue=(0,s._)("label",{for:"code",class:"form-label"},"Verification code:",-1),Fe={key:2,class:"mb-3"},Me=(0,s._)("label",{for:"password",class:"form-label"},"New password:",-1),Ve={key:3,type:"submit",class:"btn btn-primary"},Ee={key:4,class:"error"};function Pe(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[e.isVerificationCodeSent?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ke,[je,(0,s.wy)((0,s._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.username=t),class:"form-control"},null,512),[[o.nr,e.form.username]]),(0,s._)("button",{type:"button",onClick:t[1]||(t[1]=(...t)=>e.sendVerificationCode&&e.sendVerificationCode(...t)),class:"btn btn-primary",disabled:e.isVerificationCodeSent},"Send verification code",8,Ce)])),e.isVerificationCodeSent?((0,s.wg)(),(0,s.iD)("div",De,[Ue,(0,s.wy)((0,s._)("input",{type:"text",name:"code","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.code=t),class:"form-control"},null,512),[[o.nr,e.form.code]])])):(0,s.kq)("",!0),e.isVerificationCodeSent?((0,s.wg)(),(0,s.iD)("div",Fe,[Me,(0,s.wy)((0,s._)("input",{type:"password",name:"password","onUpdate:modelValue":t[3]||(t[3]=t=>e.form.password=t),class:"form-control"},null,512),[[o.nr,e.form.password]])])):(0,s.kq)("",!0),e.isVerificationCodeSent?((0,s.wg)(),(0,s.iD)("button",Ve,"Save")):(0,s.kq)("",!0),e.errorMessage?((0,s.wg)(),(0,s.iD)("div",Ee,(0,H.zw)(e.errorMessage),1)):(0,s.kq)("",!0)],32)])}var Se=(0,s.aZ)({name:"ForgotPassword",data(){return{form:{username:"",code:"",password:""},errorMessage:"",isVerificationCodeSent:!1}},methods:{...(0,c.nv)(["forgotPassword","resetPassword","logIn"]),async submit(){try{await this.resetPassword({username:this.form.username,code:this.form.code,password:this.form.password}),await this.logIn({username:this.form.username,password:this.form.password}),this.$router.push("/")}catch(e){console.log(e),this.errorMessage=e}},async sendVerificationCode(){try{await this.forgotPassword(this.form.username),this.isVerificationCodeSent=!0}catch(e){console.log(e),this.errorMessage=e}}}});const Ie=(0,M.Z)(Se,[["render",Pe]]);var Je=Ie;const Ze=(0,s._)("h1",null,"Files",-1),xe=["disabled"],Oe={key:0},Ae=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Type"),(0,s._)("th",null,"Name"),(0,s._)("th",null,"Size")])],-1),ze=["onDblclick"],$e=["value","onChange"],Ne=["onClick"],Te=["onClick"],qe={key:0,class:"error-message"};function We(e,t,a,n,r,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[Ze,(0,s._)("div",null,[(0,s._)("header",null,[(0,s._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goUp&&e.goUp(...t)),disabled:""===e.path},"Back",8,xe),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.path=t),placeholder:"Path"},null,512),[[o.nr,e.path]]),(0,s._)("button",{class:"btn-flat",onClick:t[2]||(t[2]=(...t)=>e.createFolder&&e.createFolder(...t))},"Create Folder"),(0,s._)("button",{onClick:t[3]||(t[3]=(...t)=>e.uploadSingleFile&&e.uploadSingleFile(...t))},"Upload File"),(0,s._)("button",{onClick:t[4]||(t[4]=(...t)=>e.uploadDirectory&&e.uploadDirectory(...t))},"Upload Directory"),e.uploadingFile?((0,s.wg)(),(0,s.iD)("p",Oe,"Uploading: "+(0,H.zw)(e.uploadingFile),1)):(0,s.kq)("",!0),(0,s._)("input",{type:"file",id:"fileInput",onChange:t[5]||(t[5]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32),(0,s._)("input",{type:"file",id:"directoryInput",webkitdirectory:"",multiple:"",onChange:t[6]||(t[6]=(...t)=>e.handleUpload&&e.handleUpload(...t)),style:{display:"none"}},null,32)]),(0,s._)("main",null,[(0,s._)("table",null,[Ae,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.files,((t,a)=>((0,s.wg)(),(0,s.iD)("tr",{key:a,onDblclick:o=>e.openAction(a,t)},[(0,s._)("td",null,(0,H.zw)(t.type),1),(0,s._)("td",null,[(0,s._)("input",{type:"text",value:t.path.replace(this.path,""),onChange:a=>e.renameItem(t.path,a.target.value)},null,40,$e)]),(0,s._)("td",null,(0,H.zw)("directory"===t.type?"-":t.size),1),(0,s._)("td",null,[(0,s._)("button",{onClick:a=>e.deleteItem(t.path)},"Delete",8,Ne)]),(0,s._)("td",null,[(0,s._)("button",{onClick:a=>e.downloadItem(t)},"Download",8,Te)])],40,ze)))),128))])])])]),e.errorMessage?((0,s.wg)(),(0,s.iD)("p",qe,(0,H.zw)(e.errorMessage),1)):(0,s.kq)("",!0)],64)}a(8858),a(1318),a(3228);var He=a(4730),Le=a.n(He),Re={async getFiles(e){return e=e||"/",await n.Z.get(`/files/${e}?show_dirs=True&recursive=False`)},async createFolder(e){return await n.Z.post(`/files/${e}/`)},async uploadFile(e,t){let a=await n.Z.post(`/files/${e}url`),o=new FormData;"key"in a.data["data"]&&o.append("key",a.data["data"]["key"]);for(let n in a.data["data"])"key"!==n&&o.append(n,a.data["data"][n]);for(let n of t.entries())o.append(n[0],n[1]);return await n.Z.post(a.data.url,o,{headers:a.data.headers||{}})},async deleteItem(e){return await n.Z.delete(`/files/${e}`)},async renameItem(e,t){return await n.Z.put(`/files/${e}`,{path:t})},async downloadFile(e){let t=await n.Z.get(`/files/${e}/url`);return await n.Z.get(t.data.url,{headers:t.data.headers||{}})},async downloadItem(e){const t=e.path;if("directory"===e.type){let a=new(Le()),o=await n.Z.get(`/files/${t}`,{params:{show_dirs:!1,recursive:!0}});for(let t of o.data){let o=await this.downloadFile(t.path);a.file(t.path.replace(e.path,""),o.data)}let s=await a.generateAsync({type:"blob"});const r=window.URL.createObjectURL(s),i=document.createElement("a");i.href=r;let l=t.split("/");i.setAttribute("download",l[l.length-2]+".zip"),document.body.appendChild(i),i.click()}else{let e=await this.downloadFile(t);const a=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",t.split("/").pop()),document.body.appendChild(o),o.click()}}},Be=(0,s.aZ)({name:"FilesView",data(){return{path:"",files:[],uploadingFile:null,errorMessage:""}},methods:{openAction:function(e,t){"directory"===t.type&&(this.path=t.path,this.fetchFiles())},fetchFiles(){Re.getFiles(this.path).then((e=>{this.files=e.data})).catch((e=>{this.errorMessage="Error fetching files: "+e.message}))},goUp(){let e=this.path.trimEnd("/").split("/").filter(Boolean);e.pop(),this.path=e.join("/"),""!=this.path&&(this.path=this.path+"/"),this.fetchFiles()},createFolder(){Re.createFolder(this.path+"new").then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error creating folder: "+e.message}))},uploadSingleFile(){document.getElementById("fileInput").click()},uploadDirectory(){document.getElementById("directoryInput").click()},handleUpload(e){const t=e.target.files;for(let a=0;a<t.length;a++){let e=t[a],o=e.webkitRelativePath||e.name,n=o.split("/");n.pop();let s=n.join("/")+"/";this.uploadFile(e,this.path+s)}},uploadFile(e,t){this.uploadingFile=e.name;let a=new FormData;a.append("file",e),Re.uploadFile(t,a).then((()=>{this.fetchFiles(),this.uploadingFile=null})).catch((e=>{this.uploadingFile=null,this.errorMessage="Error uploading: "+e.message}))},downloadItem(e){Re.downloadItem(e).catch((e=>{this.errorMessage="Error downloading: "+e.message}))},deleteItem(e){Re.deleteItem(e).then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error deleting: "+e.message}))},renameItem(e,t){let a=this.path.trimEnd("/")+"/"+t;Re.renameItem(e,a).then((()=>{this.fetchFiles()})).catch((e=>{this.errorMessage="Error renaming: "+e.message}))}},mounted(){this.fetchFiles()}});const Ye=(0,M.Z)(Be,[["render",We]]);var Ke=Ye;const Ge=(0,s._)("h1",null,"Your Profile",-1),Qe=(0,s._)("hr",null,null,-1),Xe=(0,s._)("br",null,null,-1),et=(0,s._)("strong",null,"Email address:",-1),tt=(0,s._)("strong",null,"Groups:",-1);function at(e,t,a,o,n,r){return(0,s.wg)(),(0,s.iD)("section",null,[Ge,Qe,Xe,(0,s._)("div",null,[(0,s._)("p",null,[et,(0,s.Uk)(),(0,s._)("span",null,(0,H.zw)(e.user.email),1)]),(0,s._)("p",null,[tt,(0,s.Uk)(),(0,s._)("span",null,(0,H.zw)(e.user.groups),1)])])])}var ot=(0,s.aZ)({name:"Profile",created:function(){return this.$store.dispatch("viewMe")},computed:{...(0,c.Se)({user:"stateUser"})},methods:{}});const nt=(0,M.Z)(ot,[["render",at]]);var st=nt;const rt={class:"job-list-section"},it=(0,s._)("h1",null,"Jobs",-1),lt=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Job Name"),(0,s._)("th",null,"Status"),(0,s._)("th",null,"Creation Time"),(0,s._)("th",null,"Application"),(0,s._)("th",null,"Actions")])],-1),ct=["onClick"],ut=["onClick"],dt=["disabled"],pt=["disabled"],mt={key:0,class:"job-details-section"},bt=(0,s._)("h2",null,"Job Details",-1);function ht(e,t,a,o,n,r){const i=(0,s.up)("job-details-tree");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",rt,[it,(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>r.goToJobCreationForm&&r.goToJobCreationForm(...e)),style:{"margin-bottom":"10px"}},"+New Job"),(0,s._)("table",null,[lt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.jobs,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,H.zw)(e.job_name),1),(0,s._)("td",null,(0,H.zw)(e.status),1),(0,s._)("td",null,(0,H.zw)(e.date_created),1),(0,s._)("td",null,(0,H.zw)(e.application.application)+" > "+(0,H.zw)(e.application.version)+" > "+(0,H.zw)(e.application.entrypoint),1),(0,s._)("td",null,[(0,s._)("button",{onClick:t=>r.getJobDetails(e.id)},"Details",8,ct),(0,s._)("button",{onClick:t=>r.deleteJob(e.id)},"Delete",8,ut)])])))),128))])]),(0,s._)("button",{onClick:t[1]||(t[1]=e=>r.changePage(n.currentPage-1)),disabled:n.currentPage<=1},"Previous",8,dt),(0,s._)("button",{onClick:t[2]||(t[2]=e=>r.changePage(n.currentPage+1)),disabled:!n.canGoToNextPage},"Next",8,pt)]),n.selectedJob?((0,s.wg)(),(0,s.iD)("div",mt,[bt,(0,s.Wm)(i,{data:n.selectedJob},null,8,["data"])])):(0,s.kq)("",!0)])}var ft={async createJob(e){return await n.Z.post("/jobs",e)},async getJobs(e,t){return await n.Z.get(`/jobs?offset=${e}&limit=${t}`)},async getJobDetails(e){return await n.Z.get(`/jobs/${e}`)},async deleteJob(e){return await n.Z.delete(`/jobs/${e}`)},async getApplications(){return await n.Z.get("/jobs/applications")}};const gt={key:0,class:"tree-node"},wt=["onClick"],_t={class:"toggle-icon"},yt={key:1,class:"tree-item-row"},vt={class:"tree-item-value"},kt={key:2,class:"tree-item-content"};function jt(e,t,a,o,n,r){const i=(0,s.up)("job-details-tree",!0);return r.isObject(a.data)?((0,s.wg)(),(0,s.iD)("div",gt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"tree-item"},[r.isObject(e)?((0,s.wg)(),(0,s.iD)("div",{key:0,onClick:e=>r.toggle(t),class:"tree-item-label"},[(0,s._)("span",_t,(0,H.zw)(r.isExpanded(t)?"-":"+"),1),(0,s._)("strong",null,(0,H.zw)(t)+":",1)],8,wt)):((0,s.wg)(),(0,s.iD)("div",yt,[(0,s._)("strong",null,(0,H.zw)(t)+":",1),(0,s._)("div",vt,(0,H.zw)(e),1)])),r.isObject(e)&&r.isExpanded(t)?((0,s.wg)(),(0,s.iD)("div",kt,[(0,s.Wm)(i,{data:e},null,8,["data"])])):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0)}var Ct={name:"JobDetailsTree",props:{data:[Object,Array,String,Number,Boolean]},data(){return{expandedNodes:{}}},methods:{isObject(e){return e&&"object"===typeof e},toggle(e){this.expandedNodes[e]=!this.expandedNodes[e]},isExpanded(e){return!!this.expandedNodes[e]}}};const Dt=(0,M.Z)(Ct,[["render",jt]]);var Ut=Dt,Ft={data(){return{jobs:[],selectedJob:null,currentPage:1,limit:20,canGoToNextPage:!0}},methods:{goToJobCreationForm(){this.$router.push("/jobs/new")},async fetchJobs(){try{const e=(this.currentPage-1)*this.limit,t=await ft.getJobs(e,this.limit);this.jobs=t.data,this.canGoToNextPage=this.jobs.length===this.limit}catch(e){console.error(e)}},async getJobDetails(e){try{const t=await ft.getJobDetails(e);this.selectedJob=t.data}catch(t){console.error(t)}},async deleteJob(e){try{await ft.deleteJob(e),this.fetchJobs()}catch(t){console.error(t)}},changePage(e){e<1||(this.currentPage=e,this.fetchJobs())}},components:{JobDetailsTree:Ut},mounted(){this.fetchJobs()}};const Mt=(0,M.Z)(Ft,[["render",ht]]);var Vt=Mt;const Et=e=>((0,s.dD)("data-v-7d969c12"),e=e(),(0,s.Cn)(),e),Pt={class:"form-group"},St=Et((()=>(0,s._)("h2",null,"Submit New Job",-1))),It=Et((()=>(0,s._)("label",{class:"form-label",for:"jobName"},"Job Name",-1))),Jt=Et((()=>(0,s._)("label",{class:"form-label"},"Application",-1))),Zt={class:"sub-group"},xt=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Application",-1))),Ot=["value"],At=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Version",-1))),zt=["value"],$t=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Entrypoint",-1))),Nt=["value"],Tt={class:"form-group"},qt=Et((()=>(0,s._)("label",{class:"form-label"},"Input",-1))),Wt={class:"sub-group"},Ht=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Configuration",-1))),Lt=["value"],Rt={class:"sub-group",style:{display:"flex","align-items":"center"}},Bt=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Data",-1))),Yt={class:"sub-group",style:{display:"flex","align-items":"center"}},Kt=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Artifacts",-1))),Gt={class:"sub-group",style:{display:"flex","align-items":"center"}},Qt=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Environment Variables",-1))),Xt={class:"form-subsublabel"},ea=["placeholder","onUpdate:modelValue"],ta={class:"form-group"},aa=Et((()=>(0,s._)("label",{class:"form-label"},"Runtime",-1))),oa={class:"sub-group"},na=Et((()=>(0,s._)("label",{class:"form-sublabel"},"Hardware Specs",-1))),sa={class:"sub-group"},ra=Et((()=>(0,s._)("label",{class:"form-sublabel",for:"environment"},"Environment",-1))),ia=Et((()=>(0,s._)("option",{disabled:"",value:""},"Select environment",-1))),la=Et((()=>(0,s._)("option",{value:"cloud"},"cloud",-1))),ca=Et((()=>(0,s._)("option",{value:"local"},"local",-1))),ua=Et((()=>(0,s._)("option",{value:"null"},"any",-1))),da=[ia,la,ca,ua],pa={class:"sub-group"},ma=Et((()=>(0,s._)("label",{class:"form-sublabel",for:"priority"},"Priority",-1))),ba=Et((()=>(0,s._)("button",{type:"submit"},"Submit Job",-1))),ha=["innerHTML"];function fa(e,t,a,n,r,i){const l=(0,s.up)("b-form-select");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("form",{onSubmit:t[16]||(t[16]=(0,o.iM)(((...e)=>i.submitJob&&i.submitJob(...e)),["prevent"]))},[(0,s._)("div",Pt,[St,(0,s._)("div",null,[It,(0,s.wy)((0,s._)("input",{type:"text",id:"jobName","onUpdate:modelValue":t[0]||(t[0]=e=>r.job.job_name=e)},null,512),[[o.nr,r.job.job_name]])]),(0,s._)("div",null,[Jt,(0,s._)("div",Zt,[xt,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.job.application.application=e),onChange:t[2]||(t[2]=(...e)=>i.fetchVersions&&i.fetchVersions(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.applications,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,H.zw)(t),9,Ot)))),128))],544),[[o.bM,r.job.application.application]]),At,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.job.application.version=e),onChange:t[4]||(t[4]=(...e)=>i.fetchEntrypoints&&i.fetchEntrypoints(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.versions,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,H.zw)(t),9,zt)))),128))],544),[[o.bM,r.job.application.version]]),$t,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>r.job.application.entrypoint=e)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.entrypoints,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:t},(0,H.zw)(t),9,Nt)))),128))],512),[[o.bM,r.job.application.entrypoint]])])])]),(0,s._)("div",Tt,[qt,(0,s._)("div",Wt,[Ht,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.job.attributes.files_down.config_id=e)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.configFiles,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:e},(0,H.zw)(e),9,Lt)))),128))],512),[[o.bM,r.job.attributes.files_down.config_id]])]),(0,s._)("div",Rt,[Bt,(0,s.Wm)(l,{modelValue:r.job.attributes.files_down.data_ids,"onUpdate:modelValue":t[7]||(t[7]=e=>r.job.attributes.files_down.data_ids=e),options:r.dataFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,s._)("div",Yt,[Kt,(0,s.Wm)(l,{modelValue:r.job.attributes.files_down.artifact_ids,"onUpdate:modelValue":t[8]||(t[8]=e=>r.job.attributes.files_down.artifact_ids=e),options:r.artifactFiles,multiple:"",style:{width:"200px"}},null,8,["modelValue","options"])]),(0,s._)("div",Gt,[Qt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.environs,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s._)("label",Xt,(0,H.zw)(e),1),(0,s.wy)((0,s._)("input",{type:"text",placeholder:e,"onUpdate:modelValue":t=>r.job.attributes.env_vars[e]=t},null,8,ea),[[o.nr,r.job.attributes.env_vars[e]]])])))),128))])]),(0,s._)("div",ta,[aa,(0,s._)("div",oa,[na,(0,s.wy)((0,s._)("input",{type:"number",placeholder:"CPU Cores","onUpdate:modelValue":t[9]||(t[9]=e=>r.job.hardware.cpu_cores=e)},null,512),[[o.nr,r.job.hardware.cpu_cores,void 0,{number:!0}]]),(0,s.wy)((0,s._)("input",{type:"number",placeholder:"Memory","onUpdate:modelValue":t[10]||(t[10]=e=>r.job.hardware.memory=e)},null,512),[[o.nr,r.job.hardware.memory,void 0,{number:!0}]]),(0,s.wy)((0,s._)("input",{type:"text",placeholder:"GPU Model","onUpdate:modelValue":t[11]||(t[11]=e=>r.job.hardware.gpu_model=e)},null,512),[[o.nr,r.job.hardware.gpu_model]]),(0,s.wy)((0,s._)("input",{type:"text",placeholder:"GPU Architecture","onUpdate:modelValue":t[12]||(t[12]=e=>r.job.hardware.gpu_archi=e)},null,512),[[o.nr,r.job.hardware.gpu_archi]]),(0,s.wy)((0,s._)("input",{type:"number",placeholder:"GPU Memory","onUpdate:modelValue":t[13]||(t[13]=e=>r.job.hardware.gpu_mem=e)},null,512),[[o.nr,r.job.hardware.gpu_mem,void 0,{number:!0}]])]),(0,s._)("div",sa,[ra,(0,s.wy)((0,s._)("select",{id:"environment","onUpdate:modelValue":t[14]||(t[14]=e=>r.job.environment=e)},da,512),[[o.bM,r.job.environment]])]),(0,s._)("div",pa,[ma,(0,s.wy)((0,s._)("input",{type:"number",id:"priority","onUpdate:modelValue":t[15]||(t[15]=e=>r.job.priority=e)},null,512),[[o.nr,r.job.priority,void 0,{number:!0}]])])]),ba],32),r.errorMessage?((0,s.wg)(),(0,s.iD)("div",{key:0,innerHTML:r.errorMessage,class:"error-message"},null,8,ha)):(0,s.kq)("",!0)],64)}var ga=a(2026),wa={data(){return{job:{job_name:null,environment:null,priority:null,application:{application:null,version:null,entrypoint:null},attributes:{files_down:{config_id:null,data_ids:[],artifact_ids:[]},env_vars:{}},hardware:{cpu_cores:null,memory:null,gpu_model:null,gpu_archi:null,gpu_mem:null}},applications:{},versions:{},entrypoints:{},environs:{},configFiles:[],dataFiles:[],artifactFiles:[],errorMessage:null}},components:{BFormSelect:ga.KB},methods:{async fetchApplications(){const e=await ft.getApplications();this.applications=e.data},fetchVersions(){""!=this.job.application.application&&(this.versions=this.applications[this.job.application.application])},fetchEntrypoints(){""!=this.job.application.version&&(this.entrypoints=this.versions[this.job.application.version])},fetchEnvirons(){""!=this.job.application.entrypoint&&(this.environs=this.entrypoints[this.job.application.entrypoint]["app"]["env"])},async fetchInputFiles(){const e=await Re.getFiles("config/");this.configFiles=e.data.map((e=>e.path.replace("config/","")));const t=await Re.getFiles("data/");this.dataFiles=t.data.map((e=>e.path.replace("data/","")));const a=await Re.getFiles("artifact/");this.artifactFiles=a.data.map((e=>e.path.replace("artifact/","")))},submitJob(){ft.createJob(this.job).then((()=>{this.$router.push("/jobs")})).catch((e=>{422===e.response.status?this.errorMessage="Error(s) in job definition:"+e.response.data.detail.map((e=>{const t=e.loc.filter((e=>"body"!==e)).join(".");return`<br> - ${t}: ${e.msg}`})).join(""):this.errorMessage=e.response.data.detail}))}},watch:{"job.application.application":function(e,t){e!==t&&this.fetchVersions()},"job.application.version":function(e,t){e!==t&&this.fetchEntrypoints()},"job.application.entrypoint":function(e,t){e!==t&&this.fetchEnvirons()}},created(){this.fetchApplications(),this.fetchInputFiles()}};const _a=(0,M.Z)(wa,[["render",fa],["__scopeId","data-v-7d969c12"]]);var ya=_a;const va={user:null},ka={isAuthenticated:e=>!!e.user,stateUser:e=>e.user},ja={async logIn({dispatch:e},t){await Z.g.signIn({username:t.username,password:t.password}),e("viewMe")},async viewMe({commit:e}){let{data:t}=await n.Z.get("user");await e("setUser",t)},async logOut({commit:e}){await Z.g.signOut(),await e("logout",null)},async forgotPassword(e,t){await Z.g.forgotPassword(t)},async forgotPasswordSubmit(e,t){await Z.g.forgotPasswordSubmit(t.username,t.code,t.password)},async register(e,t){await Z.g.signUp({username:t.username,password:t.password,attributes:{email:t.username}})},async sendConfirmationCode(e,t){await Z.g.resendSignUp(t)},async verify(e,t){await Z.g.confirmSignUp(t.username,t.code)}},Ca={setUser(e,t){e.user=t},logout(e,t){e.user=t}};var Da={state:va,getters:ka,actions:ja,mutations:Ca},Ua=(0,c.MT)({modules:{users:Da}});const Fa=[{path:"/",name:"Home",component:W},{path:"/register",name:"Register",component:oe},{path:"/confirm-email/:username",name:"ConfirmEmail",component:de},{path:"/login",name:"Login",component:ve},{path:"/forgot-password",name:"ForgotPassword",component:Je},{path:"/files",name:"Files",component:Ke,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:st,meta:{requiresAuth:!0}},{path:"/jobs",name:"Jobs",component:Vt,meta:{requiresAuth:!0}},{path:"/jobs/new",name:"JobCreation",component:ya,meta:{requiresAuth:!0}}],Ma=(0,u.p7)({history:(0,u.PO)("/DECODE_Cloud_UserFrontend/"),routes:Fa});Ma.beforeEach(((e,t,a)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(Ua.getters.isAuthenticated)return void a();a("/login")}else a()}));var Va=Ma;const Ea={NODE_ENV:"production",BASE_URL:"/DECODE_Cloud_UserFrontend/"}.API_URL||"https://dev.decodeapi.arthur-jaques.de";async function Pa(){try{let e=await n.Z.get("/access_info"),t=e.data.cognito;J.d.configure({Auth:{userPoolId:t.user_pool_id,userPoolWebClientId:t.client_id,region:t.region,authenticationFlowType:"USER_PASSWORD_AUTH"}}),n.Z.interceptors.request.use((async e=>{try{const t=await Z.g.currentSession(),a=t.getIdToken().getJwtToken();e.headers.Authorization=`Bearer ${a}`}catch(t){return await Ua.dispatch("logOut"),Va.push("/login"),Promise.reject(t)}return e}),(async e=>e.response&&401===e.response.status?(await Ua.dispatch("logOut"),Va.push("/login"),Promise.reject(e)):Promise.reject(e)));const a=(0,o.ri)(I);a.use(Va),a.use(Ua),a.mount("#app")}catch(e){console.error("Error during app initialization:",e)}}n.Z.defaults.baseURL=Ea,Pa()},6249:function(){}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,s){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(o);c<r.length;c++)s=r[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},o=self["webpackChunkDECODE_Cloud_UserFrontend"]=self["webpackChunkDECODE_Cloud_UserFrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(6302)}));o=a.O(o)})();
//# sourceMappingURL=app.d717bf91.js.map