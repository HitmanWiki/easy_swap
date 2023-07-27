exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./0x1.json": 197,
	"./0x38.json": 9578,
	"./0x89.json": 7627,
	"./0xa4b1.json": 1574,
	"./0xa86a.json": 3543,
	"./0xfa.json": 7808
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 683;

/***/ }),

/***/ 2517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": () => (/* binding */ BN),
/* harmony export */   "G": () => (/* binding */ EthereumContextProvider),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p5": () => (/* binding */ chains),
/* harmony export */   "rV": () => (/* binding */ web3)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_chains_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3088);
/* harmony import */ var _abis_ERC20_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2320);
/* harmony import */ var _useTokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4672);
/* harmony import */ var _useSwap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7205);
/* harmony import */ var _useSwapSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3921);
/* harmony import */ var _useGasPrice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7759);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGasPrice_js__WEBPACK_IMPORTED_MODULE_6__]);
_useGasPrice_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Files and modules









// Load Ethereum data
const web3 = new (web3__WEBPACK_IMPORTED_MODULE_8___default())();
const BN = (n)=>new web3.utils.BN(n);
const chains = {};
for(const id in _data_chains_json__WEBPACK_IMPORTED_MODULE_1__){
    chains[id] = {
        id,
        ..._data_chains_json__WEBPACK_IMPORTED_MODULE_1__[id],
        web3: new (web3__WEBPACK_IMPORTED_MODULE_8___default())(_data_chains_json__WEBPACK_IMPORTED_MODULE_1__[id].rpc)
    };
}
const EthereumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)({});
// Ethereum context provider
const EthereumContextProvider = ({ children  })=>{
    // Default Ethereum application state
    const swapSettings = (0,_useSwapSettings_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    for(const id in chains){
        // Initialize token list
        const [tokens, setTokens] = (0,_useTokens_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(id);
        chains[id].tokens = tokens;
        chains[id].setTokens = setTokens;
        // Initialize token balances to 0
        const balances = {};
        for (const token of chains[id].tokens){
            balances[token.address] = BN(0);
        }
        const { 0: tokenBalances , 1: setTokenBalances  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(balances);
        chains[id].tokenBalances = tokenBalances;
        chains[id].setTokenBalances = setTokenBalances;
        // Initialize swap state
        chains[id].swap = (0,_useSwap_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(chains[id]);
        chains[id].swapSettings = swapSettings;
    }
    const { 0: enabled , 1: setEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false) // non-responsive
    ;
    const { 0: chain , 1: setChain  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(chains["0x1"]);
    const { 0: account , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    for(const id1 in chains){
        chains[id1].gasPrice = (0,_useGasPrice_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(id1, chain);
    }
    // Update active account
    async function updateAccount() {
        if (typeof ethereum === "undefined") return;
        const account = (await ethereum.request({
            method: "eth_accounts"
        }))[0];
        setAccount(web3.utils.toChecksumAddress(account));
    }
    // Update active chain
    async function updateChain() {
        if (typeof ethereum !== "undefined") {
            const chainId = await ethereum.request({
                method: "eth_chainId"
            });
            if (chains[chainId]) {
                setChain(chains[chainId]);
            }
        }
    }
    // Update all client side data
    function updateEthereumState() {
        setEnabled(typeof ethereum !== "undefined");
        updateAccount();
        updateChain();
    }
    // Update token balances
    async function updateBalances() {
        // Token balance data
        if (!account) return;
        const balances = {};
        const tokens = Object.keys(chain.tokenBalances);
        // Run batch request
        const batch = new chain.web3.BatchRequest();
        const requests = [];
        const Token = new web3.eth.Contract(_abis_ERC20_json__WEBPACK_IMPORTED_MODULE_2__);
        const calldata = Token.methods.balanceOf(account).encodeABI();
        for (const token of tokens){
            requests.push(new Promise((resolve)=>{
                // Request callback
                const tokenAddress = token;
                const callback = (error, result)=>{
                    if (error) {
                        console.error(error);
                        balances[tokenAddress] = BN(0);
                    } else {
                        balances[tokenAddress] = web3.utils.toBN(result);
                    }
                    resolve();
                };
                // Add request to batch
                if (tokenAddress === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
                    batch.add(web3.eth.getBalance.request(account, callback));
                } else {
                    batch.add(web3.eth.call.request({
                        to: tokenAddress,
                        data: calldata
                    }, callback));
                }
            }));
        }
        batch.execute();
        await Promise.all(requests);
        // Update state
        if (Object.keys(chain.tokenBalances).every((token)=>balances[token]) && Object.keys(balances).every((token)=>chain.tokenBalances[token])) {
            chain.setTokenBalances(balances);
        } else {
            updateBalances();
        }
    }
    // Update client side data on loop
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        updateEthereumState();
        setTimeout(updateEthereumState, 500);
        setTimeout(updateEthereumState, 1000);
        const interval = setInterval(updateEthereumState, 3000);
        return ()=>clearInterval(interval);
    }, []);
    // Set MetaMask listeners
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (typeof ethereum !== "undefined") {
            ethereum.on("accountsChanged", updateAccount);
            ethereum.on("chainChanged", updateChain);
        }
        return ()=>{
            if (typeof ethereum !== "undefined") {
                ethereum.removeListener("accountsChanged", updateAccount);
                ethereum.removeListener("chainChanged", updateChain);
            }
        };
    }, []);
    // Update token balances on token changes
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        // Reset token balances
        const balances = {
            ...chain.tokenBalances
        };
        for (const token of chain.tokens){
            if (!balances[token.address]) {
                balances[token.address] = BN(0);
            }
        }
        // Delete removed tokens
        for(const address in balances){
            if (!chain.tokens.find((token)=>address === token.address)) {
                delete balances[address];
            }
        }
        chain.setTokenBalances(balances);
    }, [
        chain.tokens
    ]);
    // Update token balances on loop
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        // Update balances on loop
        const chainId = chain.id;
        updateBalances();
        const interval = setInterval(updateBalances, 2000);
        // Reset token balances for chain
        return ()=>{
            clearInterval(interval);
            const balances = {};
            for(const token in chains[chainId].tokenBalances){
                balances[token] = BN(0);
            }
            chains[chainId].setTokenBalances(balances);
        };
    }, [
        chain,
        account
    ]);
    // Component
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EthereumContext.Provider, {
        value: {
            enabled,
            chain,
            account,
            setEnabled,
            setChain,
            setAccount
        },
        children: children
    });
};
// Exports

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EthereumContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ PriceContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Files and modules



