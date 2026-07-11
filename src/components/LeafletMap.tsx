import React, { useEffect, useRef, useState } from 'react';

// Global cache to avoid double-appending the Leaflet script and link tags
let leafletPromise: Promise<void> | null = null;

const loadLeaflet = (): Promise<void> => {
  if (leafletPromise) return leafletPromise;

  leafletPromise = new Promise((resolve, reject) => {
    // 1. Add CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // 2. Add JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.crossOrigin = '';
    script.onload = () => {
      resolve();
    };
    script.onerror = (err) => {
      reject(err);
    };
    document.head.appendChild(script);
  });

  return leafletPromise;
};

interface LeafletMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  height?: string;
  className?: string;
  id?: string;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({
  lat,
  lng,
  zoom = 16,
  height = '320px',
  className = '',
  id = 'leaflet-map-view'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  // Load Leaflet assets
  useEffect(() => {
    loadLeaflet()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error('Failed to load Leaflet:', err);
      });
  }, []);

  // Monitor theme changes on documentElement
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Initialize map and marker
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const L = (window as any).L;
    if (!L) return;

    // Create map if not yet initialized
    if (!mapRef.current) {
      mapRef.current = L.map(containerRef.current, {
        center: [lat, lng],
        zoom: zoom,
        zoomControl: true,
        scrollWheelZoom: false, // Avoid scroll hijacks when browsing the page
      });

      // Elegant pulsating custom vector marker using DivIcon
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker-wrapper',
        html: `
          <div class="relative flex items-center justify-center w-10 h-10">
            <div class="absolute h-10 w-10 rounded-full bg-zinc-950/20 dark:bg-white/20 animate-ping"></div>
            <div class="relative h-5 w-5 rounded-full bg-zinc-950 border-2 border-white dark:bg-white dark:border-zinc-950 shadow-lg flex items-center justify-center">
              <div class="h-1.5 w-1.5 rounded-full bg-white dark:bg-zinc-950"></div>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      // Add marker to map
      L.marker([lat, lng], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(`
          <div class="p-1 font-sans text-xs text-zinc-900">
            <strong class="font-semibold block mb-0.5">spacenine architects</strong>
            <span class="font-light text-zinc-500 leading-relaxed block">H.No.4-112, Flat No.503,<br>Sree Nivaas Chambers, Kokapet</span>
          </div>
        `);
    } else {
      // Center map view on coords update
      mapRef.current.setView([lat, lng], zoom);
    }

    // Refresh tile layer based on active theme (light or dark CartoDB styles)
    if (tileLayerRef.current) {
      tileLayerRef.current.remove();
    }

    const tileUrl = theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    tileLayerRef.current = L.tileLayer(tileUrl, {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapRef.current);

    // Force redraw layout once containers and elements have stabilized
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded, lat, lng, zoom, theme]);

  // Cleanup map instance on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      id={id}
      className={`relative rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-md group transition-all duration-300 ${className}`}
    >
      {/* Modern, elegant loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center z-[1000] rounded-3xl">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-6 h-6 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin dark:border-zinc-700 dark:border-t-zinc-100"></div>
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">LOAD MAP</span>
          </div>
        </div>
      )}
      
      {/* Map Node */}
      <div ref={containerRef} style={{ height }} className="w-full z-0" />
      
      {/* Sophisticated design watermarks */}
      <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/50 dark:border-zinc-800/50 px-2.5 py-1 rounded-xl text-[9px] font-mono tracking-wider text-zinc-500 uppercase pointer-events-none z-[1000] flex items-center space-x-1">
        <span>spacenine architects</span>
      </div>
      
      <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/50 dark:border-zinc-800/50 px-2.5 py-1 rounded-xl text-[9px] font-mono tracking-wider text-zinc-500 uppercase pointer-events-none z-[1000]">
        17.3950° N, 78.3381° E
      </div>
    </div>
  );
};
