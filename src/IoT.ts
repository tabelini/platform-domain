export class IoTData {
    constructor(public endPointId: string, public timestamp: number, public sensorId: number, public value: number,
                public id?: string, public customerId?: string ) {
    }
}

export class IoTState {
    constructor(public endPointId: string, public actuatorId: string, public value: number,
                public id?: string, public customerId?: string, public timestamp?: number) {
    }
}