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
        content: "Prime Minister of Pakistan, Muhammad Shehbaz Sharif, has sent a heartfelt letter to Begum Khaleda Zia,\
           the former Prime Minister of Bangladesh, expressing his sincere prayers and well wishes for her swift recovery. \
           The letter conveyed the Prime Minister's concern for her health, stating that he is hopeful for her recovery and \
           that the people of Pakistan are standing in solidarity with the people of Bangladesh during this challenging \
           time. He expressed Pakistan's readiness to provide any necessary medical support and assured cooperation \
           in healthcare, if needed.\
           The letter further mentioned the long-standing relations between Pakistan and Bangladesh and emphasized\
           the importance of maintaining bilateral ties. He highlighted the shared history, the values of democracy, \
           and the commitment to peace and prosperity in the region. Full details of the message and statements from \
           both leaders will be shared in this article.",
        tdat: "Date",
        date: "2025-11-10"
    },
    {
        slug: "long-term-decisions-country",
        title: "Long-term Decisions of the Country Must Be Made by an Elected Government: Tarique Rahman",
        summary: "BNP's Acting Chairman Tarique Rahman has said that the long-term decisions of the country should be made by a democratically elected government.",
        content: "In a recent statement, Tarique Rahman, the Acting Chairman of Bangladesh Nationalist Party (BNP), \
          emphasized the importance of democratic processes in making long-term national decisions. He stated \
          that a democratically elected government, which reflects the will of the people, should have the mandate \
          to make crucial decisions that affect the future of the country.\
          Rahman also pointed out the ongoing political challenges in Bangladesh and stressed the need for inclusive\
           dialogue, consultation with opposition parties, and reforms to ensure fair elections. According to him, \
           without a stable and democratically elected government, long-term policy decisions, especially those relating \
           to national security, economic growth, and foreign relations, would be compromised. Rahman also reiterated the \
           importance of international cooperation and shared responsibility in solving global challenges such as climate change and trade imbalances.\
          He called for unity among the political leaders to address these issues for the greater good of Bangladesh and\
            its people. The full speech and detailed analysis of his statements on governance, democracy, and the economy are available below.",
        tdat: "Date",
        date: "2025-11-09"
    },
    {
        slug: "heart-lungs-affected-khaleda",
        title: "Heart and Lungs Affected, Begum Khaleda Zia Under Intensive Observation",
        summary: "Former Prime Minister and BNP Chairperson Begum Khaleda Zia is suffering from a chest infection, and both her heart and lungs are being observed closely by the medical team.",
        content: "Begum Khaleda Zia, the former Prime Minister of Bangladesh and Chairperson of BNP, is currently undergoing intensive medical \
        observation due to complications from a chest infection that has affected both her heart and lungs. According to medical officials, \
        she was admitted to the hospital after experiencing difficulty in breathing and chest pain.\
        The medical team has confirmed that her heart and lungs are being carefully monitored. In response to her condition, \
        doctors have outlined a detailed treatment plan, which includes antibiotics to address the chest infection and medications to \
        support her respiratory and cardiac functions. Medical experts have advised that she remains under close observation for the next \
        several days to ensure her health stabilizes.\
        The former Prime Minister’s family, along with her political party, BNP, has urged the nation to keep her in their thoughts \
        and prayers. Full updates on her condition and official statements from her doctors will follow.",
        tdat: "Date",
        date: "2025-11-08"
    },
    {
        slug: "bnp-delegation-bhutan",
        title: "BNP Delegation Meets Prime Minister of Bhutan",
        summary: "A delegation of the Bangladesh Nationalist Party - BNP held a meeting with the visiting Prime Minister of Bhutan to discuss bilateral cooperation and mutual interests.",
        content: "A high-level delegation from the Bangladesh Nationalist Party (BNP), led by party officials, met with the visiting Prime \
        Minister of Bhutan to discuss areas of mutual interest and cooperation. The meeting, which took place in Bhutan's capital, \
        Thimphu, focused on strengthening bilateral ties between the two nations in areas such as trade, education, and infrastructure.\
        During the talks, the Prime Minister of Bhutan emphasized the importance of regional cooperation, particularly in South Asia, \
        and suggested initiatives to enhance cultural exchanges, tourism, and economic partnerships between the two countries. BNP \
        officials expressed their eagerness to support Bhutan’s development efforts, particularly in promoting sustainable agriculture \
        and renewable energy sources. \
        The two leaders also discussed the potential for deeper collaboration in international forums, addressing global issues like \
        climate change and economic inequalities. The full details of the meeting and future cooperation agreements will be available shortly.",
        tdat: "Date",
        date: "2025-11-07"
    },
    // extra items for the listing page
    {
        slug: "community-health-drive",
        title: "Community Health Drive Launched",
        summary: "A community health drive was launched this week providing free checkups and medicines.",
        content: "A community health drive was launched this week in several local neighborhoods, providing free medical checkups, \
        medicines, and basic healthcare services to residents. Local volunteers, alongside health professionals, set up temporary \
        clinics in community centers, where residents were able to receive free consultations, health screenings, and essential medications.\
        The initiative was organized by a coalition of healthcare organizations, local governments, and non-profit groups. The primary \
        objective is to increase access to basic care, raise awareness about preventative health practices, and promote early detection \
        of common diseases. The drive is expected to continue for the next few weeks, with more areas scheduled for coverage. \
        Doctors and healthcare professionals involved in the drive have emphasized the importance of regular health checkups and \
        disease prevention measures, especially in underserved communities. The organizers are hopeful that this initiative will have \
        a lasting positive impact on public health in the region. More updates and future plans for similar health initiatives will be \
        shared here.",
        tdat: "Date",
        date: "2025-11-05"
    }
];
}),
"[project]/app/(withNav)/news/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/news.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LanguageProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
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
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang] ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].en;
    const translatedNews = t.news;
    const merged = mergeTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsData"], translatedNews);
    const backToHomeLabel = t.buttons?.backToHome ?? t.contact?.backToHome ?? "Back to Home";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        variant: "ghost",
                        className: "text-stone-700 hover:bg-stone-50 hover:text-teal-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#latest-news",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: backToHomeLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(withNav)/news/page.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(withNav)/news/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(withNav)/news/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-serif font-semibold text-teal-900 mb-8",
                    children: t.newsPage?.heading ?? "All News"
                }, void 0, false, {
                    fileName: "[project]/app/(withNav)/news/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: merged.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "bg-white rounded-lg shadow-sm overflow-hidden p-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-40 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold",
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(withNav)/news/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-stone-900",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-600 mt-2 line-clamp-3",
                                            children: item.summary
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/news/detail?id=${encodeURIComponent(item.slug)}`,
                                            className: "text-teal-800 font-semibold",
                                            children: t.newsPage?.moreBtn ?? "More >>"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-stone-400",
                                            children: item.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/(withNav)/news/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(withNav)/news/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.slug, true, {
                            fileName: "[project]/app/(withNav)/news/page.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(withNav)/news/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(withNav)/news/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(withNav)/news/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_e3e02fb2._.js.map