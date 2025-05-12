export type buttonType = {
    title: string;
    expand: 'full' | 'block';
    outline: 'clear' | 'outline' | 'solid';
    isTask: boolean;
    children?: React.ReactNode;
  };
  