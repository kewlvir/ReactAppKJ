webpackJsonp([1],{100:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return{type:c.INIT_PRODUCTS,products:e}}function u(e){return{type:c.LOADING,loading:e}}function a(){return function(e){return e(u(!0)),f.getProducts().then(function(t){e(o(t)),e(u(!1))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.initProducts=o,t.loading=u,t.getProducts=a;var l=n(161),c=r(l),i=n(101),f=r(i)},101:function(e,t,n){"use strict";function r(){return p.getJson(s.default.apiEndPoint+"/api/products")}function o(e){return p.getJson(s.default.apiEndPoint+"/api/products/"+e)}function u(){return p.getJson(s.default.apiEndPoint+"/api/brands")}function a(e){return p.getJson(s.default.apiEndPoint+"/api/products?q="+e)}function l(e){return p.putJson(s.default.apiEndPoint+"/api/products/"+e.id,e)}function c(e){return p.postJson(s.default.apiEndPoint+"/api/products",e)}function i(e){return e.id?l(e):c(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getProducts=r,t.getProduct=o,t.getBrands=u,t.searchProducts=a,t.updateProduct=l,t.createProduct=c,t.saveProduct=i;var f=n(368),s=function(e){return e&&e.__esModule?e:{default:e}}(f),d=n(369),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d)},149:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7),c=function(e){return e&&e.__esModule?e:{default:e}}(l),i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Page-","Home"," - ","sub"),c.default.createElement("p",null,"welcome to product app"))}}]),t}(l.Component);t.default=i},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_ITEM_TO_CART="CART_ADD_ITEM_TO_CART",t.REMOVE_ITEM_FROM_CART="REMOVE_ITEM_FROM_CART",t.EMPTY_CART="EMPTY_CART",t.UPDATE_CART="UPDATE_CART"},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOADING="PRODUCT.LOADING",t.INIT_PRODUCTS="PRODUCT.INIT_PRODUCTS",t.EDIT_PRODUCT="PRODUCT.EDIT_PRODUCT"},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(195),u=n(7),a=r(u),l=n(295),c=r(l),i=n(659),f=r(i),s=n(47);(0,o.render)(a.default.createElement(s.Provider,{store:f.default},a.default.createElement(c.default,null)),document.getElementById("root"))},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return l.default.createElement("div",null,"Loading ...")}function u(){return l.default.createElement(c.BrowserRouter,null,l.default.createElement(i.App,{appTitle:"React App"},l.default.createElement(c.Route,{path:"/",exact:!0,component:s.default}),l.default.createElement(c.Route,{path:"/about",component:_}),l.default.createElement(p.default,null),l.default.createElement(c.Route,{path:"/products",component:m.default})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=n(7),l=r(a),c=n(34),i=n(322),f=n(149),s=r(f),d=n(325),p=r(d),y=n(354),m=r(y),h=n(656),b=r(h),_=(0,b.default)({loader:function(){return n.e(0).then(n.bind(null,664))},loading:o})},322:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(323),s=r(f),d=n(324),p=r(d),y=n(149),m=(r(y),n(9)),h=r(m);(t.App=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),l(t,[{key:"getChildContext",value:function(){return{appTitle:this.props.appTitle}}},{key:"render",value:function(){return console.log("App render called"),i.default.createElement("div",null,i.default.createElement(s.default,null),i.default.createElement("div",null,this.props.children),i.default.createElement(p.default,{year:2017}))}}]),t}(i.default.Component)).childContextTypes={appTitle:h.default.string}},323:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7),c=function(e){return e&&e.__esModule?e:{default:e}}(l),i=n(34),f=function(e){function t(e,n){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return u(t,e),a(t,[{key:"render",value:function(){return console.log("Header  render"),c.default.createElement("div",null,c.default.createElement(i.NavLink,{to:"/",exact:!0,className:"button",activeClassName:"success"},"Home"),c.default.createElement(i.NavLink,{to:"/cart",className:"button",activeClassName:"success"},"Cart"),c.default.createElement(i.NavLink,{to:"/products",className:"button",activeClassName:"success"},"Products"),c.default.createElement(i.NavLink,{to:"/about",className:"button",activeClassName:"success"},"About"))}}]),t}(l.Component);t.default=f},324:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",null,a.default.createElement("hr",null),a.default.createElement("p",null,"Copyright @ ",e.year,", ",e.company," "))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),a=r(u),l=n(9),c=r(l);o.propTypes={year:c.default.number.isRequired,company:c.default.string},o.defaultProps={company:"React App"}},325:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement(l.Route,{path:"/cart",component:i.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),a=r(u),l=n(34),c=n(326),i=r(c)},326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),o=n(40),u=n(99),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),l=n(350),c=function(e){return e&&e.__esModule?e:{default:e}}(l),i=function(e){return{items:e.cartState,amount:0}},f=function(e){return{addItem:(0,o.bindActionCreators)(a.addItem,e),actions:(0,o.bindActionCreators)(a,e)}},s=(0,r.connect)(i,f),d=s(c.default);t.default=d},350:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(9),s=(r(f),n(351)),d=r(s),p=n(353),y=r(p),m=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("CArt component created"),n.id=10,n}return a(t,e),l(t,[{key:"addItem",value:function(){var e={id:this.id++,name:"phone "+this.id,price:8e3,qty:1,total:0};this.props.addItem(e)}},{key:"touch",value:function(){}},{key:"removeItem",value:function(e){this.props.actions.removeItem(e)}},{key:"updateQty",value:function(e,t){this.props.actions.updateItem(e,t)}},{key:"render",value:function(){var e=this;return console.log("cart comp render"),i.default.createElement("div",null,i.default.createElement("h2",null,"Cart "),i.default.createElement("button",{onClick:function(){return e.addItem()}},"Add Item"),i.default.createElement("button",{onClick:function(){return e.touch()}},"Touch"),i.default.createElement(d.default,{items:this.props.items,onUpdate:function(t,n){return e.updateQty(t,n)},onRemove:function(t){return e.removeItem(t)}}),i.default.createElement(y.default,{amount:this.props.amount}))}}]),t}(c.PureComponent);t.default=m,m.defaultProps={},m.propTypes={}},351:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){console.log("Cart List render called");var t=e.items,n=t.map(function(t){return a.default.createElement(i.default,{item:t,key:t.id,onRemove:e.onRemove,onUpdate:e.onUpdate})});return a.default.createElement("div",null,a.default.createElement("h2",null,"Cart List"),a.default.createElement("table",null,a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Name"),a.default.createElement("th",null,"Price"),a.default.createElement("th",null,"Qty"),a.default.createElement("th",null,"Total"),a.default.createElement("th",null,"Update"),a.default.createElement("th",null,"Remove")),n)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),a=r(u),l=n(9),c=(r(l),n(352)),i=r(c);o.defaultProps={},o.propTypes={}},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(9),s=r(f),d=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={qty:e.item.qty},r}return a(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"onValueChange",value:function(e){console.log(e.target.value),this.setState({qty:e.target.value})}},{key:"render",value:function(){var e=this;console.log("Cart Item render called "+this.context.appTitle);var t=this.props,n=t.item,r=t.onUpdate,o=t.onRemove;return i.default.createElement("tr",null,i.default.createElement("td",null,n.name),i.default.createElement("td",null,n.price),i.default.createElement("td",null,i.default.createElement("input",{value:this.state.qty,type:"number",onChange:function(t){return e.onValueChange(t)},onBlur:function(){return r(n.id,e.state.qty)}})),i.default.createElement("td",null,n.total),i.default.createElement("td",null,i.default.createElement("button",{onClick:function(){return r(n.id,e.state.qty)}},"Update")),i.default.createElement("td",null,i.default.createElement("button",{onClick:function(){return o(n.id)}},"Remove")))}}]),t}(c.Component);d.contextType={appTitle:s.default.string},t.default=d,d.defaultProps={},d.propTypes={}},353:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return console.log("Cart Summary  render"),a.default.createElement("div",null,a.default.createElement("h2",null,t.appTitle," - Cart Summary - [",e.amount,"]"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),a=r(u),l=n(9),c=r(l);o.contextTypes={appTitle:c.default.string},o.defaultProps={},o.propTypes={}},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement(i.default,null,a.default.createElement(l.Switch,null,a.default.createElement(l.Route,{path:"/products",exact:!0,component:s.default}),a.default.createElement(l.Route,{path:"/products/edit/:id",component:p.default}),a.default.createElement(l.Route,{path:"/products/create",component:p.default}),a.default.createElement(l.Route,{path:"/products/search",component:m.default})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(7),a=r(u),l=n(34),c=n(355),i=r(c),f=n(356),s=r(f),d=n(371),p=r(d),y=n(373),m=r(y)},355:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(9),s=(r(f),n(34)),d=function(e){function t(e){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"Product Home"),i.default.createElement("div",null,i.default.createElement(s.NavLink,{to:"/products",exact:!0,className:"button",activeClassName:"success"},"List"),i.default.createElement(s.NavLink,{to:"/products/create",className:"button",activeClassName:"success"},"Create"),i.default.createElement(s.NavLink,{to:"/products/search",className:"button",activeClassName:"success"},"Search")),i.default.createElement("div",null,this.props.children))}}]),t}(c.Component);t.default=d,d.defaultProps={},d.propTypes={}},356:function(e,t,n){"use strict";function r(e){return{products:e.productState.products,loading:e.productState.loading,cartSize:e.cartState.length}}function o(e){return{actions:(0,a.bindActionCreators)(f,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(47),a=n(40),l=n(357),c=function(e){return e&&e.__esModule?e:{default:e}}(l),i=n(100),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),s=(0,u.connect)(r,o)(c.default);t.default=s},357:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(9),s=(r(f),n(34),n(358)),d=n(366),p=r(d),y=n(101),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),h=function(e){function t(e){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.actions.getProducts()}},{key:"componentDidMount2",value:function(){var e=this;this.props.actions.loading(!0),m.getProducts().then(function(t){e.props.actions.initProducts(t),e.props.actions.loading(!1)})}},{key:"render",value:function(){if(this.props.loading)return i.default.createElement("h2",null,"Loading Products...");var e=this.props.products.map(function(e){return i.default.createElement(p.default,{key:e.id,product:e},e.name)});return i.default.createElement("div",null,i.default.createElement(s.Helmet,null,i.default.createElement("title",null,"Products List")),i.default.createElement("h2",null,"Cart Size [",this.props.cartSize,"] "),i.default.createElement("div",{className:"flex two"},e))}}]),t}(c.Component);t.default=h,h.defaultProps={},h.propTypes={}},366:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),u=n(40),a=n(367),l=function(e){return e&&e.__esModule?e:{default:e}}(a),c=n(100),i=r(c),f=n(99),s=r(f),d=function(e){return{}},p=function(e){return{actions:(0,u.bindActionCreators)(i,e),cartActions:(0,u.bindActionCreators)(s,e)}};t.default=(0,o.connect)(d,p)(l.default)},367:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",null,a.default.createElement("article",{className:"card"},a.default.createElement("header",null,a.default.createElement("h2",null,e.product.name)),a.default.createElement("p",null,"Weight: ",e.product.weight),a.default.createElement("p",null,"Price: ",e.product.price),a.default.createElement("p",null,"Year: ",e.product.year),a.default.createElement("footer",null,a.default.createElement(c.Link,{to:"/products/edit/"+e.product.id,className:"button"},"Edit"),a.default.createElement("button",{onClick:function(){return e.cartActions.addItem(e.product)}},"+Cart"))))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),a=r(u),l=n(9),c=(r(l),n(34));o.defaultProps={},o.propTypes={},t.default=o},368:function(e,t){e.exports={apiEndPoint:"http://localhost:7070",authEndPoint:"http://localhost:7070/oauth/token"}},369:function(e,t,n){"use strict";function r(e,t){return console.log(e,t),window.fetch(e,t).then(function(t){return console.log("got response for ",e),t.json()})}function o(e,t){return r(e,t)}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return r(e,{method:"POST",headers:Object.assign({"Content-Type":"application/json"},n),body:JSON.stringify(t)})}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return r(e,{method:"PUT",headers:Object.assign({"Content-Type":"application/json"},n),body:JSON.stringify(t)})}function l(e,t){return r(e,{method:"DELETE",headers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,body:JSON.stringify(t)})}Object.defineProperty(t,"__esModule",{value:!0}),t.getJson=o,t.postJson=u,t.putJson=a,t.deleteJson=l,n(370)},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),o=n(40),u=n(372),a=function(e){return e&&e.__esModule?e:{default:e}}(u),l=n(100),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l),i=function(e){return{product:e.productState.product}},f=function(e){return{actions:(0,o.bindActionCreators)(c,e)}};t.default=(0,r.connect)(i,f)(a.default)},372:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(9),s=r(f),d=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={errors:{}},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.para1.textContent="from ref",this.input.focus(),console.log(this.props.match);var e=this.props.match.params.id;e?this.props.actions.getProduct(e):this.props.actions.updateProduct({name:"",year:2010})}},{key:"changeValue",value:function(e){var t=e.target,n=t.name,r=t.value;console.log(n,r,e.target.validity.valid)}},{key:"saveProduct",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return i.default.createElement("div",null,i.default.createElement("h2",null,this.context.appTitle),i.default.createElement("h2",null,"Product Edit - ",this.props.match.params.id),i.default.createElement("p",{ref:function(t){return e.para1=t}},"Edit details here"),i.default.createElement("form",{onSubmit:function(t){return e.saveProduct(t)}},"Name",i.default.createElement("input",{name:"name",ref:function(t){return e.input=t},onChange:function(t){return e.changeValue(t)},value:this.props.product.name,minLength:"3"}),"Year",i.default.createElement("input",{name:"year",onChange:function(t){return e.changeValue(t)},value:this.props.product.year}),i.default.createElement("button",{type:"submit"},"Save")))}}]),t}(c.Component);t.default=d,d.defaultProps={},d.propTypes={},d.contextTypes={appTitle:s.default.string}},373:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(7),i=r(c),f=n(374),s=r(f),d=n(101),p=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.searchProduct=n.searchProduct.bind(n),n.state={searchResults:[]},n.subject=new s.default.Subject,n}return a(t,e),l(t,[{key:"searchProduct",value:function(){console.log("test ",this.refs.searchInput.value);var e=this.refs.searchInput.value;this.subject.next(e)}},{key:"componentDidMount",value:function(){var e=this;console.log("loading products"),this.textChange=this.subject.subscribe(function(t){console.log("Searching *"+t+"*"),(0,d.searchProducts)(t).then(function(t){e.setState({searchResults:t})})})}},{key:"render",value:function(){var e=this.state.searchResults.map(function(e,t){return i.default.createElement("tr",{key:e.id},i.default.createElement("td",null,e.name),i.default.createElement("td",null,e.price),i.default.createElement("td",null,e.year))});return i.default.createElement("div",{ref:"divContainer"},i.default.createElement("h2",null,"Search "),i.default.createElement("input",{ref:"searchInput",onChange:this.searchProduct,name:"searchInput"}),i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"Name"),i.default.createElement("th",null,"Price"),i.default.createElement("th",null,"Year")),e)))}}]),t}(i.default.Component);t.default=p,p.propTypes={products:c.PropTypes.array},p.defaultProps={products:[]}},659:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(40),u=n(660),a=r(u),l=n(661),c=r(l),i=n(662),f=n(663),s=r(f),d=n(99),p=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(d),[]);localStorage.cart&&(p=JSON.parse(localStorage.cart));var y=(0,o.combineReducers)({cartState:a.default,productState:c.default}),m=(0,o.createStore)(y,{cartState:p},(0,o.applyMiddleware)(s.default,i.logger,i.cart));t.default=m},660:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(console.log("cart Reducer",e,t),t.type){case a.ADD_ITEM_TO_CART:return e.find(function(e){return e.id==t.item.id})?e.map(function(e){return e.id!=t.item.id?e:Object.assign({},e,{qty:e.qty+t.item.qty})}):[].concat(r(e),[t.item]);case a.REMOVE_ITEM_FROM_CART:return e.filter(function(e){return e.id!=t.id});case a.UPDATE_CART:return e.map(function(e){if(e.id!=t.id)return e;var n=t.qty*e.price;return Object.assign({},e,{qty:t.qty,total:n})});case a.EMPTY_CART:return[];default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(159),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),l=[]},661:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(console.log("product reducer ",e,t),t.type){case u.LOADING:return Object.assign({},e,{loading:t.loading});case u.INIT_PRODUCTS:return Object.assign({},e,{products:t.products});case u.EDIT_PRODUCT:return Object.assign({},e,{product:t.product});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(161),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),a={loading:!1,products:[],product:{name:"",year:""}}},662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.logger=function(e){return function(t){return function(n){console.log("**ACtion type",void 0===n?"undefined":r(n)),console.log("Logger Middleware dispatching",n);var o=t(n);return console.log("next state",e.getState()),o}}},t.cart=function(e){return function(t){return function(n){console.log("Cart Middleware dispatching",n);var r=t(n);if(n.type.indexOf("CART")>=0){var o=e.getState().cartState;localStorage.setItem("cart",JSON.stringify(o))}return console.log("next state",e.getState()),r}}}},99:function(e,t,n){"use strict";function r(e){return{type:c.ADD_ITEM_TO_CART,item:{id:e.id,name:e.name,price:e.price,qty:1}}}function o(e){return{type:c.REMOVE_ITEM_FROM_CART,id:e}}function u(e,t){return{type:c.UPDATE_CART,id:e,qty:t}}function a(){return{type:c.EMPTY_CART}}Object.defineProperty(t,"__esModule",{value:!0}),t.addItem=r,t.removeItem=o,t.updateItem=u,t.emptyCart=a;var l=n(159),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l)}},[194]);
//# sourceMappingURL=bundle.b9f382aed79385aac0cf.js.map