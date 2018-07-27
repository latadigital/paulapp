webpackJsonp([15],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AguaPage = (function () {
    function AguaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AguaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AguaPage');
    };
    AguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agua',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/agua/agua.html"*/'<!--\n  Generated template for the AguaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n		<ion-buttons start >\n			<button ion-button icon-only (click)="ProfileLink()">\n				<ion-icon name="contact"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title text-center>AGUA</ion-title>\n		<ion-buttons end >\n			<button ion-button icon-only>\n				<ion-icon name="ios-mail"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	\n	<div class="water_progress">\n		<img src="assets/img/agua.gif" alt="">\n	</div>\n	<div class="mask">\n		<img src="assets/img/cuerpo.svg" alt="">\n	</div>\n    <ion-fab right bottom>\n        <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>\n\n	<ion-fab left top>\n		<button ion-fab color="primary">100%</button>\n	</ion-fab>\n	\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/agua/agua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AguaPage);
    return AguaPage;
}());

//# sourceMappingURL=agua.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsultaPage = (function () {
    function ConsultaPage(navCtrl, camera, navParams) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
    }
    ConsultaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultaPage');
    };
    ConsultaPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ConsultaPage.prototype.ProfileLink = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    ConsultaPage.prototype.ProfileLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ConsultaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consulta',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/consulta/consulta.html"*/'<!--\n  Generated template for the ConsultaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons start >\n        <button ion-button icon-only (click)="ProfileLink()">\n          <ion-icon name="contact"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>CONSULTAS</ion-title>\n      <ion-buttons end >\n          <button ion-button icon-only>\n            <ion-icon name="ios-mail"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-slides pager>\n\n        <ion-slide>\n            <img src="assets/img/paso1.svg" class="ilustracion-consulta"/>\n            <h2>Paso 1</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit esse aspernatur nulla, alias quisquam. Nemo inventore doloribus minus ducimus.</p>\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="assets/img/paso2.svg" class="ilustracion-consulta"/>\n            <h2>Paso 2</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maxime vitae. Mollitia ipsa maxime consequatur voluptate nemo,</p>\n        </ion-slide>\n      \n        <ion-slide>\n            <img src="assets/img/paso3.svg" class="ilustracion-consulta"/>\n            <h2>Paso 3</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus soluta, assumenda iste saepe sed veniam dolore deleniti </p>\n        </ion-slide>\n        <ion-slide>\n            <img src="assets/img/paso4.svg" class="ilustracion-consulta"/>\n            <h2>Paso 4</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus</p>\n            <button ion-button  round (click)="takePicture();">Tomar Foto</button>\n\n\n           <!-- <img [src]="{{ myphoto }}">-->\n        </ion-slide>\n      \n      </ion-slides>\n\n      <div class="custom-swiper-pagination swiper-pagination"></div>\n</ion-content>\n<!--<ion-footer class="reserva-footer">\n    <ion-toolbar>\n        <button ion-button block color="secondary" (click)="launch(\'url\')">RESERVA TU HORA</button>\n    </ion-toolbar>\n</ion-footer>-->\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/consulta/consulta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConsultaPage);
    return ConsultaPage;
}());

