import { ProjectConfig } from "./Projectconfig";
const projectConfig: any = {
  environments: { node: { path: "" }, web: { path: "" } },
  rootRuntime: "/rootRuntime/Runtime",
  runtimes: [
    {
      path: "/rootRuntime/Runtime/Runtime1",
      dependsOn: [],
    },
    {
      path: "/rootRuntime/Runtime/Runtime2",
      dependsOn: [],
    },
  ],
  machines: [
    {
      path: "machines/Machines/machine-primary",
      dependsOn: [],
    },
    {
      path: "machines/Machines/machine-secondary",
      dependsOn: [],
    },
  ],
  extensions: [
    {
      path: "Extention/extention1",
    },
    {
      path: "Extention/extention2",
    },
  ],
  compilers: [
    {
      path: "./Compilers/compiler-1",
      dependsOn: [],
    },
    {
      path: "./Compilers/compiler-2",
      dependsOn: [],
    },
  ],
  resolvers: [
    {
      path: "Resolvers/resolver1",
    },
    {
      path: "Resolvers/resolver2",
    },
  ],
  workdir: "./index.tsx",
  appEntry: "",
  appIndexHtml: "./index.html",
};

export default projectConfig;
