"use strict";(self.webpackChunksimple_auth=self.webpackChunksimple_auth||[]).push([[947],{947:(Z,a,i)=>{i.r(a),i.d(a,{UserProfileModule:()=>U});var d=i(2369),t=i(8256),c=i(2340),u=i(529);let m=(()=>{class e{constructor(o){this.httpClient=o,this.url=c.N.apiURL}getFeedByUsername(o){return this.httpClient.get(this.url+"/user/get-profile/"+o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(u.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=i(5808),l=i(6895),g=i(9086);function p(e,n){if(1&e&&(t.TgZ(0,"div",25)(1,"div",26)(2,"div",27),t._UZ(3,"img",28),t.TgZ(4,"div",29)(5,"div")(6,"span"),t._uU(7),t.qZA(),t.TgZ(8,"p",30),t._uU(9),t.ALo(10,"date"),t.qZA()()()(),t.TgZ(11,"div")(12,"span"),t._uU(13),t.qZA()()()()),2&e){const o=n.$implicit,r=t.oxw().ngIf;t.xp6(7),t.Oqu(r.username),t.xp6(2),t.Oqu(t.Dn7(10,3,o.inserted_at,"short","-0600")),t.xp6(4),t.Oqu(o.content)}}const h=function(e){return["..",e]};function f(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10),t._UZ(5,"img",11),t.qZA()(),t.TgZ(6,"div",12)(7,"a",13),t._uU(8),t.qZA()()()(),t.TgZ(9,"div",14)(10,"div",9)(11,"nav",15)(12,"div",16)(13,"div",17)(14,"button",18),t._uU(15," Home "),t.qZA(),t.TgZ(16,"button",19),t._uU(17," Amigos "),t.qZA(),t.TgZ(18,"button",20),t._uU(19," Ajuda "),t.qZA(),t.TgZ(20,"button",21),t.NdJ("click",function(){t.CHM(o),t.oxw();const x=t.MAs(8);return t.KtG(x.logout())}),t._uU(21," Sair "),t.qZA()()()()(),t.TgZ(22,"div")(23,"div",22),t.YNc(24,p,14,7,"div",23),t.qZA()()(),t.TgZ(25,"div",24),t._uU(26,"Will be something-----------"),t.qZA()()}if(2&e){const o=n.ngIf;t.xp6(7),t.Q6J("routerLink",t.VKq(3,h,o.username)),t.xp6(1),t.Oqu(o.username),t.xp6(16),t.Q6J("ngForOf",o.posts)}}const v=[{path:"",component:(()=>{class e{constructor(o,r){this.userProfileService=o,this.activatedRoute=r}ngOnInit(){this.userName=this.activatedRoute.snapshot.params.userName,this.loadProfile()}loadProfile(){this.postData=this.userProfileService.getFeedByUsername(this.userName)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m),t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-profile"]],decls:9,vars:3,consts:[[1,"sticky-top"],[1,"navbar","navbar-light","bg-dark","rounded-top",2,"margin-bottom","-1px"],[1,"ms-2","navbar-brand","text-light"],["class","min-width-80",4,"ngIf"],[1,"mt-5"],["menuFixo",""],[1,"min-width-80"],[1,"text-white","d-flex","flex-row","bg-dark",2,"height","16 0px"],[1,"row","container-fluid"],[1,"col-sm-3"],[1,"",2,"z-index","1","margin-bottom","-40%","padding-bottom","20%"],["src","https://www.w3schools.com/howto/img_avatar2.png","alt","","height","200","width","200",1,"img-thumbnail","rounded-circle","border","border-2","border-dark"],[1,"col-sm-8","fs-1","text-end","text-sm-start",2,"margin-top","5%"],[1,"text-decoration-none","text-white",3,"routerLink"],[1,"d-flex","mt-5","pt-5"],[1,"bg-light"],[1,"d-none","d-sm-block"],[1,"bg-white","d-flex","flex-column","pt-2","gap-2container"],["routerLink","/dashboard",1,"btn","btn-light","fs-4","rounded-pill"],["routerLink","/dashboard/friends",1,"btn","btn-light","fs-4","rounded-pill"],["onclick","location.href='https://github.com/rodriguesrafaelm/simple_angular_auth'",1,"btn","btn-light","fs-4","rounded-pill"],[1,"btn","btn-light","fs-4","rounded-pill","mb-2",3,"click"],[1,"mt-2","mb-2","ms-2","col-sm-12"],["class","card",4,"ngFor","ngForOf"],[1,"col-sm-2","d-none","d-xl-block"],[1,"card"],[1,"card-body","bg-light"],[1,"d-flex","align-items-center"],["src","https://www.w3schools.com/howto/img_avatar2.png","alt","","height","50","width","50",1,"img-thumbnail","rounded-circle"],[1,""],[1,"tx-10","text-muted"]],template:function(o,r){1&o&&(t.TgZ(0,"header",0)(1,"nav",1)(2,"a",2),t._uU(3," ByteSocial "),t.qZA()()(),t.YNc(4,f,27,5,"div",3),t.ALo(5,"async"),t.TgZ(6,"div",4),t._UZ(7,"app-menu-fixo",null,5),t.qZA()),2&o&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,r.postData)))},dependencies:[l.sg,l.O5,s.rH,s.yS,g.A,l.Ov,l.uU],styles:["body[_ngcontent-%COMP%]{background:#eee}#text[_ngcontent-%COMP%]{resize:none;margin-bottom:10px}.min-width-80[_ngcontent-%COMP%]{min-width:80vw}.min-height-12vw[_ngcontent-%COMP%]{min-height:12vw}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,b,d.DashboardModule]}),e})()}}]);