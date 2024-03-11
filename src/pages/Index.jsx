import React from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Grid, GridItem, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="container.xl" p={8}>
        <VStack spacing={6} align="center" justify="center" minH="60vh">
          <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center">
            Abode Roofing
          </Heading>
          <Text fontSize="xl" color={textColor} textAlign="center">
            Protecting Your Home, One Roof at a Time
          </Text>
          <Button colorScheme="blue" size="lg">
            Get a Free Estimate
          </Button>
        </VStack>
      </Container>

      {/* Services Section */}
      <Box bg={bgColor} py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center">
              Our Services
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem w="100%">
                <VStack spacing={4}>
                  <Image src="https://images.unsplash.com/photo-1583345237708-add35a664d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29mJTIwaW5zdGFsbGF0aW9ufGVufDB8fHx8MTcxMDE1MzI1M3ww&ixlib=rb-4.0.3&q=80&w=1080" />
                  <Text fontWeight="semibold">Roof Installation</Text>
                </VStack>
              </GridItem>
              <GridItem w="100%">
                <VStack spacing={4}>
                  <Image src="https://images.unsplash.com/photo-1632759145351-1d592919f522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29mJTIwcmVwYWlyfGVufDB8fHx8MTcxMDE1MzI1NHww&ixlib=rb-4.0.3&q=80&w=1080" />
                  <Text fontWeight="semibold">Roof Repair</Text>
                </VStack>
              </GridItem>
              <GridItem w="100%">
                <VStack spacing={4}>
                  <Image src="https://images.unsplash.com/photo-1508337323540-f5d861907573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29mJTIwaW5zcGVjdGlvbnxlbnwwfHx8fDE3MTAxNTMyNTR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
                  <Text fontWeight="semibold">Roof Inspection</Text>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={8}>
          <Heading as="h3" size="lg">
            Get In Touch
          </Heading>
          <HStack spacing={4}>
            <Button leftIcon={<Icon as={FaPhoneAlt} />} colorScheme="teal" variant="solid">
              Call Us
            </Button>
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="outline">
              Email Us
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Footer Section */}
      <Box bg={bgColor} p={6}>
        <Container maxW="container.xl">
          <HStack justifyContent="space-between">
            <Text>© 2023 Abode Roofing. All rights reserved.</Text>
            <HStack spacing={4}>
              <Icon as={FaInstagram} boxSize="6" />
              <Icon as={FaFacebookF} boxSize="6" />
              <Icon as={FaTwitter} boxSize="6" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
