import React from "react";
import iconDistance from '../../assets/images/ActivitiesImages/map.png';
import iconTime from '../../assets/images/ActivitiesImages/time.png';
import iconSeason from '../../assets/images/ActivitiesImages/seasons.png';
import iconDifficulty from '../../assets/images/ActivitiesImages/difficulty.png';
import iconElevation from '../../assets/images/ActivitiesImages/info.png';
import { useNavigate } from 'react-router-dom';

export const TouristRouteCard = ({
  category,
  name,
  description,
  distanceKm,
  durationH,
  season,
  difficulty,
  elevation,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/activity')}
      style={{
        width: "100%",
        background: "#e3e3e3ff",
        borderRadius: 8,
        display: "flex",
        gap: 38,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Category stripe */}
      <div
        style={{
          width: 42,
          background: "#80CED7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            transform: "rotate(90deg)",
            fontFamily: "Montserrat",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2.6,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: "Montserrat",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            margin: 0,
            fontFamily: "Montserrat",
            fontSize: 14,
            fontWeight: 600,
            color: "#8F8D8D",
          }}
        >
          {description}
        </p>

        {/* Meta info */}
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <Meta icon={iconDistance} label="km" value={distanceKm} />
          <Meta icon={iconTime} label="h" value={durationH} />
          <Meta icon={iconSeason} label="sezóna" value={season} />
          <Meta icon={iconDifficulty} label="ťažkosť" value={difficulty} />
          <Meta icon={iconElevation} label="Prevýšenie m" value={elevation} />
        </div>
      </div>
    </div>
  );
};

const Meta = ({ icon, label, value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
    {icon && <img src={icon} alt="" style={{ width: 24, height: 24 }} />}
    <span
      style={{
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: 700,
        display: "list-item",
      }}
    >
      {value}
    </span>
  </div>
);