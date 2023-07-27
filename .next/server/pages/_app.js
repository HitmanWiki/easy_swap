"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8081);
/* harmony import */ var _state_WindowSizeContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6104);
/* harmony import */ var _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2517);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__, _web3modal_react__WEBPACK_IMPORTED_MODULE_7__]);
([_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__, _web3modal_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Files and modules








const chainIds = Object.keys(_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5);
// Navigation link component
const NavLink = ({ name , href  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: href,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "jsx-9083d5d0413c4066" + " " + "link",
                    children: name
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9083d5d0413c4066",
                children: ".link.jsx-9083d5d0413c4066{font-size:1.1rem;color:var(--black);margin-left:48px}.link.jsx-9083d5d0413c4066:hover{text-decoration:underline}@media only screen and (max-width:1e3px),(max-height:900px){.link.jsx-9083d5d0413c4066{margin-left:32px}}@media only screen and (max-width:550px){.link.jsx-9083d5d0413c4066{margin-left:16px}}"
            })
        ]
    });
// Wallet manager component
const WalletManager = ()=>{
    // Wallet data
    const { enabled , chain , account , setChain  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP);
    const { width  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_state_WindowSizeContext_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: chainSelectActive , 1: setChainSelectActive  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    // Connect to MetaMask
    async function requestConnect() {
        if (!enabled) return;
        await ethereum.request({
            method: "eth_requestAccounts"
        });
    }
    // Switch wallet to chain ID
    async function requestSwitch(chainId) {
        setChainSelectActive(false);
        if (!enabled) {
            setChain(_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId]);
            return;
        }
        try {
            // Switch to chain
            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId
                    }
                ]
            });
        } catch  {
            // Add chain in wallet
            await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId,
                        chainName: _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].fullName,
                        nativeCurrency: {
                            name: _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].token,
                            symbol: _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].token,
                            decimals: 18
                        },
                        rpcUrls: [
                            _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].rpc
                        ],
                        blockExplorerUrls: [
                            _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].explorer
                        ]
                    }
                ]
            });
        }
    }
    // Detect click off chain select
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        function clickOff(event) {
            if (document.getElementById("chain-select") && !event.path.includes(document.getElementById("select-chain")) && !event.path.includes(document.getElementById("chain-select"))) {
                setChainSelectActive(false);
            }
        }
        document.documentElement.addEventListener("click", clickOff);
        return ()=>document.documentElement.removeEventListener("click", clickOff);
    }, []);
    // Component
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-d9c1e473c6ae3cf0" + " " + "wallet",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        id: "select-chain",
                        onClick: ()=>setChainSelectActive(!chainSelectActive),
                        className: "jsx-d9c1e473c6ae3cf0" + " " + "chain",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/chains/${chain.id}.svg`,
                                className: "jsx-d9c1e473c6ae3cf0" + " " + "chain-icon"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-d9c1e473c6ae3cf0" + " " + "chain-name",
                                children: chain.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: requestConnect,
                        className: "jsx-d9c1e473c6ae3cf0" + " " + "connect",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-d9c1e473c6ae3cf0" + " " + "connect-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/icons/metamask.svg",
                                    className: "jsx-d9c1e473c6ae3cf0" + " " + "connect-icon"
                                }),
                                width > 550 ? enabled ? account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Metamask Wallet" : "Enable Metamask" : enabled ? account ? `${account.slice(0, 6)}...` : "Connect" : "Enable"
                            ]
                        })
                    }),
                    chainSelectActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "chain-select",
                        className: "jsx-d9c1e473c6ae3cf0" + " " + "chain-select",
                        children: chainIds.slice(0, chainIds.indexOf(chain.id)).concat(chainIds.slice(chainIds.indexOf(chain.id) + 1)).map((chainId)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>requestSwitch(chainId),
                                className: "jsx-d9c1e473c6ae3cf0" + " " + "switch-chain",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `/chains/${chainId}.svg`,
                                        className: "jsx-d9c1e473c6ae3cf0" + " " + "switch-icon"
                                    }),
                                    _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_4__/* .chains */ .p5[chainId].name
                                ]
                            }, chainId))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3modal_react__WEBPACK_IMPORTED_MODULE_7__.Web3Button, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d9c1e473c6ae3cf0",
                children: ".wallet.jsx-d9c1e473c6ae3cf0{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;padding-right:8px}.chain.jsx-d9c1e473c6ae3cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;weight:42px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;font-size:1.1rem;border:1px solid var(--light-dark);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 36px;margin-right:16px}.chain.jsx-d9c1e473c6ae3cf0:hover{background-color:var(--light)}.chain.jsx-d9c1e473c6ae3cf0:hover .chain-name.jsx-d9c1e473c6ae3cf0{color:var(--base-black)}.chain-icon.jsx-d9c1e473c6ae3cf0{height:.9rem}.chain-select.jsx-d9c1e473c6ae3cf0{position:absolute;top:-webkit-calc(16px + 1.1rem + 16px);top:-moz-calc(16px + 1.1rem + 16px);top:calc(16px + 1.1rem + 16px);left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;z-index:2;border:1px solid var(--light-dark);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.switch-chain.jsx-d9c1e473c6ae3cf0{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--background);padding:8px 16px}.switch-chain.jsx-d9c1e473c6ae3cf0:first-child{-webkit-border-radius:8px 8px 0 0;-moz-border-radius:8px 8px 0 0;border-radius:8px 8px 0 0}.switch-chain.jsx-d9c1e473c6ae3cf0:last-child{-webkit-border-radius:0 0 8px 8px;-moz-border-radius:0 0 8px 8px;border-radius:0 0 8px 8px}.switch-chain.jsx-d9c1e473c6ae3cf0:hover{background-color:var(--light)}.switch-icon.jsx-d9c1e473c6ae3cf0{width:.7rem;height:.7rem;-o-object-fit:contain;object-fit:contain;margin-right:10px}.connect.jsx-d9c1e473c6ae3cf0{font-size:1.1rem;height:42px;weight:70;background-color:var(--light);border:1px solid var(--background);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:8px 36px}.connect.jsx-d9c1e473c6ae3cf0:hover{border:1px solid var(--light-dark)}.connect-content.jsx-d9c1e473c6ae3cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;color:var(--base-black)}.connect-icon.jsx-d9c1e473c6ae3cf0{height:1.2rem}@media only screen and (max-width:1e3px),(max-height:900px){.chain.jsx-d9c1e473c6ae3cf0{padding:6px 24px}.connect.jsx-d9c1e473c6ae3cf0{padding:6px 24px}}@media only screen and (max-width:800px),(max-height:800px){.chain.jsx-d9c1e473c6ae3cf0{gap:8px}.connect-content.jsx-d9c1e473c6ae3cf0{gap:8px}}@media only screen and (max-width:550px){.chain.jsx-d9c1e473c6ae3cf0{padding:8px;margin-left:8px}.connect.jsx-d9c1e473c6ae3cf0{padding:8px;margin-right:12px}.chain-icon.jsx-d9c1e473c6ae3cf0{width:.9rem;-o-object-fit:contain;object-fit:contain}.connect-icon.jsx-d9c1e473c6ae3cf0{width:.9rem;-o-object-fit:contain;object-fit:contain}.chain-name.jsx-d9c1e473c6ae3cf0{display:none}.connect.jsx-d9c1e473c6ae3cf0{padding:6px 16px;margin-right:-1px}}"
            })
        ]
    });
};
// Navigation bar component
const NavBar = ()=>{
    // Theme data
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    // Component
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "jsx-47f175f714b70bc" + " " + "nav",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "jsx-47f175f714b70bc" + " " + "header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: theme === "dark" ? "/logo.png" : "/logo.png",
                                    className: "jsx-47f175f714b70bc" + " " + "icon"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-47f175f714b70bc" + " " + "title",
                                    children: "Easy Swap"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                        name: "About",
                        href: "/about"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletManager, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "47f175f714b70bc",
                children: ".nav.jsx-47f175f714b70bc{width:100%;height:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0 max(-webkit-calc(50vw - 500px),20px);padding:0 max(-moz-calc(50vw - 500px),20px);padding:0 max(calc(50vw - 500px),20px)}.header.jsx-47f175f714b70bc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px}.icon.jsx-47f175f714b70bc{height:2.5rem}.title.jsx-47f175f714b70bc{font-size:1.1rem;font-weight:bold;margin-bottom:.5px}@media only screen and (max-width:1e3px),(max-height:900px){.nav.jsx-47f175f714b70bc{height:60px}}@media only screen and (max-height:900px){.title.jsx-47f175f714b70bc{margin-bottom:0}}@media only screen and (max-width:550px){.nav.jsx-47f175f714b70bc{padding:0 max(-webkit-calc(50vw - 155px),10px);padding:0 max(-moz-calc(50vw - 155px),10px);padding:0 max(calc(50vw - 155px),10px)}.icon.jsx-47f175f714b70bc{height:2.6rem}.title.jsx-47f175f714b70bc{display:none}}"
            })
        ]
    });
};
// Footer component
const Footer = ()=>{
    // Theme data
    const { theme , setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    // Switch page theme
    function switchTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    // Component
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-39dbfe5bf2c207ff " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ed6b2c4705118b07",
                        [
                            theme === "dark" ? "invert(1)" : "none"
                        ]
                    ]
                ]) + " " + "footer",
                children: [
                    "Change Theme",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: switchTheme,
                        className: "jsx-39dbfe5bf2c207ff " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "ed6b2c4705118b07",
                                [
                                    theme === "dark" ? "invert(1)" : "none"
                                ]
                            ]
                        ]) + " " + "switch-theme",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: theme === "dark" ? "/icons/moon.svg" : "/icons/sun.svg",
                            className: "jsx-39dbfe5bf2c207ff " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "ed6b2c4705118b07",
                                    [
                                        theme === "dark" ? "invert(1)" : "none"
                                    ]
                                ]
                            ]) + " " + "theme-icon"
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "39dbfe5bf2c207ff",
                children: ".footer.jsx-39dbfe5bf2c207ff{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:.9rem;padding:0 max(-webkit-calc(50vw - 500px),20px);padding:0 max(-moz-calc(50vw - 500px),20px);padding:0 max(calc(50vw - 500px),20px)}.switch-theme.jsx-39dbfe5bf2c207ff{width:32px;height:32px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--light);border:1px solid var(--background);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-left:24px}.switch-theme.jsx-39dbfe5bf2c207ff:hover{border:1px solid var(--light-dark)}.theme-icon.jsx-39dbfe5bf2c207ff{height:16px}.links.jsx-39dbfe5bf2c207ff{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:24px;margin-left:auto}.link.jsx-39dbfe5bf2c207ff{height:20px}@media only screen and (max-width:1e3px),(max-height:900px){.footer.jsx-39dbfe5bf2c207ff{height:40px}.switch-theme.jsx-39dbfe5bf2c207ff{width:28px;height:28px;margin-left:16px}.theme-icon.jsx-39dbfe5bf2c207ff{height:14px}.links.jsx-39dbfe5bf2c207ff{gap:16px}.link.jsx-39dbfe5bf2c207ff{height:15px}}@media only screen and (max-width:550px){.switch-theme.jsx-39dbfe5bf2c207ff{width:24px;height:24px;margin-left:12px}.theme-icon.jsx-39dbfe5bf2c207ff{height:12px}.footer.jsx-39dbfe5bf2c207ff{padding:0 max(-webkit-calc(50vw - 145px),10px);padding:0 max(-moz-calc(50vw - 145px),10px);padding:0 max(calc(50vw - 145px),10px)}}"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ed6b2c4705118b07",
                dynamic: [
                    theme === "dark" ? "invert(1)" : "none"
                ],
                children: `.link.__jsx-style-dynamic-selector{-webkit-filter:${theme === "dark" ? "invert(1)" : "none"};filter:${theme === "dark" ? "invert(1)" : "none"}}`
            })
        ]
    });
};
// Layout component
const Layout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavBar, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-7c2b73507b5ad87f" + " " + "content",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7c2b73507b5ad87f",
                children: ".content.jsx-7c2b73507b5ad87f{width:100%;padding:0 max(-webkit-calc(50vw - 500px),20px);padding:0 max(-moz-calc(50vw - 500px),20px);padding:0 max(calc(50vw - 500px),20px)}@media only screen and (max-width:550px){.content.jsx-7c2b73507b5ad87f{padding:0 max(-webkit-calc(50vw - 155px),10px);padding:0 max(-moz-calc(50vw - 155px),10px);padding:0 max(calc(50vw - 155px),10px)}}"
            })
        ]
    });
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7267);
/* harmony import */ var _state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8081);
/* harmony import */ var _state_WindowSizeContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6104);
/* harmony import */ var _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2517);
/* harmony import */ var _state_PriceContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5921);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6703);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9867);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_2__, _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_5__, _state_PriceContext_js__WEBPACK_IMPORTED_MODULE_6__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__, _web3modal_react__WEBPACK_IMPORTED_MODULE_11__, wagmi__WEBPACK_IMPORTED_MODULE_12__, wagmi_chains__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_2__, _state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_5__, _state_PriceContext_js__WEBPACK_IMPORTED_MODULE_6__, _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__, _web3modal_react__WEBPACK_IMPORTED_MODULE_11__, wagmi__WEBPACK_IMPORTED_MODULE_12__, wagmi_chains__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Files and modules














const chains = [
    wagmi_chains__WEBPACK_IMPORTED_MODULE_13__.arbitrum,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_13__.mainnet,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_13__.polygon
];
const projectId = "9f1004e719cc812fc74d8c310d3fe8a2";
const { publicClient  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_12__.configureChains)(chains, [
    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__.w3mProvider)({
        projectId
    })
]);
const wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_12__.createConfig)({
    autoConnect: true,
    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__.w3mConnectors)({
        projectId,
        chains
    }),
    publicClient
});
const ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_10__.EthereumClient(wagmiConfig, chains);
// Site metadata
const Metadata = ({ page  })=>{
    const title = `Crypto Coin${page ? ` - ${page}` : ""}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "A privacy-centered DEX aggregator, bringing you a fast, lightweight swap experience with the best rates on Ethereum, Polygon, Fantom, Avalanche, and BNB Chain"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "CryptoSwap.is"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "/ecoswap.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: "A privacy-centered DEX aggregator, bringing you a fast, lightweight swap experience with the best rates on Ethereum, Polygon, Fantom, Avalanche, and BNB Chain"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/logo.png"
            })
        ]
    });
};
// Site content
const App = ({ Component , pageProps  })=>{
    // Page data
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    if (pageProps.statusCode) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_8___default()), {
            statusCode: pageProps.statusCode
        });
    }
    // Component
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Metadata, {
                page: pageProps.page
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_WindowSizeContext_js__WEBPACK_IMPORTED_MODULE_4__/* .WindowSizeContextProvider */ .m, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_EthereumContext_js__WEBPACK_IMPORTED_MODULE_5__/* .EthereumContextProvider */ .G, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_PriceContext_js__WEBPACK_IMPORTED_MODULE_6__/* .PriceContextProvider */ ._, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_12__.WagmiConfig, {
                            config: wagmiConfig,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps,
                                    className: "jsx-3d56e9aaebc9c6bc " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "3e723eb02f8c3b3c",
                                            [
                                                theme === "dark" ? "#36393E" : "#E6E9EE"
                                            ]
                                        ],
                                        [
                                            "b8bfe96b675d4bd6",
                                            [
                                                theme === "light" ? "#FFFFFF" : "#16191E",
                                                theme === "light" ? "#F8FBFF" : "#191B1F",
                                                theme === "light" ? "#C8EBCB" : "#6DCC75",
                                                theme === "light" ? "#ECF8ED" : "#B6E5BA",
                                                theme === "light" ? "#16191E" : "#E6E9EE",
                                                theme === "light" ? "#56595E" : "#C6C9CE",
                                                theme === "light" ? "#96999E" : "#A6A9AE",
                                                theme === "light" ? "#C6C9CE" : "#76797E"
                                            ]
                                        ]
                                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3modal_react__WEBPACK_IMPORTED_MODULE_11__.Web3Modal, {
                projectId: projectId,
                ethereumClient: ethereumClient
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b8bfe96b675d4bd6",
                dynamic: [
                    theme === "light" ? "#FFFFFF" : "#16191E",
                    theme === "light" ? "#F8FBFF" : "#191B1F",
                    theme === "light" ? "#C8EBCB" : "#6DCC75",
                    theme === "light" ? "#ECF8ED" : "#B6E5BA",
                    theme === "light" ? "#16191E" : "#E6E9EE",
                    theme === "light" ? "#56595E" : "#C6C9CE",
                    theme === "light" ? "#96999E" : "#A6A9AE",
                    theme === "light" ? "#C6C9CE" : "#76797E"
                ],
                children: `:root{--background:${theme === "light" ? "#FFFFFF" : "#16191E"};--input-background:${theme === "light" ? "#F8FBFF" : "#191B1F"};--light-dark:${theme === "light" ? "#C8EBCB" : "#6DCC75"};--light:${theme === "light" ? "#ECF8ED" : "#B6E5BA"};--base-black:#16191E;--black:${theme === "light" ? "#16191E" : "#E6E9EE"};--dark-gray:${theme === "light" ? "#56595E" : "#C6C9CE"};--gray:${theme === "light" ? "#96999E" : "#A6A9AE"};--light-gray:${theme === "light" ? "#C6C9CE" : "#76797E"}}`
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3d56e9aaebc9c6bc",
                children: '*{font-family:"Gilroy";color:var(--black);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{background-color:var(--background);margin:0}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-thumb{background-color:#96999e}@media only screen and (max-width:1e3px),(max-height:900px){html{font-size:14px}}@media only screen and (max-width:800px),(max-height:800px){html{font-size:12px}}'
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3e723eb02f8c3b3c",
                dynamic: [
                    theme === "dark" ? "#36393E" : "#E6E9EE"
                ],
                children: `::-webkit-scrollbar-track{background-color:${theme === "dark" ? "#36393E" : "#E6E9EE"}}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                children: `
                ::-webkit-scrollbar-thumb:hover {
                    background-color: #76797E;
                }
            `
            })
        ]
    });
};
// Theme wrapper
const ThemedApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_ThemeContext_js__WEBPACK_IMPORTED_MODULE_3__/* .ThemeContextProvider */ .z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                    Component: Component,
                    pageProps: pageProps
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b364e306b535ee41",
                children: '@font-face{font-family:"Gilroy";src:url("/fonts/Gilroy-Medium.woff2")format(url("woff2"));src:url("/fonts/Gilroy-Medium.woff2")format("woff2")}h1{font-size:initial;margin:0}h2{font-size:initial;margin:0}p{margin:0}a{color:initial;text-decoration:initial;cursor:pointer}button{cursor:pointer;background-color:transparent;border:none;padding:0}'
            })
        ]
    });
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemedApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 6703:
/***/ ((module) => {

module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ 9867:
/***/ ((module) => {

module.exports = import("@web3modal/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 7697:
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,332], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();