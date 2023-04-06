export interface SearchResult {
  disruptionsStops: any[];
  roadMaps: RoadMapElement[];
}

export interface RoadMapElement {
  roadMap: RoadMapRoadMap;
  tickets: null;
  multiTickets: null;
}

export interface RoadMapRoadMap {
  steps: Step[];
  label: string;
  points: Point[];
  connectionsNumber: number;
  walkDuration: number;
  hasTecTravel: boolean;
  hasDelijnTravel: boolean;
  hasStibTravel: boolean;
  hasSncbTravel: boolean;
  origin: Destination;
  destination: Destination;
  roadMapMinimization: number;
  roadMapType: number;
  startDate: Date;
  endDate: Date;
}

export interface Destination {
  description: string;
  latitude: number;
  longitude: number;
  type: number;
  municipality: null | string;
}

export interface Point {
  latitude: number;
  longitude: number;
}

export interface Step {
  instruction: string;
  description: null | string;
  route: Route | null;
  duration: number;
  distance: number;
  type: number;
  startTime: null | string;
  points: Point[] | null;
  trip: Trip | null;
}

export interface Route {
  description: string;
  direction: string;
  id: string;
  ownerSiteId: string;
  ownerSiteName: string;
  publicId: string;
  serviceMode: number;
  serviceType: number;
}

export interface Trip {
  publicId: string;
  transportCompany: string;
  stopPassingTimes: StopPassingTime[];
}

export interface StopPassingTime {
  arrivalTime: string;
  departureTime: string;
  stop: Stop;
}

export interface Stop {
  id: string;
  description: string;
  canBoard: boolean;
  canDebark: boolean;
  coordinates: Point;
  area: string;
}
