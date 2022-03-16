/**
 * all the paths must be absolute
 */

export type EnvironmentDescription = {
  path: string;
};

export type RuntimeDescription = {
  path: string;
  /**
   * root runtime will not depend on any runtime i.e. dependsOn will be empty array
   */
  dependsOn: RuntimeDescription["path"][];
};

export type MachineDescription = {
  path: string;
  /**
   * root machines will not depend on any machine i.e. dependsOn will be empty array
   */
  dependsOn: MachineDescription["path"][];
};

export type CompilerDescription = {
  path: string;
  /**
   * root compiler will not depend on any machine i.e. dependsOn will be empty array
   */
  dependsOn: MachineDescription["path"][];
};

/**
 * ExtensionDescription
 */
export type ExtensionDescription = {
  path: string;
};

/**
 *
 */
export type ResolverDescription = {
  path: string;
};

export type AppIndexHtml = {
  path: string;
};

export type ProjectConfig = {
  environments: { node: EnvironmentDescription; web: EnvironmentDescription };

  /** UI + Backend Configs */
  machines: MachineDescription[];

  /** UI Configs */
  rootRuntime: RuntimeDescription["path"];
  /** All the runtimes must have unique identifers */
  runtimes: RuntimeDescription[];
  extensions: ExtensionDescription[];

  /** Backend Configs */
  compilers: CompilerDescription[];

  /** Build Configs */
  /** resolvers return the module location of modules such as runtime, machines etc. */
  resolvers: ResolverDescription[];
  /** workdir is the directory where index.ts file for the editor will be generated */
  workdir: string;
  /** index.html file location. default from @atrilabs/atri-editor */
  appIndexHtml: string;
  /** entry file. default will point to autogen index.ts location */
  appEntry: string;
};
