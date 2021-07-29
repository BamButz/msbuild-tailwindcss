# Welcome to MSBuild TailwindCSS 👋

[![Nuget](https://img.shields.io/nuget/v/BamButz.MSBuild.TailwindCSS)](https://www.nuget.org/packages/BamButz.MSBuild.TailwindCSS/)
[![Nuget](https://img.shields.io/nuget/dt/BamButz.MSBuild.TailwindCSS)](https://www.nuget.org/packages/BamButz.MSBuild.TailwindCSS/)
[![GitHub](https://img.shields.io/github/license/BamButz/msbuild-tailwindcss)](LICENSE)

Package adds a build action "TailwindCSS" that will send marked files to postcss with tailwindcss plugin configured

Activated PostCSS Plugins:

- tailwindcss
- nesting
- cssnano

# Installation

The extension can be retrieved via [nuget.org](https://www.nuget.org/packages/BamButz.MSBuild.TailwindCSS/)

> dotnet add package BamButz.MSBuild.TailwindCSS

# Usage

Simply set the build action of your stylesheet to TailwindCSS during build the extension will output a file with .min.css extension and the same name and location as its source file

I set up a test file in the project so that you can understand the usage.

## Tailwind Configuration

A tailwind.config.js must exist in the same directory as your project file (.csproj). During the first build of your project after adding this extension, a minimal tailwind.config.js will be added to your project if one is not already present. This allows the [incremental build](https://docs.microsoft.com/en-us/visualstudio/msbuild/how-to-build-incrementally?view=vs-2019) process to work. Each change you make to this file will result in a rebuild of your css files.

## Plugins

If you want to use any of the [official tailwindcss plugins](https://tailwindcss.com/docs/plugins#official-plugins) you can simply specify them in your tailwind.config.js file (see example below) and they will automatically be included in your compiled css.

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```

# Contribution

If you have any ideas to improve this extension, don't be afraid to open an issue. 🙂
