var u=Object.defineProperty,_=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(o,t,e)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,i=(o,t)=>{for(var e in t||(t={}))f.call(t,e)&&r(o,e,t[e]);if(n)for(var e of n(t))v.call(t,e)&&r(o,e,t[e]);return o},l=(o,t)=>_(o,h(t));import{_ as g,r as c,o as p,g as b,a,b as m,w as d,f as w,d as x,c as y}from"./main.d009b879.js";const k={},C={class:"p-6"},F=a("p",null," This assistant will help you import a delimited file containing a list of transactions. It supports both token separated files (such as comma separated or semi-colon separated) and fixed width data. ",-1),S=a("p",null,[w(" For a successful import four columns have to be available in the import data: "),a("ul",null,[a("li",null," a Date column "),a("li",null," an Amount column "),a("li",null," Source account column "),a("li",null," Destination account column ")])],-1),T=a("p",null," If there is no Account data available, a base account can be selected to which all data will be imported. ",-1),$=a("p",null," Apart from a choise of delimiter, there are several options to tweak the importer. For example a number of lines can be skipped. Several date date and number formats are supported. ",-1),B=a("p",null," Lastly, for repeated imports the preview page has buttons to Load and Save the settings. To save the settings, tweak the settings to your preferences (optionally starting from an existing preset), then (optionally) change the settings name and press the Save Settings button. ",-1),L={class:"flex items-center justify-end mt-4 gap-2"},N=a("span",{class:"material-icons-outlined"},"navigate_next",-1);function V(o,t){const e=c("form-button");return p(),b("div",C,[F,S,T,$,B,a("div",L,[m(e,{onClick:t[0]||(t[0]=s=>o.$router.push({name:"import.transactions_from_csv.page2"})),title:"Next"},{default:d(()=>[N]),_:1})])])}var A=g(k,[["render",V]]);const I={class:"bg-white shadow mt-4 prose max-w-none"},D={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page1")}},E=x(l(i({},D),{name:"TransactionsFromCsvPage1",setup(o){return(t,e)=>{const s=c("FormLayout");return p(),y(s,{title:"Import Transactions from CSV"},{default:d(()=>[a("div",I,[m(A)])]),_:1})}}}));export{E as default};
