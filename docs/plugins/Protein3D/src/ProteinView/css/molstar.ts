/* manually downloaded from https://molstar.org/viewer/ */
export default `
.msp-plugin {
  font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, 'Source Sans Pro', Arial,
    sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0; /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
  background: #eeece7;
}
.msp-plugin * {
  box-sizing: border-box;
}
.msp-plugin [hidden],
.msp-plugin template {
  display: none;
}
.msp-plugin a {
  background-color: rgba(0, 0, 0, 0);
}
.msp-plugin a:active,
.msp-plugin a:hover {
  outline: 0;
}
.msp-plugin abbr[title] {
  border-bottom: 1px dotted;
}
.msp-plugin b,
.msp-plugin strong {
  font-weight: bold;
}
.msp-plugin small {
  font-size: 80%;
}
.msp-plugin img {
  border: 0;
}
.msp-plugin svg:not(:root) {
  overflow: hidden;
}
.msp-plugin button,
.msp-plugin input,
.msp-plugin optgroup,
.msp-plugin select,
.msp-plugin textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.msp-plugin button {
  overflow: visible;
}
.msp-plugin button,
.msp-plugin select {
  text-transform: none;
}
.msp-plugin button,
.msp-plugin html input[type='button'],
.msp-plugin input[type='reset'],
.msp-plugin input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}
.msp-plugin button[disabled],
.msp-plugin html input[disabled] {
  cursor: default;
}
.msp-plugin button::-moz-focus-inner,
.msp-plugin input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.msp-plugin input {
  line-height: normal;
}
.msp-plugin input[type='checkbox'],
.msp-plugin input[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
.msp-plugin input[type='number']::-webkit-inner-spin-button,
.msp-plugin input[type='number']::-webkit-outer-spin-button {
  height: auto;
}
.msp-plugin textarea {
  overflow: auto;
}
.msp-plugin .msp-layout-expanded,
.msp-plugin .msp-layout-standard {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.msp-plugin .msp-layout-standard {
  border: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-region {
  overflow: hidden;
}
.msp-plugin .msp-layout-static,
.msp-plugin .msp-layout-scrollable {
  position: absolute;
}
.msp-plugin .msp-scrollable {
  overflow-y: auto;
}
.msp-plugin .msp-scrollable-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}
.msp-plugin .msp-layout-static {
  overflow: hidden;
}
.msp-plugin .msp-layout-top .msp-layout-static,
.msp-plugin .msp-layout-main .msp-layout-static,
.msp-plugin .msp-layout-bottom .msp-layout-static {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.msp-plugin .msp-layout-right .msp-layout-static {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.msp-plugin .msp-layout-right .msp-layout-scrollable {
  left: 0;
  right: 0;
  top: 43px;
  bottom: 0;
}
.msp-plugin .msp-layout-left .msp-layout-static {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.msp-plugin .msp-layout-standard-outside {
  position: absolute;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-main {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-top {
  position: absolute;
  right: 0;
  height: 97px;
  top: -97px;
  width: 50%;
  border-left: 1px solid #cec9ba;
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 97px;
  top: -97px;
  width: 50%;
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-right {
  position: absolute;
  width: 50%;
  right: 0;
  bottom: -295px;
  height: 295px;
  border-left: 1px solid #cec9ba;
  border-top: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-left {
  position: absolute;
  width: 50%;
  left: 0;
  bottom: 0;
  bottom: -295px;
  height: 295px;
  border-top: 1px solid #cec9ba;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-right
  .msp-layout-right {
  display: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-right
  .msp-layout-left {
  width: 100%;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-left
  .msp-layout-left {
  display: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-left
  .msp-layout-right {
  width: 100%;
  border-left: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-collapse-left
  .msp-layout-left {
  width: 32px;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-collapse-left
  .msp-layout-right {
  left: 32px;
  width: auto;
}
.msp-plugin .msp-layout-standard-outside .msp-layout-hide-top .msp-layout-top {
  display: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-top
  .msp-layout-bottom {
  width: 100%;
  border-left: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-bottom
  .msp-layout-bottom {
  display: none;
}
.msp-plugin
  .msp-layout-standard-outside
  .msp-layout-hide-bottom
  .msp-layout-top {
  width: 100%;
  border-left: none;
}
.msp-plugin .msp-layout-standard-landscape {
  position: absolute;
}
.msp-plugin .msp-layout-standard-landscape .msp-layout-main {
  position: absolute;
  left: 330px;
  right: 300px;
  bottom: 70px;
  top: 100px;
}
.msp-plugin .msp-layout-standard-landscape .msp-layout-top {
  position: absolute;
  left: 330px;
  right: 300px;
  height: 100px;
  top: 0;
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-landscape .msp-layout-bottom {
  position: absolute;
  left: 330px;
  right: 300px;
  height: 70px;
  bottom: 0;
  border-top: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-landscape .msp-layout-right {
  position: absolute;
  width: 300px;
  right: 0;
  bottom: 0;
  top: 0;
  border-left: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-landscape .msp-layout-left {
  position: absolute;
  width: 330px;
  left: 0;
  bottom: 0;
  top: 0;
  border-right: 1px solid #cec9ba;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-right
  .msp-layout-right {
  display: none;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-right
  .msp-layout-main,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-right
  .msp-layout-top,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-right
  .msp-layout-bottom {
  right: 0;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-left
  .msp-layout-left {
  display: none;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-left
  .msp-layout-main,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-left
  .msp-layout-top,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-left
  .msp-layout-bottom {
  left: 0;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-collapse-left
  .msp-layout-left {
  width: 32px;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-collapse-left
  .msp-layout-main,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-collapse-left
  .msp-layout-top,
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-collapse-left
  .msp-layout-bottom {
  left: 32px;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-bottom
  .msp-layout-bottom {
  display: none;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-bottom
  .msp-layout-main {
  bottom: 0;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-top
  .msp-layout-top {
  display: none;
}
.msp-plugin
  .msp-layout-standard-landscape
  .msp-layout-hide-top
  .msp-layout-main {
  top: 0;
}
.msp-plugin .msp-layout-standard-portrait {
  position: absolute;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-main {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 361px;
  top: 97px;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-top {
  position: absolute;
  right: 0;
  height: 97px;
  top: 0;
  width: 50%;
  border-left: 1px solid #cec9ba;
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 97px;
  width: 50%;
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-right {
  position: absolute;
  width: 50%;
  right: 0;
  bottom: 0;
  height: 361px;
  border-left: 1px solid #cec9ba;
  border-top: 1px solid #cec9ba;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-left {
  position: absolute;
  width: 50%;
  left: 0;
  bottom: 0;
  height: 361px;
  border-top: 1px solid #cec9ba;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-right
  .msp-layout-right {
  display: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-right
  .msp-layout-left {
  width: 100%;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-left
  .msp-layout-left {
  display: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-left
  .msp-layout-right {
  width: 100%;
  border-left: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-right.msp-layout-hide-left
  .msp-layout-main {
  bottom: 0;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-collapse-left
  .msp-layout-left {
  width: 32px;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-collapse-left
  .msp-layout-right {
  left: 32px;
  width: auto;
}
.msp-plugin .msp-layout-standard-portrait .msp-layout-hide-top .msp-layout-top {
  display: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-top
  .msp-layout-bottom {
  width: 100%;
  border-left: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-bottom
  .msp-layout-bottom {
  display: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-bottom
  .msp-layout-top {
  width: 100%;
  border-left: none;
}
.msp-plugin
  .msp-layout-standard-portrait
  .msp-layout-hide-top.msp-layout-hide-bottom
  .msp-layout-main {
  top: 0;
}
.msp-plugin .msp-layout-standard-reactive {
  position: absolute;
}
@media (orientation: landscape), (min-width: 1000px) {
  .msp-plugin .msp-layout-standard-reactive .msp-layout-main {
    position: absolute;
    left: 330px;
    right: 300px;
    bottom: 70px;
    top: 100px;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-top {
    position: absolute;
    left: 330px;
    right: 300px;
    height: 100px;
    top: 0;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-bottom {
    position: absolute;
    left: 330px;
    right: 300px;
    height: 70px;
    bottom: 0;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-right {
    position: absolute;
    width: 300px;
    right: 0;
    bottom: 0;
    top: 0;
    border-left: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-left {
    position: absolute;
    width: 330px;
    left: 0;
    bottom: 0;
    top: 0;
    border-right: 1px solid #cec9ba;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-right {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-main,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-top,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-bottom {
    right: 0;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-left {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-main,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-top,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-bottom {
    left: 0;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-left {
    width: 32px;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-main,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-top,
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-bottom {
    left: 32px;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-bottom
    .msp-layout-bottom {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-bottom
    .msp-layout-main {
    bottom: 0;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-top
    .msp-layout-top {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-top
    .msp-layout-main {
    top: 0;
  }
}
@media (orientation: portrait) and (max-width: 1000px) {
  .msp-plugin .msp-layout-standard-reactive .msp-layout-main {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 361px;
    top: 97px;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-top {
    position: absolute;
    right: 0;
    height: 97px;
    top: 0;
    width: 50%;
    border-left: 1px solid #cec9ba;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 97px;
    width: 50%;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-right {
    position: absolute;
    width: 50%;
    right: 0;
    bottom: 0;
    height: 361px;
    border-left: 1px solid #cec9ba;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-standard-reactive .msp-layout-left {
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    height: 361px;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-right {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right
    .msp-layout-left {
    width: 100%;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-left {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-left
    .msp-layout-right {
    width: 100%;
    border-left: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-right.msp-layout-hide-left
    .msp-layout-main {
    bottom: 0;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-left {
    width: 32px;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-collapse-left
    .msp-layout-right {
    left: 32px;
    width: auto;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-top
    .msp-layout-top {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-top
    .msp-layout-bottom {
    width: 100%;
    border-left: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-bottom
    .msp-layout-bottom {
    display: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-bottom
    .msp-layout-top {
    width: 100%;
    border-left: none;
  }
  .msp-plugin
    .msp-layout-standard-reactive
    .msp-layout-hide-top.msp-layout-hide-bottom
    .msp-layout-main {
    top: 0;
  }
}
.msp-plugin .msp-layout-expanded {
  position: fixed;
}
@media (orientation: landscape) {
  .msp-plugin .msp-layout-expanded .msp-layout-main {
    position: absolute;
    left: 330px;
    right: 300px;
    bottom: 70px;
    top: 100px;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-top {
    position: absolute;
    left: 330px;
    right: 300px;
    height: 100px;
    top: 0;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-bottom {
    position: absolute;
    left: 330px;
    right: 300px;
    height: 70px;
    bottom: 0;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-right {
    position: absolute;
    width: 300px;
    right: 0;
    bottom: 0;
    top: 0;
    border-left: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-left {
    position: absolute;
    width: 330px;
    left: 0;
    bottom: 0;
    top: 0;
    border-right: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-right {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-main,
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-top,
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-bottom {
    right: 0;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-left {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-main,
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-top,
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-bottom {
    left: 0;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-collapse-left .msp-layout-left {
    width: 32px;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-collapse-left .msp-layout-main,
  .msp-plugin .msp-layout-expanded .msp-layout-collapse-left .msp-layout-top,
  .msp-plugin
    .msp-layout-expanded
    .msp-layout-collapse-left
    .msp-layout-bottom {
    left: 32px;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-bottom .msp-layout-bottom {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-bottom .msp-layout-main {
    bottom: 0;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-top .msp-layout-top {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-top .msp-layout-main {
    top: 0;
  }
}
@media (orientation: portrait) {
  .msp-plugin .msp-layout-expanded .msp-layout-main {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 361px;
    top: 97px;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-top {
    position: absolute;
    right: 0;
    height: 97px;
    top: 0;
    width: 50%;
    border-left: 1px solid #cec9ba;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 97px;
    width: 50%;
    border-bottom: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-right {
    position: absolute;
    width: 50%;
    right: 0;
    bottom: 0;
    height: 361px;
    border-left: 1px solid #cec9ba;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-left {
    position: absolute;
    width: 50%;
    left: 0;
    bottom: 0;
    height: 361px;
    border-top: 1px solid #cec9ba;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-right {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-right .msp-layout-left {
    width: 100%;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-left {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-left .msp-layout-right {
    width: 100%;
    border-left: none;
  }
  .msp-plugin
    .msp-layout-expanded
    .msp-layout-hide-right.msp-layout-hide-left
    .msp-layout-main {
    bottom: 0;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-collapse-left .msp-layout-left {
    width: 32px;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-collapse-left .msp-layout-right {
    left: 32px;
    width: auto;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-top .msp-layout-top {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-top .msp-layout-bottom {
    width: 100%;
    border-left: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-bottom .msp-layout-bottom {
    display: none;
  }
  .msp-plugin .msp-layout-expanded .msp-layout-hide-bottom .msp-layout-top {
    width: 100%;
    border-left: none;
  }
  .msp-plugin
    .msp-layout-expanded
    .msp-layout-hide-top.msp-layout-hide-bottom
    .msp-layout-main {
    top: 0;
  }
}
.msp-plugin ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.msp-plugin ::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #e9e6e0;
}
.msp-plugin ::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #f1f0eb;
}
.msp-plugin .msp-form-control,
.msp-plugin .msp-control-row select,
.msp-plugin .msp-control-row button,
.msp-plugin .msp-control-row input[type='text'],
.msp-plugin .msp-btn {
  display: block;
  width: 100%;
  background: #f3f2ee;
  border: none;
  padding: 0 10px;
  line-height: 30px;
  height: 32px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-image: none;
}
.msp-plugin .msp-form-control::-moz-placeholder,
.msp-plugin .msp-control-row select::-moz-placeholder,
.msp-plugin .msp-control-row button::-moz-placeholder,
.msp-plugin .msp-control-row input[type='text']::-moz-placeholder,
.msp-plugin .msp-btn::-moz-placeholder {
  color: #9c835f;
  opacity: 1;
}
.msp-plugin .msp-form-control:-ms-input-placeholder,
.msp-plugin .msp-control-row select:-ms-input-placeholder,
.msp-plugin .msp-control-row button:-ms-input-placeholder,
.msp-plugin .msp-control-row input[type='text']:-ms-input-placeholder,
.msp-plugin .msp-btn:-ms-input-placeholder {
  color: #9c835f;
}
.msp-plugin .msp-form-control::-webkit-input-placeholder,
.msp-plugin .msp-control-row select::-webkit-input-placeholder,
.msp-plugin .msp-control-row button::-webkit-input-placeholder,
.msp-plugin .msp-control-row input[type='text']::-webkit-input-placeholder,
.msp-plugin .msp-btn::-webkit-input-placeholder {
  color: #9c835f;
}
.msp-plugin .msp-form-control:hover,
.msp-plugin .msp-control-row select:hover,
.msp-plugin .msp-control-row button:hover,
.msp-plugin .msp-control-row input[type='text']:hover,
.msp-plugin .msp-btn:hover {
  color: #ae5d04;
  background-color: #e9e6e0;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-form-control:active,
.msp-plugin .msp-control-row select:active,
.msp-plugin .msp-control-row button:active,
.msp-plugin .msp-control-row input[type='text']:active,
.msp-plugin .msp-btn:active,
.msp-plugin .msp-form-control:focus,
.msp-plugin .msp-control-row select:focus,
.msp-plugin .msp-control-row button:focus,
.msp-plugin .msp-control-row input[type='text']:focus,
.msp-plugin .msp-btn:focus {
  color: #332b1f;
  background-color: #f3f2ee;
  border: none;
  outline-offset: 0;
  outline: none;
}
.msp-plugin .msp-form-control[disabled],
.msp-plugin .msp-control-row select[disabled],
.msp-plugin .msp-control-row button[disabled],
.msp-plugin .msp-control-row input[disabled][type='text'],
.msp-plugin [disabled].msp-btn,
.msp-plugin .msp-form-control[readonly],
.msp-plugin .msp-control-row select[readonly],
.msp-plugin .msp-control-row button[readonly],
.msp-plugin .msp-control-row input[readonly][type='text'],
.msp-plugin [readonly].msp-btn,
fieldset[disabled] .msp-plugin .msp-form-control,
fieldset[disabled] .msp-plugin .msp-control-row select,
fieldset[disabled] .msp-plugin .msp-control-row button,
fieldset[disabled] .msp-plugin .msp-control-row input[type='text'],
fieldset[disabled] .msp-plugin .msp-btn {
  background: #eeece7;
  opacity: 0.35;
}
.msp-plugin .msp-btn,
.msp-plugin .msp-control-row button {
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0 10px;
  line-height: 32px;
  border: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.msp-plugin .msp-btn[disabled],
.msp-plugin .msp-control-row button[disabled] {
  background: #eeece7;
  opacity: 0.35;
}
.msp-plugin .msp-btn-block,
.msp-plugin .msp-control-row button {
  display: block;
  width: 100%;
}
.msp-plugin .msp-btn,
.msp-plugin .msp-control-row button,
.msp-plugin .msp-btn:active,
.msp-plugin .msp-btn-link:focus,
.msp-plugin .msp-btn:hover {
  outline: none;
}
.msp-plugin .msp-material-icon svg {
  display: inline-flex;
  vertical-align: middle;
  font-size: 1.2em;
  margin-bottom: 3px;
  fill: currentColor;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  user-select: none;
}
.msp-plugin .msp-btn-block > .msp-material-icon,
.msp-plugin .msp-control-row button > .msp-material-icon {
  margin-left: 0;
  margin-right: 0.4em;
}
.msp-plugin .msp-btn-childless > .msp-material-icon {
  margin-left: 0;
  margin-right: 0;
}
.msp-plugin .msp-btn-icon {
  border: none;
  height: 32px;
  width: 32px;
  line-height: 32px;
  padding: 0;
  text-align: center;
}
.msp-plugin .msp-btn-icon:hover {
  color: #ae5d04;
  background-color: #e9e6e0;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-btn-icon[disabled],
.msp-plugin .msp-btn-icon[disabled]:hover,
.msp-plugin .msp-btn-icon[disabled]:active {
  color: #9c835f;
}
.msp-plugin .msp-btn-icon-small {
  border: none;
  height: 32px;
  width: 20px;
  line-height: 32px;
  padding: 0;
  text-align: center;
}
.msp-plugin .msp-btn-icon-small:hover {
  color: #ae5d04;
  background-color: #e9e6e0;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-btn-icon-small[disabled],
.msp-plugin .msp-btn-icon-small[disabled]:hover,
.msp-plugin .msp-btn-icon-small[disabled]:active {
  color: #9c835f;
}
.msp-plugin .msp-btn-link {
  font-weight: normal;
  border-radius: 0;
}
.msp-plugin .msp-btn-link,
.msp-plugin .msp-btn-link:active,
.msp-plugin .msp-btn-link.active,
.msp-plugin .msp-btn-link[disabled],
fieldset[disabled] .msp-plugin .msp-btn-link {
  background-color: rgba(0, 0, 0, 0);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.msp-plugin .msp-btn-link,
.msp-plugin .msp-btn-link:hover,
.msp-plugin .msp-btn-link:focus,
.msp-plugin .msp-btn-link:active {
  border-color: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-btn-link:hover,
.msp-plugin .msp-btn-link:focus {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-btn-link[disabled]:hover,
.msp-plugin .msp-btn-link[disabled]:focus,
fieldset[disabled] .msp-plugin .msp-btn-link:hover,
fieldset[disabled] .msp-plugin .msp-btn-link:focus {
  text-decoration: none;
}
.msp-plugin .msp-btn-link .msp-icon {
  font-size: 100%;
}
.msp-plugin .msp-btn-link,
.msp-plugin .msp-btn-link:active,
.msp-plugin .msp-btn-link:focus {
  color: #332b1f;
  text-decoration: none;
}
.msp-plugin .msp-btn-link:hover {
  color: #ae5d04;
  text-decoration: none;
}
.msp-plugin .msp-btn-link-toggle-on {
  color: #332b1f;
}
.msp-plugin .msp-btn-link-toggle-off,
.msp-plugin .msp-btn-link-toggle-off:active,
.msp-plugin .msp-btn-link-toggle-off:focus {
  color: #9c835f !important;
}
.msp-plugin .msp-btn-link-toggle-off:hover,
.msp-plugin .msp-btn-link-toggle-on:hover {
  color: #ae5d04 !important;
}
.msp-plugin .msp-btn-action,
.msp-plugin .msp-btn-action:active,
.msp-plugin .msp-btn-action:focus {
  color: #332b1f;
  background: #f3f2ee;
}
.msp-plugin .msp-btn-action:hover {
  color: #ae5d04;
  background: #f9f8f6;
}
.msp-plugin .msp-btn-action[disabled],
.msp-plugin .msp-btn-action[disabled]:hover,
.msp-plugin .msp-btn-action[disabled]:active,
.msp-plugin .msp-btn-action[disabled]:focus {
  color: #362e21;
}
.msp-plugin .msp-btn-commit-on,
.msp-plugin .msp-btn-commit-on:active,
.msp-plugin .msp-btn-commit-on:focus {
  color: #974102;
  background: #f2f1ed;
}
.msp-plugin .msp-btn-commit-on:hover {
  color: #ae5d04;
  background: #f8f7f4;
}
.msp-plugin .msp-btn-commit-on[disabled],
.msp-plugin .msp-btn-commit-on[disabled]:hover,
.msp-plugin .msp-btn-commit-on[disabled]:active,
.msp-plugin .msp-btn-commit-on[disabled]:focus {
  color: #9c4302;
}
.msp-plugin .msp-btn-commit-off,
.msp-plugin .msp-btn-commit-off:active,
.msp-plugin .msp-btn-commit-off:focus {
  color: #332b1f;
  background: #f6f5f3;
}
.msp-plugin .msp-btn-commit-off:hover {
  color: #ae5d04;
  background: #fcfbfa;
}
.msp-plugin .msp-btn-commit-off[disabled],
.msp-plugin .msp-btn-commit-off[disabled]:hover,
.msp-plugin .msp-btn-commit-off[disabled]:active,
.msp-plugin .msp-btn-commit-off[disabled]:focus {
  color: #362e21;
}
.msp-plugin .msp-btn-remove:hover {
  color: #f2f4f7;
}
.msp-plugin .msp-btn-commit-on:hover {
  color: #fc6c03;
}
.msp-plugin .msp-btn-action {
  height: 32px;
  line-height: 32px;
}
.msp-plugin input[type='file'] {
  display: block;
}
.msp-plugin input[type='range'] {
  display: block;
  width: 100%;
}
.msp-plugin select[multiple],
.msp-plugin select[size] {
  height: auto;
}
.msp-plugin textarea.msp-form-control,
.msp-plugin textarea.msp-btn {
  height: auto;
}
.msp-plugin .msp-control-top-offset {
  margin-top: 1px;
}
.msp-plugin .msp-btn-commit {
  text-align: right;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 10px;
  padding-left: 0;
  line-height: 32px;
  border: none;
  overflow: hidden;
  font-weight: bold;
}
.msp-plugin .msp-btn-commit .msp-icon {
  display: block-inline;
  line-height: 32px;
  width: 32px;
  text-align: center;
}
.msp-plugin select.msp-form-control,
.msp-plugin .msp-control-row select,
.msp-plugin select.msp-btn {
  background: none;
  background-color: #f3f2ee;
  background-size: 8px 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 24px;
}
.msp-plugin select.msp-form-control:-moz-focusring,
.msp-plugin .msp-control-row select:-moz-focusring,
.msp-plugin select.msp-btn:-moz-focusring {
  color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 0 #332b1f;
}
.msp-plugin .msp-default-bg {
  background: #eeece7;
}
.msp-plugin .msp-transparent-bg {
  background: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-no-hover-outline:hover {
  color: #ae5d04;
  background-color: inherit;
  border: none;
  outline-offset: 0 !important;
  outline: none !important;
}
.msp-plugin .msp-icon-inline {
  margin-right: 8px;
}
.msp-plugin .msp-control-row {
  position: relative;
  height: 32px;
  background: #eeece7;
  margin-top: 1px;
}
.msp-plugin .msp-control-row > span.msp-control-row-label,
.msp-plugin .msp-control-row > button.msp-control-button-label {
  line-height: 32px;
  display: block;
  width: 120px;
  text-align: right;
  padding: 0 10px;
  color: #63533c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
}
.msp-plugin .msp-control-row > button.msp-control-button-label {
  background: #eeece7;
  cursor: pointer;
}
.msp-plugin .msp-control-row .msp-control-current {
  background: #eeece7;
}
.msp-plugin .msp-control-row > div.msp-control-row-ctrl {
  position: absolute;
  left: 120px;
  top: 0;
  right: 0;
  bottom: 0;
}
.msp-plugin .msp-control-row > div {
  background: #f3f2ee;
}
.msp-plugin .msp-control-row > .msp-flex-row,
.msp-plugin .msp-control-row > .msp-state-image-row {
  background: #eeece7;
}
.msp-plugin .msp-control-label-short > span {
  width: 80px !important;
}
.msp-plugin .msp-control-label-short > div:nth-child(2) {
  left: 80px !important;
}
.msp-plugin .msp-control-col-2 {
  float: left;
  width: 50%;
}
.msp-plugin .msp-control-group {
  position: relative;
}
.msp-plugin .msp-toggle-button .msp-icon {
  display: inline-block;
  margin-right: 6px;
}
.msp-plugin .msp-toggle-button > div > button:hover {
  border-color: #e9e6e0 !important;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-slider > div:first-child {
  position: absolute;
  top: 0;
  left: 18px;
  bottom: 0;
  right: 62px;
  display: flex;
}
.msp-plugin .msp-slider > div:last-child {
  position: absolute;
  height: 32px;
  line-height: 32px;
  text-align: center;
  right: 0;
  width: 50px;
  top: 0;
  bottom: 0;
}
.msp-plugin .msp-slider input[type='text'] {
  padding-right: 6px;
  padding-left: 4px;
  font-size: 80%;
  text-align: right;
}
.msp-plugin .msp-slider2 > div:first-child {
  position: absolute;
  height: 32px;
  line-height: 32px;
  text-align: center;
  left: 0;
  width: 25px;
  top: 0;
  bottom: 0;
  font-size: 80%;
}
.msp-plugin .msp-slider2 > div:nth-child(2) {
  position: absolute;
  top: 0;
  left: 35px;
  bottom: 0;
  right: 37px;
  display: flex;
}
.msp-plugin .msp-slider2 > div:last-child {
  position: absolute;
  height: 32px;
  line-height: 32px;
  text-align: center;
  right: 0;
  width: 25px;
  top: 0;
  bottom: 0;
  font-size: 80%;
}
.msp-plugin .msp-slider2 input[type='text'] {
  padding-right: 4px;
  padding-left: 4px;
  font-size: 80%;
  text-align: center;
}
.msp-plugin .msp-toggle-color-picker button {
  border: 10px solid #f3f2ee !important;
  margin: 0;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
}
.msp-plugin .msp-toggle-color-picker button:hover {
  border-color: #e9e6e0 !important;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-toggle-color-picker .msp-color-picker {
  position: absolute;
  z-index: 100000;
  background: #eeece7;
  border-top: 1px solid #eeece7;
  padding-bottom: 5px;
  width: 100%;
}
.msp-plugin .msp-toggle-color-picker-above .msp-color-picker {
  top: -85px;
  height: 85px;
}
.msp-plugin .msp-toggle-color-picker-below .msp-color-picker {
  top: 32px;
  height: 80px;
}
.msp-plugin .msp-control-offset {
  padding-left: 10px;
}
.msp-plugin .msp-accent-offset {
  padding-left: 1px;
  margin-left: 8px;
  border-left: 2px solid #e98b39;
}
.msp-plugin .msp-control-group-wrapper {
  margin-bottom: 0px;
  margin-top: 1px;
}
.msp-plugin .msp-control-group-header {
  background: #eeece7;
}
.msp-plugin .msp-control-group-header > button,
.msp-plugin .msp-control-group-header div {
  padding-left: 4px;
  text-align: left;
  height: 24px !important;
  line-height: 24px !important;
  font-size: 85% !important;
  background: #eeece7 !important;
  color: #63533c;
}
.msp-plugin .msp-control-group-header .msp-icon {
  height: 24px !important;
  line-height: 24px !important;
}
.msp-plugin .msp-control-group-header > span {
  padding-left: 5px;
  line-height: 21.3333333333px;
  font-size: 70%;
  background: #eeece7;
  color: #63533c;
}
.msp-plugin .msp-control-current {
  background: #eeece7;
}
.msp-plugin .msp-control-group-footer {
  background: #e3e0d8;
  height: 5px;
  font-size: 1px;
  margin-top: 1px;
}
.msp-plugin .msp-control-group-expander {
  display: block;
  position: absolute;
  line-height: 32px;
  padding: 0;
  left: 0;
  top: 0;
  width: 120px;
  text-align: left;
  background: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-control-group-expander .msp-icon {
  line-height: 29px;
  width: 31px;
  text-align: center;
  font-size: 100%;
}
.msp-plugin .msp-plugin-layout_controls {
  position: absolute;
  left: 10px;
  top: 10px;
}
.msp-plugin .msp-plugin-layout_controls > button:first-child {
  margin-right: 6px;
}
.msp-plugin .msp-empty-control {
  display: none;
}
.msp-plugin .msp-control .msp-btn-block,
.msp-plugin .msp-control .msp-control-row button,
.msp-plugin .msp-control-row .msp-control button {
  margin-bottom: 0px;
  margin-top: 0px;
}
.msp-plugin .msp-row-text {
  height: 32px;
  position: relative;
  background: #eeece7;
  margin-top: 1px;
}
.msp-plugin .msp-row-text > div {
  line-height: 32px;
  text-align: center;
  color: #63533c;
}
.msp-plugin .msp-help span {
  display: none;
}
.msp-plugin .msp-help:hover span {
  display: inline-block;
  background: linear-gradient(rgb(238, 236, 231), rgba(238, 236, 231, 0.8));
}
.msp-plugin .msp-help-text {
  position: relative;
  background: #eeece7;
  margin-top: 1px;
}
.msp-plugin .msp-help-text > div {
  padding: 5px 10px;
  text-align: left;
  color: #63533c;
}
.msp-plugin .msp-help-description {
  font-style: italic;
}
.msp-plugin .msp-help-legend {
  padding-top: 10px;
}
.msp-plugin .msp-scale-legend > div {
  width: 100%;
  height: 30px;
}
.msp-plugin .msp-scale-legend > div > span {
  padding: 5px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.2);
}
.msp-plugin .msp-table-legend > div {
  margin-right: 5px;
  display: inline-flex;
}
.msp-plugin .msp-table-legend > div .msp-table-legend-color {
  width: 30px;
  height: 20px;
}
.msp-plugin .msp-table-legend > div .msp-table-legend-text {
  margin: 0 5px;
}
.msp-plugin .msp-image-preview {
  position: relative;
  background: #eeece7;
  margin-top: 1px;
  padding: 10px;
}
.msp-plugin .msp-image-preview canvas {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.msp-plugin .msp-image-preview > span {
  margin-top: 6px;
  display: block;
  text-align: center;
  font-size: 80%;
  line-height: 15px;
}
.msp-plugin .msp-copy-image-wrapper {
  position: relative;
}
.msp-plugin .msp-copy-image-wrapper div {
  font-weight: bold;
  padding: 3px;
  margin: 1px 0;
  width: 100%;
  background: #f3f2ee;
  text-align: center;
}
.msp-plugin .msp-copy-image-wrapper img {
  margin-top: 1px;
}
.msp-plugin .msp-text-area-wrapper {
  position: relative;
  height: 96px !important;
}
.msp-plugin .msp-text-area-wrapper textarea {
  border: none;
  width: 100%;
  height: 100%;
  background: #f3f2ee;
  padding: 5px 10px;
  resize: none;
  font-size: 12px;
  line-height: 16px;
}
.msp-plugin .msp-slider-base {
  position: relative;
  height: 14px;
  padding: 5px 0;
  width: 100%;
  border-radius: 6px;
  align-self: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-slider-base * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-slider-base-rail {
  position: absolute;
  width: 100%;
  background-color: #e0ddd4;
  height: 4px;
  border-radius: 2px;
}
.msp-plugin .msp-slider-base-track {
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 6px;
  background-color: tint(rgb(51, 43, 31), 60%);
}
.msp-plugin .msp-slider-base-handle {
  position: absolute;
  margin-left: -11px;
  margin-top: -9px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #332b1f;
  border: 4px solid #e0ddd4;
}
.msp-plugin .msp-slider-base-handle:hover {
  background-color: #ae5d04;
}
.msp-plugin .msp-slider-base-mark {
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  font-size: 12px;
}
.msp-plugin .msp-slider-base-mark-text {
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: #999;
}
.msp-plugin .msp-slider-base-mark-text-active {
  color: #666;
}
.msp-plugin .msp-slider-base-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-slider-base-dot {
  position: absolute;
  bottom: -2px;
  margin-left: -4px;
  width: 8px;
  height: 8px;
  border: 2px solid #e9e9e9;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  vertical-align: middle;
}
.msp-plugin .msp-slider-base-dot:first-child {
  margin-left: -4px;
}
.msp-plugin .msp-slider-base-dot:last-child {
  margin-left: -4px;
}
.msp-plugin .msp-slider-base-dot-active {
  border-color: tint(rgb(51, 43, 31), 50%);
}
.msp-plugin .msp-slider-base-disabled {
  background: #eeece7;
  opacity: 0.35;
}
.msp-plugin .msp-slider-base-disabled .msp-slider-base-handle,
.msp-plugin .msp-slider-base-disabled .msp-slider-base-dot {
  cursor: not-allowed;
}
.msp-plugin .msp-slider-base-disabled .msp-slider-base-mark-text,
.msp-plugin .msp-slider-base-disabled .msp-slider-base-dot {
  cursor: not-allowed !important;
}
.msp-plugin .msp-description {
  padding: 10px;
  font-size: 85%;
  background: #eeece7;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-weight: light;
  cursor: default;
}
.msp-plugin .msp-description:not(:first-child) {
  border-top: 1px solid #e0ddd4;
}
.msp-plugin .msp-color-picker input {
  color: #000 !important;
}
.msp-plugin .msp-no-webgl {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: table;
  text-align: center;
  background: #eeece7;
}
.msp-plugin .msp-no-webgl > div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
  height: 100%;
}
.msp-plugin .msp-no-webgl > div b {
  font-size: 120%;
}
.msp-plugin .msp-loader-msp-btn-file {
  position: relative;
  overflow: hidden;
}
.msp-plugin .msp-loader-msp-btn-file input[type='file'] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: #fff;
  cursor: inherit;
  display: block;
}
.msp-plugin .msp-controls-section {
  margin-bottom: 10px;
}
.msp-plugin .msp-combined-color-button {
  border: 4px solid #f3f2ee !important;
  margin: 0;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
}
.msp-plugin .msp-combined-color-button:hover {
  border-color: #e9e6e0 !important;
  border: none;
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-combined-color-swatch {
  width: 100%;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(6, auto);
}
.msp-plugin .msp-combined-color-swatch .msp-btn:hover,
.msp-plugin .msp-combined-color-swatch .msp-control-row button:hover,
.msp-plugin .msp-control-row .msp-combined-color-swatch button:hover {
  outline-offset: -1px !important;
  outline: 1px solid #c9c3b3 !important;
}
.msp-plugin .msp-action-select {
  position: relative;
}
.msp-plugin .msp-action-select select {
  padding-left: 42px;
}
.msp-plugin .msp-action-select option:first-child {
  color: #63533c;
}
.msp-plugin .msp-action-select > .msp-icon {
  display: block;
  top: 0;
  left: 10px;
  position: absolute;
  line-height: 32px;
}
.msp-plugin .msp-simple-help-section {
  height: 28px;
  line-height: 28px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-weight: 500;
  background: #eeece7;
  color: #332b1f;
}
.msp-plugin .msp-left-panel-controls-buttons {
  position: absolute;
  width: 32px;
  top: 0;
  bottom: 0;
  padding-top: 10px;
  background: #eeece7;
}
.msp-plugin .msp-left-panel-controls-buttons-bottom {
  position: absolute;
  bottom: 0;
}
.msp-plugin .msp-left-panel-controls-button-data-dirty {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #e98b39;
  border-radius: 3px;
  right: 6px;
  bottom: 6px;
}
.msp-plugin .msp-left-panel-controls .msp-scrollable-container {
  left: 33px;
}
.msp-plugin .msp-mapped-parameter-group {
  position: relative;
}
.msp-plugin
  .msp-mapped-parameter-group
  > .msp-control-row:first-child
  > div:nth-child(2) {
  right: 33px;
}
.msp-plugin .msp-mapped-parameter-group > button:first-child {
  right: 33px;
}
.msp-plugin .msp-mapped-parameter-group > .msp-btn-icon {
  position: absolute;
  right: 0;
  width: 32px;
  top: 0;
  padding: 0;
}
.msp-plugin .msp-shape-filled {
  fill: #332b1f;
  stroke: #332b1f;
}
.msp-plugin .msp-shape-empty {
  fill: none;
  stroke: #332b1f;
}
.msp-plugin .msp-no-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msp-plugin .msp-25-lower-contrast-text {
  color: #826e4f;
}
.msp-plugin .msp-expandable-group-color-stripe {
  position: absolute;
  left: 0;
  top: 30px;
  width: 120px;
  height: 2px;
}
.msp-plugin .msp-section-header {
  height: 32px;
  line-height: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: right;
  padding: 0 10px;
  font-weight: bold;
  background: #eeece7;
  overflow: hidden;
  cursor: default;
}
.msp-plugin .msp-section-header > .msp-icon {
  display: block;
  float: left;
}
.msp-plugin .msp-section-header > small {
  font-weight: normal;
}
.msp-plugin .msp-current-header {
  height: 32px;
  line-height: 32px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  background: #eeece7;
}
.msp-plugin .msp-flex-row,
.msp-plugin .msp-state-image-row {
  margin-top: 1px;
  background: #eeece7;
  display: flex;
  flex-direction: row;
  width: inherit;
  height: 32px;
}
.msp-plugin .msp-flex-row > .msp-flex-item,
.msp-plugin .msp-state-image-row > .msp-flex-item {
  margin: 0;
  flex: 1 1 auto;
  margin-right: 1px;
  overflow: hidden;
}
.msp-plugin .msp-flex-row > .msp-flex-item:last-child,
.msp-plugin .msp-state-image-row > .msp-flex-item:last-child {
  margin-right: 0;
}
.msp-plugin .msp-flex-row > select,
.msp-plugin .msp-state-image-row > select,
.msp-plugin .msp-flex-row > button,
.msp-plugin .msp-state-image-row > button {
  margin: 0;
  flex: 1 1 auto;
  margin-right: 1px;
  height: 32px;
  overflow: hidden;
}
.msp-plugin .msp-flex-row .msp-btn-icon,
.msp-plugin .msp-state-image-row .msp-btn-icon,
.msp-plugin .msp-flex-row .msp-btn-icon-small,
.msp-plugin .msp-state-image-row .msp-btn-icon-small {
  flex: 0 0 32px;
  max-width: 32px;
}
.msp-plugin .msp-flex-row > select,
.msp-plugin .msp-state-image-row > select {
  background: none;
}
.msp-plugin .msp-flex-row > select > option[value='_'],
.msp-plugin .msp-state-image-row > select > option[value='_'] {
  display: none;
}
.msp-plugin .msp-flex-row > select:last-child,
.msp-plugin .msp-state-image-row > select:last-child,
.msp-plugin .msp-flex-row > button:last-child,
.msp-plugin .msp-state-image-row > button:last-child {
  margin-right: 0;
}
.msp-plugin .msp-flex-row > button.msp-control-button-label,
.msp-plugin .msp-state-image-row > button.msp-control-button-label {
  background: #eeece7;
}
.msp-plugin .msp-state-list {
  list-style: none;
}
.msp-plugin .msp-state-list > li {
  position: relative;
  overflow: hidden;
}
.msp-plugin .msp-state-list > li > button:first-child {
  text-align: left;
  border-left: 10px solid #d5d0c3 !important;
}
.msp-plugin .msp-state-list > li > div {
  position: absolute;
  right: 0;
  top: 0;
}
.msp-plugin .msp-state-image-row {
  height: 96px;
  margin-top: 0px;
}
.msp-plugin .msp-state-image-row > button {
  height: 96px;
  padding: 0px;
}
.msp-plugin .msp-state-image-row > button > img {
  min-height: 96px;
  width: inherit;
  transform: translateY(-50%);
  top: 50%;
  position: relative;
}
.msp-plugin .msp-tree-row {
  position: relative;
  margin-top: 0;
  margin-bottom: 1px;
  background: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-tree-row-current .msp-btn-tree-label {
  border-radius: 0 !important;
}
.msp-plugin .msp-tree-row-current .msp-btn-tree-label > span {
  font-weight: bold;
}
.msp-plugin .msp-tree-row .msp-btn-tree-label {
  text-align: left;
  border-radius: 0 0 0 8px;
  border-left-width: 4px;
  border-left-style: solid;
}
.msp-plugin .msp-tree-row .msp-btn-tree-label > small {
  color: #726046;
}
.msp-plugin .msp-tree-updates-wrapper .msp-control-group-header:last-child {
  margin-bottom: 1px;
}
.msp-plugin .msp-viewport-top-left-controls {
  position: absolute;
  left: 10px;
  top: 10px;
}
.msp-plugin .msp-viewport-top-left-controls .msp-traj-controls {
  line-height: 32px;
  float: left;
  margin-right: 10px;
  background-color: #f3f2ee;
}
.msp-plugin .msp-viewport-top-left-controls .msp-traj-controls > span {
  color: #332b1f;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 85%;
  display: inline-block;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-state-snapshot-viewport-controls {
  line-height: 32px;
  float: left;
  margin-right: 10px;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-state-snapshot-viewport-controls
  > button {
  background-color: #f3f2ee;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-state-snapshot-viewport-controls
  > select {
  display: inline-block;
  width: 200px;
  margin-right: 10px;
}
.msp-plugin .msp-viewport-top-left-controls .msp-animation-viewport-controls {
  line-height: 32px;
  float: left;
  margin-right: 10px;
  position: relative;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-animation-viewport-controls
  > div:first-child {
  position: relative;
  display: inline-block;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-animation-viewport-controls
  > div:first-child
  > button {
  position: relative;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-animation-viewport-controls
  .msp-animation-viewport-controls-select {
  width: 290px;
  position: absolute;
  left: 0;
  margin-top: 10px;
  background: #e0ddd4;
}
.msp-plugin
  .msp-viewport-top-left-controls
  .msp-animation-viewport-controls
  .msp-animation-viewport-controls-select
  .msp-control-row:first-child {
  margin-top: 0;
}
.msp-plugin .msp-selection-viewport-controls {
  position: relative;
  margin: 10px auto 0 auto;
  width: 430px;
}
.msp-plugin .msp-selection-viewport-controls-actions {
  position: absolute;
  width: 100%;
  top: 32px;
  background: #e0ddd4;
}
.msp-plugin .msp-selection-viewport-controls > .msp-flex-row .msp-btn,
.msp-plugin .msp-selection-viewport-controls > .msp-state-image-row .msp-btn,
.msp-plugin
  .msp-selection-viewport-controls
  > .msp-flex-row
  .msp-control-row
  button,
.msp-plugin
  .msp-control-row
  .msp-selection-viewport-controls
  > .msp-flex-row
  button,
.msp-plugin
  .msp-selection-viewport-controls
  > .msp-state-image-row
  .msp-control-row
  button,
.msp-plugin
  .msp-control-row
  .msp-selection-viewport-controls
  > .msp-state-image-row
  button {
  padding: 0 5px;
}
.msp-plugin .msp-selection-viewport-controls select.msp-form-control,
.msp-plugin .msp-selection-viewport-controls select.msp-btn,
.msp-plugin .msp-selection-viewport-controls .msp-control-row select,
.msp-plugin .msp-control-row .msp-selection-viewport-controls select {
  padding: 0 5px;
  text-align: center;
  background: #f3f2ee;
  flex: 0 0 80px;
  text-overflow: ellipsis;
}
.msp-plugin .msp-param-object-list-item {
  margin-top: 1px;
  position: relative;
}
.msp-plugin .msp-param-object-list-item > button {
  text-align: left;
}
.msp-plugin .msp-param-object-list-item > button > span {
  font-weight: bold;
}
.msp-plugin .msp-param-object-list-item > div {
  position: absolute;
  right: 0;
  top: 0;
}
.msp-plugin .msp-state-actions .msp-transform-wrapper:last-child {
  margin-bottom: 10px;
}
.msp-plugin .msp-button-row {
  display: flex;
  flex-direction: row;
  height: 32px;
  width: inherit;
}
.msp-plugin .msp-button-row > button {
  margin: 0;
  flex: 1 1 auto;
  margin-right: 1px;
  height: 32px;
  text-align-last: center;
  background: none;
  padding: 0 10px;
  overflow: hidden;
}
.msp-plugin .msp-action-menu-options-no-header,
.msp-plugin .msp-action-menu-options .msp-control-group-children {
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;
}
.msp-plugin .msp-action-menu-options .msp-control-row,
.msp-plugin .msp-action-menu-options button,
.msp-plugin .msp-action-menu-options .msp-icon,
.msp-plugin .msp-action-menu-options .msp-flex-row,
.msp-plugin .msp-action-menu-options .msp-state-image-row {
  height: 24px;
  line-height: 24px;
}
.msp-plugin .msp-action-menu-options button {
  text-align: left;
}
.msp-plugin .msp-action-menu-options .msp-action-menu-button {
  margin-top: 1px;
  display: flex;
}
.msp-plugin .msp-action-menu-options .msp-action-menu-button .msp-icon {
  margin-right: 6px;
}
.msp-plugin .msp-representation-entry {
  position: relative;
}
.msp-plugin .msp-representation-entry > .msp-control-group-header > .msp-btn,
.msp-plugin
  .msp-control-row
  .msp-representation-entry
  > .msp-control-group-header
  > button {
  font-weight: bold;
}
.msp-plugin .msp-representation-entry > .msp-control-group-header > .msp-icon,
.msp-plugin
  .msp-representation-entry
  > .msp-control-group-header
  > .msp-btn-link {
  line-height: 24px;
  height: 24px;
}
.msp-plugin .msp-control-group-presets-wrapper {
  position: absolute;
  right: 0;
  top: 0;
}
.msp-plugin .msp-control-group-presets-wrapper .msp-control-group-header {
  background: rgba(0, 0, 0, 0);
}
.msp-plugin .msp-control-group-presets-wrapper button {
  background: rgba(0, 0, 0, 0) !important;
}
.msp-plugin .msp-parameter-matrix input {
  flex: 1 1 auto;
  min-width: 0;
}
.msp-plugin .msp-btn-apply-simple {
  text-align: left;
}
.msp-plugin .msp-btn-apply-simple .msp-icon {
  margin-right: 10px;
}
.msp-plugin .msp-type-class-Root {
  border-left-color: #eeece7;
}
.msp-plugin .msp-type-class-Group {
  border-left-color: #e98b39;
}
.msp-plugin .msp-type-class-Data {
  border-left-color: #bfc8c9;
}
.msp-plugin .msp-type-class-Object {
  border-left-color: #54d98c;
}
.msp-plugin .msp-type-class-Representation3D {
  border-left-color: #4aa3df;
}
.msp-plugin .msp-type-class-Behavior {
  border-left-color: #b07cc6;
}
.msp-plugin .msp-accent-color-cyan {
  color: #bfc8c9;
}
.msp-plugin .msp-accent-bg-cyan {
  background: #bfc8c9;
}
.msp-plugin .msp-transform-header-brand-cyan {
  border-bottom: 1px solid #bfc8c9;
}
.msp-plugin .msp-transform-header-brand-cyan:active,
.msp-plugin .msp-transform-header-brand-cyan:focus {
  border-bottom: 1px solid #bfc8c9;
}
.msp-plugin .msp-accent-color-red {
  color: #ef8b80;
}
.msp-plugin .msp-accent-bg-red {
  background: #ef8b80;
}
.msp-plugin .msp-transform-header-brand-red {
  border-bottom: 1px solid #ef8b80;
}
.msp-plugin .msp-transform-header-brand-red:active,
.msp-plugin .msp-transform-header-brand-red:focus {
  border-bottom: 1px solid #ef8b80;
}
.msp-plugin .msp-accent-color-gray {
  color: #46637f;
}
.msp-plugin .msp-accent-bg-gray {
  background: #46637f;
}
.msp-plugin .msp-transform-header-brand-gray {
  border-bottom: 1px solid #46637f;
}
.msp-plugin .msp-transform-header-brand-gray:active,
.msp-plugin .msp-transform-header-brand-gray:focus {
  border-bottom: 1px solid #46637f;
}
.msp-plugin .msp-accent-color-green {
  color: #54d98c;
}
.msp-plugin .msp-accent-bg-green {
  background: #54d98c;
}
.msp-plugin .msp-transform-header-brand-green {
  border-bottom: 1px solid #54d98c;
}
.msp-plugin .msp-transform-header-brand-green:active,
.msp-plugin .msp-transform-header-brand-green:focus {
  border-bottom: 1px solid #54d98c;
}
.msp-plugin .msp-accent-color-purple {
  color: #b07cc6;
}
.msp-plugin .msp-accent-bg-purple {
  background: #b07cc6;
}
.msp-plugin .msp-transform-header-brand-purple {
  border-bottom: 1px solid #b07cc6;
}
.msp-plugin .msp-transform-header-brand-purple:active,
.msp-plugin .msp-transform-header-brand-purple:focus {
  border-bottom: 1px solid #b07cc6;
}
.msp-plugin .msp-accent-color-blue {
  color: #4aa3df;
}
.msp-plugin .msp-accent-bg-blue {
  background: #4aa3df;
}
.msp-plugin .msp-transform-header-brand-blue {
  border-bottom: 1px solid #4aa3df;
}
.msp-plugin .msp-transform-header-brand-blue:active,
.msp-plugin .msp-transform-header-brand-blue:focus {
  border-bottom: 1px solid #4aa3df;
}
.msp-plugin .msp-accent-color-orange {
  color: #e98b39;
}
.msp-plugin .msp-accent-bg-orange {
  background: #e98b39;
}
.msp-plugin .msp-transform-header-brand-orange {
  border-bottom: 1px solid #e98b39;
}
.msp-plugin .msp-transform-header-brand-orange:active,
.msp-plugin .msp-transform-header-brand-orange:focus {
  border-bottom: 1px solid #e98b39;
}
.msp-plugin .msp-volume-channel-inline-controls > :first-child {
  position: absolute;
  left: 0;
  top: 0;
  height: 32px;
  right: 32px;
}
.msp-plugin .msp-volume-channel-inline-controls .msp-slider > div:first-child {
  right: 42px;
}
.msp-plugin .msp-volume-channel-inline-controls .msp-slider > div:last-child {
  width: 30px;
}
.msp-plugin .msp-volume-channel-inline-controls > button {
  position: absolute;
  right: 0;
  width: 32px;
  top: 0;
  padding: 0;
}
.msp-plugin .msp-volume-channel-inline-controls > button .msp-material-icon {
  margin-right: 0;
}
.msp-plugin .msp-list-unstyled {
  padding-left: 0;
  list-style: none;
}
.msp-plugin .msp-drag-drop-overlay {
  border: 12px dashed #332b1f;
  background: rgba(0, 0, 0, 0.36);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 48px;
  font-weight: bold;
}
.msp-plugin .msp-task-state {
  line-height: 32px;
}
.msp-plugin .msp-task-state > span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
}
.msp-plugin .msp-overlay-tasks {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
}
.msp-plugin .msp-overlay-tasks .msp-task-state > div {
  height: 32px;
  margin-top: 1px;
  position: relative;
  width: 100%;
  background: #eeece7;
}
.msp-plugin .msp-overlay-tasks .msp-task-state > div > div {
  height: 32px;
  line-height: 32px;
  display: inline-block;
  padding: 0 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  background: #eeece7;
  position: absolute;
}
.msp-plugin .msp-overlay-tasks .msp-task-state > div > button {
  display: inline-block;
  margin-top: -3px;
}
.msp-plugin .msp-background-tasks {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.msp-plugin .msp-background-tasks .msp-task-state > div {
  height: 32px;
  margin-top: 1px;
  position: relative;
  width: 100%;
  background: #eeece7;
}
.msp-plugin .msp-background-tasks .msp-task-state > div > div {
  height: 32px;
  line-height: 32px;
  display: inline-block;
  padding: 0 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  background: #eeece7;
  position: absolute;
}
.msp-plugin .msp-background-tasks .msp-task-state > div > button {
  display: inline-block;
  margin-top: -3px;
}
.msp-plugin .msp-viewport {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #eeece7;
}
.msp-plugin .msp-viewport .msp-btn-link {
  background: rgba(0, 0, 0, 0.2);
}
.msp-plugin .msp-viewport-expanded {
  position: fixed;
  z-index: 1000;
}
.msp-plugin .msp-viewport-host3d {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  touch-action: manipulation;
}
.msp-plugin .msp-viewport-host3d > canvas {
  background-color: #eeece7;
  background-image: linear-gradient(
      45deg,
      lightgrey 25%,
      transparent 25%,
      transparent 75%,
      lightgrey 75%,
      lightgrey
    ),
    linear-gradient(
      45deg,
      lightgrey 25%,
      transparent 25%,
      transparent 75%,
      lightgrey 75%,
      lightgrey
    );
  background-size: 60px 60px;
  background-position:
    0 0,
    30px 30px;
}
.msp-plugin .msp-viewport-controls {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
}
.msp-plugin .msp-viewport-controls-buttons {
  text-align: right;
  position: relative;
}
.msp-plugin .msp-viewport-controls-buttons > div {
  position: relative;
  margin-bottom: 4px;
}
.msp-plugin .msp-viewport-controls-buttons button {
  padding: 0;
  text-align: center;
  width: 32px;
  position: relative;
}
.msp-plugin .msp-viewport-controls-buttons .msp-btn-link-toggle-off {
  color: #9c835f;
}
.msp-plugin .msp-viewport-controls-buttons .msp-btn-link:hover {
  color: #ae5d04;
}
.msp-plugin .msp-semi-transparent-background {
  background: #eeece7;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.msp-plugin .msp-hover-box-wrapper {
  position: relative;
}
.msp-plugin .msp-hover-box-wrapper .msp-hover-box-body {
  visibility: hidden;
  position: absolute;
  right: 36px;
  top: 0;
  width: 100px;
  background-color: #eeece7;
}
.msp-plugin .msp-hover-box-wrapper .msp-hover-box-spacer {
  visibility: hidden;
  position: absolute;
  right: 32px;
  top: 0;
  width: 4px;
  height: 32px;
}
.msp-plugin .msp-hover-box-wrapper:hover .msp-hover-box-body,
.msp-plugin .msp-hover-box-wrapper:hover .msp-hover-box-spacer {
  visibility: visible;
}
.msp-plugin .msp-viewport-controls-panel {
  width: 290px;
  top: 0;
  right: 36px;
  position: absolute;
  background: #e0ddd4;
}
.msp-plugin
  .msp-viewport-controls-panel
  .msp-control-group-wrapper:first-child {
  padding-top: 0;
}
.msp-plugin .msp-viewport-controls-panel .msp-viewport-controls-panel-controls {
  overflow-y: auto;
  max-height: 400px;
}
.msp-plugin .msp-highlight-toast-wrapper {
  position: absolute;
  right: 10px;
  bottom: 10px;
  max-width: 95%;
  z-index: 10000;
}
.msp-plugin .msp-highlight-info {
  color: #ae5d04;
  padding: 3px 10px;
  background: #eeece7;
  opacity: 90%;
  text-align: right;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
}
.msp-plugin .msp-highlight-info-hr {
  margin-inline: 0px;
  margin-block: 3px;
  border: none;
  height: 1px;
  background-color: #ae5d04;
}
.msp-plugin .msp-highlight-info-additional {
  font-size: 85%;
  display: inline-block;
  color: #fa911e;
}
.msp-plugin .msp-snapshot-description-wrapper {
  background: rgba(238, 236, 231, 0.5);
  position: absolute;
  left: 0;
  top: 42px;
  padding: 6.6px 10px;
  max-height: 224px;
  overflow: hidden;
  overflow-y: auto;
  max-width: 400px;
}
.msp-plugin .msp-snapshot-description-wrapper a {
  text-decoration: underline;
  cursor: pointer;
  color: #332b1f;
}
.msp-plugin .msp-snapshot-description-wrapper ul,
.msp-plugin .msp-snapshot-description-wrapper ol {
  padding-left: 14px;
}
.msp-plugin .msp-log-wrap {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.msp-plugin .msp-log {
  position: absolute;
  right: -20px;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 90%;
  background: #e0ddd4;
}
.msp-plugin .msp-log {
  font-size: 90%;
  color: #433829;
}
.msp-plugin .msp-log ul {
  padding: 0;
  margin: 0;
}
.msp-plugin .msp-log li {
  clear: both;
  margin: 0;
  background: #eeece7;
  position: relative;
}
.msp-plugin .msp-log li:not(:last-child) {
  border-bottom: 1px solid #cec9ba;
}
.msp-plugin .msp-log .msp-log-entry {
  margin-left: 110px;
  background: #ebe8e3;
  padding: 3px 25px 3px 10px;
}
.msp-plugin .msp-log .msp-log-timestamp {
  padding: 3px 10px 3px 10px;
  float: left;
  text-align: right;
  width: 110px;
  color: #726046;
  font-size: 100%;
}
.msp-plugin .msp-log .msp-log-timestamp small {
  font-size: 100%;
}
.msp-plugin .msp-log .label {
  margin-top: -3px;
  font-size: 7pt;
}
.msp-plugin .msp-log-entry-badge {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
}
.msp-plugin .msp-log-entry-message {
  background: #0cca5d;
}
.msp-plugin .msp-log-entry-info {
  background: #5e3673;
}
.msp-plugin .msp-log-entry-error {
  background: #fd354b;
}
.msp-plugin .msp-log-entry-warning {
  background: #fcc937;
}
.msp-plugin .msp-sequence {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background: #eeece7;
}
.msp-plugin .msp-sequence-select {
  position: relative;
  height: 24px;
  width: 100%;
  margin-bottom: 1px;
  background: #e0ddd4;
  text-align: left;
}
.msp-plugin .msp-sequence-select > span {
  display: inline-block;
  line-height: 24px;
  padding: 0 10px;
  font-size: 85%;
  font-weight: bold;
  cursor: default;
}
.msp-plugin .msp-sequence-select > select {
  display: inline-block;
  max-width: 120px;
  width: auto;
  text-overflow: ellipsis;
  font-size: 85%;
  height: 24px;
  line-height: 24px;
  background-size: 6px 8px;
  background-color: #e0ddd4;
}
.msp-plugin .msp-sequence-wrapper {
  word-break: break-word;
  padding: 10px 10px 3px 10px;
  user-select: none;
}
.msp-plugin .msp-sequence-wrapper-non-empty {
  font-size: 85%;
  line-height: 180%;
  font-family: 'Courier New', monospace;
  background: #f3f2ee;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 25px;
  left: 0;
  bottom: 0;
  right: 0;
}
.msp-plugin .msp-sequence-chain-label {
  margin-left: 10px;
  margin-top: 10px;
  user-select: none;
  color: #ae5d04;
  font-size: 90%;
  line-height: 90%;
  padding-left: 0.2em;
}
.msp-plugin .msp-sequence-wrapper span {
  cursor: pointer;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-residue-long {
  margin: 0em 0.2em 0em 0.2em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-residue-long-begin {
  margin: 0em 0.2em 0em 0em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-label {
  color: #ae5d04;
  font-size: 90%;
  line-height: 90%;
  padding-bottom: 1em;
  padding-left: 0.2em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-number {
  color: #ae5d04;
  word-break: keep-all;
  cursor: default;
  position: relative;
  top: -1.1em;
  left: 3.1em;
  padding: 0px;
  margin-left: -3em;
  font-size: 80%;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-number-long {
  left: 3.3em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-number-long-negative {
  left: 2.7em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-number-negative {
  left: 2.5em;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-present {
  color: #332b1f;
}
.msp-plugin .msp-sequence-wrapper .msp-sequence-missing {
  color: #9c835f;
}
.msp-plugin .msp-transformer .msp-entity-badge {
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  line-height: 32px;
  width: 32px;
}
.msp-plugin .msp-layout-right,
.msp-plugin .msp-layout-left {
  background: #e0ddd4;
}
.msp-plugin .msp-transformer-wrapper {
  position: relative;
}
.msp-plugin .msp-transformer-wrapper .msp-entity-badge {
  left: 0;
  top: 0;
}
.msp-plugin
  .msp-transformer-wrapper:first-child
  .msp-panel-description-content {
  top: 33px;
}
.msp-plugin
  .msp-transformer-wrapper:not(:first-child)
  .msp-panel-description-content {
  bottom: 33px;
}
.msp-plugin .msp-transform-wrapper {
  margin-bottom: 10px;
}
.msp-plugin .msp-transform-wrapper-collapsed {
  margin-bottom: 1px;
}
.msp-plugin .msp-transform-update-wrapper {
  margin-bottom: 1px;
}
.msp-plugin .msp-transform-update-wrapper-collapsed {
  margin-bottom: 1px;
}
.msp-plugin .msp-transform-update-wrapper > .msp-transform-header > button,
.msp-plugin
  .msp-transform-update-wrapper-collapsed
  > .msp-transform-header
  > button {
  text-align: left;
  padding-left: 32px;
  line-height: 24px;
  background: #e9e6e0;
}
.msp-plugin .msp-transform-wrapper > .msp-transform-header > button {
  text-align: left;
  background: #eeece7;
  font-weight: bold;
  padding-right: 5px;
}
.msp-plugin .msp-transform-header {
  position: relative;
}
.msp-plugin .msp-transform-header > button > small {
  font-weight: normal;
  float: right;
}
.msp-plugin .msp-transform-header > button > span:first-child {
  margin-right: 10px;
}
.msp-plugin .msp-transform-header > button:hover {
  color: #63533c;
}
.msp-plugin .msp-transform-header-brand {
  margin-bottom: -1px;
}
.msp-plugin .msp-transform-header-brand svg {
  fill: #332b1f;
  stroke: #332b1f;
}
.msp-plugin .msp-transform-default-params {
  background: #eeece7;
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  padding: 0;
}
.msp-plugin .msp-transform-default-params:hover {
  background: #fff;
}
.msp-plugin .msp-transform-apply-wrap {
  position: relative;
  margin-top: 1px;
  width: 100%;
  height: 32px;
}
.msp-plugin .msp-transform-refresh {
  width: 87px;
  margin-left: 33px;
  background: #eeece7;
  text-align: right;
}
.msp-plugin .msp-transform-apply {
  display: block;
  position: absolute;
  left: 120px;
  right: 0;
  top: 0;
}
.msp-plugin .msp-transform-apply-wider {
  margin-left: 33px;
}
.msp-plugin .msp-data-beh {
  margin: 10px 0 !important;
}
.msp-plugin .msp-toast-container {
  position: relative;
  z-index: 1001;
}
.msp-plugin .msp-toast-container .msp-toast-entry {
  color: #332b1f;
  background: #e0ddd4;
  position: relative;
  float: right;
  min-height: 32px;
  margin-top: 10px;
  border: 1px solid #cec9ba;
  display: table;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-title {
  height: 100%;
  line-height: 32px;
  padding: 0 10px;
  background: #eeece7;
  font-weight: bold;
  display: table-cell;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-weight: light;
  cursor: pointer;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-message {
  padding: 3px 42px 3px 10px;
  display: table-cell;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-message a {
  text-decoration: none;
  color: #974102;
  font-weight: bold;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-message a:hover {
  text-decoration: underline;
  color: #fc6c03;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-message a:active,
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-message a:focus {
  color: #974102;
  outline-offset: 0;
  outline: none;
}
.msp-plugin .msp-toast-container .msp-toast-entry .msp-toast-hide {
  position: absolute;
  width: 42px;
  right: 0;
  top: 0;
  bottom: 0;
}
.msp-plugin
  .msp-toast-container
  .msp-toast-entry
  .msp-toast-hide
  .msp-btn-icon {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 1px;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding-right: 5px;
}
.msp-plugin .msp-help-row {
  position: relative;
  height: 32px;
  background: #eeece7;
  margin-top: 1px;
  display: table;
  width: 100%;
}
.msp-plugin .msp-help-row > span {
  width: 120px;
  text-align: right;
  padding: 3px 10px;
  color: #63533c;
  display: table-cell;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: default;
}
.msp-plugin .msp-help-row > div {
  background: #f3f2ee;
  position: relative;
  padding: 3px 10px;
  display: table-cell;
}
.msp-plugin .msp-canvas {
  width: 100%;
  height: 100%;
  background-color: #f3f2ee;
}
.msp-plugin .msp-canvas text {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.msp-plugin .msp-canvas circle {
  stroke: #000;
  stroke-width: 10;
  stroke-opacity: 0.3;
}
.msp-plugin .msp-canvas circle:hover {
  fill: #ae5d04;
  stroke: #000;
  stroke-width: 10px;
}
.msp-plugin .msp-canvas .info {
  fill: #fff;
  stroke: #000;
  stroke-width: 3;
}
.msp-plugin .msp-canvas .show {
  visibility: visible;
}
.msp-plugin .msp-canvas .hide {
  visibility: hidden;
}
.msp-plugin .msp-canvas .delete-button rect {
  fill: #ed4337;
  stroke: #000;
}
.msp-plugin .msp-canvas .delete-button text {
  stroke: #fff;
  fill: #fff;
}
.msp-plugin .msp-canvas .delete-button:hover {
  stroke: #000;
  stroke-width: 3;
  fill: #ff6961;
}
.msp-plugin .msp-canvas .infoCircle:hover {
  fill: #4c66b2;
}
.msp-plugin .msp-canvas:focus {
  outline: none;
}
.msp-plugin .msp-logo {
  display: block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 32px;
  width: 100px;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: auto;
  background-image: url(data:image/png;base64,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);
}
.msp-plugin .msp-plugin-content {
  color: #332b1f;
}
.msp-plugin .msp-plugin-init-error {
  white-space: pre;
  margin: 10px;
}`