// Token price context
const PriceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
// Token price context provider
const PriceContextProvider = ({ children  })=>{
    // Token price state
    const { 0: prices , 1: setPrices  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    // Update token prices on interval
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        updatePrices();
        const interval = setInterval(async ()=>{
            try {
                await updatePrices();
            } catch (error) {
                console.error(error);
            }
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    // Update token prices
    async function updatePrices() {
        // Fetch quotes from Binance
        const prices = {};
        const markets = (await (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])("https://api.binance.com/api/v3/ticker/price")).data;
        for (const market of markets){
            if (market.symbol.endsWith("USDT")) {
                const token = market.symbol.slice(0, -4);
                prices[token] = +market.price;
                // Wrapped token price
                if ([
                    "ETH",
                    "MATIC",
                    "FTM",
                    "AVAX",
                    "BNB"
                ].includes(token)) {
                    prices[`W${token}`] = +market.price;
                }
                // Avalanche wrapped token price
                if ([
                    "ETH",
                    "USDC",
                    "DAI",
                    "USDT",
                    "BTC"
                ].includes(token)) {
                    if ([
                        "ETH",
                        "BTC"
                    ].includes(token)) {
                        prices[`W${token}.e`] = +market.price;
                    } else {
                        prices[`${token}.e`] = +market.price;
                    }
                }
                // BSC token price
                if (token === "BTC") {
                    prices["BTCB"] = +market.price;
                }
            }
        }
        // Additional token prices
        prices["USDT"] = 1;
        prices["fUSDT"] = 1;
        prices["USDT.e"] = 1;
        prices["MIM"] = 1;
        setPrices(prices);
    }
    // Component
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PriceContext.Provider, {
        value: prices,
        children: children
    });
};
// Exports

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Files and modules


// Theme context
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    theme: "light",
    setTheme: ()=>{}
});
// Theme context provider
const ThemeContextProvider = ({ children  })=>{
    // Theme state data
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    // Load theme from local storage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!localStorage.theme) {
            localStorage.theme = theme;
        } else {
            setTheme(localStorage.theme);
        }
    }, []);
    // Update local storage on theme changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.theme = theme;
    }, [
        theme
    ]);
    // Component
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
};
// Exports

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);


/***/ }),

