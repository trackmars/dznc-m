import { ReactElement } from 'react';
import { Box, SimpleGrid, Text, Stack, Heading, Flex, Icon } from '@chakra-ui/react';
import {
    GiBackup,
    GiRobotGolem,
    GiMineExplosion,
    GiEnrage,
    GiSuicide
} from 'react-icons/gi';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, img }: FeatureProps) => {
  return (
    <Stack>
        <Flex
        w={16}
        h={16}
        align={'center'}
        alignSelf={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'#c100fd'}
        mb={1}>
        {img}
      </Flex>
      <Text fontWeight={600} color={'whiteAlpha.900'} >{title}</Text>
      <Text color={'whiteAlpha.600'} pb={2}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box pl={20} pr={20} mb={50}>
    <Stack>
        <Heading color={'white'} paddingBottom={'100px'} fontFamily={'Poppins, sans-serif'} className=" pattern-dots-md red text-pattern max-w-20pc overflow-visible">We also include many other feeds with our Killfeed: </Heading>
        </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
        img={<Icon color={'black'} as={GiBackup} w={10} h={10} />}
          title={'Player vs Player'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
        img={<Icon color={'black'} as={GiRobotGolem} w={10} h={10} />}
          title={'Player vs NPC'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
        img={<Icon color={'black'} as={GiMineExplosion} w={10} h={10} />}
          title={'Traps & Explosions'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
      <Box p={50} pl={{lg: 150, md: 150}} pr={{lg: 150, md: 150}}>
      <SimpleGrid columns={{ base: 1, md: 2}} spacing={10} pt={50}>
      <Feature
        img={<Icon color={'black'} as={GiEnrage} w={10} h={10} />}
          title={'Rage Quits & Combat Logs '}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
        img={<Icon color={'black'} as={GiSuicide} w={10} h={10} />}
          title={'Suicides'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
      </Box>
    </Box>
  );
}