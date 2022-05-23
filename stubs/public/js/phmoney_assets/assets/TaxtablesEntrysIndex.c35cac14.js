var g=Object.defineProperty,$=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(t,e,a)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&b(t,a,e[a]);if(_)for(var a of _(e))C.call(e,a)&&b(t,a,e[a]);return t},y=(t,e)=>$(t,v(e));import{_ as E,r as n,o,g as l,a as s,b as h,w as p,F as L,m as N,t as B,i,c as d,d as F}from"./main.faceb598.js";const P={methods:{async load(t){await this.store.get(`/phmoney/business/taxtables/${this.store.props.taxtable.pk}/taxtableentrys`,{page:t})},async destroy(t){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`/phmoney/business/taxtables/${this.store.props.taxtable.pk}/taxtableentrys/destroy/${t.pk}`),this.load(1))}}},T={class:"p-6 overflow-x-auto"},V=s("th",null,"Name",-1),A=s("span",{class:"material-icons-outlined"},"add",-1),D={class:"flex"},I=s("span",{class:"material-icons-outlined"},"edit",-1),R=["onClick"],S=s("span",{class:"material-icons-outlined"},"delete",-1),j=[S];function q(t,e,a,u,J,c){const x=n("form-button"),k=n("RouterLink"),f=n("Pagination");return o(),l("div",T,[s("table",null,[s("thead",null,[s("tr",null,[V,s("th",null,[h(x,{onClick:e[0]||(e[0]=r=>t.$router.push({name:"business.taxtables.entrys.create",params:{taxtable_pk:t.store.props.taxtable.pk}})),title:"Add New"},{default:p(()=>[A]),_:1})])])]),s("tbody",null,[t.store.props.taxtableentrys?(o(!0),l(L,{key:0},N(t.store.props.taxtableentrys.data,r=>(o(),l("tr",{key:r.pk},[s("td",null,B(r.tax_account.name),1),s("td",null,[s("div",D,[h(k,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.taxtables.entrys.edit",params:{taxtable_pk:t.store.props.taxtable.pk,entry_pk:r.pk}},title:"Edit"},{default:p(()=>[I]),_:2},1032,["to"]),s("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:K=>c.destroy(r),title:"Delete"},j,8,R)])])]))),128)):i("",!0)]),s("tfoot",null,[t.store.props.taxtableentrys&&t.store.props.taxtableentrys.total>t.store.props.taxtableentrys.per_page?(o(),d(f,{key:0,current:t.store.props.taxtableentrys.current_page,total:t.store.props.taxtableentrys.total,"per-page":t.store.props.taxtableentrys.per_page,onPageChanged:c.load},null,8,["current","total","per-page","onPageChanged"])):i("",!0)])])])}var z=E(P,[["render",q]]);const G={class:"bg-white shadow mt-4 prose max-w-none"},H={async created(){await this.store.get(`/phmoney/business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys`)}},Q=F(y(m({},H),{name:"TaxtablesEntrysIndex",setup(t){return(e,a)=>{const u=n("FormLayout");return o(),d(u,{title:`Tax Table Entries - ${e.store.props.taxtable?e.store.props.taxtable.name:"..."}`},{default:p(()=>[s("div",G,[e.store.processing?i("",!0):(o(),d(z,{key:0}))])]),_:1},8,["title"])}}}));export{Q as default};
