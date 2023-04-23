import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 658 393' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.79066 361.374L20.8867 43.9645C20.8867 31.9093 27.1304 21.5858 39.6178 12.9938C52.1053 4.40174 67.0987 0.113042 84.5981 0.127654H594.289C611.809 0.127654 626.813 4.42366 639.301 13.0157C651.788 21.6077 658.021 31.924 658 43.9645V306.985C658 319.041 651.756 329.364 639.269 337.956C626.781 346.548 611.788 350.837 594.289 350.822H148.309L59.9101 380.254C49.8225 387.195 18.809 394.991 5.79064 391.163C-7.22771 387.335 5.76942 371.252 5.79066 361.374Z'
      fill='white'
      stroke='#0090CD'
      strokeWidth={8}
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
