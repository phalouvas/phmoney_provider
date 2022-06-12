var R=Object.defineProperty,w=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(t,s,n)=>s in t?R(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,_=(t,s)=>{for(var n in s||(s={}))D.call(s,n)&&y(t,n,s[n]);if(c)for(var n of c(s))C.call(s,n)&&y(t,n,s[n]);return t},h=(t,s)=>w(t,B(s));import{_ as E,r as p,o as l,g as u,b as r,a as o,t as m,i as g,F as v,m as k,w as i,f as L,d as S,c as f,k as V,p as $}from"./main.d009b879.js";const N={},T={class:"p-6"},b={class:"text-center"},F={key:0},M=o("thead",null,[o("th",null,"Date"),o("th",null,"Due Date"),o("th",null,"Reference"),o("th",null,"Type"),o("th",null,"Description"),o("th",null,"Sale"),o("th",null,"Tax"),o("th",null,"Debits"),o("th",null,"Credits"),o("th",null,"Balance")],-1),P=o("th",null,"Period Totals",-1),U=o("th",{colspan:"4"},null,-1);function j(t,s){const n=p("button-bar"),d=p("RouterLink"),a=p("amount-financial");return l(),u("div",T,[r(n,{onSettings:s[0]||(s[0]=e=>t.savingSettings=!0)}),o("h2",b,m(t.store.props.company)+" "+m(t.store.props.title)+" From "+m(t.store.convert_date(t.store.props.date_start))+" to "+m(t.store.convert_date(t.store.props.date_end)),1),t.store.report_settings.params.employee!==null?(l(),u("h3",F,m(t.store.report_settings.params.employee.username),1)):g("",!0),o("table",null,[M,o("tbody",null,[(l(!0),u(v,null,k(t.store.props.bills,e=>(l(),u("tr",{key:e.guid},[o("td",null,m(t.store.convert_date(e.date_opened)),1),o("td",null,m(e.due_date),1),o("td",null,[r(d,{to:{name:"business.invoices.entrys.index",params:{invoice_pk:e.pk}}},{default:i(()=>[L(m(e.id),1)]),_:2},1032,["to"])]),o("td",null,m(e.type),1),o("td",null,m(e.notes),1),o("td",null,[r(a,{amount:e.sale,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.tax,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.debits,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.credits,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.balance,commodity:e.commodity},null,8,["amount","commodity"])])]))),128))]),o("tfoot",null,[P,U,o("th",null,[r(a,{amount:t.store.props.totals.sale,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.tax,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.debits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.credits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.balance,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])}var q=E(N,[["render",j]]);const z={class:"flex gap-2"},A=["value"],G={class:"bg-white shadow mt-4 prose max-w-none"},H={data(){return{extra_params:{employee:null}}}},K=S(h(_({},H),{name:"ReportsBusinessEmployeeReport",setup(t){return(s,n)=>{const d=p("form-label"),a=p("ReportLayout");return l(),f(a,{title:"Employee Report",extra_params:s.extra_params,show_accounts:!1},{settings:i(()=>[o("div",z,[o("div",null,[r(d,{for:"employee",value:"Employee"}),V(o("select",{id:"employee","onUpdate:modelValue":n[0]||(n[0]=e=>s.store.report_settings.params.employee=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(l(!0),u(v,null,k(s.store.props.employees,e=>(l(),u("option",{key:e.pk,value:e},m(e.username),9,A))),128))],512),[[$,s.store.report_settings.params.employee]])])])]),default:i(()=>[o("div",G,[s.store.props.currency&&!s.store.processing?(l(),f(q,{key:0})):g("",!0)])]),_:1},8,["extra_params"])}}}));export{K as default};
