"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{880:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(439),u=t(791),a=t(434),o=t(634),i="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?c:r,a=t.maxSize,o=void 0===a?1:a,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return i}return{get:r,put:function(n,u){r(n)===i&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function p(){var n=f.get(arguments);if(n===i){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var a,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,f=s.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],m=l(r),v=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return u}var p=f(s),d=function(e){return e.contacts},m=function(e){return e.contacts.isLoading},v=function(e){return e.filter},h=p([d,v],(function(e,n){var t=n.toLowerCase();return e.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))})),b=t(184),g=function(){var e=(0,u.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,u.useState)(""),s=(0,r.Z)(c,2),l=s[0],f=s[1],p=(0,a.I0)(),m=(0,a.v9)(d),v=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":f(r)}},h=function(){i(""),f("")};return(0,b.jsxs)("form",{className:"border border-success-subtle p-5 rounded-1 border-2",onSubmit:function(e){e.preventDefault(),m.contacts.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):(p((0,o.uK)({name:t,number:l})),h())},children:[(0,b.jsx)("div",{className:"mb-3",children:(0,b.jsxs)("label",{className:"d-block",children:["Name",(0,b.jsx)("div",{className:"input-group input-group-lg",children:(0,b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",className:"form-control text-capitalize",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:v})})]})}),(0,b.jsx)("div",{className:"mb-3",children:(0,b.jsxs)("label",{className:"d-block ",children:["Number",(0,b.jsx)("div",{className:"input-group input-group-lg",children:(0,b.jsx)("input",{name:"number",type:"tel",className:"form-control",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",value:l,onChange:v})})]})}),(0,b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add contact"})]})},y=function(){var e=(0,a.I0)(),n=(0,a.v9)(h);return n.length>0&&(0,b.jsx)("ul",{className:"list-group",children:n.map((function(n){var t=n.name,r=n.number,u=n.id;return(0,b.jsxs)("li",{id:u,className:"list-group-item  d-flex justify-content-between fs-3 list-group-item-action list-group-item-warning",children:[(0,b.jsxs)("span",{className:"text-capitalize",children:[t,":"]}),(0,b.jsx)("span",{children:r}),(0,b.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return function(n){e((0,o.GK)(n))}(u)},children:"Delete"})]},u)}))})},x=t(165),j=function(){var e=(0,a.I0)(),n=(0,a.v9)(v);return(0,b.jsxs)("label",{className:"d-block ",children:["Find contacts by name",(0,b.jsxs)("div",{className:"input-group input-group-lg mb-2",children:[(0,b.jsx)("input",{className:"form-control",type:"text",value:n,onChange:function(n){e((0,x.Tv)(n.currentTarget.value))}}),(0,b.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){e((0,x.Dg)())},disabled:!n,children:"clean up"})]})]})},N=function(){var e=(0,a.I0)(),n=(0,a.v9)(m);return(0,u.useEffect)((function(){e((0,o.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{}),(0,b.jsx)(j,{}),(0,b.jsx)("div",{children:n&&"Request in progress..."}),(0,b.jsx)(y,{})]})}}}]);
//# sourceMappingURL=880.9a87d77e.chunk.js.map