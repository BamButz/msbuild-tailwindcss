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

## Custom Configuration

If you need to use a custom configuration, you can simply create a tailwind.config.js in the same directory as your project file (.csproj).

## Plugins

If you want to use any of the [official tailwindcss plugins](https://tailwindcss.com/docs/plugins#official-plugins) you can simply specify them in your tailwind.config.js file (see example below) and they will automatically be installed at the next build.

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
