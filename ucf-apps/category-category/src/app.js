/**
 * 整个应用的入口，包含路由，数据管理加载
 */
import  "babel-polyfill"
import React  from "react";
import AppContainer from './container';
//import '@babel/polyfill';
import mirror, { render,Router,Route } from "mirrorx";

//import Routes from './components';
import "./app.less";


const MiddlewareConfig = [];


mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});

//render(<Router><Routes /></Router>, document.querySelector("#app"));
 render(<Router><Route><AppContainer/></Route></Router>, document.querySelector("#app"));

