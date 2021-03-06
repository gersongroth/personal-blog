const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const decodeAssetId = (id: string) => {
    const regex = pattern.exec(id);
    if (!regex) {
        return {
            id: id,
        };
    }
    const [, assetId, dimensions, format] = regex;
    const [width, height] = dimensions.split('x').map(v => parseInt(v, 10));

    return {
        assetId,
        dimensions: { width, height },
        format,
    };
};
