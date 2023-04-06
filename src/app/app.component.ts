import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import Map from "@arcgis/core/Map";

import Graphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { SearchResult } from "src/searchResult";
import * as data from "../assets/searchData.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  public view: any = null;

  private webmap!: WebMap;

  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true }) private mapViewEl!: ElementRef;

  getMap(): WebMap {
    const webmap = new WebMap({
      portalItem: {
        id: "16f36fbf02304db296b23478ca42986b"
      }
    });

    return webmap;
  }

  drawOnMap(map: Map, coordinates: number[][] | null = null) {
    coordinates = coordinates || [
      [4.8581334, 50.4696853], //Longitude, latitude
      [4.8881334, 50.4696853], //Longitude, latitude
      [4.888334, 50.489853]
    ]; //Longitude, latitude;

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const polyline = {
      type: "polyline",
      paths: [coordinates]
    };
    const simpleLineSymbol = {
      type: "simple-line",
      color: [226, 119, 40], // Orange
      width: 2
    };
    const polylineGraphic = new Graphic({
      geometry: { spatialReference: { wkid: 4326 }, ...polyline },
      symbol: simpleLineSymbol
    });
    graphicsLayer.add(polylineGraphic);
  }

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    this.webmap = this.getMap();

    const view = new MapView({
      container,
      map: this.webmap,
      center: [4.8581334, 50.4696853], // Longitude, latitude
      zoom: 16 // Zoom level
    });

    // bonus - how many bookmarks in the webmap?
    this.webmap.when(() => {
      if (this.webmap.bookmarks && this.webmap.bookmarks.length) {
        console.log("Bookmarks: ", this.webmap.bookmarks.length);
      } else {
        console.log("No bookmarks in this webmap.");
      }
    });

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized

      console.log("The map is ready.");
      const searchResult = data;
      console.log(searchResult);

      searchResult.roadMaps.forEach((roadMapElement) => {
        var coordinates = roadMapElement.roadMap.points.map((point) => [point.longitude, point.latitude]);

        this.drawOnMap(this.webmap, coordinates);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
