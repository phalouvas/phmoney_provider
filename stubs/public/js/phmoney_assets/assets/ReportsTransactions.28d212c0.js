var D=Object.defineProperty,C=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(e,o,s)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,f=(e,o)=>{for(var s in o||(o={}))R.call(o,s)&&h(e,s,o[s]);if(_)for(var s of _(o))T.call(o,s)&&h(e,s,o[s]);return e},g=(e,o)=>C(e,N(o));import{_ as B,r as c,o as m,g as u,a as t,t as l,k as i,v as d,F as k,m as v,b as a,d as U,c as y,w as b,i as $}from"./main.faceb598.js";const F={},L={class:"p-6"},V={class:"text-center"},M={class:"w-full table-fixed"},S=t("th",{class:"text-right"},"Amount",-1),A={colspan:"4"},E={class:"text-right"},G={class:"text-right"},P={class:"w-full table-fixed"},j=t("th",{class:"text-left"},"Grand Total",-1),q={class:"text-right"};function z(e,o){const s=c("amount-financial");return m(),u("div",L,[t("h2",V,l(e.store.props.company)+" "+l(e.store.props.title)+" For Period Covering "+l(e.store.convert_date(e.store.props.date_start))+" to "+l(e.store.convert_date(e.store.props.date_end)),1),t("table",M,[t("thead",null,[t("th",null,[i(t("span",null,"Date",512),[[d,e.store.report_settings.params.date]])]),t("th",null,[i(t("span",null,"Num",512),[[d,e.store.report_settings.params.num]])]),t("th",null,[i(t("span",null,"Description",512),[[d,e.store.report_settings.params.description]])]),t("th",null,[i(t("span",null,"Memo",512),[[d,e.store.report_settings.params.memo]])]),S])]),(m(!0),u(k,null,v(e.store.props.rows,r=>(m(),u("table",{class:"w-full table-fixed",key:r.guid},[t("thead",null,[t("tr",null,[t("th",A,"Total for "+l(r.name),1),t("th",E,[a(s,{amount:r.total,commodity:r.commodity},null,8,["amount","commodity"])])])]),t("tbody",null,[(m(!0),u(k,null,v(r.rows,n=>(m(),u("tr",{key:n.split_guid},[t("td",null,[i(t("span",null,l(e.store.convert_date(n.post_date)),513),[[d,e.store.report_settings.params.date]])]),t("td",null,[i(t("span",null,l(n.num),513),[[d,e.store.report_settings.params.num]])]),t("td",null,[i(t("span",null,l(n.description),513),[[d,e.store.report_settings.params.description]])]),t("td",null,[i(t("span",null,l(n.memo),513),[[d,e.store.report_settings.params.memo]])]),t("td",G,[a(s,{amount:n.amount,commodity:r.commodity},null,8,["amount","commodity"])])]))),128))])]))),128)),t("table",P,[t("tbody",null,[t("tr",null,[j,t("th",q,[a(s,{amount:e.store.props.total,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])])}var H=B(F,[["render",z]]);const I=t("div",{class:"font-bold"},"Display",-1),J={class:"flex gap-2"},K={class:"bg-white shadow mt-4 prose max-w-none"},O={data(){return{extra_params:{date:!0,num:!0,description:!0,memo:!0}}}},X=U(g(f({},O),{name:"ReportsTransactions",setup(e){return(o,s)=>{const r=c("form-label"),n=c("form-checkbox"),w=c("ReportLayout");return m(),y(w,{title:"Transactions Report",extra_params:o.extra_params},{settings:b(()=>[I,t("div",J,[t("div",null,[a(r,{for:"filter_date",value:"Date"}),a(n,{id:"filter_date",checked:o.store.report_settings.params.date,"onUpdate:checked":s[0]||(s[0]=p=>o.store.report_settings.params.date=p)},null,8,["checked"])]),t("div",null,[a(r,{for:"filter_num",value:"Num"}),a(n,{id:"filter_num",checked:o.store.report_settings.params.num,"onUpdate:checked":s[1]||(s[1]=p=>o.store.report_settings.params.num=p)},null,8,["checked"])]),t("div",null,[a(r,{for:"filter_description",value:"Description"}),a(n,{id:"filter_description",checked:o.store.report_settings.params.description,"onUpdate:checked":s[2]||(s[2]=p=>o.store.report_settings.params.description=p)},null,8,["checked"])]),t("div",null,[a(r,{for:"filter_memo",value:"Memo"}),a(n,{id:"filter_memo",checked:o.store.report_settings.params.memo,"onUpdate:checked":s[3]||(s[3]=p=>o.store.report_settings.params.memo=p)},null,8,["checked"])])])]),default:b(()=>[t("div",K,[o.store.props.currency&&!o.store.processing?(m(),y(H,{key:0})):$("",!0)])]),_:1},8,["extra_params"])}}}));export{X as default};
