(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9011],{7167:function(){var e=["__edgedbsys__","__edgedbtpl__","__new__","__old__","__source__","__specified__","__std__","__subject__","__type__","administer","alter","analyze","and","anyarray","anyobject","anytuple","anytype","begin","by","case","check","commit","configure","create","deallocate","delete","describe","detached","discard","distinct","do","drop","else","end","except","exists","explain","extending","fetch","filter","for","get","global","grant","group","if","ilike","import","in","insert","intersect","introspect","is","like","limit","listen","load","lock","match","module","move","never","not","notify","offset","on","optional","or","over","partition","prepare","raise","refresh","revoke","rollback","select","set","single","start","typeof","union","update","variadic","when","window","with"].concat(["abort","abstract","access","after","alias","allow","annotation","applied","as","asc","assignment","before","cardinality","cast","committed","config","conflict","constraint","cube","current","database","ddl","declare","default","deferrable","deferred","delegated","deny","desc","each","empty","expression","extension","final","first","from","function","future","implicit","index","infix","inheritable","instance","into","isolation","json","last","link","migration","multi","object","of","only","onto","operator","optionality","order","orphan","overloaded","owned","package","policy","populate","postfix","prefix","property","proposed","pseudo","read","reject","release","rename","required","reset","restrict","rewrite","role","roles","rollup","savepoint","scalar","schema","sdl","serializable","session","source","superuser","system","target","ternary","then","to","transaction","trigger","type","unless","using","verbose","version","view","write"]),n=["Base64Alphabet","BaseObject","ElasticLanguage","FreeObject","JsonEmpty","Language","LuceneLanguage","Object","PGLanguage","Weight","anycontiguous","anydiscrete","anyenum","anyfloat","anyint","anynumeric","anypoint","anyreal","anyscalar","anytype","array","bigint","bool","bytes","date_duration","datetime","decimal","document","duration","enum","float32","float64","int16","int32","int64","json","local_date","local_datetime","local_time","multirange","range","relative_duration","sequence","str","tuple","uuid"],t=["Base64Alphabet","BaseObject","ElasticLanguage","FreeObject","JsonEmpty","Language","LuceneLanguage","Object","PGLanguage","Weight","anycontiguous","anydiscrete","anyenum","anyfloat","anyint","anynumeric","anypoint","anyreal","anyscalar","anytype","array","bigint","bool","bytes","date_duration","datetime","decimal","document","duration","enum","exclusive","expression","float32","float64","int16","int32","int64","json","len_value","local_date","local_datetime","local_time","max_ex_value","max_len_value","max_value","min_ex_value","min_len_value","min_value","multirange","one_of","range","regexp","relative_duration","sequence","str","tuple","uuid"],r=t.concat(["abs","adjacent","any","array_agg","array_fill","array_get","array_join","array_replace","array_unpack","assert","assert_distinct","assert_exists","assert_single","bit_and","bit_lshift","bit_not","bit_or","bit_rshift","bit_xor","bounded_above","bounded_below","bytes_get_bit","ceil","contains","count","date_get","datetime_current","datetime_get","datetime_of_statement","datetime_of_transaction","datetime_truncate","duration_get","duration_normalize_days","duration_normalize_hours","duration_to_seconds","duration_truncate","enumerate","find","floor","get_current_database","get_instance_name","get_transaction_isolation","get_version","get_version_as_str","json_array_unpack","json_get","json_object_pack","json_object_unpack","json_set","json_typeof","len","lg","ln","log","max","mean","min","multirange_unpack","overlaps","random","range_get_lower","range_get_upper","range_is_empty","range_is_inclusive_lower","range_is_inclusive_upper","range_unpack","re_match","re_match_all","re_replace","re_test","round","search","sequence_next","sequence_reset","sqrt","stddev","stddev_pop","str_lower","str_lpad","str_ltrim","str_pad_end","str_pad_start","str_repeat","str_replace","str_reverse","str_rpad","str_rtrim","str_split","str_title","str_trim","str_trim_end","str_trim_start","str_upper","strictly_above","strictly_below","sum","time_get","to_bigint","to_bytes","to_date_duration","to_datetime","to_decimal","to_duration","to_float32","to_float64","to_int16","to_int32","to_int64","to_json","to_local_date","to_local_datetime","to_local_time","to_relative_duration","to_str","uuid_generate_v1mc","uuid_generate_v4","var","var_pop","with_options"]),a=["false","true"],o={comment:/#.*/,string:[{pattern:/b(['"])(?:\\['"]|[\n\r]|.)*?\1/,greedy:!0,inside:{valuetype:/^b(?=['"])/,escaped:[/\\[\\'"bfnrt]/,/\\x[0-9a-fA-F]{2}/]}},{pattern:/r(['"])(?:\\['"]|[\n\r]|.)*?\1/,greedy:!0,inside:{valuetype:/^r(?=['"])/}},{pattern:/(['"])(?:\\['"]|[\n\r]|.)*?\1/,greedy:!0,inside:{escaped:[/\\(?=\s*\n)/,/\\[\\'"bfnrt]/,/\\x[0-7][0-9a-fA-F]/,/\\u[0-9a-fA-F]{4}/,/\\U[0-9a-fA-F]{8}/]}},{pattern:/(\$([A-Za-z\200-\377_][0-9]*)*\$)(?:[\n\r]|.)*?\1/,greedy:!0}],code:/`.+?`|\.<|\.>/,number:[{pattern:/(\W)(\d(?:_*\d)*(?:\.\d(?:_*\d)*)?(?:[eE](?:[+\-])?\d(?:_*\d)*))n?/,lookbehind:!0,inside:{valuetype:/[n]/}},{pattern:/(\W)(\d(?:_*\d)*\.\d(?:_*\d)*)n?/,lookbehind:!0,inside:{valuetype:/[n]/}},{pattern:/(\W)\d(?:_*\d)*n?/,lookbehind:!0,inside:{valuetype:/[n]/}}],definition:{pattern:/:=|->/,alias:"punctuation"},boolean:RegExp("\\b(?:"+a.join("|")+")\\b","i"),builtin:RegExp("\\b(?:"+t.join("|")+")\\b")};Prism.languages.edgeql=Object.assign({},o,{operator:RegExp("\\!\\=|\\%|\\*|\\+|\\+\\+|\\-|\\/|\\/\\/|\\<|\\<\\=|\\=|\\>|\\>\\=|\\?\\!\\=|\\?\\=|\\?\\?|\\^"),linkprop:/@\w+/,variable:/\$[\w\d]+/,keyword:RegExp("\\b(?:(?:named\\s+only)|(?:as\\s+text)|(?:all(?!\\s*\\())|"+e.join("|")+")\\b","i"),builtin:RegExp("\\b(?:(?:all(?=\\s*\\())|"+r.join("|")+")\\b")}),Prism.languages.sdl=Prism.languages.edgeql,Prism.languages["edgeql-synopsis"]=Object.assign({},{"synopsis-text":{pattern:/#([^\n]*)/,greedy:!0,inside:{"synopsis-placeholder":/<[\w\-]+>/}},"synopsis-placeholder":/<[\w\-]+>/,string:{pattern:/(['"])(?:\\['"]|[\n\r]|.)*?\1/,greedy:!0},optional:[/\[|\]|\{|\}/,/\.\.\./,/,/],group:/[{}|]/},{keyword:RegExp("\\b(?:[A-Z]{2,})\\b","i")}),Prism.languages["sdl-synopsis"]=Prism.languages["edgeql-synopsis"],Prism.languages["cli-synopsis"]=Prism.languages["edgeql-synopsis"];var i={type:[RegExp("\\b(?:"+n.join("|")+")\\b(?!:)"),/\\b(?:anytype)\\b(?!:)/],"module-prefix":{pattern:/[\w]+::/,greedy:!0,inside:{module:/[\w]+/,modseparator:/::/}}};Prism.languages.eql_function={"module-prefix":i["module-prefix"],funcname:/[\w]+(?=\()/,funcparams:{pattern:/\(.*(?=\)\s*->)/,greedy:!0,inside:{parenthesis:/\(/,funcarg:{pattern:/\w[^:]*:\s[^,]*?(,\s*|$)/,inside:{string:o.string,number:o.number,boolean:RegExp("\\b(?:"+a.join("|")+")\\b","i"),keyword:RegExp("\\b(?:variadic|named only|set of|optional)\\b","i"),equals:/=/,type:i.type,composite:/[<>]/,"module-prefix":i["module-prefix"],argname:/[\w]+/}}}},funcreturn:{pattern:/\)\s*->.*/,greedy:!0,inside:{parenthesis:/\)/,return:/->/,type:i.type,composite:/[<>]/,keyword:RegExp("\\b(?:variadic|named only|set of|optional)\\b","i")}}};var s={qual:"variadic|named only|set of|optional",type:n.join("|")+"|anytype|set|to|pattern|dt|i|name|val"};Prism.languages.eql_operator={opdecl:{pattern:/[\w]+:(?!:)/,inside:{opname:/[\w]+/,colon:/:/}},opparam:{pattern:RegExp("\\b(("+s.qual+")\\s*)?("+s.type+"|type)\\b(\\<[^-\\s]+\\>(?=\\s))?","i"),greedy:!0,inside:{keyword:RegExp("\\b(?:"+s.qual+")\\b","i"),generictype:/\btype\b/,type:RegExp("\\b(?:"+s.type+")\\b"),composite:/[<>]/}},opreturn:{pattern:/->.*/,greedy:!0,inside:{return:/->/,"module-prefix":i["module-prefix"],type:i.type,composite:/[<>]/,keyword:RegExp("\\b(?:"+s.qual+")\\b","i")}},"module-prefix":i["module-prefix"],oppsymbol:/\S+/}},3170:function(e,n,t){"use strict";t.d(n,{EK:function(){return N},SG:function(){return v},p1:function(){return p()}});var r,a=t(7812),o=t(9499),i=t(6835),s=t(4730),l=t(9134),c=t(7282),p=t.n(c),d=t(3311),u=t.n(d),_=t(7378),g=t(272),y=t(4246),f=["className","children"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach(function(n){(0,o.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function h(e){var n,t=e.className,r=e.children,a=(0,s.Z)(e,f),i=(0,_.useState)(!0),c=i[0],p=i[1],d=(0,_.useRef)(null);return(0,y.jsxs)("div",b(b({className:(0,l.Z)(t,(n={},(0,o.Z)(n,u().collapsed,c),(0,o.Z)(n,u().expanded,!c),n)),ref:d},a),{},{children:[r,(0,y.jsxs)("div",{className:u().showMore,onClick:function(){if(p(!c),!c){var e=d.current;if(e){for(var n=e.offsetTop,t=e;t.offsetParent;)n+=(t=t.offsetParent).offsetTop;n<window.pageYOffset&&e.scrollIntoView()}}},children:[c?"Show more":"Show less",(0,y.jsx)(g.XA,{})]})]}))}function v(e){var n=e.code,t=e.className,r=(0,_.useState)(!1),a=r[0],o=r[1],i=(0,_.useRef)();return(0,y.jsx)("div",{className:(0,l.Z)(u().copyCode,t),onClick:function(){var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(n),i.current&&clearTimeout(i.current),o(!0),i.current=setTimeout(function(){return o(!1)},2e3)},children:a?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.vo,{className:u().copiedIcon}),(0,y.jsx)("span",{className:u().copiedLabel,children:"Copied!"})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.TI,{}),(0,y.jsx)("span",{className:u().copyLabel,children:"Copy"})]})})}var j=["code","language","className","linesBeforeCollapse","collapsible","inline","noCopy","noBashMode","allowCopyOverlap","showLineNumbers","caption"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach(function(n){(0,o.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function O(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return P(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,void 0)}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var k=!1;function L(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t(119);var E=((r=E||{})[r.BeforeQuery=0]="BeforeQuery",r[r.InQuery=1]="InQuery",r[r.InSubshell=2]="InSubshell",r);function C(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=L;if(n&&(a=function(e){return p().highlight(e,n,t)}),r)return a(e);var o,i=function(e){var n,t=[{type:"normal",str:""}],r=function(){return t[t.length-1].type},a=O(e.split(/\n/g));try{for(a.s();!(n=a.n()).done;){var o,i=n.value,s=i.match(/^\s*#\s*<(\/?)(\w+)>\s*$/);s?"/"===s[1]?(r()!==s[2]&&console.error("closing #</"+s[2]+"> code section does not match opening #<"+r()+">"),t.push({type:"normal",str:""})):("normal"!==r()&&console.error("nested #</"+s[2]+"> are not supported"),["new","changed"].includes(s[2])||console.error("unsupported code section name <".concat(s[2],">; ")+"expected <new> or <changed>"),t.push({type:s[2],str:""})):(o=i+"\n",t[t.length-1].str+=o)}}catch(e){a.e(e)}finally{a.f()}return t[t.length-1].str=t[t.length-1].str.replace(/\n$/,""),t}(e),s=[],l=O(i);try{for(l.s();!(o=l.n()).done;){var c=o.value,d=a(c.str);d='<span class="tokens tokens-'.concat(c.type,'">').concat(d,"</span>"),s.push(d)}}catch(e){l.e(e)}finally{l.f()}return s.join("")}function N(e){var n=e.code,t=e.language,r=e.className,c=e.linesBeforeCollapse,d=void 0===c?12:c,_=e.collapsible,g=e.inline,f=e.noCopy,m=e.noBashMode,b=e.allowCopyOverlap,v=e.showLineNumbers,x=e.caption,P=(0,s.Z)(e,j),k=!1,L=!1;if(t.includes("-")){var N=t.split("-",2),q=(0,i.Z)(N,2),B=q[0],I=q[1];"repl"===I?(k=!0,t=B):"diff"===I?(L=!0,t=B):"invalid"===I?t=B:"runnable"===I&&(t=B)}else"pycon"==t?(k=!0,t="python"):"iex"==t&&(k=!0,t="elixir");var Z=p().languages[t],T=Z?"code-language-".concat(t):void 0;if(g){var D=C(n,Z,t,g);return(0,y.jsx)("span",w(w({className:(0,l.Z)(u().code,u().inline,T,r)},P),{},{dangerouslySetInnerHTML:{__html:D},translate:"no"}))}var A=!m&&("bash"===t||"powershell"===t||k&&"elixir"===t)?t:null,W=!(f||"default"===t||t.includes("synopsis")),Q=n.split("\n"),R=Math.max.apply(Math,(0,a.Z)(Q.map(function(e){return e.length}))),$=Q.length,F=[];if(L){var M=[];if(n=Q.map(function(e,n){switch(e.slice(0,2).padEnd(2," ")){case"+ ":case"- ":F.push("+"===e[0]?"p":"m");break;case"  ":F.push(void 0);break;default:""===e.trim()?F.push(void 0):M.push("diff line ".concat(n+1," does not start with '+ ', '- ', or '  '"))}return e.slice(2)}).join("\n"),M.length){var H=Q.length.toString().length;console.warn("Diff warnings in code block:\n".concat(Q.map(function(e,n){return"".concat((n+1).toString().padStart(H," ")," ").concat(e)}).join("\n"),"\n").concat(M.join("\n")))}}var z=[];if(k||A){var G,K,U=function(e,n){for(var t=[],r=E.BeforeQuery,a=e.split("\n"),o={repl:/([\w\[:\]>]+>\s)(.*)/,bash:/(.*\$\s)(.*)/,powershell:/(PS>\s)(.*)/,elixir:/(iex\(\d+\)>\s)(.*)/}[n],i={repl:/(\.+\s)(.*)/,bash:/([>\s]\s)?(.*)/,powershell:/([>\s]\s)?(.*)/,elixir:/(\.{3}\(\d+\)>\s)(.*)/}[n],s=0;s<a.length;s++){var l=a[s];if(r===E.BeforeQuery){var c=o.exec(l);if(c)"repl"===n||"elixir"===n||l.endsWith("\\")?r=E.InQuery:"bash"===n&&l.endsWith("$(")&&(r=E.InSubshell),t.push({promptLines:[],queryLines:[],outLines:[]}),t[t.length-1].promptLines.push(c[1]),t[t.length-1].queryLines.push(c[2]);else{if(!t.length){console.warn('invalid "code-block: '.concat(n,'" (output before query): ')+JSON.stringify(e));continue}t[t.length-1].outLines.push(l)}}else if(r===E.InQuery||r===E.InSubshell){var p,d=i.exec(l);if(d)t[t.length-1].promptLines.push(d[1]),t[t.length-1].queryLines.push(d[2]);else if("repl"===n||"elixir"===n){r=E.BeforeQuery,s--;continue}r===E.InSubshell&&/^\s*\)/.test(null!==(p=null==d?void 0:d[2])&&void 0!==p?p:"")&&(r=E.InQuery),"bash"===n&&l.endsWith("$(")?r=E.InSubshell:r!==E.InQuery||"repl"===n||"elixir"===n||l.endsWith("\\")||(r=E.BeforeQuery)}}return t}(n,null!=A?A:"repl"),Y=0,J=O(U);try{for(J.s();!(K=J.n()).done;){var V=K.value,X=V.promptLines,ee=V.queryLines,en=V.outLines,et=ee.join("\n"),er=C(et,Z,t,!1);z.push((0,y.jsxs)("div",{className:(0,l.Z)(u().highlightWrapper,(0,o.Z)({},u().hasCopyButton,W)),children:[W?S(et,b?"":X[0]+ee[0]):null,(0,y.jsxs)("div",{className:u().block,translate:"no",children:[(0,y.jsxs)("div",{className:(0,l.Z)(u().codePart,T),children:[(0,y.jsx)("pre",{children:X.join("\n")}),(0,y.jsx)("pre",{dangerouslySetInnerHTML:{__html:er}})]}),(0,y.jsx)("div",{className:u().outPart,children:(0,y.jsx)("pre",{children:en.join("\n")})})]})]},Y++))}}catch(e){J.e(e)}finally{J.f()}}else{var ea=C(n,Z,t,g),eo=L?n.split("\n").filter(function(e,n){return"m"!=F[n]}).join("\n"):n;z.push((0,y.jsxs)("div",{className:(0,l.Z)(u().highlightWrapper,(0,o.Z)({},u().hasCopyButton,W)),children:[W?S(eo,b?"":eo.split("\n",1)[0]):null,L?(0,y.jsx)("div",{className:u().diffLines,children:F.map(function(e,n){return(0,y.jsx)("div",{className:u()[e]},n)})}):null,(0,y.jsxs)("div",{className:u().block,translate:"no",children:[v?(0,y.jsx)("pre",{className:u().lineNumbers,children:n.split("\n").map(function(e,n){return n+1}).join("\n")}):null,(0,y.jsx)("pre",{dangerouslySetInnerHTML:{__html:ea}})]})]},"loneBlock"))}return(0,y.jsxs)(void 0!==_&&_&&$>d?h:"div",w(w({className:(0,l.Z)(u().code,T,r,(G={},(0,o.Z)(G,u().repl,k||!!A),(0,o.Z)(G,u().showHighlight,W&&z.length>1),(0,o.Z)(G,u().scrollDisabled,!1),G)),style:{"--maxLineLength":R,"--code-max-height":d}},P),{},{children:[x&&(0,y.jsx)("span",{className:(0,l.Z)(u().caption),children:x}),z]}))}function S(e,n){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:u().copyCodeButtonWrapper,children:(0,y.jsx)(v,{code:e})}),!1]})}},119:function(e,n,t){"use strict";t.r(n),t(8206),t(3432),t(7920),t(247),t(5288),t(3674),t(5094),t(5081),t(522),t(2531),t(2467),t(6170),t(6888),t(9768),t(3594),t(8764),t(1667),t(6572),t(551),t(822),t(7391),t(1164),t(382),t(5551),t(8650),t(3156),t(3358),t(6761),t(7167),t(2245)},2245:function(e,n,t){var r=t(968);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}Prism.languages["graphql-schema"]=Prism.languages.graphql,Prism.languages.json.comment=/\/\/.*/,Prism.hooks.add("wrap",function(e){"synopsis-placeholder"==e.type?e.content=e.content.replace(/^&lt;|>$/g,""):"synopsis-text"==e.type&&(e.content=e.content.replace(/^#\s+/,""))}),Prism.languages.python_function={"module-prefix":{pattern:/[\w]+\./,greedy:!0,inside:{module:/[\w]+/,modseparator:/\./}},funcname:/[\w]+/,funcparams:{pattern:/\(.*(?=\))/,greedy:!0,inside:{parenthesis:/\(/,funcarg:{pattern:/[^,)]*(,\s*|$)/,inside:{boolean:Prism.languages.python.boolean,number:Prism.languages.python.number,string:[Prism.languages.python["triple-quoted-string"],Prism.languages.python.string],keyword:/\*{1,2}/,equals:/=/,argname:/[\w]+/}}}},funcreturn:{pattern:/\)\s*->.*$/,greedy:!0,inside:{parenthesis:/\)/,return:/->/,type:/\w+/}}},Prism.languages.js_function={"module-prefix":{pattern:/[\w]+\./,greedy:!0,inside:{module:/[\w]+/,modseparator:/\./}},funcname:/[\w]+/,funcparams:{pattern:/\(.*(?=\))/,greedy:!0,inside:{parenthesis:/\(/,funcarg:{pattern:/[^,)]*(,\s*|$)/,inside:{boolean:Prism.languages.js.boolean,number:Prism.languages.js.number,string:Prism.languages.js.string,annotation:{pattern:/\??:\s*\w+/,inside:{type:/\w+/}},keyword:Prism.languages.js.keyword,equals:/=/,argname:/[\w]+/}}}},funcreturn:{pattern:/\).*$/,greedy:!0,inside:{parenthesis:/\)/,return:/:/,type:/\w+/}}},Prism.languages.js_class=o(o({},Prism.languages.js_function),{},{funcname:/[\w]+(?=\(| extends)/,funcreturn:{pattern:/(\)|extends).*$/,greedy:!0,inside:{parenthesis:/\)/,keyword:/extends/,type:/\w+/}}})},3311:function(e){e.exports={code:"code_code__f6VbY",scrollDisabled:"code_scrollDisabled__jYMTQ",inline:"code_inline__63Cc9",block:"code_block__73rl_",lineNumbers:"code_lineNumbers__yZtcx",diffLines:"code_diffLines__jSkgp",p:"code_p__QNOEk",m:"code_m__8KqxA",highlightWrapper:"code_highlightWrapper__8YM2j",hasCopyButton:"code_hasCopyButton__vL2_6",showHighlight:"code_showHighlight__tDAlE",repl:"code_repl__r4TUI",codePart:"code_codePart__T3ELt",outPart:"code_outPart__nb_c_",showMore:"code_showMore__zHUml",collapsed:"code_collapsed__HCQkh",expanded:"code_expanded__qkHkV",copyCodeButtonWrapper:"code_copyCodeButtonWrapper__gi2zF",copyCode:"code_copyCode__EvySm",copyCodeDisplaceWrapper:"code_copyCodeDisplaceWrapper__QXp1E",copyCodeFirstLine:"code_copyCodeFirstLine__XcARB",copyLabel:"code_copyLabel__9W53T",copiedLabel:"code_copiedLabel__fGjKT",copiedIcon:"code_copiedIcon__QnjCm",codeTabs:"code_codeTabs__drHgm",tabs:"code_tabs__FeTPK",tab:"code_tab__snml_",selected:"code_selected__dlkp9",tabContent:"code_tabContent__B1hng",textTabContent:"code_textTabContent__p3AET",caption:"code_caption__NqD5k"}}}]);