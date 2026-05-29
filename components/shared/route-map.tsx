"use client";

import { useEffect, useRef } from "react";

type LatLng = [number, number];

type LeafletMap = {
  fitBounds: (bounds: unknown, options?: Record<string, unknown>) => void;
  remove: () => void;
  zoomControl?: { remove: () => void };
};

type LeafletApi = {
  map: (element: HTMLElement, options: Record<string, unknown>) => LeafletMap;
  tileLayer: (
    url: string,
    options: Record<string, unknown>
  ) => { addTo: (map: LeafletMap) => unknown };
  polyline: (
    points: LatLng[],
    options: Record<string, unknown>
  ) => { addTo: (map: LeafletMap) => { getBounds: () => unknown } };
  circleMarker: (
    point: LatLng,
    options: Record<string, unknown>
  ) => { addTo: (map: LeafletMap) => unknown };
  marker: (
    point: LatLng,
    options: Record<string, unknown>
  ) => { addTo: (map: LeafletMap) => unknown };
  divIcon: (options: Record<string, unknown>) => unknown;
};

declare global {
  interface Window {
    L?: LeafletApi;
  }
}

function loadAsset(id: string, tag: "script" | "link", url: string) {
  const existing = document.getElementById(id);

  if (existing) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const element = document.createElement(tag);
    element.id = id;

    if (tag === "script") {
      const script = element as HTMLScriptElement;
      script.src = url;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${url}`));
      document.body.appendChild(script);
      return;
    }

    const link = element as HTMLLinkElement;
    link.rel = "stylesheet";
    link.href = url;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(link);
  });
}

function parseGpx(gpx: string) {
  const doc = new DOMParser().parseFromString(gpx, "application/xml");
  const points = Array.from(doc.querySelectorAll("trkpt")).map((point) => [
    Number(point.getAttribute("lat")),
    Number(point.getAttribute("lon"))
  ]) as LatLng[];

  return points.filter(([lat, lng]) => Number.isFinite(lat) && Number.isFinite(lng));
}

export function RouteMap() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initMap() {
      try {
        await loadAsset(
          "leaflet-css",
          "link",
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        );
        await loadAsset(
          "leaflet-js",
          "script",
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        );

        const response = await fetch("/route-12hrun.gpx");
        const gpx = await response.text();
        const points = parseGpx(gpx);

        if (cancelled || !mapElement.current || !window.L || points.length === 0) {
          return;
        }

        const leaflet = window.L;
        const map = leaflet.map(mapElement.current, {
          attributionControl: false,
          scrollWheelZoom: false,
          dragging: false,
          doubleClickZoom: false,
          boxZoom: false,
          touchZoom: false,
          keyboard: false,
          zoomControl: false
        });

        mapInstance.current = map;
        map.zoomControl?.remove();

        leaflet
          .tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
              attribution:
                "",
              maxZoom: 19
            }
          )
          .addTo(map);

        const route = leaflet
          .polyline(points, {
            color: "#F06939",
            weight: 5,
            opacity: 0.95,
            lineCap: "round",
            lineJoin: "round"
          })
          .addTo(map);

        leaflet
          .circleMarker(points[0], {
            radius: 4,
            color: "#E9E9E7",
            fillColor: "#F06939",
            fillOpacity: 1,
            weight: 2
          })
          .addTo(map);

        const finishIcon = leaflet.divIcon({
          html: `<svg width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="2" height="20" fill="#E9E9E7"/><polygon points="2,1 13,5 2,9" fill="#E9E9E7"/></svg>`,
          iconSize: [14, 20],
          iconAnchor: [1, 20],
          className: "",
        });

        leaflet
          .marker(points[points.length - 1], { icon: finishIcon })
          .addTo(map);

        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          map.fitBounds(route.getBounds(), {
            paddingTopLeft: [40, 110],
            paddingBottomRight: [40, 40],
          });
        } else {
          map.fitBounds(route.getBounds(), { padding: [110, 110] });
        }
      } catch {
        // Keep the map silent; the route is decorative context for the hero.
      }
    }

    initMap();

    return () => {
      cancelled = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="relative -mt-[100px] h-[calc(68svh+100px)] min-h-[calc(28rem+100px)] overflow-hidden bg-[#111111] md:h-[calc(72svh+100px)]">
      <div ref={mapElement} className="h-full w-full grayscale-[0.18] opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0)_18%,rgba(17,17,17,0.42)_58%,#111111_92%),linear-gradient(180deg,#111111_0%,rgba(17,17,17,0.12)_20%,rgba(17,17,17,0.08)_54%,#111111_100%)]" />
    </div>
  );
}
