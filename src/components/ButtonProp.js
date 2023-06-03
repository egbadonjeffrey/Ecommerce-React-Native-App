import { Button } from "native-base";
import React from "react";

const ButtonProp = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
        fontSize: "20px",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default ButtonProp;
