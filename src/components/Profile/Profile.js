import React from "react";
import { Box, FormControl, ScrollView, Input, VStack } from "native-base";
import Colors from "../../../color";
import ButtonProp from "../ButtonProp";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((inputs, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {inputs.label}
              </FormControl.Label>
              <Input
                borderColor={Colors.main}
                borderWidth={0.5}
                bg={Colors.subGreen}
                py={3}
                type={inputs.type}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <ButtonProp bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </ButtonProp>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
