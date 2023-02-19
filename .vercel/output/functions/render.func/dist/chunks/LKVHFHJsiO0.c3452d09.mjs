import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #1 - Typescript Setup & Everyday Types",
  "publishedAt": "2021-04-19T12:59:52.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/LKVHFHJsiO0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/LKVHFHJsiO0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/LKVHFHJsiO0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/LKVHFHJsiO0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/LKVHFHJsiO0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "No BS TS 1", "everyday types for typescript", "everyday types in typescript", "how to setup typescript", "jack herrington", "no bs ts", "no bs ts setup and everyday types", "set up typescript", "setting up typescript", "setup and everyday types for typescript", "setup typescript", "typescript", "typescript basics", "typescript crash course", "typescript everyday types", "typescript setup", "typescript setup and everyday types", "typescript setup and types", "typescript tutorial", "typescript types"],
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
    children: "Let\u2019s skip the chatter and get right into Typescript, why you should use it, how to set it up and how to start typing your variables."
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
const url = "src/content/videos/LKVHFHJsiO0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/LKVHFHJsiO0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
