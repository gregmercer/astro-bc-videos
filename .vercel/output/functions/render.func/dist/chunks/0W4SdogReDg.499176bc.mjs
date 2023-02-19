import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Redux Sagas vs Redux Toolkit Query",
  "publishedAt": "2021-10-07T14:16:35.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/0W4SdogReDg/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/0W4SdogReDg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/0W4SdogReDg/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/0W4SdogReDg/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/0W4SdogReDg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Redux Sagas vs Redux Toolkit Query", "redux toolkit", "redux", "react", "react redux tutorial", "redux saga", "redux toolkit react", "redux saga explained", "redux toolkit tutorial", "react redux", "redux tutorial", "redux saga create react app", "react redux toolkit", "redux toolkit api", "redux toolkit query", "redux toolkit example", "redux thunk", "redux saga tutorial", "redux-saga tutorial", "sagas vs toolkit query", "redux sagas vs redux toolkit query", "RTK Query", "redux saga vs rtk query"],
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
    children: "Redux Saga and Redux Toolkit Query are two great ways to do API access. Let\u2019s compare them head to head doing full create, read, update and delete operations on both libraries. If you\u2019ve only seen one of these in action you\u2019ll want to check this out!"
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
const url = "src/content/videos/0W4SdogReDg.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/0W4SdogReDg.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
