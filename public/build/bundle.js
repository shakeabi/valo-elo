var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function v(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let b;function y(t){b=t}function $(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const x=[],w=[],_=[],k=[],S=Promise.resolve();let D=!1;function N(t){_.push(t)}let T=!1;const C=new Set;function I(){if(!T){T=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),L(e.$$)}for(y(null),x.length=0;w.length;)w.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];C.has(e)||(C.add(e),e())}_.length=0}while(x.length);for(;k.length;)k.pop()();D=!1,T=!1,C.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const R=new Set;let E;function U(){E={r:0,c:[],p:E}}function A(){E.r||o(E.c),E=E.p}function O(t,e){t&&t.i&&(R.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),E.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function F(t){t&&t.c()}function M(t,n,i){const{fragment:s,on_mount:r,on_destroy:l,after_update:c}=t.$$;s&&s.m(n,i),N((()=>{const n=r.map(e).filter(a);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(N)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(x.push(t),D||(D=!0,S.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,a,i,s,r,c,u=[-1]){const d=b;y(e);const p=a.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=i?i(e,p,((t,n,...o)=>{const a=o.length?o[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=a)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](a),h&&B(e,t)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);f.fragment&&f.fragment.l(t),t.forEach(l)}else f.fragment&&f.fragment.c();a.intro&&O(e.$$.fragment),M(e,a.target,a.anchor),I()}y(d)}class q{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,o,a,i,u,p;return{c(){n=c("span"),o=c("div"),a=d(),i=c("div"),u=d(),p=c("div"),f(o,"class","svelte-p2wo95"),f(i,"class","svelte-p2wo95"),f(p,"class","svelte-p2wo95"),g(n,"--size",e[0]+e[2]),g(n,"--color",e[1]),f(n,"class","svelte-p2wo95")},m(t,e){r(t,n,e),s(n,o),s(n,a),s(n,i),s(n,u),s(n,p)},p(t,[e]){5&e&&g(n,"--size",t[0]+t[2]),2&e&&g(n,"--color",t[1])},i:t,o:t,d(t){t&&l(n)}}}function W(t,e,n){let{size:o=60}=e,{color:a="#FF3E00"}=e,{unit:i="px"}=e;return t.$$set=t=>{"size"in t&&n(0,o=t.size),"color"in t&&n(1,a=t.color),"unit"in t&&n(2,i=t.unit)},[o,a,i]}class J extends q{constructor(t){super(),H(this,t,W,G,i,{size:0,color:1,unit:2})}}function K(e){let n,a,i,u,h,m,g,v,b,y,$,x;return{c(){n=c("div"),a=c("div"),i=c("h2"),i.textContent="Notes",u=d(),h=c("p"),m=d(),g=c("button"),g.textContent="Don't Show Again",v=c("br"),b=d(),y=c("button"),y.textContent="Close",f(h,"id","modal-content"),f(h,"class","svelte-1p6yhu8"),f(g,"class","modal-button svelte-1p6yhu8"),f(y,"class","modal-button svelte-1p6yhu8"),f(a,"id","modal-box"),f(a,"class","svelte-1p6yhu8"),f(n,"id","modal-container"),f(n,"class","svelte-1p6yhu8")},m(t,o){r(t,n,o),s(n,a),s(a,i),s(a,u),s(a,h),h.innerHTML=e[1],s(a,m),s(a,g),s(a,v),s(a,b),s(a,y),$||(x=[p(g,"click",e[2]),p(y,"click",e[3])],$=!0)},p(t,[e]){2&e&&(h.innerHTML=t[1])},i:t,o:t,d(t){t&&l(n),$=!1,o(x)}}}function V(t,e,n){let{displayNotes:o}=e,{text:a='\n  <h4 style="text-align: center; margin: 5px auto;"> Read the following before usage </h4>\n\n  1. This web-app is made to help people determine their ELO in <b>Valorant</b>. (accurate AFAIK)\n\n  2. The username and password are required to fetch data from the RIOT servers (would love to hear if you\'ve found a way to not require these). However, neither of them are <b>stored in the server</b>. The autofilling of username and password after the first use is fetched from <b>localstorage</b>. \n\n  3. I highly recommend you to change your password to something that you\'re not using in other services like email, social media etc., so that in the event of highly unlikely data leak, the other services do not get affected.\n  \n  4. The source code is available <a href="https://github.com/shakeabi/valo-elo" target="_blank">here</a> (frontend) and <a href="https://github.com/shakeabi/valo-elo-backend" target="_blank">here</a> (backend). [Feel free to raise an issue <a href="https://github.com/shakeabi/valo-elo/issues/new" target="_blank">here</a> if you find any bugs]\n  \n  5. Change regions and try again if you\'re request is unsuccessful.\n\n  6. Credits: <a href="https://github.com/shakeabi/valo-elo#credits-and-tech-used" target="_blank">Link</a>\n\n  7. Happy Gaming :)\n\n  <br/>\n  '}=e;return t.$$set=t=>{"displayNotes"in t&&n(0,o=t.displayNotes),"text"in t&&n(1,a=t.text)},[o,a,t=>{n(0,o=!1),localStorage.setItem("displayNotes",!1)},t=>{n(0,o=!1)}]}class Q extends q{constructor(t){super(),H(this,t,V,K,i,{displayNotes:0,text:1})}}const{window:X}=z;function Y(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function Z(t){let e,n,o;function a(e){t[10].call(null,e)}let i={};return void 0!==t[1]&&(i.displayNotes=t[1]),e=new Q({props:i}),w.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"displayNotes",a))),{c(){F(e.$$.fragment)},m(t,n){M(e,t,n),o=!0},p(t,o){const a={};var i;!n&&2&o&&(n=!0,a.displayNotes=t[1],i=()=>n=!1,k.push(i)),e.$set(a)},i(t){o||(O(e.$$.fragment,t),o=!0)},o(t){P(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function tt(t){let e,n,o;return n=new J({props:{size:"60",color:"#ffffff",unit:"px"}}),{c(){e=c("div"),F(n.$$.fragment),f(e,"class","spinner-item svelte-16po6h6")},m(t,a){r(t,e,a),M(n,e,null),o=!0},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){P(n.$$.fragment,t),o=!1},d(t){t&&l(e),j(n)}}}function et(t){let e,n,o,a,i,p,m,v,b,y,$,x,w,_,k,S,D,N,T,C,I,L,R,E,U,A=t[5].accountData.displayName+"",O=t[5].accountData.tagLine+"",P=t[5].compData.rankText+"",z=t[5].compData.net+"",F=(100-t[5].compData.currRP<0?"INF":100-t[5].compData.currRP)+"",M=t[5].compData.delta,j=[];for(let e=0;e<M.length;e+=1)j[e]=nt(Y(t,M,e));return{c(){e=c("h1"),n=u(A),o=c("small"),a=u("#"),i=u(O),p=d(),m=c("div"),v=c("div"),b=c("img"),$=d(),x=c("h2"),w=u(P),_=d(),k=c("h3"),S=u(z),D=u(" ELO │ "),N=u(F),T=u(" TRU"),C=d(),I=c("div"),L=c("h3"),L.textContent="Recent Matches",R=d();for(let t=0;t<j.length;t+=1)j[t].c();E=d(),U=c("pre"),U.textContent="*TRU: points To Rank Up",f(e,"id","displayname"),f(e,"class","svelte-16po6h6"),b.src!==(y="assets/images/Badge_"+t[5].compData.rankNumber+".png")&&f(b,"src",y),g(b,"width","30px"),g(b,"height","30px"),g(b,"padding","10px"),f(b,"alt",""),g(v,"display","flex"),g(v,"justify-content","center"),g(v,"align-items","center"),g(k,"border-bottom","var(--white) 1px solid"),f(I,"id","rankTable"),f(I,"class","svelte-16po6h6"),f(m,"id","mainContent"),f(m,"class","svelte-16po6h6")},m(t,l){r(t,e,l),s(e,n),s(e,o),s(o,a),s(o,i),r(t,p,l),r(t,m,l),s(m,v),s(v,b),s(v,$),s(v,x),s(x,w),s(m,_),s(m,k),s(k,S),s(k,D),s(k,N),s(k,T),s(m,C),s(m,I),s(I,L),s(I,R);for(let t=0;t<j.length;t+=1)j[t].m(I,null);r(t,E,l),r(t,U,l)},p(t,e){if(32&e&&A!==(A=t[5].accountData.displayName+"")&&h(n,A),32&e&&O!==(O=t[5].accountData.tagLine+"")&&h(i,O),32&e&&b.src!==(y="assets/images/Badge_"+t[5].compData.rankNumber+".png")&&f(b,"src",y),32&e&&P!==(P=t[5].compData.rankText+"")&&h(w,P),32&e&&z!==(z=t[5].compData.net+"")&&h(S,z),32&e&&F!==(F=(100-t[5].compData.currRP<0?"INF":100-t[5].compData.currRP)+"")&&h(N,F),160&e){let n;for(M=t[5].compData.delta,n=0;n<M.length;n+=1){const o=Y(t,M,n);j[n]?j[n].p(o,e):(j[n]=nt(o),j[n].c(),j[n].m(I,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=M.length}},d(t){t&&l(e),t&&l(p),t&&l(m),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(j,t),t&&l(E),t&&l(U)}}}function nt(t){let e,n,o,a,i,p,m,v,b=new Date(t[15].timestamp).toLocaleDateString(window.innerWidth>600?"en-IN":"en-GB",t[7])+"",y=t[15].diff>=0?"+":"",$=t[15].diff.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+"";return{c(){e=c("div"),n=c("div"),o=u(b),a=d(),i=c("div"),p=u(y),m=u($),v=d(),g(n,"max-width","70%"),g(i,"color",t[15].diff>=0?"lightgreen":"orangered"),f(e,"class","matchDataContainer svelte-16po6h6")},m(t,l){r(t,e,l),s(e,n),s(n,o),s(e,a),s(e,i),s(i,p),s(i,m),s(e,v)},p(t,e){32&e&&b!==(b=new Date(t[15].timestamp).toLocaleDateString(window.innerWidth>600?"en-IN":"en-GB",t[7])+"")&&h(o,b),32&e&&y!==(y=t[15].diff>=0?"+":"")&&h(p,y),32&e&&$!==($=t[15].diff.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})+"")&&h(m,$),32&e&&g(i,"color",t[15].diff>=0?"lightgreen":"orangered")},d(t){t&&l(e)}}}function ot(t){let e,n,a,i,b,y,$,x,w,_,k,S,D,T,C,I,L,R,E,z,F,M,j,B,H,q,G,W,J,K=t[5].success?"Refresh":"Submit",V=t[1]&&Z(t),Q=t[0]&&tt(),Y=t[5].success&&et(t);return{c(){e=c("main"),V&&V.c(),n=d(),a=c("div"),a.innerHTML='<img id="mainLogo" src="main_logo.png" alt="main_logo" class="svelte-16po6h6"/>',i=d(),b=c("div"),y=u(t[6]),$=d(),x=c("div"),w=c("div"),_=c("input"),k=d(),S=c("input"),D=d(),T=c("select"),C=c("option"),C.textContent="Asia Pacific",I=c("option"),I.textContent="North America",L=c("option"),L.textContent="Europe",R=d(),E=c("button"),z=u(K),F=d(),M=c("br"),j=d(),Q&&Q.c(),B=d(),Y&&Y.c(),H=d(),q=c("footer"),q.innerHTML='Made with ♥ by <a href="https://github.com/shakeabi" target="_blank">Shake</a>',f(b,"id","error"),g(b,"font-family","Roboto"),g(b,"margin-bottom","10px"),f(_,"id","username"),f(_,"type","text"),f(_,"placeholder","Username"),f(_,"class","svelte-16po6h6"),f(S,"id","password"),f(S,"type","password"),f(S,"placeholder","Password"),f(S,"class","svelte-16po6h6"),C.__value="ap",C.value=C.__value,f(C,"default",""),I.__value="na",I.value=I.__value,L.__value="eu",L.value=L.__value,f(T,"id","region"),f(T,"class","svelte-16po6h6"),void 0===t[4]&&N((()=>t[14].call(T))),f(w,"id","formContainer"),f(w,"class","svelte-16po6h6"),f(E,"id","submitBtn"),g(E,"width","100%"),g(E,"height","40px"),g(E,"cursor","pointer"),g(E,"margin","10px 0"),E.disabled=t[0],f(E,"class","svelte-16po6h6"),f(x,"id","inputContainer"),f(x,"class","svelte-16po6h6"),g(q,"margin-top","20px"),f(e,"class","svelte-16po6h6")},m(o,l){r(o,e,l),V&&V.m(e,null),s(e,n),s(e,a),s(e,i),s(e,b),s(b,y),s(e,$),s(e,x),s(x,w),s(w,_),m(_,t[2]),s(w,k),s(w,S),m(S,t[3]),s(w,D),s(w,T),s(T,C),s(T,I),s(T,L),v(T,t[4]),s(x,R),s(x,E),s(E,z),s(x,F),s(x,M),s(x,j),Q&&Q.m(x,null),s(e,B),Y&&Y.m(e,null),s(e,H),s(e,q),G=!0,W||(J=[p(X,"focus",t[8]),p(_,"input",t[11]),p(_,"input",t[12]),p(S,"input",t[13]),p(T,"change",t[14]),p(E,"click",t[8])],W=!0)},p(t,[o]){t[1]?V?(V.p(t,o),2&o&&O(V,1)):(V=Z(t),V.c(),O(V,1),V.m(e,n)):V&&(U(),P(V,1,1,(()=>{V=null})),A()),(!G||64&o)&&h(y,t[6]),4&o&&_.value!==t[2]&&m(_,t[2]),8&o&&S.value!==t[3]&&m(S,t[3]),16&o&&v(T,t[4]),(!G||32&o)&&K!==(K=t[5].success?"Refresh":"Submit")&&h(z,K),(!G||1&o)&&(E.disabled=t[0]),t[0]?Q?1&o&&O(Q,1):(Q=tt(),Q.c(),O(Q,1),Q.m(x,null)):Q&&(U(),P(Q,1,1,(()=>{Q=null})),A()),t[5].success?Y?Y.p(t,o):(Y=et(t),Y.c(),Y.m(e,H)):Y&&(Y.d(1),Y=null)},i(t){G||(O(V),O(Q),G=!0)},o(t){P(V),P(Q),G=!1},d(t){t&&l(e),V&&V.d(),Q&&Q.d(),Y&&Y.d(),W=!1,o(J)}}}function at(t,e,n){let o,a,i,{serverUri:s}=e,r=!1,l=!0,c={},u="";$((async()=>{"true"==localStorage.getItem("isSet")&&(n(2,o=localStorage.getItem("username")),n(3,a=localStorage.getItem("password")),n(4,i=localStorage.getItem("region")),"false"==localStorage.getItem("displayNotes")&&n(1,l=!1),d()),console.log("\n\t\t \n██╗   ██╗ ██████╗      ██████╗██╗   ██╗██████╗ ██╗ ██████╗ ██╗   ██╗███████╗██╗\n╚██╗ ██╔╝██╔═══██╗    ██╔════╝██║   ██║██╔══██╗██║██╔═══██╗██║   ██║██╔════╝██║\n ╚████╔╝ ██║   ██║    ██║     ██║   ██║██████╔╝██║██║   ██║██║   ██║███████╗██║\n  ╚██╔╝  ██║   ██║    ██║     ██║   ██║██╔══██╗██║██║   ██║██║   ██║╚════██║╚═╝\n   ██║   ╚██████╔╝    ╚██████╗╚██████╔╝██║  ██║██║╚██████╔╝╚██████╔╝███████║██╗\n   ╚═╝    ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝\n                                                                               \n\t\t Wanna contribute: https://github.com/shakeabi/valo-elo")}));const d=async()=>{n(6,u=""),n(0,r=!0),fetch(s,{method:"POST",body:JSON.stringify({user:o,pass:a,region:i,hour12:!1}),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{t.success?(localStorage.setItem("username",o),localStorage.setItem("password",a),localStorage.setItem("region",i),localStorage.setItem("isSet",!0),n(5,c=t),c.compData.net<0&&n(6,u="Check your region!")):n(6,u=JSON.parse(t.err).data.message),n(0,r=!1)})).catch((t=>{n(6,u=t),n(0,r=!1)}))};return t.$$set=t=>{"serverUri"in t&&n(9,s=t.serverUri)},[r,l,o,a,i,c,u,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},d,s,function(t){l=t,n(1,l)},t=>n(5,c={}),function(){o=this.value,n(2,o)},function(){a=this.value,n(3,a)},function(){i=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(4,i)}]}return new class extends q{constructor(t){super(),H(this,t,at,ot,i,{serverUri:9})}}({target:document.body,props:{serverUri:"https://valo-ello.herokuapp.com/get-data"}})}();
//# sourceMappingURL=bundle.js.map
