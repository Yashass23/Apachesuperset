"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1862],{1862:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Tt});var n=a(11965),i=a(15926),o=a.n(i),l=a(67294),s=a(45697),r=a.n(s),d=a(87183),c=a(57011),h=a(29487),u=a(82607),m=a(14670),p=a.n(m),g=a(51995),b=a(61988),f=a(93185),y=a(31069),Z=a(55786),C=a(37208),_=a(68135),v=a(4715),x=a(49238),T=a(35932),w=a(71262),E=a(79789),S=a(86057),D=a(73995),k=a(37921),A=a(38703),I=a(17982),M=a(38270),P=a(98286),K=a(79069),L=a(79684),N=a(42878),q=a(665),$=a(14114),U=a(13322),R=a(9870),B=a(73126),F=a(9882);function z(t,e,a){return l.Children.map(t,(t=>{let n=t;return t&&t.type.name===e.name&&(n=l.cloneElement(t,a(t))),n&&n.props.children&&(n=l.cloneElement(n,{children:z(n.props.children,e,a)})),n}))}var O=a(58593);const j=n.iv`
  .ant-form-item-control-input-content {
    display: flex;
    flex-direction: row;
  }
`;function H(t){let{fieldKey:e,value:a,label:i,description:o=null,control:s,onChange:r=(()=>{}),compact:d=!1,inline:c}=t;const h=(0,l.useCallback)((t=>{r(e,t)}),[r,e]),u=l.cloneElement(s,{value:a,onChange:h});return(0,n.tZ)(x.xJ,{label:(0,n.tZ)(x.lX,{className:"m-r-5"},i||e,d&&o&&(0,n.tZ)(O.u,{id:"field-descr",placement:"right",title:o},(0,n.tZ)("i",{className:"fa fa-info-circle m-l-5"}))),css:c&&j},u,!d&&o&&(0,n.tZ)("div",{css:t=>({color:t.colors.grayscale.base,[c?"marginLeft":"marginTop"]:t.gridUnit})},o))}class W extends l.PureComponent{constructor(t){super(t),this.onChange=this.onChange.bind(this)}onChange(t,e){return this.props.onChange({...this.props.item,[t]:e})}render(){const{title:t}=this.props;return(0,n.tZ)(x.l0,{className:"CRUD",layout:"vertical"},t&&(0,n.tZ)("legend",null,t),z(this.props.children,H,(t=>({onChange:this.onChange,value:this.props.item[t.props.fieldKey],compact:this.props.compact}))))}}var G;function Y(t){const e=t.map((t=>({...t,id:t.id||p().generate()}))),a={};return e.forEach((t=>{a[t.id]=t})),{collection:a,collectionArray:e}}W.defaultProps={compact:!1,title:null},function(t){t[t.asc=1]="asc",t[t.desc=2]="desc",t[t.unsort=0]="unsort"}(G||(G={}));const V=g.iK.div`
  ${t=>{let{stickyHeader:e}=t;return e&&"\n      height: 350px;\n      overflow-y: auto;\n      overflow-x: auto;\n\n      .table {\n        min-width: 800px;\n      }\n      thead th {\n        background: #fff;\n        position: sticky;\n        top: 0;\n        z-index: 9;\n        min\n      }\n    "}}
  ${t=>{let{theme:e}=t;return`\n    th span {\n      vertical-align: ${-2*e.gridUnit}px;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .empty-collection {\n      padding: ${2*e.gridUnit+2}px;\n    }\n    .tiny-cell {\n      width: ${e.gridUnit+1}px;\n    }\n    i.fa-caret-down,\n    i.fa-caret-up {\n      width: ${e.gridUnit+1}px;\n    }\n    td.expanded {\n      border-top: 0;\n      padding: 0;\n    }\n  `}}
`,Q=g.iK.div`
  text-align: right;
  ${t=>{let{theme:e}=t;return`margin-bottom: ${2*e.gridUnit}px`}}
`,J=g.iK.span`
  ${t=>{let{theme:e}=t;return`\n    margin-top: ${3*e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n  `}}
