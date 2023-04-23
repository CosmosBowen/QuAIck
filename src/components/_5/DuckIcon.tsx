import { memo, SVGProps } from 'react';

const DuckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 534 434' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_54_58)'>
      <rect y={56} width={534} height={378} rx={150} fill='#FFD601' />
      <rect y={56} width={534} height={378} rx={150} stroke='#F49300' strokeWidth={8} />
    </g>
    <ellipse cx={160} cy={260} rx={26} ry={45} fill='black' />
    <ellipse cx={369} cy={260} rx={26} ry={45} fill='black' />
    <circle cx={107} cy={312} r={45} fill='#FF9BAD' />
    <circle cx={422} cy={312} r={45} fill='#FF9BAD' />
    <path
      d='M274 348.225C268.636 353.18 260.364 353.18 255 348.225L193.36 291.284C184.001 282.638 190.118 267 202.86 267H326.14C338.882 267 344.999 282.638 335.64 291.284L274 348.225Z'
      fill='#FFA800'
    />
    <rect x={197} width={68} height={83} rx={34} fill='#FFD601' stroke='#F49300' strokeWidth={8} />
    <rect x={248} y={17} width={68} height={83} rx={34} fill='#FFD601' stroke='#F49300' strokeWidth={8} />
    <rect x={173} y={56} width={195} height={100} fill='#FFD601' />
    <defs>
      <filter
        id='filter0_d_54_58'
        x={-8}
        y={52}
        width={550}
        height={394}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_54_58' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_54_58' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(DuckIcon);
export { Memo as DuckIcon };
