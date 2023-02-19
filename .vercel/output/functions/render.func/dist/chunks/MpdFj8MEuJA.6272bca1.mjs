import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Mastering React Context: Do you NEED a state manager?",
  "publishedAt": "2022-02-14T15:53:03.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/MpdFj8MEuJA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/MpdFj8MEuJA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/MpdFj8MEuJA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/MpdFj8MEuJA/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/MpdFj8MEuJA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["jack herrington", "react context", "blue collar coder", "jack herrington usecontext", "useContext", "Mastering Context", "mastering context", "Context Versus State Managers", "react usecontext", "react state management usecontext", "react state management", "master react usecontext", "master react context", "react useContext", "react context api", "Context Using use-context-selector", "When Context Updates Components", "Context Using Prop Drilling", "context api", "context API"],
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
    children: "Context in React is a super valuable tool, but can it replace a state manager? Let\u2019s find out!"
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
const url = "src/content/videos/MpdFj8MEuJA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/MpdFj8MEuJA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
