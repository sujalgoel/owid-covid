<h1 align="center">Our World in Data - CoronaVirus</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/owid-covid" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/owid-covid.svg?style=flat-square">
  </a>
  <a href="https://github.com/sujalgoel/owid-covid/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL-3.0" src="https://img.shields.io/github/license/sujalgoel/owid-covid?style=flat-square" />
  </a>
</p>

## What is this package?

> This package can return the data related to **covid-19** from **https://ourworldindata.org/**

## Install the package 📥

```sh
npm install owid-covid
```

## Example ✏️

<details>
<summary>getStats example</summary>

```js
const covid19 = require("owid-covid");

covid19.getStats("IND").then((data) => {
  console.log(data);
});
```

</details>

<details>
<summary>getVaccineStats example</summary>

```js
const covid19 = require("owid-covid");

covid19.getVaccineStats("IND").then((data) => {
  console.log(data);
});
```

</details>

<details>
<summary>getLatestStats example</summary>

```js
const covid19 = require("owid-covid");

covid19.getLatestStats("IND").then((data) => {
  console.log(data);
});
```

</details>

## Contributing 🤝

- **Contributions, issues and feature requests are welcome!**
- **Feel free to check <a id="href" href="https://github.com/sujalgoel/owid-covid/issues" target="_blank">issues page</a>.**

## Author 💖

#### **Copyright © 2021 Sujal Goel** 👤

- **Github:** [@Sujal Goel](https://github.com/sujalgoel)
- **Website:** [@Sujal Goel](https://sujalgoel.ml)
