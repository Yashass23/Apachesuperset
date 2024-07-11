"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7253],{50523:(t,e,o)=>{o.d(e,{Z:()=>r});const r=()=>{var t;return null==(t=window.getSelection())?void 0:t.toString()}},97253:(t,e,o)=>{o.r(e),o.d(e,{default:()=>et});var r=o(67294),s=o(1413),a=o(43114),l=o(27029),n=function(t,e){return r.createElement(l.Z,(0,s.Z)((0,s.Z)({},t),{},{ref:e,icon:a.Z}))};n.displayName="PlusSquareOutlined";const i=r.forwardRef(n);var c=o(70478),u=function(t,e){return r.createElement(l.Z,(0,s.Z)((0,s.Z)({},t),{},{ref:e,icon:c.Z}))};u.displayName="MinusSquareOutlined";const h=r.forwardRef(u);var p=o(51995),d=o(61988),g=o(37208),m=o(67190),b=o(10581),f=o(72813),v=o(50523),y=o(93185),w=o(45697),k=o.n(w);const C=function(t){const e={digitsAfterDecimal:2,scaler:1,thousandsSep:",",decimalSep:".",prefix:"",suffix:"",...t};return function(t){if(Number.isNaN(t)||!Number.isFinite(t))return"";const o=function(t,e,o){const r=String(t).split(".");let s=r[0];const a=r.length>1?o+r[1]:"",l=/(\d+)(\d{3})/;for(;l.test(s);)s=s.replace(l,`$1${e}$2`);return s+a}((e.scaler*t).toFixed(e.digitsAfterDecimal),e.thousandsSep,e.decimalSep);return`${e.prefix}${o}${e.suffix}`}},T=/(\d+)|(\D+)/g,S=/\d/,O=/^0/,N=(t,e)=>{if(null!==e&&null===t)return-1;if(null!==t&&null===e)return 1;if("number"==typeof t&&Number.isNaN(t))return-1;if("number"==typeof e&&Number.isNaN(e))return 1;const o=Number(t),r=Number(e);if(o<r)return-1;if(o>r)return 1;if("number"==typeof t&&"number"!=typeof e)return-1;if("number"==typeof e&&"number"!=typeof t)return 1;if("number"==typeof t&&"number"==typeof e)return 0;if(Number.isNaN(r)&&!Number.isNaN(o))return-1;if(Number.isNaN(o)&&!Number.isNaN(r))return 1;let s=String(t),a=String(e);if(s===a)return 0;if(!S.test(s)||!S.test(a))return s>a?1:-1;for(s=s.match(T),a=a.match(T);s.length&&a.length;){const t=s.shift(),e=a.shift();if(t!==e)return S.test(t)&&S.test(e)?t.replace(O,".0")-e.replace(O,".0"):t>e?1:-1}return s.length-a.length},x=function(t){const e={},o={};return t.forEach(((t,r)=>{e[t]=r,"string"==typeof t&&(o[t.toLowerCase()]=r)})),function(t,r){return t in e&&r in e?e[t]-e[r]:t in e?-1:r in e?1:t in o&&r in o?o[t]-o[r]:t in o?-1:r in o?1:N(t,r)}},A=function(t,e){if(t)if("function"==typeof t){const o=t(e);if("function"==typeof o)return o}else if(e in t)return t[e];return N},M=C(),R=C({digitsAfterDecimal:0}),F=C({digitsAfterDecimal:1,scaler:100,suffix:"%"}),H=t=>e=>"string"==typeof e?e:t(e),_={count:t=>(void 0===t&&(t=R),()=>function(){return{count:0,push(){this.count+=1},value(){return this.count},format:t}}),uniques:(t,e)=>(void 0===e&&(e=R),function(o){let[r]=o;return function(){return{uniq:[],push(t){Array.from(this.uniq).includes(t[r])||this.uniq.push(t[r])},value(){return t(this.uniq)},format:H(e),numInputs:void 0!==r?0:1}}}),sum:t=>(void 0===t&&(t=M),function(e){let[o]=e;return function(){return{sum:0,push(t){Number.isNaN(Number(t[o]))?this.sum=t[o]:this.sum+=parseFloat(t[o])},value(){return this.sum},format:H(t),numInputs:void 0!==o?0:1}}}),extremes:(t,e)=>(void 0===e&&(e=M),function(o){let[r]=o;return function(o){return{val:null,sorter:A(void 0!==o?o.sorters:null,r),push(e){const o=e[r];if(["min","max"].includes(t)){const e=Number(o);Number.isNaN(e)?this.val=!this.val||"min"===t&&o<this.val||"max"===t&&o>this.val?o:this.val:this.val=Math[t](e,null!==this.val?this.val:e)}else("first"===t&&this.sorter(o,null!==this.val?this.val:o)<=0||"last"===t&&this.sorter(o,null!==this.val?this.val:o)>=0)&&(this.val=o)},value(){return this.val},format:t=>"number"==typeof t?e(t):t,numInputs:void 0!==r?0:1}}}),quantile:(t,e)=>(void 0===e&&(e=M),function(o){let[r]=o;return function(){return{vals:[],strMap:{},push(t){const e=t[r],o=Number(e);Number.isNaN(o)?this.strMap[e]=(this.strMap[e]||0)+1:this.vals.push(o)},value(){if(0===this.vals.length&&0===Object.keys(this.strMap).length)return null;if(Object.keys(this.strMap).length){const t=Object.values(this.strMap).sort(((t,e)=>t-e)),e=Math.floor(t.length/2),o=Object.keys(this.strMap);return o.length%2!=0?o[e]:(o[e-1]+o[e])/2}this.vals.sort(((t,e)=>t-e));const e=(this.vals.length-1)*t;return(this.vals[Math.floor(e)]+this.vals[Math.ceil(e)])/2},format:H(e),numInputs:void 0!==r?0:1}}}),runningStat:(t,e,o)=>(void 0===t&&(t="mean"),void 0===e&&(e=1),void 0===o&&(o=M),function(r){let[s]=r;return function(){return{n:0,m:0,s:0,strValue:null,push(t){const e=Number(t[s]);if(Number.isNaN(e))return void(this.strValue="string"==typeof t[s]?t[s]:this.strValue);this.n+=1,1===this.n&&(this.m=e);const o=this.m+(e-this.m)/this.n;this.s+=(e-this.m)*(e-o),this.m=o},value(){if(this.strValue)return this.strValue;if("mean"===t)return 0===this.n?NaN:this.m;if(this.n<=e)return 0;switch(t){case"var":return this.s/(this.n-e);case"stdev":return Math.sqrt(this.s/(this.n-e));default:throw new Error("unknown mode for runningStat")}},format:H(o),numInputs:void 0!==s?0:1}}}),sumOverSum:t=>(void 0===t&&(t=M),function(e){let[o,r]=e;return function(){return{sumNum:0,sumDenom:0,push(t){Number.isNaN(Number(t[o]))||(this.sumNum+=parseFloat(t[o])),Number.isNaN(Number(t[r]))||(this.sumDenom+=parseFloat(t[r]))},value(){return this.sumNum/this.sumDenom},format:t,numInputs:void 0!==o&&void 0!==r?0:2}}}),fractionOf:(t,e,o)=>(void 0===e&&(e="total"),void 0===o&&(o=F),function(){for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return function(r,a,l){return{selector:{total:[[],[]],row:[a,[]],col:[[],l]}[e],inner:t(...Array.from(s||[]))(r,a,l),push(t){this.inner.push(t)},format:H(o),value(){const t=r.getAggregator(...Array.from(this.selector||[])).inner.value();return"string"==typeof t?t:this.inner.value()/t},numInputs:t(...Array.from(s||[]))().numInputs}}})},K={countUnique:t=>_.uniques((t=>t.length),t),listUnique:(t,e)=>_.uniques((e=>e.join(t)),e||(t=>t)),max:t=>_.extremes("max",t),min:t=>_.extremes("min",t),first:t=>_.extremes("first",t),last:t=>_.extremes("last",t),median:t=>_.quantile(.5,t),average:t=>_.runningStat("mean",1,t),var:(t,e)=>_.runningStat("var",t,e),stdev:(t,e)=>_.runningStat("stdev",t,e)},$={..._,...K},Z={Count:(E=$).count(R),"Count Unique Values":E.countUnique(R),"List Unique Values":E.listUnique(", "),Sum:E.sum(M),"Integer Sum":E.sum(R),Average:E.average(M),Median:E.median(M),"Sample Variance":E.var(1,M),"Sample Standard Deviation":E.stdev(1,M),Minimum:E.min(M),Maximum:E.max(M),First:E.first(M),Last:E.last(M),"Sum over Sum":E.sumOverSum(M),"Sum as Fraction of Total":E.fractionOf(E.sum(),"total",F),"Sum as Fraction of Rows":E.fractionOf(E.sum(),"row",F),"Sum as Fraction of Columns":E.fractionOf(E.sum(),"col",F),"Count as Fraction of Total":E.fractionOf(E.count(),"total",F),"Count as Fraction of Rows":E.fractionOf(E.count(),"row",F),"Count as Fraction of Columns":E.fractionOf(E.count(),"col",F)};var E;const D=t=>t.join(String.fromCharCode(0));class L{constructor(t,e){void 0===t&&(t={}),void 0===e&&(e={}),this.props={...L.defaultProps,...t},this.processRecord=this.processRecord.bind(this),k().checkPropTypes(L.propTypes,this.props,"prop","PivotData"),this.aggregator=this.props.aggregatorsFactory(this.props.defaultFormatter)[this.props.aggregatorName](this.props.vals),this.formattedAggregators=this.props.customFormatters&&Object.entries(this.props.customFormatters).reduce(((t,e)=>{let[o,r]=e;return t[o]={},Object.entries(r).forEach((e=>{let[r,s]=e;t[o][r]=this.props.aggregatorsFactory(s)[this.props.aggregatorName](this.props.vals)})),t}),{}),this.tree={},this.rowKeys=[],this.colKeys=[],this.rowTotals={},this.colTotals={},this.allTotal=this.aggregator(this,[],[]),this.subtotals=e,this.sorted=!1,L.forEachRecord(this.props.data,this.processRecord)}getFormattedAggregator(t,e){if(!this.formattedAggregators)return this.aggregator;const[o,r]=Object.entries(t).find((t=>{let[e,o]=t;return this.formattedAggregators[e]&&this.formattedAggregators[e][o]}))||[];return!o||!r||e&&!e.includes(r)?this.aggregator:this.formattedAggregators[o][r]||this.aggregator}arrSort(t,e,o){void 0===o&&(o=!1);const r=t.map((t=>A(this.props.sorters,t)));return function(t,s){const a=Math.min(t.length,s.length);for(let e=0;e<a;e+=1){const a=r[e],l=o?a(s[e],t[e]):a(t[e],s[e]);if(0!==l)return l}return e?t.length-s.length:s.length-t.length}}sortKeys(){if(!this.sorted){this.sorted=!0;const t=(t,e)=>this.getAggregator(t,e).value();switch(this.props.rowOrder){case"key_z_to_a":this.rowKeys.sort(this.arrSort(this.props.rows,this.subtotals.rowPartialOnTop,!0));break;case"value_a_to_z":this.rowKeys.sort(((e,o)=>N(t(e,[]),t(o,[]))));break;case"value_z_to_a":this.rowKeys.sort(((e,o)=>-N(t(e,[]),t(o,[]))));break;default:this.rowKeys.sort(this.arrSort(this.props.rows,this.subtotals.rowPartialOnTop))}switch(this.props.colOrder){case"key_z_to_a":this.colKeys.sort(this.arrSort(this.props.cols,this.subtotals.colPartialOnTop,!0));break;case"value_a_to_z":this.colKeys.sort(((e,o)=>N(t([],e),t([],o))));break;case"value_z_to_a":this.colKeys.sort(((e,o)=>-N(t([],e),t([],o))));break;default:this.colKeys.sort(this.arrSort(this.props.cols,this.subtotals.colPartialOnTop))}}}getColKeys(){return this.sortKeys(),this.colKeys}getRowKeys(){return this.sortKeys(),this.rowKeys}processRecord(t){const e=[],o=[];this.props.cols.forEach((o=>{e.push(o in t?t[o]:"null")})),this.props.rows.forEach((e=>{o.push(e in t?t[e]:"null")})),this.allTotal.push(t);const r=this.subtotals.rowEnabled?1:Math.max(1,o.length),s=this.subtotals.colEnabled?1:Math.max(1,e.length);let a,l;for(let e=r;e<=o.length;e+=1){a=e<o.length;const r=o.slice(0,e),s=D(r);this.rowTotals[s]||(this.rowKeys.push(r),this.rowTotals[s]=this.getFormattedAggregator(t,o)(this,r,[])),this.rowTotals[s].push(t),this.rowTotals[s].isSubtotal=a}for(let o=s;o<=e.length;o+=1){l=o<e.length;const r=e.slice(0,o),s=D(r);this.colTotals[s]||(this.colKeys.push(r),this.colTotals[s]=this.getFormattedAggregator(t,e)(this,[],r)),this.colTotals[s].push(t),this.colTotals[s].isSubtotal=l}for(let n=r;n<=o.length;n+=1){a=n<o.length;const r=o.slice(0,n),i=D(r);this.tree[i]||(this.tree[i]={});for(let o=s;o<=e.length;o+=1){l=o<e.length;const s=e.slice(0,o),n=D(s);this.tree[i][n]||(this.tree[i][n]=this.getFormattedAggregator(t)(this,r,s)),this.tree[i][n].push(t),this.tree[i][n].isRowSubtotal=a,this.tree[i][n].isColSubtotal=l,this.tree[i][n].isSubtotal=a||l}}}getAggregator(t,e){let o;const r=D(t),s=D(e);return o=0===t.length&&0===e.length?this.allTotal:0===t.length?this.colTotals[s]:0===e.length?this.rowTotals[r]:this.tree[r][s],o||{value:()=>null,format:()=>""}}}L.forEachRecord=function(t,e){if(Array.isArray(t))return t.map((t=>e(t)));throw new Error((0,d.t)("Unknown input format"))},L.defaultProps={aggregators:Z,cols:[],rows:[],vals:[],aggregatorName:"Count",sorters:{},rowOrder:"key_a_to_z",colOrder:"key_a_to_z"},L.propTypes={data:k().oneOfType([k().array,k().object,k().func]).isRequired,aggregatorName:k().string,cols:k().arrayOf(k().string),rows:k().arrayOf(k().string),vals:k().arrayOf(k().string),valueFilter:k().objectOf(k().objectOf(k().bool)),sorters:k().oneOfType([k().func,k().objectOf(k().func)]),derivedAttributes:k().objectOf(k().func),rowOrder:k().oneOf(["key_a_to_z","key_z_to_a","value_a_to_z","value_z_to_a"]),colOrder:k().oneOf(["key_a_to_z","key_z_to_a","value_a_to_z","value_z_to_a"])};var j=o(11965);const P=p.iK.div`
  ${t=>{let{theme:e,isDashboardEditMode:o}=t;return j.iv`
    table.pvtTable {
      position: ${o?"inherit":"relative"};
      width: calc(100% - ${e.gridUnit}px);
      font-size: ${e.typography.sizes.s}px;
      text-align: left;
      margin: ${e.gridUnit}px;
      border-collapse: separate;
      font-family: ${e.typography.families.sansSerif};
      line-height: 1.4;
    }

    table thead {
      position: ${o?"inherit":"sticky"};
      top: 0;
    }

    table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    table.pvtTable thead tr th,
    table.pvtTable tbody tr th {
      background-color: ${e.colors.grayscale.light5};
      border-top: 1px solid ${e.colors.grayscale.light2};
      border-left: 1px solid ${e.colors.grayscale.light2};
      font-size: ${e.typography.sizes.s}px;
      padding: ${e.gridUnit}px;
      font-weight: ${e.typography.weights.normal};
    }

    table.pvtTable tbody tr.pvtRowTotals {
      position: ${o?"inherit":"sticky"};
      bottom: 0;
    }

    table.pvtTable thead tr:last-of-type th,
    table.pvtTable thead tr:first-of-type th.pvtTotalLabel,
    table.pvtTable thead tr:nth-last-of-type(2) th.pvtColLabel,
    table.pvtTable thead th.pvtSubtotalLabel,
    table.pvtTable tbody tr:last-of-type th,
    table.pvtTable tbody tr:last-of-type td {
      border-bottom: 1px solid ${e.colors.grayscale.light2};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      ~ th.pvtColLabel,
    table.pvtTable tbody tr:first-of-type th,
    table.pvtTable tbody tr:first-of-type td {
      border-top: none;
    }

    table.pvtTable tbody tr td:last-of-type,
    table.pvtTable thead tr th:last-of-type:not(.pvtSubtotalLabel) {
      border-right: 1px solid ${e.colors.grayscale.light2};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      + .pvtTotalLabel {
      border-right: none;
    }

    table.pvtTable tr th.active {
      background-color: ${e.colors.primary.light3};
    }

    table.pvtTable .pvtTotalLabel {
      text-align: right;
      font-weight: ${e.typography.weights.bold};
    }

    table.pvtTable .pvtSubtotalLabel {
      font-weight: ${e.typography.weights.bold};
    }

    table.pvtTable tbody tr td {
      color: ${e.colors.primary.dark2};
      padding: ${e.gridUnit}px;
      background-color: ${e.colors.grayscale.light5};
      border-top: 1px solid ${e.colors.grayscale.light2};
      border-left: 1px solid ${e.colors.grayscale.light2};
      vertical-align: top;
      text-align: right;
    }

    table.pvtTable tbody tr th.pvtRowLabel {
      vertical-align: baseline;
    }

    .pvtTotal,
    .pvtGrandTotal {
      font-weight: ${e.typography.weights.bold};
    }

    table.pvtTable tbody tr td.pvtRowTotal {
      vertical-align: middle;
    }

    .toggle-wrapper {
      white-space: nowrap;
    }

    .toggle-wrapper > .toggle-val {
      white-space: normal;
    }

    .toggle {
      padding-right: ${e.gridUnit}px;
      cursor: pointer;
    }

    .hoverable:hover {
      background-color: ${e.colors.primary.light4};
      cursor: pointer;
    }
  `}}