/***/ 6104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "m": () => (/* binding */ WindowSizeContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Files and modules


// Window size context
const WindowSizeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    width: 1600,
    height: 900
});
// Window size context provider
const WindowSizeContextProvider = ({ children  })=>{
    // Window size state data
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);
    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1000);
    // Update window size
    function updateWindowSize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    // Update window size on resize
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateWindowSize();
        window.addEventListener("resize", updateWindowSize);
        return ()=>window.removeEventListener("resize", updateWindowSize);
    }, []);
    // Component
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WindowSizeContext.Provider, {
        value: {
            width,
            height
        },
        children: children
    });
};
// Exports

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowSizeContext);


/***/ }),

/***/ 7759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2517);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Files and modules



// Chain gas price hook
function useGasPrice(chainId, chain) {
    // Gas state data
    const { 0: slow , 1: setSlow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: normal , 1: setNormal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: fast , 1: setFast  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: priorityFee , 1: setPriorityFee  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        slow: 0,
        default: 0,
        fast: 0
    });
    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    const gasPrice = {
        slow,
        default: normal,
        fast,
        priorityFee,
        getPriorityFee,
        getGasParameters
    };
    // Update gas prices
    async function updateGas() {
        try {
            if (chainId === "0xa4b1") {
                setSlow(0.1);
                setNormal(0.1);
                setFast(0.1);
                setPriorityFee({
                    slow: 0,
                    default: 0,
                    fast: 1
                });
                return;
            }
            const key = chain.api.keys[Math.floor(Math.random() * chain.api.keys.length)];
            const data = (await (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])(`${chain.api.endpoint}/api?module=gastracker&action=gasoracle&apikey=${key}`)).data.result;
            const slow = Math.floor(+data.SafeGasPrice * 100) / 100;
            const normal = Math.round(+data.ProposeGasPrice * 100) / 100;
            const fast = Math.ceil(+data.FastGasPrice * 100) / 100;
            if (isNaN(slow) || isNaN(normal) || isNaN(fast)) return;
            setSlow(slow);
            setNormal(normal);
            setFast(fast);
            if (chainId === "0x1") {
                setPriorityFee({
                    slow: 1,
                    default: 2,
                    fast: fast > 200 ? 6 : 4
                });
            } else if (chainId === "0x89") {
                setPriorityFee({
                    slow: Math.min(slow > 30 ? 10 : 2, slow),
                    default: Math.min(normal > 35 ? 20 : 4, normal),
                    fast: fast
                });
            } else if (chainId === "0xfa") {
                setPriorityFee({
                    slow: Math.min(slow > 1000 ? 100 : 20, slow),
                    default: Math.min(normal > 1000 ? 200 : 50, normal),
                    fast: fast
                });
            } else if (chainId === "0xa86a") {
                setPriorityFee({
                    slow: 10 ** -6,
                    default: 10 ** -6,
                    fast: Math.min(fast > 100 ? 15 : 5, fast)
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
    // Calculate priority fee
    function getPriorityFee(gas) {
        if (typeof gas !== "number") {
            return priorityFee[gas];
        }
        if (gas <= slow) {
            return priorityFee.slow;
        } else if (gas <= normal) {
            return priorityFee.default;
        } else {
            return priorityFee.fast;
        }
    }
    // Calculate gas parameters
    function getGasParameters(gas) {
        if (gas === "default") return {};
        if ([
            "0x1",
            "0xfa",
            "0x89",
            "0xa86a",
            "0xa4b1"
        ].includes(chainId)) {
            return {
                type: "2",
                maxFeePerGas: "0x" + (0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)((gasPrice[gas] || gas) * 10 ** 6).mul((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(10).pow((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(3))).toString(16),
                maxPriorityFeePerGas: "0x" + (0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(getPriorityFee(gas) * 10 ** 6).mul((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(10).pow((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(3))).toString(16)
            };
        } else {
            return {
                type: "1",
                gasPrice: "0x" + (0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)((gasPrice[gas] || gas) * 10 ** 6).mul((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(10).pow((0,_EthereumContext_js__WEBPACK_IMPORTED_MODULE_0__.BN)(3))).toString(16)
            };
        }
    }
    // Update gas price fetch loop on chain changes
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (chain.id === chainId) {
            updateGas();
        } else if (!initialized.current) {
            initialized.current = true;
            updateGas();
        }
        const interval = setInterval(updateGas, chain.id === chainId ? 5000 : 20000);
        return ()=>clearInterval(interval);
    }, [
        chain
    ]);
    // Gas data
    return gasPrice;
}
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGasPrice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_routers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Files and modules


// Swap data hook
function useSwap(chain) {
    // Swap state data
    const { 0: tokenIn , 1: setTokenIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: tokenInAmount , 1: setTokenInAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: tokenOut , 1: setTokenOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: tokenOutAmount , 1: setTokenOutAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: routers , 1: setRouters  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_routers_json__WEBPACK_IMPORTED_MODULE_0__);
    // Default swap store
    function getDefault() {
        return {
            tokenIn: chain.tokens.find((token)=>token.symbol === chain.token),
            tokenOut: null
        };
    }
    // Get swap tokens from local storage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Initialize swap store
        if (!localStorage.swapStore) {
            localStorage.swapStore = JSON.stringify({
                [chain.id]: getDefault()
            });
        } else {
            try {
                const store = JSON.parse(localStorage.swapStore);
                if (!store[chain.id]) {
                    store[chain.id] = getDefault();
                    localStorage.swapStore = JSON.stringify(store);
                }
            } catch  {
                localStorage.swapStore = JSON.stringify({
                    [chain.id]: getDefault()
                });
            }
        }
        // Initialize swap data
        const store1 = JSON.parse(localStorage.swapStore)[chain.id];
        setTokenIn(store1.tokenIn);
        setTokenOut(store1.tokenOut);
    }, []);
    // Update local storage on token changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const tokenInStore = !tokenIn || tokenIn.external && !tokenIn.added ? null : tokenIn;
        const tokenOutStore = !tokenOut || tokenOut.external && !tokenOut.added ? null : tokenOut;
        if (!localStorage.swapStore) {
            localStorage.swapStore = JSON.stringify({
                [chain.id]: {
                    tokenIn: tokenInStore,
                    tokenOut: tokenOutStore
                }
            });
        } else {
            try {
                const store = JSON.parse(localStorage.swapStore);
                store[chain.id] = {
                    tokenIn: tokenInStore,
                    tokenOut: tokenOutStore
                };
                localStorage.swapStore = JSON.stringify(store);
            } catch  {
                localStorage.swapStore = JSON.stringify({
                    [chain.id]: {
                        tokenIn: tokenInStore,
                        tokenOut: tokenOutStore
                    }
                });
            }
        }
    }, [
        tokenIn,
        tokenOut
    ]);
    // Swap data
    return {
        tokenIn,
        setTokenIn,
        tokenInAmount,
        setTokenInAmount,
        tokenOut,
        setTokenOut,
        tokenOutAmount,
        setTokenOutAmount,
        routers,
        setRouters
    };
}
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwap);


/***/ }),

