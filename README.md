#test

ID de la WebMap: 16f36fbf02304db296b23478ca42986b

edit carte: https://tecdev.maps.arcgis.com/home/webmap/viewer.html?webmap=16f36fbf02304db296b23478ca42986b

carte dans le dashboard: https://tecdev.maps.arcgis.com/home/item.html?id=16f36fbf02304db296b23478ca42986b

Le principe de fonctionnement d'arcgis est d'avoir une couche de fond, et des curcouches (optionnels)
Par exemple, ça pourrait être intéressant d'afficher les provinces belges (il y a la surcouche pour)

Attention, quand on utilise une surcouche et qu'on veut dessiner, il faut dessiner après que la map soit initialisée
``this.initializeMap().then(() => {
  Dessiner ici
});``

Arcgis intègre plusieurs systèmes de cartes (au moins le leur, et openstreetmap)

Draw:
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-draw-Draw.html

WebMap:
https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/
