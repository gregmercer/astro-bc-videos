import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Nobody Wins A Programmer Fight",
  "publishedAt": "2021-09-27T15:45:00.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/0eoyWYP6I4Q/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/0eoyWYP6I4Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/0eoyWYP6I4Q/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/0eoyWYP6I4Q/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/0eoyWYP6I4Q/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["programmer fights", "blue collar coder", "programmer vs programmer", "workplace conflict resolution", "software engineering conflicts", "engineering conflicts", "Nobody Wins A Programmer Fight", "OOP versus FP", "React versus Vue", "technical debate"],
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
    children: "Healthy debate about things like React versus Vue, OOP versus FP, strongly typed versus dynamically typed is fine, but sometimes it can get ugly. So let\u2019s talk about how to mitigate the fallout from a technical debate that gets too heated."
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
const url = "src/content/videos/0eoyWYP6I4Q.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/0eoyWYP6I4Q.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
