module.exports = [
"[project]/data/news.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        date: "2025-11-10"
    },
    {
        slug: "long-term-decisions-country",
        title: "Long-term Decisions of the Country Must Be Made by an Elected Government: Tarique Rahman",
        summary: "BNP's Acting Chairman Tarique Rahman has said that the long-term decisions of the country should be made by a democratically elected government.",
        content: "BNP's Acting Chairman Tarique Rahman stated that long-term national decisions must be guided by democratic mandate. He emphasized inclusive consultation and the importance of stable governance for economic growth. Read the full speech and analysis...",
        date: "2025-11-09"
    },
    {
        slug: "heart-lungs-affected-khaleda",
        title: "Heart and Lungs Affected, Begum Khaleda Zia Under Intensive Observation",
        summary: "Former Prime Minister and BNP Chairperson Begum Khaleda Zia is suffering from a chest infection, and both her heart and lungs are being observed closely by the medical team.",
        content: "Medical officials have reported that Begum Khaleda Zia is under intensive observation due to complications from a chest infection affecting both cardiac and respiratory systems. The medical team has outlined a treatment plan and is monitoring vital signs closely. More updates on condition and official statements are here...",
        date: "2025-11-08"
    },
    {
        slug: "bnp-delegation-bhutan",
        title: "BNP Delegation Meets Prime Minister of Bhutan",
        summary: "A delegation of the Bangladesh Nationalist Party - BNP held a meeting with the visiting Prime Minister of Bhutan to discuss bilateral cooperation and mutual interests.",
        content: "A high-level BNP delegation met with the Prime Minister of Bhutan to discuss mutual cooperation, trade opportunities, and cultural exchange. The meeting covered several key areas including education and infrastructure partnerships. Read the full report of the meeting and outcomes...",
        date: "2025-11-07"
    },
    // extra items for the listing page
    {
        slug: "community-health-drive",
        title: "Community Health Drive Launched",
        summary: "A community health drive was launched this week providing free checkups and medicines.",
        content: "Local volunteers and health professionals provided free checkups to hundreds of residents. The initiative aims to increase access to basic care and preventative health services...",
        date: "2025-11-05"
    }
];
}),
"[project]/components/NewsDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/news.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LanguageProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function mergeBySlug(source, translated) {
    if (!Array.isArray(translated) || translated.length === 0) return source;
    return source.map((s)=>{
        const match = translated.find((t)=>t && t.slug && t.slug === s.slug);
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
function NewsDetailClient({ slug }) {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang] ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].en;
    const translatedNews = t.news;
    const merged = mergeBySlug(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsData"], translatedNews);
    const item = merged.find((n)=>n.slug === slug);
    if (!item) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center",
            children: "News not found."
        }, void 0, false, {
            fileName: "[project]/components/NewsDetail.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-serif font-bold text-stone-900 mb-2",
                    children: item.title
                }, void 0, false, {
                    fileName: "[project]/components/NewsDetail.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-stone-400 mb-6",
                    children: item.date
                }, void 0, false, {
                    fileName: "[project]/components/NewsDetail.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose max-w-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: item.content
                    }, void 0, false, {
                        fileName: "[project]/components/NewsDetail.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/NewsDetail.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/NewsDetail.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/NewsDetail.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_53363f11._.js.map