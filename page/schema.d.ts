/**
 * Creates a new generic page definition in the given or default project.
 */
export interface Schema {
    /**
     * The change detection strategy to use in the new page.
     */
    changeDetection?: ChangeDetection;
    /**
     * Specifies if the style will contain `:host { display: block; }`.
     */
    displayBlock?: boolean;
    /**
     * The new page is the entry page of the declaring NgModule.
     * @deprecated Since version 9.0.0 with Ivy, entryComponents is no longer necessary.
     */
    entryComponent?: boolean;
    /**
     * The declaring NgModule exports this page.
     */
    export?: boolean;
    /**
     * Create the new files at the top level of the current project.
     */
    flat?: boolean;
    /**
     * Include styles inline in the page.ts file. Only CSS styles can be included inline.
     * By default, an external styles file is created and referenced in the page.ts file.
     */
    inlineStyle?: boolean;
    /**
     * Include template inline in the page.ts file. By default, an external template file
     * is created and referenced in the page.ts file.
     */
    inlineTemplate?: boolean;
    /**
     * Apply lint fixes after generating the page.
     * @deprecated Use "ng lint --fix" directly instead.
     */
    lintFix?: boolean;
    /**
     * The declaring NgModule.
     */
    module?: string;
    /**
     * The name of the page.
     */
    name: string;
    /**
     * The path at which to create the page file, relative to the current workspace.
     * Default is a folder with the same name as the page in the project root.
     */
    path?: string;
    /**
     * The prefix to apply to the generated page selector.
     */
    prefix?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * The HTML selector to use for this page.
     */
    selector?: string;
    /**
     * Do not import this page into the owning NgModule.
     */
    skipImport?: boolean;
    /**
     * Specifies if the page should have a selector or not.
     */
    skipSelector?: boolean;
    /**
     * Do not create "spec.ts" test files for the new page.
     */
    skipTests?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * Adds a developer-defined type to the filename, in the format "name.type.ts".
     */
    type?: string;
    /**
     * The view encapsulation strategy to use in the new page.
     */
    viewEncapsulation?: ViewEncapsulation;
}
/**
 * The change detection strategy to use in the new page.
 */
export declare enum ChangeDetection {
    Default = "Default",
    OnPush = "OnPush"
}
/**
 * The file extension or preprocessor to use for style files.
 */
export declare enum Style {
    Css = "css",
    Less = "less",
    Sass = "sass",
    Scss = "scss",
    Styl = "styl"
}
/**
 * The view encapsulation strategy to use in the new page.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    Native = "Native",
    None = "None",
    ShadowDom = "ShadowDom"
}
