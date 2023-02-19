import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "TypeScript/React Testing: Components, Hooks, Custom Hooks, Redux and Zustand",
  "publishedAt": "2021-09-23T16:00:12.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/bvdHVxqjv80/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/bvdHVxqjv80/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/bvdHVxqjv80/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/bvdHVxqjv80/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/bvdHVxqjv80/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["TypeScript/React Testing", "how to test react hooks", "jack herrington", "mock service worker", "react hooks", "react testing crash course", "react testing workshop", "react typescript testing", "redux typescript testing", "testing async function typescript", "testing custom hooks", "testing react components", "testing react components with jest", "testing react hooks", "testing redux with react testing library", "testing typescript async code", "typescript", "typescript react testing", "zustand"],
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
    children: "By viewer request we are looking at testing React TypeScript components all the way from render components, through components with state, asynchronous components, custom hooks, Redux and Zustand."
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
const url = "src/content/videos/bvdHVxqjv80.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/bvdHVxqjv80.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
