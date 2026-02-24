# Content (Markdown)

Two collections drive the site: **pages** (front + about) and **projects**.

## Pages (front page + about)

- **`pages/home.md`** – Front page content (title, description, body).
- **`pages/about.md`** – About page content.

Edit the frontmatter (title, description) and the body (Markdown). Use `![alt](path)` for images; put images in `public/` or next to the `.md` file and reference them by path.

## Projects

- **`projects/*.md`** – One file per project. Frontmatter: `title`, `description`, optional `date`, `image`, `draft`.
- List: **`/projects`**
- Single: **`/projects/<filename-without-ext>`** (e.g. `project-1.md` → `/projects/project-1`).

Add a new project by creating `projects/my-project.md` with the same frontmatter. Set `draft: true` to hide it from the list.

## Config

**`src/content.config.ts`** defines the schema (required/optional fields). Adjust the schema there if you add new frontmatter fields.