`;class X extends l.PureComponent{constructor(t){super(t);const{collection:e,collectionArray:a}=Y(t.collection);this.state={expandedColumns:{},collection:e,collectionArray:a,sortColumn:"",sort:0},this.renderItem=this.renderItem.bind(this),this.onAddItem=this.onAddItem.bind(this),this.renderExpandableSection=this.renderExpandableSection.bind(this),this.getLabel=this.getLabel.bind(this),this.onFieldsetChange=this.onFieldsetChange.bind(this),this.renderTableBody=this.renderTableBody.bind(this),this.changeCollection=this.changeCollection.bind(this),this.sortColumn=this.sortColumn.bind(this),this.renderSortIcon=this.renderSortIcon.bind(this)}UNSAFE_componentWillReceiveProps(t){if(t.collection!==this.props.collection){const{collection:e,collectionArray:a}=Y(t.collection);this.setState({collection:e,collectionArray:a})}}onCellChange(t,e,a){this.changeCollection({...this.state.collection,[t]:{...this.state.collection[t],[e]:a}})}onAddItem(){if(this.props.itemGenerator){let t=this.props.itemGenerator();t.id||(t={...t,id:p().generate()}),this.changeCollection(this.state.collection,t)}}onFieldsetChange(t){this.changeCollection({...this.state.collection,[t.id]:t})}getLabel(t){const{columnLabels:e}=this.props;let a=null!=e&&e[t]?e[t]:t;return a.startsWith("__")&&(a=""),a}getTooltip(t){const{columnLabelTooltips:e}=this.props;return null==e?void 0:e[t]}changeCollection(t,e){if(this.setState({collection:t}),this.props.onChange){const a=this.state.collectionArray.map((e=>t[e.id])).filter((t=>void 0!==t));e&&a.unshift(e),this.props.onChange(a)}}deleteItem(t){const e={...this.state.collection};delete e[t],this.changeCollection(e)}effectiveTableColumns(){const{tableColumns:t,allowDeletes:e,expandFieldset:a}=this.props,n=e?t.concat(["__actions"]):t;return a?["__expand"].concat(n):n}toggleExpand(t){this.onCellChange(t,"__expanded",!1),this.setState((e=>({expandedColumns:{...e.expandedColumns,[t]:!e.expandedColumns[t]}})))}sortColumn(t,e){void 0===e&&(e=G.unsort);const{sortColumns:a}=this.props;return()=>{if(null!=a&&a.includes(t)){if(e===G.unsort){const{collection:t}=Y(this.props.collection),a=function(t){return Object.keys(t).map((e=>t[e]))}(t);return void this.setState({collectionArray:a,sortColumn:"",sort:e})}const a=[...this.state.collectionArray].sort(((e,a)=>{return n=e[t],i=a[t],"string"==typeof n?(n||" ").localeCompare(i):n-i;var n,i})),n=e===G.asc?a:a.reverse();this.setState((a=>({...a,collectionArray:n,sortColumn:t,sort:e})))}}}renderSortIcon(t){return this.state.sortColumn===t&&this.state.sort===G.asc?(0,n.tZ)(U.Z.SortAsc,{onClick:this.sortColumn(t,2)}):this.state.sortColumn===t&&this.state.sort===G.desc?(0,n.tZ)(U.Z.SortDesc,{onClick:this.sortColumn(t,0)}):(0,n.tZ)(U.Z.Sort,{onClick:this.sortColumn(t,1)})}renderTH(t,e){const a=this.getTooltip(t);return(0,n.tZ)("th",{key:t,className:"no-wrap"},this.getLabel(t),a&&(0,n.tZ)(l.Fragment,null," ",(0,n.tZ)(F.V,{label:(0,b.t)("description"),tooltip:a})),(null==e?void 0:e.includes(t))&&this.renderSortIcon(t))}renderHeaderRow(){const t=this.effectiveTableColumns(),{allowDeletes:e,expandFieldset:a,extraButtons:i,sortColumns:o}=this.props;return(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,a&&(0,n.tZ)("th",{"aria-label":"Expand",className:"tiny-cell"}),t.map((t=>this.renderTH(t,o))),i,e&&(0,n.tZ)("th",{key:"delete-item","aria-label":"Delete",className:"tiny-cell"})))}renderExpandableSection(t){return z(this.props.expandFieldset,W,(()=>({item:t,onChange:this.onFieldsetChange})))}getCellProps(t,e){var a;const n=null==(a=this.props.itemCellProps)?void 0:a[e],i=t[e];return n?n(i,this.getLabel(e),t):{}}renderCell(t,e){var a;const n=null==(a=this.props.itemRenderers)?void 0:a[e],i=t[e],o=this.onCellChange.bind(this,t.id,e);return n?n(i,o,this.getLabel(e),t):i}renderItem(t){const{allowAddItem:e,allowDeletes:a,expandFieldset:i,tableColumns:o}=this.props,l=!!this.state.expandedColumns[t.id]||t.__expanded;let s=[];i&&s.push((0,n.tZ)("td",{key:"__expand",className:"expand"},(0,n.tZ)("i",{role:"button","aria-label":"Toggle expand",tabIndex:0,className:`fa fa-caret-${l?"down":"right"} text-primary pointer`,onClick:this.toggleExpand.bind(this,t.id)}))),s=s.concat(o.map((e=>(0,n.tZ)("td",(0,B.Z)({},this.getCellProps(t,e),{key:e}),this.renderCell(t,e))))),e&&s.push((0,n.tZ)("td",{key:"add"})),a&&s.push((0,n.tZ)("td",{key:"__actions",className:"text-primary"},(0,n.tZ)(U.Z.Trash,{"aria-label":"Delete item",className:"pointer",role:"button",tabIndex:0,onClick:this.deleteItem.bind(this,t.id)})));const r=[(0,n.tZ)("tr",{"data-test":"table-row",className:"row",key:t.id},s)];return l&&r.push((0,n.tZ)("tr",{className:"exp",key:`exp__${t.id}`},(0,n.tZ)("td",{colSpan:this.effectiveTableColumns().length,className:"expanded"},(0,n.tZ)("div",null,this.renderExpandableSection(t))))),r}renderEmptyCell(){return(0,n.tZ)("tr",null,(0,n.tZ)("td",{className:"empty-collection"},this.props.emptyMessage))}renderTableBody(){const t=this.state.collectionArray,e=t.length?t.map((t=>this.renderItem(t))):this.renderEmptyCell();return(0,n.tZ)("tbody",null,e)}render(){return(0,n.tZ)(l.Fragment,null,(0,n.tZ)(Q,null,this.props.allowAddItem&&(0,n.tZ)(J,null,(0,n.tZ)(T.Z,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.onAddItem},(0,n.tZ)("i",{className:"fa fa-plus"})," ",(0,b.t)("Add item")))),(0,n.tZ)(V,{className:"CRUD",stickyHeader:this.props.stickyHeader},(0,n.tZ)("table",{className:"table"},this.renderHeaderRow(),this.renderTableBody())))}}const tt=g.iK.div`
  .change-warning {
    margin: 16px 10px 0;
    color: ${t=>{let{theme:e}=t;return e.colors.warning.base}};
  }

  .change-warning .bold {
    font-weight: ${t=>{let{theme:e}=t;return e.typography.weights.bold}};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`,et=g.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${t=>{let{theme:e}=t;return e.gridUnit}}px;
  }
`,at=(0,g.iK)(w.ZP)`
  overflow: visible;
  .ant-tabs-content-holder {
    overflow: visible;
  }
`,nt=(0,g.iK)(u.Z)`
  .ant-badge-count {
    line-height: ${t=>{let{theme:e}=t;return 4*e.gridUnit}}px;
    height: ${t=>{let{theme:e}=t;return 4*e.gridUnit}}px;
    margin-left: ${t=>{let{theme:e}=t;return e.gridUnit}}px;
  }
`,it=g.iK.div`
  font-size: ${t=>{let{theme:e}=t;return e.typography.sizes.s}}px;
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
  }
`,ot=g.iK.div`
  text-align: right;
  ${t=>{let{theme:e}=t;return`margin-bottom: ${2*e.gridUnit}px`}}
`,lt=g.iK.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${t=>{let{theme:e}=t;return e.gridUnit}}px;
  }
