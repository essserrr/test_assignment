import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

const variantMapping: Record<string, React.ElementType<any> & string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body1: "p",
  body2: "p",
  span: "span",
};

export type Props = React.HTMLProps<HTMLElement> & {
  align?: "left" | "right" | "center";
  className?: string;
  color?: "primary" | "secondary";
  colorMode?: "dark" | "light";
  component?: React.ElementType<any> & string;
  display?: "block" | "inline-block" | "inline";
  float?: "left" | "right";
  letterSpacing?: number | string;
  lineHeight?: number | string;
  margin?: string;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  size?: number | string;
  transform?: "capitalize" | "lowercase" | "none" | "uppercase";
  variant?: keyof typeof variantMapping;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

type StyledProps = Props;

const StyledTypographyRoot = styled.span<StyledProps>`
  ${({
    align,
    color,
    colorMode = "dark",
    display,
    float,
    letterSpacing,
    lineHeight,
    margin,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    size,
    theme,
    transform,
    variant = "span",
    weight,
  }) => {
    const styleOverrides: SerializedStyles = css`
      ${align !== undefined && `text-align: ${align};`}
      ${color !== undefined &&
      `color: ${theme.palette.text[colorMode][color]}`};
      ${display !== undefined && `display: ${display};`}
      ${float !== undefined && `float: ${float};`}
      ${letterSpacing !== undefined && `letter-spacing: ${letterSpacing};`}
      ${lineHeight !== undefined && `line-height: ${lineHeight};`}
      ${margin !== undefined && `margin: ${margin};`}
      ${mx && `margin-left: ${mx}px; margin-right: ${mx}px;`}
      ${my && `margin-top: ${my}px; margin-bottom: ${my}px;`}
      ${mt && `margin-top: ${mt}px;`}
      ${mr && `margin-right: ${mr}px;`}
      ${mb && `margin-bottom: ${mb}px;`}
      ${ml && `margin-left: ${ml}px;`}
      ${size !== undefined && `font-size: ${size}px;`}
      ${transform && `text-transform: ${transform};`}
      ${weight !== undefined && `font-weight: ${weight};`}
    `;

    const variantStyles: Record<string, SerializedStyles> = {
      h1: css`
        color: ${theme.palette.text[colorMode].primary};
        font-family: ${theme.typography.fontSecondary};
        font-size: 24px;
        font-weight: 400;
        line-height: 1.4;

        ${theme.breakpoints.md} {
          font-size: 36px;
          line-height: 1.5;
        }

        ${theme.breakpoints.lg} {
          font-size: 52px;
        }
      `,

      h2: css`
        color: ${theme.palette.text[colorMode].primary};
        font-family: ${theme.typography.fontSecondary};
        font-size: 22px;
        font-weight: 700;
        line-height: 1.4;

        ${theme.breakpoints.md} {
          font-size: 36px;
          line-height: 1.5;
        }

        ${theme.breakpoints.lg} {
          font-size: 44px;
        }
      `,

      h3: css`
        color: ${theme.palette.text[colorMode].primary};
        font-family: ${theme.typography.fontSecondary};
        font-size: 18px;
        font-weight: 700;
        line-height: 1.4;

        ${theme.breakpoints.md} {
          font-size: 24px;
          line-height: 1.6;
        }
      `,

      body1: css`
        color: ${theme.palette.text[colorMode].secondary};
        font-family: ${theme.typography.fontPrimary};
        font-size: 15px;
        line-height: 1.5;

        ${theme.breakpoints.md} {
          font-size: 20px;
        }

        ${theme.breakpoints.lg} {
          font-size: 22px;
        }
      `,

      body2: css`
        color: ${theme.palette.text[colorMode].primary};
        font-family: ${theme.typography.fontPrimary};
        font-size: 14px;
        line-height: 1.6;

        ${theme.breakpoints.md} {
          font-size: 16px;
          line-height: 1.5;
        }
      `,

      span: css`
        color: inherit;
        font-family: ${theme.typography.fontPrimary};
      `,
    };

    return css`
      ${variantStyles[variant]};
      ${styleOverrides};
    `;
  }}
`;

export const Typography: React.FC<Props> = ({
  children,
  component,
  variant = "span",
  ...props
}) => {
  const Component = component || variantMapping[variant];

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledTypographyRoot {...props} as={Component} variant={variant}>
      {children}
    </StyledTypographyRoot>
  );
};
