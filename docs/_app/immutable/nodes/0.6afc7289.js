import{s as he,n as j,c as pe,d as qe,e as Fe,f as Oe,u as Pe,g as Se,h as Be}from"../chunks/scheduler.e4c1e8fb.js";import{S as ve,i as ke,e as se,a as z,d as E,f as _,g as h,h as p,x as q,k as d,y as Ge,s as L,m as x,j as y,c as w,n as ee,z as o,o as Je,A,p as _e,t as N,b as me,r as le,u as ne,l as G,v as ie,w as re,B as Re}from"../chunks/index.ac0d1271.js";import{p as We}from"../chunks/stores.05c56291.js";import{f as je}from"../chunks/index.963fb4ec.js";function Ke(n){let e,a='<img class="player-image svelte-9ffn2y" src="https://visage.surgeplay.com/bust/128/X-Steve" alt=""/> <div><h3>Přihlásit se</h3> <span>do AlteraCraft</span></div>',l;return{c(){e=h("a"),e.innerHTML=a,this.h()},l(t){e=p(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1sd0z9t"&&(e.innerHTML=a),this.h()},h(){d(e,"href","/login"),d(e,"class","player-card svelte-9ffn2y")},m(t,s){z(t,e,s)},p:j,i(t){t&&(l||pe(()=>{l=Ge(e,je,{}),l.start()}))},o:j,d(t){t&&_(e)}}}function Ye(n){let e,a,l,t,s,r,c=n[0].name+"",k,m,i,f,u,v,T='<button class="svelte-9ffn2y"><i style="color: red;" class="fa-solid fa-right-from-bracket"></i></button>',D;return{c(){e=h("main"),a=h("img"),t=L(),s=h("div"),r=h("h3"),k=x(c),m=L(),i=h("img"),u=L(),v=h("form"),v.innerHTML=T,this.h()},l(I){e=p(I,"MAIN",{class:!0});var M=y(e);a=p(M,"IMG",{class:!0,src:!0,alt:!0}),t=w(M),s=p(M,"DIV",{});var R=y(s);r=p(R,"H3",{});var Q=y(r);k=ee(Q,c),Q.forEach(_),m=w(R),i=p(R,"IMG",{class:!0,src:!0,alt:!0}),R.forEach(_),u=w(M),v=p(M,"FORM",{action:!0,method:!0,class:!0,"data-svelte-h":!0}),q(v)!=="svelte-zb2v4d"&&(v.innerHTML=T),M.forEach(_),this.h()},h(){d(a,"class","player-image svelte-9ffn2y"),qe(a.src,l="https://visage.surgeplay.com/bust/128/0a737aee1a6e4d8e985c86b30927c5d6")||d(a,"src",l),d(a,"alt",""),d(i,"class","rank svelte-9ffn2y"),qe(i.src,f="imgs/ranks/dev.png")||d(i,"src",f),d(i,"alt",""),d(v,"action","/logout"),d(v,"method","POST"),d(v,"class","svelte-9ffn2y"),d(e,"class","player-card svelte-9ffn2y")},m(I,M){z(I,e,M),o(e,a),o(e,t),o(e,s),o(s,r),o(r,k),o(s,m),o(s,i),o(e,u),o(e,v)},p(I,M){M&1&&c!==(c=I[0].name+"")&&Je(k,c)},i(I){I&&(D||pe(()=>{D=Ge(e,je,{}),D.start()}))},o:j,d(I){I&&_(e)}}}function Ze(n){let e;function a(s,r){return s[0]?Ye:Ke}let l=a(n),t=l(n);return{c(){t.c(),e=se()},l(s){t.l(s),e=se()},m(s,r){t.m(s,r),z(s,e,r)},p(s,[r]){l===(l=a(s))&&t?t.p(s,r):(t.d(1),t=l(s),t&&(t.c(),E(t,1),t.m(e.parentNode,e)))},i(s){E(t)},o:j,d(s){s&&_(e),t.d(s)}}}function xe(n,e,a){let{user:l}=e;return n.$$set=t=>{"user"in t&&a(0,l=t.user)},[l]}class Qe extends ve{constructor(e){super(),ke(this,e,xe,Ze,he,{user:0})}}function et(n){let e,a,l,t,s,r,c,k="play.alteracraft.eu",m,i,f,u;return{c(){e=h("a"),a=x(n[3]),l=x(": "),t=x(n[4]),s=L(),r=h("div"),c=h("h3"),c.textContent=k,m=L(),i=h("i"),this.h()},l(v){e=p(v,"A",{style:!0,href:!0,class:!0});var T=y(e);a=ee(T,n[3]),l=ee(T,": "),t=ee(T,n[4]),T.forEach(_),s=w(v),r=p(v,"DIV",{style:!0});var D=y(r);c=p(D,"H3",{style:!0,"data-svelte-h":!0}),q(c)!=="svelte-1abaiwv"&&(c.textContent=k),m=w(D),i=p(D,"I",{style:!0,class:!0}),y(i).forEach(_),D.forEach(_),this.h()},h(){G(e,"font-size","25px"),d(e,"href","/playerss"),d(e,"class","svelte-sr9qz2"),G(c,"font-weight","normal"),G(i,"margin-left",".2rem"),d(i,"class","ip-adress fa-regular fa-copy"),G(r,"display","flex"),G(r,"width","fit-content"),G(r,"margin","auto")},m(v,T){z(v,e,T),o(e,a),o(e,l),o(e,t),z(v,s,T),z(v,r,T),o(r,c),o(r,m),o(r,i),f||(u=Re(i,"click",n[7]),f=!0)},p:j,d(v){v&&(_(e),_(s),_(r)),f=!1,u()}}}function tt(n){let e,a;return{c(){e=h("h3"),a=x(n[3]),this.h()},l(l){e=p(l,"H3",{style:!0});var t=y(e);a=ee(t,n[3]),t.forEach(_),this.h()},h(){G(e,"font-size","25px")},m(l,t){z(l,e,t),o(e,a)},p:j,d(l){l&&_(e)}}}function Ae(n){let e,a,l;return a=new Qe({props:{user:n[2]}}),{c(){e=h("div"),le(a.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0});var s=y(e);ne(a.$$.fragment,s),s.forEach(_),this.h()},h(){d(e,"class","navigation-item svelte-sr9qz2"),G(e,"margin-top",".25rem"),G(e,"margin-bottom","1rem")},m(t,s){z(t,e,s),ie(a,e,null),l=!0},p:j,i(t){l||(E(a.$$.fragment,t),l=!0)},o(t){N(a.$$.fragment,t),l=!1},d(t){t&&_(e),re(a)}}}function at(n){let e,a,l='<span class="ikonka-menu"><i class="fa-solid fa-house" style="color: #ffffff;"></i></span> <span class="text-menu">Novinky</span>';return{c(){e=h("li"),a=h("a"),a.innerHTML=l,this.h()},l(t){e=p(t,"LI",{});var s=y(e);a=p(s,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(a)!=="svelte-emd0c6"&&(a.innerHTML=l),s.forEach(_),this.h()},h(){d(a,"class","navigation-item svelte-sr9qz2"),d(a,"href","/"),A(a,"active",n[1]==="/")},m(t,s){z(t,e,s),o(e,a)},p(t,s){s&2&&A(a,"active",t[1]==="/")},d(t){t&&_(e)}}}function st(n){let e,a,l='<span class="ikonka-menu"><i class="fa-solid fa-house" style="color: #ffffff;"></i></span> <span class="text-menu">Domů</span>';return{c(){e=h("li"),a=h("a"),a.innerHTML=l,this.h()},l(t){e=p(t,"LI",{});var s=y(e);a=p(s,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(a)!=="svelte-1thuwlp"&&(a.innerHTML=l),s.forEach(_),this.h()},h(){d(a,"class","navigation-item svelte-sr9qz2"),d(a,"href","/"),A(a,"active",n[1]==="/")},m(t,s){z(t,e,s),o(e,a)},p(t,s){s&2&&A(a,"active",t[1]==="/")},d(t){t&&_(e)}}}function De(n){let e,a='<p>© AlteraCraft 2023</p> <p style="font-size: 15px; font-style: italic; color: #F94C85;">Made with &lt;3</p>';return{c(){e=h("footer"),e.innerHTML=a,this.h()},l(l){e=p(l,"FOOTER",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1igfnb4"&&(e.innerHTML=a),this.h()},h(){d(e,"class","svelte-sr9qz2")},m(l,t){z(l,e,t)},d(l){l&&_(e)}}}function lt(n){let e,a,l='<img class="logo svelte-sr9qz2" alt="altera-logo" src="imgs/Logo.png"/>',t,s,r,c,k,m,i,f,u,v,T='<a class="navigation-item svelte-sr9qz2" href="http://185.137.94.42:25656/" target="_blank"><span class="ikonka-menu"><i class="fa-solid fa-earth-europe" style="color: #ffffff;"></i></span> <span class="text-menu">Dynmapa</span> <span class="ikonka-menu"><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>',D,I,M,R='<span class="ikonka-menu"><i class="fa-solid fa-flask-vial" style="color: #ffffff;"></i></span> <span class="text-menu">Wiki</span>',Q,U,F,ge='<span class="ikonka-menu"><i class="fa-solid fa-store" style="color: #ffffff;"></i></span> <span class="text-menu">Obchod</span>',fe,X,O,be='<span class="ikonka-menu"><i class="fa-solid fa-hashtag" style="color: #ffffff;"></i></span> <span class="text-menu">Partneři</span>',oe,J,P,ye='<span class="ikonka-menu"><i class="fa-solid fa-book-open" style="color: #ffffff;"></i></span> <span class="text-menu">Pravidla</span>',ce,K,S,Le='<span class="ikonka-menu"><i class="fa-solid fa-users-gear" style="color: #ffffff;"></i></span> <span class="text-menu">A-Team</span>',ue,Y,de,te,W,we='<button class="instagram" onclick=" window.open(&#39;https://www.instagram.com/alteracraft.eu/&#39;,&#39;_blank&#39;)"><i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i></button> <button class="tiktok" onclick="window.open(&#39;https://www.tiktok.com/@alteracraft&#39;, &#39;_blank&#39;)"><i class="fa-brands fa-tiktok fa-2xl" style="color: #ffffff;"></i></button> <button class="discord" onclick=" window.open(&#39;https://discord.gg/QbQmRhFGeD&#39;,&#39;_blank&#39;)"><i class="fa-brands fa-discord fa-2xl" style="color: #ffffff;"></i></button>',B;function Xe(b,g){return b[3]=="OFFLINE"?tt:et}let Z=Xe(n)(n),H=!n[0]&&Ae(n);function Me(b,g){return b[0]?st:at}let ae=Me(n),V=ae(n),$=n[0]&&De();return{c(){e=h("nav"),a=h("a"),a.innerHTML=l,t=L(),s=h("div"),Z.c(),r=L(),c=h("div"),k=L(),m=h("div"),i=h("ul"),H&&H.c(),f=L(),V.c(),u=L(),v=h("li"),v.innerHTML=T,D=L(),I=h("li"),M=h("a"),M.innerHTML=R,Q=L(),U=h("li"),F=h("a"),F.innerHTML=ge,fe=L(),X=h("li"),O=h("a"),O.innerHTML=be,oe=L(),J=h("li"),P=h("a"),P.innerHTML=ye,ce=L(),K=h("li"),S=h("a"),S.innerHTML=Le,ue=L(),Y=h("div"),de=L(),$&&$.c(),te=L(),W=h("div"),W.innerHTML=we,this.h()},l(b){e=p(b,"NAV",{class:!0});var g=y(e);a=p(g,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(a)!=="svelte-5yb8sb"&&(a.innerHTML=l),t=w(g),s=p(g,"DIV",{class:!0});var He=y(s);Z.l(He),He.forEach(_),r=w(g),c=p(g,"DIV",{class:!0}),y(c).forEach(_),k=w(g),m=p(g,"DIV",{class:!0});var Te=y(m);i=p(Te,"UL",{});var C=y(i);H&&H.l(C),f=w(C),V.l(C),u=w(C),v=p(C,"LI",{"data-svelte-h":!0}),q(v)!=="svelte-1ukge8c"&&(v.innerHTML=T),D=w(C),I=p(C,"LI",{});var ze=y(I);M=p(ze,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(M)!=="svelte-u1x9tg"&&(M.innerHTML=R),ze.forEach(_),Q=w(C),U=p(C,"LI",{});var Ce=y(U);F=p(Ce,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(F)!=="svelte-16f1zso"&&(F.innerHTML=ge),Ce.forEach(_),fe=w(C),X=p(C,"LI",{});var Ee=y(X);O=p(Ee,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(O)!=="svelte-2hoe40"&&(O.innerHTML=be),Ee.forEach(_),oe=w(C),J=p(C,"LI",{});var Ie=y(J);P=p(Ie,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(P)!=="svelte-igdodr"&&(P.innerHTML=ye),Ie.forEach(_),ce=w(C),K=p(C,"LI",{});var $e=y(K);S=p($e,"A",{class:!0,href:!0,"data-svelte-h":!0}),q(S)!=="svelte-1anj39t"&&(S.innerHTML=Le),$e.forEach(_),C.forEach(_),Te.forEach(_),ue=w(g),Y=p(g,"DIV",{class:!0}),y(Y).forEach(_),de=w(g),$&&$.l(g),te=w(g),W=p(g,"DIV",{class:!0,"data-svelte-h":!0}),q(W)!=="svelte-1uyz3b5"&&(W.innerHTML=we),g.forEach(_),this.h()},h(){d(a,"class","altera-logo svelte-sr9qz2"),d(a,"href","/"),d(s,"class","ipcont"),d(c,"class","separator svelte-sr9qz2"),d(M,"class","navigation-item svelte-sr9qz2"),d(M,"href","/wikii"),A(M,"active",n[1].includes("/wiki")),d(F,"class","navigation-item svelte-sr9qz2"),d(F,"href","/shop"),A(F,"active",n[1]==="/shop"),d(O,"class","navigation-item svelte-sr9qz2"),d(O,"href","/partners"),A(O,"active",n[1]==="/partners"),d(P,"class","navigation-item svelte-sr9qz2"),d(P,"href","/pravidla"),A(P,"active",n[1]==="/pravidla"),d(S,"class","navigation-item svelte-sr9qz2"),d(S,"href","/ateam"),A(S,"active",n[1]==="/ateam"),d(m,"class","navbar-links svelte-sr9qz2"),d(Y,"class","separator svelte-sr9qz2"),d(W,"class","socky svelte-sr9qz2"),d(e,"class","nav svelte-sr9qz2")},m(b,g){z(b,e,g),o(e,a),o(e,t),o(e,s),Z.m(s,null),o(e,r),o(e,c),o(e,k),o(e,m),o(m,i),H&&H.m(i,null),o(i,f),V.m(i,null),o(i,u),o(i,v),o(i,D),o(i,I),o(I,M),o(i,Q),o(i,U),o(U,F),o(i,fe),o(i,X),o(X,O),o(i,oe),o(i,J),o(J,P),o(i,ce),o(i,K),o(K,S),o(e,ue),o(e,Y),o(e,de),$&&$.m(e,null),o(e,te),o(e,W),B=!0},p(b,[g]){Z.p(b,g),b[0]?H&&(_e(),N(H,1,1,()=>{H=null}),me()):H?(H.p(b,g),g&1&&E(H,1)):(H=Ae(b),H.c(),E(H,1),H.m(i,f)),ae===(ae=Me(b))&&V?V.p(b,g):(V.d(1),V=ae(b),V&&(V.c(),V.m(i,u))),(!B||g&2)&&A(M,"active",b[1].includes("/wiki")),(!B||g&2)&&A(F,"active",b[1]==="/shop"),(!B||g&2)&&A(O,"active",b[1]==="/partners"),(!B||g&2)&&A(P,"active",b[1]==="/pravidla"),(!B||g&2)&&A(S,"active",b[1]==="/ateam"),b[0]?$||($=De(),$.c(),$.m(e,te)):$&&($.d(1),$=null)},i(b){B||(E(H),B=!0)},o(b){N(H),B=!1},d(b){b&&_(e),Z.d(),H&&H.d(),V.d(),$&&$.d()}}}function nt(n,e,a){let l;Fe(n,We,f=>a(6,l=f));let{onDesktop:t}=e,{data:s}=e,{user:r}=s,{status:{data:c},playersCount:{data:k}}=s,m;const i=()=>navigator.clipboard.writeText("play.alteracraft.eu");return n.$$set=f=>{"onDesktop"in f&&a(0,t=f.onDesktop),"data"in f&&a(5,s=f.data)},n.$$.update=()=>{n.$$.dirty&64&&a(1,m=l.url.pathname)},[t,m,r,c,k,s,l,i]}class Ue extends ve{constructor(e){super(),ke(this,e,nt,lt,he,{onDesktop:0,data:5})}}function it(n){let e,a,l,t=(n[3].status!="404"||n[3].status!="500")&&Ne();const s=n[6].default,r=Oe(s,n,n[5],null);return{c(){e=h("main"),t&&t.c(),a=L(),r&&r.c()},l(c){e=p(c,"MAIN",{});var k=y(e);t&&t.l(k),a=w(k),r&&r.l(k),k.forEach(_)},m(c,k){z(c,e,k),t&&t.m(e,null),o(e,a),r&&r.m(e,null),l=!0},p(c,k){c[3].status!="404"||c[3].status!="500"?t||(t=Ne(),t.c(),t.m(e,a)):t&&(t.d(1),t=null),r&&r.p&&(!l||k&32)&&Pe(r,s,c,c[5],l?Be(s,c[5],k,null):Se(c[5]),null)},i(c){l||(E(r,c),l=!0)},o(c){N(r,c),l=!1},d(c){c&&_(e),t&&t.d(),r&&r.d(c)}}}function rt(n){let e,a,l;return a=new Ue({props:{data:n[0]}}),{c(){e=h("main"),le(a.$$.fragment)},l(t){e=p(t,"MAIN",{});var s=y(e);ne(a.$$.fragment,s),s.forEach(_)},m(t,s){z(t,e,s),ie(a,e,null),l=!0},p(t,s){const r={};s&1&&(r.data=t[0]),a.$set(r)},i(t){l||(E(a.$$.fragment,t),l=!0)},o(t){N(a.$$.fragment,t),l=!1},d(t){t&&_(e),re(a)}}}function Ne(n){let e,a="〱 Home";return{c(){e=h("a"),e.textContent=a,this.h()},l(l){e=p(l,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1bimn0l"&&(e.textContent=a),this.h()},h(){d(e,"href","/"),d(e,"class","svelte-rfeod8")},m(l,t){z(l,e,t)},d(l){l&&_(e)}}}function Ve(n){let e,a,l,t,s,r,c;a=new Ue({props:{data:n[0],onDesktop:!0}}),s=new Qe({props:{user:n[4]}});const k=n[6].default,m=Oe(k,n,n[5],null);return{c(){e=h("main"),le(a.$$.fragment),l=L(),t=h("main"),le(s.$$.fragment),r=L(),m&&m.c(),this.h()},l(i){e=p(i,"MAIN",{class:!0});var f=y(e);ne(a.$$.fragment,f),l=w(f),t=p(f,"MAIN",{class:!0});var u=y(t);ne(s.$$.fragment,u),r=w(u),m&&m.l(u),u.forEach(_),f.forEach(_),this.h()},h(){d(t,"class","content"),d(e,"class","wrapper")},m(i,f){z(i,e,f),ie(a,e,null),o(e,l),o(e,t),ie(s,t,null),o(t,r),m&&m.m(t,null),c=!0},p(i,f){const u={};f&1&&(u.data=i[0]),a.$set(u),m&&m.p&&(!c||f&32)&&Pe(m,k,i,i[5],c?Be(k,i[5],f,null):Se(i[5]),null)},i(i){c||(E(a.$$.fragment,i),E(s.$$.fragment,i),E(m,i),c=!0)},o(i){N(a.$$.fragment,i),N(s.$$.fragment,i),N(m,i),c=!1},d(i){i&&_(e),re(a),re(s),m&&m.d(i)}}}function ft(n){let e,a,l,t,s,r,c;pe(n[7]);const k=[rt,it],m=[];function i(u,v){return u[1]<850&&u[2]<700&&u[3].url.pathname=="/"?0:u[1]<900&&u[2]<700?1:-1}~(e=i(n))&&(a=m[e]=k[e](n));let f=n[1]>850&&n[2]>700&&Ve(n);return{c(){a&&a.c(),l=L(),f&&f.c(),t=se()},l(u){a&&a.l(u),l=w(u),f&&f.l(u),t=se()},m(u,v){~e&&m[e].m(u,v),z(u,l,v),f&&f.m(u,v),z(u,t,v),s=!0,r||(c=Re(window,"resize",n[7]),r=!0)},p(u,[v]){let T=e;e=i(u),e===T?~e&&m[e].p(u,v):(a&&(_e(),N(m[T],1,1,()=>{m[T]=null}),me()),~e?(a=m[e],a?a.p(u,v):(a=m[e]=k[e](u),a.c()),E(a,1),a.m(l.parentNode,l)):a=null),u[1]>850&&u[2]>700?f?(f.p(u,v),v&6&&E(f,1)):(f=Ve(u),f.c(),E(f,1),f.m(t.parentNode,t)):f&&(_e(),N(f,1,1,()=>{f=null}),me())},i(u){s||(E(a),E(f),s=!0)},o(u){N(a),N(f),s=!1},d(u){u&&(_(l),_(t)),~e&&m[e].d(u),f&&f.d(u),r=!1,c()}}}function ot(n,e,a){let l;Fe(n,We,f=>a(3,l=f));let{$$slots:t={},$$scope:s}=e,r,c,{data:k=[]}=e,{user:m}=k;function i(){a(1,r=window.innerHeight),a(2,c=window.innerWidth)}return n.$$set=f=>{"data"in f&&a(0,k=f.data),"$$scope"in f&&a(5,s=f.$$scope)},[k,r,c,l,m,s,t,i]}class ht extends ve{constructor(e){super(),ke(this,e,ot,ft,he,{data:0})}}export{ht as component};
