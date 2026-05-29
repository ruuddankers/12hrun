"use client";

import { useEffect, useRef, useState } from "react";

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
  const [status, setStatus] = useState("Route wordt geladen");

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
          attributionControl: true,
          scrollWheelZoom: false,
          dragging: true,
          keyboard: true,
          zoomControl: false
        });

        mapInstance.current = map;
        map.zoomControl?.remove();

        leaflet
          .tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
              maxZoom: 19
            }
          )
          .addTo(map);

        const route = leaflet
          .polyline(points, {
            color: "#F06939",
            weight: 5,
            opacity: 0.95,
            lineCap: "square",
            lineJoin: "miter"
          })
          .addTo(map);

        leaflet
          .circleMarker(points[0], {
            radius: 6,
            color: "#E9E9E7",
            fillColor: "#F06939",
            fillOpacity: 1,
            weight: 2
          })
          .addTo(map);

        leaflet
          .circleMarker(points[points.length - 1], {
            radius: 6,
            color: "#E9E9E7",
            fillColor: "#111111",
            fillOpacity: 1,
            weight: 2
          })
          .addTo(map);

        map.fitBounds(route.getBounds(), { padding: [34, 34] });
        setStatus(`${points.length} routepunten geladen`);
      } catch {
        setStatus("Route kon niet geladen worden");
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
    <div className="relative h-[70svh] min-h-[30rem] overflow-hidden border-y border-foreground/14 bg-background">
      <div ref={mapElement} className="h-full w-full grayscale-[0.25]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0)_38%,rgba(17,17,17,0.28))]" />
      <div className="absolute left-0 top-0 border-b border-r border-foreground/14 bg-background/84 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground/68 backdrop-blur">
        {status}
      </div>
    </div>
  );
}