`,q=t=>"string"==typeof t?"metric"===t?(0,d.t)("metric"):t:"number"==typeof t?t:String(t);function V(t,e,o,r,s){const a=s[r]||r;return t?(0,j.tZ)("span",{className:"toggle-wrapper"},(0,j.tZ)("span",{role:"button",tabIndex:"0",className:"toggle",onClick:o},e),(0,j.tZ)("span",{className:"toggle-val"},q(a))):q(a)}class z extends r.Component{constructor(t){super(t),this.state={collapsedRows:{},collapsedCols:{}},this.clickHeaderHandler=this.clickHeaderHandler.bind(this),this.clickHandler=this.clickHandler.bind(this)}getBasePivotSettings(){const{props:t}=this,e=t.cols,o=t.rows,r={rowTotals:!0,colTotals:!0,...t.tableOptions},s=r.rowTotals||0===e.length,a=r.colTotals||0===o.length,l=t.namesMapping||{},n={arrowCollapsed:"▲",arrowExpanded:"▼",...t.subtotalOptions},i={displayOnTop:!1,enabled:r.colSubTotals,hideOnExpand:!1,...n.colSubtotalDisplay},c={displayOnTop:!1,enabled:r.rowSubTotals,hideOnExpand:!1,...n.rowSubtotalDisplay},u=new L(t,{rowEnabled:c.enabled,colEnabled:i.enabled,rowPartialOnTop:c.displayOnTop,colPartialOnTop:i.displayOnTop}),h=u.getRowKeys(),p=u.getColKeys(),d={},g={},m={};let b=null;return r.clickCallback&&(h.forEach((t=>{const e=D(t);e in d||(d[e]={}),p.forEach((o=>{d[e][D(o)]=this.clickHandler(u,t,o)}))})),s&&h.forEach((t=>{g[D(t)]=this.clickHandler(u,t,[])})),a&&p.forEach((t=>{m[D(t)]=this.clickHandler(u,[],t)})),s&&a&&(b=this.clickHandler(u,[],[]))),{pivotData:u,colAttrs:e,rowAttrs:o,colKeys:p,rowKeys:h,rowTotals:s,colTotals:a,arrowCollapsed:n.arrowCollapsed,arrowExpanded:n.arrowExpanded,colSubtotalDisplay:i,rowSubtotalDisplay:c,cellCallbacks:d,rowTotalCallbacks:g,colTotalCallbacks:m,grandTotalCallback:b,namesMapping:l}}clickHandler(t,e,o){const r=this.props.cols,s=this.props.rows,a=t.getAggregator(e,o).value(),l={},n=Math.min(r.length,o.length);for(let t=0;t<n;t+=1){const e=r[t];null!==o[t]&&(l[e]=o[t])}const i=Math.min(s.length,e.length);for(let t=0;t<i;t+=1){const o=s[t];null!==e[t]&&(l[o]=e[t])}return e=>this.props.tableOptions.clickCallback(e,a,l,t)}clickHeaderHandler(t,e,o,r,s,a,l){void 0===a&&(a=!1),void 0===l&&(l=!1);const n={};for(let t=0;t<=r;t+=1){const r=o[t];n[r]=e[t]}return o=>s(o,e[r],n,t,a,l)}collapseAttr(t,e,o){return r=>{r.stopPropagation();const s=e+1,a=o.filter((t=>t.length===s)).map(D),l={};a.forEach((t=>{l[t]=!0})),t?this.setState((t=>({collapsedRows:{...t.collapsedRows,...l}}))):this.setState((t=>({collapsedCols:{...t.collapsedCols,...l}})))}}expandAttr(t,e,o){return r=>{r.stopPropagation();const s={};o.forEach((t=>{for(let o=0;o<=e;o+=1)s[D(t.slice(0,o+1))]=!1})),t?this.setState((t=>({collapsedRows:{...t.collapsedRows,...s}}))):this.setState((t=>({collapsedCols:{...t.collapsedCols,...s}})))}}toggleRowKey(t){return e=>{e.stopPropagation(),this.setState((e=>({collapsedRows:{...e.collapsedRows,[t]:!e.collapsedRows[t]}})))}}toggleColKey(t){return e=>{e.stopPropagation(),this.setState((e=>({collapsedCols:{...e.collapsedCols,[t]:!e.collapsedCols[t]}})))}}calcAttrSpans(t,e){const o=[],r=Array(e).map((()=>0));let s=Array(e).map((()=>null));for(let e=0;e<t.length;e+=1){const a=t[e],l=[];let n=0;const i=Math.min(s.length,a.length);for(;n<i&&s[n]===a[n];)l.push(-1),o[r[n]][n]+=1,n+=1;for(;n<a.length;)r[n]=e,l.push(1),n+=1;o.push(l),s=a}return o}renderColHeaderRow(t,e,o){const{rowAttrs:r,colAttrs:s,colKeys:a,visibleColKeys:l,colAttrSpans:n,rowTotals:i,arrowExpanded:c,arrowCollapsed:u,colSubtotalDisplay:h,maxColVisible:p,pivotData:g,namesMapping:m}=o,{highlightHeaderCellsOnHover:b,omittedHighlightHeaderGroups:f=[],highlightedHeaderCells:v,dateFormatters:y}=this.props.tableOptions,w=0===e&&0!==r.length?(0,j.tZ)("th",{key:"padding",colSpan:r.length,rowSpan:s.length,"aria-hidden":"true"}):null,k=h.enabled&&e!==s.length-1;let C=null,T=null;k&&(C=e+1<p?this.collapseAttr(!1,e,a):this.expandAttr(!1,e,a),T=e+1<p?c:u);const S=(0,j.tZ)("th",{key:"label",className:"pvtAxisLabel"},V(k,T,C,t,m)),O=[],N=0!==r.length?1:0;let x=0;for(;x<l.length;){let o;const r=l[x],a=e<r.length?n[x][e]:1;let i="pvtColLabel";if(e<r.length){f.includes(s[e])||(b&&(i+=" hoverable"),o=o=>this.props.onContextMenu(o,r,void 0,{[t]:r[e]})),v&&Array.isArray(v[s[e]])&&v[s[e]].includes(r[e])&&(i+=" active");const l=1+(e===s.length-1?N:0),n=D(r.slice(0,e+1)),h=k?this.toggleColKey(n):null,p=y&&y[t]&&"function"==typeof y[t]?y[t](r[e]):r[e];O.push((0,j.tZ)("th",{className:i,key:`colKey-${n}`,colSpan:a,rowSpan:l,onClick:this.clickHeaderHandler(g,r,this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback),onContextMenu:o},V(k,this.state.collapsedCols[n]?u:c,h,p,m)))}else if(e===r.length){const t=s.length-r.length+N;O.push((0,j.tZ)("th",{className:`${i} pvtSubtotalLabel`,key:`colKeyBuffer-${D(r)}`,colSpan:a,rowSpan:t,onClick:this.clickHeaderHandler(g,r,this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback,!0)},(0,d.t)("Subtotal")))}x+=a}const A=0===e&&i?(0,j.tZ)("th",{key:"total",className:"pvtTotalLabel",rowSpan:s.length+Math.min(r.length,1),onClick:this.clickHeaderHandler(g,[],this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback,!1,!0)},(0,d.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,d.t)(this.props.aggregatorName)})):null,M=[w,S,...O,A];return(0,j.tZ)("tr",{key:`colAttr-${e}`},M)}renderRowHeaderRow(t){const{rowAttrs:e,colAttrs:o,rowKeys:r,arrowCollapsed:s,arrowExpanded:a,rowSubtotalDisplay:l,maxRowVisible:n,pivotData:i,namesMapping:c}=t;return(0,j.tZ)("tr",{key:"rowHdr"},e.map(((t,o)=>{const i=l.enabled&&o!==e.length-1;let u=null,h=null;return i&&(u=o+1<n?this.collapseAttr(!0,o,r):this.expandAttr(!0,o,r),h=o+1<n?a:s),(0,j.tZ)("th",{className:"pvtAxisLabel",key:`rowAttr-${o}`},V(i,h,u,t,c))})),(0,j.tZ)("th",{className:"pvtTotalLabel",key:"padding",onClick:this.clickHeaderHandler(i,[],this.props.rows,0,this.props.tableOptions.clickRowHeaderCallback,!1,!0)},0===o.length?(0,d.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,d.t)(this.props.aggregatorName)}):null))}renderTableRow(t,e,o){const{rowAttrs:r,colAttrs:s,rowAttrSpans:a,visibleColKeys:l,pivotData:n,rowTotals:i,rowSubtotalDisplay:c,arrowExpanded:u,arrowCollapsed:h,cellCallbacks:p,rowTotalCallbacks:g,namesMapping:m}=o,{highlightHeaderCellsOnHover:b,omittedHighlightHeaderGroups:f=[],highlightedHeaderCells:v,cellColorFormatters:y,dateFormatters:w}=this.props.tableOptions,k=D(t),C=0!==s.length?1:0,T=t.map(((o,s)=>{let l,i="pvtRowLabel";f.includes(r[s])||(b&&(i+=" hoverable"),l=e=>this.props.onContextMenu(e,void 0,t,{[r[s]]:o})),v&&Array.isArray(v[r[s]])&&v[r[s]].includes(o)&&(i+=" active");const p=a[e][s];if(p>0){const e=D(t.slice(0,s+1)),a=1+(s===r.length-1?C:0),d=c.enabled&&s!==r.length-1,g=d?this.toggleRowKey(e):null,b=w&&w[r[s]]?w[r[s]](o):o;return(0,j.tZ)("th",{key:`rowKeyLabel-${s}`,className:i,rowSpan:p,colSpan:a,onClick:this.clickHeaderHandler(n,t,this.props.rows,s,this.props.tableOptions.clickRowHeaderCallback),onContextMenu:l},V(d,this.state.collapsedRows[e]?h:u,g,b,m))}return null})),S=t.length<r.length?(0,j.tZ)("th",{className:"pvtRowLabel pvtSubtotalLabel",key:"rowKeyBuffer",colSpan:r.length-t.length+C,rowSpan:1,onClick:this.clickHeaderHandler(n,t,this.props.rows,t.length,this.props.tableOptions.clickRowHeaderCallback,!0)},(0,d.t)("Subtotal")):null,O=p[k]||{},N=l.map((e=>{const o=D(e),r=n.getAggregator(t,e),s=r.value(),a=[...t,...e];let l;y&&Object.values(y).forEach((t=>{Array.isArray(t)&&a.forEach((e=>{l||t.filter((t=>t.column===e)).forEach((t=>{const e=t.getColorFromValue(s);e&&(l=e)}))}))}));const i=r.isSubtotal?{fontWeight:"bold"}:{backgroundColor:l};return(0,j.tZ)("td",{role:"gridcell",className:"pvtVal",key:`pvtVal-${o}`,onClick:O[o],onContextMenu:o=>this.props.onContextMenu(o,e,t),style:i},r.format(s))}));let x=null;if(i){const e=n.getAggregator(t,[]),o=e.value();x=(0,j.tZ)("td",{role:"gridcell",key:"total",className:"pvtTotal",onClick:g[k],onContextMenu:e=>this.props.onContextMenu(e,void 0,t)},e.format(o))}const A=[...T,S,...N,x];return(0,j.tZ)("tr",{key:`keyRow-${k}`},A)}renderTotalsRow(t){const{rowAttrs:e,colAttrs:o,visibleColKeys:r,rowTotals:s,pivotData:a,colTotalCallbacks:l,grandTotalCallback:n}=t,i=(0,j.tZ)("th",{key:"label",className:"pvtTotalLabel pvtRowTotalLabel",colSpan:e.length+Math.min(o.length,1),onClick:this.clickHeaderHandler(a,[],this.props.rows,0,this.props.tableOptions.clickRowHeaderCallback,!1,!0)},(0,d.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,d.t)(this.props.aggregatorName)})),c=r.map((t=>{const e=D(t),o=a.getAggregator([],t),r=o.value();return(0,j.tZ)("td",{role:"gridcell",className:"pvtTotal pvtRowTotal",key:`total-${e}`,onClick:l[e],onContextMenu:e=>this.props.onContextMenu(e,t,void 0),style:{padding:"5px"}},o.format(r))}));let u=null;if(s){const t=a.getAggregator([],[]),e=t.value();u=(0,j.tZ)("td",{role:"gridcell",key:"total",className:"pvtGrandTotal pvtRowTotal",onClick:n,onContextMenu:t=>this.props.onContextMenu(t,void 0,void 0)},t.format(e))}const h=[i,...c,u];return(0,j.tZ)("tr",{key:"total",className:"pvtRowTotals"},h)}visibleKeys(t,e,o,r){return t.filter((t=>!t.some(((o,r)=>e[D(t.slice(0,r))]))&&(t.length===o||D(t)in e||!r.hideOnExpand)))}isDashboardEditMode(){return document.contains(document.querySelector(".dashboard--editing"))}render(){this.cachedProps!==this.props&&(this.cachedProps=this.props,this.cachedBasePivotSettings=this.getBasePivotSettings());const{colAttrs:t,rowAttrs:e,rowKeys:o,colKeys:r,colTotals:s,rowSubtotalDisplay:a,colSubtotalDisplay:l}=this.cachedBasePivotSettings,n=this.visibleKeys(o,this.state.collapsedRows,e.length,a),i=this.visibleKeys(r,this.state.collapsedCols,t.length,l),c={visibleRowKeys:n,maxRowVisible:Math.max(...n.map((t=>t.length))),visibleColKeys:i,maxColVisible:Math.max(...i.map((t=>t.length))),rowAttrSpans:this.calcAttrSpans(n,e.length),colAttrSpans:this.calcAttrSpans(i,t.length),...this.cachedBasePivotSettings};return(0,j.tZ)(P,{isDashboardEditMode:this.isDashboardEditMode()},(0,j.tZ)("table",{className:"pvtTable",role:"grid"},(0,j.tZ)("thead",null,t.map(((t,e)=>this.renderColHeaderRow(t,e,c))),0!==e.length&&this.renderRowHeaderRow(c)),(0,j.tZ)("tbody",null,n.map(((t,e)=>this.renderTableRow(t,e,c))),s&&this.renderTotalsRow(c))))}}z.propTypes={...L.propTypes,tableOptions:k().object,onContextMenu:k().func},z.defaultProps={...L.defaultProps,tableOptions:{}};class U extends r.PureComponent{render(){return(0,j.tZ)(z,this.props)}}U.propTypes=z.propTypes,U.defaultProps=z.defaultProps;const I=U;var B=o(86769);const G=p.iK.div`
  ${t=>{let{height:e,width:o,margin:r}=t;return`\n      margin: ${r}px;\n      height: ${e-2*r}px;\n      width: ${"string"==typeof o?parseInt(o,10):o-2*r}px;\n `}}
