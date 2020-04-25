"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const apilove_1 = require("apilove");
class Config {
}
Config.CDN_BASE_URL = "http://localhost:3000/cdn";
Config.USE_LOCAL_CDN = true;
Config.APP_VERSION = require("./package.json").version;
__decorate([
    apilove_1.EnvVarSync,
    __metadata("design:type", Object)
], Config, "CDN_BASE_URL", void 0);
__decorate([
    apilove_1.EnvVarSync,
    __metadata("design:type", Object)
], Config, "USE_LOCAL_CDN", void 0);
exports.Config = Config;
//# sourceMappingURL=Config.js.map