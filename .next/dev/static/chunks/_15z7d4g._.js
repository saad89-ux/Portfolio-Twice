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
var _s = __turbopack_context__.k.signature();
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
const industriesData = [
    {
        title: 'Financial Services & Trading',
        description: 'Advanced analytics and trading solutions for financial institutions.',
        features: [
            'Algorithmic trading systems',
            'Market analysis',
            'Risk management',
            'Fraud detection'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/a572fdab-f147-41cf-a720-59e90f464339.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/7ecdd344-1303-4510-b60b-c2404030561e.svg'
    },
    {
        title: 'Blockchain & Crypto',
        description: 'Cutting-edge blockchain solutions and DeFi protocol development.',
        features: [
            'DeFi protocols',
            'Token systems',
            'Smart contracts',
            'Blockchain analytics'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/50684f98-7105-40d1-9a0b-f62b2b900062.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/0bc02704-3420-4d87-8f28-84ed240576fb.svg'
    },
    {
        title: 'Esports & Gaming',
        description: 'Data-driven solutions for esports teams, tournaments, and gaming platforms.',
        features: [
            'Player performance analytics',
            'Team optimization',
            'Tournament management',
            'Gaming platform analytics'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/b47e7e11-7d1e-419e-af1a-b42d065a6f7a.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/4ff6bcf8-5c4f-4b51-8030-6f5ad810e1fe.svg'
    },
    {
        title: 'Healthcare & Life Sciences',
        description: 'AI solutions for medical imaging, patient care optimization, and drug discovery.',
        features: [
            'Medical image analysis',
            'Clinical trial optimization',
            'Patient outcome prediction',
            'Drug development'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d4e3b372-af8e-4131-b63a-5c84ca8b78a5.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/4b95fe13-be65-4ad1-91d7-fc9c4ae44ca3.svg'
    },
    {
        title: 'Manufacturing',
        description: 'Smart manufacturing solutions with predictive maintenance and quality control.',
        features: [
            'Predictive maintenance',
            'Supply chain optimization',
            'Quality control automation',
            'Process optimization'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/d1c4f016-2d5e-4343-8831-ccb7d0796bd8.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/705857df-0ae1-47c5-b32b-79ee96980d69.svg'
    },
    {
        title: 'Retail & E-commerce',
        description: 'AI-powered solutions for personalization and inventory management.',
        features: [
            'Demand forecasting',
            'Inventory optimization',
            'Recommendation systems',
            'Customer analytics'
        ],
        image: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2ebd53e1-1524-45ab-a91a-8dd3795a0baf.png',
        icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/5cb9be0d-3600-4fcd-9085-7066a9555bb8.svg'
    }
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
            border: isHovered ? '1px solid rgba(10, 132, 255, 0.3)' : '1px solid transparent',
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
                lineNumber: 106,
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
                lineNumber: 111,
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
                lineNumber: 119,
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
                                lineNumber: 142,
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
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 136,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 129,
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
                            background: 'rgba(69, 156, 243, 1)',
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
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 167,
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
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/ServicesPage.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = ServiceCard;
const ServicesPage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'rgba(3, 3, 3, 1)',
            overflowX: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    margin: '53px auto',
                    width: '1254px',
                    height: '376px',
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
                                lineNumber: 215,
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
                                lineNumber: 221,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 206,
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
                                lineNumber: 233,
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
                                lineNumber: 244,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 228,
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
                        lineNumber: 256,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 197,
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
                        lineNumber: 272,
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
                        lineNumber: 279,
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
                                lineNumber: 295,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: '1230px',
                    margin: '154px auto',
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
                        children: "Industries We Serve"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            maxWidth: '961px',
                            margin: '0 auto 88px auto',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '16px',
                            fontFamily: '"Barlow", sans-serif',
                            lineHeight: '24px'
                        },
                        children: "Delivering innovative solutions across diverse industries with deep domain expertise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '58px',
                            justifyContent: 'center'
                        },
                        children: industriesData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                item: item
                            }, index, false, {
                                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                                lineNumber: 328,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/ServicesPage.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/ServicesPage.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/ServicesPage.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ServicesPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceCard");
__turbopack_context__.k.register(_c1, "ServicesPage");
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
                            backgroundColor: isHovered ? 'rgba(89, 176, 255, 1)' : 'rgba(69, 156, 243, 1)',
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
            minHeight: '100vh',
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
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '1254px',
                    height: '376px',
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
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    width: '1226px',
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
                                lineNumber: 256,
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
                                lineNumber: 263,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 253,
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
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ca-interactive-btn",
                                        style: {
                                            width: '36px',
                                            height: '36px',
                                            backgroundColor: 'rgba(69, 156, 243, 1)',
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
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 279,
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
                                                border: activeCategory === cat ? '1px solid rgba(10, 132, 255, 1)' : 'none',
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
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, cat, true, {
                                            fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                            lineNumber: 318,
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
                                            backgroundColor: 'rgba(10, 132, 255, 1)',
                                            borderRadius: '100px',
                                            border: 'none',
                                            color: 'white',
                                            fontWeight: 500,
                                            cursor: 'pointer'
                                        },
                                        children: "Clear All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                        lineNumber: 274,
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
                        lineNumber: 351,
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
                    width: '1230px',
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
                        lineNumber: 369,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 359,
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
                        lineNumber: 380,
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
                        lineNumber: 384,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/PortfolioShowcase.tsx",
                lineNumber: 373,
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
                lineNumber: 391,
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
            backgroundColor: isHovered ? 'rgba(10, 132, 255, 0.95)' : 'rgba(10, 132, 255, 1)',
            borderRadius: '14px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: isHovered ? '0 18px 36px rgba(10, 132, 255, 0.28)' : '0 12px 20px rgba(10, 132, 255, 0.22)'
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
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px clamp(24px, 6vw, 90px) 90px',
            backgroundColor: '#070b1e',
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '48px',
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 14% 18%, rgba(10, 132, 255, 0.16), transparent 24%), radial-gradient(circle at 86% 22%, rgba(12, 106, 255, 0.12), transparent 20%), radial-gradient(circle at 50% 88%, rgba(5, 54, 149, 0.16), transparent 32%)',
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
                                children: "Hi, I'm Muhammad Mohsin"
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
                                            backgroundColor: 'rgba(10, 132, 255, 0.06)',
                                            border: '1px solid rgba(10, 132, 255, 0.14)',
                                            minHeight: '120px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(10, 132, 255, 1)',
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
                                            backgroundColor: 'rgba(10, 132, 255, 0.08)',
                                            border: '1px solid rgba(10, 132, 255, 0.16)',
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
                                        children: "Muhammad Mohsin"
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
                            border: '1px solid rgba(10, 132, 255, 0.14)'
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
                                    background: 'linear-gradient(180deg, rgba(3, 7, 20, 0.12), rgba(3, 7, 20, 0.92) 70%)',
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
                                                    backgroundColor: 'rgba(10, 132, 255, 1)'
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
                                                    backgroundColor: 'rgba(10, 132, 255, 0.16)',
                                                    border: '1px solid rgba(10, 132, 255, 0.24)',
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
                                                    backgroundColor: 'rgba(10, 132, 255, 1)',
                                                    color: 'white',
                                                    fontSize: '12px'
                                                },
                                                children: "▶"
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
                                                                children: "★★★★★"
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
            backgroundColor: '#0A84FF',
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
            e.currentTarget.style.backgroundColor = '#0A84FF';
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
                                    backgroundColor: '#0A84FF',
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
                    backgroundColor: '#0A84FF',
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
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = '#0A84FF',
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
            minHeight: '100vh',
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
                                lineNumber: 259,
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
                                lineNumber: 267,
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
                                lineNumber: 276,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 251,
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
                                lineNumber: 290,
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
                                lineNumber: 300,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                width: "210px",
                                height: "42px",
                                children: "Explore Open Positions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 241,
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
                        lineNumber: 327,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Job Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterDropdown, {
                        label: "Workplace Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 330,
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
                                lineNumber: 342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ca-interactive-btn ca-interactive-icon",
                                style: {
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#459CF3',
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
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 316,
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
                        lineNumber: 375,
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
                                lineNumber: 391,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 370,
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
                            lineNumber: 416,
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
                            lineNumber: 425,
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
                                lineNumber: 437,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/CareerJobListing.tsx",
                lineNumber: 396,
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
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
const faqData = [
    {
        question: 'What services does Catalyst Analytics provide?',
        answer: 'Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.'
    },
    {
        question: 'How do you ensure data privacy and security?',
        answer: 'We implement industry-standard encryption, strict access controls, and regular security audits. Our infrastructure follows SOC2 compliance guidelines to ensure your sensitive data remains protected at all times.'
    },
    {
        question: 'Can you integrate with our existing data infrastructure?',
        answer: 'Yes, our engineering team specializes in building robust pipelines that connect seamlessly with your existing AWS, Azure, or Google Cloud environments, as well as on-premise solutions.'
    },
    {
        question: 'What is your typical project timeline?',
        answer: 'Timelines vary based on complexity, but a typical ML model implementation ranges from 4 to 12 weeks, while full-scale data engineering projects are scoped in phases to ensure continuous delivery.'
    },
    {
        question: 'Do you provide ongoing support after implementation?',
        answer: 'Absolutely. We offer dedicated maintenance packages that include 24/7 monitoring, model retraining, and system updates to ensure your AI solutions continue to perform optimally.'
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
const FAQItem = ({ number, question, answer, isOpen, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ca-interactive-card",
        onClick: onClick,
        style: {
            display: 'flex',
            flexDirection: 'row',
            padding: 'clamp(16px, 3vw, 30px) clamp(16px, 4vw, 50px)',
            gap: 'clamp(16px, 2.5vw, 30px)',
            backgroundColor: isOpen ? 'rgba(30, 30, 30, 1)' : 'rgba(20, 20, 20, 1)',
            boxSizing: 'border-box',
            borderRadius: '36px',
            alignSelf: 'stretch',
            cursor: 'pointer',
            border: isOpen ? '1px solid rgba(10, 132, 255, 0.3)' : '1px solid transparent',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 'clamp(48px, 8vw, 80px)',
                    height: 'clamp(48px, 8vw, 80px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(180deg, rgba(36, 36, 36, 1.00) 0%, rgba(36, 36, 36, 0.00) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    flexShrink: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: isOpen ? 'rgba(10, 132, 255, 1)' : 'rgba(255, 255, 255, 1)',
                        fontSize: 'clamp(18px, 3vw, 28px)',
                        fontFamily: '"Barlow", sans-serif',
                        fontWeight: 600,
                        textAlign: 'center'
                    },
                    children: number
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: isOpen ? '24px' : '8px',
                    gap: '20px',
                    flexGrow: 1,
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '12px',
                            alignSelf: 'stretch'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flexGrow: 1,
                                    color: isOpen ? 'rgba(10, 132, 255, 1)' : 'rgba(255, 255, 255, 1)',
                                    fontSize: 'clamp(15px, 2.5vw, 22px)',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 500,
                                    lineHeight: '1.3'
                                },
                                children: question
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: isOpen ? 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fdf6dc7b-75f4-4d99-afcb-bad883b1a562.svg' : 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/98270329-cb67-41de-ba10-a0e50126c1e4.svg',
                                alt: "Toggle",
                                style: {
                                    width: '28px',
                                    height: '28px',
                                    flexShrink: 0,
                                    transition: 'transform 0.3s ease',
                                    transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(230, 230, 230, 1)',
                            fontSize: 'clamp(14px, 2vw, 18px)',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 400,
                            lineHeight: '1.6',
                            margin: 0,
                            animation: 'fadeIn 0.4s ease'
                        },
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 353,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 284,
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
                                lineNumber: 410,
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
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Analytics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 405,
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
                                    color: activePage === item ? 'rgba(10, 132, 255, 1)' : 'white',
                                    fontSize: '16px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer',
                                    padding: '10px',
                                    transition: 'color 0.2s ease',
                                    borderBottom: activePage === item ? '2px solid rgba(10, 132, 255, 1)' : '2px solid transparent'
                                },
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 435,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 430,
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
                            backgroundColor: 'rgba(10, 132, 255, 1)',
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
                        lineNumber: 451,
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
                                lineNumber: 484,
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
                                lineNumber: 492,
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
                                lineNumber: 500,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 387,
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
                                color: activePage === item ? 'rgba(10, 132, 255, 1)' : 'white',
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
                            lineNumber: 525,
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
                                backgroundColor: 'rgba(10, 132, 255, 1)',
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
                            lineNumber: 541,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 512,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 386,
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
            borderTop: '1px solid rgba(133, 133, 133, 1)',
            padding: '50px 86px',
            marginTop: 'auto',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '50px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        },
                        onClick: ()=>onNavigate('Home'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2f27409e-ca8b-4ecc-a6bc-ba60974bd799.png",
                                alt: "Logo",
                                style: {
                                    width: '64px',
                                    height: '64px',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 604,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Analytics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            display: 'flex',
                            gap: '30px'
                        },
                        children: navItems.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate(link),
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: 'rgba(230, 230, 230, 1)',
                                    fontSize: '18px',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = 'rgba(10, 132, 255, 1)',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(230, 230, 230, 1)',
                                children: link
                            }, link, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 612,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '50px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '30px',
                            flexWrap: 'wrap'
                        },
                        children: [
                            {
                                icon: '5972ac63-7357-4496-b135-19bd34bed1c8.svg',
                                text: 'contact@catalystanalytics.io'
                            },
                            {
                                icon: '8c5a1317-7deb-4f00-bbbf-9f609be9783c.svg',
                                text: '+1 (469) 712-4672'
                            },
                            {
                                icon: '3647b4b0-3672-4377-a782-3aa870c62bf1.svg',
                                text: '5511 Parkcrest Dr, Suite 103, Austin, TX 78731'
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(38,38,38,1)',
                                    paddingBottom: '4px',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${item.icon}`,
                                        alt: "icon",
                                        style: {
                                            width: '24px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(230, 230, 230, 1)',
                                            fontSize: '18px',
                                            fontFamily: '"Barlow", sans-serif'
                                        },
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 646,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 632,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '18px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 670,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(152, 152, 154, 1)',
                                    fontSize: '18px',
                                    fontFamily: '"Barlow", sans-serif',
                                    cursor: 'pointer'
                                },
                                children: "Terms of Service"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 676,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: 'center',
                    color: 'rgba(152, 152, 154, 1)',
                    fontSize: '18px',
                    fontFamily: '"Barlow", sans-serif',
                    margin: 0
                },
                children: "© 2025 Catalyst Analytics. All rights reserved."
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 571,
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
            backgroundColor: 'rgba(7, 11, 30, 1)',
            borderRadius: '48px',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 16% 18%, rgba(10, 132, 255, 0.15), transparent 24%), radial-gradient(circle at 88% 16%, rgba(26, 115, 255, 0.1), transparent 20%), radial-gradient(circle at 50% 85%, rgba(4, 45, 112, 0.16), transparent 35%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 708,
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
                                lineNumber: 729,
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
                                            backgroundColor: 'rgba(10, 132, 255, 0.16)',
                                            border: '1px solid rgba(10, 132, 255, 0.24)',
                                            color: 'white',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            width: 'fit-content'
                                        },
                                        children: "Client-First Always"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 746,
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
                                                    backgroundColor: 'rgba(10, 132, 255, 1)',
                                                    color: 'white',
                                                    fontSize: '12px'
                                                },
                                                children: "▶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 772,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Watch My Story"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 737,
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
                                            color: 'rgba(10, 132, 255, 1)',
                                            fontSize: '14px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase'
                                        },
                                        children: "Results · Trust · Growth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 802,
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
                                        lineNumber: 812,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 788,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 721,
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
                                lineNumber: 828,
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
                                            backgroundColor: 'rgba(10, 132, 255, 1)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 843,
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
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 838,
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
                                lineNumber: 860,
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
                                            backgroundColor: 'rgba(10, 132, 255, 1)',
                                            border: 'none',
                                            color: 'white',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 700,
                                            cursor: 'pointer'
                                        },
                                        children: "Watch Video"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 875,
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
                                        lineNumber: 890,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 870,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 823,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 714,
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
                                backgroundColor: 'rgba(7, 11, 30, 1)',
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
                                    lineNumber: 931,
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
                                    lineNumber: 935,
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
                                    lineNumber: 943,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 921,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 916,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 909,
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
                                    color: 'rgba(10, 132, 255, 1)',
                                    fontSize: '28px',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: 800,
                                    lineHeight: 1
                                },
                                children: "“"
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 973,
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
                                        lineNumber: 983,
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
                                        lineNumber: 993,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 982,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 967,
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
                                        border: '2px solid rgba(7, 11, 30, 1)',
                                        position: 'relative',
                                        left: `${index * -14}px`
                                    }
                                }, src, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 1008,
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
                                lineNumber: 1017,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1003,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 697,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = TrustSection;
const HomeContent = ({ onNavigate })=>{
    _s1();
    const [activeFaq, setActiveFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
                    height: '932px',
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
                        lineNumber: 1053,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content",
                        style: {
                            position: 'absolute',
                            left: '149px',
                            top: '225px',
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
                                            display: 'block'
                                        },
                                        children: "Transforming Data into"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-decisions-badge",
                                        style: {
                                            display: 'inline-block',
                                            backgroundColor: 'rgba(10, 132, 255, 1)',
                                            borderRadius: '16px',
                                            padding: '0 28px',
                                            marginTop: '8px',
                                            lineHeight: '77px',
                                            height: '77px',
                                            boxSizing: 'border-box'
                                        },
                                        children: "Decisions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1083,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1071,
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
                                lineNumber: 1096,
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
                                    backgroundColor: 'rgba(10, 132, 255, 1)',
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
                                lineNumber: 1107,
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
                                                lineNumber: 1139,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1133,
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
                                                lineNumber: 1156,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " clients have worked with us"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1149,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1064,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-visual",
                        style: {
                            position: 'absolute',
                            left: '826px',
                            top: '148px',
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
                                lineNumber: 1173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-robot-glow hero-robot-glow--core",
                                style: {
                                    position: 'absolute',
                                    width: '320px',
                                    height: '320px',
                                    background: 'radial-gradient(circle, rgba(10, 132, 255, 0.75) 0%, rgba(10, 132, 255, 0.35) 45%, rgba(10, 132, 255, 0) 72%)',
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
                                lineNumber: 1186,
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
                                        lineNumber: 1205,
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
                                        lineNumber: 1211,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1199,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1045,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustSection, {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1225,
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
                        lineNumber: 1237,
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
                        lineNumber: 1245,
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
                                        lineNumber: 1278,
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
                                        lineNumber: 1284,
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
                                        lineNumber: 1294,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, service.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1265,
                                columnNumber: 40
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1258,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1228,
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
                                            color: '#0a84ff'
                                        },
                                        children: "Results."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1324,
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
                                lineNumber: 1334,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1318,
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
                                            color: 'rgba(145, 104, 255, 1)',
                                            fontSize: '32px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 800
                                        },
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1363,
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
                                        lineNumber: 1371,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1352,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1345,
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
                                    backgroundColor: activePortfolioCategory === category ? '#0a84ff' : 'rgba(255, 255, 255, 0.05)',
                                    color: activePortfolioCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
                                    border: activePortfolioCategory === category ? '1px solid #0a84ff' : '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease'
                                },
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1390,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1383,
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
                                                lineNumber: 1432,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '18px',
                                                    left: '18px',
                                                    padding: '10px 16px',
                                                    borderRadius: '999px',
                                                    backgroundColor: 'rgba(10, 132, 255, 0.18)',
                                                    color: 'rgba(10, 132, 255, 1)',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: '12px',
                                                    letterSpacing: '0.04em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: project.tag
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1438,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1426,
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
                                                lineNumber: 1458,
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
                                                lineNumber: 1467,
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
                                                                lineNumber: 1487,
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
                                                                lineNumber: 1494,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, metric.label, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 1482,
                                                        columnNumber: 52
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    padding: '14px 20px',
                                                    width: '100%',
                                                    backgroundColor: '#0a84ff',
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
                                                lineNumber: 1503,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1455,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, project.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1415,
                                columnNumber: 157
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1407,
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
                                        lineNumber: 1539,
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
                                        lineNumber: 1548,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1534,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    minWidth: '220px',
                                    padding: '16px 24px',
                                    borderRadius: '18px',
                                    backgroundColor: '#0a84ff',
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
                                lineNumber: 1558,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1521,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1309,
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
                                lineNumber: 1591,
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
                                lineNumber: 1601,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1585,
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
                                            color: 'rgba(145, 104, 255, 1)',
                                            fontSize: '32px',
                                            fontFamily: '"Barlow", sans-serif',
                                            fontWeight: 800
                                        },
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1631,
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
                                        lineNumber: 1639,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1622,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1615,
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
                                    backgroundColor: activeCaseStudyCategory === category ? '#0a84ff' : 'rgba(255, 255, 255, 0.05)',
                                    color: activeCaseStudyCategory === category ? 'white' : 'rgba(235, 239, 255, 0.8)',
                                    border: activeCaseStudyCategory === category ? '1px solid #0a84ff' : '1px solid rgba(255, 255, 255, 0.08)',
                                    cursor: 'pointer',
                                    fontFamily: '"Barlow", sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease'
                                },
                                children: category
                            }, category, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1658,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1650,
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
                                        lineNumber: 1690,
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
                                                    backgroundColor: 'rgba(10, 132, 255, 0.12)',
                                                    borderRadius: '999px',
                                                    width: 'fit-content',
                                                    color: '#0a84ff',
                                                    fontSize: '12px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.14em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: caseStudyFeatured.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1701,
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
                                                lineNumber: 1718,
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
                                                lineNumber: 1728,
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
                                                        lineNumber: 1743,
                                                        columnNumber: 56
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1738,
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
                                                            lineNumber: 1767,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, result.label, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 1761,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1755,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1695,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1682,
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
                                                            color: '#0a84ff',
                                                            fontSize: '18px',
                                                            fontFamily: '"Barlow", sans-serif',
                                                            fontWeight: 700,
                                                            margin: '0 0 16px'
                                                        },
                                                        children: "The Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 1797,
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
                                                                        lineNumber: 1817,
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
                                                                        lineNumber: 1827,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, result.label, true, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 1811,
                                                                columnNumber: 68
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 1806,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1796,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '100%',
                                                    padding: '18px 24px',
                                                    borderRadius: '18px',
                                                    border: 'none',
                                                    backgroundColor: '#0a84ff',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: '14px'
                                                },
                                                children: "View Full Case Study"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1838,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1786,
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
                                            lineNumber: 1859,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1853,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1781,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1675,
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
                                        lineNumber: 1887,
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
                                                    backgroundColor: 'rgba(10, 132, 255, 0.12)',
                                                    color: '#0a84ff',
                                                    fontSize: '12px',
                                                    fontFamily: '"Barlow", sans-serif',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                },
                                                children: card.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1898,
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
                                                lineNumber: 1913,
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
                                                        lineNumber: 1927,
                                                        columnNumber: 47
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 1922,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 1892,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, card.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1879,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1872,
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
                                        lineNumber: 1958,
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
                                        lineNumber: 1967,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 1953,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    minWidth: '220px',
                                    padding: '16px 24px',
                                    borderRadius: '18px',
                                    backgroundColor: '#0a84ff',
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
                                lineNumber: 1977,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 1940,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1576,
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
                            lineNumber: 1997,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "clients-marquee-img",
                            src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/fb494179-70d0-4a84-b2f8-7d84861ddb38.svg",
                            alt: "",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                            lineNumber: 1998,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                    lineNumber: 1996,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 1995,
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
                        lineNumber: 2011,
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
                                        lineNumber: 2048,
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
                                        lineNumber: 2052,
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
                                        lineNumber: 2061,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, val.title, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2031,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2022,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2003,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "industries-served",
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '120px 0 80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            overflow: 'hidden',
                            pointerEvents: 'none',
                            zIndex: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '-850px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '2200px',
                                    height: '2200px',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(10,132,255,0.22)',
                                    boxShadow: '0 0 140px rgba(10,132,255,0.10)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2093,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '-650px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '1800px',
                                    height: '1800px',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(145,104,255,0.18)',
                                    boxShadow: '0 0 120px rgba(145,104,255,0.06)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '-450px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '1400px',
                                    height: '1400px',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 100px rgba(255,255,255,0.04)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '80px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '700px',
                                    height: '700px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(10,132,255,0.42) 0%, rgba(145,104,255,0.22) 34%, transparent 70%)',
                                    filter: 'blur(130px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2085,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '980px',
                            textAlign: 'center',
                            marginBottom: '60px',
                            position: 'relative',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(72px, 6vw, 96px)',
                                    fontWeight: 800,
                                    lineHeight: 1,
                                    margin: '24px 0 20px',
                                    color: '#ffffff',
                                    letterSpacing: '-0.04em'
                                },
                                children: [
                                    "Driving Growth Across",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: 'linear-gradient(90deg,#ffffff 0%, #78b9ff 40%, #0a84ff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        },
                                        children: "Every Industry"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2163,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(235, 239, 255, 0.78)',
                                    fontSize: '17px',
                                    fontFamily: '"Barlow", sans-serif',
                                    lineHeight: '28px',
                                    margin: 0
                                },
                                children: "We partner with businesses across diverse industries, delivering tailored digital marketing strategies that drive real results and sustainable growth."
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                            gap: '16px',
                            marginBottom: '46px',
                            position: 'relative',
                            zIndex: 1
                        },
                        children: industryCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                style: {
                                    position: 'relative',
                                    height: '245px',
                                    borderRadius: '14px',
                                    overflow: 'hidden',
                                    background: 'linear-gradient(180deg,#141428 0%, #10122b 50%, #070b1e 100%)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    boxShadow: '0 15px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04)',
                                    transition: 'all .4s ease',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(10,132,255,0.2)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 40px rgba(0,0,0,.35)';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: card.image,
                                        alt: card.title,
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.08,
                                            filter: 'brightness(.32) saturate(.75)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2216,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: -42,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 220,
                                            height: 120,
                                            background: 'radial-gradient(circle, rgba(10,132,255,.38), transparent 60%)',
                                            filter: 'blur(42px)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2226,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: `
      linear-gradient(
      180deg,
      rgba(8,12,34,.12) 0%,
      rgba(8,12,34,.75) 55%,
      rgba(7,11,30,.97) 100%
      )
    `
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            padding: '24px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '100%'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 54,
                                                            height: 54,
                                                            borderRadius: '50%',
                                                            background: 'linear-gradient(180deg, rgba(145,104,255,.14), rgba(10,132,255,.08))',
                                                            border: '1px solid rgba(145,104,255,.18)',
                                                            backdropFilter: 'blur(20px)',
                                                            display: 'grid',
                                                            placeItems: 'center'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: card.icon,
                                                            alt: "",
                                                            style: {
                                                                width: '20px',
                                                                height: '20px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 2273,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2263,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 46,
                                                            fontWeight: 700,
                                                            color: '#9168ff',
                                                            opacity: 0.9,
                                                            lineHeight: 1
                                                        },
                                                        children: card.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2278,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2258,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    flex: 1,
                                                    marginTop: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    color: '#ffffff',
                                                                    fontSize: '20px',
                                                                    fontWeight: 700,
                                                                    lineHeight: '26px',
                                                                    margin: 0
                                                                },
                                                                children: card.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2296,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: 'rgba(235,239,255,.72)',
                                                                    fontSize: '13px',
                                                                    lineHeight: '21px',
                                                                    margin: '12px 0 0'
                                                                },
                                                                children: card.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2305,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2295,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            placeItems: 'center',
                                                            width: '22px',
                                                            height: '22px',
                                                            borderRadius: '50%',
                                                            background: 'linear-gradient(135deg,#9168ff,#0a84ff)',
                                                            boxShadow: '0 0 20px rgba(145,104,255,.45)',
                                                            marginTop: '12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "10",
                                                            height: "10",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2 5H8M8 5L5 2M8 5L5 8",
                                                                stroke: "white",
                                                                strokeWidth: "1.4",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                                lineNumber: 2325,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                            lineNumber: 2324,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2314,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2288,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, card.number, true, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            height: '54px',
                            padding: '0 34px',
                            borderRadius: '999px',
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'linear-gradient(90deg,#0a84ff 0%, #9168ff 100%)',
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 0 40px rgba(145,104,255,0.25)',
                            fontFamily: '"Barlow", sans-serif',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                            position: 'relative',
                            zIndex: 1
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.boxShadow = '0 24px 60px rgba(10, 132, 255, 0.42)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.boxShadow = '0 20px 50px rgba(10, 132, 255, 0.28)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        },
                        children: [
                            "Explore How We Can Help Your Industry",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 8H13M13 8L9 4M13 8L9 12",
                                    stroke: "white",
                                    strokeWidth: "1.8",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 2364,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2363,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2335,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2075,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-pad",
                style: {
                    width: '100%',
                    maxWidth: '1440px',
                    padding: '150px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#070b1e',
                    border: '1px solid rgba(10, 132, 255, 0.08)',
                    borderRadius: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            fontSize: 'clamp(26px, 4vw, 36px)',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600,
                            textAlign: 'center',
                            marginBottom: '80px'
                        },
                        children: "Why We Started"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2381,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "story-wrapper",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '40px',
                            width: '100%',
                            padding: '0 80px',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "story-nav-btn",
                                style: {
                                    background: 'rgba(8, 12, 32, 1)',
                                    border: '1px solid rgba(10, 132, 255, 0.22)',
                                    borderRadius: '50%',
                                    width: '52px',
                                    height: '52px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/1aab2692-4b79-4ab5-b799-8ab4191e6bc6.svg",
                                    alt: "Prev",
                                    style: {
                                        width: '28px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 2412,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2400,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "story-items-row",
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    gap: '60px',
                                    position: 'relative',
                                    minWidth: 0
                                },
                                children: storyItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '40px',
                                            textAlign: 'center',
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '16px',
                                                    width: '100%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            height: '1px',
                                                            backgroundColor: item.highlight ? 'rgba(10, 132, 255, 0.24)' : 'rgba(38, 38, 38, 1)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2439,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/${item.imgId}`,
                                                        alt: "",
                                                        "aria-hidden": "true",
                                                        style: {
                                                            width: '44px',
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2444,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            height: '1px',
                                                            backgroundColor: item.highlight ? 'rgba(10, 132, 255, 0.24)' : 'rgba(38, 38, 38, 1)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2448,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2433,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'white',
                                                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                                                    fontFamily: '"Lexend", sans-serif',
                                                    lineHeight: '24px',
                                                    margin: 0
                                                },
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2454,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(10, 132, 255, 1)',
                                                    fontSize: '16px',
                                                    fontFamily: '"Lexend", sans-serif',
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "John Doe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2469,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2470,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Founder & CEO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                        lineNumber: 2471,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                                lineNumber: 2463,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.imgId, true, {
                                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                                        lineNumber: 2424,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2417,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "story-nav-btn",
                                style: {
                                    background: 'rgba(8, 12, 32, 1)',
                                    border: '1px solid rgba(10, 132, 255, 0.22)',
                                    borderRadius: '50%',
                                    width: '52px',
                                    height: '52px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/e31083d0-08ba-4134-ac3c-8d55de3b19a8.svg",
                                    alt: "Next",
                                    style: {
                                        width: '28px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/generated/LandingPage.tsx",
                                    lineNumber: 2488,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2476,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2392,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('About Us'),
                        className: "primary-btn",
                        style: {
                            marginTop: '50px',
                            width: '165px',
                            height: '42px',
                            backgroundColor: 'rgba(10, 132, 255, 1)',
                            border: 'none',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 700,
                            fontFamily: '"Barlow", sans-serif',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        },
                        children: "Learn More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2494,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2370,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about-us",
                className: "faq-section",
                style: {
                    width: '100%',
                    maxWidth: '798px',
                    padding: '100px 0 200px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '72px',
                    boxSizing: 'border-box'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            fontSize: 'clamp(24px, 4vw, 36px)',
                            fontFamily: '"Barlow", sans-serif',
                            fontWeight: 600,
                            textAlign: 'center',
                            margin: 0
                        },
                        children: "Frequently Asked Questions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2522,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        },
                        children: faqData.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                number: `0${idx + 1}`,
                                question: faq.question,
                                answer: faq.answer,
                                isOpen: activeFaq === idx,
                                onClick: ()=>setActiveFaq(activeFaq === idx ? null : idx)
                            }, faq.question, false, {
                                fileName: "[project]/src/components/generated/LandingPage.tsx",
                                lineNumber: 2538,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/generated/LandingPage.tsx",
                        lineNumber: 2533,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2513,
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
                lineNumber: 2543,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 1038,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HomeContent, "ClYhprQ4I8y/A0oDxqRoMrka4As=");
_c4 = HomeContent;
const LandingPage = ({ className, style })=>{
    _s2();
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
            overflowX: 'hidden',
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
        .hero-robot-jump {
          animation: robotJump 2.8s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .nav-item:hover { color: rgba(10, 132, 255, 1) !important; }
        .primary-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3); }
        .primary-btn:active { transform: translateY(0); }
        .service-card:hover { transform: translateY(-8px); background-color: rgba(30, 30, 30, 1) !important; }
        .value-circle:hover { border-color: rgba(10, 132, 255, 0.5) !important; transform: scale(1.02); }
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
                lineNumber: 2584,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                activePage: activePage,
                onNavigate: handleNavigate,
                scrolled: scrolled
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2658,
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
                lineNumber: 2661,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2668,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$ServicesPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesPage"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2669,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Portfolio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$PortfolioShowcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioShowcase"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2670,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'About Us' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2671,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0)),
            activePage === 'Careers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$generated$2f$CareerJobListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CareerJobListing"], {}, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2672,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                onNavigate: handleNavigate
            }, void 0, false, {
                fileName: "[project]/src/components/generated/LandingPage.tsx",
                lineNumber: 2674,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/generated/LandingPage.tsx",
        lineNumber: 2572,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(LandingPage, "dSNuCKgdAsFWRW4vLYpU5JpgxXM=");
_c5 = LandingPage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "Navbar");
__turbopack_context__.k.register(_c2, "Footer");
__turbopack_context__.k.register(_c3, "TrustSection");
__turbopack_context__.k.register(_c4, "HomeContent");
__turbopack_context__.k.register(_c5, "LandingPage");
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

//# sourceMappingURL=_15z7d4g._.js.map