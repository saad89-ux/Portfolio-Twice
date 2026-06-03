(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/generated/ServicesPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesPage",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    width: '487px',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                },
                children: item.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            width: '45%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(0, 194, 255, 1)',
                            borderRadius: '135px',
                            padding: '6px 14px',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ServiceCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ServiceCard;
const IndustryCard = ({ item, index, onHover })=>{
    _s1();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardHeight = industryHeights[index % industryHeights.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '50px',
                    left: '20px',
                    right: '20px',
                    zIndex: 2,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s1(IndustryCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c1 = IndustryCard;
const ServicesPage = ()=>{
    _s2();
    const [isMarqueePaused, setIsMarqueePaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            backgroundColor: 'rgba(3, 3, 3, 1)',
            overflowX: 'clip',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '57px 66px',
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1230px',
                    margin: '129px auto',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '58px',
                            justifyContent: 'center'
                        },
                        children: servicesData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
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
_s2(ServicesPage, "zipZTHXopaHSCcyKqEMSjdT0H78=");
_c2 = ServicesPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ServiceCard");
__turbopack_context__.k.register(_c1, "IndustryCard");
__turbopack_context__.k.register(_c2, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/PortfolioShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioShowcase",
    ()=>PortfolioShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const ProjectCard = ({ title, image, icon })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '486px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            padding: '14px',
                            backgroundColor: isHovered ? 'rgba(89, 176, 255, 1)' : 'rgba(0, 194, 255, 1)',
                            borderRadius: '135px',
                            transition: 'background-color 0.2s ease'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '487px',
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        },
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        },
                        children: [
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ProjectCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ProjectCard;
const PortfolioShowcase = (props)=>{
    _s1();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: '-1px',
                            top: '5px',
                            width: '798px',
                            height: '471px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '93px 66px',
                            position: 'relative',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '55px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px'
                                },
                                children: [
                                    [
                                        'Machine Learning',
                                        'Data Engineering'
                                    ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                children: caseStudies.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    marginBottom: '134px',
                    opacity: 0.7
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s1(PortfolioShowcase, "Ba2RZpY6vVL6cIAt/iyvRFE+KJY=");
_c1 = PortfolioShowcase;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "PortfolioShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(PrimaryButton, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = PrimaryButton;
const AboutSection = ({ className, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '1.05fr 0.95fr',
                    gap: '48px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    maxWidth: '640px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '16px',
                                    marginTop: '10px'
                                },
                                children: aboutStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '12px',
                                    marginTop: '18px'
                                },
                                children: featureChips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                    marginTop: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '14px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            position: 'relative',
                                                            minWidth: '90px'
                                                        },
                                                        children: reviewAvatars.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c1 = AboutSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "PrimaryButton");
__turbopack_context__.k.register(_c1, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/CareerJobListing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareerJobListing",
    ()=>CareerJobListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const ActionButton = ({ children, width = 'auto', height = 'auto', fontSize = '14px' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = ActionButton;
const FilterDropdown = ({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_c1 = FilterDropdown;
const JobCard = ({ job })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '20px',
                            backgroundColor: '#1F1F1F',
                            border: '1px solid #333333',
                            borderRadius: '12px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map((info, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 16px',
                            gap: '8px',
                            backgroundColor: '#1F1F1F',
                            borderRadius: '45px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c2 = JobCard;
const CareerJobListing = ()=>{
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            backgroundColor: '#030303',
            position: 'relative',
            overflowX: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 1,
                            padding: '93px 66px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Departments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Job Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Workplace Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1266px',
                    margin: '77px auto 0',
                    padding: '0 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(580px, 1fr))',
                            gap: '20px'
                        },
                        children: JOBS.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobCard, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1097px',
                    margin: '160px auto',
                    padding: '0 20px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '10px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
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
_s(CareerJobListing, "xMSft3/sbCidYXUzqinUsZIh+qY=");
_c3 = CareerJobListing;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ActionButton");
__turbopack_context__.k.register(_c1, "FilterDropdown");
__turbopack_context__.k.register(_c2, "JobCard");
__turbopack_context__.k.register(_c3, "CareerJobListing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/FAQSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
        question: 'What digital marketing services do you offer?',
        answer: 'We offer a full range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization, and Analytics.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        question: 'How long does it take to see results?',
        answer: 'Results vary by service. SEO typically takes 3-6 months, while PPC and Social Media campaigns can show measurable results within the first 2-4 weeks.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        question: 'What makes your digital marketing strategies different?',
        answer: 'We combine deep data analytics with creative strategy. Every campaign is custom-built for your business — no copy-paste templates, no guesswork.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"],
        question: 'Do you work with businesses of all sizes?',
        answer: 'Yes. We work with startups, SMEs, and enterprise brands. Our packages are flexible and scale with your business goals and budget.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        question: 'How do you measure the success of campaigns?',
        answer: 'We track KPIs including ROAS, CTR, conversion rate, cost per lead, and revenue attribution. You receive a detailed monthly report with full transparency.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        question: 'Can I customize the services I need?',
        answer: 'Absolutely. We offer modular service packages — you pick what you need. No forced bundles, no paying for what you don\'t use.'
    }
];
/* ─── Feature rows data ─── */ const featureRows = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: 'Quick Responses',
        desc: 'We reply within 24 hours',
        accent: COLORS.blue
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        title: 'Trusted by 500+ Brands',
        desc: 'Delivering real results, globally',
        accent: COLORS.purple
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: 'Expert Support',
        desc: 'Our team is here to help',
        accent: COLORS.blue
    }
];
/* ─── Scroll-in animation wrapper ─── */ const ScrollReveal = ({ children, direction = 'up', delay = 0 })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(el);
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.12
            });
            observer.observe(el);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], []);
    const transforms = {
        up: 'translateY(40px)',
        left: 'translateX(-50px)',
        right: 'translateX(50px)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ScrollReveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = ScrollReveal;
/* ─── Single Accordion Item ─── */ const AccordionItem = ({ icon: Icon, question, answer, isOpen, onClick })=>{
    _s1();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [maxH, setMaxH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccordionItem.useEffect": ()=>{
            if (contentRef.current) {
                setMaxH(contentRef.current.scrollHeight);
            }
        }
    }["AccordionItem.useEffect"], [
        answer
    ]);
    const [btnHovered, setBtnHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: isOpen ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.12), rgba(0, 194, 255, 0.08))' : 'rgba(15, 15, 15, 1)',
            border: isOpen ? '1px solid rgba(0, 194, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease, background 0.3s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 16,
                            color: COLORS.white,
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                style: {
                    maxHeight: isOpen ? `${maxH}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s1(AccordionItem, "d79Nz56nkArP8As7/nAuuYJEb3w=");
_c1 = AccordionItem;
const FAQSection = ()=>{
    _s2();
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleToggle = (idx)=>{
        setOpenIdx(openIdx === idx ? -1 : idx);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: '100%',
            backgroundColor: COLORS.bg,
            padding: '80px 24px',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                        direction: "up",
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '48px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '35% 1fr',
                            gap: '48px',
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                                direction: "left",
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '28px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "to know",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: COLORS.grayText,
                                                        fontSize: '15px',
                                                        lineHeight: '26px',
                                                        margin: 0,
                                                        fontFamily: COLORS.font
                                                    },
                                                    children: [
                                                        "We believe in transparency and clarity.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/generated/FAQSection.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Here are some common questions our",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '14px',
                                                padding: '24px',
                                                borderRadius: '20px',
                                                background: COLORS.cardBg,
                                                border: `1px solid ${COLORS.cardBorder}`
                                            },
                                            children: featureRows.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '14px',
                                                        padding: '14px 12px',
                                                        borderRadius: '16px',
                                                        background: 'rgba(255, 255, 255, 0.02)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '14px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            ].map((num, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollReveal, {
                                direction: "right",
                                delay: 0.15,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px'
                                    },
                                    children: faqItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s2(FAQSection, "CsXCwE34KdsiCH5n8B5LYl4zg3g=");
_c2 = FAQSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollReveal");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/IndustriesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesSection",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const blockRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentImg, setCurrentImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(industries[0].image);
    const [nextImg, setNextImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRevealing, setIsRevealing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "IndustriesSection.useEffect": (entries)=>{
                    entries.forEach({
                        "IndustriesSection.useEffect": (entry)=>{
                            if (!entry.isIntersecting) return;
                            const index = Number(entry.target.getAttribute('data-index'));
                            if (index === activeIndex) return;
                            const newImage = industries[index].image;
                            // Start the bottom-to-top wipe reveal
                            setNextImg(newImage);
                            setIsRevealing(true);
                            setActiveIndex(index);
                            // After animation completes, swap images and reset
                            setTimeout({
                                "IndustriesSection.useEffect": ()=>{
                                    setCurrentImg(newImage);
                                    setNextImg('');
                                    setIsRevealing(false);
                                }
                            }["IndustriesSection.useEffect"], 600);
                        }
                    }["IndustriesSection.useEffect"]);
                }
            }["IndustriesSection.useEffect"], {
                threshold: 0.55
            });
            blockRefs.current.forEach({
                "IndustriesSection.useEffect": (block)=>{
                    if (block) observer.observe(block);
                }
            }["IndustriesSection.useEffect"]);
            return ({
                "IndustriesSection.useEffect": ()=>observer.disconnect()
            })["IndustriesSection.useEffect"];
        }
    }["IndustriesSection.useEffect"], [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#030303',
            display: 'flex',
            alignItems: 'flex-start',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '50%'
                },
                children: industries.map((industry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 12
                                },
                                children: industry.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_s(IndustriesSection, "sNjNaEFFUV5MLktuQ20KW5Apx0o=");
_c = IndustriesSection;
var _c;
__turbopack_context__.k.register(_c, "IndustriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/generated/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/ServicesPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/PortfolioShowcase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CareerJobListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/CareerJobListing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FAQSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/FAQSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$IndustriesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/IndustriesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
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
const serviceCards = [
    {
        title: 'Predictive Analytics',
        desc: 'Forecast trends and make data-driven decisions with our advanced ML models.',
        img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/04c5428b-1a36-404f-a086-b8460703ddb3.png'
    },
    {
        title: 'AI Consulting',
        desc: 'Expert guidance on implementing AI solutions for your business needs.',
        img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/56ee8f00-c3fd-45cb-b607-0a16860ebb2c.png'
    },
    {
        title: 'Data Engineering',
        desc: 'Build robust data pipelines and infrastructure for ML operations.',
        img: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1e6f50bf-cba2-4b1e-a74d-544743d12fc5.png'
    }
];
const portfolioStats = [
    {
        value: '3000+',
        label: 'Projects Completed'
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
        value: '95%',
        label: 'Client Retention'
    }
];
const portfolioCategories = [
    'All Projects',
    'SEO',
    'Web Design',
    'Google Ads',
    'Branding',
    'Social Media'
];
const portfolioProjects = [
    {
        title: '410 Muscle Therapy',
        category: 'SEO',
        tag: 'SEO',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        desc: 'Comprehensive SEO strategy that increased organic traffic and leads.',
        metrics: [
            {
                label: 'Traffic Increase',
                value: '250%'
            },
            {
                label: 'Keywords Growth',
                value: '320%'
            },
            {
                label: 'More Leads',
                value: '35%'
            }
        ]
    },
    {
        title: 'Luxury Living Properties',
        category: 'Web Design',
        tag: 'Web Design',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        desc: 'Modern website design that delivers premium user experience and leads.',
        metrics: [
            {
                label: 'More Inquiries',
                value: '180%'
            },
            {
                label: 'User Engagement',
                value: '2.4x'
            },
            {
                label: 'Lower Bounce Rate',
                value: '45%'
            }
        ]
    },
    {
        title: 'Home Remodeling Services',
        category: 'Google Ads',
        tag: 'Google Ads',
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
        desc: 'Targeted Google Ads campaigns that reduced cost and increased ROI.',
        metrics: [
            {
                label: 'More Conversions',
                value: '210%'
            },
            {
                label: 'Lower Cost / Conv.',
                value: '32%'
            },
            {
                label: 'Return on Ad Spend',
                value: '4.6x'
            }
        ]
    }
];
const caseStudyCategories = [
    'All Case Studies',
    'SEO',
    'Web Design',
    'Google Ads',
    'Branding',
    'Social Media'
];
const caseStudyStats = [
    {
        value: '3000+',
        label: 'Projects Completed'
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
        value: '95%',
        label: 'Client Retention'
    }
];
const caseStudyFeatured = {
    title: 'Luxury Living Properties',
    category: 'Real Estate',
    subtitle: 'Featured Case Study',
    description: 'We helped Luxury Living increase their online visibility and generate high-quality leads through a data-driven SEO and digital marketing strategy.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    tags: [
        'SEO Strategy',
        'Web Design',
        'Content Marketing',
        'Local SEO'
    ],
    results: [
        {
            label: '250% Increase in Organic Traffic'
        },
        {
            label: '320% Increase in Leads'
        },
        {
            label: '45% Lower Bounce Rate'
        },
        {
            label: '3.8x ROI Growth'
        }
    ]
};
const caseStudyCards = [
    {
        title: 'EcomBoost',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
        stats: [
            '210% Revenue Increase',
            '3.2x Growth',
            '65% Decrease in CPA'
        ]
    },
    {
        title: 'FitLife Nation',
        category: 'Health & Fitness',
        image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80',
        stats: [
            '180% Engagement Increase',
            '2.4x Follower Growth',
            '90% Video Views Increase'
        ]
    },
    {
        title: 'Constructo Builders',
        category: 'Construction',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        stats: [
            '230% Lead Growth',
            '70% Cost per Lead Decrease',
            '4.6x ROI Growth'
        ]
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
const blogStats = [
    {
        value: '250+',
        label: 'In-Depth Articles',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg'
    },
    {
        value: '50K+',
        label: 'Monthly Readers',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg'
    },
    {
        value: '10+',
        label: 'Expert Contributors',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg'
    },
    {
        value: '100K+',
        label: 'Insights Delivered',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg'
    }
];
const blogPosts = [
    {
        tag: 'Featured',
        category: 'Strategy',
        title: 'The Future of Digital Marketing in 2025',
        description: 'Explore emerging trends, technologies, and strategies shaping the future of digital marketing.',
        author: 'By John Smith',
        date: 'May 20, 2025',
        read: '8 min read',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    },
    {
        tag: 'SEO',
        category: 'SEO',
        title: '10 SEO Strategies That Actually Work in 2025',
        description: 'How modern search optimization tactics drive organic traffic and long-term growth.',
        author: 'By Emily Carter',
        date: 'May 18, 2025',
        read: '6 min read',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'
    },
    {
        tag: 'PPC',
        category: 'PPC',
        title: 'How to Maximize ROI with Google Ads',
        description: 'Learn the proven techniques to get more out of your ad spend and improve campaign performance.',
        author: 'By Michael Brown',
        date: 'May 15, 2025',
        read: '7 min read',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80'
    },
    {
        tag: 'Social Media',
        category: 'Social Media',
        title: 'Social Media Trends You Can’t Ignore',
        description: 'Stay updated with the latest social media trends and strategies for brand growth.',
        author: 'By Sarah Wilson',
        date: 'May 12, 2025',
        read: '5 min read',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'
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
const clientAvatars = [
    '3a9e176a-3863-474d-a596-d593c4d569ea.png',
    '998d15ff-acf1-4ed8-b332-f13d639b3e03.png',
    '363356fa-f16d-41aa-99ea-3c436d6bc5df.png'
];
const trustStats = [
    {
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/6fb7d62e-df39-494a-aa26-241744ac5ad2.svg',
        value: '6+',
        label: 'Years of Experience'
    },
    {
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7a673d8c-5833-4e62-9baf-92c5fa1369c4.svg',
        value: '3,000+',
        label: 'Happy Clients'
    },
    {
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9f786cae-4cd7-4341-a0d5-261f108aa54a.svg',
        value: '$5M+',
        label: 'Revenue Generated'
    },
    {
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4ad3299-5a85-4079-b32d-c6e0052e934e.svg',
        value: '50+',
        label: 'Industries Served'
    },
    {
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d9f0b80b-1630-4621-8c7c-b38b04cf516f.svg',
        value: '95%',
        label: 'Client Retention'
    }
];
const trustAvatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'
];
const navItems = [
    'Home',
    'Services',
    'Portfolio',
    'About Us',
    'Careers'
];
const FAQItem = ({ question, answer, icon, isOpen, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderRadius: '28px',
            overflow: 'hidden',
            border: isOpen ? '1px solid rgba(0, 194, 255, 0.68)' : '1px solid rgba(255, 255, 255, 0.08)',
            background: isOpen ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.16), rgba(0, 194, 255, 0.08))' : 'rgba(8, 12, 32, 0.88)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 367,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 379,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ffffff',
                            fontSize: '26px',
                            lineHeight: 1,
                            fontFamily: '"Barlow", sans-serif'
                        },
                        children: isOpen ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 401,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 344,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FAQItem;
const Navbar = ({ activePage, onNavigate, scrolled })=>{
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleNavClick = (page)=>{
        onNavigate(page);
        setMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        },
                        onClick: ()=>handleNavClick('Home'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                lineNumber: 455,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Analytics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '22px'
                        },
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 480,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 496,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 529,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 537,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 545,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 570,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '8px 24px 0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 586,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 557,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 431,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c1 = Navbar;
const Footer = ({ onNavigate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            width: '100%',
            maxWidth: '1440px',
            padding: '80px 86px',
            marginTop: 'auto',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'minmax(240px, 320px) repeat(4, minmax(160px, 1fr))',
                    gap: '40px',
                    paddingBottom: '42px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    cursor: 'pointer'
                                },
                                onClick: ()=>onNavigate('Home'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, rgba(10,132,255,1), rgba(145,104,255,1))',
                                            display: 'grid',
                                            placeItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'white',
                                                fontSize: '22px',
                                                fontWeight: 800,
                                                lineHeight: 1
                                            },
                                            children: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'white',
                                                fontSize: '20px',
                                                fontFamily: '"Barlow", sans-serif',
                                                fontWeight: 800,
                                                lineHeight: 1.05
                                            },
                                            children: [
                                                "Ahsan",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Designs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                lineNumber: 670,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px'
                                },
                                children: [
                                    'linkedin',
                                    'instagram',
                                    'dribbble',
                                    'globe'
                                ].map((icon, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.06)',
                                            display: 'grid',
                                            placeItems: 'center',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.88)',
                                                fontSize: '14px'
                                            },
                                            children: icon[0].toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, idx, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 684,
                                        columnNumber: 80
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 706,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'SEO',
                                'Performance Marketing',
                                'Social Media Marketing',
                                'Web Design',
                                'Content Marketing',
                                'Conversion Optimization'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 716,
                                    columnNumber: 145
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 729,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'Ecommerce',
                                'Healthcare',
                                'Real Estate',
                                'Finance',
                                'Education',
                                'Technology'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 739,
                                    columnNumber: 105
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 752,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'About Us',
                                'Our Work',
                                'Case Studies',
                                'Careers',
                                'Blog',
                                'Contact'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(235, 239, 255, 0.78)',
                                        fontSize: '16px',
                                        fontFamily: '"Barlow", sans-serif',
                                        cursor: 'default'
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 762,
                                    columnNumber: 95
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 747,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 775,
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
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 795,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.78)',
                                                fontSize: '16px',
                                                fontFamily: '"Barlow", sans-serif'
                                            },
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 808,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 790,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 770,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                    paddingTop: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(152, 152, 154, 1)',
                            fontSize: '14px',
                            fontFamily: '"Barlow", sans-serif',
                            margin: 0
                        },
                        children: "© 2026 Ahsan Designs. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '24px',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '14px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '14px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 846,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 817,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 616,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Footer;
const TrustSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: '100%',
            maxWidth: '1440px',
            margin: '80px auto 0',
            padding: '80px clamp(24px, 6vw, 90px)',
            borderRadius: '48px',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            border: '1px solid rgba(0, 194, 255, 0.08)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 16% 18%, rgba(0, 194, 255, 0.18), transparent 28%), radial-gradient(circle at 88% 16%, rgba(0, 194, 255, 0.14), transparent 24%), radial-gradient(circle at 62% 40%, rgba(0, 194, 255, 0.10), transparent 30%), radial-gradient(circle at 50% 85%, rgba(0, 194, 255, 0.20), transparent 38%), radial-gradient(circle at 22% 78%, rgba(0, 194, 255, 0.10), transparent 32%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '42px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            minHeight: '600px',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
                                alt: "Marketing strategist portrait",
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.78)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '28px',
                                    left: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    zIndex: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '14px 18px',
                                            borderRadius: '28px',
                                            backgroundColor: 'rgba(0, 194, 255, 0.16)',
                                            border: '1px solid rgba(0, 194, 255, 0.24)',
                                            color: 'white',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            width: 'fit-content'
                                        },
                                        children: "Client-First Always"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 909,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '14px 20px',
                                            borderRadius: '18px',
                                            border: '1px solid rgba(255, 255, 255, 0.14)',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            color: 'white',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                children: "▶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 935,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Watch My Story"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 922,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 900,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '28px',
                                    left: '28px',
                                    right: '28px',
                                    zIndex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.48)',
                                    borderRadius: '28px',
                                    padding: '26px',
                                    backdropFilter: 'blur(10px)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(0, 194, 255, 1)',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase'
                                        },
                                        children: "Results · Trust · Growth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 965,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.92)',
                                            fontSize: '18px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            margin: 0
                                        },
                                        children: "I don’t believe in just completing projects, I believe in building relationships that last."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 975,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 951,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 884,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: 'white',
                                    fontSize: 'clamp(40px, 4vw, 58px)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '1.02',
                                    margin: 0
                                },
                                children: "Behind Every Strategy, There’s a Purpose."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 991,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '4px',
                                            minHeight: '60px',
                                            borderRadius: '999px',
                                            backgroundColor: 'rgba(0, 194, 255, 1)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(225, 230, 245, 0.92)',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '28px',
                                            margin: 0
                                        },
                                        children: "I started this journey with a simple mission — to help businesses grow with honesty, strategy, and results that actually matter. Over the years, I’ve learned that real growth doesn’t come from shortcuts, it comes from trust, consistency, and a deep understanding of each business I work with."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1012,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1001,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(210, 215, 235, 0.85)',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '28px',
                                    margin: 0
                                },
                                children: "Every campaign I build is customized. Every decision is data-backed. And every success story you see here represents a relationship built on transparency and hard work."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1023,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '14px 22px',
                                            borderRadius: '16px',
                                            backgroundColor: 'rgba(0, 194, 255, 1)',
                                            border: 'none',
                                            color: 'white',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 700,
                                            cursor: 'pointer'
                                        },
                                        children: "Watch Video"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '14px 22px',
                                            borderRadius: '16px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.14)',
                                            color: 'rgba(255, 255, 255, 0.94)',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        },
                                        children: "Check Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1033,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 986,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 877,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '56px',
                    padding: '28px',
                    borderRadius: '36px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.09)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                        gap: '18px'
                    },
                    children: trustStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '10px',
                                padding: '22px 18px',
                                borderRadius: '28px',
                                backgroundColor: '#080c20',
                                border: '1px solid rgba(255, 255, 255, 0.06)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: stat.icon,
                                    alt: "",
                                    style: {
                                        width: '34px',
                                        height: '34px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1094,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'white',
                                        fontSize: '24px',
                                        fontFamily: '"Barlow", sans-serif',
                                        fontWeight: 700
                                    },
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1098,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(225, 230, 245, 0.8)',
                                        fontSize: '13px',
                                        fontFamily: '"Barlow", sans-serif',
                                        fontWeight: 500
                                    },
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 1084,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 1079,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1072,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '32px',
                    padding: '28px 30px',
                    borderRadius: '36px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '18px',
                            minWidth: '320px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(0, 194, 255, 1)',
                                    fontSize: '28px',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 800,
                                    lineHeight: 1
                                },
                                children: "“"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '28px',
                                            margin: 0
                                        },
                                        children: "Don't just take my word for it — hear it from the people I’ve worked with."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(173, 183, 208, 0.9)',
                                            fontSize: '13px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 500
                                        },
                                        children: "Real Clients. Real Feedback."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '-12px'
                        },
                        children: [
                            trustAvatars.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: src,
                                    alt: "Client",
                                    style: {
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '999px',
                                        objectFit: 'cover',
                                        border: '2px solid #070b1e',
                                        position: 'relative',
                                        left: `${index * -14}px`
                                    }
                                }, src, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: '16px',
                                    color: 'rgba(255, 255, 255, 0.88)',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 600,
                                    fontSize: '14px'
                                },
                                children: "3K+ Reviews"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 859,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = TrustSection;
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
    _s1();
    const [activeIdx, setActiveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const itemRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef([]);
    // Video crossfade state
    const [activeVid, setActiveVid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('A');
    const [srcA, setSrcA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(industriesData[0].videoUrl);
    const [srcB, setSrcB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errA, setErrA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errB, setErrB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoARef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const videoBRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesServedSection.useEffect": ()=>{
            const handleResize = {
                "IndustriesServedSection.useEffect.handleResize": ()=>setIsMobile(window.innerWidth < 768)
            }["IndustriesServedSection.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "IndustriesServedSection.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["IndustriesServedSection.useEffect"];
        }
    }["IndustriesServedSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesServedSection.useEffect": ()=>{
            if (isMobile) return;
            const observer = new IntersectionObserver({
                "IndustriesServedSection.useEffect": (entries)=>{
                    entries.forEach({
                        "IndustriesServedSection.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number(entry.target.getAttribute('data-index'));
                                setActiveIdx(index);
                            }
                        }
                    }["IndustriesServedSection.useEffect"]);
                }
            }["IndustriesServedSection.useEffect"], {
                threshold: 0.4
            });
            itemRefs.current.forEach({
                "IndustriesServedSection.useEffect": (ref)=>{
                    if (ref) observer.observe(ref);
                }
            }["IndustriesServedSection.useEffect"]);
            return ({
                "IndustriesServedSection.useEffect": ()=>observer.disconnect()
            })["IndustriesServedSection.useEffect"];
        }
    }["IndustriesServedSection.useEffect"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesServedSection.useEffect": ()=>{
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
        }
    }["IndustriesServedSection.useEffect"], [
        activeIdx
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesServedSection.useEffect": ()=>{
            if (videoARef.current && srcA) {
                videoARef.current.load();
                const p = videoARef.current.play();
                if (p !== undefined) p.catch({
                    "IndustriesServedSection.useEffect": ()=>setErrA(true)
                }["IndustriesServedSection.useEffect"]);
            }
        }
    }["IndustriesServedSection.useEffect"], [
        srcA
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndustriesServedSection.useEffect": ()=>{
            if (videoBRef.current && srcB) {
                videoBRef.current.load();
                const p = videoBRef.current.play();
                if (p !== undefined) p.catch({
                    "IndustriesServedSection.useEffect": ()=>setErrB(true)
                }["IndustriesServedSection.useEffect"]);
            }
        }
    }["IndustriesServedSection.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$IndustriesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndustriesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 1347,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(IndustriesServedSection, "MtdhMjzWt9uwhkFDOM9MzIZ+P8s=");
_c4 = IndustriesServedSection;
const testimonialsData = [
    {
        avatar: 'https://i.pravatar.cc/150?img=47',
        platform: 'Clutch',
        rating: '4.9/5.0',
        quote: 'Catalyst Analytics transformed our entire digital presence. Our ROAS went from 1.2x to 4.1x in just 8 weeks. Incredibly data-driven team.',
        name: 'Sarah Ahmed',
        title: 'Co-Founder & CEO, StyleVault',
        platformLabel: 'CLUTCH'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=12',
        platform: 'Google',
        rating: '5.0/5.0',
        quote: 'Best digital marketing agency in Pakistan. Took our restaurant from zero online presence to fully booked weekends in 30 days. Absolute professionals.',
        name: 'Usman Tariq',
        title: 'Owner, Spice Garden Restaurants',
        platformLabel: 'GOOGLE'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=53',
        platform: 'Clutch',
        rating: '4.8/5.0',
        quote: 'Their lead generation for our property launches was exceptional. Two projects sold out in 45 days. I\'ve worked with 3 agencies before — none came close.',
        name: 'Bilal Chaudhry',
        title: 'Director, Skyline Developments',
        platformLabel: 'CLUTCH'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=25',
        platform: 'Google',
        rating: '5.0/5.0',
        quote: '280 new student enrollments in the first month. Their YouTube ad strategy and email sequences are on another level. ROI was 6x what we spent.',
        name: 'Dr. Fatima Malik',
        title: 'Founder, EduPrime Academy',
        platformLabel: 'GOOGLE'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=33',
        platform: 'Clutch',
        rating: '4.9/5.0',
        quote: 'We went from 0 to 90+ online appointments per month in under 6 weeks. Their local SEO and Google Ads setup was flawless. Clinic is always at full capacity now.',
        name: 'Dr. Hassan Raza',
        title: 'Medical Director, CareFirst Clinic',
        platformLabel: 'CLUTCH'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=16',
        platform: 'LinkedIn',
        rating: '5.0/5.0',
        quote: 'Our MRR grew 2.5x in one quarter. Their B2B LinkedIn strategy and content funnel brought us qualified leads we actually closed. Game changer.',
        name: 'Zara Qureshi',
        title: 'Head of Growth, TechFlow SaaS',
        platformLabel: 'LINKEDIN'
    }
];
const bubblePositions = [
    {
        width: 90,
        height: 90,
        top: 0,
        left: 145
    },
    {
        width: 130,
        height: 130,
        top: 30,
        left: 20
    },
    {
        width: 160,
        height: 160,
        top: 90,
        left: 110
    },
    {
        width: 130,
        height: 130,
        top: 60,
        left: 240
    },
    {
        width: 150,
        height: 150,
        top: 210,
        left: 10
    },
    {
        width: 130,
        height: 130,
        top: 220,
        left: 220
    }
];
const TestimonialsSection = ()=>{
    _s2();
    const activeIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const sectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const switchTo = (newIndex)=>{
        if (isTransitioning || activeIndexRef.current === newIndex) return;
        setIsTransitioning(true);
        setTimeout(()=>{
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
            setIsTransitioning(false);
        }, 350);
    };
    const startAutoRotate = ()=>{
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            const next = (activeIndexRef.current + 1) % testimonialsData.length;
            setIsTransitioning(true);
            setTimeout(()=>{
                activeIndexRef.current = next;
                setActiveIndex(next);
                setIsTransitioning(false);
            }, 350);
        }, 3500);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            startAutoRotate();
            return ({
                "TestimonialsSection.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            const handleResize = {
                "TestimonialsSection.useEffect.handleResize": ()=>setIsMobile(window.innerWidth <= 768)
            }["TestimonialsSection.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "TestimonialsSection.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TestimonialsSection.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                }
            }["TestimonialsSection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "TestimonialsSection.useEffect": ()=>observer.disconnect()
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], []);
    const handleBubbleClick = (index)=>{
        if (index === activeIndex || isTransitioning) return;
        switchTo(index);
        startAutoRotate();
    };
    const activeTestimonial = testimonialsData[activeIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        style: {
            background: 'rgba(3, 3, 3, 1)',
            padding: '80px 0',
            width: '100%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: '64px',
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '0 40px',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#00c2ff',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 700,
                            display: 'block',
                            marginBottom: '16px'
                        },
                        children: "TESTIMONIALS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1496,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#ffffff',
                            fontSize: '42px',
                            fontWeight: 700,
                            margin: '0 0 16px',
                            fontFamily: '"Barlow", sans-serif'
                        },
                        children: "What Our Clients Say"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1506,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(235, 239, 255, 0.72)',
                            fontSize: '16px',
                            fontFamily: '"Barlow", sans-serif',
                            margin: 0
                        },
                        children: [
                            "Real results. Real feedback.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1518,
                                columnNumber: 40
                            }, ("TURBOPACK compile-time value", void 0)),
                            "From brands that trusted us to grow."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1513,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1495,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1200px',
                    width: '100%',
                    margin: '0 auto',
                    padding: '0 40px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: isMobile ? '40px' : '80px',
                    boxSizing: 'border-box'
                },
                children: [
                    !isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '45%',
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                width: '380px',
                                height: '380px'
                            },
                            children: testimonialsData.map((t, idx)=>{
                                const isActive = idx === activeIndex;
                                const pos = bubblePositions[idx];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleBubbleClick(idx),
                                    style: {
                                        position: 'absolute',
                                        width: `${pos.width}px`,
                                        height: `${pos.height}px`,
                                        top: `${pos.top}px`,
                                        left: `${pos.left}px`,
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        border: isActive ? '3px solid #00c2ff' : '3px solid rgba(255,255,255,0.1)',
                                        filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.55) saturate(0.8)',
                                        transform: isActive ? 'scale(1.18)' : 'scale(1)',
                                        boxShadow: isActive ? '0 0 0 5px rgba(0, 194, 255, 0.25), 0 0 30px rgba(0, 194, 255, 0.35), 0 8px 32px rgba(0,0,0,0.5)' : 'none',
                                        zIndex: isActive ? 10 : 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: t.avatar,
                                        alt: t.name,
                                        loading: "lazy",
                                        style: {
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top center',
                                            pointerEvents: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1557,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, idx, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1541,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 1536,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1535,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '100%'
                        },
                        children: testimonialsData.map((t, idx)=>{
                            const isActive = idx === activeIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleBubbleClick(idx),
                                style: {
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: isActive ? '2px solid #00c2ff' : '2px solid rgba(255,255,255,0.1)',
                                    filter: isActive ? 'brightness(1) saturate(1)' : 'brightness(0.55) saturate(0.8)',
                                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: t.avatar,
                                    alt: t.name,
                                    loading: "lazy",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1585,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, idx, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1574,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1570,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: isMobile ? '100%' : '55%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                opacity: isTransitioning ? 0 : 1,
                                transition: 'opacity 0.35s ease'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '56px',
                                        fontWeight: 900,
                                        color: '#ffffff',
                                        letterSpacing: '-2px',
                                        lineHeight: 1,
                                        margin: 0,
                                        fontFamily: '"Barlow", sans-serif'
                                    },
                                    children: activeTestimonial.platform
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1598,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginTop: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '26px',
                                                fontWeight: 700,
                                                color: '#ffffff',
                                                fontFamily: '"Barlow", sans-serif'
                                            },
                                            children: activeTestimonial.rating
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '4px'
                                            },
                                            children: [
                                                ...Array(5)
                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 24,
                                                    fill: "#F59E0B",
                                                    stroke: "#F59E0B"
                                                }, i, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 1614,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1612,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1608,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        marginTop: '36px',
                                        paddingLeft: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: 'absolute',
                                                left: 0,
                                                top: '-10px',
                                                fontSize: '72px',
                                                lineHeight: 1,
                                                color: '#00c2ff',
                                                fontFamily: 'Georgia, serif',
                                                opacity: 0.9
                                            },
                                            children: '"'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1620,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '17px',
                                                lineHeight: 1.75,
                                                color: 'rgba(255,255,255,0.78)',
                                                fontStyle: 'italic',
                                                margin: 0,
                                                fontFamily: '"Barlow", sans-serif'
                                            },
                                            children: activeTestimonial.quote
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1630,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1619,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        marginTop: '36px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: activeTestimonial.avatar,
                                            alt: activeTestimonial.name,
                                            style: {
                                                width: '56px',
                                                height: '56px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '2px solid #00c2ff',
                                                boxShadow: '0 0 12px rgba(0, 194, 255, 0.4)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: 700,
                                                        color: '#00c2ff',
                                                        fontFamily: '"Barlow", sans-serif'
                                                    },
                                                    children: [
                                                        activeTestimonial.name,
                                                        ", ",
                                                        activeTestimonial.title
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: 'rgba(255,255,255,0.45)',
                                                        letterSpacing: '2px',
                                                        textTransform: 'uppercase',
                                                        marginTop: '4px',
                                                        fontFamily: '"Barlow", sans-serif'
                                                    },
                                                    children: activeTestimonial.platformLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 1656,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1649,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1640,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginTop: '32px'
                                    },
                                    children: testimonialsData.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleBubbleClick(idx),
                                            style: {
                                                width: idx === activeIndex ? '28px' : '8px',
                                                height: '8px',
                                                borderRadius: idx === activeIndex ? '4px' : '50%',
                                                background: idx === activeIndex ? '#00c2ff' : 'rgba(255,255,255,0.18)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }
                                        }, idx, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 1669,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1667,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 1594,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1593,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1521,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 1484,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(TestimonialsSection, "JwgqTeipZLpTbq93nyjXlhfI0oE=");
_c5 = TestimonialsSection;
const HomeContent = ({ onNavigate })=>{
    _s3();
    const [activePortfolioCategory, setActivePortfolioCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Projects');
    const [activeCaseStudyCategory, setActiveCaseStudyCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Case Studies');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "hero-section",
                style: {
                    width: '100%',
                    height: '732px',
                    position: 'relative',
                    maxWidth: '1440px',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "hero-glow",
                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2225324b-69f7-4b09-aa61-332f64bf95e6.svg",
                        alt: "",
                        "aria-hidden": "true",
                        style: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '1039px',
                            height: '100%',
                            objectFit: 'cover',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1709,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content",
                        style: {
                            position: 'absolute',
                            left: '79px',
                            top: '59px',
                            width: '712px',
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-h1",
                                style: {
                                    color: 'white',
                                    fontSize: '72px',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '87.1px',
                                    margin: '0 0 33px 0',
                                    letterSpacing: '-0.02em'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'inline',
                                            marginLeft: '-12px'
                                        },
                                        children: "Transforming Data into"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1737,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-decisions-badge",
                                        style: {
                                            display: 'inline-block',
                                            backgroundColor: 'rgba(0, 194, 255, 1)',
                                            borderRadius: '16px',
                                            padding: '0 28px',
                                            marginTop: '8px',
                                            marginLeft: '25px',
                                            lineHeight: '77px',
                                            height: '77px',
                                            boxSizing: 'border-box'
                                        },
                                        children: "Decisions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1741,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1727,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-p",
                                style: {
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    fontSize: '20px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '32px',
                                    width: '547px',
                                    margin: '0 0 33px 0'
                                },
                                children: "Leverage the power of machine learning and AI to unlock insights and drive business growth"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1755,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-btn hero-cta-btn",
                                style: {
                                    width: '165px',
                                    height: '42px',
                                    padding: '0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0, 194, 255, 1)',
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer',
                                    marginBottom: '33px',
                                    transition: 'all 0.2s ease'
                                },
                                children: "Book a Meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1766,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-social-proof",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '57px',
                                            height: '24px',
                                            flexShrink: 0
                                        },
                                        children: clientAvatars.map((avatar, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${avatar}`,
                                                style: {
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '100px',
                                                    border: '2px solid rgba(3, 3, 3, 1)',
                                                    position: 'absolute',
                                                    left: `${i * 17}px`,
                                                    objectFit: 'cover'
                                                },
                                                alt: "Client"
                                            }, avatar, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1792,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontSize: '14px',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '20px'
                                        },
                                        children: [
                                            "Over ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    fontWeight: 700
                                                },
                                                children: "100+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1815,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " clients have worked with us"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1808,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1787,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1720,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-visual",
                        style: {
                            position: 'absolute',
                            left: '726px',
                            top: '0px',
                            width: '572px',
                            height: '655px',
                            pointerEvents: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-robot-glow hero-robot-glow--outer",
                                style: {
                                    position: 'absolute',
                                    width: '520px',
                                    height: '520px',
                                    background: 'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, rgba(120, 185, 255, 1) 55%, rgba(154, 192, 236, 1) 100%)',
                                    filter: 'blur(350px)',
                                    WebkitFilter: 'blur(350px)',
                                    left: '26px',
                                    top: '72px',
                                    opacity: 0.95,
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1832,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-robot-glow hero-robot-glow--core",
                                style: {
                                    position: 'absolute',
                                    width: '320px',
                                    height: '320px',
                                    background: 'radial-gradient(circle, rgba(0, 194, 255, 0.75) 0%, rgba(0, 194, 255, 0.35) 45%, rgba(0, 194, 255, 0) 72%)',
                                    filter: 'blur(90px)',
                                    WebkitFilter: 'blur(90px)',
                                    left: '126px',
                                    top: '152px',
                                    opacity: 1,
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1845,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-robot-jump",
                                style: {
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ab9bf892-beb3-4c45-905c-3d51c34d1ead.svg",
                                        alt: "",
                                        "aria-hidden": "true",
                                        style: {
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1864,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "hero-robot",
                                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/de2a68bf-ec21-4394-ae40-09cb18b14ccf.png",
                                        alt: "AI Robot",
                                        style: {
                                            position: 'absolute',
                                            width: '459px',
                                            height: 'auto',
                                            left: '35px',
                                            top: '100px',
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1870,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1858,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1823,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1701,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1882,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustSection, {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1884,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '150px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/38c17c6c-94f7-4c85-857e-94a9dd01a28a.svg",
                        alt: "",
                        "aria-hidden": "true",
                        style: {
                            position: 'absolute',
                            left: '-28px',
                            top: '50px',
                            width: '267px',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1896,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "services-title",
                        style: {
                            width: '579px',
                            color: 'white',
                            fontSize: '36px',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600,
                            lineHeight: '56px',
                            textAlign: 'center',
                            marginBottom: '70px'
                        },
                        children: "Our Ultimate Set of Services for Your Ideas Implementation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1904,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-grid",
                        style: {
                            display: 'flex',
                            gap: '48px',
                            padding: '0 106px',
                            boxSizing: 'border-box',
                            width: '100%'
                        },
                        children: serviceCards.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-card service-card-item ca-interactive-card",
                                style: {
                                    flex: '1',
                                    minWidth: '260px',
                                    backgroundColor: 'rgba(20, 20, 20, 1)',
                                    borderRadius: '36px',
                                    padding: '42px 32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '32px',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: service.img,
                                        alt: service.title,
                                        style: {
                                            width: '100%',
                                            maxWidth: '220px',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1937,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: 'white',
                                            fontSize: '24px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            margin: 0,
                                            textAlign: 'center'
                                        },
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1943,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'white',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            textAlign: 'center',
                                            margin: 0,
                                            lineHeight: '24px'
                                        },
                                        children: service.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1953,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, service.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1924,
                                columnNumber: 40
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1917,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1887,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portfolio-showcase",
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '150px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '960px',
                            width: '100%',
                            textAlign: 'center',
                            marginBottom: '38px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: 'white',
                                    fontSize: 'clamp(44px, 4vw, 72px)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 800,
                                    lineHeight: '1.02',
                                    margin: '22px 0 18px'
                                },
                                children: [
                                    "Real Work. Real ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#00c2ff'
                                        },
                                        children: "Results."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1991,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1983,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(235, 239, 255, 0.8)',
                                    fontSize: '17px',
                                    fontFamily: '"Barlow", sans-serif',
                                    lineHeight: '28px',
                                    margin: 0
                                },
                                children: "Explore how I help businesses grow with data-driven strategies, stunning design, and performance-focused marketing."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1993,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1977,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                            gap: '18px',
                            marginBottom: '44px'
                        },
                        children: portfolioStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '28px',
                                    borderRadius: '30px',
                                    backgroundColor: 'rgba(8, 12, 34, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    minHeight: '168px',
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(0, 194, 255, 1)',
                                            fontSize: '32px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 800
                                        },
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2022,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(235, 239, 255, 0.82)',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 500,
                                            lineHeight: '1.4'
                                        },
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2030,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2011,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2004,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '14px',
                            justifyContent: 'center',
                            marginBottom: '48px'
                        },
                        children: portfolioCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActivePortfolioCategory(category),
                                style: {
                                    minWidth: '118px',
                                    padding: '14px 20px',
                                    borderRadius: '999px',
                                    backgroundColor: activePortfolioCategory === category ? '#00c2ff' : 'rgba(255, 255, 255, 0.05)',
                                    color: activePortfolioCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
                                    border: activePortfolioCategory === category ? '1px solid #00c2ff' : '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease'
                                },
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2049,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2042,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                            gap: '30px',
                            justifyItems: 'center',
                            marginBottom: '50px'
                        },
                        children: portfolioProjects.filter((project)=>activePortfolioCategory === 'All Projects' || project.category === activePortfolioCategory).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "ca-interactive-card",
                                style: {
                                    width: '100%',
                                    maxWidth: '420px',
                                    backgroundColor: 'rgba(16, 18, 43, 0.95)',
                                    borderRadius: '36px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            height: '220px',
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.image,
                                                alt: project.title,
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    filter: 'brightness(0.78)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '18px',
                                                    left: '18px',
                                                    padding: '10px 16px',
                                                    borderRadius: '999px',
                                                    backgroundColor: 'rgba(0, 194, 255, 0.18)',
                                                    color: 'rgba(0, 194, 255, 1)',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: '12px',
                                                    letterSpacing: '0.04em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: project.tag
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2097,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2085,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0 26px 24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    color: 'white',
                                                    fontSize: '24px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    margin: '0 0 12px'
                                                },
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2117,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(235, 239, 255, 0.84)',
                                                    fontSize: '15px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    lineHeight: '26px',
                                                    margin: '0 0 22px'
                                                },
                                                children: project.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '12px',
                                                    marginBottom: '24px'
                                                },
                                                children: project.metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'rgba(235, 239, 255, 0.76)',
                                                                    fontSize: '14px',
                                                                    fontFamily: '"Barlow", sans-serif'
                                                                },
                                                                children: metric.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2146,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: 'white',
                                                                    fontSize: '14px',
                                                                    fontFamily: '"Barlow", sans-serif'
                                                                },
                                                                children: metric.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2153,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, metric.label, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 52
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2135,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    padding: '14px 20px',
                                                    width: '100%',
                                                    backgroundColor: '#00c2ff',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '16px',
                                                    cursor: 'pointer',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: '14px'
                                                },
                                                children: "View Case Study"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2162,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, project.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2074,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2066,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '1230px',
                            padding: '30px 36px',
                            borderRadius: '40px',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: 'white',
                                            fontSize: '28px',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 700,
                                            margin: 0
                                        },
                                        children: "Want results like these?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2198,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(235, 239, 255, 0.8)',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            lineHeight: '26px',
                                            margin: 0
                                        },
                                        children: "Let’s build a strategy that grows your business."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2207,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    minWidth: '220px',
                                    padding: '16px 24px',
                                    borderRadius: '18px',
                                    backgroundColor: '#00c2ff',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    fontSize: '14px'
                                },
                                children: "Start Your Project"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1968,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "case-studies",
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '150px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '1040px',
                            textAlign: 'center',
                            marginBottom: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: 'white',
                                    fontSize: 'clamp(44px, 4vw, 68px)',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 800,
                                    lineHeight: '1.04',
                                    margin: '24px 0 20px'
                                },
                                children: "Real Challenges. Strategic Thinking. Outstanding Results."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2250,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(235, 239, 255, 0.8)',
                                    fontSize: '17px',
                                    fontFamily: '"Barlow", sans-serif',
                                    lineHeight: '28px',
                                    margin: 0,
                                    maxWidth: '820px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                },
                                children: "Explore how we help businesses across industries overcome challenges, drive growth, and achieve measurable success with strategy-led digital campaigns."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2260,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2244,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '20px',
                            marginBottom: '44px'
                        },
                        children: caseStudyStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderRadius: '28px',
                                    backgroundColor: 'rgba(20, 20, 40, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(0, 194, 255, 1)',
                                            fontSize: '32px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 800
                                        },
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2290,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(235, 239, 255, 0.8)',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif',
                                            lineHeight: '1.6'
                                        },
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2298,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2281,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '14px',
                            marginBottom: '48px'
                        },
                        children: caseStudyCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCaseStudyCategory(category),
                                style: {
                                    minWidth: '130px',
                                    padding: '14px 22px',
                                    borderRadius: '999px',
                                    backgroundColor: activeCaseStudyCategory === category ? '#00c2ff' : 'rgba(255, 255, 255, 0.05)',
                                    color: activeCaseStudyCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
                                    border: activeCaseStudyCategory === category ? '1px solid #00c2ff' : '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease'
                                },
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2317,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '2.2fr 1fr',
                            gap: '28px',
                            marginBottom: '42px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                style: {
                                    position: 'relative',
                                    backgroundColor: 'rgba(20, 20, 40, 0.98)',
                                    borderRadius: '36px',
                                    overflow: 'hidden',
                                    minHeight: '520px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: caseStudyFeatured.image,
                                        alt: caseStudyFeatured.title,
                                        style: {
                                            width: '100%',
                                            height: '330px',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2349,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '32px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '22px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '10px 18px',
                                                    backgroundColor: 'rgba(0, 194, 255, 0.12)',
                                                    borderRadius: '999px',
                                                    width: 'fit-content',
                                                    color: '#00c2ff',
                                                    fontSize: '12px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.14em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: caseStudyFeatured.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2360,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    color: 'white',
                                                    fontSize: '34px',
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontWeight: 800,
                                                    lineHeight: '1.05',
                                                    margin: 0
                                                },
                                                children: caseStudyFeatured.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2377,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(235, 239, 255, 0.87)',
                                                    fontSize: '16px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    lineHeight: '28px',
                                                    margin: 0,
                                                    maxWidth: '680px'
                                                },
                                                children: caseStudyFeatured.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2387,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '12px'
                                                },
                                                children: caseStudyFeatured.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            padding: '10px 16px',
                                                            borderRadius: '999px',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                            color: 'rgba(235, 239, 255, 0.84)',
                                                            fontSize: '13px',
                                                            fontFamily: '"Barlow", sans-serif',
                                                            fontWeight: 500
                                                        },
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2402,
                                                        columnNumber: 56
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2397,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                                    gap: '14px',
                                                    marginTop: '6px'
                                                },
                                                children: caseStudyFeatured.results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '20px',
                                                            borderRadius: '24px',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                            border: '1px solid rgba(255, 255, 255, 0.08)'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: 'rgba(235, 239, 255, 0.8)',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                margin: 0,
                                                                lineHeight: '20px'
                                                            },
                                                            children: result.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 2426,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, result.label, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2420,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2414,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2354,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2341,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '32px',
                                            borderRadius: '36px',
                                            backgroundColor: 'rgba(20, 20, 40, 0.98)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            minHeight: '252px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            color: '#00c2ff',
                                                            fontSize: '18px',
                                                            fontFamily: '"Barlow", sans-serif',
                                                            fontWeight: 700,
                                                            margin: '0 0 16px'
                                                        },
                                                        children: "The Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2456,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: '1fr 1fr',
                                                            gap: '16px'
                                                        },
                                                        children: caseStudyFeatured.results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '18px',
                                                                    borderRadius: '24px',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                                    border: '1px solid rgba(255, 255, 255, 0.08)'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: 'block',
                                                                            color: 'white',
                                                                            fontSize: '22px',
                                                                            fontFamily: '"Barlow", sans-serif',
                                                                            fontWeight: 800,
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: result.label.split(' ')[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                        lineNumber: 2476,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: 'rgba(235, 239, 255, 0.8)',
                                                                            fontSize: '13px',
                                                                            fontFamily: '"Barlow", sans-serif',
                                                                            lineHeight: '20px'
                                                                        },
                                                                        children: result.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                        lineNumber: 2486,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, result.label, true, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2470,
                                                                columnNumber: 68
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2465,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2455,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '100%',
                                                    padding: '18px 24px',
                                                    borderRadius: '18px',
                                                    border: 'none',
                                                    backgroundColor: '#00c2ff',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: '14px'
                                                },
                                                children: "View Full Case Study"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2497,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2445,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '28px',
                                            borderRadius: '32px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.86)',
                                                fontSize: '16px',
                                                fontFamily: '"Barlow", sans-serif',
                                                margin: 0,
                                                lineHeight: '26px'
                                            },
                                            children: "Discover the exact strategy behind the growth, from conversion optimization to advanced campaign targeting."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 2518,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2512,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2440,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2334,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px',
                            marginBottom: '42px'
                        },
                        children: caseStudyCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "ca-interactive-card",
                                style: {
                                    backgroundColor: 'rgba(20, 20, 40, 0.95)',
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease, background-color 0.2s ease'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: card.image,
                                        alt: card.title,
                                        style: {
                                            width: '100%',
                                            height: '196px',
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2546,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '24px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '18px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '8px 16px',
                                                    borderRadius: '999px',
                                                    backgroundColor: 'rgba(0, 194, 255, 0.12)',
                                                    color: '#00c2ff',
                                                    fontSize: '12px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                },
                                                children: card.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2557,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    color: 'white',
                                                    fontSize: '22px',
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontWeight: 800,
                                                    margin: 0
                                                },
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2572,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '10px'
                                                },
                                                children: card.stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(235, 239, 255, 0.82)',
                                                            fontSize: '14px',
                                                            fontFamily: '"Barlow", sans-serif',
                                                            lineHeight: '22px'
                                                        },
                                                        children: [
                                                            "• ",
                                                            stat
                                                        ]
                                                    }, stat, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2586,
                                                        columnNumber: 47
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2581,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2551,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, card.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2538,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2531,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '1230px',
                            padding: '32px 36px',
                            borderRadius: '40px',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: 'white',
                                            fontSize: '28px',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 700,
                                            margin: 0
                                        },
                                        children: "Ready to be our next success story?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2617,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(235, 239, 255, 0.8)',
                                            fontSize: '16px',
                                            fontFamily: '"Barlow", sans-serif',
                                            lineHeight: '26px',
                                            margin: 0
                                        },
                                        children: "Let’s create something extraordinary together."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2626,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2612,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    minWidth: '220px',
                                    padding: '16px 24px',
                                    borderRadius: '18px',
                                    backgroundColor: '#00c2ff',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 700,
                                    fontSize: '14px'
                                },
                                children: "Start Your Project"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2636,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2599,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "clients-marquee",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clients-marquee-track",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "clients-marquee-img",
                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg",
                            alt: "Partner companies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 2656,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "clients-marquee-img",
                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg",
                            alt: "",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 2657,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 2655,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2654,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        lineNumber: 2670,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: valueItems.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "value-icon ca-interactive-icon",
                                        src: `https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${val.icon}`,
                                        alt: val.title,
                                        style: {
                                            width: '33px',
                                            marginBottom: '16px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2707,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                        lineNumber: 2711,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 2720,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, val.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2690,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2681,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2662,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustriesServedSection, {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2734,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '120px 0 90px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.99) 0%, rgba(7, 11, 30, 1) 100%)',
                    borderRadius: '40px',
                    border: '1px solid rgba(0, 194, 255, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            zIndex: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '10%',
                                    left: '8%',
                                    width: '240px',
                                    height: '240px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(10,132,255,0.24), transparent 55%)',
                                    filter: 'blur(80px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2761,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '20%',
                                    right: '10%',
                                    width: '320px',
                                    height: '320px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(145,104,255,0.18), transparent 55%)',
                                    filter: 'blur(120px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2771,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2755,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '1240px',
                            margin: '0 auto',
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1.15fr 0.85fr',
                                    gap: '32px',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: 'inline-block',
                                                    marginBottom: '18px',
                                                    color: '#6da7ff',
                                                    fontSize: '13px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.24em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Our Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2800,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: 'clamp(42px, 4vw, 64px)',
                                                    lineHeight: 1.05,
                                                    margin: 0,
                                                    color: '#ffffff'
                                                },
                                                children: [
                                                    "Insights That Drive ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: 'linear-gradient(90deg, #66a6ff 0%, #0b5bff 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent'
                                                        },
                                                        children: "Real Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2817,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2811,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    marginTop: '22px',
                                                    maxWidth: '610px',
                                                    color: 'rgba(235,239,255,0.78)',
                                                    fontSize: '16px',
                                                    lineHeight: '28px',
                                                    fontFamily: '"Barlow", sans-serif'
                                                },
                                                children: "Stay ahead with expert insights, proven strategies, and the latest trends in digital marketing."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2825,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2799,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            minHeight: '360px',
                                            borderRadius: '32px',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(180deg, rgba(11,18,47,0.95) 0%, rgba(5,8,22,0.96) 100%)',
                                            border: '1px solid rgba(255,255,255,0.08)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                                                alt: "Blog hero",
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    opacity: 0.9
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2844,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(180deg, transparent 30%, rgba(3, 3, 8, 0.92) 100%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2850,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    left: '28px',
                                                    bottom: '28px',
                                                    right: '28px',
                                                    color: 'white'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            marginBottom: '16px',
                                                            color: '#8cb4ff',
                                                            fontSize: '12px',
                                                            fontWeight: 700,
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: '24px',
                                                                    height: '24px',
                                                                    borderRadius: '999px',
                                                                    background: 'rgba(0, 194, 255, 0.15)',
                                                                    display: 'grid',
                                                                    placeItems: 'center'
                                                                },
                                                                children: "★"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2872,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Featured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2862,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: '24px',
                                                            lineHeight: '1.2',
                                                            fontWeight: 700,
                                                            color: '#ffffff'
                                                        },
                                                        children: "Blog Intelligence for Modern Brands"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2882,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            marginTop: '12px',
                                                            color: 'rgba(235,239,255,0.82)',
                                                            fontSize: '14px',
                                                            lineHeight: '22px'
                                                        },
                                                        children: "Actionable insights and campaign intelligence that keep your team ahead."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2891,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2855,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2836,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2793,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                                    gap: '16px'
                                },
                                children: blogStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            padding: '20px',
                                            borderRadius: '22px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.18)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '52px',
                                                    height: '52px',
                                                    borderRadius: '18px',
                                                    background: 'linear-gradient(135deg, rgba(10,132,255,0.16), rgba(145,104,255,0.16))',
                                                    display: 'grid',
                                                    placeItems: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: stat.icon,
                                                    alt: "",
                                                    style: {
                                                        width: '24px',
                                                        height: '24px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 2926,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2918,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '22px',
                                                            fontWeight: 700,
                                                            color: '#ffffff'
                                                        },
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2929,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '13px',
                                                            color: 'rgba(235,239,255,0.72)',
                                                            marginTop: '6px'
                                                        },
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2934,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2928,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2908,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2903,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
                                    gap: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        style: {
                                            position: 'relative',
                                            minHeight: '460px',
                                            borderRadius: '32px',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(180deg, #10122b 0%, #070b1e 100%)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            boxShadow: '0 16px 45px rgba(0,0,0,0.30)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: blogPosts[0].image,
                                                alt: blogPosts[0].title,
                                                style: {
                                                    width: '100%',
                                                    height: '240px',
                                                    objectFit: 'cover'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2957,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '22px',
                                                    left: '22px',
                                                    padding: '10px 16px',
                                                    borderRadius: '999px',
                                                    background: 'rgba(10,132,255,0.16)',
                                                    color: '#66b2ff',
                                                    fontSize: '12px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: blogPosts[0].tag
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2962,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'relative',
                                                    padding: '26px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '20px',
                                                    height: 'calc(100% - 240px)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: 'rgba(138,183,255,0.85)',
                                                                    fontSize: '12px',
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.18em',
                                                                    marginBottom: '12px'
                                                                },
                                                                children: blogPosts[0].category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2984,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    color: '#ffffff',
                                                                    fontSize: '26px',
                                                                    lineHeight: '1.18',
                                                                    margin: 0
                                                                },
                                                                children: blogPosts[0].title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2991,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    marginTop: '16px',
                                                                    color: 'rgba(235,239,255,0.82)',
                                                                    lineHeight: '24px'
                                                                },
                                                                children: blogPosts[0].description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2997,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2983,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: 'rgba(235,239,255,0.72)',
                                                                    fontSize: '13px'
                                                                },
                                                                children: [
                                                                    blogPosts[0].author,
                                                                    " · ",
                                                                    blogPosts[0].date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 3009,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '10px 16px',
                                                                    borderRadius: '999px',
                                                                    border: '1px solid rgba(255,255,255,0.10)',
                                                                    color: '#66b2ff',
                                                                    fontSize: '13px'
                                                                },
                                                                children: blogPosts[0].read
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 3013,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 3003,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2975,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2948,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    blogPosts.slice(1).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            style: {
                                                borderRadius: '28px',
                                                overflow: 'hidden',
                                                background: 'linear-gradient(180deg, #10122b 0%, #070b1e 100%)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                boxShadow: '0 12px 28px rgba(0,0,0,0.24)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'relative',
                                                        height: '200px',
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: post.image,
                                                            alt: post.title,
                                                            style: {
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                opacity: 0.92
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3035,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'absolute',
                                                                inset: 0,
                                                                background: 'linear-gradient(180deg, transparent 40%, rgba(3,3,8,0.92) 100%)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3041,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'absolute',
                                                                top: '18px',
                                                                left: '18px',
                                                                padding: '8px 14px',
                                                                borderRadius: '999px',
                                                                background: 'rgba(10,132,255,0.16)',
                                                                color: '#8cb4ff',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.16em'
                                                            },
                                                            children: post.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3046,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3030,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '22px',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                color: '#ffffff',
                                                                fontSize: '18px',
                                                                lineHeight: '1.3',
                                                                margin: 0
                                                            },
                                                            children: post.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3066,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: 'rgba(235,239,255,0.76)',
                                                                fontSize: '14px',
                                                                lineHeight: '22px',
                                                                margin: 0
                                                            },
                                                            children: post.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3072,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                gap: '12px',
                                                                marginTop: 'auto'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: 'rgba(235,239,255,0.72)',
                                                                        fontSize: '12px'
                                                                    },
                                                                    children: post.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                    lineNumber: 3085,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        color: 'rgba(138,183,255,0.85)',
                                                                        fontSize: '12px'
                                                                    },
                                                                    children: post.read
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                    lineNumber: 3089,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3078,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3060,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, post.title, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3023,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2943,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '20px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            minWidth: '220px',
                                            padding: '16px 28px',
                                            borderRadius: '999px',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            background: 'linear-gradient(90deg, #00c2ff 0%, #00c2ff 100%)',
                                            color: '#ffffff',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            boxShadow: '0 0 40px rgba(145,104,255,0.22)'
                                        },
                                        children: "Explore All Articles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 3105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '-12px'
                                        },
                                        children: [
                                            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80',
                                            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80',
                                            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
                                            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80'
                                        ].map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: src,
                                                alt: "avatar",
                                                style: {
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '50%',
                                                    border: '2px solid rgba(3,3,3,0.96)'
                                                }
                                            }, idx, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 3123,
                                                columnNumber: 412
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 3118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 3098,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2783,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2743,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsSection, {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$FAQSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '120px 0 100px',
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        backgroundColor: 'rgba(10, 12, 25, 0.96)',
                        borderRadius: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 40px 120px rgba(0, 0, 0, 0.35)',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: '1.05fr 0.95fr',
                        gap: '32px',
                        padding: '56px',
                        minHeight: '480px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '32px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'inline-block',
                                                color: 'rgba(0, 194, 255, 0.82)',
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.28em',
                                                textTransform: 'uppercase'
                                            },
                                            children: "Let’s achieve extraordinary together"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3171,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                color: '#ffffff',
                                                fontSize: 'clamp(40px, 4vw, 62px)',
                                                fontFamily: '"Barlow", sans-serif',
                                                fontWeight: 800,
                                                lineHeight: 1.05,
                                                margin: '24px 0 24px 0'
                                            },
                                            children: [
                                                "Ready to Drive Transformational ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'rgba(0, 194, 255, 1)'
                                                    },
                                                    children: "Growth?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3189,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3181,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                maxWidth: '560px',
                                                color: 'rgba(235, 239, 255, 0.82)',
                                                fontSize: '16px',
                                                lineHeight: '28px',
                                                fontFamily: '"Barlow", sans-serif'
                                            },
                                            children: "Partner with a team of digital marketing experts who are passionate about your success. Let’s create a strategy that drives real results."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                minWidth: '220px',
                                                padding: '18px 28px',
                                                borderRadius: '999px',
                                                border: 'none',
                                                background: 'linear-gradient(90deg, rgba(0, 194, 255, 1), rgba(0, 194, 255, 1))',
                                                color: 'white',
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 194, 255, 0.3)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: "Schedule a Strategy Call"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3206,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                minWidth: '220px',
                                                padding: '18px 28px',
                                                borderRadius: '999px',
                                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                                background: 'transparent',
                                                color: 'white',
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                transition: 'background 0.2s ease, transform 0.2s ease'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: "See How We Work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3226,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                        gap: '16px'
                                    },
                                    children: [
                                        'Data-Driven',
                                        'ROI Focused',
                                        'Expert Team',
                                        'Transparent'
                                    ].map((label, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '14px',
                                                padding: '18px',
                                                borderRadius: '24px',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '38px',
                                                        height: '38px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(0, 194, 255, 0.16)',
                                                        display: 'grid',
                                                        placeItems: 'center'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(0, 194, 255, 1)',
                                                            fontSize: '18px',
                                                            fontWeight: 700
                                                        },
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 3269,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3261,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: 'rgba(235, 239, 255, 0.88)',
                                                        fontSize: '14px',
                                                        fontFamily: '"Barlow", sans-serif',
                                                        fontWeight: 500
                                                    },
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3271,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3252,
                                            columnNumber: 97
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3247,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 3164,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                minHeight: '460px',
                                backgroundColor: 'rgba(0,0,0,0.18)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
                                    alt: "Team in meeting",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(0.7)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3287,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.72) 100%)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3293,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: '24px',
                                        right: '24px',
                                        display: 'grid',
                                        gap: '16px'
                                    },
                                    children: [
                                        {
                                            value: '250+',
                                            label: 'Happy Clients'
                                        },
                                        {
                                            value: '10X',
                                            label: 'Average ROI'
                                        }
                                    ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                minWidth: '180px',
                                                padding: '16px 20px',
                                                borderRadius: '24px',
                                                background: 'rgba(3, 3, 3, 0.85)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: 'rgba(0, 194, 255, 1)',
                                                        fontSize: '22px',
                                                        fontWeight: 800,
                                                        marginBottom: '6px'
                                                    },
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3315,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: 'rgba(235, 239, 255, 0.78)',
                                                        fontSize: '13px',
                                                        lineHeight: '18px'
                                                    },
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3321,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3308,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3298,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: '24px',
                                        left: '24px',
                                        padding: '18px 22px',
                                        borderRadius: '24px',
                                        background: 'rgba(3, 3, 3, 0.88)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(0, 194, 255, 1)',
                                                fontSize: '18px',
                                                fontWeight: 700,
                                                marginBottom: '6px'
                                            },
                                            children: "98%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3337,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(235, 239, 255, 0.78)',
                                                fontSize: '13px',
                                                lineHeight: '18px'
                                            },
                                            children: "Client Retention"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3343,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 3328,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 3280,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 3151,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '100%',
                    padding: '120px 0 140px',
                    boxSizing: 'border-box'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        maxWidth: '1440px',
                        margin: '0 auto',
                        padding: '0 24px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            minHeight: '700px',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            background: '#030303'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
                                alt: "Manufacturing background",
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.35) contrast(1.05)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 3372,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.22) 0%, rgba(3, 3, 3, 0.94) 100%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 3380,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateColumns: '1.05fr 0.95fr',
                                    gap: '32px',
                                    minHeight: '700px',
                                    alignItems: 'center',
                                    padding: '64px 48px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '28px',
                                            justifyContent: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#00c2ff',
                                                    fontSize: '12px',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.32em',
                                                    textTransform: 'uppercase',
                                                    fontFamily: '"Barlow", sans-serif'
                                                },
                                                children: "Request a Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 3400,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    color: '#ffffff',
                                                    fontSize: 'clamp(44px, 4.4vw, 68px)',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 800,
                                                    lineHeight: 1.03,
                                                    margin: 0
                                                },
                                                children: "Ready to Start Your Project?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 3410,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    maxWidth: '560px',
                                                    color: 'rgba(235, 239, 255, 0.84)',
                                                    fontSize: '16px',
                                                    lineHeight: '28px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    margin: 0
                                                },
                                                children: "For more information about our digital marketing services, or to request a quote from our team, contact us now."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 3420,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 3394,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '100%',
                                                maxWidth: '480px',
                                                borderRadius: '32px',
                                                background: 'rgba(10, 12, 32, 0.92)',
                                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.36)',
                                                padding: '34px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '20px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: '#ffffff',
                                                        fontSize: '24px',
                                                        fontWeight: 700,
                                                        margin: 0,
                                                        fontFamily: '"Barlow", sans-serif'
                                                    },
                                                    children: "Request a Quote"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3449,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: '1fr 1fr',
                                                        gap: '16px'
                                                    },
                                                    children: [
                                                        'Your name',
                                                        'Your email'
                                                    ].map((placeholder, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: idx === 1 ? 'email' : 'text',
                                                            placeholder: placeholder,
                                                            style: {
                                                                width: '100%',
                                                                padding: '16px 18px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                outline: 'none'
                                                            }
                                                        }, placeholder, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3463,
                                                            columnNumber: 76
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3458,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gap: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Part Number",
                                                            style: {
                                                                width: '100%',
                                                                padding: '16px 18px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                outline: 'none'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3479,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Phone number*",
                                                            style: {
                                                                width: '100%',
                                                                padding: '16px 18px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                outline: 'none'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3490,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '12px',
                                                                padding: '14px 16px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: 'rgba(235,239,255,0.84)',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    style: {
                                                                        border: 'none',
                                                                        background: 'rgba(255, 255, 255, 0.12)',
                                                                        color: '#ffffff',
                                                                        borderRadius: '14px',
                                                                        padding: '10px 16px',
                                                                        cursor: 'pointer',
                                                                        fontFamily: '"Barlow", sans-serif'
                                                                    },
                                                                    children: "Choose File"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                    lineNumber: 3513,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "No File Chosen"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                    lineNumber: 3524,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3501,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Quantity",
                                                            style: {
                                                                width: '100%',
                                                                padding: '16px 18px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                outline: 'none'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3526,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            placeholder: "Message",
                                                            style: {
                                                                width: '100%',
                                                                minHeight: '140px',
                                                                padding: '16px 18px',
                                                                borderRadius: '18px',
                                                                border: '1px solid rgba(255,255,255,0.12)',
                                                                background: 'rgba(255,255,255,0.04)',
                                                                color: '#ffffff',
                                                                fontSize: '14px',
                                                                fontFamily: '"Barlow", sans-serif',
                                                                outline: 'none',
                                                                resize: 'vertical'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 3537,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3475,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        width: '100%',
                                                        padding: '16px 0',
                                                        borderRadius: '18px',
                                                        border: 'none',
                                                        background: '#ffffff',
                                                        color: '#080c20',
                                                        fontSize: '15px',
                                                        fontWeight: 700,
                                                        cursor: 'pointer'
                                                    },
                                                    children: "PankajUX India"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3551,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: 'rgba(235, 239, 255, 0.55)',
                                                        fontSize: '12px',
                                                        lineHeight: '18px',
                                                        margin: 0,
                                                        fontFamily: '"Barlow", sans-serif'
                                                    },
                                                    children: "*** Here at Pankajux India your privacy is important to us. Any information shared will be kept internal, confidential, and secure. ***"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                    lineNumber: 3564,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                            lineNumber: 3437,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 3432,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 3385,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 3365,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 3359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3354,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                lineNumber: 3581,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 1694,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(HomeContent, "XuNyOifSMbf21Ua0uXWiao3C1Kg=");
_c6 = HomeContent;
const LandingPage = ({ className, style })=>{
    _s4();
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Home');
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const handleScroll = {
                "LandingPage.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 50)
            }["LandingPage.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "LandingPage.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    const handleNavigate = (page)=>{
        setActivePage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                lineNumber: 3622,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                activePage: activePage,
                onNavigate: handleNavigate,
                scrolled: scrolled
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3700,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '96px',
                    width: '100%',
                    flexShrink: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3703,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3710,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesPage"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3711,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Portfolio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioShowcase"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3712,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'About Us' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3713,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Careers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CareerJobListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CareerJobListing"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3714,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 3716,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 3610,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(LandingPage, "dSNuCKgdAsFWRW4vLYpU5JpgxXM=");
_c7 = LandingPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "Navbar");
__turbopack_context__.k.register(_c2, "Footer");
__turbopack_context__.k.register(_c3, "TrustSection");
__turbopack_context__.k.register(_c4, "IndustriesServedSection");
__turbopack_context__.k.register(_c5, "TestimonialsSection");
__turbopack_context__.k.register(_c6, "HomeContent");
__turbopack_context__.k.register(_c7, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/generated/LandingPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// %IMPORT_STATEMENT
let theme = 'light';
function App() {
    _s();
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setTheme(theme);
        }
    }["App.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPage"], {}, void 0, false, {
        fileName: "[project]/src/App.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this); // %EXPORT_STATEMENT%
}
_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.tsx [app-client] (ecmascript)");
'use client';
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1yoflpd._.js.map