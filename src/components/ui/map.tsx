import './WorldMap.css';
import mapImg from '../../assets/map.png';

export function WorldMap() {
  const markers = [
    { id: "canada", top: "18%", left: "15%", label: "Canada" },
    { id: "usa", top: "32%", left: "20%", label: "USA" },
    { id: "europe", top: "25%", left: "48%", label: "Europe" },
    { id: "saudi", top: "45%", left: "54%", label: "Saudi Arabia", labelPosition: "left" },
    { id: "uae", top: "46%", left: "62%", label: "UAE", labelPosition: "top" },
    { id: "oman", top: "50%", left: "66%", label: "Oman", labelPosition: "right" },
    { id: "india", top: "51%", left: "71%", label: "India" },
    { id: "singapore", top: "60%", left: "78%", label: "Singapore" },
    { id: "japan", top: "36%", left: "87%", label: "Japan" },
    { id: "australia", top: "78%", left: "84%", label: "Australia" },
    { id: "russia", top: "22%", left: "68%", label: "Russia" },
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
              className={`world-map__marker is-${marker.labelPosition || 'bottom'}`}
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
