export class IoTData {
    constructor(public endPointId: string, public timestamp: number, public sensorId: number, public value: number,
                public id?: string, public customerId?: string) {
    }
}

/**
 * Digital 3, 5, 6, 9, 10, 11: actuatorId 0 - 5
 */
export class IoTState {
    constructor(public endPointId: string, public actuatorId: number, public value: number, public defaultValue: number,
                public id?: string, public customerId?: string, public timestamp?: number) {
    }
}

/**
 * A0 - A5: sensorId 0 - 5
 * Digital 2,4,7,8,12,13, 6 - 11
 */
export class IoTSensor {
    constructor(public endPointId: string, public sensorId: number, public type: string, public id?: string,
                public customerId?: string) {
    }
}

/**
 * Time Condition that modifies the Actuators values
 */
export class TimeCondition {
    constructor(public endPointId: string, public actuatorId: number, public value: number, public timeRange: string,
                public weekDays?: number[], public months?: number[], public days?: number[], public id?: string,
                public customerId?: string, public timestamp?: number) {
    }
}

/**
 * Sensor Condition that modifies the actuators values
 */
export class SensorCondition {
    constructor(public endPointId: string, public actuatorId: number, public value: number,
                public sensorEndPointId: string, public sensorId: number, public operator: IoTOperator,
                public referenceValues: number[], public latchTime: number, public lastTimeOn?: number,
                public id?: string, public customerId?: string, public timestamp?: number) {
    }
}

/**
 * EndPoints of the system, that holds the sensors and Actuators
 */
export class EndPoint {
    constructor(public name: string, public location: string, public type: string = '',
                public id?: string, public customerId?: string, public timestamp?: number) {
    }

}

export enum IoTOperator {
    GREATER_THAN = 'GREATER_THAN',
    LESS_THAN = 'LESS_THAN',
}