/***/ 3921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_chains_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3088);
/* harmony import */ var _data_routers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// Files and modules



// Load initial state
const initialGas = {};
for(const id in _data_chains_json__WEBPACK_IMPORTED_MODULE_0__){
    initialGas[id] = "default";
}
const initialRouters = {};
for (const router of _data_routers_json__WEBPACK_IMPORTED_MODULE_1__){
    initialRouters[router.id] = {
        name: router.name,
        enabled: true
    };
}
// Swap settings hook
function useSwapSettings() {
    // Swap settings state data
    const { 0: slippage , 1: setSlippage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0.5);
    const { 0: gas , 1: setGas  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialGas);
    const { 0: routers , 1: setRouters  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialRouters);
    const { 0: referral , 1: setReferral  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    // Get swap settings from local storage
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!localStorage.swapSettings) {
            localStorage.swapSettings = JSON.stringify({
                slippage: 0.5,
                gas: initialGas,
                routers: initialRouters,
                referral: null
            });
        } else {
            try {
                const settings = JSON.parse(localStorage.swapSettings);
                if (!isNaN(+settings.slippage) && +settings.slippage > 0 && +settings.slippage < 50) {
                    setSlippage(+settings.slippage);
                } else {
                    settings.slippage = 0.5;
                }
                if (Object.keys(settings.gas).length === Object.keys(initialGas).length) {
                    setGas(settings.gas);
                } else {
                    settings.gas = initialGas;
                }
                if (Object.keys(settings.routers).every((router)=>initialRouters[router])) {
                    setRouters(settings.routers);
                } else {
                    settings.routers = initialRouters;
                }
                setReferral(settings.referral);
                localStorage.swapSettings = JSON.stringify(settings);
            } catch  {
                localStorage.swapSettings = JSON.stringify({
                    slippage: 0.5,
                    gas: initialGas,
                    routers: initialRouters,
                    referral: null
                });
            }
        }
    }, []);
    // Update local storage on settings change
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        localStorage.swapSettings = JSON.stringify({
            slippage,
            gas,
            routers,
            referral
        });
    }, [
        slippage,
        gas,
        routers,
        referral
    ]);
    // Settings data
    return {
        slippage,
        setSlippage,
        gas,
        setGas,
        routers,
        setRouters,
        referral,
        setReferral
    };
}
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSwapSettings);


