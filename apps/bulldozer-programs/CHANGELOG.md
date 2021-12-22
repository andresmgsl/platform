# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 1.0.0 (2021-12-22)


### Bug Fixes

* **core:** update vector sizes ([#13](https://github.com/andresmgsl/platform/issues/13)) ([1161867](https://github.com/andresmgsl/platform/commit/1161867a31cb2a389699b7d6ad9a6a7d8e09a37b))


### Code Refactoring

* **core:** update wallet-adapter base and wallets ([#69](https://github.com/andresmgsl/platform/issues/69)) ([525774f](https://github.com/andresmgsl/platform/commit/525774f245ef130f736b10ae96c3a52b66ffe650))


### Features

* **app:** create ng-anchor library and use it in bulldozer client ([#40](https://github.com/andresmgsl/platform/issues/40)) ([9c3ef20](https://github.com/andresmgsl/platform/commit/9c3ef203ad091093808049a7a3ca12385c5cac4c))
* **app:** finish migration from demolabs ([#8](https://github.com/andresmgsl/platform/issues/8)) ([c35c187](https://github.com/andresmgsl/platform/commit/c35c1879c2570fb946118458436e24fb304af415))
* **bulldozer:** use max instead of manually select unsigned size ([#66](https://github.com/andresmgsl/platform/issues/66)) ([f91b1db](https://github.com/andresmgsl/platform/commit/f91b1db1ff99d0559d4043f556371ff455cb3a14))
* **core:** allow users to download the whole application as rust code ([#37](https://github.com/andresmgsl/platform/issues/37)) ([e356a80](https://github.com/andresmgsl/platform/commit/e356a8045351650362d8913b4cc491341d77f522))
* **core:** handle instruction body ([#33](https://github.com/andresmgsl/platform/issues/33)) ([059e5cc](https://github.com/andresmgsl/platform/commit/059e5cce7262132f33b502db9dbc19846a9c6e5c))
* **core:** manage has_one contraint ([#38](https://github.com/andresmgsl/platform/issues/38)) ([7ca4f40](https://github.com/andresmgsl/platform/commit/7ca4f4022d235d6c8fd944f638b9abc084bddd45))


### BREAKING CHANGES

* **core:** WalletConfig interface changed, now you need to loadWallets onInit

* feat(core): handle network and endpoint in connection store

* fix(wallet-adapter): handle window unload event

* refactor(wallet-adapter): use destructuring for selectors

* chore(core): bump wallet-adapter versions

* fix(wallet-adapter): check window is valid before handling unload

* chore(deps): bump angular

* chore(wallet-adapter): update library

* chore(core): run nx migrate

* chore(ts): allow syntethic default for solana-wallet-base

* chore(wallet-adapter): bump version

* refactor(wallet-adapter): rename loadWallets as setWallets

* chore(bulldozer-client): fix linting issues due to package versions

* style(wallet-adapter): remove unneeded breakline

* refactor(wallet-adapter): endpoint shouldn't have a default value

* test(bulldozer-programs): use the right program id
