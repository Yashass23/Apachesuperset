"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6217],{82607:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(73126),l=(a(67294),a(51995)),s=a(62529),o=a(11965);const r=(0,l.iK)((e=>{let{textColor:t,color:a,text:l,...r}=e;return(0,o.tZ)(s.Z,(0,n.Z)({text:l,color:l?a:void 0},r))}))`
  & > sup {
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    background: ${e=>{let{theme:t,color:a}=e;return a||t.colors.primary.base}};
    color: ${e=>{let{theme:t,textColor:a}=e;return a||t.colors.grayscale.light5}};
  }
`},73995:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(67294),l=a(51995),s=a(31069),o=a(61988),r=a(15926),i=a.n(r),d=a(4715),c=a(37921),u=a(49238),m=a(40277),p=a(14114),h=a(67417),b=a(11965);const v=l.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${t.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*t.gridUnit}px;\n    }\n  `}}
`,g=l.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit-2}}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,f=e=>{let{backend:t,databaseName:a}=e;return(0,b.tZ)(g,null,(0,b.tZ)(c.Z,{className:"backend"},t||""),(0,b.tZ)("span",{className:"name",title:a},a))},Z=[];function y(e){let{db:t,formMode:a=!1,emptyState:l,getDbList:r,handleError:c,isDatabaseSelectEnabled:g=!0,onDbChange:y,onEmptyResults:S,onSchemaChange:x,readOnly:w=!1,schema:_,sqlLabMode:C=!1}=e;const[$,k]=(0,n.useState)(),[E,N]=(0,n.useState)(_?{label:_,value:_,title:_}:void 0),L=(0,n.useRef)(_);L.current=_;const{addSuccessToast:q}=(0,p.e1)(),M=(0,n.useMemo)((()=>async(e,t,n)=>{const l=`/api/v1/database/?q=${i().encode({order_columns:"database_name",order_direction:"asc",page:t,page_size:n,...a||!C?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return s.Z.get({endpoint:l}).then((t=>{let{json:a}=t;const{result:n,count:l}=a;r&&r(n),0===n.length&&S&&S(e);const s=n.map((e=>({label:(0,b.tZ)(f,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend})));return{data:s,totalCount:null!=l?l:s.length}}))}),[a,r,C]);function T(e){N(e),x&&(null==e?void 0:e.value)!==L.current&&x(null==e?void 0:e.value)}(0,n.useEffect)((()=>{k((e=>(null==e?void 0:e.id)!==(null==t?void 0:t.id)?t?{label:(0,b.tZ)(f,{backend:t.backend,databaseName:t.database_name}),value:t.id,...t}:void 0:e))}),[t]);const{data:D,isFetching:U,refetch:z}=(0,h.Xx)({dbId:null==$?void 0:$.value,onSuccess:(e,t)=>{1===e.length?T(e[0]):e.find((e=>L.current===e.value))||T(void 0),t&&q("List refreshed")},onError:()=>c((0,o.t)("There was an error loading the schemas"))}),O=D||Z;function R(e,t){return(0,b.tZ)("div",{className:"section"},(0,b.tZ)("span",{className:"select"},e),(0,b.tZ)("span",{className:"refresh"},t))}return(0,b.tZ)(v,null,R((0,b.tZ)(d.qb,{ariaLabel:(0,o.t)("Select database or type to search databases"),optionFilterProps:["database_name","value"],header:(0,b.tZ)(u.lX,null,(0,o.t)("Database")),lazyLoading:!1,notFoundContent:l,onChange:function(e,t){k(t),N(void 0),y&&y(t),x&&x(void 0)},value:$,placeholder:(0,o.t)("Select database or type to search databases"),disabled:!g||w,options:M}),null),function(){const e=!w&&(0,b.tZ)(m.Z,{onClick:()=>z(),tooltipContent:(0,o.t)("Force refresh schema list")});return R((0,b.tZ)(d.Ph,{ariaLabel:(0,o.t)("Select schema or type to search schemas"),disabled:!$||w,header:(0,b.tZ)(u.lX,null,(0,o.t)("Schema")),labelInValue:!0,loading:U,name:"select-schema",notFoundContent:(0,o.t)("No compatible schema found"),placeholder:(0,o.t)("Select schema or type to search schemas"),onChange:e=>T(e),options:O,showSearch:!0,value:E}),e)}())}},40277:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(58593),s=a(13322),o=a(11965);const r=e=>{let{onClick:t,tooltipContent:a}=e;const r=(0,n.forwardRef)(((e,t)=>(0,o.tZ)(s.Z.Refresh,e)));return(0,o.tZ)(l.u,{title:a},(0,o.tZ)(r,{role:"button",onClick:t,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{PH:()=>x,ZP:()=>w,ez:()=>y});var n=a(73126),l=a(67294),s=a(51995),o=a(61988),r=a(4715),i=a(49238),d=a(13322),c=a(73995),u=a(40277),m=a(79789),p=a(86057),h=a(14114),b=a(67417),v=a(98286),g=a(11965);const f=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${t.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${t.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n      max-width: calc(100% - ${t.gridUnit+30}px)\n    }\n  `}}
`,Z=s.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,y=e=>{let{table:t}=e;const{value:a,type:n,extra:l}=t;return(0,g.tZ)(Z,{title:a},"view"===n?(0,g.tZ)(d.Z.Eye,{iconSize:"m"}):(0,g.tZ)(d.Z.Table,{iconSize:"m"}),(null==l?void 0:l.certification)&&(0,g.tZ)(m.Z,{certifiedBy:l.certification.certified_by,details:l.certification.details,size:"l"}),(null==l?void 0:l.warning_markdown)&&(0,g.tZ)(p.Z,{warningMarkdown:l.warning_markdown,size:"l",marginRight:4}),a)},S=e=>{let{database:t,emptyState:a,formMode:n=!1,getDbList:s,handleError:d,isDatabaseSelectEnabled:m=!0,onDbChange:p,onSchemaChange:Z,readOnly:S=!1,onEmptyResults:x,schema:w,sqlLabMode:_=!0,tableSelectMode:C="single",tableValue:$,onTableSelectChange:k,customTableOptionLabelRenderer:E}=e;const{addSuccessToast:N}=(0,h.e1)(),[L,q]=(0,l.useState)(w),[M,T]=(0,l.useState)(void 0),{data:D,isFetching:U,refetch:z}=(0,b.zA)({dbId:null==t?void 0:t.id,schema:L,onSuccess:(e,t)=>{t&&N((0,o.t)("List updated"))},onError:e=>{(0,v.O$)(e).then((e=>{d((0,v.d7)((0,o.t)("There was an error loading the tables"),e))}))}}),O=(0,l.useMemo)((()=>D?D.options.map((e=>({value:e.value,label:(0,g.tZ)(y,{table:e}),text:e.value,...E&&{customLabel:E(e)}}))):[]),[D,E]);(0,l.useEffect)((()=>{void 0===t&&(q(void 0),T(void 0))}),[t,C]),(0,l.useEffect)((()=>{T("single"===C?O.find((e=>e.value===$)):(null==O?void 0:O.filter((e=>e&&(null==$?void 0:$.includes(e.value)))))||[])}),[O,$,C]);const R=e=>{L?null==k||k(Array.isArray(e)?e.map((e=>null==e?void 0:e.value)):null==e?void 0:e.value,L):T(e)},j=(0,l.useMemo)((()=>(e,t)=>{const a=e.trim().toLowerCase(),{value:n}=t;return n.toLowerCase().includes(a)}),[]);return(0,g.tZ)(f,null,(0,g.tZ)(c.Z,{db:t,emptyState:a,formMode:n,getDbList:s,handleError:d,onDbChange:S?void 0:e=>{p&&p(e)},onEmptyResults:x,onSchemaChange:S?void 0:e=>{q(e),Z&&Z(e),R("single"===C?void 0:[])},schema:L,sqlLabMode:_,isDatabaseSelectEnabled:m&&!S,readOnly:S}),_&&!n&&(0,g.tZ)("div",{className:"divider"}),function(){const e=L&&!n&&S||!L,t=_?(0,g.tZ)(i.lX,null,(0,o.t)("See table schema")):(0,g.tZ)(i.lX,null,(0,o.t)("Table"));return a=(0,g.tZ)(r.Ph,{ariaLabel:(0,o.t)("Select table or type to search tables"),disabled:e,filterOption:j,header:t,labelInValue:!0,loading:U,name:"select-table",onChange:e=>R(e),options:O,placeholder:(0,o.t)("Select table or type to search tables"),showSearch:!0,mode:C,value:M,allowClear:"multiple"===C,allowSelectAll:!1}),l=!S&&(0,g.tZ)(u.Z,{onClick:()=>z(),tooltipContent:(0,o.t)("Force refresh table list")}),(0,g.tZ)("div",{className:"section"},(0,g.tZ)("span",{className:"select"},a),(0,g.tZ)("span",{className:"refresh"},l));var a,l}())},x=e=>(0,g.tZ)(S,(0,n.Z)({tableSelectMode:"multiple"},e)),w=S},67417:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>p.Kt,CN:()=>n.CN,tableEndpoints:()=>m.QD,hb:()=>i,QU:()=>d,Es:()=>c,JL:()=>u,L8:()=>b,Xx:()=>p.Xx,SJ:()=>m.SJ,uY:()=>m.uY,zA:()=>m.zA});var n=a(45673),l=a(42190),s=a(15926);function o(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const r=a.n(s)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,l.l6)((0,l.s_)(`/api/v1/chart/${e}?q=${r}`),o)}const d=e=>(0,l.l6)((0,l.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),c=e=>(0,l.s_)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,l.s_)(`/api/v1/dashboard/${e}/datasets`);var m=a(23936),p=a(69279);const h=a(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:e=>{let{dbId:t,schema:a,sql:n,templateParams:l}=e,s=l;try{s=JSON.parse(l||"")}catch(e){s=void 0}const o={schema:a,sql:n,...s&&{template_params:s}};return{method:"post",endpoint:`/api/v1/database/${t}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(o),transformResponse:e=>{let{json:t}=e;return t.result}}}})})}),{useQueryValidationsQuery:b}=h}}]);
//# sourceMappingURL=cd49f589ab93efa69e62.chunk.js.map