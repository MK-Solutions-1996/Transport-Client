import React, { useState } from "react";
import { SlideMenu } from "primereact/slidemenu";

function SideMenuBar() {
  const [redirect, setRirect] = useState(false);
  const [path, setPath] = useState("");
  const [item] = useState([
    {
      label: "Drivers",
      icon: "pi pi-fw pi-user",
      items: null,
      command: () => {
        loadNavigator("/viewDrivers");
      }
    },
    {
      label: "Zones",
      icon: "pi pi-fw pi-plus",
      items: null,
      command: () => {
        loadNavigator("/");
      }
    },
    {
      label: "Cities",
      icon: "pi pi-map-marker",
      items: null,
      command: () => {
        loadNavigator("/");
      }
    },
    {
      label: "Invoices",
      icon: "pi pi-tag",
      items: null,
      command: () => {
        loadNavigator("/");
      }
    },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      items: null,
      command: () => {
        loadNavigator("/");
      }
    }
  ]);

  var navigateToPage = path => {
    if (redirect) {
      window.location.replace(path);
    }
  };
  var loadNavigator = path => {
    setPath(path);
    setRirect(true);
  };

  return (
    <div className="side-menu">
      {navigateToPage(path)}
      <div className="col-md-2 side-menu" style={{ padding: 0 }}>
        <div style={{ position: "fixed", padding: 0, marginTop: 0 }}>
          <SlideMenu
            id="slidemenu"
            style={{
              backgroundColor: "rgb(0,0,0,0.7)",
              borderColor: "rgb(0,0,0,0.6)",
              padding: "0.2rem 0.5rem",
              cursor: "pointer"
            }}
            model={item}
            viewportHeight={window.innerHeight}
          ></SlideMenu>
        </div>
      </div>
    </div>
  );
}

export default SideMenuBar;
