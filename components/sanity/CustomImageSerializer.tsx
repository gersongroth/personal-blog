// TODO - resolve vscode error ts
// build is working fine, but vscode still showing error
// @ts-ignore
import { getImageUrl } from '@sanity/block-content-to-hyperscript';
import Image from 'next/image';
import React from 'react';
import { decodeAssetId } from '../../utils/sanity/SanityImage';

const CustomImageSerializer = (props: { node: { asset: { _ref: string; }; }; }) => {
    const { assetId, dimensions } = decodeAssetId(props.node.asset._ref);

    if (!!dimensions?.height && !!dimensions?.width) {
        return <Image alt={assetId} width={dimensions.width} height={dimensions.height} src={getImageUrl(props)} />;
    }

    return React.createElement('img', { src: getImageUrl(props), loading: 'lazy', alt: { assetId } });
};

export default CustomImageSerializer;
