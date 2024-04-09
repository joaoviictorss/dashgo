import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Victor</Text>
        <Text color={"gray.300"}>joao.viictorss31@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="João Victor"
        src="https://github.com/joaoviictorss.png"
      />
    </Flex>
  );
}
