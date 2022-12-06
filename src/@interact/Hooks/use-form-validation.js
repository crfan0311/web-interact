import { useEffect, useState } from "react";

export function useFormValidation({
  selectedTabIndex,
  isFinalTab = false,
  lastCompletedTabIndex,
  setData,
  formValidationConditions,
}) {
  const [isTabValidated, setIsTabValidated] = useState(false);

  useEffect(() => {
    if (formValidationConditions) {
      if (lastCompletedTabIndex < selectedTabIndex + 1 && !isFinalTab) {
        if (selectedTabIndex > 7) {
          setData({
            lastCompletedTabIndex: 7,
          });
        } else {
          setData({
            lastCompletedTabIndex: selectedTabIndex,
          });
        }
      }
      setIsTabValidated(true);
    } else {
      setIsTabValidated(false);
    }
  }, [formValidationConditions]);

  return isTabValidated;
}
