import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "NextJS + State Management = Good Idea???",
  "publishedAt": "2022-03-15T14:58:53.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/_gRxCvDjWjs/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/_gRxCvDjWjs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/_gRxCvDjWjs/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/_gRxCvDjWjs/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/_gRxCvDjWjs/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["next js", "nextjs state management", "nextjs redux", "next js mobx", "nextjs rxjs", "next js ssg", "state management nextjs", "blue collar coder", "jack herrington next js", "next js static site generation", "next js state managers", "next js jotai", "next js zustand", "next js react query", "nextjs zustand", "nextjs redux typescript"],
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
    children: "We can do data fetching in NextJS during static site generation or during server side rendering, so do we need a state manager? If so, how would that even work? Let\u2019s check it out and see for ourselves whether a state manager is worth the bytes we give it."
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
const url = "src/content/videos/_gRxCvDjWjs.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/_gRxCvDjWjs.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
