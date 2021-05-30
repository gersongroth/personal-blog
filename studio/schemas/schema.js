// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import author from './blog/author'
// We import object and document schemas
import blockContent from './blog/blockContent'
import category from './blog/category'
import comment from './blog/comment'
import post from './blog/post'
// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import internalLink from './objects/internalLink'
import link from './objects/link'
import mailchimp from './objects/mailchimp'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import textSection from './objects/textSection'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    comment,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
  ])
})
