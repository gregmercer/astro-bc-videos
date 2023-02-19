import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #2 - Typescript Functions",
  "roadmap": "typescript",
  "publishedAt": "2021-04-20T12:58:17.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/-TsIUuA3yyE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/-TsIUuA3yyE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/-TsIUuA3yyE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/-TsIUuA3yyE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/-TsIUuA3yyE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "basic functions in ts", "defining functions in ts", "defining typescript functions", "defining typescript functions no bs ts", "functions in typescript", "functions in typescript no bs ts", "jack herrington", "no bs ts", "no bs ts 2", "no bs ts functions", "no bs ts typescript function", "no bs ts typescript functions", "ts basic functions", "ts misconception", "typescript", "typescript function", "typescript functions", "typescript functions no bs ts", "typescript misconception", "typescript tutorial"],
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
    children: "Let\u2019s dig into defining Typescript functions and cover the #1 misconception that programmers have about Typescript."
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
const url = "src/content/videos/-TsIUuA3yyE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/-TsIUuA3yyE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
