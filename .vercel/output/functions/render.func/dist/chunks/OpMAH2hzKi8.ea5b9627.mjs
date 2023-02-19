import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Did NextJS 13 Break State Management?",
  "publishedAt": "2023-01-17T16:04:43.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/OpMAH2hzKi8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/OpMAH2hzKi8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/OpMAH2hzKi8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/OpMAH2hzKi8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/OpMAH2hzKi8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["next 13", "nextjs 13", "next.js 13", "next js 13", "zustand", "nextjs 13 zustand", "next 13 zustand", "nextjs react 18", "mui nextjs", "vite nextjs", "nextjs middleware", "nextjs 13 state management", "next 13 state management", "next 13 store", "next js 13 store", "next", "nextjs", "next js", "next.js", "nextjs react", "nextjs typescript", "nextjs api", "next js typescript", "nextjs npm"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "NextJS 13 changes the state management game. We now have to support two different ways to get state for React Server Components (RSC) and the traditional client components."
    }), "\n", createVNode(_components.p, {
      children: "Don\u2019t do this:"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " { create } "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "'zustand'"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ";"
          })]
        })
      })
    })]
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
const url = "src/content/videos/OpMAH2hzKi8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/OpMAH2hzKi8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
