export const  mediaPath = (path: string): string => {
    return process.env.NEXT_PUBLIC_IS_GITHUB === "true"
        ? `/portfolio${path}`
        : path;
};