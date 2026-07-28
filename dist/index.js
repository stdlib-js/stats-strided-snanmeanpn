"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var p=f(function(A,c){
var v=require('@stdlib/number-float64-base-to-float32/dist');function _(e,r,a,q){var t,n,i,o,s,u;if(e<=0)return NaN;if(e===1||a===0)return r[q];for(t=q,i=0,s=0,u=0;u<e;u++)n=r[t],n===n&&(i=v(i+n),s+=1),t+=a;if(s===0)return NaN;for(i=v(i/s),t=q,o=0,u=0;u<e;u++)n=r[t],n===n&&(o=v(o+v(n-i))),t+=a;return v(i+v(o/s))}c.exports=_
});var l=f(function(B,y){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=p();function O(e,r,a){return F(e,r,a,E(e,a))}y.exports=O
});var x=f(function(C,j){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),b=p();T(d,"ndarray",b);j.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),m,R=h(g(__dirname,"./native.js"));k(R)?m=w:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
