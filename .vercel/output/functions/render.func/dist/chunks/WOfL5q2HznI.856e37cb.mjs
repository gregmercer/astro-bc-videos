import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Typescript NX Monorepo with NextJS and Express",
  "publishedAt": "2021-06-16T13:05:14.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/WOfL5q2HznI/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/WOfL5q2HznI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/WOfL5q2HznI/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/WOfL5q2HznI/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/WOfL5q2HznI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["NX monorepo", "NX monorepo typescript", "NX monorepo with NextJS and Express", "NX typescript monorepo", "NX with NextJS and Express", "Typescript Monorepo", "Typescript Monorepo with NextJS and Express", "Typescript NX Monorepo with NextJS and Express", "Typescript NX Monorepos with NextJS and Express", "Typescript NX monorepo", "Typescript monorepo with NX", "Typescript testing cypress", "cypress testing", "cypress testing typescript", "jack herrington", "next js", "nx", "nx monorepo tutorial", "nx typescript"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Let\u2019s build an NX monorepo with an express API that shares Typescript types with a NextJS applications that we then test with Cypress. So much to learn and do, let\u2019s get into it!"
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/videos/WOfL5q2HznI.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/WOfL5q2HznI.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
