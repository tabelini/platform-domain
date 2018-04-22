"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IoTData {
    constructor(id, endPointId, timestamp, sensorId, value) {
        this.id = id;
        this.endPointId = endPointId;
        this.timestamp = timestamp;
        this.sensorId = sensorId;
        this.value = value;
    }
}
exports.IoTData = IoTData;
class IotState {
    constructor(endPointId, actuatorId, value) {
        this.endPointId = endPointId;
        this.actuatorId = actuatorId;
        this.value = value;
    }
}
exports.IotState = IotState;
//# sourceMappingURL=IoT.js.map