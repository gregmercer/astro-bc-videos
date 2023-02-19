import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Build A K K Slider Slider with Framer Motion on React",
  "publishedAt": "2020-05-15T16:26:53.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/2DbX0xFL0nk/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/2DbX0xFL0nk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/2DbX0xFL0nk/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/2DbX0xFL0nk/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["javascript", "react", "framer motion", "animal crossing", "animation", "react slider", "react slider framer motion", "react kk slider", "react swipeable carousel", "carousel react framer motion", "slider react framer motion", "react framer motion slider", "react framer motion carousel", "jack herrington react slider", "slider react and framer motion", "carousel react and framer motion", "K K slider react js", "slider framer motion", "framer motion slider"],
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
    children: "Let\u2019s use Framer Motion on React to create a swipeable carousel for K K Slider album covers!"
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
const url = "src/content/videos/2DbX0xFL0nk.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/2DbX0xFL0nk.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
