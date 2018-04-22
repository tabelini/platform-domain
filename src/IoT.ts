export class IoTData {
    constructor(public id: string, public endPointId: string, public timestamp: number, public sensorId: number,
                public value: number) {
    }
}

export class IotState {
    constructor(public endPointId: string, public actuatorId: string, public value: number) {
    }
}