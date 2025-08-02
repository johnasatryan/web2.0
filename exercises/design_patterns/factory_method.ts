// abstract class Transport {
//   abstract deliver(): void;
// }

interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver(): void {
    console.log('Deliver by Truck');
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log('Ship by Truck');
  }
}

abstract class Logistics {
  protected _transport!: Transport;
  abstract createTransport(): Transport;
  planDelivery(): void {
    this._transport = this.createTransport();
  }

  get transport(): Transport {
    return this._transport;
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// const truck = new Truck();
// const ship = new Ship();

const seaLogistics = new SeaLogistics();
seaLogistics.planDelivery();
seaLogistics.transport.deliver();
