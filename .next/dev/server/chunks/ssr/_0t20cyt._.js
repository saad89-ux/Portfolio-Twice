module.exports = [
"[project]/src/components/generated/ServicesPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesPage",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const servicesData = [
    {
        title: 'Machine Learning Solutions',
        description: 'Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.',
        features: [
            'Deep learning model development',
            'Computer vision solutions',
            'Model optimization and scaling',
            'Neural network architecture design',
            'Natural language processing'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c9e66d9c-d280-4536-ae80-8a8f1ab6abfc.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/264a1827-dbd2-45f7-8100-713af00878df.svg'
    },
    {
        title: 'Blockchain Development',
        description: 'End-to-end blockchain solutions from smart contract development to decentralized application architecture.',
        features: [
            'Smart contract development',
            'Blockchain integration',
            'Token implementation',
            'DeFi protocol design',
            'Web3 development'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/50684f98-7105-40d1-9a0b-f62b2b900062.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/be5c420a-ee44-40cb-ba5a-ebabd0aaeb03.svg'
    },
    {
        title: 'Algorithmic Trading',
        description: 'Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.',
        features: [
            'Trading strategy development',
            'Market analysis algorithms',
            'Performance optimization',
            'High-frequency trading systems',
            'Risk management systems'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a572fdab-f147-41cf-a720-59e90f464339.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/dd6864d5-e306-49d7-9649-27f8b5e7fa7d.svg'
    },
    {
        title: 'Data Engineering',
        description: 'Build robust data infrastructure that scales with your business needs using modern data engineering practices.',
        features: [
            'Data pipeline development',
            'Database optimization',
            'Data warehouse architecture',
            'Big data processing',
            'ETL workflow design'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a717c6dc-23c4-46a5-bd61-4b827c96c99b.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/0f57078b-5c6b-4ca5-a71b-c72d8ecac4f2.svg'
    },
    {
        title: 'Predictive Analytics',
        description: 'Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.',
        features: [
            'Time series analysis',
            'Business intelligence',
            'Data visualization',
            'Predictive modeling',
            'Statistical analysis'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/678d2808-a2d0-4765-b455-05764e61e9be.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/53862a8f-d5dd-4616-942a-b587544a91d2.svg'
    },
    {
        title: 'MLOps & Infrastructure',
        description: 'Enterprise-grade infrastructure for deploying and managing ML models in production environments.',
        features: [
            'CI/CD pipeline setup',
            'Performance monitoring',
            'DevOps integration',
            'Model deployment automation',
            'Infrastructure scaling'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9183b02c-60e9-42d8-af39-dfe8c83431db.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516c.svg'
    }
];
const industryCards = [
    {
        title: 'E-Commerce',
        description: 'Building digital storefronts that convert across channels and devices.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80'
    },
    {
        title: 'Healthcare',
        description: 'Empowering better patient care with intelligent health and diagnostics solutions.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
    },
    {
        title: 'Real Estate',
        description: 'Creating high-impact property experiences with data-driven digital tools.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80'
    },
    {
        title: 'Education',
        description: 'Transforming learning with immersive digital experiences and modern platforms.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80'
    },
    {
        title: 'Restaurants & Food',
        description: 'Delivering tasty digital experiences for hospitality and restaurant brands.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80'
    },
    {
        title: 'Automotive',
        description: 'Driving automotive brands forward with premium digital experiences.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80'
    },
    {
        title: 'Finance & Banking',
        description: 'Powering financial services with secure, modern, customer-first digital products.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80'
    },
    {
        title: 'Fashion & Retail',
        description: 'Crafting polished retail experiences with premium brand storytelling.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
    }
];
const industryHeights = [
    380,
    300,
    440,
    300
];
const ServiceCard = ({ item })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ca-interactive-card",
        style: {
            width: '586px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '42px',
            gap: '32px',
            backgroundColor: 'rgba(20, 20, 20, 1)',
            borderRadius: '36px',
            border: isHovered ? '1px solid rgba(0, 194, 255, 0.3)' : '1px solid transparent',
            cursor: 'pointer'
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.image,
                alt: item.title,
                style: {
                    width: '223px',
                    height: '231px',
                    objectFit: 'contain'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: '"Barlow", sans-serif',
                    fontWeight: 600,
                    textAlign: 'center',
                    alignSelf: 'stretch'
                },
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: '487px',
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: '"Barlow", sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign: 'center'
                },
                children: item.description
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    width: '487px',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                },
                children: item.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            width: '45%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a26bc16d-e486-43d7-a0c3-3ca7ca20711f.svg",
                                alt: "bullet",
                                style: {
                                    width: '15px',
                                    height: '15px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'white',
                                    fontSize: '14px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px'
                                },
                                children: feature
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 140,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "ca-interactive-btn",
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '100px',
                    padding: '10px 10px 10px 16px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                },
                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)',
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(0, 194, 255, 1)',
                            borderRadius: '135px',
                            padding: '6px 14px',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.icon,
                            alt: "Icon",
                            style: {
                                width: '24px',
                                height: '24px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/ServicesPage.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 400
                        },
                        children: "Book a Call"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/ServicesPage.tsx",
        lineNumber: 98,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const IndustryCard = ({ item, index, onHover })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardHeight = industryHeights[index % industryHeights.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '220px',
            height: `${cardHeight}px`,
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            flexShrink: 0,
            cursor: 'pointer',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            boxShadow: isHovered ? '0 20px 40px rgba(0, 194, 255, 0.25)' : 'none'
        },
        onMouseEnter: ()=>{
            setIsHovered(true);
            onHover(true);
        },
        onMouseLeave: ()=>{
            setIsHovered(false);
            onHover(false);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.image,
                alt: item.title,
                style: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '50px',
                    left: '20px',
                    right: '20px',
                    zIndex: 2,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '13px',
                        fontFamily: '"Barlow", sans-serif',
                        lineHeight: 1.5
                    },
                    children: item.description
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/ServicesPage.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    zIndex: 2,
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: '"Barlow", sans-serif'
                },
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/ServicesPage.tsx",
        lineNumber: 203,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const ServicesPage = ()=>{
    const [isMarqueePaused, setIsMarqueePaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            backgroundColor: 'rgba(3, 3, 3, 1)',
            overflowX: 'clip',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '53px auto',
                    width: '100%',
                    maxWidth: '1254px',
                    minHeight: '376px',
                    position: 'relative',
                    borderRadius: '48px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(20, 20, 20, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '-1px',
                            top: '5px',
                            width: '798px',
                            height: '471px',
                            pointerEvents: 'none',
                            opacity: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7d5ddafc-9cb2-4f90-a70c-06e9211e661c.png",
                                alt: "background",
                                style: {
                                    width: '511px',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7d5ddafc-9cb2-4f90-a70c-06e9211e661c.png",
                                alt: "background",
                                style: {
                                    width: '511px',
                                    position: 'absolute',
                                    left: '287px',
                                    top: '95px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '57px 66px',
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    width: '645px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '40px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '48px',
                                    margin: 0
                                },
                                children: "Our Comprehensive Digital Solutions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    width: '629px',
                                    marginTop: '39px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px'
                                },
                                children: "At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a8368f2c-e5c4-4d31-b3b6-5d95f441782f.png",
                        alt: "Dashboard",
                        style: {
                            position: 'absolute',
                            right: '0px',
                            top: '-85px',
                            width: '543px',
                            height: '482px',
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1230px',
                    margin: '129px auto',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            fontSize: '36px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600,
                            marginBottom: '12px'
                        },
                        children: "Our Services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            maxWidth: '667px',
                            margin: '0 auto 108px auto',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '16px',
                            fontFamily: '"Barlow", sans-serif',
                            lineHeight: '24px'
                        },
                        children: "Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '58px',
                            justifyContent: 'center'
                        },
                        children: servicesData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                item: item
                            }, index, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 373,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/ServicesPage.tsx",
        lineNumber: 267,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/PortfolioShowcase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioShowcase",
    ()=>PortfolioShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ProjectCard = ({ title, image, icon })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "ca-interactive-card",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            width: '586px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '42px',
            paddingBottom: '42px',
            gap: '32px',
            backgroundColor: 'rgba(20, 20, 20, 1)',
            borderRadius: '36px',
            cursor: 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: title,
                style: {
                    width: '488px',
                    height: '293px',
                    borderRadius: '32px',
                    objectFit: 'cover'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '486px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: 'white',
                            fontSize: '24px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            padding: '14px',
                            backgroundColor: isHovered ? 'rgba(89, 176, 255, 1)' : 'rgba(0, 194, 255, 1)',
                            borderRadius: '135px',
                            transition: 'background-color 0.2s ease'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: icon,
                            alt: "Action",
                            style: {
                                width: '24px',
                                height: '24px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    width: '487px',
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: '16px',
                    fontFamily: '"Barlow", sans-serif',
                    fontWeight: 400,
                    lineHeight: '24px',
                    margin: 0
                },
                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '487px',
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        },
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b30791ea-e84f-4c33-a0bb-5934eeec5970.svg",
                                        alt: "bullet",
                                        style: {
                                            width: '15px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'white',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif'
                                        },
                                        children: "Lorem Ipsum is simply dummy text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 86,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        },
                        children: [
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2294fee1-63be-49d6-9dd8-7eabd2804a2c.svg",
                                        alt: "bullet",
                                        style: {
                                            width: '15px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'white',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif'
                                        },
                                        children: "Lorem Ipsum is simply dummy text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 106,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const PortfolioShowcase = (props)=>{
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const caseStudies = [
        {
            title: 'MachineLearningProject',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/eb4db7a6-fb9d-4b6e-ab7b-8871e099b8ba.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/3f9a58cb-0b3e-4767-b7ad-5441e5671e74.svg'
        },
        {
            title: 'ProjectLoremIpsum',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/f7ce8423-c750-44e3-a7f9-78792d449161.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6072f0d3-ff0d-44c3-b42c-9556ad8b5565.svg'
        },
        {
            title: 'ProjectLoremIpsum',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/460920fa-360d-44f7-ade8-257bead9daf8.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/53f303ee-ef28-460c-8cbf-3c73d68b2804.svg'
        },
        {
            title: 'ProjectLoremIpsum',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1730d670-ae80-4a54-bbcc-a28a27c8a2c6.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6ffe9202-0c34-4fc4-a7fb-7127123915ab.svg'
        },
        {
            title: 'ProjectLoremIpsum',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c97179ff-d893-407b-a46e-67f697a73b9e.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/cab8d50f-0461-4e38-be32-302658774f0b.svg'
        },
        {
            title: 'ProjectLoremIpsum',
            image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b01828fd-57ed-42bd-8ef8-c0d88e24a7a7.png',
            icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ac15737b-e3a2-4a9f-b1dd-c244c7325d91.svg'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `portfolio-showcase ${props.className || ''}`,
        style: {
            width: '100%',
            backgroundColor: 'rgba(3, 3, 3, 1)',
            position: 'relative',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ...props.style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1ac73513-1ff2-4282-b3e6-2b8bdf84dc7f.svg",
                alt: "",
                style: {
                    width: '451px',
                    height: '418px',
                    position: 'absolute',
                    left: '-121px',
                    top: '677px',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    maxWidth: '1254px',
                    minHeight: '376px',
                    backgroundColor: 'rgba(20, 20, 20, 1)',
                    borderRadius: '48px',
                    position: 'relative',
                    marginTop: '53px',
                    overflow: 'hidden',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '-1px',
                            top: '5px',
                            width: '798px',
                            height: '471px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/3566051e-2f6e-47ea-ba85-33a8a7200c69.png",
                                alt: "",
                                style: {
                                    width: '511px',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    opacity: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/3566051e-2f6e-47ea-ba85-33a8a7200c69.png",
                                alt: "",
                                style: {
                                    width: '511px',
                                    position: 'absolute',
                                    left: '287px',
                                    top: '95px',
                                    opacity: 0.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '93px 66px',
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    width: '386px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '40px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '48px',
                                    margin: 0
                                },
                                children: "Our Work, Your Future"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    width: '567px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    marginTop: '39px'
                                },
                                children: "From machine learning platforms to blockchain protocols and predictive analytics tools, here’s a selection of real-world solutions we’ve delivered for forward-thinking companies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/73a3c308-d7e4-40c6-ab3e-bda587b9c25b.png",
                        alt: "Showcase",
                        style: {
                            width: '353px',
                            position: 'absolute',
                            right: '123px',
                            top: '31px',
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    maxWidth: '1226px',
                    marginTop: '129px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '51px',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: 'white',
                                    fontSize: '36px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 600,
                                    margin: '0 0 12px 0'
                                },
                                children: "Our Case Studies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    maxWidth: '667px',
                                    margin: '0 auto'
                                },
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '55px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px 10px 10px 20px',
                                    backgroundColor: 'rgba(25, 25, 25, 1)',
                                    borderRadius: '100px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "ca-interactive-input",
                                        type: "text",
                                        placeholder: "Search by keywords...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'white',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            outline: 'none',
                                            width: '80%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ca-interactive-btn",
                                        style: {
                                            width: '36px',
                                            height: '36px',
                                            backgroundColor: 'rgba(0, 194, 255, 1)',
                                            borderRadius: '50%',
                                            border: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/3e2e75d1-fb1c-4af7-a790-459a095ff8d9.svg",
                                            alt: "search",
                                            style: {
                                                width: '20px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px'
                                },
                                children: [
                                    [
                                        'Machine Learning',
                                        'Data Engineering'
                                    ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "ca-interactive-btn",
                                            onClick: ()=>setActiveCategory(activeCategory === cat ? null : cat),
                                            style: {
                                                height: '56px',
                                                padding: '0 20px',
                                                backgroundColor: 'rgba(25, 25, 25, 1)',
                                                borderRadius: '100px',
                                                border: activeCategory === cat ? '1px solid rgba(0, 194, 255, 1)' : 'none',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                cursor: 'pointer',
                                                fontSize: '16px'
                                            },
                                            children: [
                                                cat,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/147ed9f5-4e21-4396-8837-fab8cf696a6a.svg",
                                                    alt: "arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, cat, true, {
                                            fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                            lineNumber: 319,
                                            columnNumber: 66
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ca-interactive-btn",
                                        onClick: ()=>{
                                            setSearch('');
                                            setActiveCategory(null);
                                        },
                                        style: {
                                            height: '56px',
                                            padding: '0 30px',
                                            backgroundColor: 'rgba(0, 194, 255, 1)',
                                            borderRadius: '100px',
                                            border: 'none',
                                            color: 'white',
                                            fontWeight: 500,
                                            cursor: 'pointer'
                                        },
                                        children: "Clear All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'rgba(255, 255, 255, 0.25)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    maxWidth: '1230px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '58px',
                    justifyContent: 'center',
                    marginTop: '112px',
                    paddingBottom: '100px',
                    zIndex: 2
                },
                children: caseStudies.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                        ...project
                    }, idx, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 371,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '134px',
                    opacity: 0.7
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/e8ad544f-8dbc-4d42-8a10-82518a0ac489.svg",
                        alt: "loading",
                        style: {
                            width: '24px',
                            animation: 'spin 2s linear infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 500
                        },
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .portfolio-showcase button:active {
          transform: scale(0.98);
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
        lineNumber: 152,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const BarlowFont = '"Barlow", sans-serif';
const assetBase = 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets';
const aboutStats = [
    {
        value: '3,000+',
        label: 'Happy Clients'
    },
    {
        value: '50+',
        label: 'Industries Served'
    },
    {
        value: '$5M+',
        label: 'Revenue Generated'
    },
    {
        value: '250%',
        label: 'Avg. Growth Achieved'
    }
];
const featureChips = [
    'Results Driven',
    'Client First Approach',
    'Transparent Process',
    'Growth Focused'
];
const reviewAvatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'
];
const PrimaryButton = ({ children, width, height, onClick })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "ca-interactive-btn",
        onClick: onClick,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            width: width || '170px',
            height: height || '46px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 22px',
            backgroundColor: isHovered ? 'rgba(0, 194, 255, 0.95)' : 'rgba(0, 194, 255, 1)',
            borderRadius: '14px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: isHovered ? '0 18px 36px rgba(0, 194, 255, 0.28)' : '0 12px 20px rgba(0, 194, 255, 0.22)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: '14px',
                fontFamily: BarlowFont,
                fontWeight: 700,
                lineHeight: '1'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/generated/AboutSection.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/generated/AboutSection.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const AboutSection = ({ className, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `about-section ca-fade-in ${className || ''}`,
        style: {
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            padding: '80px clamp(24px, 6vw, 90px) 90px',
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'visible',
            borderRadius: '0',
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 14% 18%, rgba(0, 194, 255, 0.16), transparent 24%), radial-gradient(circle at 86% 22%, rgba(0, 194, 255, 0.14), transparent 22%), radial-gradient(circle at 72% 38%, rgba(0, 194, 255, 0.08), transparent 26%), radial-gradient(circle at 50% 88%, rgba(0, 194, 255, 0.18), transparent 32%), radial-gradient(circle at 18% 72%, rgba(120, 185, 255, 0.10), transparent 28%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/AboutSection.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '1.05fr 0.95fr',
                    gap: '48px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: 'rgba(255, 255, 255, 0.96)',
                                    fontSize: 'clamp(40px, 4vw, 64px)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '0.98',
                                    margin: 0
                                },
                                children: "Hi, I'm Muhammad Ahsan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    maxWidth: '640px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.88)',
                                            fontSize: '20px',
                                            fontFamily: BarlowFont,
                                            fontWeight: 500,
                                            lineHeight: '32px',
                                            margin: 0
                                        },
                                        children: "I turn strategies into real results and businesses into market leaders."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(228, 233, 244, 0.88)',
                                            fontSize: '16px',
                                            fontFamily: BarlowFont,
                                            fontWeight: 400,
                                            lineHeight: '28px',
                                            margin: 0
                                        },
                                        children: "With 6+ years of experience in Digital Marketing, SEO, and Growth Strategy, I've helped 3,000+ businesses across 50+ industries unlock their true potential, drive massive traffic, and generate millions in revenue."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '16px',
                                    marginTop: '10px'
                                },
                                children: aboutStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '24px',
                                            borderRadius: '30px',
                                            backgroundColor: 'rgba(0, 194, 255, 0.06)',
                                            border: '1px solid rgba(0, 194, 255, 0.14)',
                                            minHeight: '120px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(0, 194, 255, 1)',
                                                    fontSize: '32px',
                                                    fontFamily: BarlowFont,
                                                    fontWeight: 800,
                                                    lineHeight: '1'
                                                },
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255, 255, 255, 0.78)',
                                                    fontSize: '14px',
                                                    fontFamily: BarlowFont,
                                                    fontWeight: 500,
                                                    lineHeight: '1.5'
                                                },
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 138,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '12px',
                                    marginTop: '18px'
                                },
                                children: featureChips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            padding: '12px 18px',
                                            borderRadius: '999px',
                                            backgroundColor: 'rgba(0, 194, 255, 0.08)',
                                            border: '1px solid rgba(0, 194, 255, 0.16)',
                                            color: 'rgba(235, 239, 255, 0.88)',
                                            fontSize: '14px',
                                            fontFamily: BarlowFont,
                                            fontWeight: 500
                                        },
                                        children: chip
                                    }, chip, false, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 175,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                    marginTop: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'white',
                                            fontSize: '20px',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 700
                                        },
                                        children: "Muhammad Ahsan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.72)',
                                            fontSize: '14px',
                                            fontFamily: BarlowFont,
                                            fontWeight: 500,
                                            letterSpacing: '0.02em'
                                        },
                                        children: "Digital Marketing Strategist Helping Brands Grow Since 2018"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: '100%',
                            minHeight: '620px',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            backgroundColor: '#080c20',
                            boxShadow: '0 40px 90px rgba(0, 0, 0, 0.35)',
                            border: '1px solid rgba(0, 194, 255, 0.14)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80",
                                alt: "Professional portrait",
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.82)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.12) 0%, rgba(7, 11, 30, 0.55) 45%, rgba(8, 12, 32, 0.92) 100%)',
                                    pointerEvents: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '28px',
                                    left: '28px',
                                    right: '28px',
                                    zIndex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '12px 16px',
                                            borderRadius: '999px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.14)',
                                            color: 'white',
                                            width: 'fit-content'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: '12px',
                                                    height: '12px',
                                                    borderRadius: '999px',
                                                    backgroundColor: 'rgba(0, 194, 255, 1)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: BarlowFont,
                                                    fontWeight: 600,
                                                    fontSize: '13px',
                                                    lineHeight: '1',
                                                    letterSpacing: '0.04em'
                                                },
                                                children: "6+ Years Experience"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '14px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '14px 18px',
                                                    borderRadius: '24px',
                                                    backgroundColor: 'rgba(0, 194, 255, 0.16)',
                                                    border: '1px solid rgba(0, 194, 255, 0.24)',
                                                    color: 'rgba(255, 255, 255, 0.95)',
                                                    fontFamily: BarlowFont,
                                                    fontWeight: 600,
                                                    fontSize: '14px'
                                                },
                                                children: "Data-Driven Growth Expert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '14px 18px',
                                                    borderRadius: '24px',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    fontFamily: BarlowFont,
                                                    fontWeight: 600,
                                                    fontSize: '14px'
                                                },
                                                children: "Results That Matter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: '28px',
                                    right: '28px',
                                    bottom: '132px',
                                    zIndex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: 'fit-content',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '14px 18px',
                                            borderRadius: '999px',
                                            border: '1px solid rgba(255, 255, 255, 0.16)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            color: 'white',
                                            fontFamily: BarlowFont,
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: '16px',
                                                    height: '16px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(0, 194, 255, 1)',
                                                    color: 'white',
                                                    fontSize: '12px'
                                                },
                                                children: "?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Watch My Story",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255, 255, 255, 0.72)',
                                                    fontSize: '13px',
                                                    fontWeight: 500
                                                },
                                                children: "2 min video"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '20px',
                                            padding: '20px 24px',
                                            borderRadius: '32px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'rgba(255, 215, 0, 1)',
                                                                    fontSize: '18px'
                                                                },
                                                                children: "?????"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'white',
                                                                    fontFamily: BarlowFont,
                                                                    fontWeight: 700,
                                                                    fontSize: '18px'
                                                                },
                                                                children: "4.9/5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255, 255, 255, 0.75)',
                                                            fontSize: '13px',
                                                            fontFamily: BarlowFont,
                                                            fontWeight: 500
                                                        },
                                                        children: "120+ Reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            position: 'relative',
                                                            minWidth: '90px'
                                                        },
                                                        children: reviewAvatars.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: src,
                                                                alt: "Reviewer avatar",
                                                                style: {
                                                                    width: '36px',
                                                                    height: '36px',
                                                                    borderRadius: '999px',
                                                                    objectFit: 'cover',
                                                                    border: '2px solid rgba(6, 8, 22, 1)',
                                                                    position: 'relative',
                                                                    left: `${index * -12}px`
                                                                }
                                                            }, src, false, {
                                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 56
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255, 255, 255, 0.82)',
                                                            fontSize: '14px',
                                                            fontFamily: BarlowFont,
                                                            fontWeight: 500
                                                        },
                                                        children: "Trusted by business owners worldwide"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/AboutSection.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/AboutSection.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/AboutSection.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/AboutSection.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/CareerJobListing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareerJobListing",
    ()=>CareerJobListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const JOBS = [
    {
        id: 1,
        title: 'Web Designer',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/401f588e-6a0a-439d-9fe7-ed5ea0241b07.svg',
        salary: '$45,000 - $60,000 per year',
        experience: '1+ year',
        deadline: '30/09/2025',
        skills: 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.'
    },
    {
        id: 2,
        title: 'Mobile App Developer',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2e8f9d2d-ff42-4e6f-ae48-965b4c392f0b.svg',
        salary: '$55,000 - $75,000 per year',
        experience: '2+ years',
        deadline: '15/10/2025',
        skills: 'Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.'
    },
    {
        id: 3,
        title: 'Digital Marketing Specialist',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/8cae1c20-b4a4-4a98-930d-4ad5a4a12cd8.svg',
        salary: '$50,000 - $65,000 per year',
        experience: '3+ years',
        deadline: '20/11/2025',
        skills: 'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.'
    },
    {
        id: 4,
        title: 'Project Manager',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/8503f9d0-5d21-4f7d-bf9a-0b2d6dff54bb.svg',
        salary: '$60,000 - $80,000 per year',
        experience: '5+ years',
        deadline: '05/12/2025',
        skills: 'Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.'
    }
];
const ActionButton = ({ children, width = 'auto', height = 'auto', fontSize = '14px' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "ca-interactive-btn",
        style: {
            width,
            height,
            backgroundColor: '#00c2ff',
            color: '#FFFFFF',
            padding: '14px 24px',
            borderRadius: '10px',
            border: 'none',
            fontSize,
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.backgroundColor = '#0070E0';
            e.currentTarget.style.transform = 'translateY(-2px)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.backgroundColor = '#00c2ff';
            e.currentTarget.style.transform = 'translateY(0)';
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
        lineNumber: 54,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
const FilterDropdown = ({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            width: '220px',
            height: '56px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            backgroundColor: '#191919',
            borderRadius: '100px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        },
        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#252525',
        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = '#191919',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '16px',
                    fontFamily: '"Barlow", sans-serif'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ec74158c-7da8-4bc0-8f13-2c646777f865.svg",
                alt: "Arrow Down",
                style: {
                    width: '16px',
                    height: '16px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
        lineNumber: 85,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
const JobCard = ({ job })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ca-interactive-card",
        style: {
            display: 'flex',
            flexDirection: 'column',
            padding: '50px',
            gap: '40px',
            backgroundColor: '#1A1A1A',
            borderRadius: '14px',
            border: '1px solid transparent',
            cursor: 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '20px',
                            backgroundColor: '#1F1F1F',
                            border: '1px solid #333333',
                            borderRadius: '12px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: job.icon,
                            alt: job.title,
                            style: {
                                width: '34px',
                                height: '34px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 127,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: '#F9EFEC',
                            fontSize: '30px',
                            fontFamily: '"Roboto Flex", sans-serif',
                            fontWeight: 500,
                            margin: 0,
                            textTransform: 'uppercase'
                        },
                        children: job.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 138,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px'
                },
                children: [
                    {
                        label: 'Salary',
                        value: job.salary
                    },
                    {
                        label: 'Experience',
                        value: job.experience
                    },
                    {
                        label: 'Deadline',
                        value: job.deadline
                    }
                ].map((info, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 16px',
                            gap: '8px',
                            backgroundColor: '#1F1F1F',
                            borderRadius: '45px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#B3B3B2',
                                    fontSize: '18px',
                                    fontFamily: '"Roboto Flex", sans-serif'
                                },
                                children: info.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '4px',
                                    height: '4px',
                                    backgroundColor: '#00c2ff',
                                    borderRadius: '50%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#E6E6E6',
                                    fontSize: '18px',
                                    fontFamily: '"Roboto Flex", sans-serif',
                                    fontWeight: 500
                                },
                                children: info.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 164,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 150,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: {
                            color: '#F9EFEC',
                            fontSize: '24px',
                            fontFamily: '"Roboto Flex", sans-serif',
                            fontWeight: 500,
                            margin: 0,
                            textTransform: 'uppercase'
                        },
                        children: "Skills"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 197,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#B3B3B2',
                            fontSize: '18px',
                            fontFamily: '"Roboto Flex", sans-serif',
                            lineHeight: '27px',
                            margin: 0
                        },
                        children: job.skills
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 205,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    width: '100%',
                    height: '63px',
                    backgroundColor: '#00c2ff',
                    color: '#FFFFFF',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '18px',
                    fontFamily: '"Roboto Flex", sans-serif',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'background-color 0.2s ease'
                },
                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#0070E0',
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = '#00c2ff',
                children: "Apply Now"
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 214,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
        lineNumber: 112,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
const CareerJobListing = ()=>{
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            backgroundColor: '#030303',
            position: 'relative',
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    maxWidth: '1254px',
                    margin: '53px auto 0',
                    height: '376px',
                    backgroundColor: '#141414',
                    borderRadius: '48px',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9c556e01-75ad-4ab2-94cb-af93bb50c3b5.png",
                                alt: "Hero Visual",
                                style: {
                                    width: '511px',
                                    height: '376px',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9c556e01-75ad-4ab2-94cb-af93bb50c3b5.png",
                                alt: "Hero Visual Overlay",
                                style: {
                                    width: '511px',
                                    height: '376px',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    left: '287px',
                                    top: '95px',
                                    opacity: 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/506f6fe1-7c2e-41d1-b608-6c2ddf2ee945.png",
                                alt: "Hero Logo",
                                style: {
                                    position: 'absolute',
                                    width: '320px',
                                    right: '-40px',
                                    top: '18px',
                                    opacity: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 1,
                            padding: '93px 66px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '40px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    margin: '0 0 28px 0',
                                    maxWidth: '420px'
                                },
                                children: "Build the Future with Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    margin: '0 0 50px 0',
                                    maxWidth: '567px',
                                    lineHeight: '1.5'
                                },
                                children: "We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                width: "210px",
                                height: "42px",
                                children: "Explore Open Positions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    backgroundColor: '#0B0B0B',
                    marginTop: '74px',
                    padding: '50px 88px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '16px',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Departments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Job Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Workplace Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: '300px',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#191919',
                            borderRadius: '100px',
                            padding: '10px 10px 10px 20px',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "ca-interactive-input",
                                type: "text",
                                placeholder: "Search by keywords...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                style: {
                                    flex: 1,
                                    background: 'none',
                                    border: 'none',
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    outline: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ca-interactive-btn ca-interactive-icon",
                                style: {
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#00c2ff',
                                    border: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/01f555ea-5e77-49a5-b438-e733e85fd207.svg",
                                    alt: "Search",
                                    style: {
                                        width: '20px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1266px',
                    margin: '77px auto 0',
                    padding: '0 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#F9EFEC',
                            fontSize: '36px',
                            fontFamily: '"Roboto Flex", sans-serif',
                            fontWeight: 600,
                            textAlign: 'center',
                            marginBottom: '50px',
                            textTransform: 'capitalize'
                        },
                        children: "Open Positions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(580px, 1fr))',
                            gap: '20px'
                        },
                        children: JOBS.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JobCard, {
                                job: job
                            }, job.id, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 390,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1097px',
                    margin: '160px auto',
                    padding: '0 20px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        height: '282px',
                        backgroundImage: `url("https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/95580a3e-6194-4a51-a034-149b30f2198e.png")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '64px',
                        boxShadow: '2px 4px 15px rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '48px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                color: '#FFFFFF',
                                fontSize: '36px',
                                fontWeight: 600,
                                fontFamily: '"Barlow", sans-serif',
                                textTransform: 'uppercase',
                                margin: 0,
                                textAlign: 'center'
                            },
                            children: "Ready to discuss"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#FFFFFF',
                                fontSize: '20px',
                                fontWeight: 600,
                                fontFamily: '"Barlow", sans-serif',
                                textTransform: 'capitalize',
                                margin: 0,
                                textAlign: 'center'
                            },
                            children: "your product needs with Catalyst Analytic experts?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '10px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                width: "198px",
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
        lineNumber: 233,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-ssr] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
"use client";
;
;
;
/* ─── Color tokens (extracted from existing codebase) ─── */ const COLORS = {
    bg: 'rgba(3, 3, 3, 1)',
    cardBg: 'rgba(255, 255, 255, 0.03)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    white: '#ffffff',
    grayText: 'rgba(235, 239, 255, 0.72)',
    grayTextLight: 'rgba(235, 239, 255, 0.78)',
    purple: '#00c2ff',
    purpleAlpha15: 'rgba(0, 194, 255, 0.15)',
    purpleAlpha12: 'rgba(0, 194, 255, 0.12)',
    blue: '#00c2ff',
    blueAlpha15: 'rgba(0, 194, 255, 0.15)',
    blueAlpha08: 'rgba(0, 194, 255, 0.08)',
    font: '"Barlow", sans-serif'
};
/* ─── FAQ data ─── */ const faqItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
        question: 'What digital marketing services do you offer?',
        answer: 'We offer a full range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization, and Analytics.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        question: 'How long does it take to see results?',
        answer: 'Results vary by service. SEO typically takes 3-6 months, while PPC and Social Media campaigns can show measurable results within the first 2-4 weeks.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        question: 'What makes your digital marketing strategies different?',
        answer: 'We combine deep data analytics with creative strategy. Every campaign is custom-built for your business — no copy-paste templates, no guesswork.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"],
        question: 'Do you work with businesses of all sizes?',
        answer: 'Yes. We work with startups, SMEs, and enterprise brands. Our packages are flexible and scale with your business goals and budget.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        question: 'How do you measure the success of campaigns?',
        answer: 'We track KPIs including ROAS, CTR, conversion rate, cost per lead, and revenue attribution. You receive a detailed monthly report with full transparency.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        question: 'Can I customize the services I need?',
        answer: 'Absolutely. We offer modular service packages — you pick what you need. No forced bundles, no paying for what you don\'t use.'
    }
];
/* ─── Feature rows data ─── */ const featureRows = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: 'Quick Responses',
        desc: 'We reply within 24 hours',
        accent: COLORS.blue
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        title: 'Trusted by 500+ Brands',
        desc: 'Delivering real results, globally',
        accent: COLORS.purple
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: 'Expert Support',
        desc: 'Our team is here to help',
        accent: COLORS.blue
    }
];
/* ─── Scroll-in animation wrapper ─── */ const ScrollReveal = ({ children, direction = 'up', delay = 0 })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(el);
            }
        }, {
            threshold: 0.12
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, []);
    const transforms = {
        up: 'translateY(40px)',
        left: 'translateX(-50px)',
        right: 'translateX(50px)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate(0)' : transforms[direction],
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/generated/FAQSection.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
/* ─── Single Accordion Item ─── */ const AccordionItem = ({ icon: Icon, question, answer, isOpen, onClick })=>{
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [maxH, setMaxH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (contentRef.current) {
            setMaxH(contentRef.current.scrollHeight);
        }
    }, [
        answer
    ]);
    const [btnHovered, setBtnHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: isOpen ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.12), rgba(0, 194, 255, 0.08))' : 'rgba(15, 15, 15, 1)',
            border: isOpen ? '1px solid rgba(0, 194, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease, background 0.3s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                style: {
                    all: 'unset',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '40px',
                            height: '40px',
                            minWidth: '40px',
                            borderRadius: '10px',
                            background: isOpen ? COLORS.purple : COLORS.purpleAlpha15,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.3s ease'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 18,
                            color: COLORS.white,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flex: 1,
                            padding: '0 16px',
                            color: COLORS.white,
                            fontSize: '15px',
                            fontWeight: 600,
                            lineHeight: 1.4,
                            fontFamily: COLORS.font
                        },
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseEnter: ()=>setBtnHovered(true),
                        onMouseLeave: ()=>setBtnHovered(false),
                        style: {
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            borderRadius: '50%',
                            border: isOpen ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                            background: isOpen ? COLORS.purple : btnHovered ? 'rgba(255,255,255,0.06)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        },
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 16,
                            color: COLORS.white,
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16,
                            color: COLORS.white,
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/FAQSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                style: {
                    maxHeight: isOpen ? `${maxH}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '0 24px 20px 80px',
                        color: COLORS.grayTextLight,
                        fontSize: '14px',
                        lineHeight: '24px',
                        fontFamily: COLORS.font
                    },
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/FAQSection.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/FAQSection.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FAQSection = ()=>{
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleToggle = (idx)=>{
        setOpenIdx(openIdx === idx ? -1 : idx);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: '100%',
            backgroundColor: COLORS.bg,
            padding: '80px 24px',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                        direction: "up",
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '48px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'block',
                                        color: COLORS.purple,
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        fontFamily: COLORS.font,
                                        marginBottom: '16px'
                                    },
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: COLORS.white,
                                        fontSize: 'clamp(32px, 4vw, 52px)',
                                        fontWeight: 800,
                                        fontFamily: COLORS.font,
                                        margin: '0 0 16px 0',
                                        lineHeight: 1.1
                                    },
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: COLORS.grayText,
                                        fontSize: '16px',
                                        lineHeight: '28px',
                                        maxWidth: '600px',
                                        margin: '0 auto',
                                        fontFamily: COLORS.font
                                    },
                                    children: "Find answers to the most common questions about our digital marketing services and process."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '35% 1fr',
                            gap: '48px',
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                                direction: "left",
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '28px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: COLORS.white,
                                                        fontSize: 'clamp(26px, 3vw, 36px)',
                                                        fontWeight: 800,
                                                        fontFamily: COLORS.font,
                                                        margin: '0 0 14px 0',
                                                        lineHeight: 1.15
                                                    },
                                                    children: [
                                                        "Everything you need",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "to know",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: COLORS.purple
                                                            },
                                                            children: "about us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: COLORS.grayText,
                                                        fontSize: '15px',
                                                        lineHeight: '26px',
                                                        margin: 0,
                                                        fontFamily: COLORS.font
                                                    },
                                                    children: [
                                                        "We believe in transparency and clarity.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Here are some common questions our",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "clients ask before getting started."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '14px',
                                                padding: '24px',
                                                borderRadius: '20px',
                                                background: COLORS.cardBg,
                                                border: `1px solid ${COLORS.cardBorder}`
                                            },
                                            children: featureRows.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '14px',
                                                        padding: '14px 12px',
                                                        borderRadius: '16px',
                                                        background: 'rgba(255, 255, 255, 0.02)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '44px',
                                                                height: '44px',
                                                                minWidth: '44px',
                                                                borderRadius: '14px',
                                                                background: item.accent,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                size: 20,
                                                                color: COLORS.white,
                                                                strokeWidth: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: COLORS.white,
                                                                        fontSize: '15px',
                                                                        fontWeight: 700,
                                                                        fontFamily: COLORS.font,
                                                                        marginBottom: '2px'
                                                                    },
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: COLORS.grayText,
                                                                        fontSize: '13px',
                                                                        fontFamily: COLORS.font,
                                                                        lineHeight: '20px'
                                                                    },
                                                                    children: item.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.title, true, {
                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '20px 22px',
                                                borderRadius: '20px',
                                                background: COLORS.blueAlpha08,
                                                border: '1px solid rgba(0, 194, 255, 0.18)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '14px',
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '14px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                flexShrink: 0
                                                            },
                                                            children: [
                                                                1,
                                                                2,
                                                                3,
                                                                4
                                                            ].map((num, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `https://i.pravatar.cc/40?img=${num}`,
                                                                    alt: `Team member ${num}`,
                                                                    style: {
                                                                        width: '36px',
                                                                        height: '36px',
                                                                        borderRadius: '50%',
                                                                        border: '2px solid rgba(3, 3, 3, 1)',
                                                                        marginLeft: idx > 0 ? '-10px' : '0',
                                                                        objectFit: 'cover',
                                                                        position: 'relative',
                                                                        zIndex: 4 - idx
                                                                    }
                                                                }, num, false, {
                                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: COLORS.white,
                                                                        fontSize: '15px',
                                                                        fontWeight: 700,
                                                                        fontFamily: COLORS.font,
                                                                        marginBottom: '2px'
                                                                    },
                                                                    children: "Still have questions?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: COLORS.grayText,
                                                                        fontSize: '13px',
                                                                        fontFamily: COLORS.font
                                                                    },
                                                                    children: "Talk to our growth experts."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '42px',
                                                        height: '42px',
                                                        minWidth: '42px',
                                                        borderRadius: '50%',
                                                        background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.purple})`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 18,
                                                        color: COLORS.white,
                                                        strokeWidth: 2.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/FAQSection.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                                direction: "right",
                                delay: 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px'
                                    },
                                    children: faqItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                            icon: item.icon,
                                            question: item.question,
                                            answer: item.answer,
                                            isOpen: openIdx === idx,
                                            onClick: ()=>handleToggle(idx)
                                        }, idx, false, {
                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/FAQSection.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/FAQSection.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/FAQSection.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/FAQSection.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 860px) {
          .faq-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/generated/FAQSection.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/FAQSection.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/IndustriesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesSection",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const industries = [
    {
        id: 1,
        counter: '01/08',
        name: 'E-Commerce',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        description: 'We help online stores scale revenue through targeted Meta & Google Ads, conversion-focused landing pages, and retention email campaigns that turn browsers into buyers.',
        tags: [
            'Meta Ads',
            'Google Shopping',
            'Email Flows',
            'CRO'
        ]
    },
    {
        id: 2,
        counter: '02/08',
        name: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
        description: 'From private clinics to diagnostic labs, we drive qualified patient leads through local SEO, Google Ads, and reputation management that builds trust online.',
        tags: [
            'Local SEO',
            'Google Ads',
            'Reputation Mgmt',
            'Lead Gen'
        ]
    },
    {
        id: 3,
        counter: '03/08',
        name: 'Real Estate',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        description: 'We generate high-quality property leads for developers and agents using precision-targeted campaigns, WhatsApp funnels, and compelling visual creatives.',
        tags: [
            'Lead Generation',
            'Meta Ads',
            'WhatsApp Funnel',
            'Video Ads'
        ]
    },
    {
        id: 4,
        counter: '04/08',
        name: 'Education',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
        description: 'Coaching academies and online platforms trust us to drive enrollments through YouTube ads, SEO content, and high-converting landing pages.',
        tags: [
            'YouTube Ads',
            'SEO',
            'Landing Pages',
            'Email Nurture'
        ]
    },
    {
        id: 5,
        counter: '05/08',
        name: 'Restaurants & Food',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        description: 'We increase footfall and online orders for restaurants through social media content, influencer marketing, and Google My Business optimization.',
        tags: [
            'Social Media',
            'Influencer Marketing',
            'GMB SEO',
            'Reels'
        ]
    },
    {
        id: 6,
        counter: '06/08',
        name: 'Automotive',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
        description: 'Car dealerships and service centers rely on us for lead generation, local search dominance, and ad creatives that drive results.',
        tags: [
            'Lead Gen',
            'Local SEO',
            'Google Ads',
            'Video Creatives'
        ]
    },
    {
        id: 7,
        counter: '07/08',
        name: 'Finance & Banking',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
        description: 'We help fintech brands build credibility and acquire clients through compliant ad strategies, content marketing, and SEO.',
        tags: [
            'Content Marketing',
            'SEO',
            'LinkedIn Ads',
            'Trust Building'
        ]
    },
    {
        id: 8,
        counter: '08/08',
        name: 'Fashion & Retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
        description: 'Fashion brands grow with us through scroll-stopping creatives, influencer collaborations, and data-driven paid social campaigns.',
        tags: [
            'Instagram Ads',
            'Influencer Collab',
            'Retargeting',
            'UGC'
        ]
    }
];
const IndustriesSection = ()=>{
    const blockRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentImg, setCurrentImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(industries[0].image);
    const [nextImg, setNextImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRevealing, setIsRevealing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) return;
                const index = Number(entry.target.getAttribute('data-index'));
                if (index === activeIndex) return;
                const newImage = industries[index].image;
                // Start the bottom-to-top wipe reveal
                setNextImg(newImage);
                setIsRevealing(true);
                setActiveIndex(index);
                // After animation completes, swap images and reset
                setTimeout(()=>{
                    setCurrentImg(newImage);
                    setNextImg('');
                    setIsRevealing(false);
                }, 600);
            });
        }, {
            threshold: 0.55
        });
        blockRefs.current.forEach((block)=>{
            if (block) observer.observe(block);
        });
        return ()=>observer.disconnect();
    }, [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#030303',
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '50%'
                },
                children: industries.map((industry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-index": idx,
                        ref: (el)=>{
                            blockRefs.current[idx] = el;
                        },
                        style: {
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '0 80px',
                            transition: 'all .4s ease',
                            opacity: idx === activeIndex ? 1 : 0.35,
                            borderLeft: idx === activeIndex ? '4px solid #00c2ff' : '1px solid rgba(255,255,255,.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666',
                                    marginBottom: 16,
                                    letterSpacing: '0.1em'
                                },
                                children: industry.counter
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '56px',
                                    color: idx === activeIndex ? '#00c2ff' : 'rgba(255,255,255,.4)',
                                    marginBottom: 24,
                                    transition: '.4s'
                                },
                                children: industry.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,.75)',
                                    fontSize: '18px',
                                    lineHeight: 1.8,
                                    maxWidth: '600px',
                                    marginBottom: 32
                                },
                                children: industry.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 12
                                },
                                children: industry.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            padding: '8px 18px',
                                            borderRadius: 999,
                                            border: '1px solid rgba(0,194,255,.25)',
                                            background: 'rgba(0,194,255,.08)',
                                            color: '#fff'
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, industry.id, true, {
                        fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '50%',
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    alignSelf: 'flex-start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 50px',
                    backgroundColor: 'rgba(3, 3, 3, 1)',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        width: '100%',
                        maxWidth: '520px',
                        aspectRatio: '1 / 1.3',
                        borderRadius: '280px',
                        border: '2px solid rgba(0,194,255,.25)',
                        boxShadow: '0 0 80px rgba(0,194,255,.2)',
                        overflow: 'hidden'
                    },
                    children: industries.map((item, idx)=>{
                        const isActive = idx === activeIndex;
                        const isPast = idx < activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.image,
                            alt: item.name,
                            style: {
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: isActive ? 'translateY(0%)' : isPast ? 'translateY(-100%)' : 'translateY(100%)',
                                transition: 'transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)',
                                zIndex: isActive ? 2 : 1
                            }
                        }, item.id, false, {
                            fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                            lineNumber: 220,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/IndustriesSection.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/IndustriesSection.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/generated/LandingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/ServicesPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioShowcase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/PortfolioShowcase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/AboutSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CareerJobListing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/CareerJobListing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/FAQSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$IndustriesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/IndustriesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$TrustSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/TrustSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesGridSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/ServicesGridSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/PortfolioSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CaseStudiesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/CaseStudiesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/BlogSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$TestimonialsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/TestimonialsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FinalCTASection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/FinalCTASection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ContactFormSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/ContactFormSection.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const faqData = [
    {
        question: 'What digital marketing services do you offer?',
        answer: 'We offer a full range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization, and Analytics.'
    },
    {
        question: 'How long does it take to see results?',
        answer: 'Most clients begin seeing measurable performance improvements within 8 to 12 weeks, depending on campaign scale and market conditions.'
    },
    {
        question: 'What makes your digital marketing strategies different?',
        answer: 'Our strategies combine data-driven audience targeting, creative messaging, and ongoing optimization to deliver scalable growth and consistent ROI.'
    },
    {
        question: 'Do you work with businesses of all sizes?',
        answer: 'Yes. We tailor our approach to startups, growing SMBs, and established enterprises to fit each budget and growth stage.'
    },
    {
        question: 'How do you measure the success of campaigns?',
        answer: 'We track KPIs such as traffic, lead quality, conversion rate, cost per acquisition, and revenue growth to ensure every campaign delivers value.'
    },
    {
        question: 'Can I customize the services I need?',
        answer: 'Absolutely. You can choose services a la carte or build a fully integrated marketing program based on your business goals.'
    }
];
const industryCards = [
    {
        number: '01',
        title: 'E-Commerce',
        desc: 'Fueling online stores with data-driven marketing that increases traffic and sales.',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
    },
    {
        number: '02',
        title: 'Healthcare',
        desc: 'Building patient trust and brand awareness through targeted digital strategies.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
    },
    {
        number: '03',
        title: 'Real Estate',
        desc: 'Generating high-quality leads and maximizing property visibility online.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
    },
    {
        number: '04',
        title: 'Education',
        desc: 'Attracting students and enhancing enrollment with result-driven campaigns.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
    },
    {
        number: '05',
        title: 'Finance',
        desc: 'Helping financial brands build credibility and acquire high-value clients.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg'
    },
    {
        number: '06',
        title: 'SaaS & Technology',
        desc: 'Scaling tech brands with performance marketing that drives sign-ups and growth.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504f3?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
    },
    {
        number: '07',
        title: 'Travel & Hospitality',
        desc: 'Inspiring journeys and bookings through engaging digital experiences.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
    },
    {
        number: '08',
        title: 'Manufacturing',
        desc: 'Generating B2B leads and strengthening brand presence in competitive markets.',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
    },
    {
        number: '09',
        title: 'Fitness & Wellness',
        desc: 'Building strong communities and boosting memberships through smart marketing.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
    },
    {
        number: '10',
        title: 'Food & Restaurant',
        desc: 'Driving footfall and online orders with creative and localized campaigns.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg'
    }
];
const valueItems = [
    {
        title: 'Innovation',
        text: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.',
        icon: '6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
    },
    {
        title: 'Collaboration',
        text: 'Working closely with clients to develop tailored solutions that drive measurable success.',
        icon: '7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
    },
    {
        title: 'Excellence',
        text: 'Maintaining the highest standards in code quality, system performance, and client outcomes.',
        icon: '9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
    },
    {
        title: 'Integrity',
        text: 'Operating with transparency and ethical considerations at the forefront of all decisions.',
        icon: 'd4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
    }
];
const storyItems = [
    {
        text: 'We saw businesses drowning in data but struggling to make sense of it. Decisions were slow, teams were overwhelmed, and insights were buried.',
        imgId: '383678ce-92bc-48a7-b9d9-e3e192b1c49f.svg',
        highlight: false
    },
    {
        text: "That's when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
        imgId: '333bd0da-fe02-4bea-9f2d-b87e574e2e5a.svg',
        highlight: true
    },
    {
        text: 'So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.',
        imgId: 'a052f191-8e2d-481e-bebb-df751d7d3be8.svg',
        highlight: false
    }
];
const navItems = [
    'Home',
    'Services',
    'Portfolio',
    'About Us',
    'Careers'
];
const FAQItem = ({ question, answer, icon, isOpen, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderRadius: '28px',
            overflow: 'hidden',
            border: isOpen ? '1px solid rgba(0, 194, 255, 0.68)' : '1px solid rgba(255, 255, 255, 0.08)',
            background: isOpen ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.16), rgba(0, 194, 255, 0.08))' : 'rgba(8, 12, 32, 0.88)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                style: {
                    all: 'unset',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '24px 26px',
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '18px',
                                    background: isOpen ? '#00c2ff' : 'rgba(0, 194, 255, 0.16)',
                                    display: 'grid',
                                    placeItems: 'center',
                                    color: '#ffffff',
                                    fontSize: '22px'
                                },
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#ffffff',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    lineHeight: 1.35,
                                    fontFamily: '"Barlow", sans-serif',
                                    minWidth: 0,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                },
                                children: question
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ffffff',
                            fontSize: '26px',
                            lineHeight: 1,
                            fontFamily: '"Barlow", sans-serif'
                        },
                        children: isOpen ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '0 26px 24px',
                    color: 'rgba(235, 239, 255, 0.84)',
                    fontSize: '15px',
                    lineHeight: '26px',
                    fontFamily: '"Barlow", sans-serif'
                },
                children: answer
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 210,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 153,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Navbar = ({ activePage, onNavigate, scrolled })=>{
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavClick = (page)=>{
        onNavigate(page);
        setMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "nav-header",
                style: {
                    width: '100%',
                    height: '96px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 86px',
                    backgroundColor: scrolled ? 'rgba(3, 3, 3, 0.95)' : 'rgba(3, 3, 3, 1)',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                    transition: 'all 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        },
                        onClick: ()=>handleNavClick('Home'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "logo-img",
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2f27409e-ca8b-4ecc-a6bc-ba60974bd799.png",
                                alt: "Logo",
                                style: {
                                    width: '64px',
                                    height: '64px',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-text",
                                style: {
                                    color: 'white',
                                    fontSize: '20px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    marginLeft: '4px',
                                    lineHeight: '1.1'
                                },
                                children: [
                                    "Catalyst",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Analytics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '22px'
                        },
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "nav-item",
                                onClick: ()=>handleNavClick(item),
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: activePage === item ? 'rgba(0, 194, 255, 1)' : 'white',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer',
                                    padding: '10px',
                                    transition: 'color 0.2s ease',
                                    borderBottom: activePage === item ? '2px solid rgba(0, 194, 255, 1)' : '2px solid transparent'
                                },
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 289,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary-btn desktop-cta",
                        style: {
                            width: '140px',
                            padding: '14px 10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 194, 255, 1)',
                            border: '1px dotted rgba(255, 255, 255, 1)',
                            borderRadius: '10px',
                            color: 'rgba(255, 255, 255, 1)',
                            fontSize: '14px',
                            fontWeight: 600,
                            fontFamily: '"Barlow", sans-serif',
                            lineHeight: '14px',
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            transition: 'all 0.2s ease'
                        },
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "hamburger-btn",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        style: {
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '8px'
                        },
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'block',
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: 'white',
                                    transition: 'all 0.3s ease',
                                    transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'block',
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: 'white',
                                    transition: 'all 0.3s ease',
                                    opacity: menuOpen ? 0 : 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'block',
                                    width: '24px',
                                    height: '2px',
                                    backgroundColor: 'white',
                                    transition: 'all 0.3s ease',
                                    transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu",
                style: {
                    position: 'fixed',
                    top: '96px',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(10, 10, 10, 0.98)',
                    backdropFilter: 'blur(12px)',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px 0 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                },
                children: [
                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "nav-item",
                            onClick: ()=>handleNavClick(item),
                            style: {
                                background: 'none',
                                border: 'none',
                                color: activePage === item ? 'rgba(0, 194, 255, 1)' : 'white',
                                fontSize: '17px',
                                fontFamily: '"Barlow", sans-serif',
                                cursor: 'pointer',
                                padding: '14px 24px',
                                textAlign: 'left',
                                transition: 'color 0.2s ease'
                            },
                            children: item
                        }, item, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 379,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '8px 24px 0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "primary-btn",
                            style: {
                                width: '100%',
                                padding: '14px 10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(0, 194, 255, 1)',
                                border: '1px dotted rgba(255, 255, 255, 1)',
                                borderRadius: '10px',
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: '14px',
                                fontWeight: 600,
                                fontFamily: '"Barlow", sans-serif',
                                lineHeight: '14px',
                                cursor: 'pointer',
                                boxSizing: 'border-box',
                                transition: 'all 0.2s ease'
                            },
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 366,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 240,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Footer = ({ onNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            width: '100%',
            maxWidth: '1440px',
            padding: '80px 86px',
            marginTop: 'auto',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'minmax(240px, 320px) repeat(4, minmax(160px, 1fr))',
                    gap: '40px',
                    paddingBottom: '42px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>onNavigate('Home'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(10,132,255,1), rgba(145,104,255,1))',
                                            display: 'grid',
                                            placeItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'white',
                                                fontSize: '22px',
                                                fontWeight: 800,
                                                lineHeight: 1
                                            },
                                            children: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 450,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'white',
                                                fontSize: '20px',
                                                fontFamily: '"Barlow", sans-serif',
                                                fontWeight: 800,
                                                lineHeight: 1.05
                                            },
                                            children: [
                                                "Ahsan",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Designs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(235, 239, 255, 0.72)',
                                    fontSize: '15px',
                                    lineHeight: '26px',
                                    fontFamily: '"Barlow", sans-serif',
                                    maxWidth: '320px',
                                    margin: 0
                                },
                                children: "A digital marketing agency focused on driving real growth through data, creativity, and performance."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px'
                                },
                                children: [
                                    'linkedin',
                                    'instagram',
                                    'dribbble',
                                    'globe'
                                ].map((icon, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.06)',
                                            display: 'grid',
                                            placeItems: 'center',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.88)',
                                                fontSize: '14px'
                                            },
                                            children: icon[0].toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, idx, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 493,
                                        columnNumber: 80
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Barlow", sans-serif'
                                },
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'SEO',
                                'Performance Marketing',
                                'Social Media Marketing',
                                'Web Design',
                                'Content Marketing',
                                'Conversion Optimization'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 525,
                                    columnNumber: 145
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Barlow", sans-serif'
                                },
                                children: "Industries"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'Ecommerce',
                                'Healthcare',
                                'Real Estate',
                                'Finance',
                                'Education',
                                'Technology'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 548,
                                    columnNumber: 105
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Barlow", sans-serif'
                                },
                                children: "Company"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'About Us',
                                'Our Work',
                                'Case Studies',
                                'Careers',
                                'Blog',
                                'Contact'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 571,
                                    columnNumber: 95
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'white',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Barlow", sans-serif'
                                },
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                {
                                    label: 'hello@mohsindesigns.com',
                                    icon: '✉'
                                },
                                {
                                    label: '+92 300 1234567',
                                    icon: '📞'
                                },
                                {
                                    label: 'Karachi, Pakistan',
                                    icon: '📍'
                                },
                                {
                                    label: 'Available Worldwide',
                                    icon: '🌍'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: 'rgba(255, 255, 255, 0.06)',
                                                color: 'rgba(255, 255, 255, 0.88)',
                                                fontSize: '14px'
                                            },
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 604,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.78)',
                                                fontSize: '16px',
                                                fontFamily: '"Barlow", sans-serif'
                                            },
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 617,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 599,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                    paddingTop: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(152, 152, 154, 1)',
                            fontSize: '14px',
                            fontFamily: '"Barlow", sans-serif',
                            margin: 0
                        },
                        children: "© 2026 Ahsan Designs. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '24px',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '14px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '14px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 425,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const industriesData = [
    {
        id: '01',
        name: 'E-Commerce',
        tagline: 'Scale your store. Dominate your niche.',
        description: 'We build full-funnel ad strategies for online stores — from awareness to purchase to repeat buyers. Meta, Google, TikTok — we run it all.',
        stats: [
            {
                label: 'Average ROAS',
                value: '3.8x'
            },
            {
                label: 'Lower Cart Abandonment',
                value: '65%'
            },
            {
                label: 'Revenue Generated',
                value: 'PKR 50M+'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4'
    },
    {
        id: '02',
        name: 'Food & Beverage',
        tagline: 'Fill tables. Build loyal customers.',
        description: 'From restaurant chains to cloud kitchens — we handle social media, influencer campaigns, Google presence, and delivery platform visibility.',
        stats: [
            {
                label: 'More Footfall',
                value: '40%'
            },
            {
                label: 'Followers in 30 Days',
                value: '12K'
            },
            {
                label: 'Google Rating',
                value: '4.7 Star'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/3994840/3994840-uhd_2560_1440_30fps.mp4'
    },
    {
        id: '03',
        name: 'Real Estate',
        tagline: 'Turn browsers into buyers.',
        description: 'Hyper-targeted lead generation for property developers and agents. We bring qualified buyers — not just clicks.',
        stats: [
            {
                label: 'Lower Cost Per Lead',
                value: '72%'
            },
            {
                label: 'Qualified Leads',
                value: '3x'
            },
            {
                label: 'Projects Sold Out in 45 Days',
                value: '2'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_30fps.mp4'
    },
    {
        id: '04',
        name: 'Education',
        tagline: 'More enrollments. Lower acquisition cost.',
        description: 'YouTube ads, SEO content, and email automation that fills your courses and coaching programs with serious students.',
        stats: [
            {
                label: 'New Enrollments/Month',
                value: '280'
            },
            {
                label: 'Lower Cost Per Enrollment',
                value: '55%'
            },
            {
                label: 'Email Open Rate',
                value: '38%'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
    },
    {
        id: '05',
        name: 'Healthcare',
        tagline: 'More patients. Better visibility.',
        description: 'Local SEO, Google Ads, and landing pages that bring real appointment bookings to clinics, hospitals, and healthcare brands.',
        stats: [
            {
                label: 'Google in 3 Weeks',
                value: 'Page 1'
            },
            {
                label: 'Appointments/Month',
                value: '90+'
            },
            {
                label: 'Google Maps Rating',
                value: '4.9 Star'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/4226263/4226263-uhd_2560_1440_25fps.mp4'
    },
    {
        id: '06',
        name: 'Technology & SaaS',
        tagline: 'Grow MRR. Reduce churn.',
        description: 'B2B lead generation, LinkedIn strategy, content marketing, and conversion optimization for tech companies and SaaS products.',
        stats: [
            {
                label: 'MRR Growth',
                value: '2.5x'
            },
            {
                label: 'Lower CAC',
                value: '60%'
            },
            {
                label: 'Qualified B2B Leads/Month',
                value: '400+'
            }
        ],
        videoUrl: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4'
    }
];
const IndustriesServedSection = ()=>{
    const [activeIdx, setActiveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const itemRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef([]);
    // Video crossfade state
    const [activeVid, setActiveVid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('A');
    const [srcA, setSrcA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(industriesData[0].videoUrl);
    const [srcB, setSrcB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [errA, setErrA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errB, setErrB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoARef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const videoBRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveIdx(index);
                }
            });
        }, {
            threshold: 0.4
        });
        itemRefs.current.forEach((ref)=>{
            if (ref) observer.observe(ref);
        });
        return ()=>observer.disconnect();
    }, [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newSrc = industriesData[activeIdx].videoUrl;
        if (activeVid === 'A' && srcA !== newSrc) {
            setErrB(false);
            setSrcB(newSrc);
            setActiveVid('B');
        } else if (activeVid === 'B' && srcB !== newSrc) {
            setErrA(false);
            setSrcA(newSrc);
            setActiveVid('A');
        }
    }, [
        activeIdx
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (videoARef.current && srcA) {
            videoARef.current.load();
            const p = videoARef.current.play();
            if (p !== undefined) p.catch(()=>setErrA(true));
        }
    }, [
        srcA
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (videoBRef.current && srcB) {
            videoBRef.current.load();
            const p = videoBRef.current.play();
            if (p !== undefined) p.catch(()=>setErrB(true));
        }
    }, [
        srcB
    ]);
    const handleTabClick = (idx)=>{
        setActiveIdx(idx);
        if (isMobile) {
            itemRefs.current[idx]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$IndustriesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndustriesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 821,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const HomeContent = ({ onNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 841,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$TrustSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrustSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 843,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesGridSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServicesGridSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 845,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortfolioSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 847,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CaseStudiesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CaseStudiesSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "clients-marquee",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clients-marquee-track",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "clients-marquee-img",
                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg",
                            alt: "Partner companies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 854,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "clients-marquee-img",
                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg",
                            alt: "",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 855,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 853,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 852,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '100px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            fontSize: 'clamp(26px, 4vw, 36px)',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600,
                            textAlign: 'center',
                            marginBottom: '75px'
                        },
                        children: "Why Choose Us"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 868,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "values-grid",
                        style: {
                            display: 'flex',
                            gap: '30px',
                            position: 'relative',
                            width: '100%',
                            justifyContent: 'center',
                            padding: '0 80px',
                            boxSizing: 'border-box'
                        },
                        children: valueItems.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "value-circle value-circle-item ca-interactive-card",
                                style: {
                                    width: '280px',
                                    height: '280px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(20, 20, 20, 1)',
                                    border: '10px solid rgba(0, 0, 0, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '0 42px',
                                    boxSizing: 'border-box',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "value-icon ca-interactive-icon",
                                        src: `https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${val.icon}`,
                                        alt: val.title,
                                        style: {
                                            width: '33px',
                                            marginBottom: '16px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 905,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "value-title",
                                        style: {
                                            color: 'white',
                                            fontSize: '20px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 500,
                                            margin: '0 0 16px 0'
                                        },
                                        children: val.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 909,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "value-text",
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif',
                                            margin: 0,
                                            lineHeight: '16.8px'
                                        },
                                        children: val.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 918,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, val.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 888,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustriesServedSection, {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 932,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$BlogSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlogSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 940,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$TestimonialsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TestimonialsSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 943,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 947,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FinalCTASection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FinalCTASection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ContactFormSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactFormSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 953,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/c3647cc6-199c-420f-a54d-701790a3131f.svg",
                alt: "",
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    right: '0',
                    top: '1636px',
                    width: 'min(267px, 18vw)',
                    transform: 'rotate(180deg)',
                    opacity: 0.4,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 833,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const LandingPage = ({ className, style })=>{
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Home');
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavigate = (page)=>{
        setActivePage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `landing-page ${className || ''}`,
        style: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'rgba(3, 3, 3, 1)',
            boxSizing: 'border-box',
            overflowX: 'clip',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes robotJump {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(-22px); }
          75% { transform: translateY(-8px); }
        }
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-robot-jump {
          animation: robotJump 2.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .nav-item:hover { color: rgba(0, 194, 255, 1) !important; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0, 194, 255, 0.3); }
        .primary-btn:active { transform: translateY(0); }
        .service-card:hover { transform: translateY(-8px); background-color: rgba(30, 30, 30, 1) !important; }
        .value-circle:hover { border-color: rgba(0, 194, 255, 0.5) !important; transform: scale(1.02); }
        .mobile-menu { animation: slideDown 0.25s ease; }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .hero-content { left: 0 !important; top: 64px !important; width: 100% !important; padding: 0 24px !important; box-sizing: border-box !important; }
          .hero-visual { display: none !important; }
          .hero-section { height: auto !important; min-height: 520px !important; padding-bottom: 48px !important; }
          .hero-glow { width: 100% !important; opacity: 0.5 !important; }
          .hero-h1 { font-size: clamp(32px, 9vw, 56px) !important; line-height: 1.15 !important; }
          .hero-decisions-badge { font-size: clamp(32px, 9vw, 56px) !important; line-height: 1.3 !important; height: auto !important; padding: 4px 16px !important; margin-top: 4px !important; }
          .hero-p { width: 100% !important; font-size: 16px !important; }
          .hero-cta-btn { width: 165px !important; }
          .services-grid { flex-direction: column !important; align-items: center !important; padding: 0 24px !important; }
          .service-card-item { width: 100% !important; max-width: 420px !important; }
          .values-grid { flex-wrap: wrap !important; padding: 0 24px !important; gap: 20px !important; }
          .value-circle-item { width: 160px !important; height: 160px !important; padding: 0 18px !important; }
          .value-icon { width: 22px !important; margin-bottom: 8px !important; }
          .value-title { font-size: 14px !important; margin: 0 0 6px 0 !important; }
          .value-text { font-size: 11px !important; line-height: 1.4 !important; }
          .story-wrapper { flex-direction: column !important; padding: 0 24px !important; gap: 32px !important; }
          .story-nav-btn { display: none !important; }
          .story-items-row { flex-direction: column !important; gap: 40px !important; }
          .faq-section { padding: 60px 16px 80px !important; }
          .section-pad { padding: 80px 0 !important; }
          .services-title { width: 100% !important; padding: 0 24px !important; box-sizing: border-box !important; font-size: 26px !important; line-height: 1.4 !important; }
          .nav-header { padding: 0 20px !important; }
          .logo-text { font-size: 16px !important; }
          .logo-img { width: 48px !important; height: 48px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .hero-content { left: 40px !important; top: 120px !important; width: 55% !important; }
          .hero-h1 { font-size: clamp(38px, 6vw, 60px) !important; line-height: 1.15 !important; }
          .hero-decisions-badge { font-size: clamp(38px, 6vw, 60px) !important; line-height: 1.3 !important; height: auto !important; padding: 4px 20px !important; }
          .hero-p { width: 90% !important; font-size: 17px !important; }
          .hero-visual { left: auto !important; right: 0 !important; width: 42% !important; top: 100px !important; }
          .hero-section { height: 780px !important; }
          .services-grid { flex-wrap: wrap !important; justify-content: center !important; padding: 0 32px !important; gap: 28px !important; }
          .service-card-item { width: calc(50% - 14px) !important; max-width: 380px !important; }
          .values-grid { flex-wrap: wrap !important; padding: 0 32px !important; gap: 24px !important; }
          .value-circle-item { width: 220px !important; height: 220px !important; padding: 0 28px !important; }
          .story-wrapper { padding: 0 32px !important; }
          .story-items-row { gap: 32px !important; }
          .faq-section { padding: 80px 32px 120px !important; }
          .nav-header { padding: 0 32px !important; }
        }
        @media (min-width: 1024px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                activePage: activePage,
                onNavigate: handleNavigate,
                scrolled: scrolled
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1075,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '96px',
                    width: '100%',
                    flexShrink: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1078,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1085,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServicesPage"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1086,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Portfolio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioShowcase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortfolioShowcase"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1087,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'About Us' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1088,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Careers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CareerJobListing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CareerJobListing"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1089,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1091,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 985,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/LandingPage.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
// %IMPORT_STATEMENT
let theme = 'light';
function App() {
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTheme(theme);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$LandingPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LandingPage"], {}, void 0, false, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this); // %EXPORT_STATEMENT%
}
const __TURBOPACK__default__export__ = App;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_0t20cyt._.js.map