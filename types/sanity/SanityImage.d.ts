import { ProjectConfig } from '../../node_modules/next-sanity/src/types';

export interface SanityImageProps {
    alt?: string;
    imageObject?: ProjectConfig;
    url?: string;
    width?: number;
    height?: number;
    className?: string;
}
