![Logo](public/logo.svg)

# **DativeJs - A Micro JavaScript Ui Framework**


![Version](https://img.shields.io/github/v/release/dativeJs/dativejs)
![size](https://img.shields.io/github/size/dativeJs/dativejs/dist/dative.min.js.svg)
![Downloads](https://img.shields.io/jsdelivr/gh/hm/dativeJs/dativejs)

### Installation
### Download
```html 
<script src="path/to/dative.min.js"></script>
```
### CDN
```html
<!--Development-->
<script src="https://cdn.jsdelivr.net/npm/dativejs@2.0.0/dist/dative.js"></script>
<!--Production-->
<script src="https://cdn.jsdelivr.net/npm/dativejs@2.0.0/dist/dative.min.js"></script>
```
## Clone The Template
```bash
 git clone https://github.com/dativeJs/dative-template.git
```

## Npm

```bash
 npm install dativejs
```

## EsModule
```js
import Dative from "https://cdn.jsdelivr.net/npm/dativejs@2.0.0/dist/dative.es.min.js";
```
## Get Started

```html
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/dativejs@2.0.0/dist/dative.min.js"></script>
  <script>
    // Code goes here
  </script>
</body>
```

```html
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/dativejs@2.0.0/dist/dative.min.js"></script>
  <script>
    var vm = new Dative({
      el: "#app",
      data:{
        msg: "Hello World"
      },
      template(){
        return `
          <h1 dv-text="msg"></h1>
        `;
      }
    });
    vm.render()
  </script>
  </body>
```