`,st=g.iK.div`
  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .ant-tag {
    margin-top: ${t=>{let{theme:e}=t;return e.gridUnit}}px;
  }
`,rt=g.iK.span`
  ${t=>{let{theme:e}=t;return`\n    margin-top: ${3*e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n  `}}
`,dt=(t,e)=>(0,n.tZ)(K.Z,{value:t,onChange:e}),ct=[{value:"STRING",label:(0,b.t)("STRING")},{value:"NUMERIC",label:(0,b.t)("NUMERIC")},{value:"DATETIME",label:(0,b.t)("DATETIME")},{value:"BOOLEAN",label:(0,b.t)("BOOLEAN")}],ht=[{key:"physical",label:(0,b.t)("Physical (table or view)")},{key:"virtual",label:(0,b.t)("Virtual (SQL)")}],ut={};ht.forEach((t=>{ut[t.key]=t}));var mt={name:"s5xdrg",styles:"display:flex;align-items:center"};function pt(t){let{title:e,collection:a}=t;return(0,n.tZ)("div",{css:mt},e," ",(0,n.tZ)(nt,{count:a?a.length:0,showZero:!0}))}function gt(t){let{columns:e,datasource:a,onColumnsChange:i,onDatasourceChange:o,editableColumnName:s,showExpression:r,allowAddItem:c,allowEditDataType:h,itemGenerator:u,columnLabelTooltips:m}=t;return(0,n.tZ)(X,{tableColumns:(0,f.cr)(f.TT.ENABLE_ADVANCED_DATA_TYPES)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],sortColumns:(0,f.cr)(f.TT.ENABLE_ADVANCED_DATA_TYPES)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],allowDeletes:!0,allowAddItem:c,itemGenerator:u,collection:e,columnLabelTooltips:m,stickyHeader:!0,expandFieldset:(0,n.tZ)(ft,null,(0,n.tZ)(W,{compact:!0},r&&(0,n.tZ)(H,{fieldKey:"expression",label:(0,b.t)("SQL expression"),control:(0,n.tZ)(N.Z,{language:"markdown",offerEditInModal:!1,resize:"vertical"})}),(0,n.tZ)(H,{fieldKey:"verbose_name",label:(0,b.t)("Label"),control:(0,n.tZ)(L.Z,{controlId:"verbose_name",placeholder:(0,b.t)("Label")})}),(0,n.tZ)(H,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(L.Z,{controlId:"description",placeholder:(0,b.t)("Description")})}),h&&(0,n.tZ)(H,{fieldKey:"type",label:(0,b.t)("Data type"),control:(0,n.tZ)(v.Ph,{ariaLabel:(0,b.t)("Data type"),options:ct,name:"type",allowNewOptions:!0,allowClear:!0})}),(0,f.cr)(f.TT.ENABLE_ADVANCED_DATA_TYPES)?(0,n.tZ)(H,{fieldKey:"advanced_data_type",label:(0,b.t)("Advanced data type"),control:(0,n.tZ)(L.Z,{controlId:"advanced_data_type",placeholder:(0,b.t)("Advanced Data type")})}):(0,n.tZ)(l.Fragment,null),(0,n.tZ)(H,{fieldKey:"python_date_format",label:(0,b.t)("Datetime format"),description:(0,n.tZ)("div",null,(0,b.t)("The pattern of timestamp format. For strings use "),(0,n.tZ)("a",{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},(0,b.t)("Python datetime string pattern")),(0,b.t)(" expression which needs to adhere to the "),(0,n.tZ)("a",{href:"https://en.wikipedia.org/wiki/ISO_8601"},(0,b.t)("ISO 8601")),(0,b.t)(" standard to ensure that the lexicographical ordering\n                      coincides with the chronological ordering. If the\n                      timestamp format does not adhere to the ISO 8601 standard\n                      you will need to define an expression and type for\n                      transforming the string into a date or timestamp. Note\n                      currently time zones are not supported. If time is stored\n                      in epoch format, put `epoch_s` or `epoch_ms`. If no pattern\n                      is specified we fall back to using the optional defaults on a per\n                      database/column name level via the extra parameter.")),control:(0,n.tZ)(L.Z,{controlId:"python_date_format",placeholder:"%Y/%m/%d"})}),(0,n.tZ)(H,{fieldKey:"certified_by",label:(0,b.t)("Certified By"),description:(0,b.t)("Person or group that has certified this metric"),control:(0,n.tZ)(L.Z,{controlId:"certified",placeholder:(0,b.t)("Certified by")})}),(0,n.tZ)(H,{fieldKey:"certification_details",label:(0,b.t)("Certification details"),description:(0,b.t)("Details of the certification"),control:(0,n.tZ)(L.Z,{controlId:"certificationDetails",placeholder:(0,b.t)("Certification details")})}))),columnLabels:(0,f.cr)(f.TT.ENABLE_ADVANCED_DATA_TYPES)?{column_name:(0,b.t)("Column"),advanced_data_type:(0,b.t)("Advanced data type"),type:(0,b.t)("Data type"),groupby:(0,b.t)("Is dimension"),is_dttm:(0,b.t)("Is temporal"),main_dttm_col:(0,b.t)("Default datetime"),filterable:(0,b.t)("Is filterable")}:{column_name:(0,b.t)("Column"),type:(0,b.t)("Data type"),groupby:(0,b.t)("Is dimension"),is_dttm:(0,b.t)("Is temporal"),main_dttm_col:(0,b.t)("Default datetime"),filterable:(0,b.t)("Is filterable")},onChange:i,itemRenderers:(0,f.cr)(f.TT.ENABLE_ADVANCED_DATA_TYPES)?{column_name:(t,e,a,i)=>s?(0,n.tZ)(lt,null,i.is_certified&&(0,n.tZ)(E.Z,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.tZ)(M.Z,{canEdit:!0,title:t,onSaveTitle:e})):(0,n.tZ)(lt,null,i.is_certified&&(0,n.tZ)(E.Z,{certifiedBy:i.certified_by,details:i.certification_details}),t),main_dttm_col:(t,i,l,s)=>{const r=a.main_dttm_col===s.column_name,c=!e.find((t=>t.column_name===s.column_name)).is_dttm;return(0,n.tZ)(d.Y,{checked:r,disabled:c,onChange:()=>o({...a,main_dttm_col:s.column_name})})},type:t=>t?(0,n.tZ)(k.Z,null,t):null,advanced_data_type:t=>(0,n.tZ)(k.Z,{onChange:i},t),is_dttm:dt,filterable:dt,groupby:dt}:{column_name:(t,e,a,i)=>s?(0,n.tZ)(lt,null,i.is_certified&&(0,n.tZ)(E.Z,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.tZ)(L.Z,{value:t,onChange:e})):(0,n.tZ)(lt,null,i.is_certified&&(0,n.tZ)(E.Z,{certifiedBy:i.certified_by,details:i.certification_details}),t),main_dttm_col:(t,i,l,s)=>{const r=a.main_dttm_col===s.column_name,c=!e.find((t=>t.column_name===s.column_name)).is_dttm;return(0,n.tZ)(d.Y,{checked:r,disabled:c,onChange:()=>o({...a,main_dttm_col:s.column_name})})},type:t=>t?(0,n.tZ)(k.Z,null,t):null,is_dttm:dt,filterable:dt,groupby:dt}})}function bt(t){let{label:e,formElement:a}=t;return(0,n.tZ)("div",null,(0,n.tZ)("div",null,(0,n.tZ)("strong",null,e)),(0,n.tZ)("div",null,a))}function ft(t){let{children:e}=t;return(0,n.tZ)(c.Z,{padded:!0},e)}pt.propTypes={title:r().string,collection:r().array},gt.propTypes={columns:r().array.isRequired,datasource:r().object.isRequired,onColumnsChange:r().func.isRequired,onDatasourceChange:r().func.isRequired,editableColumnName:r().bool,showExpression:r().bool,allowAddItem:r().bool,allowEditDataType:r().bool,itemGenerator:r().func},gt.defaultProps={editableColumnName:!1,showExpression:!1,allowAddItem:!1,allowEditDataType:!1,itemGenerator:()=>({column_name:(0,b.t)("<new column>"),filterable:!0,groupby:!0})},bt.propTypes={label:r().string,formElement:r().node},ft.propTypes={children:r().node};const yt={datasource:r().object.isRequired,onChange:r().func,addSuccessToast:r().func.isRequired,addDangerToast:r().func.isRequired,setIsEditing:r().func};function Zt(t){let{datasource:e,onChange:a}=t;const i=(0,l.useCallback)((function(t,e,a){void 0===t&&(t="");const n=o().encode({filter:t,page:e,page_size:a});return y.Z.get({endpoint:`/api/v1/dataset/related/owners?q=${n}`}).then((t=>({data:t.json.result.filter((t=>t.extra.active)).map((t=>({value:t.value,label:t.text}))),totalCount:t.json.count})))}),[]);return(0,n.tZ)(v.qb,{ariaLabel:(0,b.t)("Select owners"),mode:"multiple",name:"owners",value:e.owners,options:i,onChange:a,header:(0,n.tZ)(x.lX,null,(0,b.t)("Owners")),allowClear:!0})}var Ct={name:"hkh81z",styles:"margin-top:8px"},_t={name:"hkh81z",styles:"margin-top:8px"};class vt extends l.PureComponent{constructor(t){var e;super(t),this.state={datasource:{...t.datasource,owners:t.datasource.owners.map((t=>({value:t.value||t.id,label:t.label||`${t.first_name} ${t.last_name}`}))),metrics:null==(e=t.datasource.metrics)?void 0:e.map((t=>{const{certified_by:e,certification_details:a}=t,{certification:{details:n,certified_by:i}={},warning_markdown:o}=JSON.parse(t.extra||"{}")||{};return{...t,certification_details:a||n,warning_markdown:o||"",certified_by:i||e}}))},errors:[],isSqla:"table"===t.datasource.datasource_type||"table"===t.datasource.type,isEditMode:!1,databaseColumns:t.datasource.columns.filter((t=>!t.expression)),calculatedColumns:t.datasource.columns.filter((t=>!!t.expression)),metadataLoading:!1,activeTabKey:0,datasourceType:t.datasource.sql?ut.virtual.key:ut.physical.key},this.onChange=this.onChange.bind(this),this.onChangeEditMode=this.onChangeEditMode.bind(this),this.onDatasourcePropChange=this.onDatasourcePropChange.bind(this),this.onDatasourceChange=this.onDatasourceChange.bind(this),this.tableChangeAndSyncMetadata=this.tableChangeAndSyncMetadata.bind(this),this.syncMetadata=this.syncMetadata.bind(this),this.setColumns=this.setColumns.bind(this),this.validateAndChange=this.validateAndChange.bind(this),this.handleTabSelect=this.handleTabSelect.bind(this),this.allowEditSource=!(0,f.cr)(f.TT.DISABLE_DATASET_SOURCE_EDIT),this.currencies=(0,Z.Z)(t.currencies).map((t=>({value:t,label:`${(0,C.j)({symbol:t})} (${t})`})))}onChange(){const{datasourceType:t,datasource:e}=this.state,a=t===ut.physical.key?"":e.sql,n={...this.state.datasource,sql:a,columns:[...this.state.databaseColumns,...this.state.calculatedColumns]};this.props.onChange(n,this.state.errors)}onChangeEditMode(){this.props.setIsEditing(!this.state.isEditMode),this.setState((t=>({isEditMode:!t.isEditMode})))}onDatasourceChange(t,e){void 0===e&&(e=this.validateAndChange),this.setState({datasource:t},e)}onDatasourcePropChange(t,e){if(void 0===e)return;const a={...this.state.datasource,[t]:e};this.setState((a=>({datasource:{...a.datasource,[t]:e}})),"table_name"===t?this.onDatasourceChange(a,this.tableChangeAndSyncMetadata):this.onDatasourceChange(a,this.validateAndChange))}onDatasourceTypeChange(t){this.setState({datasourceType:t})}setColumns(t){this.setState(t,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}tableChangeAndSyncMetadata(){this.validate((()=>{this.syncMetadata(),this.onChange()}))}updateColumns(t){const{databaseColumns:e}=this.state,a=t.map((t=>t.column_name)),n=e.reduce(((t,e)=>({...t,[e.column_name]:e})),{}),i=[],o={added:[],modified:[],removed:e.map((t=>t.column_name)).filter((t=>!a.includes(t)))};return t.forEach((t=>{const e=n[t.column_name];e?e.type!==t.type||!e.is_dttm&&t.is_dttm?(i.push({...e,type:t.type,is_dttm:e.is_dttm||t.is_dttm}),o.modified.push(t.column_name)):i.push(e):(i.push({id:p().generate(),column_name:t.column_name,type:t.type,groupby:!0,filterable:!0,is_dttm:t.is_dttm}),o.added.push(t.column_name))})),(o.added.length||o.modified.length||o.removed.length)&&this.setColumns({databaseColumns:i}),o}syncMetadata(){const{datasource:t}=this.state,e={datasource_type:t.type||t.datasource_type,database_name:t.database.database_name||t.database.name,schema_name:t.schema,table_name:t.table_name,normalize_columns:t.normalize_columns,always_filter_main_dttm:t.always_filter_main_dttm};Object.entries(e).forEach((t=>{let[a,n]=t;void 0===n&&(e[a]=null)}));const a=`/datasource/external_metadata_by_name/?q=${o().encode_uri(e)}`;this.setState({metadataLoading:!0}),y.Z.get({endpoint:a}).then((t=>{let{json:e}=t;const a=this.updateColumns(e);a.modified.length&&this.props.addSuccessToast((0,b.t)("Modified columns: %s",a.modified.join(", "))),a.removed.length&&this.props.addSuccessToast((0,b.t)("Removed columns: %s",a.removed.join(", "))),a.added.length&&this.props.addSuccessToast((0,b.t)("New columns added: %s",a.added.join(", "))),this.props.addSuccessToast((0,b.t)("Metadata has been synced")),this.setState({metadataLoading:!1})})).catch((t=>(0,P.O$)(t).then((t=>{let{error:e,statusText:a}=t;this.props.addDangerToast(e||a||(0,b.t)("An error has occurred")),this.setState({metadataLoading:!1})}))))}findDuplicates(t,e){const a={},n=[];return t.forEach((t=>{const i=e(t);i in a?n.push(i):a[i]=null})),n}validate(t){let e,a=[];const{datasource:n}=this.state;e=this.findDuplicates(n.columns,(t=>t.column_name)),a=a.concat(e.map((t=>(0,b.t)("Column name [%s] is duplicated",t)))),e=this.findDuplicates(n.metrics,(t=>t.metric_name)),a=a.concat(e.map((t=>(0,b.t)("Metric name [%s] is duplicated",t))));const i=this.state.calculatedColumns.filter((t=>!t.expression&&!t.json));a=a.concat(i.map((t=>(0,b.t)("Calculated column [%s] requires an expression",t.column_name))));try{var o;null==(o=this.state.datasource.metrics)||o.forEach((t=>{var e;return(null==(e=t.currency)?void 0:e.symbol)&&new Intl.NumberFormat("en-US",{style:"currency",currency:t.currency.symbol})}))}catch{a=a.concat([(0,b.t)("Invalid currency code in saved metrics")])}this.setState({errors:a},t)}handleTabSelect(t){this.setState({activeTabKey:t})}sortMetrics(t){return t.sort(((t,e)=>{let{id:a}=t,{id:n}=e;return n-a}))}renderSettingsFieldset(){const{datasource:t}=this.state;return(0,n.tZ)(W,{title:(0,b.t)("Basic"),item:t,onChange:this.onDatasourceChange},(0,n.tZ)(H,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(N.Z,{language:"markdown",offerEditInModal:!1,resize:"vertical"})}),(0,n.tZ)(H,{fieldKey:"default_endpoint",label:(0,b.t)("Default URL"),description:(0,b.t)("Default URL to redirect to when accessing from the dataset list page"),control:(0,n.tZ)(L.Z,{controlId:"default_endpoint"})}),(0,n.tZ)(H,{inline:!0,fieldKey:"filter_select_enabled",label:(0,b.t)("Autocomplete filters"),description:(0,b.t)("Whether to populate autocomplete filters options"),control:(0,n.tZ)(K.Z,null)}),this.state.isSqla&&(0,n.tZ)(H,{fieldKey:"fetch_values_predicate",label:(0,b.t)("Autocomplete query predicate"),description:(0,b.t)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:(0,n.tZ)(N.Z,{language:"sql",controlId:"fetch_values_predicate",minLines:5,resize:"vertical"})}),this.state.isSqla&&(0,n.tZ)(H,{fieldKey:"extra",label:(0,b.t)("Extra"),description:(0,b.t)('Extra data to specify table metadata. Currently supports metadata of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." }, "warning_markdown": "This is a warning." }`.'),control:(0,n.tZ)(N.Z,{controlId:"extra",language:"json",offerEditInModal:!1,resize:"vertical"})}),(0,n.tZ)(Zt,{datasource:t,onChange:e=>{this.onDatasourceChange({...t,owners:e})}}))}renderAdvancedFieldset(){const{datasource:t}=this.state;return(0,n.tZ)(W,{title:(0,b.t)("Advanced"),item:t,onChange:this.onDatasourceChange},(0,n.tZ)(H,{fieldKey:"cache_timeout",label:(0,b.t)("Cache timeout"),description:(0,b.t)("The duration of time in seconds before the cache is invalidated. Set to -1 to bypass the cache."),control:(0,n.tZ)(L.Z,{controlId:"cache_timeout"})}),(0,n.tZ)(H,{fieldKey:"offset",label:(0,b.t)("Hours offset"),control:(0,n.tZ)(L.Z,{controlId:"offset"}),description:(0,b.t)("The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.")}),this.state.isSqla&&(0,n.tZ)(H,{fieldKey:"template_params",label:(0,b.t)("Template parameters"),description:(0,b.t)("A set of parameters that become available in the query using Jinja templating syntax"),control:(0,n.tZ)(L.Z,{controlId:"template_params"})}),(0,n.tZ)(H,{inline:!0,fieldKey:"normalize_columns",label:(0,b.t)("Normalize column names"),description:(0,b.t)("Allow column names to be changed to case insensitive format, if supported (e.g. Oracle, Snowflake)."),control:(0,n.tZ)(K.Z,{controlId:"normalize_columns"})}),(0,n.tZ)(H,{inline:!0,fieldKey:"always_filter_main_dttm",label:(0,b.t)("Always filter main datetime column"),description:(0,b.t)("When the secondary temporal columns are filtered, apply the same filter to the main datetime column."),control:(0,n.tZ)(K.Z,{controlId:"always_filter_main_dttm"})}))}renderSpatialTab(){const{datasource:t}=this.state,{spatials:e,all_cols:a}=t;return(0,n.tZ)(w.ZP.TabPane,{tab:(0,n.tZ)(pt,{collection:e,title:(0,b.t)("Spatial")}),key:4},(0,n.tZ)(X,{tableColumns:["name","config"],onChange:this.onDatasourcePropChange.bind(this,"spatials"),itemGenerator:()=>({name:(0,b.t)("<new spatial>"),type:(0,b.t)("<no type>"),config:null}),collection:e,allowDeletes:!0,itemRenderers:{name:(t,e)=>(0,n.tZ)(M.Z,{canEdit:!0,title:t,onSaveTitle:e}),config:(t,e)=>(0,n.tZ)(q.Z,{value:t,onChange:e,choices:a})}}))}renderSourceFieldset(t){var e,a,i;const{datasource:o}=this.state;return(0,n.tZ)("div",null,this.allowEditSource&&(0,n.tZ)(it,null,(0,n.tZ)("span",{role:"button",tabIndex:0,onClick:this.onChangeEditMode},this.state.isEditMode?(0,n.tZ)(U.Z.LockUnlocked,{iconColor:t.colors.grayscale.base}):(0,n.tZ)(U.Z.LockLocked,{iconColor:t.colors.grayscale.base})),!this.state.isEditMode&&(0,n.tZ)("div",null,(0,b.t)("Click the lock to make changes.")),this.state.isEditMode&&(0,n.tZ)("div",null,(0,b.t)("Click the lock to prevent further changes."))),(0,n.tZ)("div",{className:"m-l-10 m-t-20 m-b-10"},ht.map((t=>(0,n.tZ)(d.Y,{key:t.key,value:t.key,inline:!0,onChange:this.onDatasourceTypeChange.bind(this,t.key),checked:this.state.datasourceType===t.key,disabled:!this.state.isEditMode},t.label)))),(0,n.tZ)("hr",null),(0,n.tZ)(W,{item:o,onChange:this.onDatasourceChange,compact:!0},this.state.datasourceType===ut.virtual.key&&(0,n.tZ)("div",null,this.state.isSqla&&(0,n.tZ)(l.Fragment,null,(0,n.tZ)(v.JX,{xs:24,md:12},(0,n.tZ)(H,{fieldKey:"databaseSelector",label:(0,b.t)("virtual"),control:(0,n.tZ)("div",{css:Ct},(0,n.tZ)(D.Z,{db:null==o?void 0:o.database,schema:o.schema,onSchemaChange:t=>this.state.isEditMode&&this.onDatasourcePropChange("schema",t),onDbChange:t=>this.state.isEditMode&&this.onDatasourcePropChange("database",t),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode}))}),(0,n.tZ)("div",{css:(0,n.iv)({width:"calc(100% - 34px)",marginTop:-16},"","")},(0,n.tZ)(H,{fieldKey:"table_name",label:(0,b.t)("Name"),control:(0,n.tZ)(L.Z,{controlId:"table_name",onChange:t=>{this.onDatasourcePropChange("table_name",t)},placeholder:(0,b.t)("Dataset name"),disabled:!this.state.isEditMode})}))),(0,n.tZ)(H,{fieldKey:"sql",label:(0,b.t)("SQL"),description:(0,b.t)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries."),control:(0,n.tZ)(N.Z,{language:"sql",offerEditInModal:!1,minLines:20,maxLines:1/0,readOnly:!this.state.isEditMode,resize:"both"})}))),this.state.datasourceType===ut.physical.key&&(0,n.tZ)(v.JX,{xs:24,md:12},this.state.isSqla&&(0,n.tZ)(H,{fieldKey:"tableSelector",label:(0,b.t)("Physical"),control:(0,n.tZ)("div",{css:_t},(0,n.tZ)(I.ZP,{clearable:!1,database:{...o.database,database_name:(null==(e=o.database)?void 0:e.database_name)||(null==(a=o.database)?void 0:a.name)},dbId:null==(i=o.database)?void 0:i.id,handleError:this.props.addDangerToast,schema:o.schema,sqlLabMode:!1,tableValue:o.table_name,onSchemaChange:this.state.isEditMode?t=>this.onDatasourcePropChange("schema",t):void 0,onDbChange:this.state.isEditMode?t=>this.onDatasourcePropChange("database",t):void 0,onTableSelectChange:this.state.isEditMode?t=>this.onDatasourcePropChange("table_name",t):void 0,readOnly:!this.state.isEditMode})),description:(0,b.t)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")}))))}renderErrors(){return this.state.errors.length>0?(0,n.tZ)(h.Z,{css:t=>({marginBottom:4*t.gridUnit}),type:"error",message:(0,n.tZ)(l.Fragment,null,this.state.errors.map((t=>(0,n.tZ)("div",{key:t},t))))}):null}renderMetricCollection(){const{datasource:t}=this.state,{metrics:e}=t,a=null!=e&&e.length?this.sortMetrics(e):[];return(0,n.tZ)(X,{tableColumns:["metric_name","verbose_name","expression"],sortColumns:["metric_name","verbose_name","expression"],columnLabels:{metric_name:(0,b.t)("Metric Key"),verbose_name:(0,b.t)("Label"),expression:(0,b.t)("SQL expression")},columnLabelTooltips:{metric_name:(0,b.t)("This field is used as a unique identifier to attach the metric to charts. It is also used as the alias in the SQL query.")},expandFieldset:(0,n.tZ)(ft,null,(0,n.tZ)(W,{compact:!0},(0,n.tZ)(H,{fieldKey:"description",label:(0,b.t)("Description"),control:(0,n.tZ)(L.Z,{controlId:"description",placeholder:(0,b.t)("Description")})}),(0,n.tZ)(H,{fieldKey:"d3format",label:(0,b.t)("D3 format"),control:(0,n.tZ)(L.Z,{controlId:"d3format",placeholder:"%y/%m/%d"})}),(0,n.tZ)(H,{fieldKey:"currency",label:(0,b.t)("Metric currency"),control:(0,n.tZ)(R.Z,{currencySelectOverrideProps:{placeholder:(0,b.t)("Select or type currency symbol")},symbolSelectAdditionalStyles:n.iv`
                      max-width: 30%;
                    `})}),(0,n.tZ)(H,{label:(0,b.t)("Certified by"),fieldKey:"certified_by",description:(0,b.t)("Person or group that has certified this metric"),control:(0,n.tZ)(L.Z,{controlId:"certified_by",placeholder:(0,b.t)("Certified by")})}),(0,n.tZ)(H,{label:(0,b.t)("Certification details"),fieldKey:"certification_details",description:(0,b.t)("Details of the certification"),control:(0,n.tZ)(L.Z,{controlId:"certification_details",placeholder:(0,b.t)("Certification details")})}),(0,n.tZ)(H,{label:(0,b.t)("Warning"),fieldKey:"warning_markdown",description:(0,b.t)("Optional warning about use of this metric"),control:(0,n.tZ)(N.Z,{controlId:"warning_markdown",language:"markdown",offerEditInModal:!1,resize:"vertical"})}))),collection:a,allowAddItem:!0,onChange:this.onDatasourcePropChange.bind(this,"metrics"),itemGenerator:()=>({metric_name:(0,b.t)("<new metric>"),verbose_name:"",expression:""}),itemCellProps:{expression:()=>({width:"240px"})},itemRenderers:{metric_name:(t,e,a,i)=>(0,n.tZ)(et,null,i.is_certified&&(0,n.tZ)(E.Z,{certifiedBy:i.certified_by,details:i.certification_details}),i.warning_markdown&&(0,n.tZ)(S.Z,{warningMarkdown:i.warning_markdown}),(0,n.tZ)(M.Z,{canEdit:!0,title:t,onSaveTitle:e})),verbose_name:(t,e)=>(0,n.tZ)(L.Z,{canEdit:!0,value:t,onChange:e}),expression:(t,e)=>(0,n.tZ)(N.Z,{canEdit:!0,initialValue:t,onChange:e,extraClasses:["datasource-sql-expression"],language:"sql",offerEditInModal:!1,minLines:5,textAreaStyles:{minWidth:"200px",maxWidth:"450px"},resize:"both"}),description:(t,e,a)=>(0,n.tZ)(bt,{label:a,formElement:(0,n.tZ)(L.Z,{value:t,onChange:e})}),d3format:(t,e,a)=>(0,n.tZ)(bt,{label:a,formElement:(0,n.tZ)(L.Z,{value:t,onChange:e})})},allowDeletes:!0,stickyHeader:!0})}render(){const{datasource:t,activeTabKey:e}=this.state,{metrics:a}=t,i=null!=a&&a.length?this.sortMetrics(a):[],{theme:o}=this.props;return(0,n.tZ)(tt,null,this.renderErrors(),(0,n.tZ)(h.Z,{css:t=>({marginBottom:4*t.gridUnit}),type:"warning",message:(0,n.tZ)(l.Fragment,null," ",(0,n.tZ)("strong",null,(0,b.t)("Be careful.")," "),(0,b.t)("Changing these settings will affect all charts using this dataset, including charts owned by other people."))}),(0,n.tZ)(at,{fullWidth:!1,id:"table-tabs",onChange:this.handleTabSelect,defaultActiveKey:e},(0,n.tZ)(w.ZP.TabPane,{key:0,tab:(0,b.t)("Source")},this.renderSourceFieldset(o)),(0,n.tZ)(w.ZP.TabPane,{tab:(0,n.tZ)(pt,{collection:i,title:(0,b.t)("Metrics")}),key:1},this.renderMetricCollection()),(0,n.tZ)(w.ZP.TabPane,{tab:(0,n.tZ)(pt,{collection:this.state.databaseColumns,title:(0,b.t)("Columns")}),key:2},(0,n.tZ)(st,null,(0,n.tZ)(ot,null,(0,n.tZ)(rt,null,(0,n.tZ)(T.Z,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.syncMetadata,className:"sync-from-source",disabled:this.state.isEditMode},(0,n.tZ)("i",{className:"fa fa-database"})," ",(0,b.t)("Sync columns from source")))),(0,n.tZ)(gt,{className:"columns-table",columns:this.state.databaseColumns,datasource:t,onColumnsChange:t=>this.setColumns({databaseColumns:t}),onDatasourceChange:this.onDatasourceChange}),this.state.metadataLoading&&(0,n.tZ)(A.Z,null))),(0,n.tZ)(w.ZP.TabPane,{tab:(0,n.tZ)(pt,{collection:this.state.calculatedColumns,title:(0,b.t)("Calculated columns")}),key:3},(0,n.tZ)(st,null,(0,n.tZ)(gt,{columns:this.state.calculatedColumns,onColumnsChange:t=>this.setColumns({calculatedColumns:t}),columnLabelTooltips:{column_name:(0,b.t)("This field is used as a unique identifier to attach the calculated dimension to charts. It is also used as the alias in the SQL query.")},onDatasourceChange:this.onDatasourceChange,datasource:t,editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:(0,b.t)("<new column>"),filterable:!0,groupby:!0,expression:(0,b.t)("<enter SQL expression here>"),__expanded:!0})}))),(0,n.tZ)(w.ZP.TabPane,{key:4,tab:(0,b.t)("Settings")},(0,n.tZ)(v.X2,{gutter:16},(0,n.tZ)(v.JX,{xs:24,md:12},(0,n.tZ)(ft,null,this.renderSettingsFieldset())),(0,n.tZ)(v.JX,{xs:24,md:12},(0,n.tZ)(ft,null,this.renderAdvancedFieldset()))))))}}vt.defaultProps={onChange:()=>{},setIsEditing:()=>{}},vt.propTypes=yt;const xt=(0,_.b)(vt),Tt=(0,$.ZP)(xt)},57011:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(73126),i=(a(67294),a(70302)),o=a(11965);const l=t=>{let{padded:e,...a}=t;return(0,o.tZ)(i.Z,(0,n.Z)({},a,{css:t=>({backgroundColor:t.colors.grayscale.light4,borderRadius:t.borderRadius,".ant-card-body":{padding:e?4*t.gridUnit:t.gridUnit}})}))}},79789:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(67294),i=a(51995),o=a(61988),l=a(13322),s=a(58593),r=a(11965);const d=function(t){let{certifiedBy:e,details:a,size:d="l"}=t;const c=(0,i.Fg)();return(0,r.tZ)(s.u,{id:"certified-details-tooltip",title:(0,r.tZ)(n.Fragment,null,e&&(0,r.tZ)("div",null,(0,r.tZ)("strong",null,(0,o.t)("Certified by %s",e))),(0,r.tZ)("div",null,a))},(0,r.tZ)(l.Z.Certified,{iconColor:c.colors.primary.base,iconSize:d}))}},38270:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(73126),i=a(67294),o=a(73727),l=a(94184),s=a.n(l),r=a(51995),d=a(61988),c=a(11965),h=a(58593),u=a(79789);const m=(0,r.iK)(u.Z)`
  vertical-align: middle;
