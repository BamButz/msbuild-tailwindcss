# Welcome to MSBuild TailwindCSS 👋

![Nuget](https://img.shields.io/nuget/v/BamButz.MSBuild.TailwindCSS)
![Nuget](https://img.shields.io/nuget/dt/BamButz.MSBuild.TailwindCSS)
![GitHub](https://img.shields.io/github/license/BamButz/msbuild-tailwindcss)

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

# Contribution

If you have any ideas to improve this extension, don't be afraid to open an issue. 🙂