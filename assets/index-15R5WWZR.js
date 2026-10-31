(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="180",Kf=0,kc=1,Zf=2,Uu=1,Fu=2,Zn=3,Ei=0,tn=1,Sn=2,Mi=0,As=1,Rs=2,Gc=3,Hc=4,Jf=5,Gi=100,Qf=101,td=102,ed=103,nd=104,id=200,sd=201,rd=202,ad=203,nl=204,il=205,od=206,ld=207,cd=208,hd=209,ud=210,fd=211,dd=212,pd=213,md=214,sl=0,rl=1,al=2,Is=3,ol=4,ll=5,cl=6,hl=7,Ya=0,gd=1,_d=2,yi=0,xd=1,vd=2,Md=3,Nu=4,yd=5,Sd=6,wd=7,Ou=300,Ds=301,Us=302,ul=303,fl=304,$a=306,dl=1e3,Wi=1001,pl=1002,pn=1003,Ed=1004,kr=1005,Un=1006,ro=1007,xi=1008,Bn=1009,Bu=1010,zu=1011,gr=1012,lc=1013,ji=1014,Fn=1015,Ir=1016,cc=1017,hc=1018,_r=1020,ku=35902,Gu=35899,Hu=1021,Vu=1022,Rn=1023,xr=1026,vr=1027,uc=1028,fc=1029,Wu=1030,dc=1031,pc=1033,Ca=33776,Pa=33777,La=33778,Ia=33779,ml=35840,gl=35841,_l=35842,xl=35843,vl=36196,Ml=37492,yl=37496,Sl=37808,wl=37809,El=37810,Tl=37811,bl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Il=37818,Dl=37819,Ul=37820,Fl=37821,Nl=36492,Ol=36494,Bl=36495,zl=36283,kl=36284,Gl=36285,Hl=36286,Td=3200,bd=3201,Ka=0,Ad=1,_i="",Fe="srgb",Fs="srgb-linear",Na="linear",ue="srgb",Qi=7680,Vc=519,Rd=512,Cd=513,Pd=514,Xu=515,Ld=516,Id=517,Dd=518,Ud=519,Vl=35044,Fd=35048,Wc="300 es",Nn=2e3,Oa=2001;class Vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xc=1234567;const fr=Math.PI/180,Mr=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function dr(i,t,e){return(1-e)*i+e*t}function Bd(i,t,e,n){return dr(i,t,1-Math.exp(-e*n))}function zd(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vd(i,t){return i+Math.random()*(t-i)}function Wd(i){return i*(.5-Math.random())}function Xd(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qd(i){return i*fr}function jd(i){return i*Mr}function Yd(i){return(i&i-1)===0&&i!==0}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:fr,RAD2DEG:Mr,generateUUID:ti,clamp:Zt,euclideanModulo:mc,mapLinear:Nd,inverseLerp:Od,lerp:dr,damp:Bd,pingpong:zd,smoothstep:kd,smootherstep:Gd,randInt:Hd,randFloat:Vd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:jd,isPowerOfTwo:Yd,ceilPowerOfTwo:$d,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Zd,normalize:ce,denormalize:An};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,d*y);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const x=o*y;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new P,qc=new Dr;class jt{constructor(t,e,n,s,r,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],y=s[1],v=s[4],x=s[7],T=s[2],b=s[5],A=s[8];return r[0]=a*_+o*y+l*T,r[3]=a*m+o*v+l*b,r[6]=a*d+o*x+l*A,r[1]=c*_+h*y+u*T,r[4]=c*m+h*v+u*b,r[7]=c*d+h*x+u*A,r[2]=f*_+p*y+g*T,r[5]=f*m+p*v+g*b,r[8]=f*d+p*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new jt;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=Ba("canvas");return i.style.display="block",i}const jc={};function yr(i){i in jc||(jc[i]=!0,console.warn(i))}function Qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Yc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Na,toXYZ:Yc,fromXYZ:$c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Yc,fromXYZ:$c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const re=tp();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class ep{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=Ba("canvas")),ts.width=t.width,ts.height=t.height;const s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let np=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;const co=new P;class Ke extends Vs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Wi,s=Wi,r=Un,a=xi,o=Rn,l=Bn,c=Ke.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ti(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Ou;Ke.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(p+1)/2,T=(d+1)/2,b=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return v>x&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=A/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends Vs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ke(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new gc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends sp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ju extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Hr.subVectors(this.max,js),es.subVectors(t.a,js),ns.subVectors(t.b,js),is.subVectors(t.c,js),ri.subVectors(ns,es),ai.subVectors(is,ns),Ci.subVectors(es,is);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!ho(e,es,ns,is,Hr)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,es,ns,is,Hr))?!1:(Vr.crossVectors(ri,ai),e=[Vr.x,Vr.y,Vr.z],ho(e,es,ns,is,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Gr=new $i,es=new P,ns=new P,is=new P,ri=new P,ai=new P,Ci=new P,js=new P,Hr=new P,Vr=new P,Pi=new P;function ho(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ap=new $i,Ys=new P,uo=new P;class si{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(uo)),this.expandByPoint(Ys.copy(t.center).sub(uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const qn=new P,fo=new P,Wr=new P,oi=new P,po=new P,Xr=new P,mo=new P;class Ur{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fo.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=oi.dot(this.direction),l=-oi.dot(Wr),c=oi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fo).addScaledVector(Wr,f),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){po.subVectors(e,t),Xr.subVectors(n,t),mo.crossVectors(po,Xr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(Xr.crossVectors(oi,Xr));if(l<0)return null;const c=o*this.direction.dot(po.cross(oi));if(c<0||l+c>a)return null;const h=-o*oi.dot(mo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,lp)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(n,cn),li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(n,cn)),li.normalize(),qr.crossVectors(cn,li),s[0]=li.x,s[4]=qr.x,s[8]=cn.x,s[1]=li.y,s[5]=qr.y,s[9]=cn.y,s[2]=li.z,s[6]=qr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],v=n[7],x=n[11],T=n[15],b=s[0],A=s[4],I=s[8],w=s[12],M=s[1],C=s[5],U=s[9],O=s[13],k=s[2],W=s[6],B=s[10],Z=s[14],G=s[3],st=s[7],ht=s[11],_t=s[15];return r[0]=a*b+o*M+l*k+c*G,r[4]=a*A+o*C+l*W+c*st,r[8]=a*I+o*U+l*B+c*ht,r[12]=a*w+o*O+l*Z+c*_t,r[1]=h*b+u*M+f*k+p*G,r[5]=h*A+u*C+f*W+p*st,r[9]=h*I+u*U+f*B+p*ht,r[13]=h*w+u*O+f*Z+p*_t,r[2]=g*b+_*M+m*k+d*G,r[6]=g*A+_*C+m*W+d*st,r[10]=g*I+_*U+m*B+d*ht,r[14]=g*w+_*O+m*Z+d*_t,r[3]=y*b+v*M+x*k+T*G,r[7]=y*A+v*C+x*W+T*st,r[11]=y*I+v*U+x*B+T*ht,r[15]=y*w+v*O+x*Z+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,v=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,T=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,b=e*y+n*v+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*A,t[4]=v*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=T*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,y=l*c,v=l*h,x=l*u,T=n.x,b=n.y,A=n.z;return s[0]=(1-(_+d))*T,s[1]=(p+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(f+d))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Nn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Oa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Nn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Oa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new P,Tn=new ee,op=new P(0,0,0),lp=new P(1,1,1),li=new P,qr=new P,cn=new P,Kc=new ee,Zc=new Dr;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cp=0;const Jc=new P,rs=new Dr,jn=new ee,jr=new P,$s=new P,hp=new P,up=new Dr,Qc=new P(1,0,0),th=new P(0,1,0),eh=new P(0,0,1),nh={type:"added"},fp={type:"removed"},as={type:"childadded",child:null},go={type:"childremoved",child:null};class de extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new P,e=new mn,n=new Dr,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt($s,jr,this.up):jn.lookAt(jr,$s,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(jn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new P(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new P,Yn=new P,_o=new P,$n=new P,os=new P,ls=new P,ih=new P,xo=new P,vo=new P,Mo=new P,yo=new Ie,So=new Ie,wo=new Ie;class wn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Yn.subVectors(n,e),_o.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(Yn),l=bn.dot(_o),c=Yn.dot(Yn),h=Yn.dot(_o),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return yo.setScalar(0),So.setScalar(0),wo.setScalar(0),yo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Yn.subVectors(t,e),bn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),ls.subVectors(r,n),xo.subVectors(t,n);const l=os.dot(xo),c=ls.dot(xo);if(l<=0&&c<=0)return e.copy(n);vo.subVectors(t,s);const h=os.dot(vo),u=ls.dot(vo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);Mo.subVectors(t,r);const p=os.dot(Mo),g=ls.dot(Mo);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ih.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ih,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=mc(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return re.workingToColorSpace(Ye.copy(this),t),Math.round(Zt(Ye.r*255,0,255))*65536+Math.round(Zt(Ye.g*255,0,255))*256+Math.round(Zt(Ye.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Fe){re.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Yr);const n=dr(ci.h,Yr.h,e),s=dr(ci.s,Yr.s,e),r=dr(ci.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Dt;Dt.NAMES=$u;let dp=0;class Hn extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=As,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ws extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new P,$r=new kt;let pp=0;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}}class Ku extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zu extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mp=0;const xn=new ee,To=new de,cs=new P,hn=new $i,Ks=new $i,He=new P;class xe extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Zu:Ku)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(hn.min,Ks.min),hn.expandByPoint(He),He.addVectors(hn.max,Ks.max),hn.expandByPoint(He)):(hn.expandByPoint(Ks.min),hn.expandByPoint(Ks.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),He.add(cs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;const c=new P,h=new P,u=new P,f=new kt,p=new kt,g=new kt,_=new P,m=new P;function d(I,w,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[I].add(_),o[w].add(_),o[M].add(_),l[I].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,w=y.length;I<w;++I){const M=y[I],C=M.start,U=M.count;for(let O=C,k=C+U;O<k;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const v=new P,x=new P,T=new P,b=new P;function A(I){T.fromBufferAttribute(s,I),b.copy(T);const w=o[I];v.copy(w),v.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);const C=x.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,w=y.length;I<w;++I){const M=y[I],C=M.start,U=M.count;for(let O=C,k=C+U;O<k;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new ee,Li=new Ur,Kr=new si,rh=new P,Zr=new P,Jr=new P,Qr=new P,bo=new P,ta=new P,ah=new P,ea=new P;class xt extends de{constructor(t=new xe,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(bo.fromBufferAttribute(u,t),a?ta.addScaledVector(bo,h):ta.addScaledVector(bo.sub(e),h))}e.add(ta)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Kr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Kr,rh)===null||Li.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=v;x<T;x+=3){const b=o.getX(x),A=o.getX(x+1),I=o.getX(x+2);s=na(this,d,t,n,c,h,u,b,A,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=na(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=v;x<T;x+=3){const b=x,A=x+1,I=x+2;s=na(this,d,t,n,c,h,u,b,A,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,v=m+1,x=m+2;s=na(this,a,t,n,c,h,u,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gp(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ei,o),l===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Zr),i.getVertexPosition(l,Jr),i.getVertexPosition(c,Qr);const h=gp(i,t,e,n,Zr,Jr,Qr,ah);if(h){const u=new P;wn.getBarycoord(ah,Zr,Jr,Qr,u),s&&(h.uv=wn.getInterpolatedAttribute(s,o,l,c,u,new kt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,o,l,c,u,new kt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};wn.getNormal(Zr,Jr,Qr,f.normal),h.face=f,h.barycoord=u}return h}class at extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,d,y,v,x,T,b,A,I,w){const M=x/A,C=T/I,U=x/2,O=T/2,k=b/2,W=A+1,B=I+1;let Z=0,G=0;const st=new P;for(let ht=0;ht<B;ht++){const _t=ht*C-O;for(let Bt=0;Bt<W;Bt++){const Qt=Bt*M-U;st[_]=Qt*y,st[m]=_t*v,st[d]=k,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Bt/A),u.push(1-ht/I),Z+=1}}for(let ht=0;ht<I;ht++)for(let _t=0;_t<A;_t++){const Bt=f+_t+W*ht,Qt=f+_t+W*(ht+1),pe=f+(_t+1)+W*(ht+1),ie=f+(_t+1)+W*ht;l.push(Bt,Qt,ie),l.push(Qt,pe,ie),G+=6}o.addGroup(p,G,w),p+=G,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function _p(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const xp={clone:Ns,merge:Qe};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qu extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,oh=new kt,lh=new kt;class fn extends Qu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,oh,lh),e.subVectors(lh,oh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class yp extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new fn(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new fn(hs,us,t,e);a.layers=this.layers,this.add(a);const o=new fn(hs,us,t,e);o.layers=this.layers,this.add(o);const l=new fn(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new fn(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tf extends Ke{constructor(t=[],e=Ds,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sp extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Mi});r.uniforms.tEquirect.value=e;const a=new xt(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=Un),new yp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Re extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _c{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ef extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ep{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new P;class za{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new za(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Os extends Hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const Zs=new P,ds=new P,ps=new P,ms=new kt,Js=new kt,nf=new ee,ia=new P,Qs=new P,sa=new P,ch=new kt,Ro=new kt,hh=new kt;class Sr extends de{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ep(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new za(n,3,0,!1)),fs.setAttribute("uv",new za(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new kt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ra(ia.set(-.5,-.5,0),ps,a,ds,s,r),ra(Qs.set(.5,-.5,0),ps,a,ds,s,r),ra(sa.set(.5,.5,0),ps,a,ds,s,r),ch.set(0,0),Ro.set(1,0),hh.set(1,1);let o=t.ray.intersectTriangle(ia,Qs,sa,!1,Zs);if(o===null&&(ra(Qs.set(-.5,.5,0),ps,a,ds,s,r),Ro.set(0,1),o=t.ray.intersectTriangle(ia,sa,Qs,!1,Zs),o===null))return;const l=t.ray.origin.distanceTo(Zs);l<t.near||l>t.far||e.push({distance:l,point:Zs.clone(),uv:wn.getInterpolation(Zs,ia,Qs,sa,ch,Ro,hh,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ra(i,t,e,n,s,r){ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ms.x-s*ms.y,Js.y=s*ms.x+r*ms.y):Js.copy(ms),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(nf)}class Tp extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=pn,h=pn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new ee,fh=new ee,aa=[],dh=new $i,bp=new ee,tr=new xt,er=new si;class Si extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),dh.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),er.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),fh.multiplyMatrices(n,gs),tr.matrixWorld=fh,tr.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){const l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tp(new Float32Array(s*this.count),s,this.count,uc,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Co=new P,Ap=new P,Rp=new jt;class Bi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Co.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new si,Cp=new kt(.5,.5),oa=new P;class xc{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],y=r[12],v=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,d-g,T-y).normalize(),s[1].setComponents(c+a,p+h,d+g,T+y).normalize(),s[2].setComponents(c+o,p+u,d+_,T+v).normalize(),s[3].setComponents(c-o,p-u,d-_,T-v).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,p-f,d-m,T-x).normalize();else if(s[4].setComponents(c-l,p-f,d-m,T-x).normalize(),e===Nn)s[5].setComponents(c+l,p+f,d+m,T+x).normalize();else if(e===Oa)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=Cp.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ka=new P,Ga=new P,ph=new ee,nr=new Ur,la=new si,Po=new P,mh=new P;class Pp extends de{constructor(t=new xe,e=new sf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ka.fromBufferAttribute(e,s-1),Ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ka.distanceTo(Ga);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;ph.copy(s).invert(),nr.copy(t.ray).applyMatrix4(ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),y=h.getX(_+1),v=ca(this,t,nr,l,d,y,_);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=ca(this,t,nr,l,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=ca(this,t,nr,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=ca(this,t,nr,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ca(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(ka.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),e.distanceSqToSegment(ka,Ga,Po,mh)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Fr extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gh=new ee,Wl=new Ur,ha=new si,ua=new P;class Za extends de{constructor(t=new xe,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;gh.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);ua.fromBufferAttribute(u,m),_h(ua,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)ua.fromBufferAttribute(u,g),_h(ua,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _h(i,t,e,n,s,r,a){const o=Wl.distanceSqToPoint(i);if(o<e){const l=new P;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Vn extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rf extends Ke{constructor(t,e,n=ji,s,r,a,o=pn,l=pn,c,h=xr,u=1){if(h!==xr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class af extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qn extends xe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,g=n*2+r,_=s+1,m=new P,d=new P;for(let y=0;y<=g;y++){let v=0,x=0,T=0,b=0;if(y<=n){const w=y/n,M=w*Math.PI/2;x=-h-t*Math.cos(M),T=t*Math.sin(M),b=-t*Math.cos(M),v=w*u}else if(y<=n+r){const w=(y-n)/r;x=-h+w*e,T=t,b=0,v=u+w*f}else{const w=(y-n-r)/n,M=w*Math.PI/2;x=h+t*Math.sin(M),T=t*Math.cos(M),b=t*Math.sin(M),v=u+f+w*u}const A=Math.max(0,Math.min(1,v/p));let I=0;y===0?I=.5/s:y===g&&(I=-.5/s);for(let w=0;w<=s;w++){const M=w/s,C=M*Math.PI*2,U=Math.sin(C),O=Math.cos(C);d.x=-T*O,d.y=x,d.z=T*U,o.push(d.x,d.y,d.z),m.set(-T*O,b,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+I,A)}if(y>0){const w=(y-1)*_;for(let M=0;M<s;M++){const C=w+M,U=w+M+1,O=y*_+M,k=y*_+M+1;a.push(C,U,O),a.push(U,k,O)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class vc extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function y(){const x=new P,T=new P;let b=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const w=[],M=I/r,C=M*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,k=O*l+o,W=Math.sin(k),B=Math.cos(k);T.x=C*W,T.y=-M*n+m,T.z=C*B,u.push(T.x,T.y,T.z),x.set(W,A,B).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-M),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const M=_[w][I],C=_[w+1][I],U=_[w+1][I+1],O=_[w][I+1];(t>0||w!==0)&&(h.push(M,C,O),b+=3),(e>0||w!==r-1)&&(h.push(C,U,O),b+=3)}c.addGroup(d,b,0),d+=b}function v(x){const T=g,b=new kt,A=new P;let I=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const k=U/s*l+o,W=Math.cos(k),B=Math.sin(k);A.x=w*B,A.y=m*M,A.z=w*W,u.push(A.x,A.y,A.z),f.push(0,M,0),b.x=W*.5+.5,b.y=B*.5*M+.5,p.push(b.x,b.y),g++}for(let U=0;U<s;U++){const O=T+U,k=C+U;x===!0?h.push(k,k+1,O):h.push(k+1,k,O),I+=3}c.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends Xt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new P,x=new P,T=new P;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],x),p(e[b+2],T),l(v,x,T,y)}function l(y,v,x,T){const b=T+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const w=y.clone().lerp(x,I/b),M=v.clone().lerp(x,I/b),C=b-I;for(let U=0;U<=C;U++)U===0&&I===b?A[I][U]=w:A[I][U]=w.clone().lerp(M,U/C)}for(let I=0;I<b;I++)for(let w=0;w<2*(b-I)-1;w++){const M=Math.floor(w/2);w%2===0?(f(A[I][M+1]),f(A[I+1][M]),f(A[I][M])):(f(A[I][M+1]),f(A[I+1][M+1]),f(A[I+1][M]))}}function c(y){const v=new P;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const y=new P;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=m(y)/2/Math.PI+.5,T=d(y)/Math.PI+.5;a.push(x,1-T)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],x=a[y+2],T=a[y+4],b=Math.max(v,x,T),A=Math.min(v,x,T);b>.9&&A<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const y=new P,v=new P,x=new P,T=new P,b=new kt,A=new kt,I=new kt;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),T.copy(y).add(v).add(x).divideScalar(3);const C=m(T);_(b,M+0,y,C),_(A,M+2,v,C),_(I,M+4,x,C)}}function _(y,v,x,T){T<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.vertices,t.indices,t.radius,t.details)}}function Lp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=of(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Np(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return wr(r,a,e,o,l,c,0),a}function of(i,t,e,n,s){let r;if(s===jp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xh(a/n|0,i[a],i[a+1],r);return r&&Bs(r,r.next)&&(Tr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||be(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Dp(i,n,s,r):Ip(i)){t.push(l.i,i.i,c.i),Tr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Up(Yi(i),t),wr(i,t,e,n,s,r,2)):a===2&&Fp(i,t,e,n,s,r):wr(Yi(i),t,e,n,s,r,1);break}}}function Ip(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&or(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dp(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),d=Xl(p,g,t,e,n),y=Xl(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&or(o,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&or(o,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&or(o,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&or(o,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Up(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Bs(n,s)&&cf(n,e,e.next,s)&&Er(n,s)&&Er(s,n)&&(t.push(n.i,e.i,s.i),Tr(e),Tr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function Fp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wp(a,o)){let l=hf(a,o);a=Yi(a,a.next),l=Yi(l,l.next),wr(a,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Np(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=of(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vp(c))}s.sort(Op);for(let r=0;r<s.length;r++)e=Bp(s[r],e);return e}function Op(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bp(i,t){const e=zp(i,t);if(!e)return t;const n=hf(e,i);return Yi(n,n.next),Yi(e,e.next)}function zp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Bs(i,e))return e;do{if(Bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&lf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Er(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&kp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function kp(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Gp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hp(s)}function Hp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Xl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function or(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&lf(i,t,e,n,s,r,a,o)}function Wp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xp(i,t)&&(Er(i,t)&&Er(t,i)&&qp(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Bs(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bs(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){const s=da(be(i,t,e)),r=da(be(i,t,n)),a=da(be(e,n,i)),o=da(be(e,n,t));return!!(s!==r&&a!==o||s===0&&fa(i,e,t)||r===0&&fa(i,n,t)||a===0&&fa(e,i,n)||o===0&&fa(e,t,n))}function fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function da(i){return i>0?1:i<0?-1:0}function Xp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function qp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hf(i,t){const e=ql(i.i,i.x,i.y),n=ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xh(i,t,e,n){const s=ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Yp{static triangulate(t,e,n=2){return Lp(t,e,n)}}class yc{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yc.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];vh(t),Mh(n,t);let a=t.length;e.forEach(vh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Mh(n,e[l]);const o=Yp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function vh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Sc extends Mc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}class Ki extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const y=d*f-a;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const v=y+c*d,x=y+c*(d+1),T=y+1+c*(d+1),b=y+1+c*d;p.push(v,x,b),p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}class le extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],v=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+x,1-v),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const v=h[d][y+1],x=h[d][y],T=h[d+1][y],b=h[d+1][y+1];(d!==0||a>0)&&p.push(v,x,b),(d!==n-1||l<Math.PI)&&p.push(x,T,b)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mn extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $p extends Hn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Le extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kp extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zp extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uf extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jp extends uf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lo=new ee,yh=new P,Sh=new P;class Qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wc extends Qu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tm extends Qp{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class em extends uf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new tm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nm extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class im{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function wh(i,t,e,n){const s=sm(n);switch(e){case Hu:return i*t;case uc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case Wu:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case Vu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:case xl:return Math.max(i,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(i,8)*Math.max(t,8)/2;case vl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sm(i){switch(i){case Bn:case Bu:return{byteLength:1,components:1};case gr:case zu:case Ir:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case ji:case lc:case Fn:return{byteLength:4,components:1};case ku:case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ff(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rm(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,r0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,pg=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Eg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rg=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:am,alphahash_pars_fragment:om,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:fm,aomap_pars_fragment:dm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:xm,iridescence_fragment:vm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:wm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:bm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Im,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Fm,colorspace_fragment:Nm,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Jm,envmap_vertex:Hm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Ym,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Km,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:a0,lights_fragment_end:o0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:x0,morphcolor_vertex:v0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:w0,normal_fragment_maps:E0,normal_pars_fragment:T0,normal_pars_vertex:b0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:I0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:N0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:j0,skinnormal_vertex:Y0,specularmap_fragment:$0,specularmap_pars_fragment:K0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:ag,backgroundCube_vert:og,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:fg,distanceRGBA_vert:dg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:yg,meshlambert_frag:Sg,meshmatcap_vert:wg,meshmatcap_frag:Eg,meshnormal_vert:Tg,meshnormal_frag:bg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Ug,shadow_vert:Fg,shadow_frag:Ng,sprite_vert:Og,sprite_frag:Bg},ct={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},In={basic:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([ct.points,ct.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([ct.common,ct.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([ct.sprite,ct.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([ct.lights,ct.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};In.physical={uniforms:Qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const pa={r:0,b:0,g:0},Di=new mn,zg=new ee;function kg(i,t,e,n,s,r,a){const o=new Dt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?d(o,l):T&&T.isColor&&(d(T,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===$a)?(h===void 0&&(h=new xt(new at(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ns(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Di)),h.material.toneMapped=re.getTransfer(T.colorSpace)!==ue,(u!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new xt(new Ki(2,2),new ni({name:"BackgroundMaterial",uniforms:Ns(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(T.colorSpace)!==ue,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(pa,Ju(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:_,addToRenderList:m,dispose:y}}function Gg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,C,U,O,k){let W=!1;const B=u(O,U,C);r!==B&&(r=B,c(r.object)),W=p(M,O,U,k),W&&g(M,O,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(M,C,U,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,U){const O=U.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let W=k[C.id];W===void 0&&(W={},k[C.id]=W);let B=W[O];return B===void 0&&(B=f(l()),W[O]=B),B}function f(M){const C=[],U=[],O=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,C,U,O){const k=r.attributes,W=C.attributes;let B=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){const ht=k[G];let _t=W[G];if(_t===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(M,C,U,O){const k={},W=C.attributes;let B=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){let ht=W[G];ht===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),k[G]=_t,B++}r.attributes=k,r.attributesNum=B,r.index=O}function _(){const M=r.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const U=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;U[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),k[M]!==C&&(i.vertexAttribDivisor(M,C),k[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==M[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function v(M,C,U,O,k,W,B){B===!0?i.vertexAttribIPointer(M,C,U,k,W):i.vertexAttribPointer(M,C,U,O,k,W)}function x(M,C,U,O){_();const k=O.attributes,W=U.getAttributes(),B=C.defaultAttributeValues;for(const Z in W){const G=W[Z];if(G.location>=0){let st=k[Z];if(st===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,_t=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const Qt=Bt.buffer,pe=Bt.type,ie=Bt.bytesPerElement,Y=pe===i.INT||pe===i.UNSIGNED_INT||st.gpuType===lc;if(st.isInterleavedBufferAttribute){const Q=st.data,vt=Q.stride,Gt=st.offset;if(Q.isInstancedInterleavedBuffer){for(let Rt=0;Rt<G.locationSize;Rt++)d(G.location+Rt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Rt=0;Rt<G.locationSize;Rt++)m(G.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Rt=0;Rt<G.locationSize;Rt++)v(G.location+Rt,_t/G.locationSize,pe,ht,vt*ie,(Gt+_t/G.locationSize*Rt)*ie,Y)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)d(G.location+Q,st.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Q=0;Q<G.locationSize;Q++)v(G.location+Q,_t/G.locationSize,pe,ht,_t*ie,_t/G.locationSize*Q*ie,Y)}}else if(B!==void 0){const ht=B[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}y()}function T(){I();for(const M in n){const C=n[M];for(const U in C){const O=C[U];for(const k in O)h(O[k].object),delete O[k];delete C[U]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const O=C[U];for(const k in O)h(O[k].object),delete O[k];delete C[U]}delete n[M.id]}function A(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const O=U[M.id];for(const k in O)h(O[k].object),delete O[k];delete U[M.id]}}function I(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Hg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function Wg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,v=y*4;let x=d.clippingState||null;l.value=x,x=h(g,f,v,p);for(let T=0;T!==v;++T)x[T]=e[T];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xg(i){let t=new WeakMap;function e(a,o){return o===ul?a.mapping=Ds:o===fl&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ul||o===fl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sp(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const bs=4,Eh=[.125,.215,.35,.446,.526,.582],Hi=20,Io=new wc,Th=new Dt;let Do=null,Uo=0,Fo=0,No=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,bh=[new P(-zi,_s,0),new P(zi,_s,0),new P(-_s,0,zi),new P(_s,0,zi),new P(0,zi,-_s),new P(0,zi,_s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],qg=new P;class Ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=qg}=r;Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,Fo),this._renderer.xr.enabled=No,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ir,format:Rn,colorSpace:Fs,depthBuffer:!1},s=Rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=Yg(r,t,e)}return s}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s,r){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Th),u.toneMapping=yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Ws({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new xt(new at,_);let d=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,d=!0):(_.color.copy(Th),d=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const T=this._cubeSize;ma(s,x*T,v>2?T:0,T,T),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const d=[];let y=0;for(let A=0;A<Hi;++A){const I=A/_,w=Math.exp(-I*I/2);d.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[s],T=3*x*(s>v-bs?s-v+bs:0),b=4*(this._cubeSize-x);ma(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Io)}}function jg(i){const t=[],e=[],n=[];let s=i;const r=i-bs+1+Eh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=Eh[a-i+bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,I=b>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(w,_*g*b),v.set(f,m*g*b);const M=[b,b,b,b,b,b];x.set(M,d*g*b)}const T=new xe;T.setAttribute("position",new Ne(y,_)),T.setAttribute("uv",new Ne(v,m)),T.setAttribute("faceIndex",new Ne(x,d)),t.push(T),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rh(i,t,e){const n=new Ti(i,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yg(i,t,e){const n=new Float32Array(Hi),s=new P(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ch(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ph(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function $g(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===fl,h=l===Ds||l===Us;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ah(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ah(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){const T=y[v+0],b=y[v+1],A=y[v+2];f.push(T,b,b,A,A,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const T=v+0,b=v+1,A=v+2;f.push(T,b,b,A,A,T)}}else return;const m=new(qu(f)?Zu:Ku)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*_[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,t,e){const n=new WeakMap,s=new Ie;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*T*4*u),A=new ju(b,x,T,u);A.type=Fn,A.needsUpdate=!0;const I=v*4;for(let M=0;M<u;M++){const C=m[M],U=d[M],O=y[M],k=x*T*4*M;for(let W=0;W<C.count;W++){const B=W*I;p===!0&&(s.fromBufferAttribute(C,W),b[k+B+0]=s.x,b[k+B+1]=s.y,b[k+B+2]=s.z,b[k+B+3]=0),g===!0&&(s.fromBufferAttribute(U,W),b[k+B+4]=s.x,b[k+B+5]=s.y,b[k+B+6]=s.z,b[k+B+7]=0),_===!0&&(s.fromBufferAttribute(O,W),b[k+B+8]=s.x,b[k+B+9]=s.y,b[k+B+10]=s.z,b[k+B+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new kt(x,T)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function e_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const df=new Ke,Lh=new rf(1,1),pf=new ju,mf=new rp,gf=new tf,Ih=[],Dh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Nh=new Float32Array(4);function Xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function a_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),ke(e,n)}}function o_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),ke(e,n)}}function l_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),ke(e,n)}}function c_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function f_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function d_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function g_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function __(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=Xu,r=Lh):r=df,e.setTexture2D(t||r,s)}function x_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mf,s)}function v_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gf,s)}function M_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pf,s)}function y_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return M_}}function S_(i,t){i.uniform1fv(this.addr,t)}function w_(i,t){const e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function E_(i,t){const e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function T_(i,t){const e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function b_(i,t){const e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A_(i,t){const e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R_(i,t){const e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C_(i,t){i.uniform1iv(this.addr,t)}function P_(i,t){i.uniform2iv(this.addr,t)}function L_(i,t){i.uniform3iv(this.addr,t)}function I_(i,t){i.uniform4iv(this.addr,t)}function D_(i,t){i.uniform1uiv(this.addr,t)}function U_(i,t){i.uniform2uiv(this.addr,t)}function F_(i,t){i.uniform3uiv(this.addr,t)}function N_(i,t){i.uniform4uiv(this.addr,t)}function O_(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||df,r[a])}function B_(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mf,r[a])}function z_(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gf,r[a])}function k_(i,t,e){const n=this.cache,s=t.length,r=Ja(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pf,r[a])}function G_(i){switch(i){case 5126:return S_;case 35664:return w_;case 35665:return E_;case 35666:return T_;case 35674:return b_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return U_;case 36295:return F_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}class H_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y_(e.type)}}class V_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}}class W_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function X_(i,t,e){const n=i.name,s=n.length;for(Oo.lastIndex=0;;){const r=Oo.exec(n),a=Oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new H_(o,i,t):new V_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new W_(o),Oh(e,u)),e=u}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);X_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Bh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const q_=37297;let j_=0;function Y_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const zh=new jt;function $_(i){re._getMatrix(zh,re.workingColorSpace,i);const t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Na:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(t),o)}else return r}function K_(i,t){const e=$_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Z_(i,t){let e;switch(t){case xd:e="Linear";break;case vd:e="Reinhard";break;case Md:e="Cineon";break;case Nu:e="ACESFilmic";break;case Sd:e="AgX";break;case wd:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ga=new P;function J_(){re.getLuminanceCoefficients(ga);const i=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function tx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function Gh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(nx,sx)}const ix=new Map;function sx(i,t){let e=$t[t];if(e===void 0){const n=ix.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function lx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case gd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function ux(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ox(e),c=lx(e),h=cx(e),u=hx(e),f=ux(e),p=Q_(e),g=tx(r),_=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),d=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?$t.tonemapping_pars_fragment:"",e.toneMapping!==yi?Z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,K_("linearToOutputTexel",e.outputColorSpace),J_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=jl(a),a=Gh(a,e),a=Hh(a,e),o=jl(o),o=Gh(o,e),o=Hh(o,e),a=Vh(a),o=Vh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=y+m+a,x=y+d+o,T=Bh(s,s.VERTEX_SHADER,v),b=Bh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(b)||"",W=U.trim(),B=O.trim(),Z=k.trim();let G=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{const ht=kh(s,T,"vertex"),_t=kh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ht+`
`+_t)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||Z==="")&&(st=!1);st&&(C.diagnostics={runnable:G,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(T),s.deleteShader(b),I=new Da(s,_),w=ex(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,q_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let dx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mx(t),e.set(t,n)),n}}class mx{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}}function gx(i,t,e,n,s,r,a){const o=new Yu,l=new px,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,U,O){const k=U.fog,W=O.geometry,B=w.isMeshStandardMaterial?U.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),G=Z&&Z.mapping===$a?Z.image.height:null,st=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=ht!==void 0?ht.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let Qt,pe,ie,Y;if(st){const oe=In[st];Qt=oe.vertexShader,pe=oe.fragmentShader}else Qt=w.vertexShader,pe=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const Q=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,te=!!w.map,qe=!!w.matcap,L=!!Z,ve=!!w.aoMap,Wt=!!w.lightMap,Ft=!!w.bumpMap,St=!!w.normalMap,Me=!!w.displacementMap,wt=!!w.emissiveMap,Yt=!!w.metalnessMap,Ge=!!w.roughnessMap,De=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,z=w.iridescence>0,j=w.sheen>0,J=w.transmission>0,X=De&&!!w.anisotropyMap,At=R&&!!w.clearcoatMap,rt=R&&!!w.clearcoatNormalMap,Et=R&&!!w.clearcoatRoughnessMap,Tt=z&&!!w.iridescenceMap,nt=z&&!!w.iridescenceThicknessMap,dt=j&&!!w.sheenColorMap,Ut=j&&!!w.sheenRoughnessMap,bt=!!w.specularMap,ut=!!w.specularColorMap,qt=!!w.specularIntensityMap,D=J&&!!w.transmissionMap,it=J&&!!w.thicknessMap,ot=!!w.gradientMap,gt=!!w.alphaMap,tt=w.alphaTest>0,$=!!w.alphaHash,yt=!!w.extensions;let Vt=yi;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const me={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:pe,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Fs,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:qe,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:G,aoMap:ve,lightMap:Wt,bumpMap:Ft,normalMap:St,displacementMap:f&&Me,emissiveMap:wt,normalMapObjectSpace:St&&w.normalMapType===Ad,normalMapTangentSpace:St&&w.normalMapType===Ka,metalnessMap:Yt,roughnessMap:Ge,anisotropy:De,anisotropyMap:X,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:Et,dispersion:S,iridescence:z,iridescenceMap:Tt,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:dt,sheenRoughnessMap:Ut,specularMap:bt,specularColorMap:ut,specularIntensityMap:qt,transmission:J,transmissionMap:D,thicknessMap:it,gradientMap:ot,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:tt,alphaHash:$,combine:w.combine,mapUv:te&&_(w.map.channel),aoMapUv:ve&&_(w.aoMap.channel),lightMapUv:Wt&&_(w.lightMap.channel),bumpMapUv:Ft&&_(w.bumpMap.channel),normalMapUv:St&&_(w.normalMap.channel),displacementMapUv:Me&&_(w.displacementMap.channel),emissiveMapUv:wt&&_(w.emissiveMap.channel),metalnessMapUv:Yt&&_(w.metalnessMap.channel),roughnessMapUv:Ge&&_(w.roughnessMap.channel),anisotropyMapUv:X&&_(w.anisotropyMap.channel),clearcoatMapUv:At&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(w.sheenRoughnessMap.channel),specularMapUv:bt&&_(w.specularMap.channel),specularColorMapUv:ut&&_(w.specularColorMap.channel),specularIntensityMapUv:qt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:it&&_(w.thicknessMap.channel),alphaMapUv:gt&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||De),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(te||gt),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===ue,decodeVideoTextureEmissive:wt&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Sn,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:yt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&w.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const M=g[w.type];let C;if(M){const U=In[M];C=xp.clone(U.uniforms)}else C=w.uniforms;return C}function T(w,M){let C;for(let U=0,O=h.length;U<O;U++){const k=h[U];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new fx(i,M,w,r),h.push(C)),C}function b(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:I}}function _x(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||xx),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function vx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Dt};break;case"SpotLight":e={position:new P,direction:new P,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function yx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sx=0;function wx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ex(i){const t=new Mx,e=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ee,a=new ee;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,y=0,v=0,x=0,T=0,b=0,A=0;c.sort(wx);for(let w=0,M=c.length;w<M;w++){const C=c[w],U=C.color,O=C.intensity,k=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*O,u+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],O);A++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=C.shadow.matrix,y++}n.directional[p]=B,p++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;const Z=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,Z.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=W,x++}_++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(U).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(O),B.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==x||I.numSpotMaps!==T||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=T,I.numLightProbes=A,n.version=Sx++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const v=c[d];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function jh(i){const t=new Ex(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Tx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new jh(i),t.set(s,[o])):r>=a.length?(o=new jh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Rx(i,t,e){let n=new xc;const s=new kt,r=new kt,a=new Ie,o=new Kp({depthPacking:bd}),l=new Zp,c={},h=e.maxTextureSize,u={[Ei]:tn,[tn]:Ei,[Sn]:Sn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:bx,fragmentShader:Ax}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let d=this.type;this.render=function(b,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=d!==Zn&&this.type===Zn,k=d===Zn&&this.type!==Zn;for(let W=0,B=b.length;W<B;W++){const Z=b[W],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||O===!0||k===!0){const _t=this.type!==Zn?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new Ti(s.x,s.y,_t),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let _t=0;_t<ht;_t++){const Bt=G.getViewport(_t);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),U.viewport(a),G.updateMatrices(Z,_t),n=G.getFrustum(),x(A,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&y(G,I),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,C)};function y(b,A){const I=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function v(b,A,I,w){let M=null;const C=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=M.uuid,O=A.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let W=k[O];W===void 0&&(W=M.clone(),k[O]=W,A.addEventListener("dispose",T)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Zn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=I}return M}function x(b,A,I,w,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const O=t.update(b),k=b.material;if(Array.isArray(k)){const W=O.groups;for(let B=0,Z=W.length;B<Z;B++){const G=W[B],st=k[G.materialIndex];if(st&&st.visible){const ht=v(b,st,w,M);b.onBeforeShadow(i,b,A,I,O,ht,G),i.renderBufferDirect(I,null,O,ht,b,G),b.onAfterShadow(i,b,A,I,O,ht,G)}}}else if(k.visible){const W=v(b,k,w,M);b.onBeforeShadow(i,b,A,I,O,W,null),i.renderBufferDirect(I,null,O,W,b,null),b.onAfterShadow(i,b,A,I,O,W,null)}}const U=b.children;for(let O=0,k=U.length;O<k;O++)x(U[O],A,I,w,M)}function T(b){b.target.removeEventListener("dispose",T);for(const I in c){const w=c[I],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Cx={[sl]:rl,[al]:cl,[ol]:hl,[Is]:ll,[rl]:sl,[cl]:al,[hl]:ol,[ll]:Is};function Px(i,t){function e(){let D=!1;const it=new Ie;let ot=null;const gt=new Ie(0,0,0,0);return{setMask:function(tt){ot!==tt&&!D&&(i.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){D=tt},setClear:function(tt,$,yt,Vt,me){me===!0&&(tt*=Vt,$*=Vt,yt*=Vt),it.set(tt,$,yt,Vt),gt.equals(it)===!1&&(i.clearColor(tt,$,yt,Vt),gt.copy(it))},reset:function(){D=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,ot=null,gt=null,tt=null;return{setReversed:function($){if(it!==$){const yt=t.get("EXT_clip_control");$?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=$;const Vt=tt;tt=null,this.setClear(Vt)}},getReversed:function(){return it},setTest:function($){$?Q(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function($){ot!==$&&!D&&(i.depthMask($),ot=$)},setFunc:function($){if(it&&($=Cx[$]),gt!==$){switch($){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=$}},setLocked:function($){D=$},setClear:function($){tt!==$&&(it&&($=1-$),i.clearDepth($),tt=$)},reset:function(){D=!1,ot=null,gt=null,tt=null,it=!1}}}function s(){let D=!1,it=null,ot=null,gt=null,tt=null,$=null,yt=null,Vt=null,me=null;return{setTest:function(oe){D||(oe?Q(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(oe){it!==oe&&!D&&(i.stencilMask(oe),it=oe)},setFunc:function(oe,Wn,Pn){(ot!==oe||gt!==Wn||tt!==Pn)&&(i.stencilFunc(oe,Wn,Pn),ot=oe,gt=Wn,tt=Pn)},setOp:function(oe,Wn,Pn){($!==oe||yt!==Wn||Vt!==Pn)&&(i.stencilOp(oe,Wn,Pn),$=oe,yt=Wn,Vt=Pn)},setLocked:function(oe){D=oe},setClear:function(oe){me!==oe&&(i.clearStencil(oe),me=oe)},reset:function(){D=!1,it=null,ot=null,gt=null,tt=null,$=null,yt=null,Vt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,v=null,x=null,T=null,b=null,A=new Dt(0,0,0),I=0,w=!1,M=null,C=null,U=null,O=null,k=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=Z>=2);let st=null,ht={};const _t=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Qt=new Ie().fromArray(_t),pe=new Ie().fromArray(Bt);function ie(D,it,ot,gt){const tt=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ot;yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return $}const Y={};Y[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Is),Ft(!1),St(kc),Q(i.CULL_FACE),ve(Mi);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function vt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Gt(D,it){return u[D]!==it?(i.bindFramebuffer(D,it),u[D]=it,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Rt(D,it){let ot=p,gt=!1;if(D){ot=f.get(it),ot===void 0&&(ot=[],f.set(it,ot));const tt=D.textures;if(ot.length!==tt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let $=0,yt=tt.length;$<yt;$++)ot[$]=i.COLOR_ATTACHMENT0+$;ot.length=tt.length,gt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ot)}function te(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const qe={[Gi]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[td]:i.FUNC_REVERSE_SUBTRACT};qe[ed]=i.MIN,qe[nd]=i.MAX;const L={[id]:i.ZERO,[sd]:i.ONE,[rd]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[ud]:i.SRC_ALPHA_SATURATE,[cd]:i.DST_COLOR,[od]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[hd]:i.ONE_MINUS_DST_COLOR,[ld]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[pd]:i.CONSTANT_ALPHA,[md]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(D,it,ot,gt,tt,$,yt,Vt,me,oe){if(D===Mi){_===!0&&(vt(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),D!==Jf){if(D!==m||oe!==w){if((d!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,x=Gi),oe)switch(D){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,T=null,b=null,A.set(0,0,0),I=0,m=D,w=oe}return}tt=tt||it,$=$||ot,yt=yt||gt,(it!==d||tt!==x)&&(i.blendEquationSeparate(qe[it],qe[tt]),d=it,x=tt),(ot!==y||gt!==v||$!==T||yt!==b)&&(i.blendFuncSeparate(L[ot],L[gt],L[$],L[yt]),y=ot,v=gt,T=$,b=yt),(Vt.equals(A)===!1||me!==I)&&(i.blendColor(Vt.r,Vt.g,Vt.b,me),A.copy(Vt),I=me),m=D,w=!1}function Wt(D,it){D.side===Sn?vt(i.CULL_FACE):Q(i.CULL_FACE);let ot=D.side===tn;it&&(ot=!ot),Ft(ot),D.blending===As&&D.transparent===!1?ve(Mi):ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function St(D){D!==Kf?(Q(i.CULL_FACE),D!==C&&(D===kc?i.cullFace(i.BACK):D===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),C=D}function Me(D){D!==U&&(B&&i.lineWidth(D),U=D)}function wt(D,it,ot){D?(Q(i.POLYGON_OFFSET_FILL),(O!==it||k!==ot)&&(i.polygonOffset(it,ot),O=it,k=ot)):vt(i.POLYGON_OFFSET_FILL)}function Yt(D){D?Q(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=i.TEXTURE0+W-1),st!==D&&(i.activeTexture(D),st=D)}function De(D,it,ot){ot===void 0&&(st===null?ot=i.TEXTURE0+W-1:ot=st);let gt=ht[ot];gt===void 0&&(gt={type:void 0,texture:void 0},ht[ot]=gt),(gt.type!==D||gt.texture!==it)&&(st!==ot&&(i.activeTexture(ot),st=ot),i.bindTexture(D,it||Y[D]),gt.type=D,gt.texture=it)}function R(){const D=ht[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function Ut(D){pe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function bt(D,it){let ot=c.get(it);ot===void 0&&(ot=new WeakMap,c.set(it,ot));let gt=ot.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(it,D.name),ot.set(D,gt))}function ut(D,it){const gt=c.get(it).get(D);l.get(it)!==gt&&(i.uniformBlockBinding(it,gt,D.__bindingPointIndex),l.set(it,gt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,y=null,v=null,x=null,T=null,b=null,A=new Dt(0,0,0),I=0,w=!1,M=null,C=null,U=null,O=null,k=null,Qt.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:vt,bindFramebuffer:Gt,drawBuffers:Rt,useProgram:te,setBlending:ve,setMaterial:Wt,setFlipSided:Ft,setCullFace:St,setLineWidth:Me,setPolygonOffset:wt,setScissorTest:Yt,activeTexture:Ge,bindTexture:De,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Tt,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:Et,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:At,scissor:dt,viewport:Ut,reset:qt}}function Lx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Ba("canvas")}function _(R,S,z){let j=1;const J=De(R);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*J.width),At=Math.floor(j*J.height);u===void 0&&(u=g(X,At));const rt=S?g(X,At):u;return rt.width=X,rt.height=At,rt.getContext("2d").drawImage(R,0,0,X,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+At+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,S,z,j,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=S;if(S===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),S===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),S===i.RGBA){const At=J?Na:re.getTransfer(j);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=At===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(R,S){let z;return R?S===null||S===ji||S===_r?z=i.DEPTH24_STENCIL8:S===Fn?z=i.DEPTH32F_STENCIL8:S===gr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===_r?z=i.DEPTH_COMPONENT24:S===Fn?z=i.DEPTH_COMPONENT32F:S===gr&&(z=i.DEPTH_COMPONENT16),z}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),I(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S)}function I(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,j=f.get(z);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys(j).length===0&&f.delete(z)}n.remove(R)}function w(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,j=f.get(z);delete j[S.__cacheKey],a.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[j][J]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,J=z.length;j<J;j++){const X=n.get(z[j]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(R)}let C=0;function U(){C=0}function O(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const z=n.get(R);if(R.isVideoTexture&&Yt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function B(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Z(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function G(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Q(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const st={[dl]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},ht={[pn]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},_t={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[Xu]:i.LEQUAL,[Pd]:i.EQUAL,[Dd]:i.GEQUAL,[Ld]:i.GREATER,[Id]:i.NOTEQUAL};function Bt(R,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===ro||S.magFilter===kr||S.magFilter===xi||S.minFilter===Un||S.minFilter===ro||S.minFilter===kr||S.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pn||S.minFilter!==kr&&S.minFilter!==xi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const X=k(S);if(X!==R.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[X].usedTimes++;const At=J[R.__cacheKey];At!==void 0&&(J[R.__cacheKey].usedTimes--,At.usedTimes===0&&w(S)),R.__cacheKey=X,R.__webglTexture=J[X].texture}return z}function pe(R,S,z){return Math.floor(Math.floor(R/z)/S)}function ie(R,S,z,j){const X=R.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,j,S.data);else{X.sort((nt,dt)=>nt.start-dt.start);let At=0;for(let nt=1;nt<X.length;nt++){const dt=X[At],Ut=X[nt],bt=dt.start+dt.count,ut=pe(Ut.start,S.width,4),qt=pe(dt.start,S.width,4);Ut.start<=bt+1&&ut===qt&&pe(Ut.start+Ut.count-1,S.width,4)===ut?dt.count=Math.max(dt.count,Ut.start+Ut.count-dt.start):(++At,X[At]=Ut)}X.length=At+1;const rt=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let nt=0,dt=X.length;nt<dt;nt++){const Ut=X[nt],bt=Math.floor(Ut.start/4),ut=Math.ceil(Ut.count/4),qt=bt%S.width,D=Math.floor(bt/S.width),it=ut,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,it,ot,z,j,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function Y(R,S,z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const J=Qt(R,S),X=S.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+z);const At=n.get(X);if(X.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const rt=re.getPrimaries(re.workingColorSpace),Et=S.colorSpace===_i?null:re.getPrimaries(S.colorSpace),Tt=S.colorSpace===_i||rt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let nt=_(S.image,!1,s.maxTextureSize);nt=Ge(S,nt);const dt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let bt=v(S.internalFormat,dt,Ut,S.colorSpace,S.isVideoTexture);Bt(j,S);let ut;const qt=S.mipmaps,D=S.isVideoTexture!==!0,it=At.__version===void 0||J===!0,ot=X.dataReady,gt=T(S,nt);if(S.isDepthTexture)bt=x(S.format===vr,S.type),it&&(D?e.texStorage2D(i.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,dt,Ut,null));else if(S.isDataTexture)if(qt.length>0){D&&it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,qt[0].width,qt[0].height);for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,dt,Ut,ut.data);S.generateMipmaps=!1}else D?(it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,nt.width,nt.height),ot&&ie(S,nt,dt,Ut)):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,dt,Ut,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,bt,qt[0].width,qt[0].height,nt.depth);for(let tt=0,$=qt.length;tt<$;tt++)if(ut=qt[tt],S.format!==Rn)if(dt!==null)if(D){if(ot)if(S.layerUpdates.size>0){const yt=wh(ut.width,ut.height,S.format,S.type);for(const Vt of S.layerUpdates){const me=ut.data.subarray(Vt*yt/ut.data.BYTES_PER_ELEMENT,(Vt+1)*yt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Vt,ut.width,ut.height,1,dt,me)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,nt.depth,dt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,bt,ut.width,ut.height,nt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,nt.depth,dt,Ut,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,bt,ut.width,ut.height,nt.depth,0,dt,Ut,ut.data)}else{D&&it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,qt[0].width,qt[0].height);for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],S.format!==Rn?dt!==null?D?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,dt,Ut,ut.data)}else if(S.isDataArrayTexture)if(D){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,bt,nt.width,nt.height,nt.depth),ot)if(S.layerUpdates.size>0){const tt=wh(nt.width,nt.height,S.format,S.type);for(const $ of S.layerUpdates){const yt=nt.data.subarray($*tt/nt.data.BYTES_PER_ELEMENT,($+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,dt,Ut,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,dt,Ut,nt.data);else if(S.isData3DTexture)D?(it&&e.texStorage3D(i.TEXTURE_3D,gt,bt,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,dt,Ut,nt.data);else if(S.isFramebufferTexture){if(it)if(D)e.texStorage2D(i.TEXTURE_2D,gt,bt,nt.width,nt.height);else{let tt=nt.width,$=nt.height;for(let yt=0;yt<gt;yt++)e.texImage2D(i.TEXTURE_2D,yt,bt,tt,$,0,dt,Ut,null),tt>>=1,$>>=1}}else if(qt.length>0){if(D&&it){const tt=De(qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,bt,tt.width,tt.height)}for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,Ut,ut):e.texImage2D(i.TEXTURE_2D,tt,bt,dt,Ut,ut);S.generateMipmaps=!1}else if(D){if(it){const tt=De(nt);e.texStorage2D(i.TEXTURE_2D,gt,bt,tt.width,tt.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,bt,dt,Ut,nt);m(S)&&d(j),At.__version=X.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,z){if(S.image.length!==6)return;const j=Qt(R,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const X=n.get(J);if(J.version!==X.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const At=re.getPrimaries(re.workingColorSpace),rt=S.colorSpace===_i?null:re.getPrimaries(S.colorSpace),Et=S.colorSpace===_i||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Tt&&!nt?dt[$]=_(S.image[$],!0,s.maxCubemapSize):dt[$]=nt?S.image[$].image:S.image[$],dt[$]=Ge(S,dt[$]);const Ut=dt[0],bt=r.convert(S.format,S.colorSpace),ut=r.convert(S.type),qt=v(S.internalFormat,bt,ut,S.colorSpace),D=S.isVideoTexture!==!0,it=X.__version===void 0||j===!0,ot=J.dataReady;let gt=T(S,Ut);Bt(i.TEXTURE_CUBE_MAP,S);let tt;if(Tt){D&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,Ut.width,Ut.height);for(let $=0;$<6;$++){tt=dt[$].mipmaps;for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt];S.format!==Rn?bt!==null?D?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Vt.width,Vt.height,bt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Vt.width,Vt.height,bt,ut,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Vt.width,Vt.height,0,bt,ut,Vt.data)}}}else{if(tt=S.mipmaps,D&&it){tt.length>0&&gt++;const $=De(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,bt,ut,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,dt[$].width,dt[$].height,0,bt,ut,dt[$].data);for(let yt=0;yt<tt.length;yt++){const me=tt[yt].image[$].image;D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,me.width,me.height,bt,ut,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,me.width,me.height,0,bt,ut,me.data)}}else{D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,bt,ut,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,bt,ut,dt[$]);for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt];D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,bt,ut,Vt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,bt,ut,Vt.image[$])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function vt(R,S,z,j,J,X){const At=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),Et=v(z.internalFormat,At,rt,z.colorSpace),Tt=n.get(S),nt=n.get(z);if(nt.__renderTarget=S,!Tt.__hasExternalTextures){const dt=Math.max(1,S.width>>X),Ut=Math.max(1,S.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,Et,dt,Ut,S.depth,0,At,rt,null):e.texImage2D(J,X,Et,dt,Ut,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,nt.__webglTexture,0,Me(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,nt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,X=x(S.stencilBuffer,J),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Me(S);wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{const j=S.textures;for(let J=0;J<j.length;J++){const X=j[J],At=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),Et=v(X.internalFormat,At,rt,X.colorSpace),Tt=Me(S);z&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Et,S.width,S.height):wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Et,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=j.__webglTexture,X=Me(S);if(S.depthTexture.format===xr)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===vr)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?Rt(S.__webglFramebuffer[0],R):Rt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),Gt(S.__webglDepthbuffer[j],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Gt(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,S,z){const j=n.get(R);S!==void 0&&vt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&te(R)}function L(R){const S=R.texture,z=n.get(R),j=n.get(S);R.addEventListener("dispose",A);const J=R.textures,X=R.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)z.__webglFramebuffer[rt][Et]=i.createFramebuffer()}else z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)z.__webglFramebuffer[rt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,Et=J.length;rt<Et;rt++){const Tt=n.get(J[rt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const Et=J[rt];z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);const Tt=r.convert(Et.format,Et.colorSpace),nt=r.convert(Et.type),dt=v(Et.internalFormat,Tt,nt,Et.colorSpace,R.isXRRenderTarget===!0),Ut=Me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)vt(z.__webglFramebuffer[rt][Et],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et);else vt(z.__webglFramebuffer[rt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,Et=J.length;rt<Et;rt++){const Tt=J[rt],nt=n.get(Tt);let dt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),Bt(dt,Tt),vt(z.__webglFramebuffer,R,Tt,i.COLOR_ATTACHMENT0+rt,dt,0),m(Tt)&&d(dt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),Bt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)vt(z.__webglFramebuffer[Et],R,S,i.COLOR_ATTACHMENT0,rt,Et);else vt(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,rt,0);m(S)&&d(rt),e.unbindTexture()}R.depthBuffer&&te(R)}function ve(R){const S=R.textures;for(let z=0,j=S.length;z<j;z++){const J=S[z];if(m(J)){const X=y(R),At=n.get(J).__webglTexture;e.bindTexture(X,At),d(X),e.unbindTexture()}}}const Wt=[],Ft=[];function St(R){if(R.samples>0){if(wt(R)===!1){const S=R.textures,z=R.width,j=R.height;let J=i.COLOR_BUFFER_BIT;const X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),rt=S.length>1;if(rt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Et=R.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const nt=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,J,i.NEAREST),l===!0&&(Wt.length=0,Ft.length=0,Wt.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(X),Ft.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const nt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Me(R){return Math.min(s.maxSamples,R.samples)}function wt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Yt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ge(R,S){const z=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Fs&&z!==_i&&(re.getTransfer(z)===ue?(j!==Rn||J!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=wt}function Ix(i,t){function e(n,s=_i){let r;const a=re.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===zu)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===Rn)return i.RGBA;if(n===xr)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===Wu)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===La||n===Ia)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===_l||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===Ml||n===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===Ml)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===wl||n===El||n===Tl||n===bl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===kl||n===Gl||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new af(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:Dx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nx extends Vs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Fx,d={},y=e.getContextAttributes();let v=null,x=null;const T=[],b=[],A=new kt;let I=null;const w=new fn;w.viewport=new Ie;const M=new fn;M.viewport=new Ie;const C=[w,M],U=new nm;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ao,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ao,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ao,T[Y]=Q),Q.getHandSpace()};function W(Y){const Q=b.indexOf(Y.inputSource);if(Q===-1)return;const vt=T[Q];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<T.length;Y++){const Q=b[Y];Q!==null&&(b[Y]=null,T[Y].disconnect(Q))}O=null,k=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(v),p=null,f=null,u=null,s=null,x=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Gt=null,Rt=null;y.depth&&(Rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?vr:xr,Gt=y.stencil?_r:ji);const te={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(te),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ti(f.textureWidth,f.textureHeight,{format:Rn,type:Bn,depthTexture:new rf(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const vt=Y.removed[Q],Gt=b.indexOf(vt);Gt>=0&&(b[Gt]=null,T[Gt].disconnect(vt))}for(let Q=0;Q<Y.added.length;Q++){const vt=Y.added[Q];let Gt=b.indexOf(vt);if(Gt===-1){for(let te=0;te<T.length;te++)if(te>=b.length){b.push(vt),Gt=te;break}else if(b[te]===null){b[te]=vt,Gt=te;break}if(Gt===-1)break}const Rt=T[Gt];Rt&&Rt.connect(vt)}}const G=new P,st=new P;function ht(Y,Q,vt){G.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(vt.matrixWorld);const Gt=G.distanceTo(st),Rt=Q.projectionMatrix.elements,te=vt.projectionMatrix.elements,qe=Rt[14]/(Rt[10]-1),L=Rt[14]/(Rt[10]+1),ve=(Rt[9]+1)/Rt[5],Wt=(Rt[9]-1)/Rt[5],Ft=(Rt[8]-1)/Rt[0],St=(te[8]+1)/te[0],Me=qe*Ft,wt=qe*St,Yt=Gt/(-Ft+St),Ge=Yt*-Ft;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ge),Y.translateZ(Yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const De=qe+Yt,R=L+Yt,S=Me-Ge,z=wt+(Gt-Ge),j=ve*L/R*De,J=Wt*L/R*De;Y.projectionMatrix.makePerspective(S,z,j,J,De,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function _t(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),U.near=M.near=w.near=Q,U.far=M.far=w.far=vt,(O!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,k=U.far),U.layers.mask=Y.layers.mask|6,w.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Gt=Y.parent,Rt=U.cameras;_t(U,Gt);for(let te=0;te<Rt.length;te++)_t(Rt[te],Gt);Rt.length===2?ht(U,w,M):U.projectionMatrix.copy(w.projectionMatrix),Bt(Y,U,Gt)};function Bt(Y,Q,vt){vt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return d[Y]};let Qt=null;function pe(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Gt=!1;vt.length!==U.cameras.length&&(U.cameras.length=0,Gt=!0);for(let L=0;L<vt.length;L++){const ve=vt[L];let Wt=null;if(p!==null)Wt=p.getViewport(ve);else{const St=u.getViewSubImage(f,ve);Wt=St.viewport,L===0&&(t.setRenderTargetTextures(x,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(x))}let Ft=C[L];Ft===void 0&&(Ft=new fn,Ft.layers.enable(L),Ft.viewport=new Ie,C[L]=Ft),Ft.matrix.fromArray(ve.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(ve.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),L===0&&(U.matrix.copy(Ft.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Gt===!0&&U.cameras.push(Ft)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(vt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<vt.length;L++){const ve=vt[L].camera;if(ve){let Wt=d[ve];Wt||(Wt=new af,d[ve]=Wt);const Ft=u.getCameraImage(ve);Wt.sourceTexture=Ft}}}}for(let vt=0;vt<T.length;vt++){const Gt=b[vt],Rt=T[vt];Gt!==null&&Rt!==void 0&&Rt.update(Gt,Q,c||a)}Qt&&Qt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ie=new ff;ie.setAnimationLoop(pe),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}}const Ui=new mn,Ox=new ee;function Bx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ju(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ui.copy(x),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Ui)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(y,T);const b=t.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function h(y){const v=u();y.__bindingPointIndex=v;const x=i.createBuffer(),T=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],x=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=x.length;b<A;b++){const I=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,M=I.length;w<M;w++){const C=I[w];if(p(C,b,w,T)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let W=0;W<O.length;W++){const B=O[W],Z=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,x,T){const b=y.value,A=v+"_"+x;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{const I=T[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return T[A]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const T=16;for(let A=0,I=v.length;A<I;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,C=w.length;M<C;M++){const U=w[M],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,W=O.length;k<W;k++){const B=O[k],Z=_(B),G=x%T,st=G%Z.boundary,ht=G+st;x+=st,ht!==0&&T-ht<Z.storage&&(x+=T-ht),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Z.storage}}}const b=x%T;return b>0&&(x+=T-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class kx{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=Fe;let b=0,A=0,I=null,w=-1,M=null;const C=new Ie,U=new Ie;let O=null;const k=new Dt(0);let W=0,B=e.width,Z=e.height,G=1,st=null,ht=null;const _t=new Ie(0,0,B,Z),Bt=new Ie(0,0,B,Z);let Qt=!1;const pe=new xc;let ie=!1,Y=!1;const Q=new ee,vt=new P,Gt=new Ie,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function qe(){return I===null?G:1}let L=n;function ve(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const F="webgl2";if(L=ve(F,E),L===null)throw ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Wt,Ft,St,Me,wt,Yt,Ge,De,R,S,z,j,J,X,At,rt,Et,Tt,nt,dt,Ut,bt,ut,qt;function D(){Wt=new Kg(L),Wt.init(),bt=new Ix(L,Wt),Ft=new Vg(L,Wt,t,bt),St=new Px(L,Wt),Ft.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),Me=new Qg(L),wt=new _x,Yt=new Lx(L,Wt,St,wt,Ft,bt,Me),Ge=new Xg(x),De=new $g(x),R=new rm(L),ut=new Gg(L,R),S=new Zg(L,R,Me,ut),z=new e_(L,S,R,Me),nt=new t_(L,Ft,Yt),rt=new Wg(wt),j=new gx(x,Ge,De,Wt,Ft,ut,rt),J=new Bx(x,wt),X=new vx,At=new Tx(Wt),Tt=new kg(x,Ge,De,St,z,p,l),Et=new Rx(x,z,Ft),qt=new zx(L,Me,Ft,St),dt=new Hg(L,Wt,Me),Ut=new Jg(L,Wt,Me),Me.programs=j.programs,x.capabilities=Ft,x.extensions=Wt,x.properties=wt,x.renderLists=X,x.shadowMap=Et,x.state=St,x.info=Me}D();const it=new Nx(x,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,F,H=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=F,e.width=Math.floor(E*G),e.height=Math.floor(F*G),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(B*G,Z*G).floor()},this.setDrawingBufferSize=function(E,F,H){B=E,Z=F,G=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,F,H,V){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,F,H,V),St.viewport(C.copy(_t).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Bt)},this.setScissor=function(E,F,H,V){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,F,H,V),St.scissor(U.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){St.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let V=0;if(E){let N=!1;if(I!==null){const et=I.texture.format;N=et===pc||et===dc||et===fc}if(N){const et=I.texture.type,ft=et===Bn||et===ji||et===gr||et===_r||et===cc||et===hc,Mt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Lt=Mt.r,Nt=Mt.g,Ct=Mt.b;ft?(g[0]=Lt,g[1]=Nt,g[2]=Ct,g[3]=mt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Lt,_[1]=Nt,_[2]=Ct,_[3]=mt,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Tt.dispose(),X.dispose(),At.dispose(),wt.dispose(),Ge.dispose(),De.dispose(),z.dispose(),ut.dispose(),qt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",Pn),it.removeEventListener("sessionend",Uc),Ai.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Me.autoReset,F=Et.enabled,H=Et.autoUpdate,V=Et.needsUpdate,N=Et.type;D(),Me.autoReset=E,Et.enabled=F,Et.autoUpdate=H,Et.needsUpdate=V,Et.type=N}function tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const F=E.target;F.removeEventListener("dispose",$),yt(F)}function yt(E){Vt(E),wt.remove(E)}function Vt(E){const F=wt.get(E).programs;F!==void 0&&(F.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,V,N,et){F===null&&(F=Rt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Wf(E,F,H,V,N);St.setMaterial(V,ft);let mt=H.index,Lt=1;if(V.wireframe===!0){if(mt=S.getWireframeAttribute(H),mt===void 0)return;Lt=2}const Nt=H.drawRange,Ct=H.attributes.position;let Jt=Nt.start*Lt,he=(Nt.start+Nt.count)*Lt;et!==null&&(Jt=Math.max(Jt,et.start*Lt),he=Math.min(he,(et.start+et.count)*Lt)),mt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,mt.count)):Ct!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Ct.count));const Ce=he-Jt;if(Ce<0||Ce===1/0)return;ut.setup(N,V,Mt,H,mt);let _e,fe=dt;if(mt!==null&&(_e=R.get(mt),fe=Ut,fe.setIndex(_e)),N.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*qe()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(N.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*qe()),N.isLineSegments?fe.setMode(L.LINES):N.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else N.isPoints?fe.setMode(L.POINTS):N.isSprite&&fe.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))fe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,we=N._multiDrawCounts,se=N._multiDrawCount,on=mt?R.get(mt).bytesPerElement:1,Ji=wt.get(V).currentProgram.getUniforms();for(let ln=0;ln<se;ln++)Ji.setValue(L,"_gl_DrawID",ln),fe.render(Pt[ln]/on,we[ln])}else if(N.isInstancedMesh)fe.renderInstances(Jt,Ce,N.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,we=Math.min(H.instanceCount,Pt);fe.renderInstances(Jt,Ce,we)}else fe.render(Jt,Ce)};function me(E,F,H){E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,zr(E,F,H),E.side=Ei,E.needsUpdate=!0,zr(E,F,H),E.side=Sn):zr(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),d=At.get(H),d.init(F),v.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ft=0;ft<et.length;ft++){const Mt=et[ft];me(Mt,H,N),V.add(Mt)}else me(et,H,N),V.add(et)}),d=v.pop(),V},this.compileAsync=function(E,F,H=null){const V=this.compile(E,F,H);return new Promise(N=>{function et(){if(V.forEach(function(ft){wt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){N(E);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let oe=null;function Wn(E){oe&&oe(E)}function Pn(){Ai.stop()}function Uc(){Ai.start()}const Ai=new ff;Ai.setAnimationLoop(Wn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){oe=E,it.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},it.addEventListener("sessionstart",Pn),it.addEventListener("sessionend",Uc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,I),d=At.get(E,v.length),d.init(F),v.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(Q,Nn,F.reversedDepth),Y=this.localClippingEnabled,ie=rt.init(this.clippingPlanes,Y),m=X.get(E,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&io(et,F,-1/0,x.sortObjects)}io(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ht),te=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,te&&Tt.addToRenderList(m,E),this.info.render.frame++,ie===!0&&rt.beginShadows();const H=d.state.shadowsArray;Et.render(H,E,F),ie===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(d.setupLights(),F.isArrayCamera){const et=F.cameras;if(N.length>0)for(let ft=0,Mt=et.length;ft<Mt;ft++){const mt=et[ft];Nc(V,N,E,mt)}te&&Tt.render(E);for(let ft=0,Mt=et.length;ft<Mt;ft++){const mt=et[ft];Fc(m,E,mt,mt.viewport)}}else N.length>0&&Nc(V,N,E,F),te&&Tt.render(E),Fc(m,E,F);I!==null&&A===0&&(Yt.updateMultisampleRenderTarget(I),Yt.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,F),ut.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],ie===!0&&rt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function io(E,F,H,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||pe.intersectsSprite(E)){V&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const ft=z.update(E),Mt=E.material;Mt.visible&&m.push(E,ft,Mt,H,Gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||pe.intersectsObject(E))){const ft=z.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Gt.copy(ft.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Mt)){const mt=ft.groups;for(let Lt=0,Nt=mt.length;Lt<Nt;Lt++){const Ct=mt[Lt],Jt=Mt[Ct.materialIndex];Jt&&Jt.visible&&m.push(E,ft,Jt,H,Gt.z,Ct)}}else Mt.visible&&m.push(E,ft,Mt,H,Gt.z,null)}}const et=E.children;for(let ft=0,Mt=et.length;ft<Mt;ft++)io(et[ft],F,H,V)}function Fc(E,F,H,V){const N=E.opaque,et=E.transmissive,ft=E.transparent;d.setupLightsView(H),ie===!0&&rt.setGlobalState(x.clippingPlanes,H),V&&St.viewport(C.copy(V)),N.length>0&&Br(N,F,H),et.length>0&&Br(et,F,H),ft.length>0&&Br(ft,F,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Nc(E,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Ir:Bn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const et=d.state.transmissionRenderTarget[V.id],ft=V.viewport||C;et.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const Mt=x.getRenderTarget(),mt=x.getActiveCubeFace(),Lt=x.getActiveMipmapLevel();x.setRenderTarget(et),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),te&&Tt.render(H);const Nt=x.toneMapping;x.toneMapping=yi;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ie===!0&&rt.setGlobalState(x.clippingPlanes,V),Br(E,H,V),Yt.updateMultisampleRenderTarget(et),Yt.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let he=0,Ce=F.length;he<Ce;he++){const _e=F[he],fe=_e.object,Pt=_e.geometry,we=_e.material,se=_e.group;if(we.side===Sn&&fe.layers.test(V.layers)){const on=we.side;we.side=tn,we.needsUpdate=!0,Oc(fe,H,V,Pt,we,se),we.side=on,we.needsUpdate=!0,Jt=!0}}Jt===!0&&(Yt.updateMultisampleRenderTarget(et),Yt.updateRenderTargetMipmap(et))}x.setRenderTarget(Mt,mt,Lt),x.setClearColor(k,W),Ct!==void 0&&(V.viewport=Ct),x.toneMapping=Nt}function Br(E,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,et=E.length;N<et;N++){const ft=E[N],Mt=ft.object,mt=ft.geometry,Lt=ft.group;let Nt=ft.material;Nt.allowOverride===!0&&V!==null&&(Nt=V),Mt.layers.test(H.layers)&&Oc(Mt,F,H,mt,Nt,Lt)}}function Oc(E,F,H,V,N,et){E.onBeforeRender(x,F,H,V,N,et),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,F,H,V,E,et),N.transparent===!0&&N.side===Sn&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,x.renderBufferDirect(H,F,V,N,E,et),N.side=Ei,N.needsUpdate=!0,x.renderBufferDirect(H,F,V,N,E,et),N.side=Sn):x.renderBufferDirect(H,F,V,N,E,et),E.onAfterRender(x,F,H,V,N,et)}function zr(E,F,H){F.isScene!==!0&&(F=Rt);const V=wt.get(E),N=d.state.lights,et=d.state.shadowsArray,ft=N.state.version,Mt=j.getParameters(E,N.state,et,F,H),mt=j.getProgramCacheKey(Mt);let Lt=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?De:Ge).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",$),Lt=new Map,V.programs=Lt);let Nt=Lt.get(mt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ft)return zc(E,Mt),Nt}else Mt.uniforms=j.getUniforms(E),E.onBeforeCompile(Mt,x),Nt=j.acquireProgram(Mt,mt),Lt.set(mt,Nt),V.uniforms=Mt.uniforms;const Ct=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),zc(E,Mt),V.needsLights=qf(E),V.lightsStateVersion=ft,V.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function Bc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Da.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function zc(E,F){const H=wt.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Wf(E,F,H,V,N){F.isScene!==!0&&(F=Rt),Yt.resetTextureUnits();const et=F.fog,ft=V.isMeshStandardMaterial?F.environment:null,Mt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fs,mt=(V.isMeshStandardMaterial?De:Ge).get(V.envMap||ft),Lt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,he=!!H.morphAttributes.color;let Ce=yi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ce=x.toneMapping);const _e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=_e!==void 0?_e.length:0,Pt=wt.get(V),we=d.state.lights;if(ie===!0&&(Y===!0||E!==M)){const Ze=E===M&&V.id===w;rt.setState(V,E,Ze)}let se=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==we.state.version||Pt.outputColorSpace!==Mt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==mt||V.fog===!0&&Pt.fog!==et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Nt||Pt.morphTargets!==Ct||Pt.morphNormals!==Jt||Pt.morphColors!==he||Pt.toneMapping!==Ce||Pt.morphTargetsCount!==fe)&&(se=!0):(se=!0,Pt.__version=V.version);let on=Pt.currentProgram;se===!0&&(on=zr(V,F,N));let Ji=!1,ln=!1,qs=!1;const Ee=on.getUniforms(),gn=Pt.uniforms;if(St.useProgram(on.program)&&(Ji=!0,ln=!0,qs=!0),V.id!==w&&(w=V.id,ln=!0),Ji||M!==E){St.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(L,"projectionMatrix",E.projectionMatrix),Ee.setValue(L,"viewMatrix",E.matrixWorldInverse);const en=Ee.map.cameraPosition;en!==void 0&&en.setValue(L,vt.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&Ee.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ln=!0,qs=!0)}if(N.isSkinnedMesh){Ee.setOptional(L,N,"bindMatrix"),Ee.setOptional(L,N,"bindMatrixInverse");const Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ee.setValue(L,"boneTexture",Ze.boneTexture,Yt))}N.isBatchedMesh&&(Ee.setOptional(L,N,"batchingTexture"),Ee.setValue(L,"batchingTexture",N._matricesTexture,Yt),Ee.setOptional(L,N,"batchingIdTexture"),Ee.setValue(L,"batchingIdTexture",N._indirectTexture,Yt),Ee.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ee.setValue(L,"batchingColorTexture",N._colorsTexture,Yt));const _n=H.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&nt.update(N,H,on),(ln||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,Ee.setValue(L,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=mt,gn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),ln&&(Ee.setValue(L,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Xf(gn,qs),et&&V.fog===!0&&J.refreshFogUniforms(gn,et),J.refreshMaterialUniforms(gn,V,G,Z,d.state.transmissionRenderTarget[E.id]),Da.upload(L,Bc(Pt),gn,Yt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Da.upload(L,Bc(Pt),gn,Yt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(L,"center",N.center),Ee.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ee.setValue(L,"normalMatrix",N.normalMatrix),Ee.setValue(L,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ze=V.uniformsGroups;for(let en=0,so=Ze.length;en<so;en++){const Ri=Ze[en];qt.update(Ri,on),qt.bind(Ri,on)}}return on}function Xf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function qf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,H){const V=wt.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),wt.get(E.texture).__webglTexture=F,wt.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const H=wt.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const jf=L.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){I=E,b=F,A=H;let V=!0,N=null,et=!1,ft=!1;if(E){const mt=wt.get(E);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(mt.__hasExternalTextures)Yt.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(mt.__boundDepthTexture!==Ct){if(Ct!==null&&wt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ft=!0);const Nt=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?N=Nt[F][H]:N=Nt[F],et=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[H]:N=Nt,C.copy(E.viewport),U.copy(E.scissor),O=E.scissorTest}else C.copy(_t).multiplyScalar(G).floor(),U.copy(Bt).multiplyScalar(G).floor(),O=Qt;if(H!==0&&(N=jf),St.bindFramebuffer(L.FRAMEBUFFER,N)&&V&&St.drawBuffers(E,N),St.viewport(C),St.scissor(U),St.setScissorTest(O),et){const mt=wt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,H)}else if(ft){const mt=F;for(let Lt=0;Lt<E.textures.length;Lt++){const Nt=wt.get(E.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,H,mt)}}else if(E!==null&&H!==0){const mt=wt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(E,F,H,V,N,et,ft,Mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){St.bindFramebuffer(L.FRAMEBUFFER,mt);try{const Lt=E.textures[Mt],Nt=Lt.format,Ct=Lt.type;if(!Ft.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&H>=0&&H<=E.height-N&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt),L.readPixels(F,H,V,N,bt.convert(Nt),bt.convert(Ct),et))}finally{const Lt=I!==null?wt.get(I).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,V,N,et,ft,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(F>=0&&F<=E.width-V&&H>=0&&H<=E.height-N){St.bindFramebuffer(L.FRAMEBUFFER,mt);const Lt=E.textures[Mt],Nt=Lt.format,Ct=Lt.type;if(!Ft.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt),L.readPixels(F,H,V,N,bt.convert(Nt),bt.convert(Ct),0);const he=I!==null?wt.get(I).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,he);const Ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qd(L,Ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(Jt),L.deleteSync(Ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,H=0){const V=Math.pow(2,-H),N=Math.floor(E.image.width*V),et=Math.floor(E.image.height*V),ft=F!==null?F.x:0,Mt=F!==null?F.y:0;Yt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ft,Mt,N,et),St.unbindTexture()};const Yf=L.createFramebuffer(),$f=L.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,V=null,N=0,et=null){et===null&&(N!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=N,N=0):et=0);let ft,Mt,mt,Lt,Nt,Ct,Jt,he,Ce;const _e=E.isCompressedTexture?E.mipmaps[et]:E.image;if(H!==null)ft=H.max.x-H.min.x,Mt=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Nt=H.min.y,Ct=H.isBox3?H.min.z:0;else{const _n=Math.pow(2,-N);ft=Math.floor(_e.width*_n),Mt=Math.floor(_e.height*_n),E.isDataArrayTexture?mt=_e.depth:E.isData3DTexture?mt=Math.floor(_e.depth*_n):mt=1,Lt=0,Nt=0,Ct=0}V!==null?(Jt=V.x,he=V.y,Ce=V.z):(Jt=0,he=0,Ce=0);const fe=bt.convert(F.format),Pt=bt.convert(F.type);let we;F.isData3DTexture?(Yt.setTexture3D(F,0),we=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Yt.setTexture2DArray(F,0),we=L.TEXTURE_2D_ARRAY):(Yt.setTexture2D(F,0),we=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const se=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),qs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const Ee=E.isDataArrayTexture||E.isData3DTexture,gn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const _n=wt.get(E),Ze=wt.get(F),en=wt.get(_n.__renderTarget),so=wt.get(Ze.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let Ri=0;Ri<mt;Ri++)Ee&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,N,Ct+Ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(F).__webglTexture,et,Ce+Ri)),L.blitFramebuffer(Lt,Nt,ft,Mt,Jt,he,ft,Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||wt.has(E)){const _n=wt.get(E),Ze=wt.get(F);St.bindFramebuffer(L.READ_FRAMEBUFFER,Yf),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,$f);for(let en=0;en<mt;en++)Ee?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,N,Ct+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,N),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,et,Ce+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,et),N!==0?L.blitFramebuffer(Lt,Nt,ft,Mt,Jt,he,ft,Mt,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(we,et,Jt,he,Ce+en,Lt,Nt,ft,Mt):L.copyTexSubImage2D(we,et,Jt,he,Lt,Nt,ft,Mt);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,Pt,_e.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,_e.data):L.texSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,Pt,_e):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,et,Jt,he,ft,Mt,fe,Pt,_e.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,et,Jt,he,_e.width,_e.height,fe,_e.data):L.texSubImage2D(L.TEXTURE_2D,et,Jt,he,ft,Mt,fe,Pt,_e);L.pixelStorei(L.UNPACK_ROW_LENGTH,se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qs),et===0&&F.generateMipmaps&&L.generateMipmap(we),St.unbindTexture()},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){b=0,A=0,I=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Yh=6378137,Gx=6356752314245179e-9;function Nr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=$h(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][f]);const g=$h(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function $h(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ne(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}new P;function Hx(i){const{x:t,y:e,z:n}=i;i.x=n,i.y=t,i.z=e}function Vx(i){return-i+Math.PI/2}const Kh=new im,ui=new P,nn=new P,Bo=new P,vn=new ee,Ln=new ee,Zh=new ee,zo=new si,sn=new mn,Jh=new P,Qh=new P,tu=new P,Fi=new P,_a=new Ur,Wx=1e-12,Xx=.1,xa=0,eu=1,va=2;class qx{constructor(t=1,e=1,n=1){this.name="",this.radius=new P(t,e,n)}intersectRay(t,e){return vn.makeScale(...this.radius).invert(),zo.center.set(0,0,0),zo.radius=1,_a.copy(t).applyMatrix4(vn),_a.intersectSphere(zo,e)?(vn.makeScale(...this.radius),e.applyMatrix4(vn),e):null}getEastNorthUpFrame(t,e,n,s){return n.isMatrix4&&(s=n,n=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(t,e,Jh,Qh,tu),this.getCartographicToPosition(t,e,n,Fi),s.makeBasis(Jh,Qh,tu).setPosition(Fi)}getOrientedEastNorthUpFrame(t,e,n,s,r,a,o){return this.getObjectFrame(t,e,n,s,r,a,o,xa)}getObjectFrame(t,e,n,s,r,a,o,l=va){return this.getEastNorthUpFrame(t,e,n,vn),sn.set(r,a,-s,"ZXY"),o.makeRotationFromEuler(sn).premultiply(vn),l===eu?(sn.set(Math.PI/2,0,0,"XYZ"),Ln.makeRotationFromEuler(sn),o.multiply(Ln)):l===va&&(sn.set(-Math.PI/2,0,Math.PI,"XYZ"),Ln.makeRotationFromEuler(sn),o.multiply(Ln)),o}getCartographicFromObjectFrame(t,e,n=va){return n===eu?(sn.set(-Math.PI/2,0,0,"XYZ"),Ln.makeRotationFromEuler(sn).premultiply(t)):n===va?(sn.set(-Math.PI/2,0,Math.PI,"XYZ"),Ln.makeRotationFromEuler(sn).premultiply(t)):Ln.copy(t),Fi.setFromMatrixPosition(Ln),this.getPositionToCartographic(Fi,e),this.getEastNorthUpFrame(e.lat,e.lon,0,vn).invert(),Ln.premultiply(vn),sn.setFromRotationMatrix(Ln,"ZXY"),e.azimuth=-sn.z,e.elevation=sn.x,e.roll=sn.y,e}getEastNorthUpAxes(t,e,n,s,r,a=Fi){this.getCartographicToPosition(t,e,0,a),this.getCartographicToNormal(t,e,r),n.set(-a.y,a.x,0).normalize(),s.crossVectors(r,n).normalize()}getAzElRollFromRotationMatrix(t,e,n,s,r=xa){return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'),this.getCartographicToPosition(t,e,0,Fi),Zh.copy(n).setPosition(Fi),this.getCartographicFromObjectFrame(Zh,s,r),delete s.height,delete s.lat,delete s.lon,s}getRotationMatrixFromAzElRoll(t,e,n,s,r,a,o=xa){return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(t,e,0,n,s,r,a,o),a.setPosition(0,0,0),a}getFrame(t,e,n,s,r,a,o,l=xa){return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(t,e,a,n,s,r,o,l)}getCartographicToPosition(t,e,n,s){this.getCartographicToNormal(t,e,ui);const r=this.radius;nn.copy(ui),nn.x*=r.x**2,nn.y*=r.y**2,nn.z*=r.z**2;const a=Math.sqrt(ui.dot(nn));return nn.divideScalar(a),s.copy(nn).addScaledVector(ui,n)}getPositionToCartographic(t,e){this.getPositionToSurfacePoint(t,nn),this.getPositionToNormal(t,ui);const n=Bo.subVectors(t,nn);return e.lon=Math.atan2(ui.y,ui.x),e.lat=Math.asin(ui.z),e.height=Math.sign(n.dot(t))*n.length(),e}getCartographicToNormal(t,e,n){return Kh.set(1,Vx(t),e),n.setFromSpherical(Kh).normalize(),Hx(n),n}getPositionToNormal(t,e){const n=this.radius;return e.copy(t),e.x/=n.x**2,e.y/=n.y**2,e.z/=n.z**2,e.normalize(),e}getPositionToSurfacePoint(t,e){const n=this.radius,s=1/n.x**2,r=1/n.y**2,a=1/n.z**2,o=t.x*t.x*s,l=t.y*t.y*r,c=t.z*t.z*a,h=o+l+c,u=Math.sqrt(1/h),f=nn.copy(t).multiplyScalar(u);if(h<Xx)return isFinite(u)?e.copy(f):null;const p=Bo.set(f.x*s*2,f.y*r*2,f.z*a*2);let g=(1-u)*t.length()/(.5*p.length()),_=0,m,d,y,v,x,T,b,A,I,w,M;do{g-=_,y=1/(1+g*s),v=1/(1+g*r),x=1/(1+g*a),T=y*y,b=v*v,A=x*x,I=T*y,w=b*v,M=A*x,m=o*T+l*b+c*A-1,d=o*I*s+l*w*r+c*M*a;const C=-2*d;_=m/C}while(Math.abs(m)>Wx);return e.set(t.x*y,t.y*v,t.z*x)}calculateHorizonDistance(t,e){const n=this.calculateEffectiveRadius(t);return Math.sqrt(2*n*e+e**2)}calculateEffectiveRadius(t){const e=this.radius.x,n=1-this.radius.z**2/e**2,s=t*Xe.DEG2RAD,r=Math.sin(s)**2;return e/Math.sqrt(1-n*r)}getPositionElevation(t){this.getPositionToSurfacePoint(t,nn);const e=Bo.subVectors(t,nn);return Math.sign(e.dot(t))*e.length()}closestPointToRayEstimate(t,e){return this.intersectRay(t,e)?e:(vn.makeScale(...this.radius).invert(),_a.copy(t).applyMatrix4(vn),nn.set(0,0,0),_a.closestPointToPoint(nn,e).normalize(),vn.makeScale(...this.radius),e.applyMatrix4(vn))}copy(t){return this.radius.copy(t.radius),this}clone(){return new this.constructor().copy(this)}}const Qa=new qx(Yh,Yh,Gx);Qa.name="WGS84 Earth";new P;new P;new P;new Ur;new P;new P;new P;new ee;const Tc=37.46,nu={lat:34.99482,lon:135.785},_f=new ee;Qa.getEastNorthUpFrame(nu.lat*Xe.DEG2RAD,nu.lon*Xe.DEG2RAD,Tc,_f);const jx=new ee().makeRotationX(-Math.PI/2),xf=new ee().copy(jx).multiply(_f.clone().invert()),Yx=xf.clone().invert(),iu=new P,Ma={};function Te(i,t,e,n=new P){return Qa.getCartographicToPosition(i*Xe.DEG2RAD,t*Xe.DEG2RAD,e+Tc,n),n.applyMatrix4(xf)}function zs(i,t={}){return iu.copy(i).applyMatrix4(Yx),Qa.getPositionToCartographic(iu,Ma),t.lat=Ma.lat*Xe.RAD2DEG,t.lon=Ma.lon*Xe.RAD2DEG,t.height=Ma.height-Tc,t}function Ha(i,t){return(i+180)/360*2**t}function Va(i,t){const e=i*Xe.DEG2RAD;return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t}function cr(i,t){return i/2**t*360-180}function hr(i,t){const e=Math.PI-2*Math.PI*i/2**t;return Xe.RAD2DEG*Math.atan(Math.sinh(e))}const $x=12,Ss=[];let ko=0;function vf(){for(;ko<$x&&Ss.length;){let i=0;for(let e=1;e<Ss.length;e++)Ss[e].priority()<Ss[i].priority()&&(i=e);const t=Ss.splice(i,1)[0];ko++,fetch(t.url,{mode:"cors"}).then(e=>{if(!e.ok)throw new Error(`${e.status} ${t.url}`);return e.blob()}).then(e=>createImageBitmap(e)).then(t.resolve,t.reject).finally(()=>{ko--,vf()})}}function Yl(i,t=()=>0){return new Promise((e,n)=>{Ss.push({url:i,priority:t,resolve:e,reject:n}),vf()})}const Kx=(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/dem_png/${i}/${t}/${e}.png`,su={now:(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/${i}/${t}/${e}.jpg`,showa:(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/${i}/${t}/${e}.png`},fi=[3591,3593],di=[1621,1623],pi=1,mi=14,$e=12,pr=64,Zx=[[17,1300],[16,3e3]],Jx=[[16,2e3]],ru=1200;function Qx(i){const e=new OffscreenCanvas(256,256).getContext("2d",{willReadFrequently:!0});e.drawImage(i,0,0);const n=e.getImageData(0,0,256,256).data,s=new Float32Array(256*256);for(let r=0;r<s.length;r++){const a=n[r*4],o=n[r*4+1],l=n[r*4+2];let c=a*65536+o*256+l;c===8388608?c=0:c>8388608&&(c-=16777216),s[r]=c*.01}return s}const Go=new P,ir={};function tv(i){return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
				varying vec3 vWorld;
				float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
				float vnoise(vec2 p) {
					vec2 i = floor(p), f = fract(p);
					f = f * f * (3.0 - 2.0 * f);
					return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
				}`).replace("#include <map_fragment>",`#include <map_fragment>
				{
					vec3 c = diffuseColor.rgb;
					// 暗い森の緑も拾えるよう、明るさに対する緑の割合で判定する
					float sum = c.r + c.g + c.b + 1e-3;
					float m = smoothstep(0.35, 0.41, c.g / sum) * smoothstep(0.03, 0.1, sum);
					float n = vnoise(vWorld.xz / 18.0) * 0.6 + vnoise(vWorld.xz / 70.0) * 0.4;
					// 赤・朱・橙・黄、ところどころ常緑樹
					vec3 red = vec3(0.85, 0.06, 0.05);
					vec3 orange = vec3(0.95, 0.38, 0.05);
					vec3 yellow = vec3(0.98, 0.72, 0.12);
					vec3 everg = vec3(0.16, 0.32, 0.12);
					vec3 a = n < 0.4 ? mix(red, orange, n / 0.4) : n < 0.62 ? mix(orange, yellow, (n - 0.4) / 0.22) : mix(yellow, everg, smoothstep(0.66, 0.9, n));
					float lum = dot(c, vec3(0.3, 0.59, 0.11));
					diffuseColor.rgb = mix(c, a * (0.35 + lum * 1.9), m * 0.9);
				}`)},i.customProgramCacheKey=()=>"autumn",i}class au{constructor(t,e,n){this.z=t,this.x=e,this.y=n,this.heights=new Float32Array((pr+1)**2),this.mesh=null,this.baseTexture=null,this.hiTexture=null,this.hiLoading=!1,this.hiLevel=0;const s=cr(e+.5,t),r=hr(n+.5,t);this.center=Te(r,s,0)}sample(t,e){const n=pr;t=Math.min(Math.max(t,0),n),e=Math.min(Math.max(e,0),n);const s=Math.min(Math.floor(t),n-1),r=Math.min(Math.floor(e),n-1),a=t-s,o=e-r,l=this.heights,c=l[r*(n+1)+s],h=l[r*(n+1)+s+1],u=l[(r+1)*(n+1)+s],f=l[(r+1)*(n+1)+s+1];return a+o<=1?c+(h-c)*a+(u-c)*o:f+(u-f)*(1-a)+(h-f)*(1-o)}}class ev{constructor(t,{era:e="now",mobile:n=!1}={}){this.hiRes=n?Jx:Zx,this.mobile=n,this.era=e,this.eraGen=0,this.group=new Re,this.group.name="terrain",t.add(this.group),this.fine=new Map,this.coarse=new Map,this.dem=new Map,this.player=new P}key(t,e,n){return`${t}/${e}/${n}`}async init(t=()=>{}){const e=[],n=2**(mi-$e);for(let o=fi[0]*n;o<(fi[1]+1)*n;o++)for(let l=di[0]*n;l<(di[1]+1)*n;l++){const c=new au(mi,o,l);this.fine.set(this.key(mi,o,l),c),e.push(c)}for(let o=fi[0]-pi;o<=fi[1]+pi;o++)for(let l=di[0]-pi;l<=di[1]+pi;l++){if(o>=fi[0]&&o<=fi[1]&&l>=di[0]&&l<=di[1])continue;const h=new au($e,o,l);this.coarse.set(this.key($e,o,l),h),e.push(h)}const s=new Set;for(const o of e)for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)s.add(this.key(o.z,o.x+l,o.y+c));let r=0;const a=s.size+e.length;await Promise.all([...s].map(async o=>{const[l,c,h]=o.split("/").map(Number);try{const u=await Yl(Kx(l,c,h),()=>this.priority(l,c,h));this.dem.set(o,Qx(u))}catch{}t(++r/a)}));for(const o of e)this.buildMesh(o);await Promise.all(e.map(async o=>{const l=o.z===mi?mi:$e+1;await this.loadPhoto(o,l).then(c=>{o.baseTexture=c,o.hiTexture||(o.mesh.material.map=c),o.mesh.material.color.set(16777215),o.mesh.material.needsUpdate=!0}).catch(()=>{}),t(++r/a)})),this.dem.clear(),this.ready=!0}priority(t,e,n){const s=cr(e+.5,t),r=hr(n+.5,t);return Te(r,s,0).distanceTo(this.player)*(t===$e?3:1)}demPixel(t,e,n){const s=Math.floor(e/256),r=Math.floor(n/256),a=this.dem.get(this.key(t,s,r));if(!a)return 0;const o=Math.min(255,Math.max(0,Math.floor(e-s*256))),l=Math.min(255,Math.max(0,Math.floor(n-r*256)));return a[l*256+o]}demSample(t,e,n){e-=.5,n-=.5;const s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=this.demPixel(t,s,r),c=this.demPixel(t,s+1,r),h=this.demPixel(t,s,r+1),u=this.demPixel(t,s+1,r+1);return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}buildMesh(t){const e=pr,n=new Float32Array((e+1)**2*3),s=new Float32Array((e+1)**2*2),r=new P,a=t.z===$e?4:0;for(let h=0;h<=e;h++)for(let u=0;u<=e;u++){const f=(t.x+u/e)*256,p=(t.y+h/e)*256,g=this.demSample(t.z,f,p),_=h*(e+1)+u;t.heights[_]=g,Te(hr(p/256,t.z),cr(f/256,t.z),g-a,r),n[_*3]=r.x,n[_*3+1]=r.y,n[_*3+2]=r.z,s[_*2]=u/e,s[_*2+1]=1-h/e}const o=[];for(let h=0;h<e;h++)for(let u=0;u<e;u++){const f=h*(e+1)+u,p=f+1,g=f+e+1,_=g+1;o.push(f,g,p,p,g,_)}const l=new xe;l.setAttribute("position",new ne(n,3)),l.setAttribute("uv",new ne(s,2)),l.setIndex(o),l.computeVertexNormals(),l.computeBoundingSphere();const c=tv(new Le({color:7043674}));t.mesh=new xt(l,c),t.mesh.matrixAutoUpdate=!1,t.mesh.updateMatrix(),t.mesh.receiveShadow=!0,this.group.add(t.mesh)}async loadPhoto(t,e,n=this.era){const s=2**(e-t.z),r=()=>t.center.distanceTo(this.player)*(t.z===$e?3:1),a=document.createElement("canvas");a.width=a.height=256*s;const o=a.getContext("2d");o.fillStyle="#8f8c80",o.fillRect(0,0,a.width,a.height);const l=[],c=n==="showa";for(let u=0;u<s;u++)for(let f=0;f<s;f++){const p=t.x*s+u,g=t.y*s+f,_=m=>Yl(m,r).catch(()=>null);l.push(Promise.all([_(su.now(e,p,g)),c?_(su.showa(e,p,g)):null]).then(([m,d])=>{m&&o.drawImage(m,u*256,f*256),d&&(o.globalCompositeOperation=m?"luminosity":"source-over",o.drawImage(d,u*256,f*256),o.globalCompositeOperation="source-over",d.close()),m==null||m.close()}))}await Promise.all(l),c&&(o.globalCompositeOperation="soft-light",o.fillStyle="rgba(214, 170, 110, 0.35)",o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="source-over");const h=new Vn(a);return h.colorSpace=Fe,h.anisotropy=8,h}setEra(t){if(t===this.era)return;const e=this.era;this.era=t;const n=++this.eraGen,s=[...this.fine.values(),...this.coarse.values()].sort((r,a)=>r.center.distanceTo(this.player)-a.center.distanceTo(this.player));for(const r of s){if(!r.mesh)continue;r.bases??(r.bases={}),r.baseTexture&&(r.bases[e]=r.baseTexture),r.hiTexture&&(r.hiTexture.dispose(),r.hiTexture=null),r.hiLevel=0;const a=l=>{r.baseTexture=l,r.hiTexture||(r.mesh.material.map=l,r.mesh.material.needsUpdate=!0)};if(r.bases[t]){a(r.bases[t]);continue}r.mesh.material.map=r.bases[e],r.mesh.material.needsUpdate=!0;const o=r.z===mi?mi:$e+1;this.loadPhoto(r,o,t).then(l=>{r.bases[t]=l,n===this.eraGen&&(a(l),this.mobile&&r.bases[e]&&r.bases[e]!==l&&(r.bases[e].dispose(),delete r.bases[e]))}).catch(()=>{})}}desiredLevel(t){for(const[e,n]of this.hiRes)if(t<n)return e;return 0}update(t){if(this.player.copy(t),!this.ready)return;this.updateCoarse(t);let e=0;for(const s of this.fine.values())s.hiLoading&&e++;const n=[...this.fine.values()].map(s=>({c:s,d:Math.hypot(s.center.x-t.x,s.center.z-t.z)})).sort((s,r)=>s.d-r.d);for(const{c:s,d:r}of n){const a=this.desiredLevel(r);if(s.hiLevel&&a<s.hiLevel&&this.desiredLevel(r-ru)<s.hiLevel&&(s.hiTexture.dispose(),s.hiTexture=null,s.hiLevel=0,s.mesh.material.map=s.baseTexture,s.mesh.material.needsUpdate=!0),a>(s.hiLevel||0)&&!s.hiLoading&&e<3){s.hiLoading=!0,e++;const o=this.eraGen;this.loadPhoto(s,a).then(l=>{var h;if(s.hiLoading=!1,o!==this.eraGen){l.dispose();return}if(this.desiredLevel(Math.hypot(s.center.x-this.player.x,s.center.z-this.player.z)-ru)<a){l.dispose();return}(h=s.hiTexture)==null||h.dispose(),s.hiTexture=l,s.hiLevel=a,s.mesh.material.map=l,s.mesh.material.color.set(16777215),s.mesh.material.needsUpdate=!0})}}}heightAtWorld(t,e){Go.set(t,0,e),zs(Go,ir);const n=this.heightAt(ir.lat,ir.lon);return Te(ir.lat,ir.lon,n,Go).y}updateCoarse(t){for(const e of this.coarse.values()){const s=Math.max(0,Math.abs(e.center.x-t.x)-4900)+Math.max(0,Math.abs(e.center.z-t.z)-4900);if(s<1500&&!e.hiLevel&&!e.hiLoading){e.hiLoading=!0;const r=this.eraGen;this.loadPhoto(e,$e+3).then(a=>{if(e.hiLoading=!1,r!==this.eraGen){a.dispose();return}e.hiTexture=a,e.hiLevel=$e+3,e.mesh.material.map=a,e.mesh.material.color.set(16777215),e.mesh.material.needsUpdate=!0})}else s>4e3&&e.hiLevel&&(e.hiTexture.dispose(),e.hiTexture=null,e.hiLevel=0,e.mesh.material.map=e.baseTexture,e.mesh.material.needsUpdate=!0)}}heightAt(t,e){for(const[n,s]of[[mi,this.fine],[$e,this.coarse]]){const r=Ha(e,n),a=Va(t,n),o=Math.floor(r),l=Math.floor(a),c=s.get(this.key(n,o,l));if(c){const h=c.sample((r-o)*pr,(a-l)*pr);return n===$e?h-4:h}}return 0}bounds(){return{west:cr(fi[0]-pi,$e),east:cr(fi[1]+1+pi,$e),north:hr(di[0]-pi,$e),south:hr(di[1]+1+pi,$e)}}}const q=256;function nv(i){let t=i;return()=>(t=t*16807%2147483647,t/2147483647)}function un(i,t,e,n,s,r,a=1){const o=nv(a);for(let l=0;l<n*s/40;l++){const c=o()<.5?0:255;i.fillStyle=`rgba(${c},${c},${c},${r*.15*o()})`;const h=2+o()*6;i.fillRect(t+o()*n,e+o()*s,h,h)}}function Ho(i,t,e,n,s,r="#ddd",a="#5b7590"){i.fillStyle=r,i.fillRect(t-4,e-4,n+8,s+8);const o=i.createLinearGradient(t,e,t+n,e+s);o.addColorStop(0,a),o.addColorStop(.5,"#9fb6cc"),o.addColorStop(1,a),i.fillStyle=o,i.fillRect(t,e,n,s)}const iv=[i=>{i.fillStyle="#e9e1d2",i.fillRect(0,0,q,q),i.fillStyle="#4a3324",i.fillRect(0,70,q,186),i.fillStyle="#6b4a33";for(let t=6;t<q;t+=12)i.fillRect(t,80,5,176);i.fillStyle="#3a281c",i.fillRect(0,60,q,14),i.fillRect(0,0,10,q),i.fillRect(q-10,0,10,q),i.fillStyle="#6d6a66",i.fillRect(0,q-14,q,14),un(i,0,0,q,q,.12,3)},i=>{i.fillStyle="#ece6da",i.fillRect(0,0,q,q),i.fillStyle="#4a3324",i.fillRect(0,0,10,q),i.fillRect(q-10,0,10,q),i.fillRect(0,q-12,q,12),i.fillStyle="#5a4030",i.fillRect(70,90,116,70),i.fillStyle="#e9e1d2";for(let t=78;t<186;t+=18)i.fillRect(t,96,9,58);un(i,0,0,q,q,.12,5)},i=>{i.fillStyle="#9a9894",i.fillRect(0,0,q,q),Ho(i,16,70,q-32,q-84,"#555","#3e5568"),i.fillStyle="#c33",i.fillRect(10,30,q-20,26),un(i,0,0,q,q,.1,7)},i=>{i.fillStyle="#d8d8d6",i.fillRect(0,0,q,q),Ho(i,18,60,q-36,150,"#bfc3c7","#4f6a84"),i.fillStyle="#c9c9c7",i.fillRect(q/2-3,56,6,158),un(i,0,0,q,q,.1,11)},i=>{i.fillStyle="#efe9df",i.fillRect(0,0,q,q),Ho(i,30,40,q-60,140,"#ccc","#6f8396"),i.fillStyle="#f7f5f0",i.fillRect(0,160,q,96),i.fillStyle="#cfcac0",i.fillRect(0,160,q,8),i.fillStyle="#b8b2a6",i.fillRect(0,q-6,q,6),un(i,0,0,q,q,.1,13)},i=>{i.fillStyle="#f2ece0",i.fillRect(0,0,q,q),i.fillStyle="#7a3b22",i.fillRect(0,0,22,q),i.fillRect(q-22,0,22,q),i.fillRect(0,40,q,18),i.fillRect(0,170,q,14),i.fillStyle="#5a2a18",i.fillRect(0,q-20,q,20),un(i,0,0,q,q,.1,17)},i=>{i.fillStyle="#c9ccd0",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=16){const e=i.createLinearGradient(t,0,t+16,0);e.addColorStop(0,"#aeb2b8"),e.addColorStop(.5,"#e2e5e8"),e.addColorStop(1,"#aeb2b8"),i.fillStyle=e,i.fillRect(t,0,16,q)}un(i,0,0,q,q,.12,19)},i=>ou(i,"#b3b8c0","#868c96",23),i=>{i.fillStyle="#b9b8b3",i.fillRect(0,0,q,q),un(i,0,0,q,q,.25,29),i.strokeStyle="rgba(0,0,0,0.12)",i.lineWidth=2;for(let t=0;t<=q;t+=64)i.beginPath(),i.moveTo(t,0),i.lineTo(t,q),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(q,t),i.stroke()},i=>{i.fillStyle="#8e9aa2",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=32)i.fillStyle="rgba(255,255,255,0.25)",i.fillRect(t,0,4,q),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(t+4,0,3,q);un(i,0,0,q,q,.12,31)},i=>ou(i,"#545961","#33373e",37,28),i=>{i.fillStyle="#d9d5cd",i.fillRect(0,0,q,q),un(i,0,0,q,q,.15,41)},i=>{i.fillStyle="#f4f4f2",i.fillRect(0,0,q,q),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=3,i.strokeRect(0,0,q,q)},i=>{const t=i.createLinearGradient(0,0,q,q);t.addColorStop(0,"#f7d774"),t.addColorStop(.45,"#fff2b0"),t.addColorStop(.55,"#e0b23c"),t.addColorStop(1,"#c8962a"),i.fillStyle=t,i.fillRect(0,0,q,q),i.fillStyle="rgba(120,80,10,0.35)",i.fillRect(0,0,14,q),i.fillRect(q-14,0,14,q),i.fillRect(0,q-16,q,16),i.fillStyle="rgba(90,60,10,0.25)",i.fillRect(60,70,136,110)},i=>{i.fillStyle="#fbf6ec",i.fillRect(0,0,q,q),i.fillStyle="#e8432c",i.fillRect(0,0,30,q),i.fillRect(q-30,0,30,q),i.fillRect(0,30,q,20),i.fillRect(0,160,q,18),i.fillStyle="#f2c230",i.fillRect(0,50,q,6),i.fillStyle="#b52a1c",i.fillRect(0,q-18,q,18),un(i,0,0,q,q,.08,43)},i=>{i.fillStyle="#7a4a2a",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=10)i.fillStyle=t%20?"rgba(0,0,0,0.18)":"rgba(255,220,180,0.12)",i.fillRect(0,t,q,5);un(i,0,0,q,q,.2,47)}];function ou(i,t,e,n,s=22){i.fillStyle=e,i.fillRect(0,0,q,q);for(let r=0;r<q;r+=s){const a=i.createLinearGradient(r,0,r+s,0);a.addColorStop(0,e),a.addColorStop(.45,t),a.addColorStop(1,e),i.fillStyle=a,i.fillRect(r,0,s,q)}i.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<q;r+=32)i.fillRect(0,r,q,3);un(i,0,0,q,q,.12,n)}function sv(){const i=document.createElement("canvas");i.width=i.height=q*4;const t=i.getContext("2d");iv.forEach((n,s)=>{t.save(),t.translate(s%4*q,Math.floor(s/4)*q),t.beginPath(),t.rect(0,0,q,q),t.clip(),n(t),t.restore()});const e=new Vn(i);return e.colorSpace=Fe,e.flipY=!1,e.minFilter=xi,e.anisotropy=8,e}const Ht={HOUSE_GROUND:0,HOUSE_UPPER:1,SHOP_GROUND:2,OFFICE_UPPER:3,APARTMENT_UPPER:4,TEMPLE_WALL:5,FACTORY_WALL:6,KAWARA:7,CONCRETE_ROOF:8,METAL_ROOF:9,TEMPLE_ROOF:10,PLAIN_WALL:11,TOWER:12,GOLD:13,SHRINE_WALL:14,HIWADA:15},yn={HOUSE:0,BUILDING:1,SACRED:2,FACTORY:3,SHED:4,TOWER:5};function rv(i,t,e){const n=new DataView(i),s=n.getUint32(4,!0),r=[];let a=8;for(let o=0;o<s;o++){const l=n.getUint8(a),c=n.getUint8(a+1),h=n.getUint8(a+2),u=n.getInt16(a+4,!0)/10,f=n.getUint16(a+6,!0)/10;a+=8;const p=new Float32Array(l*2);let g=1/0,_=1/0,m=-1/0,d=-1/0;for(let y=0;y<l;y++){const v=t+n.getInt16(a,!0)/10,x=e+n.getInt16(a+2,!0)/10;a+=4,p[y*2]=v,p[y*2+1]=x,g=Math.min(g,v),m=Math.max(m,v),_=Math.min(_,x),d=Math.max(d,x)}r.push({ring:p,type:c,storeys:h,base:u,height:f,minX:g,minZ:_,maxX:m,maxZ:d})}return r}function ws(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Wa(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}function br(i){const t=[];for(let o=0;o<i.length;o+=2)t.push([i[o],i[o+1]]);t.sort((o,l)=>o[0]-l[0]||o[1]-l[1]);const e=(o,l,c)=>(l[0]-o[0])*(c[1]-o[1])-(l[1]-o[1])*(c[0]-o[0]),n=[],s=[];for(const o of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],o)<=0;)n.pop();n.push(o)}for(let o=t.length-1;o>=0;o--){const l=t[o];for(;s.length>=2&&e(s[s.length-2],s[s.length-1],l)<=0;)s.pop();s.push(l)}const r=n.slice(0,-1).concat(s.slice(0,-1));let a=null;for(let o=0;o<r.length;o++){const l=r[o],c=r[(o+1)%r.length];let h=c[0]-l[0],u=c[1]-l[1];const f=Math.hypot(h,u);if(f<1e-6)continue;h/=f,u/=f;let p=1/0,g=-1/0,_=1/0,m=-1/0;for(const y of r){const v=y[0]*h+y[1]*u,x=-y[0]*u+y[1]*h;p=Math.min(p,v),g=Math.max(g,v),_=Math.min(_,x),m=Math.max(m,x)}const d=(g-p)*(m-_);if(!a||d<a.area){const y=(p+g)/2,v=(_+m)/2;a={area:d,cx:y*h-v*u,cz:y*u+v*h,ux:h,uz:u,hu:(g-p)/2,hv:(m-_)/2}}}return a?(a.hv>a.hu&&(a={...a,ux:-a.uz,uz:a.ux,hu:a.hv,hv:a.hu}),a):null}function av(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=t[2]-i[2],a=e[0]-i[0],o=e[1]-i[1],l=e[2]-i[2];return[s*l-r*o,r*a-n*l,n*o-s*a]}class ov{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.col=[],this.cell=[]}tri(t,e,n,s,r,a,o,l,c=null){if(c){const x=av(t,e,n),T=(t[0]+e[0]+n[0])/3-c[0],b=(t[1]+e[1]+n[1])/3-c[1],A=(t[2]+e[2]+n[2])/3-c[2];x[0]*T+x[1]*b+x[2]*A<0&&([e,n]=[n,e],[r,a]=[a,r])}const h=e[0]-t[0],u=e[1]-t[1],f=e[2]-t[2],p=n[0]-t[0],g=n[1]-t[1],_=n[2]-t[2];let m=u*_-f*g,d=f*p-h*_,y=h*g-u*p;const v=Math.hypot(m,d,y)||1;m/=v,d/=v,y/=v;for(const[x,T]of[[t,s],[e,r],[n,a]])this.pos.push(x[0],x[1],x[2]),this.nrm.push(m,d,y),this.uv.push(T[0],T[1]),this.col.push(l[0],l[1],l[2]),this.cell.push(o)}quad(t,e,n,s,r,a,o,l,c,h,u=null){this.tri(t,e,n,r,a,o,c,h,u),this.tri(t,n,s,r,o,l,c,h,u)}walls(t,e,n,s,r,a,o,l=null,c=0,h=e){const u=t.length/2;let f=0;for(let p=0;p<u;p++){const g=(p+1)%u,_=t[p*2],m=t[p*2+1],d=t[g*2],y=t[g*2+1],v=Math.hypot(d-_,y-m),x=Math.max(1,Math.round(v/s)),T=f+x,b=(A,I,w,M)=>{const C=(A-h)/r-M,U=(I-h)/r-M;this.quad([_,A,m],[d,A,y],[d,I,y],[_,I,m],[f,C],[T,C],[T,U],[f,U],w,o)};l!==null&&n-h>c+.5?(b(e,h+c,l,0),b(h+c,n,a,c/r)):b(e,n,l??a,0),f=T%64}}flatRoof(t,e,n,s,r=8){const a=t.length/2,o=[];for(let c=0;c<a;c++)o.push(new kt(t[c*2],t[c*2+1]));let l;try{l=yc.triangulateShape(o,[])}catch{return}for(const[c,h,u]of l){const f=o[c],p=o[h],g=o[u],_=[f.x,e,f.y],m=[p.x,e,p.y],d=[g.x,e,g.y],y=(m[2]-_[2])*(d[0]-_[0])-(m[0]-_[0])*(d[2]-_[2]),v=x=>[x[0]/r,x[2]/r];y>0?this.tri(_,m,d,v(_),v(m),v(d),n,s):this.tri(_,d,m,v(_),v(d),v(m),n,s)}}pitchedRoof(t,e,n,s,r,a,o,l,c){const{cx:h,cz:u,ux:f,uz:p}=t,g=t.hu+s,_=t.hv+s,m=-p,d=f,y=(O,k,W)=>[h+f*O+m*k,W,u+p*O+d*k],v=e+n,x=r==="gable"?g:Math.max(0,g-_),T=Math.hypot(_,n),b=1.2,A=[h,e-100,u];for(const O of[1,-1]){const k=y(-g*O,O*_,e),W=y(g*O,O*_,e),B=y(x*O,0,v),Z=y(-x*O,0,v);this.quad(k,W,B,Z,[0,0],[2*g/b,0],[(g+x)/b,T/1.5],[(g-x)/b,T/1.5],a,o,A)}if(r==="gable")for(const O of[1,-1]){const k=y(O*t.hu,-O*t.hv,e),W=y(O*t.hu,O*t.hv,e),B=y(O*t.hu,0,v);this.tri(k,W,B,[0,0],[2*t.hv/3.6,0],[t.hv/3.6,n/3],l,c,[h,e,u])}else{const O=Math.hypot(g-x,n);for(const k of[1,-1]){const W=y(k*g,-k*_,e),B=y(k*g,k*_,e),Z=y(k*x,0,v);this.tri(W,B,Z,[0,0],[2*_/b,0],[_/b,O/1.5],a,o,A)}}const I=[.3,.27,.24],w=y(-g,-_,e),M=y(g,-_,e),C=y(g,_,e),U=y(-g,_,e);this.quad(w,M,C,U,[0,0],[0,0],[0,0],[0,0],Ht.PLAIN_WALL,I,[h,e+100,u])}toArrays(){return{position:new Float32Array(this.pos),normal:new Float32Array(this.nrm),uv:new Float32Array(this.uv),color:new Float32Array(this.col),cell:new Float32Array(this.cell)}}}const $l=Math.PI/180,Zi=13,lv=(i,t,e)=>[t[0]+(e[0]-t[0])*i,t[1]+(e[1]-t[1])*i,t[2]+(e[2]-t[2])*i],ya=[[1,.78,.82],[.75,.93,.86],[.78,.88,1],[1,.96,.7],[.88,.8,1],[1,.86,.7],[1,1,1],[.82,1,.75],[1,.9,.95]],cv=[[.55,.72,1.3],[1.45,.72,.55],[.7,1.2,.78],[.6,1.15,1.15],[1.05,.75,1.3],[1.5,.62,.62],[1.5,1.05,.5],[.9,.95,1.05]],lu=[[1.1,.6,.65],[.6,.88,1.15],[.65,1.05,.75],[1.15,1,.5],[.9,.75,1.15],[1.15,.8,.55],[1.05,1.05,1.05],[.6,1.05,1.05]],Ni=(i,t)=>i[Math.floor(t*i.length)%i.length],hv=[[.95,.92,.86],[.78,.66,.55],[.9,.86,.78],[.7,.58,.48]],uv=[[.75,.77,.8],[.65,.67,.7],[.82,.83,.85]];function Mf(i){return i.type===yn.TOWER?null:i.type===yn.SACRED||i.height<=14?i.height:7+ws(i.ring[0],i.ring[1])*6}function fv(i,t,e=[],n=null,s="now"){const r=new ov,a=s==="showa",o=dv(i,e,n);for(const l of o.free)hu(r,l,null);for(const l of i){if(l.skip)continue;if(l.landmark){hu(r,l.landmark,l);continue}const c=Math.abs(Wa(l.ring)),h=ws(l.ring[0],l.ring[1]),u=a?Mf(l):l.height;if(u===null)continue;const f=l.base+u,p=l.base-Zi,g=l.base,_=l.ring;let m=l.type;switch(a&&(m===yn.BUILDING||m===yn.FACTORY)&&(m=yn.HOUSE),m){case yn.HOUSE:{const d=br(_),y=d?c/(4*d.hu*d.hv):0,v=Ni(a?hv:ya,h),x=Ni(a?uv:cv,ws(h,3.1));if(d&&y>.82&&d.hv>1.5){const T=24*$l,b=Math.min(d.hv*Math.tan(T),Math.max(1.2,u*.45)),A=Math.max(l.base+2.4,f-b);r.walls(_,p,A,3.6,3,Ht.HOUSE_UPPER,v,Ht.HOUSE_GROUND,3,g);const I=d.hu/d.hv>1.5||h>.55?"gable":"hip";r.pitchedRoof(d,A,f-A,.45,I,Ht.KAWARA,x,Ht.HOUSE_UPPER,v)}else r.walls(_,p,f,3.6,3,Ht.HOUSE_UPPER,v,Ht.HOUSE_GROUND,3,g),r.flatRoof(_,f,Ht.KAWARA,x,1.2);break}case yn.SACRED:{const d=br(_),y=d?d.hv*2:10;if(d&&l.height>y*2.2&&d.hu/d.hv<1.3){Ef(r,d,l.base,l.height,{tiers:5,wall:"wood"});break}const v=lv(h,[.7,.72,.78],[.55,.57,.62]);if(d&&c/(4*d.hu*d.hv)>.8){const x=33*$l,T=Math.min(d.hv*Math.tan(x),l.height*.6),b=Math.max(l.base+2.5,f-T);r.walls(_,p,b,3,3.5,Ht.TEMPLE_WALL,[1,1,1],null,0,g);const A=Math.min(3,.8+d.hv*.15);r.pitchedRoof(d,b,f-b,A,"hip",Ht.TEMPLE_ROOF,v)}else r.walls(_,p,f,3,3.5,Ht.TEMPLE_WALL,[1,1,1],null,0,g),r.flatRoof(_,f,Ht.TEMPLE_ROOF,v,1.2);break}case yn.FACTORY:{const d=Ni(ya,h);r.walls(_,p,f,4,4,Ht.FACTORY_WALL,d,null,0,g),r.flatRoof(_,f,Ht.METAL_ROOF,Ni(lu,ws(h,1.7)),6);break}case yn.SHED:{const d=Ni(ya,h);r.walls(_,p,f,3,2.5,Ht.PLAIN_WALL,d,null,0,g),r.flatRoof(_,f,Ht.METAL_ROOF,[.6,.6,.62],6);break}case yn.TOWER:{Tf(r,_,l.base,l.height);break}default:{const d=h>.6&&l.height<45,y=Ni(ya,ws(h,d?2.2:5.3));r.walls(_,p,f,3.2,3.3,d?Ht.APARTMENT_UPPER:Ht.OFFICE_UPPER,y,Ht.SHOP_GROUND,3.6,g),r.flatRoof(_,f,Ht.CONCRETE_ROOF,Ni(lu,ws(h,9.1)),8)}}}return r.toArrays()}function cu(i,t,e){let n=!1;const s=e.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=e[r*2],l=e[r*2+1],c=e[a*2],h=e[a*2+1];l>t!=h>t&&i<(c-o)*(t-l)/(h-l)+o&&(n=!n)}return n}function dv(i,t,e){const n=[];for(const s of t){const r=!e||s.x>=e.x0&&s.x<e.x1&&s.z>=e.z0&&s.z<e.z1;let a=null,o=1/0;if(s.kind==="pagoda"){for(const l of i){if(l.landmark||l.type!==yn.SACRED||l.height<12)continue;const c=(l.minX+l.maxX)/2,h=(l.minZ+l.maxZ)/2;if(Math.hypot(c-s.x,h-s.z)>40)continue;const u=br(l.ring);!u||u.hu/u.hv>1.4||l.height<u.hv*2*1.05||-l.height<o&&(o=-l.height,a=l)}if(a){a.landmark=s;continue}}for(const l of i){if(l.landmark||l.type===yn.SHED||s.x<l.minX-40||s.x>l.maxX+40||s.z<l.minZ-40||s.z>l.maxZ+40)continue;const c=Math.abs(Wa(l.ring));if(c<25)continue;let h;if(cu(s.x,s.z,l.ring))h=-c;else{const u=(l.minX+l.maxX)/2,f=(l.minZ+l.maxZ)/2,p=Math.hypot(u-s.x,f-s.z);if(p>30)continue;h=p*100-c}h<o&&(o=h,a=l)}if(a&&(s.kind==="pagoda"||s.kind==="kinkaku"||s.kind==="ginkaku"||s.kind==="gate")&&s.free){const l=br(a.ring);l&&l.hu/l.hv<(s.kind==="gate"?4:1.6)&&Math.abs(l.hv*2-(s.free.d??s.free.w))<(s.free.d??s.free.w)*.8||(cu(s.x,s.z,a.ring)&&Math.abs(Wa(a.ring))<1500&&(a.skip=!0),a=null)}a?a.landmark=s:s.free&&r&&n.push(s)}return{free:n}}const Xa={gray:[Ht.TEMPLE_ROOF,[.75,.77,.82]],hiwada:[Ht.HIWADA,[1,1,1]],green:[Ht.TEMPLE_ROOF,[.55,1.35,1.05]]},ks={wood:[Ht.TEMPLE_WALL,[.85,.72,.6]],vermilion:[Ht.SHRINE_WALL,[1,1,1]],white:[Ht.TEMPLE_WALL,[1.05,1.05,1.05]]};function hu(i,t,e){var a;let n,s,r;if(e){if(n=br(e.ring),s=e.base,r=e.height,!n)return}else{const o=(t.free.deg??0)*$l;n={cx:t.x,cz:t.z,ux:Math.cos(o),uz:Math.sin(o),hu:(t.free.w??10)/2,hv:(t.free.d??t.free.w??10)/2},n.hv>n.hu&&(n={...n,ux:-n.uz,uz:n.ux,hu:n.hv,hv:n.hu}),s=t.y,r=t.free.h}switch((a=t.free)!=null&&a.h&&t.kind!=="hall"&&t.kind!=="shrine"&&(r=Math.max(r,t.free.h*.8)),t.kind){case"pagoda":return Ef(i,n,s,r,t);case"gate":return mv(i,n,s,Math.max(r,10),t);case"kinkaku":return gv(i,n,s,Math.max(r,11));case"ginkaku":return _v(i,n,s,Math.max(r,8));case"tower":return Tf(i,e.ring,s,r);case"shrine":return pv(i,n,s,Math.max(r,8),t);default:return wf(i,n,s,Math.max(r,8),t)}}function dn(i,t,e=t){return{...i,hu:i.hu*t,hv:i.hv*e}}function yf(i,t,e,n){i.walls(an(dn(t,1)),e-Zi,e+n,2,2,Ht.PLAIN_WALL,[.82,.8,.76]),i.flatRoof(an(t),e+n,Ht.PLAIN_WALL,[.78,.76,.72],4)}function Sf(i,t,e,n,s,r){const[a,o]=Xa[r]??Xa.gray;i.pitchedRoof(t,e,n*.62,s,"hip",a,o);const l=dn(t,.82,.5);i.pitchedRoof(l,e+n*.5,n*.5,.2,"gable",a,o,a,o)}function wf(i,t,e,n,s){const[r,a]=ks[s.wall]??ks.wood,o=Math.min(1.6,n*.08);yf(i,dn(t,1.02),e,o);const l=dn(t,.88),c=e+o+Math.max(4,n*.4);i.walls(an(l),e+o,c,3.2,3.6,r,a);const h=Math.max(3,e+n-c);Sf(i,l,c,h,Math.min(5,1.5+l.hv*.22),s.roof)}function pv(i,t,e,n,s){wf(i,t,e,n,{...s,wall:"vermilion"})}function mv(i,t,e,n,s){const[r,a]=ks[s.wall]??ks.vermilion,[o,l]=Xa[s.roof]??Xa.gray,c=n,h=dn(t,.8);i.walls(an(h),e-Zi,e+c*.34,2.4,3.5,r,a),i.pitchedRoof(h,e+c*.34,c*.08,Math.max(1,t.hv*.35),"hip",o,l);const u=dn(t,.72);i.walls(an(u),e+c*.4,e+c*.62,2.4,3.5,r,a),Sf(i,u,e+c*.62,c*.38,Math.max(1.2,t.hv*.45),s.roof)}function Ef(i,t,e,n,s){const r=s.tiers??5,[a,o]=ks[s.wall]??ks.wood,l=Math.max(t.hu,t.hv),c={...t,hu:l,hv:l},h=n*.24,u=n-h,f=u/r,p=[.55,.56,.6];yf(i,dn(c,1.25),e,1.2);for(let m=0;m<r;m++){const d=l*(1-m*(.4/r)),y=e+1.2+m*f,v={...t,hu:d*.6,hv:d*.6};i.walls(an(v),y-(m?.5:Zi),y+f*.5,1.8,2.8,a,o.map(x=>x*.75)),i.pitchedRoof(v,y+f*.5,f*.4,d*.95,"hip",Ht.TEMPLE_ROOF,p)}const g=e+1.2+u,_=Math.max(.25,l*.05);i.walls(an({...t,hu:_,hv:_}),g-1.5,g+h,1,2,Ht.METAL_ROOF,[.45,.38,.28]);for(let m=0;m<9;m++){const d=g+h*(.15+m*.07);i.walls(an({...t,hu:_*3,hv:_*3}),d,d+h*.025,1,1,Ht.METAL_ROOF,[.55,.45,.25])}}function gv(i,t,e,n){const s=dn(t,.9),r=[Ht.HIWADA,[.75,.68,.62]];i.walls(an(s),e-Zi,e+n*.3,2.5,3,Ht.TEMPLE_WALL,[.95,.85,.7]),i.pitchedRoof(s,e+n*.3,n*.06,1.2,"hip",r[0],r[1]),i.walls(an(dn(s,.95)),e+n*.36,e+n*.58,2.5,3,Ht.GOLD,[1.25,1.2,1.1]),i.pitchedRoof(dn(s,.95),e+n*.58,n*.06,1.1,"hip",r[0],r[1]);const a=dn(s,.62);i.walls(an(a),e+n*.64,e+n*.8,2,3,Ht.GOLD,[1.25,1.2,1.1]),i.pitchedRoof(a,e+n*.8,n*.2,1.1,"hip",r[0],r[1]),i.walls(an({...t,hu:.5,hv:.3}),e+n,e+n+1.6,1,1,Ht.GOLD,[1.3,1.25,1.1])}function _v(i,t,e,n){const s=dn(t,.9);i.walls(an(s),e-Zi,e+n*.38,2.5,3,Ht.TEMPLE_WALL,[.7,.6,.5]),i.pitchedRoof(s,e+n*.38,n*.08,1.1,"hip",Ht.HIWADA,[.7,.65,.6]);const r=dn(s,.7);i.walls(an(r),e+n*.46,e+n*.72,2,3,Ht.TEMPLE_WALL,[.45,.4,.38]),i.pitchedRoof(r,e+n*.72,n*.28,1.2,"hip",Ht.HIWADA,[.7,.65,.6])}function an(i){const{cx:t,cz:e,ux:n,uz:s,hu:r,hv:a}=i,o=-s,l=n,c=new Float32Array(8);if([[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([h,u],f)=>{c[f*2]=t+n*h*r+o*u*a,c[f*2+1]=e+s*h*r+l*u*a}),Wa(c)>0){const h=new Float32Array(8);for(let u=0;u<4;u++)h[u*2]=c[(3-u)*2],h[u*2+1]=c[(3-u)*2+1];return h}return c}function Tf(i,t,e,n){let s=0,r=0;const a=t.length/2;for(let f=0;f<a;f++)s+=t[f*2],r+=t[f*2+1];s/=a,r/=a;const o=Math.min(31,n*.25);i.walls(t,e-Zi,e+o,3.2,3.3,Ht.OFFICE_UPPER,[1,1,1],Ht.SHOP_GROUND,4),i.flatRoof(t,e+o,Ht.CONCRETE_ROOF,[.9,.9,.9]);const l=16,c=[[0,6.5],[.55,4.5],[.72,4.2],[.74,7.5],[.84,7.5],[.86,3.5],[.97,1.2],[1,.3]],h=e+o,u=e+n;for(let f=0;f<c.length-1;f++){const[p,g]=c[f],[_,m]=c[f+1],d=h+(u-h)*p,y=h+(u-h)*_,v=f===3?Ht.OFFICE_UPPER:Ht.TOWER,x=f>=5?f%2?[1,.3,.25]:[1,1,1]:[1,1,1];for(let T=0;T<l;T++){const b=T/l*Math.PI*2,A=(T+1)/l*Math.PI*2;i.quad([s+Math.cos(b)*g,d,r+Math.sin(b)*g],[s+Math.cos(A)*g,d,r+Math.sin(A)*g],[s+Math.cos(A)*m,y,r+Math.sin(A)*m],[s+Math.cos(b)*m,y,r+Math.sin(b)*m],[T/2,0],[(T+1)/2,0],[(T+1)/2,(y-d)/3.3],[T/2,(y-d)/3.3],v,x,[s,(d+y)/2,r])}}}const xs=50;function xv(){const i=new Le({vertexColors:!0,map:sv()});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float cell;
varying float vCell;
varying vec2 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vCell = cell;
vTile = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vCell;
varying vec2 vTile;`).replace("#include <map_fragment>",`
				{
					// アトラスの中の1セルを繰り返し貼る (ミップマップの継ぎ目が出ないよう微分は元の座標から)
					float col = mod(vCell, 4.0);
					float row = floor(vCell / 4.0 + 0.001);
					vec2 f = vec2(fract(vTile.x), 1.0 - fract(vTile.y));
					vec2 auv = (vec2(col, row) + 0.03 + f * 0.94) / 4.0;
					vec2 dx = dFdx(vTile) * (0.94 / 4.0);
					vec2 dy = dFdy(vTile) * (0.94 / 4.0);
					vec4 texel = textureGrad(map, auv, dx, dy);
					diffuseColor *= texel;
				}
			`)},i}const vv=[["#f5c61e","#ffd84a","#e8b10c"],["#d8301c","#ee5a24","#c21f2c"],["#d07a26","#b85c1c","#e0962e"]],Mv=new Sc(2.4,1).scale(1,1.25,1).translate(0,5.2,0),yv=new Xt(.22,.3,3.6,6).translate(0,1.8,0),Sv=new Le({color:16777215,flatShading:!0}),wv=new Le({color:5914155});function Ev(i){for(const t of Object.values(i.attributes))t.onUpload(function(){this.array=null})}class Tv{constructor(t,e,{near:n=1400,far:s=3800,era:r="now"}={}){this.far=s,this.releaseDist=s+1e3,this.era=r,this.landmarks=null,this.near=n,this.group=new Re,this.group.name="buildings",t.add(this.group),this.baseUrl=e,this.material=xv(),this.chunks=new Map,this.chunkSize=1e3,this.worker=new Worker(new URL(""+new URL("buildingWorker-CGrhtNVT.js",import.meta.url).href,import.meta.url),{type:"module"}),this.jobs=new Map,this.jobId=0,this.worker.onmessage=a=>{const o=this.jobs.get(a.data.id);this.jobs.delete(a.data.id),o==null||o(a.data.arrays,a.data.sphere)},this.busy=0}async init(){this.treeUrl=this.baseUrl.replace(/buildings\/$/,"trees/");try{this.treeIndex=new Set(await(await fetch(`${this.treeUrl}index.json`)).json())}catch{this.treeIndex=new Set}const e=await(await fetch(`${this.baseUrl}index.json`)).json();this.chunkSize=e.chunk;for(const[n,s,r]of e.chunks)this.chunks.set(`${n}_${s}`,{cx:n,cz:s,count:r,x:(n+.5)*e.chunk,z:(s+.5)*e.chunk,buffer:null,list:null,grid:null,loading:!1,mesh:null,lod:-1,building:!1})}build(t,e){t.building=!0,this.busy++;const n=++this.jobId,s=t.cx*this.chunkSize,r=t.cz*this.chunkSize,a=this.chunkSize,o=this.era,l=this.landmarks.filter(c=>c.x>s-60&&c.x<s+a+60&&c.z>r-60&&c.z<r+a+60&&!(o==="showa"&&c.kind==="tower"));this.worker.postMessage({id:n,buffer:t.buffer.slice(0),ox:s,oz:r,size:a,detail:e,landmarks:l,era:o}),this.jobs.set(n,(c,h)=>{if(this.busy--,t.building=!1,!t.buffer)return;const u=new xe;u.setAttribute("position",new Ne(c.position,3)),u.setAttribute("normal",new Ne(c.normal,3)),u.setAttribute("uv",new Ne(c.uv,2)),u.setAttribute("color",new Ne(c.color,3)),u.setAttribute("cell",new Ne(c.cell,1)),u.boundingSphere=new si(new P(h[0],h[1],h[2]),h[3]),Ev(u);const f=new xt(u,this.material);f.castShadow=!0,f.receiveShadow=!0,f.matrixAutoUpdate=!1,t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose()),t.mesh=f,t.lod=o===this.era?e:-1,this.group.add(f)})}setEra(t){if(t!==this.era){this.era=t;for(const e of this.chunks.values())e.mesh&&(e.lod=-1);this.lastUpdate=0}}async load(t){t.loading=!0;try{const e=await fetch(`${this.baseUrl}${t.cx}_${t.cz}.bin`);if(t.buffer=await e.arrayBuffer(),t.list=rv(t.buffer,t.cx*this.chunkSize,t.cz*this.chunkSize),t.grid=new Map,t.list.forEach((n,s)=>{for(let r=Math.floor(n.minX/xs);r<=Math.floor(n.maxX/xs);r++)for(let a=Math.floor(n.minZ/xs);a<=Math.floor(n.maxZ/xs);a++){const o=`${r}_${a}`;t.grid.has(o)||t.grid.set(o,[]),t.grid.get(o).push(s)}}),this.treeIndex.has(`${t.cx}_${t.cz}`)){const n=await fetch(`${this.treeUrl}${t.cx}_${t.cz}.bin`);t.trees=await n.arrayBuffer()}}catch(e){console.warn("building chunk",t.cx,t.cz,e)}t.loading=!1}release(t){this.removeTrees(t),t.trees=null,t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose()),t.mesh=null,t.lod=-1,t.buffer=null,t.list=null,t.grid=null}addStandalone(t){const e=fv([],1,t,null,this.era),n=new xe;for(const[r,a]of[["position",3],["normal",3],["uv",2],["color",3],["cell",1]])n.setAttribute(r,new Ne(e[r],a));n.computeBoundingSphere();const s=new xt(n,this.material);s.castShadow=s.receiveShadow=!0,this.group.add(s)}setLandmarks(t,e){this.landmarks=t,this.heightAtWorld=e}buildTrees(t){const e=new DataView(t.trees),n=e.getUint32(4,!0),s=new Si(Mv,Sv,n),r=new Si(yv,wv,n),a=new de,o=new Dt;for(let l=0;l<n;l++){const c=t.cx*this.chunkSize+e.getInt16(8+l*6,!0)/10,h=t.cz*this.chunkSize+e.getInt16(10+l*6,!0)/10,u=e.getUint8(12+l*6)%3,f=Math.abs(Math.sin(c*12.9898+h*78.233)*43758.5453)%1;a.position.set(c,this.heightAtWorld(c,h)-.2,h),a.rotation.y=f*6.28,a.scale.setScalar(.8+f*.5),a.updateMatrix(),s.setMatrixAt(l,a.matrix),r.setMatrixAt(l,a.matrix),s.setColorAt(l,o.set(vv[u][Math.floor(f*3)]))}for(const l of[s,r])l.castShadow=!0,l.receiveShadow=!0,l.computeBoundingSphere(),this.group.add(l);t.treeMeshes=[s,r]}removeTrees(t){for(const e of t.treeMeshes??[])this.group.remove(e),e.dispose();t.treeMeshes=null}update(t){if(!this.landmarks)return;const e=performance.now();if(e-(this.lastUpdate??0)<250)return;this.lastUpdate=e;const n=[...this.chunks.values()].map(s=>({c:s,d:Math.max(0,Math.hypot(s.x-t.x,s.z-t.z)-this.chunkSize*.5)})).sort((s,r)=>s.d-r.d);for(const{c:s,d:r}of n){if(r>this.releaseDist){(s.buffer||s.mesh)&&this.release(s);continue}if(r>this.far*.7?this.removeTrees(s):s.trees&&!s.treeMeshes&&this.buildTrees(s),r>this.far){s.mesh&&(this.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh=null,s.lod=-1);continue}if(!s.buffer){s.loading||this.load(s);continue}const a=r<this.near?1:0;s.lod!==a&&!s.building&&this.busy<2&&this.build(s,a)}}readyAround(t,e){let n=0,s=0;for(const r of this.chunks.values())Math.hypot(r.x-t.x,r.z-t.z)<e&&(n++,r.mesh&&s++);return n?s/n:1}inside(t,e,n){return this.hit({x:t,y:n,z:e},0)}hit(t,e=.6){const n=this.chunks.get(`${Math.floor(t.x/this.chunkSize)}_${Math.floor(t.z/this.chunkSize)}`);if(!(n!=null&&n.grid))return!1;const s=n.grid.get(`${Math.floor(t.x/xs)}_${Math.floor(t.z/xs)}`);if(!s)return!1;for(const r of s){const a=n.list[r],o=this.era==="showa"?Mf(a):a.height;if(o!==null&&!(t.y>a.base+o+e||t.y<a.base-3)&&!(t.x<a.minX-e||t.x>a.maxX+e||t.z<a.minZ-e||t.z>a.maxZ+e)&&bv(t.x,t.z,a.ring))return!0}return!1}}function bv(i,t,e){let n=!1;const s=e.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=e[r*2],l=e[r*2+1],c=e[a*2],h=e[a*2+1];l>t!=h>t&&i<(c-o)*(t-l)/(h-l)+o&&(n=!n)}return n}const Kl=9.81,vs=Xe.DEG2RAD,Av=11,bf=17,Zl=-Math.atan(1/Av),Rv=Kl*Math.sin(-Zl)/bf**2,Cv=9,Pv=16,Jl=40;class Lv{constructor(){this.position=new P,this.velocity=new P,this.yaw=0,this.gamma=Zl,this.bank=0,this.speed=bf,this.jetFuel=0,this.jetting=!1,this.stalled=!1,this.object=Dv(),this.jetFlame=this.object.getObjectByName("flame")}reset(t,e){this.position.copy(t),this.yaw=e,this.gamma=-20*vs,this.bank=0,this.speed=14,this.jetFuel=0,this.jetting=!1,this.stalled=!1,this.syncObject()}forward(t=new P){return t.set(Math.sin(this.yaw),0,-Math.cos(this.yaw))}update(t,e,n=0){this.jetting=e.jet&&this.jetFuel>0,this.jetting&&(this.jetFuel=Math.max(0,this.jetFuel-t));const s=e.roll*55*vs;this.bank+=(s-this.bank)*Math.min(1,t*2.5),this.yaw+=Kl*Math.tan(this.bank)/Math.max(this.speed,8)*t,this.stalled=this.speed<Cv&&!this.jetting;let a=(this.jetting?2*vs:Zl)+(e.pitch>0?e.pitch*32*vs:e.pitch*50*vs);this.stalled&&(a=Math.min(a,-35*vs));const o=this.stalled?2.5:1.6;this.gamma+=(a-this.gamma)*Math.min(1,t*o);const l=1+.6*(1/Math.cos(this.bank)-1);let c=-Kl*Math.sin(this.gamma)-Rv*this.speed**2*l;this.jetting&&(c+=Pv),this.speed=Math.max(4,this.speed+c*t);const h=this.forward(),u=this.speed*Math.cos(this.gamma);this.velocity.set(h.x*u,this.speed*Math.sin(this.gamma)+n,h.z*u),this.position.addScaledVector(this.velocity,t),this.syncObject()}syncObject(){const t=this.object;t.position.copy(this.position),t.rotation.set(this.gamma*.8,-this.yaw,-this.bank,"YXZ"),this.jetFlame.visible=this.jetting,this.jetting&&this.jetFlame.scale.setScalar(.8+Math.random()*.5)}addJet(t){this.jetFuel=Math.min(Jl,this.jetFuel+t)}}function Iv(){const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d"),e=["#1d3f8f","#f4f1ea","#d7262e","#f6b51e","#d7262e","#f4f1ea","#d7262e","#f6b51e","#d7262e","#f4f1ea","#1d3f8f"],n=i.width/e.length;e.forEach((r,a)=>{t.fillStyle=r,t.fillRect(a*n,0,n+1,i.height)}),t.strokeStyle="rgba(0,0,0,0.18)",t.lineWidth=2;for(let r=1;r<e.length;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,i.height),t.stroke();for(let r=40;r<i.height;r+=50)t.strokeStyle="rgba(0,0,0,0.07)",t.beginPath(),t.moveTo(0,r),t.lineTo(i.width,r),t.stroke();t.fillStyle="#2b2b30",t.fillRect(0,0,i.width,14);const s=new Vn(i);return s.colorSpace=Fe,s}function Dv(){const i=new Re;i.name="glider";const t=10.4,e=2.3,n=3.1,s=1.35,r=-1.75,a=20,o=6,l=[],c=[],h=[];for(let B=0;B<=a;B++){const Z=B/a*2-1,G=Math.abs(Z),st=r+G*e,ht=n*(1-G*.8)+.25;for(let _t=0;_t<=o;_t++){const Bt=_t/o,Qt=Z*t/2,pe=s+.12+G*.32+Math.sin(Math.PI*Bt)*.16*(1-G*G)-Bt*G*.12,ie=st+ht*Bt;l.push(Qt,pe,ie),c.push(B/a,1-Bt)}}for(let B=0;B<a;B++)for(let Z=0;Z<o;Z++){const G=B*(o+1)+Z,st=G+o+1;h.push(G,G+1,st,st,G+1,st+1)}const u=new xe;u.setAttribute("position",new ne(l,3)),u.setAttribute("uv",new ne(c,2)),u.setIndex(h),u.computeVertexNormals();const f=new xt(u,new Mn({map:Iv(),side:Sn,roughness:.7}));f.castShadow=!0,i.add(f);const p=new Mn({color:11844804,metalness:.7,roughness:.35}),g=(B,Z,G=.022,st=i,ht=p)=>{const _t=new P(...B),Bt=new P(...Z),Qt=new xt(new Xt(G,G,_t.distanceTo(Bt),8),ht);return Qt.position.copy(_t).add(Bt).multiplyScalar(.5),Qt.quaternion.setFromUnitVectors(new P(0,1,0),Bt.clone().sub(_t).normalize()),Qt.castShadow=!0,st.add(Qt),Qt};g([0,s+.08,r-.05],[0,s+.02,r+n+.1],.03),g([0,s+.12,r],[-t/2,s+.44,r+e],.028),g([0,s+.12,r],[t/2,s+.44,r+e],.028),g([-t*.3,s+.25,r+e*.6+.2],[t*.3,s+.25,r+e*.6+.2],.02),g([0,s+.1,-.2],[0,s+.75,-.2],.02).name="centerPole";const _=-.42,m=-.62,d=.72;g([0,s,-.15],[-d,_,m]),g([0,s,-.15],[d,_,m]),g([-d,_,m],[d,_,m],.02);const y=new Mn({color:6710886});for(const B of[-1,1])g([B*d,_,m],[B*t/2*.62,s+.33,r+e*.62+.1],.005,i,y),g([0,s+.75,-.2],[B*t/2*.62,s+.33,r+e*.62+.1],.005,i,y);g([0,_,m],[0,s+.05,r],.005,i,y).name="centerPole";const v=new Re;v.name="pilotBody";const x=new Mn({color:2042436,roughness:.8}),T=new Mn({color:16168222,roughness:.6}),b=new Mn({color:14726287,roughness:.8}),A=new xt(new Qn(.25,1.25,6,12),x);A.rotation.x=Math.PI/2,A.position.set(0,-.12,.78),A.scale.set(1,1,.85),v.add(A);const I=new xt(new Qn(.255,.9,4,12),T);I.rotation.x=Math.PI/2,I.position.set(0,-.12,.85),I.scale.set(1.01,1,.2),v.add(I);const w=new xt(new Qn(.13,.32,4,8),x);w.rotation.z=Math.PI/2,w.position.set(0,-.08,.12),v.add(w);for(const B of[-1,1]){const Z=[B*.24,-.08,.12],G=[B*.44,-.3,-.22],st=[B*.42,_,m];g(Z,G,.065,v,x),g(G,st,.055,v,x);const ht=new xt(new le(.06,8,6),b);ht.position.set(...st),v.add(ht)}g([0,s,.25],[0,.08,.45],.025,v,new Mn({color:2236962})),v.traverse(B=>{B.castShadow=!0}),i.add(v);const M=new Re;M.name="pilotHead";const C=new xt(new le(.16,16,12),new Mn({color:16777215,roughness:.3}));C.scale.set(1,.95,1.1),M.add(C);const U=new xt(new le(.162,16,12,0,Math.PI*2,0,Math.PI*.35),new Mn({color:14100014,roughness:.3}));U.scale.set(.35,.95,1.1),M.add(U);const O=new xt(new le(.15,16,8,Math.PI*.15,Math.PI*.7,Math.PI*.35,Math.PI*.3),new Mn({color:1120290,roughness:.1,metalness:.6}));O.rotation.y=Math.PI,O.scale.set(1.05,1,1.12),M.add(O),M.position.set(0,0,-.05),M.traverse(B=>{B.castShadow=!0}),i.add(M);const k=new xt(new Xt(.16,.12,.5,12),p);k.rotation.x=Math.PI/2,k.position.set(0,-.12,1.65),i.add(k);const W=new xt(new Xt(.05,.3,2.2,12,1,!0),new Mn({color:16752672,emissive:16738816,emissiveIntensity:3,transparent:!0,opacity:.85,depthWrite:!1}));return W.rotation.x=Math.PI/2,W.position.set(0,-.12,3),W.name="flame",i.add(W),i}const Vo=(()=>{try{return localStorage.getItem("kiyomizu-lang")}catch{return null}})();var Lu;const Gs=Vo==="ja"||Vo==="en"?Vo:(((Lu=navigator.languages)==null?void 0:Lu[0])??navigator.language??"ja").toLowerCase().startsWith("ja")?"ja":"en",uu={ja:{start:`🎌 清水の舞台 🎌
ターボ ×1 で出発！`,hintTouch:"画面をタップで飛び降りる！",hintKey:"スペースキーで飛び降りる！",jump:`とうっ！
清水の舞台から
飛び降りた！`,visited:i=>`通過: ${i.join(" → ")}`,noBalloons:"アドバルーンは割れなかった…",save:"記録する",saved:"記録しました",anonymous:"名無しの参拝者",share:(i,t)=>`清水の舞台から飛び降りるつもりで、紅葉の京都の空を ${i}km 飛んでアドバルーンを ${t} 個割った！🎈`,hashtag:"清水の舞台から飛び降りるつもり",noRecords:"まだ記録がありません",chasing:i=>i>1?` ・追跡中×${i}`:" ・追跡中",toShowa:`⏳ 昭和初期へ
タイムスリップ！`,toNow:`⏳ 現代に
もどってきた！`,landed:["着陸！","地面に降り立ちました。"],roof:["屋根に着地！","建物の屋根に降り立ちました。"],crash:["ドーン！","建物にぶつかってしまいました。"],outside:["京都の外へ…","京都盆地を飛び出してしまいました。"],clear:["🏯 全制覇！ 🏯","京都の名所をすべてめぐりました！ 鬼からも逃げ切った！"],caught:["つかまった！","鬼に捕まってしまいました… 👹"],checkpoint:i=>`🎆 チェックポイント！ 🎆
${i}
ターボ +1 🚀`,moreOni:i=>`
👹 見張りの鬼が増えた！ (${i}匹)`,spawned:i=>`👹 鬼が${i}匹、京都を徘徊中…
見つからないように！`,foundMany:i=>`👹 鬼${i}匹に見つかった！`,found:`👹 鬼に見つかった！
逃げろ〜！`,noTurbo:"ターボ切れ！",thermal:"✨ 上昇気流！",loadingTown:"紅葉の京都の街並みを組み立て中…",loadFailed:i=>`読み込みに失敗しました: ${i}`,shareDialog:"シェアする",continued:i=>` (コンティニュー${i}回)`,contWatch:"🎬 広告を見て続きから飛ぶ",contLoading:"広告を読み込み中…",contFail:"広告を読み込めませんでした",contNote:i=>`少し前の場所から飛び直せます (あと${i}回)`,contSkip:i=>`結果を見る (${i})`,contGo:`🪂 続きから！
鬼は持ち場に戻った`,resumeApp:"再開",howtoApp:[["👹","<b>鬼ごっこ</b>！ 鬼が20匹、京都の名所のまわりを徘徊している。近づくと見つかって追いかけてくる。捕まったら負け。アドバルーンを1個割るごとに鬼が1匹増え、時間がたつと速くなる"],["🎯","名所のアドバルーンを割ってチェックポイント通過！ 花火があがって<b>ターボ +1</b>。全部割ったらクリア"],["🕹","左下のスティックで操縦。上に倒すと上昇、下に倒すと下降 (スピードアップ)、左右で旋回"],["🚀","「ターボ」ボタンを押している間だけ噴射。最初は<b>1つ</b>。アドバルーンで増えます"],["👀","「視点」ボタンで視点切替 (後ろから ⇔ パイロット目線)"],["⏳","「時代」ボタンで、飛びながら<b>現代 ⇔ 昭和初期</b>にタイムスリップ！ 市電や銭湯の煙突、二代目京都駅が見られる"],["✨","光の粒が昇る場所は<b>上昇気流</b>。中で旋回すると高度アップ"],["⚠","地面や建物に降りたらゲーム終了。スピードが落ちすぎると失速！ 広告を見ると続きから飛べる (1回のゲームで3回まで)"],["◁","戻るボタンで一時停止"]]},en:{start:`🎌 The Kiyomizu Stage 🎌
Starting with Turbo ×1!`,hintTouch:"Tap the screen to jump!",hintKey:"Press Space to jump!",jump:`Here goes!
Leaping off the
Kiyomizu stage!`,visited:i=>`Visited: ${i.join(" → ")}`,noBalloons:"No balloons popped…",save:"Save",saved:"Saved",anonymous:"Nameless Pilgrim",share:(i,t)=>`I took the plunge from the Kiyomizu stage, flew ${i} km over autumn Kyoto and popped ${t} balloons! 🎈`,hashtag:"KiyomizuDive",noRecords:"No records yet",chasing:i=>i>1?` ・Chasing ×${i}`:" ・Chasing",toShowa:`⏳ Time slip to
the early Showa era!`,toNow:`⏳ Back to
the present!`,landed:["Landed!","You touched down on the ground."],roof:["Roof landing!","You landed on a rooftop."],crash:["Bang!","You crashed into a building."],outside:["Out of Kyoto…","You flew out of the Kyoto basin."],clear:["🏯 All clear! 🏯","You visited every sight in Kyoto and escaped the oni!"],caught:["Caught!","The oni got you… 👹"],checkpoint:i=>`🎆 Checkpoint! 🎆
${i}
Turbo +1 🚀`,moreOni:i=>`
👹 Another oni is on watch! (${i})`,spawned:i=>`👹 ${i} oni are roaming Kyoto…
Don't get spotted!`,foundMany:i=>`👹 ${i} oni spotted you!`,found:`👹 An oni spotted you!
Run!`,noTurbo:"Out of turbo!",thermal:"✨ Thermal!",loadingTown:"Building the autumn streets of Kyoto…",loadFailed:i=>`Failed to load: ${i}`,shareDialog:"Share",continued:i=>` (continued ×${i})`,contWatch:"🎬 Watch an ad to keep flying",contLoading:"Loading the ad…",contFail:"Could not load the ad",contNote:i=>`Fly again from a moment ago (${i} left)`,contSkip:i=>`See results (${i})`,contGo:`🪂 Keep flying!
The oni went back to their posts`,resumeApp:"Resume",howtoApp:[["👹","<b>Oni tag!</b> 20 oni roam around the sights of Kyoto. Get close and they spot you and give chase. If they catch you, you lose. Each balloon you pop adds another oni, and they get faster over time"],["🎯","Pop the ad balloons over the sights to pass checkpoints! Fireworks go up and you get <b>Turbo +1</b>. Pop them all to clear the game"],["🕹","Steer with the stick at the bottom left. Push up to climb, pull down to dive (speed up), left/right to turn"],["🚀",'Hold the "Turbo" button to boost. You start with <b>1</b> and get more from balloons'],["👀",'The "View" button switches the view (chase cam ⇔ pilot view)'],["⏳",'The "Era" button time-slips between <b>today ⇔ early Showa</b> mid-flight! See streetcars, bathhouse chimneys and the old Kyoto Station'],["✨","Where sparkles rise there is a <b>thermal</b>. Circle inside it to gain height"],["⚠","Touch the ground or a building and the game ends. Fly too slowly and you stall! Watch an ad to keep flying (up to 3 times a game)"],["◁","Press Back to pause"]]}};function Ot(i,...t){const e=uu[Gs][i]??uu.ja[i];return typeof e=="function"?e(...t):e}function qa(i){return Gs==="en"&&i.en?i.en:i.name}const Uv={l1:"Take the plunge from",l2:[..."KIYOMIZU"].map(i=>`<b>${i}</b>`).join(""),lead:"Hang-glide off the Kiyomizu stage!<br />Play <b>oni tag</b> 👹 in the autumn skies of Kyoto.<br />Escape the oni and pop every ad balloon over the sights! 🎈",loading:"Loading the terrain of Kyoto…",start:"🪂 Jump!",ranking:"🏆 Ranking",howto:"❓ How to play",quality:"Graphics",qLow:"Light (no shadows, recommended)",qHigh:"Pretty (shadows, heavy)",era:"Era",eraNow:"Today",eraShowa:"Early Showa",lang:"Language",mute:"Mute",credit:'Terrain & aerial photos: <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">GSI Tiles (Geospatial Information Authority of Japan)</a> / Buildings: based on <a href="https://www.mlit.go.jp/plateau/" target="_blank" rel="noopener">MLIT Project PLATEAU</a> (Kyoto City 3D city model)',creditHud:"Terrain & photos: GSI Japan / Buildings: based on MLIT Project PLATEAU",height:"Height",speed:"Speed",climb:"Climb",alt:"Alt.",wipe:"● Front cam",oni:"👹 Oni",turbo:"🚀 Turbo",turboKeys:"Space / Shift: boost ・ T: era",stall:"⚠ Stall! Press ↓ to dive!",touchJet:"🚀<br />Turbo",touchCam:"View",touchEra:"Era",howtoTitle:"❓ How to play",howtoList:[["👹","<b>Oni tag!</b> 20 oni roam around the sights of Kyoto. Get close and they spot you and give chase. If they catch you, you lose. Each balloon you pop adds another oni, and they get faster over time"],["🎯","Pop the ad balloons over the sights to pass checkpoints! Fireworks go up and you get <b>Turbo +1</b>. Pop them all to clear the game"],["↑ ↓","↑ to climb, ↓ to dive (speed up)"],["← →","Turn left / right"],["Space","Turbo boost (while held). You start with <b>1</b> and get more from balloons"],["C","Switch view (chase cam ⇔ pilot view)"],["T",'Time slip between <b>today ⇔ early Showa</b> mid-flight! See streetcars, bathhouse chimneys and the old Kyoto Station (on phones: the "Era" button)'],["M / P","Sound on/off / Pause"],["✨","Where sparkles rise there is a <b>thermal</b>. Circle inside it to gain height"],["⚠","Touch the ground or a building and the game ends. Fly too slowly and you stall!"],["📱","On phones, steer with the stick at the bottom left and boost with the button on the right"]].map(([i,t])=>`<li><span class="key">${i}</span><span>${t}</span></li>`).join(""),ok:"OK!",rankingTitle:"🏆 Ranking <small>(this device)</small>",rankingHead:"<tr><th>#</th><th>Name</th><th>🎈</th><th>Distance</th><th>Date</th></tr>",close:"Close",rankBanner:'🎉 Rank #<span id="rank-no">1</span>! 🎉',cp:"🎈 Checkpoints",dist:"📏 Distance",time:"⏱ Time",retry:"🪂 Jump again",share:"𝕏 Share",toTitle:"🏠 Title",pause:"⏸ Paused",resume:"Resume (P)",privacy:"Privacy Policy",adPrivacy:"Ad settings",contTitle:"😣 One more chance!"};function Fv(){if(document.documentElement.lang=Gs,Gs!=="ja"){document.title="Take the Plunge from Kiyomizu";for(const i of document.querySelectorAll("[data-i18n]")){const t=Uv[i.dataset.i18n];t!==void 0&&(i.innerHTML=t)}for(const i of document.querySelectorAll("[data-i18n-placeholder]"))i.placeholder="Name";document.body.classList.add("lang-en")}}const Oi=7,Nv=11,fu=["#e8382f","#f5b800","#2f7fe8","#e85ab5","#2fbf71","#f07a1a"];function Ov(i,t){const e=document.createElement("canvas");e.width=128,e.height=128*Math.max(4,i.length+1);const n=e.getContext("2d");n.fillStyle="#fffaf0",n.fillRect(0,0,e.width,e.height),n.strokeStyle=t,n.lineWidth=14,n.strokeRect(7,7,e.width-14,e.height-14),n.fillStyle="#1a1a1a",n.font='bold 92px "Hiragino Mincho ProN", "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle";const s=[...i.replace(/\s/g,"")],r=(e.height-64)/s.length;s.forEach((o,l)=>n.fillText(o,64,32+r*(l+.5)));const a=new Vn(e);return a.colorSpace=Fe,{tex:a,aspect:e.height/e.width}}function Bv(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.font="bold 52px sans-serif";const n=e.measureText(i).width;n>480&&(e.font=`bold ${Math.floor(52*480/n)}px sans-serif`),e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="rgba(0,0,0,0.75)",e.strokeText(i,256,64),e.fillStyle="#fff",e.fillText(i,256,64);const s=new Vn(t);return s.colorSpace=Fe,s}class zv{constructor(t,e,n){this.group=new Re,t.add(this.group),this.items=[],this.particles=[];const s=new le(Oi,32,20);e.forEach((r,a)=>{const o=fu[a%fu.length],l=n.heightAt(r.lat,r.lon),c=Te(r.lat,r.lon,l+r.agl),h=Te(r.lat,r.lon,l),u=new Re;u.position.copy(c);const f=new xt(s,new Mn({color:o,roughness:.35,metalness:.05,emissive:new Dt(o).multiplyScalar(.25)}));u.add(f);const{tex:p,aspect:g}=Ov(r.name,o),_=3.2,m=_*g,d=new xt(new Ki(_,m),new Ws({map:p,side:Sn}));d.position.y=-Oi-2-m/2,u.add(d);const y=new xe;y.setAttribute("position",new ne([0,-Oi,0,h.x-c.x,h.y-c.y,h.z-c.z],3)),u.add(new Pp(y,new sf({color:3355443})));const v=new Sr(new Os({map:Bv(`🎈 ${qa(r)}`),transparent:!0,depthWrite:!1}));v.scale.set(.16,.04,1),v.material.sizeAttenuation=!1,v.position.y=Oi+6,u.add(v),this.group.add(u),this.items.push({spot:r,group:u,ball:f,banner:d,label:v,popped:!1,phase:Math.random()*6.28,base:c.clone()})})}reset(){for(const t of this.items)t.popped=!1,t.group.visible=!0;for(const t of this.particles)this.group.remove(t.points);this.particles.length=0}update(t,e,n,s){const r=[];for(const a of this.items){if(a.popped)continue;a.group.position.y=a.base.y+Math.sin(e*.8+a.phase)*1.2,a.banner.rotation.y=Math.sin(e*.5+a.phase)*.3;const o=a.group.position.distanceTo(n);a.label.visible=o>250&&o<6e3,a.label.material.opacity=o>3e3?.55:1,o<Nv&&(a.popped=!0,a.group.visible=!1,this.burst(a.group.position,a.ball.material.color),r.push(a))}for(let a=this.particles.length-1;a>=0;a--){const o=this.particles[a];o.life-=t;const l=o.points.geometry.attributes.position;for(let c=0;c<l.count;c++)o.vel[c*3+1]-=9.8*t*.3,l.array[c*3]+=o.vel[c*3]*t,l.array[c*3+1]+=o.vel[c*3+1]*t,l.array[c*3+2]+=o.vel[c*3+2]*t;l.needsUpdate=!0,o.points.material.opacity=Math.max(0,o.life/1.5),o.life<=0&&(this.group.remove(o.points),o.points.geometry.dispose(),this.particles.splice(a,1))}return r}burst(t,e){const s=new Float32Array(480),r=new Float32Array(480),a=new P;for(let c=0;c<160;c++)a.randomDirection(),s.set([t.x+a.x*Oi,t.y+a.y*Oi,t.z+a.z*Oi],c*3),a.multiplyScalar(10+Math.random()*25),r.set([a.x,a.y,a.z],c*3);const o=new xe;o.setAttribute("position",new ne(s,3));const l=new Za(o,new Fr({color:e,size:1.6,transparent:!0}));this.group.add(l),this.particles.push({points:l,vel:r,life:1.5})}nearest(t){let e=null,n=1/0;for(const s of this.items){if(s.popped)continue;const r=s.group.position.distanceTo(t);r<n&&(n=r,e=s)}return e?{item:e,distance:n}:null}}class kv{constructor(t,e,n){this.items=e.map(r=>{const a=n.heightAt(r.lat,r.lon),o=Te(r.lat,r.lon,a);return{...r,base:o,top:600}});const s=220;this.group=new Re,t.add(this.group),this.systems=this.items.map(r=>{const a=new Float32Array(s*3),o=new Float32Array(s*3);for(let h=0;h<s;h++)o[h*3]=Math.random()*Math.PI*2,o[h*3+1]=Math.sqrt(Math.random())*r.r,o[h*3+2]=Math.random()*r.top;const l=new xe;l.setAttribute("position",new ne(a,3));const c=new Za(l,new Fr({color:16773572,size:2.6,transparent:!0,opacity:.5,depthWrite:!1,blending:Rs}));return c.frustumCulled=!1,this.group.add(c),{points:c,seed:o,t:r}})}update(t){for(const e of this.systems){const n=e.points.geometry.attributes.position.array,{base:s,top:r}=e.t;for(let a=0;a<e.seed.length/3;a++){const o=e.seed[a*3]+t*.6,l=e.seed[a*3+1],c=(e.seed[a*3+2]+t*e.t.w*4)%r;n[a*3]=s.x+Math.cos(o)*l,n[a*3+1]=s.y+c,n[a*3+2]=s.z+Math.sin(o)*l}e.points.geometry.attributes.position.needsUpdate=!0}}liftAt(t){let e=0;for(const n of this.items){const s=Math.hypot(t.x-n.base.x,t.z-n.base.z);if(s<n.r*1.5&&t.y-n.base.y<n.top){const r=Math.max(0,1-(s/(n.r*1.5))**2);e+=n.w*r*1.6}}return e}}const Ps=[{name:"八坂の塔",en:"Yasaka Pagoda",lat:34.99857,lon:135.77936,agl:70},{name:"高台寺",en:"Kodai-ji Temple",lat:35.00085,lon:135.78123,agl:40},{name:"八坂神社",en:"Yasaka Shrine",lat:35.00365,lon:135.7785,agl:35},{name:"知恩院",en:"Chion-in Temple",lat:35.00553,lon:135.78329,agl:90},{name:"祇園 花見小路",en:"Gion Hanamikoji",lat:35.0026,lon:135.7751,agl:25},{name:"先斗町",en:"Pontocho",lat:35.0052,lon:135.7708,agl:45},{name:"三十三間堂",en:"Sanjusangendo",lat:34.9879,lon:135.7717,agl:30},{name:"京都国立博物館",en:"Kyoto National Museum",lat:34.9899,lon:135.7732,agl:60},{name:"東福寺 通天橋",en:"Tofuku-ji Tsutenkyo Bridge",lat:34.9764,lon:135.7738,agl:50},{name:"伏見稲荷大社",en:"Fushimi Inari Taisha",lat:34.96714,lon:135.77265,agl:40},{name:"稲荷山 山頂",en:"Mt. Inari Summit",lat:34.964,lon:135.7838,agl:60},{name:"京都タワー",en:"Kyoto Tower",lat:34.9875,lon:135.7593,agl:150},{name:"京都駅",en:"Kyoto Station",lat:34.9853,lon:135.7587,agl:80},{name:"東本願寺",en:"Higashi Hongan-ji",lat:34.9911,lon:135.7582,agl:55},{name:"西本願寺",en:"Nishi Hongan-ji",lat:34.9917,lon:135.7516,agl:45},{name:"東寺 五重塔",en:"To-ji Five-story Pagoda",lat:34.97988,lon:135.74872,agl:75},{name:"錦市場",en:"Nishiki Market",lat:35.005,lon:135.7647,agl:30},{name:"京都御所",en:"Kyoto Imperial Palace",lat:35.02537,lon:135.76216,agl:40},{name:"下鴨神社",en:"Shimogamo Shrine",lat:35.03899,lon:135.77297,agl:50},{name:"出町柳 鴨川デルタ",en:"Kamo River Delta",lat:35.0303,lon:135.7718,agl:20},{name:"平安神宮",en:"Heian Shrine",lat:35.016,lon:135.78245,agl:65},{name:"南禅寺",en:"Nanzen-ji Temple",lat:35.01128,lon:135.79414,agl:55},{name:"哲学の道",en:"Philosopher's Path",lat:35.02,lon:135.7945,agl:30},{name:"銀閣寺",en:"Ginkaku-ji (Silver Pavilion)",lat:35.02701,lon:135.79817,agl:45},{name:"大文字山",en:"Mt. Daimonji",lat:35.0239,lon:135.8058,agl:50},{name:"二条城",en:"Nijo Castle",lat:35.0142,lon:135.7482,agl:35},{name:"北野天満宮",en:"Kitano Tenmangu",lat:35.03124,lon:135.73514,agl:40},{name:"大徳寺",en:"Daitoku-ji Temple",lat:35.044,lon:135.746,agl:35},{name:"上賀茂神社",en:"Kamigamo Shrine",lat:35.06,lon:135.7525,agl:45},{name:"金閣寺",en:"Kinkaku-ji (Golden Pavilion)",lat:35.03937,lon:135.72924,agl:30},{name:"龍安寺",en:"Ryoan-ji Temple",lat:35.03448,lon:135.71825,agl:40},{name:"仁和寺",en:"Ninna-ji Temple",lat:35.031,lon:135.7138,agl:55},{name:"太秦映画村",en:"Toei Kyoto Studio Park",lat:35.0169,lon:135.7097,agl:35},{name:"嵐山 渡月橋",en:"Arashiyama Togetsukyo Bridge",lat:35.013,lon:135.6777,agl:25},{name:"天龍寺",en:"Tenryu-ji Temple",lat:35.0157,lon:135.6738,agl:40},{name:"嵐山 竹林の小径",en:"Arashiyama Bamboo Grove",lat:35.017,lon:135.6718,agl:30},{name:"梅小路公園",en:"Umekoji Park",lat:34.9872,lon:135.7443,agl:40},{name:"醍醐寺",en:"Daigo-ji Temple",lat:34.951,lon:135.819,agl:60},{name:"京都大学",en:"Kyoto University",lat:35.0261,lon:135.7809,agl:40},{name:"鞍馬寺",en:"Kurama-dera Temple",lat:35.11806,lon:135.7708,agl:40},{name:"貴船神社",en:"Kifune Shrine",lat:35.12168,lon:135.76284,agl:35},{name:"岡崎 琵琶湖疏水",en:"Okazaki Lake Biwa Canal",lat:35.0129,lon:135.7847,agl:25}],Gv=[{lat:34.993,lon:135.777,r:90,w:3.2},{lat:34.999,lon:135.773,r:80,w:3},{lat:34.99,lon:135.766,r:100,w:2.8},{lat:35.008,lon:135.769,r:90,w:3},{lat:34.974,lon:135.762,r:110,w:3},{lat:35.02,lon:135.773,r:110,w:3.2},{lat:35.018,lon:135.755,r:100,w:2.8},{lat:35,lon:135.743,r:110,w:3},{lat:35.035,lon:135.75,r:100,w:3},{lat:35.025,lon:135.723,r:100,w:3.2},{lat:35.015,lon:135.7,r:110,w:3},{lat:34.96,lon:135.778,r:90,w:3.4},{lat:35.075,lon:135.768,r:110,w:3.4},{lat:35.1,lon:135.772,r:110,w:3.6},{lat:35.035,lon:135.79,r:90,w:3},{lat:34.982,lon:135.782,r:90,w:3.4}],Hv={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11};function Ms(i){const t=/^([A-G]#?)(\d)$/.exec(i);return 440*2**((Hv[t[1]]+(Number(t[2])+1)*12-69)/12)}function ae(i){return i.trim().split(/\s+/).map(t=>{const[e,n]=t.split(":");return[e==="-"?null:e,Number(n)]})}const Vv={E:["E5","F#5","B5","E6","F#6"],A:["A4","B4","E5","A5","B5"],B:["B4","C#5","F#5","B5","E6"],D:["D5","E5","A5","D6"]},Wv={title:{bpm:60,loop:!0,tracks:[{wave:"sho",gain:.05,notes:ae("E:8 A:8 B:8 E:8")},{wave:"hichiriki",gain:.11,notes:ae("E4:2 F#4:1 A4:1 B4:4 A4:2 B4:1 C#5:1 B4:4 A4:2 F#4:2 E4:4 F#4:2 A4:2 B4:4")},{wave:"ryuteki",gain:.05,notes:ae("-:.25 E5:1.75 F#5:1 A5:1 B5:4 A5:2 B5:1 C#6:1 B5:4 A5:2 F#5:2 E5:4 F#5:2 A5:2 B5:4")},{wave:"perc",gain:.5,notes:ae("T:4 K:2 K:2 R:4 T:4 G:2 K:2 R:4 T:4 G:4")}]},start:{bpm:100,loop:!1,tracks:[{wave:"sho",gain:.06,notes:ae("E:12")},{wave:"ryuteki",gain:.08,notes:ae("E5:1 F#5:1 A5:2 B5:2 -:1 E6:5")},{wave:"perc",gain:.6,notes:ae("T:2 G:1 T:1 R:2 T:2 G:1 G:1 T:2")}]},flight:{bpm:108,loop:!0,tracks:[{wave:"sho",gain:.045,notes:ae("B:8 A:8 E:8 B:8")},{wave:"hichiriki",gain:.1,notes:ae("B4:1 A4:.5 B4:.5 C#5:1 E5:1 D5:1 C#5:1 B4:2 A4:1 B4:.5 A4:.5 F#4:1 A4:1 B4:4 E5:1 F#5:1 E5:1 D5:1 C#5:2 B4:2 A4:1 B4:1 C#5:1 A4:1 B4:4")},{wave:"ryuteki",gain:.045,notes:ae("-:.25 B5:.75 A5:.5 B5:.5 C#6:1 E6:1 D6:1 C#6:1 B5:2 A5:1 B5:.5 A5:.5 F#5:1 A5:1 B5:4 E6:1 F#6:1 E6:1 D6:1 C#6:2 B5:2 A5:1 B5:1 C#6:1 A5:1 B5:4")},{wave:"perc",gain:.5,notes:ae("T:1 K:.5 K:.5 G:1 K:1 R:2 K:1 G:1 ".repeat(4))}]},gameover:{bpm:60,loop:!1,tracks:[{wave:"sho",gain:.05,notes:ae("A:6 E:6")},{wave:"ryuteki",gain:.07,notes:ae("B5:2 A5:1 F#5:1 E5:4 -:1 F#4:3")},{wave:"perc",gain:.6,notes:ae("T:4 G:4 T:4")}]},ranking:{bpm:132,loop:!1,tracks:[{wave:"sho",gain:.06,notes:ae("E:8 A:8 E:8")},{wave:"hichiriki",gain:.09,notes:ae("E4:2 A4:2 B4:4 C#5:2 B4:2 E5:4 B4:4 E5:4")},{wave:"ryuteki",gain:.07,notes:ae("E5:.5 F#5:.5 A5:1 B5:1 E6:1 B5:.5 E6:.5 F#6:2 E6:2 B5:1 C#6:1 E6:2 F#6:4 E6:3 -:4")},{wave:"perc",gain:.6,notes:ae("R:2 T:1 G:1 R:2 T:1 G:1 T:1 K:.5 K:.5 T:1 K:.5 K:.5 R:4 T:2 G:2 T:2 G:2")}]}},Af={Am:{notes:["A3","C4","E4"],root:"A2",fifth:"E2"},Dm:{notes:["D4","F4","A4"],root:"D2",fifth:"A2"},E7:{notes:["G#3","B3","D4","E4"],root:"E2",fifth:"B2"},C:{notes:["C4","E4","G4"],root:"C3",fifth:"G2"},F:{notes:["A3","C4","F4"],root:"F2",fifth:"C3"},G:{notes:["G3","B3","D4"],root:"G2",fifth:"D3"}};function Wo(i,t,e){const n=[],s=[];for(const r of i){const a=Af[r];n.push([a.root,1],[null,1],[a.fifth,1],[null,1]),s.push([null,1],[r,1],[null,1],[r,1])}return[{wave:"bass",gain:e,notes:n},{wave:"accordion",gain:t,notes:s}]}const Xv={title:{bpm:96,loop:!0,tracks:[{wave:"clarinet",gain:.1,notes:ae("A4:1 B4:1 C5:1 E5:1 F5:2 E5:2 F5:1 E5:1 C5:1 B4:1 C5:1 B4:1 A4:2 B4:1 C5:1 E5:2 F5:1.5 E5:.5 B4:2 C5:1 B4:1 G#4:1 B4:1 A4:4")},...Wo(["Am","Am","Dm","Am","E7","E7","Am","Am"],.035,.16),{wave:"drums",gain:.35,notes:ae("B:1 S:1 B:1 S:1 ".repeat(8))}]},start:{bpm:120,loop:!1,tracks:[{wave:"clarinet",gain:.12,notes:ae("E5:.5 F5:.5 E5:1 B4:1 G#4:1 A4:4")},{wave:"accordion",gain:.045,notes:ae("Am:2 E7:2 Am:4")},{wave:"bass",gain:.18,notes:ae("A2:2 E2:2 A2:4")},{wave:"drums",gain:.45,notes:ae("B:.5 B:.5 S:1 B:1 S:1 B:1 S:.5 S:.5 B:2")}]},flight:{bpm:132,loop:!0,tracks:[{wave:"clarinet",gain:.1,notes:ae("E5:1.5 F5:.5 E5:1 C5:1 B4:1 C5:.5 B4:.5 A4:2 A4:1 C5:1 F5:1.5 E5:.5 E5:3 -:1 E5:1.5 F5:.5 E5:1 B4:1 G#4:1 B4:1 E5:1.5 F5:.5 E5:1 C5:1 B4:1 C5:1 A4:3 -:1 F5:1.5 E5:.5 F5:1 A5:1 A5:1 F5:1 E5:2 E5:1.5 C5:.5 E5:1 F5:1 E5:3 -:1 B4:1 C5:1 B4:1 G#4:1 B4:1.5 C5:.5 B4:1 E5:1 C5:1 B4:1 A4:1 B4:1 A4:3 -:1")},...Wo(["Am","Am","Dm","Am","E7","E7","Am","Am","Dm","Dm","Am","Am","E7","E7","Am","Am"],.032,.16),{wave:"drums",gain:.32,notes:ae("B:1 S:1 B:1 S:.5 H:.5 ".repeat(16))}]},gameover:{bpm:72,loop:!1,tracks:[{wave:"clarinet",gain:.11,notes:ae("F5:2 E5:1 C5:1 B4:2 G#4:2 A4:4")},{wave:"accordion",gain:.04,notes:ae("Dm:4 E7:4 Am:4")},{wave:"bass",gain:.16,notes:ae("D2:4 E2:4 A2:4")}]},ranking:{bpm:150,loop:!1,tracks:[{wave:"clarinet",gain:.1,notes:ae("E5:1 G5:1 A5:1 G5:1 E5:1 D5:1 C5:2 A5:1 A5:1 G5:1 A5:1 G5:3 -:1 D5:1 E5:1 G5:1 E5:1 D5:1 C5:.5 D5:.5 E5:2 G5:1 E5:1 D5:1 E5:1 C6:3 -:1")},...Wo(["C","C","F","C","G","G","C","C"],.035,.16),{wave:"drums",gain:.4,notes:ae("B:1 S:1 B:1 S:.5 S:.5 ".repeat(7)+"S:.5 S:.5 S:.5 S:.5 B:2")}]}};class qv{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.era="now",this.varioTimer=0,this.warnTimer=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=matchMedia("(pointer: coarse)").matches,e=window.AudioContext||window.webkitAudioContext;let n;try{n=new e({latencyHint:t?"playback":"interactive"})}catch{n=new e}this.ctx=n,this.volume=t?.5:.8,this.master=n.createGain(),this.master.gain.value=this.muted?0:this.volume;const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=t?110:30;const r=n.createDynamicsCompressor();r.threshold.value=-12,r.knee.value=6,r.ratio.value=12,r.attack.value=.003,r.release.value=.25,this.master.connect(s).connect(r).connect(n.destination),this.musicBus=n.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfx=n.createGain(),this.sfx.connect(this.master),this.noise=n.createBuffer(1,n.sampleRate*2,n.sampleRate);const a=this.noise.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;const o=(u,f)=>{const p=n.createBufferSource();p.buffer=this.noise,p.loop=!0;const g=n.createBiquadFilter();g.type=u,g.frequency.value=f;const _=n.createGain();return _.gain.value=0,p.connect(g).connect(_).connect(this.sfx),p.start(),{filter:g,gain:_}};this.wind=o("bandpass",500),this.wind.filter.Q.value=.7,this.jet=o("lowpass",900);const l=n.createOscillator();l.type="sawtooth",l.frequency.value=70;const c=n.createGain();c.gain.value=0;const h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=400,l.connect(h).connect(c).connect(this.sfx),l.start(),this.jetHum={osc:l,gain:c},this.pendingSong&&this.playSong(this.pendingSong)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.05)}tone(t,e,n,{wave:s="sine",gain:r=.3,attack:a=.005,slideTo:o=null,bus:l=this.sfx}={}){const c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(t,e),o&&h.frequency.exponentialRampToValueAtTime(o,e+n);const u=c.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(r,e+a),u.gain.exponentialRampToValueAtTime(8e-4,e+n),h.connect(u).connect(l),h.start(e),h.stop(e+n+.05)}burstNoise(t,e,{type:n="lowpass",f:s=1200,gain:r=.5,decay:a=e/4,slideTo:o=null,bus:l=this.sfx,q:c=1}={}){const h=this.ctx,u=h.createBufferSource();u.buffer=this.noise;const f=h.createBiquadFilter();f.type=n,f.Q.value=c,f.frequency.setValueAtTime(s,t),o&&f.frequency.exponentialRampToValueAtTime(o,t+e);const p=h.createGain();p.gain.setValueAtTime(r,t),p.gain.setTargetAtTime(0,t,a),u.connect(f).connect(p).connect(l),u.start(t,Math.random()),u.stop(t+e)}playSong(t){if(!this.ctx){this.pendingSong=t;return}this.stopSong();const e=this.era==="showa"&&Xv[t]||Wv[t],n=60/e.bpm,s=Math.max(...e.tracks.map(h=>h.notes.reduce((u,f)=>u+f[1],0)))*n,r={name:t,gain:this.ctx.createGain()};r.gain.connect(this.musicBus);const a=this.ctx.currentTime+.08,o=.8,l=e.tracks.map(h=>({tr:h,i:0,t:a,loop:0})),c=()=>{const h=this.ctx.currentTime+o;let u=!1;for(const f of l){for(;f.t<h;){if(f.i>=f.tr.notes.length){if(!e.loop)break;f.loop++,f.i=0,f.t=a+f.loop*s;continue}const[p,g]=f.tr.notes[f.i++];p&&f.t>this.ctx.currentTime-.03&&this.playNote(f.tr.wave,p,f.t,g*n,f.tr.gain,r.gain),f.t+=g*n}(e.loop||f.i<f.tr.notes.length)&&(u=!0)}u||clearInterval(r.timer)};c(),r.timer=setInterval(c,150),this.song=r}playNote(t,e,n,s,r,a){switch(t){case"perc":return this.percussion(e,n,r,a);case"sho":return this.sho(Vv[e],n,s,r,a);case"hichiriki":return this.reed(Ms(e),n,s,r,a);case"ryuteki":return this.flute(Ms(e),n,s,r,a);case"accordion":return this.accordion(Af[e].notes,n,s,r,a);case"clarinet":return this.clarinet(Ms(e),n,s,r,a);case"bass":return this.bass(Ms(e),n,s,r,a);case"drums":return this.drums(e,n,r,a)}}setEra(t){this.era=t,this.song&&this.ctx&&this.playSong(this.song.name)}accordion(t,e,n,s,r){const a=this.ctx,o=e+n*.85,l=a.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.03),l.gain.setValueAtTime(s,Math.max(e+.04,o-.06)),l.gain.linearRampToValueAtTime(1e-4,o);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.value=2200,l.connect(c).connect(r);for(const h of t)for(const u of[-9,9]){const f=a.createOscillator();f.type="sawtooth",f.frequency.value=Ms(h),f.detune.value=u,f.connect(l),f.start(e),f.stop(o+.05)}}clarinet(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="square",o.frequency.value=t;const l=a.createOscillator();l.frequency.value=5.5;const c=a.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.008,e+Math.max(.3,n)),l.connect(c).connect(o.frequency);const h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=1700,h.Q.value=.8;const u=a.createGain(),f=e+n*.95;u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(s,e+.05),u.gain.setValueAtTime(s*.9,Math.max(e+.06,f-.08)),u.gain.linearRampToValueAtTime(1e-4,f),o.connect(h).connect(u).connect(r),o.start(e),l.start(e),o.stop(f+.05),l.stop(f+.05)}bass(t,e,n,s,r){const a=this.ctx,o=a.createGain(),l=e+Math.min(n,.7);o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.01),o.gain.exponentialRampToValueAtTime(8e-4,l),o.connect(r);for(const[c,h,u]of[["triangle",1,1],["sine",2,.35]]){const f=a.createOscillator();f.type=c,f.frequency.value=t*h;const p=a.createGain();p.gain.value=u,f.connect(p).connect(o),f.start(e),f.stop(l+.05)}}drums(t,e,n,s){t==="B"?this.tone(110,e,.25,{slideTo:50,gain:n*.9,bus:s}):t==="S"?this.burstNoise(e,.18,{type:"bandpass",f:2600,q:.7,gain:n*.35,decay:.05,bus:s}):t==="H"&&this.burstNoise(e,.06,{type:"highpass",f:7e3,gain:n*.25,decay:.015,bus:s})}sho(t,e,n,s,r){const a=this.ctx,o=a.createGain(),l=e+n;o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+Math.min(1.2,n*.35)),o.gain.setValueAtTime(s,Math.max(e+.05,l-.4)),o.gain.linearRampToValueAtTime(1e-4,l);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,o.connect(c).connect(r);for(const h of t){const u=Ms(h);for(const[f,p,g]of[["triangle",1,-4],["sine",2,3]]){const _=a.createOscillator();_.type=f,_.frequency.value=u*p,_.detune.value=g;const m=a.createGain();m.gain.value=p===1?1:.3,_.connect(m).connect(o),_.start(e),_.stop(l+.05)}}}reed(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(t*.92,e),o.frequency.exponentialRampToValueAtTime(t,e+Math.min(.25,n*.4));const l=a.createOscillator();l.frequency.value=5;const c=a.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.012,e+n),l.connect(c).connect(o.frequency);const h=a.createBiquadFilter();h.type="bandpass",h.frequency.value=1300,h.Q.value=1.4;const u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=2600;const f=a.createGain(),p=e+n*.97;f.gain.setValueAtTime(1e-4,e),f.gain.linearRampToValueAtTime(s,e+.08),f.gain.linearRampToValueAtTime(s*1.25,e+n*.6),f.gain.linearRampToValueAtTime(1e-4,p),o.connect(h).connect(u).connect(f).connect(r),o.start(e),l.start(e),o.stop(p+.05),l.stop(p+.05)}flute(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="sine",o.frequency.setValueAtTime(t*1.03,e),o.frequency.exponentialRampToValueAtTime(t,e+.12);const l=a.createGain(),c=e+n*.95;l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.06),l.gain.setValueAtTime(s,Math.max(e+.07,c-.1)),l.gain.linearRampToValueAtTime(1e-4,c),o.connect(l).connect(r),o.start(e),o.stop(c+.05),this.burstNoise(e,n,{type:"bandpass",f:t,q:8,gain:s*.9,decay:n*.5,bus:r})}percussion(t,e,n,s){if(t==="T")this.tone(75,e,1.4,{slideTo:42,gain:n*1.6,bus:s}),this.burstNoise(e,.3,{f:300,gain:n*.5,decay:.05,bus:s});else if(t==="K")this.tone(520,e,.12,{slideTo:380,gain:n*.5,bus:s}),this.burstNoise(e,.06,{type:"bandpass",f:1800,gain:n*.4,decay:.015,bus:s});else if(t==="R"){let r=e;for(let a=0,o=.16;a<9;a++,o*=.82)this.tone(520,r,.08,{slideTo:400,gain:n*.35,bus:s}),r+=o}else t==="G"&&(this.tone(2150,e,.5,{gain:n*.18,bus:s}),this.tone(3370,e,.35,{gain:n*.1,bus:s}),this.tone(1280,e,.6,{gain:n*.08,bus:s}))}stopSong(t=.3){if(!this.song)return;const e=this.song;clearInterval(e.timer),e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,t/3),setTimeout(()=>e.gain.disconnect(),t*1e3+600),this.song=null}click(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(880,t,.08,{wave:"square",gain:.08}),this.tone(1320,t+.04,.08,{wave:"square",gain:.06})}timeslip(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.2,{type:"bandpass",f:300,slideTo:4e3,q:4,gain:.35,decay:.5}),this.tone(220,t,.6,{wave:"triangle",slideTo:1760,gain:.12}),this.tone(1760,t+.55,.7,{wave:"triangle",slideTo:330,gain:.08}),[1568,2093,2637,3136,2637,2093].forEach((e,n)=>this.tone(e,t+.1+n*.08,.5,{gain:.05}))}jump(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.15,{f:300,gain:.6,decay:.03}),this.burstNoise(t+.05,1.2,{type:"bandpass",f:400,slideTo:2500,gain:.35,decay:.5,q:3}),this.tone(300,t+.05,.7,{wave:"triangle",slideTo:900,gain:.15})}jetStart(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.5,{f:3e3,slideTo:500,gain:.6,decay:.15}),this.tone(120,t,.4,{wave:"sawtooth",slideTo:60,gain:.25})}jetEmpty(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++)this.burstNoise(t+e*.12,.08,{f:600,gain:.4,decay:.02});this.tone(200,t,.4,{wave:"square",slideTo:80,gain:.08})}turboGet(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047,1319].forEach((e,n)=>this.tone(e,t+n*.05,.25,{wave:"square",gain:.07}))}pop(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.3,{f:5e3,gain:1.2,decay:.03}),this.tone(1200,t,.1,{slideTo:300,gain:.3}),[880,1318.5,1760,2093].forEach((e,n)=>this.tone(e,t+.1+n*.08,.6,{wave:"triangle",gain:.18}))}firework(t=0){if(!this.ctx)return;const e=this.ctx.currentTime+t;this.tone(700,e,.9,{wave:"sine",slideTo:1800,gain:.08,attack:.05}),this.burstNoise(e+.9,1.5,{f:900,slideTo:80,gain:1.4,decay:.25}),this.tone(90,e+.9,.8,{slideTo:40,gain:.6});for(let n=0;n<14;n++)this.burstNoise(e+1.1+Math.random()*.9,.05,{type:"highpass",f:4e3,gain:.25*Math.random()+.1,decay:.01})}stall(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(1e3,t,.12,{wave:"square",gain:.1}),this.tone(1e3,t+.18,.12,{wave:"square",gain:.1})}groundWarning(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(520,t,.18,{wave:"sawtooth",gain:.08}),this.tone(390,t+.2,.18,{wave:"sawtooth",gain:.08})}thermalEnter(){if(!this.ctx)return;const t=this.ctx.currentTime;[660,880,1100].forEach((e,n)=>this.tone(e,t+n*.06,.3,{wave:"sine",gain:.1}))}crash(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.2,{f:500,gain:1.3,decay:.2}),this.tone(160,t,.6,{wave:"square",slideTo:40,gain:.25}),this.burstNoise(t+.15,.6,{type:"bandpass",f:1800,gain:.4,decay:.08});for(let e=0;e<4;e++)this.tone(1500+e%2*300,t+.6+e*.14,.12,{wave:"sine",gain:.08})}oniLaugh(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<4;e++){const n=t+e*.22;this.tone(150-e*8,n,.18,{wave:"sawtooth",slideTo:95,gain:.22,attack:.01}),this.burstNoise(n,.15,{type:"bandpass",f:700,gain:.3,decay:.05,q:2})}this.tone(70,t,1.2,{slideTo:40,gain:.5})}alarm(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;for(const n of[e,e+.42]){const s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(.13,n+.015),s.gain.setValueAtTime(.13,n+.28),s.gain.linearRampToValueAtTime(1e-4,n+.32);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,s.connect(r).connect(this.sfx);for(const[a,o]of[["square",196],["sawtooth",233]]){const l=t.createOscillator();l.type=a,l.frequency.value=o,l.connect(s),l.start(n),l.stop(n+.35)}}}heartbeat(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(60,t,.18,{slideTo:40,gain:.6}),this.tone(55,t+.16,.2,{slideTo:38,gain:.45})}countdown(t=!1){this.ctx&&this.tone(t?1320:660,this.ctx.currentTime,t?.5:.15,{wave:"square",gain:.1})}cheer(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.6,{type:"bandpass",f:1200,gain:.25,decay:.6,q:.6});for(let e=0;e<6;e++)this.tone(600+Math.random()*500,t+Math.random()*.6,.3,{wave:"triangle",slideTo:900+Math.random()*400,gain:.03})}update(t,{speed:e=0,jetting:n=!1,active:s=!1,vario:r=0,agl:a=999,stalled:o=!1}={}){if(!this.ctx)return;const l=this.ctx.currentTime,c=s?Math.min(.5,e/110):0;this.wind.gain.gain.setTargetAtTime(c,l,.2),this.wind.filter.frequency.setTargetAtTime(300+e*18,l,.2);const h=s&&n;this.jet.gain.gain.setTargetAtTime(h?.6:0,l,.08),this.jetHum.gain.gain.setTargetAtTime(h?.12:0,l,.08),this.jetHum.osc.frequency.setTargetAtTime(60+e*.8,l,.2),s&&(this.varioTimer-=t,r>.4&&this.varioTimer<=0&&(this.tone(600+r*90,l,.08,{wave:"sine",gain:.07}),this.varioTimer=Math.max(.12,.45-r*.05)),this.warnTimer-=t,this.warnTimer<=0&&(o?(this.stall(),this.warnTimer=.6):a<25&&r<-.5&&(this.groundWarning(),this.warnTimer=.8)))}}function jv(i){const t=new Re,e=new xt(new le(45e3,32,16),new ni({side:tn,depthWrite:!1,fog:!1,uniforms:{sun:{value:i.clone().normalize()}},vertexShader:`
				varying vec3 vDir;
				void main() {
					vDir = normalize(position);
					vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					gl_Position = p.xyww;
				}
			`,fragmentShader:`
				uniform vec3 sun;
				varying vec3 vDir;
				void main() {
					float h = clamp(vDir.y, -0.1, 1.0);
					vec3 zenith = vec3(0.02, 0.22, 0.72);
					vec3 mid = vec3(0.12, 0.45, 0.92);
					vec3 horizon = vec3(0.62, 0.82, 0.98);
					vec3 col = mix(horizon, mid, smoothstep(0.0, 0.18, h));
					col = mix(col, zenith, smoothstep(0.18, 0.85, h));
					float s = max(dot(normalize(vDir), sun), 0.0);
					col += vec3(1.0, 0.95, 0.8) * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.18);
					gl_FragColor = vec4(col, 1.0);
				}
			`}));e.renderOrder=-1,e.frustumCulled=!1,t.add(e);const n=Yv();for(let s=0;s<26;s++){const r=Math.random()*Math.PI*2,a=6e3+Math.random()*14e3,o=new Sr(new Os({map:n,transparent:!0,opacity:.85,depthWrite:!1,fog:!1})),l=700+Math.random()*1400;o.scale.set(l,l*.35,1),o.position.set(Math.cos(r)*a,900+Math.random()*900,Math.sin(r)*a),t.add(o)}return t}function Yv(){const i=document.createElement("canvas");i.width=256,i.height=96;const t=i.getContext("2d");for(let e=0;e<14;e++){const n=40+Math.random()*176,s=40+Math.random()*30,r=18+Math.random()*26,a=t.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,"rgba(255,255,255,0.95)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,256,96)}return new Vn(i)}const $v=.9,Sa=[16732754,16766784,6942894,4244735,14696699,16777215,16748800,16744619],du=10,wa=320,Kv=170;function Zv(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Vn(i)}const Xo=new Dt,pu=new Dt,sr=new P,mu=new P,Jv=new P(0,1,0);class Qv{constructor(t){const e=Zv();this.clock=0,this.pending=[],this.rockets=[],this.bursts=[];for(let n=0;n<du+2;n++){const s=new Sr(new Os({map:e,color:16774080,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));s.scale.set(5,5,1),s.visible=!1,t.add(s),this.rockets.push({sp:s,active:!1,from:new P,to:new P,t:0,big:!1})}for(let n=0;n<du;n++){const s=new xe;s.setAttribute("position",new Ne(new Float32Array(wa*3),3)),s.setAttribute("color",new Ne(new Float32Array(wa*3),3));const r=new Za(s,new Fr({size:7,map:e,vertexColors:!0,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));r.frustumCulled=!1,r.visible=!1,t.add(r);const a=new Sr(new Os({map:e,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));a.scale.set(110,110,1),a.visible=!1,t.add(a),this.bursts.push({pts:r,flash:a,vel:new Float32Array(wa*3),n:0,t:0,life:2.6,active:!1})}}show(t,e=3,n=!1,s=.3){for(let r=0;r<e;r++)this.pending.push({at:this.clock+.1+r*s+Math.random()*.15,big:n,camera:t});return this.pending.slice(-e).map(r=>r.at-this.clock)}spawnRocket(t,e){const n=this.rockets.find(r=>!r.active);if(!n)return;t.getWorldDirection(sr),sr.y=0,sr.normalize(),mu.crossVectors(sr,Jv);const s=t.position.clone().addScaledVector(sr,Kv+Math.random()*40).addScaledVector(mu,(Math.random()-.5)*160);n.from.copy(s).add(new P(0,-90-Math.random()*30,0)),n.to.copy(s).add(new P(0,(e?45:25)+Math.random()*35,0)),n.t=0,n.big=e,n.active=!0,n.sp.visible=!0}spawnBurst(t,e){let n=this.bursts.find(c=>!c.active);n||(n=this.bursts.reduce((c,h)=>h.t>c.t?h:c));const s=e?wa:220,r=n.pts.geometry.attributes.position.array,a=n.pts.geometry.attributes.color.array,o=n.vel;Xo.setHex(Sa[Math.random()*Sa.length|0]),pu.setHex(Sa[Math.random()*Sa.length|0]);const l=e?62:48;for(let c=0;c<s;c++){const h=Math.random()*2-1,u=Math.random()*Math.PI*2,f=Math.sqrt(1-h*h),p=l*(.85+Math.random()*.3);o[c*3]=f*Math.cos(u)*p,o[c*3+1]=h*p,o[c*3+2]=f*Math.sin(u)*p,r[c*3]=t.x,r[c*3+1]=t.y,r[c*3+2]=t.z;const g=c%3===0?pu:Xo;a[c*3]=g.r,a[c*3+1]=g.g,a[c*3+2]=g.b}n.pts.geometry.setDrawRange(0,s),n.pts.geometry.attributes.position.needsUpdate=!0,n.pts.geometry.attributes.color.needsUpdate=!0,n.pts.material.size=e?8:6.5,n.pts.material.opacity=1,n.pts.visible=!0,n.flash.material.color.copy(Xo),n.flash.material.opacity=1,n.flash.position.copy(t),n.flash.visible=!0,Object.assign(n,{n:s,t:0,active:!0})}update(t){this.clock+=t;for(let s=this.pending.length-1;s>=0;s--)this.pending[s].at<=this.clock&&(this.spawnRocket(this.pending[s].camera,this.pending[s].big),this.pending.splice(s,1));for(const s of this.rockets){if(!s.active)continue;s.t+=t;const r=Math.min(1,s.t/$v),a=1-(1-r)*(1-r);s.sp.position.lerpVectors(s.from,s.to,a),s.sp.position.x+=Math.sin(s.t*20)*.6,r>=1&&(s.active=!1,s.sp.visible=!1,this.spawnBurst(s.to,s.big))}const e=Math.exp(-1.6*t),n=6*t;for(const s of this.bursts){if(!s.active)continue;s.t+=t;const r=s.pts.geometry.attributes.position.array,a=s.vel;for(let l=0;l<s.n*3;l+=3)a[l]*=e,a[l+1]=a[l+1]*e-n,a[l+2]*=e,r[l]+=a[l]*t,r[l+1]+=a[l+1]*t,r[l+2]+=a[l+2]*t;s.pts.geometry.attributes.position.needsUpdate=!0;const o=1-s.t/s.life;s.pts.material.opacity=Math.max(0,o<.4?o/.4*(.6+.4*Math.random()):1),s.flash.material.opacity=Math.max(0,1-s.t*4),s.t>=s.life&&(s.active=!1,s.pts.visible=!1,s.flash.visible=!1)}}}const tM=[{name:"清水寺 本堂",lat:34.99482,lon:135.785,kind:"hall",roof:"hiwada",wall:"wood"},{name:"清水寺 仁王門",lat:34.996,lon:135.78365,kind:"gate",wall:"vermilion",free:{w:10,d:5,h:14,deg:0}},{name:"清水寺 三重塔",lat:34.99507,lon:135.78383,kind:"pagoda",tiers:3,wall:"vermilion",free:{w:6,h:31,deg:0}},{name:"八坂の塔",lat:34.99855,lon:135.77924,kind:"pagoda",tiers:5,wall:"wood",free:{w:6.4,h:46,deg:0}},{name:"八坂神社 西楼門",lat:35.00363,lon:135.77795,kind:"gate",wall:"vermilion",free:{w:10,d:6,h:12,deg:0}},{name:"八坂神社 本殿",lat:35.0037,lon:135.7788,kind:"shrine",roof:"hiwada"},{name:"知恩院 三門",lat:35.0047,lon:135.7813,kind:"gate",wall:"wood",free:{w:50,d:17,h:24,deg:0}},{name:"知恩院 御影堂",lat:35.00553,lon:135.78329,kind:"hall",roof:"gray",wall:"wood"},{name:"南禅寺 三門",lat:35.0111,lon:135.793,kind:"gate",wall:"wood",free:{w:27,d:12,h:22,deg:0}},{name:"南禅寺 法堂",lat:35.01128,lon:135.79414,kind:"hall",roof:"gray",wall:"wood"},{name:"平安神宮 大極殿",lat:35.016,lon:135.78245,kind:"shrine",roof:"green"},{name:"平安神宮 応天門",lat:35.0149,lon:135.78245,kind:"gate",wall:"vermilion",roof:"green",free:{w:30,d:12,h:18,deg:0}},{name:"銀閣寺",lat:35.02701,lon:135.79817,kind:"ginkaku",free:{w:8,d:7,h:9,deg:0}},{name:"金閣寺",lat:35.03937,lon:135.72924,kind:"kinkaku",free:{w:15,d:12,h:12.5,deg:0}},{name:"三十三間堂",lat:34.9879,lon:135.7717,kind:"hall",roof:"gray",wall:"vermilion"},{name:"東寺 五重塔",lat:34.97988,lon:135.74872,kind:"pagoda",tiers:5,wall:"wood",free:{w:9.5,h:55,deg:0}},{name:"東寺 金堂",lat:34.98095,lon:135.74705,kind:"hall",roof:"gray",wall:"wood"},{name:"東本願寺 御影堂",lat:34.9911,lon:135.7582,kind:"hall",roof:"gray",wall:"wood"},{name:"西本願寺 御影堂",lat:34.9917,lon:135.7516,kind:"hall",roof:"gray",wall:"wood"},{name:"伏見稲荷 楼門",lat:34.96707,lon:135.7719,kind:"gate",wall:"vermilion",free:{w:13,d:7,h:15,deg:0}},{name:"伏見稲荷 本殿",lat:34.9672,lon:135.7728,kind:"shrine",roof:"hiwada"},{name:"北野天満宮",lat:35.03124,lon:135.73514,kind:"shrine",roof:"hiwada"},{name:"下鴨神社 楼門",lat:35.03899,lon:135.77297,kind:"gate",wall:"vermilion",roof:"hiwada",free:{w:12,d:7,h:13,deg:0}},{name:"上賀茂神社",lat:35.06,lon:135.7525,kind:"shrine",roof:"hiwada"},{name:"二条城 二の丸御殿",lat:35.0142,lon:135.7482,kind:"hall",roof:"gray",wall:"white"},{name:"京都御所 紫宸殿",lat:35.02537,lon:135.76216,kind:"hall",roof:"hiwada",wall:"white"},{name:"東福寺 三門",lat:34.97707,lon:135.7724,kind:"gate",wall:"vermilion"},{name:"天龍寺",lat:35.0157,lon:135.6738,kind:"hall",roof:"gray",wall:"white"},{name:"仁和寺 五重塔",lat:35.03024,lon:135.71439,kind:"pagoda",tiers:5,wall:"wood",free:{w:6,h:36,deg:0}},{name:"醍醐寺 五重塔",lat:34.94968,lon:135.82103,kind:"pagoda",tiers:5,wall:"vermilion",free:{w:6.6,h:38,deg:0}},{name:"京都タワー",lat:34.98756,lon:135.75928,kind:"tower"},{name:"大徳寺",lat:35.044,lon:135.746,kind:"hall",roof:"gray",wall:"wood"},{name:"鞍馬寺 本殿金堂",lat:35.11806,lon:135.7708,kind:"hall",roof:"gray",wall:"vermilion",standalone:!0,free:{w:20,d:14,h:14,deg:0}},{name:"貴船神社 本宮",lat:35.12168,lon:135.76284,kind:"shrine",roof:"hiwada",standalone:!0,free:{w:10,d:8,h:9,deg:0}},{name:"龍安寺",lat:35.03448,lon:135.71825,kind:"hall",roof:"hiwada",wall:"white"}],eM=[{name:"平安神宮 大鳥居",lat:35.01224,lon:135.78226,width:18,height:24,deg:90}],nM=[[34.96745,135.7737],[34.9677,135.7748],[34.968,135.7756],[34.9676,135.7764],[34.967,135.777],[34.9664,135.7778],[34.9656,135.7785],[34.9645,135.7795],[34.964,135.781],[34.9638,135.783]],rr={from:[35.12105,135.76305],to:[35.1216,135.76286],spacing:3,width:4},vi={lat:35.03908,lon:135.72912,w:90,d:52},ar={from:[35.01392,135.67766],to:[35.01258,135.67782],width:11},Ea=(()=>{const i=Te(vi.lat,vi.lon,0);return{x:i.x,z:i.z,a:vi.w/2+1,b:vi.d/2+1}})(),iM=(i,t)=>((i-Ea.x)/Ea.a)**2+((t-Ea.z)/Ea.b)**2<1,sM=60,rM=38,aM=1600,gu=1,oM=.06,lM=.12,cM=["#e8384f","#f28cb1","#f5b800","#8a4fd8","#2f7fe8","#16a3a3","#ff8a3d","#c7254e","#f7f0e0","#6fb7e8","#9bd36a","#e85ab5"],hM=["#f5d042","#ffffff","#c7254e","#1d3f8f","#2fbf71","#f28cb1"],uM=["#3a4a6a","#5a4632","#2f3b2f","#6a6a72","#1d2a44","#7a5a3a"],fM=["#2b2b33","#4a3a5a","#3a3a3a","#5a4a3a"],dM=["#1d2a44","#2b2b33","#3a2a22","#24402f"];function pM(i,t){const e=i.toNonIndexed(),n=new Dt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r.set([n.r,n.g,n.b],a*3);return e.setAttribute("color",new ne(r,3)),e}const Ue=i=>Nr(i.map(([t,e])=>pM(t,e))),Kt="#ffffff";function ys(i,t=[]){return[[new Xt(.05,.06,.1,6).translate(0,1.36,0),"#f1c8a0"],[new le(.12,10,8).translate(0,1.47,0),"#f1c8a0"],[new le(.128,10,8,0,Math.PI*2,0,Math.PI*.55).translate(0,1.49,.015),i],...t]}const _u={woman:{dye:Ue([[new Xt(.16,.22,1.25,10).translate(0,.68,0),Kt],[new at(.12,.46,.26).translate(-.24,.98,.02),Kt],[new at(.12,.46,.26).translate(.24,.98,.02),Kt]]),dye2:Ue([[new Xt(.185,.195,.2,10).translate(0,1,0),Kt],[new at(.26,.18,.1).translate(0,1,.18),Kt]]),fixed:Ue([...ys("#1b1410",[[new le(.085,8,6).translate(0,1.6,.06),"#1b1410"],[new at(.2,.025,.025).translate(0,1.6,.06),"#f5d042"]]),[new at(.18,.04,.24).translate(0,.03,-.02),"#c7a070"]]),dyeColors:cM,dye2Colors:hM},maiko:{dye:Ue([[new Xt(.15,.24,1.2,10).translate(0,.78,0),Kt],[new at(.12,.56,.28).translate(-.24,.98,.02),Kt],[new at(.12,.56,.28).translate(.24,.98,.02),Kt]]),dye2:Ue([[new Xt(.18,.19,.22,10).translate(0,1.08,0),Kt],[new at(.22,.95,.04).translate(0,.62,.2),Kt]]),fixed:Ue([[new Xt(.05,.06,.1,6).translate(0,1.44,0),"#fbf7f2"],[new le(.12,10,8).translate(0,1.55,0),"#fbf7f2"],[new le(.03,6,4).translate(0,1.5,-.11),"#d81b3c"],[new le(.15,10,8,0,Math.PI*2,0,Math.PI*.6).translate(0,1.6,.03),"#120d0a"],[new le(.11,8,6).translate(0,1.74,.03),"#120d0a"],[new le(.045,6,4).translate(-.12,1.7,-.02),"#ff6fa8"],[new le(.04,6,4).translate(-.14,1.64,.02),"#ffd23f"],[new le(.035,6,4).translate(-.1,1.62,-.06),"#ffffff"],[new at(.003,.14,.02).translate(-.13,1.56,-.04),"#f5d042"],[new at(.16,.16,.24).translate(0,.08,-.01),"#2b1a10"]]),dyeColors:["#e8384f","#f28cb1","#8a4fd8","#16a3a3","#ff8a3d","#6fb7e8","#9bd36a"],dye2Colors:["#1b1b1f","#f5d042","#c7254e","#1d3f8f"]},mobo:{dye:Ue([[new Xt(.17,.19,.62,10).translate(0,1.04,0),Kt],[new at(.11,.55,.13).translate(-.24,1,0),Kt],[new at(.11,.55,.13).translate(.24,1,0),Kt],[new at(.12,.72,.14).translate(-.08,.38,0),Kt],[new at(.12,.72,.14).translate(.08,.38,0),Kt]]),dye2:Ue([[new Xt(.2,.2,.025,14).translate(0,1.58,0),Kt],[new Xt(.12,.13,.12,12).translate(0,1.64,0),Kt]]),fixed:Ue([...ys("#1b1410"),[new at(.1,.22,.02).translate(0,1.2,-.18),"#c7254e"],[new at(.16,.06,.26).translate(-.08,.03,-.03),"#2b1a10"],[new at(.16,.06,.26).translate(.08,.03,-.03),"#2b1a10"]]),dyeColors:["#3a3f4a","#5a4a3a","#2b2b33","#6a6a72","#7a6a50"],dye2Colors:["#2b2b33","#5a4a3a","#d9c9a0"]},moga:{dye:Ue([[new Xt(.14,.24,.85,10).translate(0,.98,0),Kt],[new at(.09,.42,.1).translate(-.2,1.12,0),Kt],[new at(.09,.42,.1).translate(.2,1.12,0),Kt]]),dye2:Ue([[new le(.15,10,8,0,Math.PI*2,0,Math.PI*.5).translate(0,1.52,.01),Kt],[new Xt(.19,.19,.02,12).translate(0,1.52,0),Kt]]),fixed:Ue([...ys("#1b1410"),[new Xt(.035,.035,.55,6).translate(-.07,.3,0),"#f1c8a0"],[new Xt(.035,.035,.55,6).translate(.07,.3,0),"#f1c8a0"],[new at(.08,.06,.18).translate(-.07,.03,-.02),"#c7254e"],[new at(.08,.06,.18).translate(.07,.03,-.02),"#c7254e"]]),dyeColors:["#e8384f","#f28cb1","#6fb7e8","#f5d042","#9bd36a","#ffffff","#8a4fd8"],dye2Colors:["#1b1b1f","#c7254e","#1d3f8f","#f7f0e0"]},student:{dye:Ue([[new Xt(.17,.19,.62,10).translate(0,1.04,0),Kt],[new at(.11,.55,.13).translate(-.24,1,0),Kt],[new at(.11,.55,.13).translate(.24,1,0),Kt],[new at(.12,.72,.14).translate(-.08,.38,0),Kt],[new at(.12,.72,.14).translate(.08,.38,0),Kt],[new Xt(.135,.13,.08,12).translate(0,1.6,0),Kt],[new at(.2,.02,.1).translate(0,1.57,-.12),Kt]]),dye2:null,fixed:Ue([...ys("#1b1410"),[new at(.03,.03,.03).translate(0,1.2,-.19),"#f5d042"],[new at(.03,.03,.03).translate(0,1.05,-.2),"#f5d042"],[new at(.03,.03,.03).translate(0,.9,-.2),"#f5d042"],[new at(.16,.06,.26).translate(-.08,.03,-.03),"#1b1b1f"],[new at(.16,.06,.26).translate(.08,.03,-.03),"#1b1b1f"]]),dyeColors:["#15161c","#1b1d26"],dye2Colors:null},rickshaw:{dye:Ue([[new at(.8,.5,.7).translate(0,.95,.9),Kt],[new at(.85,.7,.08).translate(0,1.4,1.25),Kt],[new le(.5,10,6,0,Math.PI*2,0,Math.PI*.5).scale(.9,.9,.8).translate(0,1.55,1.05),Kt]]),dye2:null,fixed:Ue([[new Xt(.6,.6,.06,16).rotateZ(Math.PI/2).translate(-.48,.6,1),"#3a2a22"],[new Xt(.6,.6,.06,16).rotateZ(Math.PI/2).translate(.48,.6,1),"#3a2a22"],[new at(.05,.05,1.8).translate(-.3,.85,-.2),"#3a2a22"],[new at(.05,.05,1.8).translate(.3,.85,-.2),"#3a2a22"],[new Xt(.16,.18,.55,8).translate(0,1.08,-1),"#1d3f8f"],[new at(.12,.75,.14).translate(-.08,.4,-1),"#1b1b1f"],[new at(.12,.75,.14).translate(.08,.4,-1),"#1b1b1f"],[new le(.11,8,6).translate(0,1.47,-1),"#e0b48f"],[new wi(.26,.12,12).translate(0,1.62,-1),"#d9c08a"],[new Xt(.17,.2,.5,8).translate(0,1.42,.85),"#e8384f"],[new le(.11,8,6).translate(0,1.78,.85),"#f1c8a0"],[new le(.12,8,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.8,.87),"#1b1410"]]),dyeColors:["#1b1b1f","#3a2a22","#2b2b33"],dye2Colors:null},man:{dye:Ue([[new Xt(.17,.2,.58,10).translate(0,1.04,0),Kt],[new at(.12,.4,.22).translate(-.25,1.02,0),Kt],[new at(.12,.4,.22).translate(.25,1.02,0),Kt]]),dye2:Ue([[new Xt(.2,.28,.78,10).translate(0,.4,0),Kt]]),fixed:Ue(ys("#1b1410")),dyeColors:uM,dye2Colors:fM},samurai:{dye:Ue([[new Xt(.18,.21,.58,10).translate(0,1.04,0),Kt],[new at(.72,.05,.24).translate(0,1.3,0),Kt],[new Xt(.21,.32,.8,10).translate(0,.4,0),Kt]]),dye2:null,fixed:Ue([...ys("#1b1410",[[new at(.05,.05,.16).translate(0,1.6,.02),"#1b1410"],[new at(.16,.06,.06).translate(0,1.04,-.17),"#f7f0e0"]]),[new at(.035,.035,.95).rotateX(-.35).translate(-.24,.9,.05),"#111111"],[new at(.03,.03,.6).rotateX(-.3).translate(-.22,.95,.02),"#3a2a22"]]),dyeColors:dM,dye2Colors:null}};class Rf{constructor(t,e,n,s,{perSpot:r=sM,era:a="now"}={}){this.scene=t,this.terrain=n,this.buildings=s;const o=new Le({vertexColors:!0});this.crowds=e.map(u=>({spot:u,center:Te(u.lat,u.lon,0),people:[],active:!1,placed:!1,cheerCooldown:0}));const l=Object.fromEntries(Object.keys(_u).map(u=>[u,0])),c=a==="showa"?[["woman",.28],["man",.12],["maiko",.08],["mobo",.13],["moga",.13],["student",.16],["rickshaw",.1]]:[["samurai",oM],["maiko",lM],["woman",.48],["man",.34]];for(const u of this.crowds)for(let f=0;f<r;f++){let p=Math.random(),g=c[c.length-1][0];for(const[_,m]of c){if(p<m){g=_;break}p-=m}u.people.push({kind:g,idx:l[g]++,x:0,z:0,y:0,tx:0,tz:0,heading:0,speed:{samurai:.55,maiko:.45,rickshaw:2.2}[g]??.6+Math.random()*.45,phase:Math.random()*10,wait:Math.random()*6,placed:!1})}this.meshes={};const h=new Dt;for(const[u,f]of Object.entries(_u)){const p=Math.max(1,l[u]),g=[],_=(m,d)=>{const y=new Si(m,o,p);if(y.instanceMatrix.setUsage(Fd),y.frustumCulled=!1,y.castShadow=!0,d){for(let v=0;v<p;v++)y.setColorAt(v,h.set(d[Math.floor(Math.random()*d.length)]));y.instanceColor.needsUpdate=!0}t.add(y),g.push(y)};_(f.dye,f.dyeColors),f.dye2&&_(f.dye2,f.dye2Colors),_(f.fixed,null),this.meshes[u]=g}this.dummy=new de,this.hideAll()}dispose(){for(const t of Object.values(this.meshes))for(const e of t)this.scene.remove(e),e.dispose()}setMatrix(t,e){for(const n of this.meshes[t.kind])n.setMatrixAt(t.idx,e)}hideAll(){this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(const t of Object.values(this.meshes))for(const e of t){for(let n=0;n<e.count;n++)e.setMatrixAt(n,this.dummy.matrix);e.instanceMatrix.needsUpdate=!0}}groundAt(t,e){return this.terrain.heightAtWorld(t,e)}pickSpot(t,e){for(let n=0;n<12;n++){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*rM,a=t.center.x+Math.cos(s)*r,o=t.center.z+Math.sin(s)*r,l=this.groundAt(a,o);if(!iM(a,o)&&!this.buildings.inside(a,o,l+1))return e.tx=a,e.tz=o,!0}return!1}update(t,e,n){let s=!1;const r=this.dummy;for(const a of this.crowds){const o=Math.hypot(a.center.x-n.x,a.center.z-n.z);if(o>=aM){if(a.active){r.scale.setScalar(0),r.updateMatrix();for(const c of a.people)this.setMatrix(c,r.matrix)}a.active=!1;continue}if(a.active=!0,!a.placed){for(const c of a.people)this.pickSpot(a,c)&&(c.x=c.tx,c.z=c.tz,c.y=this.groundAt(c.x,c.z),c.placed=!0,this.pickSpot(a,c));a.placed=!0}const l=o<200;a.cheerCooldown-=t,l&&a.cheerCooldown<=0&&(s=!0,a.cheerCooldown=8);for(const c of a.people){if(!c.placed)continue;let h=0,u=0;if(l){let p=Math.atan2(n.x-c.x,n.z-c.z)-c.heading;p=Math.atan2(Math.sin(p),Math.cos(p)),c.heading+=p*Math.min(1,t*2)}else if(c.wait>0)c.wait-=t,c.wait<=0&&this.pickSpot(a,c);else{const f=c.tx-c.x,p=c.tz-c.z,g=Math.hypot(f,p);if(g<.4)c.wait=2+Math.random()*6;else{const _=Math.min(g,c.speed*t);c.x+=f/g*_,c.z+=p/g*_;let d=Math.atan2(f,p)-c.heading;d=Math.atan2(Math.sin(d),Math.cos(d)),c.heading+=d*Math.min(1,t*3);const y=e*6.5*c.speed+c.phase;h=Math.abs(Math.sin(y))*.025,u=Math.sin(y)*(c.kind==="samurai"?.05:.03),Math.random()<.02&&(c.y=this.groundAt(c.x,c.z))}}r.position.set(c.x,c.y+h*gu,c.z),r.rotation.set(0,c.heading+Math.PI,u),r.scale.setScalar(gu),r.updateMatrix(),this.setMatrix(c,r.matrix)}}for(const a of Object.values(this.meshes))for(const o of a)o.instanceMatrix.needsUpdate=!0;return s}}const mM=[{name:"四条線",pts:[[35.00365,135.7487],[35.00365,135.777]],cars:3},{name:"烏丸線",pts:[[34.9858,135.7596],[35.042,135.7596]],cars:4},{name:"河原町線",pts:[[34.9893,135.769],[35.03,135.769]],cars:3},{name:"東山線",pts:[[34.979,135.7755],[35.0036,135.778],[35.0297,135.7798]],cars:3},{name:"丸太町線",pts:[[35.017,135.735],[35.017,135.788]],cars:3},{name:"七条線",pts:[[34.9892,135.74],[34.9892,135.772]],cars:2},{name:"今出川線",pts:[[35.0297,135.742],[35.0297,135.787]],cars:3},{name:"千本線",pts:[[34.99,135.742],[35.045,135.743]],cars:3}],xu={lat:34.9868,lon:135.759};function gM(i,t){const e=i.toNonIndexed(),n=new Dt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r.set([n.r,n.g,n.b],a*3);e.setAttribute("color",new ne(r,3));for(const a of Object.keys(e.attributes))["position","normal","color"].includes(a)||e.deleteAttribute(a);return e}const Ua=i=>Nr(i.map(([t,e])=>gM(t,e))),Ta=new Le({vertexColors:!0});function _M(){return Ua([[new at(2.3,1.2,12).translate(0,.9,0),"#2f6b3a"],[new at(2.32,1.1,11.6).translate(0,2.05,0),"#f2e6c4"],[new at(2.34,.6,10.6).translate(0,2.05,0),"#2a3440"],[new at(2.4,.25,12.2).translate(0,2.72,0),"#5a5a5a"],[new at(.06,.06,4).rotateX(-.5).translate(0,3.8,-2.6),"#222222"],[new at(2.2,.35,.2).translate(0,.25,5.9),"#222222"],[new at(2.2,.35,.2).translate(0,.25,-5.9),"#222222"]])}function xM(i){const t=document.createElement("canvas");t.width=64,t.height=256;const e=t.getContext("2d");e.fillStyle="#fffaf0",e.fillRect(0,0,64,256),e.fillStyle="#c7254e",e.font="bold 44px serif",e.textAlign="center",[...i].forEach((s,r)=>e.fillText(s,32,50+r*50));const n=new Vn(t);return n.colorSpace=Fe,n}class vM{constructor(t,e){this.group=new Re,this.group.name="showa",t.add(this.group),this.heightAt=e,this.buildTrams(),this.buildPoles(),this.buildChimneys(),this.buildAdBalloons(),this.buildStation(),this.group.visible=!1}setVisible(t){this.group.visible=t}pointAt(t,e){let n=e;for(let s=0;s<t.segs.length;s++){const r=t.segs[s];if(n<=r.len||s===t.segs.length-1){const a=Math.min(1,n/r.len);return{x:r.a.x+(r.b.x-r.a.x)*a,z:r.a.z+(r.b.z-r.a.z)*a,angle:r.angle}}n-=r.len}return null}buildTrams(){const t=_M();this.lines=mM.map(n=>{const s=n.pts.map(([o,l])=>Te(o,l,0)),r=[];let a=0;for(let o=0;o<s.length-1;o++){const l=s[o],c=s[o+1],h=Math.hypot(c.x-l.x,c.z-l.z);r.push({a:l,b:c,len:h,angle:Math.atan2(c.x-l.x,c.z-l.z)}),a+=h}return{...n,segs:r,total:a}});const e=this.lines.reduce((n,s)=>n+s.cars,0);this.trams=new Si(t,Ta,e),this.trams.castShadow=!0,this.trams.frustumCulled=!1,this.group.add(this.trams),this.cars=[];for(const n of this.lines)for(let s=0;s<n.cars;s++)this.cars.push({line:n,d:n.total*(s+.5)/n.cars,dir:s%2?1:-1,speed:7+Math.random()*2,wait:0,y:0,yTimer:0});this.dummy=new de}buildPoles(){const t=[];for(const r of this.lines)for(let a=0;a<r.total;a+=40){const o=this.pointAt(r,a);for(const l of[-1,1]){const c=Math.cos(o.angle)*9*l,h=-Math.sin(o.angle)*9*l;t.push([o.x+c,o.z+h,o.angle])}}const e=Ua([[new Xt(.12,.16,9,6).translate(0,4.5,0),"#5a4632"],[new at(1.6,.12,.12).translate(0,8.3,0),"#3a2e22"],[new at(1.2,.1,.1).translate(0,7.6,0),"#3a2e22"]]),n=new Si(e,Ta,t.length),s=new de;t.forEach(([r,a,o],l)=>{s.position.set(r,this.heightAt(r,a)-.2,a),s.rotation.y=o,s.updateMatrix(),n.setMatrixAt(l,s.matrix)}),this.group.add(n)}buildChimneys(){const t=Ua([[new Xt(.7,1.1,22,10).translate(0,11,0),"#8a4a32"],[new Xt(.78,.78,.6,10).translate(0,21.2,0),"#3a3a3a"],[new at(6,4,6).translate(0,2,2.5),"#d9d0c0"]]),e=[];for(let l=0;l<28;l++){const c=34.98+Math.random()*.058,h=135.735+Math.random()*.045;e.push(Te(c,h,0))}const n=new Si(t,Ta,e.length),s=new de;this.smoke=[],e.forEach((l,c)=>{const h=this.heightAt(l.x,l.z)-.3;s.position.set(l.x,h,l.z),s.rotation.y=Math.random()*6.28,s.updateMatrix(),n.setMatrixAt(c,s.matrix),this.smoke.push(new P(l.x,h+22.5,l.z))}),n.castShadow=!0,this.group.add(n);const r=14,a=new Float32Array(this.smoke.length*r*3);this.smokeSeed=Array.from({length:this.smoke.length*r},()=>Math.random());const o=new xe;o.setAttribute("position",new ne(a,3)),this.smokePoints=new Za(o,new Fr({color:15262940,size:3.5,transparent:!0,opacity:.55,depthWrite:!1})),this.smokePoints.frustumCulled=!1,this.smokePerChimney=r,this.group.add(this.smokePoints)}buildAdBalloons(){const t=["仁丹","大売出し","キネマ","百貨店","カフェー","新発売","映画","万年筆","石鹸","化粧品"],e=["#e8382f","#f5b800","#2f7fe8","#2fbf71","#e85ab5","#ff8a3d"];this.ads=[];const n=new le(2.4,16,12);for(let s=0;s<24;s++){const r=34.99+Math.random()*.03,a=135.75+Math.random()*.03,o=Te(r,a,0),l=this.heightAt(o.x,o.z),c=new Re;c.position.set(o.x,l+26+Math.random()*14,o.z),c.add(new xt(n,new Le({color:e[s%e.length]})));const h=t[s%t.length],u=new xt(new Ki(1.4,1.4*h.length+.8),new Ws({map:xM(h),side:Sn}));u.position.y=-2.4-(1.4*h.length+.8)/2-.5,c.add(u),this.group.add(c),this.ads.push({g:c,base:c.position.y,phase:Math.random()*6})}}buildStation(){const t=Te(xu.lat,xu.lon,0),e=this.heightAt(t.x,t.z)-.3,n=Ua([[new at(110,11,20).translate(0,5.5,0),"#efe6d2"],[new at(110.5,.8,20.5).translate(0,5.2,0),"#8a5a3a"],[new at(112,1,22).translate(0,11.4,0),"#6a6a72"],[new wi(36,6,4).rotateY(Math.PI/4).scale(1.55,1,.33).translate(0,14.8,0),"#4f5a52"],[new at(18,18,22).translate(0,9,1),"#f5eedc"],[new at(10,10,10).translate(0,22,1),"#f5eedc"],[new wi(8,8,4).rotateY(Math.PI/4).translate(0,31,1),"#3f5a4a"],[new Xt(2.4,2.4,.3,24).rotateX(Math.PI/2).translate(0,22,6.2),"#ffffff"],[new at(.2,1.8,.2).translate(0,22.6,6.4),"#111111"],[new at(1.3,.2,.2).translate(.5,22,6.4),"#111111"],...Array.from({length:14},(r,a)=>[new at(2.2,3,.4).translate(-48+a*7.4,7.8,10.1),"#2a3440"]),...Array.from({length:14},(r,a)=>[new at(2.2,3,.4).translate(-48+a*7.4,2.6,10.1),"#2a3440"])]),s=new xt(n,Ta);s.position.set(t.x,e,t.z),s.rotation.y=Math.PI,s.castShadow=s.receiveShadow=!0,this.group.add(s)}update(t,e){if(!this.group.visible)return;const n=this.dummy;this.cars.forEach((a,o)=>{a.wait>0?a.wait-=t:(a.d+=a.dir*a.speed*t,a.d>a.line.total||a.d<0?(a.dir*=-1,a.d=Math.max(0,Math.min(a.line.total,a.d)),a.wait=4):Math.random()<t*.05&&(a.wait=3+Math.random()*3));const l=this.pointAt(a.line,a.d);a.yTimer-=t,a.yTimer<=0&&(a.y=this.heightAt(l.x,l.z),a.yTimer=1);const c=1.6*a.dir;n.position.set(l.x+Math.cos(l.angle)*c,a.y+.1,l.z-Math.sin(l.angle)*c),n.rotation.set(0,l.angle+(a.dir<0?Math.PI:0),0),n.updateMatrix(),this.trams.setMatrixAt(o,n.matrix)}),this.trams.instanceMatrix.needsUpdate=!0;for(const a of this.ads)a.g.position.y=a.base+Math.sin(e*.7+a.phase)*.8,a.g.rotation.y=Math.sin(e*.3+a.phase)*.4;const s=this.smokePoints.geometry.attributes.position.array,r=this.smokePerChimney;this.smoke.forEach((a,o)=>{for(let l=0;l<r;l++){const c=o*r+l,h=(e*.12+this.smokeSeed[c])%1;s[c*3]=a.x+h*18+Math.sin(c)*1.5,s[c*3+1]=a.y+h*14,s[c*3+2]=a.z+h*6+Math.cos(c)*1.5}}),this.smokePoints.geometry.attributes.position.needsUpdate=!0}}const Cf={x0:-17,x1:-3,z0:12,z1:21,floor:121.5},Ar={x:-10,z:20,heading:235};function MM(){const i=document.createElement("canvas");i.width=512,i.height=160;const t=i.getContext("2d");t.fillStyle="#fff6e0",t.strokeStyle="#d7262e",t.lineWidth=14,t.beginPath(),t.roundRect(8,8,496,144,36),t.fill(),t.stroke(),t.fillStyle="#1b1b1f",t.font='900 76px "M PLUS Rounded 1c", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("清水の舞台",256,84);const e=new Vn(i);return e.colorSpace=Fe,e}function yM(i,t){const e=new Re,n=new Le({color:10119740}),s=new Le({color:6175520}),{x0:r,x1:a,z0:o,z1:l,floor:c}=Cf,h=a-r,u=l-o,f=new xt(new at(h,.5,u),n);f.position.set((r+a)/2,c-.25,(o+l)/2),f.castShadow=f.receiveShadow=!0,e.add(f);for(let _=r+.6;_<a;_+=.6){const m=new xt(new at(.04,.02,u),s);m.position.set(_,c+.01,(o+l)/2),e.add(m)}const p=(_,m,d,y)=>{const v=Math.hypot(d-_,y-m),x=new xt(new at(v,.12,.12),s);x.position.set((_+d)/2,c+1,(m+y)/2),x.rotation.y=-Math.atan2(y-m,d-_),e.add(x)};p(r,o,r,l),p(a,o,a,l),p(r,l,r+3,l),p(a-3,l,a,l);for(let _=r+.5;_<=a;_+=3.4)for(let m=o+.5;m<=l;m+=2.8){const d=t(_,m),y=c-d+1;if(y<=0)continue;const v=new xt(new at(.6,y,.6),n);v.position.set(_,d+y/2-1,m),v.castShadow=!0,e.add(v)}for(let _=c-4;_>c-30;_-=4){for(let m=o+.5;m<=l;m+=2.8){const d=new xt(new at(h,.35,.3),s);d.position.set((r+a)/2,_,m),e.add(d)}for(let m=r+.5;m<=a;m+=3.4){const d=new xt(new at(.3,.35,u),s);d.position.set(m,_,(o+l)/2),e.add(d)}}const g=new Sr(new Os({map:MM(),transparent:!0}));return g.scale.set(9,2.8,1),g.position.set((r+a)/2,c+9,o-2),e.add(g),i.add(e),e}const SM=7,vu=.5,wM=1,EM=62,TM=20,bM=2.6;function AM(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#f6b51e",t.fillRect(0,0,128,128),t.fillStyle="#1b1b1f";for(let n=-20;n<140;n+=22)t.beginPath(),t.moveTo(n,0),t.quadraticCurveTo(n+14,64,n,128),t.lineTo(n+8,128),t.quadraticCurveTo(n+22,64,n+8,0),t.fill();const e=new Vn(i);return e.colorSpace=Fe,e}function RM(i){const t=new Re,e=new Le({color:i}),n=new Le({color:16777215}),s=new Ws({color:1118481}),r=new Le({color:16773572}),a=new Le({color:1776415}),o=new Le({map:AM()}),l=new Le({color:3816004}),c=new Re,h=new Le({color:16777215,emissive:6710886});for(const[v,x,T,b]of[[0,0,0,1.1],[1,.1,.3,.8],[-1,.05,-.2,.85],[.4,.2,-.8,.7],[-.5,.15,.8,.7],[1.6,-.1,-.4,.55],[-1.6,-.1,.4,.55]]){const A=new xt(new le(b,12,10),h);A.position.set(v,x,T),A.scale.y=.7,c.add(A)}c.position.y=-1,c.name="cloud",t.add(c);const u=new xt(new Qn(.55,.7,6,12),e);u.position.y=.6,t.add(u);const f=new xt(new Xt(.62,.66,.5,14),o);f.position.y=.2,t.add(f);for(const v of[-1,1]){const x=new xt(new Qn(.2,.3,4,8),e);x.position.set(v*.3,-.25,0),t.add(x)}const p=new Re;p.name="head",p.position.y=1.65,t.add(p),p.add(new xt(new le(.55,16,12),e));for(const v of[-1,1]){const x=new xt(new wi(.13,.55,10),r);x.position.set(v*.28,.5,0),x.rotation.z=-v*.3,p.add(x);const T=new xt(new le(.15,10,8),n);T.position.set(v*.2,.08,-.45),p.add(T);const b=new xt(new le(.07,8,6),s);b.position.set(v*.2,.08,-.59),p.add(b);const A=new xt(new Xt(.035,.035,.3,6),s);A.rotation.z=Math.PI/2+v*.4,A.position.set(v*.2,.28,-.48),p.add(A);const I=new xt(new wi(.05,.16,6),n);I.rotation.x=Math.PI,I.position.set(v*.15,-.28,-.46),p.add(I)}const g=new xt(new Xt(.22,.22,.05,16,1,!1,0,Math.PI),s);g.rotation.x=Math.PI/2,g.position.set(0,-.2,-.5),p.add(g);for(let v=0;v<9;v++){const x=v/9*Math.PI*2,T=new xt(new le(.2,8,6),a);T.position.set(Math.cos(x)*.42,.3,Math.sin(x)*.42+.1),p.add(T)}const _=new xt(new Qn(.16,.6,4,8),e);_.position.set(-.75,.75,0),_.rotation.z=.5,t.add(_);const m=new Re;m.name="arm",m.position.set(.7,1.05,0),t.add(m);const d=new xt(new Qn(.16,.6,4,8),e);d.position.set(.15,.3,0),d.rotation.z=-.5,m.add(d);const y=new xt(new Xt(.16,.09,2,8),l);y.position.set(.35,1.1,0),y.rotation.z=-.2,m.add(y);for(let v=0;v<6;v++){const x=new xt(new wi(.06,.14,5),n),T=v/6*Math.PI*2;x.position.set(.35+Math.cos(T)*.15,1.5-v%3*.3,Math.sin(T)*.15),x.rotation.z=-Math.PI/2,m.add(x)}for(const v of[t,c,p,m])PM(v);return t.scale.setScalar(bM),t.traverse(v=>{v.castShadow=!0}),t}const CM=new Le({vertexColors:!0});function PM(i){const t=[];for(const e of[...i.children]){if(!e.isMesh||e.material.map)continue;e.updateMatrix();const n=e.geometry.clone().applyMatrix4(e.matrix).toNonIndexed(),s=e.material.color,r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set([s.r,s.g,s.b],o*3);n.setAttribute("color",new ne(a,3));for(const o of Object.keys(n.attributes))["position","normal","color"].includes(o)||n.deleteAttribute(o);t.push(n),i.remove(e)}t.length&&i.add(new xt(Nr(t),CM))}const qo=new Map;function Mu(i){qo.has(i)||qo.set(i,RM(i));const t=qo.get(i).clone();return t.userData.arm=t.getObjectByName("arm"),t.userData.head=t.getObjectByName("head"),t.userData.cloud=t.getObjectByName("cloud"),t}const jo=[14170670,3104728,3123279,9060312,15769632,2236962],LM=450,yu=600,IM=6,DM=450,UM=600,Yo=45,FM=new P;class NM{constructor(t){this.scene=t,this.list=[],this.time=0,this.calm=0,this.nextSpawn=vu,this.homes=[],this.heightAt=()=>0}warmupObjects(){const t=new Re;for(const e of jo)t.add(Mu(e));return t}setWorld(t,e){this.homes=t,this.heightAt=e}reset(){for(const t of this.list)this.scene.remove(t.obj);this.list=[],this.time=0,this.calm=0,this.nextSpawn=vu}spawnAt(t){const e=this.list.length,n=Mu(jo[e%jo.length]),s=t.clone(),r=Math.random()*Math.PI*2,a=100+Math.random()*300;s.x+=Math.cos(r)*a,s.z+=Math.sin(r)*a,s.y=this.heightAt(s.x,s.z)+60+Math.random()*140,n.position.copy(s),this.scene.add(n);const o={obj:n,pos:s,vel:new P,phase:Math.random()*6,n:e,home:t.clone(),state:"wander",waypoint:s.clone(),flank:Math.random()*Math.PI*2};return this.pickWaypoint(o),this.list.push(o),o}pickWaypoint(t){const e=Math.random()*Math.PI*2,n=Math.random()*DM,s=t.home.x+Math.cos(e)*n,r=t.home.z+Math.sin(e)*n;t.waypoint.set(s,this.heightAt(s,r)+50+Math.random()*170,r)}chooseHomes(t,e,n){const s=this.homes.filter(r=>Math.hypot(r.x-e.x,r.z-e.z)>n);for(let r=s.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[s[r],s[a]]=[s[a],s[r]]}return s.slice(0,t)}addForCheckpoint(t,e,n){if(t%wM!==0||!this.list.length||this.list.length>=EM)return null;const s=n.filter(a=>Math.hypot(a.x-e.position.x,a.z-e.position.z)>700),r=(s.length?s:n)[Math.floor(Math.random()*(s.length||n.length))];return r?this.spawnAt(r):null}scatter(t,e=5){for(const n of this.list)n.state!=="chase"&&n.pos.distanceTo(t.position)>yu||(n.state="wander",n.pos.copy(n.home),n.pos.y=this.heightAt(n.home.x,n.home.z)+120,n.vel.set(0,0,0),n.ground=void 0,this.pickWaypoint(n));this.calm=e}update(t,e,n){const s={spawned:null,found:[],nearest:1/0,nearestChase:1/0,caught:!1};n&&(this.time+=t,this.calm=Math.max(0,this.calm-t),this.time>=this.nextSpawn&&!this.list.length&&(s.spawned=this.chooseHomes(TM,e.position,UM).map(o=>this.spawnAt(o))));const r=Math.min(27,15+this.time*.04),a=e.position;for(const o of this.list){if(o.phase+=t,n){const c=o.pos.distanceTo(a),h=FM;if(o.state==="chase"){c>yu&&(o.state="wander",o.waypoint.copy(o.home),o.waypoint.y=this.heightAt(o.home.x,o.home.z)+120);const u=Math.min(70,c*.35);h.copy(e.velocity).multiplyScalar(Math.min(3,c/40)).add(a),h.x+=Math.cos(o.flank)*u,h.z+=Math.sin(o.flank)*u,h.sub(o.pos).normalize().multiplyScalar(r+o.n%5*.6);for(const f of this.list){if(f===o||f.state!=="chase")continue;const p=o.pos.x-f.pos.x,g=o.pos.y-f.pos.y,_=o.pos.z-f.pos.z,m=Math.hypot(p,g,_);if(m>.1&&m<Yo){const d=(Yo-m)/Yo*r*.8;h.x+=p/m*d,h.y+=g/m*d,h.z+=_/m*d}}o.vel.lerp(h,Math.min(1,t*.9)),s.nearestChase=Math.min(s.nearestChase,c)}else c<LM&&!this.calm&&(o.state="chase",s.found.push(o)),o.pos.distanceTo(o.waypoint)<25&&this.pickWaypoint(o),h.copy(o.waypoint).sub(o.pos).normalize().multiplyScalar(IM),o.vel.lerp(h,Math.min(1,t*.6));o.pos.addScaledVector(o.vel,t),o.groundTimer=(o.groundTimer??Math.random()*.5)-t,(o.groundTimer<=0||o.ground===void 0)&&(o.ground=this.heightAt(o.pos.x,o.pos.z),o.groundTimer=.5),o.pos.y<o.ground+12&&(o.pos.y=o.ground+12),c<s.nearest&&(s.nearest=c),c<SM&&(s.caught=!0)}const l=o.state==="chase";o.obj.position.copy(o.pos),o.obj.position.y+=Math.sin(o.phase*2)*.8,o.vel.lengthSq()>.1&&(o.obj.rotation.y=Math.atan2(-o.vel.x,-o.vel.z)),o.obj.userData.arm.rotation.z=Math.sin(o.phase*(l?9:3))*(l?.8:.3),o.obj.userData.head.rotation.z=Math.sin(o.phase*(l?3:1))*(l?.15:.35),o.obj.userData.cloud.rotation.y+=t*1.5}return s}}const OM=15221548;function Su(i,t){const e=i*.045,n=[new Xt(e,e*1.1,t,12).translate(-i/2,t/2,0),new Xt(e,e*1.1,t,12).translate(i/2,t/2,0),new at(i*1.45,t*.07,e*2.4).translate(0,t*.98,0),new at(i*1.2,t*.05,e*1.8).translate(0,t*.82,0)];return Nr(n.map(s=>s.toNonIndexed()))}function BM(i,t){const e=new Re,n=new Le({color:OM}),s=new Le({color:2236962});for(const x of eM){const T=Te(x.lat,x.lon,0),b=new xt(Su(x.width,x.height),n);b.position.set(T.x,t(T.x,T.z)-.5,T.z),b.rotation.y=x.deg*Math.PI/180,b.castShadow=!0,e.add(b);const A=new xt(new at(x.width*1.5,x.height*.03,x.width*.11),s);A.position.set(0,x.height*1.025,0),b.add(A)}const r=nM.map(([x,T])=>Te(x,T,0)),a=[];for(let x=0;x<r.length-1;x++){const T=r[x],b=r[x+1],A=Math.hypot(b.x-T.x,b.z-T.z),I=Math.atan2(b.x-T.x,b.z-T.z);for(let w=0;w<A;w+=1.4){const M=T.x+(b.x-T.x)*w/A,C=T.z+(b.z-T.z)*w/A;a.push({x:M,z:C,angle:I})}}const o=new Si(Su(2.4,3.2),n,a.length),l=new de;a.forEach((x,T)=>{l.position.set(x.x,t(x.x,x.z)-.2,x.z),l.rotation.y=x.angle+Math.PI/2,l.updateMatrix(),o.setMatrixAt(T,l.matrix)}),o.castShadow=!0,e.add(o);const c=Te(...ar.from,0),h=Te(...ar.to,0),u=Math.hypot(h.x-c.x,h.z-c.z),f=Math.atan2(h.x-c.x,h.z-c.z),p=t(c.x,c.z),g=t(h.x,h.z),_=Math.max(p,g)+1.5,m=new Re;m.position.set((c.x+h.x)/2,0,(c.z+h.z)/2),m.rotation.y=f;const d=new Le({color:9071178}),y=new xt(new at(ar.width,.8,u+6),d);y.position.y=_,y.castShadow=y.receiveShadow=!0,m.add(y);for(const x of[-1,1]){const T=new xt(new at(.3,1.1,u+6),new Le({color:5916210}));T.position.set(x*(ar.width/2-.2),_+.9,0),m.add(T)}const v=new Xt(.35,.35,12,8);for(let x=-u/2;x<=u/2;x+=7)for(const T of[-1,0,1]){const b=new xt(v,d);b.position.set(T*ar.width*.35,_-6,x),m.add(b)}e.add(m);{const x=Te(vi.lat,vi.lon,0),T=t(x.x,x.z)+.4,b=new xt(new vc(.5,48),new $p({color:3499870,shininess:90,specular:9418672}));b.rotation.x=-Math.PI/2,b.scale.set(vi.w,vi.d,1),b.position.set(x.x,T,x.z),b.receiveShadow=!0,e.add(b);const A=new Le({color:3103274});for(const[I,w,M]of[[-18,8,6],[12,14,4.5],[25,-5,3.5],[-30,-10,3]]){const C=new xt(new le(M,12,8),A);C.scale.y=.45,C.position.set(x.x+I,T,x.z+w),e.add(C)}}{const x=Te(...rr.from,0),T=Te(...rr.to,0),b=Math.hypot(T.x-x.x,T.z-x.z),A=(T.x-x.x)/b,I=(T.z-x.z)/b,w=[];for(let W=0;W<=b;W+=rr.spacing)for(const B of[-1,1])w.push([x.x+A*W-I*B*rr.width/2,x.z+I*W+A*B*rr.width/2]);const M=new Xt(.08,.1,1.6,6).translate(0,.8,0),C=new at(.42,.5,.42).translate(0,1.85,0),U=Nr([M.toNonIndexed(),C.toNonIndexed()]),O=new Si(U,n,w.length),k=new de;w.forEach(([W,B],Z)=>{k.position.set(W,t(W,B)-.1,B),k.updateMatrix(),O.setMatrixAt(Z,k.matrix)}),e.add(O)}return i.add(e),e}function zM(i){const t={android:{test:{interstitial:"ca-app-pub-3940256099942544/1033173712",rewarded:"ca-app-pub-3940256099942544/5224354917",banner:"ca-app-pub-3940256099942544/6300978111"},production:{interstitial:"",rewarded:"",banner:""}},ios:{test:{interstitial:"ca-app-pub-3940256099942544/4411468910",rewarded:"ca-app-pub-3940256099942544/1712485313",banner:"ca-app-pub-3940256099942544/2934735716"},production:{interstitial:"",rewarded:"",banner:""}}},e=2e4,n=window.Capacitor,s=!!(n&&n.isNativePlatform&&n.isNativePlatform());let r=s&&n.Plugins?n.Plugins.AdMob:null;const a=s&&n.getPlatform&&n.getPlatform()==="ios"?"ios":"android",o=window.AD_MODE!=="production",l=t[a][o?"test":"production"],c=M=>!!l[M];!c("interstitial")&&!c("rewarded")&&!c("banner")&&(r=null);let h=!1,u=!1,f=!1;const p={},g={inter:{unit:"interstitial",loaded:!1,pending:null,load:()=>r.prepareInterstitial({adId:l.interstitial,isTesting:o})},reward:{unit:"rewarded",loaded:!1,pending:null,load:()=>r.prepareRewardVideoAd({adId:l.rewarded,isTesting:o})}};function _(M){const C=g[M];return!h||!c(C.unit)?Promise.resolve(!1):C.loaded?Promise.resolve(!0):(C.pending||(C.pending=C.load().then(()=>(C.loaded=!0,!0)).catch(()=>(setTimeout(()=>_(M),e),!1)).finally(()=>{C.pending=null})),C.pending)}function m(M,C){return g[M].loaded?Promise.resolve(!0):Promise.race([_(M),new Promise(U=>setTimeout(()=>U(!1),C))])}function d(M,C){u=!1,document.hidden||i.resume(),A();const U=p[M];p[M]=null,U&&U(C)}async function y(){try{await r.initialize({initializeForTesting:o})}catch{return}try{let C=await r.requestConsentInfo();C.status==="REQUIRED"&&C.isConsentFormAvailable&&(C=await r.showConsentForm()),h=C.canRequestAds!==!1,f=C.privacyOptionsRequirementStatus==="REQUIRED"}catch{h=!0}if(a==="ios")try{const{status:C}=await r.trackingAuthorizationStatus();C==="notDetermined"&&await r.requestTrackingAuthorization()}catch{}let M=!1;r.addListener("interstitialAdDismissed",()=>d("inter")),r.addListener("interstitialAdFailedToShow",()=>d("inter")),r.addListener("onRewardedVideoAdShowed",()=>{M=!1}),r.addListener("onRewardedVideoAdReward",()=>{M=!0}),r.addListener("onRewardedVideoAdDismissed",()=>d("reward",M)),r.addListener("onRewardedVideoAdFailedToShow",()=>d("reward",!1)),_("inter"),_("reward"),A()}async function v(M=0){if(!(!r||u||!c("interstitial"))&&(await w,!(!h||!await m("inter",M))))return u=!0,g.inter.loaded=!1,i.suspend(),A(),new Promise(C=>{p.inter=()=>{_("inter"),C()},r.showInterstitial().catch(()=>d("inter"))})}async function x(){return!r||u||!c("rewarded")||(await w,!h||!await m("reward",8e3))?"unavailable":(u=!0,g.reward.loaded=!1,i.suspend(),A(),new Promise(M=>{p.reward=C=>{_("reward"),M(C?"rewarded":"skipped")},r.showRewardVideoAd().catch(()=>d("reward",!1))}))}const T={want:!1,state:"none",busy:!1};function b(M){T.want!==M&&(T.want=M,A())}async function A(){if(!r||!h||T.busy||!c("banner"))return;const M=T.want&&!u?"shown":"hidden";if(M===T.state||M==="hidden"&&T.state==="none")return;T.busy=!0;try{M==="shown"?(T.state==="none"?await r.showBanner({adId:l.banner,adSize:"BANNER",position:"BOTTOM_CENTER",margin:0,isTesting:o}):await r.resumeBanner(),T.state="shown"):(await r.hideBanner(),T.state="hidden")}catch{M==="shown"&&(T.state="none")}T.busy=!1;const C=T.want&&!u?"shown":"hidden";C!==T.state&&!(C==="hidden"&&T.state==="none")&&A()}function I(){return r?r.showPrivacyOptionsForm().catch(()=>{}):Promise.resolve()}const w=r?y():Promise.resolve();return{get available(){return!!r},get canReward(){return!!r&&c("rewarded")},get showing(){return u},get privacyOptionsRequired(){return f},initDone:w,showInterstitial:v,showRewarded:x,setBanner:b,showPrivacyOptions:I}}const K=i=>document.getElementById(i),to=5,Pf=1,kM="https://techgym.jp/column/claude-code-game-kiyomizu/";var Ra,Iu;const bc=!!((Iu=(Ra=window.Capacitor)==null?void 0:Ra.isNativePlatform)!=null&&Iu.call(Ra)),Ql=i=>{var t;return bc?((t=window.Capacitor.Plugins)==null?void 0:t[i])??null:null};bc&&document.body.classList.add("app");const Lf=3,GM=2.5,wu=6,Ae={quality:localStorage.getItem("kiyomizu-quality2")==="high"?"high":"low",muted:localStorage.getItem("kiyomizu-muted")==="1",era:localStorage.getItem("kiyomizu-era")==="showa"?"showa":"now"};Fv();K("opt-lang").value=Gs;K("opt-lang").addEventListener("change",i=>{localStorage.setItem("kiyomizu-lang",i.target.value),location.reload()});K("opt-era").value=Ae.era;K("opt-era").addEventListener("change",i=>no(i.target.value));Ae.era==="showa"&&document.body.classList.add("showa");K("opt-quality").value=Ae.quality;K("opt-mute").checked=Ae.muted;K("opt-quality").addEventListener("change",i=>{localStorage.setItem("kiyomizu-quality2",i.target.value),location.reload()});K("opt-mute").addEventListener("change",i=>{Ae.muted=i.target.checked,localStorage.setItem("kiyomizu-muted",Ae.muted?"1":"0"),zt.setMuted(Ae.muted)});const If=K("view"),ii=matchMedia("(pointer: coarse)").matches,ge=new kx({canvas:If,antialias:!ii,logarithmicDepthBuffer:!0});ge.debug.checkShaderErrors=!1;ge.setPixelRatio(Math.min(devicePixelRatio,Ae.quality==="high"?2:ii?1:1.25));ge.setSize(innerWidth,innerHeight);ge.outputColorSpace=Fe;ge.toneMapping=Nu;ge.toneMappingExposure=1;ge.autoClear=!1;const Rr=Ae.quality==="high";ge.shadowMap.enabled=Rr;ge.shadowMap.type=Fu;ge.shadowMap.autoUpdate=!1;const Se=new ef;Se.fog=new _c(new Dt(11130101),6e3,32e3);const Be=new fn(65,innerWidth/innerHeight,.1,6e4),Xi=new fn(55,16/10,.5,3500),Ac=new Ti(320,200),Df=new ef,HM=new wc(-.5,.5,.5,-.5,0,1);Df.add(new xt(new Ki(1,1),new Ws({map:Ac.texture,depthTest:!1,depthWrite:!1})));const Rc=new P().setFromSphericalCoords(1,Xe.degToRad(50),Xe.degToRad(320)),tc=jv(Rc);Se.add(tc);Se.add(new Jp(14216447,9073488,1.9));const Dn=new em(16773336,2.6);Dn.position.copy(Rc).multiplyScalar(1e3);Se.add(Dn);Se.add(Dn.target);if(Rr){Dn.castShadow=!0,Dn.shadow.mapSize.set(2048,2048);const i=Dn.shadow.camera;i.left=i.bottom=-260,i.right=i.top=260,i.near=10,i.far=3e3,Dn.shadow.bias=-4e-4,Dn.shadow.normalBias=.6}function VM(i){const t=Math.round(i.x/4)*4,e=Math.round(i.y/4)*4,n=Math.round(i.z/4)*4;Dn.target.position.set(t,e,n),Dn.position.set(t,e,n).addScaledVector(Rc,1500)}let gi=null;function Uf(){const i=K("wipe").getBoundingClientRect();if(gi=i.width?{x:i.left+5,y:i.top+5,w:i.width-10,h:i.height-10}:null,gi){Xi.aspect=gi.w/gi.h,Xi.updateProjectionMatrix();const t=ii?.5:.75;Ac.setSize(Math.round(gi.w*t),Math.round(gi.h*t))}}addEventListener("resize",()=>{Be.aspect=innerWidth/innerHeight,Be.updateProjectionMatrix(),ge.setSize(innerWidth,innerHeight),Uf()});const Pe=new ev(Se,{era:Ae.era,mobile:ii}),lt=new Lv;Se.add(lt.object);const zt=new qv;zt.era=Ae.era;zt.setMuted(Ae.muted);const Cn=zM(zt),Cc=new Qv(Se),zn=new NM(Se);let We=null,On=null,ur=null,qi=null,Hs=null;const Ff=ii?30:60,rn=new P(Ar.x,Cf.floor+1.3,Ar.z),ec=new P,ye={};function Nf(){const i=!zt.ctx;zt.init(),i&&(It==="title"||It==="loading")&&zt.playSong("title")}addEventListener("pointerdown",Nf);addEventListener("keydown",Nf);document.addEventListener("click",i=>{i.target.closest("button")&&zt.click()});const eo=new Set,Jn={x:0,y:0,jet:!1};addEventListener("keydown",i=>{i.target.tagName!=="INPUT"&&(eo.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),i.code==="KeyC"&&Of(),i.code==="KeyT"&&no(Ae.era==="showa"?"now":"showa"),i.code==="KeyM"&&(Ae.muted=!Ae.muted,K("opt-mute").checked=Ae.muted,zt.setMuted(Ae.muted)),(i.code==="KeyP"||i.code==="Escape")&&Lr(),i.code==="Space"&&It==="ready"&&ja())});addEventListener("keyup",i=>eo.delete(i.code));addEventListener("blur",()=>eo.clear());function WM(){const i=(...n)=>n.some(s=>eo.has(s)),t=(i("ArrowUp","KeyW")?1:0)-(i("ArrowDown","KeyS")?1:0)-Jn.y,e=(i("ArrowRight","KeyD")?1:0)-(i("ArrowLeft","KeyA")?1:0)+Jn.x;return{pitch:Xe.clamp(t,-1,1),roll:Xe.clamp(e,-1,1),jet:i("Space","ShiftLeft","ShiftRight")||Jn.jet}}const nc=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;(function(){const t=K("stick"),e=K("stick-knob");let n=null;const s=l=>{const c=t.getBoundingClientRect(),h=c.left+c.width/2,u=c.top+c.height/2;let f=(l.clientX-h)/(c.width/2),p=(l.clientY-u)/(c.height/2);const g=Math.hypot(f,p);g>1&&(f/=g,p/=g),Jn.x=f,Jn.y=p,e.style.transform=`translate(${f*40}px, ${p*40}px)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const r=l=>{l.pointerId===n&&(n=null,Jn.x=Jn.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);const a=K("touch-jet");a.addEventListener("pointerdown",l=>{l.preventDefault(),It==="ready"&&ja(),Jn.jet=!0});const o=()=>{Jn.jet=!1};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o),a.addEventListener("pointerleave",o),K("touch-cam").addEventListener("pointerdown",l=>{l.preventDefault(),Of()}),K("touch-era").addEventListener("pointerdown",l=>{l.preventDefault(),no(Ae.era==="showa"?"now":"showa")}),If.addEventListener("pointerdown",()=>{It==="ready"&&ja()})})();let Cr="chase";const ba=new P,Eu=new P(0,1,0),$o=new P,Ko=new P,Es=new P,Zo=new P(0,1,0);let Pr=!1;function Of(){Cr=Cr==="pilot"?"chase":"pilot",Pr=!1}function Tu(i){lt.object.getObjectByName("pilotHead").visible=i,lt.object.getObjectByName("pilotBody").visible=i,lt.object.traverse(t=>{t.name==="centerPole"&&(t.visible=i)})}function bu(i,t){zs(i,ye);const e=Pe.heightAt(ye.lat,ye.lon);ye.height<e+t&&(i.y+=e+t-ye.height)}function Jo(i){const t=lt.forward(ec);if(Cr==="pilot")lt.object.updateMatrixWorld(),Be.position.set(0,.1,-.2).applyMatrix4(lt.object.matrixWorld),Be.quaternion.copy(lt.object.quaternion),Be.rotateX(-.12);else{const s=7.5+lt.speed*.06,r=lt.position.clone().addScaledVector(t,-s);r.y+=2.2-Math.sin(lt.gamma)*3,Pr||(ba.copy(r),Pr=!0),ba.lerp(r,Math.min(1,i*5)),bu(ba,2),Be.position.copy(ba),$o.set(0,1,0).applyQuaternion(lt.object.quaternion).lerp(Zo,.55).normalize(),Eu.lerp($o,Math.min(1,i*4)),Be.up.copy(Eu),Ko.copy(lt.position).addScaledVector(t,6),Ko.y+=.8,Be.lookAt(Ko)}const e=$o.crossVectors(t,Zo).normalize(),n=lt.position.clone().addScaledVector(t,6.5).addScaledVector(e,2.2);n.y+=.4,Es.lerp(n,Math.min(1,i*8)),Es.distanceTo(n)>30&&Es.copy(n),bu(Es,1),Xi.position.copy(Es),Xi.up.copy(Zo),Xi.lookAt(lt.position.x,lt.position.y+.6,lt.position.z)}let It="loading",pt=null,Au=0;function Bf(){return{distance:0,time:0,checkpoints:[],grace:1.2,wasJetting:!1,inThermal:!1,oniDist:1/0,oniChase:1/0,chasers:0,alarm:!1,alarmTimer:0,clear:!1,continues:0,trail:[],trailTimer:0}}function XM(){lt.reset(rn,Ar.heading*Xe.DEG2RAD),lt.gamma=0,lt.speed=0,lt.jetFuel=Pf*to,lt.syncObject(),On.reset(),zn.reset(),pt=Bf(),Hf()}function Pc(){zt.init(),Or(),K("hud").classList.remove("hidden"),Uf(),nc&&K("touch").classList.remove("hidden"),XM(),It="ready",Cr="chase",Pr=!1,Es.copy(lt.position),zt.playSong("start"),Gn(Ot("start"),2.6),K("hint").textContent=Ot(nc?"hintTouch":"hintKey")}function ja(){It==="ready"&&(zt.init(),lt.reset(rn,Ar.heading*Xe.DEG2RAD),lt.jetFuel=Pf*to,It="flying",K("hint").textContent="",zt.jump(),zt.playSong("flight"),Gn(Ot("jump"),2))}function Lc(i,t,e=!1){It="over",pt.clear=e,zt.stopSong(.1),e?zt.turboGet():zt.crash(),K("touch").classList.add("hidden"),Gn(i,1.4);const n=!e&&Cn.canReward&&pt.continues<Lf;setTimeout(()=>{It==="over"&&(n?qM(i,t):zf(i,t))},(n?GM:1.5)*1e3)}function zf(i,t){const e=pt.clear,n=pt.distance/1e3;K("result-title").textContent=i,K("result-reason").textContent=t,K("result-cp").textContent=`${pt.checkpoints.length}`,K("result-dist").textContent=`${n.toFixed(2)} km`,K("result-time").textContent=Gf(pt.time),K("result-spots").textContent=(pt.checkpoints.length?Ot("visited",pt.checkpoints):Ot("noBalloons"))+(pt.continues?Ot("continued",pt.continues):"");const s=ZM(pt.checkpoints.length,pt.distance),r=e||s<=10&&(pt.checkpoints.length>0||pt.distance>50);K("result-title").classList.toggle("clear",e),K("rank-banner").classList.toggle("hidden",!r),K("rank-no").textContent=s,K("result-name").value=localStorage.getItem("kiyomizu-name")||"",K("btn-save").disabled=!1,K("btn-save").textContent=Ot("save"),kn("result"),r?(zt.playSong("ranking"),YM()):zt.playSong("gameover")}const Ve={active:!1,busy:!1,t:0,timer:0,title:"",reason:""};function qM(i,t){Object.assign(Ve,{active:!0,busy:!1,t:wu,title:i,reason:t}),K("btn-cont-watch").disabled=!1,K("btn-cont-watch").textContent=Ot("contWatch"),K("cont-note").textContent=Ot("contNote",Lf-pt.continues),K("btn-cont-skip").textContent=Ot("contSkip",wu),kn("continue"),clearInterval(Ve.timer),Ve.timer=setInterval(()=>{!Ve.active||Ve.busy||(Ve.t-=.25,K("btn-cont-skip").textContent=Ot("contSkip",Math.max(0,Math.ceil(Ve.t))),Ve.t<=0&&Ls(!0))},250)}function Ls(i){Ve.active&&(Ve.active=!1,clearInterval(Ve.timer),i&&It==="over"&&zf(Ve.title,Ve.reason))}K("btn-cont-skip").addEventListener("click",()=>Ls(!0));K("btn-cont-watch").addEventListener("click",async()=>{if(!Ve.active||Ve.busy)return;Ve.busy=!0,K("btn-cont-watch").disabled=!0,K("btn-cont-watch").textContent=Ot("contLoading");const i=await Cn.showRewarded();if(Ve.active){if(i==="unavailable"){K("cont-note").textContent=Ot("contFail"),setTimeout(()=>Ls(!0),2e3);return}if(i!=="rewarded"){Ls(!0);return}Ls(!1),jM()}});function jM(){const i=pt.trail[Math.max(0,pt.trail.length-8)]??{pos:rn.clone().setY(rn.y+60),yaw:Ar.heading*Xe.DEG2RAD},t=i.pos.clone();t.y=Math.max(t.y+30,Pe.heightAtWorld(t.x,t.z)+80);const e=lt.jetFuel;lt.reset(t,i.yaw),lt.gamma=0,lt.speed=16,lt.jetFuel=e,lt.syncObject(),zn.scatter(lt),pt.continues++,pt.trail=[],pt.grace=2,pt.alarm=!1,pt.alarmTimer=0,It="flying",Or(),nc&&K("touch").classList.remove("hidden"),Pr=!1,zt.jump(),zt.playSong("flight"),Gn(Ot("contGo"),2)}function kf(i,t,e){for(const n of Cc.show(Be,i,t,e))zt.firework(n)}function YM(){kf(8,!0,.35)}function Lr(){It==="flying"?(It="paused",kn("pause"),zt.update(0,{})):It==="paused"&&(It="flying",Or())}let mr=!1;async function bi(i){mr||(Cn.available&&(mr=!0,Or(),await Cn.showInterstitial(3e3),mr=!1),i())}function $M(){const i=t=>!K(t).classList.contains("hidden");Cn.setBanner(!mr&&(i("title")||i("howto")||i("pause")||i("result")))}function kn(i){Or(),K(i).classList.remove("hidden")}function Or(){document.querySelectorAll(".screen").forEach(i=>i.classList.add("hidden"))}let Ru=0;function Gn(i,t=2.2){const e=K("message");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(Ru),Ru=setTimeout(()=>e.classList.remove("show"),t*1e3)}K("btn-start").addEventListener("click",()=>bi(Pc));K("btn-retry").addEventListener("click",()=>bi(Pc));K("btn-resume").addEventListener("click",()=>{It==="paused"&&bi(Lr)});K("btn-pause-title").addEventListener("click",()=>{It==="paused"&&bi(Ic)});K("btn-howto").addEventListener("click",()=>kn("howto"));K("btn-ranking").addEventListener("click",()=>{QM(),kn("ranking")});K("btn-to-title").addEventListener("click",()=>bi(Ic));K("btn-howto-ok").addEventListener("click",()=>bi(()=>kn("title")));K("btn-ranking-close").addEventListener("click",()=>kn("title"));K("btn-save").addEventListener("click",()=>{const i=K("result-name").value.trim()||Ot("anonymous");localStorage.setItem("kiyomizu-name",i),JM({name:i,cp:pt.checkpoints.length,dist:pt.distance,date:Date.now()}),K("btn-save").disabled=!0,K("btn-save").textContent=Ot("saved"),zt.turboGet()});K("btn-share").addEventListener("click",async()=>{const i=Ot("share",(pt.distance/1e3).toFixed(2),pt.checkpoints.length)+(pt.continues?Ot("continued",pt.continues):""),t=kM,e=Ql("Share");if(e){try{await e.share({title:document.title,text:`${i} #${Ot("hashtag")}`,url:t,dialogTitle:Ot("shareDialog")})}catch{}return}open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(i)}&url=${encodeURIComponent(t)}&hashtags=${encodeURIComponent(Ot("hashtag"))}`,"_blank")});document.addEventListener("visibilitychange",()=>{document.hidden?(It==="flying"&&Lr(),zt.suspend()):Cn.showing||zt.resume()});var Du;(Du=Ql("App"))==null||Du.addListener("backButton",()=>{if(mr||Cn.showing)return;const i=t=>!K(t).classList.contains("hidden");It==="flying"?Lr():It==="paused"?bi(Lr):Ve.active?Ls(!0):i("howto")?bi(()=>kn("title")):i("ranking")?kn("title"):It==="ready"?Ic():(It!=="over"||i("result"))&&Ql("App").exitApp()});bc&&(K("legal").classList.remove("hidden"),window.APP_VERSION&&window.APP_VERSION!=="dev"&&(K("build-info").textContent=window.APP_VERSION),Gs==="en"&&(K("privacy-link").href="https://techgym.jp/privacy-policy-en/"),Cn.initDone.then(()=>{Cn.privacyOptionsRequired&&K("ad-privacy").classList.remove("hidden")}),K("ad-privacy").addEventListener("click",i=>{i.preventDefault(),Cn.showPrivacyOptions()}),K("howto-list").innerHTML=Ot("howtoApp").map(([i,t])=>`<li><span class="key">${i}</span><span>${t}</span></li>`).join(""),K("btn-resume").textContent=Ot("resumeApp"));function Ic(){It="title",K("hud").classList.add("hidden"),K("touch").classList.add("hidden"),kn("title"),zt.playSong("title")}function Dc(){try{return JSON.parse(localStorage.getItem("kiyomizu-ranking")||"[]")}catch{return[]}}function KM(i){return i.sort((t,e)=>e.cp-t.cp||e.dist-t.dist)}function ZM(i,t){return Dc().filter(e=>e.cp>i||e.cp===i&&e.dist>t).length+1}function JM(i){const t=KM([...Dc(),i]).slice(0,10);try{localStorage.setItem("kiyomizu-ranking",JSON.stringify(t))}catch{}}function QM(){const i=K("ranking-body"),t=Dc();if(i.innerHTML="",!t.length){i.innerHTML=`<tr><td colspan="5">${Ot("noRecords")}</td></tr>`;return}t.forEach((e,n)=>{const s=document.createElement("tr"),r=new Date(e.date);[["🥇","🥈","🥉"][n]??`${n+1}`,e.name,`${e.cp}`,`${(e.dist/1e3).toFixed(2)} km`,`${r.getMonth()+1}/${r.getDate()}`].forEach((a,o)=>{const l=document.createElement("td");l.textContent=a,(o===2||o===3)&&(l.className="num"),s.appendChild(l)}),i.appendChild(s)})}function Gf(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`}let ic=999;function Hf(){zs(lt.position,ye);const i=Pe.heightAt(ye.lat,ye.lon);ic=ye.height-i,K("hud-agl").textContent=Math.max(0,ic).toFixed(0),K("hud-alt").textContent=ye.height.toFixed(0),K("hud-speed").textContent=(lt.speed*3.6).toFixed(0);const t=lt.velocity.y,e=K("hud-vario");e.textContent=`${t>=0?"+":""}${t.toFixed(1)}`,e.className=`v ${t>.3?"up":t<-2?"down":""}`,K("hud-cp").textContent=`${pt.checkpoints.length}`,K("hud-cp-total").textContent=`/ ${Ps.length}`,K("hud-dist").textContent=(pt.distance/1e3).toFixed(2),K("hud-time").textContent=Gf(pt.time),K("turbo-count").textContent=`×${Math.ceil(lt.jetFuel/to-1e-6)}`,K("turbo-fill").style.width=`${lt.jetFuel/Jl*100}%`,K("turbo-fill").style.backgroundSize=`${Jl/Math.max(lt.jetFuel,.01)*100}% 100%`,K("turbo").classList.toggle("active",lt.jetting),K("stall").classList.toggle("hidden",!(lt.stalled&&It==="flying"));const n=pt.oniDist;K("oni").classList.toggle("hidden",!Number.isFinite(n)),Number.isFinite(n)&&(K("oni-dist").textContent=(n>=1e3?`${(n/1e3).toFixed(1)}km`:`${n.toFixed(0)}m`)+(pt.chasers?Ot("chasing",pt.chasers):""),K("oni").classList.toggle("danger",pt.chasers>0));const s=pt.oniChase;K("danger").style.opacity=Number.isFinite(s)&&It==="flying"?Math.max(0,Math.min(1,(220-s)/170)):0;const r=On.nearest(lt.position);if(r){const a=r.item.group.position,o=Math.atan2(a.x-lt.position.x,-(a.z-lt.position.z)),l=Xe.radToDeg(o-lt.yaw)-90,c=a.y-lt.position.y;K("target-arrow").style.transform=`rotate(${l}deg)`,K("target-name").textContent=`🎈 ${qa(r.item.spot)}`,K("target-info").textContent=`${r.distance>=1e3?`${(r.distance/1e3).toFixed(2)}km`:`${r.distance.toFixed(0)}m`}  ${c>=0?"↑":"↓"}${Math.abs(c).toFixed(0)}m`}}const Vi=13,Ts=document.createElement("canvas");let sc={x:0,y:0};async function t1(){const i=Pe.bounds(),t=Math.floor(Ha(i.west,Vi)),e=Math.floor(Ha(i.east,Vi)-1e-9),n=Math.floor(Va(i.north,Vi)),s=Math.floor(Va(i.south,Vi)-1e-9);sc={x:t*256,y:n*256},Ts.width=(e-t+1)*256,Ts.height=(s-n+1)*256;const r=Ts.getContext("2d");r.fillStyle="#e8e4d8",r.fillRect(0,0,Ts.width,Ts.height);const a=[];for(let o=t;o<=e;o++)for(let l=n;l<=s;l++)a.push(Yl(`https://cyberjapandata.gsi.go.jp/xyz/pale/${Vi}/${o}/${l}.png`,()=>1e9).then(c=>r.drawImage(c,(o-t)*256,(l-n)*256)).catch(()=>{}));await Promise.all(a)}function e1(){const i=K("minimap"),t=i.getContext("2d"),e=i.width/220;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i.width,i.height),t.setTransform(e,0,0,e,0,0);const n=220,s=(l,c)=>({x:Ha(c,Vi)*256-sc.x,y:Va(l,Vi)*256-sc.y});zs(lt.position,ye);const r=s(ye.lat,ye.lon);t.save(),t.translate(n/2,n/2),t.rotate(-lt.yaw);const a=ii?1.15:.6,o=.6/a;t.scale(a,a),t.translate(-r.x,-r.y),t.drawImage(Ts,0,0);for(const l of On.items){const c=s(l.spot.lat,l.spot.lon);t.beginPath(),t.arc(c.x,c.y,(l.popped?5:9)*o,0,Math.PI*2),t.fillStyle=l.popped?"rgba(140,140,140,0.7)":"#ff4b5c",t.fill(),t.lineWidth=3*o,t.strokeStyle="#fff",t.stroke()}t.font=`${Math.round(28*o)}px sans-serif`,t.textAlign="center",t.textBaseline="middle";for(const l of zn.list){zs(l.pos,ye);const c=s(ye.lat,ye.lon);t.save(),t.translate(c.x,c.y),t.rotate(lt.yaw),l.state==="chase"&&(t.beginPath(),t.arc(0,0,20*o,0,Math.PI*2),t.fillStyle="rgba(255,40,40,0.55)",t.fill()),t.fillText("👹",0,0),t.restore()}t.restore(),t.save(),t.translate(n/2,n/2),t.beginPath(),t.moveTo(0,-14),t.lineTo(10,10),t.lineTo(0,5),t.lineTo(-10,10),t.closePath(),t.fillStyle="#2f80ed",t.fill(),t.strokeStyle="#fff",t.lineWidth=3,t.stroke(),t.restore(),t.save(),t.translate(n/2,n/2),t.rotate(-lt.yaw),t.fillStyle="#ff4b5c",t.font='900 20px "M PLUS Rounded 1c", sans-serif',t.textAlign="center",t.fillText("N",0,-n/2+26),t.restore()}function no(i){if(i===Ae.era)return;Ae.era=i,localStorage.setItem("kiyomizu-era",i),K("opt-era").value=i;const t=i==="showa";if(zt.setEra(i),!We||!qi){document.body.classList.toggle("showa",t),Pe.setEra(i),We==null||We.setEra(i);return}const e=K("timeslip");e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),zt.timeslip(),setTimeout(()=>{document.body.classList.toggle("showa",t),Pe.setEra(i),We.setEra(i),Hs.setVisible(t),qi.dispose(),qi=new Rf(Se,Ps,Pe,We,{perSpot:Ff,era:i})},350),(It==="flying"||It==="ready")&&Gn(Ot(t?"toShowa":"toNow"),1.8)}function n1(i){zs(lt.position,ye);const t=Pe.heightAt(ye.lat,ye.lon);if(ye.height<=t+.8)return{title:Ot("landed")[0],reason:Ot("landed")[1]};if(pt.grace>0||!We)return null;const e=Math.max(1,Math.ceil(i.distanceTo(lt.position)/1.5));for(let s=1;s<=e;s++)if(ec.lerpVectors(i,lt.position,s/e),We.hit(ec))return lt.velocity.y<0&&Math.abs(lt.velocity.y)>Math.hypot(lt.velocity.x,lt.velocity.z)*.15?{title:Ot("roof")[0],reason:Ot("roof")[1]}:{title:Ot("crash")[0],reason:Ot("crash")[1]};const n=Pe.bounds();return ye.lat>n.north||ye.lat<n.south||ye.lon<n.west||ye.lon>n.east?{title:Ot("outside")[0],reason:Ot("outside")[1]}:null}function i1(i){if(pt.checkpoints.push(qa(i.spot)),lt.addJet(to),zt.pop(),zt.turboGet(),kf(5,!1,.3),zt.cheer(),pt.checkpoints.length>=Ps.length){Lc(...Ot("clear"),!0);return}const t=On.items.filter(n=>!n.popped).map(n=>n.base),e=zn.addForCheckpoint(pt.checkpoints.length,lt,t);e&&setTimeout(()=>zt.oniLaugh(),900),Gn(Ot("checkpoint",qa(i.spot))+(e?Ot("moreOni",zn.list.length):""),2.6)}let Qo=0;const s1=K("danger");function Cu(i,t){const e=zn.update(i,lt,t);if(!t)return;e.spawned&&Gn(Ot("spawned",e.spawned.length),2.6),e.found.length&&(zt.oniLaugh(),Gn(e.found.length>1?Ot("foundMany",e.found.length):Ot("found"),1.8)),pt.oniDist=e.nearest,pt.oniChase=e.nearestChase,pt.chasers=zn.list.filter(s=>s.state==="chase").length;const n=pt.chasers>0;n!==pt.alarm&&(pt.alarm=n,pt.alarmTimer=0,n?zt.stopSong(.3):e.caught||zt.playSong("flight")),n&&(pt.alarmTimer-=i,pt.alarmTimer<=0&&(zt.alarm(),pt.alarmTimer=1.5)),Qo-=i,e.nearestChase<180&&Qo<=0&&(zt.heartbeat(),Qo=.35+e.nearestChase/180*.8),e.caught&&Lc(...Ot("caught"))}let Pu=performance.now(),tl=0,el=0;const Aa=new P;let Fa=0;const ki={cam:null},rc={};let ac=0;function Kn(i){const t=performance.now();rc[i]=(rc[i]??0)*.95+(t-ac)*.05,ac=t}function Vf(i){requestAnimationFrame(Vf),Fa++,ac=performance.now();const t=Math.min(.05,(i-Pu)/1e3);Pu=i;const e=i/1e3;let n=0;if(ki.cam)Be.position.copy(ki.cam.pos),Be.up.set(0,1,0),Be.lookAt(ki.cam.look);else if(It==="loading"||It==="title"){Au+=t;const a=Au*.06+2.2;Be.position.set(rn.x+Math.sin(a)*160,rn.y+45,rn.z+Math.cos(a)*160),Be.up.set(0,1,0),Be.lookAt(rn.x,rn.y-10,rn.z)}else if(It==="ready")Jo(t);else if(It==="flying"){const a=WM();Aa.copy(lt.position);const o=ur?ur.liftAt(lt.position):0,l=lt.jetFuel>0;lt.update(t,a,o),pt.time+=t,pt.grace-=t,pt.distance+=Math.hypot(lt.position.x-Aa.x,lt.position.z-Aa.z),pt.trailTimer-=t,pt.trailTimer<=0&&(pt.trailTimer=.5,pt.trail.push({pos:lt.position.clone(),yaw:lt.yaw}),pt.trail.length>10&&pt.trail.shift()),n=lt.velocity.y,lt.jetting&&!pt.wasJetting&&zt.jetStart(),a.jet&&l&&lt.jetFuel<=0&&(zt.jetEmpty(),Gn(Ot("noTurbo"),1.2)),pt.wasJetting=lt.jetting;const c=o>.8;c&&!pt.inThermal&&(zt.thermalEnter(),Gn(Ot("thermal"),1.2)),pt.inThermal=c;for(const u of On.update(t,e,lt.position))i1(u);Cu(t,!0);const h=It==="flying"&&n1(Aa);h&&Lc(h.title,h.reason),Jo(t)}else It==="over"&&Jo(t);Kn("sim"),It!=="flying"&&On&&On.update(t,e,new P(1e9,0,0)),It!=="flying"&&Cu(t,!1),s1.classList.toggle("alarm",It==="flying"&&!!(pt!=null&&pt.alarm)),$M(),Kn("oni"),ur&&ur.update(e),Cc.update(t),Kn("fx");const s=ki.cam?ki.cam.pos:It==="title"||It==="loading"?rn:lt.position;if(qi&&qi.update(t,e,s)&&It==="flying"&&zt.cheer(),Hs&&Hs.update(t,e),Kn("people"),zt.update(t,{speed:lt.speed,jetting:lt.jetting,active:It==="flying",vario:n,agl:ic,stalled:lt.stalled}),el-=t,el<=0&&(el=.5,Pe.update(s)),Kn("terrain"),We&&We.update(s),Kn("buildings"),Rr&&VM(s),On&&(It==="flying"||It==="ready")&&(tl-=t,tl<=0&&(tl=.1,Hf(),e1())),Kn("hud"),tc.position.copy(Be.position),ge.shadowMap.needsUpdate=Rr&&Fa%2===0,ge.setScissorTest(!1),ge.setViewport(0,0,innerWidth,innerHeight),ge.clear(),Tu(Cr!=="pilot"||It==="title"),ge.render(Se,Be),Kn("render"),(It==="ready"||It==="flying"||It==="over")&&gi&&!ki.cam){Fa%(ii?3:2)===1&&(Tu(!0),tc.position.copy(Xi.position),ge.shadowMap.needsUpdate=!1,ge.setRenderTarget(Ac),ge.clear(),ge.render(Se,Xi),ge.setRenderTarget(null));const{x:a,y:o,w:l,h:c}=gi;ge.setViewport(a,innerHeight-o-c,l,c),ge.render(Df,HM)}Kn("wipe")}async function r1(){requestAnimationFrame(Vf),We=new Tv(Se,"./buildings/",{near:Rr?1100:ii?500:700,far:ii?2600:3800,era:Ae.era}),await We.init(),await Pe.init(t=>{K("load-fill").style.width=`${(t*85).toFixed(0)}%`}),yM(Se,(t,e)=>Pe.heightAtWorld(t,e));const i=tM.map(t=>{const e=Te(t.lat,t.lon,0);return{...t,x:e.x,z:e.z,y:Pe.heightAtWorld(e.x,e.z)}});We.setLandmarks(i.filter(t=>!t.standalone),(t,e)=>Pe.heightAtWorld(t,e)),We.addStandalone(i.filter(t=>t.standalone)),BM(Se,(t,e)=>Pe.heightAtWorld(t,e)),On=new zv(Se,Ps,Pe),ur=new kv(Se,Gv,Pe),qi=new Rf(Se,Ps,Pe,We,{perSpot:Ff,era:Ae.era}),Hs=new vM(Se,(t,e)=>Pe.heightAtWorld(t,e)),Hs.setVisible(Ae.era==="showa"),zn.setWorld(Ps.map(t=>{const e=Te(t.lat,t.lon,0);return e.y=Pe.heightAtWorld(e.x,e.z),e}),(t,e)=>Pe.heightAtWorld(t,e)),pt=Bf(),await t1(),K("load-text").textContent=Ot("loadingTown");for(let t=0;t<300&&We.readyAround(rn,1500)<1;t++)K("load-fill").style.width=`${(85+We.readyAround(rn,1500)*15).toFixed(0)}%`,await new Promise(e=>setTimeout(e,100));await a1(),K("loading").classList.add("hidden"),K("title-buttons").classList.remove("hidden"),It="title",zt.ctx&&zt.playSong("title")}async function a1(){const i=zn.warmupObjects();i.position.copy(rn),Se.add(i);const t=()=>{const e=[],n=[];return Se.traverse(s=>{s.visible||(e.push(s),s.visible=!0),s.frustumCulled&&(n.push(s),s.frustumCulled=!1)}),()=>{for(const s of n)s.frustumCulled=!0;for(const s of e)s.visible=!1}};try{let e=t();const n=ge.compileAsync(Se,Be);e(),await n,e=t(),ge.render(Se,Be),e()}catch(e){console.warn("warmup",e)}Se.remove(i)}r1().catch(i=>{console.error(i),K("load-text").textContent=Ot("loadFailed",i.message)});window.__kiyomizu={debug:ki,geoToWorld:Te,glider:lt,ads:Cn,terrain:Pe,camera:Be,startGame:Pc,jump:ja,get state(){return It},get flight(){return pt},get frames(){return Fa},buildings:()=>We,balloons:()=>On,fireworks:Cc,sound:zt,oni:zn,Vector3:P,prof:rc,renderer:ge,people:()=>qi,showa:()=>Hs,setEra:no};
