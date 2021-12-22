# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 1.0.0 (2021-12-22)


### Code Refactoring

* **core:** update wallet-adapter base and wallets ([#69](https://github.com/andresmgsl/platform/issues/69)) ([525774f](https://github.com/andresmgsl/platform/commit/525774f245ef130f736b10ae96c3a52b66ffe650))


### Features

* **app:** create ng-anchor library and use it in bulldozer client ([#40](https://github.com/andresmgsl/platform/issues/40)) ([9c3ef20](https://github.com/andresmgsl/platform/commit/9c3ef203ad091093808049a7a3ca12385c5cac4c))
* **app:** finish migration from demolabs ([#8](https://github.com/andresmgsl/platform/issues/8)) ([c35c187](https://github.com/andresmgsl/platform/commit/c35c1879c2570fb946118458436e24fb304af415))
* **app:** generate rust code based on the metadata provided ([#18](https://github.com/andresmgsl/platform/issues/18)) ([f7fb494](https://github.com/andresmgsl/platform/commit/f7fb49491bb4ec2d98a4f123f3f45d033d1fec99))
* **bulldozer:** use max instead of manually select unsigned size ([#66](https://github.com/andresmgsl/platform/issues/66)) ([f91b1db](https://github.com/andresmgsl/platform/commit/f91b1db1ff99d0559d4043f556371ff455cb3a14))
* **client:** hook up wallets ([#4](https://github.com/andresmgsl/platform/issues/4)) ([79dfb6c](https://github.com/andresmgsl/platform/commit/79dfb6c4e3a16f70202488960636217bdf203611))
* **client:** set up client app scaffold ([#2](https://github.com/andresmgsl/platform/issues/2)) ([2e95b37](https://github.com/andresmgsl/platform/commit/2e95b3722ec363b39e57918e4b6641cc68eacf1e))
* **github-actions:** added github actions to test Bulldozer platform ([02336a9](https://github.com/andresmgsl/platform/commit/02336a9ca254e97a63297597e91b8ca7b9dfc3f7))
* **style:** dark mode added ([#14](https://github.com/andresmgsl/platform/issues/14)) ([0c97a84](https://github.com/andresmgsl/platform/commit/0c97a84591199594206ee78553dbb1a47e2e0a0f))
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
