(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsData",
    ()=>newsData
]);
const newsData = [
    {
        slug: "letter-from-pakistan-pm",
        title: "Letter from the Prime Minister of Pakistan Wishing Begum Khaleda Zia for Swift Recovery",
        summary: "Prime Minister of Pakistan Muhammad Shehbaz Sharif has sent a letter expressing his prayers and good wishes for the former Prime Minister's health.",
        content: "Prime Minister of Pakistan Muhammad Shehbaz Sharif has sent a letter expressing his prayers and good wishes for Begum Khaleda Zia. The letter mentioned hope for a speedy recovery and assured cooperation in medical support where needed. Full details and statements follow in this article...",
        tdat: "Date",
        date: "2025-11-10"
    },
    {
        slug: "long-term-decisions-country",
        title: "Long-term Decisions of the Country Must Be Made by an Elected Government: Tarique Rahman",
        summary: "BNP's Acting Chairman Tarique Rahman has said that the long-term decisions of the country should be made by a democratically elected government.",
        content: "BNP's Acting Chairman Tarique Rahman stated that long-term national decisions must be guided by democratic mandate. He emphasized inclusive consultation and the importance of stable governance for economic growth. Read the full speech and analysis...",
        tdat: "Date",
        date: "2025-11-09"
    },
    {
        slug: "heart-lungs-affected-khaleda",
        title: "Heart and Lungs Affected, Begum Khaleda Zia Under Intensive Observation",
        summary: "Former Prime Minister and BNP Chairperson Begum Khaleda Zia is suffering from a chest infection, and both her heart and lungs are being observed closely by the medical team.",
        content: "Medical officials have reported that Begum Khaleda Zia is under intensive observation due to complications from a chest infection affecting both cardiac and respiratory systems. The medical team has outlined a treatment plan and is monitoring vital signs closely. More updates on condition and official statements are here...",
        tdat: "Date",
        date: "2025-11-08"
    },
    {
        slug: "bnp-delegation-bhutan",
        title: "BNP Delegation Meets Prime Minister of Bhutan",
        summary: "A delegation of the Bangladesh Nationalist Party - BNP held a meeting with the visiting Prime Minister of Bhutan to discuss bilateral cooperation and mutual interests.",
        content: "A high-level BNP delegation met with the Prime Minister of Bhutan to discuss mutual cooperation, trade opportunities, and cultural exchange. The meeting covered several key areas including education and infrastructure partnerships. Read the full report of the meeting and outcomes...",
        tdat: "Date",
        date: "2025-11-07"
    },
    // extra items for the listing page
    {
        slug: "community-health-drive",
        title: "Community Health Drive Launched",
        summary: "A community health drive was launched this week providing free checkups and medicines.",
        content: "Local volunteers and health professionals provided free checkups to hundreds of residents. The initiative aims to increase access to basic care and preventative health services...",
        tdat: "Date",
        date: "2025-11-05"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(withNav)/news/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/news.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function mergeTranslations(source, translated) {
    if (!Array.isArray(translated) || translated.length === 0) return source;
    return source.map((s, i)=>{
        const match = translated.find((t)=>t && t.slug && t.slug === s.slug) ?? translated[i];
        if (!match) return s;
        return {
            ...s,
            title: match.title ?? s.title,
            summary: match.summary ?? s.summary,
            content: match.content ?? s.content,
            date: match.date ?? s.date
        };
    });
}
function NewsPage() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][lang] ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].en;
    const translatedNews = t.news;
    const merged = mergeTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsData"], translatedNews);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-serif font-semibold text-teal-900 mb-8",
                    children: t.newsPage?.heading ?? "All News"
                }, void 0, false, {
                    fileName: "[project]/app/(withNav)/news/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: merged.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-white rounded-lg shadow-sm overflow-hidden p-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-40 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold",
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(withNav)/news/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-stone-900",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-600 mt-2 line-clamp-3",
                                            children: item.summary
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/news/detail?id=${encodeURIComponent(item.slug)}`,
                                            className: "text-teal-800 font-semibold",
                                            children: t.newsPage?.moreBtn ?? "More >>"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-stone-400",
                                            children: item.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.slug, true, {
                            fileName: "[project]/app/(withNav)/news/page.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(withNav)/news/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(withNav)/news/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(withNav)/news/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(NewsPage, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = NewsPage;
var _c;
__turbopack_context__.k.register(_c, "NewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_adffea62._.js.map