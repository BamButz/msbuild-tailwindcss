# Welcome to MSBuild TailwindCSS 👋

![Nuget](https://img.shields.io/nuget/v/BamButz.MSBuild.TailwindCSS)
![Nuget](https://img.shields.io/nuget/dt/BamButz.MSBuild.TailwindCSS)
![GitHub](https://img.shields.io/github/license/BamButz/msbuild-tailwindcss)

Package adds a build action "TailwindCSS" that will send marked files to postcss with tailwindcss plugin configured

# Installation

The extension can be retrieved via [nuget.org](https://www.nuget.org/packages/BamButz.MSBuild.TailwindCSS/)

> dotnet add package BamButz.MSBuild.TailwindCSS

# Usage

Simply set the build action of your stylesheet to TailwindCSS  
I set up a test file in the project so that you can understand the usage.

# Known limitations

At the moment, the generated stylesheet is simply named "filename".css, so I recommend using the .scss file extension for the source file

Sourcefile -> source.scss  
Generated file -> source.css

If you have a better naming strategy, don't be afraid to open an issue. 🙂