/***/ }),

/***/ 4672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_chains_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3088);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// Files and modules


// Load token lists
const tokenLists = {};
for(const id in _data_chains_json__WEBPACK_IMPORTED_MODULE_0__){
    tokenLists[id] = __webpack_require__(683)(`./${id}.json`);
    for (const token of tokenLists[id]){
        token.default = true;
    }
}
// Chain tokens hook
function useTokens(chainId) {
    // Tokens state data
    const { 0: tokens , 1: setTokens  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tokenLists[chainId]);
    // Get external tokens from local storage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Initialize external token store
        if (!localStorage.externalTokens) {
            localStorage.externalTokens = JSON.stringify({
                [chainId]: []
            });
        } else {
            try {
                const savedTokens = JSON.parse(localStorage.externalTokens);
                if (!savedTokens[chainId]) {
                    savedTokens[chainId] = [];
                    localStorage.externalTokens = JSON.stringify(savedTokens);
                }
            } catch  {
                localStorage.externalTokens = JSON.stringify([]);
            }
        }
        // Load external tokens
        const externalTokens = JSON.parse(localStorage.externalTokens);
        externalTokens[chainId] = externalTokens[chainId].filter((external)=>!tokens.find((token)=>token.address === external.address));
        setTokens([
            ...tokens,
            ...externalTokens[chainId]
        ]);
        localStorage.externalTokens = JSON.stringify(externalTokens);
    }, []);
    // Update local storage on token changes excluding initial render
    const render = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (render.current) {
            render.current = false;
            return;
        }
        const externalTokens = tokens.filter((token)=>token.external && token.added);
        if (!localStorage.externalTokens) {
            localStorage.externalTokens = JSON.stringify({
                [chainId]: externalTokens
            });
        } else {
            try {
                const savedTokens = JSON.parse(localStorage.externalTokens);
                savedTokens[chainId] = externalTokens;
                localStorage.externalTokens = JSON.stringify(savedTokens);
            } catch  {
                localStorage.externalTokens = JSON.stringify({
                    [chainId]: externalTokens
                });
            }
        }
    }, [
        tokens
    ]);
    // Token data
    return [
        tokens,
        setTokens
    ];
}
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTokens);


/***/ }),

/***/ 2320:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ }),

/***/ 3088:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"0x1":{"name":"Ethereum","fullName":"Ethereum","token":"ETH","WETH":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","rpc":"https://rpc.ankr.com/eth","explorer":"https://etherscan.io","api":{"endpoint":"https://api.etherscan.io","keys":["8Z5ND5ZBTKG83WGQG4WI5PXR1S776726X8","MSUS7ZCDVKX5K3U3PY9H9I3EMKYT6MIABW","T1N65JHDCQY6KM366BXCH5JFR7RXXM7D3F"]}},"0x89":{"name":"Polygon","fullName":"Polygon Network","token":"MATIC","WETH":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","rpc":"https://polygon-rpc.com","explorer":"https://polygonscan.com","api":{"endpoint":"https://api.polygonscan.com","keys":["VFQYRVAXGPGWXIISIKS91W69R5W5251IHI","D3DJ4HIPGHRS9PK4VSTWNIX5TZMDMBH8AQ","F5CF6UHHRUTECAI4HUDUKX77N685WECJ5N"]}},"0xfa":{"name":"Fantom","fullName":"Fantom Network","token":"FTM","WETH":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83","rpc":"https://rpc.ftm.tools","explorer":"https://ftmscan.com","api":{"endpoint":"https://api.ftmscan.com","keys":["RCZ2PE9XSREXDHN5KGK3MBZP9PH36SWZQ3","JBDGVIGPEBVC1WDMWHXRP8BQ771DIMGVMX","FE1HJDEA3FFG9ANDIJXQM73BADD1RFZIUB"]}},"0xa86a":{"name":"Avalanche","fullName":"Avalanche Network","token":"AVAX","WETH":"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7","rpc":"https://api.avax.network/ext/bc/C/rpc","explorer":"https://snowtrace.io","api":{"endpoint":"https://api.snowtrace.io","keys":["1V1X9IXZI6EPMNEVGGPXDA4WR9Y7XJFG8E","QYF85YTP3CGPHAPKF1Y1PHWQBUPXKESQNT","48RMUB46W83E8HGKIJT2A83RXB9V4PKR2P"]}},"0x38":{"name":"BNB Chain","fullName":"BNB Chain","token":"BNB","WETH":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","rpc":"https://bsc-dataseed.binance.org","explorer":"https://bscscan.com","api":{"endpoint":"https://api.bscscan.com","keys":["16YNPYJREQAI4XTBHHBFJGSRZJX4GJK3UP","1SNVJDGBFD5YUAW6J7P2NIE7P52G9W48QE","V1NKYYZ92DM1QM9BZEDS1GDF7FB12J9V9F"]}},"0xa4b1":{"name":"Arbitrum","fullName":"Arbitrum One","token":"ETH","WETH":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1","rpc":"https://arb1.arbitrum.io/rpc","explorer":"https://arbiscan.io","api":{"endpoint":"https://api.arbiscan.io","keys":["PBB22ASDNYEHC419FNS2XYGTGM5B5B82PP","RBFN8N5ND2MN79PXUQXRGQWIJF5G8CQDTP","B9UIXZ32ATW75FCS19T1W79WGB8YRMM7UJ"]}}}');

/***/ }),