//# sourceMappingURL=consulta.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pautas_pautas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ejercicios_select_ejercicios_select__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preguntas_frecuentes_preguntas_frecuentes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terminos_condiciones_terminos_condiciones__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemProfile = [];
        this.itemProfile = [
            {
                'title': 'Mi pauta de Alimentos',
                'icon': 'restaurant',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'Preguntas Frecuentes',
                'icon': 'help-circle',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            },
            {
                'title': 'mi selección de Ejercicios',
                'icon': 'bicycle',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'Términos y Condiciones',
                'icon': 'glasses',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
        ];
    }
    ProfilePage.prototype.viewPautas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pautas_pautas__["a" /* PautasPage */]);
    };
    ProfilePage.prototype.viewEjercicios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ejercicios_select_ejercicios_select__["a" /* EjerciciosSelectPage */]);
    };
    ProfilePage.prototype.viewTerminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terminos_condiciones_terminos_condiciones__["a" /* TerminosCondicionesPage */]);
    };
    ProfilePage.prototype.viewPreguntas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__preguntas_frecuentes_preguntas_frecuentes__["a" /* PreguntasFrecuentesPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title text-center>Profile</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n                <ion-icon name="ios-mail" color="light"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="content-profile">\n        <div class="profile-circle">\n            <img src="assets/img/young-man-with-modern-hair-cut.svg" width="100%" style="padding: 0;"/>\n        </div>\n        <h1 text-center>Paula Droguett</h1>\n        <p text-center>30 años | 170 cm | 78 Kg</p>\n    </div>\n\n\n\n    <div class="consulta">\n        <div class="item_consulta">\n            <h3><ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon> Próxima Consulta</h3>\n            <p><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon> Miércoles 24 de Abril, 2018 / 15:30 hrs</p>\n        </div>\n    </div>\n\n\n\n   <!--\n    Lista Creada Dinámica profile.ts   \n    \n    <ion-list>\n        <button ion-item *ngFor="let item of itemProfile" (click)="{{ item.Url }}" icon-start>\n            <ion-icon [name]="\'ios-\' + item.icon" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n            {{ item.title }}\n        </button>\n    </ion-list>\n    \n    -->\n\n    <ion-list>\n        <button ion-item (click)="viewPautas()">\n            <ion-icon name="ios-restaurant" color="ico-alimentos" item-start></ion-icon>\n            Mi Pauta de Alimentos\n        </button>\n        <button ion-item (click)="viewEjercicios()">\n            <ion-icon name="ios-bicycle" color="ico-ejercicios" item-start></ion-icon>\n            Mi Selección de Ejercicios\n        </button>\n        <button ion-item (click)="viewPreguntas()">\n            <ion-icon name="ios-help-circle" color="ico-preguntas" item-start></ion-icon>\n            Preguntas Frecuentes\n        </button>\n        <button ion-item (click)="viewTerminos()">\n            <ion-icon name="ios-glasses" color="ico-terminos" item-start></ion-icon>\n            Términos y Condiciones\n        </button>\n    </ion-list>\n   \n\n\n</ion-content>'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PautasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PautasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PautasPage = (function () {
    function PautasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PautasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PautasPage');
    };
    PautasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pautas',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/pautas/pautas.html"*/'<!--\n  Generated template for the PautasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pautas | Paula Droguett</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="content-pautas">\n    <img src="assets/img/desayuno.jpg" alt="Pautas | Paula Droguett">\n    <h2>Desayuno</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n  <div class="content-pautas">\n    <img src="assets/img/media_manana.jpg" alt="Pautas | Paula Droguett">\n    <h2>Media Mañana</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n  <div class="content-pautas">\n    <img src="assets/img/almuerzo.jpg" alt="Pautas | Paula Droguett">\n    <h2>Almuerzo</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n  <div class="content-pautas">\n    <img src="assets/img/merienda.jpg" alt="Pautas | Paula Droguett">\n    <h2>Merienda</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n  <div class="content-pautas">\n    <img src="assets/img/cena.jpg" alt="Pautas | Paula Droguett">\n    <h2>Cena</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n  <div class="content-pautas">\n    <img src="assets/img/tips.jpg" alt="Pautas | Paula Droguett">\n    <h2>Tips</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt dolorem quam nihil enim. Labore, quasi est, eum totam assumenda laudantium optio eos corrupti neque quidem perspiciatis id. Dolorem, nulla!</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/pautas/pautas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PautasPage);
    return PautasPage;
}());

