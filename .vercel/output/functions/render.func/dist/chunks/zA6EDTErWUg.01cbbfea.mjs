import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Who is Better? Human vs Copilot AI for React Code",
  "publishedAt": "2022-01-17T15:37:27.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/zA6EDTErWUg/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/zA6EDTErWUg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/zA6EDTErWUg/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/zA6EDTErWUg/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/zA6EDTErWUg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["blur collar coder", "human vs copliot jack herrrington", "Human Code vs Copilot AI", "Human vs Github Copilot", "Github Copilot react", "copilot github", "Human Code vs Copilot AI for React Code", "Copilot AI for React Code", "Which is Better: Human Code vs Copilot AI for React Code?", "Github Copilot vs Human", "github copilot vscode", "github copilot", "human vs copilot", "who is the better coder?", "human code vs copilot code"],
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
    children: "Can Copilot write a good React hook? Let\u2019s see what Copilot comes up with for a useTimer hook, get it to work and then refine it to make a solid hook that you can use. And we can learn more about useState and useEffect along the way!"
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
const url = "src/content/videos/zA6EDTErWUg.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/zA6EDTErWUg.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