/***/ 1845:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"1inch","name":"1inch"}]');

/***/ }),

/***/ 197:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Ethereum","symbol":"ETH","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"name":"Cryptocoin","symbol":"CryptoCoin","address":"0xb8f5ede5892b093011a36bd3acaebdeeccfef86c","decimals":18},{"name":"MONG","symbol":"MONGCOIN","address":"0x1ce270557c1f68cfb577b856766310bf8b47fd9c","decimals":18},{"name":"TOTEMHEADS","symbol":"TOTEM","address":"0xdf5d1a5c764a024c47ecb14b08a3a355d5723685","decimals":18},{"name":"Cash Mongy","symbol":"CMON","address":"0x9a9558107cbf4204d8b09121502f3f53968aa6c8","decimals":18},{"name":"Ming Mong","symbol":"MING","address":"0xd67508233a9f6432748b895655f7df90ccd17976","decimals":18},{"name":"Mong Burn","symbol":"MONGB","address":"0xeb514fc800e051a6ba1caa0df789624ee35d908f","decimals":18},{"name":"Congress coin","symbol":"CONG","address":"0xc0bb399cee28b6901dd2da3f2f59daf52c8e07f6","decimals":18},{"name":"Wrapped Ether","symbol":"WETH","address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","decimals":18},{"name":"USD Coin","symbol":"USDC","address":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","decimals":6},{"name":"MechX","symbol":"Mechx","address":"0x816fce1cc93473b2d54bd8c0dae4cae911f6dd41","decimals":18},{"name":"Nuggets","symbol":"NUG","address":"0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1","decimals":18},{"name":"MixToEarn","symbol":"MTE","address":"0x159cdaf78be31e730d9e1330adfcfbb79a5fdb95","decimals":18},{"name":"DogPad","symbol":"DOGPAD","address":"0x6f3277ad0782a7da3eb676b85a8346a100bf9c1c","decimals":18},{"name":"jim","symbol":"jim","address":"0xd807f7e2818db8eda0d28b5be74866338eaedb86","decimals":18},{"name":"Manifold Finance","symbol":"FOLD","address":"0xd084944d3c05cd115c09d072b9f44ba3e0e45921","decimals":18},{"name":"EverMoon","symbol":"EVERMOON","address":"0x4ad434b8cdc3aa5ac97932d6bd18b5d313ab0f6f","decimals":18},{"name":"Shita-Kiri Suzume","symbol":"SUZUME","address":"0x0b452278223d3954f4ac050949d7998e373e7e43","decimals":18},{"name":"4CHAN","symbol":"4CHAN","address":"0xe0a458bf4acf353cb45e211281a334bb1d837885","decimals":18},{"name":"ZOOMER","symbol":"ZOOMER","address":"0x0d505c03d30e65f6e9b4ef88855a47a89e4b7676","decimals":18},{"name":"BOBO","symbol":"BOBO","address":"0xb90b2a35c65dbc466b04240097ca756ad2005295","decimals":18},{"name":"PEEPA","symbol":"PEEPA","address":"0x88417754ff7062c10f4e3a4ab7e9f9d9cbda6023","decimals":18},{"name":"Dai Stablecoin","symbol":"DAI","address":"0x6B175474E89094C44Da98b954EedeAC495271d0F","decimals":18},{"name":"Tether USD","symbol":"USDT","address":"0xdAC17F958D2ee523a2206206994597C13D831ec7","decimals":6},{"name":"PEPE","symbol":"Pepe","address":"0x6982508145454ce325ddbe47a25d4ec3d2311933","decimals":18},{"name":"FLOKI","symbol":"Floki","address":"0xcf0c122c6b73ff809c693db761e7baebe62b6a2e","decimals":9},{"name":"Shiba Inu","symbol":"SHIB","address":"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce","decimals":18},{"name":"BOB","symbol":"BOB","address":"0x7d8146cf21e8d7cbe46054e01588207b51198729","decimals":18},{"name":"JASMY","symbol":"JASMY","address":"0x7420b4b9a0110cdc71fb720908340c03f9bc03ec","decimals":18},{"name":"PEPE2.0","symbol":"PEPE2.0","address":"0xfb66321d7c674995dfcc2cb67a30bc978dc862ad","decimals":18},{"name":"DOGE2.0","symbol":"DOGE2.0","address":"0xf2ec4a773ef90c58d98ea734c0ebdb538519b988","decimals":18},{"name":"Wrapped BTC","symbol":"WBTC","address":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","decimals":8}]');

