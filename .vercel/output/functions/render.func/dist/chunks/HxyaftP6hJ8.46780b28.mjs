import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Avoid Bad Job Fits with Five Interviewer Questions",
  "publishedAt": "2021-09-10T13:05:49.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/HxyaftP6hJ8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/HxyaftP6hJ8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/HxyaftP6hJ8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/HxyaftP6hJ8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/HxyaftP6hJ8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["5 interviewer questions", "avoid wrong jobs", "career", "interview mistakes", "interview mistakes to avoid", "interview questions", "interview questions and answers", "interview tips", "jack herrington", "job interview", "job interview advice", "job interview mistakes", "job interview mistakes to avoid", "job interview questions", "job interview tips", "job search", "tech interview", "tech interview questions", "tech interview tips", "tech interviewer questions"],
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
    children: "YOU get to ask questions during the interview, but so many folks don\u2019t use that opportunity to ask real questions that will weed out the bad jobs."
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
const url = "src/content/videos/HxyaftP6hJ8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/HxyaftP6hJ8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
