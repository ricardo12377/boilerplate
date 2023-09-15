import { FC } from "react";

interface Props {
  title: string;
}

export const PageTitle: FC<Props> = ({ title }) => {
  return (
    <h1
      className="w-screen text-white h-16 flex items-center justify-center"
      data-testid="hi"
    >
      {title}
    </h1>
  );
};
