var W=Object.defineProperty;var G=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var S=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as E,j as B,c as j,i as J,k as D,l as K,m as Q,p as U,q as X,v as M,w as Y,x as Z,y as tt}from"./scheduler.e4c1e8fb.js";const q=typeof window<"u";let et=q?()=>window.performance.now():()=>Date.now(),L=q?t=>requestAnimationFrame(t):w;const g=new Set;function z(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&L(z)}function nt(t){let e;return g.size===0&&L(z),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let A=!1;function it(){A=!0}function rt(){A=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:st(1,r,d=>e[n[d]].claim_order,a))-1;i[s]=n[u]+1;const f=u+1;n[f]=s,r=Math.max(f,r)}const o=[],l=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);c>=s;c--)l.push(e[c]);c--}for(;c>=0;c--)l.push(e[c]);o.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<o.length&&l[s].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(l[s],u)}}function lt(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ot(t){const e=H("style");return e.textContent="/* empty */",ct(I(t),e),e.sheet}function ct(t,e){return lt(t.head||t,e),e.sheet}function ft(t,e){if(A){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){A&&!n?ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function Lt(){return P(" ")}function Pt(){return P("")}function Rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return t.dataset.svelteH}function ut(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){dt(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const c=t[l];if(e(c)){const s=n(c);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),c}}for(let l=t.claim_info.last_index-1;l>=0;l--){const c=t[l];if(e(c)){const s=n(c);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function _t(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||o.push(c.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Ot(t,e,n){return _t(t,e,n,H)}function mt(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function kt(t){return mt(t," ")}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e,n){t.classList.toggle(e,!!n)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Tt(t,e){return new t(e)}const N=new Map;let b=0;function pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function $t(t,e){const n={stylesheet:ot(e),rules:{}};return N.set(t,n),n}function yt(t,e,n,i,r,o,l,c=0){const s=16.666/i;let a=`{
`;for(let h=0;h<=1;h+=s){const y=e+(n-e)*o(h);a+=h*100+`%{${l(y,1-y)}}
`}const u=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${pt(u)}_${c}`,d=I(t),{stylesheet:_,rules:m}=N.get(d)||$t(d,t);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${i}ms linear ${r}ms 1 both`,b+=1,f}function O(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),b-=r,b||gt())}function gt(){L(()=>{b||(N.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&T(e)}),N.clear())})}let x;function xt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function k(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const v=new Set;let p;function Ht(){p={r:0,c:[],p}}function Ft(){p.r||E(p.c),p=p.p}function wt(t,e){t&&t.i&&(v.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),p.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const vt={duration:0};function Wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,l,c,s=0;function a(){l&&O(t,l)}function u(){const{delay:d=0,duration:_=300,easing:m=J,tick:$=w,css:h}=r||vt;h&&(l=yt(t,0,1,_,d,m,h,s++)),$(0,1);const y=et()+d,V=y+_;c&&c.abort(),o=!0,j(()=>k(t,!0,"start")),c=nt(C=>{if(o){if(C>=V)return $(1,0),k(t,!0,"end"),a(),o=!1;if(C>=y){const R=m((C-y)/_);$(R,1-R)}}return o})}let f=!1;return{start(){f||(f=!0,O(t),B(r)?(r=r(i),xt().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function Nt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),j(()=>{const o=t.$$.on_mount.map(Y).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...o):E(o),t.$$.on_mount=[]}),r.forEach(j)}function bt(t,e){const n=t.$$;n.fragment!==null&&(U(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(Z.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,r,o,l,c=[-1]){const s=X;M(t);const a=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:D(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return a.ctx&&r(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&Et(t,f)),d}):[],a.update(),u=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){it();const f=ut(e.target);a.fragment&&a.fragment.l(f),f.forEach(T)}else a.fragment&&a.fragment.c();e.intro&&wt(t.$$.fragment),Nt(t,e.target,e.anchor),rt(),K()}M(s)}class Qt{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){bt(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);export{It as A,Rt as B,Bt as C,Qt as S,jt as a,Ft as b,kt as c,wt as d,Pt as e,T as f,H as g,Ot as h,Kt as i,ut as j,Dt as k,zt as l,P as m,mt as n,qt as o,Ht as p,Tt as q,Gt as r,Lt as s,Vt as t,Jt as u,Nt as v,bt as w,Mt as x,Wt as y,ft as z};
