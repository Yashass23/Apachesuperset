"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1567],{95644:(t,e,i)=>{i.d(e,{N:()=>u,s:()=>p});const n="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\n\nstruct AmbientLight {\n vec3 color;\n};\n\nstruct PointLight {\n vec3 color;\n vec3 position;\n vec3 attenuation;\n};\n\nstruct DirectionalLight {\n  vec3 color;\n  vec3 direction;\n};\n\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\n\nuniform bool lighting_uEnabled;\n\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\n  return pointLight.attenuation.x\n       + pointLight.attenuation.y * distance\n       + pointLight.attenuation.z * distance * distance;\n}\n\n#endif\n",o={lightSources:{}};function r(){let{color:t=[0,0,0],intensity:e=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.map((t=>t*e/255))}const s={name:"lights",vs:n,fs:n,getUniforms:function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if("lightSources"in e){const{ambientLight:t,pointLights:i,directionalLights:n}=e.lightSources||{};return t||i&&i.length>0||n&&n.length>0?Object.assign({},function(t){let{ambientLight:e,pointLights:i=[],directionalLights:n=[]}=t;const o={};return o["lighting_uAmbientLight.color"]=e?r(e):[0,0,0],i.forEach(((t,e)=>{o["lighting_uPointLight[".concat(e,"].color")]=r(t),o["lighting_uPointLight[".concat(e,"].position")]=t.position,o["lighting_uPointLight[".concat(e,"].attenuation")]=t.attenuation||[1,0,0]})),o.lighting_uPointLightCount=i.length,n.forEach(((t,e)=>{o["lighting_uDirectionalLight[".concat(e,"].color")]=r(t),o["lighting_uDirectionalLight[".concat(e,"].direction")]=t.direction})),o.lighting_uDirectionalLightCount=n.length,o}({ambientLight:t,pointLights:i,directionalLights:n}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in e){const i={pointLights:[],directionalLights:[]};for(const t of e.lights||[])switch(t.type){case"ambient":i.ambientLight=t;break;case"directional":i.directionalLights.push(t);break;case"point":i.pointLights.push(t)}return t({lightSources:i})}return{}},defines:{MAX_LIGHTS:3}},l="\nuniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\n    vec3 halfway_direction = normalize(light_direction + view_direction);\n    float lambertian = dot(light_direction, normal_worldspace);\n    float specular = 0.0;\n    if (lambertian > 0.0) {\n      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\n      specular = pow(specular_angle, lighting_uShininess);\n    }\n    lambertian = max(lambertian, 0.0);\n    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\n\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = surfaceColor;\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\n  vec3 lightColor = vec3(0, 0, 0);\n  vec3 surfaceColor = vec3(0, 0, 0);\n\n  if (lighting_uEnabled) {\n    vec3 view_direction = normalize(cameraPosition - position_worldspace);\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uPointLightCount) {\n        break;\n      }\n      PointLight pointLight = lighting_uPointLight[i];\n      vec3 light_position_worldspace = pointLight.position;\n      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);\n      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n    }\n\n    for (int i = 0; i < MAX_LIGHTS; i++) {\n      if (i >= lighting_uDirectionalLightCount) {\n        break;\n      }\n      DirectionalLight directionalLight = lighting_uDirectionalLight[i];\n      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n    }\n  }\n  return lightColor;\n}\n",a={};function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(!("material"in t))return{};const{material:e}=t;return e?function(t){const{ambient:e=.35,diffuse:i=.6,shininess:n=32,specularColor:o=[30,30,30]}=t;return{lighting_uAmbient:e,lighting_uDiffuse:i,lighting_uShininess:n,lighting_uSpecularColor:o.map((t=>t/255))}}(e):{lighting_uEnabled:!1}}const u={name:"gouraud-lighting",dependencies:[s],vs:l,defines:{LIGHTING_VERTEX:1},getUniforms:c},p={name:"phong-lighting",dependencies:[s],fs:l,defines:{LIGHTING_FRAGMENT:1},getUniforms:c}},44500:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(4942),o=i(91575),r=i(99553),s=i(94944),l=i(53478);class a{constructor(t){(0,n.Z)(this,"opts",void 0),(0,n.Z)(this,"typedArrayManager",void 0),(0,n.Z)(this,"indexStarts",[0]),(0,n.Z)(this,"vertexStarts",[0]),(0,n.Z)(this,"vertexCount",0),(0,n.Z)(this,"instanceCount",0),(0,n.Z)(this,"attributes",void 0),(0,n.Z)(this,"_attributeDefs",void 0),(0,n.Z)(this,"data",void 0),(0,n.Z)(this,"getGeometry",void 0),(0,n.Z)(this,"geometryBuffer",void 0),(0,n.Z)(this,"buffers",void 0),(0,n.Z)(this,"positionSize",void 0),(0,n.Z)(this,"normalize",void 0);const{attributes:e={}}=t;this.typedArrayManager=r.Z,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);const{data:e,buffers:i={},getGeometry:n,geometryBuffer:o,positionFormat:r,dataChanged:l,normalize:a=!0}=this.opts;if(this.data=e,this.getGeometry=n,this.positionSize=o&&o.size||("XY"===r?2:3),this.buffers=i,this.normalize=a,o&&((0,s.Z)(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(o),a||(i.positions=o)),this.geometryBuffer=i.positions,Array.isArray(l))for(const t of l)this._rebuildGeometry(t);else this._rebuildGeometry()}updatePartialGeometry(t){let{startRow:e,endRow:i}=t;this._rebuildGeometry({startRow:e,endRow:i})}getGeometryFromBuffer(t){const e=t.value||t;return ArrayBuffer.isView(e)?(0,o.jr)(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){const{attributes:i,buffers:n,_attributeDefs:o,typedArrayManager:r}=this;for(const s in o)if(s in n)r.release(i[s]),i[s]=null;else{const n=o[s];n.copy=e,i[s]=r.allocate(i[s],t,n)}}_forEachGeometry(t,e,i){const{data:n,getGeometry:r}=this,{iterable:s,objectInfo:l}=(0,o.jB)(n,e,i);for(const e of s)l.index++,t(r?r(e,l):null,l.index)}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:i,instanceCount:n}=this;const{data:o,geometryBuffer:r}=this,{startRow:s=0,endRow:a=1/0}=t||{},c={};if(t||(e=[0],i=[0]),this.normalize||!r)this._forEachGeometry(((t,e)=>{const n=t&&this.normalizeGeometry(t);c[e]=n,i[e+1]=i[e]+(n?this.getGeometrySize(n):0)}),s,a),n=i[i.length-1];else if(i=o.startIndices,n=i[o.length]||0,ArrayBuffer.isView(r))n=n||r.length/this.positionSize;else if(r instanceof l.Z){const t=r.accessor.stride||4*this.positionSize;n=n||r.byteLength/t}else if(r.buffer){const t=r.stride||4*this.positionSize;n=n||r.buffer.byteLength/t}else if(r.value){const t=r.value,e=r.stride/t.BYTES_PER_ELEMENT||this.positionSize;n=n||t.length/e}this._allocate(n,Boolean(t)),this.indexStarts=e,this.vertexStarts=i,this.instanceCount=n;const u={};this._forEachGeometry(((t,o)=>{const r=c[o]||t;u.vertexStart=i[o],u.indexStart=e[o];const s=o<i.length-1?i[o+1]:n;u.geometrySize=s-i[o],u.geometryIndex=o,this.updateGeometryAttributes(r,u)}),s,a),this.vertexCount=e[e.length-1]}}},40245:(t,e,i)=>{i.d(e,{Fv:()=>h,Gd:()=>u,k8:()=>c,mD:()=>v});var n=i(9187),o=i.n(n),r=i(25215);const s=r.wG.CLOCKWISE,l=r.wG.COUNTER_CLOCKWISE,a={isClosed:!0};function c(t){return"positions"in t?t.positions:t}function u(t){return"holeIndices"in t?t.holeIndices:null}function p(t,e,i,n,o){let s=e;const l=i.length;for(let e=0;e<l;e++)for(let o=0;o<n;o++)t[s++]=i[e][o]||0;if(!function(t){const e=t[0],i=t[t.length-1];return e[0]===i[0]&&e[1]===i[1]&&e[2]===i[2]}(i))for(let e=0;e<n;e++)t[s++]=i[0][e]||0;return a.start=e,a.end=s,a.size=n,(0,r.Ny)(t,o,a),s}function g(t,e,i,n,o,s,l){void 0===o&&(o=0);const c=(s=s||i.length)-o;if(c<=0)return e;let u=e;for(let e=0;e<c;e++)t[u++]=i[o+e];if(!function(t,e,i,n){for(let o=0;o<e;o++)if(t[i+o]!==t[n-e+o])return!1;return!0}(i,n,o,s))for(let e=0;e<n;e++)t[u++]=i[o+e];return a.start=e,a.end=u,a.size=n,(0,r.Ny)(t,l,a),u}function h(t,e){!function(t){if(t=t&&t.positions||t,!Array.isArray(t)&&!ArrayBuffer.isView(t))throw new Error("invalid polygon")}(t);const i=[],n=[];if("positions"in t){const{positions:o,holeIndices:r}=t;if(r){let t=0;for(let a=0;a<=r.length;a++)t=g(i,t,o,e,r[a-1],r[a],0===a?s:l),n.push(t);return n.pop(),{positions:i,holeIndices:n}}t=o}if(!function(t){return Array.isArray(t[0])}(t))return g(i,0,t,e,0,i.length,s),i;if(!function(t){return t.length>=1&&t[0].length>=2&&Number.isFinite(t[0][0])}(t)){let o=0;for(const[r,a]of t.entries())o=p(i,o,a,e,0===r?s:l),n.push(o);return n.pop(),{positions:i,holeIndices:n}}return p(i,0,t,e,s),i}function d(t,e,i){const n=t.length/3;let o=0;for(let r=0;r<n;r++){const s=(r+1)%n;o+=t[3*r+e]*t[3*s+i],o-=t[3*s+e]*t[3*r+i]}return Math.abs(o/2)}function f(t,e,i,n){const o=t.length/3;for(let r=0;r<o;r++){const o=3*r,s=t[o+0],l=t[o+1],a=t[o+2];t[o+e]=s,t[o+i]=l,t[o+n]=a}}function v(t,e,i,n){let r=u(t);r&&(r=r.map((t=>t/e)));let s=c(t);const l=n&&3===e;if(i){const t=s.length;s=s.slice();const n=[];for(let o=0;o<t;o+=e){n[0]=s[o],n[1]=s[o+1],l&&(n[2]=s[o+2]);const t=i(n);s[o]=t[0],s[o+1]=t[1],l&&(s[o+2]=t[2])}}if(l){const t=d(s,0,1),e=d(s,0,2),n=d(s,1,2);if(!t&&!e&&!n)return[];t>e&&t>n||(e>n?(i||(s=s.slice()),f(s,0,2,1)):(i||(s=s.slice()),f(s,2,0,1)))}return o()(s,r,e)}},91567:(t,e,i)=>{i.d(e,{Z:()=>w});var n=i(4942),o=i(5259),r=i(37832),s=i(95644),l=i(13717),a=i(33321),c=i(44211),u=i(6948),p=i(39769),g=i(53982),h=i(40245),d=i(44500),f=i(25215);class v extends d.Z{constructor(t){const{fp64:e,IndexType:i=Uint32Array}=t;super({...t,attributes:{positions:{size:3,type:e?Float64Array:Float32Array},vertexValid:{type:Uint8ClampedArray,size:1},indices:{type:i,size:1}}})}get(t){const{attributes:e}=this;return"indices"===t?e.indices&&e.indices.subarray(0,this.vertexCount):e[t]}updateGeometry(t){super.updateGeometry(t);const e=this.buffers.indices;if(e)this.vertexCount=(e.value||e).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(t){if(this.normalize){const e=h.Fv(t,this.positionSize);return this.opts.resolution?(0,f.WZ)(h.k8(e),h.Gd(e),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?(0,f.GU)(h.k8(e),h.Gd(e),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):e}return t}getGeometrySize(t){if(x(t)){let e=0;for(const i of t)e+=this.getGeometrySize(i);return e}return h.k8(t).length/this.positionSize}getGeometryFromBuffer(t){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(t):null}updateGeometryAttributes(t,e){if(t&&x(t))for(const i of t){const t=this.getGeometrySize(i);e.geometrySize=t,this.updateGeometryAttributes(i,e),e.vertexStart+=t,e.indexStart=this.indexStarts[e.geometryIndex+1]}else this._updateIndices(t,e),this._updatePositions(t,e),this._updateVertexValid(t,e)}_updateIndices(t,e){let{geometryIndex:i,vertexStart:n,indexStart:o}=e;const{attributes:r,indexStarts:s,typedArrayManager:l}=this;let a=r.indices;if(!a||!t)return;let c=o;const u=h.mD(t,this.positionSize,this.opts.preproject,this.opts.full3d);a=l.allocate(a,o+u.length,{copy:!0});for(let t=0;t<u.length;t++)a[c++]=u[t]+n;s[i+1]=o+u.length,r.indices=a}_updatePositions(t,e){let{vertexStart:i,geometrySize:n}=e;const{attributes:{positions:o},positionSize:r}=this;if(!o||!t)return;const s=h.k8(t);for(let t=i,e=0;e<n;t++,e++){const i=s[e*r],n=s[e*r+1],l=r>2?s[e*r+2]:0;o[3*t]=i,o[3*t+1]=n,o[3*t+2]=l}}_updateVertexValid(t,e){let{vertexStart:i,geometrySize:n}=e;const{positionSize:o}=this,r=this.attributes.vertexValid,s=t&&h.Gd(t);if(t&&t.edgeTypes?r.set(t.edgeTypes,i):r.fill(1,i,i+n),s)for(let t=0;t<s.length;t++)r[i+s[t]/o-1]=0;r[i+n-1]=0}}function x(t){return Array.isArray(t)&&t.length>0&&!Number.isFinite(t[0])}const y="\nattribute vec2 vertexPositions;\nattribute float vertexValid;\n\nuniform bool extruded;\nuniform bool isWireframe;\nuniform float elevationScale;\nuniform float opacity;\n\nvarying vec4 vColor;\n\nstruct PolygonProps {\n  vec4 fillColors;\n  vec4 lineColors;\n  vec3 positions;\n  vec3 nextPositions;\n  vec3 pickingColors;\n  vec3 positions64Low;\n  vec3 nextPositions64Low;\n  float elevations;\n};\n\nvec3 project_offset_normal(vec3 vector) {\n  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {\n    return normalize(vector * project_uCommonUnitsPerWorldUnit);\n  }\n  return project_normal(vector);\n}\n\nvoid calculatePosition(PolygonProps props) {\n#ifdef IS_SIDE_VERTEX\n  if(vertexValid < 0.5){\n    gl_Position = vec4(0.);\n    return;\n  }\n#endif\n\n  vec3 pos;\n  vec3 pos64Low;\n  vec3 normal;\n  vec4 colors = isWireframe ? props.lineColors : props.fillColors;\n\n  geometry.worldPosition = props.positions;\n  geometry.worldPositionAlt = props.nextPositions;\n  geometry.pickingColor = props.pickingColors;\n\n#ifdef IS_SIDE_VERTEX\n  pos = mix(props.positions, props.nextPositions, vertexPositions.x);\n  pos64Low = mix(props.positions64Low, props.nextPositions64Low, vertexPositions.x);\n#else\n  pos = props.positions;\n  pos64Low = props.positions64Low;\n#endif\n\n  if (extruded) {\n    pos.z += props.elevations * vertexPositions.y * elevationScale;\n  }\n  gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);\n\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  if (extruded) {\n  #ifdef IS_SIDE_VERTEX\n    normal = vec3(\n      props.positions.y - props.nextPositions.y + (props.positions64Low.y - props.nextPositions64Low.y),\n      props.nextPositions.x - props.positions.x + (props.nextPositions64Low.x - props.positions64Low.x),\n      0.0);\n    normal = project_offset_normal(normal);\n  #else\n    normal = project_normal(vec3(0.0, 0.0, 1.0));\n  #endif\n    geometry.normal = normal;\n    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);\n    vColor = vec4(lightColor, colors.a * opacity);\n  } else {\n    vColor = vec4(colors.rgb, colors.a * opacity);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",m="#define SHADER_NAME solid-polygon-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 positions64Low;\nattribute float elevations;\nattribute vec4 fillColors;\nattribute vec4 lineColors;\nattribute vec3 pickingColors;\n\n".concat(y,"\n\nvoid main(void) {\n  PolygonProps props;\n\n  props.positions = positions;\n  props.positions64Low = positions64Low;\n  props.elevations = elevations;\n  props.fillColors = fillColors;\n  props.lineColors = lineColors;\n  props.pickingColors = pickingColors;\n\n  calculatePosition(props);\n}\n"),_="#define SHADER_NAME solid-polygon-layer-vertex-shader-side\n#define IS_SIDE_VERTEX\n\n\nattribute vec3 instancePositions;\nattribute vec3 nextPositions;\nattribute vec3 instancePositions64Low;\nattribute vec3 nextPositions64Low;\nattribute float instanceElevations;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\n".concat(y,"\n\nvoid main(void) {\n  PolygonProps props;\n\n  #if RING_WINDING_ORDER_CW == 1\n    props.positions = instancePositions;\n    props.positions64Low = instancePositions64Low;\n    props.nextPositions = nextPositions;\n    props.nextPositions64Low = nextPositions64Low;\n  #else\n    props.positions = nextPositions;\n    props.positions64Low = nextPositions64Low;\n    props.nextPositions = instancePositions;\n    props.nextPositions64Low = instancePositions64Low;\n  #endif\n  props.elevations = instanceElevations;\n  props.fillColors = instanceFillColors;\n  props.lineColors = instanceLineColors;\n  props.pickingColors = instancePickingColors;\n\n  calculatePosition(props);\n}\n"),L=[0,0,0,255],C={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:t=>t.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:L},getLineColor:{type:"accessor",value:L},material:!0},b={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class w extends o.Z{constructor(){super(...arguments),(0,n.Z)(this,"state",void 0)}getShaders(t){return super.getShaders({vs:"top"===t?m:_,fs:"#define SHADER_NAME solid-polygon-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",defines:{RING_WINDING_ORDER_CW:this.props._normalize||"CCW"!==this.props._windingOrder?1:0},modules:[r.Z,s.N,l.Z]})}get wrapLongitude(){return!1}initializeState(){const{gl:t,viewport:e}=this.context;let{coordinateSystem:i}=this.props;const{_full3d:n}=this.props;let o;e.isGeospatial&&i===a.Df.DEFAULT&&(i=a.Df.LNGLAT),i===a.Df.LNGLAT&&(o=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new v({preproject:o,fp64:this.use64bitPositions(),IndexType:!t||(0,c.ag)(t,u.h.ELEMENT_INDEX_UINT32)?Uint32Array:Uint16Array})});const r=this.getAttributeManager(),s=!0;r.remove(["instancePickingColors"]),r.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:s},positions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:b,accessor:"getPolygon",update:this.calculatePositions,noAlloc:s,shaderAttributes:{positions:{vertexOffset:0,divisor:0},instancePositions:{vertexOffset:0,divisor:1},nextPositions:{vertexOffset:1,divisor:1}}},vertexValid:{size:1,divisor:1,type:5121,update:this.calculateVertexValid,noAlloc:s},elevations:{size:1,transition:b,accessor:"getElevation",shaderAttributes:{elevations:{divisor:0},instanceElevations:{divisor:1}}},fillColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:b,accessor:"getFillColor",defaultValue:L,shaderAttributes:{fillColors:{divisor:0},instanceFillColors:{divisor:1}}},lineColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,transition:b,accessor:"getLineColor",defaultValue:L,shaderAttributes:{lineColors:{divisor:0},instanceLineColors:{divisor:1}}},pickingColors:{size:3,type:5121,accessor:(t,e)=>{let{index:i,target:n}=e;return this.encodePickingColor(t&&t.__source?t.__source.index:i,n)},shaderAttributes:{pickingColors:{divisor:0},instancePickingColors:{divisor:1}}}})}getPickingInfo(t){const e=super.getPickingInfo(t),{index:i}=e,{data:n}=this.props;return n[0]&&n[0].__source&&(e.object=n.find((t=>t.__source.index===i))),e}disablePickingIndex(t){const{data:e}=this.props;if(e[0]&&e[0].__source)for(let i=0;i<e.length;i++)e[i].__source.index===t&&this._disablePickingIndex(i);else super.disablePickingIndex(t)}draw(t){let{uniforms:e}=t;const{extruded:i,filled:n,wireframe:o,elevationScale:r}=this.props,{topModel:s,sideModel:l,polygonTesselator:a}=this.state,c={...e,extruded:Boolean(i),elevationScale:r};l&&(l.setInstanceCount(a.instanceCount-1),l.setUniforms(c),o&&(l.setDrawMode(3),l.setUniforms({isWireframe:!0}).draw()),n&&(l.setDrawMode(6),l.setUniforms({isWireframe:!1}).draw())),s&&(s.setVertexCount(a.vertexCount),s.setUniforms(c).draw())}updateState(t){super.updateState(t),this.updateGeometry(t);const{props:e,oldProps:i,changeFlags:n}=t,o=this.getAttributeManager();var r;(n.extensionsChanged||e.filled!==i.filled||e.extruded!==i.extruded)&&(null===(r=this.state.models)||void 0===r||r.forEach((t=>t.delete())),this.setState(this._getModels(this.context.gl)),o.invalidateAll())}updateGeometry(t){let{props:e,oldProps:i,changeFlags:n}=t;if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){const{polygonTesselator:t}=this.state,i=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:i.getPolygon,buffers:i,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(t){const{id:e,filled:i,extruded:n}=this.props;let o,r;if(i){const i=this.getShaders("top");i.defines.NON_INSTANCED_MODEL=1,o=new p.Z(t,{...i,id:"".concat(e,"-top"),drawMode:4,attributes:{vertexPositions:new Float32Array([0,1])},uniforms:{isWireframe:!1,isSideVertex:!1},vertexCount:0,isIndexed:!0})}return n&&(r=new p.Z(t,{...this.getShaders("side"),id:"".concat(e,"-side"),geometry:new g.Z({drawMode:1,vertexCount:4,attributes:{vertexPositions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),instanceCount:0,isInstanced:1}),r.userData.excludeAttributes={indices:!0}),{models:[r,o].filter(Boolean),topModel:o,sideModel:r}}calculateIndices(t){const{polygonTesselator:e}=this.state;t.startIndices=e.indexStarts,t.value=e.get("indices")}calculatePositions(t){const{polygonTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateVertexValid(t){t.value=this.state.polygonTesselator.get("vertexValid")}}(0,n.Z)(w,"defaultProps",C),(0,n.Z)(w,"layerName","SolidPolygonLayer")},9187:t=>{function e(t,e,n){n=n||2;var r,s,l,a,p,g,d,f=e&&e.length,v=f?e[0]*n:t.length,x=i(t,0,v,n,!0),y=[];if(!x||x.next===x.prev)return y;if(f&&(x=function(t,e,n,o){var r,s,l,a=[];for(r=0,s=e.length;r<s;r++)(l=i(t,e[r]*o,r<s-1?e[r+1]*o:t.length,o,!1))===l.next&&(l.steiner=!0),a.push(h(l));for(a.sort(c),r=0;r<a.length;r++)n=u(a[r],n);return n}(t,e,x,n)),t.length>80*n){r=l=t[0],s=a=t[1];for(var m=n;m<v;m+=n)(p=t[m])<r&&(r=p),(g=t[m+1])<s&&(s=g),p>l&&(l=p),g>a&&(a=g);d=0!==(d=Math.max(l-r,a-s))?32767/d:0}return o(x,y,n,r,s,d,0),y}function i(t,e,i,n,o){var r,s;if(o===S(t,e,i,n)>0)for(r=e;r<i;r+=n)s=b(r,t[r],t[r+1],s);else for(r=i-n;r>=e;r-=n)s=b(r,t[r],t[r+1],s);return s&&x(s,s.next)&&(w(s),s=s.next),s}function n(t,e){if(!t)return t;e||(e=t);var i,n=t;do{if(i=!1,n.steiner||!x(n,n.next)&&0!==v(n.prev,n,n.next))n=n.next;else{if(w(n),(n=e=n.prev)===n.next)break;i=!0}}while(i||n!==e);return e}function o(t,e,i,c,u,p,h){if(t){!h&&p&&function(t,e,i,n){var o=t;do{0===o.z&&(o.z=g(o.x,o.y,e,i,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,function(t){var e,i,n,o,r,s,l,a,c=1;do{for(i=t,t=null,r=null,s=0;i;){for(s++,n=i,l=0,e=0;e<c&&(l++,n=n.nextZ);e++);for(a=c;l>0||a>0&&n;)0!==l&&(0===a||!n||i.z<=n.z)?(o=i,i=i.nextZ,l--):(o=n,n=n.nextZ,a--),r?r.nextZ=o:t=o,o.prevZ=r,r=o;i=n}r.nextZ=null,c*=2}while(s>1)}(o)}(t,c,u,p);for(var d,f,v=t;t.prev!==t.next;)if(d=t.prev,f=t.next,p?s(t,c,u,p):r(t))e.push(d.i/i|0),e.push(t.i/i|0),e.push(f.i/i|0),w(t),t=f.next,v=f.next;else if((t=f)===v){h?1===h?o(t=l(n(t),e,i),e,i,c,u,p,2):2===h&&a(t,e,i,c,u,p):o(n(t),e,i,c,u,p,1);break}}}function r(t){var e=t.prev,i=t,n=t.next;if(v(e,i,n)>=0)return!1;for(var o=e.x,r=i.x,s=n.x,l=e.y,a=i.y,c=n.y,u=o<r?o<s?o:s:r<s?r:s,p=l<a?l<c?l:c:a<c?a:c,g=o>r?o>s?o:s:r>s?r:s,h=l>a?l>c?l:c:a>c?a:c,f=n.next;f!==e;){if(f.x>=u&&f.x<=g&&f.y>=p&&f.y<=h&&d(o,l,r,a,s,c,f.x,f.y)&&v(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function s(t,e,i,n){var o=t.prev,r=t,s=t.next;if(v(o,r,s)>=0)return!1;for(var l=o.x,a=r.x,c=s.x,u=o.y,p=r.y,h=s.y,f=l<a?l<c?l:c:a<c?a:c,x=u<p?u<h?u:h:p<h?p:h,y=l>a?l>c?l:c:a>c?a:c,m=u>p?u>h?u:h:p>h?p:h,_=g(f,x,e,i,n),L=g(y,m,e,i,n),C=t.prevZ,b=t.nextZ;C&&C.z>=_&&b&&b.z<=L;){if(C.x>=f&&C.x<=y&&C.y>=x&&C.y<=m&&C!==o&&C!==s&&d(l,u,a,p,c,h,C.x,C.y)&&v(C.prev,C,C.next)>=0)return!1;if(C=C.prevZ,b.x>=f&&b.x<=y&&b.y>=x&&b.y<=m&&b!==o&&b!==s&&d(l,u,a,p,c,h,b.x,b.y)&&v(b.prev,b,b.next)>=0)return!1;b=b.nextZ}for(;C&&C.z>=_;){if(C.x>=f&&C.x<=y&&C.y>=x&&C.y<=m&&C!==o&&C!==s&&d(l,u,a,p,c,h,C.x,C.y)&&v(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=L;){if(b.x>=f&&b.x<=y&&b.y>=x&&b.y<=m&&b!==o&&b!==s&&d(l,u,a,p,c,h,b.x,b.y)&&v(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function l(t,e,i){var o=t;do{var r=o.prev,s=o.next.next;!x(r,s)&&y(r,o,o.next,s)&&L(r,s)&&L(s,r)&&(e.push(r.i/i|0),e.push(o.i/i|0),e.push(s.i/i|0),w(o),w(o.next),o=t=s),o=o.next}while(o!==t);return n(o)}function a(t,e,i,r,s,l){var a=t;do{for(var c=a.next.next;c!==a.prev;){if(a.i!==c.i&&f(a,c)){var u=C(a,c);return a=n(a,a.next),u=n(u,u.next),o(a,e,i,r,s,l,0),void o(u,e,i,r,s,l,0)}c=c.next}a=a.next}while(a!==t)}function c(t,e){return t.x-e.x}function u(t,e){var i=function(t,e){var i,n=e,o=t.x,r=t.y,s=-1/0;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){var l=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(l<=o&&l>s&&(s=l,i=n.x<n.next.x?n:n.next,l===o))return i}n=n.next}while(n!==e);if(!i)return null;var a,c=i,u=i.x,g=i.y,h=1/0;n=i;do{o>=n.x&&n.x>=u&&o!==n.x&&d(r<g?o:s,r,u,g,r<g?s:o,r,n.x,n.y)&&(a=Math.abs(r-n.y)/(o-n.x),L(n,t)&&(a<h||a===h&&(n.x>i.x||n.x===i.x&&p(i,n)))&&(i=n,h=a)),n=n.next}while(n!==c);return i}(t,e);if(!i)return e;var o=C(i,t);return n(o,o.next),n(i,i.next)}function p(t,e){return v(t.prev,t,e.prev)<0&&v(e.next,t,t.next)<0}function g(t,e,i,n,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function h(t){var e=t,i=t;do{(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next}while(e!==t);return i}function d(t,e,i,n,o,r,s,l){return(o-s)*(e-l)>=(t-s)*(r-l)&&(t-s)*(n-l)>=(i-s)*(e-l)&&(i-s)*(r-l)>=(o-s)*(n-l)}function f(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&y(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}(t,e)&&(L(t,e)&&L(e,t)&&function(t,e){var i=t,n=!1,o=(t.x+e.x)/2,r=(t.y+e.y)/2;do{i.y>r!=i.next.y>r&&i.next.y!==i.y&&o<(i.next.x-i.x)*(r-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==t);return n}(t,e)&&(v(t.prev,t,e.prev)||v(t,e.prev,e))||x(t,e)&&v(t.prev,t,t.next)>0&&v(e.prev,e,e.next)>0)}function v(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function x(t,e){return t.x===e.x&&t.y===e.y}function y(t,e,i,n){var o=_(v(t,e,i)),r=_(v(t,e,n)),s=_(v(i,n,t)),l=_(v(i,n,e));return o!==r&&s!==l||!(0!==o||!m(t,i,e))||!(0!==r||!m(t,n,e))||!(0!==s||!m(i,t,n))||!(0!==l||!m(i,e,n))}function m(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function _(t){return t>0?1:t<0?-1:0}function L(t,e){return v(t.prev,t,t.next)<0?v(t,e,t.next)>=0&&v(t,t.prev,e)>=0:v(t,e,t.prev)<0||v(t,t.next,e)<0}function C(t,e){var i=new P(t.i,t.x,t.y),n=new P(e.i,e.x,e.y),o=t.next,r=e.prev;return t.next=e,e.prev=t,i.next=o,o.prev=i,n.next=i,i.prev=n,r.next=n,n.prev=r,n}function b(t,e,i,n){var o=new P(t,e,i);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function w(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function P(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S(t,e,i,n){for(var o=0,r=e,s=i-n;r<i;r+=n)o+=(t[s]-t[r])*(t[r+1]+t[s+1]),s=r;return o}t.exports=e,t.exports.default=e,e.deviation=function(t,e,i,n){var o=e&&e.length,r=o?e[0]*i:t.length,s=Math.abs(S(t,0,r,i));if(o)for(var l=0,a=e.length;l<a;l++){var c=e[l]*i,u=l<a-1?e[l+1]*i:t.length;s-=Math.abs(S(t,c,u,i))}var p=0;for(l=0;l<n.length;l+=3){var g=n[l]*i,h=n[l+1]*i,d=n[l+2]*i;p+=Math.abs((t[g]-t[d])*(t[h+1]-t[g+1])-(t[g]-t[h])*(t[d+1]-t[g+1]))}return 0===s&&0===p?0:Math.abs((p-s)/s)},e.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},n=0,o=0;o<t.length;o++){for(var r=0;r<t[o].length;r++)for(var s=0;s<e;s++)i.vertices.push(t[o][r][s]);o>0&&(n+=t[o-1].length,i.holes.push(n))}return i}}}]);
//# sourceMappingURL=899517fd62d084d3de3d.chunk.js.map