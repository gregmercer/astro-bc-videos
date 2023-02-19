import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "5 Software Job Secrets From A Senior Developer",
  "publishedAt": "2022-03-21T15:02:19.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/bLyl4VDNPyY/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/bLyl4VDNPyY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/bLyl4VDNPyY/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/bLyl4VDNPyY/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/bLyl4VDNPyY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["software development jobs", "software development", "development jobs", "web development jobs", "web developer day in the life", "software career", "software engineer career advice", "programming jobs", "software engineering", "job tips", "developer job tips", "software job secrets", "software job tips", "software engineer career tips", "developer career tips", "developer career advice", "Job Secrets From A Senior Developer", "advice from a senior developer", "tips from a senior developer"],
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
    children: "Learn five secrets that they don\u2019t teach in code school to help you build a long, enjoyable and prosperous career in software."
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
const url = "src/content/videos/bLyl4VDNPyY.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/bLyl4VDNPyY.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
