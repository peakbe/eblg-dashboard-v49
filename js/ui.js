/**
 * Initialise les interactions UI (sidebar + sono toggle).
 */
export function initUI() {
    const sonoHeader = document.getElementById("sono-header");
    const sonoPanel = document.getElementById("sono-panel");
    const sonoToggle = document.getElementById("sono-toggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");

    if (sonoHeader && sonoPanel && sonoToggle) {
        sonoHeader.onclick = () => {
            sonoPanel.classList.toggle("collapsed");
            const collapsed = sonoPanel.classList.contains("collapsed");
            sonoToggle.textContent = collapsed ? "⯈" : "⯆";
        };
    }

    if (sidebar && sidebarToggle) {
        sidebarToggle.onclick = () => {
            sidebar.classList.toggle("sidebar-collapsed");
        };
    }
}
import { heatLayer } from "./sonometers.js";

export function initHeatmapToggle(map) {
    const btn = document.getElementById("toggle-heatmap");
    if (!btn) return;

    btn.onclick = () => {
        if (map.hasLayer(heatLayer)) {
            map.removeLayer(heatLayer);
            btn.classList.add("off");
        } else {
            map.addLayer(heatLayer);
            btn.classList.remove("off");
        }
    };
}
