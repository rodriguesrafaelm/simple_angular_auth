"use strict";(self.webpackChunksimple_auth=self.webpackChunksimple_auth||[]).push([[592],{2369:(v,p,r)=>{r.r(p),r.d(p,{DashboardModule:()=>U});var t=r(8256);let m=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-friends"]],decls:3,vars:0,consts:[[1,"d-flex","justify-content-center","col-12"],[1,"mt-2","mb-2","ms-2","card"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"COMPONENTE DE AMIGOS EM CONSTRU\xc7\xc3O"),t.qZA()())}}),o})();var d=r(620),u=r(5808),i=r(6895),a=r(433),c=r(9086);function l(o,n){if(1&o&&(t.TgZ(0,"span",26),t._uU(1),t.qZA()),2&o){const e=n.ngIf;t.xp6(1),t.Oqu(e.username)}}const h=function(){return["posts"]},b=function(){return["friends"]};let Z=(()=>{class o{constructor(e,s){this.usuarioService=e,this.router=s,this.user$=this.usuarioService.retornaUsuario(),this.post=""}ngOnInit(){}postar(){this.usuarioService.publicarPost(this.post).subscribe({next:()=>this.router.navigate(["dashboard/posts"]).then(()=>window.location.reload())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.i),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:38,vars:8,consts:[[1,"sticky-top"],[1,"navbar","navbar-light","bg-dark","rounded"],[1,"ms-2","navbar-brand","text-light"],[1,"min-width-80"],[1,"row","mt-5","text-center","container-fluid"],[1,"col-sm-3"],[1,"d-flex","justify-content-center"],["src","https://www.w3schools.com/howto/img_avatar2.png","alt","","height","150","width","150",1,"img-thumbnail","rounded-circle","border","border-2","border-dark"],["class","fs-3 mt-2",4,"ngIf"],[1,"ms-2","col-sm-8","mt-5"],["accept-charset","UTF-8",3,"ngSubmit"],["postForm","ngForm"],["id","text","name","post","placeholder","Escreva algo aqui...","rows","5",1,"form-control",3,"ngModel","ngModelChange"],[1,"position-relative"],["button","","type","submit",1,"btn","btn-dark","position-absolute","end-0"],[1,"d-flex","mt-5"],[1,"bg-light"],[1,"d-none","d-sm-block"],[1,"bg-white","d-flex","flex-column","pt-2","gap-2container"],[1,"btn","btn-light","fs-4","rounded-pill",3,"routerLink"],["onclick","location.href='https://github.com/rodriguesrafaelm/simple_angular_auth'",1,"btn","btn-light","fs-4","rounded-pill"],[1,"btn","btn-light","fs-4","rounded-pill","mb-2",3,"click"],[1,"col-sm-8"],[1,"col-sm-1","d-none","d-xl-block"],[1,"mt-5"],["menuFixo",""],[1,"fs-3","mt-2"]],template:function(e,s){if(1&e){const D=t.EpF();t.TgZ(0,"header",0)(1,"nav",1)(2,"a",2),t._uU(3," ByteSocial "),t.qZA()()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t._UZ(8,"img",7),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,l,2,1,"span",8),t.ALo(11,"async"),t.qZA()(),t.TgZ(12,"div",9)(13,"form",10,11),t.NdJ("ngSubmit",function(){return s.postar()}),t.TgZ(15,"textarea",12),t.NdJ("ngModelChange",function(g){return s.post=g}),t.qZA(),t.TgZ(16,"div",13)(17,"button",14),t._uU(18," Publicar "),t.qZA()()()()(),t.TgZ(19,"div",15)(20,"div",5)(21,"nav",16)(22,"div",17)(23,"div",18)(24,"button",19),t._uU(25," Home "),t.qZA(),t.TgZ(26,"button",19),t._uU(27," Amigos "),t.qZA(),t.TgZ(28,"button",20),t._uU(29," Ajuda "),t.qZA(),t.TgZ(30,"button",21),t.NdJ("click",function(){t.CHM(D);const g=t.MAs(37);return t.KtG(g.logout())}),t._uU(31," Sair "),t.qZA()()()()(),t.TgZ(32,"div",22),t._UZ(33,"router-outlet"),t.qZA(),t._UZ(34,"div",23),t.qZA()(),t.TgZ(35,"div",24),t._UZ(36,"app-menu-fixo",null,25),t.qZA()}2&e&&(t.xp6(10),t.Q6J("ngIf",t.lcZ(11,4,s.user$)),t.xp6(5),t.Q6J("ngModel",s.post),t.xp6(9),t.Q6J("routerLink",t.DdM(6,h)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,b)))},dependencies:[i.O5,u.lC,u.rH,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F,c.A,i.Ov],styles:["body[_ngcontent-%COMP%]{background:#eee}#text[_ngcontent-%COMP%]{resize:none;margin-bottom:10px}.min-width-80[_ngcontent-%COMP%]{min-width:80vw}"]}),o})();var x=r(4004),_=r(2340),C=r(529);let T=(()=>{class o{constructor(e){this.httpClient=e,this.url=_.N.apiURL}getFeed(e){return this.httpClient.get(this.url+"/api/user/get-post/"+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function A(o,n){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._UZ(3,"img",5),t.TgZ(4,"div",6)(5,"div")(6,"span")(7,"div",7)(8,"a",8),t._uU(9),t.qZA()()(),t.TgZ(10,"p",9),t._uU(11),t.ALo(12,"date"),t.qZA()()()(),t.TgZ(13,"div")(14,"span"),t._uU(15),t.qZA()()()()),2&o){const e=n.$implicit,s=t.oxw();t.xp6(8),t.MGl("routerLink","/user/",s.postData.username,""),t.xp6(1),t.Oqu(s.postData.username),t.xp6(2),t.Oqu(t.Dn7(12,4,e.inserted_at,"short","-0600")),t.xp6(4),t.Oqu(e.content)}}const M=[{path:"",component:Z,children:[{path:"",redirectTo:"posts",pathMatch:"full"},{path:"posts",component:(()=>{class o{constructor(e,s){this.postsService=e,this.usuarioService=s}ngOnInit(){this.startPosts()}startPosts(){this.usuarioService.retornaUsuario().pipe((0,x.U)(e=>e.sub?e.sub:"")).subscribe({next:e=>this.getUserFeed(e)})}getUserFeed(e){this.postsService.getFeed(e).subscribe({next:s=>this.postData=s})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T),t.Y36(d.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-posts"]],decls:2,vars:1,consts:[[1,"mt-2","mb-2","ms-2"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body","bg-light"],[1,"d-flex","align-items-center"],["src","https://www.w3schools.com/howto/img_avatar2.png","alt","","height","50","width","50",1,"img-thumbnail","rounded-circle"],[1,""],[1,"fs-5"],[1,"text-decoration-none","text-dark",3,"routerLink"],[1,"tx-10","text-muted"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,A,16,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",null==s.postData?null:s.postData.posts))},dependencies:[i.sg,u.yS,i.uU]}),o})()},{path:"friends",component:m}]}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(M),u.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,F,a.u5]}),o})()},9086:(v,p,r)=>{r.d(p,{A:()=>u});var t=r(8256),m=r(620),d=r(5808);let u=(()=>{class i{constructor(c,l){this.usuarioService=c,this.router=l}ngOnInit(){}logout(){this.usuarioService.logout(),this.router.navigate([""])}}return i.\u0275fac=function(c){return new(c||i)(t.Y36(m.i),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-menu-fixo"]],decls:9,vars:0,consts:[[1,"fixed-bottom","col-12","d-flex","justify-content-around","d-block","d-sm-none","bg-secondary","pb-3","pt-3"],["routerLink","/dashboard/posts","href",""],["src","assets/img/house.svg","height","26px","width","26px"],["routerLink","/dashboard/friends"],["src","assets/img/people.svg","height","26px","width","26px"],["href","https://github.com/rodriguesrafaelm/simple_angular_auth","target","_blank"],["src","assets/img/question.svg","height","26px","width","26px"],["href","",3,"click"],["src","assets/img/box-arrow-right.svg","alt","","height","26px","width","26px"]],template:function(c,l){1&c&&(t.TgZ(0,"nav",0)(1,"a",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"a",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"a",7),t.NdJ("click",function(){return l.logout()}),t._UZ(8,"img",8),t.qZA()())},dependencies:[d.yS]}),i})()}}]);