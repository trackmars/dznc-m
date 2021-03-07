import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ChevronRightIcon } from '@chakra-ui/icons';
  import { ReactElement } from 'react';
  import killfeedimg from '../image-features/feature1.png';
  import 'tachyons';
  import './hero2.css';

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={3}
          h={3}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={400} fontFamily={'poppins, sans-serif'}fontSize={'1.8 rem'} color="whiteAlpha.800">{text}</Text>
      </Stack>
    );
  };
  
  export default function Hero2() {
    return (
      <Container bgColor={'#282e38!important;'} maxW={'full'} py={12} pl={{lg: '15em', md: '10em', sm: '1em'}} h={{base: '900px', md: '700px', lg: '550px'}} marginBottom={100} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} padding={{base: '4em'}}>
            <Heading color={'white'} fontFamily={'Poppins, sans-serif'} className=" pattern-dots-md red text-pattern max-w-20pc overflow-visible">Our Killfeed</Heading>
            <Text color={'whiteAlpha.900'} fontFamily={'Poppins, sans-serif'} fontSize={'lg'} className="">
            Our Killfeed will display every kill in the server. Showing:
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('black', 'white')}
                />
              }>
              <Feature
                icon={
                  <ChevronRightIcon color={'red.800'} w={35} h={35}/>
                }
                text={'Killer & Victim IGN’s'}
              />
             <Feature
                icon={
                  <ChevronRightIcon color={'red.800'} w={35} h={35}/>
                }
                text={'Killer & Victims KD'}
                color={"white"}
              />
              <Feature
                icon={
                  <ChevronRightIcon color={'red.800'} w={35} h={35}/>
                }
                text={'Location w/ link to IZurvive.com'}
                color={"black"}
              />
              <Feature
                icon={
                  <ChevronRightIcon color={'red.800'} w={35} h={35}/>
                }
                text={'Kill Rewards & Rob on Kill'}
                color={"black"}
              />
            </Stack>
          </Stack>
          <Flex>
          <Image
          marginLeft={'auto'} 
          marginRight={'auto'} height={{base: '50%', md: '35%', lg: '50%'}}  w={'auto'} src={killfeedimg} alt="" className="shadow-3 ba b--purple"/>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }