import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Typescript with Module Federation ||  TypeScript Tutorial",
  "publishedAt": "2020-08-19T14:01:57.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/UbEx1v26kCs/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/UbEx1v26kCs/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/UbEx1v26kCs/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/UbEx1v26kCs/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/UbEx1v26kCs/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react", "module federation", "typescript tutorial", "typescript react", "typescript crash course", "typescript advanced", "typescript module federation", "typescript mod-fed", "learn typescript module federation", "module federation for typescript", "federated modules typescript", "mod-fed typescript", "typescript webpack", "typescript module federation tutorial", "ts module federation", "typescript with module federation", "module federation typescript", "module federation typescript crash course"],
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
    children: "Let\u2019s try out Typescript with Module Federation. Turns out it\u2019s not hard. But do you have a better way than me to do this? Let\u2019s find out!"
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
const url = "src/content/videos/UbEx1v26kCs.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/UbEx1v26kCs.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
