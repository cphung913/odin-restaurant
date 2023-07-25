import loadHome from "./pages/home.js";
import loadFooter from "./pages/load-footer.js";
import loadHeader from "./pages/load-header.js";

export default function loadPage() {
    loadHeader();
    loadHome();
    loadFooter();
}

