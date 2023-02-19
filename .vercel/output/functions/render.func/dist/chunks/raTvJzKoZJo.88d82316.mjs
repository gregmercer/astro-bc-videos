import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #28 - Typescript/React - Zustand",
  "publishedAt": "2021-06-04T12:57:08.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/raTvJzKoZJo/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/raTvJzKoZJo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/raTvJzKoZJo/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/raTvJzKoZJo/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/raTvJzKoZJo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["no bs ts", "typescript react tutorial", "zustand", "zustand react", "typescript zustand", "No BS TS 28 Zustand", "zustand state manager for typescript react", "typescript react zustand state management", "zustand state for typescript react", "zustand with typescript react", "zustand state manager for react typescript", "zustand for react/typescript", "zustand state management with react typescript", "Typescript/React - Zustand", "No BS TS #28 - Typescript/React - Zustand"],
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
    children: "Lets check out Zustand, a light weight state manager with that is immutable like Redux, and has great type safety."
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
const url = "src/content/videos/raTvJzKoZJo.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/raTvJzKoZJo.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
