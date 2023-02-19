import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "MFE Architecture In-Depth: Build-time & Runtime, Routing, Shared State and Much More!",
  "publishedAt": "2022-05-24T14:58:58.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/4b9LSUZjtzE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/4b9LSUZjtzE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/4b9LSUZjtzE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/4b9LSUZjtzE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/4b9LSUZjtzE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["MFE Architecture", "Module Federation", "Module Federation State", "Module Federation Architecture", "MFE Routing", "Module Federation Routing", "module federation react router", "MFE Shared state", "Module Federation Shared State", "Shared State Architecture", "Build Time and Run Time Sharing", "build time and run time", "module federation build time and run time", "Module Federation Route Sharing", "Turborepo Setup", "MFE Shared Store", "module federation shared store", "blue collar coder"],
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
    children: "We dig in deep in Micro-Frontend Architecture. We do build-time and runtime dependency architectures, routing, appshell architecture, shared state and more!"
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
const url = "src/content/videos/4b9LSUZjtzE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/4b9LSUZjtzE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
