(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Pa(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Da(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=ct(n)?rf(n):Da(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ct(i))return i;if(it(i))return i}}const ef=/;(?![^(]*\))/g,tf=/:([^]+)/,nf=/\/\*.*?\*\//gs;function rf(i){const e={};return i.replace(nf,"").split(ef).forEach(t=>{if(t){const n=t.split(tf);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xi(i){let e="";if(ct(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=xi(i[t]);n&&(e+=n+" ")}else if(it(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",of=Pa(sf);function xu(i){return!!i||i===""}const Pr=i=>ct(i)?i:i==null?"":Ie(i)||it(i)&&(i.toString===bu||!Oe(i.toString))?JSON.stringify(i,vu,2):String(i),vu=(i,e)=>e&&e.__v_isRef?vu(i,e.value):Zi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:yu(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Ie(e)&&!Su(e)?String(e):e,tt={},Ki=[],un=()=>{},af=()=>!1,lf=/^on[^a-z]/,Vs=i=>lf.test(i),Ra=i=>i.startsWith("onUpdate:"),wt=Object.assign,Ia=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},cf=Object.prototype.hasOwnProperty,He=(i,e)=>cf.call(i,e),Ie=Array.isArray,Zi=i=>Gs(i)==="[object Map]",yu=i=>Gs(i)==="[object Set]",Oe=i=>typeof i=="function",ct=i=>typeof i=="string",Fa=i=>typeof i=="symbol",it=i=>i!==null&&typeof i=="object",Mu=i=>it(i)&&Oe(i.then)&&Oe(i.catch),bu=Object.prototype.toString,Gs=i=>bu.call(i),uf=i=>Gs(i).slice(8,-1),Su=i=>Gs(i)==="[object Object]",Oa=i=>ct(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Es=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hs=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},hf=/-(\w)/g,nr=Hs(i=>i.replace(hf,(e,t)=>t?t.toUpperCase():"")),ff=/\B([A-Z])/g,cr=Hs(i=>i.replace(ff,"-$1").toLowerCase()),wu=Hs(i=>i.charAt(0).toUpperCase()+i.slice(1)),uo=Hs(i=>i?`on${wu(i)}`:""),Nr=(i,e)=>!Object.is(i,e),ho=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Rs=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Tu=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let dl;const df=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dn;class pf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function mf(i,e=dn){e&&e.active&&e.effects.push(i)}const Na=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Eu=i=>(i.w&Jn)>0,Au=i=>(i.n&Jn)>0,gf=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Jn},_f=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Eu(r)&&!Au(r)?r.delete(i):e[t++]=r,r.w&=~Jn,r.n&=~Jn}e.length=t}},oa=new WeakMap;let Er=0,Jn=1;const aa=30;let an;const vi=Symbol(""),la=Symbol("");class Ua{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,mf(this,n)}run(){if(!this.active)return this.fn();let e=an,t=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,Yn=!0,Jn=1<<++Er,Er<=aa?gf(this):pl(this),this.fn()}finally{Er<=aa&&_f(this),Jn=1<<--Er,an=this.parent,Yn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(pl(this),this.onStop&&this.onStop(),this.active=!1)}}function pl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Yn=!0;const Cu=[];function ur(){Cu.push(Yn),Yn=!1}function hr(){const i=Cu.pop();Yn=i===void 0?!0:i}function qt(i,e,t){if(Yn&&an){let n=oa.get(i);n||oa.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Na()),Lu(r)}}function Lu(i,e){let t=!1;Er<=aa?Au(i)||(i.n|=Jn,t=!Eu(i)):t=!i.has(an),t&&(i.add(an),an.deps.push(i))}function On(i,e,t,n,r,s){const o=oa.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Tu(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Oa(t)&&a.push(o.get("length")):(a.push(o.get(vi)),Zi(i)&&a.push(o.get(la)));break;case"delete":Ie(i)||(a.push(o.get(vi)),Zi(i)&&a.push(o.get(la)));break;case"set":Zi(i)&&a.push(o.get(vi));break}if(a.length===1)a[0]&&ca(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ca(Na(l))}}function ca(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&ml(n);for(const n of t)n.computed||ml(n)}function ml(i,e){(i!==an||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const xf=Pa("__proto__,__v_isRef,__isVue"),Pu=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Fa)),vf=Ba(),yf=Ba(!1,!0),Mf=Ba(!0),gl=bf();function bf(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)qt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ur();const n=$e(this)[e].apply(this,t);return hr(),n}}),i}function Ba(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Bf:Ou:e?Fu:Iu).get(n))return n;const o=Ie(n);if(!i&&o&&He(gl,r))return Reflect.get(gl,r,s);const a=Reflect.get(n,r,s);return(Fa(r)?Pu.has(r):xf(r))||(i||qt(n,"get",r),e)?a:St(a)?o&&Oa(r)?a:a.value:it(a)?i?Nu(a):Va(a):a}}const Sf=Du(),wf=Du(!0);function Du(i=!1){return function(t,n,r,s){let o=t[n];if(ir(o)&&St(o)&&!St(r))return!1;if(!i&&(!Is(r)&&!ir(r)&&(o=$e(o),r=$e(r)),!Ie(t)&&St(o)&&!St(r)))return o.value=r,!0;const a=Ie(t)&&Oa(n)?Number(n)<t.length:He(t,n),l=Reflect.set(t,n,r,s);return t===$e(s)&&(a?Nr(r,o)&&On(t,"set",n,r):On(t,"add",n,r)),l}}function Tf(i,e){const t=He(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&On(i,"delete",e,void 0),n}function Ef(i,e){const t=Reflect.has(i,e);return(!Fa(e)||!Pu.has(e))&&qt(i,"has",e),t}function Af(i){return qt(i,"iterate",Ie(i)?"length":vi),Reflect.ownKeys(i)}const Ru={get:vf,set:Sf,deleteProperty:Tf,has:Ef,ownKeys:Af},Cf={get:Mf,set(i,e){return!0},deleteProperty(i,e){return!0}},Lf=wt({},Ru,{get:yf,set:wf}),za=i=>i,Ws=i=>Reflect.getPrototypeOf(i);function Qr(i,e,t=!1,n=!1){i=i.__v_raw;const r=$e(i),s=$e(e);t||(e!==s&&qt(r,"get",e),qt(r,"get",s));const{has:o}=Ws(r),a=n?za:t?Ha:Ur;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function es(i,e=!1){const t=this.__v_raw,n=$e(t),r=$e(i);return e||(i!==r&&qt(n,"has",i),qt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function ts(i,e=!1){return i=i.__v_raw,!e&&qt($e(i),"iterate",vi),Reflect.get(i,"size",i)}function _l(i){i=$e(i);const e=$e(this);return Ws(e).has.call(e,i)||(e.add(i),On(e,"add",i,i)),this}function xl(i,e){e=$e(e);const t=$e(this),{has:n,get:r}=Ws(t);let s=n.call(t,i);s||(i=$e(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Nr(e,o)&&On(t,"set",i,e):On(t,"add",i,e),this}function vl(i){const e=$e(this),{has:t,get:n}=Ws(e);let r=t.call(e,i);r||(i=$e(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&On(e,"delete",i,void 0),s}function yl(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&On(i,"clear",void 0,void 0),t}function ns(i,e){return function(n,r){const s=this,o=s.__v_raw,a=$e(o),l=e?za:i?Ha:Ur;return!i&&qt(a,"iterate",vi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function is(i,e,t){return function(...n){const r=this.__v_raw,s=$e(r),o=Zi(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?za:e?Ha:Ur;return!e&&qt(s,"iterate",l?la:vi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Un(i){return function(...e){return i==="delete"?!1:this}}function Pf(){const i={get(s){return Qr(this,s)},get size(){return ts(this)},has:es,add:_l,set:xl,delete:vl,clear:yl,forEach:ns(!1,!1)},e={get(s){return Qr(this,s,!1,!0)},get size(){return ts(this)},has:es,add:_l,set:xl,delete:vl,clear:yl,forEach:ns(!1,!0)},t={get(s){return Qr(this,s,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ns(!0,!1)},n={get(s){return Qr(this,s,!0,!0)},get size(){return ts(this,!0)},has(s){return es.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=is(s,!1,!1),t[s]=is(s,!0,!1),e[s]=is(s,!1,!0),n[s]=is(s,!0,!0)}),[i,t,e,n]}const[Df,Rf,If,Ff]=Pf();function ka(i,e){const t=e?i?Ff:If:i?Rf:Df;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(He(t,r)&&r in n?t:n,r,s)}const Of={get:ka(!1,!1)},Nf={get:ka(!1,!0)},Uf={get:ka(!0,!1)},Iu=new WeakMap,Fu=new WeakMap,Ou=new WeakMap,Bf=new WeakMap;function zf(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kf(i){return i.__v_skip||!Object.isExtensible(i)?0:zf(uf(i))}function Va(i){return ir(i)?i:Ga(i,!1,Ru,Of,Iu)}function Vf(i){return Ga(i,!1,Lf,Nf,Fu)}function Nu(i){return Ga(i,!0,Cf,Uf,Ou)}function Ga(i,e,t,n,r){if(!it(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=kf(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ji(i){return ir(i)?Ji(i.__v_raw):!!(i&&i.__v_isReactive)}function ir(i){return!!(i&&i.__v_isReadonly)}function Is(i){return!!(i&&i.__v_isShallow)}function Uu(i){return Ji(i)||ir(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function Bu(i){return Rs(i,"__v_skip",!0),i}const Ur=i=>it(i)?Va(i):i,Ha=i=>it(i)?Nu(i):i;function zu(i){Yn&&an&&(i=$e(i),Lu(i.dep||(i.dep=Na())))}function ku(i,e){i=$e(i),i.dep&&ca(i.dep)}function St(i){return!!(i&&i.__v_isRef===!0)}function Gf(i){return Hf(i,!1)}function Hf(i,e){return St(i)?i:new Wf(i,e)}class Wf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:Ur(e)}get value(){return zu(this),this._value}set value(e){const t=this.__v_isShallow||Is(e)||ir(e);e=t?e:$e(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ur(e),ku(this))}}function Xt(i){return St(i)?i.value:i}const Xf={get:(i,e,t)=>Xt(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return St(r)&&!St(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Vu(i){return Ji(i)?i:new Proxy(i,Xf)}var Gu;class jf{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Gu]=!1,this._dirty=!0,this.effect=new Ua(e,()=>{this._dirty||(this._dirty=!0,ku(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=$e(this);return zu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Gu="__v_isReadonly";function qf(i,e,t=!1){let n,r;const s=Oe(i);return s?(n=i,r=un):(n=i.get,r=i.set),new jf(n,r,s||!r,t)}function Kn(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Xs(s,e,t)}return r}function tn(i,e,t,n){if(Oe(i)){const s=Kn(i,e,t,n);return s&&Mu(s)&&s.catch(o=>{Xs(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(tn(i[s],e,t,n));return r}function Xs(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[i,o,a]);return}}$f(i,t,r,n)}function $f(i,e,t,n=!0){console.error(i)}let Br=!1,ua=!1;const bt=[];let _n=0;const Qi=[];let Dn=null,di=0;const Hu=Promise.resolve();let Wa=null;function Yf(i){const e=Wa||Hu;return i?e.then(this?i.bind(this):i):e}function Kf(i){let e=_n+1,t=bt.length;for(;e<t;){const n=e+t>>>1;zr(bt[n])<i?e=n+1:t=n}return e}function Xa(i){(!bt.length||!bt.includes(i,Br&&i.allowRecurse?_n+1:_n))&&(i.id==null?bt.push(i):bt.splice(Kf(i.id),0,i),Wu())}function Wu(){!Br&&!ua&&(ua=!0,Wa=Hu.then(ju))}function Zf(i){const e=bt.indexOf(i);e>_n&&bt.splice(e,1)}function Jf(i){Ie(i)?Qi.push(...i):(!Dn||!Dn.includes(i,i.allowRecurse?di+1:di))&&Qi.push(i),Wu()}function Ml(i,e=Br?_n+1:0){for(;e<bt.length;e++){const t=bt[e];t&&t.pre&&(bt.splice(e,1),e--,t())}}function Xu(i){if(Qi.length){const e=[...new Set(Qi)];if(Qi.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((t,n)=>zr(t)-zr(n)),di=0;di<Dn.length;di++)Dn[di]();Dn=null,di=0}}const zr=i=>i.id==null?1/0:i.id,Qf=(i,e)=>{const t=zr(i)-zr(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function ju(i){ua=!1,Br=!0,bt.sort(Qf);const e=un;try{for(_n=0;_n<bt.length;_n++){const t=bt[_n];t&&t.active!==!1&&Kn(t,null,14)}}finally{_n=0,bt.length=0,Xu(),Br=!1,Wa=null,(bt.length||Qi.length)&&ju()}}function ed(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||tt;f&&(r=t.map(d=>ct(d)?d.trim():d)),h&&(r=t.map(Tu))}let a,l=n[a=uo(e)]||n[a=uo(nr(e))];!l&&s&&(l=n[a=uo(cr(e))]),l&&tn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,tn(c,i,6,r)}}function qu(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Oe(i)){const l=c=>{const u=qu(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(it(i)&&n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):wt(o,s),it(i)&&n.set(i,o),o)}function js(i,e){return!i||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(i,e[0].toLowerCase()+e.slice(1))||He(i,cr(e))||He(i,e))}let ln=null,qs=null;function Fs(i){const e=ln;return ln=i,qs=i&&i.type.__scopeId||null,e}function td(i){qs=i}function nd(){qs=null}function id(i,e=ln,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Pl(-1);const s=Fs(e);let o;try{o=i(...r)}finally{Fs(s),n._d&&Pl(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function fo(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=i;let m,y;const b=Fs(i);try{if(t.shapeFlag&4){const T=r||n;m=mn(u.call(T,T,h,s,d,f,g)),y=l}else{const T=e;m=mn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),y=e.props?l:rd(l)}}catch(T){Rr.length=0,Xs(T,i,1),m=Ht(In)}let v=m;if(y&&p!==!1){const T=Object.keys(y),{shapeFlag:S}=v;T.length&&S&7&&(o&&T.some(Ra)&&(y=sd(y,o)),v=Qn(v,y))}return t.dirs&&(v=Qn(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,Fs(b),m}const rd=i=>{let e;for(const t in i)(t==="class"||t==="style"||Vs(t))&&((e||(e={}))[t]=i[t]);return e},sd=(i,e)=>{const t={};for(const n in i)(!Ra(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function od(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?bl(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!js(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?bl(n,o,c):!0:!!o;return!1}function bl(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!js(t,s))return!0}return!1}function ad({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const ld=i=>i.__isSuspense;function cd(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):Jf(i)}function ud(i,e){if(_t){let t=_t.provides;const n=_t.parent&&_t.parent.provides;n===t&&(t=_t.provides=Object.create(n)),t[i]=e}}function As(i,e,t=!1){const n=_t||ln;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Oe(e)?e.call(n.proxy):e}}const rs={};function po(i,e,t){return $u(i,e,t)}function $u(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=tt){const a=_t;let l,c=!1,u=!1;if(St(i)?(l=()=>i.value,c=Is(i)):Ji(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(v=>Ji(v)||Is(v)),l=()=>i.map(v=>{if(St(v))return v.value;if(Ji(v))return qi(v);if(Oe(v))return Kn(v,a,2)})):Oe(i)?e?l=()=>Kn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),tn(i,a,3,[f])}:l=un,e&&n){const v=l;l=()=>qi(v())}let h,f=v=>{h=y.onStop=()=>{Kn(v,a,4)}},d;if(Vr)if(f=un,e?t&&tn(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const v=ap();d=v.__watcherHandles||(v.__watcherHandles=[])}else return un;let g=u?new Array(i.length).fill(rs):rs;const p=()=>{if(y.active)if(e){const v=y.run();(n||c||(u?v.some((T,S)=>Nr(T,g[S])):Nr(v,g)))&&(h&&h(),tn(e,a,3,[v,g===rs?void 0:u&&g[0]===rs?[]:g,f]),g=v)}else y.run()};p.allowRecurse=!!e;let m;r==="sync"?m=p:r==="post"?m=()=>It(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),m=()=>Xa(p));const y=new Ua(l,m);e?t?p():g=y.run():r==="post"?It(y.run.bind(y),a&&a.suspense):y.run();const b=()=>{y.stop(),a&&a.scope&&Ia(a.scope.effects,y)};return d&&d.push(b),b}function hd(i,e,t){const n=this.proxy,r=ct(i)?i.includes(".")?Yu(n,i):()=>n[i]:i.bind(n,n);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=_t;rr(this);const a=$u(r,s.bind(n),t);return o?rr(o):yi(),a}function Yu(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function qi(i,e){if(!it(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),St(i))qi(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)qi(i[t],e);else if(yu(i)||Zi(i))i.forEach(t=>{qi(t,e)});else if(Su(i))for(const t in i)qi(i[t],e);return i}function fd(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ks(()=>{i.isMounted=!0}),Qu(()=>{i.isUnmounting=!0}),i}const Yt=[Function,Array],dd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(i,{slots:e}){const t=Qd(),n=fd();let r;return()=>{const s=e.default&&Zu(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const p of s)if(p.type!==In){o=p;break}}const a=$e(i),{mode:l}=a;if(n.isLeaving)return mo(o);const c=Sl(o);if(!c)return mo(o);const u=ha(c,a,n,t);fa(c,u);const h=t.subTree,f=h&&Sl(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,d=!0)}if(f&&f.type!==In&&(!pi(c,f)||d)){const p=ha(f,a,n,t);if(fa(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},mo(o);l==="in-out"&&c.type!==In&&(p.delayLeave=(m,y,b)=>{const v=Ku(n,f);v[String(f.key)]=f,m._leaveCb=()=>{y(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},pd=dd;function Ku(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function ha(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:p,onAppear:m,onAfterAppear:y,onAppearCancelled:b}=e,v=String(i.key),T=Ku(t,i),S=(x,A)=>{x&&tn(x,n,9,A)},L=(x,A)=>{const D=A[1];S(x,A),Ie(x)?x.every($=>$.length<=1)&&D():x.length<=1&&D()},P={mode:s,persisted:o,beforeEnter(x){let A=a;if(!t.isMounted)if(r)A=p||a;else return;x._leaveCb&&x._leaveCb(!0);const D=T[v];D&&pi(i,D)&&D.el._leaveCb&&D.el._leaveCb(),S(A,[x])},enter(x){let A=l,D=c,$=u;if(!t.isMounted)if(r)A=m||l,D=y||c,$=b||u;else return;let re=!1;const N=x._enterCb=O=>{re||(re=!0,O?S($,[x]):S(D,[x]),P.delayedLeave&&P.delayedLeave(),x._enterCb=void 0)};A?L(A,[x,N]):N()},leave(x,A){const D=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return A();S(h,[x]);let $=!1;const re=x._leaveCb=N=>{$||($=!0,A(),N?S(g,[x]):S(d,[x]),x._leaveCb=void 0,T[D]===i&&delete T[D])};T[D]=i,f?L(f,[x,re]):re()},clone(x){return ha(x,e,t,n)}};return P}function mo(i){if($s(i))return i=Qn(i),i.children=null,i}function Sl(i){return $s(i)?i.children?i.children[0]:void 0:i}function fa(i,e){i.shapeFlag&6&&i.component?fa(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Zu(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ft?(o.patchFlag&128&&r++,n=n.concat(Zu(o.children,e,a))):(e||o.type!==In)&&n.push(a!=null?Qn(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Ci(i){return Oe(i)?{setup:i,name:i.name}:i}const Cs=i=>!!i.type.__asyncLoader,$s=i=>i.type.__isKeepAlive;function md(i,e){Ju(i,"a",e)}function gd(i,e){Ju(i,"da",e)}function Ju(i,e,t=_t){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ys(e,n,t),t){let r=t.parent;for(;r&&r.parent;)$s(r.parent.vnode)&&_d(n,e,t,r),r=r.parent}}function _d(i,e,t,n){const r=Ys(e,i,n,!0);eh(()=>{Ia(n[e],r)},t)}function Ys(i,e,t=_t,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ur(),rr(t);const a=tn(e,t,i,o);return yi(),hr(),a});return n?r.unshift(s):r.push(s),s}}const Nn=i=>(e,t=_t)=>(!Vr||i==="sp")&&Ys(i,(...n)=>e(...n),t),xd=Nn("bm"),Ks=Nn("m"),vd=Nn("bu"),yd=Nn("u"),Qu=Nn("bum"),eh=Nn("um"),Md=Nn("sp"),bd=Nn("rtg"),Sd=Nn("rtc");function wd(i,e=_t){Ys("ec",i,e)}function oi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ur(),tn(l,t,8,[i.el,a,i,e]),hr())}}const Td=Symbol();function da(i,e,t,n){let r;const s=t&&t[n];if(Ie(i)||ct(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(it(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const pa=i=>i?uh(i)?Ya(i)||i.proxy:pa(i.parent):null,Dr=wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>pa(i.parent),$root:i=>pa(i.root),$emit:i=>i.emit,$options:i=>ja(i),$forceUpdate:i=>i.f||(i.f=()=>Xa(i.update)),$nextTick:i=>i.n||(i.n=Yf.bind(i.proxy)),$watch:i=>hd.bind(i)}),go=(i,e)=>i!==tt&&!i.__isScriptSetup&&He(i,e),Ed={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(go(n,e))return o[e]=1,n[e];if(r!==tt&&He(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==tt&&He(t,e))return o[e]=4,t[e];ma&&(o[e]=0)}}const u=Dr[e];let h,f;if(u)return e==="$attrs"&&qt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==tt&&He(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,He(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return go(r,e)?(r[e]=t,!0):n!==tt&&He(n,e)?(n[e]=t,!0):He(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==tt&&He(i,o)||go(e,o)||(a=s[0])&&He(a,o)||He(n,o)||He(Dr,o)||He(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:He(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let ma=!0;function Ad(i){const e=ja(i),t=i.proxy,n=i.ctx;ma=!1,e.beforeCreate&&wl(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:y,beforeUnmount:b,destroyed:v,unmounted:T,render:S,renderTracked:L,renderTriggered:P,errorCaptured:x,serverPrefetch:A,expose:D,inheritAttrs:$,components:re,directives:N,filters:O}=e;if(c&&Cd(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const te in o){const V=o[te];Oe(V)&&(n[te]=V.bind(t))}if(r){const te=r.call(t,t);it(te)&&(i.data=Va(te))}if(ma=!0,s)for(const te in s){const V=s[te],ae=Oe(V)?V.bind(t,t):Oe(V.get)?V.get.bind(t,t):un,se=!Oe(V)&&Oe(V.set)?V.set.bind(t):un,_e=sp({get:ae,set:se});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>_e.value,set:B=>_e.value=B})}if(a)for(const te in a)th(a[te],n,t,te);if(l){const te=Oe(l)?l.call(t):l;Reflect.ownKeys(te).forEach(V=>{ud(V,te[V])})}u&&wl(u,i,"c");function ee(te,V){Ie(V)?V.forEach(ae=>te(ae.bind(t))):V&&te(V.bind(t))}if(ee(xd,h),ee(Ks,f),ee(vd,d),ee(yd,g),ee(md,p),ee(gd,m),ee(wd,x),ee(Sd,L),ee(bd,P),ee(Qu,b),ee(eh,T),ee(Md,A),Ie(D))if(D.length){const te=i.exposed||(i.exposed={});D.forEach(V=>{Object.defineProperty(te,V,{get:()=>t[V],set:ae=>t[V]=ae})})}else i.exposed||(i.exposed={});S&&i.render===un&&(i.render=S),$!=null&&(i.inheritAttrs=$),re&&(i.components=re),N&&(i.directives=N)}function Cd(i,e,t=un,n=!1){Ie(i)&&(i=ga(i));for(const r in i){const s=i[r];let o;it(s)?"default"in s?o=As(s.from||r,s.default,!0):o=As(s.from||r):o=As(s),St(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function wl(i,e,t){tn(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function th(i,e,t,n){const r=n.includes(".")?Yu(t,n):()=>t[n];if(ct(i)){const s=e[i];Oe(s)&&po(r,s)}else if(Oe(i))po(r,i.bind(t));else if(it(i))if(Ie(i))i.forEach(s=>th(s,e,t,n));else{const s=Oe(i.handler)?i.handler.bind(t):e[i.handler];Oe(s)&&po(r,s,i)}}function ja(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Os(l,c,o,!0)),Os(l,e,o)),it(e)&&s.set(e,l),l}function Os(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Os(i,s,t,!0),r&&r.forEach(o=>Os(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Ld[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Ld={data:Tl,props:hi,emits:hi,methods:hi,computed:hi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:hi,directives:hi,watch:Dd,provide:Tl,inject:Pd};function Tl(i,e){return e?i?function(){return wt(Oe(i)?i.call(this,this):i,Oe(e)?e.call(this,this):e)}:e:i}function Pd(i,e){return hi(ga(i),ga(e))}function ga(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function At(i,e){return i?[...new Set([].concat(i,e))]:e}function hi(i,e){return i?wt(wt(Object.create(null),i),e):e}function Dd(i,e){if(!i)return e;if(!e)return i;const t=wt(Object.create(null),i);for(const n in e)t[n]=At(i[n],e[n]);return t}function Rd(i,e,t,n=!1){const r={},s={};Rs(s,Js,1),i.propsDefaults=Object.create(null),nh(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Vf(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Id(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=$e(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(js(i.emitsOptions,f))continue;const d=e[f];if(l)if(He(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=nr(f);r[g]=_a(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{nh(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!He(e,h)&&((u=cr(h))===h||!He(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=_a(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!He(e,h))&&(delete s[h],c=!0)}c&&On(i,"set","$attrs")}function nh(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let u;r&&He(r,u=nr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:js(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||tt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=_a(r,l,h,c[h],i,!He(c,h))}}return o}function _a(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=He(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(rr(r),n=c[t]=l.call(null,e),yi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===cr(t))&&(n=!0))}return n}function ih(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Oe(i)){const u=h=>{l=!0;const[f,d]=ih(h,e,!0);wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return it(i)&&n.set(i,Ki),Ki;if(Ie(s))for(let u=0;u<s.length;u++){const h=nr(s[u]);El(h)&&(o[h]=tt)}else if(s)for(const u in s){const h=nr(u);if(El(h)){const f=s[u],d=o[h]=Ie(f)||Oe(f)?{type:f}:Object.assign({},f);if(d){const g=Ll(Boolean,d.type),p=Ll(String,d.type);d[0]=g>-1,d[1]=p<0||g<p,(g>-1||He(d,"default"))&&a.push(h)}}}const c=[o,a];return it(i)&&n.set(i,c),c}function El(i){return i[0]!=="$"}function Al(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Cl(i,e){return Al(i)===Al(e)}function Ll(i,e){return Ie(e)?e.findIndex(t=>Cl(t,i)):Oe(e)&&Cl(e,i)?0:-1}const rh=i=>i[0]==="_"||i==="$stable",qa=i=>Ie(i)?i.map(mn):[mn(i)],Fd=(i,e,t)=>{if(e._n)return e;const n=id((...r)=>qa(e(...r)),t);return n._c=!1,n},sh=(i,e,t)=>{const n=i._ctx;for(const r in i){if(rh(r))continue;const s=i[r];if(Oe(s))e[r]=Fd(r,s,n);else if(s!=null){const o=qa(s);e[r]=()=>o}}},oh=(i,e)=>{const t=qa(e);i.slots.default=()=>t},Od=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),Rs(e,"_",t)):sh(e,i.slots={})}else i.slots={},e&&oh(i,e);Rs(i.slots,Js,1)},Nd=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=tt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,sh(e,r)),o=e}else e&&(oh(i,e),o={default:1});if(s)for(const a in r)!rh(a)&&!(a in o)&&delete r[a]};function ah(){return{app:null,config:{isNativeTag:af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ud=0;function Bd(i,e){return function(n,r=null){Oe(n)||(n=Object.assign({},n)),r!=null&&!it(r)&&(r=null);const s=ah(),o=new Set;let a=!1;const l=s.app={_uid:Ud++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:lp,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ht(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ya(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function xa(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,d)=>xa(f,e&&(Ie(e)?e[d]:e),t,n,r));return}if(Cs(n)&&!r)return;const s=n.shapeFlag&4?Ya(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ct(c)?(u[c]=null,He(h,c)&&(h[c]=null)):St(c)&&(c.value=null)),Oe(l))Kn(l,a,12,[o,u]);else{const f=ct(l),d=St(l);if(f||d){const g=()=>{if(i.f){const p=f?He(h,l)?h[l]:u[l]:l.value;r?Ie(p)&&Ia(p,s):Ie(p)?p.includes(s)||p.push(s):f?(u[l]=[s],He(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,He(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=cd;function zd(i){return kd(i)}function kd(i,e){const t=df();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=un,insertStaticContent:g}=i,p=(E,C,G,Q=null,q=null,oe=null,ce=!1,J=null,fe=!!C.dynamicChildren)=>{if(E===C)return;E&&!pi(E,C)&&(Q=Le(E),B(E,q,oe,!0),E=null),C.patchFlag===-2&&(fe=!1,C.dynamicChildren=null);const{type:ie,ref:M,shapeFlag:_}=C;switch(ie){case Zs:m(E,C,G,Q);break;case In:y(E,C,G,Q);break;case _o:E==null&&b(C,G,Q,ce);break;case Ft:re(E,C,G,Q,q,oe,ce,J,fe);break;default:_&1?S(E,C,G,Q,q,oe,ce,J,fe):_&6?N(E,C,G,Q,q,oe,ce,J,fe):(_&64||_&128)&&ie.process(E,C,G,Q,q,oe,ce,J,fe,be)}M!=null&&q&&xa(M,E&&E.ref,oe,C||E,!C)},m=(E,C,G,Q)=>{if(E==null)n(C.el=a(C.children),G,Q);else{const q=C.el=E.el;C.children!==E.children&&c(q,C.children)}},y=(E,C,G,Q)=>{E==null?n(C.el=l(C.children||""),G,Q):C.el=E.el},b=(E,C,G,Q)=>{[E.el,E.anchor]=g(E.children,C,G,Q,E.el,E.anchor)},v=({el:E,anchor:C},G,Q)=>{let q;for(;E&&E!==C;)q=f(E),n(E,G,Q),E=q;n(C,G,Q)},T=({el:E,anchor:C})=>{let G;for(;E&&E!==C;)G=f(E),r(E),E=G;r(C)},S=(E,C,G,Q,q,oe,ce,J,fe)=>{ce=ce||C.type==="svg",E==null?L(C,G,Q,q,oe,ce,J,fe):A(E,C,q,oe,ce,J,fe)},L=(E,C,G,Q,q,oe,ce,J)=>{let fe,ie;const{type:M,props:_,shapeFlag:I,transition:H,dirs:Y}=E;if(fe=E.el=o(E.type,oe,_&&_.is,_),I&8?u(fe,E.children):I&16&&x(E.children,fe,null,Q,q,oe&&M!=="foreignObject",ce,J),Y&&oi(E,null,Q,"created"),_){for(const ge in _)ge!=="value"&&!Es(ge)&&s(fe,ge,null,_[ge],oe,E.children,Q,q,k);"value"in _&&s(fe,"value",null,_.value),(ie=_.onVnodeBeforeMount)&&fn(ie,Q,E)}P(fe,E,E.scopeId,ce,Q),Y&&oi(E,null,Q,"beforeMount");const le=(!q||q&&!q.pendingBranch)&&H&&!H.persisted;le&&H.beforeEnter(fe),n(fe,C,G),((ie=_&&_.onVnodeMounted)||le||Y)&&It(()=>{ie&&fn(ie,Q,E),le&&H.enter(fe),Y&&oi(E,null,Q,"mounted")},q)},P=(E,C,G,Q,q)=>{if(G&&d(E,G),Q)for(let oe=0;oe<Q.length;oe++)d(E,Q[oe]);if(q){let oe=q.subTree;if(C===oe){const ce=q.vnode;P(E,ce,ce.scopeId,ce.slotScopeIds,q.parent)}}},x=(E,C,G,Q,q,oe,ce,J,fe=0)=>{for(let ie=fe;ie<E.length;ie++){const M=E[ie]=J?Wn(E[ie]):mn(E[ie]);p(null,M,C,G,Q,q,oe,ce,J)}},A=(E,C,G,Q,q,oe,ce)=>{const J=C.el=E.el;let{patchFlag:fe,dynamicChildren:ie,dirs:M}=C;fe|=E.patchFlag&16;const _=E.props||tt,I=C.props||tt;let H;G&&ai(G,!1),(H=I.onVnodeBeforeUpdate)&&fn(H,G,C,E),M&&oi(C,E,G,"beforeUpdate"),G&&ai(G,!0);const Y=q&&C.type!=="foreignObject";if(ie?D(E.dynamicChildren,ie,J,G,Q,Y,oe):ce||V(E,C,J,null,G,Q,Y,oe,!1),fe>0){if(fe&16)$(J,C,_,I,G,Q,q);else if(fe&2&&_.class!==I.class&&s(J,"class",null,I.class,q),fe&4&&s(J,"style",_.style,I.style,q),fe&8){const le=C.dynamicProps;for(let ge=0;ge<le.length;ge++){const he=le[ge],W=_[he],we=I[he];(we!==W||he==="value")&&s(J,he,W,we,q,E.children,G,Q,k)}}fe&1&&E.children!==C.children&&u(J,C.children)}else!ce&&ie==null&&$(J,C,_,I,G,Q,q);((H=I.onVnodeUpdated)||M)&&It(()=>{H&&fn(H,G,C,E),M&&oi(C,E,G,"updated")},Q)},D=(E,C,G,Q,q,oe,ce)=>{for(let J=0;J<C.length;J++){const fe=E[J],ie=C[J],M=fe.el&&(fe.type===Ft||!pi(fe,ie)||fe.shapeFlag&70)?h(fe.el):G;p(fe,ie,M,null,Q,q,oe,ce,!0)}},$=(E,C,G,Q,q,oe,ce)=>{if(G!==Q){if(G!==tt)for(const J in G)!Es(J)&&!(J in Q)&&s(E,J,G[J],null,ce,C.children,q,oe,k);for(const J in Q){if(Es(J))continue;const fe=Q[J],ie=G[J];fe!==ie&&J!=="value"&&s(E,J,ie,fe,ce,C.children,q,oe,k)}"value"in Q&&s(E,"value",G.value,Q.value)}},re=(E,C,G,Q,q,oe,ce,J,fe)=>{const ie=C.el=E?E.el:a(""),M=C.anchor=E?E.anchor:a("");let{patchFlag:_,dynamicChildren:I,slotScopeIds:H}=C;H&&(J=J?J.concat(H):H),E==null?(n(ie,G,Q),n(M,G,Q),x(C.children,G,M,q,oe,ce,J,fe)):_>0&&_&64&&I&&E.dynamicChildren?(D(E.dynamicChildren,I,G,q,oe,ce,J),(C.key!=null||q&&C===q.subTree)&&lh(E,C,!0)):V(E,C,G,M,q,oe,ce,J,fe)},N=(E,C,G,Q,q,oe,ce,J,fe)=>{C.slotScopeIds=J,E==null?C.shapeFlag&512?q.ctx.activate(C,G,Q,ce,fe):O(C,G,Q,q,oe,ce,fe):Z(E,C,fe)},O=(E,C,G,Q,q,oe,ce)=>{const J=E.component=Jd(E,Q,q);if($s(E)&&(J.ctx.renderer=be),ep(J),J.asyncDep){if(q&&q.registerDep(J,ee),!E.el){const fe=J.subTree=Ht(In);y(null,fe,C,G)}return}ee(J,E,C,G,q,oe,ce)},Z=(E,C,G)=>{const Q=C.component=E.component;if(od(E,C,G))if(Q.asyncDep&&!Q.asyncResolved){te(Q,C,G);return}else Q.next=C,Zf(Q.update),Q.update();else C.el=E.el,Q.vnode=C},ee=(E,C,G,Q,q,oe,ce)=>{const J=()=>{if(E.isMounted){let{next:M,bu:_,u:I,parent:H,vnode:Y}=E,le=M,ge;ai(E,!1),M?(M.el=Y.el,te(E,M,ce)):M=Y,_&&ho(_),(ge=M.props&&M.props.onVnodeBeforeUpdate)&&fn(ge,H,M,Y),ai(E,!0);const he=fo(E),W=E.subTree;E.subTree=he,p(W,he,h(W.el),Le(W),E,q,oe),M.el=he.el,le===null&&ad(E,he.el),I&&It(I,q),(ge=M.props&&M.props.onVnodeUpdated)&&It(()=>fn(ge,H,M,Y),q)}else{let M;const{el:_,props:I}=C,{bm:H,m:Y,parent:le}=E,ge=Cs(C);if(ai(E,!1),H&&ho(H),!ge&&(M=I&&I.onVnodeBeforeMount)&&fn(M,le,C),ai(E,!0),_&&Ye){const he=()=>{E.subTree=fo(E),Ye(_,E.subTree,E,q,null)};ge?C.type.__asyncLoader().then(()=>!E.isUnmounted&&he()):he()}else{const he=E.subTree=fo(E);p(null,he,G,Q,E,q,oe),C.el=he.el}if(Y&&It(Y,q),!ge&&(M=I&&I.onVnodeMounted)){const he=C;It(()=>fn(M,le,he),q)}(C.shapeFlag&256||le&&Cs(le.vnode)&&le.vnode.shapeFlag&256)&&E.a&&It(E.a,q),E.isMounted=!0,C=G=Q=null}},fe=E.effect=new Ua(J,()=>Xa(ie),E.scope),ie=E.update=()=>fe.run();ie.id=E.uid,ai(E,!0),ie()},te=(E,C,G)=>{C.component=E;const Q=E.vnode.props;E.vnode=C,E.next=null,Id(E,C.props,Q,G),Nd(E,C.children,G),ur(),Ml(),hr()},V=(E,C,G,Q,q,oe,ce,J,fe=!1)=>{const ie=E&&E.children,M=E?E.shapeFlag:0,_=C.children,{patchFlag:I,shapeFlag:H}=C;if(I>0){if(I&128){se(ie,_,G,Q,q,oe,ce,J,fe);return}else if(I&256){ae(ie,_,G,Q,q,oe,ce,J,fe);return}}H&8?(M&16&&k(ie,q,oe),_!==ie&&u(G,_)):M&16?H&16?se(ie,_,G,Q,q,oe,ce,J,fe):k(ie,q,oe,!0):(M&8&&u(G,""),H&16&&x(_,G,Q,q,oe,ce,J,fe))},ae=(E,C,G,Q,q,oe,ce,J,fe)=>{E=E||Ki,C=C||Ki;const ie=E.length,M=C.length,_=Math.min(ie,M);let I;for(I=0;I<_;I++){const H=C[I]=fe?Wn(C[I]):mn(C[I]);p(E[I],H,G,null,q,oe,ce,J,fe)}ie>M?k(E,q,oe,!0,!1,_):x(C,G,Q,q,oe,ce,J,fe,_)},se=(E,C,G,Q,q,oe,ce,J,fe)=>{let ie=0;const M=C.length;let _=E.length-1,I=M-1;for(;ie<=_&&ie<=I;){const H=E[ie],Y=C[ie]=fe?Wn(C[ie]):mn(C[ie]);if(pi(H,Y))p(H,Y,G,null,q,oe,ce,J,fe);else break;ie++}for(;ie<=_&&ie<=I;){const H=E[_],Y=C[I]=fe?Wn(C[I]):mn(C[I]);if(pi(H,Y))p(H,Y,G,null,q,oe,ce,J,fe);else break;_--,I--}if(ie>_){if(ie<=I){const H=I+1,Y=H<M?C[H].el:Q;for(;ie<=I;)p(null,C[ie]=fe?Wn(C[ie]):mn(C[ie]),G,Y,q,oe,ce,J,fe),ie++}}else if(ie>I)for(;ie<=_;)B(E[ie],q,oe,!0),ie++;else{const H=ie,Y=ie,le=new Map;for(ie=Y;ie<=I;ie++){const ve=C[ie]=fe?Wn(C[ie]):mn(C[ie]);ve.key!=null&&le.set(ve.key,ie)}let ge,he=0;const W=I-Y+1;let we=!1,Pe=0;const Me=new Array(W);for(ie=0;ie<W;ie++)Me[ie]=0;for(ie=H;ie<=_;ie++){const ve=E[ie];if(he>=W){B(ve,q,oe,!0);continue}let De;if(ve.key!=null)De=le.get(ve.key);else for(ge=Y;ge<=I;ge++)if(Me[ge-Y]===0&&pi(ve,C[ge])){De=ge;break}De===void 0?B(ve,q,oe,!0):(Me[De-Y]=ie+1,De>=Pe?Pe=De:we=!0,p(ve,C[De],G,null,q,oe,ce,J,fe),he++)}const Ee=we?Vd(Me):Ki;for(ge=Ee.length-1,ie=W-1;ie>=0;ie--){const ve=Y+ie,De=C[ve],Je=ve+1<M?C[ve+1].el:Q;Me[ie]===0?p(null,De,G,Je,q,oe,ce,J,fe):we&&(ge<0||ie!==Ee[ge]?_e(De,G,Je,2):ge--)}}},_e=(E,C,G,Q,q=null)=>{const{el:oe,type:ce,transition:J,children:fe,shapeFlag:ie}=E;if(ie&6){_e(E.component.subTree,C,G,Q);return}if(ie&128){E.suspense.move(C,G,Q);return}if(ie&64){ce.move(E,C,G,be);return}if(ce===Ft){n(oe,C,G);for(let _=0;_<fe.length;_++)_e(fe[_],C,G,Q);n(E.anchor,C,G);return}if(ce===_o){v(E,C,G);return}if(Q!==2&&ie&1&&J)if(Q===0)J.beforeEnter(oe),n(oe,C,G),It(()=>J.enter(oe),q);else{const{leave:_,delayLeave:I,afterLeave:H}=J,Y=()=>n(oe,C,G),le=()=>{_(oe,()=>{Y(),H&&H()})};I?I(oe,Y,le):le()}else n(oe,C,G)},B=(E,C,G,Q=!1,q=!1)=>{const{type:oe,props:ce,ref:J,children:fe,dynamicChildren:ie,shapeFlag:M,patchFlag:_,dirs:I}=E;if(J!=null&&xa(J,null,G,E,!0),M&256){C.ctx.deactivate(E);return}const H=M&1&&I,Y=!Cs(E);let le;if(Y&&(le=ce&&ce.onVnodeBeforeUnmount)&&fn(le,C,E),M&6)pe(E.component,G,Q);else{if(M&128){E.suspense.unmount(G,Q);return}H&&oi(E,null,C,"beforeUnmount"),M&64?E.type.remove(E,C,G,q,be,Q):ie&&(oe!==Ft||_>0&&_&64)?k(ie,C,G,!1,!0):(oe===Ft&&_&384||!q&&M&16)&&k(fe,C,G),Q&&ne(E)}(Y&&(le=ce&&ce.onVnodeUnmounted)||H)&&It(()=>{le&&fn(le,C,E),H&&oi(E,null,C,"unmounted")},G)},ne=E=>{const{type:C,el:G,anchor:Q,transition:q}=E;if(C===Ft){de(G,Q);return}if(C===_o){T(E);return}const oe=()=>{r(G),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:ce,delayLeave:J}=q,fe=()=>ce(G,oe);J?J(E.el,oe,fe):fe()}else oe()},de=(E,C)=>{let G;for(;E!==C;)G=f(E),r(E),E=G;r(C)},pe=(E,C,G)=>{const{bum:Q,scope:q,update:oe,subTree:ce,um:J}=E;Q&&ho(Q),q.stop(),oe&&(oe.active=!1,B(ce,E,C,G)),J&&It(J,C),It(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},k=(E,C,G,Q=!1,q=!1,oe=0)=>{for(let ce=oe;ce<E.length;ce++)B(E[ce],C,G,Q,q)},Le=E=>E.shapeFlag&6?Le(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),Se=(E,C,G)=>{E==null?C._vnode&&B(C._vnode,null,null,!0):p(C._vnode||null,E,C,null,null,null,G),Ml(),Xu(),C._vnode=E},be={p,um:B,m:_e,r:ne,mt:O,mc:x,pc:V,pbc:D,n:Le,o:i};let xe,Ye;return e&&([xe,Ye]=e(be)),{render:Se,hydrate:xe,createApp:Bd(Se,xe)}}function ai({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function lh(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wn(r[s]),a.el=o.el),t||lh(o,a)),a.type===Zs&&(a.el=o.el)}}function Vd(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Gd=i=>i.__isTeleport,Ft=Symbol(void 0),Zs=Symbol(void 0),In=Symbol(void 0),_o=Symbol(void 0),Rr=[];let cn=null;function Vt(i=!1){Rr.push(cn=i?null:[])}function Hd(){Rr.pop(),cn=Rr[Rr.length-1]||null}let kr=1;function Pl(i){kr+=i}function Wd(i){return i.dynamicChildren=kr>0?cn||Ki:null,Hd(),kr>0&&cn&&cn.push(i),i}function Gt(i,e,t,n,r,s){return Wd(Pt(i,e,t,n,r,s,!0))}function Xd(i){return i?i.__v_isVNode===!0:!1}function pi(i,e){return i.type===e.type&&i.key===e.key}const Js="__vInternal",ch=({key:i})=>i??null,Ls=({ref:i,ref_key:e,ref_for:t})=>i!=null?ct(i)||St(i)||Oe(i)?{i:ln,r:i,k:e,f:!!t}:i:null;function Pt(i,e=null,t=null,n=0,r=null,s=i===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&ch(e),ref:e&&Ls(e),scopeId:qs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return a?($a(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),kr>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const Ht=jd;function jd(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Td)&&(i=In),Xd(i)){const a=Qn(i,e,!0);return t&&$a(a,t),kr>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(i)]=a:cn.push(a)),a.patchFlag|=-2,a}if(rp(i)&&(i=i.__vccOpts),e){e=qd(e);let{class:a,style:l}=e;a&&!ct(a)&&(e.class=xi(a)),it(l)&&(Uu(l)&&!Ie(l)&&(l=wt({},l)),e.style=Da(l))}const o=ct(i)?1:ld(i)?128:Gd(i)?64:it(i)?4:Oe(i)?2:0;return Pt(i,e,t,n,r,o,s,!0)}function qd(i){return i?Uu(i)||Js in i?wt({},i):i:null}function Qn(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Yd(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&ch(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Ls(e)):[r,Ls(e)]:Ls(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ft?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Qn(i.ssContent),ssFallback:i.ssFallback&&Qn(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function $d(i=" ",e=0){return Ht(Zs,null,i,e)}function mn(i){return i==null||typeof i=="boolean"?Ht(In):Ie(i)?Ht(Ft,null,i.slice()):typeof i=="object"?Wn(i):Ht(Zs,null,String(i))}function Wn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Qn(i)}function $a(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),$a(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Js in e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:ln},t=32):(e=String(e),n&64?(t=16,e=[$d(e)]):t=8);i.children=e,i.shapeFlag|=t}function Yd(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=xi([e.class,n.class]));else if(r==="style")e.style=Da([e.style,n.style]);else if(Vs(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function fn(i,e,t,n=null){tn(i,e,7,[t,n])}const Kd=ah();let Zd=0;function Jd(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Kd,s={uid:Zd++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ih(n,r),emitsOptions:qu(n,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:n.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ed.bind(null,s),i.ce&&i.ce(s),s}let _t=null;const Qd=()=>_t||ln,rr=i=>{_t=i,i.scope.on()},yi=()=>{_t&&_t.scope.off(),_t=null};function uh(i){return i.vnode.shapeFlag&4}let Vr=!1;function ep(i,e=!1){Vr=e;const{props:t,children:n}=i.vnode,r=uh(i);Rd(i,t,r,e),Od(i,n);const s=r?tp(i,e):void 0;return Vr=!1,s}function tp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Bu(new Proxy(i.ctx,Ed));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?ip(i):null;rr(i),ur();const s=Kn(n,i,0,[i.props,r]);if(hr(),yi(),Mu(s)){if(s.then(yi,yi),e)return s.then(o=>{Dl(i,o,e)}).catch(o=>{Xs(o,i,0)});i.asyncDep=s}else Dl(i,s,e)}else hh(i,e)}function Dl(i,e,t){Oe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:it(e)&&(i.setupState=Vu(e)),hh(i,t)}let Rl;function hh(i,e,t){const n=i.type;if(!i.render){if(!e&&Rl&&!n.render){const r=n.template||ja(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=wt(wt({isCustomElement:s,delimiters:a},o),l);n.render=Rl(r,c)}}i.render=n.render||un}rr(i),ur(),Ad(i),hr(),yi()}function np(i){return new Proxy(i.attrs,{get(e,t){return qt(i,"get","$attrs"),e[t]}})}function ip(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=np(i))},slots:i.slots,emit:i.emit,expose:e}}function Ya(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Vu(Bu(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dr)return Dr[t](i)},has(e,t){return t in e||t in Dr}}))}function rp(i){return Oe(i)&&"__vccOpts"in i}const sp=(i,e)=>qf(i,e,Vr),op=Symbol(""),ap=()=>As(op),lp="3.2.45",cp="http://www.w3.org/2000/svg",mi=typeof document<"u"?document:null,Il=mi&&mi.createElement("template"),up={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?mi.createElementNS(cp,i):mi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>mi.createTextNode(i),createComment:i=>mi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>mi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Il.innerHTML=n?`<svg>${i}</svg>`:i;const a=Il.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function hp(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function fp(i,e,t){const n=i.style,r=ct(t);if(t&&!r){for(const s in t)va(n,s,t[s]);if(e&&!ct(e))for(const s in e)t[s]==null&&va(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Fl=/\s*!important$/;function va(i,e,t){if(Ie(t))t.forEach(n=>va(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=dp(i,e);Fl.test(t)?i.setProperty(cr(n),t.replace(Fl,""),"important"):i[n]=t}}const Ol=["Webkit","Moz","ms"],xo={};function dp(i,e){const t=xo[e];if(t)return t;let n=nr(e);if(n!=="filter"&&n in i)return xo[e]=n;n=wu(n);for(let r=0;r<Ol.length;r++){const s=Ol[r]+n;if(s in i)return xo[e]=s}return e}const Nl="http://www.w3.org/1999/xlink";function pp(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Nl,e.slice(6,e.length)):i.setAttributeNS(Nl,e,t);else{const s=of(e);t==null||s&&!xu(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function mp(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=xu(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function gp(i,e,t,n){i.addEventListener(e,t,n)}function _p(i,e,t,n){i.removeEventListener(e,t,n)}function xp(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=vp(e);if(n){const c=s[e]=bp(n,r);gp(i,a,c,l)}else o&&(_p(i,a,o,l),s[e]=void 0)}}const Ul=/(?:Once|Passive|Capture)$/;function vp(i){let e;if(Ul.test(i)){e={};let n;for(;n=i.match(Ul);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):cr(i.slice(2)),e]}let vo=0;const yp=Promise.resolve(),Mp=()=>vo||(yp.then(()=>vo=0),vo=Date.now());function bp(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;tn(Sp(n,t.value),e,5,[n])};return t.value=i,t.attached=Mp(),t}function Sp(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Bl=/^on[a-z]/,wp=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?hp(i,n,r):e==="style"?fp(i,t,n):Vs(e)?Ra(e)||xp(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tp(i,e,n,r))?mp(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),pp(i,e,n,r))};function Tp(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Bl.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Bl.test(e)&&ct(t)?!1:e in i}const Ep={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pd.props;const Ap=wt({patchProp:wp},up);let zl;function Cp(){return zl||(zl=zd(Ap))}const Lp=(...i)=>{const e=Cp().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Pp(n);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Pp(i){return ct(i)?document.querySelector(i):i}let Mi={welcomePage:{sujet:{fr:"Portfolio - Programmation Web",en:"Portfolio - Web Programming"},ecole:{fr:"UTT (Université de Technologie de Troyes) - Branche : Réseaux et Télécommunications",en:"UTT (Université de Technologie de Troyes) - Branch : Netwoks and Telecommunications"},projets:{fr:"Mes Projets",en:"My Projects"}},sideMenu:{perso:{fr:"Projets personnels",en:"Personnal projects"},ecole:{fr:"Projets scolaires",en:"School projets"},divers:{fr:"Projets divers",en:"Miscellianous projects"}},projects:{perso:{portfolio:{description:{fr:`<p>Le portfolio sur lequel vous êtes actuellement a été codé avec <span class="important">Vue.js</span> et hébergé sur github pages. J'ai utilisé <span class="important">WebPack et Vite</span> afin de l'exporter en version statique. Les icônes 3D on été faits grâce à Blender.</p>`,en:'<p>This portfolio has been programmed with <span class="important">Vue.js</span>, it is hosted thanks to Github pages. I used <span class="important">Webpack and Vite</span> for the exportation into a static site. The 3D icons have been created thanks to Blender.</p>'},link:"https://github.com/eli-sauvage/eli-sauvage.github.io"},socialMedia:{description:{fr:`<p>Pour l'association "Junior Conseil UTT" dans laquelle je suis depuis 2021, j'ai développé une application web en <span class="important">Typescript (architecture MVC)</span> permettant d'analyser les différentes statistiques des réseaux sociaux de l'asso. L'application utlise les <span class="important">APIs</span> de Facebook, Instagram, Twitter et LinkedIn.<br>Actuellement hébergé sur un <span class="important">Cluster Kubernetees</span>.</p>`,en:`<p>For the association "Junior Conseil UTT" of which I am a member since 2021, I developped a web app in <span class="important">Typescript (MVC architecture)</span> that analyses every metrics of the club's social networks. The app uses the <span class="important">APIs</span> of Facebook, Instagram, Twitter and LinkedIn.<br>Currently hosted on a <span class="important">Kubernetees Cluster</span>.</p>`},link:"https://github.com/eli-sauvage/social-media"},helibot:{description:{fr:`<p>Mon premier projet personnel (commencé au lycée). C'est un robot discord permettant de compter le temps que passent les différents joueurs en appel vocal sur le serveur : 1mn passée sur le serveur équivaut à 1 point, le robot assigne ensuite des rôles en fonction du nombre de points.<br>Actuellement hébergé sur une instance Compute Engine de <span class="important">Google Cloud</span>.</p>`,en:'<p>My first personal project (started in highscool). This is a discord bot that counts points based on the time spent in vocal channels by the users : 1mn equals 1 point. Based on this score, the bot assigns a role to the user.<br>This project is currently hosted on a Compute Engine instance of <span class="important">Google Cloud</span></p>'},link:"https://github.com/eli-sauvage/helibot"},dawnLauncher:{description:{fr:`<p>Ce project codé en <span class="important">C#</span> est une petite application windows permettant de lancer, télécharger et mettre à jour un jeu vidéo. L'application détecte lorsque le jeu n'est plus à jour.<br>L'application gère également un système de compte utilisateur</p>`,en:'<p>This project is a small game launcher programmed in <span class="important">C#</span>. It allows the user to launch, download and update the game when needed.<br>This app also supports a user accounts system.</p>'},link:"https://github.com/eli-sauvage/DawnLauncher"}},ecole:{lo14:{description:{fr:`<p>Pour la matière "Administration des systèmes : Bash et Docker"(automne 2021), j'ai du créer un projet entièrement écrit en <span class="important">Bash</span>, reproduisant un système d'archivage de fichiers : l'application devait être capable de stocker une arborescence de fichiers ainsi que leur contenu dans un seul fichier archive, tout en permettant l'envoi d'archives via le réseau</p>`,en:'<p>In the class "Administration of systems : Bash and Docker"(autumn 2021), I had to create a project entirely in <span class="important">Bash</span>, that reproduced a file archive system : the app had to be capable of recursively stocking a file system as well as their content in a single archive file. It is also possible to send an archive on the network</p>'},link:"https://github.com/eli-sauvage/lo14-projet"},lo02:{description:{fr:`<p>Ce projet en <span class="important">Java</span> est un jeu vidéo basique, qui suit l'architecture <span class="important">Model View Controller</span>. C'est un jeu de stratégie sur lequel on peut paramétrer notre armée puis la déployer contre celle de l'adversaire dans différentes zones de batailles. Il utilise par exemple <span class="important">Java Swing ainsi que les Threads</span>.<br>Ce projet a été réalisé dans le cadre de la matière "Principe et pratique de la programmation orientée objets" en automne 2022</p>`,en:`<p>This <span class="important">java</span> project is a simple video game, built with the <span class="important">Model View Controller</span> architecture. Is it a strategy game on which we create an army and deploy it against our opponent's in differents battle zones. The project uses <span class="important">Java Swing, and Threads</span>.<br>It has been developped in the context of the class "Principle and application of object oriented programming", in autumn of 2022</p>`},link:"https://github.com/eli-sauvage/projet-lo02"},nf05:{description:{fr:`<p>Dans la matière "Introduction aux langages C et Python" (suivie au printemps 2021), j'ai pu créer une <span class="important">application console en C</span> représentant une simulation d'un gestionnaire de parking, ainsi qu'une application en <span class="important">Python</span> simulant un réseau social. Cette application python est un serveur web, avec une base de données et un frontend Bootstrap.</p>`,en:'<p>In the class "Introduction to C and Python programming languages"(in spring 2021), I created a <span class="important">console app in C</span> representing a simulation of a car park manager, as well as a <span class="important">Python</span> app simulating a social network. This python app is a web server with a database, and a frontend made with Bootstrap.</p>'},link:"https://github.com/eli-sauvage/nf05A-python-project"}},divers:{blender:{description:{fr:`<p>Dans mon temps libre et lorsque je ne programme pas, j'aime faire du design 3D sur Blender, un logiciel puissant et open-source.<br><span class="important">Toutes les icones en 3D sur ce site ont été faites à la main sur Blender !</span></p>`,en:`<p>During my spare time and when I'm not programming, I like to practise 3D modeling on Blender, a powerful and open-source software.<br><span class="important">All of the 3D icons on this website have been handmade with Blender!</span></p>`},link:""},unrealEngine:{description:{fr:`<p>Au lycée, j'ai eu l'occasion d'apprendre à utiliser le logiciel de création de jeux vidéos en 3D <span class="important">"Unreal Engine"</span> avec des amis. Grâce à cette expérience, j'ai pu animer un atelier de création de jeux vidéos pour l'association familiale de l'<span class="important">UDAF Aube</span> durant plusieurs mois.</p>`,en:'<p>In highschool, I learned to use the 3D video game creation software <span class="important">"Unreal Engine"</span>. Thanks to this experience, I was able to animate a video game creation workshop in the family association "<span class="important">UDAF Aube</span>" for several months"'},link:""}}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="149",Dp=0,kl=1,Rp=2,fh=1,Ip=2,Ar=3,ei=0,jt=1,jn=2,Zn=0,er=1,Vl=2,Gl=3,Hl=4,Fp=5,ji=100,Op=101,Np=102,Wl=103,Xl=104,Up=200,Bp=201,zp=202,kp=203,dh=204,ph=205,Vp=206,Gp=207,Hp=208,Wp=209,Xp=210,jp=0,qp=1,$p=2,ya=3,Yp=4,Kp=5,Zp=6,Jp=7,Qs=0,Qp=1,em=2,Fn=0,tm=1,nm=2,im=3,rm=4,sm=5,mh=300,sr=301,or=302,Ns=303,Ma=304,eo=306,Gr=1e3,Wt=1001,ba=1002,gt=1003,jl=1004,yo=1005,Zt=1006,om=1007,Hr=1008,wi=1009,am=1010,lm=1011,gh=1012,cm=1013,_i=1014,qn=1015,Wr=1016,um=1017,hm=1018,tr=1020,fm=1021,Jt=1023,dm=1024,pm=1025,bi=1026,ar=1027,mm=1028,gm=1029,_m=1030,xm=1031,vm=1033,Mo=33776,bo=33777,So=33778,wo=33779,ql=35840,$l=35841,Yl=35842,Kl=35843,ym=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,sc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,hc=37820,fc=37821,To=36492,Mm=36283,dc=36284,pc=36285,mc=36286,Us=2300,Bs=2301,Eo=2302,gc=2400,_c=2401,xc=2402,bm=2500,Ti=3e3,Ze=3001,Sm=3200,wm=3201,Za=0,Tm=1,pn="srgb",Xr="srgb-linear",Ao=7680,Em=519,vc=35044,yc="300 es",Sa=1035;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const Ir=Math.PI/180,jr=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Ja(i,e){return(i%e+e)%e}function Am(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Cm(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function Lm(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function Pm(i,e=1){return e-Math.abs(Ja(i,e*2)-e)}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Im(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fm(i,e){return i+Math.random()*(e-i)}function Om(i){return i*(.5-Math.random())}function Nm(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Um(i){return i*Ir}function Bm(i){return i*jr}function wa(i){return(i&i-1)===0&&i!==0}function _h(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xn=Object.freeze({__proto__:null,DEG2RAD:Ir,RAD2DEG:jr,ceilPowerOfTwo:_h,clamp:Mt,damp:Lm,degToRad:Um,denormalize:Cr,euclideanModulo:Ja,floorPowerOfTwo:zs,generateUUID:ti,inverseLerp:Cm,isPowerOfTwo:wa,lerp:Fr,mapLinear:Am,normalize:Dt,pingpong:Pm,radToDeg:Bm,randFloat:Fm,randFloatSpread:Om,randInt:Im,seededRandom:Nm,setQuaternionFromProperEuler:zm,smootherstep:Rm,smoothstep:Dm});class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=r[0],m=r[3],y=r[6],b=r[1],v=r[4],T=r[7],S=r[2],L=r[5],P=r[8];return s[0]=o*p+a*b+l*S,s[3]=o*m+a*v+l*L,s[6]=o*y+a*T+l*P,s[1]=c*p+u*b+h*S,s[4]=c*m+u*v+h*L,s[7]=c*y+u*T+h*P,s[2]=f*p+d*b+g*S,s[5]=f*m+d*v+g*L,s[8]=f*y+d*T+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(r*c-u*n)*p,e[2]=(a*n-r*o)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Nt;function xh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lo={[pn]:{[Xr]:Si},[Xr]:{[pn]:Ps}},Et={legacyMode:!0,get workingColorSpace(){return Xr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Lo[e]&&Lo[e][t]!==void 0){const n=Lo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},nn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function os(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Et.workingColorSpace){if(e=Ja(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Po(o,s,e+1/3),this.g=Po(o,s,e),this.b=Po(o,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=pn){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Et.fromWorkingColorSpace(os(this,lt),e),Mt(lt.r*255,0,255)<<16^Mt(lt.g*255,0,255)<<8^Mt(lt.b*255,0,255)<<0}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(os(this,lt),t);const n=lt.r,r=lt.g,s=lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(os(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=pn){return Et.fromWorkingColorSpace(os(this,lt),e),e!==pn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(ss);const n=Fr(nn.h,ss.h,t),r=Fr(nn.s,ss.s,t),s=Fr(nn.l,ss.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=vh;let Di;class yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=qr("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mh{constructor(e=null){this.isSource=!0,this.uuid=ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Do(r[o].image)):s.push(Do(r[o]))}else s=Do(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;class xt extends fr{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Wt,r=Wt,s=Zt,o=Hr,a=Jt,l=wi,c=xt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=ti(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=mh;xt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,r=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],y=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(d+1)/2,S=(y+1)/2,L=(u+f)/4,P=(h+p)/4,x=(g+m)/4;return v>T&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=L/n,s=P/n):T>S?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=L/r,s=x/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=P/s,r=x/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-p)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends fr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bh extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vm extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const y=l*f+c*d+u*g+h*p,b=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){const S=Math.sqrt(v),L=Math.atan2(S,y*b);m=Math.sin(m*L)/S,a=Math.sin(a*L)/S}const T=a*b;if(l=l*m+f*T,c=c*m+d*T,u=u*m+g*T,h=h*m+p*T,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new F,bc=new vn;class Kr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)li.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox),Io.applyMatrix4(e.matrixWorld),this.union(Io);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),as.subVectors(this.max,xr),Ri.subVectors(e.a,xr),Ii.subVectors(e.b,xr),Fi.subVectors(e.c,xr),Bn.subVectors(Ii,Ri),zn.subVectors(Fi,Ii),ci.subVectors(Ri,Fi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ci.z,ci.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ci.z,0,-ci.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ci.y,ci.x,0];return!Fo(t,Ri,Ii,Fi,as)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Ri,Ii,Fi,as))?!1:(ls.crossVectors(Bn,zn),t=[ls.x,ls.y,ls.z],Fo(t,Ri,Ii,Fi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new F,new F,new F,new F,new F,new F,new F,new F],li=new F,Io=new Kr,Ri=new F,Ii=new F,Fi=new F,Bn=new F,zn=new F,ci=new F,xr=new F,as=new F,ls=new F,ui=new F;function Fo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ui.fromArray(i,s);const a=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gm=new Kr,vr=new F,Oo=new F;class to{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Oo)),this.expandByPoint(vr.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new F,No=new F,cs=new F,kn=new F,Uo=new F,us=new F,Bo=new F;class Qa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.direction).multiplyScalar(t).add(this.origin),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){No.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(No);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=kn.dot(this.direction),l=-kn.dot(cs),c=kn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(cs).multiplyScalar(f).add(No),d}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),r=En.dot(En)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,r,s){Uo.subVectors(t,e),us.subVectors(n,e),Bo.crossVectors(Uo,us);let o=this.direction.dot(Bo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(us.crossVectors(kn,us));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(Bo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,p,m){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=d,y[7]=g,y[11]=p,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Wm)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Vn.crossVectors(n,zt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Vn.crossVectors(n,zt)),Vn.normalize(),hs.crossVectors(zt,Vn),r[0]=Vn.x,r[4]=hs.x,r[8]=zt.x,r[1]=Vn.y,r[5]=hs.y,r[9]=zt.y,r[2]=Vn.z,r[6]=hs.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],y=n[14],b=n[3],v=n[7],T=n[11],S=n[15],L=r[0],P=r[4],x=r[8],A=r[12],D=r[1],$=r[5],re=r[9],N=r[13],O=r[2],Z=r[6],ee=r[10],te=r[14],V=r[3],ae=r[7],se=r[11],_e=r[15];return s[0]=o*L+a*D+l*O+c*V,s[4]=o*P+a*$+l*Z+c*ae,s[8]=o*x+a*re+l*ee+c*se,s[12]=o*A+a*N+l*te+c*_e,s[1]=u*L+h*D+f*O+d*V,s[5]=u*P+h*$+f*Z+d*ae,s[9]=u*x+h*re+f*ee+d*se,s[13]=u*A+h*N+f*te+d*_e,s[2]=g*L+p*D+m*O+y*V,s[6]=g*P+p*$+m*Z+y*ae,s[10]=g*x+p*re+m*ee+y*se,s[14]=g*A+p*N+m*te+y*_e,s[3]=b*L+v*D+T*O+S*V,s[7]=b*P+v*$+T*Z+S*ae,s[11]=b*x+v*re+T*ee+S*se,s[15]=b*A+v*N+T*te+S*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],y=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+p*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+y*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],y=e[15],b=h*m*c-p*f*c+p*l*d-a*m*d-h*l*y+a*f*y,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*y-o*f*y,T=u*p*c-g*h*c+g*a*d-o*p*d-u*a*y+o*h*y,S=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,L=t*b+n*v+r*T+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=b*P,e[1]=(p*f*s-h*m*s-p*r*d+n*m*d+h*r*y-n*f*y)*P,e[2]=(a*m*s-p*l*s+p*r*c-n*m*c-a*r*y+n*l*y)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*P,e[4]=v*P,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*y+t*f*y)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*y-t*l*y)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*P,e[8]=T*P,e[9]=(g*h*s-u*p*s-g*n*d+t*p*d+u*n*y-t*h*y)*P,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*y+t*a*y)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*P,e[12]=S*P,e[13]=(u*p*r-g*h*r+g*n*f-t*p*f-u*n*m+t*h*m)*P,e[14]=(g*a*r-o*p*r-g*n*l+t*p*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,p=o*u,m=o*h,y=a*h,b=l*c,v=l*u,T=l*h,S=n.x,L=n.y,P=n.z;return r[0]=(1-(p+y))*S,r[1]=(d+T)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(d-T)*L,r[5]=(1-(f+y))*L,r[6]=(m+b)*L,r[7]=0,r[8]=(g+v)*P,r[9]=(m-b)*P,r[10]=(1-(f+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Oi.set(r[0],r[1],r[2]).length();const o=Oi.set(r[4],r[5],r[6]).length(),a=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new F,rn=new Ce,Hm=new F(0,0,0),Wm=new F(1,1,1),Vn=new F,hs=new F,zt=new F,Sc=new Ce,wc=new vn;class en{constructor(e=0,t=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const Tc=new F,Ni=new vn,An=new Ce,fs=new F,yr=new F,jm=new F,qm=new vn,Ec=new F(1,0,0),Ac=new F(0,1,0),Cc=new F(0,0,1),$m={type:"added"},Lc={type:"removed"};class nt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new F,t=new en,n=new vn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Nt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(yr,fs,this.up):An.lookAt(fs,yr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(An),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($m)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}nt.DEFAULT_UP=new F(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new F,Cn=new F,zo=new F,Ln=new F,Ui=new F,Bi=new F,Pc=new F,ko=new F,Vo=new F,Go=new F;class Rn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){sn.subVectors(r,t),Cn.subVectors(n,t),zo.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(Cn),l=sn.dot(zo),c=Cn.dot(Cn),u=Cn.dot(zo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ln),l.set(0,0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,t,n,r){return sn.subVectors(n,t),Cn.subVectors(e,t),sn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),sn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Rn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,n),Bi.subVectors(s,n),ko.subVectors(e,n);const l=Ui.dot(ko),c=Bi.dot(ko);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,r);const u=Ui.dot(Vo),h=Bi.dot(Vo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ui,o);Go.subVectors(e,s);const d=Ui.dot(Go),g=Bi.dot(Go);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Pc.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Pc,a);const y=1/(m+p+f);return o=p*y,a=f*y,t.copy(n).addScaledVector(Ui,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ym=0;class Li extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=er,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sh extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new F,ds=new We;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tl extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wh extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Km=0;const Kt=new Ce,Ho=new nt,zi=new F,kt=new Kr,Mr=new Kr,mt=new F;class hn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?wh:tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(kt.min,Mr.min),kt.expandByPoint(mt),mt.addVectors(kt.max,Mr.max),kt.expandByPoint(mt)):(kt.expandByPoint(Mr.min),kt.expandByPoint(Mr.max))}kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(e,c),mt.add(zi)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new F,u[D]=new F;const h=new F,f=new F,d=new F,g=new We,p=new We,m=new We,y=new F,b=new F;function v(D,$,re){h.fromArray(r,D*3),f.fromArray(r,$*3),d.fromArray(r,re*3),g.fromArray(o,D*2),p.fromArray(o,$*2),m.fromArray(o,re*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(y.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(N),b.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(N),c[D].add(y),c[$].add(y),c[re].add(y),u[D].add(b),u[$].add(b),u[re].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let D=0,$=T.length;D<$;++D){const re=T[D],N=re.start,O=re.count;for(let Z=N,ee=N+O;Z<ee;Z+=3)v(n[Z+0],n[Z+1],n[Z+2])}const S=new F,L=new F,P=new F,x=new F;function A(D){P.fromArray(s,D*3),x.copy(P);const $=c[D];S.copy($),S.sub(P.multiplyScalar(P.dot($))).normalize(),L.crossVectors(x,$);const N=L.dot(u[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=N}for(let D=0,$=T.length;D<$;++D){const re=T[D],N=re.start,O=re.count;for(let Z=N,ee=N+O;Z<ee;Z+=3)A(n[Z+0]),A(n[Z+1]),A(n[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let y=0;y<u;y++)f[g++]=c[d++]}return new Mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Ce,ki=new Qa,Wo=new to,br=new F,Sr=new F,wr=new F,Xo=new F,ps=new F,ms=new We,gs=new We,_s=new We,jo=new F,xs=new F;class yn extends nt{constructor(e=new hn,t=new Sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xo.fromBufferAttribute(h,e),o?ps.addScaledVector(Xo,u):ps.addScaledVector(Xo.sub(t),u))}t.add(ps)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),e.ray.intersectsSphere(Wo)===!1)||(Dc.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Dc),n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){const S=a.getX(v),L=a.getX(v+1),P=a.getX(v+2);o=vs(this,m,e,ki,c,u,S,L,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const y=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);o=vs(this,r,e,ki,c,u,y,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){const S=v,L=v+1,P=v+2;o=vs(this,m,e,ki,c,u,S,L,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const y=p,b=p+1,v=p+2;o=vs(this,r,e,ki,c,u,y,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Zm(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ei,a),l===null)return null;xs.copy(a),xs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:i}}function vs(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,br),i.getVertexPosition(a,Sr),i.getVertexPosition(l,wr);const c=Zm(i,e,t,n,br,Sr,wr,jo);if(c){r&&(ms.fromBufferAttribute(r,o),gs.fromBufferAttribute(r,a),_s.fromBufferAttribute(r,l),c.uv=Rn.getUV(jo,br,Sr,wr,ms,gs,_s,new We)),s&&(ms.fromBufferAttribute(s,o),gs.fromBufferAttribute(s,a),_s.fromBufferAttribute(s,l),c.uv2=Rn.getUV(jo,br,Sr,wr,ms,gs,_s,new We));const u={a:o,b:a,c:l,normal:new F,materialIndex:0};Rn.getNormal(br,Sr,wr,u.normal),c.face=u}return c}class Zr extends hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function g(p,m,y,b,v,T,S,L,P,x,A){const D=T/P,$=S/x,re=T/2,N=S/2,O=L/2,Z=P+1,ee=x+1;let te=0,V=0;const ae=new F;for(let se=0;se<ee;se++){const _e=se*$-N;for(let B=0;B<Z;B++){const ne=B*D-re;ae[p]=ne*b,ae[m]=_e*v,ae[y]=O,c.push(ae.x,ae.y,ae.z),ae[p]=0,ae[m]=0,ae[y]=L>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(B/P),h.push(1-se/x),te+=1}}for(let se=0;se<x;se++)for(let _e=0;_e<P;_e++){const B=f+_e+Z*se,ne=f+_e+Z*(se+1),de=f+(_e+1)+Z*(se+1),pe=f+(_e+1)+Z*se;l.push(B,ne,pe),l.push(ne,de,pe),V+=6}a.addGroup(d,V,A),d+=V,f+=te}}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const r in n)e[r]=n[r]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){return i.getRenderTarget()===null&&i.outputEncoding===Ze?pn:Xr}const Qm={clone:lr,merge:Ct};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eh extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Eh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Gi=1;class ng extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Lt(Vi,Gi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Lt(Vi,Gi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Lt(Vi,Gi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Lt(Vi,Gi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Lt(Vi,Gi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Lt(Vi,Gi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Fn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ah extends xt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ah(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zr(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Zn});s.uniforms.tEquirect.value=t;const o=new yn(r,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Zt),new ng(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const qo=new F,rg=new F,sg=new Nt;class Xn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qo.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(qo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sg.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new to,ys=new F;class nl{constructor(e=new Xn,t=new Xn,n=new Xn,r=new Xn,s=new Xn,o=new Xn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],y=n[13],b=n[14],v=n[15];return t[0].setComponents(a-r,h-l,p-f,v-m).normalize(),t[1].setComponents(a+r,h+l,p+f,v+m).normalize(),t[2].setComponents(a+s,h+c,p+d,v+y).normalize(),t[3].setComponents(a-s,h-c,p-d,v-y).normalize(),t[4].setComponents(a-o,h-u,p-g,v-b).normalize(),t[5].setComponents(a+o,h+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ys.x=r.normal.x>0?e.max.x:e.min.x,ys.y=r.normal.y>0?e.max.y:e.min.y,ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ch(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function og(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class il extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let y=0;y<u;y++){const b=y*f-o;for(let v=0;v<c;v++){const T=v*h-s;g.push(T,-b,0),p.push(0,0,1),m.push(v/a),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<a;b++){const v=b+c*y,T=b+c*(y+1),S=b+1+c*(y+1),L=b+1+c*y;d.push(v,T,L),d.push(T,S,L)}this.setIndex(d),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(m,2))}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg="vec3 transformed = vec3( position );",pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,n_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,o_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,x_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,M_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,J_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Q_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,e0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,t0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,n0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,i0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:ag,alphamap_pars_fragment:lg,alphatest_fragment:cg,alphatest_pars_fragment:ug,aomap_fragment:hg,aomap_pars_fragment:fg,begin_vertex:dg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:_g,clipping_planes_fragment:xg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Mg,color_fragment:bg,color_pars_fragment:Sg,color_pars_vertex:wg,color_vertex:Tg,common:Eg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Pg,emissivemap_fragment:Dg,emissivemap_pars_fragment:Rg,encodings_fragment:Ig,encodings_pars_fragment:Fg,envmap_fragment:Og,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Ug,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Kg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Vg,fog_fragment:Gg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Wg,lightmap_fragment:Xg,lightmap_pars_fragment:jg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:$g,lights_pars_begin:Yg,lights_toon_fragment:Zg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:e_,lights_physical_fragment:t_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:r_,lights_fragment_end:s_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:u_,map_pars_fragment:h_,map_particle_fragment:f_,map_particle_pars_fragment:d_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphcolor_vertex:g_,morphnormal_vertex:__,morphtarget_pars_vertex:x_,morphtarget_vertex:v_,normal_fragment_begin:y_,normal_fragment_maps:M_,normal_pars_fragment:b_,normal_pars_vertex:S_,normal_vertex:w_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:L_,output_fragment:P_,packing:D_,premultiplied_alpha_fragment:R_,project_vertex:I_,dithering_fragment:F_,dithering_pars_fragment:O_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:z_,shadowmap_vertex:k_,shadowmask_pars_fragment:V_,skinbase_vertex:G_,skinning_pars_vertex:H_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:j_,specularmap_pars_fragment:q_,tonemapping_fragment:$_,tonemapping_pars_fragment:Y_,transmission_fragment:K_,transmission_pars_fragment:Z_,uv_pars_fragment:J_,uv_pars_vertex:Q_,uv_vertex:e0,uv2_pars_fragment:t0,uv2_pars_vertex:n0,uv2_vertex:i0,worldpos_vertex:r0,background_vert:s0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:u0,depth_vert:h0,depth_frag:f0,distanceRGBA_vert:d0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:_0,linedashed_frag:x0,meshbasic_vert:v0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:b0,meshmatcap_vert:S0,meshmatcap_frag:w0,meshnormal_vert:T0,meshnormal_frag:E0,meshphong_vert:A0,meshphong_frag:C0,meshphysical_vert:L0,meshphysical_frag:P0,meshtoon_vert:D0,meshtoon_frag:R0,points_vert:I0,points_frag:F0,shadow_vert:O0,shadow_frag:N0,sprite_vert:U0,sprite_frag:B0},me={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},gn={basic:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ct([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ct([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ct([me.points,me.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ct([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ct([me.common,me.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ct([me.sprite,me.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ct([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ct([me.lights,me.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};gn.physical={uniforms:Ct([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ms={r:0,b:0,g:0};function z0(i,e,t,n,r,s,o){const a=new Ue(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,y){let b=!1,v=y.isScene===!0?y.background:null;v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v));const T=i.xr,S=T.getSession&&T.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===eo)?(u===void 0&&(u=new yn(new Zr(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:lr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=v.encoding!==Ze,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new yn(new il(2,2),new Ai({name:"BackgroundMaterial",uniforms:lr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=v.encoding!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,y){m.getRGB(Ms,Th(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function k0(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(O,Z,ee,te,V){let ae=!1;if(o){const se=p(te,ee,Z);c!==se&&(c=se,d(c.object)),ae=y(O,te,ee,V),ae&&b(O,te,ee,V)}else{const se=Z.wireframe===!0;(c.geometry!==te.id||c.program!==ee.id||c.wireframe!==se)&&(c.geometry=te.id,c.program=ee.id,c.wireframe=se,ae=!0)}V!==null&&t.update(V,34963),(ae||u)&&(u=!1,x(O,Z,ee,te),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,Z,ee){const te=ee.wireframe===!0;let V=a[O.id];V===void 0&&(V={},a[O.id]=V);let ae=V[Z.id];ae===void 0&&(ae={},V[Z.id]=ae);let se=ae[te];return se===void 0&&(se=m(f()),ae[te]=se),se}function m(O){const Z=[],ee=[],te=[];for(let V=0;V<r;V++)Z[V]=0,ee[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ee,attributeDivisors:te,object:O,attributes:{},index:null}}function y(O,Z,ee,te){const V=c.attributes,ae=Z.attributes;let se=0;const _e=ee.getAttributes();for(const B in _e)if(_e[B].location>=0){const de=V[B];let pe=ae[B];if(pe===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;se++}return c.attributesNum!==se||c.index!==te}function b(O,Z,ee,te){const V={},ae=Z.attributes;let se=0;const _e=ee.getAttributes();for(const B in _e)if(_e[B].location>=0){let de=ae[B];de===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),V[B]=pe,se++}c.attributes=V,c.attributesNum=se,c.index=te}function v(){const O=c.newAttributes;for(let Z=0,ee=O.length;Z<ee;Z++)O[Z]=0}function T(O){S(O,0)}function S(O,Z){const ee=c.newAttributes,te=c.enabledAttributes,V=c.attributeDivisors;ee[O]=1,te[O]===0&&(i.enableVertexAttribArray(O),te[O]=1),V[O]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Z),V[O]=Z)}function L(){const O=c.newAttributes,Z=c.enabledAttributes;for(let ee=0,te=Z.length;ee<te;ee++)Z[ee]!==O[ee]&&(i.disableVertexAttribArray(ee),Z[ee]=0)}function P(O,Z,ee,te,V,ae){n.isWebGL2===!0&&(ee===5124||ee===5125)?i.vertexAttribIPointer(O,Z,ee,V,ae):i.vertexAttribPointer(O,Z,ee,te,V,ae)}function x(O,Z,ee,te){if(n.isWebGL2===!1&&(O.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=te.attributes,ae=ee.getAttributes(),se=Z.defaultAttributeValues;for(const _e in ae){const B=ae[_e];if(B.location>=0){let ne=V[_e];if(ne===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),ne!==void 0){const de=ne.normalized,pe=ne.itemSize,k=t.get(ne);if(k===void 0)continue;const Le=k.buffer,Se=k.type,be=k.bytesPerElement;if(ne.isInterleavedBufferAttribute){const xe=ne.data,Ye=xe.stride,E=ne.offset;if(xe.isInstancedInterleavedBuffer){for(let C=0;C<B.locationSize;C++)S(B.location+C,xe.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let C=0;C<B.locationSize;C++)T(B.location+C);i.bindBuffer(34962,Le);for(let C=0;C<B.locationSize;C++)P(B.location+C,pe/B.locationSize,Se,de,Ye*be,(E+pe/B.locationSize*C)*be)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe,ne.meshPerAttribute);O.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<B.locationSize;xe++)T(B.location+xe);i.bindBuffer(34962,Le);for(let xe=0;xe<B.locationSize;xe++)P(B.location+xe,pe/B.locationSize,Se,de,pe*be,pe/B.locationSize*xe*be)}}else if(se!==void 0){const de=se[_e];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(B.location,de);break;case 3:i.vertexAttrib3fv(B.location,de);break;case 4:i.vertexAttrib4fv(B.location,de);break;default:i.vertexAttrib1fv(B.location,de)}}}}L()}function A(){re();for(const O in a){const Z=a[O];for(const ee in Z){const te=Z[ee];for(const V in te)g(te[V].object),delete te[V];delete Z[ee]}delete a[O]}}function D(O){if(a[O.id]===void 0)return;const Z=a[O.id];for(const ee in Z){const te=Z[ee];for(const V in te)g(te[V].object),delete te[V];delete Z[ee]}delete a[O.id]}function $(O){for(const Z in a){const ee=a[Z];if(ee[O.id]===void 0)continue;const te=ee[O.id];for(const V in te)g(te[V].object),delete te[V];delete ee[O.id]}}function re(){N(),u=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:re,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:T,disableUnusedAttributes:L}}function V0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function G0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),m=i.getParameter(36347),y=i.getParameter(36348),b=i.getParameter(36349),v=f>0,T=o||e.has("OES_texture_float"),S=v&&T,L=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:L}}function H0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Xn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,y=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let T=y.clippingState||null;l.value=T,T=u(g,f,v,d);for(let S=0;S!==v;++S)T[S]=t[S];y.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const y=d+p*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<y)&&(m=new Float32Array(y));for(let v=0,T=d;v!==p;++v,T+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function W0(i){let e=new WeakMap;function t(o,a){return a===Ns?o.mapping=sr:a===Ma&&(o.mapping=or),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ns||a===Ma)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ig(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rl extends Eh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Rc=[.125,.215,.35,.446,.526,.582],gi=20,$o=new rl,Ic=new Ue;let Yo=null;const fi=(1+Math.sqrt(5))/2,Wi=1/fi,Fc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fi,Wi),new F(0,fi,-Wi),new F(Wi,0,fi),new F(-Wi,0,fi),new F(fi,Wi,0),new F(-fi,Wi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Yo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo),e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Wr,format:Jt,encoding:Ti,depthBuffer:!1},r=Nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(s)),this._blurMaterial=j0(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,r){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ic),u.toneMapping=Fn,u.autoClear=!1;const d=new Sh({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new yn(new Zr,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ic),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(a.up.set(0,l[y],0),a.lookAt(c[y],0,0)):b===1?(a.up.set(0,0,l[y]),a.lookAt(0,c[y],0)):(a.up.set(0,l[y],0),a.lookAt(0,0,c[y]));const v=this._cubeSize;bs(r,b*v,y>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fc[(r-1)%Fc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gi-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const y=[];let b=0;for(let P=0;P<gi;++P){const x=P/p,A=Math.exp(-x*x/2);y.push(A),P===0?b+=A:P<m&&(b+=2*A)}for(let P=0;P<y.length;P++)y[P]=y[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=y,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const T=this._sizeLods[r],S=3*T*(r>v-$i?r-v+$i:0),L=4*(this._cubeSize-T);bs(t,S,L,3*T,2*T),l.setRenderTarget(t),l.render(h,$o)}}function X0(i){const e=[],t=[],n=[];let r=i;const s=i-$i+1+Rc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-$i?l=Rc[o-i+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,y=1,b=new Float32Array(p*g*d),v=new Float32Array(m*g*d),T=new Float32Array(y*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,x=L>2?0:-1,A=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];b.set(A,p*g*L),v.set(f,m*g*L);const D=[L,L,L,L,L,L];T.set(D,y*g*L)}const S=new hn;S.setAttribute("position",new Mn(b,p)),S.setAttribute("uv",new Mn(v,m)),S.setAttribute("faceIndex",new Mn(T,y)),e.push(S),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nc(i,e,t){const n=new Ei(i,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function j0(i,e,t){const n=new Float32Array(gi),r=new F(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Uc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ns||l===Ma,u=l===sr||l===or;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Oc(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Oc(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Y0(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,y=p.length;m<y;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let v=0,T=b.length;v<T;v+=3){const S=b[v+0],L=b[v+1],P=b[v+2];f.push(S,L,L,P,P,S)}}else{const b=g.array;p=g.version;for(let v=0,T=b.length/3-1;v<T;v+=3){const S=v+0,L=v+1,P=v+2;f.push(S,L,L,P,P,S)}}const m=new(xh(f)?wh:tl)(f,1);m.version=p;const y=s.get(h);y&&e.remove(y),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function K0(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Z0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function J0(i,e){return i[0]-e[0]}function Q0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ex(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let y=s.get(u);if(y===void 0||y.count!==m){let ee=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",ee)};var g=ee;y!==void 0&&y.texture.dispose();const T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;T===!0&&(D=1),S===!0&&(D=2),L===!0&&(D=3);let $=u.attributes.position.count*D,re=1;$>e.maxTextureSize&&(re=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const N=new Float32Array($*re*4*m),O=new bh(N,$,re,m);O.type=qn,O.needsUpdate=!0;const Z=D*4;for(let te=0;te<m;te++){const V=P[te],ae=x[te],se=A[te],_e=$*re*4*te;for(let B=0;B<V.count;B++){const ne=B*Z;T===!0&&(o.fromBufferAttribute(V,B),N[_e+ne+0]=o.x,N[_e+ne+1]=o.y,N[_e+ne+2]=o.z,N[_e+ne+3]=0),S===!0&&(o.fromBufferAttribute(ae,B),N[_e+ne+4]=o.x,N[_e+ne+5]=o.y,N[_e+ne+6]=o.z,N[_e+ne+7]=0),L===!0&&(o.fromBufferAttribute(se,B),N[_e+ne+8]=o.x,N[_e+ne+9]=o.y,N[_e+ne+10]=o.z,N[_e+ne+11]=se.itemSize===4?o.w:1)}}y={count:m,texture:O,size:new We($,re)},s.set(u,y),u.addEventListener("dispose",ee)}let b=0;for(let T=0;T<d.length;T++)b+=d[T];const v=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let S=0;S<p;S++)m[S]=[S,0];n[u.id]=m}for(let S=0;S<p;S++){const L=m[S];L[0]=S,L[1]=d[S]}m.sort(Q0);for(let S=0;S<8;S++)S<p&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(J0);const y=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const L=a[S],P=L[0],x=L[1];P!==Number.MAX_SAFE_INTEGER&&x?(y&&u.getAttribute("morphTarget"+S)!==y[P]&&u.setAttribute("morphTarget"+S,y[P]),b&&u.getAttribute("morphNormal"+S)!==b[P]&&u.setAttribute("morphNormal"+S,b[P]),r[S]=x,v+=x):(y&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),b&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const T=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function tx(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Lh=new xt,Ph=new bh,Dh=new Vm,Rh=new Ah,zc=[],kc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Hc=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),ht(t,n)}}function ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),ht(t,n)}}function lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),ht(t,n)}}function cx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function dx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function _x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Lh,r)}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dh,r)}function vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rh,r)}function yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ph,r)}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return fx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return yx}}function bx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function wx(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Tx(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ex(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ax(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cx(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lx(i,e){i.uniform1iv(this.addr,e)}function Px(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Rx(i,e){i.uniform4iv(this.addr,e)}function Ix(i,e){i.uniform1uiv(this.addr,e)}function Fx(i,e){i.uniform2uiv(this.addr,e)}function Ox(i,e){i.uniform3uiv(this.addr,e)}function Nx(i,e){i.uniform4uiv(this.addr,e)}function Ux(i,e,t){const n=this.cache,r=e.length,s=no(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lh,s[o])}function Bx(i,e,t){const n=this.cache,r=e.length,s=no(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dh,s[o])}function zx(i,e,t){const n=this.cache,r=e.length,s=no(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rh,s[o])}function kx(i,e,t){const n=this.cache,r=e.length,s=no(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ph,s[o])}function Vx(i){switch(i){case 5126:return bx;case 35664:return Sx;case 35665:return wx;case 35666:return Tx;case 35674:return Ex;case 35675:return Ax;case 35676:return Cx;case 5124:case 35670:return Lx;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Rx;case 5125:return Ix;case 36294:return Fx;case 36295:return Ox;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Mx(t.type)}}class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Wc(i,e){i.seq.push(e),i.map[e.id]=e}function Xx(i,e,t){const n=i.name,r=n.length;for(Ko.lastIndex=0;;){const s=Ko.exec(n),o=Ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wc(t,c===void 0?new Gx(a,i,e):new Hx(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Wx(a),Wc(t,h)),t=h}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Xx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let jx=0;function qx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $x(i){switch(i){case Ti:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function jc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qx(i.getShaderSource(e),o)}else return r}function Yx(i,e){const t=$x(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Kx(i,e){let t;switch(e){case tm:t="Linear";break;case nm:t="Reinhard";break;case im:t="OptimizedCineon";break;case rm:t="ACESFilmic";break;case sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Jx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qx(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lr(i){return i!==""}function qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(ev,tv)}function tv(i,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ta(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(i){return i.replace(nv,iv)}function iv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case or:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ov(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qs:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case em:e="ENVMAP_BLENDING_ADD";break}return e}function lv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rv(t),c=sv(t),u=ov(t),h=av(t),f=lv(t),d=t.isWebGL2?"":Zx(t),g=Jx(s),p=r.createProgram();let m,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),y=[d,g].filter(Lr).join(`
`),y.length>0&&(y+=`
`)):(m=[Kc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),y=[d,Kc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Yx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ta(o),o=qc(o,t),o=$c(o,t),a=Ta(a),a=qc(a,t),a=$c(a,t),o=Yc(o),a=Yc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=b+m+o,T=b+y+a,S=Xc(r,35633,v),L=Xc(r,35632,T);if(r.attachShader(p,S),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(L).trim();let re=!0,N=!0;if(r.getProgramParameter(p,35714)===!1){re=!1;const O=jc(r,S,"vertex"),Z=jc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+O+`
`+Z)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||$==="")&&(N=!1);N&&(this.diagnostics={runnable:re,programLog:A,vertexShader:{log:D,prefix:m},fragmentShader:{log:$,prefix:y}})}r.deleteShader(S),r.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new Ds(r,p)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=Qx(r,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=L,this}let uv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fv(e),t.set(e,n)),n}}class fv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function dv(i,e,t,n,r,s,o){const a=new el,l=new hv,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,D,$,re){const N=$.fog,O=re.geometry,Z=x.isMeshStandardMaterial?$.environment:null,ee=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),te=ee&&ee.mapping===eo?ee.image.height:null,V=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=ae!==void 0?ae.length:0;let _e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let B,ne,de,pe;if(V){const Ye=gn[V];B=Ye.vertexShader,ne=Ye.fragmentShader}else B=x.vertexShader,ne=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),pe=l.getFragmentShaderID(x);const k=i.getRenderTarget(),Le=x.alphaTest>0,Se=x.clearcoat>0,be=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:B,fragmentShader:ne,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?i.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Ti,map:!!x.map,matcap:!!x.matcap,envMap:!!ee,envMapMode:ee&&ee.mapping,envMapCubeUVHeight:te,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Tm,tangentSpaceNormalMap:x.normalMapType===Za,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!x.clearcoatMap,clearcoatRoughnessMap:Se&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!x.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!x.iridescenceMap,iridescenceThicknessMap:be&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===er,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:Fn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===jt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)A.push(D),A.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(A,x),b(A,x),A.push(i.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function y(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function v(x){const A=g[x.type];let D;if(A){const $=gn[A];D=Qm.clone($.uniforms)}else D=x.uniforms;return D}function T(x,A){let D;for(let $=0,re=c.length;$<re;$++){const N=c[$];if(N.cacheKey===A){D=N,++D.usedTimes;break}}return D===void 0&&(D=new cv(i,A,x,s),c.push(D)),D}function S(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:L,programs:c,dispose:P}}function pv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,p,m){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=d,y.groupOrder=g,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function a(h,f,d,g,p,m){const y=o(h,f,d,g,p,m);d.transmission>0?n.push(y):d.transparent===!0?r.push(y):t.push(y)}function l(h,f,d,g,p,m){const y=o(h,f,d,g,p,m);d.transmission>0?n.unshift(y):d.transparent===!0?r.unshift(y):t.unshift(y)}function c(h,f){t.length>1&&t.sort(h||mv),n.length>1&&n.sort(f||Zc),r.length>1&&r.sort(f||Zc)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Jc,i.set(n,[o])):r>=s.length?(o=new Jc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vv=0;function yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mv(i,e){const t=new _v,n=xv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new Ce,a=new Ce;function l(u,h){let f=0,d=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let p=0,m=0,y=0,b=0,v=0,T=0,S=0,L=0,P=0,x=0;u.sort(yv);const A=h!==!0?Math.PI:1;for(let $=0,re=u.length;$<re;$++){const N=u[$],O=N.color,Z=N.intensity,ee=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*Z*A,d+=O.g*Z*A,g+=O.b*Z*A;else if(N.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],Z);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const ae=N.shadow,se=n.get(N);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,r.directionalShadow[p]=se,r.directionalShadowMap[p]=te,r.directionalShadowMatrix[p]=N.shadow.matrix,T++}r.directional[p]=V,p++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(O).multiplyScalar(Z*A),V.distance=ee,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,r.spot[y]=V;const ae=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,ae.updateMatrices(N),N.castShadow&&x++),r.spotLightMatrix[y]=ae.matrix,N.castShadow){const se=n.get(N);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,r.spotShadow[y]=se,r.spotShadowMap[y]=te,L++}y++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(O).multiplyScalar(Z),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=V,b++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),V.distance=N.distance,V.decay=N.decay,N.castShadow){const ae=N.shadow,se=n.get(N);se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,se.shadowCameraNear=ae.camera.near,se.shadowCameraFar=ae.camera.far,r.pointShadow[m]=se,r.pointShadowMap[m]=te,r.pointShadowMatrix[m]=N.shadow.matrix,S++}r.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(Z*A),V.groundColor.copy(N.groundColor).multiplyScalar(Z*A),r.hemi[v]=V,v++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==b||D.hemiLength!==v||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==L||D.numSpotMaps!==P)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=b,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=L+P-x,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=x,D.directionalLength=p,D.pointLength=m,D.spotLength=y,D.rectAreaLength=b,D.hemiLength=v,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=L,D.numSpotMaps=P,r.version=vv++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const y=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const T=u[b];if(T.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(y),f++}else if(T.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(y),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(y),g++}else if(T.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(y),a.identity(),o.copy(T.matrixWorld),o.premultiply(y),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(y),d++}else if(T.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(y),m++}}}return{setup:l,setupView:c,state:r}}function Qc(i,e){const t=new Mv(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bv(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Qc(i,e),t.set(s,[l])):o>=a.length?(l=new Qc(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sv extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Av(i,e,t){let n=new nl;const r=new We,s=new We,o=new qe,a=new Sv({depthPacking:wm}),l=new wv,c={},u=t.maxTextureSize,h={[ei]:jt,[jt]:ei,[jn]:jn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Tv,fragmentShader:Ev}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new yn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh,this.render=function(T,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Zn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let $=0,re=T.length;$<re;$++){const N=T[$],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Z=O.getFrameExtents();if(r.multiply(Z),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,O.mapSize.y=s.y)),O.map===null){const te=this.type!==Ar?{minFilter:gt,magFilter:gt}:{};O.map=new Ei(r.x,r.y,te),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const ee=O.getViewportCount();for(let te=0;te<ee;te++){const V=O.getViewport(te);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),O.updateMatrices(N,te),n=O.getFrustum(),v(S,L,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Ar&&y(O,L),O.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(P,x,A)};function y(T,S){const L=e.update(p);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,L,f,p,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,L,d,p,null)}function b(T,S,L,P,x,A){let D=null;const $=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if($!==void 0)D=$;else if(D=L.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const re=D.uuid,N=S.uuid;let O=c[re];O===void 0&&(O={},c[re]=O);let Z=O[N];Z===void 0&&(Z=D.clone(),O[N]=Z),D=Z}return D.visible=S.visible,D.wireframe=S.wireframe,A===Ar?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:h[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=P,D.farDistance=x),D}function v(T,S,L,P,x){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ar)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const $=e.update(T),re=T.material;if(Array.isArray(re)){const N=$.groups;for(let O=0,Z=N.length;O<Z;O++){const ee=N[O],te=re[ee.materialIndex];if(te&&te.visible){const V=b(T,te,P,L.near,L.far,x);i.renderBufferDirect(L,null,$,V,T,ee)}}}else if(re.visible){const N=b(T,re,P,L.near,L.far,x);i.renderBufferDirect(L,null,$,N,T,null)}}const D=T.children;for(let $=0,re=D.length;$<re;$++)v(D[$],S,L,P,x)}}function Cv(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const X=new qe;let ue=null;const ye=new qe(0,0,0,0);return{setMask:function(Te){ue!==Te&&!R&&(i.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){R=Te},setClear:function(Te,Ke,dt,vt,ni){ni===!0&&(Te*=vt,Ke*=vt,dt*=vt),X.set(Te,Ke,dt,vt),ye.equals(X)===!1&&(i.clearColor(Te,Ke,dt,vt),ye.copy(X))},reset:function(){R=!1,ue=null,ye.set(-1,0,0,0)}}}function s(){let R=!1,X=null,ue=null,ye=null;return{setTest:function(Te){Te?Le(2929):Se(2929)},setMask:function(Te){X!==Te&&!R&&(i.depthMask(Te),X=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case jp:i.depthFunc(512);break;case qp:i.depthFunc(519);break;case $p:i.depthFunc(513);break;case ya:i.depthFunc(515);break;case Yp:i.depthFunc(514);break;case Kp:i.depthFunc(518);break;case Zp:i.depthFunc(516);break;case Jp:i.depthFunc(517);break;default:i.depthFunc(515)}ue=Te}},setLocked:function(Te){R=Te},setClear:function(Te){ye!==Te&&(i.clearDepth(Te),ye=Te)},reset:function(){R=!1,X=null,ue=null,ye=null}}}function o(){let R=!1,X=null,ue=null,ye=null,Te=null,Ke=null,dt=null,vt=null,ni=null;return{setTest:function(et){R||(et?Le(2960):Se(2960))},setMask:function(et){X!==et&&!R&&(i.stencilMask(et),X=et)},setFunc:function(et,Sn,$t){(ue!==et||ye!==Sn||Te!==$t)&&(i.stencilFunc(et,Sn,$t),ue=et,ye=Sn,Te=$t)},setOp:function(et,Sn,$t){(Ke!==et||dt!==Sn||vt!==$t)&&(i.stencilOp(et,Sn,$t),Ke=et,dt=Sn,vt=$t)},setLocked:function(et){R=et},setClear:function(et){ni!==et&&(i.clearStencil(et),ni=et)},reset:function(){R=!1,X=null,ue=null,ye=null,Te=null,Ke=null,dt=null,vt=null,ni=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,y=!1,b=null,v=null,T=null,S=null,L=null,P=null,x=null,A=!1,D=null,$=null,re=null,N=null,O=null;const Z=i.getParameter(35661);let ee=!1,te=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),ee=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ee=te>=2);let ae=null,se={};const _e=i.getParameter(3088),B=i.getParameter(2978),ne=new qe().fromArray(_e),de=new qe().fromArray(B);function pe(R,X,ue){const ye=new Uint8Array(4),Te=i.createTexture();i.bindTexture(R,Te),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let Ke=0;Ke<ue;Ke++)i.texImage2D(X+Ke,0,6408,1,1,0,6408,5121,ye);return Te}const k={};k[3553]=pe(3553,3553,1),k[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(ya),q(!1),oe(kl),Le(2884),G(Zn);function Le(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function Se(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function be(R,X){return d[R]!==X?(i.bindFramebuffer(R,X),d[R]=X,n&&(R===36009&&(d[36160]=X),R===36160&&(d[36009]=X)),!0):!1}function xe(R,X){let ue=p,ye=!1;if(R)if(ue=g.get(X),ue===void 0&&(ue=[],g.set(X,ue)),R.isWebGLMultipleRenderTargets){const Te=R.texture;if(ue.length!==Te.length||ue[0]!==36064){for(let Ke=0,dt=Te.length;Ke<dt;Ke++)ue[Ke]=36064+Ke;ue.length=Te.length,ye=!0}}else ue[0]!==36064&&(ue[0]=36064,ye=!0);else ue[0]!==1029&&(ue[0]=1029,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ye(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const E={[ji]:32774,[Op]:32778,[Np]:32779};if(n)E[Wl]=32775,E[Xl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(E[Wl]=R.MIN_EXT,E[Xl]=R.MAX_EXT)}const C={[Up]:0,[Bp]:1,[zp]:768,[dh]:770,[Xp]:776,[Hp]:774,[Vp]:772,[kp]:769,[ph]:771,[Wp]:775,[Gp]:773};function G(R,X,ue,ye,Te,Ke,dt,vt){if(R===Zn){y===!0&&(Se(3042),y=!1);return}if(y===!1&&(Le(3042),y=!0),R!==Fp){if(R!==b||vt!==A){if((v!==ji||L!==ji)&&(i.blendEquation(32774),v=ji,L=ji),vt)switch(R){case er:i.blendFuncSeparate(1,771,1,771);break;case Vl:i.blendFunc(1,1);break;case Gl:i.blendFuncSeparate(0,769,0,1);break;case Hl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case er:i.blendFuncSeparate(770,771,1,771);break;case Vl:i.blendFunc(770,1);break;case Gl:i.blendFuncSeparate(0,769,0,1);break;case Hl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,S=null,P=null,x=null,b=R,A=vt}return}Te=Te||X,Ke=Ke||ue,dt=dt||ye,(X!==v||Te!==L)&&(i.blendEquationSeparate(E[X],E[Te]),v=X,L=Te),(ue!==T||ye!==S||Ke!==P||dt!==x)&&(i.blendFuncSeparate(C[ue],C[ye],C[Ke],C[dt]),T=ue,S=ye,P=Ke,x=dt),b=R,A=!1}function Q(R,X){R.side===jn?Se(2884):Le(2884);let ue=R.side===jt;X&&(ue=!ue),q(ue),R.blending===er&&R.transparent===!1?G(Zn):G(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ye=R.stencilWrite;c.setTest(ye),ye&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),J(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(32926):Se(32926)}function q(R){D!==R&&(R?i.frontFace(2304):i.frontFace(2305),D=R)}function oe(R){R!==Dp?(Le(2884),R!==$&&(R===kl?i.cullFace(1029):R===Rp?i.cullFace(1028):i.cullFace(1032))):Se(2884),$=R}function ce(R){R!==re&&(ee&&i.lineWidth(R),re=R)}function J(R,X,ue){R?(Le(32823),(N!==X||O!==ue)&&(i.polygonOffset(X,ue),N=X,O=ue)):Se(32823)}function fe(R){R?Le(3089):Se(3089)}function ie(R){R===void 0&&(R=33984+Z-1),ae!==R&&(i.activeTexture(R),ae=R)}function M(R,X,ue){ue===void 0&&(ae===null?ue=33984+Z-1:ue=ae);let ye=se[ue];ye===void 0&&(ye={type:void 0,texture:void 0},se[ue]=ye),(ye.type!==R||ye.texture!==X)&&(ae!==ue&&(i.activeTexture(ue),ae=ue),i.bindTexture(R,X||k[R]),ye.type=R,ye.texture=X)}function _(){const R=se[ae];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function I(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(R){ne.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ne.copy(R))}function ve(R){de.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),de.copy(R))}function De(R,X){let ue=h.get(X);ue===void 0&&(ue=new WeakMap,h.set(X,ue));let ye=ue.get(R);ye===void 0&&(ye=i.getUniformBlockIndex(X,R.name),ue.set(R,ye))}function Je(R,X){const ye=h.get(X).get(R);u.get(X)!==ye&&(i.uniformBlockBinding(X,ye,R.__bindingPointIndex),u.set(X,ye))}function ft(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ae=null,se={},d={},g=new WeakMap,p=[],m=null,y=!1,b=null,v=null,T=null,S=null,L=null,P=null,x=null,A=!1,D=null,$=null,re=null,N=null,O=null,ne.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Se,bindFramebuffer:be,drawBuffers:xe,useProgram:Ye,setBlending:G,setMaterial:Q,setFlipSided:q,setCullFace:oe,setLineWidth:ce,setPolygonOffset:J,setScissorTest:fe,activeTexture:ie,bindTexture:M,unbindTexture:_,compressedTexImage2D:I,compressedTexImage3D:H,texImage2D:Pe,texImage3D:Me,updateUBOMapping:De,uniformBlockBinding:Je,texStorage2D:W,texStorage3D:we,texSubImage2D:Y,texSubImage3D:le,compressedTexSubImage2D:ge,compressedTexSubImage3D:he,scissor:Ee,viewport:ve,reset:ft}}function Lv(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,_){return y?new OffscreenCanvas(M,_):qr("canvas")}function v(M,_,I,H){let Y=1;if((M.width>H||M.height>H)&&(Y=H/Math.max(M.width,M.height)),Y<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const le=_?zs:Math.floor,ge=le(Y*M.width),he=le(Y*M.height);p===void 0&&(p=b(ge,he));const W=I?b(ge,he):p;return W.width=ge,W.height=he,W.getContext("2d").drawImage(M,0,0,ge,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ge+"x"+he+")."),W}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return wa(M.width)&&wa(M.height)}function S(M){return a?!1:M.wrapS!==Wt||M.wrapT!==Wt||M.minFilter!==gt&&M.minFilter!==Zt}function L(M,_){return M.generateMipmaps&&_&&M.minFilter!==gt&&M.minFilter!==Zt}function P(M){i.generateMipmap(M)}function x(M,_,I,H,Y=!1){if(a===!1)return _;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let le=_;return _===6403&&(I===5126&&(le=33326),I===5131&&(le=33325),I===5121&&(le=33321)),_===33319&&(I===5126&&(le=33328),I===5131&&(le=33327),I===5121&&(le=33323)),_===6408&&(I===5126&&(le=34836),I===5131&&(le=34842),I===5121&&(le=H===Ze&&Y===!1?35907:32856),I===32819&&(le=32854),I===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(M,_,I){return L(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==gt&&M.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function D(M){return M===gt||M===jl||M===yo?9728:9729}function $(M){const _=M.target;_.removeEventListener("dispose",$),N(_),_.isVideoTexture&&g.delete(_)}function re(M){const _=M.target;_.removeEventListener("dispose",re),Z(_)}function N(M){const _=n.get(M);if(_.__webglInit===void 0)return;const I=M.source,H=m.get(I);if(H){const Y=H[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&O(M),Object.keys(H).length===0&&m.delete(I)}n.remove(M)}function O(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const I=M.source,H=m.get(I);delete H[_.__cacheKey],o.memory.textures--}function Z(M){const _=M.texture,I=n.get(M),H=n.get(_);if(H.__webglTexture!==void 0&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)i.deleteFramebuffer(I.__webglFramebuffer[Y]),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Y]);else{if(i.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Y=0;Y<I.__webglColorRenderbuffer.length;Y++)I.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Y=0,le=_.length;Y<le;Y++){const ge=n.get(_[Y]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(_[Y])}n.remove(_),n.remove(M)}let ee=0;function te(){ee=0}function V(){const M=ee;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ee+=1,M}function ae(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function se(M,_){const I=n.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const H=M.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(I,M,_);return}}t.bindTexture(3553,I.__webglTexture,33984+_)}function _e(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Se(I,M,_);return}t.bindTexture(35866,I.__webglTexture,33984+_)}function B(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){Se(I,M,_);return}t.bindTexture(32879,I.__webglTexture,33984+_)}function ne(M,_){const I=n.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,_);return}t.bindTexture(34067,I.__webglTexture,33984+_)}const de={[Gr]:10497,[Wt]:33071,[ba]:33648},pe={[gt]:9728,[jl]:9984,[yo]:9986,[Zt]:9729,[om]:9985,[Hr]:9987};function k(M,_,I){if(I?(i.texParameteri(M,10242,de[_.wrapS]),i.texParameteri(M,10243,de[_.wrapT]),(M===32879||M===35866)&&i.texParameteri(M,32882,de[_.wrapR]),i.texParameteri(M,10240,pe[_.magFilter]),i.texParameteri(M,10241,pe[_.minFilter])):(i.texParameteri(M,10242,33071),i.texParameteri(M,10243,33071),(M===32879||M===35866)&&i.texParameteri(M,32882,33071),(_.wrapS!==Wt||_.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,10240,D(_.magFilter)),i.texParameteri(M,10241,D(_.minFilter)),_.minFilter!==gt&&_.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===gt||_.minFilter!==yo&&_.minFilter!==Hr||_.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Wr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(M,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Le(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",$));const H=_.source;let Y=m.get(H);Y===void 0&&(Y={},m.set(H,Y));const le=ae(_);if(le!==M.__cacheKey){Y[le]===void 0&&(Y[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Y[le].usedTimes++;const ge=Y[M.__cacheKey];ge!==void 0&&(Y[M.__cacheKey].usedTimes--,ge.usedTimes===0&&O(_)),M.__cacheKey=le,M.__webglTexture=Y[le].texture}return I}function Se(M,_,I){let H=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=35866),_.isData3DTexture&&(H=32879);const Y=Le(M,_),le=_.source;t.bindTexture(H,M.__webglTexture,33984+I);const ge=n.get(le);if(le.version!==ge.__version||Y===!0){t.activeTexture(33984+I),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const he=S(_)&&T(_.image)===!1;let W=v(_.image,he,!1,u);W=ie(_,W);const we=T(W)||a,Pe=s.convert(_.format,_.encoding);let Me=s.convert(_.type),Ee=x(_.internalFormat,Pe,Me,_.encoding,_.isVideoTexture);k(H,_,we);let ve;const De=_.mipmaps,Je=a&&_.isVideoTexture!==!0,ft=ge.__version===void 0||Y===!0,R=A(_,W,we);if(_.isDepthTexture)Ee=6402,a?_.type===qn?Ee=36012:_.type===_i?Ee=33190:_.type===tr?Ee=35056:Ee=33189:_.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===bi&&Ee===6402&&_.type!==gh&&_.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=_i,Me=s.convert(_.type)),_.format===ar&&Ee===6402&&(Ee=34041,_.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=tr,Me=s.convert(_.type))),ft&&(Je?t.texStorage2D(3553,1,Ee,W.width,W.height):t.texImage2D(3553,0,Ee,W.width,W.height,0,Pe,Me,null));else if(_.isDataTexture)if(De.length>0&&we){Je&&ft&&t.texStorage2D(3553,R,Ee,De[0].width,De[0].height);for(let X=0,ue=De.length;X<ue;X++)ve=De[X],Je?t.texSubImage2D(3553,X,0,0,ve.width,ve.height,Pe,Me,ve.data):t.texImage2D(3553,X,Ee,ve.width,ve.height,0,Pe,Me,ve.data);_.generateMipmaps=!1}else Je?(ft&&t.texStorage2D(3553,R,Ee,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,Pe,Me,W.data)):t.texImage2D(3553,0,Ee,W.width,W.height,0,Pe,Me,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Je&&ft&&t.texStorage3D(35866,R,Ee,De[0].width,De[0].height,W.depth);for(let X=0,ue=De.length;X<ue;X++)ve=De[X],_.format!==Jt?Pe!==null?Je?t.compressedTexSubImage3D(35866,X,0,0,0,ve.width,ve.height,W.depth,Pe,ve.data,0,0):t.compressedTexImage3D(35866,X,Ee,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,X,0,0,0,ve.width,ve.height,W.depth,Pe,Me,ve.data):t.texImage3D(35866,X,Ee,ve.width,ve.height,W.depth,0,Pe,Me,ve.data)}else{Je&&ft&&t.texStorage2D(3553,R,Ee,De[0].width,De[0].height);for(let X=0,ue=De.length;X<ue;X++)ve=De[X],_.format!==Jt?Pe!==null?Je?t.compressedTexSubImage2D(3553,X,0,0,ve.width,ve.height,Pe,ve.data):t.compressedTexImage2D(3553,X,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,X,0,0,ve.width,ve.height,Pe,Me,ve.data):t.texImage2D(3553,X,Ee,ve.width,ve.height,0,Pe,Me,ve.data)}else if(_.isDataArrayTexture)Je?(ft&&t.texStorage3D(35866,R,Ee,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,Pe,Me,W.data)):t.texImage3D(35866,0,Ee,W.width,W.height,W.depth,0,Pe,Me,W.data);else if(_.isData3DTexture)Je?(ft&&t.texStorage3D(32879,R,Ee,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,Pe,Me,W.data)):t.texImage3D(32879,0,Ee,W.width,W.height,W.depth,0,Pe,Me,W.data);else if(_.isFramebufferTexture){if(ft)if(Je)t.texStorage2D(3553,R,Ee,W.width,W.height);else{let X=W.width,ue=W.height;for(let ye=0;ye<R;ye++)t.texImage2D(3553,ye,Ee,X,ue,0,Pe,Me,null),X>>=1,ue>>=1}}else if(De.length>0&&we){Je&&ft&&t.texStorage2D(3553,R,Ee,De[0].width,De[0].height);for(let X=0,ue=De.length;X<ue;X++)ve=De[X],Je?t.texSubImage2D(3553,X,0,0,Pe,Me,ve):t.texImage2D(3553,X,Ee,Pe,Me,ve);_.generateMipmaps=!1}else Je?(ft&&t.texStorage2D(3553,R,Ee,W.width,W.height),t.texSubImage2D(3553,0,0,0,Pe,Me,W)):t.texImage2D(3553,0,Ee,Pe,Me,W);L(_,we)&&P(H),ge.__version=le.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function be(M,_,I){if(_.image.length!==6)return;const H=Le(M,_),Y=_.source;t.bindTexture(34067,M.__webglTexture,33984+I);const le=n.get(Y);if(Y.version!==le.__version||H===!0){t.activeTexture(33984+I),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,W=[];for(let X=0;X<6;X++)!ge&&!he?W[X]=v(_.image[X],!1,!0,c):W[X]=he?_.image[X].image:_.image[X],W[X]=ie(_,W[X]);const we=W[0],Pe=T(we)||a,Me=s.convert(_.format,_.encoding),Ee=s.convert(_.type),ve=x(_.internalFormat,Me,Ee,_.encoding),De=a&&_.isVideoTexture!==!0,Je=le.__version===void 0||H===!0;let ft=A(_,we,Pe);k(34067,_,Pe);let R;if(ge){De&&Je&&t.texStorage2D(34067,ft,ve,we.width,we.height);for(let X=0;X<6;X++){R=W[X].mipmaps;for(let ue=0;ue<R.length;ue++){const ye=R[ue];_.format!==Jt?Me!==null?De?t.compressedTexSubImage2D(34069+X,ue,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(34069+X,ue,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+X,ue,0,0,ye.width,ye.height,Me,Ee,ye.data):t.texImage2D(34069+X,ue,ve,ye.width,ye.height,0,Me,Ee,ye.data)}}}else{R=_.mipmaps,De&&Je&&(R.length>0&&ft++,t.texStorage2D(34067,ft,ve,W[0].width,W[0].height));for(let X=0;X<6;X++)if(he){De?t.texSubImage2D(34069+X,0,0,0,W[X].width,W[X].height,Me,Ee,W[X].data):t.texImage2D(34069+X,0,ve,W[X].width,W[X].height,0,Me,Ee,W[X].data);for(let ue=0;ue<R.length;ue++){const Te=R[ue].image[X].image;De?t.texSubImage2D(34069+X,ue+1,0,0,Te.width,Te.height,Me,Ee,Te.data):t.texImage2D(34069+X,ue+1,ve,Te.width,Te.height,0,Me,Ee,Te.data)}}else{De?t.texSubImage2D(34069+X,0,0,0,Me,Ee,W[X]):t.texImage2D(34069+X,0,ve,Me,Ee,W[X]);for(let ue=0;ue<R.length;ue++){const ye=R[ue];De?t.texSubImage2D(34069+X,ue+1,0,0,Me,Ee,ye.image[X]):t.texImage2D(34069+X,ue+1,ve,Me,Ee,ye.image[X])}}}L(_,Pe)&&P(34067),le.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function xe(M,_,I,H,Y){const le=s.convert(I.format,I.encoding),ge=s.convert(I.type),he=x(I.internalFormat,le,ge,I.encoding);n.get(_).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,he,_.width,_.height,_.depth,0,le,ge,null):t.texImage2D(Y,0,he,_.width,_.height,0,le,ge,null)),t.bindFramebuffer(36160,M),J(_)?f.framebufferTexture2DMultisampleEXT(36160,H,Y,n.get(I).__webglTexture,0,ce(_)):(Y===3553||Y>=34069&&Y<=34074)&&i.framebufferTexture2D(36160,H,Y,n.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ye(M,_,I){if(i.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let H=33189;if(I||J(_)){const Y=_.depthTexture;Y&&Y.isDepthTexture&&(Y.type===qn?H=36012:Y.type===_i&&(H=33190));const le=ce(_);J(_)?f.renderbufferStorageMultisampleEXT(36161,le,H,_.width,_.height):i.renderbufferStorageMultisample(36161,le,H,_.width,_.height)}else i.renderbufferStorage(36161,H,_.width,_.height);i.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const H=ce(_);I&&J(_)===!1?i.renderbufferStorageMultisample(36161,H,35056,_.width,_.height):J(_)?f.renderbufferStorageMultisampleEXT(36161,H,35056,_.width,_.height):i.renderbufferStorage(36161,34041,_.width,_.height),i.framebufferRenderbuffer(36160,33306,36161,M)}else{const H=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Y=0;Y<H.length;Y++){const le=H[Y],ge=s.convert(le.format,le.encoding),he=s.convert(le.type),W=x(le.internalFormat,ge,he,le.encoding),we=ce(_);I&&J(_)===!1?i.renderbufferStorageMultisample(36161,we,W,_.width,_.height):J(_)?f.renderbufferStorageMultisampleEXT(36161,we,W,_.width,_.height):i.renderbufferStorage(36161,W,_.width,_.height)}}i.bindRenderbuffer(36161,null)}function E(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),se(_.depthTexture,0);const H=n.get(_.depthTexture).__webglTexture,Y=ce(_);if(_.depthTexture.format===bi)J(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):i.framebufferTexture2D(36160,36096,3553,H,0);else if(_.depthTexture.format===ar)J(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):i.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function C(M){const _=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");E(_.__webglFramebuffer,M)}else if(I){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]=i.createRenderbuffer(),Ye(_.__webglDepthbuffer[H],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Ye(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function G(M,_,I){const H=n.get(M);_!==void 0&&xe(H.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&C(M)}function Q(M){const _=M.texture,I=n.get(M),H=n.get(_);M.addEventListener("dispose",re),M.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,o.memory.textures++);const Y=M.isWebGLCubeRenderTarget===!0,le=M.isWebGLMultipleRenderTargets===!0,ge=T(M)||a;if(Y){I.__webglFramebuffer=[];for(let he=0;he<6;he++)I.__webglFramebuffer[he]=i.createFramebuffer()}else{if(I.__webglFramebuffer=i.createFramebuffer(),le)if(r.drawBuffers){const he=M.texture;for(let W=0,we=he.length;W<we;W++){const Pe=n.get(he[W]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&J(M)===!1){const he=le?_:[_];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let W=0;W<he.length;W++){const we=he[W];I.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(36161,I.__webglColorRenderbuffer[W]);const Pe=s.convert(we.format,we.encoding),Me=s.convert(we.type),Ee=x(we.internalFormat,Pe,Me,we.encoding,M.isXRRenderTarget===!0),ve=ce(M);i.renderbufferStorageMultisample(36161,ve,Ee,M.width,M.height),i.framebufferRenderbuffer(36160,36064+W,36161,I.__webglColorRenderbuffer[W])}i.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),k(34067,_,ge);for(let he=0;he<6;he++)xe(I.__webglFramebuffer[he],M,_,36064,34069+he);L(_,ge)&&P(34067),t.unbindTexture()}else if(le){const he=M.texture;for(let W=0,we=he.length;W<we;W++){const Pe=he[W],Me=n.get(Pe);t.bindTexture(3553,Me.__webglTexture),k(3553,Pe,ge),xe(I.__webglFramebuffer,M,Pe,36064+W,3553),L(Pe,ge)&&P(3553)}t.unbindTexture()}else{let he=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?he=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,H.__webglTexture),k(he,_,ge),xe(I.__webglFramebuffer,M,_,36064,he),L(_,ge)&&P(he),t.unbindTexture()}M.depthBuffer&&C(M)}function q(M){const _=T(M)||a,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let H=0,Y=I.length;H<Y;H++){const le=I[H];if(L(le,_)){const ge=M.isWebGLCubeRenderTarget?34067:3553,he=n.get(le).__webglTexture;t.bindTexture(ge,he),P(ge),t.unbindTexture()}}}function oe(M){if(a&&M.samples>0&&J(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,H=M.height;let Y=16384;const le=[],ge=M.stencilBuffer?33306:36096,he=n.get(M),W=M.isWebGLMultipleRenderTargets===!0;if(W)for(let we=0;we<_.length;we++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let we=0;we<_.length;we++){le.push(36064+we),M.depthBuffer&&le.push(ge);const Pe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Pe===!1&&(M.depthBuffer&&(Y|=256),M.stencilBuffer&&(Y|=1024)),W&&i.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[we]),Pe===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),W){const Me=n.get(_[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Me,0)}i.blitFramebuffer(0,0,I,H,0,0,I,H,Y,9728),d&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let we=0;we<_.length;we++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,he.__webglColorRenderbuffer[we]);const Pe=n.get(_[we]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Pe,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function ce(M){return Math.min(h,M.samples)}function J(M){const _=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function fe(M){const _=o.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function ie(M,_){const I=M.encoding,H=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Sa||I!==Ti&&(I===Ze?a===!1?e.has("EXT_sRGB")===!0&&H===Jt?(M.format=Sa,M.minFilter=Zt,M.generateMipmaps=!1):_=yh.sRGBToLinear(_):(H!==Jt||Y!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),_}this.allocateTextureUnit=V,this.resetTextureUnits=te,this.setTexture2D=se,this.setTexture2DArray=_e,this.setTexture3D=B,this.setTextureCube=ne,this.rebindTextures=G,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=J}function Pv(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===wi)return 5121;if(s===um)return 32819;if(s===hm)return 32820;if(s===am)return 5120;if(s===lm)return 5122;if(s===gh)return 5123;if(s===cm)return 5124;if(s===_i)return 5125;if(s===qn)return 5126;if(s===Wr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fm)return 6406;if(s===Jt)return 6408;if(s===dm)return 6409;if(s===pm)return 6410;if(s===bi)return 6402;if(s===ar)return 34041;if(s===Sa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mm)return 6403;if(s===gm)return 36244;if(s===_m)return 33319;if(s===xm)return 33320;if(s===vm)return 36249;if(s===Mo||s===bo||s===So||s===wo)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===So)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===So)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ql||s===$l||s===Yl||s===Kl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$l)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ym)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Jl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zl)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===hc||s===fc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ql)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===To)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===To)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Mm||s===dc||s===pc||s===mc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===To)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Dv extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rv={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),y=this._getHandJoint(c,p);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=m.radius),y.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Iv extends xt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=_i),n===void 0&&u===ar&&(n=tr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1}}class Fv extends fr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,y=null;const b=[],v=[],T=new Set,S=new Map,L=new Lt;L.layers.enable(1),L.viewport=new qe;const P=new Lt;P.layers.enable(2),P.viewport=new qe;const x=[L,P],A=new Dv;A.layers.enable(1),A.layers.enable(2);let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ne=b[B];return ne===void 0&&(ne=new Zo,b[B]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(B){let ne=b[B];return ne===void 0&&(ne=new Zo,b[B]=ne),ne.getGripSpace()},this.getHand=function(B){let ne=b[B];return ne===void 0&&(ne=new Zo,b[B]=ne),ne.getHandSpace()};function re(B){const ne=v.indexOf(B.inputSource);if(ne===-1)return;const de=b[ne];de!==void 0&&de.dispatchEvent({type:B.type,data:B.inputSource})}function N(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let B=0;B<b.length;B++){const ne=v[B];ne!==null&&(v[B]=null,b[B].disconnect(ne))}D=null,$=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,y=null,_e.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),y=new Ei(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:wi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ne=null,de=null,pe=null;p.depth&&(pe=p.stencil?35056:33190,ne=p.stencil?ar:bi,de=p.stencil?tr:_i);const k={colorFormat:32856,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(k),r.updateRenderState({layers:[f]}),y=new Ei(f.textureWidth,f.textureHeight,{format:Jt,type:wi,depthTexture:new Iv(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Le=e.properties.get(y);Le.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){for(let ne=0;ne<B.removed.length;ne++){const de=B.removed[ne],pe=v.indexOf(de);pe>=0&&(v[pe]=null,b[pe].disconnect(de))}for(let ne=0;ne<B.added.length;ne++){const de=B.added[ne];let pe=v.indexOf(de);if(pe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=v.length){v.push(de),pe=Le;break}else if(v[Le]===null){v[Le]=de,pe=Le;break}if(pe===-1)break}const k=b[pe];k&&k.connect(de)}}const Z=new F,ee=new F;function te(B,ne,de){Z.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const pe=Z.distanceTo(ee),k=ne.projectionMatrix.elements,Le=de.projectionMatrix.elements,Se=k[14]/(k[10]-1),be=k[14]/(k[10]+1),xe=(k[9]+1)/k[5],Ye=(k[9]-1)/k[5],E=(k[8]-1)/k[0],C=(Le[8]+1)/Le[0],G=Se*E,Q=Se*C,q=pe/(-E+C),oe=q*-E;ne.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(oe),B.translateZ(q),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ce=Se+q,J=be+q,fe=G-oe,ie=Q+(pe-oe),M=xe*be/J*ce,_=Ye*be/J*ce;B.projectionMatrix.makePerspective(fe,ie,M,_,ce,J)}function V(B,ne){ne===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ne.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;A.near=P.near=L.near=B.near,A.far=P.far=L.far=B.far,(D!==A.near||$!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,$=A.far);const ne=B.parent,de=A.cameras;V(A,ne);for(let k=0;k<de.length;k++)V(de[k],ne);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const pe=B.children;for(let k=0,Le=pe.length;k<Le;k++)pe[k].updateMatrixWorld(!0);de.length===2?te(A,L,P):A.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.getPlanes=function(){return T};let ae=null;function se(B,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let pe=!1;de.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let k=0;k<de.length;k++){const Le=de[k];let Se=null;if(d!==null)Se=d.getViewport(Le);else{const xe=h.getViewSubImage(f,Le);Se=xe.viewport,k===0&&(e.setRenderTargetTextures(y,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(y))}let be=x[k];be===void 0&&(be=new Lt,be.layers.enable(k),be.viewport=new qe,x[k]=be),be.matrix.fromArray(Le.transform.matrix),be.projectionMatrix.fromArray(Le.projectionMatrix),be.viewport.set(Se.x,Se.y,Se.width,Se.height),k===0&&A.matrix.copy(be.matrix),pe===!0&&A.cameras.push(be)}}for(let de=0;de<b.length;de++){const pe=v[de],k=b[de];pe!==null&&k!==void 0&&k.update(pe,ne,c||o)}if(ae&&ae(B,ne),ne.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let de=null;for(const pe of T)ne.detectedPlanes.has(pe)||(de===null&&(de=[]),de.push(pe));if(de!==null)for(const pe of de)T.delete(pe),S.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of ne.detectedPlanes)if(!T.has(pe))T.add(pe),S.set(pe,ne.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const k=S.get(pe);pe.lastChangedTime>k&&(S.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}g=null}const _e=new Ch;_e.setAnimationLoop(se),this.setAnimationLoop=function(B){ae=B},this.dispose=function(){}}}function Ov(i,e){function t(p,m){m.color.getRGB(p.fogColor.value,Th(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,y,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,y,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Nv(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,v){const T=v.program;n.uniformBlockBinding(b,T)}function c(b,v){let T=r[b.id];T===void 0&&(g(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(b,S);const L=e.render.frame;s[b.id]!==L&&(f(b),s[b.id]=L)}function u(b){const v=h();b.__bindingPointIndex=v;const T=i.createBuffer(),S=b.__size,L=b.usage;return i.bindBuffer(35345,T),i.bufferData(35345,S,L),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=r[b.id],T=b.uniforms,S=b.__cache;i.bindBuffer(35345,v);for(let L=0,P=T.length;L<P;L++){const x=T[L];if(d(x,L,S)===!0){const A=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let $=0;for(let re=0;re<D.length;re++){const N=D[re],O=p(N);typeof N=="number"?(x.__data[0]=N,i.bufferSubData(35345,A+$,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=N.elements[0],x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=N.elements[0],x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=N.elements[0]):(N.toArray(x.__data,$),$+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,A,x.__data)}}i.bindBuffer(35345,null)}function d(b,v,T){const S=b.value;if(T[v]===void 0){if(typeof S=="number")T[v]=S;else{const L=Array.isArray(S)?S:[S],P=[];for(let x=0;x<L.length;x++)P.push(L[x].clone());T[v]=P}return!0}else if(typeof S=="number"){if(T[v]!==S)return T[v]=S,!0}else{const L=Array.isArray(T[v])?T[v]:[T[v]],P=Array.isArray(S)?S:[S];for(let x=0;x<L.length;x++){const A=L[x];if(A.equals(P[x])===!1)return A.copy(P[x]),!0}}return!1}function g(b){const v=b.uniforms;let T=0;const S=16;let L=0;for(let P=0,x=v.length;P<x;P++){const A=v[P],D={boundary:0,storage:0},$=Array.isArray(A.value)?A.value:[A.value];for(let re=0,N=$.length;re<N;re++){const O=$[re],Z=p(O);D.boundary+=Z.boundary,D.storage+=Z.storage}if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,P>0){L=T%S;const re=S-L;L!==0&&re-D.boundary<0&&(T+=S-L,A.__offset=T)}T+=D.storage}return L=T%S,L>0&&(T+=S-L),b.__size=T,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function y(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}function Uv(){const i=qr("canvas");return i.style.display="block",i}function Ih(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Uv(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const p=this;let m=!1,y=0,b=0,v=null,T=-1,S=null;const L=new qe,P=new qe;let x=null,A=e.width,D=e.height,$=1,re=null,N=null;const O=new qe(0,0,A,D),Z=new qe(0,0,A,D);let ee=!1;const te=new nl;let V=!1,ae=!1,se=null;const _e=new Ce,B=new We,ne=new F,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return v===null?$:1}let k=t;function Le(w,z){for(let j=0;j<w.length;j++){const U=w[j],K=e.getContext(U,z);if(K!==null)return K}return null}try{const w={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",De,!1),k===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),k=Le(z,w),k===null)throw Le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,be,xe,Ye,E,C,G,Q,q,oe,ce,J,fe,ie,M,_,I,H,Y,le,ge,he,W,we;function Pe(){Se=new $0(k),be=new G0(k,Se,i),Se.init(be),he=new Pv(k,Se,be),xe=new Cv(k,Se,be),Ye=new Z0,E=new pv,C=new Lv(k,Se,xe,E,be,he,Ye),G=new W0(p),Q=new q0(p),q=new og(k,be),W=new k0(k,Se,q,be),oe=new Y0(k,q,Ye,W),ce=new tx(k,oe,q,Ye),Y=new ex(k,be,C),_=new H0(E),J=new dv(p,G,Q,Se,be,W,_),fe=new Ov(p,E),ie=new gv,M=new bv(Se,be),H=new z0(p,G,Q,xe,ce,u,o),I=new Av(p,ce,be),we=new Nv(k,Ye,be,xe),le=new V0(k,Se,Ye,be),ge=new K0(k,Se,Ye,be),Ye.programs=J.programs,p.capabilities=be,p.extensions=Se,p.properties=E,p.renderLists=ie,p.shadowMap=I,p.state=xe,p.info=Ye}Pe();const Me=new Fv(p,k);this.xr=Me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(A,D,!1))},this.getSize=function(w){return w.set(A,D)},this.setSize=function(w,z,j){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=w,D=z,e.width=Math.floor(w*$),e.height=Math.floor(z*$),j!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(A*$,D*$).floor()},this.setDrawingBufferSize=function(w,z,j){A=w,D=z,$=j,e.width=Math.floor(w*j),e.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,z,j,U){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,z,j,U),xe.viewport(L.copy(O).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,z,j,U){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,z,j,U),xe.scissor(P.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){xe.setScissorTest(ee=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(w=!0,z=!0,j=!0){let U=0;w&&(U|=16384),z&&(U|=256),j&&(U|=1024),k.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ie.dispose(),M.dispose(),E.dispose(),G.dispose(),Q.dispose(),ce.dispose(),W.dispose(),we.dispose(),J.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ye),Me.removeEventListener("sessionend",Te),se&&(se.dispose(),se=null),Ke.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const w=Ye.autoReset,z=I.enabled,j=I.autoUpdate,U=I.needsUpdate,K=I.type;Pe(),Ye.autoReset=w,I.enabled=z,I.autoUpdate=j,I.needsUpdate=U,I.type=K}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const z=w.target;z.removeEventListener("dispose",Je),ft(z)}function ft(w){R(w),E.remove(w)}function R(w){const z=E.get(w).programs;z!==void 0&&(z.forEach(function(j){J.releaseProgram(j)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,U,K,Ae){z===null&&(z=de);const Re=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Kh(w,z,j,U,K);xe.setMaterial(U,Re);let Be=j.index,Xe=1;U.wireframe===!0&&(Be=oe.getWireframeAttribute(j),Xe=2);const ke=j.drawRange,Ve=j.attributes.position;let st=ke.start*Xe,Ut=(ke.start+ke.count)*Xe;Ae!==null&&(st=Math.max(st,Ae.start*Xe),Ut=Math.min(Ut,(Ae.start+Ae.count)*Xe)),Be!==null?(st=Math.max(st,0),Ut=Math.min(Ut,Be.count)):Ve!=null&&(st=Math.max(st,0),Ut=Math.min(Ut,Ve.count));const wn=Ut-st;if(wn<0||wn===1/0)return;W.setup(K,U,Ne,j,Be);let ii,ot=le;if(Be!==null&&(ii=q.get(Be),ot=ge,ot.setIndex(ii)),K.isMesh)U.wireframe===!0?(xe.setLineWidth(U.wireframeLinewidth*pe()),ot.setMode(1)):ot.setMode(4);else if(K.isLine){let Ge=U.linewidth;Ge===void 0&&(Ge=1),xe.setLineWidth(Ge*pe()),K.isLineSegments?ot.setMode(1):K.isLineLoop?ot.setMode(2):ot.setMode(3)}else K.isPoints?ot.setMode(0):K.isSprite&&ot.setMode(4);if(K.isInstancedMesh)ot.renderInstances(st,wn,K.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,oo=Math.min(j.instanceCount,Ge);ot.renderInstances(st,wn,oo)}else ot.render(st,wn)},this.compile=function(w,z){function j(U,K,Ae){U.transparent===!0&&U.side===jn&&U.forceSinglePass===!1?(U.side=jt,U.needsUpdate=!0,$t(U,K,Ae),U.side=ei,U.needsUpdate=!0,$t(U,K,Ae),U.side=jn):$t(U,K,Ae)}f=M.get(w),f.init(),g.push(f),w.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),w.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let Ae=0;Ae<K.length;Ae++){const Re=K[Ae];j(Re,w,U)}else j(K,w,U)}),g.pop(),f=null};let X=null;function ue(w){X&&X(w)}function ye(){Ke.stop()}function Te(){Ke.start()}const Ke=new Ch;Ke.setAnimationLoop(ue),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(w){X=w,Me.setAnimationLoop(w),w===null?Ke.stop():Ke.start()},Me.addEventListener("sessionstart",ye),Me.addEventListener("sessionend",Te),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,z,v),f=M.get(w,g.length),f.init(),g.push(f),_e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,V=_.init(this.clippingPlanes,ae),h=ie.get(w,d.length),h.init(),d.push(h),dt(w,z,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(re,N),V===!0&&_.beginShadows();const j=f.state.shadowsArray;if(I.render(j,w,z),V===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(h,w),f.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let K=0,Ae=U.length;K<Ae;K++){const Re=U[K];vt(h,w,Re,Re.viewport)}}else vt(h,w,z);v!==null&&(C.updateMultisampleRenderTarget(v),C.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(p,w,z),W.resetDefaultState(),T=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function dt(w,z,j,U){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){U&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const Re=ce.update(w),Ne=w.material;Ne.visible&&h.push(w,Re,Ne,j,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ye.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ye.render.frame),!w.frustumCulled||te.intersectsObject(w))){U&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const Re=ce.update(w),Ne=w.material;if(Array.isArray(Ne)){const Be=Re.groups;for(let Xe=0,ke=Be.length;Xe<ke;Xe++){const Ve=Be[Xe],st=Ne[Ve.materialIndex];st&&st.visible&&h.push(w,Re,st,j,ne.z,Ve)}}else Ne.visible&&h.push(w,Re,Ne,j,ne.z,null)}}const Ae=w.children;for(let Re=0,Ne=Ae.length;Re<Ne;Re++)dt(Ae[Re],z,j,U)}function vt(w,z,j,U){const K=w.opaque,Ae=w.transmissive,Re=w.transparent;f.setupLightsView(j),V===!0&&_.setGlobalState(p.clippingPlanes,j),Ae.length>0&&ni(K,z,j),U&&xe.viewport(L.copy(U)),K.length>0&&et(K,z,j),Ae.length>0&&et(Ae,z,j),Re.length>0&&et(Re,z,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ni(w,z,j){const U=be.isWebGL2;se===null&&(se=new Ei(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Wr:wi,minFilter:Hr,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(B),U?se.setSize(B.x,B.y):se.setSize(zs(B.x),zs(B.y));const K=p.getRenderTarget();p.setRenderTarget(se),p.clear();const Ae=p.toneMapping;p.toneMapping=Fn,et(w,z,j),p.toneMapping=Ae,C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),p.setRenderTarget(K)}function et(w,z,j){const U=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Ae=w.length;K<Ae;K++){const Re=w[K],Ne=Re.object,Be=Re.geometry,Xe=U===null?Re.material:U,ke=Re.group;Ne.layers.test(j.layers)&&Sn(Ne,z,j,Be,Xe,ke)}}function Sn(w,z,j,U,K,Ae){w.onBeforeRender(p,z,j,U,K,Ae),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(p,z,j,U,w,Ae),K.transparent===!0&&K.side===jn&&K.forceSinglePass===!1?(K.side=jt,K.needsUpdate=!0,p.renderBufferDirect(j,z,U,K,w,Ae),K.side=ei,K.needsUpdate=!0,p.renderBufferDirect(j,z,U,K,w,Ae),K.side=jn):p.renderBufferDirect(j,z,U,K,w,Ae),w.onAfterRender(p,z,j,U,K,Ae)}function $t(w,z,j){z.isScene!==!0&&(z=de);const U=E.get(w),K=f.state.lights,Ae=f.state.shadowsArray,Re=K.state.version,Ne=J.getParameters(w,K.state,Ae,z,j),Be=J.getProgramCacheKey(Ne);let Xe=U.programs;U.environment=w.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(w.isMeshStandardMaterial?Q:G).get(w.envMap||U.environment),Xe===void 0&&(w.addEventListener("dispose",Je),Xe=new Map,U.programs=Xe);let ke=Xe.get(Be);if(ke!==void 0){if(U.currentProgram===ke&&U.lightsStateVersion===Re)return ul(w,Ne),ke}else Ne.uniforms=J.getUniforms(w),w.onBuild(j,Ne,p),w.onBeforeCompile(Ne,p),ke=J.acquireProgram(Ne,Be),Xe.set(Be,ke),U.uniforms=Ne.uniforms;const Ve=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=_.uniform),ul(w,Ne),U.needsLights=Jh(w),U.lightsStateVersion=Re,U.needsLights&&(Ve.ambientLightColor.value=K.state.ambient,Ve.lightProbe.value=K.state.probe,Ve.directionalLights.value=K.state.directional,Ve.directionalLightShadows.value=K.state.directionalShadow,Ve.spotLights.value=K.state.spot,Ve.spotLightShadows.value=K.state.spotShadow,Ve.rectAreaLights.value=K.state.rectArea,Ve.ltc_1.value=K.state.rectAreaLTC1,Ve.ltc_2.value=K.state.rectAreaLTC2,Ve.pointLights.value=K.state.point,Ve.pointLightShadows.value=K.state.pointShadow,Ve.hemisphereLights.value=K.state.hemi,Ve.directionalShadowMap.value=K.state.directionalShadowMap,Ve.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ve.spotShadowMap.value=K.state.spotShadowMap,Ve.spotLightMatrix.value=K.state.spotLightMatrix,Ve.spotLightMap.value=K.state.spotLightMap,Ve.pointShadowMap.value=K.state.pointShadowMap,Ve.pointShadowMatrix.value=K.state.pointShadowMatrix);const st=ke.getUniforms(),Ut=Ds.seqWithValue(st.seq,Ve);return U.currentProgram=ke,U.uniformsList=Ut,ke}function ul(w,z){const j=E.get(w);j.outputEncoding=z.outputEncoding,j.instancing=z.instancing,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Kh(w,z,j,U,K){z.isScene!==!0&&(z=de),C.resetTextureUnits();const Ae=z.fog,Re=U.isMeshStandardMaterial?z.environment:null,Ne=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ti,Be=(U.isMeshStandardMaterial?Q:G).get(U.envMap||Re),Xe=U.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!U.normalMap&&!!j.attributes.tangent,Ve=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,Ut=!!j.morphAttributes.color,wn=U.toneMapped?p.toneMapping:Fn,ii=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=ii!==void 0?ii.length:0,Ge=E.get(U),oo=f.state.lights;if(V===!0&&(ae===!0||w!==S)){const Bt=w===S&&U.id===T;_.setState(U,w,Bt)}let pt=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==oo.state.version||Ge.outputEncoding!==Ne||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Be||U.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_.numPlanes||Ge.numIntersection!==_.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==ke||Ge.morphTargets!==Ve||Ge.morphNormals!==st||Ge.morphColors!==Ut||Ge.toneMapping!==wn||be.isWebGL2===!0&&Ge.morphTargetsCount!==ot)&&(pt=!0):(pt=!0,Ge.__version=U.version);let ri=Ge.currentProgram;pt===!0&&(ri=$t(U,z,K));let hl=!1,_r=!1,ao=!1;const Tt=ri.getUniforms(),si=Ge.uniforms;if(xe.useProgram(ri.program)&&(hl=!0,_r=!0,ao=!0),U.id!==T&&(T=U.id,_r=!0),hl||S!==w){if(Tt.setValue(k,"projectionMatrix",w.projectionMatrix),be.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,_r=!0,ao=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Bt=Tt.map.cameraPosition;Bt!==void 0&&Bt.setValue(k,ne.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&Tt.setValue(k,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Tt.setOptional(k,K,"bindMatrix"),Tt.setOptional(k,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(be.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Tt.setValue(k,"boneTexture",Bt.boneTexture,C),Tt.setValue(k,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lo=j.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&be.isWebGL2===!0)&&Y.update(K,j,U,ri),(_r||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Tt.setValue(k,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(si.envMap.value=Be,si.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),_r&&(Tt.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&Zh(si,ao),Ae&&U.fog===!0&&fe.refreshFogUniforms(si,Ae),fe.refreshMaterialUniforms(si,U,$,D,se),Ds.upload(k,Ge.uniformsList,si,C)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ds.upload(k,Ge.uniformsList,si,C),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Tt.setValue(k,"center",K.center),Tt.setValue(k,"modelViewMatrix",K.modelViewMatrix),Tt.setValue(k,"normalMatrix",K.normalMatrix),Tt.setValue(k,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Bt=U.uniformsGroups;for(let co=0,Qh=Bt.length;co<Qh;co++)if(be.isWebGL2){const fl=Bt[co];we.update(fl,ri),we.bind(fl,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function Zh(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,z,j){E.get(w.texture).__webglTexture=z,E.get(w.depthTexture).__webglTexture=j;const U=E.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=j===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const j=E.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){v=w,y=z,b=j;let U=!0,K=null,Ae=!1,Re=!1;if(w){const Be=E.get(w);Be.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),U=!1):Be.__webglFramebuffer===void 0?C.setupRenderTarget(w):Be.__hasExternalTextures&&C.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const ke=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=ke[z],Ae=!0):be.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?K=E.get(w).__webglMultisampledFramebuffer:K=ke,L.copy(w.viewport),P.copy(w.scissor),x=w.scissorTest}else L.copy(O).multiplyScalar($).floor(),P.copy(Z).multiplyScalar($).floor(),x=ee;if(xe.bindFramebuffer(36160,K)&&be.drawBuffers&&U&&xe.drawBuffers(w,K),xe.viewport(L),xe.scissor(P),xe.setScissorTest(x),Ae){const Be=E.get(w.texture);k.framebufferTexture2D(36160,36064,34069+z,Be.__webglTexture,j)}else if(Re){const Be=E.get(w.texture),Xe=z||0;k.framebufferTextureLayer(36160,36064,Be.__webglTexture,j||0,Xe)}T=-1},this.readRenderTargetPixels=function(w,z,j,U,K,Ae,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){xe.bindFramebuffer(36160,Ne);try{const Be=w.texture,Xe=Be.format,ke=Be.type;if(Xe!==Jt&&he.convert(Xe)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Wr&&(Se.has("EXT_color_buffer_half_float")||be.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ke!==wi&&he.convert(ke)!==k.getParameter(35738)&&!(ke===qn&&(be.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-U&&j>=0&&j<=w.height-K&&k.readPixels(z,j,U,K,he.convert(Xe),he.convert(ke),Ae)}finally{const Be=v!==null?E.get(v).__webglFramebuffer:null;xe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(w,z,j=0){const U=Math.pow(2,-j),K=Math.floor(z.image.width*U),Ae=Math.floor(z.image.height*U);C.setTexture2D(z,0),k.copyTexSubImage2D(3553,j,0,0,w.x,w.y,K,Ae),xe.unbindTexture()},this.copyTextureToTexture=function(w,z,j,U=0){const K=z.image.width,Ae=z.image.height,Re=he.convert(j.format),Ne=he.convert(j.type);C.setTexture2D(j,0),k.pixelStorei(37440,j.flipY),k.pixelStorei(37441,j.premultiplyAlpha),k.pixelStorei(3317,j.unpackAlignment),z.isDataTexture?k.texSubImage2D(3553,U,w.x,w.y,K,Ae,Re,Ne,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(3553,U,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Re,z.mipmaps[0].data):k.texSubImage2D(3553,U,w.x,w.y,Re,Ne,z.image),U===0&&j.generateMipmaps&&k.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j,U,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Be=he.convert(U.format),Xe=he.convert(U.type);let ke;if(U.isData3DTexture)C.setTexture3D(U,0),ke=32879;else if(U.isDataArrayTexture)C.setTexture2DArray(U,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,U.flipY),k.pixelStorei(37441,U.premultiplyAlpha),k.pixelStorei(3317,U.unpackAlignment);const Ve=k.getParameter(3314),st=k.getParameter(32878),Ut=k.getParameter(3316),wn=k.getParameter(3315),ii=k.getParameter(32877),ot=j.isCompressedTexture?j.mipmaps[0]:j.image;k.pixelStorei(3314,ot.width),k.pixelStorei(32878,ot.height),k.pixelStorei(3316,w.min.x),k.pixelStorei(3315,w.min.y),k.pixelStorei(32877,w.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(ke,K,z.x,z.y,z.z,Ae,Re,Ne,Be,Xe,ot.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ke,K,z.x,z.y,z.z,Ae,Re,Ne,Be,ot.data)):k.texSubImage3D(ke,K,z.x,z.y,z.z,Ae,Re,Ne,Be,Xe,ot),k.pixelStorei(3314,Ve),k.pixelStorei(32878,st),k.pixelStorei(3316,Ut),k.pixelStorei(3315,wn),k.pixelStorei(32877,ii),K===0&&U.generateMipmaps&&k.generateMipmap(ke),xe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){y=0,b=0,v=null,xe.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bv extends Ih{}Bv.prototype.isWebGL1Renderer=!0;class zv extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const eu=new F,tu=new qe,nu=new qe,kv=new F,iu=new Ce;class Vv extends yn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;tu.fromBufferAttribute(r.attributes.skinIndex,e),nu.fromBufferAttribute(r.attributes.skinWeight,e),eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=nu.getComponent(s);if(o!==0){const a=tu.getComponent(s);iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kv.copy(eu).applyMatrix4(iu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ea extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gv extends xt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=gt,u=gt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new Ce,Hv=new Ce;class ol{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Hv;ru.multiplyMatrices(a,t[s]),ru.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_h(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gv(t,e,e,Jt,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ea),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Fh extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new F,ou=new F,au=new Ce,Jo=new Qa,Ss=new to;class Wv extends nt{constructor(e=new hn,t=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)su.fromBufferAttribute(t,r-1),ou.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=su.distanceTo(ou);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Ss.radius+=s,e.ray.intersectsSphere(Ss)===!1)return;au.copy(r).invert(),Jo.copy(e.ray).applyMatrix4(au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const y=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=y,T=b-1;v<T;v+=d){const S=g.getX(v),L=g.getX(v+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,L),Jo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=y,T=b-1;v<T;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Jo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Xv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new We:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,r=[],s=[],o=[],a=new F,l=new Ce;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Mt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qo extends Li{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jv extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Gn(i,e,t){return Oh(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ws(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Oh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qv(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function lu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Nh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class io{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $v extends io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:s=e,a=2*t-n;break;case xc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=e,l=2*n-t;break;case xc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),p=g*g,m=p*g,y=-f*m+2*f*p-f*g,b=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*p+.5*g,T=d*m-d*p;for(let S=0;S!==a;++S)s[S]=y*o[u+S]+b*o[c+S]+v*o[l+S]+T*o[h+S];return s}}class Yv extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Kv extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $v(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case Eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Gn(n,s,o),this.values=Gn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Oh(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Gn(this.times),t=Gn(this.values),n=this.getValueSize(),r=this.getInterpolation()===Eo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Gn(e,0,o),this.values=Gn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Gn(this.times,0),t=Gn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Bs;class pr extends bn{}pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Us;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uh extends bn{}Uh.prototype.ValueTypeName="color";class $r extends bn{}$r.prototype.ValueTypeName="number";class Zv extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)vn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class mr extends bn{InterpolantFactoryMethodLinear(e){return new Zv(this.times,this.values,this.getValueSize(),e)}}mr.prototype.ValueTypeName="quaternion";mr.prototype.DefaultInterpolation=Bs;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends bn{}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Us;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends bn{}Yr.prototype.ValueTypeName="vector";class Jv{constructor(e,t=-1,n,r=bm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ey(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(bn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=qv(l);l=lu(l,1,u),c=lu(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new $r(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],y=[];Nh(d,m,y,g),m.length!==0&&p.push(new h(f,m,y))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],y=[];for(let b=0;b!==f[g].morphTargets.length;++b){const v=f[g];m.push(v.time),y.push(v.morphTarget===p?1:0)}r.push(new $r(".morphTargetInfluence["+p+"]",m,y))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Yr,d+".position",f,"pos",r),n(mr,d+".quaternion",f,"rot",r),n(Yr,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Qv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $r;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Uh;case"quaternion":return mr;case"bool":case"boolean":return pr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ey(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qv(i.type);if(i.times===void 0){const t=[],n=[];Nh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ks={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ty{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ny=new ty;class ro{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Pn={};class iy extends Error{constructor(e,t){super(e),this.response=t}}class ry extends ro{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ks.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:r});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(y){b();function b(){h.read().then(({done:v,value:T})=>{if(v)y.close();else{p+=T.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let L=0,P=u.length;L<P;L++){const x=u[L];x.onProgress&&x.onProgress(S)}y.enqueue(T),b()}})}}});return new Response(m)}else throw new iy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ks.add(e,c);const u=Pn[e];delete Pn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sy extends ro{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ks.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qr("img");function l(){u(),ks.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class oy extends ro{constructor(e){super(e)}load(e,t,n,r){const s=new xt,o=new sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class so extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ea=new Ce,cu=new F,uu=new F;class al{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ay extends al{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ly extends so{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hu=new Ce,Tr=new F,ta=new F;class cy extends al{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),ta.copy(n.position),ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ta),n.updateMatrixWorld(),r.makeTranslation(-Tr.x,-Tr.y,-Tr.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}class fu extends so{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uy extends al{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new uy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bh extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fy{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ll="\\[\\]\\.:\\/",dy=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",py="[^"+ll.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",cl),gy=/(WCOD+)?/.source.replace("WCOD",py),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),vy=new RegExp("^"+my+gy+_y+xy+"$"),yy=["material","materials","bones","map"];class My{constructor(e,t,n){const r=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(e){const t=vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);yy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=My;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class by{constructor(e,t,n=0,r=1/0){this.ray=new Qa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Aa(e,this,n,t),n.sort(du),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Aa(e[r],this,n,t);return n.sort(du),n}}function du(i,e){return i.distance-e.distance}function Aa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Aa(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var pu=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(pu(""))}catch{pu=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Qt=Uint8Array,$n=Uint16Array,Ca=Uint32Array,zh=new Qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kh=new Qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Sy=new Qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vh=function(i,e){for(var t=new $n(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Ca(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Gh=Vh(zh,2),Hh=Gh[0],wy=Gh[1];Hh[28]=258,wy[258]=28;var Ty=Vh(kh,0),Ey=Ty[0],La=new $n(32768);for(var Qe=0;Qe<32768;++Qe){var Hn=(Qe&43690)>>>1|(Qe&21845)<<1;Hn=(Hn&52428)>>>2|(Hn&13107)<<2,Hn=(Hn&61680)>>>4|(Hn&3855)<<4,La[Qe]=((Hn&65280)>>>8|(Hn&255)<<8)>>>1}var Or=function(i,e,t){for(var n=i.length,r=0,s=new $n(e);r<n;++r)++s[i[r]-1];var o=new $n(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new $n(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[La[h]>>>l]=c}else for(a=new $n(n),r=0;r<n;++r)i[r]&&(a[r]=La[o[i[r]-1]++]>>>15-i[r]);return a},Jr=new Qt(288);for(var Qe=0;Qe<144;++Qe)Jr[Qe]=8;for(var Qe=144;Qe<256;++Qe)Jr[Qe]=9;for(var Qe=256;Qe<280;++Qe)Jr[Qe]=7;for(var Qe=280;Qe<288;++Qe)Jr[Qe]=8;var Wh=new Qt(32);for(var Qe=0;Qe<32;++Qe)Wh[Qe]=5;var Ay=Or(Jr,9,1),Cy=Or(Wh,5,1),na=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},on=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ia=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ly=function(i){return(i/8|0)+(i&7&&1)},Py=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof $n?$n:i instanceof Ca?Ca:Qt)(t-e);return n.set(i.subarray(e,t)),n},Dy=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Qt(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Qt(n*3));var o=function(k){var Le=e.length;if(k>Le){var Se=new Qt(Math.max(Le*2,k));Se.set(e),e=Se}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=on(i,l,1);var p=on(i,l+1,3);if(l+=3,p)if(p==1)u=Ay,h=Cy,f=9,d=5;else if(p==2){var v=on(i,l,31)+257,T=on(i,l+10,15)+4,S=v+on(i,l+5,31)+1;l+=14;for(var L=new Qt(S),P=new Qt(19),x=0;x<T;++x)P[Sy[x]]=on(i,l+x*3,7);l+=T*3;for(var A=na(P),D=(1<<A)-1,$=Or(P,A,1),x=0;x<S;){var re=$[on(i,l,D)];l+=re&15;var m=re>>>4;if(m<16)L[x++]=m;else{var N=0,O=0;for(m==16?(O=3+on(i,l,3),l+=2,N=L[x-1]):m==17?(O=3+on(i,l,7),l+=3):m==18&&(O=11+on(i,l,127),l+=7);O--;)L[x++]=N}}var Z=L.subarray(0,v),ee=L.subarray(v);f=na(Z),d=na(ee),u=Or(Z,f,1),h=Or(ee,d,1)}else throw"invalid block type";else{var m=Ly(l)+4,y=i[m-4]|i[m-3]<<8,b=m+y;if(b>n){if(s)throw"unexpected EOF";break}r&&o(c+y),e.set(i.subarray(m,b),c),t.b=c+=y,t.p=l=b*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var te=(1<<f)-1,V=(1<<d)-1,ae=l;;ae=l){var N=u[ia(i,l)&te],se=N>>>4;if(l+=N&15,l>g){if(s)throw"unexpected EOF";break}if(!N)throw"invalid length/literal";if(se<256)e[c++]=se;else if(se==256){ae=l,u=null;break}else{var _e=se-254;if(se>264){var x=se-257,B=zh[x];_e=on(i,l,(1<<B)-1)+Hh[x],l+=B}var ne=h[ia(i,l)&V],de=ne>>>4;if(!ne)throw"invalid distance";l+=ne&15;var ee=Ey[de];if(de>3){var B=kh[de];ee+=ia(i,l)&(1<<B)-1,l+=B}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var pe=c+_e;c<pe;c+=4)e[c]=e[c-ee],e[c+1]=e[c+1-ee],e[c+2]=e[c+2-ee],e[c+3]=e[c+3-ee];c=pe}}t.l=u,t.p=ae,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:Py(e,0,c)},Ry=new Qt(0),Iy=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Fy(i,e){return Dy((Iy(i),i.subarray(2,-4)),e)}var Oy=typeof TextDecoder<"u"&&new TextDecoder,Ny=0;try{Oy.decode(Ry,{stream:!0}),Ny=1}catch{}function Xh(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function Uy(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[a]=l}return r}function By(i,e,t,n){const r=Xh(i,n,e),s=Uy(r,n,i,e),o=new qe(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function zy(i,e,t,n,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],p=l[h-d];a[h][d]=g+p;const m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=p*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let p=0;p<=t;++p)g[p]=s.slice(0);g[0][0]=1;for(let p=1;p<=n;++p){let m=0;const y=h-p,b=t-p;h>=p&&(g[d][0]=g[f][0]/a[b+1][y],m=g[d][0]*a[y][b]);const v=y>=-1?1:-y,T=h-1<=b?p-1:t-h;for(let L=v;L<=T;++L)g[d][L]=(g[f][L]-g[f][L-1])/a[b+1][y+L],m+=g[d][L]*a[y+L][b];h<=b&&(g[d][p]=-g[f][p-1]/a[b+1][h],m+=g[d][p]*a[h][b]),o[p][h]=m;const S=f;f=d,d=S}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function ky(i,e,t,n,r){const s=r<i?r:i,o=[],a=Xh(i,n,e),l=zy(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new qe(0,0,0);return o}function Vy(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function Gy(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new F(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(Vy(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function Hy(i,e,t,n,r){const s=ky(i,e,t,n,r);return Gy(s)}class Wy extends Xv{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new F){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=By(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new F){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Hy(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let ze,rt,Rt;class Xy extends ro{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?fy.extractUrlBase(e):s.path,a=new ry(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(Zy(e))ze=new Ky().parse(e);else{const r=Yh(e);if(!Jy(r))throw new Error("THREE.FBXLoader: Unknown format.");if(gu(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+gu(r));ze=new Yy().parse(r)}const n=new oy(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new jy(n,this.manager).parse(ze)}}class jy{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){rt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new qy().parse(r);return this.parseScene(r,s,n),Rt}parseConnections(){const e=new Map;return"Connections"in ze&&ze.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ze.Objects){const n=ze.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in ze.Objects){const n=ze.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Gr:Wt,n.wrapT=a===0?Gr:Wt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=rt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new xt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new xt):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in ze.Objects){const n=ze.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!rt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Qo;break;case"lambert":a=new jv;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Qo;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Ue().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Ue().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Ue().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Ue().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Ue().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Ue().fromArray(e.SpecularColor.value));const s=this;return rt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=Ze);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=Ze);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Ns,r.envMap.encoding=Ze);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=Ze);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in ze.Objects&&t in ze.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=rt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ze.Objects){const n=ze.Objects.Deformer;for(const r in n){const s=n[r],o=rt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Ce().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=rt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Rt=new Yi;const r=this.parseModels(e.skeletons,t,n),s=ze.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),rt.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Rt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),Rt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=qh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new $y().parse();Rt.children.length===1&&Rt.children[0].isGroup&&(Rt.children[0].animations=a,Rt=Rt.children[0]),Rt.animations=a}parseModels(e,t,n){const r=new Map,s=ze.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=rt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Ea;break;case"Null":default:u=new Yi;break}u.name=l.attrName?je.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new Ea,s.matrixWorld.copy(c.transformLink),s.name=r?je.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=ze.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new nt;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new Lt(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new rl(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new nt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=ze.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new nt;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Ue().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new fu(s,o,a,l);break;case 1:t=new hy(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=xn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=xn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new ly(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new fu(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Qo({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new Vv(s,o),r.normalizeSkinWeights()):r=new yn(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Fh({color:3342591,linewidth:1});return new Wv(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=$h(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&rt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=ze.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Rt.add(e.target)):e.lookAt(new F().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];rt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;rt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new ol(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ze.Objects){const t=ze.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ce().fromArray(s.Matrix.a)}):e[r.Node]=new Ce().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ze&&"AmbientColor"in ze.GlobalSettings){const e=ze.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Ue(t,n,r);Rt.add(new Bh(s,1))}}}}class qy{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ze.Objects){const n=ze.Objects.Geometry;for(const r in n){const s=rt.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(h){return ze.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=$h(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=qh(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new hn;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Ot(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Ot(a.colors,3)),t&&(s.setAttribute("skinIndex",new tl(a.weightsIndices,4)),s.setAttribute("skinWeight",new Ot(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Nt().getNormalMatrix(r),u=new Ot(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new Ot(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let p,m=!1;d<0&&(d=d^-1,m=!0);let y=[],b=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=Ts(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){b.push(v.weight),y.push(v.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],T=[0,0,0,0];b.forEach(function(S,L){let P=S,x=y[L];T.forEach(function(A,D,$){if(P>A){$[D]=P,P=A;const re=v[D];v[D]=x,x=re}})}),y=v,b=T}for(;b.length<4;)b.push(0),y.push(0);for(let v=0;v<4;++v)u.push(b[v]),h.push(y[v])}if(e.normal){const v=Ts(g,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(p=Ts(g,n,d,e.material)[0],p<0&&(f.negativeMaterialIndices=!0,p=0)),e.uv&&e.uv.forEach(function(v,T){const S=Ts(g,n,d,v);c[T]===void 0&&(c[T]=[]),c[T].push(S[0]),c[T].push(S[1])}),r++,m&&(r>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,p,a,l,c,u,h,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=ze.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const p=l[g]*3;u[p]=a[g*3],u[p+1]=a[g*3+1],u[p+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new Ot(f.vertex,3);d.name=s||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new hn;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new qe().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}const u=new Wy(n,r,s,a,l).getPoints(s.length*12);return new hn().setFromPoints(u)}}class $y{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(ze.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ze.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=ze.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(Qy),values:t[n].KeyValueFloat.a},s=rt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=ze.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=rt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=rt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=ze.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?je.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Rt.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ce),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=rt.get(l.ID).parents.filter(function(y){return y.relationship!==void 0})[0].ID,f=rt.get(h).parents[0].ID,d=rt.get(f).parents[0].ID,g=rt.get(d).parents[0].ID,p=ze.Objects.Model[g],m={modelName:p.attrName?je.sanitizeNodeName(p.attrName):"",morphName:ze.Objects.Deformer[h].attrName};s[c]=m}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=ze.Objects.AnimationStack,n={};for(const r in t){const s=rt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new Jv(e.name,-1,t)}generateTracks(e){const t=[];let n=new F,r=new vn,s=new F;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new en().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new Yr(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(xn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(xn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(xn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(xn.degToRad),r.push(o),r=new en().fromArray(r),r=new vn().setFromEuler(r)),s!==void 0&&(s=s.map(xn.degToRad),s.push(o),s=new en().fromArray(s),s=new vn().setFromEuler(s).invert());const c=new vn,u=new en,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new mr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Rt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new $r(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=a;e.times=_u(e.times,t,d),e.values=_u(e.values,t,g)}}}}class Yy{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new jh,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],tM(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=sa(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=sa(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=sa(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class Ky{parse(e){const t=new mu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new jh;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=Fy(new Uint8Array(e.getArrayBuffer(o))),l=new mu(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class mu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}}class jh{add(e,t){this[e]=t}}function Zy(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Yh(i,0,e.length)}function Jy(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function gu(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Qy(i){return i/46186158e3}const eM=[];function Ts(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return nM(eM,n.buffer,s,o)}const ra=new en,Xi=new F;function qh(i){const e=new Ce,t=new Ce,n=new Ce,r=new Ce,s=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,u=new Ce,h=new Ce,f=new Ce,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(Xi.fromArray(i.translation)),i.preRotation){const D=i.preRotation.map(xn.degToRad);D.push(i.eulerOrder||en.DEFAULT_ORDER),t.makeRotationFromEuler(ra.fromArray(D))}if(i.rotation){const D=i.rotation.map(xn.degToRad);D.push(i.eulerOrder||en.DEFAULT_ORDER),n.makeRotationFromEuler(ra.fromArray(D))}if(i.postRotation){const D=i.postRotation.map(xn.degToRad);D.push(i.eulerOrder||en.DEFAULT_ORDER),r.makeRotationFromEuler(ra.fromArray(D)),r.invert()}i.scale&&s.scale(Xi.fromArray(i.scale)),i.scalingOffset&&a.setPosition(Xi.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(Xi.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(Xi.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(Xi.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),p=new Ce;p.extractRotation(u);const m=new Ce;m.copyPosition(u);const y=m.clone().invert().multiply(u),b=p.clone().invert().multiply(y),v=s,T=new Ce;if(d===0)T.copy(p).multiply(g).multiply(b).multiply(v);else if(d===1)T.copy(p).multiply(b).multiply(g).multiply(v);else{const $=new Ce().scale(new F().setFromMatrixScale(h)).clone().invert(),re=b.clone().multiply($);T.copy(p).multiply(g).multiply(re).multiply(v)}const S=c.clone().invert(),L=o.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(S).multiply(a).multiply(o).multiply(s).multiply(L);const x=new Ce().copyPosition(P),A=u.clone().multiply(x);return f.copyPosition(A),P=f.clone().multiply(T),P.premultiply(u.invert()),P}function $h(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function sa(i){return i.split(",").map(function(t){return parseFloat(t)})}function Yh(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function tM(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function nM(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function _u(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const iM=["id"],rM=Ci({__name:"Icon3D",props:{id:null},setup(i){const e=i;let t=!1,n;function r(){const s=new zv,o=document.querySelector("#container"+e.id),a=new Lt(75,o.offsetWidth/o.offsetHeight,.1,1e3);var l=new by,c=new Xn(new F(0,0,1),-1),u=new F;const h=new Bh(16777215,1.2);s.add(h);const f=new Ih({antialias:!0,alpha:!0});f.setSize(o.offsetWidth,o.offsetHeight),f.setClearColor(0,0),window.addEventListener("resize",d,!1);function d(){a.aspect=o.offsetWidth/o.offsetHeight,a.updateProjectionMatrix(),f.setSize(o.offsetWidth,o.offsetHeight)}o.appendChild(f.domElement);const g=new We;o.addEventListener("mousemove",P=>y(P.offsetX,P.offsetY)),o.addEventListener("mouseenter",p),o.addEventListener("mouseleave",m),o.addEventListener("touchstart",p),o.addEventListener("touchend",m),o.addEventListener("touchmove",P=>y(P.touches[0].clientX,P.touches[0].clientY));function p(){t=!0,n=.015}function m(){t=!1,n=.01}function y(P,x){t&&(g.x=(P/o.offsetWidth*2-1)/2,g.y=(-(x/o.offsetHeight)*2+1)/2,l.setFromCamera(g,a),l.ray.intersectPlane(c,u),b.lookAt(u))}let b;new Xy().load("/"+e.id+".fbx",P=>{b=P,P.scale.setScalar(.01),n=.01,P.rotation.y=Math.random()*Math.PI*2,P.position.set(0,0,0),s.add(P),P.castShadow=!0,P.receiveShadow=!0},P=>{},P=>{console.log(P)}),a.position.z=5;const T=(Math.random()-.5)*Math.PI*4,S=.001+Math.random()*5e-4;function L(P){b&&!t&&(b.rotation.x+=Math.sin(P*S+T)/100,b.rotation.y-=.01),b&&b.scale.setScalar(b.scale.x+.1*(n-b.scale.x)),requestAnimationFrame(L),f.render(s,a)}L(0)}return Ks(r),(s,o)=>(Vt(),Gt("div",{id:"container"+Xt(e).id,class:"container3d"},null,8,iM))}});const Pi=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},sM=Pi(rM,[["__scopeId","data-v-c0922861"]]),oM={id:"content"},aM=["id"],lM=["id"],cM=["id","innerHTML"],uM=["id","onClick"],hM=Ci({__name:"Content",props:{lang:null},setup(i){let e=Mi.projects;function t(n){n&&window.open(n,"_blank")}return(n,r)=>(Vt(),Gt("div",oM,[(Vt(!0),Gt(Ft,null,da(Xt(e),(s,o,a)=>(Vt(),Gt("div",{class:xi(["projectType","scroll"+a]),id:o},[Pt("h1",null,Pr(Xt(Mi).sideMenu[o][i.lang]),1),(Vt(!0),Gt(Ft,null,da(s,(l,c,u)=>(Vt(),Gt("div",{class:xi(["project",(u+a*3)%2==0?"project-reverse":""]),id:c},[Pt("div",{class:"projectDescription",id:c+"Description",innerHTML:l.description[i.lang]},null,8,cM),Pt("div",{class:xi(["icon3d",l.link?"selectionable":""]),id:c+"Icon",onClick:h=>t(l.link)},[Ht(sM,{id:c},null,8,["id"])],10,uM)],10,lM))),256))],10,aM))),256))]))}});const fM=Pi(hM,[["__scopeId","data-v-d5bef1f7"]]);function dM(){let i=document.querySelector("#sideMenu"),e=i==null?void 0:i.children,t=document.querySelectorAll(".projectType"),n=0;window.addEventListener("scroll",()=>{var s;if((e==null?void 0:e.length)!=t.length){console.error("err len");return}for(let o=0;o<t.length;o++){let a=t[o],l=r(a);n!=o&&l>r(t[n])&&(n=o,(s=document.querySelector(".currentType"))==null||s.classList.remove("currentType"),e[n].classList.add("currentType"))}});function r(s){let o=s.getBoundingClientRect(),a=o.height;return o.top<0&&(a-=-o.top),o.bottom>window.innerHeight&&(a-=o.bottom-window.innerHeight),a<0&&(a=0),a}}const pM={id:"sideMenu"},mM=["id","onClick"],gM={class:"typetext"},_M=Ci({__name:"SideMenu",props:{lang:null},setup(i){Ks(dM);function e(t){var n;(n=document.querySelector(".scroll"+t))==null||n.scrollIntoView({behavior:"smooth"})}return window.onscroll=function(){let t=window.innerHeight,n=document.querySelector("#sideMenu");window.pageYOffset>=t?n==null||n.classList.add("sticky"):n==null||n.classList.remove("sticky")},(t,n)=>(Vt(),Gt("div",pM,[(Vt(!0),Gt(Ft,null,da(Object.keys(Xt(Mi).sideMenu),(r,s)=>(Vt(),Gt("div",{id:r,class:xi({currentType:s===0}),onClick:o=>e(s)},[Pt("p",gM,Pr(Xt(Mi).sideMenu[r][i.lang]),1)],10,mM))),256))]))}});const xM=Pi(_M,[["__scopeId","data-v-41851bf4"]]),vM="/assets/france-7ef2148a.svg",yM="/assets/UK-b3bb521b.svg",MM={id:"languageChoice"},bM=Ci({__name:"languages",emits:["changeLanguage"],setup(i,{emit:e}){function t(n){var r,s;e("changeLanguage",n),(r=document.querySelector("img"))==null||r.classList.remove("active"),(s=document.querySelector(`#${n}`))==null||s.classList.add("active")}return(n,r)=>(Vt(),Gt("div",MM,[Pt("img",{src:vM,id:"fr",onClick:r[0]||(r[0]=s=>t("fr")),class:"active"}),Pt("img",{src:yM,id:"en",onClick:r[1]||(r[1]=s=>t("en"))})]))}});const SM=Pi(bM,[["__scopeId","data-v-93d3ae78"]]),wM="/assets/arrow-aecd2303.svg",TM=i=>(td("data-v-3a9c4daa"),i=i(),nd(),i),EM={id:"welcomePage"},AM=TM(()=>Pt("p",{id:"nom"},"Eli SAUVAGE",-1)),CM={id:"sujet"},LM={id:"ecole"},PM={id:"projets"},DM=Ci({__name:"WelcomePage",props:{lang:null},setup(i){function e(){var t;(t=document.querySelector("#global"))==null||t.scrollIntoView({behavior:"smooth"})}return(t,n)=>(Vt(),Gt("div",EM,[AM,Pt("p",CM,Pr(Xt(Mi).welcomePage.sujet[i.lang]),1),Pt("p",LM,Pr(Xt(Mi).welcomePage.ecole[i.lang]),1),Pt("div",PM,[Pt("p",null,Pr(Xt(Mi).welcomePage.projets[i.lang]),1),Pt("img",{src:wM,id:"en",onClick:n[0]||(n[0]=r=>e())})])]))}});const RM=Pi(DM,[["__scopeId","data-v-3a9c4daa"]]),IM=Ci({__name:"CV",setup(i){function e(){window.open("https://eli-sauvage.github.io/CV.pdf","_blank")}return(t,n)=>(Vt(),Gt("div",{id:"CV",onClick:e}," Mon CV "))}});const FM=Pi(IM,[["__scopeId","data-v-727c55a3"]]),OM={id:"global"},NM=Ci({__name:"App",setup(i){let e=Gf("fr");function t(n){e.value=n}return(n,r)=>(Vt(),Gt(Ft,null,[Ht(SM,{lang:Xt(e),onChangeLanguage:t},null,8,["lang"]),Ht(FM),Ht(RM,{lang:Xt(e)},null,8,["lang"]),Pt("div",OM,[Ht(xM,{lang:Xt(e)},null,8,["lang"]),Ht(fM,{lang:Xt(e)},null,8,["lang"])])],64))}});const UM=Pi(NM,[["__scopeId","data-v-6ac7e404"]]);Lp(UM).mount("#app");
