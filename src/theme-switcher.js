/* docsify-theme-switcher
 * A plugin for switching themes in Docsify
 *
 * Copyright (c) 2022 Kevin Zolkiewicz.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import {
  getActiveTheme,
  renderThemeSwitcher,
  setVisibility,
} from "./lib/functions.js";

function themeSwitcher(hook, vm) {
  const { themes } = vm.config.themeSelector;

  hook.mounted(() => {
    if (themes) {
      document.body.classList.add(getActiveTheme());

      const themeSwitcher = renderThemeSwitcher();
      setVisibility(themeSwitcher);

      document
        .querySelector(".sidebar-toggle")
        .insertAdjacentElement("afterend", themeSwitcher);
    }
  });

  hook.beforeEach(() => {
    const selector = document.querySelector(".theme-switcher");
    setVisibility(selector);
  });
}

if (window) {
  // Init plugin
  window.$docsify.plugins = [].concat(
    window.$docsify.plugins || [],
    themeSwitcher
  );
}
