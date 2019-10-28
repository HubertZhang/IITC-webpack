### jQuery-related components:

* https://jquery.com/
  3.4.1
  https://code.jquery.com/jquery-3.4.1.min.js

* https://jqueryui.com/
  1.12.1
  http://code.jquery.com/ui/1.12.1/jquery-ui.min.js

* https://github.com/jeromeetienne/jquery-qrcode
  jquery.qrcode.min.js: 2b253c58f4f23f7c522c9f24627d4a51412f8588

* https://github.com/IITC-CE/jquery-taphold/
  (originally forked from https://github.com/richadams/jquery-taphold, which is archived now)
  taphold.js: 392d42e59b6494d6ec6a9fe3cc4ac3e43bf207dd

* https://github.com/bgrins/spectrum
  1.8.0-24-g9e04e58
  spectrum.js: 1d9835b239869d90bf8d3555641d1f7e9cea1f71
  used in: draw-tools


### Leaflet-related components:

* https://github.com/Leaflet/Leaflet
  1.5.1
  leaflet-src.js

* https://github.com/Leaflet/Leaflet.draw
  1.0.4 (https://unpkg.com/browse/leaflet-draw@1.0.4/dist/)
  leaflet.draw-src.js, leaflet.draw-src.css, images

  our custom fixes: leaflet.draw-fix.css, leaflet.draw-fix.js, leaflet.draw-snap.js, leaflet.draw-geodesic.js

* https://github.com/shramov/leaflet-plugins/
  3.3.0
  * Bing.js, Bing.addon.applyMaxNativeZoom.js: a1f517a9d78c18c04ae8d9f59264b4e61fb319d1
    used in: basemap-bing
  * Yandex.js: efd0a870496fa55fd51904fff781b6d214e09fa6
    Yandex.addon.LoadApi.js: ed47982c0c2c9037d74557ae46783e0f294a201b
    used in: basemap-yandex

* https://github.com/makinacorpus/Leaflet.FileLayer
  1.2.0-1-g4f0e011
  leaflet.filelayer.js: 943f903d245b19523d17e24e4af5108ffafdeb7e
  used in: overlay-kml

* https://github.com/mapbox/togeojson
  v0.16.0-27-g72957d6
  togeojson.js: 72957d69545ed1f798d56618694473b603a0ba6f
  used in: overlay-kml

* https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
  0.8.0
  Leaflet.GoogleMutant.js

* https://github.com/Norkart/Leaflet-MiniMap
  v3.6.1-4-gf5bfff8
  Control.MiniMap.js: 30eff5568645bf2bdab86b9e2d8fa6b459a33966
  modified: toggle.svg: minified (https://github.com/Norkart/Leaflet-MiniMap/pull/146)
  7ad82abe8197f1e4ace7d9b3ed10a05db2b8f543
  used in: minimap

* https://github.com/kartena/Leaflet.Pancontrol/
  v0.7.1-4-g272329d
  L.Control.Pan.js: d9528ed95479d97d92828c19fa521aa2613aff09
  used in: pan-control

* https://github.com/kartena/Leaflet.zoomslider/
  v0.7.1-6-ga6bab54
  L.Control.Zoomslider.js: 061a7455fa8a49961363ba63d9811be01989c093
  used in: zoom-slider

* https://github.com/IITC-CE/Leaflet.Geodesic/
  L.Geodesic.js: 95e8bb77e344ec2894f92820aabbc0afcb930a50
  (https://github.com/IITC-CE/Leaflet.Geodesic/pull/3/)

* https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
  v0.2.6
  oms.min.js
  modified: fixes to comply with updated leaflet: clickable->interactive (https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet/pull/45)
  197379276b9df9a3826e4cc313ff0471250121a6
  used in: bookmarks, draw-tools, player-activity-tracker

* https://github.com/gregallensworth/Leaflet/
  LatLng_Bearings.js: 7f807ae6c3402420b2d0daa96b571d93c8caf7c1
  modified: fix removed constants RAD_TO_DEG, DEG_TO_RAD (https://github.com/gregallensworth/Leaflet/pull/2)
  9077c24efbf7f1d2f12886f79578575b66b4a464
  used in: distance-to-portal


### Other:

* https://github.com/bryanwoods/autolink-js
  1.0.2-4-g1418049
  autolink-min.js: c5df674c2da6ca7e26d47e2b05abafd28262f0a8

* https://github.com/ironwallaby/delaunay
  1.0.1-4-g6de2b4f
  delaunay.js: dfc747e3dc850c928d720bcdf2a93c42d5a42712
  used in: tidy-links

* https://github.com/jonatkins/s2-geometry-javascript/
  s2geometry.js: 5e20625eb5d2c0d6a8fd0aeaa5cc91dddd8b306a
  modified: 42ed6566e49dcfa81ae3be0b3bdee9ebd586e53f, 6f8fbe60d38b01782b8d92bdc20fa4470645f186
