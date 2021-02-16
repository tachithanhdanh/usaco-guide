import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

// @ts-ignore
import FAQ from '../faq.mdx';

import { DiscussionEmbed } from 'disqus-react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { components } from '../components/markdown/MDXProvider';
import { MDXProvider } from '@mdx-js/react';
import { OffsetAnchor } from '../components/markdown/HTMLComponents';

const customComponents = {
  ...components,

  h1: ({ id, children, ...props }) => (
    <h1
      {...props}
      className="leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis "
    >
      <OffsetAnchor id={id} />
      {children}
    </h1>
  ),
  h2: ({ id, children, ...props }) => (
    <h2
      className="leading-tight text-2xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis relative"
      {...props}
    >
      <OffsetAnchor id={id} />
      {children}
    </h2>
  ),
  h3: ({ id, children, ...props }) => (
    <h3 {...props} className="leading-snug text-xl font-semibold mb-4 mt-8">
      <OffsetAnchor id={id} />
      {children}
    </h3>
  ),
};

export default function USACOFAQPage(props: PageProps) {
  const { darkMode } = useContext(UserDataContext);

  const shareURL = 'https://usaco.guide/usaco-faq';

  const handleShare = platform => {
    if (window.ga) {
      window.ga('send', 'event', 'share', 'usaco-faq', platform);
    }
  };

  return (
    <Layout>
      <SEO
        title="USACO Frequently Asked Questions"
        description="Getting started with USACO can be challening. Here, we address some of the most common questions people have."
        image={props.data.image.childImageSharp.resize}
      />

      <TopNavigationBar />

      <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200 dark:text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200 dark:text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              USACO{' '}
              <span className="text-blue-700 dark:text-blue-300">FAQ</span>
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-600 dark:text-gray-400">
              Getting started with USACO can be challenging. Here, we address
              some of the most common questions people have.
            </p>
            <div className="mt-6">
              <p className="text-blue-600 dark:text-blue-400 mb-1 font-semibold">
                Share this article!
              </p>
              <div>
                <FacebookShareButton
                  url={shareURL}
                  quote="Check out this article to learn more about USACO!"
                  hashtag="#usaco"
                  beforeOnClick={() => handleShare('facebook')}
                >
                  <FacebookIcon size={40} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                  beforeOnClick={() => handleShare('twitter')}
                >
                  <TwitterIcon size={40} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                  summary="Check out this article to learn more about USACO!"
                  source="USACO Guide"
                  beforeOnClick={() => handleShare('linkedin')}
                >
                  <LinkedinIcon size={40} />
                </LinkedinShareButton>
                <RedditShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                  beforeOnClick={() => handleShare('reddit')}
                >
                  <RedditIcon size={40} />
                </RedditShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="markdown">
            <MDXProvider components={customComponents}>
              <FAQ />
            </MDXProvider>
          </div>

          <hr className="my-12 border-gray-200 border-t" />

          <div className="pb-8">
            <DiscussionEmbed
              shortname="usacoguide"
              config={{
                url: `https://usaco.guide/blog/usaco-faq`,
                identifier: 'usaco-faq-page',
              }}
              // technically this isn't a valid prop, but disqus will detect the prop change
              // and will re-render automatically.
              // @ts-ignore
              theme={darkMode ? 'dark' : 'light'}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "faq-image.jpg" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`;
