"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1503],{61503:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(46377),s=r(99834),a=r(66885),i=r(32598),o=r(99546);const c=["seq_name","source","featureType","start","end","score","strand","frame","attributes"];function l(e){return null===e?null:String(e).replace(/%([0-9A-Fa-f]{2})/g,((e,t)=>String.fromCharCode(parseInt(t,16))))}function u(e,t){return String(t).replace(e,(e=>{let t=e.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t=`0${t}`),`%${t}`}))}function f(e){return u(/[\n;\r\t=%&,\x00-\x1f\x7f-\xff]/g,e)}const h=["-",".","+"];function d(e,t){const r=null===e.attributes||void 0===e.attributes?".":function(e){const t=[];return Object.keys(e).forEach((r=>{const n=e[r];let s;s=n.hasOwnProperty("toString")?f(n.toString()):Array.isArray(n.values)?n.values.map(f).join(","):Array.isArray(n)?n.map(f).join(","):f(n),t.push(`${f(r)} ${s}`)})),t.length?t.join("; ").concat(";"):"."}(e.attributes),n=[];for(let t=0;t<8;t+=1){const r=e[c[t]];n[t]=6===t?null==r?".":h[r+1]||r:null==r?".":u(/[\n\r\t%\x00-\x1f\x7f-\xff]/g,String(r))}n[8]=r;const s=`${n.join("\t")}\n`;return t[s]?"":(t[s]=!0,s)}function p(e,t){if(Array.isArray(e))return e.map((e=>p(e,t))).join("");const r=[d(e,t)];return["child_features","derived_features"].forEach((n=>{e[n]&&r.push(...e[n].map((e=>p(e,t))))})),r.join("")}function m(e){return p(e,{})}const _={Parent:"child_features",Derives_from:"derived_features"};class b{constructor(e){const t=()=>{};Object.assign(this,{featureCallback:e.featureCallback||t,endCallback:e.endCallback||t,commentCallback:e.commentCallback||t,errorCallback:e.errorCallback||t,directiveCallback:e.directiveCallback||t,sequenceCallback:e.sequenceCallback||t,bufferSize:void 0===e.bufferSize?1e3:e.bufferSize,_underConstructionTopLevel:[],_underConstructionById:{},_completedReferences:{},_underConstructionOrphans:{},eof:!1,lineNumber:0})}addLine(e){if(this.eof)return;if(this.lineNumber+=1,/^\s*[^#\s>]/.test(e))return void this._bufferLine(e);const t=/^\s*(#+)(.*)/.exec(e);if(t){let[,r,n]=t;if(3===r.length)this._emitAllUnderConstructionFeatures();else if(2===r.length){const t=function(e){const t=/^\s*##\s*(\S+)\s*(.*)/.exec(e);if(!t)return null;const r=t[1];let n=t[2];const s={directive:r};if(n.length&&(n=n.replace(/\r?\n$/,""),s.value=n),"sequence-region"===r){const[e,t,r]=n.split(/\s+/,3);s.seq_id=e,s.start=t&&t.replace(/\D/g,""),s.end=r&&r.replace(/\D/g,"")}else if("genome-build"===r){const[e,t]=n.split(/\s+/,2);s.source=e,s.buildname=t}return s}(e);this._emitItem(t)}else n=n.replace(/\s*/,""),this._emitItem({comment:n})}else if(!/^\s*$/.test(e)){const t=e.replace(/\r?\n?$/g,"");throw new Error(`GTF parse error.  Cannot parse '${t}'.`)}}_emitItem(e){e[0]?this.featureCallback(e):e.directive?this.directiveCallback(e):e.comment&&this.commentCallback(e)}finish(){this._emitAllUnderConstructionFeatures(),this.endCallback()}_enforceBufferSizeLimit(e=0){const t=e=>{var r,n,s;(null===(s=null===(n=null===(r=null==e?void 0:e[0])||void 0===r?void 0:r.attributes)||void 0===n?void 0:n.ID)||void 0===s?void 0:s[0])&&(e[0].attributes.ID.forEach((e=>{delete this._underConstructionById[e],delete this._completedReferences[e]})),e.forEach((e=>{e.child_features&&e.child_features.forEach((e=>{t(e)})),e.derived_features&&e.derived_features.forEach((e=>{t(e)}))})))};for(;this._underConstructionTopLevel.length+e>this.bufferSize;){const e=this._underConstructionTopLevel.shift();this._emitItem(e),t(e)}}_emitAllUnderConstructionFeatures(){if(this._underConstructionTopLevel.forEach(this._emitItem.bind(this)),this._underConstructionTopLevel=[],this._underConstructionById={},this._completedReferences={},Object.values(this._underConstructionOrphans).filter((e=>Object.keys(e).length)).length)throw new Error(`some features reference other features that do not exist in the file (or in the same '###' scope). ${JSON.stringify(this._underConstructionOrphans)}`)}_bufferLine(e){const t=function(e){const t=e.split("\t").map((e=>"."===e?null:e));t[0]=l(t[0]),t[1]=l(t[1]),t[2]=l(t[2]),t[8]=function(e){if(!e||!e.length||"."===e)return{};const t={};return e.replace(/\r?\n$/,"").slice(0,-1).split(";").forEach((e=>{if(!e)return;const r=e.trim().split(" ");if(!r[1]||!r[1].length)return;r[0]=r[0].trim();let n=t[r[0].trim()];n||(n=[],t[r[0]]=n),n.push(...r[1].split(",").map((e=>e.trim())).map(l))})),t}(t[8]);const r={};for(let e=0;e<c.length;e+=1)r[c[e]]="."===t[e]?null:t[e];return null!==r.start&&(r.start=parseInt(r.start,10)),null!==r.end&&(r.end=parseInt(r.end,10)),null!==r.score&&(r.score=parseFloat(r.score,10)),null!=r.strand&&(r.strand=r.strand),r}(e);t.child_features=[],t.derived_features=[];const r=this.lineNumber,n="transcript"===t.featureType,s=n?t.attributes.transcript_id||[]:[r],a=n?[]:t.attributes.transcript_id||[],i=t.attributes.Derives_from||[];if(!s.length&&!a.length&&!i.length)return void this._emitItem([t]);let o;a.forEach((e=>{this._underConstructionById[e]||this._bufferLine(function(e){const t=JSON.parse(JSON.stringify(e));return t.featureType="transcript",m(t)}(t))})),s.forEach((e=>{const r=this._underConstructionById[e];r?(r.push(t),o=r):(o=[t],this._enforceBufferSizeLimit(1),a.length||i.length||this._underConstructionTopLevel.push(o),this._underConstructionById[e]=o,this._resolveReferencesTo(o,e))})),this._resolveReferencesFrom(o||[t],{Parent:a,Derives_from:i},s)}_resolveReferencesTo(e,t){const r=this._underConstructionOrphans[t];r&&Object.keys(r).forEach((t=>{const n=_[t]||t.toLowerCase();e.forEach((e=>{e[n].push(...r[t]),delete r[t]}))}))}_parseError(e){this.eof=!0,this.errorCallback(`${this.lineNumber}: ${e}`)}_resolveReferencesFrom(e,t,r){Object.entries(t).forEach((([t,n])=>{let s;n.forEach((n=>{const a=this._underConstructionById[n];var i,o;a?(o=e,(i=a)[0].start=Math.min(i[0].start,o[0].start),i[0].end=Math.max(i[0].end,o[0].end),s||(s=_[t]||t.toLowerCase()),r.filter((e=>function(e,t,r){let n=e[t];n||(n={},e[t]=n);const s=n[r]||!1;return n[r]=!0,s}(this._completedReferences,e,`${t},${n}`))).length||a.forEach((t=>{t[s].push(e)}))):(this._underConstructionOrphans[n]||(this._underConstructionOrphans[n]={}),this._underConstructionOrphans[n][t]||(this._underConstructionOrphans[n][t]=[]),this._underConstructionOrphans[n][t].push(e))}))}))}}function v(e){const t={...e};t.start-=1,t.strand={"+":1,"-":-1,".":0,"?":void 0}[e.strand],t.phase=Number(e.frame),t.refName=e.seq_name,null===e.score&&(t.score=void 0),null===e.frame&&(t.score=void 0);const r=new Set(["start","end","seq_name","score","featureType","source","frame","strand"]);for(const n of Object.keys(e.attributes)){let s=n.toLowerCase();if(r.has(s)&&(s+="2"),e.attributes[n]){let r=e.attributes[n];Array.isArray(r)&&1===r.length&&(r=r[0].replaceAll(/^"|"$/g,"")),t[s]=r}}return t.refName=t.seq_name,t.type=t.featureType,e.child_features&&e.child_features.length>0&&(t.subfeatures=e.child_features.flatMap((e=>e.map((e=>v(e)))))),t.child_features=void 0,t.data=void 0,t.derived_features=void 0,t._linehash=void 0,t.attributes=void 0,t.seq_name=void 0,t.featureType=void 0,t.frame=void 0,t.transcript_id&&(t.name=t.transcript_id),t}class g extends n.BaseFeatureDataAdapter{calculatedIntervalTreeMap={};async loadDataP(e){const{statusCallback:t=()=>{}}=e||{},r=(0,s.openLocation)(this.getConf("gtfLocation"),this.pluginManager),n=await(0,o.fetchAndMaybeUnzip)(r,e),a=[],c={};let l=0,u=0;const f=new TextDecoder("utf8");for(;l<n.length;){const e=n.indexOf("\n",l),r=-1===e?n.subarray(l):n.subarray(l,e),s=f.decode(r).trim();if(s)if(s.startsWith("#"))a.push(s);else{if(s.startsWith(">"))break;{const e=s.indexOf("\t"),t=s.slice(0,e);c[t]||(c[t]=""),c[t]+=`${s}\n`}}u++%1e4==0&&t(`Loading ${Math.floor(l/1e6).toLocaleString("en-US")}/${Math.floor(n.length/1e6).toLocaleString("en-US")} MB`),l=e+1}const h=Object.fromEntries(Object.entries(c).map((([e,t])=>[e,r=>{if(!this.calculatedIntervalTreeMap[e]){r?.("Parsing GTF data");const n=new i.Ay;(function(e){if(!e)return[];const t=[],r=new b({featureCallback:e=>t.push(e),errorCallback:e=>{throw e}});for(const t of e.split(/\r?\n/))r.addLine(t);return r.finish(),t})(t).flat().map(((t,r)=>new o.SimpleFeature({data:v(t),id:`${this.id}-${e}-${r}`}))).forEach((e=>n.insert([e.get("start"),e.get("end")],e))),this.calculatedIntervalTreeMap[e]=n}return this.calculatedIntervalTreeMap[e]}])));return{header:a.join("\n"),intervalTreeMap:h}}async loadData(e={}){return this.gtfFeatures||(this.gtfFeatures=this.loadDataP(e).catch((e=>{throw this.gtfFeatures=void 0,e}))),this.gtfFeatures}async getRefNames(e={}){const{intervalTreeMap:t}=await this.loadData(e);return Object.keys(t)}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}getFeatures(e,t={}){return(0,a.ObservableCreate)((async r=>{try{const{start:n,end:s,refName:a}=e,{intervalTreeMap:i}=await this.loadData(t);i[a]?.(t.statusCallback).search([n,s]).forEach((e=>{r.next(e)})),r.complete()}catch(e){r.error(e)}}),t.signal)}freeResources(){}}}}]);
//# sourceMappingURL=1503.73dcc295.chunk.js.map