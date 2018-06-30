"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var serv_service_1 = require("./serv.service");
describe('ServService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [serv_service_1.ServService]
        });
    });
    it('should be created', testing_1.inject([serv_service_1.ServService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=serv.service.spec.js.map