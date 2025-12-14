import React from "react";
import { ToggleFilter } from "../../common/ToggleFilter";
import { TouristRouteCard } from "../../common/TouristRouteCard";
import iconHome from '../../../assets/images/ActivitiesImages/home.png';
import iconOut from '../../../assets/images/ActivitiesImages/out.png';
import iconFlag from '../../../assets/images/ActivitiesImages/flag.png';
import iconPins from '../../../assets/images/ActivitiesImages/pins.png';
import iconMountain from '../../../assets/images/ActivitiesImages/mountain.png';
import iconAdrenalin from '../../../assets/images/ActivitiesImages/adrenalin.png';
import iconWinter from '../../../assets/images/ActivitiesImages/winter.png';
import iconSummer from '../../../assets/images/ActivitiesImages/summer.png';
import iconFilter from '../../../assets/images/ActivitiesImages/filter.png';


const filters = [
  { id: "to-hut", label: "Do chaty", icon: iconHome, width: 130 },
  { id: "from-hut", label: "Z chaty", icon: iconOut, width: 130 },
  { id: "guided", label: "Túry s vodcom", icon: iconFlag, width: 164 },
  { id: "hiking", label: "Turistika", icon: iconPins, width: 130 },
  { id: "climbing", label: "Horolezectvo", icon: iconMountain, width: 138 },
  { id: "skialp", label: "Skialp", icon: iconAdrenalin, width: 130 },
  { id: "winter", label: "Zimné aktivity", icon: iconWinter, width: 146 },
  { id: "summer", label: "Letné aktivity", icon: iconSummer, width: 146 },
  { id: "filter", label: "Filtrovať", icon: iconFilter, width: 146 },
];

const routes = [
  {
    id: 1,
    category: "Do chaty",
    name: "Cesta z Hrebienka k Zbojníckej",
    description:
      "Začnite v Starom Smokovci, prejdite zubačkou na Hrebienok a sledujte modrú značku cez Veľkú Studenú dolinu. Miniete 5 plies, kamzíkov a konečne sa objavíte pred našou chatou. Ideálny úvod do tatranského sveta – bez davy, len príroda.",
    distanceKm: "5 km",
    durationH: "2 h",
    season: "Celoročná sezóna",
    difficulty: "Stredná ťažkosť",
    elevation: "680 m",
  },
  {
    id: 2,
    category: "Z chaty",
    name: "Zbojnícke plesá – okruh",
    description:
      "6 plies hneď od dverí chaty. Najkrajšie ráno alebo západ slnka v Tatrách.",
    distanceKm: "6 km",
    durationH: "2 h",
    season: "Letná sezóna",
    difficulty: "Ľahká ťažkosť",
    elevation: "180 m",
  },
  {
    id: 3,
    category: "Túry s vodcom",
    name: "Jahňací štít (2229 m)",
    description:
      "Najlepší výhľadový vrchol od chaty. S horským vodcom aj pre menej skúsených.",
    distanceKm: "10 km",
    durationH: "5-6 h",
    season: "Letná sezóna",
    difficulty: "Náročná ťažkosť",
    elevation: "750 m",
  },
  {
    id: 4,
    category: "Horolezectvo",
    name: "Prielom – legendárna ferrata",
    description:
      "Historická cesta zbojníkov. Reťaze, laná, adrenalín. Rezervácia vodcu povinná.",
    distanceKm: "3 km",
    durationH: "3-4 h",
    season: "Letná sezóna",
    difficulty: "Veľmi náročná ťažkosť",
    elevation: "450 m",
  },
  {
    id: 5,
    category: "Skialp",
    name: "Skialp na Slavkovský alebo Hincov štít",
    description:
      "Zimná klasika z chaty. Výstup na pásoch, zjazd žľabmi. Len s lavínovou výbavou a vodcom.",
    distanceKm: "12 km",
    durationH: "6-7 h",
    season: "Zimná sezóna",
    difficulty: "Náročná ťažkosť",
    elevation: "950 m",
  },
  {
    id: 6,
    category: "Horolezectvo",
    name: "Rysy cez Žabiu dolinu",
    description:
      "Alternatívna cesta na Rysy z chaty. Menej ľudí, viac divočiny. Len pre fyzicky zdatných a s vodcom.",
    distanceKm: "18 km",
    durationH: "9-10 h",
    season: "Letná sezóna",
    difficulty: "Veľmi náročná ťažkosť",
    elevation: "1350 m",
  },
];

export const ActivitiesSection1 = () => {
    const [selectedFilters, setSelectedFilters] = React.useState([]);
    const [appliedFilters, setAppliedFilters] = React.useState([]);


    const toggleFilter = (id) => {
        setSelectedFilters((prev) =>
            prev.includes(id)
            ? prev.filter((f) => f !== id)
            : [...prev, id]
        );
    };

    const applyFilters = () => {
        setAppliedFilters(selectedFilters);
    };


    const filteredRoutes = routes.filter((route) => {
        if (appliedFilters.length === 0) return true;

        return appliedFilters.some((filter) => {
            if (filter === "to-hut") return route.category === "Do chaty";
            if (filter === "from-hut") return route.category === "Z chaty";
            if (filter === "guided") return route.category === "Túry s vodcom";
            if (filter === "winter") return route.season.toLowerCase().includes("zim");
            if (filter === "summer") return route.season.toLowerCase().includes("let");
            if (filter === "climbing") return route.category === "Horolezectvo";
            if (filter === "skialp") return route.category === "Skialp";
            if (filter === "hiking") return route.category === "Túry s vodcom";

            return true;
        });
    });

  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 17,
      }}
    >
      {/* Filters */}
      <div
        style={{
          width: 1440,
          height: 75,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 22,
        }}
      >
        {filters.map((filter) => {
            if (filter.id === "filter") {
                return (
                <div key={filter.id} style={{ width: filter.width }}>
                    <ToggleFilter
                    label={filter.label}
                    icon={filter.icon}
                    active={selectedFilters.length > 0}
                    onClick={applyFilters}
                    />
                </div>
                );
            }

            return (
                <div key={filter.id} style={{ width: filter.width }}>
                <ToggleFilter
                    label={filter.label}
                    icon={filter.icon}
                    active={selectedFilters.includes(filter.id)}
                    onClick={() => toggleFilter(filter.id)}
                />
                </div>
            );
        })}
      </div>

      {/* Divider */}
      <div style={{ width: 1440, height: 12, position: "relative" }}>
        <div
          style={{
            width: 1440,
            height: 4,
            background: "#80CFD9",
            borderRadius: 2,
            position: "absolute",
            top: 4,
          }}
        />
      </div>

      {/* Routes list */}
      <div
        style={{
          width: 1440,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {filteredRoutes.map((route) => (
            <TouristRouteCard key={route.id} {...route} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection1;