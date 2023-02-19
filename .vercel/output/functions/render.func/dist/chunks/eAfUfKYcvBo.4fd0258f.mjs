import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Senior Developer Workflow For Stress-Free Coding",
  "publishedAt": "2021-10-25T14:51:47.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/eAfUfKYcvBo/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/eAfUfKYcvBo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/eAfUfKYcvBo/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/eAfUfKYcvBo/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/eAfUfKYcvBo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Developer Workflow For Stress-Free Coding", "coding tips", "computer science", "developer", "developer workflow", "front end developer day in the life", "how i code", "how to code", "how to write code", "how to write code for beginners", "jack herrington", "low stress coding", "senior dev workflow", "senior developer workflow", "software engineer", "stress free coding"],
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
    children: "Stop being frustrated with your code and take just a few minutes to learn an iterative workflow. Your code will always be working. Your stress level will be low. You\u2019ll be able to go for a lunch or a run and not worry about how to fix your broken code. And you\u2019ll be able to locate bugs down to just a few lines without doing extensive debugging."
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
const url = "src/content/videos/eAfUfKYcvBo.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/eAfUfKYcvBo.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
