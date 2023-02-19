import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Professional Micro-Frontend Shared State Setup",
  "publishedAt": "2022-04-11T14:50:26.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/432thqUKs-Y/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/432thqUKs-Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/432thqUKs-Y/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/432thqUKs-Y/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/432thqUKs-Y/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Micro frontend", "micro frontend", "micro frontend shared state", "turborepo", "turborepo module federation", "Micro-Frontend Shared State", "module federation zustand", "module federation react", "module federation typescript", "build time sharing", "run time sharing", "micro frontends", "mono repo", "mono repo setup", "App-Shell Setup", "Fixing Eager Consumption", "state sharing built Zustand", "Micro-Frontend Shared State Setup", "blue collar coder", "jack herrington micro frontend", "module federation"],
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
    children: "Get your MFE App-Shell set up right using TurboRepo, Module Federation, in runtime, or build-time mode, with state sharing built with Zustand."
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
const url = "src/content/videos/432thqUKs-Y.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/432thqUKs-Y.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
