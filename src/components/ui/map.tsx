import './WorldMap.css';
import mapImg from '../../assets/map.png';

export function WorldMap() {
  const markers = [
    { id: "usa", top: "32%", left: "20%", label: "USA" },

    { id: "india", top: "51%", left: "71%", label: "India" },

    { id: "uae", top: "46%", left: "62%", label: "UAE" },

    { id: "japan", top: "36%", left: "87%", label: "Japan" },

    { id: "sa", top: "80%", left: "55%", label: "South Africa" },
  ];

  return (
    <div className="world-map">
      <div className="world-map__container">
        {/* Custom Map Image Background */}
        <img
          src={mapImg}
          alt="World Map"
          className="world-map__image"
        />

        {/* Foreground SVG Dotted Overlay (Optional, but adds to the premium feel) */}
        <svg viewBox="0 0 1000 500" className="world-map__svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="rgba(255, 255, 255, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" style={{ mixBlendMode: 'overlay' }} />
        </svg>

        {/* Precise Markers */}
        <div className="world-map__markers-layer">
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="world-map__marker"
              style={{ top: marker.top, left: marker.left }}
            >
              <div className="world-map__pulse"></div>
              <div className="world-map__dot"></div>
              <span className="world-map__marker-label">{marker.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
