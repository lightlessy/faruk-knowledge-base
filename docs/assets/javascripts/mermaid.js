function renderMermaidDiagrams() {
  if (typeof mermaid === "undefined") return;

  const darkMode = document.body.getAttribute("data-md-color-scheme") === "slate";
  const diagrams = document.querySelectorAll(".mermaid");

  diagrams.forEach((diagram) => {
    if (!diagram.dataset.mermaidSource) {
      diagram.dataset.mermaidSource = diagram.textContent;
    } else {
      diagram.removeAttribute("data-processed");
      diagram.innerHTML = diagram.dataset.mermaidSource;
    }
  });

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: darkMode ? "dark" : "default"
  });

  mermaid.run({ nodes: diagrams });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(renderMermaidDiagrams);
} else {
  document.addEventListener("DOMContentLoaded", renderMermaidDiagrams);
}