/***/ }),

/***/ 9578:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Binance Coin","symbol":"BNB","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"symbol":"DEXT","name":"DEXT","address":"0xe91a8d2c584ca93c7405f15c22cdfe53c29896e3","decimals":18},{"symbol":"SFM","name":"SafeMoonV2","address":"0x42981d0bfbaf196529376ee702f2a9eb9092fcb5","decimals":18},{"symbol":"NOOT","name":"NOOT","address":"0x98a2500a2c3b8877b0ed5ac3acc300c50bf7064b","decimals":18},{"symbol":"BABYDOGE","name":"BABYDOGE ","address":"0xc748673057861a797275cd8a068abb95a902e8de","decimals":18},{"symbol":"USDT","name":"Tether USD","address":"0xdac17f958d2ee523a2206206994597c13d831ec7","decimals":6},{"symbol":"WETH","name":"Wrapped Eth","address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","decimals":18},{"name":"Wrapped BNB","symbol":"WBNB","address":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","decimals":18},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170Ed0880ac9A755fd29B2688956BD959F933F8","decimals":18},{"name":"USD Coin","symbol":"USDC","address":"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d","decimals":18},{"name":"Dai Token","symbol":"DAI","address":"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3","decimals":18},{"name":"Binance-Peg BSC-USD","symbol":"BSC-USD","address":"0x55d398326f99059fF775485246999027B3197955","decimals":18},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","decimals":18},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c","decimals":18}]');

/***/ }),

/***/ 7627:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Polygon","symbol":"MATIC","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"name":"Wrapped Matic","symbol":"WMATIC","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","decimals":18},{"name":"Wrapped Ether","symbol":"WETH","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","decimals":18},{"name":"USD Coin (PoS)","symbol":"USDC","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","decimals":6},{"name":"(PoS) Dai Stablecoin","symbol":"DAI","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","decimals":18},{"name":"(PoS) Tether USD","symbol":"USDT","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","decimals":6},{"name":"Atlantis","symbol":"ATLX","address":"0x912ce59144191c1204e64559fe8253a0e49e6548","decimals":18},{"name":"Prosper","symbol":"PROS","address":"0x6109cb051c5c64093830121ed76272ab04bbdd7c","decimals":18},{"name":"Quickswap","symbol":"QUICK","address":"0x831753dd7087cac61ab5644b308642cc1c33dc13","decimals":18},{"name":"BOB","symbol":"BOB","address":"0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b","decimals":18},{"name":"LAND","symbol":"LAND","address":"0x3139f9ad73317fe23036c63b15b00806c6bebfcd","decimals":18},{"name":"Polinate (PoS)","symbol":"POLI","address":"0x6fb54ffe60386ac33b722be13d2549dd87bf63af","decimals":18},{"name":"Pearl","symbol":"PEARL","address":"0x7238390d5f6f64e67c3211c343a410e2a3dec142","decimals":18},{"name":"Nakamoto.Games","symbol":"NAKA","address":"0x311434160d7537be358930def317afb606c0d737","decimals":18},{"name":"Yellow Duckies","symbol":"DUCKIES","address":"0x18e73a5333984549484348a94f4d219f4fab7b81","decimals":18},{"name":"World$tateCoin","symbol":"W$C","address":"0x77a6f2e9a9e44fd5d5c3f9be9e52831fc1c3c0a0","decimals":18},{"name":"(PoS) Wrapped BTC","symbol":"WBTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","decimals":8}]');

