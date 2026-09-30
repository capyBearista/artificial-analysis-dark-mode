// ==UserScript==
// @name         Artificial Analysis Dark Mode
// @namespace    https://github.com/capyBearista/artificial-analysis-dark-mode
// @description  Dark theme for Artificial Analysis.
// @author       capyBearista
// @license      MIT
// @homepageURL  https://github.com/capyBearista/artificial-analysis-dark-mode
// @supportURL   https://github.com/capyBearista/artificial-analysis-dark-mode/issues
// @match        https://artificialanalysis.ai/*
// @match        https://www.artificialanalysis.ai/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(() => {
    "use strict";

    const colors = {
        bg: "#0d1117",
        surface: "#131920",
        surface2: "#161b22",
        surface3: "#1b232d",
        active: "#212b36",
        borderSubtle: "#21262d",
        border: "#30363d",
        borderStrong: "#484f58",
        textStrong: "#e6edf3",
        text: "#c9d1d9",
        textMuted: "#9da7b3",
        textSubtle: "#7d8793",
        textDisabled: "#656d76",
        link: "#58a6ff",
        linkHover: "#79c0ff"
    };

    document.documentElement.style.setProperty("background-color", colors.bg, "important");
    document.documentElement.style.setProperty("color-scheme", "dark", "important");

    GM_addStyle(String.raw`
:root {
    color-scheme: dark !important;
    --aad-bg: ${colors.bg};
    --aad-surface: ${colors.surface};
    --aad-surface-2: ${colors.surface2};
    --aad-surface-3: ${colors.surface3};
    --aad-active: ${colors.active};
    --aad-border-subtle: ${colors.borderSubtle};
    --aad-border: ${colors.border};
    --aad-border-strong: ${colors.borderStrong};
    --aad-text-strong: ${colors.textStrong};
    --aad-text: ${colors.text};
    --aad-text-muted: ${colors.textMuted};
    --aad-text-subtle: ${colors.textSubtle};
    --aad-text-disabled: ${colors.textDisabled};
    --aad-link: ${colors.link};
    --aad-link-hover: ${colors.linkHover};
    --aad-shadow: 0 8px 24px rgba(0, 0, 0, 0.34);
    --aad-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.44);
}

html,
body,
#__next,
#root {
    background: var(--aad-bg) !important;
    color: var(--aad-text) !important;
}

html {
    scrollbar-color: #484f58 var(--aad-bg) !important;
}

body {
    min-height: 100vh;
}

[data-aad-surface="page"] {
    background: var(--aad-bg) !important;
}

[data-aad-surface="card"] {
    background: var(--aad-surface) !important;
}

[data-aad-surface="elevated"] {
    background: var(--aad-surface-2) !important;
}

:is(
    .bg-white,
    .bg-gray-50,
    .bg-slate-50,
    .bg-zinc-50,
    .bg-neutral-50,
    .bg-stone-50
) {
    background-color: var(--aad-surface) !important;
}

:is(
    .bg-gray-100,
    .bg-slate-100,
    .bg-zinc-100,
    .bg-neutral-100,
    .bg-stone-100
) {
    background-color: var(--aad-surface-2) !important;
}

:is(
    .bg-gray-200,
    .bg-slate-200,
    .bg-zinc-200,
    .bg-neutral-200,
    .bg-stone-200
) {
    background-color: var(--aad-surface-3) !important;
}

[class*="bg-[#fff]"],
[class*="bg-[#FFF]"],
[class*="bg-[#ffffff]"],
[class*="bg-[#FFFFFF]"] {
    background-color: var(--aad-surface) !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--aad-text-strong) !important;
}

.text-foreground,
[class~="text-foreground"] {
    color: var(--aad-text) !important;
}

:is(
    .text-black,
    .text-gray-950,
    .text-gray-900,
    .text-slate-950,
    .text-slate-900,
    .text-zinc-950,
    .text-zinc-900,
    .text-neutral-950,
    .text-neutral-900,
    .text-stone-950,
    .text-stone-900
) {
    color: var(--aad-text-strong) !important;
}

:is(
    .text-gray-800,
    .text-gray-700,
    .text-slate-800,
    .text-slate-700,
    .text-zinc-800,
    .text-zinc-700,
    .text-neutral-800,
    .text-neutral-700,
    .text-stone-800,
    .text-stone-700
) {
    color: var(--aad-text) !important;
}

:is(
    .text-gray-600,
    .text-gray-500,
    .text-gray-400,
    .text-slate-600,
    .text-slate-500,
    .text-slate-400,
    .text-zinc-600,
    .text-zinc-500,
    .text-zinc-400,
    .text-neutral-600,
    .text-neutral-500,
    .text-neutral-400,
    .text-stone-600,
    .text-stone-500,
    .text-stone-400
) {
    color: var(--aad-text-muted) !important;
}

[class*="text-[#000]"],
[class*="text-[#000000]"] {
    color: var(--aad-text-strong) !important;
}

:is(.text-blue-600, .text-blue-700) {
    color: var(--aad-link) !important;
}

:is(.text-blue-600, .text-blue-700):hover {
    color: var(--aad-link-hover) !important;
}

:is(
    .border-gray-50,
    .border-gray-100,
    .border-gray-200,
    .border-gray-300,
    .border-slate-100,
    .border-slate-200,
    .border-slate-300,
    .border-zinc-100,
    .border-zinc-200,
    .border-zinc-300,
    .border-neutral-100,
    .border-neutral-200,
    .border-neutral-300,
    .border-stone-100,
    .border-stone-200,
    .border-stone-300
) {
    border-color: var(--aad-border) !important;
}

:is(
    .divide-gray-100,
    .divide-gray-200,
    .divide-gray-300
) > :not([hidden]) ~ :not([hidden]) {
    border-color: var(--aad-border-subtle) !important;
}

hr {
    border-color: var(--aad-border) !important;
}

input,
textarea,
select {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border) !important;
    caret-color: var(--aad-text-strong) !important;
}

input::placeholder,
textarea::placeholder {
    color: var(--aad-text-muted) !important;
    opacity: 1 !important;
}

input:hover,
textarea:hover,
select:hover {
    border-color: var(--aad-border-strong) !important;
}

input:focus,
textarea:focus,
select:focus {
    border-color: var(--aad-link) !important;
    outline-color: var(--aad-link) !important;
}

input:disabled,
textarea:disabled,
select:disabled {
    background: var(--aad-surface) !important;
    color: var(--aad-text-disabled) !important;
}

option,
optgroup {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text-strong) !important;
}

button.bg-white,
[role="button"].bg-white {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border) !important;
}

table {
    color: var(--aad-text) !important;
}

thead,
thead th {
    color: var(--aad-text-muted) !important;
}

th,
td {
    border-color: var(--aad-border-subtle) !important;
}

tbody tr:hover {
    background: rgba(177, 186, 196, 0.055);
}

[role="tablist"] {
    border-color: var(--aad-border) !important;
}

[role="tab"] {
    color: var(--aad-text-muted) !important;
}

[role="tab"]:hover,
[role="tab"][aria-selected="true"] {
    color: var(--aad-text-strong) !important;
}

:is(
    [role="combobox"],
    button[aria-haspopup="listbox"],
    [aria-haspopup="listbox"][role="button"]
) {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border) !important;
}

:is(
    [role="combobox"],
    button[aria-haspopup="listbox"]
) :is(div, span, input) {
    color: var(--aad-text-strong) !important;
}

:is(
    [role="listbox"],
    [role="menu"],
    [data-radix-select-content],
    [data-radix-dropdown-menu-content],
    [data-radix-popover-content],
    [cmdk-root],
    [cmdk-list],
    [data-aad-model-popup="true"]
) {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border) !important;
    box-shadow: var(--aad-shadow-lg) !important;
}

:is(
    [role="listbox"],
    [role="menu"],
    [data-radix-select-content],
    [data-radix-dropdown-menu-content],
    [data-radix-popover-content],
    [cmdk-root],
    [cmdk-list],
    [data-aad-model-popup="true"]
) :is(div, span, p, label, small, strong, button) {
    color: var(--aad-text-strong) !important;
}

:is(
    [role="listbox"],
    [role="menu"],
    [data-radix-select-content],
    [data-radix-dropdown-menu-content],
    [data-radix-popover-content],
    [cmdk-root],
    [data-aad-model-popup="true"]
) input {
    background: var(--aad-surface) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border-strong) !important;
    caret-color: var(--aad-text-strong) !important;
}

:is(
    [role="listbox"],
    [role="menu"],
    [data-radix-popover-content],
    [cmdk-root],
    [data-aad-model-popup="true"]
) input::placeholder {
    color: var(--aad-text-muted) !important;
    opacity: 1 !important;
}

:is(
    [role="option"],
    [role="menuitem"],
    [cmdk-item]
) {
    color: var(--aad-text-strong) !important;
    background: transparent;
}

:is(
    [role="option"],
    [role="menuitem"],
    [cmdk-item]
):is(
    :hover,
    [aria-selected="true"],
    [data-selected="true"]
) {
    background: var(--aad-active) !important;
    color: var(--aad-text-strong) !important;
}

:is(
    [role="listbox"],
    [role="menu"],
    [data-radix-popover-content],
    [cmdk-root],
    [data-aad-model-popup="true"]
) button {
    background: var(--aad-surface) !important;
    color: var(--aad-text-strong) !important;
    border-color: var(--aad-border) !important;
}

[role="dialog"] {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text) !important;
    border-color: var(--aad-border) !important;
}

.recharts-cartesian-grid line {
    stroke: #34404c !important;
    stroke-opacity: 0.72 !important;
}

.recharts-cartesian-axis-line {
    stroke: var(--aad-border-strong) !important;
}

.recharts-cartesian-axis-tick-line {
    stroke: var(--aad-border) !important;
}

.recharts-cartesian-axis text,
.recharts-cartesian-axis-tick-value,
.recharts-cartesian-axis-tick text,
.recharts-cartesian-axis .recharts-text,
.recharts-label {
    fill: var(--aad-text) !important;
    color: var(--aad-text) !important;
    stroke: none !important;
    paint-order: normal !important;
}

.recharts-wrapper text:not(.recharts-cartesian-axis *),
.recharts-surface text:not(.recharts-cartesian-axis *) {
    fill: var(--aad-text-strong) !important;
    stroke: rgba(13, 17, 23, 0.96) !important;
    stroke-width: 2.5px !important;
    stroke-linejoin: round !important;
    stroke-linecap: round !important;
    paint-order: stroke fill !important;
}

.recharts-label-list text {
    stroke: rgba(13, 17, 23, 0.8) !important;
    stroke-width: 1.5px !important;
}

.recharts-legend-item-text {
    color: var(--aad-text-strong) !important;
}

.recharts-tooltip-wrapper {
    color: var(--aad-text) !important;
}

.recharts-default-tooltip {
    background: var(--aad-surface-2) !important;
    border-color: var(--aad-border) !important;
    box-shadow: var(--aad-shadow) !important;
}

.recharts-tooltip-label {
    color: var(--aad-text-strong) !important;
}

.recharts-tooltip-cursor {
    fill: rgba(177, 186, 196, 0.07) !important;
    stroke: var(--aad-border) !important;
}

.recharts-brush rect:not(.recharts-brush-slide) {
    stroke: var(--aad-border) !important;
}

.recharts-brush-texts text {
    fill: var(--aad-text) !important;
}

[data-aad-watermark="true"] {
    color: var(--aad-text-subtle) !important;
    fill: var(--aad-text-subtle) !important;
    stroke: none !important;
    opacity: 0.72 !important;
    paint-order: normal !important;
}

summary {
    color: var(--aad-text-muted) !important;
}

pre {
    background: var(--aad-surface-2) !important;
    color: var(--aad-text) !important;
    border-color: var(--aad-border) !important;
}

.animate-pulse :is(.bg-gray-100, .bg-gray-200) {
    background: var(--aad-surface-3) !important;
}

::selection {
    background: rgba(88, 166, 255, 0.3);
    color: var(--aad-text-strong);
}

::-webkit-scrollbar {
    width: 11px;
    height: 11px;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-corner {
    background: var(--aad-bg);
}

::-webkit-scrollbar-thumb {
    background: #30363d;
    border: 3px solid var(--aad-bg);
    border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
    background: #484f58;
}

:focus-visible {
    outline-color: var(--aad-link);
}

@media print {
    :root {
        color-scheme: light !important;
    }

    html,
    body,
    [data-aad-surface] {
        background: white !important;
        color: black !important;
    }
}
`);

    const surfaceSelector = "main, section, article, aside, header, footer, div";

    const parseRgb = value => {
        const match = value?.match(
            /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)/
        );

        return match
            ? {
                  r: Number(match[1]),
                  g: Number(match[2]),
                  b: Number(match[3]),
                  a: match[4] === undefined ? 1 : Number(match[4])
              }
            : null;
    };

    const isBrightNeutral = color => {
        if (!color || color.a < 0.4) return false;

        const channels = [color.r, color.g, color.b];

        return (
            Math.min(...channels) >= 225 &&
            Math.max(...channels) - Math.min(...channels) <= 18
        );
    };

    const ignoreSurface = element =>
        !(element instanceof HTMLElement) ||
        element === document.body ||
        element === document.documentElement ||
        element.closest(".recharts-wrapper, .recharts-surface, svg, canvas") ||
        element.matches(
            'button, input, textarea, select, option, a, [role="button"], [role="option"], [role="menuitem"], [role="combobox"]'
        ) ||
        element.closest(
            'button, a, [role="button"], [role="option"], [role="menuitem"]'
        ) ||
        element.matches(
            '[class*="gradient"], [class*="provider"], [class*="Provider"]'
        );

    function classifySurface(element) {
        if (ignoreSurface(element)) return;

        const rect = element.getBoundingClientRect();
        if (rect.width < 120 || rect.height < 50) return;

        const style = getComputedStyle(element);
        if (
            style.display === "none" ||
            style.visibility === "hidden" ||
            Number(style.opacity) === 0 ||
            !isBrightNeutral(parseRgb(style.backgroundColor))
        ) {
            return;
        }

        const elementArea = rect.width * rect.height;
        const viewportArea = innerWidth * innerHeight;

        if (
            rect.width >= innerWidth * 0.72 ||
            elementArea >= viewportArea * 0.3
        ) {
            element.dataset.aadSurface = "page";
        } else if (rect.width >= 180 && rect.height >= 90) {
            element.dataset.aadSurface = "card";
        } else {
            element.dataset.aadSurface = "elevated";
        }
    }

    function scanSurfaces(root = document) {
        if (root instanceof HTMLElement && root.matches(surfaceSelector)) {
            classifySurface(root);
        }

        root.querySelectorAll?.(surfaceSelector).forEach(classifySurface);
    }

    function markWatermarks(root = document) {
        const selector =
            ".recharts-wrapper, .recharts-surface, [class*='chart'], [class*='Chart']";
        const charts = [];

        if (root instanceof Element && root.matches(selector)) {
            charts.push(root);
        }

        charts.push(...(root.querySelectorAll?.(selector) ?? []));

        for (const chart of charts) {
            for (const element of chart.querySelectorAll("*")) {
                if (element.children.length > 2) continue;

                const text = element.textContent?.replace(/\s+/g, " ").trim();
                if (text === "Artificial Analysis") {
                    element.dataset.aadWatermark = "true";
                }
            }
        }
    }

    function markModelPopup(root) {
        if (!(root instanceof Element)) return;

        for (const container of [root, ...root.querySelectorAll("div")]) {
            if (container.dataset.aadPopupChecked) continue;
            container.dataset.aadPopupChecked = "true";

            const search = container.querySelector(
                'input[type="search"], input[placeholder*="search" i]'
            );
            if (!search) continue;

            const controls = container.querySelectorAll(
                '[role="option"], [cmdk-item], button, [tabindex="0"], [tabindex="-1"]'
            );
            if (controls.length < 3) continue;

            const rect = container.getBoundingClientRect();
            if (
                rect.width <= 0 ||
                rect.height <= 0 ||
                rect.width >= 700 ||
                rect.height >= 900
            ) {
                continue;
            }

            container.dataset.aadModelPopup = "true";

            let parent = container.parentElement;
            while (parent) {
                const parentRect = parent.getBoundingClientRect();
                if (parentRect.width >= 700 || parentRect.height >= 900) break;

                if (
                    parent.querySelector(
                        'input[type="search"], input[placeholder*="search" i]'
                    ) &&
                    parent.querySelectorAll("button").length >= 2
                ) {
                    parent.dataset.aadModelPopup = "true";
                }

                parent = parent.parentElement;
            }

            break;
        }
    }

    function scan(root = document) {
        scanSurfaces(root);
        markWatermarks(root);

        if (root instanceof Element) {
            markModelPopup(root);
        } else if (root.body) {
            markModelPopup(root.body);
        }
    }

    const pending = new Set();
    let scanQueued = false;

    function queueScan(root) {
        if (root instanceof Element || root instanceof Document) {
            pending.add(root);
        }

        if (scanQueued) return;
        scanQueued = true;

        requestAnimationFrame(() => {
            scanQueued = false;
            pending.forEach(scan);
            pending.clear();
        });
    }

    function start() {
        scan();

        new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes") {
                    const element = mutation.target;

                    if (element instanceof HTMLElement) {
                        delete element.dataset.aadSurface;
                        queueScan(element);
                    }

                    continue;
                }

                mutation.addedNodes.forEach(node => {
                    if (node instanceof Element) queueScan(node);
                });
            }
        }).observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class", "style"]
        });

        let resizeTimer;

        addEventListener(
            "resize",
            () => {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(() => {
                    document
                        .querySelectorAll("[data-aad-surface]")
                        .forEach(element => delete element.dataset.aadSurface);

                    scanSurfaces();
                }, 150);
            },
            { passive: true }
        );
    }

    if (document.readyState === "loading") {
        addEventListener("DOMContentLoaded", start, { once: true });
    } else {
        start();
    }
})();
