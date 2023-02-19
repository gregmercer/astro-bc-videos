import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Redux Toolkit Query vs React Query",
  "publishedAt": "2021-10-18T13:58:01.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/LDS1ll93P-s/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/LDS1ll93P-s/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/LDS1ll93P-s/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/LDS1ll93P-s/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/LDS1ll93P-s/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["RTK Query", "RTK Query vs React Query", "RTK query tutorial", "React Query", "React Query Application", "Redux Toolkit", "Redux Toolkit Query", "Redux Toolkit Query Application", "Redux Toolkit Query vs React Query", "jack herrington", "react query", "react query tutorial", "react query vs redux", "react redux toolkit", "redux", "redux rtk query", "redux sagas vs redux toolkit query", "redux toolkit", "redux toolkit query tutorials", "redux toolkit react", "redux toolkit tutorial", "rtk query"],
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
    children: "Picking an API access library for your React app is tough, there are so many great choices! Let\u2019s take a look at two of the most popular; React Query and Redux Toolkit Query."
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
const url = "src/content/videos/LDS1ll93P-s.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/LDS1ll93P-s.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