`,J=p.iK.div`
  height: 100%;
  max-width: inherit;
  overflow: auto;
`,W=(0,d.t)("Metric"),Y=["value"],Q=(0,p.iK)(i)`
  stroke: ${t=>{let{theme:e}=t;return e.colors.grayscale.light2}};
  stroke-width: 16px;
`,X=(0,p.iK)(h)`
  stroke: ${t=>{let{theme:e}=t;return e.colors.grayscale.light2}};
  stroke-width: 16px;
`,tt=t=>({Count:$.count(t),"Count Unique Values":$.countUnique(t),"List Unique Values":$.listUnique(", ",t),Sum:$.sum(t),Average:$.average(t),Median:$.median(t),"Sample Variance":$.var(1,t),"Sample Standard Deviation":$.stdev(1,t),Minimum:$.min(t),Maximum:$.max(t),First:$.first(t),Last:$.last(t),"Sum as Fraction of Total":$.fractionOf($.sum(),"total",t),"Sum as Fraction of Rows":$.fractionOf($.sum(),"row",t),"Sum as Fraction of Columns":$.fractionOf($.sum(),"col",t),"Count as Fraction of Total":$.fractionOf($.count(),"total",t),"Count as Fraction of Rows":$.fractionOf($.count(),"row",t),"Count as Fraction of Columns":$.fractionOf($.count(),"col",t)});function et(t){const{data:e,height:o,width:s,groupbyRows:a,groupbyColumns:l,metrics:n,colOrder:i,rowOrder:c,aggregateFunction:u,transposePivot:h,combineMetric:d,rowSubtotalPosition:w,colSubtotalPosition:k,colTotals:C,colSubTotals:T,rowTotals:S,rowSubTotals:O,valueFormat:N,currencyFormat:A,emitCrossFilters:M,setDataMask:R,selectedFilters:F,verboseMap:H,columnFormats:_,currencyFormats:K,metricsLayout:$,metricColorFormatters:Z,dateFormatters:E,onContextMenu:D,timeGrainSqla:L}=t,P=(0,p.Fg)(),q=(0,r.useMemo)((()=>null!=A&&A.symbol?new g.Z({currency:A,d3Format:N}):(0,m.JB)(N)),[N,A]),V=(0,r.useMemo)((()=>Array.from(new Set([...Object.keys(_||{}),...Object.keys(K||{})])).map((t=>[t,_[t]||N,K[t]||A]))),[_,A,K,N]),z=V.length>0,U=(0,r.useMemo)((()=>z?{[W]:Object.fromEntries(V.map((t=>{let[e,o,r]=t;return[e,r?new g.Z({currency:r,d3Format:o}):(0,m.JB)(o)]})))}:void 0),[V,z]),et=(0,r.useMemo)((()=>n.map((t=>"string"==typeof t?t:t.label))),[n]),ot=(0,r.useMemo)((()=>e.reduce(((t,e)=>[...t,...et.map((t=>({...e,[W]:t,value:e[t]}))).filter((t=>null!==t.value))]),[])),[e,et]),rt=(0,r.useMemo)((()=>a.map(b.Z)),[a]),st=(0,r.useMemo)((()=>l.map(b.Z)),[l]),at=(0,r.useMemo)((()=>({[W]:x(et)})),[et]),[lt,nt]=(0,r.useMemo)((()=>{let[t,e]=h?[st,rt]:[rt,st];return $===B.Q.ROWS?t=d?[...t,W]:[W,...t]:e=d?[...e,W]:[W,...e],[t,e]}),[d,st,rt,$,h]),it=(0,r.useCallback)((t=>{const e=Object.keys(t),o=[...a,...l];R({extraFormData:{filters:0===e.length?void 0:e.map((e=>{var r;const s=null==t?void 0:t[e],a=null!=(r=o.find((t=>(0,f.s9)(t)?t===e:!!(0,f.GA)(t)&&t.label===e)))?r:"";return null==s?{col:a,op:"IS NULL"}:{col:a,op:"IN",val:s}}))},filterState:{value:t&&Object.keys(t).length?Object.values(t):null,selectedFilters:t&&Object.keys(t).length?t:null}})}),[l,a,R]),ct=(0,r.useCallback)((t=>{const e=(t,e)=>{var o;return!!F&&(null==(o=F[t])?void 0:o.includes(e))};if(!t)return;const[o,r]=Object.entries(t)[0];let s={...F};s=e(o,r)?{}:{[o]:[r]};const n=Object.keys(s),i=[...a,...l];return{dataMask:{extraFormData:{filters:0===n.length?void 0:n.map((t=>{var e,o;const r=null==(e=s)?void 0:e[t],a=null!=(o=i.find((e=>(0,f.s9)(e)?e===t:!!(0,f.GA)(e)&&e.label===t)))?o:"";return null==r?{col:a,op:"IS NULL"}:{col:a,op:"IN",val:r}}))},filterState:{value:s&&Object.keys(s).length?Object.values(s):null,selectedFilters:s&&Object.keys(s).length?s:null}},isCurrentValueSelected:e(o,r)}}),[l,a,F]),ut=(0,r.useCallback)(((t,e,o,r,s,a)=>{if(s||a||!M)return;if((0,v.Z)())return;const l={...o};delete l[W];const n=Object.entries(l);if(0===n.length)return;const[i,c]=n[n.length-1];let u={...F||{}};u=F&&((t,e)=>{var o;return!!F&&(null==(o=F[t])?void 0:o.includes(e))})(i,c)?{}:{[i]:[c]},Array.isArray(u[i])&&0===u[i].length&&delete u[i],it(u)}),[M,F,it]),ht=(0,r.useMemo)((()=>({clickRowHeaderCallback:ut,clickColumnHeaderCallback:ut,colTotals:C,colSubTotals:T,rowTotals:S,rowSubTotals:O,highlightHeaderCellsOnHover:M||(0,y.cr)(y.TT.DRILL_BY)||(0,y.cr)(y.TT.DRILL_TO_DETAIL),highlightedHeaderCells:F,omittedHighlightHeaderGroups:[W],cellColorFormatters:{[W]:Z},dateFormatters:E})),[C,T,E,M,Z,S,O,F,ut]),pt=(0,r.useMemo)((()=>({colSubtotalDisplay:{displayOnTop:k},rowSubtotalDisplay:{displayOnTop:w},arrowCollapsed:(0,j.tZ)(Q,null),arrowExpanded:(0,j.tZ)(X,null)})),[k,w]),dt=(0,r.useCallback)(((t,e,o,r)=>{if(D){t.preventDefault(),t.stopPropagation();const s=[];e&&e.length>1&&e.forEach(((t,e)=>{const o=nt[e],r=E[o],a=(null==r?void 0:r(t))||String(t);e>0&&s.push({col:o,op:"==",val:t,formattedVal:a,grain:r?L:void 0})})),o&&o.forEach(((t,e)=>{const o=lt[e],r=E[o],a=(null==r?void 0:r(t))||String(t);s.push({col:o,op:"==",val:t,formattedVal:a,grain:r?L:void 0})})),D(t.clientX,t.clientY,{drillToDetail:s,crossFilter:ct(r),drillBy:r&&{filters:[{col:Object.keys(r)[0],op:"==",val:Object.values(r)[0]}],groupbyFieldName:o?"groupbyRows":"groupbyColumns"}})}}),[nt,E,ct,D,lt,L]);return(0,j.tZ)(G,{height:o,width:s,margin:4*P.gridUnit},(0,j.tZ)(J,null,(0,j.tZ)(I,{data:ot,rows:lt,cols:nt,aggregatorsFactory:tt,defaultFormatter:q,customFormatters:U,aggregatorName:u,vals:Y,colOrder:i,rowOrder:c,sorters:at,tableOptions:ht,subtotalOptions:pt,namesMapping:H,onContextMenu:dt})))}}}]);
//# sourceMappingURL=ebe8181f34d20910b0a2.chunk.js.map