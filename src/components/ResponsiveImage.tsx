interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
}

export const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ResponsiveImageProps) => {
  // Generate WebP version path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, ".webp");
  const jpgSrc = src;

  return (
    <picture>
      {/* WebP format with srcset for different sizes */}
      <source type="image/webp" srcSet={`${webpSrc} ${width}w`} sizes={sizes} />
      {/* JPG fallback with srcset */}
      <source type="image/jpeg" srcSet={`${jpgSrc} ${width}w`} sizes={sizes} />
      {/* Fallback img tag */}
      <img
        src={jpgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </picture>
  );
};