/***/ }),

/***/ 1574:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Arbitrium","symbol":"ARB","address":"0x912ce59144191c1204e64559fe8253a0e49e6548","decimals":18},{"name":"AiDOGE","symbol":"AiDOGE","address":"0x09e18590e8f76b6cf471b3cd75fe1a1a9d2b2c2b","decimals":18},{"name":"AiCODE","symbol":"AiCODE","address":"0x7c8a1a80fdd00c9cccd6ebd573e9ecb49bfa2a59","decimals":18},{"name":"Ethereum","symbol":"ETH","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"name":"Wrapped Ether","symbol":"WETH","address":"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1","decimals":18},{"name":"USD Coin (Arb1)","symbol":"USDC","address":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","decimals":6},{"name":"Dai Stablecoin","symbol":"DAI","address":"0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1","decimals":18},{"name":"Tether USD","symbol":"USDT","address":"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9","decimals":6},{"name":"Wrapped BTC","symbol":"WBTC","address":"0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f","decimals":8}]');

/***/ }),

/***/ 3543:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Avalanche","symbol":"AVAX","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"name":"Wrapped AVAX","symbol":"WAVAX","address":"0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7","decimals":18},{"name":"Wrapped Ether","symbol":"WETH.e","address":"0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB","decimals":18},{"name":"USD Coin","symbol":"USDC.e","address":"0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664","decimals":6},{"name":"USD Coin","symbol":"USDC","address":"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E","decimals":6},{"name":"Dai Stablecoin","symbol":"DAI.e","address":"0xd586E7F844cEa2F87f50152665BCbc2C279D8d70","decimals":18},{"name":"Tether USD","symbol":"USDT.e","address":"0xc7198437980c041c805A1EDcbA50c1Ce5db95118","decimals":6},{"name":"TetherToken","symbol":"USDt","address":"0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7","decimals":6},{"name":"Wrapped BTC","symbol":"WBTC.e","address":"0x50b7545627a5162F82A992c33b87aDc75187B218","decimals":8},{"name":"Magic Internet Money","symbol":"MIM","address":"0x130966628846BFd36ff31a822705796e8cb8C18D","decimals":18},{"name":"ChoccyCoin","symbol":"CCY","address":"0xb723783e0f9015c8e20b87f6cf7ae24df6479e62","decimals":18},{"name":"OpenBlox Token","symbol":"OBX","address":"0xccf719c44e2c36e919335692e89d22cf13d6aaeb","decimals":18},{"name":"METAG","symbol":"METAG","address":"0x2b0b320b47d8e0dd0e4477cf90c307c7ed984ad2","decimals":18},{"name":"SoliSnek","symbol":"SNEK","address":"0xeeee99b35eb6af5e7d76dd846dbe4bcc0c60ca1d","decimals":18},{"name":"DegenX","symbol":"DGNX","address":"0x51e48670098173025c477d9aa3f0eff7bf9f7812","decimals":18},{"name":"MetaBrands","symbol":"MAGE","address":"0x921f99719eb6c01b4b8f0ba7973a7c24891e740a","decimals":18},{"name":"TIME","symbol":"TIME","address":"0xb54f16fb19478766a268f172c9480f8da1a7c9c3","decimals":18},{"name":"JoeToken","symbol":"JOE","address":"0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd","decimals":18}]');

/***/ }),

/***/ 7808:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Fantom","symbol":"FTM","address":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals":18},{"name":"Wrapped Fantom","symbol":"WFTM","address":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83","decimals":18},{"name":"Ethereum","symbol":"ETH","address":"0x74b23882a30290451A17c44f4F05243b6b58C76d","decimals":18},{"name":"USD Coin","symbol":"USDC","address":"0x04068DA6C83AFCFA0e13ba15A6696662335D5B75","decimals":6},{"name":"Dai Stablecoin","symbol":"DAI","address":"0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E","decimals":18},{"name":"Frapped USDT","symbol":"fUSDT","address":"0x049d68029688eAbF473097a2fC38ef61633A3C7A","decimals":6},{"name":"Bitcoin","symbol":"BTC","address":"0x321162Cd933E2Be498Cd2267a90534A804051b11","decimals":8},{"name":"Magic Internet Money","symbol":"MIM","address":"0x82f0B8B456c1A451378467398982d4834b6829c1","decimals":18},{"name":"Geist.Finance Protocol Token","symbol":"GEIST","address":"0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d","decimals":18}]');

/***/ })

};
;