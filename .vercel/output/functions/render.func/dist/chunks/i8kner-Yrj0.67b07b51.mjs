import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "React Location: Better than React Router?",
  "publishedAt": "2021-11-17T23:24:04.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/i8kner-Yrj0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/i8kner-Yrj0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/i8kner-Yrj0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/i8kner-Yrj0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/i8kner-Yrj0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react router", "react router dom", "react-router-dom", "react router link", "react location", "tanstack react", "tanstack", "tanner linsley", "jack herrington", "react routing", "react router v6", "React Location: Better than React Router?", "async routing react loaction"],
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
    children: "React Router has been the best in class router for years now. But now the creator of React Query, Tanner Linsley, has developed and just released a new router for the Tanstack named React Location. Declarative routing? Check. Asynchronous route loading? Got it. Easy data pre-loading? Absolutely. This library is a blast and it works on both the client and the server. So let\u2019s give it a try."
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
const url = "src/content/videos/i8kner-Yrj0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/i8kner-Yrj0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
