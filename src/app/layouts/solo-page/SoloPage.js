import React from "react";
import JumboLayout from "@jumbo/components/JumboLayout";
import useJumboLayout from "@jumbo/hooks/useJumboLayout";
import layoutConfig from "./layoutConfig";

const SoloPage = ({ children }) => {
  const { jumboLayoutOptions, setJumboLayoutOptions } =
    useJumboLayout();

  React.useEffect(() => {
      setJumboLayoutOptions(layoutConfig);
  }, []);
  /*React.useEffect(() => {
    if (jumboLayoutOptions !== layoutConfig) {
      setJumboLayoutOptions(layoutConfig);
    }
  }, [jumboLayoutOptions]);*/

  return <JumboLayout>{children}</JumboLayout>;
};

export default SoloPage;