//# sourceMappingURL=pautas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjerciciosSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EjerciciosSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EjerciciosSelectPage = (function () {
    function EjerciciosSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EjerciciosSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EjerciciosSelectPage');
    };
    EjerciciosSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ejercicios-select',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/ejercicios-select/ejercicios-select.html"*/'<!--\n  Generated template for the EjerciciosSelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi selección de Ejercicios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="content-sub_title">\n        \n        <img src="assets/img/weightlifting.svg" alt="">\n        <p>Acá Puedes ver tu selección de ejercicios para hacer por los próximos 20 días durante 10 minutos</p>\n    </div>\n\n    <ion-list>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-abdomen.svg">\n            </ion-thumbnail>\n            <h2>La vela</h2>\n            <p>Abdomen</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-pierna.svg">\n            </ion-thumbnail>\n            <h2>Sentadilla en punta</h2>\n            <p>Piernas y Glúteos</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-face.svg">\n            </ion-thumbnail>\n            <h2>Ejercicio de Cara</h2>\n            <p>Cara</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-abdomen.svg">\n            </ion-thumbnail>\n            <h2>Abdominales</h2>\n            <p>Abdomen</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-cuerpo.svg">\n            </ion-thumbnail>\n            <h2>Sentadillas con Pesas</h2>\n            <p>Cuerpo Completo</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-brazos.svg">\n            </ion-thumbnail>\n            <h2>Pesos en el Hombro</h2>\n            <p>Brazos y Pecho</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-abdomen.svg">\n            </ion-thumbnail>\n            <h2>La vela</h2>\n            <p>Abdomen</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-pierna.svg">\n            </ion-thumbnail>\n            <h2>Sentadilla en punta</h2>\n            <p>Piernas y Glúteos</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-face.svg">\n            </ion-thumbnail>\n            <h2>Ejercicio de Cara</h2>\n            <p>Cara</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-abdomen.svg">\n            </ion-thumbnail>\n            <h2>Abdominales</h2>\n            <p>Abdomen</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-cuerpo.svg">\n            </ion-thumbnail>\n            <h2>Sentadillas con Pesas</h2>\n            <p>Cuerpo Completo</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="assets/img/ico-brazos.svg">\n            </ion-thumbnail>\n            <h2>Pesos en el Hombro</h2>\n            <p>Brazos y Pecho</p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/ejercicios-select/ejercicios-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EjerciciosSelectPage);
    return EjerciciosSelectPage;
}());

//# sourceMappingURL=ejercicios-select.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntasFrecuentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreguntasFrecuentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreguntasFrecuentesPage = (function () {
    function PreguntasFrecuentesPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    PreguntasFrecuentesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.obtenerDatosFaqs()
            .subscribe(function (data) { _this.faqs = data; }, function (error) { console.log(error); });
    };
    PreguntasFrecuentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preguntas-frecuentes',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/preguntas-frecuentes/preguntas-frecuentes.html"*/'<!--\n  Generated template for the PreguntasFrecuentesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Preguntas Frecuentes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!--<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>-->\n\n    <ion-list>\n        <div *ngFor="let faq of faqs">\n            {{faq.title.rendered}}\n            <p>\n                {{faq.acf.respuesta_faqs}} \n            </p>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/preguntas-frecuentes/preguntas-frecuentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__["a" /* PauladroguettProvider */]])
    ], PreguntasFrecuentesPage);
    return PreguntasFrecuentesPage;
}());

//# sourceMappingURL=preguntas-frecuentes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosCondicionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TerminosCondicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerminosCondicionesPage = (function () {
    function TerminosCondicionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TerminosCondicionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TerminosCondicionesPage');
    };
    TerminosCondicionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos-condiciones',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/terminos-condiciones/terminos-condiciones.html"*/'<!--\n  Generated template for the TerminosCondicionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Términos y Condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n    <div class="content-terminos">\n        <h1>Términos y Condiciones de Uso</h1>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \n            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis \n            dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies \n            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n        </p>\n\n        <p>\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In \n            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam \n            dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. \n            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n        </p>\n        <p>\n            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam \n            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus \n            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n        </p>\n        <p>\n                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum \n                rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. \n                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas \n                nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis \n                faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. \n                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed \n                consequat, leo eget bibendum sodales, augue velit cursus nunc,\n        </p>\n        <p>\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \n            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis \n            dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies \n            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n        </p>\n\n        <p>\n            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In \n            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam \n            dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. \n            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n        </p>\n        <p>\n            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam \n            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus \n            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. \n            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n        </p>\n        <p>\n                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum \n                rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. \n                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas \n                nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis \n                faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. \n                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed \n                consequat, leo eget bibendum sodales, augue velit cursus nunc,\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/terminos-condiciones/terminos-condiciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TerminosCondicionesPage);
    return TerminosCondicionesPage;
}());