`;function p(t){let{canEdit:e=!1,editing:a=!1,extraClasses:l,multiLine:r=!1,noPermitTooltip:u,onSaveTitle:p,showTooltip:g=!0,style:b,title:f="",defaultTitle:y="",placeholder:Z="",certifiedBy:C,certificationDetails:_,url:v,...x}=t;const[T,w]=(0,i.useState)(a),[E,S]=(0,i.useState)(f),[D,k]=(0,i.useState)(f),[A,I]=(0,i.useState)(null),M=(0,i.useRef)();function P(){if(!e||T)return;const t=M.current?M.current.getBoundingClientRect():null;w(!0),I(t)}function K(){const t=E.trim();e&&(w(!1),t.length?(D!==t&&k(t),f!==t&&p(t)):S(D))}function L(t){" "===t.key&&t.stopPropagation(),"Enter"===t.key&&(t.preventDefault(),K())}function N(t){e&&S(t.target.value)}function q(t){"Enter"===t.key&&(t.preventDefault(),K())}let $;(0,i.useEffect)((()=>{f!==E&&(k(E),S(f))}),[f]),(0,i.useEffect)((()=>{if(T&&(M.current.focus(),M.current.setSelectionRange)){const{length:t}=M.current.value;M.current.setSelectionRange(t,t),M.current.scrollLeft=M.current.scrollWidth,M.current.scrollTop=M.current.scrollHeight}}),[T]),$=E,T||E||($=y||f);const U=T&&A?{height:`${A.height}px`}:void 0;let R=r&&T?(0,c.tZ)("textarea",{ref:M,value:$,className:f?void 0:"text-muted",onKeyDown:L,onChange:N,onBlur:K,onClick:P,onKeyPress:q,placeholder:Z,style:U}):(0,c.tZ)("input",{ref:M,type:T?"text":"button",value:$,className:f?void 0:"text-muted",onKeyDown:L,onChange:N,onBlur:K,onClick:P,onKeyPress:q,placeholder:Z});return g&&!T&&(R=(0,c.tZ)(h.u,{id:"title-tooltip",title:e?(0,d.t)("Click to edit"):u||(0,d.t)("You don't have the rights to alter this title.")},R)),e||(R=v?(0,c.tZ)(o.rU,{to:v,css:t=>c.iv`
          color: ${t.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        `},$):(0,c.tZ)("span",null,$)),(0,c.tZ)("span",(0,n.Z)({className:s()("editable-title",l,e&&"editable-title--editable",T&&"editable-title--editing"),style:b},x),C&&(0,c.tZ)(i.Fragment,null,(0,c.tZ)(m,{certifiedBy:C,details:_,size:"xl"})," "),R)}}}]);
//# sourceMappingURL=cea748c0e8197020f07d.chunk.js.map