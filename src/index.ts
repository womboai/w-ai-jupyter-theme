import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import { IThemeManager } from "@jupyterlab/apputils";

const plugin: JupyterFrontEndPlugin<void> = {
  id: "jupyterlab-theme-wai:plugin",
  description: "w.ai dark theme for JupyterLab",
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = "jupyterlab-theme-wai/index.css";

    manager.register({
      name: "w.ai Dark",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },
};

export default plugin;
