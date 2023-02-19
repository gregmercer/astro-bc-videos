import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #25 - Typescript/React - useContext",
  "publishedAt": "2021-06-01T13:09:55.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/OseG8oQ2RDM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/OseG8oQ2RDM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/OseG8oQ2RDM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/OseG8oQ2RDM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/OseG8oQ2RDM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS 25", "No BS TS #25 - Typescript/React - useContext", "Typescript react usecontext", "usecontext typescript react", "usecontext for typescript react", "typescript react usecontext", "usecontext for react typescript", "usecontext react typescript hooks", "react typescript usecontext hook", "usecontext", "usecontext react hooks", "createcontext", "usecontext react", "no bs ts", "usecontext hook for react typescript", "react typescript with usecontext hook", "Typescript/React - useContext"],
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
    children: "We start off exploring global state management by having a look at useContext and how to properly use and type it."
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
const url = "src/content/videos/OseG8oQ2RDM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/OseG8oQ2RDM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
