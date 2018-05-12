export class IoTData {
    constructor(public endPointId: string, public timestamp: number, public sensorId: number, public value: number,
                public id?: string, public customerId?: string) {
    }
}

/**
 * Digital 3, 5, 6, 9, 10, 11: actuatorId 0 - 5
 */
export class IoTState {
    constructor(public endPointId: string, public actuatorId: number, public value: number,
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