//# sourceMappingURL=terminos-condiciones.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_blog_single_blog__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pauladroguett_pauladroguett__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogPage = (function () {
    function BlogPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    BlogPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.obtenerDatosBlogs()
            .subscribe(function (data) { _this.blogs = data; }, function (error) { console.log(error); });
    };
    BlogPage.prototype.singleBlog = function (blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__single_blog_single_blog__["a" /* SingleBlogPage */], { blog: blog });
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/blog/blog.html"*/'<!--\n  Generated template for the BlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-buttons start >\n            <button ion-button icon-only (click)="ProfileLink()">\n                <ion-icon name="contact"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title text-center>BLOG</ion-title>\n\n        <ion-buttons end >\n            <button ion-button icon-only>\n                <ion-icon name="ios-mail"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n   <!-- <ion-list>\n        <button ion-item *ngFor="let blog of blogs" color="dark">\n            {{blog.id}} - {{blog.name}}\n        </button>\n    </ion-list>-->\n\n    \n    <ion-card *ngFor="let blog of blogs">\n        <div class="box-img">\n            <img src="{{blog.acf.imagen_miniatura_noticias.sizes.medium}}" alt="">\n        </div>\n        <div class="box-text">\n            <h1> {{blog.title.rendered}} </h1>\n            <p> {{blog.acf.bajada_noticias}} </p>\n            <button (click)="singleBlog(blog)">Seguir Leyendo</button>\n        </div>\n    </ion-card>\n   \n\n\n\n    <ion-fab right bottom>\n        <button ion-fab color="whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></button>\n        <ion-fab-list side="left">\n          <button class="button-reserva" ion-fab> RESERVA TU HORA</button>\n        </ion-fab-list>\n    </ion-fab>\n   \n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/blog/blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_pauladroguett_pauladroguett__["a" /* PauladroguettProvider */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SingleBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SingleBlogPage = (function () {
    function SingleBlogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blog = navParams.data.blog;
    }
    SingleBlogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingleBlogPage');
    };
    SingleBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-blog',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/single-blog/single-blog.html"*/'<!--\n  Generated template for the SingleBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{blog.title.rendered}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n  <img src="{{blog.acf.imagen_full_noticias.sizes.medium}}" alt="">\n  <h1 padding>{{blog.title.rendered}}</h1>\n  <p padding> {{blog.acf.bajada_noticias}} </p>\n  <p [innerHTML]="blog.content.rendered" padding></p>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/single-blog/single-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SingleBlogPage);
    return SingleBlogPage;
}());

//# sourceMappingURL=single-blog.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EjerciciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EjerciciosPage = (function () {
    function EjerciciosPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    EjerciciosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.obtenerDatosEjercicios()
            .subscribe(function (data) { _this.ejercicios = data; }, function (error) { console.log(error); }),
            this.proveedor.obtenerDatosCategoriasAbdomen()
                .subscribe(function (data) { _this.abdomenes = data; }, function (error) { console.log(error); }),
            this.proveedor.obtenerDatosCategoriasBrazos()
                .subscribe(function (data) { _this.Catbrazos = data; }, function (error) { console.log(error); });
    };
    EjerciciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ejercicios',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/ejercicios/ejercicios.html"*/'<!--\n  Generated template for the EjerciciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons start >\n        <button ion-button icon-only>\n          <ion-icon name="contact"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>EJERCICIOS</ion-title>\n      <ion-buttons end >\n          <button ion-button icon-only>\n            <ion-icon name="ios-mail"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="category-button" ng-model="">\n    <button>\n        <img src="assets/img/ejercicios/05.jpg" alt="">\n        <div class="card-title">Abdomen</div>\n    </button>\n  </ion-card>\n\n  <ion-card class="category-button">\n    <button>\n        <img src="assets/img/ejercicios/03.jpg" alt="">\n        <div class="card-title">Brazos y Pecho</div>\n    </button>\n  </ion-card>\n\n  <ion-card class="category-button">\n    <button>\n        <img src="assets/img/ejercicios/01.jpg" alt="">\n        <div class="card-title">Cara</div>\n    </button>\n  </ion-card>\n\n  <ion-card class="category-button">\n    <button>\n        <img src="assets/img/ejercicios/02.jpg" alt="">\n        <div class="card-title">Cuerpo completo</div>\n    </button>\n  </ion-card>\n\n  <ion-card class="category-button">\n    <button>\n        <img src="assets/img/ejercicios/04.jpg" alt="">\n        <div class="card-title">Piernas y Glúteos</div>\n    </button>\n  </ion-card>\n\n\n  <ion-fab right bottom>\n    <button ion-fab color="whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button class="button-reserva" ion-fab> RESERVA TU HORA</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/ejercicios/ejercicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__["a" /* PauladroguettProvider */]])
    ], EjerciciosPage);
    return EjerciciosPage;
}());

