import { useCallback, useMemo, useState } from "react";

const usePricingToggle = (initialType = "monthly") => {
  const [pricingType, setPricingType] = useState(initialType);

  const togglePricingType = useCallback(() => {
    setPricingType((prevType) =>
      prevType === "monthly" ? "annually" : "monthly"
    );
  }, []);

  const getPrice = useCallback(
    (monthlyPrice) =>
      pricingType === "monthly" ? monthlyPrice : monthlyPrice * 10,
    [pricingType]
  );

  const isMonthly = useMemo(() => pricingType === "monthly", [pricingType]);

  return { pricingType, isMonthly, togglePricingType, getPrice };
};

export { usePricingToggle };
