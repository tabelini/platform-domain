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
    constructor(endPointId, actuatorId, value, defaultValue, id, customerId, timestamp) {
        this.endPointId = endPointId;
        this.actuatorId = actuatorId;
        this.value = value;
        this.defaultValue = defaultValue;
        this.id = id;
        this.customerId = customerId;
        this.timestamp = timestamp;
    }
}
exports.IoTState = IoTState;
class IoTSensor {
    constructor(endPointId, sensorId, type, id, customerId) {
        this.endPointId = endPointId;
        this.sensorId = sensorId;
        this.type = type;
        this.id = id;
        this.customerId = customerId;
    }
}
exports.IoTSensor = IoTSensor;
class TimeCondition {
    constructor(endPointId, actuatorId, value, timeRange, weekDays, months, days, id, customerId, timestamp) {
        this.endPointId = endPointId;
        this.actuatorId = actuatorId;
        this.value = value;
        this.timeRange = timeRange;
        this.weekDays = weekDays;
        this.months = months;
        this.days = days;
        this.id = id;
        this.customerId = customerId;
        this.timestamp = timestamp;
    }
}
exports.TimeCondition = TimeCondition;
class SensorCondition {
    constructor(endPointId, actuatorId, value, sensorEndPointId, sensorId, operator, referenceValues, latchTime, lastTimeOn, id, customerId, timestamp) {
        this.endPointId = endPointId;
        this.actuatorId = actuatorId;
        this.value = value;
        this.sensorEndPointId = sensorEndPointId;
        this.sensorId = sensorId;
        this.operator = operator;
        this.referenceValues = referenceValues;
        this.latchTime = latchTime;
        this.lastTimeOn = lastTimeOn;
        this.id = id;
        this.customerId = customerId;
        this.timestamp = timestamp;
    }
}
exports.SensorCondition = SensorCondition;
class EndPoint {
    constructor(name, location, type = '', id, customerId, timestamp) {
        this.name = name;
        this.location = location;
        this.type = type;
        this.id = id;
        this.customerId = customerId;
        this.timestamp = timestamp;
    }
}
exports.EndPoint = EndPoint;
var IoTOperator;
(function (IoTOperator) {
    IoTOperator["GREATER_THAN"] = "GREATER_THAN";
    IoTOperator["LESS_THAN"] = "LESS_THAN";
})(IoTOperator = exports.IoTOperator || (exports.IoTOperator = {}));
//# sourceMappingURL=IoT.js.map