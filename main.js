(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._handlePopupImage=n,this._templateSelector=r}var n,r;return n=t,(r=[{key:"_openPopupImage",value:function(){this._handlePopupImage(this._name,this._link)}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_handleLikeButton",value:function(){this._likedButtonElement.classList.toggle("elements__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._likedButtonElement.addEventListener("click",(function(){t._handleLikeButton()})),this._deleteButtonElement.addEventListener("click",(function(){t._handleDeleteCard()})),this._cardImage.addEventListener("click",(function(){t._openPopupImage()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__image"),this._cardImage.src=this._link,this._element.querySelector(".elements__name").textContent=this._name,this._cardImage.alt=this._name,this._likedButtonElement=this._element.querySelector(".elements__like"),this._deleteButtonElement=this._element.querySelector(".elements__delete"),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".popup__form",inputSelector:".popup__name",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__type_error_activ",inputError:".popup__error"};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var l=function(){function t(e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._inputList=function(t){if(Array.isArray(t))return i(t)}(r=this._formElement.querySelectorAll(this._config.inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.toggleButtonState()}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.textContent=""}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some(this._isInputInvalid)}},{key:"_isInputInvalid",value:function(t){return!t.validity.valid}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){var r=e.data,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close"),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._hanldeMouseClose=this._hanldeMouseClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_hanldeMouseClose",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close),this._popup.addEventListener("mousedown",this._hanldeMouseClose)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageActive=e._popup.querySelector(".popup__image"),e._popupSubtitle=e._popup.querySelector(".popup__subtitle"),e}return e=u,(n=[{key:"open",value:function(t,e){v(h(u.prototype),"open",this).call(this),this._popupSubtitle.textContent=t,this._popupImageActive.src=e,this._popupImageActive.alt=t}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handlerSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__name")),n._submitForm=n._submitForm.bind(j(n)),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"_submitForm",value:function(t){t.preventDefault(),this._handlerSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){w(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}},{key:"close",value:function(){w(k(u.prototype),"close",this).call(this),this._form.reset()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function t(e){var n=e.name,r=e.about;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileAboutMe=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAboutMe.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileAboutMe.textContent=t.about}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.url,this.headers=e.headers}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch(this.url,{method:"GET",headers:this.headers,"Content-Type":"application/json"}).then((function(t){return t.json()}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),q=document.querySelector(".profile__edit"),R=document.getElementById("name"),A=document.getElementById("about"),x=document.querySelector(".profile__add"),M=document.querySelector(".popup__form_type_add"),D=document.querySelector(".popup__form_type_edit"),V=new l(r,M);V.enableValidation(),new l(r,D).enableValidation();var U=new s({data:initialCards,renderer:function(t){var e=F(t);U.addItem(e)}},".elements");function F(t){return new n(t,z,"#template-card").generateCard()}U.renderItems(),x.addEventListener("click",(function(){V.disableButton(),$.open()}));var N=new _(".popup_type_image");function z(t,e){N.open(t,e)}q.addEventListener("click",(function(){var t=G.getUserInfo();R.value=t.name,A.value=t.about,H.open()}));var G=new C({name:".profile__name",about:".profile__about"}),$=new P(".popup_type_add",(function(t){var e=F(t);U.addItem(e),$.close()})),H=new P(".popup_type_profile",(function(t){G.setUserInfo(t),H.close()}));$.setEventListeners(),H.setEventListeners(),N.setEventListeners(),new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63/cards",headers:{authorization:"eba49e48-9424-44a9-a780-bb86209d2093","Content-Type":"application/json"}}).getInitialCards()})();