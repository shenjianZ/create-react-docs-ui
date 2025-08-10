# create-react-docs-ui

A simple scaffolding tool to quickly set up a modern documentation website powered by [react-docs-ui](https://github.com/btea/react-docs-ui).

This tool creates a new project with a pre-configured, feature-rich documentation site, allowing you to focus solely on writing your Markdown content.

## About the underlying library: react-docs-ui

`react-docs-ui` is a React component library and toolset designed specifically for building documentation websites. Its core philosophy is **configuration over code**.

### Core Features

- **Configuration-Driven**: No need to write complex React components or routing logic. Define your entire site—navigation, sidebar, themes, and footer—through a simple `site.yaml` file.
- **Fully-Featured Out-of-the-Box**:
  - Responsive, modern design.
  - Light/dark theme switching.
  - Markdown rendering (GFM and Frontmatter supported).
  - Built-in syntax highlighting.
  - Quick command menu (`Cmd+K`).
  - Internationalization (i18n) support.
- **Extremely Simple to Start**: Launch a complete documentation site in under a minute.
- **Highly Customizable**: Easily customize the logo, color scheme, navigation links, social media icons, and more.

## Getting Started

### Prerequisites

- **Node.js**: Version `>= 18.0.0`
- **Package Manager**: `npm`, `yarn`, or `pnpm`

### Creating a New Project

Run one of the following commands to create your new documentation site. Replace `my-docs` with your desired project name.

#### npm
```bash
npm create react-docs-ui@latest my-docs
```

#### yarn
```bash
yarn create react-docs-ui my-docs
```

#### pnpm
```bash
pnpm create react-docs-ui my-docs
```

### Running Your Site

After the project is created, navigate into the new directory, install dependencies, and start the development server.

```bash
cd my-docs
npm install
npm run dev
```

Your new documentation website will be running at `http://localhost:5173`.

## Project Structure

The generated project has a straightforward structure:

- **`public/config/site.yaml`**: The central configuration file for your entire site. This is where you'll define navigation, sidebars, and metadata.
- **`public/docs/`**: The directory where all your Markdown documentation files reside. It's pre-configured with `en` and `zh-cn` subdirectories for internationalization.
- **`src/`**: Contains the main application entry point. You typically won't need to modify files here.

## Basic Configuration

To customize your site, you'll primarily edit `public/config/site.yaml`. Here you can:

- **Change the site title and logo**: Modify the `site` object.
- **Add navigation links**: Add items to the `navbar.items` array.
- **Structure your documentation**: Define the hierarchy of your content in the `sidebar.collections` object.

For a complete guide on all available options, please refer to the documentation within your newly created project.

## License

This project is licensed under the [MIT License](LICENSE).
