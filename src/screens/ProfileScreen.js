import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import Colors from "../../color";
import Tabs from "../components/Profile/Tab";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/drrcyxiwu/image/upload/v1664270761/cld-sample.jpg",
          }}
          alt="Profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded={50}
        />
        <Heading bold isTruncated fontSize={15} my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 20 2023
        </Text>
      </Center>

      {/* TABS */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
