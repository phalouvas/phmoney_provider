import{_ as V,r as m,o as a,g as u,a as r,b as s,k as n,q as y,p,F as f,m as _,t as c,w as b,n as g,e as U}from"./main.faceb598.js";const k={data(){var i,e;return{form:{id:this.store.props.customer.id,name:this.store.props.customer.name,active:this.store.props.customer.active,addr_name:this.store.props.customer.addr_name,addr_addr1:this.store.props.customer.addr_addr1,addr_addr2:this.store.props.customer.addr_addr2,addr_addr3:this.store.props.customer.addr_addr3,addr_addr4:this.store.props.customer.addr_addr4,addr_phone:this.store.props.customer.addr_phone,addr_fax:this.store.props.customer.addr_fax,addr_email:this.store.props.customer.addr_email,notes:this.store.props.customer.notes,shipaddr_name:this.store.props.customer.shipaddr_name,shipaddr_addr1:this.store.props.customer.shipaddr_addr1,shipaddr_addr2:this.store.props.customer.shipaddr_addr2,shipaddr_addr3:this.store.props.customer.shipaddr_addr3,shipaddr_addr4:this.store.props.customer.shipaddr_addr4,shipaddr_phone:this.store.props.customer.shipaddr_phone,shipaddr_fax:this.store.props.customer.shipaddr_fax,shipaddr_email:this.store.props.customer.shipaddr_email,currency:this.store.props.customer.currency,discount_num:(i=this.store.props.customer.discount_num)!=null?i:0,discount_denom:this.store.props.customer.discount_denom,credit_num:(e=this.store.props.customer.credit_num)!=null?e:0,credit_denom:this.store.props.customer.credit_denom,terms:this.store.props.customer.terms,tax_included:this.store.props.customer.tax_included,tax_override:this.store.props.customer.tax_override,taxtable:this.store.props.customer.taxtable},discount:this.store.props.customer.discount_num/this.store.props.customer.discount_denom,credit:this.store.props.customer.credit_num/this.store.props.customer.credit_denom}},methods:{async submit(){let i=this.store.props.currencies.find(e=>e.guid===this.form.currency);this.form.discount_num=this.discount*i.fraction,this.form.discount_denom=i.fraction,this.form.credit_num=this.credit*i.fraction,this.form.credit_denom=i.fraction,this.$route.name==="business.customers.create"?await this.store.post("/phmoney/business/customers/store",this.form):await this.store.post(`/phmoney/business/customers/update/${this.$route.params.customer_pk}`,this.form),this.$router.back()}}},w={class:"p-3 border"},A=r("div",{class:"font-bold text-lg"},"Customer",-1),C=r("div",{class:"font-semibold text-md"},"Identification",-1),N={class:"flex flex-wrap gap-2"},S=r("div",{class:"font-semibold text-md"},"Billing Address",-1),q={class:"flex flex-wrap gap-2"},B=r("div",{class:"font-semibold text-md"},"Notes",-1),T={class:"flex flex-wrap gap-2"},E={class:"p-3 mt-6 border"},F=r("div",{class:"font-bold text-lg"},"Billing Information",-1),I={class:"flex flex-wrap gap-2"},D=["value"],M=["value"],L=r("option",{value:"3"},"- Use Global -",-1),P=r("option",{value:"1"},"Yes",-1),j=r("option",{value:"2"},"No",-1),z=[L,P,j],G=["value"],Y={class:"p-3 mt-6 border"},H=r("div",{class:"font-bold text-lg"},"Shipping Address",-1),J=r("div",{class:"font-semibold text-md"},"Shipping Information",-1),K={class:"flex flex-wrap gap-2"},O={class:"flex gap-2 items-center justify-end mt-4"},Q=r("span",{class:"material-icons-outlined"}," save ",-1);function R(i,e,W,X,o,h){const t=m("form-label"),l=m("form-input"),v=m("form-checkbox"),x=m("form-button");return a(),u("form",{onSubmit:e[26]||(e[26]=U((...d)=>h.submit&&h.submit(...d),["prevent"])),class:"p-6"},[r("div",w,[A,C,r("div",N,[r("div",null,[s(t,{for:"id",value:"Number"}),s(l,{id:"id",type:"text",modelValue:o.form.id,"onUpdate:modelValue":e[0]||(e[0]=d=>o.form.id=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"name",value:"Name*"}),s(l,{id:"name",type:"text",modelValue:o.form.name,"onUpdate:modelValue":e[1]||(e[1]=d=>o.form.name=d),required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"active",value:"Active"}),s(v,{id:"active",checked:o.form.active,"onUpdate:checked":e[2]||(e[2]=d=>o.form.active=d)},null,8,["checked"])])]),S,r("div",q,[r("div",null,[s(t,{for:"addr_name",value:"Name"}),s(l,{id:"addr_name",type:"text",modelValue:o.form.addr_name,"onUpdate:modelValue":e[3]||(e[3]=d=>o.form.addr_name=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr1",value:"Address 1"}),s(l,{id:"addr_addr1",type:"text",modelValue:o.form.addr_addr1,"onUpdate:modelValue":e[4]||(e[4]=d=>o.form.addr_addr1=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr2",value:"Address 2"}),s(l,{id:"addr_addr2",type:"text",modelValue:o.form.addr_addr2,"onUpdate:modelValue":e[5]||(e[5]=d=>o.form.addr_addr2=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr3",value:"Address 3"}),s(l,{id:"addr_addr3",type:"text",modelValue:o.form.addr_addr3,"onUpdate:modelValue":e[6]||(e[6]=d=>o.form.addr_addr3=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr4",value:"Address 4"}),s(l,{id:"addr_addr4",type:"text",modelValue:o.form.addr_addr4,"onUpdate:modelValue":e[7]||(e[7]=d=>o.form.addr_addr4=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_phone",value:"Phone"}),s(l,{id:"addr_phone",type:"text",modelValue:o.form.addr_phone,"onUpdate:modelValue":e[8]||(e[8]=d=>o.form.addr_phone=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_fax",value:"Fax"}),s(l,{id:"addr_fax",type:"text",modelValue:o.form.addr_fax,"onUpdate:modelValue":e[9]||(e[9]=d=>o.form.addr_fax=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_email",value:"Email"}),s(l,{id:"addr_email",type:"text",modelValue:o.form.addr_email,"onUpdate:modelValue":e[10]||(e[10]=d=>o.form.addr_email=d)},null,8,["modelValue"])])]),B,r("div",T,[r("div",null,[n(r("textarea",{"onUpdate:modelValue":e[11]||(e[11]=d=>o.form.notes=d),class:"mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",id:"notes",name:"notes"},null,512),[[y,o.form.notes]])])])]),r("div",E,[F,r("div",I,[r("div",null,[s(t,{for:"currency",value:"Currency"}),n(r("select",{id:"currency","onUpdate:modelValue":e[12]||(e[12]=d=>o.form.currency=d),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),u(f,null,_(i.store.props.currencies,d=>(a(),u("option",{key:d.guid,value:d.guid},c(d.fullname),9,D))),128))],512),[[p,o.form.currency]])]),r("div",null,[s(t,{for:"terms",value:"Terms"}),n(r("select",{id:"terms","onUpdate:modelValue":e[13]||(e[13]=d=>o.form.terms=d),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),u(f,null,_(i.store.props.billterms,d=>(a(),u("option",{key:d.guid,value:d.guid},c(d.name),9,M))),128))],512),[[p,o.form.terms]])]),r("div",null,[s(t,{for:"discount",value:"Discount"}),s(l,{id:"discount",type:"number",modelValue:o.discount,"onUpdate:modelValue":e[14]||(e[14]=d=>o.discount=d),min:"0",required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"credit",value:"Credit Limit"}),s(l,{id:"credit",type:"number",modelValue:o.credit,"onUpdate:modelValue":e[15]||(e[15]=d=>o.credit=d),step:"0.01",min:"0",required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"tax_included",value:"Tax Included"}),n(r("select",{id:"tax_included","onUpdate:modelValue":e[16]||(e[16]=d=>o.form.tax_included=d),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},z,512),[[p,o.form.tax_included]])]),r("div",null,[s(t,{for:"taxtable",value:"Tax Table"}),n(r("select",{id:"terms","onUpdate:modelValue":e[17]||(e[17]=d=>o.form.taxtable=d),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),u(f,null,_(i.store.props.taxtables,d=>(a(),u("option",{key:d.guid,value:d.guid},c(d.name),9,G))),128))],512),[[p,o.form.taxtable]])])])]),r("div",Y,[H,J,r("div",K,[r("div",null,[s(t,{for:"shipaddr_name",value:"Name"}),s(l,{id:"shipaddr_name",type:"text",modelValue:o.form.shipaddr_name,"onUpdate:modelValue":e[18]||(e[18]=d=>o.form.shipaddr_name=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr1",value:"Address 1"}),s(l,{id:"shipaddr_addr1",type:"text",modelValue:o.form.shipaddr_addr1,"onUpdate:modelValue":e[19]||(e[19]=d=>o.form.shipaddr_addr1=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr2",value:"Address 2"}),s(l,{id:"shipaddr_addr2",type:"text",modelValue:o.form.shipaddr_addr2,"onUpdate:modelValue":e[20]||(e[20]=d=>o.form.shipaddr_addr2=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr3",value:"Address 3"}),s(l,{id:"shipaddr_addr3",type:"text",modelValue:o.form.shipaddr_addr3,"onUpdate:modelValue":e[21]||(e[21]=d=>o.form.shipaddr_addr3=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr4",value:"Address 4"}),s(l,{id:"shipaddr_addr4",type:"text",modelValue:o.form.shipaddr_addr4,"onUpdate:modelValue":e[22]||(e[22]=d=>o.form.shipaddr_addr4=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_phone",value:"Phone"}),s(l,{id:"shipaddr_phone",type:"text",modelValue:o.form.shipaddr_phone,"onUpdate:modelValue":e[23]||(e[23]=d=>o.form.shipaddr_phone=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_fax",value:"Fax"}),s(l,{id:"shipaddr_fax",type:"text",modelValue:o.form.shipaddr_fax,"onUpdate:modelValue":e[24]||(e[24]=d=>o.form.shipaddr_fax=d)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_email",value:"Email"}),s(l,{id:"shipaddr_email",type:"text",modelValue:o.form.shipaddr_email,"onUpdate:modelValue":e[25]||(e[25]=d=>o.form.shipaddr_email=d)},null,8,["modelValue"])])])]),r("div",O,[s(x,{class:g({"opacity-25":o.form.processing}),disabled:o.form.processing,title:"Save"},{default:b(()=>[Q]),_:1},8,["class","disabled"])])],32)}var $=V(k,[["render",R]]);export{$ as C};
