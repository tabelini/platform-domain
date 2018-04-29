"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IoTData {
    constructor(endPointId, timestamp, sensorId, value, id, customerId) {
        this.endPointId = endPointId;
        this.timestamp = timestamp;
        this.sensorId = sensorId;
        this.value = value;
        this.id = id;
        this.customerId = customerId;
    }
}
exports.IoTData = IoTData;
class IoTState {
    constructor(endPointId, actuatorId, value, id, customerId, timestamp) {
        this.endPointId = endPointId;
        this.actuatorId = actuatorId;
        this.value = value;
        this.id = id;
        this.customerId = customerId;
        this.timestamp = timestamp;
    }
}
exports.IoTState = IoTState;
//# sourceMappingURL=IoT.js.map