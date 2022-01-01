(()=>{"use strict";var e=".card__image",t=".card__delete-button",n=".card__like-button",r="card__like-button_active",o="popup_opened",i=".form",a=".form__submit-button",c="loader_visible",u=document.querySelector("#formEditProfile"),l=u.elements.name,s=u.elements.about,f=document.querySelector("#formEditAvatar"),p=document.querySelector("#formAddCard"),h=document.querySelector(".profile__avatar-container"),d=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),y={formSelector:".form",fieldsetSelector:".form__input-container",inputSelector:".form__field-input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__field-input_type_error",errorClass:"form__field-error_active"};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(".".concat(n))}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&m(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function o(e,t,n,r,i){var a=e._id,c=e.name,u=e.link,l=e.userId,s=e.likes,f=e.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this._id=a,this._name=c,this._alt=c,this._link=u,this.likesCount=s.length,this._isMyCard=f._id===l,this.isLiked=s.some((function(e){return e._id===l})),this._selector=i,this._handleCardClick=t,this._handleLikeClick=n,this._handleDeleteClick=r}var i,a;return i=o,(a=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"create",value:function(){return this._element=this._getElement(),this._element.querySelector(".card__title").textContent=this._name,this._element.querySelector(e).src=this._link,this._element.querySelector(e).alt=this._name,this.toggleLikeButton(),this._setEventListeners(),this._isMyCard||this._element.querySelector(t).classList.add("card__delete-button_inactive"),this._element}},{key:"delete",value:function(){this._element.remove()}},{key:"toggleLikeButton",value:function(){var e=this._element.querySelector(n);this.isLiked?e.classList.add(r):e.classList.remove(r),this._element.querySelector(".card__likes").textContent=this.likesCount}},{key:"_setEventListeners",value:function(){var r=this;this._element.querySelector(e).addEventListener("click",(function(){r._handleCardClick()})),this._element.querySelector(n).addEventListener("click",(function(){r._handleLikeClick(r._id,r.isLiked)})),this._element.querySelector(t).addEventListener("click",(function(){r._handleDeleteClick(r._id)}))}}])&&b(i.prototype,a),o}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners(this._formElement),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(".".concat(t)),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add(o),window.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(o),window.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains(e._popupSelector))&&e.close()}))}}])&&S(t.prototype,n),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},O(e,t,n||e)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,n))._handleFormSubmit=r,t._formElement=t._popupElement.querySelector(i),t._inputList=Array.from(t._formElement.querySelectorAll(".form__field-input")),t._buttonSubmit=t._popupElement.querySelector(a),t._buttonText=t._buttonSubmit.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._buttonText}},{key:"close",value:function(){O(I(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"setEventListeners",value:function(){var e=this;O(I(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&C(t.prototype,n),u}(w);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},U(e,t,n||e)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function B(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(u,e);var t,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e))._formElement=t._popupElement.querySelector(i),t._buttonSubmit=t._popupElement.querySelector(a),t._buttonText=t._buttonSubmit.textContent,t}return t=u,(n=[{key:"apply",value:function(e){this._handleFormSubmit=e}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Удаление...":this._buttonText}},{key:"setEventListeners",value:function(){var e=this;U(A(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&T(t.prototype,n),u}(w);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},M(e,t,n||e)}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function H(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popupElement.querySelector(".".concat("popup__image")),t._popupImageTitle=t._popupElement.querySelector(".".concat("popup__image-title")),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;M(J(a.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=n,this._popupImageTitle.textContent=n}}])&&F(t.prototype,n),a}(w);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(){function e(t){var n=this,r=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,"deleteCard",(function(e){return fetch("".concat(n._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:n._headers}).then(n._checkResponse)})),G(this,"setLike",(function(e){return fetch("".concat(n._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:n._headers}).then(n._checkResponse)})),G(this,"deleteLike",(function(e){return fetch("".concat(n._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:n._headers}).then(n._checkResponse)})),this._baseUrl=r,this._headers=o}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"updateUserData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"postCard",value:function(e){var t=e.place,n=e.picture;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}}])&&$(t.prototype,n),e}();function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t,n){var r=t.profileTitleSelector,o=t.profileSubtitleSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(".".concat(r)),this._about=document.querySelector(".".concat(o)),this._avatarUrl=document.querySelector(".".concat(i)),this._getUserData=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._getUserData()}},{key:"setUserInfo",value:function(e){var t=e._id,n=e.name,r=e.about,o=e.avatar;this.userId=t,this._name.textContent=n,this._about.textContent=r,this._avatarUrl.src=o}}])&&Q(t.prototype,n),e}();function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(".".concat(t))}var t,n;return t=e,n=[{key:"renderLoading",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?this._element.classList.add(c):this._element.classList.remove(c)}}],n&&X(t.prototype,n),e}();function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=new K({baseUrl:"https://nomoreparties.co/v1/plus-cohort-2",headers:{authorization:"077bc8dc-0b44-4a3f-8309-cb8bcf80fcc6","Content-Type":"application/json"}}),te=new W({profileTitleSelector:"profile__title",profileSubtitleSelector:"profile__subtitle",profileAvatarSelector:"profile__avatar"},(function(){return ee.getUserData()})),ne=new v({renderer:function(e){ne.addItem(pe(e))}},"cards__list"),re=new Y("profile__loader"),oe=new E(y,u),ie=new E(y,f),ae=new E(y,p);oe.enableValidation(),ie.enableValidation(),ae.enableValidation();var ce=new R({popupSelector:"popup_type_edit-profile",handleFormSubmit:function(e){ce.renderLoading(!0),ee.updateUserData(e).then((function(e){te.setUserInfo(e),ce.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ce.renderLoading(!1)}))}}),ue=new R({popupSelector:"popup_type_edit-avatar",handleFormSubmit:function(e){ue.renderLoading(!0),re.renderLoading(),ee.updateProfileAvatar(e).then((function(e){te.setUserInfo(e),ue.close(),re.renderLoading(!1)})).catch((function(e){console.log("".concat(e))})).finally((function(){ue.renderLoading(!1)}))}}),le=new R({popupSelector:"popup_type_add-card",handleFormSubmit:function(e){le.renderLoading(!0),ee.postCard(e).then((function(e){ne.addItem(pe(e)),le.close()})).catch((function(e){console.log("".concat(e))})).finally((function(){le.renderLoading(!1)}))}}),se=new D("popup_type_delete-card");d.addEventListener("click",(function(){te.getUserInfo().then((function(e){l.value=e.name,s.value=e.about,oe.resetValidation(),ce.open()})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),_.addEventListener("click",(function(){ae.resetValidation(),le.open()})),h.addEventListener("click",(function(){ie.resetValidation(),ue.open()}));var fe=new z("popup_type_image-preview");function pe(e){e.userId=te.userId;var t=new g(e,(function(){fe.open(e)}),(function(e,n){n?ee.deleteLike(e).then((function(e){t.likesCount=e.likes.length,t.isLiked=!1,t.toggleLikeButton()})).catch((function(e){console.log("Ошибка: ".concat(e))})):ee.setLike(e).then((function(e){t.likesCount=e.likes.length,t.isLiked=!0,t.toggleLikeButton()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}),(function(e){se.open(),se.apply((function(){se.renderLoading(!0),ee.deleteCard(e).then((function(){t.delete(),se.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){se.renderLoading(!1)}))}))}),"#card-template");return t.create()}le.setEventListeners(),fe.setEventListeners(),ce.setEventListeners(),ue.setEventListeners(),se.setEventListeners(),Promise.all([ee.getUserData(),ee.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo(o),i.forEach((function(e){return ne.addItem(pe(e))}))})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=main.js.map