//# sourceMappingURL=ejercicios.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasRecetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListasRecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListasRecetasPage = (function () {
    function ListasRecetasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ListaRecetas = [
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            },
            {
                titulo: "Pollo con Arroz",
            }
        ];
    }
    ListasRecetasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListasRecetasPage');
    };
    ListasRecetasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listas-recetas',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/listas-recetas/listas-recetas.html"*/'<!--\n  Generated template for the ListasRecetasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n    <ion-header>\n\n        <ion-navbar color="primary">\n            <ion-title>Lista Recetas</ion-title>\n        </ion-navbar>\n\n    </ion-header>\n\n\n    <ion-content class="card-background-page">\n\n        <ion-card class="banner-principal">\n            <img src="https://placeimg.com/640/480/any"/>\n            <div class="card-title">ALMUERZO</div>\n        </ion-card>\n\n       <!-- <ion-searchbar (ionInput)="getListaRecetas($event)"></ion-searchbar>-->\n\n        <ion-list>\n            <button ion-item *ngFor="let item of ListaRecetas">\n                <!--<ion-icon name="arrow-forward" item-start ></ion-icon>-->\n                {{ item.titulo }}\n            </button>\n        </ion-list>\n\n    </ion-content>\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/listas-recetas/listas-recetas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListasRecetasPage);
    return ListasRecetasPage;
}());

//# sourceMappingURL=listas-recetas.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.obtenerUsuarios()
            .subscribe(function (data) { _this.user = data; }, function (error) { console.log(error); });
    };
    LoginPage.prototype.LinkTabsLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    /*login(){
      console.log("Username: "+ this.username);
      console.log("Password: "+ this.password);
    }*/
    LoginPage.prototype.onLogin = function () {
        console.log(this.username, this.password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/login/login.html"*/'<!--\n  Generated template for the SingupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header color="trasparent">\n\n    <ion-navbar color="trasparent">\n      <ion-title></ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  \n  <ion-content>\n  \n      <div class="bg-singup"></div>\n      <ion-list>\n          <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input type="text" [(ngModel)]="username"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n              <ion-label floating >Password</ion-label>\n              <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n\n      </ion-list>\n  \n      <div padding>\n          <button block class="btn-ingresar" (click)="LinkTabsLogin()">Ingresar</button>\n      </div>\n        \n  </ion-content>\n  \n  \n\n\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pauladroguett_pauladroguett__["a" /* PauladroguettProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listas_recetas_listas_recetas__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecetasPage = (function () {
    function RecetasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TypeRecetas = [
            {
                titulo: "Ayuna",
                imgRecetas: "assets/img/recetas/01.jpg",
            },
            {
                titulo: "Almuerzo",
                imgRecetas: "assets/img/recetas/02.jpg",
            },
            {
                titulo: "cena",
                imgRecetas: "assets/img/recetas/03.jpg",
            },
            {
                titulo: "Eventos Especiales",
                imgRecetas: "assets/img/recetas/04.jpg",
            },
        ];
    }
    RecetasPage.prototype.singleReceta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listas_recetas_listas_recetas__["a" /* ListasRecetasPage */]);
    };
    RecetasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecetasPage');
    };
    RecetasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recetas',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/recetas/recetas.html"*/'<!--\n  Generated template for the RecetasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons start >\n        <button ion-button icon-only (click)="ProfileLink()">\n          <ion-icon name="contact"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title text-center>RECETAS</ion-title>\n      <ion-buttons end >\n          <button ion-button icon-only>\n            <ion-icon name="ios-mail"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n  <ion-content class="card-background-page">\n\n    <ion-card class="banner-principal">\n      <img src="assets/img/card-saopaolo.png"/>\n      <div class="card-title">INSTRUCTIVO</div>\n    </ion-card>\n\n    <ion-row padding>\n      <p class="sub-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>\n    </ion-row>\n\n\n    <ion-row padding>\n      <h2 class="big-title">RECETAS</h2>\n    </ion-row>\n\n\n    <ion-card class="category-button" *ngFor="let item of TypeRecetas">\n      <button (click)="singleReceta()">\n          <img [src]="item.imgRecetas"/>\n          <div class="card-title">{{ item.titulo }}</div>\n      </button>\n    </ion-card>\n\n    <ion-fab right bottom>\n      <button ion-fab color="whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button class="button-reserva" ion-fab> RESERVA TU HORA</button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n\n  <!--<div class="reserva">\n    <button> <ion-icon ios="logo-whatsapp" md="logo-whatsapp"></ion-icon> RESERVA TU HORA</button>\n  </div>-->\n  \n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/recetas/recetas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RecetasPage);
    return RecetasPage;
}());

