# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 1.0.0 (2021-12-22)


### Code Refactoring

* **core:** update wallet-adapter base and wallets ([#69](https://github.com/andresmgsl/platform/issues/69)) ([525774f](https://github.com/andresmgsl/platform/commit/525774f245ef130f736b10ae96c3a52b66ffe650))


### Features

* **app:** create ng-anchor library and use it in bulldozer client ([#40](https://github.com/andresmgsl/platform/issues/40)) ([9c3ef20](https://github.com/andresmgsl/platform/commit/9c3ef203ad091093808049a7a3ca12385c5cac4c))
* **wallet-adapter:** create wallet-adapter library ([#64](https://github.com/andresmgsl/platform/issues/64)) ([2ee24bf](https://github.com/andresmgsl/platform/commit/2ee24bf853e64cbc7063c2b287f45279f7910ddc))


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
