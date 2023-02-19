import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Svelte, URQL, Apollo Speed Run",
  "publishedAt": "2021-10-11T13:29:42.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/ITVS76JpNn8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/ITVS76JpNn8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/ITVS76JpNn8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/ITVS76JpNn8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/ITVS76JpNn8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["svelte", "sveltekit", "sveltekit graphql", "svelte graphql", "urql tutorial", "svelte urql", "graphql code generator", "graphql codegen typescript", "graphql typescript", "apollo server", "svelte tutorial", "sveltejs", "svelte js", "getting started with svelte", "sveltekit tutorial", "svelte quickstart", "architecture speedrun", "Svelte", "URQL", "Apollo Speed Run", "Svelte Kit", "Svelte CMS Application", "svelte tailwind", "svelte urql apollo"],
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
    children: "We build a CMS application fast that connects Svelte to an Apollo server using URQL and the GraphQL Code Generator."
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
const url = "src/content/videos/ITVS76JpNn8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/ITVS76JpNn8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
