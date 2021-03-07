import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    SimpleGrid,
    Box,
    Button,
    Image,
  } from '@chakra-ui/react';
import 'colors.css';
import React from 'react';
import 'tachyons';
import img1 from '../image-features/feature1.png';
import img2 from '../image-features/feature2.png';
import img3 from '../image-features/feature3.png';
import Section from '../layouts/Section';
import { motion } from "framer-motion";



const Hero1  = () => {
    return (
      <Section>
      <Container maxW={'full'} marginTop={'-3em'} marginBottom={'3em'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <motion.div layout animate={{scale: 0.9}} initial={{ scale: 0 }} transition={{ type: "spring",
          stiffness: 260,
          damping: 20, duration: 0.3 }}>
            <Heading
              fontWeight={600}
              color="white"
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              The <Text as={'span'} color={'red'}>DayZ</Text> KillFeed{' '}
              <Text as={'span'} color={'#bc6ff1'}>
                Dashboard
              </Text>
            </Heading>
          </motion.div>
          <Flex>
          <motion.div layout animate={{scale: 1}} initial={{ scale: 0 }} transition={{ type: "spring",
            stiffness: 260,
             damping: 20, duration: 5.5 }}>
          <SimpleGrid maxH={{lg: '30em', md: '20em', base: '100%'}} minChildWidth="200px" columns={{sm: 1, md: 3, lg: 3}} padding="40px" marginTop={'-4'} spacing={10}>
            <Box overflow="hidden" p={4}>
            <Text variant="h4" textColor="white" fontWeight={900} fontFamily="Arial" paddingBottom="10px">Kill/Death Streak Tracker</Text>
            <Image marginLeft={'auto'} marginRight={'auto'} height={{sm: '10em', md: '30%', lg: '30%'}}  w={'auto'} src={img1} alt="" className="shadow-3 ba b--purple"/>
            </Box>
            <Box overflow="hidden" p={4} >
            <Text variant="h4" textColor="white" fontWeight="900" fontFamily="Arial" paddingBottom="10px">Zone Detection</Text>
            <Image marginLeft={'auto'} marginRight={'auto'} height={{sm: '10em', md: '30%', lg: '30%'}} w={'auto'} src={img3} alt="" className="shadow-3 ba b--purple "/>
            </Box>
            <Box overflow="hidden" p={4}>
            <Text variant="h4" textColor="white" fontWeight="900" fontFamily="Arial" paddingBottom="10px">Bounty Tracker</Text>
            <Image marginLeft={'auto'} marginRight={'auto'} height={{sm: '10em', md: '30%', lg: '30%'}} w={'auto'} src={img2} alt="" className="shadow-3 ba b--purple"/>
            </Box>
          </SimpleGrid>
          </motion.div>
          </Flex>
          <Text marginTop={'5em'} color={'white'} fontSize={{base: '2xl', sm: '2xl', md: '3xl', lg:"2xl" }} fontFamily={"Oswald"}>
            Serving <Text as={"span"} fontWeight={'bold'}>568,332</Text> Members <br/>
            In <Text as={"span"} fontWeight={'bold'}>3,119</Text> Servers
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              colorScheme={'blue.900'}
              bg={'blue'}
              color={'whiteAlpha.900'}
              _hover={{ bg: 'blue.500' }}
              className="shadow-3">
              Join with Discord
            </Button>
          </Stack>
        </Stack>
      </Container>
      </Section>
    );
  }

  export default Hero1;
  