//# sourceMappingURL=recetas.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SingupPage = (function () {
    function SingupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SingupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingupPage');
    };
    SingupPage.prototype.LinkTabsSingup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SingupPage.prototype.register = function () {
        if (this.name.length == 0 || this.username.length == 0 || this.email.length == 0 || this.rut.length == 0 || this.password.length == 0 || this.repassword.length == 0) {
            alert("Completa los campos");
        }
    };
    SingupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singup',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/singup/singup.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n        <ion-navbar>\n          <ion-title></ion-title>\n        </ion-navbar>\n      \n      </ion-header>\n      \n    \n    <ion-content padding>\n        <ion-list>\n    \n            <ion-item>\n              <ion-input type="text" placeholder="Nombre" [(ngModel)]="name"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n              <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="text" placeholder="Email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-input type="text" placeholder="Rut" [(ngModel)]="rut"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="password" placeholder="Repetir Password" [(ngModel)]="repassword"></ion-input>\n            </ion-item>\n          \n          </ion-list>\n          \n          <div padding>\n            <button block (click)="register()" class="btn-ingresar">Crear Cuenta</button>\n          </div>\n    </ion-content>\n    '/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/singup/singup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SingupPage);
    return SingupPage;
}());

//# sourceMappingURL=singup.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singup_singup__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.LinkLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.LinkSingUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__singup_singup__["a" /* SingupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n        <div class="bg-welcome"></div>\n       <!-- <div class="bg-video">\n            <video src="assets/video/bg-video.mp4" autoplay loop></video>\n        </div>-->\n    <div class="content-bienvenido">\n        <div class="box-logo">\n            <img src="assets/img/logo-white.svg" class="zoomIn" alt="">\n        </div> \n\n    </div>\n\n    <div class="acction-buttons">\n        <button class="ingresa"  (click)="LinkLogin()" >Ingresar</button>\n        <button class="crear"(click)="LinkSingUp()">Crear Cuenta</button>\n    </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agua/agua.module": [
		297,
		14
	],
	"../pages/blog/blog.module": [
		299,
		13
	],
	"../pages/consulta/consulta.module": [
		298,
		12
	],
	"../pages/ejercicios-select/ejercicios-select.module": [
		300,
		11
	],
	"../pages/ejercicios/ejercicios.module": [
		301,
		10
	],
	"../pages/listas-recetas/listas-recetas.module": [
		302,
		9
	],
	"../pages/login/login.module": [
		304,
		8
	],
	"../pages/pautas/pautas.module": [
		303,
		7
	],
	"../pages/preguntas-frecuentes/preguntas-frecuentes.module": [
		306,
		6
	],
	"../pages/profile/profile.module": [
		305,
		5
	],
	"../pages/recetas/recetas.module": [
		308,
		4
	],
	"../pages/single-blog/single-blog.module": [
		307,
		3
	],
	"../pages/singup/singup.module": [
		309,
		2
	],
	"../pages/terminos-condiciones/terminos-condiciones.module": [
		310,
		1
	],
	"../pages/welcome/welcome.module": [
		311,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agua_agua__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ejercicios_ejercicios__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_single_blog_single_blog__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listas_recetas_listas_recetas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pautas_pautas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ejercicios_select_ejercicios_select__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_preguntas_frecuentes_preguntas_frecuentes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_terminos_condiciones_terminos_condiciones__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_singup_singup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_pauladroguett_pauladroguett__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ejercicios_ejercicios__["a" /* EjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_single_blog_single_blog__["a" /* SingleBlogPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listas_recetas_listas_recetas__["a" /* ListasRecetasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pautas_pautas__["a" /* PautasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ejercicios_select_ejercicios_select__["a" /* EjerciciosSelectPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_preguntas_frecuentes_preguntas_frecuentes__["a" /* PreguntasFrecuentesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terminos_condiciones_terminos_condiciones__["a" /* TerminosCondicionesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_singup_singup__["a" /* SingupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agua/agua.module#AguaPageModule', name: 'AguaPage', segment: 'agua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consulta/consulta.module#ConsultaPageModule', name: 'ConsultaPage', segment: 'consulta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ejercicios-select/ejercicios-select.module#EjerciciosSelectPageModule', name: 'EjerciciosSelectPage', segment: 'ejercicios-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ejercicios/ejercicios.module#EjerciciosPageModule', name: 'EjerciciosPage', segment: 'ejercicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listas-recetas/listas-recetas.module#ListasRecetasPageModule', name: 'ListasRecetasPage', segment: 'listas-recetas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pautas/pautas.module#PautasPageModule', name: 'PautasPage', segment: 'pautas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preguntas-frecuentes/preguntas-frecuentes.module#PreguntasFrecuentesPageModule', name: 'PreguntasFrecuentesPage', segment: 'preguntas-frecuentes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single-blog/single-blog.module#SingleBlogPageModule', name: 'SingleBlogPage', segment: 'single-blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recetas/recetas.module#RecetasPageModule', name: 'RecetasPage', segment: 'recetas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/singup/singup.module#SingupPageModule', name: 'SingupPage', segment: 'singup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos-condiciones/terminos-condiciones.module#TerminosCondicionesPageModule', name: 'TerminosCondicionesPage', segment: 'terminos-condiciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ejercicios_ejercicios__["a" /* EjerciciosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_single_blog_single_blog__["a" /* SingleBlogPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listas_recetas_listas_recetas__["a" /* ListasRecetasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_consulta_consulta__["a" /* ConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pautas_pautas__["a" /* PautasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ejercicios_select_ejercicios_select__["a" /* EjerciciosSelectPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_preguntas_frecuentes_preguntas_frecuentes__["a" /* PreguntasFrecuentesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terminos_condiciones_terminos_condiciones__["a" /* TerminosCondicionesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_singup_singup__["a" /* SingupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_pauladroguett_pauladroguett__["a" /* PauladroguettProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PauladroguettProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PauladroguettProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PauladroguettProvider = (function () {
    function PauladroguettProvider(http) {
        this.http = http;
        console.log('Hello PauladroguettProvider Provider');
    }
    PauladroguettProvider.prototype.obtenerDatosBlogs = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/noticias');
    };
    PauladroguettProvider.prototype.obtenerDatosFaqs = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/faqs');
    };
    //Data Ejercicios Categorias
    PauladroguettProvider.prototype.obtenerDatosEjercicios = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/ejercicios');
    };
    PauladroguettProvider.prototype.obtenerDatosCategoriasAbdomen = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/categories/16');
    };
    PauladroguettProvider.prototype.obtenerDatosCategoriasBrazos = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/categories/13');
    };
    PauladroguettProvider.prototype.obtenerDatosCategoriasCara = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/categories/14');
    };
    PauladroguettProvider.prototype.obtenerDatosCategoriasCuerpo = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/categories/17');
    };
    PauladroguettProvider.prototype.obtenerDatosCategoriasGluteos = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/categories/15');
    };
    PauladroguettProvider.prototype.obtenerUsuarios = function () {
        return this.http.get('http://pauladroguett.cl/wp-json/wp/v2/users/');
    };
    PauladroguettProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PauladroguettProvider);
    return PauladroguettProvider;
}());

//# sourceMappingURL=pauladroguett.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consulta_consulta__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agua_agua__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recetas_recetas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ejercicios_ejercicios__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__consulta_consulta__["a" /* ConsultaPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__agua_agua__["a" /* AguaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__blog_blog__["a" /* BlogPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__recetas_recetas__["a" /* RecetasPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__ejercicios_ejercicios__["a" /* EjerciciosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/paula/src/pages/tabs/tabs.html"*/'\n<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabIcon="ios-medkit"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="ios-water-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="ios-paper"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="ios-restaurant"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="ios-body"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/paula/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map