var tns=function(){var t=window,Ti=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Ei=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function ki(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ni(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Bi(t,e,n,i){return i&&t.setItem(e,n),n}function Li(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Di(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ii(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Oi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Si(t){return("insertRule"in t?t.cssRules:t.rules).length}function Hi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Ri=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Pi=i?function(t,e){Ri(t,e)||t.classList.add(e)}:function(t,e){Ri(t,e)||(t.className+=" "+e)},Wi=i?function(t,e){Ri(t,e)&&t.classList.remove(e)}:function(t,e){Ri(t,e)&&(t.className=t.className.replace(e,""))};function zi(t,e){return t.hasAttribute(e)}function qi(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function ji(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Fi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Qi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Vi(t,e){"none"===t.style.display&&(t.style.display="")}function Xi(t){return"none"!==window.getComputedStyle(t).display}function Yi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Ki(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Ui(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Gi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Ji(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var _i=function(p){p=ki({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},p||{});var L=document,m=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,h=38,y=39,g=40,e={},n=p.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=m.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Ni(e.tC):Bi(e,"tC",function(){var t=document,e=Li(),n=Di(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ii(e,n):i.remove(),a}(),n),A=e.tPL?Ni(e.tPL):Bi(e,"tPL",function(){var t,e=document,n=Li(),i=Di(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ii(n,i):a.remove(),t}(),n),D=e.tMQ?Ni(e.tMQ):Bi(e,"tMQ",(r=document,o=Li(),x=Di(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Ii(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Ni(e.tTf):Bi(e,"tTf",Yi("transform"),n),E=e.t3D?Ni(e.t3D):Bi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Li(),a=Di(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ii(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),k=e.tTDu?Ni(e.tTDu):Bi(e,"tTDu",Yi("transitionDuration"),n),N=e.tTDe?Ni(e.tTDe):Bi(e,"tTDe",Yi("transitionDelay"),n),B=e.tADu?Ni(e.tADu):Bi(e,"tADu",Yi("animationDuration"),n),I=e.tADe?Ni(e.tADe):Bi(e,"tADe",Yi("animationDelay"),n),O=e.tTE?Ni(e.tTE):Bi(e,"tTE",Ki(k,"Transition"),n),S=e.tAE?Ni(e.tAE):Bi(e,"tAE",Ki(B,"Animation"),n),H=m.console&&"function"==typeof m.console.warn,R=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],P={},W=R.length;W--;){var z=R[W];if("string"==typeof p[z]){var q=p[z],j=L.querySelector(q);if(P[z]=q,!j||!j.nodeName)return void(H&&console.warn("Can't find",p[z]));p[z]=j}}if(!(p.container.children.length<1)){var F=p.responsive,Q=p.nested,V="carousel"===p.mode;if(F){0 in F&&(p=ki(p,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(p),!V){p.axis="horizontal",p.slideBy="page",p.edgePadding=!1;var U=p.animateIn,G=p.animateOut,J=p.animateDelay,_=p.animateNormal}var Z,$="horizontal"===p.axis,tt=L.createElement("div"),et=L.createElement("div"),nt=p.container,it=nt.parentNode,at=nt.outerHTML,rt=nt.children,ot=rt.length,st=vn(),ut=!0;F&&Ln();var lt,ct,ft,dt,vt,pt,mt,ht=p.autoWidth,yt=hn("fixedWidth"),gt=hn("edgePadding"),xt=hn("gutter"),bt=pn(),wt=ht?1:Math.floor(hn("items")),Ct=hn("slideBy"),Mt=p.viewportMax||p.fixedWidthViewportWidth,At=hn("arrowKeys"),Tt=hn("speed"),Et=p.rewind,kt=!Et&&p.loop,Nt=hn("autoHeight"),Bt=hn("controls"),Lt=hn("controlsText"),Dt=hn("nav"),It=hn("touch"),Ot=hn("mouseDrag"),St=hn("autoplay"),Ht=hn("autoplayTimeout"),Rt=hn("autoplayText"),Pt=hn("autoplayHoverPause"),Wt=hn("autoplayResetOnVisibility"),zt=(mt=document.createElement("style"),pt&&mt.setAttribute("media",pt),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),qt=p.lazyload,jt=[],Ft=kt?(dt=function(){{if(ht||yt&&!Mt)return ot-1;var t=yt?"fixedWidth":"items",e=[];if((yt||p[t]<ot)&&e.push(p[t]),F)for(var n in F){var i=F[n][t];i&&(yt||i<ot)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-ot)/2):4*dt-ot,vt=Math.max(dt,vt),mn("edgePadding")?vt+1:vt):0,Qt=V?ot+2*Ft:ot+Ft,Vt=!(!yt&&!ht||kt),Xt=yt?_n():null,Yt=!V||!kt,Kt=$?"left":"top",Ut="",Gt="",Jt=yt?function(){return Math.floor(-Xt/(yt+xt))+1}:ht?function(){for(var t=Qt,e=t-1;t--;)lt[t]>-Xt&&(e=t);return e}:function(){return kt||V?Math.max(0,Qt-Math.ceil(wt)):Qt-1},_t=fn(hn("startIndex")),Zt=_t,$t=0,te=ht?null:Jt(),ee=p.swipeAngle,ne=!ee||"?",ie=!1,ae=p.onInit,re=new Ji,oe=" tns-slider tns-"+p.mode,se=nt.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),ue=hn("disable"),le=!1,ce=p.freezable,fe=!(!ce||ht)&&Bn(),de=!1,ve={click:oi,keydown:function(t){switch((t=pi(t)).keyCode){case v:case h:case l:Oe.disabled||oi(t,-1);break;case y:case g:case c:Se.disabled||oi(t,1);break;case d:ri("first",t);break;case f:ri("last",t)}}},pe={click:function(t){ie&&ai();var e=(t=pi(t)).target||t.srcElement;for(;e!==We&&!zi(e,"data-nav");)e=e.parentNode;zi(e,"data-nav")&&ri(Fe=[].indexOf.call(Pe,e),t)},keydown:function(t){var e=L.activeElement;if(!zi(e,"data-nav"))return;var n=(t=pi(t)).keyCode,i=[].indexOf.call(Pe,e),a=qe.length,r=qe.indexOf(i);p.navContainer&&(a=ot,r=i);function o(t){return p.navContainer?t:qe[t]}switch(n){case v:case l:0<r&&vi(Pe[o(r-1)]);break;case h:case d:0<r&&vi(Pe[o(0)]);break;case y:case c:r<a-1&&vi(Pe[o(r+1)]);break;case g:case f:r<a-1&&vi(Pe[o(a-1)]);break;case s:case u:ri(Fe=i,t)}}},me={mouseover:function(){Ke&&(ui(),Ue=!0)},mouseout:function(){Ue&&(si(),Ue=!1)}},he={visibilitychange:function(){L.hidden?Ke&&(ui(),Je=!0):Je&&(si(),Je=!1)}},ye={keydown:function(t){switch((t=pi(t)).keyCode){case v:oi(t,-1);break;case y:oi(t,1)}}},ge={touchstart:gi,touchmove:xi,touchend:wi,touchcancel:wi},xe={mousedown:gi,mousemove:xi,mouseup:wi,mouseleave:wi},be=mn("controls"),we=mn("nav"),Ce=!!ht||p.navAsThumbnails,Me=mn("autoplay"),Ae=mn("touch"),Te=mn("mouseDrag"),Ee="tns-slide-active",ke="tns-complete",Ne={load:Rn,error:Rn};if(be)var Be,Le,De=p.controlsContainer,Ie=p.controlsContainer?p.controlsContainer.outerHTML:"",Oe=p.prevButton,Se=p.nextButton,He=p.prevButton?p.prevButton.outerHTML:"",Re=p.nextButton?p.nextButton.outerHTML:"";if(we)var Pe,We=p.navContainer,ze=p.navContainer?p.navContainer.outerHTML:"",qe=[],je=qe,Fe=-1,Qe=dn(),Ve=Qe,Xe="tns-nav-active";if(Me)var Ye,Ke,Ue,Ge,Je,_e="forward"===p.autoplayDirection?1:-1,Ze=p.autoplayButton,$e=p.autoplayButton?p.autoplayButton.outerHTML:"",tn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ae||Te)var en,nn={},an={},rn=!1,on=0,sn=$?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};ht||cn(ue||fe),T&&(Kt=T,Ut="translate",E?(Ut+=$?"3d(":"3d(0px, ",Gt=$?", 0px, 0px)":", 0px)"):(Ut+=$?"X(":"Y(",Gt=")")),function(){F&&Ln();!function(){mn("gutter");tt.className="tns-outer",et.className="tns-inner",tt.id=se+"-ow",et.id=se+"-iw",Nt&&(et.className+=" tns-ah");""===nt.id&&(nt.id=se);if(oe+=A||ht?" tns-subpixel":" tns-no-subpixel",oe+=M?" tns-calc":" tns-no-calc",oe+=" tns-"+p.axis,nt.className+=oe,V){var t=L.createElement("div");t.className="tns-ovh",tt.appendChild(t),t.appendChild(et)}else tt.appendChild(et);it.insertBefore(tt,nt),et.appendChild(nt)}();for(var t=0;t<ot;t++){var e=rt[t];e.id||(e.id=se+"-item"+t),Pi(e,"tns-item"),!V&&_&&Pi(e,_),ji(e,{"aria-hidden":"true",tabindex:"-1"})}if(Ft){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=Ft;a--;){var r=a%ot,o=rt[r].cloneNode(!0);if(Fi(o,"id"),i.insertBefore(o,i.firstChild),V){var s=rt[ot-1-r].cloneNode(!0);Fi(s,"id"),n.appendChild(s)}}nt.insertBefore(n,nt.firstChild),nt.appendChild(i),rt=nt.children}(function(){for(var t=_t,e=_t+Math.min(ot,wt);t<e;t++){var n=rt[t];ji(n,{"aria-hidden":"false"}),Fi(n,["tabindex"]),Pi(n,Ee),V||(n.style.left=100*(t-_t)/wt+"%",Pi(n,U),Wi(n,_))}V&&$&&(A||ht?(Oi(zt,"#"+se+" > .tns-item","font-size:"+m.getComputedStyle(rt[0]).fontSize+";",Si(zt)),Oi(zt,"#"+se,"font-size:0;",Si(zt))):Hi(rt,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Qt+")":100*n/Qt+"%")}));if(D){var i=yn(p.edgePadding,p.gutter,p.fixedWidth,p.speed);Oi(zt,"#"+se+"-iw",i,Si(zt)),V&&(i=$&&!ht?"width:"+gn(p.fixedWidth,p.gutter,p.items)+";":"",k&&(i+=Cn(Tt)),Oi(zt,"#"+se,i,Si(zt))),i=$&&!ht?xn(p.fixedWidth,p.gutter,p.items):"",p.gutter&&(i+=bn(p.gutter)),V||(k&&(i+=Cn(Tt)),B&&(i+=Mn(Tt))),i&&Oi(zt,"#"+se+" > .tns-item",i,Si(zt))}else{et.style.cssText=yn(gt,xt,yt),V&&$&&!ht&&(nt.style.width=gn(yt,xt,wt));var i=$&&!ht?xn(yt,xt,wt):"";xt&&(i+=bn(xt)),i&&Oi(zt,"#"+se+" > .tns-item",i,Si(zt))}if(F&&D)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=ht?null:hn("items",a),c=hn("fixedWidth",a),f=hn("speed",a),d=hn("edgePadding",a),v=hn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+se+"-iw{"+yn(d,v,c,f)+"}"),V&&$&&!ht&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+gn(c,v,l)+";"),k&&"speed"in r&&(s+=Cn(f)),s&&(s="#"+se+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!V&&"items"in r)&&(u+=xn(c,v,l)),"gutter"in r&&(u+=bn(v)),!V&&"speed"in r&&(k&&(u+=Cn(f)),B&&(u+=Mn(f))),u&&(u="#"+se+" > .tns-item{"+u+"}"),(i=o+s+u)&&zt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",zt.cssRules.length)}})(),An()}();var un=kt?V?function(){var t=$t,e=te;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),Ft&&(e<_t?_t-=ot:_t<t&&(_t+=ot))}:function(){if(te<_t)for(;$t+ot<=_t;)_t-=ot;else if(_t<$t)for(;_t<=te-ot;)_t+=ot}:function(){_t=Math.max($t,Math.min(te,_t))},ln=V?function(){var e,n,i,a,t,r,o,s,u,l,c;Gn(nt,""),k||!Tt?(ti(),Tt&&Xi(nt)||ai()):(e=nt,n=Kt,i=Ut,a=Gt,t=Zn(),r=Tt,o=ai,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),$||Ci()}:function(){jt=[];var t={};t[O]=t[S]=ai,Gi(rt[Zt],t),Ui(rt[_t],t),ei(Zt,U,G,!0),ei(_t,_,U),O&&S&&Tt&&Xi(nt)||ai()};return{version:"2.8.7",getInfo:Ai,events:re,goTo:ri,play:function(){St&&!Ke&&(ci(),Ge=!1)},pause:function(){Ke&&(fi(),Ge=!0)},isOn:ut,updateSliderHeight:Fn,refresh:An,destroy:function(){if(zt.disabled=!0,zt.ownerNode&&zt.ownerNode.remove(),Gi(m,{resize:kn}),At&&Gi(L,ye),De&&Gi(De,ve),We&&Gi(We,pe),Gi(nt,me),Gi(nt,he),Ze&&Gi(Ze,{click:di}),St&&clearInterval(Ye),V&&O){var t={};t[O]=ai,Gi(nt,t)}It&&Gi(nt,ge),Ot&&Gi(nt,xe);var r=[at,Ie,He,Re,ze,$e];for(var e in R.forEach(function(t,e){var n="container"===t?tt:p[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],p[t]=i?i.nextElementSibling:a.firstElementChild}}),R=U=G=J=_=$=tt=et=nt=it=at=rt=ot=Z=st=ht=yt=gt=xt=bt=wt=Ct=Mt=At=Tt=Et=kt=Nt=zt=qt=lt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=pe=me=he=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=ke=Ne=ct=Bt=Lt=De=Ie=Oe=Se=Be=Le=Dt=We=ze=Pe=qe=je=Fe=Qe=Ve=Xe=St=Ht=_e=Rt=Pt=Ze=$e=Wt=tn=Ye=Ke=Ue=Ge=Je=nn=an=en=rn=on=sn=It=Ot=null,this)"rebuild"!==e&&(this[e]=null);ut=!1},rebuild:function(){return _i(ki(p,P))}}}function cn(t){t&&(Bt=Dt=It=Ot=At=St=Pt=Wt=!1)}function fn(t){return t=t?Math.max(0,Math.min(kt?ot-1:ot-wt,t)):0,V?t+Ft:t}function dn(t){for(null==t&&(t=_t),V&&(t-=Ft);t<0;)t+=ot;return Math.floor(t%ot)}function vn(){return m.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function pn(){return function t(e){return e.clientWidth||t(e.parentNode)}(it)-(2*gt-xt)}function mn(t){if(p[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function hn(t,e){if(null==e&&(e=st),"items"===t&&yt)return Math.floor(bt/(yt+xt))||1;var n=p[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=hn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function yn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=$?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+($?o+" 0 0":"0 "+o+" 0")+";"}return k&&i&&(a+=Cn(i)),a}function gn(t,e,n){return t?(t+e)*Qt+"px":M?M+"("+100*Qt+"% / "+n+")":100*Qt/n+"%"}function xn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Qt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function bn(t){var e="";!1!==t&&(e=($?"padding-":"margin-")+($?"right":"bottom")+": "+t+"px;");return e}function wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Cn(t){return wn(k,18)+"transition-duration:"+t/1e3+"s;"}function Mn(t){return wn(B,17)+"animation-duration:"+t/1e3+"s;"}function An(){if(mn("autoHeight")||ht||!$){var t=nt.querySelectorAll("img");Hi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(Ui(t,Ne),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):Pi(t,ke)}),Ti(function(){zn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){if(ct=!0,ht){var e=kt?_t:ot-1;!function t(){rt[e-1].getBoundingClientRect().right.toFixed(2)===rt[e].getBoundingClientRect().left.toFixed(2)?n():setTimeout(function(){t()},16)}()}else n();function n(){$&&!ht||(Qn(),ht?(Xt=_n(),ce&&(fe=Bn()),te=Jt(),cn(ue||fe)):Ci()),V&&$n(),Tn(),En()}})})}else V&&$n(),Tn(),En()}function Tn(){if(Me){var t=St?"stop":"start";Ze?ji(Ze,{"data-action":t}):p.autoplayButtonOutput&&(tt.insertAdjacentHTML("afterbegin",'<button data-action="'+t+'" type="button">'+tn[0]+t+tn[1]+Rt[0]+"</button>"),Ze=tt.querySelector("[data-action]")),Ze&&Ui(Ze,{click:di}),St&&(ci(),Pt&&Ui(nt,me),Wt&&Ui(nt,he))}if(we){var e=V?Ft:0;if(We){ji(We,{"aria-label":"Carousel Pagination"}),Pe=We.children;for(var n=0;n<ot;n++){var i=Pe[n];i&&ji(i,{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":rt[e+n].id})}}else{var a="",r=Ce?"":'style="display:none"';for(n=0;n<ot;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+rt[e+n].id+'" '+r+' type="button"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",tt.insertAdjacentHTML("afterbegin",a),We=tt.querySelector(".tns-nav"),Pe=We.children}if(Mi(),k){var o=k.substring(0,k.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),Oi(zt,"[aria-controls^="+se+"-item]",s,Si(zt))}ji(Pe[Qe],{tabindex:"0","aria-selected":"true"}),Pi(Pe[Qe],Xe),Ui(We,pe)}be&&(De||Oe&&Se?(De&&(Oe=De.children[0],Se=De.children[1],ji(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),ji(De.children,{"aria-controls":se,tabindex:"-1"})),ji(Oe,{"data-controls":"prev"}),ji(Se,{"data-controls":"next"})):(tt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+se+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+se+'" type="button">'+Lt[1]+"</button></div>"),De=tt.querySelector(".tns-controls"),Oe=De.children[0],Se=De.children[1]),Be=Xn(Oe),Le=Xn(Se),Un(),De?Ui(De,ve):(Ui(Oe,ve),Ui(Se,ve))),Dn()}function En(){if(V&&O){var t={};t[O]=ai,Ui(nt,t)}It&&Ui(nt,ge),Ot&&Ui(nt,xe),At&&Ui(L,ye),"inner"===Q?re.on("outerResized",function(){Nn(),re.emit("innerLoaded",Ai())}):(F||yt||ht||Nt||!$)&&Ui(m,{resize:kn}),"outer"===Q?re.on("innerLoaded",Wn):Nt&&!ue&&Wn(),Hn(),ue?Sn():fe&&On(),re.on("indexChanged",qn),"function"==typeof ae&&ae(Ai()),"inner"===Q&&re.emit("innerLoaded",Ai())}function kn(t){Ti(function(){Nn(pi(t))})}function Nn(t){if(ut){"outer"===Q&&re.emit("outerResized",Ai(t)),st=vn();var e,n=Z,i=!1;F&&(Ln(),(e=n!==Z)&&re.emit("newBreakpointStart",Ai(t)));var a,r,o,s,u=wt,l=ue,c=fe,f=At,d=Bt,v=Dt,p=It,m=Ot,h=St,y=Pt,g=Wt,x=_t;if(e){var b=yt,w=Nt,C=Lt,M=Rt;if(!D)var A=xt,T=gt}if(At=hn("arrowKeys"),Bt=hn("controls"),Dt=hn("nav"),It=hn("touch"),Ot=hn("mouseDrag"),St=hn("autoplay"),Pt=hn("autoplayHoverPause"),Wt=hn("autoplayResetOnVisibility"),e&&(ue=hn("disable"),yt=hn("fixedWidth"),Tt=hn("speed"),Nt=hn("autoHeight"),Lt=hn("controlsText"),Rt=hn("autoplayText"),Ht=hn("autoplayTimeout"),D||(gt=hn("edgePadding"),xt=hn("gutter"))),cn(ue),bt=pn(),$&&!ht||ue||(Qn(),$||(Ci(),i=!0)),(yt||ht)&&(Xt=_n(),te=Jt()),(e||yt)&&(wt=hn("items"),Ct=hn("slideBy"),(r=wt!==u)&&(yt||ht||(te=Jt()),un())),e&&ue!==l&&(ue?Sn():function(){if(!le)return;if(zt.disabled=!1,nt.className+=oe,$n(),kt)for(var t=Ft;t--;)V&&Vi(rt[t]),Vi(rt[Qt-t-1]);if(!V)for(var e=_t,n=_t+ot;e<n;e++){var i=rt[e],a=e<_t+wt?U:_;i.style.left=100*(e-_t)/wt+"%",Pi(i,a)}In(),le=!1}()),ce&&(e||yt||ht)&&(fe=Bn())!==c&&(fe?(ti(Zn(fn(0))),On()):(!function(){if(!de)return;gt&&D&&(et.style.margin="");if(Ft)for(var t="tns-transparent",e=Ft;e--;)V&&Wi(rt[e],t),Wi(rt[Qt-e-1],t);In(),de=!1}(),i=!0)),cn(ue||fe),St||(Pt=Wt=!1),At!==f&&(At?Ui(L,ye):Gi(L,ye)),Bt!==d&&(Bt?De?Vi(De):(Oe&&Vi(Oe),Se&&Vi(Se)):De?Qi(De):(Oe&&Qi(Oe),Se&&Qi(Se))),Dt!==v&&(Dt?(Vi(We),Mi()):Qi(We)),It!==p&&(It?Ui(nt,ge):Gi(nt,ge)),Ot!==m&&(Ot?Ui(nt,xe):Gi(nt,xe)),St!==h&&(St?(Ze&&Vi(Ze),Ke||Ge||ci()):(Ze&&Qi(Ze),Ke&&fi())),Pt!==y&&(Pt?Ui(nt,me):Gi(nt,me)),Wt!==g&&(Wt?Ui(L,he):Gi(L,he)),e&&(yt!==b&&(i=!0),Nt!==w&&(Nt||(et.style.height="")),Bt&&Lt!==C&&(Oe.innerHTML=Lt[0],Se.innerHTML=Lt[1]),Ze&&Rt!==M)){var E=St?1:0,k=Ze.innerHTML,N=k.length-M[E].length;k.substring(N)===M[E]&&(Ze.innerHTML=k.substring(0,N)+Rt[E])}if((a=_t!==x)&&(re.emit("indexChanged",Ai()),i=!0),r&&(a||qn(),V||function(){for(var t=_t+Math.min(ot,wt),e=Qt;e--;){var n=rt[e];_t<=e&&e<t?(Pi(n,"tns-moving"),n.style.left=100*(e-_t)/wt+"%",Pi(n,U),Wi(n,_)):n.style.left&&(n.style.left="",Pi(n,_),Wi(n,U)),Wi(n,G)}setTimeout(function(){Hi(rt,function(t){Wi(t,"tns-moving")})},300)}()),!ue&&!fe){if(e&&!D&&(gt===T&&xt===A||(et.style.cssText=yn(gt,xt,yt)),$)){V&&(nt.style.width=gn(yt,xt,wt));var B=xn(yt,xt,wt)+bn(xt);s=Si(o=zt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),Oi(zt,"#"+se+" > .tns-item",B,Si(zt))}Nt&&Wn(),i&&($n(),Zt=_t)}e&&re.emit("newBreakpointEnd",Ai(t))}}function Bn(){return yt||ht?yt?(yt+xt)*ot<=bt+2*gt:(kt?lt[ot]:Jn())<=bt+2*gt:ot<=wt}function Ln(){for(var t in Z=0,F)(t=parseInt(t))<=st&&(Z=t)}function Dn(){!St&&Ze&&Qi(Ze),!Dt&&We&&Qi(We),Bt||(De?Qi(De):(Oe&&Qi(Oe),Se&&Qi(Se)))}function In(){St&&Ze&&Vi(Ze),Dt&&We&&Vi(We),Bt&&(De?Vi(De):(Oe&&Vi(Oe),Se&&Vi(Se)))}function On(){if(!de){if(gt&&(et.style.margin="0px"),Ft)for(var t="tns-transparent",e=Ft;e--;)V&&Pi(rt[e],t),Pi(rt[Qt-e-1],t);Dn(),de=!0}}function Sn(){if(!le){if(zt.disabled=!0,nt.className=nt.className.replace(oe.substring(1),""),Fi(nt,["style"]),kt)for(var t=Ft;t--;)V&&Qi(rt[t]),Qi(rt[Qt-t-1]);if($&&V||Fi(et,["style"]),!V)for(var e=_t,n=_t+ot;e<n;e++){var i=rt[e];Fi(i,["style"]),Wi(i,U),Wi(i,_)}Dn(),le=!0}}function Hn(){if(qt&&!ue){var t=_t;if(ht)for(var e=_t+1,n=e,i=lt[_t]+bt+gt-xt;lt[e]<i;)n=++e;else n=_t+wt;for(gt&&(t-=1,ht||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Qt));t<n;t++)Hi(rt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};if(e[O]=function(t){t.stopPropagation()},Ui(t,e),!Ri(t,"loading")&&!Ri(t,"loaded")){var n=qi(t,"data-srcset");n&&(t.srcset=n),t.onload=function(){Pi(t,"loaded"),Wi(t,"loading")},t.onerror=function(){Pi(t,"failed"),Wi(t,"loading")},t.src=qi(t,"data-src"),Pi(t,"loading")}})}}function Rn(t){var e=mi(t);Pi(e,ke),Gi(e,Ne)}function Pn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)Hi(rt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Wn(){var t=Nt?Pn(_t,wt):Pn(Ft,ot);Ti(function(){zn(t,Fn)})}function zn(n,t){return ct?t():(n.forEach(function(t,e){Ri(t,ke)&&n.splice(e,1)}),n.length?void Ti(function(){zn(n,t)}):t())}function qn(){Hn(),function(){for(var t=_t+Math.min(ot,wt),e=Qt;e--;){var n=rt[e];_t<=e&&e<t?zi(n,"tabindex")&&(ji(n,{"aria-hidden":"false"}),Fi(n,["tabindex"]),Pi(n,Ee)):(zi(n,"tabindex")||ji(n,{"aria-hidden":"true",tabindex:"-1"}),Ri(n,Ee)&&Wi(n,Ee))}}(),Un(),Mi(),function(){if(Dt&&(Qe=-1!==Fe?Fe:dn(),Fe=-1,Qe!==Ve)){var t=Pe[Ve],e=Pe[Qe];ji(t,{tabindex:"-1","aria-selected":"false"}),ji(e,{tabindex:"0","aria-selected":"true"}),Wi(t,Xe),Pi(e,Xe),Ve=Qe}}()}function jn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)n.push(rt[i].offsetHeight);return Math.max.apply(null,n)}function Fn(){var t=Nt?jn(_t,wt):jn(Ft,ot);et.style.height!==t&&(et.style.height=t+"px")}function Qn(){lt=[0];for(var t,e=$?"left":"top",n=rt[0].getBoundingClientRect()[e],i=1;i<Qt;i++)t=rt[i].getBoundingClientRect()[e],lt.push(t-n)}function Vn(t){return t.nodeName.toLowerCase()}function Xn(t){return"button"===Vn(t)}function Yn(t){return"true"===t.getAttribute("aria-disabled")}function Kn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Un(){if(Bt&&!Et&&!kt){var t=Be?Oe.disabled:Yn(Oe),e=Le?Se.disabled:Yn(Se),n=_t<=$t,i=!Et&&te<=_t;n&&!t&&Kn(Be,Oe,!0),!n&&t&&Kn(Be,Oe,!1),i&&!e&&Kn(Le,Se,!0),!i&&e&&Kn(Le,Se,!1)}}function Gn(t,e){k&&(t.style[k]=e)}function Jn(){return yt?(yt+xt)*Qt:lt[Qt-1]+rt[Qt-1].getBoundingClientRect().width}function _n(){var t=bt-(Jn()-xt);return gt&&(t+=gt-xt),0<t&&(t=0),t}function Zn(t){var e;(null==t&&(t=_t),$&&!ht)?e=yt?-(yt+xt)*t:100*-t/(T?Qt:wt):e=-lt[t];return Vt&&(e=Math.max(e,Xt)),e+=!$||ht||yt?"px":"%"}function $n(t){Gn(nt,"0s"),ti(t)}function ti(t){null==t&&(t=Zn()),nt.style[Kt]=Ut+t+Gt}function ei(t,e,n,i){var a=t+wt;kt||(a=Math.min(a,Qt));for(var r=t;r<a;r++){var o=rt[r];i||(o.style.left=100*(r-_t)/wt+"%"),J&&N&&(o.style[N]=o.style[I]=J*(r-t)/1e3+"s"),Wi(o,e),Pi(o,n),i&&jt.push(o)}}function ni(t,e){Yt&&un(),(_t!==Zt||e)&&(re.emit("indexChanged",Ai()),re.emit("transitionStart",Ai()),Nt&&Wn(),Ke&&t&&0<=["click","keydown"].indexOf(t.type)&&fi(),ie=!0,ln())}function ii(t){return t.toLowerCase().replace(/-/g,"")}function ai(t){if(V||ie){if(re.emit("transitionEnd",Ai(t)),!V&&0<jt.length)for(var e=0;e<jt.length;e++){var n=jt[e];n.style.left="",I&&N&&(n.style[I]="",n.style[N]=""),Wi(n,G),Pi(n,_)}if(!t||!V&&t.target.parentNode===nt||t.target===nt&&ii(t.propertyName)===ii(Kt)){if(!Yt){var i=_t;un(),_t!==i&&(re.emit("indexChanged",Ai()),$n())}"inner"===Q&&re.emit("innerLoaded",Ai()),ie=!1,Zt=_t}}}function ri(t,e){if(!fe)if("prev"===t)oi(e,-1);else if("next"===t)oi(e,1);else{ie&&ai();var n=dn(),i=0;if("first"===t?i=-n:"last"===t?i=V?ot-wt-n:ot-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ot-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=$t<=_t+i-ot?ot*a:2*ot*a*-1}_t+=i,V&&kt&&(_t<$t&&(_t+=ot),te<_t&&(_t-=ot)),dn(_t)!==dn(Zt)&&ni(e)}}function oi(t,e){var n;if(ie&&ai(),!e){for(var i=(t=pi(t)).target||t.srcElement;i!==De&&[Oe,Se].indexOf(i)<0;)i=i.parentNode;var a=[Oe,Se].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Et){if(_t===$t&&-1===e)return void ri("last",t);if(_t===te&&1===e)return void ri("first",t)}e&&(_t+=Ct*e,ht&&(_t=Math.floor(_t)),ni(n||t&&"keydown"===t.type?t:null))}function si(){Ye=setInterval(function(){oi(null,_e)},Ht),Ke=!0}function ui(){clearInterval(Ye),Ke=!1}function li(t,e){ji(Ze,{"data-action":t}),Ze.innerHTML=tn[0]+t+tn[1]+e}function ci(){si(),Ze&&li("stop",Rt[1])}function fi(){ui(),Ze&&li("start",Rt[0])}function di(){Ke?(fi(),Ge=!0):(ci(),Ge=!1)}function vi(t){t.focus()}function pi(t){return hi(t=t||m.event)?t.changedTouches[0]:t}function mi(t){return t.target||m.event.srcElement}function hi(t){return 0<=t.type.indexOf("touch")}function yi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function gi(t){ie&&ai(),rn=!0,V&&(Ei(on),on=0);var e=pi(t);re.emit(hi(t)?"touchStart":"dragStart",Ai(t)),!hi(t)&&0<=["img","a"].indexOf(Vn(mi(t)))&&yi(t),an.x=nn.x=parseInt(e.clientX),an.y=nn.y=parseInt(e.clientY),V&&(en=parseFloat(nt.style[Kt].replace(Ut,"").replace(Gt,"")),Gn(nt,"0s"))}function xi(t){if(rn){var e=pi(t);an.x=parseInt(e.clientX),an.y=parseInt(e.clientY),V&&!on&&(on=Ti(function(){!function t(e){if(!ne)return void(rn=!1);Ei(on);rn&&(on=Ti(function(){t(e)}));bi();if(ne){try{e.type&&re.emit(hi(e)?"touchMove":"dragMove",Ai(e))}catch(t){}var n=en,i=sn(an,nn);if(!$||yt||ht)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Qt):100*i/bt;n+=a,n+="%"}nt.style[Kt]=Ut+n+Gt}}(t)}))}}function bi(){var t,e,n,i,a,r;"?"===ne&&an.x!==nn.x&&an.y!==nn.y&&(a=an.y-nn.y,r=an.x-nn.x,t=Math.atan2(a,r)*(180/Math.PI),e=ee,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ne=n===p.axis)}function wi(i){if(rn){V&&(Ei(on),Gn(nt,"")),rn=!1;var t=pi(i);an.x=parseInt(t.clientX),an.y=parseInt(t.clientY);var a=sn(an,nn);if(5<=Math.abs(a)){if(!hi(i)){var n=mi(i);Ui(n,{click:function t(e){yi(e),Gi(n,{click:t})}})}V?on=Ti(function(){if($&&!ht){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),_t+=t}else{var e=-(en+a);if(e<=0)_t=$t;else if(e>=lt[lt.length-1])_t=te;else for(var n=0;n<Qt&&e>=lt[n];)e>lt[_t=n]&&a<0&&(_t+=1),n++}ni(i,a),re.emit(hi(i)?"touchEnd":"dragEnd",Ai(i))}):(bi(),ne&&oi(i,0<a?-1:1))}}ee&&(ne="?")}function Ci(){et.style.height=lt[_t+wt]-lt[_t]+"px"}function Mi(){Dt&&!Ce&&(!function(){qe=[];for(var t=dn()%wt;t<ot;)V&&!kt&&ot<t+wt&&(t=ot-wt),qe.push(t),t+=wt;(kt&&qe.length*wt<ot||!kt&&0<qe[0])&&qe.unshift(0)}(),qe!==je&&(Hi(Pe,function(t,e){qe.indexOf(e)<0?Qi(t):Vi(t)}),je=qe))}function Ai(t){return{container:nt,slideItems:rt,navContainer:We,navItems:Pe,controlsContainer:De,hasControls:be,prevButton:Oe,nextButton:Se,items:wt,slideBy:Ct,cloneCount:Ft,slideCount:ot,slideCountNew:Qt,index:_t,indexCached:Zt,navCurrentIndex:Qe,navCurrentIndexCached:Ve,visibleNavIndexes:qe,visibleNavIndexesCached:je,sheet:zt,event:t||{}}}H&&console.warn("No slides found in",p.container)};return _i}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
