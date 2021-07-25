// TODO - resolve vscode error ts
// build is working fine, but vscode still showing error
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import markdownStyles from '../markdown-styles.module.css';
import CustomImageSerializer from './CustomImageSerializer';

const PostBody = ({ content }: any) => {
    return (
        <div className="max-w-2xl mx-auto">
            <BlockContent
                serializers={{
                    types: {
                        image: CustomImageSerializer,
                    },
                }}
                blocks={content}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                className={markdownStyles.markdown}
            />
        </div>
    );
};

export default PostBody;
