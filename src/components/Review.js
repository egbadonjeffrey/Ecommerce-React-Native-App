import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  CheckIcon,
  Select,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../../color";
import Rating from "./Rating";
import Message from "../components/Notifications/Message";
import ButtonProp from "./ButtonProp";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={20} mb={2}>
        Review
      </Heading>
      {/* IF THERE IS NOT HEADING */}
      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        size={15}
        children="NO REVIEWS"
      /> */}

      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={20} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={15}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={15}
          children="Get into some summery fun in your new fave AJ1s. Made with a
          combination of suede and canvas, this pair gives you the comfort you
          know and love with a seasonal update. Get into some summery fun in
          your new fave AJ1s."
        />
      </Box>
      {/* <Box mt={6}>
        <Heading bold fontSize={20} mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "20px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              value={ratings}
              selectedValue={ratings}
              onValueChange={(e) => {
                setRatings(e);
              }}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "20px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This is a good product..."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />{" "}
          </FormControl>
          <ButtonProp bg={Colors.main} color={Colors.white}>
            SUBMIT
          </ButtonProp>
          {/* IF USER NOT AUTHENTICATED */}
      {/* <Message
            color={Colors.white}
            bg={Colors.black}
            size={18}
            children="Please 'Login' to write a Review"
          /> 
        </VStack>
      </Box> */}
    </Box>
  );
};

export default Review;
