(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="180",nd=0,Vc=1,id=2,zu=1,ku=2,Jn=3,Ti=0,tn=1,wn=2,yi=0,As=1,Rs=2,Wc=3,Xc=4,sd=5,Gi=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,fd=203,al=204,ol=205,dd=206,pd=207,md=208,gd=209,_d=210,xd=211,vd=212,Md=213,yd=214,ll=0,cl=1,hl=2,Ds=3,ul=4,fl=5,dl=6,pl=7,$a=0,Sd=1,wd=2,Si=0,Ed=1,Td=2,bd=3,Gu=4,Ad=5,Rd=6,Cd=7,Hu=300,Us=301,Fs=302,ml=303,gl=304,Ka=306,_l=1e3,Wi=1001,xl=1002,mn=1003,Pd=1004,Gr=1005,Fn=1006,ao=1007,vi=1008,zn=1009,Vu=1010,Wu=1011,_r=1012,fc=1013,ji=1014,Nn=1015,Ir=1016,dc=1017,pc=1018,xr=1020,Xu=35902,qu=35899,ju=1021,Yu=1022,Cn=1023,vr=1026,Mr=1027,mc=1028,gc=1029,$u=1030,_c=1031,xc=1033,Pa=33776,La=33777,Ia=33778,Da=33779,vl=35840,Ml=35841,yl=35842,Sl=35843,wl=36196,El=37492,Tl=37496,bl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Ll=37813,Il=37814,Dl=37815,Ul=37816,Fl=37817,Nl=37818,Ol=37819,Bl=37820,zl=37821,kl=36492,Gl=36494,Hl=36495,Vl=36283,Wl=36284,Xl=36285,ql=36286,Ld=3200,Id=3201,Za=0,Dd=1,xi="",Ne="srgb",Ns="srgb-linear",Oa="linear",ue="srgb",Qi=7680,qc=519,Ud=512,Fd=513,Nd=514,Ku=515,Od=516,Bd=517,zd=518,kd=519,jl=35044,jc=35048,Yc="300 es",On=2e3,Ba=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const pr=Math.PI/180,yr=180/Math.PI;function ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function Gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Hd(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function Vd(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function Wd(i,t=1){return t-Math.abs(vc(i,t*2)-t)}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yd(i,t){return i+Math.random()*(t-i)}function $d(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zd(i){return i*pr}function Jd(i){return i*yr}function Qd(i){return(i&i-1)===0&&i!==0}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:pr,RAD2DEG:yr,generateUUID:ei,clamp:Zt,euclideanModulo:vc,mapLinear:Gd,inverseLerp:Hd,lerp:mr,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:jd,randFloat:Yd,randFloatSpread:$d,seededRandom:Kd,degToRad:Zd,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:ce,denormalize:Rn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*x,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,d*M);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}const _=o*M;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new L,Kc=new Dr;class jt{constructor(t,e,n,s,r,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],M=s[1],v=s[4],_=s[7],T=s[2],b=s[5],A=s[8];return r[0]=a*x+o*M+l*T,r[3]=a*m+o*v+l*b,r[6]=a*d+o*_+l*A,r[1]=c*x+h*M+u*T,r[4]=c*m+h*v+u*b,r[7]=c*d+h*_+u*A,r[2]=f*x+p*M+g*T,r[5]=f*m+p*v+g*b,r[8]=f*d+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new jt;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=za("canvas");return i.style.display="block",i}const Zc={};function Sr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function sp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Jc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){const i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:t,whitePoint:n,transfer:Oa,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const re=rp();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class ap{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=za("canvas")),ts.width=t.width,ts.height=t.height;const s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=za("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let op=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ap.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;const ho=new L;class Ke extends Xs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Wi,s=Wi,r=Fn,a=vi,o=Cn,l=zn,c=Ke.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ei(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _l:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _l:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Hu;Ke.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(p+1)/2,T=(d+1)/2,b=(h+f)/4,A=(u+x)/4,P=(g+m)/4;return v>_&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=A/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends Xs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ke(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Mc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends cp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ju extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Vr.subVectors(this.max,$s),es.subVectors(t.a,$s),ns.subVectors(t.b,$s),is.subVectors(t.c,$s),ri.subVectors(ns,es),ai.subVectors(is,ns),Pi.subVectors(es,is);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!uo(e,es,ns,is,Vr)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,es,ns,is,Vr))?!1:(Wr.crossVectors(ri,ai),e=[Wr.x,Wr.y,Wr.z],uo(e,es,ns,is,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Hr=new $i,es=new L,ns=new L,is=new L,ri=new L,ai=new L,Pi=new L,$s=new L,Vr=new L,Wr=new L,Li=new L;function uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const up=new $i,Ks=new L,fo=new L;class si{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):up.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(fo)),this.expandByPoint(Ks.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const jn=new L,po=new L,Xr=new L,oi=new L,mo=new L,qr=new L,go=new L;class Ur{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(po);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),o=oi.dot(this.direction),l=-oi.dot(Xr),c=oi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(po).addScaledVector(Xr,f),p}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){mo.subVectors(e,t),qr.subVectors(n,t),go.crossVectors(mo,qr);let a=this.direction.dot(go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const l=o*this.direction.dot(qr.crossVectors(oi,qr));if(l<0)return null;const c=o*this.direction.dot(mo.cross(oi));if(c<0||l+c>a)return null;const h=-o*oi.dot(go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,x,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,dp)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),jr.crossVectors(hn,li),s[0]=li.x,s[4]=jr.x,s[8]=hn.x,s[1]=li.y,s[5]=jr.y,s[9]=hn.y,s[2]=li.z,s[6]=jr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],v=n[7],_=n[11],T=n[15],b=s[0],A=s[4],P=s[8],w=s[12],y=s[1],C=s[5],U=s[9],O=s[13],k=s[2],W=s[6],B=s[10],Z=s[14],G=s[3],st=s[7],ht=s[11],_t=s[15];return r[0]=a*b+o*y+l*k+c*G,r[4]=a*A+o*C+l*W+c*st,r[8]=a*P+o*U+l*B+c*ht,r[12]=a*w+o*O+l*Z+c*_t,r[1]=h*b+u*y+f*k+p*G,r[5]=h*A+u*C+f*W+p*st,r[9]=h*P+u*U+f*B+p*ht,r[13]=h*w+u*O+f*Z+p*_t,r[2]=g*b+x*y+m*k+d*G,r[6]=g*A+x*C+m*W+d*st,r[10]=g*P+x*U+m*B+d*ht,r[14]=g*w+x*O+m*Z+d*_t,r[3]=M*b+v*y+_*k+T*G,r[7]=M*A+v*C+_*W+T*st,r[11]=M*P+v*U+_*B+T*ht,r[15]=M*w+v*O+_*Z+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,v=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,_=h*x*c-g*u*c+g*o*p-a*x*p-h*o*d+a*u*d,T=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,b=e*M+n*v+s*_+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=M*A,t[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*A,t[4]=v*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*d-e*u*d)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=T*A,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,x=a*h,m=a*u,d=o*u,M=l*c,v=l*h,_=l*u,T=n.x,b=n.y,A=n.z;return s[0]=(1-(x+d))*T,s[1]=(p+_)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(f+d))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+v)*A,s[9]=(m-M)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,h=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ba)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===On)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ba)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new L,bn=new ee,fp=new L(0,0,0),dp=new L(1,1,1),li=new L,jr=new L,hn=new L,th=new ee,eh=new Dr;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pp=0;const nh=new L,rs=new Dr,Yn=new ee,Yr=new L,Zs=new L,mp=new L,gp=new Dr,ih=new L(1,0,0),sh=new L(0,1,0),rh=new L(0,0,1),ah={type:"added"},_p={type:"removed"},as={type:"childadded",child:null},_o={type:"childremoved",child:null};class de extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new gn,n=new Dr,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Zs,Yr,this.up):Yn.lookAt(Yr,Zs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Yn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new L,$n=new L,xo=new L,Kn=new L,os=new L,ls=new L,oh=new L,vo=new L,Mo=new L,yo=new L,So=new De,wo=new De,Eo=new De;class En{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),$n.subVectors(n,e),xo.subVectors(t,e);const a=An.dot(An),o=An.dot($n),l=An.dot(xo),c=$n.dot($n),h=$n.dot(xo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return So.setScalar(0),wo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),$n.subVectors(t,e),An.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),ls.subVectors(r,n),vo.subVectors(t,n);const l=os.dot(vo),c=ls.dot(vo);if(l<=0&&c<=0)return e.copy(n);Mo.subVectors(t,s);const h=os.dot(Mo),u=ls.dot(Mo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);yo.subVectors(t,r);const p=os.dot(yo),g=ls.dot(yo);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return oh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(oh,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},$r={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=vc(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return re.workingToColorSpace($e.copy(this),t),Math.round(Zt($e.r*255,0,255))*65536+Math.round(Zt($e.g*255,0,255))*256+Math.round(Zt($e.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ne){re.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL($r);const n=mr(ci.h,$r.h,e),s=mr(ci.s,$r.s,e),r=mr(ci.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new It;It.NAMES=tf;let xp=0;class Vn extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=As,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qs extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new L,Kr=new kt;let vp=0;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}}class ef extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nf extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mp=0;const vn=new ee,bo=new de,cs=new L,un=new $i,Js=new $i,He=new L;class xe extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?nf:ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(un.min,Js.min),un.expandByPoint(He),He.addVectors(un.max,Js.max),un.expandByPoint(He)):(un.expandByPoint(Js.min),un.expandByPoint(Js.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),He.add(cs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,f=new kt,p=new kt,g=new kt,x=new L,m=new L;function d(P,w,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(x),o[w].add(x),o[y].add(x),l[P].add(m),l[w].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,U=y.count;for(let O=C,k=C+U;O<k;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const v=new L,_=new L,T=new L,b=new L;function A(P){T.fromBufferAttribute(s,P),b.copy(T);const w=o[P];v.copy(w),v.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(b,w);const C=_.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,U=y.count;for(let O=C,k=C+U;O<k;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new ee,Ii=new Ur,Zr=new si,ch=new L,Jr=new L,Qr=new L,ta=new L,Ao=new L,ea=new L,hh=new L,na=new L;class xt extends de{constructor(t=new xe,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ao.fromBufferAttribute(u,t),a?ea.addScaledVector(Ao,h):ea.addScaledVector(Ao.sub(e),h))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Zr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Zr,ch)===null||Ii.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(lh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,T=v;_<T;_+=3){const b=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);s=ia(this,d,t,n,c,h,u,b,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=ia(this,a,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,T=v;_<T;_+=3){const b=_,A=_+1,P=_+2;s=ia(this,d,t,n,c,h,u,b,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=m,v=m+1,_=m+2;s=ia(this,a,t,n,c,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yp(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ti,o),l===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Jr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,ta);const h=yp(i,t,e,n,Jr,Qr,ta,hh);if(h){const u=new L;En.getBarycoord(hh,Jr,Qr,ta,u),s&&(h.uv=En.getInterpolatedAttribute(s,o,l,c,u,new kt)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,u,new kt)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};En.getNormal(Jr,Qr,ta,f.normal),h.face=f,h.barycoord=u}return h}class at extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(x,m,d,M,v,_,T,b,A,P,w){const y=_/A,C=T/P,U=_/2,O=T/2,k=b/2,W=A+1,B=P+1;let Z=0,G=0;const st=new L;for(let ht=0;ht<B;ht++){const _t=ht*C-O;for(let zt=0;zt<W;zt++){const Qt=zt*y-U;st[x]=Qt*M,st[m]=_t*v,st[d]=k,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[d]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(zt/A),u.push(1-ht/P),Z+=1}}for(let ht=0;ht<P;ht++)for(let _t=0;_t<A;_t++){const zt=f+_t+W*ht,Qt=f+_t+W*(ht+1),pe=f+(_t+1)+W*(ht+1),ie=f+(_t+1)+W*ht;l.push(zt,Qt,ie),l.push(Qt,pe,ie),G+=6}o.addGroup(p,G,w),p+=G,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Os(i[e]);for(const s in n)t[s]=n[s]}return t}function Sp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const wp={clone:Os,merge:Qe};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rf extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new L,uh=new kt,fh=new kt;class dn extends rf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,uh,fh),e.subVectors(fh,uh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class bp extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new dn(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new dn(hs,us,t,e);a.layers=this.layers,this.add(a);const o=new dn(hs,us,t,e);o.layers=this.layers,this.add(o);const l=new dn(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new dn(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class af extends Ke{constructor(t=[],e=Us,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ap extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new af(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:yi});r.uniforms.tEquirect.value=e;const a=new xt(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Fn),new bp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Re extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class yc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new yc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class of extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new L;class ka{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ka(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bs extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const Qs=new L,ds=new L,ps=new L,ms=new kt,tr=new kt,lf=new ee,sa=new L,er=new L,ra=new L,dh=new kt,Co=new kt,ph=new kt;class wr extends de{constructor(t=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cp(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new ka(n,3,0,!1)),fs.setAttribute("uv",new ka(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new kt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;aa(sa.set(-.5,-.5,0),ps,a,ds,s,r),aa(er.set(.5,-.5,0),ps,a,ds,s,r),aa(ra.set(.5,.5,0),ps,a,ds,s,r),dh.set(0,0),Co.set(1,0),ph.set(1,1);let o=t.ray.intersectTriangle(sa,er,ra,!1,Qs);if(o===null&&(aa(er.set(-.5,.5,0),ps,a,ds,s,r),Co.set(0,1),o=t.ray.intersectTriangle(sa,ra,er,!1,Qs),o===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:En.getInterpolation(Qs,sa,er,ra,dh,Co,ph,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function aa(i,t,e,n,s,r){ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ms.x-s*ms.y,tr.y=s*ms.x+r*ms.y):tr.copy(ms),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(lf)}class Pp extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=mn,h=mn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new ee,gh=new ee,oa=[],_h=new $i,Lp=new ee,nr=new xt,ir=new si;class wi extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),_h.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(_h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),ir.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),gh.multiplyMatrices(n,gs),nr.matrixWorld=gh,nr.raycast(t,oa);for(let a=0,o=oa.length;a<o;a++){const l=oa[a];l.instanceId=r,l.object=this,e.push(l)}oa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pp(new Float32Array(s*this.count),s,this.count,mc,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Po=new L,Ip=new L,Dp=new jt;class Bi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dp.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new si,Up=new kt(.5,.5),la=new L;class Sc{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],M=r[12],v=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,d-g,T-M).normalize(),s[1].setComponents(c+a,p+h,d+g,T+M).normalize(),s[2].setComponents(c+o,p+u,d+x,T+v).normalize(),s[3].setComponents(c-o,p-u,d-x,T-v).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,p-f,d-m,T-_).normalize();else if(s[4].setComponents(c-l,p-f,d-m,T-_).normalize(),e===On)s[5].setComponents(c+l,p+f,d+m,T+_).normalize();else if(e===Ba)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=Up.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(la.x=s.normal.x>0?t.max.x:t.min.x,la.y=s.normal.y>0?t.max.y:t.min.y,la.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cf extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ga=new L,Ha=new L,xh=new ee,sr=new Ur,ca=new si,Lo=new L,vh=new L;class Fp extends de{constructor(t=new xe,e=new cf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Ha);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;xh.copy(s).invert(),sr.copy(t.ray).applyMatrix4(xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=h.getX(x),M=h.getX(x+1),v=ha(this,t,sr,l,d,M,x);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),d=ha(this,t,sr,l,x,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=ha(this,t,sr,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=ha(this,t,sr,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ha(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,Ha,Lo,vh)>n)return;Lo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Lo);if(!(c<t.near||c>t.far))return{distance:c,point:vh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Fr extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mh=new ee,Yl=new Ur,ua=new si,fa=new L;class Ja extends de{constructor(t=new xe,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Mh.copy(s).invert(),Yl.copy(t.ray).applyMatrix4(Mh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);fa.fromBufferAttribute(u,m),yh(fa,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++)fa.fromBufferAttribute(u,g),yh(fa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yh(i,t,e,n,s,r,a){const o=Yl.distanceSqToPoint(i);if(o<e){const l=new L;Yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wn extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hf extends Ke{constructor(t,e,n=ji,s,r,a,o=mn,l=mn,c,h=vr,u=1){if(h!==vr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class uf extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ti extends xe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,g=n*2+r,x=s+1,m=new L,d=new L;for(let M=0;M<=g;M++){let v=0,_=0,T=0,b=0;if(M<=n){const w=M/n,y=w*Math.PI/2;_=-h-t*Math.cos(y),T=t*Math.sin(y),b=-t*Math.cos(y),v=w*u}else if(M<=n+r){const w=(M-n)/r;_=-h+w*e,T=t,b=0,v=u+w*f}else{const w=(M-n-r)/n,y=w*Math.PI/2;_=h+t*Math.sin(y),T=t*Math.cos(y),b=t*Math.sin(y),v=u+f+w*u}const A=Math.max(0,Math.min(1,v/p));let P=0;M===0?P=.5/s:M===g&&(P=-.5/s);for(let w=0;w<=s;w++){const y=w/s,C=y*Math.PI*2,U=Math.sin(C),O=Math.cos(C);d.x=-T*O,d.y=_,d.z=T*U,o.push(d.x,d.y,d.z),m.set(-T*O,b,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+P,A)}if(M>0){const w=(M-1)*x;for(let y=0;y<s;y++){const C=w+y,U=w+y+1,O=M*x+y,k=M*x+y+1;a.push(C,U,O),a.push(U,k,O)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class wc extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function M(){const _=new L,T=new L;let b=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const w=[],y=P/r,C=y*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,k=O*l+o,W=Math.sin(k),B=Math.cos(k);T.x=C*W,T.y=-y*n+m,T.z=C*B,u.push(T.x,T.y,T.z),_.set(W,A,B).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-y),w.push(g++)}x.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const y=x[w][P],C=x[w+1][P],U=x[w+1][P+1],O=x[w][P+1];(t>0||w!==0)&&(h.push(y,C,O),b+=3),(e>0||w!==r-1)&&(h.push(C,U,O),b+=3)}c.addGroup(d,b,0),d+=b}function v(_){const T=g,b=new kt,A=new L;let P=0;const w=_===!0?t:e,y=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const k=U/s*l+o,W=Math.cos(k),B=Math.sin(k);A.x=w*B,A.y=m*y,A.z=w*W,u.push(A.x,A.y,A.z),f.push(0,y,0),b.x=W*.5+.5,b.y=B*.5*y+.5,p.push(b.x,b.y),g++}for(let U=0;U<s;U++){const O=T+U,k=C+U;_===!0?h.push(k,k+1,O):h.push(k+1,k,O),P+=3}c.addGroup(d,P,_===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends Xt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ei(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ec extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new L,_=new L,T=new L;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],_),p(e[b+2],T),l(v,_,T,M)}function l(M,v,_,T){const b=T+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const w=M.clone().lerp(_,P/b),y=v.clone().lerp(_,P/b),C=b-P;for(let U=0;U<=C;U++)U===0&&P===b?A[P][U]=w:A[P][U]=w.clone().lerp(y,U/C)}for(let P=0;P<b;P++)for(let w=0;w<2*(b-P)-1;w++){const y=Math.floor(w/2);w%2===0?(f(A[P][y+1]),f(A[P+1][y]),f(A[P][y])):(f(A[P][y+1]),f(A[P+1][y+1]),f(A[P+1][y]))}}function c(M){const v=new L;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const M=new L;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const _=m(M)/2/Math.PI+.5,T=d(M)/Math.PI+.5;a.push(_,1-T)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const v=a[M+0],_=a[M+2],T=a[M+4],b=Math.max(v,_,T),A=Math.min(v,_,T);b>.9&&A<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const M=new L,v=new L,_=new L,T=new L,b=new kt,A=new kt,P=new kt;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),b.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),T.copy(M).add(v).add(_).divideScalar(3);const C=m(T);x(b,y+0,M,C),x(A,y+2,v,C),x(P,y+4,_,C)}}function x(M,v,_,T){T<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.vertices,t.indices,t.radius,t.details)}}function Np(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ff(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gp(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Er(r,a,e,o,l,c,0),a}function ff(i,t,e,n,s){let r;if(s===Jp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Sh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Sh(a/n|0,i[a],i[a+1],r);return r&&zs(r,r.next)&&(br(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||be(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Bp(i,n,s,r):Op(i)){t.push(l.i,i.i,c.i),br(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zp(Yi(i),t),Er(i,t,e,n,s,r,2)):a===2&&kp(i,t,e,n,s,r):Er(Yi(i),t,e,n,s,r,1);break}}}function Op(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&cr(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bp(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),x=Math.max(o,l,c),m=Math.max(h,u,f),d=$l(p,g,t,e,n),M=$l(x,m,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=d&&_&&_.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&cr(o,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&cr(o,h,l,u,c,f,_.x,_.y)&&be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&cr(o,h,l,u,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&cr(o,h,l,u,c,f,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!zs(n,s)&&pf(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),br(e),br(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function kp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$p(a,o)){let l=mf(a,o);a=Yi(a,a.next),l=Yi(l,l.next),Er(a,t,e,n,s,r,0),Er(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gp(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ff(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yp(c))}s.sort(Hp);for(let r=0;r<s.length;r++)e=Vp(s[r],e);return e}function Hp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vp(i,t){const e=Wp(i,t);if(!e)return t;const n=mf(e,i);return Yi(n,n.next),Yi(e,e.next)}function Wp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&df(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Xp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Xp(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function qp(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jp(s)}function jp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function df(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&df(i,t,e,n,s,r,a,o)}function $p(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kp(i,t)&&(Tr(i,t)&&Tr(t,i)&&Zp(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||zs(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function pf(i,t,e,n){const s=pa(be(i,t,e)),r=pa(be(i,t,n)),a=pa(be(e,n,i)),o=pa(be(e,n,t));return!!(s!==r&&a!==o||s===0&&da(i,e,t)||r===0&&da(i,n,t)||a===0&&da(e,i,n)||o===0&&da(e,t,n))}function da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pa(i){return i>0?1:i<0?-1:0}function Kp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Zp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mf(i,t){const e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sh(i,t,e,n){const s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qp{static triangulate(t,e,n=2){return Np(t,e,n)}}class Tc{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Tc.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wh(t),Eh(n,t);let a=t.length;e.forEach(wh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Eh(n,e[l]);const o=Qp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function wh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Eh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qa extends Ec{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qa(t.radius,t.detail)}}class Ki extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const M=d*f-a;for(let v=0;v<c;v++){const _=v*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const v=M+c*d,_=M+c*(d+1),T=M+1+c*(d+1),b=M+1+c*d;p.push(v,_,b),p.push(_,T,b)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}class oe extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const M=[],v=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+_,1-v),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const v=h[d][M+1],_=h[d][M],T=h[d+1][M],b=h[d+1][M+1];(d!==0||a>0)&&p.push(v,_,b),(d!==n-1||l<Math.PI)&&p.push(_,T,b)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yn extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends Vn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Le extends Vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class em extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gf extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class im extends gf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new ee,Th=new L,bh=new L;class sm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bc extends rf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rm extends sm{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends gf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class om extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lm{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Ah(i,t,e,n){const s=cm(n);switch(e){case ju:return i*t;case mc:return i*t/s.components*s.byteLength;case gc:return i*t/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case Yu:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case xc:return i*t*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case yl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kl:case Gl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cm(i){switch(i){case zn:case Vu:return{byteLength:1,components:1};case _r:case Wu:case Ir:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case ji:case fc:case Nn:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _f(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hm(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,c0=`struct PhysicalMaterial {
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
}`,h0=`
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Og=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:um,alphahash_pars_fragment:fm,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:xm,batching_pars_vertex:vm,batching_vertex:Mm,begin_vertex:ym,beginnormal_vertex:Sm,bsdfs:wm,iridescence_fragment:Em,bumpmap_pars_fragment:Tm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Im,color_vertex:Dm,common:Um,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:zm,emissivemap_pars_fragment:km,colorspace_fragment:Gm,colorspace_pars_fragment:Hm,envmap_fragment:Vm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:jm,fog_vertex:Ym,fog_pars_vertex:$m,fog_fragment:Km,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:h0,lights_fragment_maps:u0,lights_fragment_end:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:_0,map_pars_fragment:x0,map_particle_fragment:v0,map_particle_pars_fragment:M0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:S0,morphinstance_vertex:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:b0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:L0,normal_vertex:I0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:O0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:k0,project_vertex:G0,dithering_fragment:H0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:j0,shadowmap_vertex:Y0,shadowmask_pars_fragment:$0,skinbase_vertex:K0,skinning_pars_vertex:Z0,skinning_vertex:J0,skinnormal_vertex:Q0,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:fg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:_g,distanceRGBA_vert:xg,distanceRGBA_frag:vg,equirect_vert:Mg,equirect_frag:yg,linedashed_vert:Sg,linedashed_frag:wg,meshbasic_vert:Eg,meshbasic_frag:Tg,meshlambert_vert:bg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Lg,meshphong_vert:Ig,meshphong_frag:Dg,meshphysical_vert:Ug,meshphysical_frag:Fg,meshtoon_vert:Ng,meshtoon_frag:Og,points_vert:Bg,points_frag:zg,shadow_vert:kg,shadow_frag:Gg,sprite_vert:Hg,sprite_frag:Vg},ct={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Dn={basic:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([ct.points,ct.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([ct.common,ct.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([ct.sprite,ct.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([ct.lights,ct.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Dn.physical={uniforms:Qe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ma={r:0,b:0,g:0},Ui=new gn,Wg=new ee;function Xg(i,t,e,n,s,r,a){const o=new It(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1;const T=g(v);T===null?d(o,l):T&&T.isColor&&(d(T,1),_=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===Ka)?(h===void 0&&(h=new xt(new at(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Os(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(_.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Ui)),h.material.toneMapped=re.getTransfer(T.colorSpace)!==ue,(u!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new xt(new Ki(2,2),new ii({name:"BackgroundMaterial",uniforms:Os(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(T.colorSpace)!==ue,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,_){v.getRGB(ma,sf(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:x,addToRenderList:m,dispose:M}}function qg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,C,U,O,k){let W=!1;const B=u(O,U,C);r!==B&&(r=B,c(r.object)),W=p(y,O,U,k),W&&g(y,O,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,C,U,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,U){const O=U.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let W=k[C.id];W===void 0&&(W={},k[C.id]=W);let B=W[O];return B===void 0&&(B=f(l()),W[O]=B),B}function f(y){const C=[],U=[],O=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,C,U,O){const k=r.attributes,W=C.attributes;let B=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){const ht=k[G];let _t=W[G];if(_t===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ht===void 0||ht.attribute!==_t||_t&&ht.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(y,C,U,O){const k={},W=C.attributes;let B=0;const Z=U.getAttributes();for(const G in Z)if(Z[G].location>=0){let ht=W[G];ht===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const _t={};_t.attribute=ht,ht&&ht.data&&(_t.data=ht.data),k[G]=_t,B++}r.attributes=k,r.attributesNum=B,r.index=O}function x(){const y=r.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){const U=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;U[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),k[y]!==C&&(i.vertexAttribDivisor(y,C),k[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==y[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function v(y,C,U,O,k,W,B){B===!0?i.vertexAttribIPointer(y,C,U,k,W):i.vertexAttribPointer(y,C,U,O,k,W)}function _(y,C,U,O){x();const k=O.attributes,W=U.getAttributes(),B=C.defaultAttributeValues;for(const Z in W){const G=W[Z];if(G.location>=0){let st=k[Z];if(st===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const ht=st.normalized,_t=st.itemSize,zt=t.get(st);if(zt===void 0)continue;const Qt=zt.buffer,pe=zt.type,ie=zt.bytesPerElement,Y=pe===i.INT||pe===i.UNSIGNED_INT||st.gpuType===fc;if(st.isInterleavedBufferAttribute){const Q=st.data,vt=Q.stride,Gt=st.offset;if(Q.isInstancedInterleavedBuffer){for(let Rt=0;Rt<G.locationSize;Rt++)d(G.location+Rt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Rt=0;Rt<G.locationSize;Rt++)m(G.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Rt=0;Rt<G.locationSize;Rt++)v(G.location+Rt,_t/G.locationSize,pe,ht,vt*ie,(Gt+_t/G.locationSize*Rt)*ie,Y)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)d(G.location+Q,st.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Q=0;Q<G.locationSize;Q++)v(G.location+Q,_t/G.locationSize,pe,ht,_t*ie,_t/G.locationSize*Q*ie,Y)}}else if(B!==void 0){const ht=B[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}M()}function T(){P();for(const y in n){const C=n[y];for(const U in C){const O=C[U];for(const k in O)h(O[k].object),delete O[k];delete C[U]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const O=C[U];for(const k in O)h(O[k].object),delete O[k];delete C[U]}delete n[y.id]}function A(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const O=U[y.id];for(const k in O)h(O[k].object),delete O[k];delete U[y.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function jg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function $g(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let _=d.clippingState||null;l.value=_,_=h(g,f,v,p);for(let T=0;T!==v;++T)_[T]=e[T];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==x;++v,_+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Kg(i){let t=new WeakMap;function e(a,o){return o===ml?a.mapping=Us:o===gl&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ml||o===gl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ap(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const bs=4,Rh=[.125,.215,.35,.446,.526,.582],Hi=20,Do=new bc,Ch=new It;let Uo=null,Fo=0,No=0,Oo=!1;const zi=(1+Math.sqrt(5))/2,_s=1/zi,Ph=[new L(-zi,_s,0),new L(zi,_s,0),new L(-_s,0,zi),new L(_s,0,zi),new L(0,zi,-_s),new L(0,zi,_s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Zg=new L;class Lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Zg}=r;Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,Fo,No),this._renderer.xr.enabled=Oo,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ir,format:Cn,colorSpace:Ns,depthBuffer:!1},s=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=Qg(r,t,e)}return s}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,s,r){const l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new qs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new xt(new at,x);let d=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,d=!0):(x.color.copy(Ch),d=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const T=this._cubeSize;ga(s,_*T,v>2?T:0,T,T),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ga(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Do)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ph[(s-r-1)%Ph.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const d=[];let M=0;for(let A=0;A<Hi;++A){const P=A/x,w=Math.exp(-P*P/2);d.push(w),A===0?M+=w:A<m&&(M+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[s],T=3*_*(s>v-bs?s-v+bs:0),b=4*(this._cubeSize-_);ga(e,T,b,3*_,2*_),l.setRenderTarget(e),l.render(u,Do)}}function Jg(i){const t=[],e=[],n=[];let s=i;const r=i-bs+1+Rh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=Rh[a-i+bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(w,x*g*b),v.set(f,m*g*b);const y=[b,b,b,b,b,b];_.set(y,d*g*b)}const T=new xe;T.setAttribute("position",new Ie(M,x)),T.setAttribute("uv",new Ie(v,m)),T.setAttribute("faceIndex",new Ie(_,d)),t.push(T),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qg(i,t,e){const n=new Float32Array(Hi),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Dh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Uh(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function t_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ml||l===gl,h=l===Us||l===Fs;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Lh(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Lh(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function e_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n_(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let v=0,_=M.length;v<_;v+=3){const T=M[v+0],b=M[v+1],A=M[v+2];f.push(T,b,b,A,A,T)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const T=v+0,b=v+1,A=v+2;f.push(T,b,b,A,A,T)}}else return;const m=new(Zu(f)?nf:ef)(f,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*x[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function r_(i,t,e){const n=new WeakMap,s=new De;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const b=new Float32Array(_*T*4*u),A=new Ju(b,_,T,u);A.type=Nn,A.needsUpdate=!0;const P=v*4;for(let y=0;y<u;y++){const C=m[y],U=d[y],O=M[y],k=_*T*4*y;for(let W=0;W<C.count;W++){const B=W*P;p===!0&&(s.fromBufferAttribute(C,W),b[k+B+0]=s.x,b[k+B+1]=s.y,b[k+B+2]=s.z,b[k+B+3]=0),g===!0&&(s.fromBufferAttribute(U,W),b[k+B+4]=s.x,b[k+B+5]=s.y,b[k+B+6]=s.z,b[k+B+7]=0),x===!0&&(s.fromBufferAttribute(O,W),b[k+B+8]=s.x,b[k+B+9]=s.y,b[k+B+10]=s.z,b[k+B+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new kt(_,T)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function a_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const xf=new Ke,Fh=new hf(1,1),vf=new Ju,Mf=new hp,yf=new af,Nh=[],Oh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function u_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),ke(e,n)}}function f_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),ke(e,n)}}function d_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),ke(e,n)}}function p_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function g_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function __(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function x_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function S_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=Ku,r=Fh):r=xf,e.setTexture2D(t||r,s)}function w_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mf,s)}function E_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yf,s)}function T_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vf,s)}function b_(i){switch(i){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return M_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}function A_(i,t){i.uniform1fv(this.addr,t)}function R_(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function C_(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function P_(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function L_(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I_(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D_(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U_(i,t){i.uniform1iv(this.addr,t)}function F_(i,t){i.uniform2iv(this.addr,t)}function N_(i,t){i.uniform3iv(this.addr,t)}function O_(i,t){i.uniform4iv(this.addr,t)}function B_(i,t){i.uniform1uiv(this.addr,t)}function z_(i,t){i.uniform2uiv(this.addr,t)}function k_(i,t){i.uniform3uiv(this.addr,t)}function G_(i,t){i.uniform4uiv(this.addr,t)}function H_(i,t,e){const n=this.cache,s=t.length,r=to(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||xf,r[a])}function V_(i,t,e){const n=this.cache,s=t.length,r=to(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mf,r[a])}function W_(i,t,e){const n=this.cache,s=t.length,r=to(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yf,r[a])}function X_(i,t,e){const n=this.cache,s=t.length,r=to(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vf,r[a])}function q_(i){switch(i){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return L_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return z_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b_(e.type)}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class $_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Gh(i,t){i.seq.push(t),i.map[t.id]=t}function K_(i,t,e){const n=i.name,s=n.length;for(Bo.lastIndex=0;;){const r=Bo.exec(n),a=Bo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gh(e,c===void 0?new j_(o,i,t):new Y_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new $_(o),Gh(e,u)),e=u}}}class Ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);K_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Hh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Z_=37297;let J_=0;function Q_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vh=new jt;function tx(i){re._getMatrix(Vh,re.workingColorSpace,i);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Oa:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(t),o)}else return r}function ex(i,t){const e=tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nx(i,t){let e;switch(t){case Ed:e="Linear";break;case Td:e="Reinhard";break;case bd:e="Cineon";break;case Gu:e="ACESFilmic";break;case Rd:e="AgX";break;case Cd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new L;function ix(){re.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function rx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hr(i){return i!==""}function Xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(ox,cx)}const lx=new Map;function cx(i,t){let e=$t[t];if(e===void 0){const n=lx.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(hx,ux)}function ux(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function dx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Fs:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function px(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function mx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case Sd:t="ENVMAP_BLENDING_MIX";break;case wd:t="ENVMAP_BLENDING_ADD";break}return t}function gx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _x(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fx(e),c=dx(e),h=px(e),u=mx(e),f=gx(e),p=sx(e),g=rx(r),x=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),d.length>0&&(d+=`
`)):(m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),d=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?$t.tonemapping_pars_fragment:"",e.toneMapping!==Si?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Zl(a),a=Xh(a,e),a=qh(a,e),o=Zl(o),o=Xh(o,e),o=qh(o,e),a=jh(a),o=jh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=M+m+a,_=M+d+o,T=Hh(s,s.VERTEX_SHADER,v),b=Hh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(b)||"",W=U.trim(),B=O.trim(),Z=k.trim();let G=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,b);else{const ht=Wh(s,T,"vertex"),_t=Wh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ht+`
`+_t)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||Z==="")&&(st=!1);st&&(C.diagnostics={runnable:G,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(T),s.deleteShader(b),P=new Ua(s,x),w=ax(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Z_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mx(t),e.set(t,n)),n}}class Mx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function yx(i,t,e,n,s,r,a){const o=new Qu,l=new vx,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,U,O){const k=U.fog,W=O.geometry,B=w.isMeshStandardMaterial?U.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),G=Z&&Z.mapping===Ka?Z.image.height:null,st=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=ht!==void 0?ht.length:0;let zt=0;W.morphAttributes.position!==void 0&&(zt=1),W.morphAttributes.normal!==void 0&&(zt=2),W.morphAttributes.color!==void 0&&(zt=3);let Qt,pe,ie,Y;if(st){const le=Dn[st];Qt=le.vertexShader,pe=le.fragmentShader}else Qt=w.vertexShader,pe=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const Q=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,te=!!w.map,je=!!w.matcap,I=!!Z,ve=!!w.aoMap,Wt=!!w.lightMap,Nt=!!w.bumpMap,St=!!w.normalMap,Me=!!w.displacementMap,wt=!!w.emissiveMap,Yt=!!w.metalnessMap,Ge=!!w.roughnessMap,Ue=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,z=w.iridescence>0,j=w.sheen>0,J=w.transmission>0,X=Ue&&!!w.anisotropyMap,At=R&&!!w.clearcoatMap,rt=R&&!!w.clearcoatNormalMap,Et=R&&!!w.clearcoatRoughnessMap,Tt=z&&!!w.iridescenceMap,nt=z&&!!w.iridescenceThicknessMap,dt=j&&!!w.sheenColorMap,Ut=j&&!!w.sheenRoughnessMap,bt=!!w.specularMap,ut=!!w.specularColorMap,qt=!!w.specularIntensityMap,D=J&&!!w.transmissionMap,it=J&&!!w.thicknessMap,ot=!!w.gradientMap,gt=!!w.alphaMap,tt=w.alphaTest>0,$=!!w.alphaHash,yt=!!w.extensions;let Vt=Si;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const me={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:pe,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:je,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:G,aoMap:ve,lightMap:Wt,bumpMap:Nt,normalMap:St,displacementMap:f&&Me,emissiveMap:wt,normalMapObjectSpace:St&&w.normalMapType===Dd,normalMapTangentSpace:St&&w.normalMapType===Za,metalnessMap:Yt,roughnessMap:Ge,anisotropy:Ue,anisotropyMap:X,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:Et,dispersion:S,iridescence:z,iridescenceMap:Tt,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:dt,sheenRoughnessMap:Ut,specularMap:bt,specularColorMap:ut,specularIntensityMap:qt,transmission:J,transmissionMap:D,thicknessMap:it,gradientMap:ot,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:tt,alphaHash:$,combine:w.combine,mapUv:te&&x(w.map.channel),aoMapUv:ve&&x(w.aoMap.channel),lightMapUv:Wt&&x(w.lightMap.channel),bumpMapUv:Nt&&x(w.bumpMap.channel),normalMapUv:St&&x(w.normalMap.channel),displacementMapUv:Me&&x(w.displacementMap.channel),emissiveMapUv:wt&&x(w.emissiveMap.channel),metalnessMapUv:Yt&&x(w.metalnessMap.channel),roughnessMapUv:Ge&&x(w.roughnessMap.channel),anisotropyMapUv:X&&x(w.anisotropyMap.channel),clearcoatMapUv:At&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(w.sheenRoughnessMap.channel),specularMapUv:bt&&x(w.specularMap.channel),specularColorMapUv:ut&&x(w.specularColorMap.channel),specularIntensityMapUv:qt&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:it&&x(w.thicknessMap.channel),alphaMapUv:gt&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||Ue),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(te||gt),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===ue,decodeVideoTextureEmissive:wt&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wn,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:yt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&w.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(y,w),v(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const y=g[w.type];let C;if(y){const U=Dn[y];C=wp.clone(U.uniforms)}else C=w.uniforms;return C}function T(w,y){let C;for(let U=0,O=h.length;U<O;U++){const k=h[U];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new _x(i,y,w,r),h.push(C)),C}function b(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function Sx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,g,x,m){const d=a(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,x,m){const d=a(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||wx),n.length>1&&n.sort(f||$h),s.length>1&&s.sort(f||$h)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ex(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kh,i.set(n,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function bx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ax=0;function Rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cx(i){const t=new Tx,e=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ee,a=new ee;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,M=0,v=0,_=0,T=0,b=0,A=0;c.sort(Rx);for(let w=0,y=c.length;w<y;w++){const C=c[w],U=C.color,O=C.intensity,k=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*O,u+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],O);A++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=B,p++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[x]=B;const Z=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,Z.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[x]=Z.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=W,_++}x++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(U).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Z=C.shadow,G=e.get(C);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(O),B.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=A,n.version=Ax++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const v=c[d];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Zh(i){const t=new Cx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Px(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zh(i),t.set(s,[o])):r>=a.length?(o=new Zh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`;function Dx(i,t,e){let n=new Sc;const s=new kt,r=new kt,a=new De,o=new em({depthPacking:Id}),l=new nm,c={},h=e.maxTextureSize,u={[Ti]:tn,[tn]:Ti,[wn]:wn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Lx,fragmentShader:Ix}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let d=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=d!==Jn&&this.type===Jn,k=d===Jn&&this.type!==Jn;for(let W=0,B=b.length;W<B;W++){const Z=b[W],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||O===!0||k===!0){const _t=this.type!==Jn?{minFilter:mn,magFilter:mn}:{};G.map!==null&&G.map.dispose(),G.map=new bi(s.x,s.y,_t),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let _t=0;_t<ht;_t++){const zt=G.getViewport(_t);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),U.viewport(a),G.updateMatrices(Z,_t),n=G.getFrustum(),_(A,P,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Jn&&M(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function M(b,A){const P=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,p,x,null)}function v(b,A,P,w){let y=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=y.uuid,O=A.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let W=k[O];W===void 0&&(W=y.clone(),k[O]=W,A.addEventListener("dispose",T)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,w===Jn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=P}return y}function _(b,A,P,w,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Jn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const O=t.update(b),k=b.material;if(Array.isArray(k)){const W=O.groups;for(let B=0,Z=W.length;B<Z;B++){const G=W[B],st=k[G.materialIndex];if(st&&st.visible){const ht=v(b,st,w,y);b.onBeforeShadow(i,b,A,P,O,ht,G),i.renderBufferDirect(P,null,O,ht,b,G),b.onAfterShadow(i,b,A,P,O,ht,G)}}}else if(k.visible){const W=v(b,k,w,y);b.onBeforeShadow(i,b,A,P,O,W,null),i.renderBufferDirect(P,null,O,W,b,null),b.onAfterShadow(i,b,A,P,O,W,null)}}const U=b.children;for(let O=0,k=U.length;O<k;O++)_(U[O],A,P,w,y)}function T(b){b.target.removeEventListener("dispose",T);for(const P in c){const w=c[P],y=b.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Ux={[ll]:cl,[hl]:dl,[ul]:pl,[Ds]:fl,[cl]:ll,[dl]:hl,[pl]:ul,[fl]:Ds};function Fx(i,t){function e(){let D=!1;const it=new De;let ot=null;const gt=new De(0,0,0,0);return{setMask:function(tt){ot!==tt&&!D&&(i.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){D=tt},setClear:function(tt,$,yt,Vt,me){me===!0&&(tt*=Vt,$*=Vt,yt*=Vt),it.set(tt,$,yt,Vt),gt.equals(it)===!1&&(i.clearColor(tt,$,yt,Vt),gt.copy(it))},reset:function(){D=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,ot=null,gt=null,tt=null;return{setReversed:function($){if(it!==$){const yt=t.get("EXT_clip_control");$?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=$;const Vt=tt;tt=null,this.setClear(Vt)}},getReversed:function(){return it},setTest:function($){$?Q(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function($){ot!==$&&!D&&(i.depthMask($),ot=$)},setFunc:function($){if(it&&($=Ux[$]),gt!==$){switch($){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=$}},setLocked:function($){D=$},setClear:function($){tt!==$&&(it&&($=1-$),i.clearDepth($),tt=$)},reset:function(){D=!1,ot=null,gt=null,tt=null,it=!1}}}function s(){let D=!1,it=null,ot=null,gt=null,tt=null,$=null,yt=null,Vt=null,me=null;return{setTest:function(le){D||(le?Q(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(le){it!==le&&!D&&(i.stencilMask(le),it=le)},setFunc:function(le,Xn,Ln){(ot!==le||gt!==Xn||tt!==Ln)&&(i.stencilFunc(le,Xn,Ln),ot=le,gt=Xn,tt=Ln)},setOp:function(le,Xn,Ln){($!==le||yt!==Xn||Vt!==Ln)&&(i.stencilOp(le,Xn,Ln),$=le,yt=Xn,Vt=Ln)},setLocked:function(le){D=le},setClear:function(le){me!==le&&(i.clearStencil(le),me=le)},reset:function(){D=!1,it=null,ot=null,gt=null,tt=null,$=null,yt=null,Vt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,T=null,b=null,A=new It(0,0,0),P=0,w=!1,y=null,C=null,U=null,O=null,k=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=Z>=2);let st=null,ht={};const _t=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Qt=new De().fromArray(_t),pe=new De().fromArray(zt);function ie(D,it,ot,gt){const tt=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ot;yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return $}const Y={};Y[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ds),Nt(!1),St(Vc),Q(i.CULL_FACE),ve(yi);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function vt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Gt(D,it){return u[D]!==it?(i.bindFramebuffer(D,it),u[D]=it,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Rt(D,it){let ot=p,gt=!1;if(D){ot=f.get(it),ot===void 0&&(ot=[],f.set(it,ot));const tt=D.textures;if(ot.length!==tt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let $=0,yt=tt.length;$<yt;$++)ot[$]=i.COLOR_ATTACHMENT0+$;ot.length=tt.length,gt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,gt=!0);gt&&i.drawBuffers(ot)}function te(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const je={[Gi]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};je[od]=i.MIN,je[ld]=i.MAX;const I={[cd]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[dd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(D,it,ot,gt,tt,$,yt,Vt,me,le){if(D===yi){x===!0&&(vt(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),D!==sd){if(D!==m||le!==w){if((d!==Gi||_!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,_=Gi),le)switch(D){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,v=null,T=null,b=null,A.set(0,0,0),P=0,m=D,w=le}return}tt=tt||it,$=$||ot,yt=yt||gt,(it!==d||tt!==_)&&(i.blendEquationSeparate(je[it],je[tt]),d=it,_=tt),(ot!==M||gt!==v||$!==T||yt!==b)&&(i.blendFuncSeparate(I[ot],I[gt],I[$],I[yt]),M=ot,v=gt,T=$,b=yt),(Vt.equals(A)===!1||me!==P)&&(i.blendColor(Vt.r,Vt.g,Vt.b,me),A.copy(Vt),P=me),m=D,w=!1}function Wt(D,it){D.side===wn?vt(i.CULL_FACE):Q(i.CULL_FACE);let ot=D.side===tn;it&&(ot=!ot),Nt(ot),D.blending===As&&D.transparent===!1?ve(yi):ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const gt=D.stencilWrite;o.setTest(gt),gt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function St(D){D!==nd?(Q(i.CULL_FACE),D!==C&&(D===Vc?i.cullFace(i.BACK):D===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),C=D}function Me(D){D!==U&&(B&&i.lineWidth(D),U=D)}function wt(D,it,ot){D?(Q(i.POLYGON_OFFSET_FILL),(O!==it||k!==ot)&&(i.polygonOffset(it,ot),O=it,k=ot)):vt(i.POLYGON_OFFSET_FILL)}function Yt(D){D?Q(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=i.TEXTURE0+W-1),st!==D&&(i.activeTexture(D),st=D)}function Ue(D,it,ot){ot===void 0&&(st===null?ot=i.TEXTURE0+W-1:ot=st);let gt=ht[ot];gt===void 0&&(gt={type:void 0,texture:void 0},ht[ot]=gt),(gt.type!==D||gt.texture!==it)&&(st!==ot&&(i.activeTexture(ot),st=ot),i.bindTexture(D,it||Y[D]),gt.type=D,gt.texture=it)}function R(){const D=ht[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function Ut(D){pe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function bt(D,it){let ot=c.get(it);ot===void 0&&(ot=new WeakMap,c.set(it,ot));let gt=ot.get(D);gt===void 0&&(gt=i.getUniformBlockIndex(it,D.name),ot.set(D,gt))}function ut(D,it){const gt=c.get(it).get(D);l.get(it)!==gt&&(i.uniformBlockBinding(it,gt,D.__bindingPointIndex),l.set(it,gt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,T=null,b=null,A=new It(0,0,0),P=0,w=!1,y=null,C=null,U=null,O=null,k=null,Qt.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:vt,bindFramebuffer:Gt,drawBuffers:Rt,useProgram:te,setBlending:ve,setMaterial:Wt,setFlipSided:Nt,setCullFace:St,setLineWidth:Me,setPolygonOffset:wt,setScissorTest:Yt,activeTexture:Ge,bindTexture:Ue,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Tt,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:ut,texStorage2D:rt,texStorage3D:Et,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:At,scissor:dt,viewport:Ut,reset:qt}}function Nx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):za("canvas")}function x(R,S,z){let j=1;const J=Ue(R);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*J.width),At=Math.floor(j*J.height);u===void 0&&(u=g(X,At));const rt=S?g(X,At):u;return rt.width=X,rt.height=At,rt.getContext("2d").drawImage(R,0,0,X,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+At+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,S,z,j,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=S;if(S===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),S===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),S===i.RGBA){const At=J?Oa:re.getTransfer(j);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=At===ue?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(R,S){let z;return R?S===null||S===ji||S===xr?z=i.DEPTH24_STENCIL8:S===Nn?z=i.DEPTH32F_STENCIL8:S===_r&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===xr?z=i.DEPTH_COMPONENT24:S===Nn?z=i.DEPTH_COMPONENT32F:S===_r&&(z=i.DEPTH_COMPONENT16),z}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),y(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,j=f.get(z);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys(j).length===0&&f.delete(z)}n.remove(R)}function w(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,j=f.get(z);delete j[S.__cacheKey],a.memory.textures--}function y(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[j][J]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,J=z.length;j<J;j++){const X=n.get(z[j]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(R)}let C=0;function U(){C=0}function O(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const z=n.get(R);if(R.isVideoTexture&&Yt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function B(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Z(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function G(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Q(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const st={[_l]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},ht={[mn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},_t={[Ud]:i.NEVER,[kd]:i.ALWAYS,[Fd]:i.LESS,[Ku]:i.LEQUAL,[Nd]:i.EQUAL,[zd]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function zt(R,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===ao||S.magFilter===Gr||S.magFilter===vi||S.minFilter===Fn||S.minFilter===ao||S.minFilter===Gr||S.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mn||S.minFilter!==Gr&&S.minFilter!==vi||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const X=k(S);if(X!==R.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[X].usedTimes++;const At=J[R.__cacheKey];At!==void 0&&(J[R.__cacheKey].usedTimes--,At.usedTimes===0&&w(S)),R.__cacheKey=X,R.__webglTexture=J[X].texture}return z}function pe(R,S,z){return Math.floor(Math.floor(R/z)/S)}function ie(R,S,z,j){const X=R.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,j,S.data);else{X.sort((nt,dt)=>nt.start-dt.start);let At=0;for(let nt=1;nt<X.length;nt++){const dt=X[At],Ut=X[nt],bt=dt.start+dt.count,ut=pe(Ut.start,S.width,4),qt=pe(dt.start,S.width,4);Ut.start<=bt+1&&ut===qt&&pe(Ut.start+Ut.count-1,S.width,4)===ut?dt.count=Math.max(dt.count,Ut.start+Ut.count-dt.start):(++At,X[At]=Ut)}X.length=At+1;const rt=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let nt=0,dt=X.length;nt<dt;nt++){const Ut=X[nt],bt=Math.floor(Ut.start/4),ut=Math.ceil(Ut.count/4),qt=bt%S.width,D=Math.floor(bt/S.width),it=ut,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,it,ot,z,j,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function Y(R,S,z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const J=Qt(R,S),X=S.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+z);const At=n.get(X);if(X.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const rt=re.getPrimaries(re.workingColorSpace),Et=S.colorSpace===xi?null:re.getPrimaries(S.colorSpace),Tt=S.colorSpace===xi||rt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let nt=x(S.image,!1,s.maxTextureSize);nt=Ge(S,nt);const dt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type);let bt=v(S.internalFormat,dt,Ut,S.colorSpace,S.isVideoTexture);zt(j,S);let ut;const qt=S.mipmaps,D=S.isVideoTexture!==!0,it=At.__version===void 0||J===!0,ot=X.dataReady,gt=T(S,nt);if(S.isDepthTexture)bt=_(S.format===Mr,S.type),it&&(D?e.texStorage2D(i.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,dt,Ut,null));else if(S.isDataTexture)if(qt.length>0){D&&it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,qt[0].width,qt[0].height);for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,dt,Ut,ut.data);S.generateMipmaps=!1}else D?(it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,nt.width,nt.height),ot&&ie(S,nt,dt,Ut)):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,dt,Ut,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,bt,qt[0].width,qt[0].height,nt.depth);for(let tt=0,$=qt.length;tt<$;tt++)if(ut=qt[tt],S.format!==Cn)if(dt!==null)if(D){if(ot)if(S.layerUpdates.size>0){const yt=Ah(ut.width,ut.height,S.format,S.type);for(const Vt of S.layerUpdates){const me=ut.data.subarray(Vt*yt/ut.data.BYTES_PER_ELEMENT,(Vt+1)*yt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Vt,ut.width,ut.height,1,dt,me)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,nt.depth,dt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,bt,ut.width,ut.height,nt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,nt.depth,dt,Ut,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,bt,ut.width,ut.height,nt.depth,0,dt,Ut,ut.data)}else{D&&it&&e.texStorage2D(i.TEXTURE_2D,gt,bt,qt[0].width,qt[0].height);for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],S.format!==Cn?dt!==null?D?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut.width,ut.height,dt,Ut,ut.data):e.texImage2D(i.TEXTURE_2D,tt,bt,ut.width,ut.height,0,dt,Ut,ut.data)}else if(S.isDataArrayTexture)if(D){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,bt,nt.width,nt.height,nt.depth),ot)if(S.layerUpdates.size>0){const tt=Ah(nt.width,nt.height,S.format,S.type);for(const $ of S.layerUpdates){const yt=nt.data.subarray($*tt/nt.data.BYTES_PER_ELEMENT,($+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,dt,Ut,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,dt,Ut,nt.data);else if(S.isData3DTexture)D?(it&&e.texStorage3D(i.TEXTURE_3D,gt,bt,nt.width,nt.height,nt.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,dt,Ut,nt.data);else if(S.isFramebufferTexture){if(it)if(D)e.texStorage2D(i.TEXTURE_2D,gt,bt,nt.width,nt.height);else{let tt=nt.width,$=nt.height;for(let yt=0;yt<gt;yt++)e.texImage2D(i.TEXTURE_2D,yt,bt,tt,$,0,dt,Ut,null),tt>>=1,$>>=1}}else if(qt.length>0){if(D&&it){const tt=Ue(qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,bt,tt.width,tt.height)}for(let tt=0,$=qt.length;tt<$;tt++)ut=qt[tt],D?ot&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,Ut,ut):e.texImage2D(i.TEXTURE_2D,tt,bt,dt,Ut,ut);S.generateMipmaps=!1}else if(D){if(it){const tt=Ue(nt);e.texStorage2D(i.TEXTURE_2D,gt,bt,tt.width,tt.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,bt,dt,Ut,nt);m(S)&&d(j),At.__version=X.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,z){if(S.image.length!==6)return;const j=Qt(R,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const X=n.get(J);if(J.version!==X.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const At=re.getPrimaries(re.workingColorSpace),rt=S.colorSpace===xi?null:re.getPrimaries(S.colorSpace),Et=S.colorSpace===xi||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Tt&&!nt?dt[$]=x(S.image[$],!0,s.maxCubemapSize):dt[$]=nt?S.image[$].image:S.image[$],dt[$]=Ge(S,dt[$]);const Ut=dt[0],bt=r.convert(S.format,S.colorSpace),ut=r.convert(S.type),qt=v(S.internalFormat,bt,ut,S.colorSpace),D=S.isVideoTexture!==!0,it=X.__version===void 0||j===!0,ot=J.dataReady;let gt=T(S,Ut);zt(i.TEXTURE_CUBE_MAP,S);let tt;if(Tt){D&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,Ut.width,Ut.height);for(let $=0;$<6;$++){tt=dt[$].mipmaps;for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt];S.format!==Cn?bt!==null?D?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Vt.width,Vt.height,bt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,0,0,Vt.width,Vt.height,bt,ut,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt,qt,Vt.width,Vt.height,0,bt,ut,Vt.data)}}}else{if(tt=S.mipmaps,D&&it){tt.length>0&&gt++;const $=Ue(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,bt,ut,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,dt[$].width,dt[$].height,0,bt,ut,dt[$].data);for(let yt=0;yt<tt.length;yt++){const me=tt[yt].image[$].image;D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,me.width,me.height,bt,ut,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,me.width,me.height,0,bt,ut,me.data)}}else{D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,bt,ut,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,bt,ut,dt[$]);for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt];D?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,0,0,bt,ut,Vt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,yt+1,qt,bt,ut,Vt.image[$])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function vt(R,S,z,j,J,X){const At=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),Et=v(z.internalFormat,At,rt,z.colorSpace),Tt=n.get(S),nt=n.get(z);if(nt.__renderTarget=S,!Tt.__hasExternalTextures){const dt=Math.max(1,S.width>>X),Ut=Math.max(1,S.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,Et,dt,Ut,S.depth,0,At,rt,null):e.texImage2D(J,X,Et,dt,Ut,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,nt.__webglTexture,0,Me(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,nt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,X=_(S.stencilBuffer,J),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Me(S);wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{const j=S.textures;for(let J=0;J<j.length;J++){const X=j[J],At=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),Et=v(X.internalFormat,At,rt,X.colorSpace),Tt=Me(S);z&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Et,S.width,S.height):wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Et,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const J=j.__webglTexture,X=Me(S);if(S.depthTexture.format===vr)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===Mr)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?Rt(S.__webglFramebuffer[0],R):Rt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),Gt(S.__webglDepthbuffer[j],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Gt(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,S,z){const j=n.get(R);S!==void 0&&vt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&te(R)}function I(R){const S=R.texture,z=n.get(R),j=n.get(S);R.addEventListener("dispose",A);const J=R.textures,X=R.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)z.__webglFramebuffer[rt][Et]=i.createFramebuffer()}else z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)z.__webglFramebuffer[rt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,Et=J.length;rt<Et;rt++){const Tt=n.get(J[rt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const Et=J[rt];z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);const Tt=r.convert(Et.format,Et.colorSpace),nt=r.convert(Et.type),dt=v(Et.internalFormat,Tt,nt,Et.colorSpace,R.isXRRenderTarget===!0),Ut=Me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)vt(z.__webglFramebuffer[rt][Et],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et);else vt(z.__webglFramebuffer[rt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,Et=J.length;rt<Et;rt++){const Tt=J[rt],nt=n.get(Tt);let dt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),zt(dt,Tt),vt(z.__webglFramebuffer,R,Tt,i.COLOR_ATTACHMENT0+rt,dt,0),m(Tt)&&d(dt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),zt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)vt(z.__webglFramebuffer[Et],R,S,i.COLOR_ATTACHMENT0,rt,Et);else vt(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,rt,0);m(S)&&d(rt),e.unbindTexture()}R.depthBuffer&&te(R)}function ve(R){const S=R.textures;for(let z=0,j=S.length;z<j;z++){const J=S[z];if(m(J)){const X=M(R),At=n.get(J).__webglTexture;e.bindTexture(X,At),d(X),e.unbindTexture()}}}const Wt=[],Nt=[];function St(R){if(R.samples>0){if(wt(R)===!1){const S=R.textures,z=R.width,j=R.height;let J=i.COLOR_BUFFER_BIT;const X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),rt=S.length>1;if(rt)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Et=R.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const nt=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,J,i.NEAREST),l===!0&&(Wt.length=0,Nt.length=0,Wt.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(X),Nt.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Tt]);const nt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Me(R){return Math.min(s.maxSamples,R.samples)}function wt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Yt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ge(R,S){const z=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ns&&z!==xi&&(re.getTransfer(z)===ue?(j!==Cn||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=wt}function Ox(i,t){function e(n,s=xi){let r;const a=re.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Cn)return i.RGBA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===$u)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===xc)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Ia||n===Da)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===Ml||n===yl||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===El)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Ul||n===Fl||n===Nl||n===Ol||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===Gl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Wl||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Xs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new kx,d={},M=e.getContextAttributes();let v=null,_=null;const T=[],b=[],A=new kt;let P=null;const w=new dn;w.viewport=new De;const y=new dn;y.viewport=new De;const C=[w,y],U=new om;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ro,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ro,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ro,T[Y]=Q),Q.getHandSpace()};function W(Y){const Q=b.indexOf(Y.inputSource);if(Q===-1)return;const vt=T[Q];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<T.length;Y++){const Q=b[Y];Q!==null&&(b[Y]=null,T[Y].disconnect(Q))}O=null,k=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(v),p=null,f=null,u=null,s=null,_=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Gt=null,Rt=null;M.depth&&(Rt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Mr:vr,Gt=M.stencil?xr:ji);const te={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(te),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new bi(f.textureWidth,f.textureHeight,{format:Cn,type:zn,depthTexture:new hf(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bi(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const vt=Y.removed[Q],Gt=b.indexOf(vt);Gt>=0&&(b[Gt]=null,T[Gt].disconnect(vt))}for(let Q=0;Q<Y.added.length;Q++){const vt=Y.added[Q];let Gt=b.indexOf(vt);if(Gt===-1){for(let te=0;te<T.length;te++)if(te>=b.length){b.push(vt),Gt=te;break}else if(b[te]===null){b[te]=vt,Gt=te;break}if(Gt===-1)break}const Rt=T[Gt];Rt&&Rt.connect(vt)}}const G=new L,st=new L;function ht(Y,Q,vt){G.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(vt.matrixWorld);const Gt=G.distanceTo(st),Rt=Q.projectionMatrix.elements,te=vt.projectionMatrix.elements,je=Rt[14]/(Rt[10]-1),I=Rt[14]/(Rt[10]+1),ve=(Rt[9]+1)/Rt[5],Wt=(Rt[9]-1)/Rt[5],Nt=(Rt[8]-1)/Rt[0],St=(te[8]+1)/te[0],Me=je*Nt,wt=je*St,Yt=Gt/(-Nt+St),Ge=Yt*-Nt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ge),Y.translateZ(Yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ue=je+Yt,R=I+Yt,S=Me-Ge,z=wt+(Gt-Ge),j=ve*I/R*Ue,J=Wt*I/R*Ue;Y.projectionMatrix.makePerspective(S,z,j,J,Ue,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function _t(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),U.near=y.near=w.near=Q,U.far=y.far=w.far=vt,(O!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,k=U.far),U.layers.mask=Y.layers.mask|6,w.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Gt=Y.parent,Rt=U.cameras;_t(U,Gt);for(let te=0;te<Rt.length;te++)_t(Rt[te],Gt);Rt.length===2?ht(U,w,y):U.projectionMatrix.copy(w.projectionMatrix),zt(Y,U,Gt)};function zt(Y,Q,vt){vt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return d[Y]};let Qt=null;function pe(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Gt=!1;vt.length!==U.cameras.length&&(U.cameras.length=0,Gt=!0);for(let I=0;I<vt.length;I++){const ve=vt[I];let Wt=null;if(p!==null)Wt=p.getViewport(ve);else{const St=u.getViewSubImage(f,ve);Wt=St.viewport,I===0&&(t.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(_))}let Nt=C[I];Nt===void 0&&(Nt=new dn,Nt.layers.enable(I),Nt.viewport=new De,C[I]=Nt),Nt.matrix.fromArray(ve.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(ve.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),I===0&&(U.matrix.copy(Nt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Gt===!0&&U.cameras.push(Nt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const I=u.getDepthInformation(vt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<vt.length;I++){const ve=vt[I].camera;if(ve){let Wt=d[ve];Wt||(Wt=new uf,d[ve]=Wt);const Nt=u.getCameraImage(ve);Wt.sourceTexture=Nt}}}}for(let vt=0;vt<T.length;vt++){const Gt=b[vt],Rt=T[vt];Gt!==null&&Rt!==void 0&&Rt.update(Gt,Q,c||a)}Qt&&Qt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ie=new _f;ie.setAnimationLoop(pe),this.setAnimationLoop=function(Y){Qt=Y},this.dispose=function(){}}}const Fi=new gn,Hx=new ee;function Vx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,sf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,Fi.copy(_),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(M,T);const b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const v=u();M.__bindingPointIndex=v;const _=i.createBuffer(),T=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],_=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=_.length;b<A;b++){const P=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,y=P.length;w<y;w++){const C=P[w];if(p(C,b,w,T)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let W=0;W<O.length;W++){const B=O[W],Z=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,T){const b=M.value,A=v+"_"+_;if(T[A]===void 0)return typeof b=="number"||typeof b=="boolean"?T[A]=b:T[A]=b.clone(),!0;{const P=T[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){const v=M.uniforms;let _=0;const T=16;for(let A=0,P=v.length;A<P;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,C=w.length;y<C;y++){const U=w[y],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,W=O.length;k<W;k++){const B=O[k],Z=x(B),G=_%T,st=G%Z.boundary,ht=G+st;_+=st,ht!==0&&T-ht<Z.storage&&(_+=T-ht),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=Z.storage}}}const b=_%T;return b>0&&(_+=T-b),M.__size=_,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Xx{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Ne;let b=0,A=0,P=null,w=-1,y=null;const C=new De,U=new De;let O=null;const k=new It(0);let W=0,B=e.width,Z=e.height,G=1,st=null,ht=null;const _t=new De(0,0,B,Z),zt=new De(0,0,B,Z);let Qt=!1;const pe=new Sc;let ie=!1,Y=!1;const Q=new ee,vt=new L,Gt=new De,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function je(){return P===null?G:1}let I=n;function ve(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),I===null){const F="webgl2";if(I=ve(F,E),I===null)throw ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Wt,Nt,St,Me,wt,Yt,Ge,Ue,R,S,z,j,J,X,At,rt,Et,Tt,nt,dt,Ut,bt,ut,qt;function D(){Wt=new e_(I),Wt.init(),bt=new Ox(I,Wt),Nt=new Yg(I,Wt,t,bt),St=new Fx(I,Wt),Nt.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),Me=new s_(I),wt=new Sx,Yt=new Nx(I,Wt,St,wt,Nt,bt,Me),Ge=new Kg(_),Ue=new t_(_),R=new hm(I),ut=new qg(I,R),S=new n_(I,R,Me,ut),z=new a_(I,S,R,Me),nt=new r_(I,Nt,Yt),rt=new $g(wt),j=new yx(_,Ge,Ue,Wt,Nt,ut,rt),J=new Vx(_,wt),X=new Ex,At=new Px(Wt),Tt=new Xg(_,Ge,Ue,St,z,p,l),Et=new Dx(_,z,Nt),qt=new Wx(I,Me,Nt,St),dt=new jg(I,Wt,Me),Ut=new i_(I,Wt,Me),Me.programs=j.programs,_.capabilities=Nt,_.extensions=Wt,_.properties=wt,_.renderLists=X,_.shadowMap=Et,_.state=St,_.info=Me}D();const it=new Gx(_,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,F,H=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=F,e.width=Math.floor(E*G),e.height=Math.floor(F*G),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(B*G,Z*G).floor()},this.setDrawingBufferSize=function(E,F,H){B=E,Z=F,G=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,F,H,V){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,F,H,V),St.viewport(C.copy(_t).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(zt)},this.setScissor=function(E,F,H,V){E.isVector4?zt.set(E.x,E.y,E.z,E.w):zt.set(E,F,H,V),St.scissor(U.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){St.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let V=0;if(E){let N=!1;if(P!==null){const et=P.texture.format;N=et===xc||et===_c||et===gc}if(N){const et=P.texture.type,ft=et===zn||et===ji||et===_r||et===xr||et===dc||et===pc,Mt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Dt=Mt.r,Ot=Mt.g,Ct=Mt.b;ft?(g[0]=Dt,g[1]=Ot,g[2]=Ct,g[3]=mt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Dt,x[1]=Ot,x[2]=Ct,x[3]=mt,I.clearBufferiv(I.COLOR,0,x))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Tt.dispose(),X.dispose(),At.dispose(),wt.dispose(),Ge.dispose(),Ue.dispose(),z.dispose(),ut.dispose(),qt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ln),it.removeEventListener("sessionend",Oc),Ri.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Me.autoReset,F=Et.enabled,H=Et.autoUpdate,V=Et.needsUpdate,N=Et.type;D(),Me.autoReset=E,Et.enabled=F,Et.autoUpdate=H,Et.needsUpdate=V,Et.type=N}function tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const F=E.target;F.removeEventListener("dispose",$),yt(F)}function yt(E){Vt(E),wt.remove(E)}function Vt(E){const F=wt.get(E).programs;F!==void 0&&(F.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,V,N,et){F===null&&(F=Rt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Kf(E,F,H,V,N);St.setMaterial(V,ft);let mt=H.index,Dt=1;if(V.wireframe===!0){if(mt=S.getWireframeAttribute(H),mt===void 0)return;Dt=2}const Ot=H.drawRange,Ct=H.attributes.position;let Jt=Ot.start*Dt,he=(Ot.start+Ot.count)*Dt;et!==null&&(Jt=Math.max(Jt,et.start*Dt),he=Math.min(he,(et.start+et.count)*Dt)),mt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,mt.count)):Ct!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Ct.count));const Ce=he-Jt;if(Ce<0||Ce===1/0)return;ut.setup(N,V,Mt,H,mt);let _e,fe=dt;if(mt!==null&&(_e=R.get(mt),fe=Ut,fe.setIndex(_e)),N.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*je()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(N.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*je()),N.isLineSegments?fe.setMode(I.LINES):N.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else N.isPoints?fe.setMode(I.POINTS):N.isSprite&&fe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))fe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,we=N._multiDrawCounts,se=N._multiDrawCount,ln=mt?R.get(mt).bytesPerElement:1,Ji=wt.get(V).currentProgram.getUniforms();for(let cn=0;cn<se;cn++)Ji.setValue(I,"_gl_DrawID",cn),fe.render(Pt[cn]/ln,we[cn])}else if(N.isInstancedMesh)fe.renderInstances(Jt,Ce,N.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,we=Math.min(H.instanceCount,Pt);fe.renderInstances(Jt,Ce,we)}else fe.render(Jt,Ce)};function me(E,F,H){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,kr(E,F,H),E.side=Ti,E.needsUpdate=!0,kr(E,F,H),E.side=wn):kr(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),d=At.get(H),d.init(F),v.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let ft=0;ft<et.length;ft++){const Mt=et[ft];me(Mt,H,N),V.add(Mt)}else me(et,H,N),V.add(et)}),d=v.pop(),V},this.compileAsync=function(E,F,H=null){const V=this.compile(E,F,H);return new Promise(N=>{function et(){if(V.forEach(function(ft){wt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){N(E);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let le=null;function Xn(E){le&&le(E)}function Ln(){Ri.stop()}function Oc(){Ri.start()}const Ri=new _f;Ri.setAnimationLoop(Xn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(E){le=E,it.setAnimationLoop(E),E===null?Ri.stop():Ri.start()},it.addEventListener("sessionstart",Ln),it.addEventListener("sessionend",Oc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,P),d=At.get(E,v.length),d.init(F),v.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(Q,On,F.reversedDepth),Y=this.localClippingEnabled,ie=rt.init(this.clippingPlanes,Y),m=X.get(E,M.length),m.init(),M.push(m),it.enabled===!0&&it.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&so(et,F,-1/0,_.sortObjects)}so(E,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,ht),te=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,te&&Tt.addToRenderList(m,E),this.info.render.frame++,ie===!0&&rt.beginShadows();const H=d.state.shadowsArray;Et.render(H,E,F),ie===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(d.setupLights(),F.isArrayCamera){const et=F.cameras;if(N.length>0)for(let ft=0,Mt=et.length;ft<Mt;ft++){const mt=et[ft];zc(V,N,E,mt)}te&&Tt.render(E);for(let ft=0,Mt=et.length;ft<Mt;ft++){const mt=et[ft];Bc(m,E,mt,mt.viewport)}}else N.length>0&&zc(V,N,E,F),te&&Tt.render(E),Bc(m,E,F);P!==null&&A===0&&(Yt.updateMultisampleRenderTarget(P),Yt.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,F),ut.resetDefaultState(),w=-1,y=null,v.pop(),v.length>0?(d=v[v.length-1],ie===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function so(E,F,H,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||pe.intersectsSprite(E)){V&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const ft=z.update(E),Mt=E.material;Mt.visible&&m.push(E,ft,Mt,H,Gt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||pe.intersectsObject(E))){const ft=z.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Gt.copy(ft.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Mt)){const mt=ft.groups;for(let Dt=0,Ot=mt.length;Dt<Ot;Dt++){const Ct=mt[Dt],Jt=Mt[Ct.materialIndex];Jt&&Jt.visible&&m.push(E,ft,Jt,H,Gt.z,Ct)}}else Mt.visible&&m.push(E,ft,Mt,H,Gt.z,null)}}const et=E.children;for(let ft=0,Mt=et.length;ft<Mt;ft++)so(et[ft],F,H,V)}function Bc(E,F,H,V){const N=E.opaque,et=E.transmissive,ft=E.transparent;d.setupLightsView(H),ie===!0&&rt.setGlobalState(_.clippingPlanes,H),V&&St.viewport(C.copy(V)),N.length>0&&zr(N,F,H),et.length>0&&zr(et,F,H),ft.length>0&&zr(ft,F,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function zc(E,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new bi(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Ir:zn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const et=d.state.transmissionRenderTarget[V.id],ft=V.viewport||C;et.setSize(ft.z*_.transmissionResolutionScale,ft.w*_.transmissionResolutionScale);const Mt=_.getRenderTarget(),mt=_.getActiveCubeFace(),Dt=_.getActiveMipmapLevel();_.setRenderTarget(et),_.getClearColor(k),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),te&&Tt.render(H);const Ot=_.toneMapping;_.toneMapping=Si;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ie===!0&&rt.setGlobalState(_.clippingPlanes,V),zr(E,H,V),Yt.updateMultisampleRenderTarget(et),Yt.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let he=0,Ce=F.length;he<Ce;he++){const _e=F[he],fe=_e.object,Pt=_e.geometry,we=_e.material,se=_e.group;if(we.side===wn&&fe.layers.test(V.layers)){const ln=we.side;we.side=tn,we.needsUpdate=!0,kc(fe,H,V,Pt,we,se),we.side=ln,we.needsUpdate=!0,Jt=!0}}Jt===!0&&(Yt.updateMultisampleRenderTarget(et),Yt.updateRenderTargetMipmap(et))}_.setRenderTarget(Mt,mt,Dt),_.setClearColor(k,W),Ct!==void 0&&(V.viewport=Ct),_.toneMapping=Ot}function zr(E,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,et=E.length;N<et;N++){const ft=E[N],Mt=ft.object,mt=ft.geometry,Dt=ft.group;let Ot=ft.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),Mt.layers.test(H.layers)&&kc(Mt,F,H,mt,Ot,Dt)}}function kc(E,F,H,V,N,et){E.onBeforeRender(_,F,H,V,N,et),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(_,F,H,V,E,et),N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,_.renderBufferDirect(H,F,V,N,E,et),N.side=Ti,N.needsUpdate=!0,_.renderBufferDirect(H,F,V,N,E,et),N.side=wn):_.renderBufferDirect(H,F,V,N,E,et),E.onAfterRender(_,F,H,V,N,et)}function kr(E,F,H){F.isScene!==!0&&(F=Rt);const V=wt.get(E),N=d.state.lights,et=d.state.shadowsArray,ft=N.state.version,Mt=j.getParameters(E,N.state,et,F,H),mt=j.getProgramCacheKey(Mt);let Dt=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?Ue:Ge).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",$),Dt=new Map,V.programs=Dt);let Ot=Dt.get(mt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===ft)return Hc(E,Mt),Ot}else Mt.uniforms=j.getUniforms(E),E.onBeforeCompile(Mt,_),Ot=j.acquireProgram(Mt,mt),Dt.set(mt,Ot),V.uniforms=Mt.uniforms;const Ct=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Hc(E,Mt),V.needsLights=Jf(E),V.lightsStateVersion=ft,V.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function Gc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ua.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Hc(E,F){const H=wt.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Kf(E,F,H,V,N){F.isScene!==!0&&(F=Rt),Yt.resetTextureUnits();const et=F.fog,ft=V.isMeshStandardMaterial?F.environment:null,Mt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ns,mt=(V.isMeshStandardMaterial?Ue:Ge).get(V.envMap||ft),Dt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,he=!!H.morphAttributes.color;let Ce=Si;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=_.toneMapping);const _e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=_e!==void 0?_e.length:0,Pt=wt.get(V),we=d.state.lights;if(ie===!0&&(Y===!0||E!==y)){const Ze=E===y&&V.id===w;rt.setState(V,E,Ze)}let se=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==we.state.version||Pt.outputColorSpace!==Mt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==mt||V.fog===!0&&Pt.fog!==et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Dt||Pt.vertexTangents!==Ot||Pt.morphTargets!==Ct||Pt.morphNormals!==Jt||Pt.morphColors!==he||Pt.toneMapping!==Ce||Pt.morphTargetsCount!==fe)&&(se=!0):(se=!0,Pt.__version=V.version);let ln=Pt.currentProgram;se===!0&&(ln=kr(V,F,N));let Ji=!1,cn=!1,Ys=!1;const Ee=ln.getUniforms(),_n=Pt.uniforms;if(St.useProgram(ln.program)&&(Ji=!0,cn=!0,Ys=!0),V.id!==w&&(w=V.id,cn=!0),Ji||y!==E){St.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",E.projectionMatrix),Ee.setValue(I,"viewMatrix",E.matrixWorldInverse);const en=Ee.map.cameraPosition;en!==void 0&&en.setValue(I,vt.setFromMatrixPosition(E.matrixWorld)),Nt.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,cn=!0,Ys=!0)}if(N.isSkinnedMesh){Ee.setOptional(I,N,"bindMatrix"),Ee.setOptional(I,N,"bindMatrixInverse");const Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ee.setValue(I,"boneTexture",Ze.boneTexture,Yt))}N.isBatchedMesh&&(Ee.setOptional(I,N,"batchingTexture"),Ee.setValue(I,"batchingTexture",N._matricesTexture,Yt),Ee.setOptional(I,N,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",N._indirectTexture,Yt),Ee.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",N._colorsTexture,Yt));const xn=H.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&nt.update(N,H,ln),(cn||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,Ee.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_n.envMap.value=mt,_n.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),cn&&(Ee.setValue(I,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&Zf(_n,Ys),et&&V.fog===!0&&J.refreshFogUniforms(_n,et),J.refreshMaterialUniforms(_n,V,G,Z,d.state.transmissionRenderTarget[E.id]),Ua.upload(I,Gc(Pt),_n,Yt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ua.upload(I,Gc(Pt),_n,Yt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(I,"center",N.center),Ee.setValue(I,"modelViewMatrix",N.modelViewMatrix),Ee.setValue(I,"normalMatrix",N.normalMatrix),Ee.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ze=V.uniformsGroups;for(let en=0,ro=Ze.length;en<ro;en++){const Ci=Ze[en];qt.update(Ci,ln),qt.bind(Ci,ln)}}return ln}function Zf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Jf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,H){const V=wt.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),wt.get(E.texture).__webglTexture=F,wt.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const H=wt.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Qf=I.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){P=E,b=F,A=H;let V=!0,N=null,et=!1,ft=!1;if(E){const mt=wt.get(E);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(mt.__hasExternalTextures)Yt.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(mt.__boundDepthTexture!==Ct){if(Ct!==null&&wt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);const Ot=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?N=Ot[F][H]:N=Ot[F],et=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[H]:N=Ot,C.copy(E.viewport),U.copy(E.scissor),O=E.scissorTest}else C.copy(_t).multiplyScalar(G).floor(),U.copy(zt).multiplyScalar(G).floor(),O=Qt;if(H!==0&&(N=Qf),St.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&St.drawBuffers(E,N),St.viewport(C),St.scissor(U),St.setScissorTest(O),et){const mt=wt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,H)}else if(ft){const mt=F;for(let Dt=0;Dt<E.textures.length;Dt++){const Ot=wt.get(E.textures[Dt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,H,mt)}}else if(E!==null&&H!==0){const mt=wt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(E,F,H,V,N,et,ft,Mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){St.bindFramebuffer(I.FRAMEBUFFER,mt);try{const Dt=E.textures[Mt],Ot=Dt.format,Ct=Dt.type;if(!Nt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&H>=0&&H<=E.height-N&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt),I.readPixels(F,H,V,N,bt.convert(Ot),bt.convert(Ct),et))}finally{const Dt=P!==null?wt.get(P).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,V,N,et,ft,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(F>=0&&F<=E.width-V&&H>=0&&H<=E.height-N){St.bindFramebuffer(I.FRAMEBUFFER,mt);const Dt=E.textures[Mt],Ot=Dt.format,Ct=Dt.type;if(!Nt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt),I.readPixels(F,H,V,N,bt.convert(Ot),bt.convert(Ct),0);const he=P!==null?wt.get(P).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,he);const Ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sp(I,Ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Jt),I.deleteSync(Ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,H=0){const V=Math.pow(2,-H),N=Math.floor(E.image.width*V),et=Math.floor(E.image.height*V),ft=F!==null?F.x:0,Mt=F!==null?F.y:0;Yt.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ft,Mt,N,et),St.unbindTexture()};const td=I.createFramebuffer(),ed=I.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,V=null,N=0,et=null){et===null&&(N!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=N,N=0):et=0);let ft,Mt,mt,Dt,Ot,Ct,Jt,he,Ce;const _e=E.isCompressedTexture?E.mipmaps[et]:E.image;if(H!==null)ft=H.max.x-H.min.x,Mt=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Ot=H.min.y,Ct=H.isBox3?H.min.z:0;else{const xn=Math.pow(2,-N);ft=Math.floor(_e.width*xn),Mt=Math.floor(_e.height*xn),E.isDataArrayTexture?mt=_e.depth:E.isData3DTexture?mt=Math.floor(_e.depth*xn):mt=1,Dt=0,Ot=0,Ct=0}V!==null?(Jt=V.x,he=V.y,Ce=V.z):(Jt=0,he=0,Ce=0);const fe=bt.convert(F.format),Pt=bt.convert(F.type);let we;F.isData3DTexture?(Yt.setTexture3D(F,0),we=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Yt.setTexture2DArray(F,0),we=I.TEXTURE_2D_ARRAY):(Yt.setTexture2D(F,0),we=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const se=I.getParameter(I.UNPACK_ROW_LENGTH),ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ji=I.getParameter(I.UNPACK_SKIP_PIXELS),cn=I.getParameter(I.UNPACK_SKIP_ROWS),Ys=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct);const Ee=E.isDataArrayTexture||E.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const xn=wt.get(E),Ze=wt.get(F),en=wt.get(xn.__renderTarget),ro=wt.get(Ze.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,ro.__webglFramebuffer);for(let Ci=0;Ci<mt;Ci++)Ee&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,N,Ct+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wt.get(F).__webglTexture,et,Ce+Ci)),I.blitFramebuffer(Dt,Ot,ft,Mt,Jt,he,ft,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||wt.has(E)){const xn=wt.get(E),Ze=wt.get(F);St.bindFramebuffer(I.READ_FRAMEBUFFER,td),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,ed);for(let en=0;en<mt;en++)Ee?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,N,Ct+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,N),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,et,Ce+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,et),N!==0?I.blitFramebuffer(Dt,Ot,ft,Mt,Jt,he,ft,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(we,et,Jt,he,Ce+en,Dt,Ot,ft,Mt):I.copyTexSubImage2D(we,et,Jt,he,Dt,Ot,ft,Mt);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,Pt,_e.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,_e.data):I.texSubImage3D(we,et,Jt,he,Ce,ft,Mt,mt,fe,Pt,_e):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Jt,he,ft,Mt,fe,Pt,_e.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Jt,he,_e.width,_e.height,fe,_e.data):I.texSubImage2D(I.TEXTURE_2D,et,Jt,he,ft,Mt,fe,Pt,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ji),I.pixelStorei(I.UNPACK_SKIP_ROWS,cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ys),et===0&&F.generateMipmaps&&I.generateMipmap(we),St.unbindTexture()},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Jh=6378137,qx=6356752314245179e-9;function Nr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Qh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);const g=Qh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Qh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ie(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}new L;function jx(i){const{x:t,y:e,z:n}=i;i.x=n,i.y=t,i.z=e}function Yx(i){return-i+Math.PI/2}const tu=new lm,ui=new L,nn=new L,zo=new L,Mn=new ee,In=new ee,eu=new ee,ko=new si,sn=new gn,nu=new L,iu=new L,su=new L,Ni=new L,xa=new Ur,$x=1e-12,Kx=.1,va=0,ru=1,Ma=2;class Zx{constructor(t=1,e=1,n=1){this.name="",this.radius=new L(t,e,n)}intersectRay(t,e){return Mn.makeScale(...this.radius).invert(),ko.center.set(0,0,0),ko.radius=1,xa.copy(t).applyMatrix4(Mn),xa.intersectSphere(ko,e)?(Mn.makeScale(...this.radius),e.applyMatrix4(Mn),e):null}getEastNorthUpFrame(t,e,n,s){return n.isMatrix4&&(s=n,n=0,console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')),this.getEastNorthUpAxes(t,e,nu,iu,su),this.getCartographicToPosition(t,e,n,Ni),s.makeBasis(nu,iu,su).setPosition(Ni)}getOrientedEastNorthUpFrame(t,e,n,s,r,a,o){return this.getObjectFrame(t,e,n,s,r,a,o,va)}getObjectFrame(t,e,n,s,r,a,o,l=Ma){return this.getEastNorthUpFrame(t,e,n,Mn),sn.set(r,a,-s,"ZXY"),o.makeRotationFromEuler(sn).premultiply(Mn),l===ru?(sn.set(Math.PI/2,0,0,"XYZ"),In.makeRotationFromEuler(sn),o.multiply(In)):l===Ma&&(sn.set(-Math.PI/2,0,Math.PI,"XYZ"),In.makeRotationFromEuler(sn),o.multiply(In)),o}getCartographicFromObjectFrame(t,e,n=Ma){return n===ru?(sn.set(-Math.PI/2,0,0,"XYZ"),In.makeRotationFromEuler(sn).premultiply(t)):n===Ma?(sn.set(-Math.PI/2,0,Math.PI,"XYZ"),In.makeRotationFromEuler(sn).premultiply(t)):In.copy(t),Ni.setFromMatrixPosition(In),this.getPositionToCartographic(Ni,e),this.getEastNorthUpFrame(e.lat,e.lon,0,Mn).invert(),In.premultiply(Mn),sn.setFromRotationMatrix(In,"ZXY"),e.azimuth=-sn.z,e.elevation=sn.x,e.roll=sn.y,e}getEastNorthUpAxes(t,e,n,s,r,a=Ni){this.getCartographicToPosition(t,e,0,a),this.getCartographicToNormal(t,e,r),n.set(-a.y,a.x,0).normalize(),s.crossVectors(r,n).normalize()}getAzElRollFromRotationMatrix(t,e,n,s,r=va){return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'),this.getCartographicToPosition(t,e,0,Ni),eu.copy(n).setPosition(Ni),this.getCartographicFromObjectFrame(eu,s,r),delete s.height,delete s.lat,delete s.lon,s}getRotationMatrixFromAzElRoll(t,e,n,s,r,a,o=va){return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(t,e,0,n,s,r,a,o),a.setPosition(0,0,0),a}getFrame(t,e,n,s,r,a,o,l=va){return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'),this.getObjectFrame(t,e,a,n,s,r,o,l)}getCartographicToPosition(t,e,n,s){this.getCartographicToNormal(t,e,ui);const r=this.radius;nn.copy(ui),nn.x*=r.x**2,nn.y*=r.y**2,nn.z*=r.z**2;const a=Math.sqrt(ui.dot(nn));return nn.divideScalar(a),s.copy(nn).addScaledVector(ui,n)}getPositionToCartographic(t,e){this.getPositionToSurfacePoint(t,nn),this.getPositionToNormal(t,ui);const n=zo.subVectors(t,nn);return e.lon=Math.atan2(ui.y,ui.x),e.lat=Math.asin(ui.z),e.height=Math.sign(n.dot(t))*n.length(),e}getCartographicToNormal(t,e,n){return tu.set(1,Yx(t),e),n.setFromSpherical(tu).normalize(),jx(n),n}getPositionToNormal(t,e){const n=this.radius;return e.copy(t),e.x/=n.x**2,e.y/=n.y**2,e.z/=n.z**2,e.normalize(),e}getPositionToSurfacePoint(t,e){const n=this.radius,s=1/n.x**2,r=1/n.y**2,a=1/n.z**2,o=t.x*t.x*s,l=t.y*t.y*r,c=t.z*t.z*a,h=o+l+c,u=Math.sqrt(1/h),f=nn.copy(t).multiplyScalar(u);if(h<Kx)return isFinite(u)?e.copy(f):null;const p=zo.set(f.x*s*2,f.y*r*2,f.z*a*2);let g=(1-u)*t.length()/(.5*p.length()),x=0,m,d,M,v,_,T,b,A,P,w,y;do{g-=x,M=1/(1+g*s),v=1/(1+g*r),_=1/(1+g*a),T=M*M,b=v*v,A=_*_,P=T*M,w=b*v,y=A*_,m=o*T+l*b+c*A-1,d=o*P*s+l*w*r+c*y*a;const C=-2*d;x=m/C}while(Math.abs(m)>$x);return e.set(t.x*M,t.y*v,t.z*_)}calculateHorizonDistance(t,e){const n=this.calculateEffectiveRadius(t);return Math.sqrt(2*n*e+e**2)}calculateEffectiveRadius(t){const e=this.radius.x,n=1-this.radius.z**2/e**2,s=t*Xe.DEG2RAD,r=Math.sin(s)**2;return e/Math.sqrt(1-n*r)}getPositionElevation(t){this.getPositionToSurfacePoint(t,nn);const e=zo.subVectors(t,nn);return Math.sign(e.dot(t))*e.length()}closestPointToRayEstimate(t,e){return this.intersectRay(t,e)?e:(Mn.makeScale(...this.radius).invert(),xa.copy(t).applyMatrix4(Mn),nn.set(0,0,0),xa.closestPointToPoint(nn,e).normalize(),Mn.makeScale(...this.radius),e.applyMatrix4(Mn))}copy(t){return this.radius.copy(t.radius),this}clone(){return new this.constructor().copy(this)}}const eo=new Zx(Jh,Jh,qx);eo.name="WGS84 Earth";new L;new L;new L;new Ur;new L;new L;new L;new ee;const Rc=37.46,au={lat:34.99482,lon:135.785},Sf=new ee;eo.getEastNorthUpFrame(au.lat*Xe.DEG2RAD,au.lon*Xe.DEG2RAD,Rc,Sf);const Jx=new ee().makeRotationX(-Math.PI/2),wf=new ee().copy(Jx).multiply(Sf.clone().invert()),Qx=wf.clone().invert(),ou=new L,ya={};function Te(i,t,e,n=new L){return eo.getCartographicToPosition(i*Xe.DEG2RAD,t*Xe.DEG2RAD,e+Rc,n),n.applyMatrix4(wf)}function ks(i,t={}){return ou.copy(i).applyMatrix4(Qx),eo.getPositionToCartographic(ou,ya),t.lat=ya.lat*Xe.RAD2DEG,t.lon=ya.lon*Xe.RAD2DEG,t.height=ya.height-Rc,t}function Va(i,t){return(i+180)/360*2**t}function Wa(i,t){const e=i*Xe.DEG2RAD;return(1-Math.log(Math.tan(e)+1/Math.cos(e))/Math.PI)/2*2**t}function ur(i,t){return i/2**t*360-180}function fr(i,t){const e=Math.PI-2*Math.PI*i/2**t;return Xe.RAD2DEG*Math.atan(Math.sinh(e))}const tv=12,Ss=[];let Go=0;function Ef(){for(;Go<tv&&Ss.length;){let i=0;for(let e=1;e<Ss.length;e++)Ss[e].priority()<Ss[i].priority()&&(i=e);const t=Ss.splice(i,1)[0];Go++,fetch(t.url,{mode:"cors"}).then(e=>{if(!e.ok)throw new Error(`${e.status} ${t.url}`);return e.blob()}).then(e=>createImageBitmap(e)).then(t.resolve,t.reject).finally(()=>{Go--,Ef()})}}function Jl(i,t=()=>0){return new Promise((e,n)=>{Ss.push({url:i,priority:t,resolve:e,reject:n}),Ef()})}const ev=(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/dem_png/${i}/${t}/${e}.png`,lu={now:(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/${i}/${t}/${e}.jpg`,showa:(i,t,e)=>`https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/${i}/${t}/${e}.png`},fi=[3591,3593],di=[1621,1623],pi=1,mi=14,qe=12,Ps=64,nv=[[17,1300],[16,3e3]],iv=[[16,2e3]],cu=1200,sv=[[1500,1],[4e3,2],[1/0,4]],Ho=new Map;function Vo(i){if(!Ho.has(i)){const t=Ps,e=[];for(let n=0;n<t;n+=i)for(let s=0;s<t;s+=i){const r=n*(t+1)+s,a=r+i,o=r+i*(t+1),l=o+i;e.push(r,o,a,a,o,l)}Ho.set(i,new Ie(new Uint16Array(e),1))}return Ho.get(i)}function rv(i){const e=new OffscreenCanvas(256,256).getContext("2d",{willReadFrequently:!0});e.drawImage(i,0,0);const n=e.getImageData(0,0,256,256).data,s=new Float32Array(256*256);for(let r=0;r<s.length;r++){const a=n[r*4],o=n[r*4+1],l=n[r*4+2];let c=a*65536+o*256+l;c===8388608?c=0:c>8388608&&(c-=16777216),s[r]=c*.01}return s}const Wo=new L,rr={};function av(i){return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
				}`)},i.customProgramCacheKey=()=>"autumn",i}class hu{constructor(t,e,n){this.z=t,this.x=e,this.y=n,this.heights=new Float32Array((Ps+1)**2),this.mesh=null,this.baseTexture=null,this.hiTexture=null,this.hiLoading=!1,this.hiLevel=0;const s=ur(e+.5,t),r=fr(n+.5,t);this.center=Te(r,s,0)}sample(t,e){const n=Ps;t=Math.min(Math.max(t,0),n),e=Math.min(Math.max(e,0),n);const s=Math.min(Math.floor(t),n-1),r=Math.min(Math.floor(e),n-1),a=t-s,o=e-r,l=this.heights,c=l[r*(n+1)+s],h=l[r*(n+1)+s+1],u=l[(r+1)*(n+1)+s],f=l[(r+1)*(n+1)+s+1];return a+o<=1?c+(h-c)*a+(u-c)*o:f+(u-f)*(1-a)+(h-f)*(1-o)}}class ov{constructor(t,{era:e="now",mobile:n=!1}={}){this.hiRes=n?iv:nv,this.mobile=n,this.era=e,this.eraGen=0,this.group=new Re,this.group.name="terrain",t.add(this.group),this.fine=new Map,this.coarse=new Map,this.dem=new Map,this.player=new L}key(t,e,n){return`${t}/${e}/${n}`}async init(t=()=>{}){const e=[],n=2**(mi-qe);for(let o=fi[0]*n;o<(fi[1]+1)*n;o++)for(let l=di[0]*n;l<(di[1]+1)*n;l++){const c=new hu(mi,o,l);this.fine.set(this.key(mi,o,l),c),e.push(c)}for(let o=fi[0]-pi;o<=fi[1]+pi;o++)for(let l=di[0]-pi;l<=di[1]+pi;l++){if(o>=fi[0]&&o<=fi[1]&&l>=di[0]&&l<=di[1])continue;const h=new hu(qe,o,l);this.coarse.set(this.key(qe,o,l),h),e.push(h)}const s=new Set;for(const o of e)for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++)s.add(this.key(o.z,o.x+l,o.y+c));let r=0;const a=s.size+e.length;await Promise.all([...s].map(async o=>{const[l,c,h]=o.split("/").map(Number);try{const u=await Jl(ev(l,c,h),()=>this.priority(l,c,h));this.dem.set(o,rv(u))}catch{}t(++r/a)}));for(const o of e)this.buildMesh(o);await Promise.all(e.map(async o=>{const l=o.z===mi?mi:qe+1;await this.loadPhoto(o,l).then(c=>{o.baseTexture=c,o.hiTexture||(o.mesh.material.map=c),o.mesh.material.color.set(16777215),o.mesh.material.needsUpdate=!0}).catch(()=>{}),t(++r/a)})),this.dem.clear(),this.ready=!0}priority(t,e,n){const s=ur(e+.5,t),r=fr(n+.5,t);return Te(r,s,0).distanceTo(this.player)*(t===qe?3:1)}demPixel(t,e,n){const s=Math.floor(e/256),r=Math.floor(n/256),a=this.dem.get(this.key(t,s,r));if(!a)return 0;const o=Math.min(255,Math.max(0,Math.floor(e-s*256))),l=Math.min(255,Math.max(0,Math.floor(n-r*256)));return a[l*256+o]}demSample(t,e,n){e-=.5,n-=.5;const s=Math.floor(e),r=Math.floor(n),a=e-s,o=n-r,l=this.demPixel(t,s,r),c=this.demPixel(t,s+1,r),h=this.demPixel(t,s,r+1),u=this.demPixel(t,s+1,r+1);return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}buildMesh(t){const e=Ps,n=new Float32Array((e+1)**2*3),s=new Float32Array((e+1)**2*2),r=new L,a=t.z===qe?4:0;for(let c=0;c<=e;c++)for(let h=0;h<=e;h++){const u=(t.x+h/e)*256,f=(t.y+c/e)*256,p=this.demSample(t.z,u,f),g=c*(e+1)+h;t.heights[g]=p,Te(fr(f/256,t.z),ur(u/256,t.z),p-a,r),n[g*3]=r.x,n[g*3+1]=r.y,n[g*3+2]=r.z,s[g*2]=h/e,s[g*2+1]=1-c/e}const o=new xe;o.setAttribute("position",new ne(n,3)),o.setAttribute("uv",new ne(s,2)),o.setIndex(Vo(1)),o.computeVertexNormals(),t.step=this.mobile&&t.z===qe?4:1,t.step!==1&&o.setIndex(Vo(t.step)),o.computeBoundingSphere();const l=av(new Le({color:7043674}));t.mesh=new xt(o,l),t.mesh.matrixAutoUpdate=!1,t.mesh.updateMatrix(),t.mesh.receiveShadow=!0,this.group.add(t.mesh)}async loadPhoto(t,e,n=this.era){const s=2**(e-t.z),r=()=>t.center.distanceTo(this.player)*(t.z===qe?3:1),a=document.createElement("canvas");a.width=a.height=256*s;const o=a.getContext("2d");o.fillStyle="#8f8c80",o.fillRect(0,0,a.width,a.height);const l=[],c=n==="showa";for(let u=0;u<s;u++)for(let f=0;f<s;f++){const p=t.x*s+u,g=t.y*s+f,x=m=>Jl(m,r).catch(()=>null);l.push(Promise.all([x(lu.now(e,p,g)),c?x(lu.showa(e,p,g)):null]).then(([m,d])=>{m&&o.drawImage(m,u*256,f*256),d&&(o.globalCompositeOperation=m?"luminosity":"source-over",o.drawImage(d,u*256,f*256),o.globalCompositeOperation="source-over",d.close()),m==null||m.close()}))}await Promise.all(l),c&&(o.globalCompositeOperation="soft-light",o.fillStyle="rgba(214, 170, 110, 0.35)",o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="source-over");const h=new Wn(a);return h.colorSpace=Ne,h.anisotropy=8,h}setEra(t){if(t===this.era)return;const e=this.era;this.era=t;const n=++this.eraGen,s=[...this.fine.values(),...this.coarse.values()].sort((r,a)=>r.center.distanceTo(this.player)-a.center.distanceTo(this.player));for(const r of s){if(!r.mesh)continue;r.bases??(r.bases={}),r.baseTexture&&(r.bases[e]=r.baseTexture),r.hiTexture&&(r.hiTexture.dispose(),r.hiTexture=null),r.hiLevel=0;const a=l=>{r.baseTexture=l,r.hiTexture||(r.mesh.material.map=l,r.mesh.material.needsUpdate=!0)};if(r.bases[t]){a(r.bases[t]);continue}r.mesh.material.map=r.bases[e],r.mesh.material.needsUpdate=!0;const o=r.z===mi?mi:qe+1;this.loadPhoto(r,o,t).then(l=>{r.bases[t]=l,n===this.eraGen&&(a(l),this.mobile&&r.bases[e]&&r.bases[e]!==l&&(r.bases[e].dispose(),delete r.bases[e]))}).catch(()=>{})}}desiredLevel(t){for(const[e,n]of this.hiRes)if(t<n)return e;return 0}setStep(t,e){t.step!==e&&(t.step=e,t.mesh.geometry.setIndex(Vo(e)))}update(t){if(this.player.copy(t),!this.ready)return;if(this.updateCoarse(t),this.mobile)for(const s of this.fine.values()){const r=Math.hypot(s.center.x-t.x,s.center.z-t.z);this.setStep(s,sv.find(([a])=>r<a)[1])}let e=0;for(const s of this.fine.values())s.hiLoading&&e++;const n=[...this.fine.values()].map(s=>({c:s,d:Math.hypot(s.center.x-t.x,s.center.z-t.z)})).sort((s,r)=>s.d-r.d);for(const{c:s,d:r}of n){const a=this.desiredLevel(r);if(s.hiLevel&&a<s.hiLevel&&this.desiredLevel(r-cu)<s.hiLevel&&(s.hiTexture.dispose(),s.hiTexture=null,s.hiLevel=0,s.mesh.material.map=s.baseTexture,s.mesh.material.needsUpdate=!0),a>(s.hiLevel||0)&&!s.hiLoading&&e<3){s.hiLoading=!0,e++;const o=this.eraGen;this.loadPhoto(s,a).then(l=>{var h;if(s.hiLoading=!1,o!==this.eraGen){l.dispose();return}if(this.desiredLevel(Math.hypot(s.center.x-this.player.x,s.center.z-this.player.z)-cu)<a){l.dispose();return}(h=s.hiTexture)==null||h.dispose(),s.hiTexture=l,s.hiLevel=a,s.mesh.material.map=l,s.mesh.material.color.set(16777215),s.mesh.material.needsUpdate=!0})}}}heightAtWorld(t,e){Wo.set(t,0,e),ks(Wo,rr);const n=this.heightAt(rr.lat,rr.lon);return Te(rr.lat,rr.lon,n,Wo).y}updateCoarse(t){for(const e of this.coarse.values()){const s=Math.max(0,Math.abs(e.center.x-t.x)-4900)+Math.max(0,Math.abs(e.center.z-t.z)-4900);if(s<1500&&!e.hiLevel&&!e.hiLoading){e.hiLoading=!0;const r=this.eraGen;this.loadPhoto(e,qe+3).then(a=>{if(e.hiLoading=!1,r!==this.eraGen){a.dispose();return}e.hiTexture=a,e.hiLevel=qe+3,e.mesh.material.map=a,e.mesh.material.color.set(16777215),e.mesh.material.needsUpdate=!0})}else s>4e3&&e.hiLevel&&(e.hiTexture.dispose(),e.hiTexture=null,e.hiLevel=0,e.mesh.material.map=e.baseTexture,e.mesh.material.needsUpdate=!0)}}heightAt(t,e){for(const[n,s]of[[mi,this.fine],[qe,this.coarse]]){const r=Va(e,n),a=Wa(t,n),o=Math.floor(r),l=Math.floor(a),c=s.get(this.key(n,o,l));if(c){const h=c.sample((r-o)*Ps,(a-l)*Ps);return n===qe?h-4:h}}return 0}bounds(){return{west:ur(fi[0]-pi,qe),east:ur(fi[1]+1+pi,qe),north:fr(di[0]-pi,qe),south:fr(di[1]+1+pi,qe)}}}const q=256;function lv(i){let t=i;return()=>(t=t*16807%2147483647,t/2147483647)}function fn(i,t,e,n,s,r,a=1){const o=lv(a);for(let l=0;l<n*s/40;l++){const c=o()<.5?0:255;i.fillStyle=`rgba(${c},${c},${c},${r*.15*o()})`;const h=2+o()*6;i.fillRect(t+o()*n,e+o()*s,h,h)}}function Xo(i,t,e,n,s,r="#ddd",a="#5b7590"){i.fillStyle=r,i.fillRect(t-4,e-4,n+8,s+8);const o=i.createLinearGradient(t,e,t+n,e+s);o.addColorStop(0,a),o.addColorStop(.5,"#9fb6cc"),o.addColorStop(1,a),i.fillStyle=o,i.fillRect(t,e,n,s)}const cv=[i=>{i.fillStyle="#e9e1d2",i.fillRect(0,0,q,q),i.fillStyle="#4a3324",i.fillRect(0,70,q,186),i.fillStyle="#6b4a33";for(let t=6;t<q;t+=12)i.fillRect(t,80,5,176);i.fillStyle="#3a281c",i.fillRect(0,60,q,14),i.fillRect(0,0,10,q),i.fillRect(q-10,0,10,q),i.fillStyle="#6d6a66",i.fillRect(0,q-14,q,14),fn(i,0,0,q,q,.12,3)},i=>{i.fillStyle="#ece6da",i.fillRect(0,0,q,q),i.fillStyle="#4a3324",i.fillRect(0,0,10,q),i.fillRect(q-10,0,10,q),i.fillRect(0,q-12,q,12),i.fillStyle="#5a4030",i.fillRect(70,90,116,70),i.fillStyle="#e9e1d2";for(let t=78;t<186;t+=18)i.fillRect(t,96,9,58);fn(i,0,0,q,q,.12,5)},i=>{i.fillStyle="#9a9894",i.fillRect(0,0,q,q),Xo(i,16,70,q-32,q-84,"#555","#3e5568"),i.fillStyle="#c33",i.fillRect(10,30,q-20,26),fn(i,0,0,q,q,.1,7)},i=>{i.fillStyle="#d8d8d6",i.fillRect(0,0,q,q),Xo(i,18,60,q-36,150,"#bfc3c7","#4f6a84"),i.fillStyle="#c9c9c7",i.fillRect(q/2-3,56,6,158),fn(i,0,0,q,q,.1,11)},i=>{i.fillStyle="#efe9df",i.fillRect(0,0,q,q),Xo(i,30,40,q-60,140,"#ccc","#6f8396"),i.fillStyle="#f7f5f0",i.fillRect(0,160,q,96),i.fillStyle="#cfcac0",i.fillRect(0,160,q,8),i.fillStyle="#b8b2a6",i.fillRect(0,q-6,q,6),fn(i,0,0,q,q,.1,13)},i=>{i.fillStyle="#f2ece0",i.fillRect(0,0,q,q),i.fillStyle="#7a3b22",i.fillRect(0,0,22,q),i.fillRect(q-22,0,22,q),i.fillRect(0,40,q,18),i.fillRect(0,170,q,14),i.fillStyle="#5a2a18",i.fillRect(0,q-20,q,20),fn(i,0,0,q,q,.1,17)},i=>{i.fillStyle="#c9ccd0",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=16){const e=i.createLinearGradient(t,0,t+16,0);e.addColorStop(0,"#aeb2b8"),e.addColorStop(.5,"#e2e5e8"),e.addColorStop(1,"#aeb2b8"),i.fillStyle=e,i.fillRect(t,0,16,q)}fn(i,0,0,q,q,.12,19)},i=>uu(i,"#b3b8c0","#868c96",23),i=>{i.fillStyle="#b9b8b3",i.fillRect(0,0,q,q),fn(i,0,0,q,q,.25,29),i.strokeStyle="rgba(0,0,0,0.12)",i.lineWidth=2;for(let t=0;t<=q;t+=64)i.beginPath(),i.moveTo(t,0),i.lineTo(t,q),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(q,t),i.stroke()},i=>{i.fillStyle="#8e9aa2",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=32)i.fillStyle="rgba(255,255,255,0.25)",i.fillRect(t,0,4,q),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(t+4,0,3,q);fn(i,0,0,q,q,.12,31)},i=>uu(i,"#545961","#33373e",37,28),i=>{i.fillStyle="#d9d5cd",i.fillRect(0,0,q,q),fn(i,0,0,q,q,.15,41)},i=>{i.fillStyle="#f4f4f2",i.fillRect(0,0,q,q),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=3,i.strokeRect(0,0,q,q)},i=>{const t=i.createLinearGradient(0,0,q,q);t.addColorStop(0,"#f7d774"),t.addColorStop(.45,"#fff2b0"),t.addColorStop(.55,"#e0b23c"),t.addColorStop(1,"#c8962a"),i.fillStyle=t,i.fillRect(0,0,q,q),i.fillStyle="rgba(120,80,10,0.35)",i.fillRect(0,0,14,q),i.fillRect(q-14,0,14,q),i.fillRect(0,q-16,q,16),i.fillStyle="rgba(90,60,10,0.25)",i.fillRect(60,70,136,110)},i=>{i.fillStyle="#fbf6ec",i.fillRect(0,0,q,q),i.fillStyle="#e8432c",i.fillRect(0,0,30,q),i.fillRect(q-30,0,30,q),i.fillRect(0,30,q,20),i.fillRect(0,160,q,18),i.fillStyle="#f2c230",i.fillRect(0,50,q,6),i.fillStyle="#b52a1c",i.fillRect(0,q-18,q,18),fn(i,0,0,q,q,.08,43)},i=>{i.fillStyle="#7a4a2a",i.fillRect(0,0,q,q);for(let t=0;t<q;t+=10)i.fillStyle=t%20?"rgba(0,0,0,0.18)":"rgba(255,220,180,0.12)",i.fillRect(0,t,q,5);fn(i,0,0,q,q,.2,47)}];function uu(i,t,e,n,s=22){i.fillStyle=e,i.fillRect(0,0,q,q);for(let r=0;r<q;r+=s){const a=i.createLinearGradient(r,0,r+s,0);a.addColorStop(0,e),a.addColorStop(.45,t),a.addColorStop(1,e),i.fillStyle=a,i.fillRect(r,0,s,q)}i.fillStyle="rgba(0,0,0,0.25)";for(let r=0;r<q;r+=32)i.fillRect(0,r,q,3);fn(i,0,0,q,q,.12,n)}function hv(){const i=document.createElement("canvas");i.width=i.height=q*4;const t=i.getContext("2d");cv.forEach((n,s)=>{t.save(),t.translate(s%4*q,Math.floor(s/4)*q),t.beginPath(),t.rect(0,0,q,q),t.clip(),n(t),t.restore()});const e=new Wn(i);return e.colorSpace=Ne,e.flipY=!1,e.minFilter=vi,e.anisotropy=8,e}const Ht={HOUSE_GROUND:0,HOUSE_UPPER:1,SHOP_GROUND:2,OFFICE_UPPER:3,APARTMENT_UPPER:4,TEMPLE_WALL:5,FACTORY_WALL:6,KAWARA:7,CONCRETE_ROOF:8,METAL_ROOF:9,TEMPLE_ROOF:10,PLAIN_WALL:11,TOWER:12,GOLD:13,SHRINE_WALL:14,HIWADA:15},Sn={HOUSE:0,BUILDING:1,SACRED:2,FACTORY:3,SHED:4,TOWER:5};function uv(i,t,e){const n=new DataView(i),s=n.getUint32(4,!0),r=[];let a=8;for(let o=0;o<s;o++){const l=n.getUint8(a),c=n.getUint8(a+1),h=n.getUint8(a+2),u=n.getInt16(a+4,!0)/10,f=n.getUint16(a+6,!0)/10;a+=8;const p=new Float32Array(l*2);let g=1/0,x=1/0,m=-1/0,d=-1/0;for(let M=0;M<l;M++){const v=t+n.getInt16(a,!0)/10,_=e+n.getInt16(a+2,!0)/10;a+=4,p[M*2]=v,p[M*2+1]=_,g=Math.min(g,v),m=Math.max(m,v),x=Math.min(x,_),d=Math.max(d,_)}r.push({ring:p,type:c,storeys:h,base:u,height:f,minX:g,minZ:x,maxX:m,maxZ:d})}return r}function ws(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Xa(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}function Ar(i){const t=[];for(let o=0;o<i.length;o+=2)t.push([i[o],i[o+1]]);t.sort((o,l)=>o[0]-l[0]||o[1]-l[1]);const e=(o,l,c)=>(l[0]-o[0])*(c[1]-o[1])-(l[1]-o[1])*(c[0]-o[0]),n=[],s=[];for(const o of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],o)<=0;)n.pop();n.push(o)}for(let o=t.length-1;o>=0;o--){const l=t[o];for(;s.length>=2&&e(s[s.length-2],s[s.length-1],l)<=0;)s.pop();s.push(l)}const r=n.slice(0,-1).concat(s.slice(0,-1));let a=null;for(let o=0;o<r.length;o++){const l=r[o],c=r[(o+1)%r.length];let h=c[0]-l[0],u=c[1]-l[1];const f=Math.hypot(h,u);if(f<1e-6)continue;h/=f,u/=f;let p=1/0,g=-1/0,x=1/0,m=-1/0;for(const M of r){const v=M[0]*h+M[1]*u,_=-M[0]*u+M[1]*h;p=Math.min(p,v),g=Math.max(g,v),x=Math.min(x,_),m=Math.max(m,_)}const d=(g-p)*(m-x);if(!a||d<a.area){const M=(p+g)/2,v=(x+m)/2;a={area:d,cx:M*h-v*u,cz:M*u+v*h,ux:h,uz:u,hu:(g-p)/2,hv:(m-x)/2}}}return a?(a.hv>a.hu&&(a={...a,ux:-a.uz,uz:a.ux,hu:a.hv,hv:a.hu}),a):null}function fv(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=t[2]-i[2],a=e[0]-i[0],o=e[1]-i[1],l=e[2]-i[2];return[s*l-r*o,r*a-n*l,n*o-s*a]}class dv{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.col=[],this.cell=[]}tri(t,e,n,s,r,a,o,l,c=null){if(c){const _=fv(t,e,n),T=(t[0]+e[0]+n[0])/3-c[0],b=(t[1]+e[1]+n[1])/3-c[1],A=(t[2]+e[2]+n[2])/3-c[2];_[0]*T+_[1]*b+_[2]*A<0&&([e,n]=[n,e],[r,a]=[a,r])}const h=e[0]-t[0],u=e[1]-t[1],f=e[2]-t[2],p=n[0]-t[0],g=n[1]-t[1],x=n[2]-t[2];let m=u*x-f*g,d=f*p-h*x,M=h*g-u*p;const v=Math.hypot(m,d,M)||1;m/=v,d/=v,M/=v;for(const[_,T]of[[t,s],[e,r],[n,a]])this.pos.push(_[0],_[1],_[2]),this.nrm.push(m,d,M),this.uv.push(T[0],T[1]),this.col.push(l[0],l[1],l[2]),this.cell.push(o)}quad(t,e,n,s,r,a,o,l,c,h,u=null){this.tri(t,e,n,r,a,o,c,h,u),this.tri(t,n,s,r,o,l,c,h,u)}walls(t,e,n,s,r,a,o,l=null,c=0,h=e){const u=t.length/2;let f=0;for(let p=0;p<u;p++){const g=(p+1)%u,x=t[p*2],m=t[p*2+1],d=t[g*2],M=t[g*2+1],v=Math.hypot(d-x,M-m),_=Math.max(1,Math.round(v/s)),T=f+_,b=(A,P,w,y)=>{const C=(A-h)/r-y,U=(P-h)/r-y;this.quad([x,A,m],[d,A,M],[d,P,M],[x,P,m],[f,C],[T,C],[T,U],[f,U],w,o)};l!==null&&n-h>c+.5?(b(e,h+c,l,0),b(h+c,n,a,c/r)):b(e,n,l??a,0),f=T%64}}flatRoof(t,e,n,s,r=8){const a=t.length/2,o=[];for(let c=0;c<a;c++)o.push(new kt(t[c*2],t[c*2+1]));let l;try{l=Tc.triangulateShape(o,[])}catch{return}for(const[c,h,u]of l){const f=o[c],p=o[h],g=o[u],x=[f.x,e,f.y],m=[p.x,e,p.y],d=[g.x,e,g.y],M=(m[2]-x[2])*(d[0]-x[0])-(m[0]-x[0])*(d[2]-x[2]),v=_=>[_[0]/r,_[2]/r];M>0?this.tri(x,m,d,v(x),v(m),v(d),n,s):this.tri(x,d,m,v(x),v(d),v(m),n,s)}}pitchedRoof(t,e,n,s,r,a,o,l,c){const{cx:h,cz:u,ux:f,uz:p}=t,g=t.hu+s,x=t.hv+s,m=-p,d=f,M=(O,k,W)=>[h+f*O+m*k,W,u+p*O+d*k],v=e+n,_=r==="gable"?g:Math.max(0,g-x),T=Math.hypot(x,n),b=1.2,A=[h,e-100,u];for(const O of[1,-1]){const k=M(-g*O,O*x,e),W=M(g*O,O*x,e),B=M(_*O,0,v),Z=M(-_*O,0,v);this.quad(k,W,B,Z,[0,0],[2*g/b,0],[(g+_)/b,T/1.5],[(g-_)/b,T/1.5],a,o,A)}if(r==="gable")for(const O of[1,-1]){const k=M(O*t.hu,-O*t.hv,e),W=M(O*t.hu,O*t.hv,e),B=M(O*t.hu,0,v);this.tri(k,W,B,[0,0],[2*t.hv/3.6,0],[t.hv/3.6,n/3],l,c,[h,e,u])}else{const O=Math.hypot(g-_,n);for(const k of[1,-1]){const W=M(k*g,-k*x,e),B=M(k*g,k*x,e),Z=M(k*_,0,v);this.tri(W,B,Z,[0,0],[2*x/b,0],[x/b,O/1.5],a,o,A)}}const P=[.3,.27,.24],w=M(-g,-x,e),y=M(g,-x,e),C=M(g,x,e),U=M(-g,x,e);this.quad(w,y,C,U,[0,0],[0,0],[0,0],[0,0],Ht.PLAIN_WALL,P,[h,e+100,u])}toArrays(){return{position:new Float32Array(this.pos),normal:new Float32Array(this.nrm),uv:new Float32Array(this.uv),color:new Float32Array(this.col),cell:new Float32Array(this.cell)}}}const Ql=Math.PI/180,Zi=13,pv=(i,t,e)=>[t[0]+(e[0]-t[0])*i,t[1]+(e[1]-t[1])*i,t[2]+(e[2]-t[2])*i],Sa=[[1,.78,.82],[.75,.93,.86],[.78,.88,1],[1,.96,.7],[.88,.8,1],[1,.86,.7],[1,1,1],[.82,1,.75],[1,.9,.95]],mv=[[.55,.72,1.3],[1.45,.72,.55],[.7,1.2,.78],[.6,1.15,1.15],[1.05,.75,1.3],[1.5,.62,.62],[1.5,1.05,.5],[.9,.95,1.05]],fu=[[1.1,.6,.65],[.6,.88,1.15],[.65,1.05,.75],[1.15,1,.5],[.9,.75,1.15],[1.15,.8,.55],[1.05,1.05,1.05],[.6,1.05,1.05]],Oi=(i,t)=>i[Math.floor(t*i.length)%i.length],gv=[[.95,.92,.86],[.78,.66,.55],[.9,.86,.78],[.7,.58,.48]],_v=[[.75,.77,.8],[.65,.67,.7],[.82,.83,.85]];function Tf(i){return i.type===Sn.TOWER?null:i.type===Sn.SACRED||i.height<=14?i.height:7+ws(i.ring[0],i.ring[1])*6}function xv(i,t,e=[],n=null,s="now",r=50){const a=new dv,o=s==="showa",l=vv(i,e,n);for(const c of l.free)pu(a,c,null);for(const c of i){if(c.skip)continue;if(c.landmark){pu(a,c.landmark,c);continue}const h=Math.abs(Xa(c.ring)),u=ws(c.ring[0],c.ring[1]),f=o?Tf(c):c.height;if(f===null)continue;const p=c.base+f,g=c.base-Zi,x=c.base,m=c.ring;let d=c.type;switch(o&&(d===Sn.BUILDING||d===Sn.FACTORY)&&(d=Sn.HOUSE),d){case Sn.HOUSE:{const M=Ar(m),v=M?h/(4*M.hu*M.hv):0,_=Oi(o?gv:Sa,u),T=Oi(o?_v:mv,ws(u,3.1));if(M&&v>.82&&M.hv>1.5){const b=24*Ql,A=Math.min(M.hv*Math.tan(b),Math.max(1.2,f*.45)),P=Math.max(c.base+2.4,p-A);a.walls(m,g,P,3.6,3,Ht.HOUSE_UPPER,_,Ht.HOUSE_GROUND,3,x);const w=M.hu/M.hv>1.5||u>.55?"gable":"hip";a.pitchedRoof(M,P,p-P,.45,w,Ht.KAWARA,T,Ht.HOUSE_UPPER,_)}else a.walls(m,g,p,3.6,3,Ht.HOUSE_UPPER,_,Ht.HOUSE_GROUND,3,x),a.flatRoof(m,p,Ht.KAWARA,T,1.2);break}case Sn.SACRED:{const M=Ar(m),v=M?M.hv*2:10;if(M&&c.height>v*2.2&&M.hu/M.hv<1.3){Cf(a,M,c.base,c.height,{tiers:5,wall:"wood"});break}const _=pv(u,[.7,.72,.78],[.55,.57,.62]);if(M&&h/(4*M.hu*M.hv)>.8){const T=33*Ql,b=Math.min(M.hv*Math.tan(T),c.height*.6),A=Math.max(c.base+2.5,p-b);a.walls(m,g,A,3,3.5,Ht.TEMPLE_WALL,[1,1,1],null,0,x);const P=Math.min(3,.8+M.hv*.15);a.pitchedRoof(M,A,p-A,P,"hip",Ht.TEMPLE_ROOF,_)}else a.walls(m,g,p,3,3.5,Ht.TEMPLE_WALL,[1,1,1],null,0,x),a.flatRoof(m,p,Ht.TEMPLE_ROOF,_,1.2);break}case Sn.FACTORY:{const M=Oi(Sa,u);a.walls(m,g,p,4,4,Ht.FACTORY_WALL,M,null,0,x),a.flatRoof(m,p,Ht.METAL_ROOF,Oi(fu,ws(u,1.7)),6);break}case Sn.SHED:{const M=Oi(Sa,u);a.walls(m,g,p,3,2.5,Ht.PLAIN_WALL,M,null,0,x),a.flatRoof(m,p,Ht.METAL_ROOF,[.6,.6,.62],6);break}case Sn.TOWER:{Pf(a,m,c.base,c.height);break}default:{const M=u>.6&&c.height<45,v=Oi(Sa,ws(u,M?2.2:5.3));a.walls(m,g,p,3.2,3.3,M?Ht.APARTMENT_UPPER:Ht.OFFICE_UPPER,v,Ht.SHOP_GROUND,3.6,x),a.flatRoof(m,p,Ht.CONCRETE_ROOF,Oi(fu,ws(u,9.1)),8)}}}return a.toArrays()}function du(i,t,e){let n=!1;const s=e.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=e[r*2],l=e[r*2+1],c=e[a*2],h=e[a*2+1];l>t!=h>t&&i<(c-o)*(t-l)/(h-l)+o&&(n=!n)}return n}function vv(i,t,e){const n=[];for(const s of t){const r=!e||s.x>=e.x0&&s.x<e.x1&&s.z>=e.z0&&s.z<e.z1;let a=null,o=1/0;if(s.kind==="pagoda"){for(const l of i){if(l.landmark||l.type!==Sn.SACRED||l.height<12)continue;const c=(l.minX+l.maxX)/2,h=(l.minZ+l.maxZ)/2;if(Math.hypot(c-s.x,h-s.z)>40)continue;const u=Ar(l.ring);!u||u.hu/u.hv>1.4||l.height<u.hv*2*1.05||-l.height<o&&(o=-l.height,a=l)}if(a){a.landmark=s;continue}}for(const l of i){if(l.landmark||l.type===Sn.SHED||s.x<l.minX-40||s.x>l.maxX+40||s.z<l.minZ-40||s.z>l.maxZ+40)continue;const c=Math.abs(Xa(l.ring));if(c<25)continue;let h;if(du(s.x,s.z,l.ring))h=-c;else{const u=(l.minX+l.maxX)/2,f=(l.minZ+l.maxZ)/2,p=Math.hypot(u-s.x,f-s.z);if(p>30)continue;h=p*100-c}h<o&&(o=h,a=l)}if(a&&(s.kind==="pagoda"||s.kind==="kinkaku"||s.kind==="ginkaku"||s.kind==="gate")&&s.free){const l=Ar(a.ring);l&&l.hu/l.hv<(s.kind==="gate"?4:1.6)&&Math.abs(l.hv*2-(s.free.d??s.free.w))<(s.free.d??s.free.w)*.8||(du(s.x,s.z,a.ring)&&Math.abs(Xa(a.ring))<1500&&(a.skip=!0),a=null)}a?a.landmark=s:s.free&&r&&n.push(s)}return{free:n}}const qa={gray:[Ht.TEMPLE_ROOF,[.75,.77,.82]],hiwada:[Ht.HIWADA,[1,1,1]],green:[Ht.TEMPLE_ROOF,[.55,1.35,1.05]]},Gs={wood:[Ht.TEMPLE_WALL,[.85,.72,.6]],vermilion:[Ht.SHRINE_WALL,[1,1,1]],white:[Ht.TEMPLE_WALL,[1.05,1.05,1.05]]};function pu(i,t,e){var a;let n,s,r;if(e){if(n=Ar(e.ring),s=e.base,r=e.height,!n)return}else{const o=(t.free.deg??0)*Ql;n={cx:t.x,cz:t.z,ux:Math.cos(o),uz:Math.sin(o),hu:(t.free.w??10)/2,hv:(t.free.d??t.free.w??10)/2},n.hv>n.hu&&(n={...n,ux:-n.uz,uz:n.ux,hu:n.hv,hv:n.hu}),s=t.y,r=t.free.h}switch((a=t.free)!=null&&a.h&&t.kind!=="hall"&&t.kind!=="shrine"&&(r=Math.max(r,t.free.h*.8)),t.kind){case"pagoda":return Cf(i,n,s,r,t);case"gate":return yv(i,n,s,Math.max(r,10),t);case"kinkaku":return Sv(i,n,s,Math.max(r,11));case"ginkaku":return wv(i,n,s,Math.max(r,8));case"tower":return Pf(i,e.ring,s,r);case"shrine":return Mv(i,n,s,Math.max(r,8),t);default:return Rf(i,n,s,Math.max(r,8),t)}}function pn(i,t,e=t){return{...i,hu:i.hu*t,hv:i.hv*e}}function bf(i,t,e,n){i.walls(an(pn(t,1)),e-Zi,e+n,2,2,Ht.PLAIN_WALL,[.82,.8,.76]),i.flatRoof(an(t),e+n,Ht.PLAIN_WALL,[.78,.76,.72],4)}function Af(i,t,e,n,s,r){const[a,o]=qa[r]??qa.gray;i.pitchedRoof(t,e,n*.62,s,"hip",a,o);const l=pn(t,.82,.5);i.pitchedRoof(l,e+n*.5,n*.5,.2,"gable",a,o,a,o)}function Rf(i,t,e,n,s){const[r,a]=Gs[s.wall]??Gs.wood,o=Math.min(1.6,n*.08);bf(i,pn(t,1.02),e,o);const l=pn(t,.88),c=e+o+Math.max(4,n*.4);i.walls(an(l),e+o,c,3.2,3.6,r,a);const h=Math.max(3,e+n-c);Af(i,l,c,h,Math.min(5,1.5+l.hv*.22),s.roof)}function Mv(i,t,e,n,s){Rf(i,t,e,n,{...s,wall:"vermilion"})}function yv(i,t,e,n,s){const[r,a]=Gs[s.wall]??Gs.vermilion,[o,l]=qa[s.roof]??qa.gray,c=n,h=pn(t,.8);i.walls(an(h),e-Zi,e+c*.34,2.4,3.5,r,a),i.pitchedRoof(h,e+c*.34,c*.08,Math.max(1,t.hv*.35),"hip",o,l);const u=pn(t,.72);i.walls(an(u),e+c*.4,e+c*.62,2.4,3.5,r,a),Af(i,u,e+c*.62,c*.38,Math.max(1.2,t.hv*.45),s.roof)}function Cf(i,t,e,n,s){const r=s.tiers??5,[a,o]=Gs[s.wall]??Gs.wood,l=Math.max(t.hu,t.hv),c={...t,hu:l,hv:l},h=n*.24,u=n-h,f=u/r,p=[.55,.56,.6];bf(i,pn(c,1.25),e,1.2);for(let m=0;m<r;m++){const d=l*(1-m*(.4/r)),M=e+1.2+m*f,v={...t,hu:d*.6,hv:d*.6};i.walls(an(v),M-(m?.5:Zi),M+f*.5,1.8,2.8,a,o.map(_=>_*.75)),i.pitchedRoof(v,M+f*.5,f*.4,d*.95,"hip",Ht.TEMPLE_ROOF,p)}const g=e+1.2+u,x=Math.max(.25,l*.05);i.walls(an({...t,hu:x,hv:x}),g-1.5,g+h,1,2,Ht.METAL_ROOF,[.45,.38,.28]);for(let m=0;m<9;m++){const d=g+h*(.15+m*.07);i.walls(an({...t,hu:x*3,hv:x*3}),d,d+h*.025,1,1,Ht.METAL_ROOF,[.55,.45,.25])}}function Sv(i,t,e,n){const s=pn(t,.9),r=[Ht.HIWADA,[.75,.68,.62]];i.walls(an(s),e-Zi,e+n*.3,2.5,3,Ht.TEMPLE_WALL,[.95,.85,.7]),i.pitchedRoof(s,e+n*.3,n*.06,1.2,"hip",r[0],r[1]),i.walls(an(pn(s,.95)),e+n*.36,e+n*.58,2.5,3,Ht.GOLD,[1.25,1.2,1.1]),i.pitchedRoof(pn(s,.95),e+n*.58,n*.06,1.1,"hip",r[0],r[1]);const a=pn(s,.62);i.walls(an(a),e+n*.64,e+n*.8,2,3,Ht.GOLD,[1.25,1.2,1.1]),i.pitchedRoof(a,e+n*.8,n*.2,1.1,"hip",r[0],r[1]),i.walls(an({...t,hu:.5,hv:.3}),e+n,e+n+1.6,1,1,Ht.GOLD,[1.3,1.25,1.1])}function wv(i,t,e,n){const s=pn(t,.9);i.walls(an(s),e-Zi,e+n*.38,2.5,3,Ht.TEMPLE_WALL,[.7,.6,.5]),i.pitchedRoof(s,e+n*.38,n*.08,1.1,"hip",Ht.HIWADA,[.7,.65,.6]);const r=pn(s,.7);i.walls(an(r),e+n*.46,e+n*.72,2,3,Ht.TEMPLE_WALL,[.45,.4,.38]),i.pitchedRoof(r,e+n*.72,n*.28,1.2,"hip",Ht.HIWADA,[.7,.65,.6])}function an(i){const{cx:t,cz:e,ux:n,uz:s,hu:r,hv:a}=i,o=-s,l=n,c=new Float32Array(8);if([[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([h,u],f)=>{c[f*2]=t+n*h*r+o*u*a,c[f*2+1]=e+s*h*r+l*u*a}),Xa(c)>0){const h=new Float32Array(8);for(let u=0;u<4;u++)h[u*2]=c[(3-u)*2],h[u*2+1]=c[(3-u)*2+1];return h}return c}function Pf(i,t,e,n){let s=0,r=0;const a=t.length/2;for(let f=0;f<a;f++)s+=t[f*2],r+=t[f*2+1];s/=a,r/=a;const o=Math.min(31,n*.25);i.walls(t,e-Zi,e+o,3.2,3.3,Ht.OFFICE_UPPER,[1,1,1],Ht.SHOP_GROUND,4),i.flatRoof(t,e+o,Ht.CONCRETE_ROOF,[.9,.9,.9]);const l=16,c=[[0,6.5],[.55,4.5],[.72,4.2],[.74,7.5],[.84,7.5],[.86,3.5],[.97,1.2],[1,.3]],h=e+o,u=e+n;for(let f=0;f<c.length-1;f++){const[p,g]=c[f],[x,m]=c[f+1],d=h+(u-h)*p,M=h+(u-h)*x,v=f===3?Ht.OFFICE_UPPER:Ht.TOWER,_=f>=5?f%2?[1,.3,.25]:[1,1,1]:[1,1,1];for(let T=0;T<l;T++){const b=T/l*Math.PI*2,A=(T+1)/l*Math.PI*2;i.quad([s+Math.cos(b)*g,d,r+Math.sin(b)*g],[s+Math.cos(A)*g,d,r+Math.sin(A)*g],[s+Math.cos(A)*m,M,r+Math.sin(A)*m],[s+Math.cos(b)*m,M,r+Math.sin(b)*m],[T/2,0],[(T+1)/2,0],[(T+1)/2,(M-d)/3.3],[T/2,(M-d)/3.3],v,_,[s,(d+M)/2,r])}}}const xs=50;function Ev(){const i=new Le({vertexColors:!0,map:hv()});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
			`)},i}const Tv=[["#f5c61e","#ffd84a","#e8b10c"],["#d8301c","#ee5a24","#c21f2c"],["#d07a26","#b85c1c","#e0962e"]],bv=new Qa(2.4,1).scale(1,1.25,1).translate(0,5.2,0),Av=new Qa(2.4,0).scale(1,1.25,1).translate(0,5.2,0),Rv=new Xt(.22,.3,3.6,6).translate(0,1.8,0),Cv=new Le({color:16777215,flatShading:!0}),Pv=new Le({color:5914155});function Lv(i){for(const t of Object.values(i.attributes))t.onUpload(function(){this.array=null})}class Iv{constructor(t,e,{near:n=1400,far:s=3800,era:r="now",lite:a=!1}={}){this.far=s,this.lite=a,this.releaseDist=s+1e3,this.era=r,this.landmarks=null,this.near=n,this.group=new Re,this.group.name="buildings",t.add(this.group),this.baseUrl=e,this.material=Ev(),this.chunks=new Map,this.chunkSize=1e3,this.worker=new Worker(new URL(""+new URL("buildingWorker-ByTVu8NV.js",import.meta.url).href,import.meta.url),{type:"module"}),this.jobs=new Map,this.jobId=0,this.worker.onmessage=o=>{const l=this.jobs.get(o.data.id);this.jobs.delete(o.data.id),l==null||l(o.data.arrays,o.data.sphere)},this.busy=0}async init(){this.treeUrl=this.baseUrl.replace(/buildings\/$/,"trees/");try{this.treeIndex=new Set(await(await fetch(`${this.treeUrl}index.json`)).json())}catch{this.treeIndex=new Set}const e=await(await fetch(`${this.baseUrl}index.json`)).json();this.chunkSize=e.chunk;for(const[n,s,r]of e.chunks)this.chunks.set(`${n}_${s}`,{cx:n,cz:s,count:r,x:(n+.5)*e.chunk,z:(s+.5)*e.chunk,buffer:null,list:null,grid:null,loading:!1,mesh:null,lod:-1,building:!1})}build(t,e){t.building=!0,this.busy++;const n=++this.jobId,s=t.cx*this.chunkSize,r=t.cz*this.chunkSize,a=this.chunkSize,o=this.era,l=this.landmarks.filter(c=>c.x>s-60&&c.x<s+a+60&&c.z>r-60&&c.z<r+a+60&&!(o==="showa"&&c.kind==="tower"));this.worker.postMessage({id:n,buffer:t.buffer.slice(0),ox:s,oz:r,size:a,detail:e,landmarks:l,era:o,minArea:this.lite?70:50}),this.jobs.set(n,(c,h)=>{if(this.busy--,t.building=!1,!t.buffer)return;const u=new xe;u.setAttribute("position",new Ie(c.position,3)),u.setAttribute("normal",new Ie(c.normal,3)),u.setAttribute("uv",new Ie(c.uv,2)),u.setAttribute("color",new Ie(c.color,3)),u.setAttribute("cell",new Ie(c.cell,1)),u.boundingSphere=new si(new L(h[0],h[1],h[2]),h[3]),Lv(u);const f=new xt(u,this.material);f.castShadow=!0,f.receiveShadow=!0,f.matrixAutoUpdate=!1,t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose()),t.mesh=f,t.lod=o===this.era?e:-1,this.group.add(f)})}setEra(t){if(t!==this.era){this.era=t;for(const e of this.chunks.values())e.mesh&&(e.lod=-1);this.lastUpdate=0}}async load(t){t.loading=!0;try{const e=await fetch(`${this.baseUrl}${t.cx}_${t.cz}.bin`);if(t.buffer=await e.arrayBuffer(),t.list=uv(t.buffer,t.cx*this.chunkSize,t.cz*this.chunkSize),t.grid=new Map,t.list.forEach((n,s)=>{for(let r=Math.floor(n.minX/xs);r<=Math.floor(n.maxX/xs);r++)for(let a=Math.floor(n.minZ/xs);a<=Math.floor(n.maxZ/xs);a++){const o=`${r}_${a}`;t.grid.has(o)||t.grid.set(o,[]),t.grid.get(o).push(s)}}),this.treeIndex.has(`${t.cx}_${t.cz}`)){const n=await fetch(`${this.treeUrl}${t.cx}_${t.cz}.bin`);t.trees=await n.arrayBuffer()}}catch(e){console.warn("building chunk",t.cx,t.cz,e)}t.loading=!1}release(t){this.removeTrees(t),t.trees=null,t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose()),t.mesh=null,t.lod=-1,t.buffer=null,t.list=null,t.grid=null}addStandalone(t){const e=xv([],1,t,null,this.era),n=new xe;for(const[r,a]of[["position",3],["normal",3],["uv",2],["color",3],["cell",1]])n.setAttribute(r,new Ie(e[r],a));n.computeBoundingSphere();const s=new xt(n,this.material);s.castShadow=s.receiveShadow=!0,this.group.add(s)}setLandmarks(t,e){this.landmarks=t,this.heightAtWorld=e}buildTrees(t){const e=new DataView(t.trees),n=e.getUint32(4,!0),s=new wi(this.lite?Av:bv,Cv,n),r=new wi(Rv,Pv,n),a=new de,o=new It;for(let l=0;l<n;l++){const c=t.cx*this.chunkSize+e.getInt16(8+l*6,!0)/10,h=t.cz*this.chunkSize+e.getInt16(10+l*6,!0)/10,u=e.getUint8(12+l*6)%3,f=Math.abs(Math.sin(c*12.9898+h*78.233)*43758.5453)%1;a.position.set(c,this.heightAtWorld(c,h)-.2,h),a.rotation.y=f*6.28,a.scale.setScalar(.8+f*.5),a.updateMatrix(),s.setMatrixAt(l,a.matrix),r.setMatrixAt(l,a.matrix),s.setColorAt(l,o.set(Tv[u][Math.floor(f*3)]))}for(const l of[s,r])l.castShadow=!0,l.receiveShadow=!0,l.computeBoundingSphere(),this.group.add(l);t.treeMeshes=[s,r]}removeTrees(t){for(const e of t.treeMeshes??[])this.group.remove(e),e.dispose();t.treeMeshes=null}update(t){if(!this.landmarks)return;const e=performance.now();if(e-(this.lastUpdate??0)<250)return;this.lastUpdate=e;const n=[...this.chunks.values()].map(s=>({c:s,d:Math.max(0,Math.hypot(s.x-t.x,s.z-t.z)-this.chunkSize*.5)})).sort((s,r)=>s.d-r.d);for(const{c:s,d:r}of n){if(r>this.releaseDist){(s.buffer||s.mesh)&&this.release(s);continue}if(r>this.far*(this.lite?.45:.7)?this.removeTrees(s):s.trees&&!s.treeMeshes&&this.buildTrees(s),r>this.far){s.mesh&&(this.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh=null,s.lod=-1);continue}if(!s.buffer){s.loading||this.load(s);continue}const a=r<this.near?1:0;s.lod!==a&&!s.building&&this.busy<2&&this.build(s,a)}}readyAround(t,e){let n=0,s=0;for(const r of this.chunks.values())Math.hypot(r.x-t.x,r.z-t.z)<e&&(n++,r.mesh&&s++);return n?s/n:1}inside(t,e,n){return this.hit({x:t,y:n,z:e},0)}hit(t,e=.6){const n=this.chunks.get(`${Math.floor(t.x/this.chunkSize)}_${Math.floor(t.z/this.chunkSize)}`);if(!(n!=null&&n.grid))return!1;const s=n.grid.get(`${Math.floor(t.x/xs)}_${Math.floor(t.z/xs)}`);if(!s)return!1;for(const r of s){const a=n.list[r],o=this.era==="showa"?Tf(a):a.height;if(o!==null&&!(t.y>a.base+o+e||t.y<a.base-3)&&!(t.x<a.minX-e||t.x>a.maxX+e||t.z<a.minZ-e||t.z>a.maxZ+e)&&Dv(t.x,t.z,a.ring))return!0}return!1}}function Dv(i,t,e){let n=!1;const s=e.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=e[r*2],l=e[r*2+1],c=e[a*2],h=e[a*2+1];l>t!=h>t&&i<(c-o)*(t-l)/(h-l)+o&&(n=!n)}return n}const tc=9.81,vs=Xe.DEG2RAD,Uv=11,Lf=17,ec=-Math.atan(1/Uv),Fv=tc*Math.sin(-ec)/Lf**2,Nv=9,Ov=16,nc=40;class Bv{constructor(){this.position=new L,this.velocity=new L,this.yaw=0,this.gamma=ec,this.bank=0,this.speed=Lf,this.jetFuel=0,this.jetting=!1,this.stalled=!1,this.object=kv(),this.jetFlame=this.object.getObjectByName("flame")}reset(t,e){this.position.copy(t),this.yaw=e,this.gamma=-20*vs,this.bank=0,this.speed=14,this.jetFuel=0,this.jetting=!1,this.stalled=!1,this.syncObject()}forward(t=new L){return t.set(Math.sin(this.yaw),0,-Math.cos(this.yaw))}update(t,e,n=0){this.jetting=e.jet&&this.jetFuel>0,this.jetting&&(this.jetFuel=Math.max(0,this.jetFuel-t));const s=e.roll*55*vs;this.bank+=(s-this.bank)*Math.min(1,t*2.5),this.yaw+=tc*Math.tan(this.bank)/Math.max(this.speed,8)*t,this.stalled=this.speed<Nv&&!this.jetting;let a=(this.jetting?2*vs:ec)+(e.pitch>0?e.pitch*32*vs:e.pitch*50*vs);this.stalled&&(a=Math.min(a,-35*vs));const o=this.stalled?2.5:1.6;this.gamma+=(a-this.gamma)*Math.min(1,t*o);const l=1+.6*(1/Math.cos(this.bank)-1);let c=-tc*Math.sin(this.gamma)-Fv*this.speed**2*l;this.jetting&&(c+=Ov),this.speed=Math.max(4,this.speed+c*t);const h=this.forward(),u=this.speed*Math.cos(this.gamma);this.velocity.set(h.x*u,this.speed*Math.sin(this.gamma)+n,h.z*u),this.position.addScaledVector(this.velocity,t),this.syncObject()}syncObject(){const t=this.object;t.position.copy(this.position),t.rotation.set(this.gamma*.8,-this.yaw,-this.bank,"YXZ"),this.jetFlame.visible=this.jetting,this.jetting&&this.jetFlame.scale.setScalar(.8+Math.random()*.5)}addJet(t){this.jetFuel=Math.min(nc,this.jetFuel+t)}}function zv(){const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d"),e=["#1d3f8f","#f4f1ea","#d7262e","#f6b51e","#d7262e","#f4f1ea","#d7262e","#f6b51e","#d7262e","#f4f1ea","#1d3f8f"],n=i.width/e.length;e.forEach((r,a)=>{t.fillStyle=r,t.fillRect(a*n,0,n+1,i.height)}),t.strokeStyle="rgba(0,0,0,0.18)",t.lineWidth=2;for(let r=1;r<e.length;r++)t.beginPath(),t.moveTo(r*n,0),t.lineTo(r*n,i.height),t.stroke();for(let r=40;r<i.height;r+=50)t.strokeStyle="rgba(0,0,0,0.07)",t.beginPath(),t.moveTo(0,r),t.lineTo(i.width,r),t.stroke();t.fillStyle="#2b2b30",t.fillRect(0,0,i.width,14);const s=new Wn(i);return s.colorSpace=Ne,s}function kv(){const i=new Re;i.name="glider";const t=10.4,e=2.3,n=3.1,s=1.35,r=-1.75,a=20,o=6,l=[],c=[],h=[];for(let B=0;B<=a;B++){const Z=B/a*2-1,G=Math.abs(Z),st=r+G*e,ht=n*(1-G*.8)+.25;for(let _t=0;_t<=o;_t++){const zt=_t/o,Qt=Z*t/2,pe=s+.12+G*.32+Math.sin(Math.PI*zt)*.16*(1-G*G)-zt*G*.12,ie=st+ht*zt;l.push(Qt,pe,ie),c.push(B/a,1-zt)}}for(let B=0;B<a;B++)for(let Z=0;Z<o;Z++){const G=B*(o+1)+Z,st=G+o+1;h.push(G,G+1,st,st,G+1,st+1)}const u=new xe;u.setAttribute("position",new ne(l,3)),u.setAttribute("uv",new ne(c,2)),u.setIndex(h),u.computeVertexNormals();const f=new xt(u,new yn({map:zv(),side:wn,roughness:.7}));f.castShadow=!0,i.add(f);const p=new yn({color:11844804,metalness:.7,roughness:.35}),g=(B,Z,G=.022,st=i,ht=p)=>{const _t=new L(...B),zt=new L(...Z),Qt=new xt(new Xt(G,G,_t.distanceTo(zt),8),ht);return Qt.position.copy(_t).add(zt).multiplyScalar(.5),Qt.quaternion.setFromUnitVectors(new L(0,1,0),zt.clone().sub(_t).normalize()),Qt.castShadow=!0,st.add(Qt),Qt};g([0,s+.08,r-.05],[0,s+.02,r+n+.1],.03),g([0,s+.12,r],[-t/2,s+.44,r+e],.028),g([0,s+.12,r],[t/2,s+.44,r+e],.028),g([-t*.3,s+.25,r+e*.6+.2],[t*.3,s+.25,r+e*.6+.2],.02),g([0,s+.1,-.2],[0,s+.75,-.2],.02).name="centerPole";const x=-.42,m=-.62,d=.72;g([0,s,-.15],[-d,x,m]),g([0,s,-.15],[d,x,m]),g([-d,x,m],[d,x,m],.02);const M=new yn({color:6710886});for(const B of[-1,1])g([B*d,x,m],[B*t/2*.62,s+.33,r+e*.62+.1],.005,i,M),g([0,s+.75,-.2],[B*t/2*.62,s+.33,r+e*.62+.1],.005,i,M);g([0,x,m],[0,s+.05,r],.005,i,M).name="centerPole";const v=new Re;v.name="pilotBody";const _=new yn({color:2042436,roughness:.8}),T=new yn({color:16168222,roughness:.6}),b=new yn({color:14726287,roughness:.8}),A=new xt(new ti(.25,1.25,6,12),_);A.rotation.x=Math.PI/2,A.position.set(0,-.12,.78),A.scale.set(1,1,.85),v.add(A);const P=new xt(new ti(.255,.9,4,12),T);P.rotation.x=Math.PI/2,P.position.set(0,-.12,.85),P.scale.set(1.01,1,.2),v.add(P);const w=new xt(new ti(.13,.32,4,8),_);w.rotation.z=Math.PI/2,w.position.set(0,-.08,.12),v.add(w);for(const B of[-1,1]){const Z=[B*.24,-.08,.12],G=[B*.44,-.3,-.22],st=[B*.42,x,m];g(Z,G,.065,v,_),g(G,st,.055,v,_);const ht=new xt(new oe(.06,8,6),b);ht.position.set(...st),v.add(ht)}g([0,s,.25],[0,.08,.45],.025,v,new yn({color:2236962})),v.traverse(B=>{B.castShadow=!0}),i.add(v);const y=new Re;y.name="pilotHead";const C=new xt(new oe(.16,16,12),new yn({color:16777215,roughness:.3}));C.scale.set(1,.95,1.1),y.add(C);const U=new xt(new oe(.162,16,12,0,Math.PI*2,0,Math.PI*.35),new yn({color:14100014,roughness:.3}));U.scale.set(.35,.95,1.1),y.add(U);const O=new xt(new oe(.15,16,8,Math.PI*.15,Math.PI*.7,Math.PI*.35,Math.PI*.3),new yn({color:1120290,roughness:.1,metalness:.6}));O.rotation.y=Math.PI,O.scale.set(1.05,1,1.12),y.add(O),y.position.set(0,0,-.05),y.traverse(B=>{B.castShadow=!0}),i.add(y);const k=new xt(new Xt(.16,.12,.5,12),p);k.rotation.x=Math.PI/2,k.position.set(0,-.12,1.65),i.add(k);const W=new xt(new Xt(.05,.3,2.2,12,1,!0),new yn({color:16752672,emissive:16738816,emissiveIntensity:3,transparent:!0,opacity:.85,depthWrite:!1}));return W.rotation.x=Math.PI/2,W.position.set(0,-.12,3),W.name="flame",i.add(W),i}const qo=(()=>{try{return localStorage.getItem("kiyomizu-lang")}catch{return null}})();var Uu;const Hs=qo==="ja"||qo==="en"?qo:(((Uu=navigator.languages)==null?void 0:Uu[0])??navigator.language??"ja").toLowerCase().startsWith("ja")?"ja":"en",mu={ja:{start:`🎌 清水の舞台 🎌
ターボ ×1 で出発！`,hintTouch:"画面をタップで飛び降りる！",hintKey:"スペースキーで飛び降りる！",jump:`とうっ！
清水の舞台から
飛び降りた！`,visited:i=>`通過: ${i.join(" → ")}`,noBalloons:"アドバルーンは割れなかった…",save:"記録する",saved:"記録しました",anonymous:"名無しの参拝者",share:(i,t)=>`清水の舞台から飛び降りるつもりで、紅葉の京都の空を ${i}km 飛んでアドバルーンを ${t} 個割った！🎈`,hashtag:"清水の舞台から飛び降りるつもり",noRecords:"まだ記録がありません",chasing:i=>i>1?` ・追跡中×${i}`:" ・追跡中",toShowa:`⏳ 昭和初期へ
タイムスリップ！`,toNow:`⏳ 現代に
もどってきた！`,landed:["着陸！","地面に降り立ちました。"],roof:["屋根に着地！","建物の屋根に降り立ちました。"],crash:["ドーン！","建物にぶつかってしまいました。"],outside:["京都の外へ…","京都盆地を飛び出してしまいました。"],clear:["🏯 全制覇！ 🏯","京都の名所をすべてめぐりました！ 鬼からも逃げ切った！"],caught:["つかまった！","鬼に捕まってしまいました… 👹"],checkpoint:i=>`🎆 チェックポイント！ 🎆
${i}
ターボ +1 🚀`,moreOni:i=>`
👹 見張りの鬼が増えた！ (${i}匹)`,spawned:i=>`👹 鬼が${i}匹、京都を徘徊中…
見つからないように！`,foundMany:i=>`👹 鬼${i}匹に見つかった！`,found:`👹 鬼に見つかった！
逃げろ〜！`,noTurbo:"ターボ切れ！",thermal:"✨ 上昇気流！",loadingTown:"紅葉の京都の街並みを組み立て中…",loadFailed:i=>`読み込みに失敗しました: ${i}`,shareDialog:"シェアする",continued:i=>` (コンティニュー${i}回)`,contWatch:"🎬 広告を見て続きから飛ぶ",contLoading:"広告を読み込み中…",contFail:"広告を読み込めませんでした",contNote:i=>`少し前の場所から飛び直せて、ターボ +1 (あと${i}回)`,contSkip:i=>`結果を見る (${i})`,contGo:`🪂 続きから！
ターボ +1 プレゼント 🚀`,resumeApp:"再開",howtoApp:[["👹","<b>鬼ごっこ</b>！ 鬼が20匹、京都の名所のまわりを徘徊している。近づくと見つかって追いかけてくる。捕まったら負け。アドバルーンを1個割るごとに鬼が1匹増え、時間がたつと速くなる"],["🎯","名所のアドバルーンを割ってチェックポイント通過！ 花火があがって<b>ターボ +1</b>。全部割ったらクリア"],["🕹","左下のスティックで操縦。上に倒すと上昇、下に倒すと下降 (スピードアップ)、左右で旋回"],["🚀","「ターボ」ボタンを押している間だけ噴射。最初は<b>1つ</b>。アドバルーンで増えます"],["👀","「視点」ボタンで視点切替 (後ろから ⇔ パイロット目線)"],["⏳","「時代」ボタンで、飛びながら<b>現代 ⇔ 昭和初期</b>にタイムスリップ！ 市電や銭湯の煙突、二代目京都駅が見られる"],["✨","光の粒が昇る場所は<b>上昇気流</b>。中で旋回すると高度アップ"],["⚠","地面や建物に降りたらゲーム終了。スピードが落ちすぎると失速！ 広告を見ると続きから飛べて、ターボも1つもらえる (1回のゲームで3回まで)"]],howtoPause:"右上の ⏸ ボタンで一時停止",howtoPauseAndroid:"右上の ⏸ ボタンか、戻るボタンで一時停止"},en:{start:`🎌 The Kiyomizu Stage 🎌
Starting with Turbo ×1!`,hintTouch:"Tap the screen to jump!",hintKey:"Press Space to jump!",jump:`Here goes!
Leaping off the
Kiyomizu stage!`,visited:i=>`Visited: ${i.join(" → ")}`,noBalloons:"No balloons popped…",save:"Save",saved:"Saved",anonymous:"Nameless Pilgrim",share:(i,t)=>`I took the plunge from the Kiyomizu stage, flew ${i} km over autumn Kyoto and popped ${t} balloons! 🎈`,hashtag:"KiyomizuDive",noRecords:"No records yet",chasing:i=>i>1?` ・Chasing ×${i}`:" ・Chasing",toShowa:`⏳ Time slip to
the early Showa era!`,toNow:`⏳ Back to
the present!`,landed:["Landed!","You touched down on the ground."],roof:["Roof landing!","You landed on a rooftop."],crash:["Bang!","You crashed into a building."],outside:["Out of Kyoto…","You flew out of the Kyoto basin."],clear:["🏯 All clear! 🏯","You visited every sight in Kyoto and escaped the oni!"],caught:["Caught!","The oni got you… 👹"],checkpoint:i=>`🎆 Checkpoint! 🎆
${i}
Turbo +1 🚀`,moreOni:i=>`
👹 Another oni is on watch! (${i})`,spawned:i=>`👹 ${i} oni are roaming Kyoto…
Don't get spotted!`,foundMany:i=>`👹 ${i} oni spotted you!`,found:`👹 An oni spotted you!
Run!`,noTurbo:"Out of turbo!",thermal:"✨ Thermal!",loadingTown:"Building the autumn streets of Kyoto…",loadFailed:i=>`Failed to load: ${i}`,shareDialog:"Share",continued:i=>` (continued ×${i})`,contWatch:"🎬 Watch an ad to keep flying",contLoading:"Loading the ad…",contFail:"Could not load the ad",contNote:i=>`Fly again from a moment ago with Turbo +1 (${i} left)`,contSkip:i=>`See results (${i})`,contGo:`🪂 Keep flying!
Bonus: Turbo +1 🚀`,resumeApp:"Resume",howtoApp:[["👹","<b>Oni tag!</b> 20 oni roam around the sights of Kyoto. Get close and they spot you and give chase. If they catch you, you lose. Each balloon you pop adds another oni, and they get faster over time"],["🎯","Pop the ad balloons over the sights to pass checkpoints! Fireworks go up and you get <b>Turbo +1</b>. Pop them all to clear the game"],["🕹","Steer with the stick at the bottom left. Push up to climb, pull down to dive (speed up), left/right to turn"],["🚀",'Hold the "Turbo" button to boost. You start with <b>1</b> and get more from balloons'],["👀",'The "View" button switches the view (chase cam ⇔ pilot view)'],["⏳",'The "Era" button time-slips between <b>today ⇔ early Showa</b> mid-flight! See streetcars, bathhouse chimneys and the old Kyoto Station'],["✨","Where sparkles rise there is a <b>thermal</b>. Circle inside it to gain height"],["⚠","Touch the ground or a building and the game ends. Fly too slowly and you stall! Watch an ad to keep flying and get a bonus turbo (up to 3 times a game)"]],howtoPause:"Tap the ⏸ button at the top right to pause",howtoPauseAndroid:"Tap the ⏸ button at the top right, or press Back, to pause"}};function Ft(i,...t){const e=mu[Hs][i]??mu.ja[i];return typeof e=="function"?e(...t):e}function ja(i){return Hs==="en"&&i.en?i.en:i.name}const Gv={l1:"Take the plunge from",l2:[..."KIYOMIZU"].map(i=>`<b>${i}</b>`).join(""),lead:"Hang-glide off the Kiyomizu stage!<br />Play <b>oni tag</b> 👹 in the autumn skies of Kyoto.<br />Escape the oni and pop every ad balloon over the sights! 🎈",loading:"Loading the terrain of Kyoto…",start:"🪂 Jump!",ranking:"🏆 Ranking",howto:"❓ How to play",quality:"Graphics",qLow:"Light (no shadows, recommended)",qHigh:"Pretty (shadows, heavy)",era:"Era",eraNow:"Today",eraShowa:"Early Showa",lang:"Language",mute:"Mute",credit:'Terrain & aerial photos: <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">GSI Tiles (Geospatial Information Authority of Japan)</a> / Buildings: based on <a href="https://www.mlit.go.jp/plateau/" target="_blank" rel="noopener">MLIT Project PLATEAU</a> (Kyoto City 3D city model)',creditHud:"Terrain & photos: GSI Japan / Buildings: based on MLIT Project PLATEAU",height:"Height",speed:"Speed",climb:"Climb",alt:"Alt.",wipe:"● Front cam",oni:"👹 Oni",turbo:"🚀 Turbo",turboKeys:"Space / Shift: boost ・ T: era",stall:"⚠ Stall! Press ↓ to dive!",touchJet:"🚀<br />Turbo",touchCam:"View",touchEra:"Era",howtoTitle:"❓ How to play",howtoList:[["👹","<b>Oni tag!</b> 20 oni roam around the sights of Kyoto. Get close and they spot you and give chase. If they catch you, you lose. Each balloon you pop adds another oni, and they get faster over time"],["🎯","Pop the ad balloons over the sights to pass checkpoints! Fireworks go up and you get <b>Turbo +1</b>. Pop them all to clear the game"],["↑ ↓","↑ to climb, ↓ to dive (speed up)"],["← →","Turn left / right"],["Space","Turbo boost (while held). You start with <b>1</b> and get more from balloons"],["C","Switch view (chase cam ⇔ pilot view)"],["T",'Time slip between <b>today ⇔ early Showa</b> mid-flight! See streetcars, bathhouse chimneys and the old Kyoto Station (on phones: the "Era" button)'],["M / P","Sound on/off / Pause"],["✨","Where sparkles rise there is a <b>thermal</b>. Circle inside it to gain height"],["⚠","Touch the ground or a building and the game ends. Fly too slowly and you stall!"],["📱","On phones, steer with the stick at the bottom left and boost with the button on the right"]].map(([i,t])=>`<li><span class="key">${i}</span><span>${t}</span></li>`).join(""),ok:"OK!",rankingTitle:"🏆 Ranking <small>(this device)</small>",rankingHead:"<tr><th>#</th><th>Name</th><th>🎈</th><th>Distance</th><th>Date</th></tr>",close:"Close",rankBanner:'🎉 Rank #<span id="rank-no">1</span>! 🎉',cp:"🎈 Checkpoints",dist:"📏 Distance",time:"⏱ Time",retry:"🪂 Jump again",share:"𝕏 Share",toTitle:"🏠 Title",pause:"⏸ Paused",resume:"Resume (P)",privacy:"Privacy Policy",playLink:"📱 Android app (Google Play)",adPrivacy:"Ad settings",contTitle:"😣 One more chance!"};function Hv(){if(document.documentElement.lang=Hs,Hs!=="ja"){document.title="Take the Plunge from Kiyomizu";for(const i of document.querySelectorAll("[data-i18n]")){const t=Gv[i.dataset.i18n];t!==void 0&&(i.innerHTML=t)}for(const i of document.querySelectorAll("[data-i18n-placeholder]"))i.placeholder="Name";document.body.classList.add("lang-en")}}const gi=7,Vv=11,gu=["#e8382f","#f5b800","#2f7fe8","#e85ab5","#2fbf71","#f07a1a"];function Wv(i,t){const e=document.createElement("canvas");e.width=128,e.height=128*Math.max(4,i.length+1);const n=e.getContext("2d");n.fillStyle="#fffaf0",n.fillRect(0,0,e.width,e.height),n.strokeStyle=t,n.lineWidth=14,n.strokeRect(7,7,e.width-14,e.height-14),n.fillStyle="#1a1a1a",n.font='bold 92px "Hiragino Mincho ProN", "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle";const s=[...i.replace(/\s/g,"")],r=(e.height-64)/s.length;s.forEach((o,l)=>n.fillText(o,64,32+r*(l+.5)));const a=new Wn(e);return a.colorSpace=Ne,{tex:a,aspect:e.height/e.width}}function Xv(i){const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");e.font="bold 52px sans-serif";const n=e.measureText(i).width;n>480&&(e.font=`bold ${Math.floor(52*480/n)}px sans-serif`),e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="rgba(0,0,0,0.75)",e.strokeText(i,256,64),e.fillStyle="#fff",e.fillText(i,256,64);const s=new Wn(t);return s.colorSpace=Ne,s}class qv{constructor(t,e,n,{lite:s=!1}={}){this.group=new Re,t.add(this.group),this.items=[],this.particles=[];const r=s?new oe(gi,16,12):new oe(gi,32,20);e.forEach((a,o)=>{const l=gu[o%gu.length],c=n.heightAt(a.lat,a.lon),h=Te(a.lat,a.lon,c+a.agl),u=Te(a.lat,a.lon,c),f=new Re;f.position.copy(h);const p=new xt(r,new yn({color:l,roughness:.35,metalness:.05,emissive:new It(l).multiplyScalar(.25)}));f.add(p);const{tex:g,aspect:x}=Wv(a.name,l),m=3.2,d=m*x,M=new xt(new Ki(m,d),new qs({map:g,side:wn}));M.position.y=-gi-2-d/2,f.add(M);const v=new xe;v.setAttribute("position",new ne([0,-gi,0,u.x-h.x,u.y-h.y,u.z-h.z],3)),f.add(new Fp(v,new cf({color:3355443})));const _=new wr(new Bs({map:Xv(`🎈 ${ja(a)}`),transparent:!0,depthWrite:!1}));_.scale.set(.16,.04,1),_.material.sizeAttenuation=!1,_.position.y=gi+6,f.add(_),this.group.add(f),this.items.push({spot:a,group:f,ball:p,banner:M,label:_,popped:!1,phase:Math.random()*6.28,base:h.clone()})})}reset(){for(const t of this.items)t.popped=!1,t.group.visible=!0;for(const t of this.particles)this.group.remove(t.points);this.particles.length=0}update(t,e,n,s){const r=[];for(const a of this.items){if(a.popped)continue;a.group.position.y=a.base.y+Math.sin(e*.8+a.phase)*1.2,a.banner.rotation.y=Math.sin(e*.5+a.phase)*.3;const o=a.group.position.distanceTo(n);a.label.visible=o>250&&o<6e3,a.label.material.opacity=o>3e3?.55:1,o<Vv&&(a.popped=!0,a.group.visible=!1,this.burst(a.group.position,a.ball.material.color),r.push(a))}for(let a=this.particles.length-1;a>=0;a--){const o=this.particles[a];o.life-=t;const l=o.points.geometry.attributes.position;for(let c=0;c<l.count;c++)o.vel[c*3+1]-=9.8*t*.3,l.array[c*3]+=o.vel[c*3]*t,l.array[c*3+1]+=o.vel[c*3+1]*t,l.array[c*3+2]+=o.vel[c*3+2]*t;l.needsUpdate=!0,o.points.material.opacity=Math.max(0,o.life/1.5),o.life<=0&&(this.group.remove(o.points),o.points.geometry.dispose(),this.particles.splice(a,1))}return r}burst(t,e){const s=new Float32Array(480),r=new Float32Array(480),a=new L;for(let c=0;c<160;c++)a.randomDirection(),s.set([t.x+a.x*gi,t.y+a.y*gi,t.z+a.z*gi],c*3),a.multiplyScalar(10+Math.random()*25),r.set([a.x,a.y,a.z],c*3);const o=new xe;o.setAttribute("position",new ne(s,3));const l=new Ja(o,new Fr({color:e,size:1.6,transparent:!0}));this.group.add(l),this.particles.push({points:l,vel:r,life:1.5})}nearest(t){let e=null,n=1/0;for(const s of this.items){if(s.popped)continue;const r=s.group.position.distanceTo(t);r<n&&(n=r,e=s)}return e?{item:e,distance:n}:null}}class jv{constructor(t,e,n){this.items=e.map(r=>{const a=n.heightAt(r.lat,r.lon),o=Te(r.lat,r.lon,a);return{...r,base:o,top:600}});const s=220;this.group=new Re,t.add(this.group),this.systems=this.items.map(r=>{const a=new Float32Array(s*3),o=new Float32Array(s*3);for(let h=0;h<s;h++)o[h*3]=Math.random()*Math.PI*2,o[h*3+1]=Math.sqrt(Math.random())*r.r,o[h*3+2]=Math.random()*r.top;const l=new xe;l.setAttribute("position",new ne(a,3));const c=new Ja(l,new Fr({color:16773572,size:2.6,transparent:!0,opacity:.5,depthWrite:!1,blending:Rs}));return c.frustumCulled=!1,this.group.add(c),{points:c,seed:o,t:r}})}update(t){for(const e of this.systems){const n=e.points.geometry.attributes.position.array,{base:s,top:r}=e.t;for(let a=0;a<e.seed.length/3;a++){const o=e.seed[a*3]+t*.6,l=e.seed[a*3+1],c=(e.seed[a*3+2]+t*e.t.w*4)%r;n[a*3]=s.x+Math.cos(o)*l,n[a*3+1]=s.y+c,n[a*3+2]=s.z+Math.sin(o)*l}e.points.geometry.attributes.position.needsUpdate=!0}}liftAt(t){let e=0;for(const n of this.items){const s=Math.hypot(t.x-n.base.x,t.z-n.base.z);if(s<n.r*1.5&&t.y-n.base.y<n.top){const r=Math.max(0,1-(s/(n.r*1.5))**2);e+=n.w*r*1.6}}return e}}const Ls=[{name:"八坂の塔",en:"Yasaka Pagoda",lat:34.99857,lon:135.77936,agl:70},{name:"高台寺",en:"Kodai-ji Temple",lat:35.00085,lon:135.78123,agl:40},{name:"八坂神社",en:"Yasaka Shrine",lat:35.00365,lon:135.7785,agl:35},{name:"知恩院",en:"Chion-in Temple",lat:35.00553,lon:135.78329,agl:90},{name:"祇園 花見小路",en:"Gion Hanamikoji",lat:35.0026,lon:135.7751,agl:25},{name:"先斗町",en:"Pontocho",lat:35.0052,lon:135.7708,agl:45},{name:"三十三間堂",en:"Sanjusangendo",lat:34.9879,lon:135.7717,agl:30},{name:"京都国立博物館",en:"Kyoto National Museum",lat:34.9899,lon:135.7732,agl:60},{name:"東福寺 通天橋",en:"Tofuku-ji Tsutenkyo Bridge",lat:34.9764,lon:135.7738,agl:50},{name:"伏見稲荷大社",en:"Fushimi Inari Taisha",lat:34.96714,lon:135.77265,agl:40},{name:"稲荷山 山頂",en:"Mt. Inari Summit",lat:34.964,lon:135.7838,agl:60},{name:"京都タワー",en:"Kyoto Tower",lat:34.9875,lon:135.7593,agl:150},{name:"京都駅",en:"Kyoto Station",lat:34.9853,lon:135.7587,agl:80},{name:"東本願寺",en:"Higashi Hongan-ji",lat:34.9911,lon:135.7582,agl:55},{name:"西本願寺",en:"Nishi Hongan-ji",lat:34.9917,lon:135.7516,agl:45},{name:"東寺 五重塔",en:"To-ji Five-story Pagoda",lat:34.97988,lon:135.74872,agl:75},{name:"錦市場",en:"Nishiki Market",lat:35.005,lon:135.7647,agl:30},{name:"京都御所",en:"Kyoto Imperial Palace",lat:35.02537,lon:135.76216,agl:40},{name:"下鴨神社",en:"Shimogamo Shrine",lat:35.03899,lon:135.77297,agl:50},{name:"出町柳 鴨川デルタ",en:"Kamo River Delta",lat:35.0303,lon:135.7718,agl:20},{name:"平安神宮",en:"Heian Shrine",lat:35.016,lon:135.78245,agl:65},{name:"南禅寺",en:"Nanzen-ji Temple",lat:35.01128,lon:135.79414,agl:55},{name:"哲学の道",en:"Philosopher's Path",lat:35.02,lon:135.7945,agl:30},{name:"銀閣寺",en:"Ginkaku-ji (Silver Pavilion)",lat:35.02701,lon:135.79817,agl:45},{name:"大文字山",en:"Mt. Daimonji",lat:35.0239,lon:135.8058,agl:50},{name:"二条城",en:"Nijo Castle",lat:35.0142,lon:135.7482,agl:35},{name:"北野天満宮",en:"Kitano Tenmangu",lat:35.03124,lon:135.73514,agl:40},{name:"大徳寺",en:"Daitoku-ji Temple",lat:35.044,lon:135.746,agl:35},{name:"上賀茂神社",en:"Kamigamo Shrine",lat:35.06,lon:135.7525,agl:45},{name:"金閣寺",en:"Kinkaku-ji (Golden Pavilion)",lat:35.03937,lon:135.72924,agl:30},{name:"龍安寺",en:"Ryoan-ji Temple",lat:35.03448,lon:135.71825,agl:40},{name:"仁和寺",en:"Ninna-ji Temple",lat:35.031,lon:135.7138,agl:55},{name:"太秦映画村",en:"Toei Kyoto Studio Park",lat:35.0169,lon:135.7097,agl:35},{name:"嵐山 渡月橋",en:"Arashiyama Togetsukyo Bridge",lat:35.013,lon:135.6777,agl:25},{name:"天龍寺",en:"Tenryu-ji Temple",lat:35.0157,lon:135.6738,agl:40},{name:"嵐山 竹林の小径",en:"Arashiyama Bamboo Grove",lat:35.017,lon:135.6718,agl:30},{name:"梅小路公園",en:"Umekoji Park",lat:34.9872,lon:135.7443,agl:40},{name:"醍醐寺",en:"Daigo-ji Temple",lat:34.951,lon:135.819,agl:60},{name:"京都大学",en:"Kyoto University",lat:35.0261,lon:135.7809,agl:40},{name:"鞍馬寺",en:"Kurama-dera Temple",lat:35.11806,lon:135.7708,agl:40},{name:"貴船神社",en:"Kifune Shrine",lat:35.12168,lon:135.76284,agl:35},{name:"岡崎 琵琶湖疏水",en:"Okazaki Lake Biwa Canal",lat:35.0129,lon:135.7847,agl:25}],Yv=[{lat:34.993,lon:135.777,r:90,w:3.2},{lat:34.999,lon:135.773,r:80,w:3},{lat:34.99,lon:135.766,r:100,w:2.8},{lat:35.008,lon:135.769,r:90,w:3},{lat:34.974,lon:135.762,r:110,w:3},{lat:35.02,lon:135.773,r:110,w:3.2},{lat:35.018,lon:135.755,r:100,w:2.8},{lat:35,lon:135.743,r:110,w:3},{lat:35.035,lon:135.75,r:100,w:3},{lat:35.025,lon:135.723,r:100,w:3.2},{lat:35.015,lon:135.7,r:110,w:3},{lat:34.96,lon:135.778,r:90,w:3.4},{lat:35.075,lon:135.768,r:110,w:3.4},{lat:35.1,lon:135.772,r:110,w:3.6},{lat:35.035,lon:135.79,r:90,w:3},{lat:34.982,lon:135.782,r:90,w:3.4}],$v={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11};function Ms(i){const t=/^([A-G]#?)(\d)$/.exec(i);return 440*2**(($v[t[1]]+(Number(t[2])+1)*12-69)/12)}function ae(i){return i.trim().split(/\s+/).map(t=>{const[e,n]=t.split(":");return[e==="-"?null:e,Number(n)]})}const Kv={E:["E5","F#5","B5","E6","F#6"],A:["A4","B4","E5","A5","B5"],B:["B4","C#5","F#5","B5","E6"],D:["D5","E5","A5","D6"]},Zv={title:{bpm:60,loop:!0,tracks:[{wave:"sho",gain:.05,notes:ae("E:8 A:8 B:8 E:8")},{wave:"hichiriki",gain:.11,notes:ae("E4:2 F#4:1 A4:1 B4:4 A4:2 B4:1 C#5:1 B4:4 A4:2 F#4:2 E4:4 F#4:2 A4:2 B4:4")},{wave:"ryuteki",gain:.05,notes:ae("-:.25 E5:1.75 F#5:1 A5:1 B5:4 A5:2 B5:1 C#6:1 B5:4 A5:2 F#5:2 E5:4 F#5:2 A5:2 B5:4")},{wave:"perc",gain:.5,notes:ae("T:4 K:2 K:2 R:4 T:4 G:2 K:2 R:4 T:4 G:4")}]},start:{bpm:100,loop:!1,tracks:[{wave:"sho",gain:.06,notes:ae("E:12")},{wave:"ryuteki",gain:.08,notes:ae("E5:1 F#5:1 A5:2 B5:2 -:1 E6:5")},{wave:"perc",gain:.6,notes:ae("T:2 G:1 T:1 R:2 T:2 G:1 G:1 T:2")}]},flight:{bpm:108,loop:!0,tracks:[{wave:"sho",gain:.045,notes:ae("B:8 A:8 E:8 B:8")},{wave:"hichiriki",gain:.1,notes:ae("B4:1 A4:.5 B4:.5 C#5:1 E5:1 D5:1 C#5:1 B4:2 A4:1 B4:.5 A4:.5 F#4:1 A4:1 B4:4 E5:1 F#5:1 E5:1 D5:1 C#5:2 B4:2 A4:1 B4:1 C#5:1 A4:1 B4:4")},{wave:"ryuteki",gain:.045,notes:ae("-:.25 B5:.75 A5:.5 B5:.5 C#6:1 E6:1 D6:1 C#6:1 B5:2 A5:1 B5:.5 A5:.5 F#5:1 A5:1 B5:4 E6:1 F#6:1 E6:1 D6:1 C#6:2 B5:2 A5:1 B5:1 C#6:1 A5:1 B5:4")},{wave:"perc",gain:.5,notes:ae("T:1 K:.5 K:.5 G:1 K:1 R:2 K:1 G:1 ".repeat(4))}]},gameover:{bpm:60,loop:!1,tracks:[{wave:"sho",gain:.05,notes:ae("A:6 E:6")},{wave:"ryuteki",gain:.07,notes:ae("B5:2 A5:1 F#5:1 E5:4 -:1 F#4:3")},{wave:"perc",gain:.6,notes:ae("T:4 G:4 T:4")}]},ranking:{bpm:132,loop:!1,tracks:[{wave:"sho",gain:.06,notes:ae("E:8 A:8 E:8")},{wave:"hichiriki",gain:.09,notes:ae("E4:2 A4:2 B4:4 C#5:2 B4:2 E5:4 B4:4 E5:4")},{wave:"ryuteki",gain:.07,notes:ae("E5:.5 F#5:.5 A5:1 B5:1 E6:1 B5:.5 E6:.5 F#6:2 E6:2 B5:1 C#6:1 E6:2 F#6:4 E6:3 -:4")},{wave:"perc",gain:.6,notes:ae("R:2 T:1 G:1 R:2 T:1 G:1 T:1 K:.5 K:.5 T:1 K:.5 K:.5 R:4 T:2 G:2 T:2 G:2")}]}},If={Am:{notes:["A3","C4","E4"],root:"A2",fifth:"E2"},Dm:{notes:["D4","F4","A4"],root:"D2",fifth:"A2"},E7:{notes:["G#3","B3","D4","E4"],root:"E2",fifth:"B2"},C:{notes:["C4","E4","G4"],root:"C3",fifth:"G2"},F:{notes:["A3","C4","F4"],root:"F2",fifth:"C3"},G:{notes:["G3","B3","D4"],root:"G2",fifth:"D3"}};function jo(i,t,e){const n=[],s=[];for(const r of i){const a=If[r];n.push([a.root,1],[null,1],[a.fifth,1],[null,1]),s.push([null,1],[r,1],[null,1],[r,1])}return[{wave:"bass",gain:e,notes:n},{wave:"accordion",gain:t,notes:s}]}const Jv={title:{bpm:96,loop:!0,tracks:[{wave:"clarinet",gain:.1,notes:ae("A4:1 B4:1 C5:1 E5:1 F5:2 E5:2 F5:1 E5:1 C5:1 B4:1 C5:1 B4:1 A4:2 B4:1 C5:1 E5:2 F5:1.5 E5:.5 B4:2 C5:1 B4:1 G#4:1 B4:1 A4:4")},...jo(["Am","Am","Dm","Am","E7","E7","Am","Am"],.035,.16),{wave:"drums",gain:.35,notes:ae("B:1 S:1 B:1 S:1 ".repeat(8))}]},start:{bpm:120,loop:!1,tracks:[{wave:"clarinet",gain:.12,notes:ae("E5:.5 F5:.5 E5:1 B4:1 G#4:1 A4:4")},{wave:"accordion",gain:.045,notes:ae("Am:2 E7:2 Am:4")},{wave:"bass",gain:.18,notes:ae("A2:2 E2:2 A2:4")},{wave:"drums",gain:.45,notes:ae("B:.5 B:.5 S:1 B:1 S:1 B:1 S:.5 S:.5 B:2")}]},flight:{bpm:132,loop:!0,tracks:[{wave:"clarinet",gain:.1,notes:ae("E5:1.5 F5:.5 E5:1 C5:1 B4:1 C5:.5 B4:.5 A4:2 A4:1 C5:1 F5:1.5 E5:.5 E5:3 -:1 E5:1.5 F5:.5 E5:1 B4:1 G#4:1 B4:1 E5:1.5 F5:.5 E5:1 C5:1 B4:1 C5:1 A4:3 -:1 F5:1.5 E5:.5 F5:1 A5:1 A5:1 F5:1 E5:2 E5:1.5 C5:.5 E5:1 F5:1 E5:3 -:1 B4:1 C5:1 B4:1 G#4:1 B4:1.5 C5:.5 B4:1 E5:1 C5:1 B4:1 A4:1 B4:1 A4:3 -:1")},...jo(["Am","Am","Dm","Am","E7","E7","Am","Am","Dm","Dm","Am","Am","E7","E7","Am","Am"],.032,.16),{wave:"drums",gain:.32,notes:ae("B:1 S:1 B:1 S:.5 H:.5 ".repeat(16))}]},gameover:{bpm:72,loop:!1,tracks:[{wave:"clarinet",gain:.11,notes:ae("F5:2 E5:1 C5:1 B4:2 G#4:2 A4:4")},{wave:"accordion",gain:.04,notes:ae("Dm:4 E7:4 Am:4")},{wave:"bass",gain:.16,notes:ae("D2:4 E2:4 A2:4")}]},ranking:{bpm:150,loop:!1,tracks:[{wave:"clarinet",gain:.1,notes:ae("E5:1 G5:1 A5:1 G5:1 E5:1 D5:1 C5:2 A5:1 A5:1 G5:1 A5:1 G5:3 -:1 D5:1 E5:1 G5:1 E5:1 D5:1 C5:.5 D5:.5 E5:2 G5:1 E5:1 D5:1 E5:1 C6:3 -:1")},...jo(["C","C","F","C","G","G","C","C"],.035,.16),{wave:"drums",gain:.4,notes:ae("B:1 S:1 B:1 S:.5 S:.5 ".repeat(7)+"S:.5 S:.5 S:.5 S:.5 B:2")}]}};class Qv{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.era="now",this.varioTimer=0,this.warnTimer=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=matchMedia("(pointer: coarse)").matches,e=window.AudioContext||window.webkitAudioContext;let n;try{n=new e({latencyHint:t?"playback":"interactive"})}catch{n=new e}this.ctx=n,this.volume=t?.5:.8,this.master=n.createGain(),this.master.gain.value=this.muted?0:this.volume;const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=t?110:30;const r=n.createDynamicsCompressor();r.threshold.value=-12,r.knee.value=6,r.ratio.value=12,r.attack.value=.003,r.release.value=.25,this.master.connect(s).connect(r).connect(n.destination),this.musicBus=n.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfx=n.createGain(),this.sfx.connect(this.master),this.noise=n.createBuffer(1,n.sampleRate*2,n.sampleRate);const a=this.noise.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;const o=(u,f)=>{const p=n.createBufferSource();p.buffer=this.noise,p.loop=!0;const g=n.createBiquadFilter();g.type=u,g.frequency.value=f;const x=n.createGain();return x.gain.value=0,p.connect(g).connect(x).connect(this.sfx),p.start(),{filter:g,gain:x}};this.wind=o("bandpass",500),this.wind.filter.Q.value=.7,this.jet=o("lowpass",900);const l=n.createOscillator();l.type="sawtooth",l.frequency.value=70;const c=n.createGain();c.gain.value=0;const h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=400,l.connect(h).connect(c).connect(this.sfx),l.start(),this.jetHum={osc:l,gain:c},this.pendingSong&&this.playSong(this.pendingSong)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.05)}tone(t,e,n,{wave:s="sine",gain:r=.3,attack:a=.005,slideTo:o=null,bus:l=this.sfx}={}){const c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(t,e),o&&h.frequency.exponentialRampToValueAtTime(o,e+n);const u=c.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(r,e+a),u.gain.exponentialRampToValueAtTime(8e-4,e+n),h.connect(u).connect(l),h.start(e),h.stop(e+n+.05)}burstNoise(t,e,{type:n="lowpass",f:s=1200,gain:r=.5,decay:a=e/4,slideTo:o=null,bus:l=this.sfx,q:c=1}={}){const h=this.ctx,u=h.createBufferSource();u.buffer=this.noise;const f=h.createBiquadFilter();f.type=n,f.Q.value=c,f.frequency.setValueAtTime(s,t),o&&f.frequency.exponentialRampToValueAtTime(o,t+e);const p=h.createGain();p.gain.setValueAtTime(r,t),p.gain.setTargetAtTime(0,t,a),u.connect(f).connect(p).connect(l),u.start(t,Math.random()),u.stop(t+e)}playSong(t){if(!this.ctx){this.pendingSong=t;return}this.stopSong();const e=this.era==="showa"&&Jv[t]||Zv[t],n=60/e.bpm,s=Math.max(...e.tracks.map(h=>h.notes.reduce((u,f)=>u+f[1],0)))*n,r={name:t,gain:this.ctx.createGain()};r.gain.connect(this.musicBus);const a=this.ctx.currentTime+.08,o=.8,l=e.tracks.map(h=>({tr:h,i:0,t:a,loop:0})),c=()=>{const h=this.ctx.currentTime+o;let u=!1;for(const f of l){for(;f.t<h;){if(f.i>=f.tr.notes.length){if(!e.loop)break;f.loop++,f.i=0,f.t=a+f.loop*s;continue}const[p,g]=f.tr.notes[f.i++];p&&f.t>this.ctx.currentTime-.03&&this.playNote(f.tr.wave,p,f.t,g*n,f.tr.gain,r.gain),f.t+=g*n}(e.loop||f.i<f.tr.notes.length)&&(u=!0)}u||clearInterval(r.timer)};c(),r.timer=setInterval(c,150),this.song=r}playNote(t,e,n,s,r,a){switch(t){case"perc":return this.percussion(e,n,r,a);case"sho":return this.sho(Kv[e],n,s,r,a);case"hichiriki":return this.reed(Ms(e),n,s,r,a);case"ryuteki":return this.flute(Ms(e),n,s,r,a);case"accordion":return this.accordion(If[e].notes,n,s,r,a);case"clarinet":return this.clarinet(Ms(e),n,s,r,a);case"bass":return this.bass(Ms(e),n,s,r,a);case"drums":return this.drums(e,n,r,a)}}setEra(t){this.era=t,this.song&&this.ctx&&this.playSong(this.song.name)}accordion(t,e,n,s,r){const a=this.ctx,o=e+n*.85,l=a.createGain();l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.03),l.gain.setValueAtTime(s,Math.max(e+.04,o-.06)),l.gain.linearRampToValueAtTime(1e-4,o);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.value=2200,l.connect(c).connect(r);for(const h of t)for(const u of[-9,9]){const f=a.createOscillator();f.type="sawtooth",f.frequency.value=Ms(h),f.detune.value=u,f.connect(l),f.start(e),f.stop(o+.05)}}clarinet(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="square",o.frequency.value=t;const l=a.createOscillator();l.frequency.value=5.5;const c=a.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.008,e+Math.max(.3,n)),l.connect(c).connect(o.frequency);const h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=1700,h.Q.value=.8;const u=a.createGain(),f=e+n*.95;u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(s,e+.05),u.gain.setValueAtTime(s*.9,Math.max(e+.06,f-.08)),u.gain.linearRampToValueAtTime(1e-4,f),o.connect(h).connect(u).connect(r),o.start(e),l.start(e),o.stop(f+.05),l.stop(f+.05)}bass(t,e,n,s,r){const a=this.ctx,o=a.createGain(),l=e+Math.min(n,.7);o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.01),o.gain.exponentialRampToValueAtTime(8e-4,l),o.connect(r);for(const[c,h,u]of[["triangle",1,1],["sine",2,.35]]){const f=a.createOscillator();f.type=c,f.frequency.value=t*h;const p=a.createGain();p.gain.value=u,f.connect(p).connect(o),f.start(e),f.stop(l+.05)}}drums(t,e,n,s){t==="B"?this.tone(110,e,.25,{slideTo:50,gain:n*.9,bus:s}):t==="S"?this.burstNoise(e,.18,{type:"bandpass",f:2600,q:.7,gain:n*.35,decay:.05,bus:s}):t==="H"&&this.burstNoise(e,.06,{type:"highpass",f:7e3,gain:n*.25,decay:.015,bus:s})}sho(t,e,n,s,r){const a=this.ctx,o=a.createGain(),l=e+n;o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+Math.min(1.2,n*.35)),o.gain.setValueAtTime(s,Math.max(e+.05,l-.4)),o.gain.linearRampToValueAtTime(1e-4,l);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,o.connect(c).connect(r);for(const h of t){const u=Ms(h);for(const[f,p,g]of[["triangle",1,-4],["sine",2,3]]){const x=a.createOscillator();x.type=f,x.frequency.value=u*p,x.detune.value=g;const m=a.createGain();m.gain.value=p===1?1:.3,x.connect(m).connect(o),x.start(e),x.stop(l+.05)}}}reed(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(t*.92,e),o.frequency.exponentialRampToValueAtTime(t,e+Math.min(.25,n*.4));const l=a.createOscillator();l.frequency.value=5;const c=a.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(t*.012,e+n),l.connect(c).connect(o.frequency);const h=a.createBiquadFilter();h.type="bandpass",h.frequency.value=1300,h.Q.value=1.4;const u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=2600;const f=a.createGain(),p=e+n*.97;f.gain.setValueAtTime(1e-4,e),f.gain.linearRampToValueAtTime(s,e+.08),f.gain.linearRampToValueAtTime(s*1.25,e+n*.6),f.gain.linearRampToValueAtTime(1e-4,p),o.connect(h).connect(u).connect(f).connect(r),o.start(e),l.start(e),o.stop(p+.05),l.stop(p+.05)}flute(t,e,n,s,r){const a=this.ctx,o=a.createOscillator();o.type="sine",o.frequency.setValueAtTime(t*1.03,e),o.frequency.exponentialRampToValueAtTime(t,e+.12);const l=a.createGain(),c=e+n*.95;l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(s,e+.06),l.gain.setValueAtTime(s,Math.max(e+.07,c-.1)),l.gain.linearRampToValueAtTime(1e-4,c),o.connect(l).connect(r),o.start(e),o.stop(c+.05),this.burstNoise(e,n,{type:"bandpass",f:t,q:8,gain:s*.9,decay:n*.5,bus:r})}percussion(t,e,n,s){if(t==="T")this.tone(75,e,1.4,{slideTo:42,gain:n*1.6,bus:s}),this.burstNoise(e,.3,{f:300,gain:n*.5,decay:.05,bus:s});else if(t==="K")this.tone(520,e,.12,{slideTo:380,gain:n*.5,bus:s}),this.burstNoise(e,.06,{type:"bandpass",f:1800,gain:n*.4,decay:.015,bus:s});else if(t==="R"){let r=e;for(let a=0,o=.16;a<9;a++,o*=.82)this.tone(520,r,.08,{slideTo:400,gain:n*.35,bus:s}),r+=o}else t==="G"&&(this.tone(2150,e,.5,{gain:n*.18,bus:s}),this.tone(3370,e,.35,{gain:n*.1,bus:s}),this.tone(1280,e,.6,{gain:n*.08,bus:s}))}stopSong(t=.3){if(!this.song)return;const e=this.song;clearInterval(e.timer),e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,t/3),setTimeout(()=>e.gain.disconnect(),t*1e3+600),this.song=null}click(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(880,t,.08,{wave:"square",gain:.08}),this.tone(1320,t+.04,.08,{wave:"square",gain:.06})}timeslip(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.2,{type:"bandpass",f:300,slideTo:4e3,q:4,gain:.35,decay:.5}),this.tone(220,t,.6,{wave:"triangle",slideTo:1760,gain:.12}),this.tone(1760,t+.55,.7,{wave:"triangle",slideTo:330,gain:.08}),[1568,2093,2637,3136,2637,2093].forEach((e,n)=>this.tone(e,t+.1+n*.08,.5,{gain:.05}))}jump(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.15,{f:300,gain:.6,decay:.03}),this.burstNoise(t+.05,1.2,{type:"bandpass",f:400,slideTo:2500,gain:.35,decay:.5,q:3}),this.tone(300,t+.05,.7,{wave:"triangle",slideTo:900,gain:.15})}jetStart(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.5,{f:3e3,slideTo:500,gain:.6,decay:.15}),this.tone(120,t,.4,{wave:"sawtooth",slideTo:60,gain:.25})}jetEmpty(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<3;e++)this.burstNoise(t+e*.12,.08,{f:600,gain:.4,decay:.02});this.tone(200,t,.4,{wave:"square",slideTo:80,gain:.08})}turboGet(){if(!this.ctx)return;const t=this.ctx.currentTime;[523,659,784,1047,1319].forEach((e,n)=>this.tone(e,t+n*.05,.25,{wave:"square",gain:.07}))}pop(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,.3,{f:5e3,gain:1.2,decay:.03}),this.tone(1200,t,.1,{slideTo:300,gain:.3}),[880,1318.5,1760,2093].forEach((e,n)=>this.tone(e,t+.1+n*.08,.6,{wave:"triangle",gain:.18}))}firework(t=0){if(!this.ctx)return;const e=this.ctx.currentTime+t;this.tone(700,e,.9,{wave:"sine",slideTo:1800,gain:.08,attack:.05}),this.burstNoise(e+.9,1.5,{f:900,slideTo:80,gain:1.4,decay:.25}),this.tone(90,e+.9,.8,{slideTo:40,gain:.6});for(let n=0;n<14;n++)this.burstNoise(e+1.1+Math.random()*.9,.05,{type:"highpass",f:4e3,gain:.25*Math.random()+.1,decay:.01})}stall(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(1e3,t,.12,{wave:"square",gain:.1}),this.tone(1e3,t+.18,.12,{wave:"square",gain:.1})}groundWarning(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(520,t,.18,{wave:"sawtooth",gain:.08}),this.tone(390,t+.2,.18,{wave:"sawtooth",gain:.08})}thermalEnter(){if(!this.ctx)return;const t=this.ctx.currentTime;[660,880,1100].forEach((e,n)=>this.tone(e,t+n*.06,.3,{wave:"sine",gain:.1}))}crash(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.2,{f:500,gain:1.3,decay:.2}),this.tone(160,t,.6,{wave:"square",slideTo:40,gain:.25}),this.burstNoise(t+.15,.6,{type:"bandpass",f:1800,gain:.4,decay:.08});for(let e=0;e<4;e++)this.tone(1500+e%2*300,t+.6+e*.14,.12,{wave:"sine",gain:.08})}oniLaugh(){if(!this.ctx)return;const t=this.ctx.currentTime;for(let e=0;e<4;e++){const n=t+e*.22;this.tone(150-e*8,n,.18,{wave:"sawtooth",slideTo:95,gain:.22,attack:.01}),this.burstNoise(n,.15,{type:"bandpass",f:700,gain:.3,decay:.05,q:2})}this.tone(70,t,1.2,{slideTo:40,gain:.5})}alarm(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;for(const n of[e,e+.42]){const s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.linearRampToValueAtTime(.13,n+.015),s.gain.setValueAtTime(.13,n+.28),s.gain.linearRampToValueAtTime(1e-4,n+.32);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,s.connect(r).connect(this.sfx);for(const[a,o]of[["square",196],["sawtooth",233]]){const l=t.createOscillator();l.type=a,l.frequency.value=o,l.connect(s),l.start(n),l.stop(n+.35)}}}heartbeat(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(60,t,.18,{slideTo:40,gain:.6}),this.tone(55,t+.16,.2,{slideTo:38,gain:.45})}countdown(t=!1){this.ctx&&this.tone(t?1320:660,this.ctx.currentTime,t?.5:.15,{wave:"square",gain:.1})}cheer(){if(!this.ctx)return;const t=this.ctx.currentTime;this.burstNoise(t,1.6,{type:"bandpass",f:1200,gain:.25,decay:.6,q:.6});for(let e=0;e<6;e++)this.tone(600+Math.random()*500,t+Math.random()*.6,.3,{wave:"triangle",slideTo:900+Math.random()*400,gain:.03})}update(t,{speed:e=0,jetting:n=!1,active:s=!1,vario:r=0,agl:a=999,stalled:o=!1}={}){if(!this.ctx)return;const l=this.ctx.currentTime,c=s?Math.min(.5,e/110):0;this.wind.gain.gain.setTargetAtTime(c,l,.2),this.wind.filter.frequency.setTargetAtTime(300+e*18,l,.2);const h=s&&n;this.jet.gain.gain.setTargetAtTime(h?.6:0,l,.08),this.jetHum.gain.gain.setTargetAtTime(h?.12:0,l,.08),this.jetHum.osc.frequency.setTargetAtTime(60+e*.8,l,.2),s&&(this.varioTimer-=t,r>.4&&this.varioTimer<=0&&(this.tone(600+r*90,l,.08,{wave:"sine",gain:.07}),this.varioTimer=Math.max(.12,.45-r*.05)),this.warnTimer-=t,this.warnTimer<=0&&(o?(this.stall(),this.warnTimer=.6):a<25&&r<-.5&&(this.groundWarning(),this.warnTimer=.8)))}}function tM(i){const t=new Re,e=new xt(new oe(45e3,32,16),new ii({side:tn,depthWrite:!1,fog:!1,uniforms:{sun:{value:i.clone().normalize()}},vertexShader:`
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
			`}));e.renderOrder=-1,e.frustumCulled=!1,t.add(e);const n=eM();for(let s=0;s<26;s++){const r=Math.random()*Math.PI*2,a=6e3+Math.random()*14e3,o=new wr(new Bs({map:n,transparent:!0,opacity:.85,depthWrite:!1,fog:!1})),l=700+Math.random()*1400;o.scale.set(l,l*.35,1),o.position.set(Math.cos(r)*a,900+Math.random()*900,Math.sin(r)*a),t.add(o)}return t}function eM(){const i=document.createElement("canvas");i.width=256,i.height=96;const t=i.getContext("2d");for(let e=0;e<14;e++){const n=40+Math.random()*176,s=40+Math.random()*30,r=18+Math.random()*26,a=t.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,"rgba(255,255,255,0.95)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,256,96)}return new Wn(i)}const nM=.9,wa=[16732754,16766784,6942894,4244735,14696699,16777215,16748800,16744619],_u=10,Ea=320,iM=170;function sM(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Wn(i)}const Yo=new It,xu=new It,ar=new L,vu=new L,rM=new L(0,1,0);class aM{constructor(t){const e=sM();this.clock=0,this.pending=[],this.rockets=[],this.bursts=[];for(let n=0;n<_u+2;n++){const s=new wr(new Bs({map:e,color:16774080,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));s.scale.set(5,5,1),s.visible=!1,t.add(s),this.rockets.push({sp:s,active:!1,from:new L,to:new L,t:0,big:!1})}for(let n=0;n<_u;n++){const s=new xe;s.setAttribute("position",new Ie(new Float32Array(Ea*3),3)),s.setAttribute("color",new Ie(new Float32Array(Ea*3),3));const r=new Ja(s,new Fr({size:7,map:e,vertexColors:!0,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));r.frustumCulled=!1,r.visible=!1,t.add(r);const a=new wr(new Bs({map:e,blending:Rs,depthWrite:!1,transparent:!0,fog:!1}));a.scale.set(110,110,1),a.visible=!1,t.add(a),this.bursts.push({pts:r,flash:a,vel:new Float32Array(Ea*3),n:0,t:0,life:2.6,active:!1})}}show(t,e=3,n=!1,s=.3){for(let r=0;r<e;r++)this.pending.push({at:this.clock+.1+r*s+Math.random()*.15,big:n,camera:t});return this.pending.slice(-e).map(r=>r.at-this.clock)}spawnRocket(t,e){const n=this.rockets.find(r=>!r.active);if(!n)return;t.getWorldDirection(ar),ar.y=0,ar.normalize(),vu.crossVectors(ar,rM);const s=t.position.clone().addScaledVector(ar,iM+Math.random()*40).addScaledVector(vu,(Math.random()-.5)*160);n.from.copy(s).add(new L(0,-90-Math.random()*30,0)),n.to.copy(s).add(new L(0,(e?45:25)+Math.random()*35,0)),n.t=0,n.big=e,n.active=!0,n.sp.visible=!0}spawnBurst(t,e){let n=this.bursts.find(c=>!c.active);n||(n=this.bursts.reduce((c,h)=>h.t>c.t?h:c));const s=e?Ea:220,r=n.pts.geometry.attributes.position.array,a=n.pts.geometry.attributes.color.array,o=n.vel;Yo.setHex(wa[Math.random()*wa.length|0]),xu.setHex(wa[Math.random()*wa.length|0]);const l=e?62:48;for(let c=0;c<s;c++){const h=Math.random()*2-1,u=Math.random()*Math.PI*2,f=Math.sqrt(1-h*h),p=l*(.85+Math.random()*.3);o[c*3]=f*Math.cos(u)*p,o[c*3+1]=h*p,o[c*3+2]=f*Math.sin(u)*p,r[c*3]=t.x,r[c*3+1]=t.y,r[c*3+2]=t.z;const g=c%3===0?xu:Yo;a[c*3]=g.r,a[c*3+1]=g.g,a[c*3+2]=g.b}n.pts.geometry.setDrawRange(0,s),n.pts.geometry.attributes.position.needsUpdate=!0,n.pts.geometry.attributes.color.needsUpdate=!0,n.pts.material.size=e?8:6.5,n.pts.material.opacity=1,n.pts.visible=!0,n.flash.material.color.copy(Yo),n.flash.material.opacity=1,n.flash.position.copy(t),n.flash.visible=!0,Object.assign(n,{n:s,t:0,active:!0})}update(t){this.clock+=t;for(let s=this.pending.length-1;s>=0;s--)this.pending[s].at<=this.clock&&(this.spawnRocket(this.pending[s].camera,this.pending[s].big),this.pending.splice(s,1));for(const s of this.rockets){if(!s.active)continue;s.t+=t;const r=Math.min(1,s.t/nM),a=1-(1-r)*(1-r);s.sp.position.lerpVectors(s.from,s.to,a),s.sp.position.x+=Math.sin(s.t*20)*.6,r>=1&&(s.active=!1,s.sp.visible=!1,this.spawnBurst(s.to,s.big))}const e=Math.exp(-1.6*t),n=6*t;for(const s of this.bursts){if(!s.active)continue;s.t+=t;const r=s.pts.geometry.attributes.position.array,a=s.vel;for(let l=0;l<s.n*3;l+=3)a[l]*=e,a[l+1]=a[l+1]*e-n,a[l+2]*=e,r[l]+=a[l]*t,r[l+1]+=a[l+1]*t,r[l+2]+=a[l+2]*t;s.pts.geometry.attributes.position.needsUpdate=!0;const o=1-s.t/s.life;s.pts.material.opacity=Math.max(0,o<.4?o/.4*(.6+.4*Math.random()):1),s.flash.material.opacity=Math.max(0,1-s.t*4),s.t>=s.life&&(s.active=!1,s.pts.visible=!1,s.flash.visible=!1)}}}const oM=[{name:"清水寺 本堂",lat:34.99482,lon:135.785,kind:"hall",roof:"hiwada",wall:"wood"},{name:"清水寺 仁王門",lat:34.996,lon:135.78365,kind:"gate",wall:"vermilion",free:{w:10,d:5,h:14,deg:0}},{name:"清水寺 三重塔",lat:34.99507,lon:135.78383,kind:"pagoda",tiers:3,wall:"vermilion",free:{w:6,h:31,deg:0}},{name:"八坂の塔",lat:34.99855,lon:135.77924,kind:"pagoda",tiers:5,wall:"wood",free:{w:6.4,h:46,deg:0}},{name:"八坂神社 西楼門",lat:35.00363,lon:135.77795,kind:"gate",wall:"vermilion",free:{w:10,d:6,h:12,deg:0}},{name:"八坂神社 本殿",lat:35.0037,lon:135.7788,kind:"shrine",roof:"hiwada"},{name:"知恩院 三門",lat:35.0047,lon:135.7813,kind:"gate",wall:"wood",free:{w:50,d:17,h:24,deg:0}},{name:"知恩院 御影堂",lat:35.00553,lon:135.78329,kind:"hall",roof:"gray",wall:"wood"},{name:"南禅寺 三門",lat:35.0111,lon:135.793,kind:"gate",wall:"wood",free:{w:27,d:12,h:22,deg:0}},{name:"南禅寺 法堂",lat:35.01128,lon:135.79414,kind:"hall",roof:"gray",wall:"wood"},{name:"平安神宮 大極殿",lat:35.016,lon:135.78245,kind:"shrine",roof:"green"},{name:"平安神宮 応天門",lat:35.0149,lon:135.78245,kind:"gate",wall:"vermilion",roof:"green",free:{w:30,d:12,h:18,deg:0}},{name:"銀閣寺",lat:35.02701,lon:135.79817,kind:"ginkaku",free:{w:8,d:7,h:9,deg:0}},{name:"金閣寺",lat:35.03937,lon:135.72924,kind:"kinkaku",free:{w:15,d:12,h:12.5,deg:0}},{name:"三十三間堂",lat:34.9879,lon:135.7717,kind:"hall",roof:"gray",wall:"vermilion"},{name:"東寺 五重塔",lat:34.97988,lon:135.74872,kind:"pagoda",tiers:5,wall:"wood",free:{w:9.5,h:55,deg:0}},{name:"東寺 金堂",lat:34.98095,lon:135.74705,kind:"hall",roof:"gray",wall:"wood"},{name:"東本願寺 御影堂",lat:34.9911,lon:135.7582,kind:"hall",roof:"gray",wall:"wood"},{name:"西本願寺 御影堂",lat:34.9917,lon:135.7516,kind:"hall",roof:"gray",wall:"wood"},{name:"伏見稲荷 楼門",lat:34.96707,lon:135.7719,kind:"gate",wall:"vermilion",free:{w:13,d:7,h:15,deg:0}},{name:"伏見稲荷 本殿",lat:34.9672,lon:135.7728,kind:"shrine",roof:"hiwada"},{name:"北野天満宮",lat:35.03124,lon:135.73514,kind:"shrine",roof:"hiwada"},{name:"下鴨神社 楼門",lat:35.03899,lon:135.77297,kind:"gate",wall:"vermilion",roof:"hiwada",free:{w:12,d:7,h:13,deg:0}},{name:"上賀茂神社",lat:35.06,lon:135.7525,kind:"shrine",roof:"hiwada"},{name:"二条城 二の丸御殿",lat:35.0142,lon:135.7482,kind:"hall",roof:"gray",wall:"white"},{name:"京都御所 紫宸殿",lat:35.02537,lon:135.76216,kind:"hall",roof:"hiwada",wall:"white"},{name:"東福寺 三門",lat:34.97707,lon:135.7724,kind:"gate",wall:"vermilion"},{name:"天龍寺",lat:35.0157,lon:135.6738,kind:"hall",roof:"gray",wall:"white"},{name:"仁和寺 五重塔",lat:35.03024,lon:135.71439,kind:"pagoda",tiers:5,wall:"wood",free:{w:6,h:36,deg:0}},{name:"醍醐寺 五重塔",lat:34.94968,lon:135.82103,kind:"pagoda",tiers:5,wall:"vermilion",free:{w:6.6,h:38,deg:0}},{name:"京都タワー",lat:34.98756,lon:135.75928,kind:"tower"},{name:"大徳寺",lat:35.044,lon:135.746,kind:"hall",roof:"gray",wall:"wood"},{name:"鞍馬寺 本殿金堂",lat:35.11806,lon:135.7708,kind:"hall",roof:"gray",wall:"vermilion",standalone:!0,free:{w:20,d:14,h:14,deg:0}},{name:"貴船神社 本宮",lat:35.12168,lon:135.76284,kind:"shrine",roof:"hiwada",standalone:!0,free:{w:10,d:8,h:9,deg:0}},{name:"龍安寺",lat:35.03448,lon:135.71825,kind:"hall",roof:"hiwada",wall:"white"}],lM=[{name:"平安神宮 大鳥居",lat:35.01224,lon:135.78226,width:18,height:24,deg:90}],cM=[[34.96745,135.7737],[34.9677,135.7748],[34.968,135.7756],[34.9676,135.7764],[34.967,135.777],[34.9664,135.7778],[34.9656,135.7785],[34.9645,135.7795],[34.964,135.781],[34.9638,135.783]],or={from:[35.12105,135.76305],to:[35.1216,135.76286],spacing:3,width:4},Mi={lat:35.03908,lon:135.72912,w:90,d:52},lr={from:[35.01392,135.67766],to:[35.01258,135.67782],width:11},Ta=(()=>{const i=Te(Mi.lat,Mi.lon,0);return{x:i.x,z:i.z,a:Mi.w/2+1,b:Mi.d/2+1}})(),hM=(i,t)=>((i-Ta.x)/Ta.a)**2+((t-Ta.z)/Ta.b)**2<1,uM=60,fM=38,dM=1600,Mu=1,pM=.06,mM=.12,gM=["#e8384f","#f28cb1","#f5b800","#8a4fd8","#2f7fe8","#16a3a3","#ff8a3d","#c7254e","#f7f0e0","#6fb7e8","#9bd36a","#e85ab5"],_M=["#f5d042","#ffffff","#c7254e","#1d3f8f","#2fbf71","#f28cb1"],xM=["#3a4a6a","#5a4632","#2f3b2f","#6a6a72","#1d2a44","#7a5a3a"],vM=["#2b2b33","#4a3a5a","#3a3a3a","#5a4a3a"],MM=["#1d2a44","#2b2b33","#3a2a22","#24402f"];function yM(i,t){const e=i.toNonIndexed(),n=new It(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r.set([n.r,n.g,n.b],a*3);return e.setAttribute("color",new ne(r,3)),e}const Fe=i=>Nr(i.map(([t,e])=>yM(t,e))),Kt="#ffffff";function ys(i,t=[]){return[[new Xt(.05,.06,.1,6).translate(0,1.36,0),"#f1c8a0"],[new oe(.12,10,8).translate(0,1.47,0),"#f1c8a0"],[new oe(.128,10,8,0,Math.PI*2,0,Math.PI*.55).translate(0,1.49,.015),i],...t]}const $o={woman:{dye:Fe([[new Xt(.16,.22,1.25,10).translate(0,.68,0),Kt],[new at(.12,.46,.26).translate(-.24,.98,.02),Kt],[new at(.12,.46,.26).translate(.24,.98,.02),Kt]]),dye2:Fe([[new Xt(.185,.195,.2,10).translate(0,1,0),Kt],[new at(.26,.18,.1).translate(0,1,.18),Kt]]),fixed:Fe([...ys("#1b1410",[[new oe(.085,8,6).translate(0,1.6,.06),"#1b1410"],[new at(.2,.025,.025).translate(0,1.6,.06),"#f5d042"]]),[new at(.18,.04,.24).translate(0,.03,-.02),"#c7a070"]]),dyeColors:gM,dye2Colors:_M},maiko:{dye:Fe([[new Xt(.15,.24,1.2,10).translate(0,.78,0),Kt],[new at(.12,.56,.28).translate(-.24,.98,.02),Kt],[new at(.12,.56,.28).translate(.24,.98,.02),Kt]]),dye2:Fe([[new Xt(.18,.19,.22,10).translate(0,1.08,0),Kt],[new at(.22,.95,.04).translate(0,.62,.2),Kt]]),fixed:Fe([[new Xt(.05,.06,.1,6).translate(0,1.44,0),"#fbf7f2"],[new oe(.12,10,8).translate(0,1.55,0),"#fbf7f2"],[new oe(.03,6,4).translate(0,1.5,-.11),"#d81b3c"],[new oe(.15,10,8,0,Math.PI*2,0,Math.PI*.6).translate(0,1.6,.03),"#120d0a"],[new oe(.11,8,6).translate(0,1.74,.03),"#120d0a"],[new oe(.045,6,4).translate(-.12,1.7,-.02),"#ff6fa8"],[new oe(.04,6,4).translate(-.14,1.64,.02),"#ffd23f"],[new oe(.035,6,4).translate(-.1,1.62,-.06),"#ffffff"],[new at(.003,.14,.02).translate(-.13,1.56,-.04),"#f5d042"],[new at(.16,.16,.24).translate(0,.08,-.01),"#2b1a10"]]),dyeColors:["#e8384f","#f28cb1","#8a4fd8","#16a3a3","#ff8a3d","#6fb7e8","#9bd36a"],dye2Colors:["#1b1b1f","#f5d042","#c7254e","#1d3f8f"]},mobo:{dye:Fe([[new Xt(.17,.19,.62,10).translate(0,1.04,0),Kt],[new at(.11,.55,.13).translate(-.24,1,0),Kt],[new at(.11,.55,.13).translate(.24,1,0),Kt],[new at(.12,.72,.14).translate(-.08,.38,0),Kt],[new at(.12,.72,.14).translate(.08,.38,0),Kt]]),dye2:Fe([[new Xt(.2,.2,.025,14).translate(0,1.58,0),Kt],[new Xt(.12,.13,.12,12).translate(0,1.64,0),Kt]]),fixed:Fe([...ys("#1b1410"),[new at(.1,.22,.02).translate(0,1.2,-.18),"#c7254e"],[new at(.16,.06,.26).translate(-.08,.03,-.03),"#2b1a10"],[new at(.16,.06,.26).translate(.08,.03,-.03),"#2b1a10"]]),dyeColors:["#3a3f4a","#5a4a3a","#2b2b33","#6a6a72","#7a6a50"],dye2Colors:["#2b2b33","#5a4a3a","#d9c9a0"]},moga:{dye:Fe([[new Xt(.14,.24,.85,10).translate(0,.98,0),Kt],[new at(.09,.42,.1).translate(-.2,1.12,0),Kt],[new at(.09,.42,.1).translate(.2,1.12,0),Kt]]),dye2:Fe([[new oe(.15,10,8,0,Math.PI*2,0,Math.PI*.5).translate(0,1.52,.01),Kt],[new Xt(.19,.19,.02,12).translate(0,1.52,0),Kt]]),fixed:Fe([...ys("#1b1410"),[new Xt(.035,.035,.55,6).translate(-.07,.3,0),"#f1c8a0"],[new Xt(.035,.035,.55,6).translate(.07,.3,0),"#f1c8a0"],[new at(.08,.06,.18).translate(-.07,.03,-.02),"#c7254e"],[new at(.08,.06,.18).translate(.07,.03,-.02),"#c7254e"]]),dyeColors:["#e8384f","#f28cb1","#6fb7e8","#f5d042","#9bd36a","#ffffff","#8a4fd8"],dye2Colors:["#1b1b1f","#c7254e","#1d3f8f","#f7f0e0"]},student:{dye:Fe([[new Xt(.17,.19,.62,10).translate(0,1.04,0),Kt],[new at(.11,.55,.13).translate(-.24,1,0),Kt],[new at(.11,.55,.13).translate(.24,1,0),Kt],[new at(.12,.72,.14).translate(-.08,.38,0),Kt],[new at(.12,.72,.14).translate(.08,.38,0),Kt],[new Xt(.135,.13,.08,12).translate(0,1.6,0),Kt],[new at(.2,.02,.1).translate(0,1.57,-.12),Kt]]),dye2:null,fixed:Fe([...ys("#1b1410"),[new at(.03,.03,.03).translate(0,1.2,-.19),"#f5d042"],[new at(.03,.03,.03).translate(0,1.05,-.2),"#f5d042"],[new at(.03,.03,.03).translate(0,.9,-.2),"#f5d042"],[new at(.16,.06,.26).translate(-.08,.03,-.03),"#1b1b1f"],[new at(.16,.06,.26).translate(.08,.03,-.03),"#1b1b1f"]]),dyeColors:["#15161c","#1b1d26"],dye2Colors:null},rickshaw:{dye:Fe([[new at(.8,.5,.7).translate(0,.95,.9),Kt],[new at(.85,.7,.08).translate(0,1.4,1.25),Kt],[new oe(.5,10,6,0,Math.PI*2,0,Math.PI*.5).scale(.9,.9,.8).translate(0,1.55,1.05),Kt]]),dye2:null,fixed:Fe([[new Xt(.6,.6,.06,16).rotateZ(Math.PI/2).translate(-.48,.6,1),"#3a2a22"],[new Xt(.6,.6,.06,16).rotateZ(Math.PI/2).translate(.48,.6,1),"#3a2a22"],[new at(.05,.05,1.8).translate(-.3,.85,-.2),"#3a2a22"],[new at(.05,.05,1.8).translate(.3,.85,-.2),"#3a2a22"],[new Xt(.16,.18,.55,8).translate(0,1.08,-1),"#1d3f8f"],[new at(.12,.75,.14).translate(-.08,.4,-1),"#1b1b1f"],[new at(.12,.75,.14).translate(.08,.4,-1),"#1b1b1f"],[new oe(.11,8,6).translate(0,1.47,-1),"#e0b48f"],[new Ei(.26,.12,12).translate(0,1.62,-1),"#d9c08a"],[new Xt(.17,.2,.5,8).translate(0,1.42,.85),"#e8384f"],[new oe(.11,8,6).translate(0,1.78,.85),"#f1c8a0"],[new oe(.12,8,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.8,.87),"#1b1410"]]),dyeColors:["#1b1b1f","#3a2a22","#2b2b33"],dye2Colors:null},man:{dye:Fe([[new Xt(.17,.2,.58,10).translate(0,1.04,0),Kt],[new at(.12,.4,.22).translate(-.25,1.02,0),Kt],[new at(.12,.4,.22).translate(.25,1.02,0),Kt]]),dye2:Fe([[new Xt(.2,.28,.78,10).translate(0,.4,0),Kt]]),fixed:Fe(ys("#1b1410")),dyeColors:xM,dye2Colors:vM},samurai:{dye:Fe([[new Xt(.18,.21,.58,10).translate(0,1.04,0),Kt],[new at(.72,.05,.24).translate(0,1.3,0),Kt],[new Xt(.21,.32,.8,10).translate(0,.4,0),Kt]]),dye2:null,fixed:Fe([...ys("#1b1410",[[new at(.05,.05,.16).translate(0,1.6,.02),"#1b1410"],[new at(.16,.06,.06).translate(0,1.04,-.17),"#f7f0e0"]]),[new at(.035,.035,.95).rotateX(-.35).translate(-.24,.9,.05),"#111111"],[new at(.03,.03,.6).rotateX(-.3).translate(-.22,.95,.02),"#3a2a22"]]),dyeColors:MM,dye2Colors:null}};class Df{constructor(t,e,n,s,{perSpot:r=uM,era:a="now",activeDist:o=dM}={}){this.scene=t,this.activeDist=o,this.terrain=n,this.buildings=s;const l=new Le({vertexColors:!0});this.crowds=e.map(f=>({spot:f,center:Te(f.lat,f.lon,0),people:[],active:!1,placed:!1,cheerCooldown:0}));const c=Object.fromEntries(Object.keys($o).map(f=>[f,0])),h=a==="showa"?[["woman",.28],["man",.12],["maiko",.08],["mobo",.13],["moga",.13],["student",.16],["rickshaw",.1]]:[["samurai",pM],["maiko",mM],["woman",.48],["man",.34]];for(const f of this.crowds)for(let p=0;p<r;p++){let g=Math.random(),x=h[h.length-1][0];for(const[m,d]of h){if(g<d){x=m;break}g-=d}f.people.push({kind:x,idx:c[x]++,colors:[],x:0,z:0,y:0,tx:0,tz:0,heading:0,speed:{samurai:.55,maiko:.45,rickshaw:2.2}[x]??.6+Math.random()*.45,phase:Math.random()*10,wait:Math.random()*6,placed:!1})}this.meshes={};const u=this.crowds.flatMap(f=>f.people);for(const[f,p]of Object.entries($o)){const g=Math.max(1,c[f]),x=[],m=(d,M)=>{const v=new wi(d,l,g);v.instanceMatrix.setUsage(jc),v.frustumCulled=!1,v.castShadow=!0,v.count=0;const _=x.length;for(const T of u)T.kind===f&&(T.colors[_]=M?new It(M[Math.floor(Math.random()*M.length)]):null);M&&(v.setColorAt(0,new It),v.instanceColor.setUsage(jc)),t.add(v),x.push(v)};m(p.dye,p.dyeColors),p.dye2&&m(p.dye2,p.dye2Colors),m(p.fixed,null),this.meshes[f]=x}this.dummy=new de,this.slots=Object.fromEntries(Object.keys($o).map(f=>[f,0]))}dispose(){for(const t of Object.values(this.meshes))for(const e of t)this.scene.remove(e),e.dispose()}setMatrix(t,e){const n=this.slots[t.kind]++,s=this.meshes[t.kind];for(let r=0;r<s.length;r++)s[r].setMatrixAt(n,e),t.colors[r]&&s[r].setColorAt(n,t.colors[r])}groundAt(t,e){return this.terrain.heightAtWorld(t,e)}pickSpot(t,e){for(let n=0;n<12;n++){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*fM,a=t.center.x+Math.cos(s)*r,o=t.center.z+Math.sin(s)*r,l=this.groundAt(a,o);if(!hM(a,o)&&!this.buildings.inside(a,o,l+1))return e.tx=a,e.tz=o,!0}return!1}update(t,e,n){let s=!1;const r=this.dummy;for(const a in this.slots)this.slots[a]=0;for(const a of this.crowds){const o=Math.hypot(a.center.x-n.x,a.center.z-n.z);if(o>=this.activeDist){a.active=!1;continue}if(a.active=!0,!a.placed){for(const c of a.people)this.pickSpot(a,c)&&(c.x=c.tx,c.z=c.tz,c.y=this.groundAt(c.x,c.z),c.placed=!0,this.pickSpot(a,c));a.placed=!0}const l=o<200;a.cheerCooldown-=t,l&&a.cheerCooldown<=0&&(s=!0,a.cheerCooldown=8);for(const c of a.people){if(!c.placed)continue;let h=0,u=0;if(l){let p=Math.atan2(n.x-c.x,n.z-c.z)-c.heading;p=Math.atan2(Math.sin(p),Math.cos(p)),c.heading+=p*Math.min(1,t*2)}else if(c.wait>0)c.wait-=t,c.wait<=0&&this.pickSpot(a,c);else{const f=c.tx-c.x,p=c.tz-c.z,g=Math.hypot(f,p);if(g<.4)c.wait=2+Math.random()*6;else{const x=Math.min(g,c.speed*t);c.x+=f/g*x,c.z+=p/g*x;let d=Math.atan2(f,p)-c.heading;d=Math.atan2(Math.sin(d),Math.cos(d)),c.heading+=d*Math.min(1,t*3);const M=e*6.5*c.speed+c.phase;h=Math.abs(Math.sin(M))*.025,u=Math.sin(M)*(c.kind==="samurai"?.05:.03),Math.random()<.02&&(c.y=this.groundAt(c.x,c.z))}}r.position.set(c.x,c.y+h*Mu,c.z),r.rotation.set(0,c.heading+Math.PI,u),r.scale.setScalar(Mu),r.updateMatrix(),this.setMatrix(c,r.matrix)}}for(const[a,o]of Object.entries(this.meshes))for(const l of o)l.count=this.slots[a],l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0);return s}}const SM=[{name:"四条線",pts:[[35.00365,135.7487],[35.00365,135.777]],cars:3},{name:"烏丸線",pts:[[34.9858,135.7596],[35.042,135.7596]],cars:4},{name:"河原町線",pts:[[34.9893,135.769],[35.03,135.769]],cars:3},{name:"東山線",pts:[[34.979,135.7755],[35.0036,135.778],[35.0297,135.7798]],cars:3},{name:"丸太町線",pts:[[35.017,135.735],[35.017,135.788]],cars:3},{name:"七条線",pts:[[34.9892,135.74],[34.9892,135.772]],cars:2},{name:"今出川線",pts:[[35.0297,135.742],[35.0297,135.787]],cars:3},{name:"千本線",pts:[[34.99,135.742],[35.045,135.743]],cars:3}],yu={lat:34.9868,lon:135.759};function wM(i,t){const e=i.toNonIndexed(),n=new It(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++)r.set([n.r,n.g,n.b],a*3);e.setAttribute("color",new ne(r,3));for(const a of Object.keys(e.attributes))["position","normal","color"].includes(a)||e.deleteAttribute(a);return e}const Fa=i=>Nr(i.map(([t,e])=>wM(t,e))),ba=new Le({vertexColors:!0});function EM(){return Fa([[new at(2.3,1.2,12).translate(0,.9,0),"#2f6b3a"],[new at(2.32,1.1,11.6).translate(0,2.05,0),"#f2e6c4"],[new at(2.34,.6,10.6).translate(0,2.05,0),"#2a3440"],[new at(2.4,.25,12.2).translate(0,2.72,0),"#5a5a5a"],[new at(.06,.06,4).rotateX(-.5).translate(0,3.8,-2.6),"#222222"],[new at(2.2,.35,.2).translate(0,.25,5.9),"#222222"],[new at(2.2,.35,.2).translate(0,.25,-5.9),"#222222"]])}function TM(i){const t=document.createElement("canvas");t.width=64,t.height=256;const e=t.getContext("2d");e.fillStyle="#fffaf0",e.fillRect(0,0,64,256),e.fillStyle="#c7254e",e.font="bold 44px serif",e.textAlign="center",[...i].forEach((s,r)=>e.fillText(s,32,50+r*50));const n=new Wn(t);return n.colorSpace=Ne,n}class bM{constructor(t,e){this.group=new Re,this.group.name="showa",t.add(this.group),this.heightAt=e,this.buildTrams(),this.buildPoles(),this.buildChimneys(),this.buildAdBalloons(),this.buildStation(),this.group.visible=!1}setVisible(t){this.group.visible=t}pointAt(t,e){let n=e;for(let s=0;s<t.segs.length;s++){const r=t.segs[s];if(n<=r.len||s===t.segs.length-1){const a=Math.min(1,n/r.len);return{x:r.a.x+(r.b.x-r.a.x)*a,z:r.a.z+(r.b.z-r.a.z)*a,angle:r.angle}}n-=r.len}return null}buildTrams(){const t=EM();this.lines=SM.map(n=>{const s=n.pts.map(([o,l])=>Te(o,l,0)),r=[];let a=0;for(let o=0;o<s.length-1;o++){const l=s[o],c=s[o+1],h=Math.hypot(c.x-l.x,c.z-l.z);r.push({a:l,b:c,len:h,angle:Math.atan2(c.x-l.x,c.z-l.z)}),a+=h}return{...n,segs:r,total:a}});const e=this.lines.reduce((n,s)=>n+s.cars,0);this.trams=new wi(t,ba,e),this.trams.castShadow=!0,this.trams.frustumCulled=!1,this.group.add(this.trams),this.cars=[];for(const n of this.lines)for(let s=0;s<n.cars;s++)this.cars.push({line:n,d:n.total*(s+.5)/n.cars,dir:s%2?1:-1,speed:7+Math.random()*2,wait:0,y:0,yTimer:0});this.dummy=new de}buildPoles(){const t=[];for(const r of this.lines)for(let a=0;a<r.total;a+=40){const o=this.pointAt(r,a);for(const l of[-1,1]){const c=Math.cos(o.angle)*9*l,h=-Math.sin(o.angle)*9*l;t.push([o.x+c,o.z+h,o.angle])}}const e=Fa([[new Xt(.12,.16,9,6).translate(0,4.5,0),"#5a4632"],[new at(1.6,.12,.12).translate(0,8.3,0),"#3a2e22"],[new at(1.2,.1,.1).translate(0,7.6,0),"#3a2e22"]]),n=new wi(e,ba,t.length),s=new de;t.forEach(([r,a,o],l)=>{s.position.set(r,this.heightAt(r,a)-.2,a),s.rotation.y=o,s.updateMatrix(),n.setMatrixAt(l,s.matrix)}),this.group.add(n)}buildChimneys(){const t=Fa([[new Xt(.7,1.1,22,10).translate(0,11,0),"#8a4a32"],[new Xt(.78,.78,.6,10).translate(0,21.2,0),"#3a3a3a"],[new at(6,4,6).translate(0,2,2.5),"#d9d0c0"]]),e=[];for(let l=0;l<28;l++){const c=34.98+Math.random()*.058,h=135.735+Math.random()*.045;e.push(Te(c,h,0))}const n=new wi(t,ba,e.length),s=new de;this.smoke=[],e.forEach((l,c)=>{const h=this.heightAt(l.x,l.z)-.3;s.position.set(l.x,h,l.z),s.rotation.y=Math.random()*6.28,s.updateMatrix(),n.setMatrixAt(c,s.matrix),this.smoke.push(new L(l.x,h+22.5,l.z))}),n.castShadow=!0,this.group.add(n);const r=14,a=new Float32Array(this.smoke.length*r*3);this.smokeSeed=Array.from({length:this.smoke.length*r},()=>Math.random());const o=new xe;o.setAttribute("position",new ne(a,3)),this.smokePoints=new Ja(o,new Fr({color:15262940,size:3.5,transparent:!0,opacity:.55,depthWrite:!1})),this.smokePoints.frustumCulled=!1,this.smokePerChimney=r,this.group.add(this.smokePoints)}buildAdBalloons(){const t=["仁丹","大売出し","キネマ","百貨店","カフェー","新発売","映画","万年筆","石鹸","化粧品"],e=["#e8382f","#f5b800","#2f7fe8","#2fbf71","#e85ab5","#ff8a3d"];this.ads=[];const n=new oe(2.4,16,12);for(let s=0;s<24;s++){const r=34.99+Math.random()*.03,a=135.75+Math.random()*.03,o=Te(r,a,0),l=this.heightAt(o.x,o.z),c=new Re;c.position.set(o.x,l+26+Math.random()*14,o.z),c.add(new xt(n,new Le({color:e[s%e.length]})));const h=t[s%t.length],u=new xt(new Ki(1.4,1.4*h.length+.8),new qs({map:TM(h),side:wn}));u.position.y=-2.4-(1.4*h.length+.8)/2-.5,c.add(u),this.group.add(c),this.ads.push({g:c,base:c.position.y,phase:Math.random()*6})}}buildStation(){const t=Te(yu.lat,yu.lon,0),e=this.heightAt(t.x,t.z)-.3,n=Fa([[new at(110,11,20).translate(0,5.5,0),"#efe6d2"],[new at(110.5,.8,20.5).translate(0,5.2,0),"#8a5a3a"],[new at(112,1,22).translate(0,11.4,0),"#6a6a72"],[new Ei(36,6,4).rotateY(Math.PI/4).scale(1.55,1,.33).translate(0,14.8,0),"#4f5a52"],[new at(18,18,22).translate(0,9,1),"#f5eedc"],[new at(10,10,10).translate(0,22,1),"#f5eedc"],[new Ei(8,8,4).rotateY(Math.PI/4).translate(0,31,1),"#3f5a4a"],[new Xt(2.4,2.4,.3,24).rotateX(Math.PI/2).translate(0,22,6.2),"#ffffff"],[new at(.2,1.8,.2).translate(0,22.6,6.4),"#111111"],[new at(1.3,.2,.2).translate(.5,22,6.4),"#111111"],...Array.from({length:14},(r,a)=>[new at(2.2,3,.4).translate(-48+a*7.4,7.8,10.1),"#2a3440"]),...Array.from({length:14},(r,a)=>[new at(2.2,3,.4).translate(-48+a*7.4,2.6,10.1),"#2a3440"])]),s=new xt(n,ba);s.position.set(t.x,e,t.z),s.rotation.y=Math.PI,s.castShadow=s.receiveShadow=!0,this.group.add(s)}update(t,e){if(!this.group.visible)return;const n=this.dummy;this.cars.forEach((a,o)=>{a.wait>0?a.wait-=t:(a.d+=a.dir*a.speed*t,a.d>a.line.total||a.d<0?(a.dir*=-1,a.d=Math.max(0,Math.min(a.line.total,a.d)),a.wait=4):Math.random()<t*.05&&(a.wait=3+Math.random()*3));const l=this.pointAt(a.line,a.d);a.yTimer-=t,a.yTimer<=0&&(a.y=this.heightAt(l.x,l.z),a.yTimer=1);const c=1.6*a.dir;n.position.set(l.x+Math.cos(l.angle)*c,a.y+.1,l.z-Math.sin(l.angle)*c),n.rotation.set(0,l.angle+(a.dir<0?Math.PI:0),0),n.updateMatrix(),this.trams.setMatrixAt(o,n.matrix)}),this.trams.instanceMatrix.needsUpdate=!0;for(const a of this.ads)a.g.position.y=a.base+Math.sin(e*.7+a.phase)*.8,a.g.rotation.y=Math.sin(e*.3+a.phase)*.4;const s=this.smokePoints.geometry.attributes.position.array,r=this.smokePerChimney;this.smoke.forEach((a,o)=>{for(let l=0;l<r;l++){const c=o*r+l,h=(e*.12+this.smokeSeed[c])%1;s[c*3]=a.x+h*18+Math.sin(c)*1.5,s[c*3+1]=a.y+h*14,s[c*3+2]=a.z+h*6+Math.cos(c)*1.5}}),this.smokePoints.geometry.attributes.position.needsUpdate=!0}}const Uf={x0:-17,x1:-3,z0:12,z1:21,floor:121.5},Rr={x:-10,z:20,heading:235};function AM(){const i=document.createElement("canvas");i.width=512,i.height=160;const t=i.getContext("2d");t.fillStyle="#fff6e0",t.strokeStyle="#d7262e",t.lineWidth=14,t.beginPath(),t.roundRect(8,8,496,144,36),t.fill(),t.stroke(),t.fillStyle="#1b1b1f",t.font='900 76px "M PLUS Rounded 1c", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("清水の舞台",256,84);const e=new Wn(i);return e.colorSpace=Ne,e}function RM(i,t){const e=new Re,n=new Le({color:10119740}),s=new Le({color:6175520}),{x0:r,x1:a,z0:o,z1:l,floor:c}=Uf,h=a-r,u=l-o,f=new xt(new at(h,.5,u),n);f.position.set((r+a)/2,c-.25,(o+l)/2),f.castShadow=f.receiveShadow=!0,e.add(f);for(let x=r+.6;x<a;x+=.6){const m=new xt(new at(.04,.02,u),s);m.position.set(x,c+.01,(o+l)/2),e.add(m)}const p=(x,m,d,M)=>{const v=Math.hypot(d-x,M-m),_=new xt(new at(v,.12,.12),s);_.position.set((x+d)/2,c+1,(m+M)/2),_.rotation.y=-Math.atan2(M-m,d-x),e.add(_)};p(r,o,r,l),p(a,o,a,l),p(r,l,r+3,l),p(a-3,l,a,l);for(let x=r+.5;x<=a;x+=3.4)for(let m=o+.5;m<=l;m+=2.8){const d=t(x,m),M=c-d+1;if(M<=0)continue;const v=new xt(new at(.6,M,.6),n);v.position.set(x,d+M/2-1,m),v.castShadow=!0,e.add(v)}for(let x=c-4;x>c-30;x-=4){for(let m=o+.5;m<=l;m+=2.8){const d=new xt(new at(h,.35,.3),s);d.position.set((r+a)/2,x,m),e.add(d)}for(let m=r+.5;m<=a;m+=3.4){const d=new xt(new at(.3,.35,u),s);d.position.set(m,x,(o+l)/2),e.add(d)}}const g=new wr(new Bs({map:AM(),transparent:!0}));return g.scale.set(9,2.8,1),g.position.set((r+a)/2,c+9,o-2),e.add(g),i.add(e),e}const CM=7,Su=.5,PM=1,LM=62,IM=20,DM=2.6;function UM(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="#f6b51e",t.fillRect(0,0,128,128),t.fillStyle="#1b1b1f";for(let n=-20;n<140;n+=22)t.beginPath(),t.moveTo(n,0),t.quadraticCurveTo(n+14,64,n,128),t.lineTo(n+8,128),t.quadraticCurveTo(n+22,64,n+8,0),t.fill();const e=new Wn(i);return e.colorSpace=Ne,e}function FM(i){const t=new Re,e=new Le({color:i}),n=new Le({color:16777215}),s=new qs({color:1118481}),r=new Le({color:16773572}),a=new Le({color:1776415}),o=new Le({map:UM()}),l=new Le({color:3816004}),c=new Re,h=new Le({color:16777215,emissive:6710886});for(const[v,_,T,b]of[[0,0,0,1.1],[1,.1,.3,.8],[-1,.05,-.2,.85],[.4,.2,-.8,.7],[-.5,.15,.8,.7],[1.6,-.1,-.4,.55],[-1.6,-.1,.4,.55]]){const A=new xt(new oe(b,12,10),h);A.position.set(v,_,T),A.scale.y=.7,c.add(A)}c.position.y=-1,c.name="cloud",t.add(c);const u=new xt(new ti(.55,.7,6,12),e);u.position.y=.6,t.add(u);const f=new xt(new Xt(.62,.66,.5,14),o);f.position.y=.2,t.add(f);for(const v of[-1,1]){const _=new xt(new ti(.2,.3,4,8),e);_.position.set(v*.3,-.25,0),t.add(_)}const p=new Re;p.name="head",p.position.y=1.65,t.add(p),p.add(new xt(new oe(.55,16,12),e));for(const v of[-1,1]){const _=new xt(new Ei(.13,.55,10),r);_.position.set(v*.28,.5,0),_.rotation.z=-v*.3,p.add(_);const T=new xt(new oe(.15,10,8),n);T.position.set(v*.2,.08,-.45),p.add(T);const b=new xt(new oe(.07,8,6),s);b.position.set(v*.2,.08,-.59),p.add(b);const A=new xt(new Xt(.035,.035,.3,6),s);A.rotation.z=Math.PI/2+v*.4,A.position.set(v*.2,.28,-.48),p.add(A);const P=new xt(new Ei(.05,.16,6),n);P.rotation.x=Math.PI,P.position.set(v*.15,-.28,-.46),p.add(P)}const g=new xt(new Xt(.22,.22,.05,16,1,!1,0,Math.PI),s);g.rotation.x=Math.PI/2,g.position.set(0,-.2,-.5),p.add(g);for(let v=0;v<9;v++){const _=v/9*Math.PI*2,T=new xt(new oe(.2,8,6),a);T.position.set(Math.cos(_)*.42,.3,Math.sin(_)*.42+.1),p.add(T)}const x=new xt(new ti(.16,.6,4,8),e);x.position.set(-.75,.75,0),x.rotation.z=.5,t.add(x);const m=new Re;m.name="arm",m.position.set(.7,1.05,0),t.add(m);const d=new xt(new ti(.16,.6,4,8),e);d.position.set(.15,.3,0),d.rotation.z=-.5,m.add(d);const M=new xt(new Xt(.16,.09,2,8),l);M.position.set(.35,1.1,0),M.rotation.z=-.2,m.add(M);for(let v=0;v<6;v++){const _=new xt(new Ei(.06,.14,5),n),T=v/6*Math.PI*2;_.position.set(.35+Math.cos(T)*.15,1.5-v%3*.3,Math.sin(T)*.15),_.rotation.z=-Math.PI/2,m.add(_)}for(const v of[t,c,p,m])OM(v);return t.scale.setScalar(DM),t.traverse(v=>{v.castShadow=!0}),t}const NM=new Le({vertexColors:!0});function OM(i){const t=[];for(const e of[...i.children]){if(!e.isMesh||e.material.map)continue;e.updateMatrix();const n=e.geometry.clone().applyMatrix4(e.matrix).toNonIndexed(),s=e.material.color,r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a.set([s.r,s.g,s.b],o*3);n.setAttribute("color",new ne(a,3));for(const o of Object.keys(n.attributes))["position","normal","color"].includes(o)||n.deleteAttribute(o);t.push(n),i.remove(e)}t.length&&i.add(new xt(Nr(t),NM))}const Ko=new Map;function wu(i){Ko.has(i)||Ko.set(i,FM(i));const t=Ko.get(i).clone();return t.userData.arm=t.getObjectByName("arm"),t.userData.head=t.getObjectByName("head"),t.userData.cloud=t.getObjectByName("cloud"),t}const Zo=[14170670,3104728,3123279,9060312,15769632,2236962],BM=450,Eu=600,zM=6,kM=450,GM=600,Jo=45,HM=new L;class VM{constructor(t){this.scene=t,this.list=[],this.time=0,this.calm=0,this.nextSpawn=Su,this.homes=[],this.heightAt=()=>0}warmupObjects(){const t=new Re;for(const e of Zo)t.add(wu(e));return t}setWorld(t,e){this.homes=t,this.heightAt=e}reset(){for(const t of this.list)this.scene.remove(t.obj);this.list=[],this.time=0,this.calm=0,this.nextSpawn=Su}spawnAt(t){const e=this.list.length,n=wu(Zo[e%Zo.length]),s=t.clone(),r=Math.random()*Math.PI*2,a=100+Math.random()*300;s.x+=Math.cos(r)*a,s.z+=Math.sin(r)*a,s.y=this.heightAt(s.x,s.z)+60+Math.random()*140,n.position.copy(s),this.scene.add(n);const o={obj:n,pos:s,vel:new L,phase:Math.random()*6,n:e,home:t.clone(),state:"wander",waypoint:s.clone(),flank:Math.random()*Math.PI*2};return this.pickWaypoint(o),this.list.push(o),o}pickWaypoint(t){const e=Math.random()*Math.PI*2,n=Math.random()*kM,s=t.home.x+Math.cos(e)*n,r=t.home.z+Math.sin(e)*n;t.waypoint.set(s,this.heightAt(s,r)+50+Math.random()*170,r)}chooseHomes(t,e,n){const s=this.homes.filter(r=>Math.hypot(r.x-e.x,r.z-e.z)>n);for(let r=s.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[s[r],s[a]]=[s[a],s[r]]}return s.slice(0,t)}addForCheckpoint(t,e,n){if(t%PM!==0||!this.list.length||this.list.length>=LM)return null;const s=n.filter(a=>Math.hypot(a.x-e.position.x,a.z-e.position.z)>700),r=(s.length?s:n)[Math.floor(Math.random()*(s.length||n.length))];return r?this.spawnAt(r):null}scatter(t,e=5){for(const n of this.list)n.state!=="chase"&&n.pos.distanceTo(t.position)>Eu||(n.state="wander",n.pos.copy(n.home),n.pos.y=this.heightAt(n.home.x,n.home.z)+120,n.vel.set(0,0,0),n.ground=void 0,this.pickWaypoint(n));this.calm=e}update(t,e,n){const s={spawned:null,found:[],nearest:1/0,nearestChase:1/0,caught:!1};n&&(this.time+=t,this.calm=Math.max(0,this.calm-t),this.time>=this.nextSpawn&&!this.list.length&&(s.spawned=this.chooseHomes(IM,e.position,GM).map(o=>this.spawnAt(o))));const r=Math.min(27,15+this.time*.04),a=e.position;for(const o of this.list){if(o.phase+=t,n){const c=o.pos.distanceTo(a),h=HM;if(o.state==="chase"){c>Eu&&(o.state="wander",o.waypoint.copy(o.home),o.waypoint.y=this.heightAt(o.home.x,o.home.z)+120);const u=Math.min(70,c*.35);h.copy(e.velocity).multiplyScalar(Math.min(3,c/40)).add(a),h.x+=Math.cos(o.flank)*u,h.z+=Math.sin(o.flank)*u,h.sub(o.pos).normalize().multiplyScalar(r+o.n%5*.6);for(const f of this.list){if(f===o||f.state!=="chase")continue;const p=o.pos.x-f.pos.x,g=o.pos.y-f.pos.y,x=o.pos.z-f.pos.z,m=Math.hypot(p,g,x);if(m>.1&&m<Jo){const d=(Jo-m)/Jo*r*.8;h.x+=p/m*d,h.y+=g/m*d,h.z+=x/m*d}}o.vel.lerp(h,Math.min(1,t*.9)),s.nearestChase=Math.min(s.nearestChase,c)}else c<BM&&!this.calm&&(o.state="chase",s.found.push(o)),o.pos.distanceTo(o.waypoint)<25&&this.pickWaypoint(o),h.copy(o.waypoint).sub(o.pos).normalize().multiplyScalar(zM),o.vel.lerp(h,Math.min(1,t*.6));o.pos.addScaledVector(o.vel,t),o.groundTimer=(o.groundTimer??Math.random()*.5)-t,(o.groundTimer<=0||o.ground===void 0)&&(o.ground=this.heightAt(o.pos.x,o.pos.z),o.groundTimer=.5),o.pos.y<o.ground+12&&(o.pos.y=o.ground+12),c<s.nearest&&(s.nearest=c),c<CM&&(s.caught=!0)}const l=o.state==="chase";o.obj.position.copy(o.pos),o.obj.position.y+=Math.sin(o.phase*2)*.8,o.vel.lengthSq()>.1&&(o.obj.rotation.y=Math.atan2(-o.vel.x,-o.vel.z)),o.obj.userData.arm.rotation.z=Math.sin(o.phase*(l?9:3))*(l?.8:.3),o.obj.userData.head.rotation.z=Math.sin(o.phase*(l?3:1))*(l?.15:.35),o.obj.userData.cloud.rotation.y+=t*1.5}return s}}const WM=15221548;function Tu(i,t){const e=i*.045,n=[new Xt(e,e*1.1,t,12).translate(-i/2,t/2,0),new Xt(e,e*1.1,t,12).translate(i/2,t/2,0),new at(i*1.45,t*.07,e*2.4).translate(0,t*.98,0),new at(i*1.2,t*.05,e*1.8).translate(0,t*.82,0)];return Nr(n.map(s=>s.toNonIndexed()))}function XM(i,t){const e=new Re,n=new Le({color:WM}),s=new Le({color:2236962});for(const _ of lM){const T=Te(_.lat,_.lon,0),b=new xt(Tu(_.width,_.height),n);b.position.set(T.x,t(T.x,T.z)-.5,T.z),b.rotation.y=_.deg*Math.PI/180,b.castShadow=!0,e.add(b);const A=new xt(new at(_.width*1.5,_.height*.03,_.width*.11),s);A.position.set(0,_.height*1.025,0),b.add(A)}const r=cM.map(([_,T])=>Te(_,T,0)),a=[];for(let _=0;_<r.length-1;_++){const T=r[_],b=r[_+1],A=Math.hypot(b.x-T.x,b.z-T.z),P=Math.atan2(b.x-T.x,b.z-T.z);for(let w=0;w<A;w+=1.4){const y=T.x+(b.x-T.x)*w/A,C=T.z+(b.z-T.z)*w/A;a.push({x:y,z:C,angle:P})}}const o=new wi(Tu(2.4,3.2),n,a.length),l=new de;a.forEach((_,T)=>{l.position.set(_.x,t(_.x,_.z)-.2,_.z),l.rotation.y=_.angle+Math.PI/2,l.updateMatrix(),o.setMatrixAt(T,l.matrix)}),o.castShadow=!0,e.add(o);const c=Te(...lr.from,0),h=Te(...lr.to,0),u=Math.hypot(h.x-c.x,h.z-c.z),f=Math.atan2(h.x-c.x,h.z-c.z),p=t(c.x,c.z),g=t(h.x,h.z),x=Math.max(p,g)+1.5,m=new Re;m.position.set((c.x+h.x)/2,0,(c.z+h.z)/2),m.rotation.y=f;const d=new Le({color:9071178}),M=new xt(new at(lr.width,.8,u+6),d);M.position.y=x,M.castShadow=M.receiveShadow=!0,m.add(M);for(const _ of[-1,1]){const T=new xt(new at(.3,1.1,u+6),new Le({color:5916210}));T.position.set(_*(lr.width/2-.2),x+.9,0),m.add(T)}const v=new Xt(.35,.35,12,8);for(let _=-u/2;_<=u/2;_+=7)for(const T of[-1,0,1]){const b=new xt(v,d);b.position.set(T*lr.width*.35,x-6,_),m.add(b)}e.add(m);{const _=Te(Mi.lat,Mi.lon,0),T=t(_.x,_.z)+.4,b=new xt(new wc(.5,48),new tm({color:3499870,shininess:90,specular:9418672}));b.rotation.x=-Math.PI/2,b.scale.set(Mi.w,Mi.d,1),b.position.set(_.x,T,_.z),b.receiveShadow=!0,e.add(b);const A=new Le({color:3103274});for(const[P,w,y]of[[-18,8,6],[12,14,4.5],[25,-5,3.5],[-30,-10,3]]){const C=new xt(new oe(y,12,8),A);C.scale.y=.45,C.position.set(_.x+P,T,_.z+w),e.add(C)}}{const _=Te(...or.from,0),T=Te(...or.to,0),b=Math.hypot(T.x-_.x,T.z-_.z),A=(T.x-_.x)/b,P=(T.z-_.z)/b,w=[];for(let W=0;W<=b;W+=or.spacing)for(const B of[-1,1])w.push([_.x+A*W-P*B*or.width/2,_.z+P*W+A*B*or.width/2]);const y=new Xt(.08,.1,1.6,6).translate(0,.8,0),C=new at(.42,.5,.42).translate(0,1.85,0),U=Nr([y.toNonIndexed(),C.toNonIndexed()]),O=new wi(U,n,w.length),k=new de;w.forEach(([W,B],Z)=>{k.position.set(W,t(W,B)-.1,B),k.updateMatrix(),O.setMatrixAt(Z,k.matrix)}),e.add(O)}return i.add(e),e}function qM(i){const t={android:{test:{interstitial:"ca-app-pub-3940256099942544/1033173712",rewarded:"ca-app-pub-3940256099942544/5224354917",banner:"ca-app-pub-3940256099942544/6300978111"},production:{interstitial:"ca-app-pub-6411535997477460/4244705528",rewarded:"ca-app-pub-6411535997477460/5064009356",banner:"ca-app-pub-6411535997477460/3370607558"}},ios:{test:{interstitial:"ca-app-pub-3940256099942544/4411468910",rewarded:"ca-app-pub-3940256099942544/1712485313",banner:"ca-app-pub-3940256099942544/2934735716"},production:{interstitial:"ca-app-pub-6411535997477460/4138758738",rewarded:"ca-app-pub-6411535997477460/2431312436",banner:"ca-app-pub-6411535997477460/2622884123"}}},e=2e4,n=window.Capacitor,s=!!(n&&n.isNativePlatform&&n.isNativePlatform());let r=s&&n.Plugins?n.Plugins.AdMob:null;const a=s&&n.getPlatform&&n.getPlatform()==="ios"?"ios":"android",o=window.AD_MODE!=="production",l=t[a][o?"test":"production"],c=y=>!!l[y];!c("interstitial")&&!c("rewarded")&&!c("banner")&&(r=null);let h=!1,u=!1,f=!1;const p={},g={inter:{unit:"interstitial",loaded:!1,pending:null,load:()=>r.prepareInterstitial({adId:l.interstitial,isTesting:o})},reward:{unit:"rewarded",loaded:!1,pending:null,load:()=>r.prepareRewardVideoAd({adId:l.rewarded,isTesting:o})}};function x(y){const C=g[y];return!h||!c(C.unit)?Promise.resolve(!1):C.loaded?Promise.resolve(!0):(C.pending||(C.pending=C.load().then(()=>(C.loaded=!0,!0)).catch(()=>(setTimeout(()=>x(y),e),!1)).finally(()=>{C.pending=null})),C.pending)}function m(y,C){return g[y].loaded?Promise.resolve(!0):Promise.race([x(y),new Promise(U=>setTimeout(()=>U(!1),C))])}function d(y,C){u=!1,document.hidden||i.resume(),A();const U=p[y];p[y]=null,U&&U(C)}async function M(){try{await r.initialize({initializeForTesting:o})}catch{return}try{let C=await r.requestConsentInfo();C.status==="REQUIRED"&&C.isConsentFormAvailable&&(C=await r.showConsentForm()),h=C.canRequestAds!==!1,f=C.privacyOptionsRequirementStatus==="REQUIRED"}catch{h=!0}if(a==="ios")try{const{status:C}=await r.trackingAuthorizationStatus();C==="notDetermined"&&await r.requestTrackingAuthorization()}catch{}let y=!1;r.addListener("interstitialAdDismissed",()=>d("inter")),r.addListener("interstitialAdFailedToShow",()=>d("inter")),r.addListener("onRewardedVideoAdShowed",()=>{y=!1}),r.addListener("onRewardedVideoAdReward",()=>{y=!0}),r.addListener("onRewardedVideoAdDismissed",()=>d("reward",y)),r.addListener("onRewardedVideoAdFailedToShow",()=>d("reward",!1)),x("inter"),x("reward"),A()}async function v(y=0){if(!(!r||u||!c("interstitial"))&&(await w,!(!h||!await m("inter",y))))return u=!0,g.inter.loaded=!1,i.suspend(),A(),new Promise(C=>{p.inter=()=>{x("inter"),C()},r.showInterstitial().catch(()=>d("inter"))})}async function _(){return!r||u||!c("rewarded")||(await w,!h||!await m("reward",8e3))?"unavailable":(u=!0,g.reward.loaded=!1,i.suspend(),A(),new Promise(y=>{p.reward=C=>{x("reward"),y(C?"rewarded":"skipped")},r.showRewardVideoAd().catch(()=>d("reward",!1))}))}const T={want:!1,state:"none",busy:!1};function b(y){T.want!==y&&(T.want=y,A())}async function A(){if(!r||!h||T.busy||!c("banner"))return;const y=T.want&&!u?"shown":"hidden";if(y===T.state||y==="hidden"&&T.state==="none")return;T.busy=!0;try{y==="shown"?(T.state==="none"?await r.showBanner({adId:l.banner,adSize:"BANNER",position:"BOTTOM_CENTER",margin:0,isTesting:o}):await r.resumeBanner(),T.state="shown"):(await r.hideBanner(),T.state="hidden")}catch{y==="shown"&&(T.state="none")}T.busy=!1;const C=T.want&&!u?"shown":"hidden";C!==T.state&&!(C==="hidden"&&T.state==="none")&&A()}function P(){return r?r.showPrivacyOptionsForm().catch(()=>{}):Promise.resolve()}const w=r?M():Promise.resolve();return{get available(){return!!r},get canReward(){return!!r&&c("rewarded")},get showing(){return u},get privacyOptionsRequired(){return f},initDone:w,showInterstitial:v,showRewarded:_,setBanner:b,showPrivacyOptions:P}}const K=i=>document.getElementById(i),Or=5,Ff=1,jM="https://techgym.jp/column/claude-code-game-kiyomizu/";var Ca,Fu;const Cc=!!((Fu=(Ca=window.Capacitor)==null?void 0:Ca.isNativePlatform)!=null&&Fu.call(Ca)),ic=i=>{var t;return Cc?((t=window.Capacitor.Plugins)==null?void 0:t[i])??null:null};Cc&&document.body.classList.add("app");const Nf=3,YM=2.5,bu=6,Ae={quality:localStorage.getItem("kiyomizu-quality2")==="high"?"high":"low",muted:localStorage.getItem("kiyomizu-muted")==="1",era:localStorage.getItem("kiyomizu-era")==="showa"?"showa":"now"};Hv();K("opt-lang").value=Hs;K("opt-lang").addEventListener("change",i=>{localStorage.setItem("kiyomizu-lang",i.target.value),location.reload()});K("opt-era").value=Ae.era;K("opt-era").addEventListener("change",i=>io(i.target.value));Ae.era==="showa"&&document.body.classList.add("showa");K("opt-quality").value=Ae.quality;K("opt-mute").checked=Ae.muted;K("opt-quality").addEventListener("change",i=>{localStorage.setItem("kiyomizu-quality2",i.target.value),location.reload()});K("opt-mute").addEventListener("change",i=>{Ae.muted=i.target.checked,localStorage.setItem("kiyomizu-muted",Ae.muted?"1":"0"),Bt.setMuted(Ae.muted)});const Of=K("view"),on=matchMedia("(pointer: coarse)").matches,ge=new Xx({canvas:Of,antialias:!on,logarithmicDepthBuffer:!on});ge.debug.checkShaderErrors=!1;ge.setPixelRatio(Math.min(devicePixelRatio,Ae.quality==="high"?2:on?.75:1.25));ge.setSize(innerWidth,innerHeight);ge.outputColorSpace=Ne;ge.toneMapping=Gu;ge.toneMappingExposure=1;ge.autoClear=!1;const Cr=Ae.quality==="high";ge.shadowMap.enabled=Cr;ge.shadowMap.type=ku;ge.shadowMap.autoUpdate=!1;const Se=new of;Se.fog=new yc(new It(11130101),6e3,32e3);const Be=new dn(65,innerWidth/innerHeight,on?.5:.1,6e4),Xi=new dn(55,16/10,.5,3500),Pc=new bi(320,200),Bf=new of,$M=new bc(-.5,.5,.5,-.5,0,1);Bf.add(new xt(new Ki(1,1),new qs({map:Pc.texture,depthTest:!1,depthWrite:!1})));const Lc=new L().setFromSphericalCoords(1,Xe.degToRad(50),Xe.degToRad(320)),sc=tM(Lc);Se.add(sc);Se.add(new im(14216447,9073488,1.9));const Un=new am(16773336,2.6);Un.position.copy(Lc).multiplyScalar(1e3);Se.add(Un);Se.add(Un.target);if(Cr){Un.castShadow=!0,Un.shadow.mapSize.set(2048,2048);const i=Un.shadow.camera;i.left=i.bottom=-260,i.right=i.top=260,i.near=10,i.far=3e3,Un.shadow.bias=-4e-4,Un.shadow.normalBias=.6}function KM(i){const t=Math.round(i.x/4)*4,e=Math.round(i.y/4)*4,n=Math.round(i.z/4)*4;Un.target.position.set(t,e,n),Un.position.set(t,e,n).addScaledVector(Lc,1500)}let _i=null;function zf(){const i=K("wipe").getBoundingClientRect();if(_i=i.width?{x:i.left+5,y:i.top+5,w:i.width-10,h:i.height-10}:null,_i){Xi.aspect=_i.w/_i.h,Xi.updateProjectionMatrix();const t=on?.5:.75;Pc.setSize(Math.round(_i.w*t),Math.round(_i.h*t))}}addEventListener("resize",()=>{Be.aspect=innerWidth/innerHeight,Be.updateProjectionMatrix(),ge.setSize(innerWidth,innerHeight),zf()});const Pe=new ov(Se,{era:Ae.era,mobile:on}),lt=new Bv;Se.add(lt.object);const Bt=new Qv;Bt.era=Ae.era;Bt.setMuted(Ae.muted);const Pn=qM(Bt),Ic=new aM(Se),kn=new VM(Se);let We=null,Bn=null,dr=null,qi=null,Vs=null;const kf=on?30:60,Gf=on?900:1600,rn=new L(Rr.x,Uf.floor+1.3,Rr.z),rc=new L,ye={};function Hf(){const i=!Bt.ctx;Bt.init(),i&&(Lt==="title"||Lt==="loading")&&Bt.playSong("title")}addEventListener("pointerdown",Hf);addEventListener("keydown",Hf);document.addEventListener("click",i=>{i.target.closest("button")&&Bt.click()});const no=new Set,Qn={x:0,y:0,jet:!1};addEventListener("keydown",i=>{i.target.tagName!=="INPUT"&&(no.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),i.code==="KeyC"&&Vf(),i.code==="KeyT"&&io(Ae.era==="showa"?"now":"showa"),i.code==="KeyM"&&(Ae.muted=!Ae.muted,K("opt-mute").checked=Ae.muted,Bt.setMuted(Ae.muted)),(i.code==="KeyP"||i.code==="Escape")&&Ws(),i.code==="Space"&&Lt==="ready"&&Ya())});addEventListener("keyup",i=>no.delete(i.code));addEventListener("blur",()=>no.clear());function ZM(){const i=(...n)=>n.some(s=>no.has(s)),t=(i("ArrowUp","KeyW")?1:0)-(i("ArrowDown","KeyS")?1:0)-Qn.y,e=(i("ArrowRight","KeyD")?1:0)-(i("ArrowLeft","KeyA")?1:0)+Qn.x;return{pitch:Xe.clamp(t,-1,1),roll:Xe.clamp(e,-1,1),jet:i("Space","ShiftLeft","ShiftRight")||Qn.jet}}const ac=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;(function(){const t=K("stick"),e=K("stick-knob");let n=null;const s=l=>{const c=t.getBoundingClientRect(),h=c.left+c.width/2,u=c.top+c.height/2;let f=(l.clientX-h)/(c.width/2),p=(l.clientY-u)/(c.height/2);const g=Math.hypot(f,p);g>1&&(f/=g,p/=g),Qn.x=f,Qn.y=p,e.style.transform=`translate(${f*40}px, ${p*40}px)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const r=l=>{l.pointerId===n&&(n=null,Qn.x=Qn.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);const a=K("touch-jet");a.addEventListener("pointerdown",l=>{l.preventDefault(),Lt==="ready"&&Ya(),Qn.jet=!0});const o=()=>{Qn.jet=!1};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o),a.addEventListener("pointerleave",o),K("touch-cam").addEventListener("pointerdown",l=>{l.preventDefault(),Vf()}),K("touch-era").addEventListener("pointerdown",l=>{l.preventDefault(),io(Ae.era==="showa"?"now":"showa")}),K("touch-pause").addEventListener("pointerdown",l=>{l.preventDefault(),Lt==="flying"&&Ws()}),Of.addEventListener("pointerdown",()=>{Lt==="ready"&&Ya()})})();let Pr="chase";const Aa=new L,Au=new L(0,1,0),Qo=new L,tl=new L,Es=new L,el=new L(0,1,0);let Lr=!1;function Vf(){Pr=Pr==="pilot"?"chase":"pilot",Lr=!1}function Ru(i){lt.object.getObjectByName("pilotHead").visible=i,lt.object.getObjectByName("pilotBody").visible=i,lt.object.traverse(t=>{t.name==="centerPole"&&(t.visible=i)})}function Cu(i,t){ks(i,ye);const e=Pe.heightAt(ye.lat,ye.lon);ye.height<e+t&&(i.y+=e+t-ye.height)}function nl(i){const t=lt.forward(rc);if(Pr==="pilot")lt.object.updateMatrixWorld(),Be.position.set(0,.1,-.2).applyMatrix4(lt.object.matrixWorld),Be.quaternion.copy(lt.object.quaternion),Be.rotateX(-.12);else{const s=7.5+lt.speed*.06,r=lt.position.clone().addScaledVector(t,-s);r.y+=2.2-Math.sin(lt.gamma)*3,Lr||(Aa.copy(r),Lr=!0),Aa.lerp(r,Math.min(1,i*5)),Cu(Aa,2),Be.position.copy(Aa),Qo.set(0,1,0).applyQuaternion(lt.object.quaternion).lerp(el,.55).normalize(),Au.lerp(Qo,Math.min(1,i*4)),Be.up.copy(Au),tl.copy(lt.position).addScaledVector(t,6),tl.y+=.8,Be.lookAt(tl)}const e=Qo.crossVectors(t,el).normalize(),n=lt.position.clone().addScaledVector(t,6.5).addScaledVector(e,2.2);n.y+=.4,Es.lerp(n,Math.min(1,i*8)),Es.distanceTo(n)>30&&Es.copy(n),Cu(Es,1),Xi.position.copy(Es),Xi.up.copy(el),Xi.lookAt(lt.position.x,lt.position.y+.6,lt.position.z)}let Lt="loading",pt=null,Pu=0;function Wf(){return{distance:0,time:0,checkpoints:[],grace:1.2,wasJetting:!1,inThermal:!1,oniDist:1/0,oniChase:1/0,chasers:0,alarm:!1,alarmTimer:0,clear:!1,continues:0,trail:[],trailTimer:0}}function JM(){lt.reset(rn,Rr.heading*Xe.DEG2RAD),lt.gamma=0,lt.speed=0,lt.jetFuel=Ff*Or,lt.syncObject(),Bn.reset(),kn.reset(),pt=Wf(),Yf()}function Dc(){Bt.init(),Br(),K("hud").classList.remove("hidden"),zf(),ac&&K("touch").classList.remove("hidden"),JM(),Lt="ready",Pr="chase",Lr=!1,Es.copy(lt.position),Bt.playSong("start"),Hn(Ft("start"),2.6),K("hint").textContent=Ft(ac?"hintTouch":"hintKey")}function Ya(){Lt==="ready"&&(Bt.init(),lt.reset(rn,Rr.heading*Xe.DEG2RAD),lt.jetFuel=Ff*Or,Lt="flying",K("hint").textContent="",Bt.jump(),Bt.playSong("flight"),Hn(Ft("jump"),2))}function Uc(i,t,e=!1){Lt="over",pt.clear=e,Bt.stopSong(.1),e?Bt.turboGet():Bt.crash(),K("touch").classList.add("hidden"),Hn(i,1.4);const n=!e&&Pn.canReward&&pt.continues<Nf;setTimeout(()=>{Lt==="over"&&(n?QM(i,t):Xf(i,t))},(n?YM:1.5)*1e3)}function Xf(i,t){const e=pt.clear,n=pt.distance/1e3;K("result-title").textContent=i,K("result-reason").textContent=t,K("result-cp").textContent=`${pt.checkpoints.length}`,K("result-dist").textContent=`${n.toFixed(2)} km`,K("result-time").textContent=jf(pt.time),K("result-spots").textContent=(pt.checkpoints.length?Ft("visited",pt.checkpoints):Ft("noBalloons"))+(pt.continues?Ft("continued",pt.continues):"");const s=s1(pt.checkpoints.length,pt.distance),r=e||s<=10&&(pt.checkpoints.length>0||pt.distance>50);K("result-title").classList.toggle("clear",e),K("rank-banner").classList.toggle("hidden",!r),K("rank-no").textContent=s,K("result-name").value=localStorage.getItem("kiyomizu-name")||"",K("btn-save").disabled=!1,K("btn-save").textContent=Ft("save"),Gn("result"),r?(Bt.playSong("ranking"),e1()):Bt.playSong("gameover")}const Ve={active:!1,busy:!1,t:0,timer:0,title:"",reason:""};function QM(i,t){Object.assign(Ve,{active:!0,busy:!1,t:bu,title:i,reason:t}),K("btn-cont-watch").disabled=!1,K("btn-cont-watch").textContent=Ft("contWatch"),K("cont-note").textContent=Ft("contNote",Nf-pt.continues),K("btn-cont-skip").textContent=Ft("contSkip",bu),Gn("continue"),clearInterval(Ve.timer),Ve.timer=setInterval(()=>{!Ve.active||Ve.busy||(Ve.t-=.25,K("btn-cont-skip").textContent=Ft("contSkip",Math.max(0,Math.ceil(Ve.t))),Ve.t<=0&&Is(!0))},250)}function Is(i){Ve.active&&(Ve.active=!1,clearInterval(Ve.timer),i&&Lt==="over"&&Xf(Ve.title,Ve.reason))}K("btn-cont-skip").addEventListener("click",()=>Is(!0));K("btn-cont-watch").addEventListener("click",async()=>{if(!Ve.active||Ve.busy)return;Ve.busy=!0,K("btn-cont-watch").disabled=!0,K("btn-cont-watch").textContent=Ft("contLoading");const i=await Pn.showRewarded();if(Ve.active){if(i==="unavailable"){K("cont-note").textContent=Ft("contFail"),setTimeout(()=>Is(!0),2e3);return}if(i!=="rewarded"){Is(!0);return}Is(!1),t1()}});function t1(){const i=pt.trail[Math.max(0,pt.trail.length-8)]??{pos:rn.clone().setY(rn.y+60),yaw:Rr.heading*Xe.DEG2RAD},t=i.pos.clone();t.y=Math.max(t.y+30,Pe.heightAtWorld(t.x,t.z)+80);const e=lt.jetFuel;lt.reset(t,i.yaw),lt.gamma=0,lt.speed=16,lt.jetFuel=e,lt.addJet(Or),lt.syncObject(),kn.scatter(lt),pt.continues++,pt.trail=[],pt.grace=2,pt.alarm=!1,pt.alarmTimer=0,Lt="flying",Br(),ac&&K("touch").classList.remove("hidden"),Lr=!1,Bt.jump(),Bt.turboGet(),Bt.playSong("flight"),Hn(Ft("contGo"),2.4)}function qf(i,t,e){for(const n of Ic.show(Be,i,t,e))Bt.firework(n)}function e1(){qf(8,!0,.35)}function Ws(){Lt==="flying"?(Lt="paused",Gn("pause"),Bt.update(0,{})):Lt==="paused"&&(Lt="flying",Br())}let gr=!1;async function Ai(i){gr||(Pn.available&&(gr=!0,Br(),await Pn.showInterstitial(3e3),gr=!1),i())}function n1(){const i=t=>!K(t).classList.contains("hidden");Pn.setBanner(!gr&&(i("title")||i("howto")||i("pause")||i("result")))}function Gn(i){Br(),K(i).classList.remove("hidden")}function Br(){document.querySelectorAll(".screen").forEach(i=>i.classList.add("hidden"))}let Lu=0;function Hn(i,t=2.2){const e=K("message");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(Lu),Lu=setTimeout(()=>e.classList.remove("show"),t*1e3)}K("btn-start").addEventListener("click",()=>Ai(Dc));K("btn-retry").addEventListener("click",()=>Ai(Dc));K("btn-resume").addEventListener("click",()=>{Lt==="paused"&&Ai(Ws)});K("btn-pause-title").addEventListener("click",()=>{Lt==="paused"&&Ai(Fc)});K("btn-howto").addEventListener("click",()=>Gn("howto"));K("btn-ranking").addEventListener("click",()=>{a1(),Gn("ranking")});K("btn-to-title").addEventListener("click",()=>Ai(Fc));K("btn-howto-ok").addEventListener("click",()=>Ai(()=>Gn("title")));K("btn-ranking-close").addEventListener("click",()=>Gn("title"));K("btn-save").addEventListener("click",()=>{const i=K("result-name").value.trim()||Ft("anonymous");localStorage.setItem("kiyomizu-name",i),r1({name:i,cp:pt.checkpoints.length,dist:pt.distance,date:Date.now()}),K("btn-save").disabled=!0,K("btn-save").textContent=Ft("saved"),Bt.turboGet()});K("btn-share").addEventListener("click",async()=>{const i=Ft("share",(pt.distance/1e3).toFixed(2),pt.checkpoints.length)+(pt.continues?Ft("continued",pt.continues):""),t=jM,e=ic("Share");if(e){try{await e.share({title:document.title,text:`${i} #${Ft("hashtag")}`,url:t,dialogTitle:Ft("shareDialog")})}catch{}return}open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(i)}&url=${encodeURIComponent(t)}&hashtags=${encodeURIComponent(Ft("hashtag"))}`,"_blank")});document.addEventListener("visibilitychange",()=>{document.hidden?(Lt==="flying"&&Ws(),Bt.suspend()):Pn.showing||Bt.resume()});var Nu;(Nu=ic("App"))==null||Nu.addListener("backButton",()=>{if(gr||Pn.showing)return;const i=t=>!K(t).classList.contains("hidden");Lt==="flying"?Ws():Lt==="paused"?Ai(Ws):Ve.active?Is(!0):i("howto")?Ai(()=>Gn("title")):i("ranking")?Gn("title"):Lt==="ready"?Fc():(Lt!=="over"||i("result"))&&ic("App").exitApp()});var Ou,Bu;if(Cc){K("legal").classList.remove("hidden"),window.APP_VERSION&&window.APP_VERSION!=="dev"&&(K("build-info").textContent=window.APP_VERSION),Hs==="en"&&(K("privacy-link").href="https://techgym.jp/privacy-policy-en/"),Pn.initDone.then(()=>{Pn.privacyOptionsRequired&&K("ad-privacy").classList.remove("hidden")}),K("ad-privacy").addEventListener("click",t=>{t.preventDefault(),Pn.showPrivacyOptions()});const i=[...Ft("howtoApp"),["⏸",Ft(((Bu=(Ou=window.Capacitor).getPlatform)==null?void 0:Bu.call(Ou))==="android"?"howtoPauseAndroid":"howtoPause")]];K("howto-list").innerHTML=i.map(([t,e])=>`<li><span class="key">${t}</span><span>${e}</span></li>`).join(""),K("btn-resume").textContent=Ft("resumeApp")}function Fc(){Lt="title",K("hud").classList.add("hidden"),K("touch").classList.add("hidden"),Gn("title"),Bt.playSong("title")}function Nc(){try{return JSON.parse(localStorage.getItem("kiyomizu-ranking")||"[]")}catch{return[]}}function i1(i){return i.sort((t,e)=>e.cp-t.cp||e.dist-t.dist)}function s1(i,t){return Nc().filter(e=>e.cp>i||e.cp===i&&e.dist>t).length+1}function r1(i){const t=i1([...Nc(),i]).slice(0,10);try{localStorage.setItem("kiyomizu-ranking",JSON.stringify(t))}catch{}}function a1(){const i=K("ranking-body"),t=Nc();if(i.innerHTML="",!t.length){i.innerHTML=`<tr><td colspan="5">${Ft("noRecords")}</td></tr>`;return}t.forEach((e,n)=>{const s=document.createElement("tr"),r=new Date(e.date);[["🥇","🥈","🥉"][n]??`${n+1}`,e.name,`${e.cp}`,`${(e.dist/1e3).toFixed(2)} km`,`${r.getMonth()+1}/${r.getDate()}`].forEach((a,o)=>{const l=document.createElement("td");l.textContent=a,(o===2||o===3)&&(l.className="num"),s.appendChild(l)}),i.appendChild(s)})}function jf(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`}let oc=999;function Yf(){ks(lt.position,ye);const i=Pe.heightAt(ye.lat,ye.lon);oc=ye.height-i,K("hud-agl").textContent=Math.max(0,oc).toFixed(0),K("hud-alt").textContent=ye.height.toFixed(0),K("hud-speed").textContent=(lt.speed*3.6).toFixed(0);const t=lt.velocity.y,e=K("hud-vario");e.textContent=`${t>=0?"+":""}${t.toFixed(1)}`,e.className=`v ${t>.3?"up":t<-2?"down":""}`,K("hud-cp").textContent=`${pt.checkpoints.length}`,K("hud-cp-total").textContent=`/ ${Ls.length}`,K("hud-dist").textContent=(pt.distance/1e3).toFixed(2),K("hud-time").textContent=jf(pt.time),K("turbo-count").textContent=`×${Math.ceil(lt.jetFuel/Or-1e-6)}`,K("turbo-fill").style.width=`${lt.jetFuel/nc*100}%`,K("turbo-fill").style.backgroundSize=`${nc/Math.max(lt.jetFuel,.01)*100}% 100%`,K("turbo").classList.toggle("active",lt.jetting),K("stall").classList.toggle("hidden",!(lt.stalled&&Lt==="flying"));const n=pt.oniDist;K("oni").classList.toggle("hidden",!Number.isFinite(n)),Number.isFinite(n)&&(K("oni-dist").textContent=(n>=1e3?`${(n/1e3).toFixed(1)}km`:`${n.toFixed(0)}m`)+(pt.chasers?Ft("chasing",pt.chasers):""),K("oni").classList.toggle("danger",pt.chasers>0));const s=pt.oniChase;K("danger").style.opacity=Number.isFinite(s)&&Lt==="flying"?Math.max(0,Math.min(1,(220-s)/170)):0;const r=Bn.nearest(lt.position);if(r){const a=r.item.group.position,o=Math.atan2(a.x-lt.position.x,-(a.z-lt.position.z)),l=Xe.radToDeg(o-lt.yaw)-90,c=a.y-lt.position.y;K("target-arrow").style.transform=`rotate(${l}deg)`,K("target-name").textContent=`🎈 ${ja(r.item.spot)}`,K("target-info").textContent=`${r.distance>=1e3?`${(r.distance/1e3).toFixed(2)}km`:`${r.distance.toFixed(0)}m`}  ${c>=0?"↑":"↓"}${Math.abs(c).toFixed(0)}m`}}const Vi=13,Ts=document.createElement("canvas");let lc={x:0,y:0};async function o1(){const i=Pe.bounds(),t=Math.floor(Va(i.west,Vi)),e=Math.floor(Va(i.east,Vi)-1e-9),n=Math.floor(Wa(i.north,Vi)),s=Math.floor(Wa(i.south,Vi)-1e-9);lc={x:t*256,y:n*256},Ts.width=(e-t+1)*256,Ts.height=(s-n+1)*256;const r=Ts.getContext("2d");r.fillStyle="#e8e4d8",r.fillRect(0,0,Ts.width,Ts.height);const a=[];for(let o=t;o<=e;o++)for(let l=n;l<=s;l++)a.push(Jl(`https://cyberjapandata.gsi.go.jp/xyz/pale/${Vi}/${o}/${l}.png`,()=>1e9).then(c=>r.drawImage(c,(o-t)*256,(l-n)*256)).catch(()=>{}));await Promise.all(a)}function l1(){const i=K("minimap"),t=i.getContext("2d"),e=i.width/220;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i.width,i.height),t.setTransform(e,0,0,e,0,0);const n=220,s=(l,c)=>({x:Va(c,Vi)*256-lc.x,y:Wa(l,Vi)*256-lc.y});ks(lt.position,ye);const r=s(ye.lat,ye.lon);t.save(),t.translate(n/2,n/2),t.rotate(-lt.yaw);const a=on?1.15:.6,o=.6/a;t.scale(a,a),t.translate(-r.x,-r.y),t.drawImage(Ts,0,0);for(const l of Bn.items){const c=s(l.spot.lat,l.spot.lon);t.beginPath(),t.arc(c.x,c.y,(l.popped?5:9)*o,0,Math.PI*2),t.fillStyle=l.popped?"rgba(140,140,140,0.7)":"#ff4b5c",t.fill(),t.lineWidth=3*o,t.strokeStyle="#fff",t.stroke()}t.font=`${Math.round(28*o)}px sans-serif`,t.textAlign="center",t.textBaseline="middle";for(const l of kn.list){ks(l.pos,ye);const c=s(ye.lat,ye.lon);t.save(),t.translate(c.x,c.y),t.rotate(lt.yaw),l.state==="chase"&&(t.beginPath(),t.arc(0,0,20*o,0,Math.PI*2),t.fillStyle="rgba(255,40,40,0.55)",t.fill()),t.fillText("👹",0,0),t.restore()}t.restore(),t.save(),t.translate(n/2,n/2),t.beginPath(),t.moveTo(0,-14),t.lineTo(10,10),t.lineTo(0,5),t.lineTo(-10,10),t.closePath(),t.fillStyle="#2f80ed",t.fill(),t.strokeStyle="#fff",t.lineWidth=3,t.stroke(),t.restore(),t.save(),t.translate(n/2,n/2),t.rotate(-lt.yaw),t.fillStyle="#ff4b5c",t.font='900 20px "M PLUS Rounded 1c", sans-serif',t.textAlign="center",t.fillText("N",0,-n/2+26),t.restore()}function io(i){if(i===Ae.era)return;Ae.era=i,localStorage.setItem("kiyomizu-era",i),K("opt-era").value=i;const t=i==="showa";if(Bt.setEra(i),!We||!qi){document.body.classList.toggle("showa",t),Pe.setEra(i),We==null||We.setEra(i);return}const e=K("timeslip");e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),Bt.timeslip(),setTimeout(()=>{document.body.classList.toggle("showa",t),Pe.setEra(i),We.setEra(i),Vs.setVisible(t),qi.dispose(),qi=new Df(Se,Ls,Pe,We,{perSpot:kf,era:i,activeDist:Gf})},350),(Lt==="flying"||Lt==="ready")&&Hn(Ft(t?"toShowa":"toNow"),1.8)}function c1(i){ks(lt.position,ye);const t=Pe.heightAt(ye.lat,ye.lon);if(ye.height<=t+.8)return{title:Ft("landed")[0],reason:Ft("landed")[1]};if(pt.grace>0||!We)return null;const e=Math.max(1,Math.ceil(i.distanceTo(lt.position)/1.5));for(let s=1;s<=e;s++)if(rc.lerpVectors(i,lt.position,s/e),We.hit(rc))return lt.velocity.y<0&&Math.abs(lt.velocity.y)>Math.hypot(lt.velocity.x,lt.velocity.z)*.15?{title:Ft("roof")[0],reason:Ft("roof")[1]}:{title:Ft("crash")[0],reason:Ft("crash")[1]};const n=Pe.bounds();return ye.lat>n.north||ye.lat<n.south||ye.lon<n.west||ye.lon>n.east?{title:Ft("outside")[0],reason:Ft("outside")[1]}:null}function h1(i){if(pt.checkpoints.push(ja(i.spot)),lt.addJet(Or),Bt.pop(),Bt.turboGet(),qf(5,!1,.3),Bt.cheer(),pt.checkpoints.length>=Ls.length){Uc(...Ft("clear"),!0);return}const t=Bn.items.filter(n=>!n.popped).map(n=>n.base),e=kn.addForCheckpoint(pt.checkpoints.length,lt,t);e&&setTimeout(()=>Bt.oniLaugh(),900),Hn(Ft("checkpoint",ja(i.spot))+(e?Ft("moreOni",kn.list.length):""),2.6)}let il=0;const u1=K("danger");function Iu(i,t){const e=kn.update(i,lt,t);if(!t)return;e.spawned&&Hn(Ft("spawned",e.spawned.length),2.6),e.found.length&&(Bt.oniLaugh(),Hn(e.found.length>1?Ft("foundMany",e.found.length):Ft("found"),1.8)),pt.oniDist=e.nearest,pt.oniChase=e.nearestChase,pt.chasers=kn.list.filter(s=>s.state==="chase").length;const n=pt.chasers>0;n!==pt.alarm&&(pt.alarm=n,pt.alarmTimer=0,n?Bt.stopSong(.3):e.caught||Bt.playSong("flight")),n&&(pt.alarmTimer-=i,pt.alarmTimer<=0&&(Bt.alarm(),pt.alarmTimer=1.5)),il-=i,e.nearestChase<180&&il<=0&&(Bt.heartbeat(),il=.35+e.nearestChase/180*.8),e.caught&&Uc(...Ft("caught"))}let Du=performance.now(),sl=0,rl=0;const Ra=new L;let Na=0;const ki={cam:null},cc={};let hc=0;function Zn(i){const t=performance.now();cc[i]=(cc[i]??0)*.95+(t-hc)*.05,hc=t}function $f(i){requestAnimationFrame($f),Na++,hc=performance.now();const t=Math.min(.05,(i-Du)/1e3);Du=i;const e=i/1e3;let n=0;if(ki.cam)Be.position.copy(ki.cam.pos),Be.up.set(0,1,0),Be.lookAt(ki.cam.look);else if(Lt==="loading"||Lt==="title"){Pu+=t;const a=Pu*.06+2.2;Be.position.set(rn.x+Math.sin(a)*160,rn.y+45,rn.z+Math.cos(a)*160),Be.up.set(0,1,0),Be.lookAt(rn.x,rn.y-10,rn.z)}else if(Lt==="ready")nl(t);else if(Lt==="flying"){const a=ZM();Ra.copy(lt.position);const o=dr?dr.liftAt(lt.position):0,l=lt.jetFuel>0;lt.update(t,a,o),pt.time+=t,pt.grace-=t,pt.distance+=Math.hypot(lt.position.x-Ra.x,lt.position.z-Ra.z),pt.trailTimer-=t,pt.trailTimer<=0&&(pt.trailTimer=.5,pt.trail.push({pos:lt.position.clone(),yaw:lt.yaw}),pt.trail.length>10&&pt.trail.shift()),n=lt.velocity.y,lt.jetting&&!pt.wasJetting&&Bt.jetStart(),a.jet&&l&&lt.jetFuel<=0&&(Bt.jetEmpty(),Hn(Ft("noTurbo"),1.2)),pt.wasJetting=lt.jetting;const c=o>.8;c&&!pt.inThermal&&(Bt.thermalEnter(),Hn(Ft("thermal"),1.2)),pt.inThermal=c;for(const u of Bn.update(t,e,lt.position))h1(u);Iu(t,!0);const h=Lt==="flying"&&c1(Ra);h&&Uc(h.title,h.reason),nl(t)}else Lt==="over"&&nl(t);Zn("sim"),Lt!=="flying"&&Bn&&Bn.update(t,e,new L(1e9,0,0)),Lt!=="flying"&&Iu(t,!1),u1.classList.toggle("alarm",Lt==="flying"&&!!(pt!=null&&pt.alarm)),n1(),Zn("oni"),dr&&dr.update(e),Ic.update(t),Zn("fx");const s=ki.cam?ki.cam.pos:Lt==="title"||Lt==="loading"?rn:lt.position;if(qi&&qi.update(t,e,s)&&Lt==="flying"&&Bt.cheer(),Vs&&Vs.update(t,e),Zn("people"),Bt.update(t,{speed:lt.speed,jetting:lt.jetting,active:Lt==="flying",vario:n,agl:oc,stalled:lt.stalled}),rl-=t,rl<=0&&(rl=.5,Pe.update(s)),Zn("terrain"),We&&We.update(s),Zn("buildings"),Cr&&KM(s),Bn&&(Lt==="flying"||Lt==="ready")&&(sl-=t,sl<=0&&(sl=.1,Yf(),l1())),Zn("hud"),sc.position.copy(Be.position),ge.shadowMap.needsUpdate=Cr&&Na%2===0,ge.setScissorTest(!1),ge.setViewport(0,0,innerWidth,innerHeight),ge.clear(),Ru(Pr!=="pilot"||Lt==="title"),ge.render(Se,Be),Zn("render"),(Lt==="ready"||Lt==="flying"||Lt==="over")&&_i&&!ki.cam){Na%(on?3:2)===1&&(Ru(!0),sc.position.copy(Xi.position),ge.shadowMap.needsUpdate=!1,ge.setRenderTarget(Pc),ge.clear(),ge.render(Se,Xi),ge.setRenderTarget(null));const{x:a,y:o,w:l,h:c}=_i;ge.setViewport(a,innerHeight-o-c,l,c),ge.render(Bf,$M)}Zn("wipe")}async function f1(){requestAnimationFrame($f),We=new Iv(Se,"./buildings/",{near:Cr?1100:on?400:700,far:on?1900:3800,era:Ae.era,lite:on}),await We.init(),await Pe.init(t=>{K("load-fill").style.width=`${(t*85).toFixed(0)}%`}),RM(Se,(t,e)=>Pe.heightAtWorld(t,e));const i=oM.map(t=>{const e=Te(t.lat,t.lon,0);return{...t,x:e.x,z:e.z,y:Pe.heightAtWorld(e.x,e.z)}});We.setLandmarks(i.filter(t=>!t.standalone),(t,e)=>Pe.heightAtWorld(t,e)),We.addStandalone(i.filter(t=>t.standalone)),XM(Se,(t,e)=>Pe.heightAtWorld(t,e)),Bn=new qv(Se,Ls,Pe,{lite:on}),dr=new jv(Se,Yv,Pe),qi=new Df(Se,Ls,Pe,We,{perSpot:kf,era:Ae.era,activeDist:Gf}),Vs=new bM(Se,(t,e)=>Pe.heightAtWorld(t,e)),Vs.setVisible(Ae.era==="showa"),kn.setWorld(Ls.map(t=>{const e=Te(t.lat,t.lon,0);return e.y=Pe.heightAtWorld(e.x,e.z),e}),(t,e)=>Pe.heightAtWorld(t,e)),pt=Wf(),await o1(),K("load-text").textContent=Ft("loadingTown");for(let t=0;t<300&&We.readyAround(rn,1500)<1;t++)K("load-fill").style.width=`${(85+We.readyAround(rn,1500)*15).toFixed(0)}%`,await new Promise(e=>setTimeout(e,100));await d1(),K("loading").classList.add("hidden"),K("title-buttons").classList.remove("hidden"),Lt="title",Bt.ctx&&Bt.playSong("title")}async function d1(){const i=kn.warmupObjects();i.position.copy(rn),Se.add(i);const t=()=>{const e=[],n=[],s=[];return Se.traverse(r=>{r.visible||(e.push(r),r.visible=!0),r.frustumCulled&&(n.push(r),r.frustumCulled=!1),r.isInstancedMesh&&r.count===0&&(s.push(r),r.count=1)}),()=>{for(const r of s)r.count=0;for(const r of n)r.frustumCulled=!0;for(const r of e)r.visible=!1}};try{let e=t();const n=ge.compileAsync(Se,Be);e(),await n,e=t(),ge.render(Se,Be),e()}catch(e){console.warn("warmup",e)}Se.remove(i)}f1().catch(i=>{console.error(i),K("load-text").textContent=Ft("loadFailed",i.message)});window.__kiyomizu={debug:ki,geoToWorld:Te,glider:lt,ads:Pn,terrain:Pe,camera:Be,startGame:Dc,jump:Ya,get state(){return Lt},get flight(){return pt},get frames(){return Na},buildings:()=>We,balloons:()=>Bn,fireworks:Ic,sound:Bt,oni:kn,Vector3:L,prof:cc,renderer:ge,people:()=>qi,showa:()=>Vs,setEra:io};
