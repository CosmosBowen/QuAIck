import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 658 393' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.79066 361.246L20.8867 43.8369C20.8867 31.7817 27.1304 21.4582 39.6178 12.8661C52.1053 4.27412 67.0987 -0.0145751 84.5981 3.7213e-05H594.289C611.809 3.7213e-05 626.813 4.29605 639.301 12.8881C651.788 21.4801 658.021 31.7963 658 43.8369V306.858C658 318.913 651.756 329.237 639.269 337.829C626.781 346.421 611.788 350.709 594.289 350.695H148.309L59.9101 380.127C49.8225 387.067 18.809 394.864 5.79064 391.035C-7.22771 387.207 5.76942 371.124 5.79066 361.246Z'
      fill='white'
      stroke='#0090CD'
      strokeWidth={8}
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
